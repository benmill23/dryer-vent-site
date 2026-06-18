import type { Metadata } from "next";
import Link from "next/link";
import Icon, { type IconName } from "@/components/Icon";
import Placeholder from "@/components/Placeholder";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import { site, serviceAreas } from "@/lib/site";
import {
  strReasons,
  strBenefits,
  strProcess,
  strBidIncludes,
  strFaqs,
} from "@/lib/segments";

export const metadata: Metadata = {
  title: `Airbnb & Short-Term Rental Dryer Vent Cleaning | Metro ${site.city}`,
  description: `Dryer vent cleaning for Airbnb, VRBO, and short-term rentals across Metro ${site.city}, TN. Protect your reviews and guests, dry linens in one cycle, schedule around bookings. Free quotes — call ${site.phone}.`,
  alternates: { canonical: "/short-term-rentals" },
  openGraph: {
    title: `Short-Term Rental Dryer Vent Cleaning | ${site.name}`,
    description: `Keep Airbnb & VRBO linens drying fast and guests safe. Scheduling around bookings, recurring host plans, and free quotes across Metro ${site.city}.`,
    url: `${site.url}/short-term-rentals`,
    images: ["/logo.png"],
  },
};

export default function ShortTermRentalsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}/short-term-rentals#service`,
        name: "Short-Term Rental Dryer Vent Cleaning",
        serviceType: "Vacation Rental Dryer Vent Cleaning",
        description:
          "Dryer vent cleaning for Airbnb, VRBO, and short-term rental hosts, scheduled around bookings with recurring host plans and completion reports.",
        provider: {
          "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
          name: site.name,
          telephone: site.phone,
          url: site.url,
          image: `${site.url}/logo.png`,
          priceRange: "$$",
        },
        areaServed: serviceAreas.map((s) => ({
          "@type": "AdministrativeArea",
          name: s,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: strFaqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white pt-28 pb-14 md:pt-32">
        <div className="mx-auto max-w-6xl px-5">
          <nav className="mb-5 text-sm text-ink-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-ink-700">Short-Term Rentals</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
                <Icon name="star" className="h-4 w-4" />
                For Airbnb &amp; VRBO Hosts
              </span>
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.12] text-ink-900 sm:text-5xl">
                Dryer Vent Cleaning for{" "}
                <span className="text-shimmer">Short-Term Rentals</span>
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-600">
                Your rental&apos;s dryer runs after every guest — so it clogs
                fast. We keep linens drying in one cycle, protect your guests
                and your reviews, and schedule around your bookings across Metro{" "}
                {site.city}. Free quotes, no published flat rate.
              </p>

              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                {[
                  "Scheduled around bookings",
                  "Recurring host plans",
                  "Multi-listing friendly",
                  "Licensed & insured",
                ].map((b) => (
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
                  className="cta-glow inline-flex items-center justify-center gap-2.5 rounded-lg bg-brand-600 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-brand-800"
                >
                  <Icon name="phone" className="h-5 w-5" />
                  Call {site.phone}
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-ink-200 bg-white px-8 py-4 text-lg font-semibold text-ink-700 transition-colors hover:border-brand-600 hover:text-brand-600"
                >
                  Get a Host Quote
                </a>
              </div>
            </div>

            {/* Right column: photo + free-quote card */}
            <div className="space-y-5">
              <Placeholder
                label="Fresh linens in a short-term rental"
                aspect="4 / 3"
                className="shadow-card"
              />
              <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card">
                <h2 className="text-sm font-bold uppercase tracking-wider text-ink-500">
                  What Your Free Quote Includes
                </h2>
                <ul className="mt-4 space-y-3">
                  {strBidIncludes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-ink-600"
                    >
                      <Icon
                        name="check"
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-success"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-5 py-3 font-bold text-white transition-colors hover:bg-brand-800"
                >
                  Get My Host Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why STR hosts need it */}
      <section className="section bg-white">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-brand-600">
              Why It Matters for Rentals
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-ink-900 sm:text-4xl">
              Rental Dryers Aren&apos;t Like Home Dryers
            </h2>
            <p className="mt-3 text-lg text-ink-600">
              Back-to-back guest turns mean more loads, more lint, and more at
              stake — your reviews, your guests, and your turnaround time.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {strReasons.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-ink-100 bg-ink-50 p-7"
              >
                <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-xl bg-brand-100 p-3 text-brand-600">
                  <Icon name={r.icon as IconName} className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-ink-900">{r.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-600">
                  {r.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits band */}
      <section className="section bg-brand-900 text-white">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Made for the Way Hosts Operate
            </h2>
            <p className="mt-3 text-lg text-white/75">
              Around your bookings, across your listings, with proof you can
              share.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {strBenefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-white/10 bg-white/[0.07] p-6"
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-success/20">
                    <Icon name="check" className="h-5 w-5 text-success" />
                  </span>
                  <h3 className="font-bold">{b.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-ink-50">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-brand-600">
              How It Works
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-ink-900 sm:text-4xl">
              Booked Around Your Calendar
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {strProcess.map((p, i) => (
              <div key={p.step} className="relative">
                {i < strProcess.length - 1 && (
                  <div className="absolute left-[calc(50%+2rem)] top-7 hidden h-px w-[calc(100%-4rem)] bg-brand-200 lg:block" />
                )}
                <div className="relative flex flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-xl font-extrabold text-white shadow-lg shadow-brand-600/25">
                    {p.step}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-ink-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {p.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-ink-600">
            Manage a building or whole portfolio of rentals? See our{" "}
            <Link
              href="/property-managers"
              className="font-semibold text-brand-600 hover:text-brand-800"
            >
              property manager
            </Link>{" "}
            services.
          </p>
        </div>
      </section>

      <Faq
        items={strFaqs}
        intro="Common questions from Airbnb, VRBO, and short-term rental hosts."
      />

      <Contact />
    </>
  );
}
