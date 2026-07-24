/*
# Storage policies for article images bucket

The `article-images` bucket is public (readable by everyone without auth).
Only authenticated editors can upload, update, or delete images.
*/

DROP POLICY IF EXISTS "read_article_images" ON storage.objects;
CREATE POLICY "read_article_images" ON storage.objects FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'article-images');

DROP POLICY IF EXISTS "insert_article_images" ON storage.objects;
CREATE POLICY "insert_article_images" ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'article-images');

DROP POLICY IF EXISTS "update_article_images" ON storage.objects;
CREATE POLICY "update_article_images" ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'article-images');

DROP POLICY IF EXISTS "delete_article_images" ON storage.objects;
CREATE POLICY "delete_article_images" ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'article-images');