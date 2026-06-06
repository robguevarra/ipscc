import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.legalName} handles the limited personal information collected through this website.`,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        intro="We keep this simple because our site is simple. This page explains what limited information we collect and how we use it."
      />
      <section className="bg-white py-16 lg:py-24">
        <Container className="max-w-3xl">
          <div className="prose-ipscc">
            <p className="font-mono text-sm text-slate-400">
              Last updated: June 2026 · [Placeholder — have counsel review before
              publishing.]
            </p>

            <h2>Who we are</h2>
            <p>
              {site.legalName} (&ldquo;{site.name}&rdquo;, &ldquo;we&rdquo;) is a
              planning &amp; scheduling consultancy based in {site.address.full}.
              You can reach us at{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>

            <h2>What we collect</h2>
            <p>
              This website does not host contact forms or accounts and does not
              ask you to submit personal data through it. If you choose to email
              or call us, we receive the information you send — such as your name,
              company, contact details and the content of your message — so that
              we can respond.
            </p>

            <h2>How we use it</h2>
            <ul>
              <li>To reply to your enquiry and discuss a potential engagement.</li>
              <li>To provide services if we go on to work together.</li>
              <li>To meet our legal and record-keeping obligations.</li>
            </ul>

            <h2>What we don&apos;t do</h2>
            <p>
              We do not sell your information. We do not share it with third
              parties except where necessary to deliver a service you have
              engaged us for, or where required by law.
            </p>

            <h2>Analytics &amp; cookies</h2>
            <p>
              If we enable privacy-respecting analytics in future, we will update
              this page to describe what is measured.{" "}
              <span className="font-mono text-sm text-slate-400">
                [Placeholder — update when analytics are configured.]
              </span>
            </p>

            <h2>Your choices</h2>
            <p>
              You can ask us what information we hold about you, and request that
              we correct or delete it, by emailing{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>

            <h2>Changes</h2>
            <p>
              We may update this policy from time to time. The latest version
              will always be available on this page.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
