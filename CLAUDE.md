# ICF Switzerland Website — Project Knowledge File

## Overview

Public website for ICF Switzerland Charter Chapter (International Coaching Federation). A multi-page site with a coach directory, organisational coaching offerings, a blog (Insights) with a custom CMS, events, and a coaching culture assessment survey. Built with Vite + vanilla ES modules, backed by Supabase.

## Tech Stack

- **Build**: Vite 5, vanilla JavaScript (ES modules, no React/framework on the public site)
- **Backend**: Supabase (Postgres, Auth, Edge Functions, Storage)
- **Fonts**: Plus Jakarta Sans (self-hosted TTFs in `assets/fonts/`)
- **Design system**: ICF Switzerland design system (React components exist in `ICF Website/_ds/` but the site uses CSS tokens directly from `css/tokens.css`)

## Page Structure

Multi-page HTML — each page is a standalone `.html` file at the project root. Vite is configured with explicit entry points in `vite.config.js`:

| Page | Purpose |
|------|---------|
| `index.html` | Homepage |
| `find-a-coach.html` | Coach/mentor/supervisor directory with filtering |
| `for-organisations.html` | Org offerings + coaching culture assessment survey |
| `for-coaches.html` | Membership info for coaches |
| `insights.html` | Blog listing with category/tag filters |
| `article.html` | Individual blog article view |
| `events.html` | Events listing |
| `about.html` | About the chapter |
| `cms.html` | Insights CMS (Google OAuth gated to `@coachingfederation.ch`) |

## File Organization

```
css/
  tokens.css    — design tokens (colors, typography, spacing, effects) — mirrors the design system
  fonts.css     — @font-face declarations for Plus Jakarta Sans
  site.css      — all public site styles (appended section by section)
  cms.css       — CMS-specific styles
js/
  supabase-client.js  — Supabase singleton + shared constants (REGIONS, SPECIALTIES, LANGUAGES, CREDENTIALS) + fetchCoaches()
  layout.js           — shared header/footer rendering; mountLayout(activePage) called on every page
  i18n.js             — 4-language i18n system (en source + de/fr/it)
  site-strings.js     — central registry of all translatable static UI strings
  org-survey.js       — coaching culture assessment survey (saves to Supabase)
  insights.js         — blog listing page logic
  article.js          — individual article page logic
  cms-app.js          — full CMS application (~1200 lines: articles list, editor, taxonomy, site translations)
  cms-auth.js          — Google OAuth for CMS, domain-restricted
  cms-data.js         — CMS data access layer (CRUD for articles, categories, tags, image uploads)
supabase/
  functions/translate/index.ts  — Edge function: AI translation via OpenRouter, caches to DB
  migrations/                   — 9 SQL migrations (see Database section)
assets/
  fonts/   — Plus Jakarta Sans TTFs (14 weights)
  logos/   — ICF Switzerland logo PNGs (positive/negative/white variants)
  marks/   — Hand-drawn SVG ink marks (brand decoration)
public/assets/logos/ — logos copied to dist
```

## Design System

**Brand**: Indigo `#2B379B` (`--brand-primary` / `--icf-indigo-600`) + Cyan `#00ABC8` (`--brand-accent` / `--icf-cyan-600`).

