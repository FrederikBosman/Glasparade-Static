import { site } from "../../content/site";
import { asset } from "../../lib/assets";
import { isUpcoming, latestRelease, visibleVideos } from "../../lib/content";
import { Icon } from "../ui/Icon";

export function Hero() {
    const image = asset(site.hero.image);
    const release = latestRelease;
    const upcoming = isUpcoming(release?.releaseDate);

    return (
        <header id="top" className="relative isolate overflow-hidden bg-night text-white">
            {/* Blurred, colour-washed backdrop made from the hero image itself */}
            {image ? (
                <img src={image} alt="" aria-hidden="true" className="absolute inset-0 -z-20 h-full w-full scale-125 object-cover opacity-60 blur-3xl saturate-150" />
            ) : (
                <div aria-hidden="true" className="absolute inset-0 -z-20 bg-gradient-to-br from-blue via-night to-pink opacity-70" />
            )}
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-night/70" />

            <div className="mx-auto grid min-h-[100svh] w-full max-w-6xl items-center gap-8 px-4 pt-8 pb-28 md:grid-cols-2 md:gap-16 md:pt-28 md:pb-24">
                {image ? (
                    <div className="mx-auto w-full max-w-[19rem] sm:max-w-sm md:max-w-none">
                        <img
                            src={image}
                            alt={`${site.name} live`}
                            className="w-full -rotate-2 rounded-2xl shadow-2xl ring-1 shadow-black/50 ring-white/15 transition duration-700 hover:rotate-0"
                            fetchPriority="high"
                        />
                    </div>
                ) : null}

                <div className="text-center md:text-left">
                    <h1
                        className={
                            site.hero.imageHasName && image
                                ? "sr-only"
                                : "font-display text-6xl leading-[0.85] font-extrabold tracking-tighter lowercase sm:text-7xl md:text-8xl"
                        }
                    >
                        {site.name}
                    </h1>
                    <p className="mt-2 font-display text-2xl leading-tight font-medium text-balance italic sm:text-3xl md:text-4xl">
                        “{site.tagline}”
                    </p>

                    {release ? (
                        <p className="mt-6 text-sm font-semibold tracking-[0.2em] text-white/80 uppercase">
                            {upcoming ? "Coming soon" : "Out now"} · {release.type}{" "}
                            <span className="text-white">“{release.title}”</span>
                        </p>
                    ) : null}

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                        {release ? (
                            <a
                                href="#new"
                                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-pink px-7 font-bold text-on-accent shadow-lg shadow-pink/30 transition hover:brightness-110 active:scale-[0.98]"
                            >
                                <Icon name="play" className="h-4 w-4 fill-current" />
                                Listen to {release.title}
                            </a>
                        ) : null}
                        {visibleVideos.length ? (
                            <a
                                href="#video"
                                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/40 px-7 font-bold transition hover:bg-white/10 active:scale-[0.98]"
                            >
                                Watch the new video
                            </a>
                        ) : null}
                    </div>
                </div>
            </div>
        </header>
    );
}
