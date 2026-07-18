# Deal Shield — Marketing Site

Next.js (App Router) + TypeScript + Tailwind v4 + Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

## Brand tokens
Defined in `src/app/globals.css`:
- `--navy` #111828 — dark base (hero + footer)
- `--off-white` #F9FAFC — light base (everything else)
- `--brand-green` #23C55E — primary accent / CTAs
- `--brand-green-mid` #166535, `--brand-green-deep` #15532E — hover/deep states

## Font
Currently using **Plus Jakarta Sans** (free, geometric, close to Gotham's
weight/feel) as a placeholder — set in `src/app/layout.tsx`.

Once you have a Gotham web license, replace the `Plus Jakarta Sans` import
with a self-hosted `@font-face` for Gotham, but keep the CSS variable name
`--font-general-sans` the same so no other file needs to change.

## Structure
- `src/components/header.tsx`, `footer.tsx` — shared chrome
- `src/components/sections/*` — homepage sections (hero, how-it-works,
  features, security, cta)
- `src/app/page.tsx` — composes the homepage
- Add more routes as folders under `src/app/` (e.g. `src/app/pricing/page.tsx`)

## Still to build
- `/how-it-works`, `/features`, `/security`, `/pricing`, `/faq`, `/about`
- `/legal/terms`, `/legal/privacy`
- `/login`, `/signup`
- Logo SVG (currently a placeholder shield icon in Header/Footer — swap in
  the real Deal Shield logo asset)
