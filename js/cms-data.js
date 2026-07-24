import { supabase } from './supabase-client.js';

export function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export async function fetchCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('sort_order', { ascending: true });
  if (error) throw error;
  return data || [];
}

export async function fetchTags() {
  const { data, error } = await supabase
    .from('tags')
    .select('*')
    .order('name', { ascending: true });
  if (error) throw error;
  return data || [];
}

export async function fetchArticles() {
  const { data, error } = await supabase
    .from('articles')
    .select('*, category:categories(name, slug)')
    .order('updated_at', { ascending: false });
  if (error) throw error;
  return data || [];
}

export async function fetchArticleById(id) {
  const { data, error } = await supabase
    .from('articles')
    .select('*, category:categories(id, name, slug)')
    .eq('id', id)
    .maybeSingle();
  if (error) throw error;
  return data;
}

export async function fetchArticleBySlug(slug) {
  const { data, error } = await supabase
    .from('articles')
    .select('*, category:categories(id, name, slug)')
    .eq('slug', slug)
    .maybeSingle();
  if (error) throw error;
  return data;
}

export async function fetchArticleTags(articleId) {
  const { data, error } = await supabase
    .from('article_tags')
    .select('tag_id, tag:tags(id, name, slug)')
    .eq('article_id', articleId);
  if (error) throw error;
  return (data || []).map((r) => r.tag).filter(Boolean);
}

export async function fetchPublishedArticles() {
  const { data, error } = await supabase
    .from('articles')
    .select('id, title, slug, excerpt, featured_image_url, featured_image_alt, author, published_at, category:categories(name, slug)')
    .eq('status', 'published')
    .order('published_at', { ascending: false, nullsFirst: false });
  if (error) throw error;
  return data || [];
}

export async function fetchPublishedArticleBySlug(slug) {
  const { data, error } = await supabase
    .from('articles')
    .select('*, category:categories(id, name, slug)')
    .eq('slug', slug)
    .eq('status', 'published')
    .maybeSingle();
  if (error) throw error;
  return data;
}

export async function fetchRelatedArticles(articleId, categoryId, limit = 3) {
  let query = supabase
    .from('articles')
    .select('id, title, slug, excerpt, featured_image_url, featured_image_alt, author, published_at, category:categories(name, slug)')
    .eq('status', 'published')
    .neq('id', articleId)
    .order('published_at', { ascending: false, nullsFirst: false })
    .limit(limit);

  if (categoryId) {
    query = query.eq('category_id', categoryId);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data || [];
}

export async function createArticle(editorId) {
  const now = new Date().toISOString();
  const baseSlug = `draft-${Date.now()}`;
  const { data, error } = await supabase
    .from('articles')
    .insert({
      title: 'Untitled article',
      slug: baseSlug,
      excerpt: '',
      body: '',
      author: 'ICF Switzerland',
      status: 'draft',
      created_by: editorId,
      updated_at: now,
    })
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function updateArticle(id, updates) {
  const { data, error } = await supabase
    .from('articles')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select('*, category:categories(id, name, slug)')
    .single();
  if (error) throw error;
  return data;
}

export async function deleteArticle(id) {
  const { error } = await supabase
    .from('articles')
    .delete()
    .eq('id', id);
  if (error) throw error;
}

export async function setArticleTags(articleId, tagIds) {
  await supabase.from('article_tags').delete().eq('article_id', articleId);
  if (tagIds.length === 0) return;
  const rows = tagIds.map((tag_id) => ({ article_id: articleId, tag_id }));
  const { error } = await supabase.from('article_tags').insert(rows);
  if (error) throw error;
}

export async function createCategory(name) {
  const slug = slugify(name);
  const { data, error } = await supabase
    .from('categories')
    .insert({ name, slug })
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function deleteCategory(id) {
  const { error } = await supabase.from('categories').delete().eq('id', id);
  if (error) throw error;
}

export async function createTag(name) {
  const slug = slugify(name);
  const { data, error } = await supabase
    .from('tags')
    .insert({ name, slug })
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function deleteTag(id) {
  const { error } = await supabase.from('tags').delete().eq('id', id);
  if (error) throw error;
}

export async function getCategoryCounts() {
  const { data, error } = await supabase
    .from('articles')
    .select('category_id')
    .not('category_id', 'is', null);
  if (error) throw error;
  const counts = {};
  for (const row of data || []) {
    counts[row.category_id] = (counts[row.category_id] || 0) + 1;
  }
  return counts;
}

export async function getTagCounts() {
  const { data, error } = await supabase
    .from('article_tags')
    .select('tag_id');
  if (error) throw error;
  const counts = {};
  for (const row of data || []) {
    counts[row.tag_id] = (counts[row.tag_id] || 0) + 1;
  }
  return counts;
}

export async function uploadArticleImage(file) {
  const ext = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const { error: uploadError } = await supabase.storage
    .from('article-images')
    .upload(fileName, file, { cacheControl: '3600', upsert: false });
  if (uploadError) throw uploadError;
  const { data: urlData } = supabase.storage
    .from('article-images')
    .getPublicUrl(fileName);
  return urlData.publicUrl;
}
