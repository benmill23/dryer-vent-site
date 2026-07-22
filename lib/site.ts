// =============================================================================
// SITE CONFIG — Edit your business details here. Everything on the site reads
// from this file, so update once and it changes everywhere.
// =============================================================================

export const site = {
  name: "1st Choice Dryer Vent Cleaning",
  shortName: "1st Choice",
  tagline: "Dryer Vent Cleaning",
  // Used for SEO, schema, and canonical URLs. Update once you have the domain.
  url: "https://1stchoicedryervent.com",
  city: "Nashville",
  state: "TN",
  stateLong: "Tennessee",
  phone: "(615) 998-9770",
  phoneRaw: "6159989770",
  email: "1stchoicedryervent@gmail.com",
  yearsExperience: "30+",
  foundedYear: 1992,
  parent: {
    name: "1st Choice Appliance Repair",
    url: "https://appliancerepairgeek.com/",
  },
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { days: "Saturday", time: "8:00 AM – 1:00 PM" },
    { days: "Sunday", time: "Closed (emergency service available)" },
  ],
  // For LocalBusiness schema openingHours
  hoursSchema: [
    "Mo-Fr 08:00-18:00",
    "Sa 08:00-13:00",
  ],
  geo: { lat: 36.1627, lng: -86.7816 }, // Nashville center — refine if you have an address
  social: {
    google: "", // paste your Google Business Profile URL
    facebook: "",
  },
} as const;

export const trustBadges = [
  "Licensed & Insured",
  "30+ Years Experience",
  "Free Estimates",
  "Family Owned",
];

export const services = [
  {
    slug: "dryer-vent-cleaning",
    title: "Dryer Vent Cleaning",
    short:
      "Complete removal of lint, debris, and blockages from your entire vent system — from the dryer to the exterior vent cap.",
    icon: "wind",
  },
  {
    slug: "dryer-vent-inspection",
    title: "Dryer Vent Inspection",
    short:
      "Thorough inspection to identify blockages, damage, improper installation, or code violations before they become costly.",
    icon: "search",
  },
  {
    slug: "vent-installation-repair",
    title: "Vent Installation & Repair",
    short:
      "Professional installation of code-compliant rigid steel vent systems and repair of damaged or crushed dryer vents.",
    icon: "wrench",
  },
  {
    slug: "commercial-dryer-vent",
    title: "Commercial & Multi-Unit",
    short:
      "Cleaning for apartments, laundromats, salons, and HOAs. Booster-fan systems and long-run ducts welcome.",
    icon: "building",
  },
  {
    slug: "lint-trap-airflow",
    title: "Airflow Optimization",
    short:
      "Diagnostics to restore proper airflow, cut drying times, and lower energy use across your laundry setup.",
    icon: "gauge",
  },
] as const;

export const risks = [
  {
    icon: "fire",
    color: "#f97316",
    title: "Fire Hazard",
    text: "Lint buildup causes your dryer to overheat — the leading cause of dryer fires. Clean vents dramatically cut that risk.",
  },
  {
    icon: "clock",
    color: "#3b82f6",
    title: "Reduced Efficiency",
    text: "About 75% of lint bypasses the lint trap and collects in the duct, restricting airflow and doubling drying time.",
  },
  {
    icon: "money",
    color: "#22c55e",
    title: "Higher Energy Bills",
    text: "A clogged vent forces your dryer to run longer and hotter. Annual cleaning can save you up to $40 a month.",
  },
  {
    icon: "health",
    color: "#a855f7",
    title: "Health Risks",
    text: "Blocked vents trap moisture and can prevent proper venting of carbon monoxide from gas dryers — inviting mold.",
  },
] as const;

export const whyUs = [
  {
    title: "Fast, Flexible Scheduling",
    text: "We know your time is valuable, so we work around your schedule to get your vents cleaned without the runaround.",
  },
  {
    title: "Licensed, Insured & Certified",
    text: "Fully licensed and insured technicians you can trust inside your home.",
  },
  {
    title: "Fair, Upfront Pricing",
    text: "No surprises. We quote a flat, fair price before any work begins — no hidden fees.",
  },
  {
    title: "Local & Family Owned",
    text: "Proudly serving Nashville and surrounding communities since 1992.",
  },
  {
    title: "Satisfaction Guaranteed",
    text: "If you're not happy with the airflow after we clean, we'll make it right — guaranteed.",
  },
  {
    title: "Clean, Respectful Techs",
    text: "We protect your floors, work tidy, and leave your laundry space cleaner than we found it.",
  },
] as const;

