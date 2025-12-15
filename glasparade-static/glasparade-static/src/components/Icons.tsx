import type { SVGProps } from "react";

export function IconSpotify(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            {/* Outer circle */}
            <path
                d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
                stroke="currentColor"
                strokeWidth="2"
            />
            {/* Waves */}
            <path
                d="M7.5 10.2c3.3-1 6.7-.7 9.9.8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <path
                d="M8.2 13.1c2.7-.7 5.4-.4 7.9.7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.9"
            />
            <path
                d="M9 15.7c1.9-.4 3.9-.2 5.6.6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.8"
            />
        </svg>
    );
}

export function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
                d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path
                d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path
                d="M17.5 6.5h.01"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
            />
        </svg>
    );
}
export function IconYouTube(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            {/* Rounded rectangle container */}
            <path
                d="M10 7h4c3.6 0 5.4 0 6.6.9 1.2.9 1.4 2.6 1.4 4.1v0c0 1.5-.2 3.2-1.4 4.1-1.2.9-3 .9-6.6.9h-4c-3.6 0-5.4 0-6.6-.9C2.2 15.2 2 13.5 2 12v0c0-1.5.2-3.2 1.4-4.1C4.6 7 6.4 7 10 7Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
            />
            {/* Play triangle */}
            <path
                d="M11 10.3v3.4c0 .8.9 1.3 1.6.9l2.8-1.7c.7-.4.7-1.4 0-1.8l-2.8-1.7c-.7-.4-1.6.1-1.6.9Z"
                fill="currentColor"
            />
        </svg>
    );
}

export function IconAppleMusic(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            {/* Rounded square-ish container */}
            <path
                d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Z"
                stroke="currentColor"
                strokeWidth="2"
            />
            {/* Musical note */}
            <path
                d="M14.5 7.6v7.1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <path
                d="M14.5 8.2l-5 1.2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <path
                d="M9.5 10.2v6.1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
            {/* Note heads */}
            <path
                d="M8.2 17.2c0 1 1 1.8 2.2 1.8s2.2-.8 2.2-1.8-1-1.8-2.2-1.8-2.2.8-2.2 1.8Z"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path
                d="M13.2 15.8c0 1 1 1.8 2.2 1.8s2.2-.8 2.2-1.8-1-1.8-2.2-1.8-2.2.8-2.2 1.8Z"
                stroke="currentColor"
                strokeWidth="2"
            />
        </svg>
    );
}