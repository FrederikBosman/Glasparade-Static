/**
 * Resolves image paths used in src/content (e.g. "covers/absolusie.jpg") to
 * bundled URLs. Every image under src/assets is picked up automatically.
 */
const files = import.meta.glob<string>("../assets/**/*.{jpg,jpeg,png,webp,avif,gif,svg}", {
    eager: true,
    import: "default",
});

const byPath = new Map<string, string>();
for (const [key, url] of Object.entries(files)) {
    byPath.set(key.replace("../assets/", ""), url);
}

export function asset(path: string | undefined): string | undefined {
    if (!path) return undefined;
    // Absolute URLs and files in /public are passed through untouched.
    if (/^(https?:)?\/\//.test(path) || path.startsWith("/")) return path;

    const clean = path.replace(/^(\.\/)?(src\/)?assets\//, "");
    const url = byPath.get(clean);
    if (!url && import.meta.env.DEV) {
        console.warn(`[assets] Image "${path}" not found — add it at src/assets/${clean}`);
    }
    return url;
}
