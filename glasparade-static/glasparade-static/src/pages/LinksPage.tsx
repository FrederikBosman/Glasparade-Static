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
        <div className="min-h-dvh bg-white text-black overflow-x-hidden overscroll-none">
            <div
                aria-hidden="true"
                className="pointer-events-none fixed inset-0 opacity-80"
            >
                <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
                <div className="absolute top-56 left-1/4 h-72 w-72 rounded-full bg-green-400/15 blur-3xl" />
            </div>

            <main className="relative mx-auto w-full max-w-md px-4 pb-10 pt-10">
                <ProfileHeader
                    name="Glasparade"
                    bio="te veel gevoelens, te min volume-knop"
                    avatarUrl="thumbnail2.jpg"
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

                <section className="mt-8 space-y-4">
                    {/* Spotify */}
                    <div className="
                          rounded-2xl border border-white/10 bg-white/5 shadow-sm backdrop-blur
                          transition hover:bg-white/10 hover:border-white/20
                          focus-within:ring-2 focus-within:ring-white/60
                          overflow-hidden">
                        <iframe
                            title="Spotify embed - Superstition"
                            data-testid="embed-iframe"
                            src="https://open.spotify.com/embed/track/0XjSEm9gtnTcRnj5WHSopP?utm_source=generator"
                            className="block w-full"
                            height={352}
                            frameBorder={0}
                            loading="lazy"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        />
                    </div>

                    {/* Apple Music */}
                    <div className="
                      rounded-2xl border border-white/10 bg-white/5 shadow-sm backdrop-blur
                      transition hover:bg-white/10 hover:border-white/20
                      focus-within:ring-2 focus-within:ring-white/60
                      overflow-hidden">
                        <iframe
                            title="Apple Music embed - Superstition"
                            src="https://embed.music.apple.com/za/song/superstition/1829925478"
                            className="block w-full"
                            height={175}
                            frameBorder={0}
                            loading="lazy"
                            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                        />
                    </div>
                </section>

                <footer className="mt-10 text-center text-xs text-black/50">
                    © {new Date().getFullYear()} Glasparade.
                </footer>
            </main>
        </div>
    );
}