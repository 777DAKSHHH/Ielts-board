import React from "react";
import { ArrowRight, BookOpen, CheckCircle2, Mail, Sparkles } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

interface Step8ConnectorsProps {
  onSpeak?: (text: string) => void;
  onNavigateToGeneral?: () => void;
  onNavigateToNuanceLab?: () => void;
}

export const Step8Connectors: React.FC<Step8ConnectorsProps> = ({
  onSpeak,
  onNavigateToGeneral,
  onNavigateToNuanceLab
}) => {
  return (
    <div className="stage-card-wrapper">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <span className="apple-badge success" style={{ marginBottom: "8px" }}>
            Step 08 / 08 • Academic Transitions &amp; Comparative Cohesion
          </span>
          <h2 className="stage-title">Discourse Connectors &amp; Cohesive Flow for Wheat Exports</h2>
          <p className="stage-subtitle">
            Master academic discourse markers to establish seamless logical transitions across line graph parameters: European Community upward growth, Canadian dramatic fluctuations and 1988 apex, and Australia's steady downward trajectory.
          </p>
        </div>

        {/* Header Action Buttons for Extension Pages */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
          {onNavigateToNuanceLab && (
            <button
              type="button"
              onClick={onNavigateToNuanceLab}
              style={{
                padding: "9px 16px",
                background: "linear-gradient(135deg, #1e1b4b, #312e81)",
                color: "#ffffff",
                border: "1.5px solid #4338ca",
                borderRadius: "12px",
                fontSize: "0.84rem",
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(67, 56, 202, 0.2)",
                transition: "all 0.15s ease"
              }}
            >
              <Sparkles size={16} color="#a5b4fc" />
              <span>Nuance Lab (Below / Under / Underneath)</span>
              <span
                style={{
                  fontSize: "0.70rem",
                  background: "#4f46e5",
                  color: "#ffffff",
                  padding: "2px 6px",
                  borderRadius: "5px",
                  fontWeight: 750
                }}
              >
                Ep 01
              </span>
            </button>
          )}

          {onNavigateToGeneral && (
            <button
              type="button"
              onClick={onNavigateToGeneral}
              style={{
                padding: "9px 16px",
                background: "linear-gradient(135deg, #0f172a, #1e293b)",
                color: "#ffffff",
                border: "1.5px solid #334155",
                borderRadius: "12px",
                fontSize: "0.84rem",
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(15, 23, 42, 0.12)",
                transition: "all 0.15s ease"
              }}
            >
              <Mail size={16} color="#60a5fa" />
              <span>General Task 1 (Letter)</span>
              <span
                style={{
                  fontSize: "0.70rem",
                  background: "#d97706",
                  color: "#ffffff",
                  padding: "2px 6px",
                  borderRadius: "5px",
                  fontWeight: 750
                }}
              >
                Informal
              </span>
            </button>
          )}
        </div>
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
                    width: "24px",
                    height: "24px",
                    borderRadius: "6px",
                    background: "var(--slate-100)",
                    color: "var(--slate-700)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  {index + 1}
                </span>
                <strong style={{ fontSize: "1.05rem", color: "var(--slate-900)" }}>
                  {connector.phrase}
                </strong>
              </div>
              <span className="apple-badge neutral" style={{ background: "#eff6ff", color: "#1d4ed8", fontWeight: 750, fontSize: "0.72rem" }}>
                Dual Chart Transition
              </span>
            </div>

            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              {connector.purpose}
            </p>

            <div
              style={{
                background: "var(--slate-50)",
                borderLeft: "3.5px solid var(--apple-blue)",
                borderRadius: "8px",
                padding: "10px 14px",
                fontSize: "0.88rem",
                color: "var(--slate-800)",
                lineHeight: 1.55,
                fontStyle: "italic",
                marginTop: "auto"
              }}
            >
              “{connector.example}”
            </div>
          </div>
        ))}
      </div>

      {/* Prominent Launch Pad for General Task 1 & Cambridge Solutions */}
      <div
        style={{
          marginTop: "16px",
          background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
          border: "2px solid #cbd5e1",
          borderRadius: "20px",
          padding: "22px 24px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.03)"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
          <div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a", margin: "0 0 4px" }}>
              Specialist Modules &amp; Academic Reading Solutions
            </h3>
            <p style={{ fontSize: "0.85rem", color: "#64748b", margin: 0 }}>
              Launch dedicated full-screen pages for letter writing rules or Cambridge 7 Test 2 reading answer keys.
            </p>
          </div>
          <span style={{ fontSize: "0.76rem", fontWeight: 800, background: "#e2e8f0", color: "#475569", padding: "4px 10px", borderRadius: "8px" }}>
            Step 8 Teaching Hub
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "14px" }}>
          {/* English Nuance Lab (Below vs Under vs Underneath) */}
          {onNavigateToNuanceLab && (
            <div
              onClick={onNavigateToNuanceLab}
              style={{
                background: "linear-gradient(135deg, #f8fafc, #eff6ff)",
                border: "1.5px solid #bfdbfe",
                borderRadius: "16px",
                padding: "20px 24px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                boxShadow: "0 2px 10px rgba(37, 99, 235, 0.06)",
                transition: "all 0.2s ease"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#dbeafe", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Sparkles size={20} color="#2563eb" />
                  </div>
                  <div>
                    <strong style={{ fontSize: "1.05rem", color: "#0f172a" }}>English Nuance Lab (Words Often Misunderstood)</strong>
                    <div style={{ fontSize: "0.78rem", color: "#64748b" }}>Episode 01: BELOW vs. UNDER vs. UNDERNEATH</div>
                  </div>
                </div>
                <span style={{ fontSize: "0.74rem", background: "#dbeafe", color: "#1e40af", fontWeight: 750, padding: "3px 10px", borderRadius: "6px", border: "1px solid #bfdbfe" }}>
                  Classroom Reveal Mode
                </span>
              </div>
              <p style={{ fontSize: "0.86rem", color: "#475569", margin: "4px 0 0", lineHeight: 1.5 }}>
                Interactive SmartBoard lesson: Ask students first about imaginary horizontal lines (below), 3D vertical shelter / abstract states (under), and hidden layers (underneath), then reveal definitive rules and practice drills.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#2563eb", fontSize: "0.88rem", fontWeight: 750, marginTop: "6px" }}>
                <span>Launch Nuance Lab Page</span>
                <ArrowRight size={16} />
              </div>
            </div>
          )}

          {/* General Training Task 1 Letter Masterclass */}
          {onNavigateToGeneral && (
            <div
              onClick={onNavigateToGeneral}
              style={{
                background: "#ffffff",
                border: "1.5px solid #cbd5e1",
                borderRadius: "16px",
                padding: "20px 24px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                transition: "all 0.2s ease"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#fef3c7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Mail size={20} color="#d97706" />
                  </div>
                  <div>
                    <strong style={{ fontSize: "1.05rem", color: "#0f172a" }}>General Training Task 1 (Informal Letter Masterclass)</strong>
                    <div style={{ fontSize: "0.78rem", color: "#64748b" }}>College Project Letter • Celebrating New Year in a Different Country</div>
                  </div>
                </div>
                <span style={{ fontSize: "0.74rem", background: "#fef3c7", color: "#92400e", fontWeight: 750, padding: "3px 10px", borderRadius: "6px", border: "1px solid #fde68a" }}>
                  Informal Register (Bestu Varas)
                </span>
              </div>
              <p style={{ fontSize: "0.86rem", color: "#475569", margin: "4px 0 0", lineHeight: 1.5 }}>
                Master the strict 5-paragraph letter architecture (Warm Opening + Prompt Bullet 1 + Prompt Bullet 2 + Prompt Bullet 3 + Warm Sign-off), authentic informal idioms, and Indian / Gujarati New Year cultural traditions.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#d97706", fontSize: "0.88rem", fontWeight: 750, marginTop: "6px" }}>
                <span>Launch Dedicated Letter Page</span>
                <ArrowRight size={16} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
