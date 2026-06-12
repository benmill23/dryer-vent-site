import Link from "next/link";
import Icon from "@/components/Icon";
import { serviceAreas, site } from "@/lib/site";
import { locations } from "@/lib/locations";

export default function ServiceArea() {
  return (
    <section id="service-area" className="section bg-brand-600 text-white">
      <div className="mx-auto max-w-5xl px-5 text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          Serving All of Metro {site.city}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-white/90">
          Same-day dryer vent cleaning available throughout the greater{" "}
          {site.city} area and surrounding counties.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {serviceAreas.map((c) => (
            <span
              key={c}
              className="rounded-lg bg-white/15 px-4 py-2 text-sm font-medium"
            >
              {c}
            </span>
          ))}
        </div>

        <p className="mt-10 text-sm font-semibold uppercase tracking-wider text-white/70">
          Cities We Serve — Tap Yours
        </p>
        <div className="mt-3 flex flex-wrap justify-center gap-2.5">
          {locations.map((l) => (
            <Link
              key={l.slug}
              href={`/dryer-vent-cleaning/${l.slug}`}
              className="rounded-lg bg-white/15 px-4 py-2 text-sm font-medium transition-colors hover:bg-white hover:text-brand-700"
            >
              {l.city}
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`tel:${site.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-white px-8 py-4 text-lg font-bold text-brand-700 transition-transform hover:scale-[1.02]"
          >
            <Icon name="phone" className="h-5 w-5" />
            Call {site.phone}
          </a>
          <Link
            href="/dryer-vent-cleaning"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/40 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10"
          >
            View All Service Areas
          </Link>
        </div>
      </div>
    </section>
  );
}
