# Images

Drop images here and reference them from `src/content/*.ts` by their path
relative to this folder, e.g. `"covers/absolusie.jpg"`. Vite fingerprints and
bundles them automatically — no imports needed.

| Folder    | What goes in it                                  | Tips                                  |
| --------- | ------------------------------------------------ | ------------------------------------- |
| `covers/` | Release artwork (`releases.ts` → `cover`)        | Square, ~1000×1000, jpg or webp       |
| `photos/` | Hero, about and custom video thumbnails          | Hero: square or portrait, ≥1200px     |
| `logos/`  | Logos / wordmarks                                |                                       |

A missing image shows a placeholder and logs a warning in the browser console
while running `npm run dev`.

Files that must keep a fixed URL (favicon, social share image, platform icons)
live in `public/` instead.
