import React from "react";
import { Layers, CheckCircle2 } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step7ModelAnalysis: React.FC = () => (
  <div className="stage-card-wrapper">
    <div>
      <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
        Step 07 / 08 • Analytical Grouping & Map Language
      </span>
      <h2 className="stage-title">Demolition, Adaptive Reuse & Spatial Language</h2>
      <p className="stage-subtitle">
        Master the three essential grammatical and lexical groups required to describe comparative map transformations with Band 9 precision.
      </p>
    </div>
    <div className="stage-grid-2col" style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
      {TASK1_DATA.processingGroups.map((group) => (
        <div key={group.title} style={{ background: "var(--slate-50)", border: "1.5px solid var(--border-subtle)", borderRadius: "20px", padding: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "14px" }}>
            <Layers size={18} color="var(--slate-800)" />
            <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--slate-900)" }}>{group.title}</h4>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
            {group.items.map((item) => (
              <div key={item} style={{ background: "#ffffff", border: "1px solid var(--border-subtle)", borderRadius: "12px", padding: "11px 13px", fontWeight: 650, color: "var(--slate-800)", fontSize: "0.88rem" }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div style={{ background: "#ffffff", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "20px", boxShadow: "var(--shadow-sm)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
        <CheckCircle2 size={18} color="#16a34a" />
        <strong style={{ color: "var(--slate-900)" }}>Band 9 Model Map Synthesis Sentence</strong>
      </div>
      <p style={{ margin: 0, fontSize: "1.02rem", lineHeight: 1.65, color: "var(--slate-800)" }}>
        “While the central city core and the shopping centre directly above it remained entirely unchanged over the period, the town underwent extensive modernisation as industrial and green areas were redeveloped into modern residential apartments, commercial software offices, and sports facilities.”
      </p>
    </div>
  </div>
);
