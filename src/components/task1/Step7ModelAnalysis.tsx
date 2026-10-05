import React, { useState } from "react";
import { Layers, CheckCircle2, FileText } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step7ModelAnalysis: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "intro" | "overview" | "body1" | "body2">("all");
  const modelReport = TASK1_DATA.modelReport;

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 07 / 08 • Grammatical Structures &amp; Full Model Report
        </span>
        <h2 className="stage-title">Data Reporting Structures &amp; Complete Band 9 Response</h2>
        <p className="stage-subtitle">
          Master the three essential grammatical and lexical groupings for dynamic line graphs, alongside the complete 228-word Band 9 model report organized across four balanced paragraphs.
        </p>
      </div>

      {/* 3 Grammatical Processing Groups */}
      <div className="stage-grid-2col" style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "14px" }}>
        {TASK1_DATA.processingGroups.map((group, idx) => (
          <div
            key={group.title}
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "18px",
              padding: "18px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <Layers
                size={17}
                color={idx === 0 ? "var(--apple-blue)" : idx === 1 ? "#9333ea" : "#16a34a"}
              />
              <h4 style={{ fontSize: "0.92rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                {group.title}
              </h4>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {group.items.map((item) => (
                <div
                  key={item}
                  style={{
                    background: "#ffffff",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "10px",
                    padding: "9px 11px",
                    fontWeight: 600,
                    color: "var(--slate-800)",
                    fontSize: "0.82rem",
                    lineHeight: 1.4
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Full Band 9 Model Report Box */}
      {modelReport && (
        <div
          style={{
            background: "#ffffff",
            border: "1.5px solid var(--border-subtle)",
            borderRadius: "20px",
            padding: "22px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            boxShadow: "var(--shadow-sm)"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <FileText size={20} color="var(--apple-blue)" />
              <h4 style={{ fontSize: "1.1rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                Unified Band 9 Model Response ({modelReport.wordCount} words)
              </h4>
            </div>

            {/* Filter Tabs */}
            <div style={{ display: "flex", gap: "6px", background: "var(--slate-100)", padding: "4px", borderRadius: "10px" }}>
              {(
                [
                  { id: "all", label: "Full Report (All)" },
                  { id: "intro", label: "Intro" },
                  { id: "overview", label: "Overview" },
                  { id: "body1", label: "Body 1" },
                  { id: "body2", label: "Body 2" }
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: "4px 10px",
                    borderRadius: "8px",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                    background: activeTab === tab.id ? "#ffffff" : "transparent",
                    color: activeTab === tab.id ? "var(--slate-900)" : "var(--slate-600)",
                    boxShadow: activeTab === tab.id ? "var(--shadow-sm)" : "none"
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Paragraphs Display */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {modelReport.paragraphs
              .filter((p) => activeTab === "all" || p.id === activeTab)
              .map((p) => (
                <div
                  key={p.id}
                  style={{
                    background: "var(--slate-50)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "14px",
                    padding: "16px 18px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span className="apple-badge neutral" style={{ fontSize: "0.75rem", fontWeight: 750 }}>
                        {p.title}
                      </span>
                      <span style={{ fontSize: "0.76rem", color: "var(--slate-500)", fontWeight: 600 }}>
                        ({p.wordCount} words)
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: "5px" }}>
                      {p.badges.map((badge) => (
                        <span
                          key={badge}
                          className="apple-badge neutral"
                          style={{ fontSize: "0.7rem", padding: "2px 6px" }}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.95rem",
                      color: "var(--slate-800)",
                      lineHeight: 1.65,
                      fontFamily: "var(--font-sans)"
                    }}
                  >
                    {p.text}
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Model Synthesis Sentence */}
      <div
        style={{
          background: "#ffffff",
          border: "1.5px solid var(--border-subtle)",
          borderRadius: "18px",
          padding: "18px 20px",
          boxShadow: "var(--shadow-sm)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
          <CheckCircle2 size={18} color="#16a34a" />
          <strong style={{ color: "var(--slate-900)", fontSize: "0.95rem" }}>
            Band 9 Macro Synthesis Sentence (Grammatical Benchmark)
          </strong>
        </div>
        <p style={{ margin: 0, fontSize: "0.96rem", lineHeight: 1.6, color: "var(--slate-800)" }}>
          “While per capita carbon emissions in the United Kingdom and Sweden followed long-term downward paths—with the UK retaining the top rank and Sweden plummeting after an initial spike—Italy and Portugal experienced unbroken growth, culminating in Italy plateauing at 7.6 tonnes and Portugal quadrupling to converge with Sweden at 5.4 tonnes.”
        </p>
      </div>
    </div>
  );
};