export const process = [
  {
    step: "1",
    title: "Call or Book Online",
    text: "Reach out by phone or the form. We'll find an appointment time that fits your schedule.",
  },
  {
    step: "2",
    title: "Full Inspection",
    text: "Your tech inspects the full vent run, measures airflow, and shows you exactly what's going on.",
  },
  {
    step: "3",
    title: "Deep Clean",
    text: "Using professional equipment, we clean the entire duct from dryer to exterior cap, capturing all lint and debris.",
  },
  {
    step: "4",
    title: "Verify & Protect",
    text: "We re-test airflow, confirm the exterior vent flap works, and leave the area spotless.",
  },
] as const;

// =============================================================================
// PRICING — These are EDITABLE PLACEHOLDER prices based on typical local rates.
// Update the numbers to your real pricing in this block. Publishing transparent
// prices is a proven advantage in this market (most competitors hide theirs).
// =============================================================================
export const packages = [
  {
    name: "Residential Vent Cleaning",
    tagline: "Single-family homes",
    blurb:
      "Complete cleaning of your full vent line — from the dryer to the exterior cap — with before/after airflow readings.",
    priceFrom: "149",
    // Transparent floor-based pricing (the competitive wedge in this market)
    tiers: [
      { label: "Ground / 1st-floor vent", price: "149" },
      { label: "2nd-story vent", price: "199" },
      { label: "Roof vent", price: "249" },
    ],
    features: [
      "Full duct cleaning with professional equipment",
      "Lint & debris fully removed",
      "Exterior vent cap cleared & checked",
      "Before/after airflow test",
      "No trip, inspection, or hidden fees",
    ],
    cta: "Book a Cleaning",
    featured: true,
  },
  {
    name: "Inspection & Diagnostic",
    tagline: "Not sure what you need?",
    blurb:
      "A full camera inspection of your vent run to pinpoint clogs, crushed lines, code issues, or improper installs — credited toward your cleaning.",
    priceFrom: "89",
    tiers: [],
    features: [
      "Camera scope of the full vent run",
      "Airflow & blockage assessment",
      "Written findings + photos",
      "Honest recommendation — no upsell",
      "Fee credited toward your cleaning",
    ],
    cta: "Book an Inspection",
    featured: false,
  },
  {
    name: "Commercial & Multi-Unit",
    tagline: "Apartments, HOAs, laundromats",
    blurb:
      "Volume cleaning for apartment communities, condos, salons, and laundromats — including booster-fan systems and long shared duct runs.",
    priceFrom: "Custom",
    tiers: [],
    features: [
      "Per-unit & per-vent volume pricing",
      "Booster-fan & long-run systems",
      "Flexible scheduling, minimal downtime",
      "Detailed completion report for records",
      "Recurring maintenance plans available",
    ],
    cta: "Request a Quote",
    featured: false,
  },
] as const;

// Optional add-ons shown beneath the pricing tiers.
export const addOns = [
  { name: "Crush-resistant vent hose upgrade", price: "69" },
  { name: "Magnetic exterior vent cover", price: "89" },
  { name: "Louvre flush-mount vents", price: "" },
  { name: "Sturdy metal cap vents", price: "" },
];

export const guarantee =
  "If your dryer isn't moving air better after we clean, we'll come back and make it right — guaranteed. Upfront flat pricing, no surprises.";

// Master switch for all review/rating UI: the Reviews section, the "Reviews"
// nav links, the 5.0-rating badge, and the ★★★★★ trust badge. Keep this FALSE
// until there are real Google Business Profile reviews — then replace the
// placeholder testimonials below with real ones and flip this to true.
export const showReviews = false;

