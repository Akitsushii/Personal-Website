# ela.dev

A personal site built with SvelteKit, Tailwind CSS 4, and mdsvex — styled after
[deltea/pw](https://github.com/deltea/pw), with a retro terminal / smart-card
themed look.

## Getting started

```bash
npm install
npm run dev -- --open
```

## What's here

- **Home** (`/`) — terminal-boot hero + latest post teaser
- **About** (`/about`) — bio + stack
- **Projects** (`/projects`) — data-driven from `src/lib/projects.ts`
- **Blog** (`/blog`) — markdown posts in `src/lib/posts/*.md`, powered by mdsvex

## Things to replace before you ship it

- `src/lib/projects.ts` — swap in your real projects
- `src/lib/posts/*.md` — replace or delete the two sample posts
- `src/lib/components/Footer.svelte` — swap in your real social links
- `src/routes/+page.svelte` and `src/routes/about/+page.svelte` — the bio text
- `src/app.html` / page `<title>` tags — currently say "Ela", change to your name

## Design tokens

Colors, fonts, and the grid/blink utilities all live in `src/routes/layout.css`
under the `@theme` block — change a value there and it updates everywhere.

## Deploying

This uses `@sveltejs/adapter-auto`, which auto-detects Vercel, Netlify,
Cloudflare, etc. at build time. See the [SvelteKit adapter docs](https://svelte.dev/docs/kit/adapters)
if you want to lock in a specific one.
