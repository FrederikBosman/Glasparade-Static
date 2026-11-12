import { formatDate, isUpcoming, latestRelease, linkList } from "../../lib/content";
import { Cover } from "../ui/Cover";
import { PlatformButtons, PlatformChips } from "../ui/PlatformLinks";
import { DraftBadge, Section } from "../ui/Section";
import { SpotifyPlayer } from "../ui/SpotifyPlayer";

export function LatestRelease() {
    const r = latestRelease;
    if (!r) return null;

    const upcoming = isUpcoming(r.releaseDate);
    const date = formatDate(r.releaseDate);
    const meta = [r.type, date ? (upcoming ? `Out ${date}` : date) : undefined, r.tracks?.length ? `${r.tracks.length} tracks` : undefined]
        .filter(Boolean)
        .join(" · ");

    return (
        <Section id="new">
            <div className="grid items-start gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-14">
                <Cover src={r.cover} title={r.title} eager className="shadow-2xl shadow-blue/20 md:sticky md:top-24" />

                <div>
                    <div className="flex flex-wrap items-center gap-2">
                        <p className="text-xs font-semibold tracking-[0.22em] text-pink uppercase">
                            {upcoming ? "Coming soon" : `New ${r.type} · Out now`}
                        </p>
                        {r.draft ? <DraftBadge /> : null}
                    </div>
                    <h2 id="new-title" className="mt-2 font-display text-5xl leading-[0.9] font-extrabold tracking-tight text-balance md:text-7xl">
                        {r.title}
                    </h2>
                    {meta ? <p className="mt-3 text-sm text-muted">{meta}</p> : null}
                    {r.description ? <p className="mt-5 max-w-prose text-lg leading-relaxed">{r.description}</p> : null}

                    <div className="mt-7">
                        <PlatformButtons links={r.links} title={r.title} />
                        {!linkList(r.links).length && r.draft ? (
                            <p className="rounded-xl border border-dashed border-line p-4 text-sm text-muted">Add the streaming links in src/content/releases.ts</p>
                        ) : null}
                    </div>

                    {r.tracks?.length ? (
                        <ol className="mt-8 divide-y divide-line border-y border-line">
                            {r.tracks.map((t, i) => (
                                <li key={t.title} className="flex min-h-14 items-center gap-4 py-2">
                                    <span className="w-6 text-right font-mono text-sm text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                                    <span className="flex-1 font-semibold">{t.title}</span>
                                    {t.links ? <PlatformChips links={t.links} title={t.title} /> : null}
                                </li>
                            ))}
                        </ol>
                    ) : null}

                    <div className="mt-6">
                        <SpotifyPlayer url={r.links.spotify} title={r.title} />
                    </div>
                </div>
            </div>
        </Section>
    );
}
