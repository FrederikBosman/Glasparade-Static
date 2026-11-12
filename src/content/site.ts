import type { Social } from "./types";

/**
 * General band info: hero, about, contact and socials.
 * Image paths are relative to src/assets (e.g. "photos/hero.jpg").
 */
export const site = {
    name: "Glasparade",
    tagline: "te veel gevoelens, te min volume-knop",

    hero: {
        image: "photos/glasparade_muishond_logo.jpg",
        /**
         * Set to true when the hero image already contains the band name
         * (like the current poster). Set to false for a plain band photo and
         * the name is printed in big type instead.
         */
        imageHasName: true,
    },

    about: {
        /** Optional photo inside src/assets, e.g. "photos/band.jpg". */
        image: undefined as string | undefined,
        /**
         * One string per paragraph. While this is empty the About section is
         * hidden on the live site (and shows a reminder while running `npm run dev`).
         */
        bio: [] as string[],
    },

    contact: {
        email: "glasparade@gmail.com",
        /** Optional separate booking address. */
        bookingEmail: undefined as string | undefined,
    },

    socials: [
        { platform: "instagram", handle: "@glasparadeband", url: "https://instagram.com/glasparadeband" },
        { platform: "tiktok", handle: "@glasparade", url: "https://tiktok.com/@glasparade" },
    ] satisfies Social[] as Social[],
};
