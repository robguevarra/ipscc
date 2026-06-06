import type { MetadataRoute } from "next";
import { site, nav } from "@/lib/site";
import { getPostSlugs } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;

  const staticRoutes = [
    { path: "/", priority: 1 },
    ...nav.map((n) => ({ path: n.href, priority: 0.8 })),
    { path: "/privacy", priority: 0.3 },
  ];

  const routes: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${base}${r.path === "/" ? "" : r.path}`,
    changeFrequency: "monthly",
    priority: r.priority,
  }));

  const posts: MetadataRoute.Sitemap = getPostSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...routes, ...posts];
}
