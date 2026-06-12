import { site, serviceAreas } from "@/lib/site";
import { commercialFaqs } from "@/lib/commercial";

// Structured data for the commercial landing page: a commercial Service, the
// providing LocalBusiness, breadcrumbs, and the commercial FAQ.
export default function CommercialSchema() {
  const pageUrl = `${site.url}/commercial`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Commercial & Multi-Unit Dryer Vent Cleaning",
        serviceType: "Commercial Dryer Vent Cleaning",
        description:
          "Commercial and multi-family dryer vent cleaning for apartment communities, HOAs, condos, laundromats, and care facilities across the greater Nashville metro.",
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
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Commercial",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: commercialFaqs.map((f) => ({
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
