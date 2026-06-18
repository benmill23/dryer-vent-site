// =============================================================================
// COMMERCIAL / MULTI-UNIT track — content for the /commercial landing page.
// Edit copy and the placeholder pricing here. Targets property managers, HOAs,
// apartment communities, laundromats, and other multi-dryer facilities.
// =============================================================================

export const commercialPropertyTypes = [
  {
    icon: "building",
    title: "Apartment Communities",
    text: "Per-unit cleaning for entire complexes, with scheduling that works around your residents and minimizes downtime.",
  },
  {
    icon: "shield",
    title: "Condos & HOAs",
    text: "Community-wide vent maintenance that protects every unit, lowers shared fire risk, and keeps your board's records clean.",
  },
  {
    icon: "wind",
    title: "Laundromats",
    text: "High-volume, back-to-back dryer cleaning that keeps machines running hot, fast, and profitable.",
  },
  {
    icon: "gauge",
    title: "Salons & Spas",
    text: "Frequent-use towel dryers clog fast. We keep airflow strong so your linens dry quickly between clients.",
  },
  {
    icon: "health",
    title: "Senior & Care Facilities",
    text: "Reliable, documented vent maintenance that helps protect vulnerable residents and satisfies safety inspections.",
  },
  {
    icon: "wrench",
    title: "Student & Multi-Family Housing",
    text: "Heavy-use shared laundry and long booster-fan duct runs cleaned thoroughly, on a schedule you set.",
  },
] as const;

export const commercialBenefits = [
  {
    title: "Reduce Fire Liability",
    text: "Lint-clogged vents are a top cause of structure fires. Documented cleaning is your first line of defense — and your insurer's expectation.",
  },
  {
    title: "Meet Code & Insurance Requirements",
    text: "Many policies and fire codes expect regular professional vent maintenance. We give you the paper trail to prove it.",
  },
  {
    title: "Fewer Tenant Complaints",
    text: "Clogged vents mean clothes that won't dry. Routine cleaning cuts service calls and keeps residents happy.",
  },
  {
    title: "Lower Energy Costs",
    text: "Clean vents let dryers run shorter cycles — real savings across dozens or hundreds of units.",
  },
  {
    title: "Extend Appliance Life",
    text: "Overheating from restricted airflow burns out dryers early. Clean vents protect your capital equipment.",
  },
  {
    title: "Documented Compliance Reports",
    text: "Every job comes with a detailed completion report — unit by unit — for your records, board, or fire marshal.",
  },
] as const;

export const commercialProcess = [
  {
    step: "1",
    title: "Free On-Site Assessment",
    text: "We walk the property, count units and vent types, and provide a clear, itemized bid — no obligation.",
  },
  {
    step: "2",
    title: "Scheduled Around You",
    text: "We work in phases that fit your operations and resident access, with notice you can share in advance.",
  },
  {
    step: "3",
    title: "Systematic Cleaning",
    text: "Each unit's full vent run is brushed, air-whipped, and airflow-tested — including booster-fan and roof systems.",
  },
  {
    step: "4",
    title: "Completion Report",
    text: "You receive a documented, unit-by-unit report plus a recommended re-service interval for ongoing compliance.",
  },
] as const;

// Commercial work is quote-only — every property is bid individually after a
// free on-site assessment. We intentionally do NOT publish per-unit prices.
export const commercialBidIncludes = [
  "Free on-site walkthrough & unit count",
  "Clear, itemized written bid",
  "Volume & recurring-contract discounts",
  "Phased scheduling around residents",
  "Unit-by-unit completion report",
];

export const commercialPricing = {
  note: "Every property is bid individually after a free on-site assessment, with volume discounts for larger communities and recurring maintenance contracts.",
};

export const commercialFaqs = [
  {
    q: "How is commercial dryer vent cleaning priced?",
    a: "Commercial jobs are bid per property after a free on-site assessment. Pricing is typically per-unit or per-vent, with volume discounts for larger communities and recurring contracts. You get a clear, itemized quote before any work begins.",
  },
  {
    q: "Can you work around our residents and operations?",
    a: "Yes. We schedule multi-unit work in phases that fit your operations and resident access, and we provide advance notice you can distribute. For laundromats and salons we can work during off-peak hours to minimize downtime.",
  },
  {
    q: "Do you provide documentation for compliance and insurance?",
    a: "Every commercial job includes a detailed, unit-by-unit completion report — ideal for your records, HOA board, insurer, or fire marshal — plus a recommended re-service interval.",
  },
  {
    q: "How often should a multi-unit property be serviced?",
    a: "Most apartment communities and HOAs benefit from professional vent cleaning every 12 months; high-use facilities like laundromats and student housing often need it every 6 months. We'll recommend an interval based on your property's usage during the assessment.",
  },
  {
    q: "Do you offer recurring maintenance contracts?",
    a: "Yes. Many property managers set up annual or semi-annual maintenance agreements so cleaning happens automatically on schedule, with locked-in volume pricing and consistent documentation.",
  },
  {
    q: "What areas do you serve for commercial work?",
    a: "We serve commercial and multi-family properties across the entire greater Nashville metro, including high-density areas like Antioch, La Vergne, Murfreesboro, and Smyrna in addition to all of our residential service cities.",
  },
];
