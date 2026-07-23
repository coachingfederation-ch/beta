/*
# Create coaches table for the ICF Switzerland coach directory

1. New Tables
- `coaches`
- `id` (uuid, primary key)
- `name` (text, not null) — coach's full name
- `city` (text, not null) — Swiss city / region they practice in
- `credential` (text, not null) — ICF credential level: 'ACC', 'PCC', or 'MCC'
- `languages` (text[], not null, default '{}') — languages the coach works in (e.g. ['DE','FR','EN'])
- `specialties` (text[], not null, default '{}') — coaching focus areas (e.g. ['Leadership','Executive'])
- `bio` (text, not null) — short biography shown on the directory card
- `available` (boolean, not null, default true) — whether the coach is accepting new clients
- `service_type` (text, not null, default 'coach') — directory tab: 'coach', 'mentor', or 'supervisor'
- `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `coaches`.
- Allow anon + authenticated to read (public directory, no sign-in).
- Allow anon + authenticated to insert, update, delete (admin editing without auth for now).
3. Indexes
- Index on `service_type` for fast tab filtering.
- Index on `credential` for fast credential filtering.
*/

CREATE TABLE IF NOT EXISTS coaches (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  city text NOT NULL,
  credential text NOT NULL CHECK (credential IN ('ACC', 'PCC', 'MCC')),
  languages text[] NOT NULL DEFAULT '{}',
  specialties text[] NOT NULL DEFAULT '{}',
  bio text NOT NULL,
  available boolean NOT NULL DEFAULT true,
  service_type text NOT NULL DEFAULT 'coach' CHECK (service_type IN ('coach', 'mentor', 'supervisor')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE coaches ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_coaches" ON coaches;
CREATE POLICY "anon_select_coaches" ON coaches FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_coaches" ON coaches;
CREATE POLICY "anon_insert_coaches" ON coaches FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_coaches" ON coaches;
CREATE POLICY "anon_update_coaches" ON coaches FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_coaches" ON coaches;
CREATE POLICY "anon_delete_coaches" ON coaches FOR DELETE
  TO anon, authenticated USING (true);

CREATE INDEX IF NOT EXISTS idx_coaches_service_type ON coaches(service_type);
CREATE INDEX IF NOT EXISTS idx_coaches_credential ON coaches(credential);
