import type { NextConfig } from "next";

/**
 * Legacy WordPress URL -> new URL map for the ipscc.net migration.
 * Sourced from the live All in One SEO sitemaps before cutover.
 * All emitted as permanent (308) redirects to preserve SEO equity.
 */
const legacyRedirects: { source: string; destination: string }[] = [
  // Core pages (slugs changed)
  { source: "/about-us", destination: "/about" },
  { source: "/contact-us", destination: "/contact" },
  { source: "/services-page", destination: "/services" },
  { source: "/ipscc", destination: "/" },

  // Blog posts (were at the site root, now under /blog) -> closest new content
  {
    source: "/advance-techniques-in-integrated-planning-scheduling",
    destination: "/blog/integrated-planning-petrochemical",
  },
  {
    source:
      "/petrochemical-plants-journey-to-excellence-through-integrated-planning",
    destination: "/blog/integrated-planning-petrochemical",
  },
  {
    source:
      "/empowering-petrochemical-innovations-the-strategic-role-of-ai-in-decision-making",
    destination: "/blog/integrated-planning-petrochemical",
  },
  {
    source: "/guide-to-optimizing-production-schedules",
    destination: "/blog/primavera-p6-progress-discipline",
  },
  {
    source:
      "/understanding-planning-and-scheduling-in-project-management-a-comprehensive-guide",
    destination: "/blog/primavera-p6-progress-discipline",
  },
  {
    source: "/why-planning-and-scheduling-are-non-negotiables",
    destination: "/blog/why-turnarounds-slip",
  },
  {
    source: "/top-5-challenges",
    destination: "/blog/why-turnarounds-slip",
  },
  {
    source: "/remote-planning-and-scheduling",
    destination: "/how-remote-works",
  },
  {
    source: "/remote-work-for-planning-and-scheduling",
    destination: "/blog/remote-planning-desk-myths",
  },

  // Legacy WordPress sitemaps -> our generated sitemap
  { source: "/sitemap_index.xml", destination: "/sitemap.xml" },
  { source: "/post-sitemap.xml", destination: "/sitemap.xml" },
  { source: "/page-sitemap.xml", destination: "/sitemap.xml" },
  { source: "/category-sitemap.xml", destination: "/sitemap.xml" },
  { source: "/metform-form-sitemap.xml", destination: "/sitemap.xml" },
];

// Note on trailing slashes: the old WordPress URLs Google indexed all end in
// "/". With Next's default (trailingSlash: false), an incoming "/about-us/" is
// first normalised to "/about-us" (308), which then matches the rule below and
// redirects to the final target (308). That two-hop chain passes full SEO
// equity and is fine; keeping trailingSlash: false keeps our canonicals clean.
const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...legacyRedirects.map((r) => ({ ...r, permanent: true })),
      // Category archives and RSS feed -> blog
      { source: "/category/:slug*", destination: "/blog", permanent: true },
      { source: "/feed", destination: "/blog", permanent: true },
      { source: "/feed/:path+", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
