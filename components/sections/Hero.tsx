import Icon from "@/components/Icon";
import Placeholder from "@/components/Placeholder";
import { site, trustBadges } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="bg-gradient-to-b from-brand-50 to-white pt-28 pb-16 md:pt-32 md:pb-24"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              Same-Day Service Available
            </span>

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.12] text-ink-900 sm:text-5xl">
              Professional <span className="text-brand-600">Dryer Vent Cleaning</span> in {site.city}, {site.state}
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              Protect your home and family from fire hazards, cut your energy
              bills, and extend the life of your dryer with expert vent cleaning
              from a local, family-owned team with {site.yearsExperience} years
              of experience.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 lg:justify-start">
              {trustBadges.map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-2 text-sm font-semibold text-ink-700"
                >
                  <Icon name="check" className="h-5 w-5 text-success" />
                  {b}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href={`tel:${site.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-brand-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-brand-600/20 transition-colors hover:bg-brand-800"
              >
                <Icon name="phone" className="h-5 w-5" />
                Call {site.phone}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-ink-200 bg-white px-8 py-4 text-lg font-semibold text-ink-700 transition-colors hover:border-brand-600 hover:text-brand-600"
              >
                Get a Free Quote
              </a>
            </div>

            <p className="mt-5 text-sm text-ink-500">
              ⭐️⭐️⭐️⭐️⭐️ Trusted by homeowners across Metro {site.city}
            </p>
          </div>

          <div className="relative">
            <Placeholder
              label="Technician cleaning a dryer vent"
              aspect="4 / 3"
              priority
              className="shadow-2xl"
            />
            {/* Floating trust badge */}
            <div className="absolute -bottom-5 left-4 hidden items-center gap-3 rounded-2xl bg-white p-4 shadow-card sm:flex">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-100 text-base font-extrabold text-brand-700">
                {site.yearsExperience}
              </span>
              <span className="text-left">
                <span className="block text-sm text-amber-400">★★★★★</span>
                <span className="block text-xs font-semibold text-ink-600">
                  Trusted across Metro {site.city}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
