import { formatDate, visibleVideos } from "../../lib/content";
import type { Video } from "../../content/types";
import { DraftBadge, Section } from "../ui/Section";
import { YouTubePlayer } from "../ui/YouTubePlayer";

function VideoMeta({ v, large }: { v: Video; large?: boolean }) {
    const date = formatDate(v.releaseDate);
    return (
        <div className="mt-4">
            <div className="flex flex-wrap items-center gap-2">
                <h3 className={`font-display font-bold tracking-tight ${large ? "text-2xl md:text-3xl" : "text-lg"}`}>{v.title}</h3>
                {v.draft ? <DraftBadge /> : null}
            </div>
            {date ? <p className="mt-1 text-sm text-muted">{date}</p> : null}
            {v.description ? <p className="mt-2 max-w-prose leading-relaxed text-muted">{v.description}</p> : null}
        </div>
    );
}

export function Videos() {
    if (!visibleVideos.length) return null;
    const [featured, ...rest] = visibleVideos;

    return (
        <Section id="video" eyebrow="Watch" title={rest.length ? "Videos" : "New video"}>
            <YouTubePlayer video={featured.youtube} title={featured.title} thumbnail={featured.thumbnail} />
            <VideoMeta v={featured} large />

            {rest.length ? (
                <ul className="mt-12 grid gap-10 sm:grid-cols-2">
                    {rest.map((v) => (
                        <li key={v.id}>
                            <YouTubePlayer video={v.youtube} title={v.title} thumbnail={v.thumbnail} />
                            <VideoMeta v={v} />
                        </li>
                    ))}
                </ul>
            ) : null}
        </Section>
    );
}
