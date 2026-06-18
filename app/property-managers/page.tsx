import type { Metadata } from "next";
import Link from "next/link";
import Icon, { type IconName } from "@/components/Icon";
import Placeholder from "@/components/Placeholder";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import { site, serviceAreas } from "@/lib/site";
import {
  pmChallenges,
  pmBenefits,
  pmProcess,
  pmBidIncludes,
  pmFaqs,
} from "@/lib/segments";

export const metadata: Metadata = {
  title: `Dryer Vent Cleaning for Property Managers | Metro ${site.city}`,
  description: `Portfolio-wide dryer vent cleaning for property managers across Metro ${site.city}, TN. Fewer work orders, documented compliance, recurring plans, and free property bids. Call ${site.phone}.`,
  alternates: { canonical: "/property-managers" },
  openGraph: {
    title: `Dryer Vent Cleaning for Property Managers | ${site.name}`,
    description: `One vendor for your whole portfolio: fewer maintenance tickets, fire-liability protection, and audit-ready documentation across Metro ${site.city}.`,
    url: `${site.url}/property-managers`,
    images: ["/logo.png"],
  },
};

export default function PropertyManagersPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}/property-managers#service`,
        name: "Dryer Vent Cleaning for Property Managers",
        serviceType: "Multi-Unit Dryer Vent Cleaning",
        description:
          "Portfolio-wide dryer vent cleaning for apartment and property managers, with recurring plans and unit-by-unit compliance reporting.",
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
        mainEntity: pmFaqs.map((f) => ({
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
            <span className="text-ink-700">Property Managers</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
                <Icon name="building" className="h-4 w-4" />
                For Apartment &amp; Portfolio Managers
              </span>
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.12] text-ink-900 sm:text-5xl">
                Dryer Vent Cleaning Built for{" "}
                <span className="text-shimmer">Property Managers</span>
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-600">
                One trusted vendor for every property you manage across Metro{" "}
                {site.city} — fewer dryer work orders, lower fire liability, and
                the audit-ready documentation your owners and insurers expect.
                Every property is bid free, with no published flat rate.
              </p>

              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                {[
                  "Fewer maintenance tickets",
                  "Recurring portfolio plans",
                  "Unit-by-unit reports",
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
                  Request a Portfolio Quote
                </a>
              </div>
            </div>

            {/* Right column: photo + free-bid card */}
            <div className="space-y-5">
              <Placeholder
                label="Apartment community laundry maintenance"
                aspect="4 / 3"
                className="shadow-card"
              />
              <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card">
                <h2 className="text-sm font-bold uppercase tracking-wider text-ink-500">
                  What Your Free Quote Includes
                </h2>
                <ul className="mt-4 space-y-3">
                  {pmBidIncludes.map((item) => (
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
                  Get My Portfolio Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges we solve */}
      <section className="section bg-white">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-brand-600">
              What We Solve
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-ink-900 sm:text-4xl">
              Less Hassle, Less Risk, Less Cost
            </h2>
            <p className="mt-3 text-lg text-ink-600">
              Dryer vents are an easy line item to overlook — until they
              generate work orders, complaints, or worse.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pmChallenges.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-ink-100 bg-ink-50 p-7"
              >
                <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-xl bg-brand-100 p-3 text-brand-600">
                  <Icon name={c.icon as IconName} className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-ink-900">{c.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-600">
                  {c.text}
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
              Why Managers Make Us Their Standard Vendor
            </h2>
            <p className="mt-3 text-lg text-white/75">
              Predictable, documented, portfolio-wide vent maintenance — handled.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pmBenefits.map((b) => (
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
              From Walkthrough to Documented Done
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pmProcess.map((p, i) => (
              <div key={p.step} className="relative">
                {i < pmProcess.length - 1 && (
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
            Also run a single building or HOA? See our{" "}
            <Link
              href="/commercial"
              className="font-semibold text-brand-600 hover:text-brand-800"
            >
              commercial &amp; multi-unit
            </Link>{" "}
            services.
          </p>
        </div>
      </section>

      <Faq
        items={pmFaqs}
        intro="Common questions from apartment and portfolio property managers."
      />

      <Contact />
    </>
  );
}
