import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step8Connectors: React.FC = () => (
  <div className="stage-card-wrapper">
    <div>
      <span className="apple-badge success" style={{ marginBottom: "8px" }}>
        Step 08 / 08 • Academic Transitions & Spatial Flow
      </span>
      <h2 className="stage-title">Sequence Map Changes and Highlight Contrasts</h2>
      <p className="stage-subtitle">
        Use academic spatial and temporal linking devices to anchor descriptions around the central core, connect demolitions with replacements, and transition smoothly between town sectors.
      </p>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", overflowY: "auto" }}>
      {TASK1_DATA.connectors.map((connector, index) => (
        <div key={connector.phrase} style={{ background: "var(--slate-50)", border: "1.5px solid var(--border-subtle)", borderRadius: "16px", padding: "18px", display: "flex", flexDirection: "column", gap: "9px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span className="apple-badge neutral">{index + 1}</span>
            <strong style={{ color: "var(--slate-900)" }}>{connector.phrase}</strong>
            <span style={{ color: "var(--slate-500)", fontSize: "0.82rem" }}>→ {connector.purpose}</span>
          </div>
          <div style={{ background: "#ffffff", border: "1px solid var(--border-subtle)", borderRadius: "11px", padding: "11px 13px", color: "var(--slate-700)", lineHeight: 1.5, fontSize: "0.92rem" }}>
            {connector.example}
          </div>
        </div>
      ))}
    </div>

    <div style={{ background: "#ffffff", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "20px", display: "flex", flexDirection: "column", gap: "12px", boxShadow: "var(--shadow-sm)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <CheckCircle2 size={18} color="#16a34a" />
        <strong style={{ color: "var(--slate-900)" }}>Recommended Cohesive Flow for Comparative Town Maps</strong>
      </div>
      <p style={{ margin: 0, color: "var(--slate-700)", lineHeight: 1.55, fontSize: "0.94rem" }}>
        Taking the city centre as an anchor <ArrowRight size={14} style={{ verticalAlign: "middle" }} /> In place of the former <ArrowRight size={14} style={{ verticalAlign: "middle" }} /> Directly to the left of the central core <ArrowRight size={14} style={{ verticalAlign: "middle" }} /> Underwent adaptive reuse <ArrowRight size={14} style={{ verticalAlign: "middle" }} /> In stark contrast to these changes <ArrowRight size={14} style={{ verticalAlign: "middle" }} /> To accommodate growing demand for <ArrowRight size={14} style={{ verticalAlign: "middle" }} /> Ultimately.
      </p>
    </div>
  </div>
);
