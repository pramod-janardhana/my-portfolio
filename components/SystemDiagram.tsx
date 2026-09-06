"use client";

import { useState } from "react";
import { systemDiagram, type DiagramNode } from "@/lib/portfolio";

const NODE_H = 44;

// Derives an edge path from node geometry: straight when the row is shared,
// otherwise a cubic curve bending from the source's right edge to the target.
function edgePath(from: DiagramNode, to: DiagramNode) {
  const x1 = from.x + from.w;
  const y1 = from.y + NODE_H / 2;
  const x2 = to.x;
  const y2 = to.y + NODE_H / 2;
  if (y1 === y2) return `M${x1} ${y1} H${x2}`;
  const mx = (x1 + x2) / 2;
  return `M${x1} ${y1} C${mx} ${y1} ${mx} ${y2} ${x2} ${y2}`;
}

export default function SystemDiagram() {
  const { nodes, edges } = systemDiagram;
  const [hovered, setHovered] = useState<string>("services");
  const active = nodes.find((n) => n.id === hovered) ?? nodes[0];

  return (
    <div className="rounded-xl border border-line bg-elev p-4 shadow-sm sm:p-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-xs text-muted">system.overview</span>
      </div>

      <svg viewBox="0 0 580 230" className="w-full" role="img" aria-label="Architecture diagram of a request flowing through gateway and services to data stores">
        {edges.map(([fromId, toId]) => {
          const from = nodes.find((n) => n.id === fromId);
          const to = nodes.find((n) => n.id === toId);
          if (!from || !to) return null;
          const d = edgePath(from, to);
          return (
            <g key={`${fromId}-${toId}`}>
              <path d={d} className="fill-none stroke-line" strokeWidth={1.5} />
              <path d={d} className="fill-none stroke-accent animate-flow" strokeWidth={1.5} strokeDasharray="4 10" />
            </g>
          );
        })}

        {nodes.map((n) => {
          const isSel = hovered === n.id;
          return (
            <g
              key={n.id}
              role="button"
              tabIndex={0}
              aria-pressed={isSel}
              aria-label={`${n.label} — ${n.sub}`}
              onMouseEnter={() => setHovered(n.id)}
              onFocus={() => setHovered(n.id)}
              onClick={() => setHovered(n.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setHovered(n.id);
                }
              }}
              className="cursor-pointer focus:outline-none [&:focus-visible>rect]:stroke-accent"
            >
              <rect
                x={n.x}
                y={n.y}
                width={n.w}
                height={NODE_H}
                rx={8}
                className={`transition-colors duration-200 ${
                  isSel
                    ? "fill-accent/10 stroke-accent"
                    : n.active
                      ? "fill-accent/5 stroke-accent/50"
                      : "fill-card stroke-line"
                }`}
                strokeWidth={isSel ? 1.6 : 1}
              />
              <text x={n.x + n.w / 2} y={n.y + 19} textAnchor="middle" className="fill-fg text-[11px]" style={{ fontFamily: "var(--font-mono)" }}>
                {n.label}
              </text>
              <text x={n.x + n.w / 2} y={n.y + 33} textAnchor="middle" className="fill-muted text-[9px]" style={{ fontFamily: "var(--font-mono)" }}>
                {n.sub}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="mt-3 rounded-lg border border-line bg-bg/50 p-4">
        <p className="font-mono text-xs text-accent">{active.label}</p>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{active.detail}</p>
      </div>
    </div>
  );
}
