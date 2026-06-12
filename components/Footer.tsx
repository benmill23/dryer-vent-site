import Image from "next/image";
import { site, services, serviceAreas } from "@/lib/site";

export default function Footer() {
  const year = 2024; // bump as needed, or wire to a build-time constant

  return (
    <footer className="bg-ink-900 text-white">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt={site.name}
                width={48}
                height={70}
                className="h-14 w-auto"
              />
              <span className="text-lg font-bold leading-tight">
                {site.shortName}
                <br />
                <span className="text-sm font-medium text-white/60">
                  {site.tagline}
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Local, family-owned dryer vent cleaning serving Metro {site.city}{" "}
              since {site.foundedYear}. Licensed &amp; insured.
            </p>
            <a
              href={`tel:${site.phoneRaw}`}
              className="mt-4 inline-block text-xl font-bold text-brand-400 hover:text-brand-200"
            >
              {site.phone}
            </a>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/50">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <a
                    href="#services"
                    className="text-sm text-white/70 hover:text-white"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/50">
              Service Area
            </h3>
            <ul className="mt-4 space-y-2">
              {serviceAreas.slice(0, 6).map((c) => (
                <li key={c} className="text-sm text-white/70">
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/50">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#why" className="text-sm text-white/70 hover:text-white">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="/commercial"
                  className="text-sm text-white/70 hover:text-white"
                >
                  Commercial &amp; Multi-Unit
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="text-sm text-white/70 hover:text-white"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-white/70 hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-white/70 hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row">
          <p>
            © {year} {site.name}. All Rights Reserved.
          </p>
          <p>
            A division of{" "}
            <a
              href={site.parent.url}
              className="text-brand-400 hover:text-brand-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.parent.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
