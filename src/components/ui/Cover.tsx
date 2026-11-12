import { asset } from "../../lib/assets";

/** Square release artwork with a typographic placeholder when the image is missing. */
export function Cover({ src, title, className = "", eager = false }: { src?: string; title: string; className?: string; eager?: boolean }) {
    const url = asset(src);
    return (
        <div className={`relative aspect-square overflow-hidden rounded-2xl bg-surface ring-1 ring-line ${className}`}>
            {url ? (
                <img
                    src={url}
                    alt={`${title} cover art`}
                    className="h-full w-full object-cover"
                    loading={eager ? "eager" : "lazy"}
                    decoding="async"
                />
            ) : (
                <div className="flex h-full w-full items-end bg-gradient-to-br from-blue to-pink p-4">
                    <span className="font-display text-2xl leading-none font-extrabold text-white">{title}</span>
                </div>
            )}
        </div>
    );
}
