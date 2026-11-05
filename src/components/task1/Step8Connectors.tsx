import React from "react";
import { ArrowRight, BookOpen, CheckCircle2, Mail, Sparkles } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

interface Step8ConnectorsProps {
  onSpeak?: (text: string) => void;
  onNavigateToGeneral?: () => void;
  onNavigateToCambridge?: () => void;
}

export const Step8Connectors: React.FC<Step8ConnectorsProps> = ({
  onSpeak,
  onNavigateToGeneral,
  onNavigateToCambridge
}) => {
  return (
    <div className="stage-card-wrapper">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <span className="apple-badge success" style={{ marginBottom: "8px" }}>
            Step 08 / 08 • Academic Transitions &amp; Comparative Cohesion
          </span>
          <h2 className="stage-title">Discourse Connectors &amp; Cohesive Flow for Comparative Tables</h2>
          <p className="stage-subtitle">
            Master academic discourse markers to establish seamless logical transitions between category pivots, superlative leaders, clustered data brackets, and respective reporting.
          </p>
        </div>

        {/* Header Action Buttons for Extension Suites */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
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
                  background: "#16a34a",
                  color: "#ffffff",
                  padding: "2px 6px",
                  borderRadius: "5px",
                  fontWeight: 750
                }}
              >
                Semi-Formal
              </span>
            </button>
          )}

          {onNavigateToCambridge && (
            <button
              type="button"
              onClick={onNavigateToCambridge}
              style={{
                padding: "9px 16px",
                background: "linear-gradient(135deg, #091e3a, #173865)",
                color: "#ffffff",
                border: "1.5px solid #1e3a8a",
                borderRadius: "12px",
                fontSize: "0.84rem",
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(9, 30, 58, 0.18)",
                transition: "all 0.15s ease"
              }}
            >
              <BookOpen size={16} color="#34d399" />
              <span>Cambridge 7 Test 2 Reading</span>
              <span
                style={{
                  fontSize: "0.70rem",
                  background: "#2563eb",
                  color: "#ffffff",
                  padding: "2px 6px",
                  borderRadius: "5px",
                  fontWeight: 750
                }}
              >
                Passages 1–3
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

      {/* Recommended Cohesive Flow Pathway for Comparative Tables */}
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
            Recommended Cohesive Discourse Pathway for Comparative Tables
          </strong>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.86rem", color: "var(--slate-700)" }}>
          {/* Paragraph 3 / Body 1 Flow: Food Sector */}
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
              Body 1: Sustenance Flow
            </span>
            <span style={{ fontWeight: 700, color: "#1e40af" }}>“In terms of food, ...”</span>
            <ArrowRight size={13} color="#2563eb" />
            <span>Turkey leads (nearly a third at 32.14%)</span>
            <ArrowRight size={13} color="#2563eb" />
            <span style={{ fontWeight: 700, color: "#1e40af" }}>“followed closely behind by Ireland (28.91%)”</span>
            <ArrowRight size={13} color="#2563eb" />
            <span style={{ fontWeight: 700, color: "#1e40af" }}>“In marked contrast, ...”</span>
            <ArrowRight size={13} color="#2563eb" />
            <span>Spain at 18.80%</span>
            <ArrowRight size={13} color="#2563eb" />
            <span style={{ fontWeight: 700, color: "#1e40af" }}>“at 16.36% and 15.77% respectively”</span>
            <ArrowRight size={13} color="#2563eb" />
            <span>Italy &amp; Sweden lower tier</span>
          </div>

          {/* Paragraph 4 / Body 2 Flow: Clothing & Leisure Sectors */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", background: "#f8fafc", padding: "10px 14px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
            <span
              style={{
                fontWeight: 800,
                fontSize: "0.76rem",
                background: "#d97706",
                color: "#ffffff",
                padding: "2px 8px",
                borderRadius: "6px"
              }}
            >
              Body 2: Clothing &amp; Leisure
            </span>
            <span style={{ fontWeight: 700, color: "#9a3412" }}>“Turning to clothing and footwear, ...”</span>
            <ArrowRight size={13} color="#d97706" />
            <span>Italy undisputed leader (9.00%)</span>
            <ArrowRight size={13} color="#d97706" />
            <span style={{ fontWeight: 700, color: "#9a3412" }}>“outstripping Turkey, Spain &amp; Ireland”</span>
            <ArrowRight size={13} color="#d97706" />
            <span>Trio clustered around 6.5%</span>
            <ArrowRight size={13} color="#d97706" />
            <span>Sweden lowest at 5.40%</span>
            <ArrowRight size={13} color="#d97706" />
            <span style={{ fontWeight: 700, color: "#9a3412" }}>“Finally, leisure and education ...”</span>
            <ArrowRight size={13} color="#d97706" />
            <span>Turkey tops (4.35%)</span>
            <ArrowRight size={13} color="#d97706" />
            <span>Sweden &amp; Italy matched (~3.2%)</span>
            <ArrowRight size={13} color="#d97706" />
            <span style={{ fontWeight: 700, color: "#9a3412" }}>“Spain lowest single figure in table at 1.98%”</span>
          </div>
        </div>
      </div>

      {/* Specialist Extensions & Practice Suites Launchpad */}
      <div
        style={{
          background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
          border: "2px solid #cbd5e1",
          borderRadius: "20px",
          padding: "22px 24px",
          display: "flex",
          flexDirection: "column",
          gap: "16px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
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
          {/* Card 1: General Training Task 1 Letter Masterclass */}
          {onNavigateToGeneral && (
            <div
              onClick={onNavigateToGeneral}
              style={{
                background: "#ffffff",
                border: "1.5px solid #cbd5e1",
                borderRadius: "16px",
                padding: "18px 20px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                transition: "all 0.2s ease"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Mail size={18} color="#2563eb" />
                  </div>
                  <strong style={{ fontSize: "0.96rem", color: "#0f172a" }}>General Task 1 (Letter Masterclass)</strong>
                </div>
                <span style={{ fontSize: "0.72rem", background: "#ecfdf5", color: "#047857", fontWeight: 750, padding: "2px 8px", borderRadius: "6px", border: "1px solid #a7f3d0" }}>
                  Semi-Formal
                </span>
              </div>
              <p style={{ fontSize: "0.82rem", color: "#64748b", margin: 0, lineHeight: 1.45 }}>
                Master the strict 5-paragraph architecture, forbidden essay linkers, and neighbour problem resolution model.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#2563eb", fontSize: "0.84rem", fontWeight: 750, marginTop: "4px" }}>
                <span>Open Dedicated Letter Page</span>
                <ArrowRight size={14} />
              </div>
            </div>
          )}

          {/* Card 2: Cambridge Book 7 Test 2 Reading Solutions */}
          {onNavigateToCambridge && (
            <div
              onClick={onNavigateToCambridge}
              style={{
                background: "#ffffff",
                border: "1.5px solid #cbd5e1",
                borderRadius: "16px",
                padding: "18px 20px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                transition: "all 0.2s ease"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#f0fdf4", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <BookOpen size={18} color="#16a34a" />
                  </div>
                  <strong style={{ fontSize: "0.96rem", color: "#0f172a" }}>Cambridge 7 Test 2 Reading Key</strong>
                </div>
                <span style={{ fontSize: "0.72rem", background: "#eff6ff", color: "#1d4ed8", fontWeight: 750, padding: "2px 8px", borderRadius: "6px", border: "1px solid #bfdbfe" }}>
                  Passages 1–3
                </span>
              </div>
              <p style={{ fontSize: "0.82rem", color: "#64748b", margin: 0, lineHeight: 1.45 }}>
                Step-by-step analytical breakdown: paragraph context, exact text quotes, keyword synonym bridges, and answer keys.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#16a34a", fontSize: "0.84rem", fontWeight: 750, marginTop: "4px" }}>
                <span>Open Cambridge Reading Solutions</span>
                <ArrowRight size={14} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
