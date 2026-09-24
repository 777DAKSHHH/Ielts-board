import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step8Submission: React.FC = () => (
  <div className="stage-card-wrapper">
    <div>
      <span className="apple-badge success" style={{ marginBottom: "8px" }}>Step 08 / 08 • Connectors</span>
      <h2 className="stage-title">Connect the Process Clearly</h2>
      <p className="stage-subtitle">Use the connector set from the PDF to signal first stage, parallel input, sequence, branching, further processing and final outcome.</p>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", overflowY: "auto" }}>
      {TASK1_DATA.connectors.map((connector, index) => (
        <div key={connector.phrase} style={{ background: "var(--slate-50)", border: "1.5px solid var(--border-subtle)", borderRadius: "16px", padding: "18px", display: "flex", flexDirection: "column", gap: "9px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span className="apple-badge neutral">{index + 1}</span>
            <strong style={{ color: "var(--slate-900)" }}>{connector.phrase}</strong>
            <span style={{ color: "var(--slate-500)", fontSize: "0.82rem" }}>→ {connector.purpose}</span>
          </div>
          <div style={{ background: "#ffffff", border: "1px solid var(--border-subtle)", borderRadius: "11px", padding: "11px 13px", color: "var(--slate-700)", lineHeight: 1.5 }}>
            {connector.example}
          </div>
        </div>
      ))}
    </div>

    <div style={{ background: "#ffffff", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}><CheckCircle2 size={18} color="var(--slate-700)" /><strong>Final sequence from the workbook</strong></div>
      <p style={{ margin: 0, color: "var(--slate-700)", lineHeight: 1.55 }}>
        Initially <ArrowRight size={14} style={{ verticalAlign: "middle" }} /> At the same time <ArrowRight size={14} style={{ verticalAlign: "middle" }} /> Following this <ArrowRight size={14} style={{ verticalAlign: "middle" }} /> Once <ArrowRight size={14} style={{ verticalAlign: "middle" }} /> Thereafter / Meanwhile <ArrowRight size={14} style={{ verticalAlign: "middle" }} /> Ultimately.
      </p>
    </div>
  </div>
);
