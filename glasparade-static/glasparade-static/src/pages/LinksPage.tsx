import { LinkCard } from "../components/LinkCard";
import { ProfileHeader } from "../components/ProfileHeader";
import { IconSpotify, IconYouTube, IconAppleMusic, IconInstagram, IconTikTok } from "../components/Icons";

const LINKS = [
    {
        title: "Instagram",
        subtitle: "@glasparadeband",
        href: "https://instagram.com/glasparadeband",
        icon: <IconInstagram className="h-6 w-6" />,
    },
    {
        title: "TikTok",
        subtitle: "@glasparade",
        href: "https://tiktok.com/@glasparade",
        icon: <IconTikTok className="h-6 w-6" />,
    },
    {
        title: "Listen to Absolusie!",
        subtitle: "Absolusie by Glasparade on Spotify",
        href: "https://open.spotify.com/track/1UkIY01iF1DJDfGti49X1y?utm_source=generator&si=f804a6b15bdd44d7",
        icon: <IconSpotify className="h-6 w-6" />,
        badge: "New",
    },
    {
        title: "Listen to Absolusie!",
        subtitle: "Absolusie by Glasparade on Apple Music",
        href: "https://music.apple.com/za/album/absolusie/6776329723?i=6776329725",
        icon: <IconAppleMusic className="h-6 w-6" />,
        badge: "New",
    },
    {
        title: "Listen to Absolusie!",
        subtitle: "Absolusie by Glasparade on YouTube Music",
        href: "https://music.youtube.com/watch?v=2fd9VocJkMo&si=B5uXEQmHUD_MGRNW",
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
        <div className="pt-[env(safe-area-inset-top)] h-screen max-h-screen h-dvh max-h-dvh overflow-x-hidden overflow-y-auto overscroll-none bg-[#e5e4df] text-black">
            <div
                aria-hidden="true"
                className="pointer-events-none fixed inset-0 opacity-80"
            >
                <div className="-translate-x-1/2 bg-[#0bd5e3]/20 absolute -top-1 left-1/2 h-72 w-72 rounded-full blur-3xl" />
                <div className="bg-[#4526ce]/15 absolute left-1/4 top-56 h-72 w-72 rounded-full blur-3xl" />
            </div>

            <main className="relative mx-auto w-full max-w-md px-4 pb-10 pt-10">
                <ProfileHeader
                    name="Glasparade"
                    bio="te veel gevoelens, te min volume-knop"
                    avatarUrl="thumbnail3.jpg"
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
                          overflow-hidden rounded-2xl border border-white/10 bg-white/5
                          shadow-sm backdrop-blur transition focus-within:ring-2
                          focus-within:ring-white/60 hover:border-white/20
                          hover:bg-white/10">
                        <iframe
                            title="Spotify embed - Muishond"
                            data-testid="embed-iframe"
                            src="https://open.spotify.com/embed/track/5fYXxM6Z2Z1vHD30WCHp9g?utm_source=generator&theme=0"
                            className="block w-full"
                            height={352}
                            frameBorder={0}
                            loading="lazy"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        />
                    </div>
                    <div className="
                          overflow-hidden rounded-2xl border border-white/10 bg-white/5
                          shadow-sm backdrop-blur transition focus-within:ring-2
                          focus-within:ring-white/60 hover:border-white/20
                          hover:bg-white/10">
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
                    <div className="
                          overflow-hidden rounded-2xl border border-white/10 bg-white/5
                          shadow-sm backdrop-blur transition focus-within:ring-2
                          focus-within:ring-white/60 hover:border-white/20
                          hover:bg-white/10">
                        <iframe
                            title="Spotify embed - Absolusie"
                            data-testid="embed-iframe"
                            src="https://open.spotify.com/embed/track/1UkIY01iF1DJDfGti49X1y?utm_source=generator&si=f804a6b15bdd44d7"
                            className="block w-full"
                            height={352}
                            frameBorder={0}
                            allowFullScreen
                            loading="lazy"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
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