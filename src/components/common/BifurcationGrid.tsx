import React from "react";
import { Split, Layers } from "lucide-react";

interface BifurcationColumnProps {
  title: string;
  focus: string;
  points: string[];
  flow: string[];
  theme?: "slate" | "blue";
}

interface BifurcationGridProps {
  bp1: {
    title: string;
    focus: string;
    points: string[];
    flow: string[];
  };
  bp2: {
    title: string;
    focus: string;
    points: string[];
    flow: string[];
  };
}

export const BifurcationGrid: React.FC<BifurcationGridProps> = ({ bp1, bp2 }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", height: "100%" }}>
      {/* Body Paragraph 1 Card */}
      <div
        style={{
          background: "var(--slate-50)",
          border: "1.5px solid var(--border-subtle)",
          borderRadius: "20px",
          padding: "26px",
          display: "flex",
          flexDirection: "column",
          gap: "16px"
        }}
      >
        <div>
          <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
            Grouping 1
          </span>
          <h4 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--slate-900)" }}>{bp1.title}</h4>
          <p style={{ fontSize: "0.92rem", color: "var(--slate-500)", marginTop: "4px" }}>
            <strong>Focus Scope:</strong> {bp1.focus}
          </p>
        </div>

        {/* Specific Comparative Points */}
        <div style={{ background: "#ffffff", border: "1px solid var(--border-subtle)", borderRadius: "14px", padding: "16px" }}>
          <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--slate-600)", textTransform: "uppercase", marginBottom: "10px" }}>
            Key Features to Report:
          </div>
          <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.96rem", color: "var(--slate-700)", lineHeight: 1.5 }}>
            {bp1.points.map((p, idx) => (
              <li key={idx}>{p}</li>
            ))}
          </ul>
        </div>

        {/* Flow Sequencing */}
        <div style={{ background: "#ffffff", border: "1px solid var(--border-subtle)", borderRadius: "14px", padding: "16px" }}>
          <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--slate-600)", textTransform: "uppercase", marginBottom: "10px" }}>
            Paragraph Logical Flow:
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {bp1.flow.map((f, idx) => (
              <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem", color: "var(--slate-700)" }}>
                <span style={{ width: "22px", height: "22px", borderRadius: "6px", background: "var(--slate-200)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", fontWeight: 700 }}>
                  {idx + 1}
                </span>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Body Paragraph 2 Card */}
      <div
        style={{
          background: "var(--slate-50)",
          border: "1.5px solid var(--border-subtle)",
          borderRadius: "20px",
          padding: "26px",
          display: "flex",
          flexDirection: "column",
          gap: "16px"
        }}
      >
        <div>
          <span className="apple-badge neutral" style={{ marginBottom: "8px" }}>
            Grouping 2
          </span>
          <h4 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--slate-900)" }}>{bp2.title}</h4>
          <p style={{ fontSize: "0.92rem", color: "var(--slate-500)", marginTop: "4px" }}>
            <strong>Focus Scope:</strong> {bp2.focus}
          </p>
        </div>

        {/* Specific Comparative Points */}
        <div style={{ background: "#ffffff", border: "1px solid var(--border-subtle)", borderRadius: "14px", padding: "16px" }}>
          <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--slate-600)", textTransform: "uppercase", marginBottom: "10px" }}>
            Key Features to Report:
          </div>
          <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.96rem", color: "var(--slate-700)", lineHeight: 1.5 }}>
            {bp2.points.map((p, idx) => (
              <li key={idx}>{p}</li>
            ))}
          </ul>
        </div>

        {/* Flow Sequencing */}
        <div style={{ background: "#ffffff", border: "1px solid var(--border-subtle)", borderRadius: "14px", padding: "16px" }}>
          <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--slate-600)", textTransform: "uppercase", marginBottom: "10px" }}>
            Paragraph Logical Flow:
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {bp2.flow.map((f, idx) => (
              <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem", color: "var(--slate-700)" }}>
                <span style={{ width: "22px", height: "22px", borderRadius: "6px", background: "var(--slate-200)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", fontWeight: 700 }}>
                  {idx + 1}
                </span>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
