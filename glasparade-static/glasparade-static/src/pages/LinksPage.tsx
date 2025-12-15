import { LinkCard } from "../components/LinkCard";
import { ProfileHeader } from "../components/ProfileHeader";
import { IconSpotify, IconYouTube, IconAppleMusic, IconInstagram } from "../components/Icons";

const LINKS = [
    {
        title: "Instagram",
        subtitle: "@glasparadeband",
        href: "https://instagram.com/glasparadeband",
        icon: <IconInstagram className="h-6 w-6" />,
    },
    {
        title: "Listen to superstition!",
        subtitle: "Superstition by Glasparade on spotify",
        href: "https://open.spotify.com/track/0XjSEm9gtnTcRnj5WHSopP?si=602b1b1dba1f4c86",
        icon: <IconSpotify className="h-6 w-6" />,
        badge: "New",
    },
    {
        title: "Listen to superstition!",
        subtitle: "Superstition by Glasparade on Apple Music",
        href: "https://music.apple.com/za/song/superstition/1829925478",
        icon: <IconAppleMusic className="h-6 w-6" />,
        badge: "New",
    },
    {
        title: "Listen to superstition!",
        subtitle: "Superstition by Glasparade on YouTube Music",
        href: "https://youtu.be/6TQJzgV0a44?si=9wJKflZhbiF3kDql",
        icon: <IconYouTube className="h-6 w-6" />,
        badge: "New",
    },
    {
        title: "Contact Us",
        subtitle: "glasparade@gmail.com",
        href: "mailto:glasparade@gmail.com",
    },
] as const;

export default function LinksPage() {
    return (
        <div className="min-h-dvh bg-[#0b0b10] text-white">
            <div
                aria-hidden="true"
                className="pointer-events-none fixed inset-0 opacity-80"
            >
                <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
                <div className="absolute top-56 left-1/4 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
            </div>

            <main className="relative mx-auto w-full max-w-md px-4 pb-10 pt-10">
                <ProfileHeader
                    name="Glasparade"
                    bio="te veel gevoelens, te min volume-knop"
                    avatarUrl="thumbnail.jpg"
                />

                <section className="mt-8 space-y-3">
                    {LINKS.map((l) => (
                        <LinkCard
                            key={l.href}
                            title={l.title}
                            href={l.href}
                            subtitle={l.subtitle}
                            badge={"badge" in l ? (l as any).badge : undefined}
                            icon={"icon" in l ? (l as any).icon : undefined}
                        />
                    ))}
                </section>

                <section className="mt-8 space-y-3">
                    <iframe data-testid="embed-iframe" className="
                        group relative flex w-full items-center gap-3 rounded-2xl
                        border border-white/10 bg-white/5 px-4 py-4
                        shadow-sm backdrop-blur
                        transition
                        hover:bg-white/10 hover:border-white/20
                        active:scale-[0.99]
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                        src="https://open.spotify.com/embed/track/0XjSEm9gtnTcRnj5WHSopP?utm_source=generator"
                        width="100%" height="352" frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </section>

                <footer className="mt-10 text-center text-xs text-white/50">
                    © {new Date().getFullYear()} Glasparade.
                </footer>
            </main>
        </div>
    );
}