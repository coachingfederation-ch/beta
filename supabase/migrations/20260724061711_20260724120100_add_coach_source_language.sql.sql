/*
# Add source_language to coaches

## Context
Coach biographies are written by the coaches themselves and may be in any of the
four site languages (English, German, French, Italian) — not always English.
The translation system needs to know each bio's original language so it can:
  - show the bio as-is when the visitor's chosen language matches the bio's
    source language (no translation needed), and
  - translate from the correct source language when it doesn't match.

## Changes
1. Add column `source_language` to `coaches`:
   - type text, NOT NULL, DEFAULT 'en'
   - CHECK constraint limits to ('en', 'de', 'fr', 'it')
   - Existing rows (if any) default to 'en' since the directory was authored in
     English up to now.
2. No RLS changes — the coaches SELECT policy stays as-is (public read).
## Important notes
- This is a non-destructive ADD COLUMN; no existing data is lost.
- Coaches added later via the dashboard should set source_language to whichever
  language the bio is written in.
*/

ALTER TABLE coaches
  ADD COLUMN IF NOT EXISTS source_language text NOT NULL DEFAULT 'en'
  CHECK (source_language IN ('en', 'de', 'fr', 'it'));
