import Image from "next/image";
import Icon from "@/components/Icon";
import Wave from "@/components/Wave";
import { site, trustBadges } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-brand-100/60 to-brand-50 pt-28 pb-36 md:pt-32 md:pb-44"
    >
      {/* soft decorative blue glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand-700 shadow-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              Same-Day Service Available
            </span>

            <h1 className="animate-fade-up-1 mt-5 text-4xl font-extrabold leading-[1.12] text-ink-900 sm:text-5xl">
              Professional{" "}
              <span className="text-shimmer">Dryer Vent Cleaning</span> in{" "}
              {site.city}, {site.state}
            </h1>

            <p className="animate-fade-up-2 mt-5 text-lg leading-relaxed text-ink-600">
              Protect your home and family from fire hazards, cut your energy
              bills, and extend the life of your dryer with expert vent cleaning
              from a local, family-owned team with {site.yearsExperience} years
              of experience.
            </p>

            <div className="animate-fade-up-2 mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 lg:justify-start">
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

            <div className="animate-fade-up-3 mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href={`tel:${site.phoneRaw}`}
                className="cta-glow inline-flex items-center justify-center gap-2.5 rounded-lg bg-brand-600 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-brand-800"
              >
                <Icon name="phone" className="h-5 w-5" />
                Call {site.phone}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-brand-200 bg-white px-8 py-4 text-lg font-semibold text-ink-700 transition-colors hover:border-brand-600 hover:text-brand-600"
              >
                Get a Free Quote
              </a>
            </div>

            <p className="animate-fade-up-3 mt-5 text-sm text-ink-500">
              ⭐️⭐️⭐️⭐️⭐️ Trusted by homeowners across Metro {site.city}
            </p>
          </div>

          <div className="animate-fade-up-2 flex justify-center">
            {/* Logo as the hero centerpiece — standalone, no background */}
            <Image
              src="/logo.png"
              alt={site.name}
              width={600}
              height={885}
              priority
              className="h-auto w-auto max-h-96 drop-shadow-xl sm:max-h-[34rem]"
            />
          </div>
        </div>
      </div>

      {/* Curve down into the deep-blue Risks band */}
      <Wave fill="#0c2340" layered />
    </section>
  );
}
