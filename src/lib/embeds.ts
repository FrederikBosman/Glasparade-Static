/** Turns a normal Spotify share link into its embed URL. */
export function spotifyEmbed(url: string | undefined) {
    if (!url) return null;
    const m = url.match(/open\.spotify\.com\/(?:intl-[a-z-]+\/)?(track|album|playlist|artist)\/([A-Za-z0-9]+)/);
    if (!m) return null;
    const [, kind, id] = m;
    return {
        kind,
        src: `https://open.spotify.com/embed/${kind}/${id}?utm_source=generator&theme=0`,
        height: kind === "track" ? 152 : 352,
    };
}

/** Extracts the 11-character video id from any common YouTube URL (or a bare id). */
export function youTubeId(input: string | undefined) {
    if (!input) return null;
    const trimmed = input.trim();
    if (/^[\w-]{11}$/.test(trimmed)) return trimmed;
    const m = trimmed.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/|\/live\/)([\w-]{11})/);
    return m ? m[1] : null;
}
