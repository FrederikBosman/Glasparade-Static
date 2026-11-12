import type { SVGProps } from "react";

/** Small stroke icons used by the navigation and buttons. */
const PATHS = {
    sparkle: "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z",
    play: "M7 4.5v15l12.5-7.5L7 4.5z",
    video: "M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11zM10 9v6l5-3-5-3z",
    disc: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
    user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 20.5c1.2-3.6 4.3-5.5 8-5.5s6.8 1.9 8 5.5",
    mail: "M3.5 6.5A1.5 1.5 0 0 1 5 5h14a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 19 19H5a1.5 1.5 0 0 1-1.5-1.5v-11zM4 7l8 6 8-6",
    arrowUpRight: "M7 17L17 7M8 7h9v9",
    arrowDown: "M12 5v14M6 13l6 6 6-6",
    note: "M9 18V5l11-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM20 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
} as const;

export type IconName = keyof typeof PATHS;

export function Icon({ name, ...props }: { name: IconName } & SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path d={PATHS[name]} />
        </svg>
    );
}
