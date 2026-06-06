/* Centralised marketing copy. Edit here to update the whole site.
 * Items wrapped in [PLACEHOLDER ...] need the client's real data. */

export type Service = {
  slug: string;
  icon: string;
  title: string;
  short: string;
  problem: string;
  whatWeDo: string[];
  deliverables: string[];
  tools: string[];
};

export const services: Service[] = [
  {
    slug: "integrated-planning-scheduling",
    icon: "CalendarRange",
    title: "Strategic Integrated Planning & Scheduling",
    short:
      "Build realistic, resource-loaded schedules that hold up under pressure — and keep them current.",
    problem:
      "Schedules drift the moment they meet reality. Optimistic baselines, missing logic links and no resource loading mean dates slip and nobody sees it coming until it's too late.",
    whatWeDo: [
      "Develop CPM baselines with full activity logic, calendars and constraints",
      "Resource- and cost-load schedules for honest, defensible forecasts",
      "Run weekly progress updates, critical-path and float analysis",
      "Build look-ahead schedules (3/6-week) the field actually uses",
    ],
    deliverables: [
      "Approved Level 3/4 baseline schedule",
      "Weekly progress & variance reports",
      "Critical path & float analysis",
      "Recovery & what-if scenarios",
    ],
    tools: ["Primavera P6", "Microsoft Project", "Power BI", "Excel"],
  },
  {
    slug: "maintenance-shutdown-turnaround",
    icon: "Wrench",
    title: "Maintenance, Shutdown & Turnaround Planning",
    short:
      "Hour-by-hour STO plans that compress downtime and keep safety and cost in control.",
    problem:
      "Turnarounds live or die on the plan. Poor scope freeze, weak sequencing and no integrated readiness tracking turn a 20-day shutdown into 30 — and blow the budget with it.",
    whatWeDo: [
      "Scope challenge, worklist build-up and milestone freeze",
      "Detailed STO sequencing down to the shift and crew level",
      "Resource histograms and interface/clash management",
      "Daily progress control and live curve tracking during execution",
    ],
    deliverables: [
      "Integrated turnaround schedule & worklist",
      "Readiness / milestone dashboard",
      "Daily execution reports & curves",
      "Post-event schedule lessons learned",
    ],
    tools: ["Primavera P6", "Roser / STO tools", "Power BI", "Excel"],
  },
  {
    slug: "project-management-controls",
    icon: "LayoutDashboard",
    title: "Project Management & Controls Support",
    short:
      "An embedded controls function — progress, cost, change and reporting — without the headcount.",
    problem:
      "Without a controls backbone, projects run on gut feel. Progress is self-reported, change goes untracked and leadership only learns about overruns at month-end.",
    whatWeDo: [
      "Stand up project controls procedures and reporting cadence",
      "Earned value (EVM), progress measurement and forecasting",
      "Change, risk and document control coordination",
      "Executive dashboards and monthly project reports",
    ],
    deliverables: [
      "Project controls procedure",
      "EVM / progress measurement system",
      "Monthly project report pack",
      "Risk & change registers",
    ],
    tools: ["Primavera P6", "Power BI", "Excel", "SharePoint"],
  },
  {
    slug: "workforce-supply",
    icon: "Users",
    title: "Specialised Workforce Supply",
    short:
      "Vetted planners, schedulers and cost engineers — embedded with your team, remote or on-site.",
    problem:
      "Hiring senior planning talent is slow and expensive, and demand is spiky around projects and turnarounds. You need experienced people fast, then flex back down.",
    whatWeDo: [
      "Source and vet certified planners, schedulers and cost engineers",
      "Flex capacity up for projects and STOs, down between them",
      "Embed seamlessly into your tools, governance and cadence",
      "Provide continuity and hand-over so knowledge stays with you",
    ],
    deliverables: [
      "Matched, vetted specialist(s)",
      "Onboarding & integration plan",
      "Defined scope & reporting line",
      "Knowledge hand-over package",
    ],
    tools: ["Primavera P6", "Microsoft Project", "SAP PM", "Power BI"],
  },
  {
    slug: "training",
    icon: "GraduationCap",
    title: "Planning, Scheduling & Project Controls Training",
    short:
      "Level up your in-house team with practical, industry-specific training built on real assets.",
    problem:
      "Generic courses teach buttons, not judgement. Your team comes back able to click around P6 but still can't build a defensible turnaround schedule.",
    whatWeDo: [
      "Hands-on Primavera P6 and MS Project training on real scenarios",
      "Turnaround and project scheduling fundamentals",
      "Project controls, EVM and progress measurement workshops",
      "Tailored curricula mapped to your standards and templates",
    ],
    deliverables: [
      "Tailored course materials",
      "Hands-on workshop sessions",
      "Competency assessment",
      "Reference templates & guides",
    ],
    tools: ["Primavera P6", "Microsoft Project", "Power BI", "Excel"],
  },
  {
    slug: "remote-delivery",
    icon: "Globe2",
    title: "Remote Integrated Planning & Scheduling",
    short:
      "Our flagship model: a senior offshore planning desk delivering to your standards, around your clock.",
    problem:
      "Onshore planning talent is scarce and costly. But a fully remote desk only works if the process, tooling, security and communication are engineered for it — not improvised.",
    whatWeDo: [
      "Dedicated remote planners working inside your P6 / project environment",
      "Defined cadence: daily updates, weekly reviews, time-zone overlap",
      "Secure access, controlled data handling and clear governance",
      "Same deliverables as on-site — at a fraction of the cost",
    ],
    deliverables: [
      "Dedicated remote planning desk",
      "Agreed cadence & SLAs",
      "Full schedule & reporting deliverables",
      "Secure access & data-handling plan",
    ],
    tools: ["Primavera P6", "MS Project", "Power BI", "Teams / Zoom"],
  },
];

