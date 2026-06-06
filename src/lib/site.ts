export const site = {
  name: "iPSCC",
  legalName: "International Planning & Scheduling Consultancy Corporation",
  shortDescription:
    "Senior offshore planning & scheduling talent for oil & gas, petrochemical, power and heavy industry — enterprise precision at a fraction of onshore cost.",
  tagline: "Affordable precision in remote planning & scheduling.",
  url: "https://ipscc.net",
  email: "info@ipscc.net",
  phoneDisplay: "+63 927 400 9893",
  phoneHref: "+639274009893",
  address: {
    line1: "Malolos",
    region: "Bulacan",
    country: "Philippines",
    full: "Malolos, Bulacan 3000, Philippines",
  },
  hours: "Monday – Saturday, 9:00 AM – 5:00 PM (PHT)",
  founded: "2023",
} as const;

export const nav: { label: string; href: string }[] = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "How Remote Works", href: "/how-remote-works" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const mailtoQuote = `mailto:${site.email}?subject=${encodeURIComponent(
  "Project enquiry — Planning & Scheduling",
)}&body=${encodeURIComponent(
  [
    "Hello iPSCC team,",
    "",
    "We'd like to discuss a planning & scheduling engagement.",
    "",
    "Company:",
    "Industry / asset type:",
    "Scope (project / turnaround / maintenance / training):",
    "Timeline:",
    "Preferred tools (Primavera P6, MS Project, etc.):",
    "",
    "Best regards,",
  ].join("\n"),
)}`;
