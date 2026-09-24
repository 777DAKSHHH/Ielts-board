import React from "react";
import { Layers, CheckCircle2 } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step7ModelAnalysis: React.FC = () => (
  <div className="stage-card-wrapper">
    <div>
      <span className="apple-badge accent" style={{ marginBottom: "8px" }}>Step 07 / 08 • The Best Processing</span>
      <h2 className="stage-title">Processing, Structure, Sequence / Result</h2>
      <p className="stage-subtitle">Use the workbook's grouped expressions to make process descriptions precise and logically connected.</p>
    </div>
    <div className="stage-grid-2col">
      {TASK1_DATA.processingGroups.map((group) => (
        <div key={group.title} style={{ background: "var(--slate-50)", border: "1.5px solid var(--border-subtle)", borderRadius: "20px", padding: "22px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "14px" }}>
            <Layers size={19} color="var(--slate-800)" />
            <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--slate-900)" }}>{group.title}</h4>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
            {group.items.map((item) => (
              <div key={item} style={{ background: "#ffffff", border: "1px solid var(--border-subtle)", borderRadius: "12px", padding: "11px 14px", fontWeight: 700, color: "var(--slate-800)" }}>{item}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div style={{ background: "#ffffff", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "20px", boxShadow: "var(--shadow-sm)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}><CheckCircle2 size={18} color="var(--slate-700)" /><strong style={{ color: "var(--slate-900)" }}>Workbook sentence</strong></div>
      <p style={{ margin: 0, fontSize: "1rem", lineHeight: 1.6, color: "var(--slate-700)" }}>Following screening, the clean pulp is channelled into two separate production lines, each of which culminates in a different type of paper product.</p>
    </div>
  </div>
);
