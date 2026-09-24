import React from "react";
import { ArrowDown, TreePine } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

const FlowCard: React.FC<{ title: string; items: string[]; accent?: boolean }> = ({ title, items, accent }) => (
  <div style={{ background: accent ? "#fffaf2" : "var(--slate-50)", border: "1.5px solid var(--border-subtle)", borderRadius: "20px", padding: "24px" }}>
    <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--slate-900)", marginBottom: "16px" }}>{title}</h4>
    <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
      {items.map((item, index) => (
        <React.Fragment key={`${item}-${index}`}>
          <div style={{ background: "#ffffff", border: "1px solid var(--border-subtle)", borderRadius: "12px", padding: "11px 14px", fontWeight: 600, color: "var(--slate-800)" }}>{item}</div>
          {index < items.length - 1 && <ArrowDown size={16} color="var(--slate-400)" style={{ alignSelf: "center" }} />}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export const Step5Bifurcation: React.FC = () => (
  <div className="stage-card-wrapper">
    <div>
      <span className="apple-badge accent" style={{ marginBottom: "8px" }}>Step 05 / 08 • Body 1 — Raw Material → Clean Pulp</span>
      <h2 className="stage-title">Follow the Shared Pulp-Making Stage</h2>
      <p className="stage-subtitle">The first body paragraph follows the material from the two wood sources to clean pulp.</p>
    </div>
    <div className="stage-grid-2col">
      <FlowCard title="Stage 1 — Preparing the raw material" items={TASK1_DATA.processStages.rawMaterial} />
      <FlowCard title="Both sources enter the shared stage" items={TASK1_DATA.processStages.cleanPulp} accent />
    </div>
    <div style={{ background: "#ffffff", border: "1.5px solid var(--border-subtle)", borderRadius: "16px", padding: "16px 18px", display: "flex", alignItems: "center", gap: "10px" }}>
      <TreePine size={18} color="var(--slate-700)" />
      <span style={{ color: "var(--slate-700)", lineHeight: 1.5 }}><strong>Body 1 focus:</strong> trees → logs → chipping, while purchased wood chips enter at the same time; both sources then pass through the digestor, washers and pulp screen to become clean pulp.</span>
    </div>
  </div>
);