**Key tokens** (all in `css/tokens.css`):
- Colors: `--icf-indigo-{50..950}`, `--icf-cyan-{50..900}`, `--neutral-{50..950}`, status colors
- Text: `--text-strong` (#161B5C), `--text-body` (#24263F), `--text-muted` (#6F7188)
- Surfaces: `--surface-page`, `--surface-subtle`, `--surface-indigo-deep`
- Typography: `--fs-display-2xl` (80px) → `--fs-caption` (12px), weights `--fw-extralight` (200) → `--fw-extrabold` (800)
- Spacing: `--space-0` through `--space-32` (4px grid)
- Radii: `--radius-sm` (8px) → `--radius-pill` (999px, brand signature)
- Shadows: `--shadow-xs` → `--shadow-xl`, plus `--shadow-cyan` and `--shadow-indigo`
- `.icf-overline` utility class for eyebrow labels (11px, 700 weight, 0.14em tracking, uppercase)

**Convention**: Always use CSS custom properties from `tokens.css` — never hardcode raw color/spacing/size values. Use `var(--token-name)` in all styles.

## Shared Layout Pattern

Every page follows this pattern:
```html
<div id="header-slot"></div>
<!-- page content -->
<div id="footer-slot"></div>
<script type="module">
  import { mountLayout } from './js/layout.js';
  mountLayout('Page Name');  // sets active nav state
</script>
```

Header includes: logo, nav links (Find a Coach, For Organisations, For Coaches, Insights, Events, About), language switcher (EN/DE/FR/IT), search icon, Member Login, Join button, mobile nav toggle.

Footer includes: logo, social links (LinkedIn, Instagram, YouTube), 4-column nav, language footer switcher, legal links.

## i18n System

- **4 languages**: `en` (source), `de`, `fr`, `it`
- **How it works**: HTML elements with `data-i18n` attribute are collected at page load. On language switch, the system looks up pre-translated strings from the `translations` table in Supabase (pure DB query, no live API calls). Falls back to English if no translation exists.
- **Translation production**: The CMS "Site Translations" view and article editor call the `translate` edge function, which uses OpenRouter (gpt-4o-mini) to translate and caches results in the `translations` table.
- **Key functions**: `initI18n()` (called by `mountLayout`), `setLanguage(lang)`, `applyTranslations(lang)`, `translateStrings(texts, source, target)`
- **Storage**: Language preference saved in `localStorage` under key `icf-lang`
- **String registry**: `js/site-strings.js` exports `SITE_STRINGS` array — all translatable static UI strings

## Database Schema

### Tables

| Table | Purpose | RLS |
|-------|---------|-----|
| `coaches` | Coach directory (name, city, credential, languages[], specialties[], bio, available, service_type) | Public read/write (anon+authenticated) |
| `coaching_culture_surveys` | Survey responses (org info, respondent info, scores, answers JSONB, contact_consent) | Public INSERT, authenticated-only SELECT |
| `translations` | Translation memory (source_lang, target_lang, source_text, target_text, text_hash) | Public read, service-role-only write |
| `app_config` | Key/value settings store | Public read, service-role-only write |
| `categories` | Blog categories (name, slug, sort_order, created_by) | Public read, authenticated write (ownership-scoped) |
| `tags` | Blog tags (name, slug, created_by) | Public read, authenticated write (ownership-scoped) |
| `articles` | Blog posts (title, slug, excerpt, body, featured_image_url, category_id, author, status, published_at, created_by) | Public reads published only; authenticated reads all + CRUD (ownership-scoped) |
| `article_tags` | Many-to-many article↔tag | Public read, authenticated write (scoped through parent article ownership) |

### Migrations (in `supabase/migrations/`)

1. `20260723213013_create_coaches_table.sql` — coach directory
2. `20260723221147_remove_unrestricted_write_policies.sql` — tightens coach write policies
3. `20260724061654_*_create_translation_memory.sql` — translations + app_config tables
4. `20260724061711_*_add_coach_source_language.sql` — adds source_language column to coaches
5. `20260724080420_*_create_insights_cms_tables.sql` — articles, categories, tags, article_tags
6. `20260724080441_*_create_article_images_storage_policies.sql` — Storage bucket policies for article images
7. `20260724084825_*_fix_rls_ownership_policies.sql` — scopes CMS writes to `created_by` ownership
8. `20260724085922_*_add_article_translation_columns.sql` — adds translation columns to articles
9. `20260724115211_create_coaching_culture_surveys.sql` — survey responses table

**Important**: Migrations on disk are for reference only. Schema changes must be applied via the `mcp__supabase__apply_migration` MCP tool. Never use the Supabase CLI.

## Auth

- **Public site**: No auth. Uses Supabase anon key. All public-facing tables have `TO anon, authenticated` policies.
- **CMS**: Google OAuth via Supabase Auth, restricted to `@coachingfederation.ch` domain (enforced in `cms-auth.js`). Authenticated editors get ownership-scoped CRUD via `created_by` column (defaults to `auth.uid()`).
- **No sign-up UI**: CMS access is invite-only via Google OAuth with domain restriction.

## Edge Functions

### `translate` (`supabase/functions/translate/index.ts`)
- Accepts `{ source_lang, target_lang, texts[] }`
- Checks `translations` table for cached results first
- Translates uncached texts via OpenRouter API (`openai/gpt-4o-mini`)
- Caches new translations to `translations` table with SHA-256 hash
- Preserves brand names (ICF, ACC, PCC, MCC) and Swiss place names untranslated
- Requires `OPENROUTER_API_KEY` secret (configured in Supabase)
- Standard CORS headers on all responses

## Coaching Culture Survey (`for-organisations.html` + `js/org-survey.js`)

- 8 questions across 4 dimensions: Leadership Engagement, Coaching Capability, Culture & Mindset, Measurement & Impact
- 5-point scale per question (Not yet present → Embedded)
- Auto-saves anonymous response to `coaching_culture_surveys` on completion
- Shows maturity score (0-40) with label (Starting Out → Coaching Maturity)
- Optional contact form at the end: organisation name, person name, email, role, consent checkbox
- Contact submissions save with `contact_consent: true` and respondent details
- Replaces the former Bubble micro-site at `micro.coachingfederation.ch`

## CMS (`cms.html` + `js/cms-app.js`)

Full article management system for ICF Switzerland volunteers:
- Google OAuth sign-in (domain-restricted to `@coachingfederation.ch`)
- Article list with search, status filters (all/published/draft/scheduled)
- Rich text editor with auto-save, slug generation, category/tag assignment
- Featured image upload to Supabase Storage (`article-images` bucket)
- Auto-translation of article content into DE/FR/IT via edge function
- Translation status indicators per language
- Taxonomy management (categories + tags)
- Site Translations view for pre-translating static UI strings

## Build & Development

```bash
npm install      # install deps
npm run dev      # dev server (Vite, port 5173)
npm run build    # production build → dist/
npm run preview  # preview production build
```

**Vite config** (`vite.config.js`): 9 explicit HTML entry points, `base: './'` for relative paths, `optimizeDeps.exclude: ['@electric-sql/pglite']`.

## Environment

Supabase credentials are pre-populated in `.env`:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (server/edge function only — never expose in frontend)
- `SUPABASE_DB_URL`

Edge function secret: `OPENROUTER_API_KEY` (configured via Supabase, not in `.env`).

## Conventions

- **Styling**: Always use `var(--token)` from `tokens.css`. Never hardcode hex values, px sizes, or spacing. Use `.icf-overline` for eyebrow labels.
- **HTML**: Each page includes `css/fonts.css`, `css/tokens.css`, `css/site.css` in that order. CMS page adds `css/cms.css`.
- **JS**: ES modules, no build-time transpilation beyond Vite. Import Supabase from `./js/supabase-client.js`.
- **i18n**: Add `data-i18n` attribute to any element with translatable text. Register new static strings in `js/site-strings.js`.
- **Database**: Always use `apply_migration` MCP tool for schema changes. Always enable RLS. Use `TO anon, authenticated` for public tables, `TO authenticated` with ownership checks for CMS tables.
- **Images**: Use generated images or Pexels stock photos (via URL), not local stock files. Hand-drawn SVG marks in `assets/marks/` for brand decoration.
- **No comments**: Only add comments for non-obvious WHY (constraints, workarounds). Never comment WHAT the code does.
