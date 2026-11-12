# Glasparade-Static

Band website for [glasparade.co.za](https://glasparade.co.za). Built with
Vite + React + Tailwind and deployed to GitHub Pages by
`.github/workflows/main.yml` on every push to `main`.

## Updating content

**Not a coder?** Copy the prompt in [`update_prompt.md`](update_prompt.md) into
Claude Code (or another AI assistant) and add what you want changed at the bottom.

You should almost never need to touch components. Everything is in
`src/content/`:

| File          | What it controls                                              |
| ------------- | ------------------------------------------------------------- |
| `releases.ts` | Singles / EPs / albums, newest first. The first one is featured. |
| `videos.ts`   | Music videos (YouTube), newest first.                          |
| `site.ts`     | Tagline, hero image, bio, contact email, socials.              |

Images go in `src/assets/` (`covers/`, `photos/`, `logos/`) and are referenced
by path, e.g. `cover: "covers/absolusie.jpg"`. See `src/assets/README.md`.

Entries with `draft: true` are only visible when running locally
(`npm run dev`) and are left out of the live site — handy for preparing a
release before the links are live.

## Local development

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
```

## Structure

```
src/
  content/        ← edit these: releases, videos, band info
  assets/         ← images (covers, photos, logos)
  components/
    layout/       navigation (bottom tab bar on mobile, top bar on desktop), footer
    sections/     Hero, LatestRelease, Videos, Discography, About, Contact
    ui/           shared pieces: cover, platform buttons, lazy Spotify/YouTube players
  lib/            helpers (asset lookup, embed URL parsing, content selectors)
public/           files that need a fixed URL: favicon, og-image.jpg, platform icons
```
