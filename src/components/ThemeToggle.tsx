import { useEffect, useState } from "react";

function getInitialIsDark() {
    return document.documentElement.classList.contains("dark");
}

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(getInitialIsDark);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
        window.localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    return (
        <button
            type="button"
            onClick={() => setIsDark((prev) => !prev)}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            aria-pressed={isDark}
            className="
        absolute right-0 top-0 flex h-10 w-10 items-center justify-center rounded-full
        border border-base-300 bg-neutral/10 text-base-content
        shadow-sm backdrop-blur transition
        hover:bg-neutral/20
        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
        dark:border-dbase-300 dark:bg-dneutral/10 dark:text-dbase-content dark:hover:bg-dneutral/20"
        >
            {isDark ? (
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                    <path
                        d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36 6.36-1.41-1.41M6.05 6.05 4.64 4.64m12.72 0-1.41 1.41M6.05 17.95l-1.41 1.41M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ) : (
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                    <path
                        d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
        </button>
    );
}