export type Industry = {
  slug: string;
  icon: string;
  name: string;
  blurb: string;
  points: string[];
};

export const industries: Industry[] = [
  {
    slug: "oil-and-gas",
    icon: "Fuel",
    name: "Oil & Gas",
    blurb:
      "Upstream, midstream and downstream planning where every shutdown hour carries six-figure consequences.",
    points: [
      "Turnaround & shutdown scheduling",
      "Drilling & well-intervention programmes",
      "Brownfield modification planning",
    ],
  },
  {
    slug: "petrochemical",
    icon: "FlaskConical",
    name: "Petrochemical",
    blurb:
      "Complex, interdependent process units that demand tight sequencing and ruthless scope control.",
    points: [
      "Integrated STO planning",
      "Catalyst change & unit revamps",
      "Reliability & maintenance scheduling",
    ],
  },
  {
    slug: "power-energy",
    icon: "Zap",
    name: "Power & Energy",
    blurb:
      "Generation and transmission outages where availability targets and regulators leave no margin.",
    points: [
      "Outage planning & scheduling",
      "Renewables project controls",
      "Major overhaul programmes",
    ],
  },
  {
    slug: "mining-metals",
    icon: "Mountain",
    name: "Mining & Metals",
    blurb:
      "Remote, capital-intensive operations where planned maintenance protects production and safety.",
    points: [
      "Plant shutdown scheduling",
      "Sustaining-capital project controls",
      "Mobile & fixed-plant maintenance",
    ],
  },
  {
    slug: "construction-epc",
    icon: "HardHat",
    name: "Construction & EPC",
    blurb:
      "Engineering and construction programmes that need defensible schedules from FEED to handover.",
    points: [
      "EPC baseline & progress control",
      "Earned value & forecasting",
      "Claims & delay analysis support",
    ],
  },
];

export type ProcessStep = {
  num: string;
  title: string;
  body: string;
};

export const remoteProcess: ProcessStep[] = [
  {
    num: "01",
    title: "Discovery & scoping",
    body: "We map your asset, standards, tools and pain points, then agree scope, deliverables and a clear definition of done — in writing, before anyone touches a schedule.",
  },
  {
    num: "02",
    title: "Secure access & setup",
    body: "We connect to your environment under your IT and security rules — VPN, named accounts, least-privilege access — and align to your P6 database, templates and coding structure.",
  },
  {
    num: "03",
    title: "Cadence & overlap",
    body: "We lock a working rhythm: daily updates, a weekly schedule review, and guaranteed time-zone overlap so your team always has a planner reachable in their hours.",
  },
  {
    num: "04",
    title: "Delivery & control",
    body: "Baselines, look-aheads, progress updates, critical-path analysis and reports land on schedule. You get on-site quality output without the on-site cost.",
  },
  {
    num: "05",
    title: "Review & improve",
    body: "We hold regular performance reviews, capture lessons learned, and tune the cadence and deliverables as the project moves through its phases.",
  },
];

export type Stat = { value: string; suffix?: string; label: string };

/* [PLACEHOLDER] Replace with the client's real, verified numbers. */
export const stats: Stat[] = [
  { value: "60", suffix: "%", label: "Typical cost saving vs. onshore planning desks" },
  { value: "15", suffix: "+", label: "Years average experience of our senior planners" },
  { value: "24", suffix: "/5", label: "Coverage across global client time zones" },
  { value: "100", suffix: "%", label: "Remote-ready, secure delivery model" },
];

export const tools: string[] = [
  "Primavera P6",
  "Microsoft Project",
  "Power BI",
  "SAP PM",
  "Excel / VBA",
  "Roser STO",
  "SharePoint",
  "MS Teams",
];

