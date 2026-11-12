import { olderReleases, yearOf } from "../../lib/content";
import { Cover } from "../ui/Cover";
import { PlatformChips } from "../ui/PlatformLinks";
import { DraftBadge, Section } from "../ui/Section";

export function Discography() {
    if (!olderReleases.length) return null;

    return (
        <Section id="music" eyebrow="Discography" title="More music">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
                {olderReleases.map((r) => {
                    const year = yearOf(r.releaseDate);
                    return (
                        <li key={r.id}>
                            <Cover src={r.cover} title={r.title} className="transition duration-300 hover:-rotate-1" />
                            <h3 className="mt-3 font-display text-lg leading-tight font-bold">{r.title}</h3>
                            <p className="mb-3 text-sm text-muted">{[r.type, year].filter(Boolean).join(" · ")}</p>
                            {r.draft ? <div className="mb-3"><DraftBadge /></div> : null}
                            <PlatformChips links={r.links} title={r.title} />
                        </li>
                    );
                })}
            </ul>
        </Section>
    );
}
