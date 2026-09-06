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
        items: ["PostgreSQL", "MSSQL", "DuckDB", "SQLite", "Redis", "Apache Arrow", "Parquet", "Firebase/Firestore"],
        note: "Storage & processing",
    },
    {
        category: "Platform & Cloud",
        items: ["Kubernetes", "Docker", "AWS", "GCP", "Azure", "OneLake", "GitHub Actions", "CI/CD", "Git"],
        note: "Build, ship & run",
    },
];
