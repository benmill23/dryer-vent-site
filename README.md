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

The form emails leads straight to your inbox using **Web3Forms** (free, no
server). To turn it on:

1. Go to <https://web3forms.com> and enter your email to get a free **access key**.
2. In the project root, create a file named `.env.local` containing:
   ```
   NEXT_PUBLIC_WEB3FORMS_KEY=your-access-key-here
   ```
3. Restart the dev server (`npm run dev`). Submissions now arrive in your email.

Until a key is set, the form politely tells visitors to call you instead, so
nothing breaks.

## Before you go live (checklist)

- [ ] Set your real domain in `lib/site.ts` (`url`) — used for SEO & schema.
- [ ] Add the Web3Forms key (above) so leads reach your inbox.
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

Add `NEXT_PUBLIC_WEB3FORMS_KEY` in the Vercel project's Environment Variables.

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
