/*
# Create translation memory system

## Purpose
Stores cached translations produced by the translate edge function so that each
piece of source text is translated only once per target language. After the first
translation, switching languages on the website is instant and costs nothing.

## New Tables
1. `translations` — the memory bank
   - `id` (uuid, primary key)
   - `source_lang` (text, not null) — language the source text is written in
     ('en', 'de', 'fr', 'it'). Stored as lowercase ISO codes.
   - `target_lang` (text, not null) — language the text was translated into.
   - `source_text` (text, not null) — the original text in the source language.
   - `target_text` (text, not null) — the translated text.
   - `text_hash` (text, not null) — sha256 hex of (source_lang|target_lang|source_text),
     used as a fast lookup key and to deduplicate.
   - `created_at` (timestamptz, default now())
   - Unique constraint on (source_lang, target_lang, source_text) so the same
     text+language pair is never stored twice.

2. `app_config` — generic key/value store for app settings (e.g. which model to
   use for translation, feature flags). Kept separate from translations so it can
   grow independently.
   - `id` (uuid, primary key)
   - `key` (text, unique, not null)
   - `value` (jsonb, not null, default '{}')
   - `updated_at` (timestamptz, default now())

## Security — RLS
- `translations`: READ-only for everyone (anon + authenticated) so the website
  can fetch cached translations instantly. ONLY the service role (used by the
  edge function, which bypasses RLS) can INSERT/UPDATE. No public writes — this
  prevents anyone from injecting fake translations. (The service role bypasses
  RLS, so we simply do not create INSERT/UPDATE/DELETE policies for public roles.)
- `app_config`: READ-only for everyone (anon + authenticated). Only the service
  role can write. The frontend uses this to read the active translation model.

## Indexes
- `idx_translations_text_hash` on `text_hash` for fast cache lookups.
- `idx_translations_lang_pair` on (source_lang, target_lang) for batch queries.
*/

CREATE TABLE IF NOT EXISTS translations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  source_lang text NOT NULL CHECK (source_lang IN ('en', 'de', 'fr', 'it')),
  target_lang text NOT NULL CHECK (target_lang IN ('en', 'de', 'fr', 'it')),
  source_text text NOT NULL,
  target_text text NOT NULL,
  text_hash text NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE (source_lang, target_lang, source_text)
);

ALTER TABLE translations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_translations" ON translations;
CREATE POLICY "anon_select_translations" ON translations FOR SELECT
  TO anon, authenticated USING (true);

CREATE INDEX IF NOT EXISTS idx_translations_text_hash ON translations(text_hash);
CREATE INDEX IF NOT EXISTS idx_translations_lang_pair ON translations(source_lang, target_lang);

CREATE TABLE IF NOT EXISTS app_config (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text UNIQUE NOT NULL,
  value jsonb NOT NULL DEFAULT '{}'::jsonb,
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE app_config ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_app_config" ON app_config;
CREATE POLICY "anon_select_app_config" ON app_config FOR SELECT
  TO anon, authenticated USING (true);

-- Seed default translation model setting (used by the edge function as a fallback
-- if the OPENROUTER_MODEL secret is not set).
INSERT INTO app_config (key, value)
VALUES ('translation_model', '"openai/gpt-4o-mini"'::jsonb)
ON CONFLICT (key) DO NOTHING;
