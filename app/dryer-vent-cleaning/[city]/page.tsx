import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import Placeholder from "@/components/Placeholder";
import LocationSchema from "@/components/LocationSchema";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import Reviews from "@/components/sections/Reviews";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import { locations, getLocation } from "@/lib/locations";
import { site, trustBadges } from "@/lib/site";

type Props = { params: Promise<{ city: string }> };

// Pre-render every location page at build time.
export function generateStaticParams() {
  return locations.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) return {};

  const title = `Dryer Vent Cleaning in ${loc.display} | ${site.shortName}`;
  const description = `Professional dryer vent cleaning in ${loc.display}. Same-day service, licensed & insured, upfront pricing. Serving ${loc.neighborhoods
    .slice(0, 3)
    .join(", ")} and all of ${loc.county}. Call ${site.phone}.`;

  return {
    title,
    description,
    alternates: { canonical: `/dryer-vent-cleaning/${loc.slug}` },
    openGraph: {
      title,
      description,
      url: `${site.url}/dryer-vent-cleaning/${loc.slug}`,
      images: ["/logo.png"],
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) notFound();

  const nearby = locations.filter((l) => l.slug !== loc.slug).slice(0, 6);

  return (
    <>
      <LocationSchema loc={loc} />

      {/* Local hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white pt-28 pb-14 md:pt-32">
        <div className="mx-auto max-w-6xl px-5">
          <nav className="mb-5 text-sm text-ink-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/dryer-vent-cleaning" className="hover:text-brand-600">
              Service Areas
            </Link>
            <span className="mx-2">/</span>
            <span className="text-ink-700">{loc.city}</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
                <Icon name="pin" className="h-4 w-4" />
                {loc.county} · {loc.drive}
              </span>
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.12] text-ink-900 sm:text-5xl">
                Dryer Vent Cleaning in{" "}
                <span className="text-brand-600">{loc.city}, {site.state}</span>
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-600">
                {loc.intro}
              </p>

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
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

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-brand-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-brand-600/20 transition-colors hover:bg-brand-800"
                >
                  <Icon name="phone" className="h-5 w-5" />
                  Call {site.phone}
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-ink-200 bg-white px-8 py-4 text-lg font-semibold text-ink-700 transition-colors hover:border-brand-600 hover:text-brand-600"
                >
                  Get a Free Quote
                </a>
              </div>
            </div>

            {/* Right column: local photo + info card */}
            <div className="space-y-5">
            <Placeholder
              label={`Dryer vent cleaning in ${loc.city}`}
              aspect="4 / 3"
              className="shadow-card"
            />
            <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card">
              <h2 className="text-sm font-bold uppercase tracking-wider text-ink-500">
                Serving {loc.city} &amp; Nearby
              </h2>
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                  Neighborhoods
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {loc.neighborhoods.map((n) => (
                    <span
                      key={n}
                      className="rounded-lg bg-brand-50 px-3 py-1 text-sm font-medium text-brand-800"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                  Zip Codes
                </p>
                <p className="mt-1.5 text-sm text-ink-600">
                  {loc.zips.join(" · ")}
                </p>
              </div>
              <div className="mt-5 border-t border-ink-100 pt-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                  Population
                </p>
                <p className="mt-1.5 text-sm text-ink-600">{loc.population}</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local angle band */}
      <section className="bg-brand-900 py-12 text-white">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <Icon name="fire" className="mx-auto h-8 w-8 text-orange-400" />
          <h2 className="mt-3 text-2xl font-bold">
            Why {loc.city} Homes Need Regular Vent Cleaning
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-white/80">
            {loc.angle}
          </p>
        </div>
      </section>

      <Services />
      <Pricing />
      <Reviews />

      {/* Nearby areas — internal linking */}
      <section className="section bg-ink-50">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <h2 className="text-2xl font-extrabold text-ink-900 sm:text-3xl">
            We Also Serve These Nearby Areas
          </h2>
          <p className="mt-2 text-ink-600">
            Same-day dryer vent cleaning across Metro {site.city}.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {nearby.map((n) => (
              <Link
                key={n.slug}
                href={`/dryer-vent-cleaning/${n.slug}`}
                className="rounded-lg border border-ink-200 bg-white px-5 py-2.5 font-semibold text-ink-700 transition-colors hover:border-brand-600 hover:text-brand-600"
              >
                {n.city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Faq />
      <Contact />
    </>
  );
}
