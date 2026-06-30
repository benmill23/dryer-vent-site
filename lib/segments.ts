// =============================================================================
// SEGMENT LANDING PAGES — content for audience-specific pages that complement
// the broad /commercial page:
//   • /property-managers   — apartment & portfolio property managers
//   • /short-term-rentals  — Airbnb / VRBO hosts & STR managers
// All segments are QUOTE-ONLY (no published prices). Edit copy here.
// =============================================================================

// ---------------------------------------------------------------------------
// PROPERTY MANAGERS
// ---------------------------------------------------------------------------
export const pmChallenges = [
  {
    icon: "wrench",
    title: "Fewer Maintenance Tickets",
    text: "Clogged vents drive a steady stream of \"my dryer won't dry\" work orders. Routine cleaning cuts those calls and frees up your maintenance team.",
  },
  {
    icon: "shield",
    title: "Fire & Liability Protection",
    text: "Lint-packed vents are a top cause of multi-family fires. Documented cleaning protects residents, your property, and your standing with insurers.",
  },
  {
    icon: "building",
    title: "Portfolio-Wide Scheduling",
    text: "One vendor, one point of contact across every property you manage — coordinated visits, consistent documentation, predictable cadence.",
  },
  {
    icon: "search",
    title: "Turnover-Ready Units",
    text: "Add vent cleaning to your make-ready checklist so units lease faster and new residents never inherit a fire hazard or slow dryer.",
  },
  {
    icon: "check",
    title: "Audit-Ready Documentation",
    text: "Every visit comes with a unit-by-unit completion report — exactly what owners, boards, insurers, and fire marshals want to see.",
  },
  {
    icon: "money",
    title: "Predictable Budgeting",
    text: "Lock in volume pricing and a recurring schedule so vent maintenance becomes a planned line item, not a surprise emergency expense.",
  },
] as const;

export const pmBenefits = [
  {
    title: "Single Vendor, Every Property",
    text: "Manage one relationship across your whole portfolio instead of chasing down a different contractor for each building.",
  },
  {
    title: "Resident-Friendly Access",
    text: "We schedule in phases with advance notice you can distribute, and our techs are background-checked, uniformed, and respectful of units.",
  },
  {
    title: "Recurring Maintenance Plans",
    text: "Set it and forget it — annual or semi-annual service runs automatically on a schedule, with locked-in pricing and consistent reporting.",
  },
  {
    title: "Owner & Board Reporting",
    text: "Hand your owners or HOA board a clean paper trail that proves the property is being proactively maintained.",
  },
] as const;

export const pmProcess = [
  {
    step: "1",
    title: "Portfolio Walkthrough",
    text: "Tell us your properties and unit counts. We assess vent types and access, then return a clear, itemized bid — no obligation.",
  },
  {
    step: "2",
    title: "Coordinated Schedule",
    text: "We build a phased calendar that fits your operations and resident access, with notices you can forward in advance.",
  },
  {
    step: "3",
    title: "Systematic Cleaning",
    text: "Each unit's full vent run is cleaned with professional equipment and airflow-tested — booster-fan and roof systems included.",
  },
  {
    step: "4",
    title: "Report & Re-Service",
    text: "You get a unit-by-unit completion report and a recommended re-service interval to keep every property compliant.",
  },
] as const;

export const pmBidIncludes = [
  "Free portfolio walkthrough & unit count",
  "Itemized written bid per property",
  "Volume & recurring-contract pricing",
  "One point of contact for every building",
  "Unit-by-unit completion reports",
];

export const pmFaqs = [
  {
    q: "Can you service every property in our portfolio?",
    a: "Yes. We act as a single vendor across all of your managed properties throughout the greater Nashville metro — one point of contact, one consistent reporting format, and a coordinated schedule so nothing falls through the cracks.",
  },
  {
    q: "How is property-management work priced?",
    a: "Every property is bid individually after a free walkthrough, typically per-unit or per-vent, with volume discounts for larger portfolios and recurring contracts. You always get a clear, itemized quote before any work begins.",
  },
  {
    q: "Can you fit vent cleaning into our make-ready turns?",
    a: "Absolutely. Many managers add dryer vent cleaning to the make-ready checklist so units lease out fast-drying and fire-safe. We can coordinate around your turn timeline.",
  },
  {
    q: "Do you provide documentation for owners and insurers?",
    a: "Every visit includes a detailed, unit-by-unit completion report — ideal for owners, HOA boards, insurers, and fire marshals — plus a recommended re-service interval.",
  },
  {
    q: "Can you reduce our dryer-related work orders?",
    a: "That's one of the biggest wins. Routine vent cleaning eliminates the recurring \"my clothes won't dry\" tickets that tie up your maintenance staff, while also lowering fire risk and energy costs across the property.",
  },
];