/* [PLACEHOLDER] Swap for the client's real certifications / accreditations. */
export const credentials: string[] = [
  "PMI / PMP-aligned practitioners",
  "AACE planning & cost methods",
  "Primavera P6 specialists",
  "Turnaround (STO) experienced",
];

export type CaseStudy = {
  slug: string;
  industry: string;
  title: string;
  challenge: string;
  approach: string;
  results: { metric: string; label: string }[];
  placeholder: boolean;
};

/* [PLACEHOLDER] Outcome templates — replace with the client's real engagements. */
export const caseStudies: CaseStudy[] = [
  {
    slug: "refinery-turnaround-recovery",
    industry: "Oil & Gas",
    title: "Refinery turnaround brought back on schedule",
    challenge:
      "A major unit turnaround was tracking days behind by the first week, with no integrated view of progress across disciplines.",
    approach:
      "Our remote desk rebuilt the integrated schedule, introduced daily progress curves and ran what-if recovery scenarios with the site team each morning.",
    results: [
      { metric: "8 days", label: "Schedule recovered" },
      { metric: "Single", label: "Source of progress truth" },
      { metric: "Daily", label: "Curve-based control" },
    ],
    placeholder: true,
  },
  {
    slug: "petrochemical-controls-standup",
    industry: "Petrochemical",
    title: "Project controls stood up in under a month",
    challenge:
      "A capital project had no formal progress measurement or reporting, leaving leadership blind to real status.",
    approach:
      "We deployed a remote controls function — EVM, progress measurement and an executive dashboard — integrated with the client's existing P6 and document control.",
    results: [
      { metric: "< 30 days", label: "To full reporting" },
      { metric: "EVM", label: "Progress measurement live" },
      { metric: "Weekly", label: "Executive dashboard" },
    ],
    placeholder: true,
  },
  {
    slug: "remote-planning-desk-scale",
    industry: "Power & Energy",
    title: "A flexible planning desk that scales with outages",
    challenge:
      "Planning demand spiked hard around outages and collapsed between them, making permanent senior hires uneconomic.",
    approach:
      "We provided a remote planning desk that flexed up for outage season and down afterwards, embedded in the client's tools and governance throughout.",
    results: [
      { metric: "Flex", label: "Capacity up & down" },
      { metric: "Lower", label: "Cost than permanent hire" },
      { metric: "Zero", label: "Loss of continuity" },
    ],
    placeholder: true,
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  placeholder: boolean;
};

/* [PLACEHOLDER] Replace with real, attributable client testimonials. */
export const testimonials: Testimonial[] = [
  {
    quote:
      "The remote desk felt like part of our own team — same standards, same tools, on our clock — but at a cost we could actually justify to finance.",
    name: "Operations Director",
    role: "Downstream operator",
    placeholder: true,
  },
  {
    quote:
      "For the first time our turnaround had a single, trusted progress picture every morning. That alone changed how we made decisions on the floor.",
    name: "Turnaround Manager",
    role: "Petrochemical site",
    placeholder: true,
  },
  {
    quote:
      "They built controls from nothing in weeks. We finally knew where the project actually stood instead of guessing at month-end.",
    name: "Project Manager",
    role: "Capital projects, energy",
    placeholder: true,
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "How does a remote planning desk actually work day to day?",
    a: "We work inside your environment — your Primavera P6 database, templates and coding — under your IT and security rules. A fixed cadence (daily updates, weekly reviews) and guaranteed time-zone overlap mean a planner is always reachable in your working hours.",
  },
  {
    q: "Is our project data secure with a remote team?",
    a: "Yes. We operate on least-privilege, named-account access through your VPN or controlled gateways, follow your data-handling policies, and can sign NDAs and security agreements before any access is granted.",
  },
  {
    q: "Which tools and software do you work in?",
    a: "Primarily Primavera P6 and Microsoft Project for scheduling, with Power BI and Excel for reporting and analytics, plus SAP PM and SharePoint where clients use them. We adapt to your stack rather than forcing ours.",
  },
  {
    q: "Can you scale up for a turnaround and back down afterwards?",
    a: "That flexibility is the point. We scale capacity up for projects and shutdowns and back down between them, so you get senior expertise exactly when you need it without carrying permanent overhead.",
  },
  {
    q: "Where are you based and what time zones do you cover?",
    a: "We are based in the Philippines and structure each engagement to guarantee meaningful working-hour overlap with your team, wherever you operate.",
  },
  {
    q: "How do we get started?",
    a: "Email us a short note about your asset, scope and timeline. We'll set up a scoping conversation, agree deliverables and a definition of done, then stand up secure access — usually within days.",
  },
];
