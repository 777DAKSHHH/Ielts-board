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
            Step 08 / 08 • Academic Transitions &amp; Process Cohesion
          </span>
          <h2 className="stage-title">Discourse Connectors &amp; Cohesive Flow for Process Diagrams</h2>
          <p className="stage-subtitle">
            Master academic discourse markers to establish seamless logical transitions between sequential stages, passive voice operations, participial clauses, and recipe proportion formulations.
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
              background: "#16a34a",
              color: "#ffffff",
              padding: "2px 7px",
              borderRadius: "6px",
              fontWeight: 750
            }}
          >
            Informal
          </span>
        </button>
      </div>

      {/* Connector Cards Grid — Spacious & Prominent */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "16px" }}>
        {TASK1_DATA.connectors.map((connector, index) => (
          <div
            key={connector.phrase}
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-subtle, #cbd5e1)",
              borderRadius: "16px",
              padding: "18px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span
                  style={{
                    fontSize: "0.76rem",
                    fontWeight: 800,
                    background: "#eff6ff",
                    color: "#2563eb",
                    border: "1px solid #bfdbfe",
                    padding: "2px 8px",
                    borderRadius: "6px"
                  }}
                >
                  Step {index + 1}
                </span>
                <strong style={{ color: "#0f172a", fontSize: "0.96rem" }}>{connector.phrase}</strong>
              </div>
            </div>

            <div style={{ color: "#475569", fontSize: "0.82rem", fontWeight: 650, display: "flex", alignItems: "center", gap: "6px" }}>
              <Sparkles size={14} color="#059669" />
              <span>Function: {connector.purpose}</span>
            </div>

            <div
              style={{
                background: "#f8fafc",
                borderLeft: "3.5px solid #2563eb",
                borderRadius: "8px",
                padding: "12px 14px",
                color: "#1e293b",
                lineHeight: 1.55,
                fontSize: "0.88rem",
                fontStyle: "italic"
              }}
            >
              “{connector.example}”
            </div>
          </div>
        ))}
      </div>

      {/* Recommended Cohesive Flow Pathway for Process Diagrams */}
      <div
        style={{
          background: "#ffffff",
          border: "1.5px solid var(--border-subtle, #cbd5e1)",
          borderRadius: "18px",
          padding: "18px 20px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.02)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <CheckCircle2 size={18} color="#16a34a" />
          <strong style={{ color: "#0f172a", fontSize: "0.95rem" }}>
            Recommended Cohesive Discourse Pathway for Dual Process Diagrams
          </strong>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.86rem", color: "var(--slate-700)" }}>
          {/* Paragraph 3 / Body 1 Flow: Cement Production Pipeline */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", background: "#f8fafc", padding: "10px 14px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
            <span
              style={{
                fontWeight: 800,
                fontSize: "0.76rem",
                background: "#2563eb",
                color: "#ffffff",
                padding: "2px 8px",
                borderRadius: "6px"
              }}
            >
              Body 1: Cement Sequence
            </span>
            <span style={{ fontWeight: 700, color: "#1e40af" }}>“Initially, ...”</span>
            <ArrowRight size={13} color="#2563eb" />
            <span>Raw limestone &amp; clay pulverized in crusher</span>
            <ArrowRight size={13} color="#2563eb" />
            <span style={{ fontWeight: 700, color: "#1e40af" }}>“Following this, ...”</span>
            <ArrowRight size={13} color="#2563eb" />
            <span>Mixed into uniform blend</span>
            <ArrowRight size={13} color="#2563eb" />
            <span style={{ fontWeight: 700, color: "#1e40af" }}>“Next, ...”</span>
            <ArrowRight size={13} color="#2563eb" />
            <span>Rotary kiln + intense heating</span>
            <ArrowRight size={13} color="#2563eb" />
            <span style={{ fontWeight: 700, color: "#1e40af" }}>“After being heated, ...”</span>
            <ArrowRight size={13} color="#2563eb" />
            <span>Conveyor to grinder</span>
            <ArrowRight size={13} color="#2563eb" />
            <span style={{ fontWeight: 700, color: "#1e40af" }}>“Finally, ...”</span>
            <ArrowRight size={13} color="#2563eb" />
            <span>Cement bagged into sacks</span>
          </div>

          {/* Paragraph 4 / Body 2 Flow: Concrete Batch Formulation */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", background: "#f8fafc", padding: "10px 14px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
            <span
              style={{
                fontWeight: 800,
                fontSize: "0.76rem",
                background: "#059669",
                color: "#ffffff",
                padding: "2px 8px",
                borderRadius: "6px"
              }}
            >
              Body 2: Concrete Batch Recipe
            </span>
            <span style={{ fontWeight: 700, color: "#065f46" }}>“Turning to concrete production, ...”</span>
            <ArrowRight size={13} color="#059669" />
            <span>Gravel represents exactly half (50%)</span>
            <ArrowRight size={13} color="#059669" />
            <span>Sand accounts for a quarter (25%)</span>
            <ArrowRight size={13} color="#059669" />
            <span>Cement constitutes 15% (binding agent)</span>
            <ArrowRight size={13} color="#059669" />
            <span>Water forms the remaining 10%</span>
            <ArrowRight size={13} color="#059669" />
            <span style={{ fontWeight: 700, color: "#065f46" }}>“All ingredients poured simultaneously into rotating drum”</span>
            <ArrowRight size={13} color="#059669" />
            <span>Homogeneous concrete paste produced</span>
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
