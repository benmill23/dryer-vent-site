import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="section bg-white">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-600">
              Get In Touch
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-ink-900 sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-600">
              Don&apos;t wait until it&apos;s too late. Protect your home and
              family with professional dryer vent cleaning. Call us today or fill
              out the form to schedule your service.
            </p>

            <div className="mt-8 space-y-5">
              <ContactRow
                icon="phone"
                title={site.phone}
                href={`tel:${site.phoneRaw}`}
                sub="Call for a free quote"
              />
              <ContactRow
                icon="email"
                title={site.email}
                href={`mailto:${site.email}`}
                sub="Email us anytime"
              />
              <ContactRow
                icon="clock2"
                title="Mon–Fri 8am–6pm · Sat 8am–1pm"
                sub="Emergency service available"
              />
              <ContactRow
                icon="pin"
                title={`${site.city}, ${site.state}`}
                sub={`Serving all of Metro ${site.city}`}
              />
            </div>

            <div className="mt-8 rounded-2xl bg-brand-50 p-6">
              <p className="font-bold text-brand-800">
                ⚡ Appointments fill fast
              </p>
              <p className="mt-1 text-sm text-ink-600">
                Call today to lock in the next available appointment across
                Metro {site.city}.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  title,
  sub,
  href,
}: {
  icon: "phone" | "email" | "clock2" | "pin";
  title: string;
  sub: string;
  href?: string;
}) {
  const inner = (
    <>
      <span className="flex h-13 w-13 flex-shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <span>
        <span className="block text-lg font-bold text-ink-900">{title}</span>
        <span className="block text-sm text-ink-500">{sub}</span>
      </span>
    </>
  );

  return href ? (
    <a href={href} className="flex items-center gap-4 transition-opacity hover:opacity-80">
      {inner}
    </a>
  ) : (
    <div className="flex items-center gap-4">{inner}</div>
  );
}
