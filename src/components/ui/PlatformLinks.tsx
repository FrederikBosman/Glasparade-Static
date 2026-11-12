import { linkList } from "../../lib/content";
import type { PlatformLinks } from "../../content/types";
import { BrandIcon } from "./BrandIcon";
import { Icon } from "./Icon";

/** Large labelled buttons — used for the featured release. */
export function PlatformButtons({ links, title }: { links: PlatformLinks; title: string }) {
    const items = linkList(links);
    if (!items.length) return null;
    return (
        <ul className="grid gap-2 sm:grid-cols-2">
            {items.map((l) => (
                <li key={l.platform}>
                    <a
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Listen to ${title} on ${l.label}`}
                        className="group flex min-h-14 items-center gap-3 rounded-full border border-line bg-surface py-2 pr-5 pl-2.5 font-semibold transition hover:border-ink/40 active:scale-[0.98]"
                    >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bg">
                            <BrandIcon src={l.icon} className="h-6 w-6" />
                        </span>
                        <span className="flex-1">{l.label}</span>
                        <Icon name="arrowUpRight" className="h-4 w-4 text-muted transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
                    </a>
                </li>
            ))}
        </ul>
    );
}

/** Compact round icon links — used in the discography grid. */
export function PlatformChips({ links, title }: { links: PlatformLinks; title: string }) {
    const items = linkList(links);
    if (!items.length) return null;
    return (
        <ul className="flex flex-wrap gap-1.5">
            {items.map((l) => (
                <li key={l.platform}>
                    <a
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Listen to ${title} on ${l.label}`}
                        title={l.label}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface transition hover:border-ink/40 active:scale-95"
                    >
                        <BrandIcon src={l.icon} className="h-5 w-5" />
                    </a>
                </li>
            ))}
        </ul>
    );
}
