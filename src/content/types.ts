/**
 * Shapes of the content in this folder. You normally don't need to edit this
 * file — edit site.ts, releases.ts and videos.ts instead.
 */

/** Streaming / store platforms a release can link to. */
export type Platform =
    | "spotify"
    | "appleMusic"
    | "youtubeMusic"
    | "youtube"
    | "deezer"
    | "amazonMusic"
    | "tidal"
    | "bandcamp"
    | "soundcloud";

/** Social profiles shown in the Contact section. */
export type SocialPlatform = "instagram" | "tiktok" | "youtube" | "facebook";

/** A link per platform. Leave a platform out (or set it to "") to hide it. */
export type PlatformLinks = Partial<Record<Platform, string>>;

export type Track = {
    title: string;
    /** Optional per-track links, e.g. for an EP where each song has its own Spotify link. */
    links?: PlatformLinks;
};

export type Release = {
    /** Unique, URL-friendly id, e.g. "absolusie". */
    id: string;
    title: string;
    type: "Single" | "EP" | "Album";
    /** "YYYY-MM-DD". A date in the future shows "Out <date>" instead of "Out now". */
    releaseDate?: string;
    /** Image path inside src/assets, e.g. "covers/absolusie.jpg". */
    cover?: string;
    /** Short blurb shown on the featured (newest) release. */
    description?: string;
    links: PlatformLinks;
    tracks?: Track[];
    /** Drafts only show while running `npm run dev`, never on the live site. */
    draft?: boolean;
};

export type Video = {
    id: string;
    title: string;
    /** Any YouTube link (youtu.be/…, youtube.com/watch?v=…, /shorts/…) or the bare video id. */
    youtube: string;
    description?: string;
    /** Optional custom thumbnail inside src/assets, e.g. "photos/video-thumb.jpg". Defaults to YouTube's. */
    thumbnail?: string;
    releaseDate?: string;
    draft?: boolean;
};

export type Social = {
    platform: SocialPlatform;
    handle: string;
    url: string;
};
