export type Role = { title: string; period: string; note?: string; highlights?: string[] };
export type CompanyProject = {
    name: string;
    description: string; // 1-2 lines
    url?: string; // external product page
    caseStudy?: string; // slug in caseStudies to link a deep-dive
};
export type Company = {
    company: string;
    location: string;
    period: string; // overall span at the company
    current?: boolean;
    summary: string;
    roles: Role[]; // career path, most recent first, each with its own highlights
    projects?: CompanyProject[]; // products/projects worked on at the company
    stack: string[];
};

export const experience: Company[] = [
    {
        company: "Lumel",
        location: "Bengaluru",
        period: "Mar 2024 — Present",
        current: true,
        summary:
            "At Lumel — a modern Enterprise Performance Management (EPM) platform for planning, reporting, analytics, and data governance, used by 3,000+ enterprise customers — I build and own backend services for Infobridge to enable Real-Time Integrated Planning Suite, delivered on Power BI and Microsoft Fabric. My work spans backend architecture, feature development, and mentorship: I'm the tech lead for an 8-person team (4 direct reports), guide design discussions, and prototype new technologies to keep our stack scalable and reliable.",
        roles: [
            {
                title: "Senior Product Developer",
                period: "Jan 2025 — Present",
                highlights: [
                    "Worked on Blend using Infobridge - a solution for realtime Connected planning on Microsoft Fabric.",
                    "Focused on optimizing the performance and scalability of Infobridge",
                    "Worked on development of core modules of Cube - a tool for multi-dimensional data modeling and planning.",
                    "Took part in customer calls and worked on reported issues.",
                    "Serve as tech lead for an 8-person team, directly mentoring 4 reports through code reviews, design guidance, and career growth.",
                    "Drive cross-functional collaboration across engineering, product, and design to ship features end to end.",
                ],
            },
            {
                title: "Product Developer",
                period: "Mar 2024 — Jan 2025",
                highlights: [
                    "Built critical features, optimizations and core modules for Infobridge on PowerBI.",
                    "Designed, implemented, and maintained a centralized connection service for file-based databases over gRPC",
                    "Took part in design discussions, code reviews, and helped team members with their tasks",
                ],
            },
        ],
        projects: [
            {
                name: "Infobridge",
                description: "No-code Real-time, data integration, preparation and transformations engine on PowerBI and Microsoft Fabric.",
                url: "https://learn.microsoft.com/en-us/fabric/iq/plan/infobridge-overview",
                caseStudy: "infobridge",
            },
            {
                name: "Blend",
                description: "Data integration tool built using Infobridge engine to connect various data sources in realtime on Microsoft Fabric.",
                url: "https://learn.microsoft.com/en-us/fabric/iq/plan/infobridge-overview",
                caseStudy: "blend",
            },
            {
                name: "Cube",
                description: "Data modeling and planning tool built for large-scale data.",
                url: "https://learn.microsoft.com/en-us/fabric/iq/plan/planning-cubes/how-to-create-cube",
            },
        ],
        stack: ["Go", "Node.js", "Azure", "Kubernetes", "OneLake", "MSSQL", "Redis", "PowerBI", "Microsoft Fabric"],
    },
    {
        company: "BETSOL",
        location: "Bengaluru",
        period: "Mar 2021 — Mar 2024",
        summary:
            "At BETSOL — a data management, backup, and recovery company — I helped build Sentinel, a new SaaS platform for user subscription and data management, from its inception, contributing to R&Ds and POCs across backend services, APIs, and feature ownership. Over 3 years I grew from trainee to Software Developer, delivering quality code and adhering to team standards.",
        roles: [
            {
                title: "Software Developer",
                period: "Jan 2023 — Mar 2024",
                highlights: [
                    "Owned features end-to-end on Sentinel from requirements gathering to design and deployment.",
                    "Mentored junior developers and managed internal projects",
                    "Conducted product wide Golang training sessions.",
                    "Played a key role in PI planning and sprint grooming, breaking down features into actionable user stories.",
                ],
            },
            {
                title: "Associate Software Engineer",
                period: "Jul 2021 — Dec 2022",
                highlights: [
                    "Researched, documented and built POCs for sentinel's user and subscription management features (Auth0, Okta, FusionAuth, Chargebee).",
                    "Contributed heavily to the development and maintenance of backend services and APIs.",
                ],
            },
            { title: "Software Engineer Trainee", period: "Mar 2021 — Jun 2021",
                highlights: [
                    "Researched and prototyped solutions for manual and scheduled backup and recovery of stateless and stateful applications running on Kubernetes.",
                ],
             },
        ],
        projects: [
            {
                name: "Sentinel",
                description: "A cloud-based SaaS data backup and recovery solution targeted for enterprises environments.",
                caseStudy: "sentinel",
            },
        ],
        stack: ["Go", "Node.js", "PostgreSQL", "GCP", "PubSub", "Kubernetes", "Docker", "Auth0", "Chargebee"],
    },
    {
        company: "Blitz Jobs",
        location: "Bengaluru",
        period: "Sep 2020 — Dec 2020",
        summary: "Interned at Blitz Jobs, to build an Android application for a solar energy management platform named Peacock Solar.",
        roles: [
            {
                title: "Android Developer · Intern",
                period: "Sep 2020 — Dec 2020",
                highlights: ["Developed Android features for a solar energy management platform."],
            },
        ],
        stack: ["Android", "Java"],
    },
];
