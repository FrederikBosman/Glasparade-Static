export type LinkCardProps = {
    title: string;
    href: string;
    subtitle?: string;
    icon?: React.ReactNode;
    badge?: string;
};

export function LinkCard({ title, href, subtitle, icon, badge }: LinkCardProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="
        group relative flex w-full items-center gap-3 rounded-2xl
        border border-white/10 bg-white/5 px-4 py-4
        shadow-sm backdrop-blur
        transition
        hover:bg-white/10 hover:border-white/20
        active:scale-[0.99]
        focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60
      "
        >
            {icon ? (
                <div
                    className="
            flex h-11 w-11 shrink-0 items-center justify-center rounded-xl
            bg-white/10 text-black
          "
                    aria-hidden="true"
                >
                    {icon}
                </div>
            ) : null}

            <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                    <span className="truncate text-base font-semibold text-black">
                        {title}
                    </span>
                    {badge ? (
                        <span className="shrink-0 rounded-full bg-white/15 px-2 py-0.5 text-xs font-medium text-black/90">
                            {badge}
                        </span>
                    ) : null}
                </div>

                {subtitle ? (
                    <p className="mt-0.5 line-clamp-2 text-sm text-black/70">
                        {subtitle}
                    </p>
                ) : null}
            </div>

            <svg
                className="h-5 w-5 shrink-0 text-black/50 transition group-hover:translate-x-0.5 group-hover:text-black/70"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
            >
                <path
                    d="M9 18l6-6-6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </a>
    );
}