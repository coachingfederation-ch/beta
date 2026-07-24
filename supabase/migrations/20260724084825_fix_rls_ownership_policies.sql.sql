/*
# Fix RLS policies — scope writes to ownership, restrict storage listing

## Problem
All write policies on articles, article_tags, categories, and tags used
USING (true) / WITH CHECK (true), which allows any authenticated user
unrestricted access to all rows. The storage bucket SELECT policy also
allowed public listing of all files.

## Fix
1. Add `created_by` column to `categories` and `tags` (with DEFAULT
   auth.uid()) so ownership can be tracked, matching the articles table.
2. Rewrite all write policies to check `auth.uid() = created_by`.
   Existing rows with NULL created_by remain editable by any authenticated
   user (OR created_by IS NULL) so seeded categories and legacy articles
   are not locked out.
3. article_tags policies now scope through the parent article's ownership
   via an EXISTS subquery.
4. Storage SELECT policy restricted to authenticated only — the bucket
   is public so individual image URLs still work without auth; only
   listing is now gated.

## Columns added
- categories.created_by (uuid, references auth.users, DEFAULT auth.uid())
- tags.created_by (uuid, references auth.users, DEFAULT auth.uid())

## Security changes
- articles INSERT/UPDATE/DELETE: ownership-scoped (auth.uid() = created_by)
- article_tags INSERT/UPDATE/DELETE: scoped through parent article ownership
- categories INSERT/UPDATE/DELETE: ownership-scoped
- tags INSERT/UPDATE/DELETE: ownership-scoped
- storage.objects SELECT on article-images: authenticated only (was anon+authenticated)
*/

-- ── Add created_by to categories and tags ──
ALTER TABLE categories ADD COLUMN IF NOT EXISTS created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL DEFAULT auth.uid();
ALTER TABLE tags ADD COLUMN IF NOT EXISTS created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL DEFAULT auth.uid();

-- Ensure articles.created_by has a default too
ALTER TABLE articles ALTER COLUMN created_by SET DEFAULT auth.uid();

-- ── articles: scope writes to ownership ──
DROP POLICY IF EXISTS "insert_articles" ON articles;
CREATE POLICY "insert_articles" ON articles FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = created_by);

DROP POLICY IF EXISTS "update_articles" ON articles;
CREATE POLICY "update_articles" ON articles FOR UPDATE
  TO authenticated
  USING (auth.uid() = created_by OR created_by IS NULL)
  WITH CHECK (auth.uid() = created_by OR created_by IS NULL);

DROP POLICY IF EXISTS "delete_articles" ON articles;
CREATE POLICY "delete_articles" ON articles FOR DELETE
  TO authenticated USING (auth.uid() = created_by OR created_by IS NULL);

-- ── article_tags: scope through parent article ownership ──
DROP POLICY IF EXISTS "insert_article_tags" ON article_tags;
CREATE POLICY "insert_article_tags" ON article_tags FOR INSERT
  TO authenticated
  WITH CHECK (EXISTS (
    SELECT 1 FROM articles
    WHERE articles.id = article_tags.article_id
    AND (articles.created_by = auth.uid() OR articles.created_by IS NULL)
  ));

DROP POLICY IF EXISTS "update_article_tags" ON article_tags;
CREATE POLICY "update_article_tags" ON article_tags FOR UPDATE
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM articles
    WHERE articles.id = article_tags.article_id
    AND (articles.created_by = auth.uid() OR articles.created_by IS NULL)
  ))
  WITH CHECK (EXISTS (
    SELECT 1 FROM articles
    WHERE articles.id = article_tags.article_id
    AND (articles.created_by = auth.uid() OR articles.created_by IS NULL)
  ));

DROP POLICY IF EXISTS "delete_article_tags" ON article_tags;
CREATE POLICY "delete_article_tags" ON article_tags FOR DELETE
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM articles
    WHERE articles.id = article_tags.article_id
    AND (articles.created_by = auth.uid() OR articles.created_by IS NULL)
  ));

-- ── categories: scope writes to ownership ──
DROP POLICY IF EXISTS "insert_categories" ON categories;
CREATE POLICY "insert_categories" ON categories FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = created_by);

DROP POLICY IF EXISTS "update_categories" ON categories;
CREATE POLICY "update_categories" ON categories FOR UPDATE
  TO authenticated
  USING (auth.uid() = created_by OR created_by IS NULL)
  WITH CHECK (auth.uid() = created_by OR created_by IS NULL);

DROP POLICY IF EXISTS "delete_categories" ON categories;
CREATE POLICY "delete_categories" ON categories FOR DELETE
  TO authenticated USING (auth.uid() = created_by OR created_by IS NULL);

-- ── tags: scope writes to ownership ──
DROP POLICY IF EXISTS "insert_tags" ON tags;
CREATE POLICY "insert_tags" ON tags FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = created_by);

DROP POLICY IF EXISTS "update_tags" ON tags;
CREATE POLICY "update_tags" ON tags FOR UPDATE
  TO authenticated
  USING (auth.uid() = created_by OR created_by IS NULL)
  WITH CHECK (auth.uid() = created_by OR created_by IS NULL);

DROP POLICY IF EXISTS "delete_tags" ON tags;
CREATE POLICY "delete_tags" ON tags FOR DELETE
  TO authenticated USING (auth.uid() = created_by OR created_by IS NULL);

-- ── Storage: restrict listing to authenticated only ──
-- The bucket is public=true, so individual image URLs work without auth.
-- This policy only controls listing (GET /list), which editors need.
DROP POLICY IF EXISTS "read_article_images" ON storage.objects;
CREATE POLICY "read_article_images" ON storage.objects FOR SELECT
  TO authenticated
  USING (bucket_id = 'article-images');