import React from "react";
import { GitBranch, Package, Printer } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

const Route: React.FC<{ title: string; icon: React.ReactNode; purpose: string; items: string[] }> = ({ title, icon, purpose, items }) => (
  <div style={{ background: "var(--slate-50)", border: "1.5px solid var(--border-subtle)", borderRadius: "20px", padding: "24px" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>{icon}<h4 style={{ fontSize: "1.12rem", fontWeight: 700, color: "var(--slate-900)" }}>{title}</h4></div>
    <p style={{ fontSize: "0.9rem", color: "var(--slate-500)", marginBottom: "14px" }}>{purpose}</p>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
      {items.map((item, index) => <span key={`${item}-${index}`} className="apple-badge neutral" style={{ padding: "8px 11px" }}>{item}</span>)}
    </div>
  </div>
);

export const Step6FlowBreakdown: React.FC = () => (
  <div className="stage-card-wrapper">
    <div>
      <span className="apple-badge accent" style={{ marginBottom: "8px" }}>Step 06 / 08 • Body 2 — Two Production Routes</span>
      <h2 className="stage-title">Track the Branching Point</h2>
      <p className="stage-subtitle">Once clean pulp is produced, the process splits into two distinct routes with different outputs.</p>
    </div>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "6px", color: "var(--slate-600)" }}><GitBranch size={19} /> Clean pulp branches into two production lines</div>
    <div className="stage-grid-2col">
      <Route title="Route 1 — Rough paper for boxes" icon={<Package size={20} />} purpose="Forms, dries, reels and cuts the pulp, culminating in paper bales." items={TASK1_DATA.processStages.route1} />
      <Route title="Route 2 — Refined paper for printing" icon={<Printer size={20} />} purpose="Adds cleaning, pressing and drying before the final paper rolls." items={TASK1_DATA.processStages.route2} />
    </div>
    <div style={{ background: "#ffffff", border: "1.5px solid var(--border-subtle)", borderRadius: "16px", padding: "16px 18px", lineHeight: 1.55, color: "var(--slate-700)" }}>
      <strong>Key comparison:</strong> The first route involves forming, drying, reeling and cutting the pulp into bales, whereas the second involves additional cleaning, pressing and drying before the paper is produced in rolls.
    </div>
  </div>
);
