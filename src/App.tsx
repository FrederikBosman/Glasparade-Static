import { useEffect } from "react";
import { Footer } from "./components/layout/Footer";
import { Navigation, type NavItem } from "./components/layout/Navigation";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Discography } from "./components/sections/Discography";
import { Hero } from "./components/sections/Hero";
import { LatestRelease } from "./components/sections/LatestRelease";
import { Videos } from "./components/sections/Videos";
import { hasBio, latestRelease, olderReleases, SHOW_DRAFTS, visibleVideos } from "./lib/content";

/** Nav items only appear for sections that actually have content. */
const NAV: NavItem[] = (
    [
        [!!latestRelease, { id: "new", label: "New", icon: "sparkle" }],
        [visibleVideos.length > 0, { id: "video", label: "Video", icon: "video" }],
        [olderReleases.length > 0, { id: "music", label: "Music", icon: "disc" }],
        [hasBio || SHOW_DRAFTS, { id: "about", label: "About", icon: "user" }],
        [true, { id: "contact", label: "Contact", icon: "mail" }],
    ] satisfies [boolean, NavItem][]
)
    .filter(([show]) => show)
    .map(([, item]) => item);

export default function App() {
    // Sections render after page load, so the browser can't jump to a shared
    // link like glasparade.co.za/#video on its own — do it once mounted.
    useEffect(() => {
        const id = decodeURIComponent(window.location.hash.slice(1));
        if (id) document.getElementById(id)?.scrollIntoView();
    }, []);

    return (
        <>
            <a href="#new" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-full focus:bg-pink focus:px-4 focus:py-2 focus:text-on-accent">
                Skip to content
            </a>
            <Navigation items={NAV} />
            <Hero />
            <main>
                <LatestRelease />
                <Videos />
                <Discography />
                <About />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
