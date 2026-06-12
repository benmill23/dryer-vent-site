import { site, faqs, serviceAreas, services } from "@/lib/site";

// Server component — injects structured data Google uses for rich results and
// the local "map pack". No fabricated ratings are included (Google penalizes
// fake review markup); add aggregateRating only once real reviews exist.
export default function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${site.url}/#business`,
    name: site.name,
    image: `${site.url}/logo.png`,
    logo: `${site.url}/logo.png`,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    priceRange: "$$",
    foundingDate: String(site.foundedYear),
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.state,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    areaServed: serviceAreas.map((s) => ({ "@type": "AdministrativeArea", name: s })),
    openingHoursSpecification: site.hoursSchema.map((h) => h),
    openingHours: site.hoursSchema,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dryer Vent Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.short },
      })),
    },
    parentOrganization: {
      "@type": "Organization",
      name: site.parent.name,
      url: site.parent.url,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
