import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical writing on planning, scheduling and project controls for heavy industry — turnarounds, Primavera P6, integrated planning and the remote delivery model.",
  alternates: { canonical: "/blog" },
};

const gradients = [
  "from-azure-600 to-navy",
  "from-emerald-deep to-navy",
  "from-navy-600 to-ink",
  "from-azure-700 to-emerald-deep",
];

export default function BlogPage() {
  const posts = getAllPosts();
  const [lead, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Planning, scheduling & controls — in practice."
        intro="Field-tested thinking on the discipline that keeps heavy-industry projects on time and on budget."
      />

      <section className="bg-white py-20 lg:py-28">
        <Container>
          {posts.length === 0 ? (
            <p className="text-center text-slate-500">Posts coming soon.</p>
          ) : (
            <>
              {/* Featured */}
              {lead && (
                <Reveal>
                  <Link
                    href={`/blog/${lead.slug}`}
                    className="group grid overflow-hidden rounded-3xl border border-line lg:grid-cols-2"
                  >
                    <div className={`relative min-h-56 bg-gradient-to-br ${gradients[0]} p-8`}>
                      <div className="bg-blueprint absolute inset-0 opacity-40" />
                      <div className="relative flex h-full flex-col justify-between">
                        <Badge tone="emerald" className="bg-white/10 text-emerald-bright">
                          Featured
                        </Badge>
                        <span className="font-display text-2xl font-bold text-white/90">
                          iPSCC
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center p-8 lg:p-10">
                      <div className="flex flex-wrap items-center gap-2">
                        {lead.tags.slice(0, 2).map((t) => (
                          <Badge key={t} tone="azure">
                            {t}
                          </Badge>
                        ))}
                      </div>
                      <h2 className="mt-4 text-2xl leading-tight text-navy transition-colors group-hover:text-azure-700 lg:text-3xl">
                        {lead.title}
                      </h2>
                      <p className="mt-3 text-base leading-relaxed text-slate-600">
                        {lead.description}
                      </p>
                      <div className="mt-6 flex items-center gap-4 font-mono text-xs text-slate-400">
                        <span>{formatDate(lead.date)}</span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" />
                          {lead.readingTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              )}

              {/* Grid */}
              <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {rest.map((post, i) => (
                  <Reveal key={post.slug} delay={(i % 3) * 80}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(15,92,163,0.3)]"
                    >
                      <div className={`relative h-36 bg-gradient-to-br ${gradients[(i + 1) % gradients.length]}`}>
                        <div className="bg-blueprint absolute inset-0 opacity-40" />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <div className="flex flex-wrap gap-1.5">
                          {post.tags.slice(0, 2).map((t) => (
                            <Badge key={t} tone="muted">
                              {t}
                            </Badge>
                          ))}
                        </div>
                        <h3 className="mt-3 text-lg leading-snug text-navy transition-colors group-hover:text-azure-700">
                          {post.title}
                        </h3>
                        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600">
                          {post.description}
                        </p>
                        <div className="mt-5 flex items-center justify-between border-t border-line pt-4 font-mono text-xs text-slate-400">
                          <span>{formatDate(post.date)}</span>
                          <ArrowUpRight className="h-4 w-4 text-azure-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
