// =============================================================================
// LOCATION PAGES — one dedicated, locally-unique landing page per city.
// Each entry MUST have genuinely distinct local detail (neighborhoods, zips,
// local angle) so Google treats them as real pages, not thin "doorway" copies.
//
// To add a city: copy a block, change the details, done. The page, metadata,
// and schema generate automatically. Roll out a few at a time with real local
// copy rather than mass-publishing templated pages.
// =============================================================================

export type Location = {
  slug: string; // URL: /dryer-vent-cleaning/<slug>
  city: string; // short name for headings, e.g. "Franklin"
  display: string; // full label, e.g. "Franklin, TN"
  county: string;
  population: string;
  drive: string; // drive time/distance from the Brentwood base
  zips: string[];
  neighborhoods: string[];
  // 1–2 sentences of UNIQUE local context used in the page intro.
  intro: string;
  // Local "why it matters here" angle — the vent problem common to this area.
  angle: string;
  geo: { lat: number; lng: number };
};

export const locations: Location[] = [
  {
    slug: "brentwood-tn",
    city: "Brentwood",
    display: "Brentwood, TN",
    county: "Williamson County",
    population: "~45,000",
    drive: "Our home base",
    zips: ["37027", "37024"],
    neighborhoods: ["Governors Club", "Annandale", "Taramore", "Raintree Forest"],
    intro:
      "Brentwood is our home base, so no one gets faster dryer vent service here. The city's large estate homes often have long, winding vent runs that trap lint and choke airflow over time.",
    angle:
      "Brentwood's spacious single-family homes frequently have vent runs of 20+ feet with multiple bends — exactly the setup where lint accumulates fastest and fire risk climbs.",
    geo: { lat: 36.0331, lng: -86.7828 },
  },
  {
    slug: "franklin-tn",
    city: "Franklin",
    display: "Franklin, TN",
    county: "Williamson County",
    population: "~89,000",
    drive: "About 20 minutes south",
    zips: ["37064", "37067", "37069"],
    neighborhoods: ["Westhaven", "Fieldstone Farms", "McKay's Mill", "Historic Downtown"],
    intro:
      "From the historic homes around downtown Franklin to master-planned neighborhoods like Westhaven, we keep Franklin dryers running safely and efficiently.",
    angle:
      "Franklin blends century-old historic homes with original ductwork and brand-new subdivisions — both prone to vent issues, whether from age or builder-grade installs.",
    geo: { lat: 35.9251, lng: -86.8689 },
  },
  {
    slug: "nolensville-tn",
    city: "Nolensville",
    display: "Nolensville, TN",
    county: "Williamson County",
    population: "~15,000",
    drive: "About 15 minutes southeast",
    zips: ["37135"],
    neighborhoods: ["Bent Creek", "Scales Farmstead", "Burberry Glen", "Winterset Woods"],
    intro:
      "Nolensville is one of the fastest-growing towns in the metro, full of newer single-family homes in neighborhoods like Bent Creek and Scales Farmstead. We keep those new vents clear and code-compliant.",
    angle:
      "Many Nolensville homes are recent builds where vents were installed quickly — under-sized or over-long runs that clog faster than owners expect.",
    geo: { lat: 35.9526, lng: -86.6694 },
  },
  {
    slug: "spring-hill-tn",
    city: "Spring Hill",
    display: "Spring Hill, TN",
    county: "Williamson & Maury County",
    population: "~59,000",
    drive: "About 30 minutes south",
    zips: ["37174", "37179"],
    neighborhoods: ["Wades Grove", "Campbell Station", "Cherry Grove", "The Crossings"],
    intro:
      "Spring Hill's explosive new-construction growth means thousands of newer dryer vents — and builder-grade installs that often need attention sooner than homeowners realize. We serve the whole area.",
    angle:
      "Fast-built Spring Hill subdivisions frequently have flexible foil ducts and long runs to the exterior wall, both of which trap lint and restrict airflow quickly.",
    geo: { lat: 35.7512, lng: -86.9300 },
  },
  {
    slug: "thompsons-station-tn",
    city: "Thompson's Station",
    display: "Thompson's Station, TN",
    county: "Williamson County",
    population: "~8,000",
    drive: "About 25 minutes south",
    zips: ["37179"],
    neighborhoods: ["Tollgate Village", "Bridgemore Village", "Canterbury"],
    intro:
      "Thompson's Station is a fast-growing, upscale community of larger lots and newer homes. We provide thorough dryer vent cleaning across Tollgate Village, Bridgemore, and beyond.",
    angle:
      "Larger Thompson's Station homes tend to have longer exterior vent runs, where even a season of lint buildup can noticeably increase drying time.",
    geo: { lat: 35.8048, lng: -86.9095 },
  },
  {
    slug: "mt-juliet-tn",
    city: "Mt. Juliet",
    display: "Mt. Juliet, TN",
    county: "Wilson County",
    population: "~40,000",
    drive: "About 30 minutes northeast",
    zips: ["37122", "37076"],
    neighborhoods: ["Providence", "Nichols Vale", "Lake Providence", "Willoughby Station"],
    intro:
      "Known as the \"City Between the Lakes,\" Mt. Juliet has grown fast around Providence and beyond. We keep its many family homes safe with professional dryer vent cleaning.",
    angle:
      "Mt. Juliet's wave of suburban construction means lots of homes hitting the 3–5 year mark — right when a first professional vent cleaning pays off most.",
    geo: { lat: 36.2009, lng: -86.5186 },
  },
  {
    slug: "hendersonville-tn",
    city: "Hendersonville",
    display: "Hendersonville, TN",
    county: "Sumner County",
    population: "~63,000",
    drive: "About 35 minutes north",
    zips: ["37075", "37077"],
    neighborhoods: ["Indian Lake", "Walton Ferry", "Fairvue Plantation", "Durham Farms"],
    intro:
      "The \"City by the Lake\" on Old Hickory Lake mixes established lakefront homes with newer communities like Durham Farms. We serve all of Hendersonville with reliable vent cleaning.",
    angle:
      "Hendersonville's established homes often have older, brittle vent ducting that cracks and traps lint — worth inspecting alongside a cleaning.",
    geo: { lat: 36.3048, lng: -86.6200 },
  },
  {
    slug: "murfreesboro-tn",
    city: "Murfreesboro",
    display: "Murfreesboro, TN",
    county: "Rutherford County",
    population: "~168,000",
    drive: "About 40 minutes southeast",
    zips: ["37127", "37128", "37129", "37130"],
    neighborhoods: ["Blackman", "Gateway", "Indian Hills", "The Avenue"],
    intro:
      "As one of Tennessee's largest and fastest-growing cities, Murfreesboro keeps us busy from Blackman to Gateway. We bring the same thorough, honest dryer vent service to the 'Boro.",
    angle:
      "With huge growth around Blackman and MTSU, Murfreesboro has a mix of student rentals and family homes — both easy to overlook for vent maintenance until drying slows down.",
    geo: { lat: 35.8456, lng: -86.3903 },
  },
  {
    slug: "gallatin-tn",
    city: "Gallatin",
    display: "Gallatin, TN",
    county: "Sumner County",
    population: "~52,000",
    drive: "About 45 minutes northeast",
    zips: ["37066"],
    neighborhoods: ["Fairvue", "Foxland Harbor", "Station Camp"],
    intro:
      "Gallatin pairs a historic downtown square with newer lake communities like Foxland Harbor. We provide dependable dryer vent cleaning and inspection across Sumner County's county seat.",
    angle:
      "Gallatin's blend of historic homes and lakeside new builds means vent setups vary widely — our camera inspection finds the issue fast either way.",
    geo: { lat: 36.3884, lng: -86.4467 },
  },
  {
    slug: "nashville-tn",
    city: "Nashville",
    display: "Nashville, TN",
    county: "Davidson County",
    population: "~690,000",
    drive: "About 20 minutes north",
    zips: ["37203", "37206", "37209", "37211", "37215"],
    neighborhoods: ["Green Hills", "Bellevue", "East Nashville", "Sylvan Park"],
    intro:
      "From historic East Nashville bungalows to the high-end homes of Green Hills, Music City's housing is as varied as its neighborhoods. We clean and inspect dryer vents across all of Davidson County.",
    angle:
      "Nashville's older neighborhoods are full of early-1900s homes with retrofitted, twist-and-turn vent runs that clog far more easily than modern straight-shot installs.",
    geo: { lat: 36.1627, lng: -86.7816 },
  },
  {
    slug: "green-hills-nashville-tn",
    city: "Green Hills",
    display: "Green Hills (Nashville), TN",
    county: "Davidson County",
    population: "Nashville neighborhood",
    drive: "About 15 minutes north",
    zips: ["37215", "37204", "37205"],
    neighborhoods: ["Green Hills", "Forest Hills", "Belle Meade border", "Lipscomb area"],
    intro:
      "Green Hills is one of Nashville's most upscale areas, full of large, established homes near the Mall at Green Hills. We provide discreet, meticulous dryer vent service that respects your home.",
    angle:
      "The larger, older homes in Green Hills and Forest Hills often have long original vent runs — prime candidates for buildup that's invisible until airflow drops.",
    geo: { lat: 36.1046, lng: -86.8164 },
  },
  {
    slug: "bellevue-nashville-tn",
    city: "Bellevue",
    display: "Bellevue (Nashville), TN",
    county: "Davidson County",
    population: "Nashville neighborhood",
    drive: "About 25 minutes northwest",
    zips: ["37221"],
    neighborhoods: ["River Plantation", "Harpeth River corridor", "Bellevue"],
    intro:
      "Bellevue is a family-friendly West Nashville community of wooded lots and single-family homes along the Harpeth River. We keep Bellevue dryers safe and efficient with professional vent cleaning.",
    angle:
      "Bellevue's wooded setting means more exterior vent caps blocked by debris and leaves — worth checking with every cleaning.",
    geo: { lat: 36.0717, lng: -86.9472 },
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
