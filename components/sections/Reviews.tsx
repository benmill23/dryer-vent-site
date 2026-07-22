import Icon from "@/components/Icon";
import { reviews, showReviews, site } from "@/lib/site";

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <Icon key={i} name="star" className="h-5 w-5" />
      ))}
    </div>
  );
}

export default function Reviews() {
  if (!showReviews) return null;

  return (
    <section id="reviews" className="section bg-white">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-600">
            Reviews
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-ink-900 sm:text-4xl">
            What Our Neighbors Say
          </h2>
          <p className="mt-3 text-lg text-ink-600">
            Real homeowners across Metro {site.city} trust {site.shortName} to
            keep their families safe.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-soft"
            >
              <Stars n={r.rating} />
              <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink-700">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-ink-100 pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 font-bold text-brand-700">
                  {r.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-bold text-ink-900">{r.name}</span>
                  <span className="block text-sm text-ink-500">
                    {r.location}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
