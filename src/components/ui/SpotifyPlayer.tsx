import { useState } from "react";
import { spotifyEmbed } from "../../lib/embeds";
import { BrandIcon } from "./BrandIcon";

/** Loads the Spotify player only once tapped, to keep the page light on mobile. */
export function SpotifyPlayer({ url, title }: { url?: string; title: string }) {
    const [loaded, setLoaded] = useState(false);
    const embed = spotifyEmbed(url);
    if (!embed) return null;

    if (loaded) {
        return (
            <iframe
                title={`Spotify player – ${title}`}
                src={embed.src}
                height={embed.height}
                className="block w-full rounded-xl"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
        );
    }

    return (
        <button
            type="button"
            onClick={() => setLoaded(true)}
            className="flex min-h-14 w-full items-center gap-3 rounded-xl border border-dashed border-line px-4 py-3 text-left text-sm font-semibold text-muted transition hover:border-ink/40 hover:text-ink"
        >
            <BrandIcon src="/Icons/spotify.png" className="h-6 w-6" />
            Play {embed.kind === "track" ? "the song" : `the ${embed.kind}`} right here
        </button>
    );
}
