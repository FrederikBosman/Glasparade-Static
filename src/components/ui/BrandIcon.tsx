import { Icon } from "./Icon";

/** Platform logo from /public/Icons, or a generic note icon when there isn't one. */
export function BrandIcon({ src, className = "h-6 w-6" }: { src?: string; className?: string }) {
    return src ? (
        <img src={src} alt="" className={`${className} object-contain`} decoding="async" />
    ) : (
        <Icon name="note" className={className} />
    );
}
