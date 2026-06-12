import Image from "next/image";

// =============================================================================
// IMAGE PLACEHOLDER
// A polished "photo goes here" box that matches the site's styling, so the
// layout looks intentional before real photography is added.
//
// To drop in a real photo later, just pass `src` (put the file in /public):
//   <Placeholder src="/photos/tech-at-work.jpg" label="Technician at work" />
// With no `src`, it renders the labeled placeholder.
// =============================================================================

type PlaceholderProps = {
  /** What photo belongs here — shown in the placeholder and used as alt text. */
  label: string;
  /** CSS aspect-ratio, e.g. "4/3", "16/9", "1/1", "4/5". Defaults to 4/3. */
  aspect?: string;
  /** Real image path once you have one (file lives in /public). */
  src?: string;
  className?: string;
  rounded?: string;
  priority?: boolean;
  sizes?: string;
};

export default function Placeholder({
  label,
  aspect = "4 / 3",
  src,
  className = "",
  rounded = "rounded-2xl",
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: PlaceholderProps) {
  if (src) {
    return (
      <div
        className={`relative overflow-hidden ${rounded} ${className}`}
        style={{ aspectRatio: aspect }}
      >
        <Image
          src={src}
          alt={label}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`Photo placeholder: ${label}`}
      className={`relative flex items-center justify-center overflow-hidden border-2 border-dashed border-brand-200 bg-gradient-to-br from-brand-50 via-white to-ink-100 ${rounded} ${className}`}
      style={{ aspectRatio: aspect }}
    >
      {/* subtle dot grid for texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: "radial-gradient(#bfdbfe 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      <div className="relative flex flex-col items-center gap-2 px-5 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-500">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path d="M9 3 7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3z" />
          </svg>
        </span>
        <span className="text-sm font-semibold text-ink-500">{label}</span>
        <span className="text-[0.7rem] font-bold uppercase tracking-wider text-brand-400">
          Photo placeholder
        </span>
      </div>
    </div>
  );
}
