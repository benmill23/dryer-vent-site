import Link from "next/link";
import Icon, { type IconName } from "@/components/Icon";
import { services, site } from "@/lib/site";

export default function Services() {
  return (
    <section id="services" className="section bg-white">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-600">
            What We Do
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-ink-900 sm:text-4xl">
            Complete Dryer Vent Services
          </h2>
          <p className="mt-3 text-lg text-ink-600">
            Everything you need to keep your home safe and your dryer running at
            peak performance — for homes and businesses across {site.city}.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const cardClass =
              "group rounded-2xl border border-ink-100 bg-ink-50 p-7 transition-all hover:-translate-y-0.5 hover:border-brand-100 hover:bg-white hover:shadow-card";
            const inner = (
              <>
                <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-xl bg-brand-100 p-3 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Icon name={s.icon as IconName} className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-ink-900">{s.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-600">
                  {s.short}
                </p>
                {s.slug === "commercial-dryer-vent" && (
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-brand-600">
                    Learn more
                    <Icon name="arrow" className="h-4 w-4" />
                  </span>
                )}
              </>
            );

            return s.slug === "commercial-dryer-vent" ? (
              <Link key={s.slug} href="/commercial" className={cardClass}>
                {inner}
              </Link>
            ) : (
              <div key={s.slug} className={cardClass}>
                {inner}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-brand-800"
          >
            Get Your Free Quote
            <Icon name="arrow" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
