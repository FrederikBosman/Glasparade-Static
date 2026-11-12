# Update prompt — Glasparade website

**How to use:** copy everything below the line into Claude Code (or another AI
coding assistant) opened in this repo. Add what you want changed at the bottom,
e.g. *"We released a new single called X"* or *"Add our new music video:
https://youtu.be/…"*. If you leave it empty, the assistant checks Apple Music,
Spotify and YouTube for anything new.

---

You are updating the Glasparade band website (glasparade.co.za). It is a static
Vite + React + Tailwind site, hosted on GitHub Pages. **Anything pushed to `main`
goes live immediately**, so never commit or push unless I explicitly say so.

## Where things live

The app is at the repo root. Only edit these unless I ask for something else:

- `src/content/releases.ts`: releases, **newest first**. The first non-draft
  entry is the featured "Out now" release at the top of the site.
- `src/content/videos.ts`: YouTube music videos, newest first.
- `src/content/site.ts`: tagline, hero image, bio, contact email, socials.
- `src/content/types.ts`: the allowed fields. Read it before editing, and don't
  change it.
- `src/assets/covers/`: cover art, referenced as `"covers/<id>.jpg"`.
- `src/assets/photos/`: hero and other photos.

`draft: true` entries only show in `npm run dev`, never on the live site. Use
`draft: true` when links are still missing.

## Step 1: Find releases on Apple Music (official, no key needed)

Glasparade's Apple Music artist ID is `1829925477`.

List all releases:

```
curl -s "https://itunes.apple.com/lookup?id=1829925477&entity=album&country=za&limit=200"
```

Each result with `"wrapperType": "collection"` is a release. Use:
- `collectionName`: the title. Strip the ` - Single` / ` - EP` suffix and use it
  to set `type`: `"Single"`, `"EP"` or `"Album"` (no suffix and more than 6
  tracks means Album).
- `releaseDate`: use the first 10 characters (`YYYY-MM-DD`).
- `collectionViewUrl`: the Apple Music link. Remove the `?uo=4` query string.
- `artworkUrl100`: the cover. Replace `100x100bb` with `1000x1000bb` to get a
  1000px image.
- `collectionId`: needed for the track list.

Track list for a release (EPs and albums):

```
curl -s "https://itunes.apple.com/lookup?id=<collectionId>&entity=song&country=za"
```

Results with `"wrapperType": "track"` give `trackNumber`, `trackName` and
`trackViewUrl` (remove `&uo=4`).

Compare with `releases.ts` and only add what is missing.

## Step 2: Find the Spotify links (public embed pages, no key needed)

Glasparade's Spotify artist ID is `20Dn34oWd0wEUKzOkTeec8`.

1. **Track IDs.** Fetch
   `https://open.spotify.com/embed/artist/20Dn34oWd0wEUKzOkTeec8` with a
   browser-like User-Agent (`-A "Mozilla/5.0"`). The page contains
   `<script id="__NEXT_DATA__" type="application/json">`. In that JSON,
   `props.pageProps.state.data.entity.trackList` lists tracks (`uri`, `title`).
   This only shows popular tracks, so a brand-new release might not be there
   yet.
2. **Album ID.** Fetch `https://open.spotify.com/track/<trackId>` and grep for
   `open.spotify.com/album/[A-Za-z0-9]{22}`. That is the release's album link.
3. **Confirm.** Fetch `https://open.spotify.com/embed/album/<albumId>` and read
   `entity.name` and `entity.trackList` from `__NEXT_DATA__`. Check that the
   title and track names match Apple Music.
4. **Release date.** `https://open.spotify.com/embed/track/<trackId>` has
   `entity.releaseDate.isoString`.

Use the **album** link as the release's `spotify` link, and track links
(`https://open.spotify.com/track/<id>`) for per-track links on EPs and albums.

**Known gotcha:** Superstition exists twice on Spotify (2025-08-01 and
2026-07-27). The site uses the 2026 version, which matches Apple Music. If a
title appears more than once, use the one whose date matches Apple Music and
tell me about the other.

If a Spotify lookup fails, don't guess IDs. Leave `spotify: ""`, set
`draft: true`, and tell me.

## Step 2b: Find music videos on YouTube (public RSS feed, no key needed)

Glasparade's YouTube channel is `@glasparadeband`, channel ID
`UCRYsTwZD_TKivxpGzXJgiDw`.

```
curl -s "https://www.youtube.com/feeds/videos.xml?channel_id=UCRYsTwZD_TKivxpGzXJgiDw"
```

This is an Atom XML feed with the 15 most recent uploads. For each `<entry>`:
- `<yt:videoId>`: use `https://youtu.be/<videoId>` as the `youtube` link.
- `<title>`: the video title.
- `<published>`: use the first 10 characters as `releaseDate`.
- `<media:group><media:description>`: can be used as `description`. Trim it to
  the part about the song and video, without hashtags and link lists.

The channel also has Shorts, promos, live clips and vlogs (e.g. "Tone-talk").
**Only add official music videos and lyric videos automatically.** List the
other new uploads and ask me whether to add any of them. Compare against
`videos.ts` by video ID, so the same video is never added twice.

If the feed fails, the channel ID can be found again by fetching
`https://www.youtube.com/@glasparadeband` and grepping for
`"externalId":"UC…"`.

## Step 3: Links you can't look up

- **YouTube Music:** there is no keyless lookup. Leave `youtubeMusic: ""` with a
  `// TODO` comment and ask me for the link.
- **song.link / Odesli:** its public API is shut down
  (`PUBLIC_API_ACCESS_DEPRECATED`). Don't use it.

## Step 4: Write the changes

1. Download the cover:
   `curl -sfo src/assets/covers/<id>.jpg "<artwork 1000x1000 url>"`,
   then confirm with `file` that it is a 1000x1000 JPEG.
2. Add the entry at the **top** of `releases` in `releases.ts` (or in date
   order if it's older than the newest). Follow the shape of the existing
   entries. `id` is the lowercase title with dashes (e.g. `"en-as-ek-val"`).
   For an EP or album, add `tracks` with per-track `spotify` and `appleMusic`
   links.
3. For videos: add to the top of `videos.ts` with `id`, `title`, `youtube` (any
   YouTube link works) and an optional `description`. The first video is shown
   large.
4. Don't change components, styling or `types.ts` unless I asked for that.

## Step 5: Check your work

From the repo root:

1. `npm install` (only if `node_modules` is missing).
2. `npm run build`: this must pass. Fix any errors you caused.
3. Optionally run `npm run dev` and give me the local URL so I can look at it on
   my phone/computer before publishing.

## Step 6: Report back

Tell me in plain, non-technical language:
- what you added or changed (titles, dates, which platforms are linked),
- anything still missing or marked as a draft, and what I need to give you,
- anything odd you noticed (duplicates, mismatched dates).

Then **ask** whether to publish. Only on a clear yes: commit with a short
message describing the update and push to `main`. The site updates about a
minute after the push.

## My request

<!-- Write what you want updated here. Leave empty to check for new releases and videos. -->
