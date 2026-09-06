// Request-path diagram rendered by components/SystemDiagram.
// Edges are declared as [from, to] node ids; the component derives the SVG
// paths from node coordinates so positions and connectors never drift apart.
export type DiagramNode = {
    id: string;
    label: string;
    sub: string;
    detail: string;
    x: number;
    y: number;
    w: number;
    active?: boolean;
};

export const systemDiagram: {
    nodes: DiagramNode[];
    edges: [from: string, to: string][];
} = {
    nodes: [
        { id: "client", label: "client", sub: "request", x: 8, y: 100, w: 84, detail: "Requests enter from web, mobile, and internal services. I design clear, versioned API contracts (REST & gRPC) as the front door." },
        { id: "gateway", label: "gateway", sub: "auth · rate-limit", x: 132, y: 100, w: 108, detail: "A gateway layer centralizes auth, rate limiting, and request tracing — so every downstream service inherits the same guarantees." },
        { id: "services", label: "services", sub: "business logic", x: 280, y: 100, w: 104, detail: "Stateless services hold the business logic. I keep domain boundaries clean, test heavily, and instrument everything for observability." },
        { id: "postgres", label: "postgres", sub: "primary store", x: 430, y: 30, w: 130, detail: "The source of truth. I design normalized schemas, write efficient queries, and run zero-downtime migrations." },
        { id: "redis", label: "redis", sub: "cache · locks", x: 430, y: 100, w: 130, detail: "Caching and coordination — hot-path caches and distributed locks that keep latency low under load." },
        { id: "mongodb", label: "mongodb", sub: "documents", x: 430, y: 170, w: 130, detail: "A flexible document store for data that doesn't fit neatly into rows — evolving schemas and nested product data." },
    ],
    edges: [
        ["client", "gateway"],
        ["gateway", "services"],
        ["services", "postgres"],
        ["services", "redis"],
        ["services", "mongodb"],
    ],
};
