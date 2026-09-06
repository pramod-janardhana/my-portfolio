export type StackGroup = { category: string; items: string[]; note: string };

export const stack: StackGroup[] = [
    {
        category: "Languages",
        items: ["Go", "TypeScript", "JavaScript", "Python", "Java"],
        note: "Primary: Go & Node.js",
    },
    {
        category: "Backend",
        items: ["Go (Gin/Mux)", "Node.js", "Express", "REST", "gRPC", "Microservices", "WebSocket"],
        note: "APIs & services",
    },
    {
        category: "Data",
        items: ["PostgreSQL", "SQLite", "DuckDB", "Redis", "Firebase/Firestore"],
        note: "Storage & caching",
    },
    {
        category: "Platform & Cloud",
        items: ["Kubernetes", "Docker", "AWS", "Git", "CI/CD", "Firebase"],
        note: "Build, ship & run",
    },
];
