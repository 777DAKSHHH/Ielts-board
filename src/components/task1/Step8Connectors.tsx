import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step8Connectors: React.FC = () => (
  <div className="stage-card-wrapper">
    <div>
      <span className="apple-badge success" style={{ marginBottom: "8px" }}>
        Step 08 / 08 • Academic Transitions &amp; Trophic Sequencing
      </span>
      <h2 className="stage-title">Sequence Trophic Stages and Connect Dissipation Flows</h2>
      <p className="stage-subtitle">
        Use academic linking phrases to sequence energy passage across ascending trophic levels, quantify tenfold reductions, and connect parallel heat dissipation with decomposer waste convergence.
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
        <strong style={{ color: "var(--slate-900)" }}>Recommended Cohesive Flow for Natural Ecological Diagrams</strong>
      </div>
      <p style={{ margin: 0, color: "var(--slate-700)", lineHeight: 1.55, fontSize: "0.94rem" }}>
        Commencing at the foundation (Primary Producers) <ArrowRight size={14} style={{ verticalAlign: "middle" }} /> Transferred sequentially to (Herbivores) <ArrowRight size={14} style={{ verticalAlign: "middle" }} /> Diminishing by an order of magnitude (Secondary Consumers) <ArrowRight size={14} style={{ verticalAlign: "middle" }} /> Continuing through tertiary predators <ArrowRight size={14} style={{ verticalAlign: "middle" }} /> At the summit of the hierarchy (Apex Raptors) <ArrowRight size={14} style={{ verticalAlign: "middle" }} /> Concurrently dissipated as metabolic heat <ArrowRight size={14} style={{ verticalAlign: "middle" }} /> Simultaneously channeling waste to decomposers.
      </p>
    </div>
  </div>
);
