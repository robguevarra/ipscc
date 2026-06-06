# iPSCC Website Rebuild — Design Spec

Date: 2026-06-06
Status: Approved (design + tech approach A)

## 1. Context & Goal

**iPSCC** (International Planning & Scheduling Consultancy Corporation) is a
Philippines-based B2B consultancy that delivers **remote project planning &
scheduling** to oil & gas, petrochemical, power, and heavy-industrial clients.
Core pitch: senior offshore planning/scheduling talent at a fraction of onshore
cost — "affordable precision."

**Primary site goal:** a **credibility-first brochure site** that builds trust
with industrial buyers and points prospects to contact (mailto + phone). No
backend, no booking system, no forms-to-server (static contact only).

## 2. Audit of current ipscc.net (what to fix)

1. Almost no trust signals (no certs, team, case studies, logos, testimonials,
   quantified results) — biggest gap for enterprise buyers.
2. Generic, undifferentiated copy; "affordable" claim with zero proof numbers.
3. Diffuse, inconsistent CTAs; no focused conversion path.
4. Shallow service descriptions ("Read More" stubs); buyer can't self-qualify.
5. No story for the remote model (process, tooling, data security, timezones).
6. Dated template, weak SEO, undercuts premium positioning.

## 3. Positioning

Reframe "cheap remote help" → **"Senior offshore planning & scheduling talent —
enterprise precision at a fraction of onshore cost."** Every page reinforces
trust via credentials, process, proof, and results.

## 4. Tech (Approach A — approved)

- Next.js (App Router) + TypeScript + Tailwind CSS, fully static (SSG).
- MDX for blog posts.
- Deployed to Vercel. New git repo initialized in project folder.
- SEO: per-page metadata, `sitemap.ts`, `robots.ts`, Organization JSON-LD.
- Accessibility (semantic HTML, focus states, color contrast), mobile-first.

## 5. Design language

- Modern industrial-B2B. Authority **navy** base + brand **azure** (from logo)
  + single **emerald "on-track" accent** (nods to logo growth arrow).
- Distinctive engineered typography: display sans for headings + clean body sans
  (NOT Inter/Arial defaults).
- Generous whitespace, metric callouts, simple process/Gantt-style diagrams,
  credential badges, subtle scroll/load motion. Fast, accessible.
- Reuse existing logo as-is (per direction); generate favicons from it.

## 6. Sitemap

1. Home — hero, value prop, proof strip, services snapshot, how-remote-works,
   results/metrics, testimonials (placeholder), CTA.
2. Services — 6 services with depth (problem → what we do → deliverables → tools).
3. Industries — Oil & Gas, Petrochemical, Power/Energy, Mining, Construction/EPC.
4. How Remote Works — process, cadence, tooling (Primavera P6 etc.), data
   security & timezone story.
5. Case Studies / Results — outcome templates with placeholders for real numbers.
6. About — story, mission/vision/values, team & credentials (placeholders).
7. Blog — MDX; seed with a few rewritten posts from current site.
8. Contact — mailto + phone/address/hours, map, FAQ.
9. Privacy page, custom 404, footer, favicons, sitemap/robots.

## 7. Content rule

Polished, conversion-focused copy written throughout. Clearly-marked
`[PLACEHOLDER]` for items only the client has: real testimonials, client logos,
exact certifications, case-study numbers, team bios/photos.

## 8. Out of scope (YAGNI)

Booking embeds, server-side forms, CMS, auth, databases, e-commerce, i18n.
Can be added later given the Next.js foundation.
