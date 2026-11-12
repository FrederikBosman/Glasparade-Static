import { useState } from "react";
import { youTubeId } from "../../lib/embeds";
import { asset } from "../../lib/assets";
import { Icon } from "./Icon";

/**
 * Shows the thumbnail with a play button; the real YouTube player (≈1MB of
 * scripts) only loads when tapped.
 */
export function YouTubePlayer({ video, title, thumbnail }: { video: string; title: string; thumbnail?: string }) {
    const [playing, setPlaying] = useState(false);
    const id = youTubeId(video);

    if (!id) {
        return (
            <div className="flex aspect-video w-full items-center justify-center rounded-2xl border border-dashed border-line bg-surface p-6 text-center text-sm text-muted">
                Paste the YouTube link in src/content/videos.ts
            </div>
        );
    }

    if (playing) {
        return (
            <iframe
                title={title}
                src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1`}
                className="aspect-video w-full rounded-2xl bg-black"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />
        );
    }

    const thumb = asset(thumbnail) ?? `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

    return (
        <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
            className="group relative block aspect-video w-full overflow-hidden rounded-2xl bg-black"
        >
            <img src={thumb} alt="" className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100" loading="lazy" decoding="async" />
            <span className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-pink text-on-accent shadow-xl transition group-hover:scale-110 md:h-20 md:w-20">
                    <Icon name="play" className="ml-1 h-7 w-7 fill-current md:h-8 md:w-8" />
                </span>
            </span>
        </button>
    );
}
