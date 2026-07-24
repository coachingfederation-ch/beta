/*
# Add article translation columns

1. Modified Tables
- `articles` — adds six new nullable text columns to store pre-translated
  content for the three non-source languages (German, French, Italian):
    - `title_de`, `title_fr`, `title_it`
    - `excerpt_de`, `excerpt_fr`, `excerpt_it`
    - `body_de`, `body_fr`, `body_it`
- All columns are nullable text. NULL means "not yet translated"; a non-null
  value is the finished translation that the public site displays directly.
- Adds `translation_hash` (text) to track whether the English source has
  changed since the last translation, so the editor can show "out of date".

2. Rationale
- Translations are now produced once in the CMS editor ("Translate now" button)
  and stored, instead of being re-generated on every page view by visitors.
- This fixes two problems: the body HTML was getting mangled by live
  per-visit translation, and the page re-translated on every refresh.

3. Security
- No RLS policy changes. Existing article policies already allow
  authenticated editors to update articles (which now includes these
  columns) and anon/visitors to read published articles (which now
  includes these columns).

4. Notes
- No data loss: all new columns are nullable additions. Existing rows
  simply have NULL translations until an editor clicks "Translate now".
*/

ALTER TABLE articles
  ADD COLUMN IF NOT EXISTS title_de text,
  ADD COLUMN IF NOT EXISTS title_fr text,
  ADD COLUMN IF NOT EXISTS title_it text,
  ADD COLUMN IF NOT EXISTS excerpt_de text,
  ADD COLUMN IF NOT EXISTS excerpt_fr text,
  ADD COLUMN IF NOT EXISTS excerpt_it text,
  ADD COLUMN IF NOT EXISTS body_de text,
  ADD COLUMN IF NOT EXISTS body_fr text,
  ADD COLUMN IF NOT EXISTS body_it text,
  ADD COLUMN IF NOT EXISTS translation_hash text;