/*
# Create Insights CMS tables — articles, categories, tags

A lightweight CMS for the Insights blog. Volunteers sign in with a
@coachingfederation.ch Google account, write articles in a rich editor,
and publish to the public blog. Articles auto-translate into DE/FR/IT
via the existing translation memory system.

## New Tables
1. `categories` — blog categories with slug and sort order
2. `tags` — blog tags with slug
3. `articles` — main blog post table with title, slug, excerpt, body (HTML),
   featured image, category, author, status (draft/published/scheduled),
   published_at, timestamps, and created_by
4. `article_tags` — many-to-many link table

## Security — RLS
- categories, tags: public read, authenticated write
- articles: public reads published only; authenticated reads all + full CRUD
- article_tags: public read, authenticated write

## Indexes on articles: slug, status, published_at, category_id
*/

CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  sort_order int NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS tags (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL DEFAULT '',
  body text NOT NULL DEFAULT '',
  featured_image_url text,
  featured_image_alt text,
  category_id uuid REFERENCES categories(id) ON DELETE SET NULL,
  author text NOT NULL DEFAULT 'ICF Switzerland',
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'scheduled')),
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS article_tags (
  article_id uuid NOT NULL REFERENCES articles(id) ON DELETE CASCADE,
  tag_id uuid NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (article_id, tag_id)
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE article_tags ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "read_categories" ON categories;
CREATE POLICY "read_categories" ON categories FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "insert_categories" ON categories;
CREATE POLICY "insert_categories" ON categories FOR INSERT TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "update_categories" ON categories;
CREATE POLICY "update_categories" ON categories FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "delete_categories" ON categories;
CREATE POLICY "delete_categories" ON categories FOR DELETE TO authenticated USING (true);

DROP POLICY IF EXISTS "read_tags" ON tags;
CREATE POLICY "read_tags" ON tags FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "insert_tags" ON tags;
CREATE POLICY "insert_tags" ON tags FOR INSERT TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "update_tags" ON tags;
CREATE POLICY "update_tags" ON tags FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "delete_tags" ON tags;
CREATE POLICY "delete_tags" ON tags FOR DELETE TO authenticated USING (true);

DROP POLICY IF EXISTS "read_published_articles" ON articles;
CREATE POLICY "read_published_articles" ON articles FOR SELECT TO anon, authenticated
  USING (status = 'published' OR auth.uid() IS NOT NULL);

DROP POLICY IF EXISTS "insert_articles" ON articles;
CREATE POLICY "insert_articles" ON articles FOR INSERT TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "update_articles" ON articles;
CREATE POLICY "update_articles" ON articles FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "delete_articles" ON articles;
CREATE POLICY "delete_articles" ON articles FOR DELETE TO authenticated USING (true);

DROP POLICY IF EXISTS "read_article_tags" ON article_tags;
CREATE POLICY "read_article_tags" ON article_tags FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "insert_article_tags" ON article_tags;
CREATE POLICY "insert_article_tags" ON article_tags FOR INSERT TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "update_article_tags" ON article_tags;
CREATE POLICY "update_article_tags" ON article_tags FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "delete_article_tags" ON article_tags;
CREATE POLICY "delete_article_tags" ON article_tags FOR DELETE TO authenticated USING (true);

CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug);
CREATE INDEX IF NOT EXISTS idx_articles_status ON articles(status);
CREATE INDEX IF NOT EXISTS idx_articles_published_at ON articles(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_articles_category_id ON articles(category_id);

INSERT INTO categories (name, slug, sort_order) VALUES
  ('Coaching insights', 'coaching-insights', 1),
  ('Chapter news', 'chapter-news', 2),
  ('Event recap', 'event-recap', 3),
  ('Research', 'research', 4),
  ('Member spotlight', 'member-spotlight', 5)
ON CONFLICT (name) DO NOTHING;