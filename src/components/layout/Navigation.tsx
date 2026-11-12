import { useEffect, useState } from "react";
import { site } from "../../content/site";
import { useActiveSection } from "../../lib/useActiveSection";
import { Icon, type IconName } from "../ui/Icon";

export type NavItem = { id: string; label: string; icon: IconName };

/**
 * Mobile: a thumb-friendly tab bar fixed to the bottom of the screen.
 * Desktop (md+): a slim top bar that turns solid once you scroll past the hero.
 */
export function Navigation({ items }: { items: NavItem[] }) {
    const active = useActiveSection(items.map((i) => i.id));
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {/* Desktop top bar */}
            <nav
                aria-label="Main"
                className={`fixed inset-x-0 top-0 z-50 hidden transition-colors duration-300 md:block ${
                    scrolled ? "border-b border-line bg-bg/80 text-ink backdrop-blur-xl" : "text-white"
                }`}
            >
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
                    <a href="#top" className="font-display text-xl font-extrabold tracking-tight lowercase">
                        {site.name}
                    </a>
                    <ul className="flex items-center gap-1">
                        {items.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    aria-current={active === item.id ? "true" : undefined}
                                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                                        active === item.id ? "bg-pink text-on-accent" : "hover:bg-current/10"
                                    }`}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Mobile bottom tab bar */}
            <nav
                aria-label="Main"
                className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-bg/85 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl md:hidden"
            >
                <ul className="grid" style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}>
                    {items.map((item) => {
                        const isActive = active === item.id;
                        return (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    aria-current={isActive ? "true" : undefined}
                                    className={`flex min-h-16 flex-col items-center justify-center gap-1 text-[11px] font-semibold transition ${
                                        isActive ? "text-pink" : "text-muted"
                                    }`}
                                >
                                    <Icon name={item.icon} className="h-6 w-6" />
                                    {item.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}
