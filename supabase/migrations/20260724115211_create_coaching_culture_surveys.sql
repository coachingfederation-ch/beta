/*
# Create coaching culture assessment survey responses table

1. New Tables
- `coaching_culture_surveys`
  - `id` (uuid, primary key)
  - `organisation_name` (text, optional — organisation being assessed)
  - `respondent_name` (text, optional — person taking the survey)
  - `respondent_email` (text, optional — for ICF follow-up)
  - `respondent_role` (text, optional — e.g. HR Director, L&D Manager)
  - `total_score` (integer, not null — sum of all answers, 8-40)
  - `maturity_label` (text, not null — e.g. "Taking Shape", "Well Established")
  - `dimension_scores` (jsonb, not null — per-dimension averages: {leadership, capability, culture, measurement})
  - `answers` (jsonb, not null — raw answers array: [{questionId, dimension, value}])
  - `contact_consent` (boolean, default false — whether respondent agreed to be contacted)
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `coaching_culture_surveys`.
- This is a no-auth public survey: anyone can submit a response.
- INSERT: anon + authenticated can insert (public survey submission).
- SELECT: only authenticated can read (ICF admins review responses — not public).
- No UPDATE or DELETE from the frontend.

3. Important Notes
- Respondent email/name/role are OPTIONAL — the survey works anonymously too.
- contact_consent defaults to false; only true when the user explicitly opts in.
- The anon-key frontend can INSERT but cannot SELECT — responses are private to ICF admins.
*/

CREATE TABLE IF NOT EXISTS coaching_culture_surveys (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organisation_name text,
  respondent_name text,
  respondent_email text,
  respondent_role text,
  total_score integer NOT NULL,
  maturity_label text NOT NULL,
  dimension_scores jsonb NOT NULL,
  answers jsonb NOT NULL,
  contact_consent boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE coaching_culture_surveys ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_survey" ON coaching_culture_surveys;
CREATE POLICY "anon_insert_survey"
ON coaching_culture_surveys FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_read_surveys" ON coaching_culture_surveys;
CREATE POLICY "auth_read_surveys"
ON coaching_culture_surveys FOR SELECT
TO authenticated USING (true);
