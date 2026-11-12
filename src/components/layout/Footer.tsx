import { site } from "../../content/site";

export function Footer() {
    return (
        <footer className="border-t border-line px-4 pt-10 pb-28 md:pb-10">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-sm text-muted md:flex-row">
                <p className="font-display font-bold tracking-tight lowercase">{site.name}</p>
                <p>© {new Date().getFullYear()} {site.name}</p>
            </div>
        </footer>
    );
}
