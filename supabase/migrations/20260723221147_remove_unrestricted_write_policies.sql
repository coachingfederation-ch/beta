/*
# Remove unrestricted write policies from coaches table

## Context
The coaches table is a public directory — the website only needs to READ from it.
The original migration created INSERT, UPDATE, and DELETE policies with always-true
predicates (USING(true) / WITH CHECK(true)) for both anon and authenticated roles.
This means anyone on the internet could insert, modify, or delete coach records,
bypassing row-level security entirely.

## Changes
1. Security — drop the three write policies:
   - `anon_insert_coaches` (INSERT, WITH CHECK(true))
   - `anon_update_coaches` (UPDATE, USING(true) WITH CHECK(true))
   - `anon_delete_coaches` (DELETE, USING(true))
   After dropping these, RLS blocks all writes from the anon and authenticated
   roles. Only the service role (used by the Supabase dashboard / admin tools)
   can insert, update, and delete coaches — the service role bypasses RLS.
2. The SELECT policy (`anon_select_coaches`) is intentionally left as-is.
   The directory is public by design — anyone can browse coaches.
## Important notes
- Coach data is still fully manageable through the Supabase dashboard (service role).
- The website's Find a Coach page continues to read coaches normally.
- If an admin-facing UI is added later, it should require authentication and
  use authenticated-scoped write policies rather than reopening anon writes.
*/

DROP POLICY IF EXISTS "anon_insert_coaches" ON coaches;
DROP POLICY IF EXISTS "anon_update_coaches" ON coaches;
DROP POLICY IF EXISTS "anon_delete_coaches" ON coaches;