// ---------------------------------------------------------------------------
// SHORT-TERM RENTALS (Airbnb / VRBO)
// ---------------------------------------------------------------------------
export const strReasons = [
  {
    icon: "wind",
    title: "Built for Heavy Linen Loads",
    text: "Every guest means a full turn of towels, sheets, and blankets. STR dryers run far more than a home dryer — and clog far faster.",
  },
  {
    icon: "star",
    title: "Protect Your 5-Star Reviews",
    text: "Damp towels and a dryer that takes three cycles turn into bad reviews. Strong airflow keeps linens fresh and guests happy.",
  },
  {
    icon: "fire",
    title: "Guest Fire Liability",
    text: "A lint-packed vent in a property full of guests is a serious liability. Documented cleaning is smart risk management for hosts.",
  },
  {
    icon: "clock",
    title: "Faster Turnarounds",
    text: "Fast check-out to check-in turnovers only work if laundry dries on the first cycle. Clean vents keep your cleaners on schedule.",
  },
  {
    icon: "building",
    title: "Multiple Listings, One Call",
    text: "Manage several rentals? We service your whole portfolio on a recurring schedule so every property stays guest-ready.",
  },
  {
    icon: "gauge",
    title: "Lower Operating Costs",
    text: "Clogged vents mean longer cycles and higher power bills — a real cost when the dryer runs after every single stay.",
  },
] as const;

export const strBenefits = [
  {
    title: "Work Around Your Bookings",
    text: "We schedule cleanings in the gaps between guests, or coordinate with your turnover crew, so a clean never costs you a booking.",
  },
  {
    title: "Recurring Host Plans",
    text: "Heavy-use rental dryers benefit from cleaning every 6 months. Set a recurring plan and we keep every listing on track automatically.",
  },
  {
    title: "Proof for Co-Hosts & Owners",
    text: "Get a completion report you can share with the owner or co-host group to show the property is being properly maintained.",
  },
  {
    title: "One Trusted Vendor",
    text: "Licensed, insured, background-checked techs you can confidently send into a guest-facing property — across every listing you run.",
  },
] as const;

export const strProcess = [
  {
    step: "1",
    title: "Tell Us Your Listings",
    text: "Share your rental addresses and dryer setups. We'll send a fast, no-obligation quote for one property or your whole portfolio.",
  },
  {
    step: "2",
    title: "Booked Around Guests",
    text: "We slot the cleaning into a vacancy or your turnover window so it never interferes with a check-in.",
  },
  {
    step: "3",
    title: "Full Vent Clean",
    text: "Using professional equipment, we clean the entire vent run, clear the exterior cap, and confirm strong airflow so linens dry in one cycle.",
  },
  {
    step: "4",
    title: "Report & Reminder",
    text: "You get a completion report plus a re-service reminder timed to your rental's usage — no need to track it yourself.",
  },
] as const;

export const strBidIncludes = [
  "Fast quote for one listing or many",
  "Scheduling around your bookings",
  "Full vent clean + airflow test",
  "Exterior vent cap cleared & checked",
  "Completion report for owners/co-hosts",
];

export const strFaqs = [
  {
    q: "How often should a short-term rental's dryer vent be cleaned?",
    a: "Because STR dryers run after nearly every guest, we recommend cleaning every 6 months — more often than the once-a-year guideline for a typical home. We'll suggest an interval based on your booking volume.",
  },
  {
    q: "Can you clean between guests without disrupting bookings?",
    a: "Yes. We schedule into your vacancies or coordinate directly with your turnover/cleaning crew so the vent cleaning happens during a gap and never costs you a booking.",
  },
  {
    q: "Do you work with hosts who have multiple properties?",
    a: "Definitely. We service single listings and full portfolios across the greater Nashville metro on a recurring schedule, with one point of contact and consistent reporting for every property.",
  },
  {
    q: "How much does it cost for an Airbnb or VRBO?",
    a: "Every property is quoted up front after we understand the dryer location and vent run — no published flat rate, just a fast, no-obligation quote. Recurring host plans and multi-property discounts are available.",
  },
  {
    q: "Why does it matter so much for a rental?",
    a: "Three reasons: guest safety (a clogged vent is a fire hazard), reviews (damp linens and slow dryers drive complaints), and turnaround speed (your cleaners need laundry dry on the first cycle). Clean vents protect all three.",
  },
];
