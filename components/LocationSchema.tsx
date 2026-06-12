import { site, faqs } from "@/lib/site";
import type { Location } from "@/lib/locations";

// Per-city structured data: a LocalBusiness scoped to this city's areaServed,
// the primary Service, breadcrumbs, and the FAQ shown on the page.
export default function LocationSchema({ loc }: { loc: Location }) {
  const pageUrl = `${site.url}/dryer-vent-cleaning/${loc.slug}`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        "@id": `${pageUrl}#business`,
        name: `${site.name} — ${loc.city}`,
        image: `${site.url}/logo.png`,
        url: pageUrl,
        telephone: site.phone,
        priceRange: "$$",
        areaServed: {
          "@type": "City",
          name: loc.city,
          containedInPlace: { "@type": "AdministrativeArea", name: loc.county },
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: loc.city,
          addressRegion: site.state,
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: loc.geo.lat,
          longitude: loc.geo.lng,
        },
        openingHours: site.hoursSchema,
      },
      {
        "@type": "Service",
        name: `Dryer Vent Cleaning in ${loc.city}, ${site.state}`,
        serviceType: "Dryer Vent Cleaning",
        provider: { "@id": `${pageUrl}#business` },
        areaServed: { "@type": "City", name: loc.city },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Service Areas",
            item: `${site.url}/dryer-vent-cleaning`,
          },
          { "@type": "ListItem", position: 3, name: loc.display, item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.slice(0, 5).map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
