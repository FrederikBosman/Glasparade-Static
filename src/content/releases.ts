import type { Release } from "./types";

/**
 * All releases, NEWEST FIRST. The first non-draft entry is featured at the top
 * of the site ("Out now"); the rest are listed under "Music".
 *
 * To add a release:
 *   1. Put the cover art in src/assets/covers/ (square jpg/png/webp, ~1000px).
 *   2. Copy an entry below to the top of the list and fill it in.
 *   3. Remove `draft: true` (or leave it while you wait for links — drafts
 *      only show up in `npm run dev`).
 *
 * Supported link keys: spotify, appleMusic, youtubeMusic, youtube, deezer,
 * amazonMusic, tidal, bandcamp, soundcloud. Empty strings are ignored.
 */
export const releases: Release[] = [
    {
        id: "en-as-ek-val",
        title: "En As Ek Val",
        type: "EP",
        releaseDate: "2026-11-06",
        cover: "covers/en-as-ek-val.jpg",
        description: "",
        links: {
            spotify: "https://open.spotify.com/album/2wkNudpw9ifZQuoLIS204g",
            appleMusic: "https://music.apple.com/za/album/en-as-ek-val-ep/6822805557",
            youtubeMusic: "", // TODO: paste the YouTube Music album link
        },
        tracks: [
            {
                title: "PNKS",
                links: {
                    spotify: "https://open.spotify.com/track/7qC5mVLwrPNALNPLrIX0Ir",
                    appleMusic: "https://music.apple.com/za/album/pnks/6822805557?i=6822805558",
                },
            },
            {
                title: "Koud",
                links: {
                    spotify: "https://open.spotify.com/track/3fd5u1ETEAIS1Vjx25xUAn",
                    appleMusic: "https://music.apple.com/za/album/koud/6822805557?i=6822806040",
                },
            },
            {
                title: "Silhouette I",
                links: {
                    spotify: "https://open.spotify.com/track/4HIo23fBWiot8fkxAgBoxJ",
                    appleMusic: "https://music.apple.com/za/album/silhouette-i/6822805557?i=6822806041",
                },
            },
            {
                title: "Silhouette II",
                links: {
                    spotify: "https://open.spotify.com/track/5Q5ALotA7WQBzkeisIwJZ8",
                    appleMusic: "https://music.apple.com/za/album/silhouette-ii/6822805557?i=6822806042",
                },
            },
            {
                title: "Oosbank Nostalgie",
                links: {
                    spotify: "https://open.spotify.com/track/1AmQR6izccTM2b2fjQ5zAz",
                    appleMusic: "https://music.apple.com/za/album/oosbank-nostalgie/6822805557?i=6822806043",
                },
            },
        ],
    },
    {
        id: "superstition",
        title: "Superstition",
        type: "Single",
        releaseDate: "2026-07-27",
        cover: "covers/superstition.jpg",
        links: {
            spotify: "https://open.spotify.com/album/30qUjijeKHNV3so1mQ6f33",
            appleMusic: "https://music.apple.com/za/album/superstition-single/6791275186",
        },
    },
    {
        id: "absolusie",
        title: "Absolusie",
        type: "Single",
        releaseDate: "2026-06-13",
        cover: "covers/absolusie.jpg",
        links: {
            spotify: "https://open.spotify.com/album/3KW9LLz1VHKD5PL19YoddT",
            appleMusic: "https://music.apple.com/za/album/absolusie-single/6776329723",
            youtubeMusic: "https://music.youtube.com/watch?v=2fd9VocJkMo",
        },
    },
    {
        id: "muishond",
        title: "Muishond",
        type: "Single",
        releaseDate: "2026-03-06",
        cover: "covers/muishond.jpg",
        links: {
            spotify: "https://open.spotify.com/album/34pUKzPxyJO2hjte6pQmgQ",
            appleMusic: "https://music.apple.com/za/album/muishond-single/1879917499",
        },
    },
];
