# ICF Switzerland — Design System

The brand and UI system for the **ICF Switzerland Charter Chapter** — the Swiss chapter of the International Coaching Federation, the home of professional coaching in Switzerland (coachingfederation.ch).

This is a member association: it connects, develops and champions credentialed coaches across the country through a public coach directory, events and regional communities, membership, and credential/accreditation support (ACC · PCC · MCC).

## Sources provided
- **Logos** — `ICF_SwitzerlandCharterChapter_Vertical_RGB` in Positive, White, and Negative (vertical lockup: the `icf` wordmark over "Switzerland / Charter Chapter").
- **Typeface** — Plus Jakarta Sans, full weight range (ExtraLight 200 → ExtraBold 800, with italics).
- **Brand marks** — 30+ hand-drawn dry-brush ink doodles: highlight underlines, circles, arrows, stars, asterisks, squiggles, lines.
- No codebase, Figma, or slide template was supplied. Colors were sampled directly from the logo: **indigo `#2B379B`** and **cyan `#00ABC8`**.

---

## Content fundamentals
How ICF Switzerland writes.

- **Voice:** warm, professional, encouraging — a peer community, not a corporation. Coaching is about human growth, so copy stays human.
- **Person:** "we" for the chapter ("We connect, develop and champion…"), "you" for the coach or client ("Find your coach", "Grow with a community that gets coaching").
- **Tone:** confident and aspirational but never hype-y. Verbs of growth and connection: *grow, connect, belong, champion, elevate, develop.*
- **Casing:** sentence case for headings and buttons ("Become a member", "Find a credentialed coach"). UPPERCASE reserved for small overlines/eyebrows with wide tracking.
- **Length:** punchy headlines (one line ideally), one supporting sentence. Body copy is plain and concrete.
- **Credentials matter:** ACC / PCC / MCC, "ICF-credentialed", "ICF Code of Ethics" appear often and are written exactly. Swiss-multilingual context (DE/FR/IT/EN) — language toggle present, regions named (Zürich, Genève, Basel, Bern, Ticino, Lausanne).
- **No emoji.** Energy comes from the hand-drawn ink marks, not emoji.
- **Examples:** "The home of professional coaching in Switzerland." · "Coaching that meets the highest standards." · "Belong to Switzerland's coaching community."

---

## Visual foundations

**Color.** Two brand colors do the work: **indigo `#2B379B`** grounds (primary surfaces, headings, primary buttons) and **cyan `#00ABC8`** energizes (accents, the logo dot, highlights, secondary CTAs). White/near-white (`#F8F9FC`) is the canvas and gives generous breathing room. Neutrals are a cool grey ramp biased slightly toward indigo. Status colors (green/amber/red) exist but are used sparingly. Full 50–950 scales for both brand hues live in `tokens/colors.css`; prefer the semantic aliases (`--brand-primary`, `--text-strong`, `--surface-subtle`, …).

**Type.** Plus Jakarta Sans for everything — a geometric humanist sans that reads as modern, friendly and professional. Display/headings are **800 ExtraBold** with tight negative tracking (`-0.02em` to `-0.03em`); body is 400/500 at `line-height 1.6`. Overlines are 11px, 700, uppercase, `0.14em` tracking, in cyan. One typeface, wide weight range — no secondary serif.

**Backgrounds.** Clean and flat — solid white, subtle grey (`--surface-subtle`), or solid indigo for high-emphasis bands and CTAs. **No photographic hero washes, no gradients, no noise/grain.** Visual interest comes from the hand-drawn ink marks placed as accents (a circled word, a star in a corner, an underline beneath a key noun) and from bold color blocking.

**Hand-drawn marks** are the signature motif. Dry-brush black ink doodles used as human, energetic accents over the otherwise crisp geometric system. Use them *sparingly* — one or two per section — to circle, underline, point at, or sparkle near a key element. Recolor them to cyan or indigo with the `HandMark` component (a `tint` applied as a CSS filter over the black ink source). Don't overcrowd; they're seasoning.

**Corners & cards.** Generously rounded, geometric (echoing the rounded `icf` wordmark). Cards: white surface, 1px subtle border, soft indigo-tinted shadow (`--shadow-md`), `--radius-lg` (18px) corners. Pills (`--radius-pill`) for buttons, badges and tags. Indigo cards (white text) carry an indigo glow shadow.

**Elevation.** Soft, cool, indigo-tinted shadows (never neutral-black). Five-step scale plus two brand "glow" shadows (cyan, indigo) for floating brand elements. Cards lift `-4px` on hover.

**Borders.** 1–1.5px, neutral-200/300. Inputs use 1.5px borders that turn indigo on focus with a cyan focus ring (`--focus-ring`).

**Motion.** Calm and quick. `--dur-base` 200ms with `--ease-standard`; gentle hover lifts and color shifts. **No bounce, no springy overshoot.** Reduced, purposeful animation.

**States.** Hover = darker brand shade (primary→indigo-700, accent→cyan-500) or a soft indigo-50 wash on outline/ghost; cards lift. Press = subtle `translateY(1px)`. Focus = cyan ring.

**Transparency / blur.** Used in one place: the sticky header is white at 86% with `backdrop-filter: blur(14px)`. Otherwise surfaces are opaque.

**Layout.** Centered containers (`--container-xl` 1280px) with a fluid `--gutter`. 4px spacing grid. Sticky translucent header; indigo footer. Sections alternate white / subtle-grey / indigo for rhythm.

---

## Iconography

- **Brand marks (decorative):** the hand-drawn dry-brush ink doodles in `assets/marks/` are the brand's distinctive iconographic element — underlines, circles, arrows, stars, asterisks, squiggles. Use the **`HandMark`** component to place and recolor them. Source ink is black; set a `tint` (`cyan`/`indigo`/`white`/…) to recolor for brand use. These are accents, not UI controls.
- **Functional UI icons (substituted):** the brand ships **no** functional UI icon set (search, calendar, pin, chevrons, etc.). The UI kit substitutes **Lucide-style line icons** (humanist, rounded, 1.75 stroke) hand-built in `ui_kits/website/icons.jsx` (`window.Icons`) — they pair naturally with Plus Jakarta Sans. **⚠️ Substitution flagged:** if ICF Switzerland has an official UI icon set, drop it in and replace `icons.jsx`.
- **No emoji**, no unicode-glyph icons (one exception: a CSS chevron `▾` on the native Select).

---

## Index / manifest

**Root**
- `styles.css` — global entry point (consumers link this). `@import`s only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills-compatible front matter for use in Claude Code.

**`tokens/`** — `fonts.css` (Plus Jakarta @font-face), `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`.

**`assets/`** — `logos/` (positive, white, negative vertical lockups), `fonts/` (Plus Jakarta Sans .ttf), `marks/` (30+ hand-drawn ink SVGs).

**`guidelines/`** — foundation specimen cards (Type, Colors, Spacing, Brand) shown in the Design System tab.

**`components/`** — reusable React primitives:
- `buttons/` — `Button`, `IconButton`
- `data-display/` — `Badge`, `Tag`, `Avatar`
- `surfaces/` — `Card`
- `forms/` — `Input`, `Select`, `Checkbox`
- `brand/` — `HandMark` (recolorable ink marks)

**`ui_kits/website/`** — click-through recreation of coachingfederation.ch (Home, Find a coach, Events, Membership). See its `README.md`.

Components are exposed at runtime on `window.ICFSwitzerlandDesignSystem_725366`.
