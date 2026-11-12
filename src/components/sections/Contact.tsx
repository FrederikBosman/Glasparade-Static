import { site } from "../../content/site";
import { SOCIALS } from "../../lib/content";
import { BrandIcon } from "../ui/BrandIcon";
import { Icon } from "../ui/Icon";
import { Section } from "../ui/Section";

export function Contact() {
    const { email, bookingEmail } = site.contact;

    return (
        <Section id="contact" eyebrow="Contact" title="Get in touch">
            <div className="grid gap-10 md:grid-cols-2 md:gap-14">
                <div className="space-y-6">
                    <div>
                        <p className="text-sm text-muted">General & press</p>
                        <a
                            href={`mailto:${email}`}
                            className="mt-1 inline-block font-display text-2xl font-bold break-all underline decoration-pink decoration-2 underline-offset-4 transition hover:text-pink sm:text-3xl md:text-4xl"
                        >
                            {email}
                        </a>
                    </div>
                    {bookingEmail ? (
                        <div>
                            <p className="text-sm text-muted">Bookings</p>
                            <a
                                href={`mailto:${bookingEmail}`}
                                className="mt-1 inline-block font-display text-2xl font-bold break-all underline decoration-pink decoration-2 underline-offset-4 transition hover:text-pink sm:text-3xl"
                            >
                                {bookingEmail}
                            </a>
                        </div>
                    ) : null}
                </div>

                <ul className="grid gap-2 self-start">
                    {site.socials.map((s) => (
                        <li key={s.url}>
                            <a
                                href={s.url}
                                target="_blank"
                                rel="noreferrer"
                                className="group flex min-h-16 items-center gap-4 rounded-2xl border border-line bg-surface px-4 transition hover:border-ink/40 active:scale-[0.99]"
                            >
                                <BrandIcon src={SOCIALS[s.platform].icon} className="h-7 w-7" />
                                <span className="flex-1">
                                    <span className="block font-semibold">{SOCIALS[s.platform].label}</span>
                                    <span className="block text-sm text-muted">{s.handle}</span>
                                </span>
                                <Icon name="arrowUpRight" className="h-5 w-5 text-muted transition group-hover:text-ink" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </Section>
    );
}
