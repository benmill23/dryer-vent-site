# 1st Choice Dryer Vent Cleaning — Website

Marketing site for 1st Choice Dryer Vent Cleaning (Nashville, TN). Built with
**Next.js 16 (App Router)**, **React 19**, and **Tailwind CSS v4**.

## Quick start

```bash
npm install        # already done if you cloned with node_modules
npm run dev        # http://localhost:3000
```

## Editing your content

**Almost everything lives in one file:** [`lib/site.ts`](lib/site.ts).
Open it to change your phone number, hours, services, FAQs, reviews, and
service areas — the whole site reads from it. No need to touch the components.

## Connecting the contact form (important)

The form emails leads straight to your inbox using **FormSubmit.co** (free, no
account, no API key, no server). Leads are sent to the **`email`** set in
[`lib/site.ts`](lib/site.ts).

To turn it on:

1. Make sure `email` in `lib/site.ts` is an inbox you can actually open.
2. Deploy (or run locally) and submit the form **once**. FormSubmit emails that
   address a one-time **"Confirm your email"** link — click it.
3. Done. Every submission after that lands in your inbox, no further setup.

Want leads to go somewhere other than the public `email`? Add this to
`.env.local` (and to Vercel's env vars) — it overrides the destination:
```
NEXT_PUBLIC_FORMSUBMIT_EMAIL=where-leads-should-go@example.com
```

If a submission ever fails, the form politely tells visitors to call you
instead, so nothing breaks.

## Before you go live (checklist)

- [ ] Set your real domain in `lib/site.ts` (`url`) — used for SEO & schema.
- [ ] Confirm the FormSubmit activation email (above) so leads reach your inbox.
- [ ] Replace the **placeholder reviews** in `lib/site.ts` with your real Google
      reviews. (Don't publish fake reviews — Google penalizes fabricated review
      markup. We left star-rating schema OFF until you have real ones.)
- [ ] Add your Google Business Profile + Facebook URLs in `lib/site.ts` (`social`).
- [ ] Confirm business hours, email address, and service-area counties/cities.
- [ ] (Optional) Replace `public/logo.png` if you have a higher-res transparent PNG.

## SEO that's already built in

- `LocalBusiness` + `FAQPage` structured data (JSON-LD) for Google rich results
  and the local map pack — see `components/JsonLd.tsx`.
- Optimized title/description/OpenGraph metadata — see `app/layout.tsx`.
- Auto-generated `sitemap.xml` and `robots.txt` — `app/sitemap.ts`, `app/robots.ts`.

## Deploying

The fastest path is **Vercel** (the team behind Next.js):

```bash
npm i -g vercel
vercel            # preview deploy
vercel --prod     # production
```

The contact form (FormSubmit.co) needs no env vars to work — just confirm the
one-time activation email after your first submission. Only set
`NEXT_PUBLIC_FORMSUBMIT_EMAIL` in Vercel's Environment Variables if you want
leads delivered to a different address than the public `email` in `lib/site.ts`.

## Project structure

```
app/                 routes, layout, metadata, sitemap, robots
components/          Header, Footer, StickyCta, ContactForm, Icon, JsonLd
components/sections/ Hero, Risks, Services, Process, WhyUs, Reviews,
                     ServiceArea, Faq, Contact
lib/site.ts          ← all editable business content
public/logo.png      optimized logo (was 5.3 MB → ~320 KB)
legacy/              the original single-file static site, kept for reference
```
