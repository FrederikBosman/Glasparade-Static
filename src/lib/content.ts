import { releases } from "../content/releases";
import { videos } from "../content/videos";
import { site } from "../content/site";
import type { Platform, PlatformLinks, SocialPlatform } from "../content/types";
import { youTubeId } from "./embeds";

/** Drafts are visible while developing locally, never in the production build. */
export const SHOW_DRAFTS = import.meta.env.DEV;

const visible = <T extends { draft?: boolean }>(items: T[]) =>
    items.filter((i) => SHOW_DRAFTS || !i.draft);

export const visibleReleases = visible(releases);
export const latestRelease = visibleReleases[0];
export const olderReleases = visibleReleases.slice(1);

export const visibleVideos = visible(videos).filter((v) => v.draft || youTubeId(v.youtube));

export const hasBio = site.about.bio.some((p) => p.trim().length > 0);

type PlatformInfo = { label: string; icon?: string };

export const PLATFORMS: Record<Platform, PlatformInfo> = {
    spotify: { label: "Spotify", icon: "/Icons/spotify.png" },
    appleMusic: { label: "Apple Music", icon: "/Icons/music.png" },
    youtubeMusic: { label: "YouTube Music", icon: "/Icons/play.png" },
    youtube: { label: "YouTube" },
    deezer: { label: "Deezer" },
    amazonMusic: { label: "Amazon Music" },
    tidal: { label: "Tidal" },
    bandcamp: { label: "Bandcamp" },
    soundcloud: { label: "SoundCloud" },
};

export const SOCIALS: Record<SocialPlatform, PlatformInfo> = {
    instagram: { label: "Instagram", icon: "/Icons/instagram.png" },
    tiktok: { label: "TikTok", icon: "/Icons/tik-tok.png" },
    youtube: { label: "YouTube" },
    facebook: { label: "Facebook" },
};

/** Non-empty links in a consistent platform order. */
export function linkList(links: PlatformLinks | undefined) {
    if (!links) return [];
    return (Object.keys(PLATFORMS) as Platform[])
        .filter((p) => links[p]?.trim())
        .map((p) => ({ platform: p, href: links[p]!.trim(), ...PLATFORMS[p] }));
}

function parseDate(value: string | undefined) {
    if (!value) return undefined;
    const [y, m, d] = value.split("-").map(Number);
    if (!y) return undefined;
    return new Date(y, (m || 1) - 1, d || 1);
}

export function formatDate(value: string | undefined) {
    const date = parseDate(value);
    return date
        ? new Intl.DateTimeFormat("en-ZA", { day: "numeric", month: "long", year: "numeric" }).format(date)
        : undefined;
}

export function yearOf(value: string | undefined) {
    return parseDate(value)?.getFullYear();
}

export function isUpcoming(value: string | undefined) {
    const date = parseDate(value);
    return !!date && date.getTime() > Date.now();
}
