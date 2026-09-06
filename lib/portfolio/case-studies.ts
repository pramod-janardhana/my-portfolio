// Case studies power both the home summary and the /work/[slug] deep-dive pages.
// Kept intentionally high-level: name, one-line description, project context,
// personal contributions, and tech stack. Architecture/approach are omitted as
// they are confidential to the company.
export type CaseStudy = {
    slug: string;
    name: string;
    tagline: string; // one-line description
    role: string;
    timeframe: string;
    status: string;
    context: string; // what the project is / the problem space
    contributions: string[]; // what I personally did
    stack: string[];
    projectUrl?: string; // link to the live product/project
    links?: { label: string; url: string }[];
};

export const caseStudies: CaseStudy[] = [
    {
        slug: "sentinel",
        name: "Sentinel",
        tagline: "Sentinel is a cloud-based SaaS data backup and recovery solution targeted for enterprises environments.",
        role: "Backend developer",
        timeframe: "2021 — 2023",
        status: "In production",
        context:
            "Zmanda Backup Endpoint a.k.a Sentinel is BETSOL's cloud-based SaaS data backup and recovery solution with company wide users and subscriptions management. I joined near its inception and contributed across R&D, backend services, and feature ownership.",
        contributions: [
            "Researched and built POCs for authentication and billing providers (Auth0, Okta, FusionAuth, Chargebee).",
            "Contributed to the project set and handled critical backend components.",
            "Owned user and subscription management features end-to-end, integrating Auth0 and Chargebee.",
            "Handled requirements gathering, and contributed to the design decisions.",
            "Built payment related features integrating with Chargebee.",
            "Built tenants and multi-tenant features for the platform with seamless tenant switching.",
        ],
        stack: ["Go", "PostgreSQL", "Kubernetes", "PubSub", "Auth0", "Chargebee"],
        projectUrl: "https://www.zmanda.com",
    },
    {
        slug: "infobridge",
        name: "Infobridge",
        tagline: "Infobridge is a no-code data integration, preparation, and transformation engine",
        role: "Design and Backend developer",
        timeframe: "2023-present",
        status: "In production",
        context:
            "Infobridge is a component of Planning that enables no-code data integration, preparation, and transformation for enterprise users. It is built on top of Microsoft Fabric and PowerBI, and is used to connect various data sources",
        contributions: [
            "Researched and build POCs for data integration and transformation features.",
            "Build core and wide range of data source connectors for Infobridge.",
            "Engaged in customer support and issue resolution with quick turnaround.",
            "Played a key role in building Infobridge for PowerBI and migration to Microsoft Fabric.",
            "Optimized data processing workflows to improve performance and reduce latency.",
        ],
        stack: ["Node.js", "Go", "Redis", "gRPC", "WebSocket", "OneLake", "MSSQL", "Kubernetes", "PowerBI", "Microsoft Fabric"],
        projectUrl: "https://learn.microsoft.com/en-us/fabric/iq/plan/infobridge-overview",
    },
    {
        slug: "blend",
        name: "Blend",
        tagline: "Blend is a easy-to-use tool for combining and merging data for various Planning data source like Semantic model, PowerTable and Planning sheet and Infobridge.",
        role: "Backend engineer",
        timeframe: "2024",
        status: "In production",
        context:
            "Business reporting and planning often involve multi-page reports with data at varying granularities. Blend is a tools built on top of Infobridge engine to consolidates data from multiple sheets into a single sheet to enable real-time planning and reporting in Microsoft Fabric.",
        contributions: [
            "Contributed to the initial design and architechure of Blend.",
            "Implemented Row-level security a.k.a RLS and access controls to ensure data privacy and compliance.",
        ],
        stack: ["Node.js", "Fabric SQL", "Microsoft Fabric", "OneLake"],
        projectUrl: "https://learn.microsoft.com/en-us/fabric/iq/plan/infobridge-overview",
    },
    {
        slug: "trakin",
        name: "TrackIn",
        tagline: "Personal project to expense tracking and money management",
        role: "Design and development",
        timeframe: "2026",
        status: "Completed",
        context: "TrackIn is a personal project aimed at helping users track their expenses and manage their finances effectively.",
        contributions: [
            "Designed and developed the entire application, including the user interface and backend services.",
            "Implemented features for expense tracking, budgeting, and financial reporting.",
            "Deployed the application using Firebase hosting and set up continuous integration with Github actions.",
            "Configured Firebase authentication and database rules to secure user data.",
        ],
        stack: ["React", "Node.js", "Firebase hosting", "Github actions", "Firebase database", "Firebase authentication"],
    },
];
