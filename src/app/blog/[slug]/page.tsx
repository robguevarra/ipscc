import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, Clock, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { getAllPosts, getPost, getPostSlugs, formatDate } from "@/lib/blog";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getAllPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.legalName },
    publisher: { "@type": "Organization", name: site.legalName },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Header */}
      <section className="relative overflow-hidden bg-ink pt-32 pb-14 text-white sm:pt-40">
        <div className="bg-blueprint pointer-events-none absolute inset-0 opacity-70" />
        <div className="glow-azure pointer-events-none absolute inset-0" />
        <Container className="relative max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-emerald-bright"
          >
            <ArrowLeft className="h-4 w-4" />
            All insights
          </Link>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <Badge key={t} tone="emerald" className="bg-white/10 text-emerald-bright">
                {t}
              </Badge>
            ))}
          </div>
          <h1 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 font-mono text-xs text-slate-400">
            <span>{post.author}</span>
            <span>·</span>
            <span>{formatDate(post.date)}</span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readingTime}
            </span>
          </div>
        </Container>
      </section>

      {/* Body */}
      <section className="bg-white py-16 lg:py-20">
        <Container className="max-w-3xl">
          <article className="prose-ipscc">
            <p className="text-lg font-medium leading-relaxed text-navy">
              {post.description}
            </p>
            <hr className="my-8 border-line" />
            <MDXRemote source={post.content} />
          </article>

          {/* CTA inline */}
          <div className="mt-14 rounded-2xl border border-line bg-navy p-8 text-white">
            <h2 className="text-xl text-white">Facing this on a live asset?</h2>
            <p className="mt-2 text-sm text-slate-300">
              We deliver this discipline remotely, inside your own environment.
              Tell us about your project.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-deep"
            >
              <Mail className="h-4 w-4" />
              Talk to our planning desk
            </a>
          </div>
        </Container>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-line bg-paper py-16 lg:py-20">
          <Container>
            <h2 className="text-2xl text-navy">More insights</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(15,92,163,0.3)]"
                >
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.slice(0, 1).map((t) => (
                      <Badge key={t} tone="muted">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="mt-3 text-base leading-snug text-navy transition-colors group-hover:text-azure-700">
                    {p.title}
                  </h3>
                  <p className="mt-2 font-mono text-xs text-slate-400">
                    {formatDate(p.date)}
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
