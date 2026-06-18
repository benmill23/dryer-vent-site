import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { locations } from "@/lib/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    {
      url: `${site.url}/dryer-vent-cleaning`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/commercial`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/property-managers`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/short-term-rentals`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...locations.map((l) => ({
      url: `${site.url}/dryer-vent-cleaning/${l.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
