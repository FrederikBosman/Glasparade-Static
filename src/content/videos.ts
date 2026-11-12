import type { Video } from "./types";

/**
 * Music videos, NEWEST FIRST. The first one is shown large; the rest go in a
 * grid underneath. The Video section is hidden while there are no published
 * videos.
 *
 * The YouTube player only loads when someone taps the thumbnail, so adding
 * more videos doesn't slow the page down.
 */
export const videos: Video[] = [
    {
        id: "new-video",
        title: "Glasparade - Absolusie (Amptelike Musiek Video) ",
        youtube: "https://youtu.be/Hq4qR7yoy0c?si=Wq5cBUcvwIHItFUR",
        description: "\"Absolusie\" is Glasparade se tweede self-produseerde, Afrikaanse vrystelling en merk hul totale onafhanklikheid as 'n band. Kitare wat brul, enorme melodië, wroeging tussen uitroeping en intiemiteit — die is die klank van \"Absolusie\". Onder die vele lae van produksie, wat heelwat groter klink as die nederige kamer waar die band sit en produce het, is dig en rou lirieke vol nostalgie, beleidenis, en verlange. — Musiek Video geskiet en produseer deur die amazing Karlia Stadler en haar span! Instagram: @karliaaa.s",
        draft: false,
    },
];
