import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Mail, Sparkles } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";
import { GeneralTask1Modal } from "./GeneralTask1Modal";

interface Step8ConnectorsProps {
  onSpeak?: (text: string) => void;
}

export const Step8Connectors: React.FC<Step8ConnectorsProps> = ({ onSpeak }) => {
  const [isGeneralModalOpen, setIsGeneralModalOpen] = useState(false);

  return (
    <div className="stage-card-wrapper">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <span className="apple-badge success" style={{ marginBottom: "8px" }}>
            Step 08 / 08 • Academic Transitions &amp; Comparative Cohesion
          </span>
          <h2 className="stage-title">Discourse Connectors &amp; Cohesive Flow for Double Bar Charts</h2>
          <p className="stage-subtitle">
            Master academic discourse markers to establish seamless logical transitions between demographic baselines, gender disparities, mid-life divergences, and senior convergence.
          </p>
        </div>

        {/* General Training Task 1 Launcher Button */}
        <button
          type="button"
          onClick={() => setIsGeneralModalOpen(true)}
          style={{
            padding: "10px 18px",
            background: "linear-gradient(135deg, #0f172a, #1e293b)",
            color: "#ffffff",
            border: "1.5px solid #334155",
            borderRadius: "14px",
            fontSize: "0.88rem",
            fontWeight: 800,
            display: "flex",
            alignItems: "center",
            gap: "9px",
            cursor: "pointer",
            boxShadow: "0 4px 16px rgba(15, 23, 42, 0.15)",
            transition: "all 0.15s ease"
          }}
        >
          <Mail size={18} color="#60a5fa" />
          <span>General Training Task 1 (Letter Writing)</span>
          <span
            style={{
              fontSize: "0.72rem",
              background: "#2563eb",
              color: "#ffffff",
              padding: "2px 7px",
              borderRadius: "6px",
              fontWeight: 750
            }}
          >
            Semi-Formal
          </span>
        </button>
      </div>

    {/* Connector Cards Grid */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", overflowY: "auto" }}>
      {TASK1_DATA.connectors.map((connector, index) => (
        <div
          key={connector.phrase}
          style={{
            background: "var(--slate-50)",
            border: "1.5px solid var(--border-subtle)",
            borderRadius: "16px",
            padding: "18px",
            display: "flex",
            flexDirection: "column",
            gap: "9px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            <span className="apple-badge neutral">{index + 1}</span>
            <strong style={{ color: "var(--slate-900)", fontSize: "0.92rem" }}>{connector.phrase}</strong>
          </div>
          <div style={{ color: "var(--slate-500)", fontSize: "0.8rem", fontWeight: 600 }}>
            Function: {connector.purpose}
          </div>
          <div
            style={{
              background: "#ffffff",
              border: "1px solid var(--border-subtle)",
              borderRadius: "11px",
              padding: "11px 13px",
              color: "var(--slate-700)",
              lineHeight: 1.5,
              fontSize: "0.88rem"
            }}
          >
            {connector.example}
          </div>
        </div>
      ))}
    </div>

    {/* Recommended Cohesive Flow Pathway */}
    <div
      style={{
        background: "#ffffff",
        border: "1.5px solid var(--border-subtle)",
        borderRadius: "18px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        boxShadow: "var(--shadow-sm)"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <CheckCircle2 size={18} color="#16a34a" />
        <strong style={{ color: "var(--slate-900)", fontSize: "0.95rem" }}>
          Recommended Cohesive Discourse Pathway for Double Bar Charts
        </strong>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.88rem", color: "var(--slate-700)" }}>
        {/* Paragraph 3 / Body 1 Flow */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", background: "var(--slate-50)", padding: "10px 14px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
          <span className="apple-badge neutral" style={{ fontWeight: 700 }}>Body 1 (Female Focus)</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“Focusing first on females,...”</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span>Commenced at 47.7% in youngest bracket</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“...progressing steadily through...”</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span>Ascending through 48.9% and 52.5%</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“...reached its peak at 53.3%...”</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span>Sustained plateau at 53.0% (55–64)</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“However, female involvement experienced a decline...”</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span>Receding to 47.1% among seniors (65+)</span>
        </div>

        {/* Paragraph 4 / Body 2 Flow */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", background: "var(--slate-50)", padding: "10px 14px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
          <span className="apple-badge neutral" style={{ fontWeight: 700 }}>Body 2 (Male Focus &amp; Divergence)</span>
          <ArrowRight size={13} color="#16a34a" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“In sharp contrast,...”</span>
          <ArrowRight size={13} color="#16a34a" />
          <span>Peak in youth at 52.8% (outstripping females by 5.1%)</span>
          <ArrowRight size={13} color="#16a34a" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“Thereafter, male participation slumped to 42.2%...”</span>
          <ArrowRight size={13} color="#16a34a" />
          <span>Dropping to its lowest point of 39.5% (widest 13.0% gap)</span>
          <ArrowRight size={13} color="#16a34a" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“Nevertheless, male figures staged a steady rebound...”</span>
          <ArrowRight size={13} color="#16a34a" />
          <span>Rising through 43.1% and 45.1%</span>
          <ArrowRight size={13} color="#16a34a" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“...ultimately reaching 46.7%...”</span>
          <ArrowRight size={13} color="#16a34a" />
          <span>Virtually matching female counterparts (47.1%)</span>
        </div>
      </div>
    </div>

    {/* General Training Task 1 Semi-Formal Letter Writing Modal */}
    <GeneralTask1Modal
      isOpen={isGeneralModalOpen}
      onClose={() => setIsGeneralModalOpen(false)}
      onSpeak={onSpeak}
    />
  </div>
);
};

