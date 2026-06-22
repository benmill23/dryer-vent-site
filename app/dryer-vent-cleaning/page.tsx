import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import Placeholder from "@/components/Placeholder";
import Contact from "@/components/sections/Contact";
import { locations } from "@/lib/locations";
import { site, serviceAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: `Dryer Vent Cleaning Service Areas | Metro ${site.city}`,
  description: `${site.name} provides same-day dryer vent cleaning across Metro ${site.city}, TN — including Brentwood, Franklin, Nashville, Mt. Juliet, Murfreesboro and more. Find your city.`,
  alternates: { canonical: "/dryer-vent-cleaning" },
};

export default function ServiceAreasHub() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white pt-28 pb-14 md:pt-32">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
            <Icon name="pin" className="h-4 w-4" />
            Serving All of Metro {site.city}
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-ink-900 sm:text-5xl">
            Dryer Vent Cleaning <span className="text-brand-600">Near You</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-600">
            From our base in Brentwood, we provide same-day dryer vent cleaning,
            inspection, and repair across the greater {site.city} area. Find your
            city below.
          </p>
          <a
            href={`tel:${site.phoneRaw}`}
            className="mt-7 inline-flex items-center justify-center gap-2.5 rounded-lg bg-brand-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-brand-600/20 transition-colors hover:bg-brand-800"
          >
            <Icon name="phone" className="h-5 w-5" />
            Call {site.phone}
          </a>

          <div className="mx-auto mt-12 max-w-4xl">
            <Placeholder
              label={`Our service van across Metro ${site.city}`}
              aspect="16 / 9"
              src="/1st-choice-appliance-truck.webp"
              className="shadow-card"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="mb-8 text-center text-2xl font-extrabold text-ink-900 sm:text-3xl">
            Cities We Serve
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((l) => (
              <Link
                key={l.slug}
                href={`/dryer-vent-cleaning/${l.slug}`}
                className="group flex items-start gap-4 rounded-2xl border border-ink-100 bg-ink-50 p-6 transition-all hover:border-brand-100 hover:bg-white hover:shadow-card"
              >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Icon name="pin" className="h-6 w-6" />
                </span>
                <span>
                  <span className="block font-bold text-ink-900">
                    Dryer Vent Cleaning in {l.city}
                  </span>
                  <span className="mt-0.5 block text-sm text-ink-500">
                    {l.county} · {l.drive}
                  </span>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-brand-50 p-7 text-center">
            <h3 className="text-lg font-bold text-ink-900">
              Don&apos;t see your town?
            </h3>
            <p className="mx-auto mt-2 max-w-2xl text-ink-600">
              We serve well beyond these cities — including {serviceAreas
                .slice(0, 6)
                .join(", ")}
              , and surrounding communities. Give us a call and we&apos;ll let
              you know if we can get to you same-day.
            </p>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