// NOTE: These are PLACEHOLDER testimonials so you can see the design.
// Replace with your real Google/Facebook reviews before showing them.
// Do NOT publish fabricated reviews or star ratings — Google penalizes fake
// review schema. Once you add real reviews, we can turn on rating rich-results.
export const reviews = [
  {
    name: "Sarah M.",
    location: "Brentwood, TN",
    rating: 5,
    text: "They pulled a huge amount of packed lint out of our vent. Our dryer runs like new and the tech was so professional. Highly recommend!",
  },
  {
    name: "James T.",
    location: "Hendersonville, TN",
    rating: 5,
    text: "Honest, fair pricing and no upsell. Explained everything and showed me the lint they pulled out. Our clothes dry in one cycle now.",
  },
  {
    name: "Linda R.",
    location: "Franklin, TN",
    rating: 5,
    text: "Booked online and they were out in no time. Clean, courteous, and quick. This is who I'll call every year from now on.",
  },
  {
    name: "Michael D.",
    location: "Nashville, TN",
    rating: 5,
    text: "Our dryer was taking three cycles to dry a load. After 1st Choice cleaned the vent it's back to one. Wish I'd called sooner.",
  },
  {
    name: "Patricia K.",
    location: "Mt. Juliet, TN",
    rating: 5,
    text: "Family-owned and it shows. They treated our home with respect and the price was exactly what they quoted. Five stars.",
  },
  {
    name: "Robert H.",
    location: "Murfreesboro, TN",
    rating: 5,
    text: "Came out for an inspection, found a crushed vent line behind the dryer, and repaired it on the spot. Great work.",
  },
] as const;

export const serviceAreas = [
  "Davidson County",
  "Williamson County",
  "Rutherford County",
  "Sumner County",
  "Wilson County",
  "Robertson County",
  "Cheatham County",
  "Maury County",
];

export const cities = [
  "Nashville",
  "Franklin",
  "Brentwood",
  "Hendersonville",
  "Mt. Juliet",
  "Murfreesboro",
  "Smyrna",
  "Gallatin",
  "Spring Hill",
  "Goodlettsville",
  "Antioch",
];

export const faqs = [
  {
    q: "How often should I have my dryer vent cleaned?",
    a: "For most households, once a year is recommended. If you have a large family, pets, or a long vent run, every 6–9 months is safer. Signs you need it sooner: clothes taking more than one cycle to dry, a hot dryer or laundry room, or a musty/burning smell.",
  },
  {
    q: "How much does dryer vent cleaning cost?",
    a: "Most standard residential dryer vent cleanings fall in an affordable flat-rate range, and we always quote you the price before we start — no surprises. Longer runs, roof vents, or repairs may cost more, but you'll approve any pricing first.",
  },
  {
    q: "How soon can you come out?",
    a: "We'll always give you the soonest available appointment when you call, and we work to fit your schedule across the greater Nashville area. If your situation is urgent, let us know and we'll do our best to prioritize you.",
  },
  {
    q: "How long does a dryer vent cleaning take?",
    a: "A typical residential cleaning takes 45 minutes to an hour. Longer vent runs, second-story or roof vents, or repairs can take a bit longer. Your tech will give you an accurate time estimate up front.",
  },
  {
    q: "What are the signs of a clogged dryer vent?",
    a: "The most common signs are clothes that are still damp after a full cycle, a dryer or laundry room that gets very hot, a burning or musty smell, excess lint around the dryer, or the dryer shutting off mid-cycle. Any of these means it's time for a cleaning.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. We are fully licensed and insured, and our technicians are trained and background-checked. You can have complete peace of mind having us in your home.",
  },
  {
    q: "Do you service apartments and commercial buildings?",
    a: "Yes. In addition to single-family homes, we service apartments, condos, HOAs, laundromats, salons, and other commercial properties, including booster-fan systems and long shared duct runs.",
  },
  {
    q: "Will cleaning my vent really lower my energy bill?",
    a: "It can. A clogged vent forces your dryer to run longer and hotter to dry each load, which uses more energy and wears out the appliance faster. Restoring proper airflow often cuts drying time significantly and can save up to $40 a month.",
  },
];
