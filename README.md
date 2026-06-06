# iPSCC — Remote Planning & Scheduling Consultancy

Marketing website for **International Planning & Scheduling Consultancy
Corporation (iPSCC)** — a remote planning & scheduling consultancy serving oil &
gas, petrochemical, power, mining and EPC clients.

Built as a fast, static, credibility-first brochure site. Contact is handled via
`mailto:` / `tel:` (no backend).

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (design tokens in `src/app/globals.css`)
- **MDX** blog (`src/content/blog/*.mdx`, parsed with `gray-matter` +
  `next-mdx-remote`)
- **lucide-react** icons
- Fully statically generated (SSG) — deploys anywhere, optimized for **Vercel**

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (static)
npm run lint
```

## Project structure

```
src/
  app/                 # routes (home, services, industries, how-remote-works,
                       #         case-studies, about, blog, contact, privacy)
    layout.tsx         # fonts, SEO metadata, Organization JSON-LD, header/footer
    sitemap.ts         # auto sitemap from nav + blog posts
    robots.ts
  components/
    layout/            # Header (sticky + mobile nav), Footer
    home/              # Hero, ProofMarquee
    sections/          # PageHero, CtaBand (reused across pages)
    cards/             # ServiceCard, IndustryCard
    ui/                # Container, Button, Badge, SectionHeading, Reveal,
                       # StatCounter, FaqAccordion, Icon
  content/blog/        # MDX blog posts
  lib/
    site.ts            # company info, nav, mailto template  <- edit contact here
    content.ts         # all marketing copy (services, industries, stats, ...)
    blog.ts            # MDX loader
public/brand/          # logos (sourced from the existing ipscc.net)
```

## Editing content

- **Copy** (services, industries, stats, case studies, testimonials, FAQs):
  `src/lib/content.ts`
- **Company / contact details**: `src/lib/site.ts`
- **Blog posts**: add an `.mdx` file in `src/content/blog/` with frontmatter
  (`title`, `description`, `date`, `author`, `tags`).

### Placeholders to replace before launch

Search the codebase for `[Placeholder` / `Sample` / `placeholder: true`:

- Real, verified **stats** (`stats` in `content.ts`)
- Real **case studies** and **testimonials** (currently flagged `Sample`)
- Actual **certifications / credentials** (`credentials` in `content.ts`)
- **Privacy policy** legal review (`src/app/privacy/page.tsx`)
- Optional **OG image** and analytics

## Deploy to Vercel

The repo is a standard Next.js app — Vercel auto-detects it. Either:

```bash
npx vercel          # preview deploy
npx vercel --prod   # production deploy
```

...or connect the Git repo in the Vercel dashboard. Set the production domain to
`ipscc.net`. No environment variables are required.
