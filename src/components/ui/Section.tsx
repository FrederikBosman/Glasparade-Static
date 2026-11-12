import type { ReactNode } from "react";

export function Section({
    id,
    eyebrow,
    title,
    children,
    className = "",
}: {
    id: string;
    eyebrow?: string;
    title?: ReactNode;
    children: ReactNode;
    className?: string;
}) {
    return (
        <section id={id} aria-labelledby={title ? `${id}-title` : undefined} className={`scroll-mt-4 px-4 py-16 md:scroll-mt-20 md:py-24 ${className}`}>
            <div className="mx-auto max-w-6xl">
                {title ? (
                    <div className="mb-8 md:mb-12">
                        {eyebrow ? (
                            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-pink">{eyebrow}</p>
                        ) : null}
                        <h2 id={`${id}-title`} className="font-display text-4xl leading-[0.95] font-extrabold tracking-tight md:text-6xl">
                            {title}
                        </h2>
                    </div>
                ) : null}
                {children}
            </div>
        </section>
    );
}

export function DraftBadge() {
    return (
        <span className="inline-flex items-center rounded-full border border-dashed border-pink px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-pink">
            Draft · dev only
        </span>
    );
}
