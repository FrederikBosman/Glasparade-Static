import { site } from "../../content/site";
import { asset } from "../../lib/assets";
import { hasBio, SHOW_DRAFTS } from "../../lib/content";
import { Section } from "../ui/Section";

export function About() {
    if (!hasBio && !SHOW_DRAFTS) return null;
    const image = asset(site.about.image);

    return (
        <Section id="about" eyebrow="About" title={site.name}>
            <div className={`grid items-start gap-8 ${image ? "md:grid-cols-2 md:gap-14" : ""}`}>
                {image ? <img src={image} alt={site.name} className="w-full rounded-2xl object-cover" loading="lazy" decoding="async" /> : null}
                {hasBio ? (
                    <div className="max-w-prose space-y-5 text-lg leading-relaxed md:text-xl">
                        {site.about.bio.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                ) : (
                    <p className="rounded-xl border border-dashed border-line p-4 text-sm text-muted">
                        Add a bio in src/content/site.ts (about.bio). This section stays hidden on the live site until you do.
                    </p>
                )}
            </div>
        </Section>
    );
}
