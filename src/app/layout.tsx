import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/site";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Remote Planning & Scheduling Consultancy`,
    template: `%s · ${site.name}`,
  },
  description: site.shortDescription,
  keywords: [
    "remote planning and scheduling",
    "Primavera P6 scheduling",
    "turnaround planning",
    "shutdown scheduling",
    "project controls",
    "oil and gas planning consultancy",
    "offshore planning desk",
  ],
  authors: [{ name: site.legalName }],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — Remote Planning & Scheduling Consultancy`,
    description: site.shortDescription,
    url: site.url,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Remote Planning & Scheduling Consultancy`,
    description: site.shortDescription,
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  email: site.email,
  telephone: site.phoneDisplay,
  description: site.shortDescription,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.address.line1,
    addressRegion: site.address.region,
    addressCountry: "PH",
  },
  areaServed: "Worldwide",
  knowsAbout: [
    "Project Planning",
    "Project Scheduling",
    "Primavera P6",
    "Turnaround & Shutdown Planning",
    "Project Controls",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${plex.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
