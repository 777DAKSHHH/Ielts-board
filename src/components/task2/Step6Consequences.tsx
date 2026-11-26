import React, { useState } from "react";
import { AlertOctagon, CircleCheck, Copy, Check, Lightbulb, Sparkles, ArrowRight, ShieldAlert } from "lucide-react";
import { ADVANTAGES_IDEA_BANK, FACULTY_DEEPER_PROBLEMS, CAUSE_AND_EFFECT_CHAINS } from "../../data/task2Data";

export const Step6ConsequencesT2: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [activeTab, setActiveTab] = useState<"student" | "faculty">("student");

  const causes = ADVANTAGES_IDEA_BANK;
  const chainA = CAUSE_AND_EFFECT_CHAINS.find((c) => c.id === "chain-a") || CAUSE_AND_EFFECT_CHAINS[0];

  const filteredCauses = activeFilter === "all"
    ? causes
    : causes.filter((c) => c.id === activeFilter);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="stage-card-wrapper" style={{ overflowY: "auto", maxHeight: "100%" }}>
      {/* Step Header */}
      <div style={{ marginBottom: "16px" }}>
        <span
          className="apple-badge accent"
          style={{ marginBottom: "8px", background: "#fef2f2", color: "#991b1b" }}
        >
          Step 06 / 09 • Problems Caused by Single-Use Products (Body Para 1)
        </span>
        <h2 className="stage-title">
          Problems Caused by Single-Use Products (Body Paragraph 1) — Idea Banks
        </h2>
        <p className="stage-subtitle">
          Explore 5 core student problems and 7 deeper faculty analytical angles covering landfill accumulation, marine wildlife threats, petrochemical depletion, municipal waste burdens, and microplastic contamination.
        </p>
      </div>

      {/* Cause-and-Effect Chain A Banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #fef2f2 0%, #fff7ed 100%)",
          border: "1.5px solid #fecaca",
          borderRadius: "16px",
          padding: "14px 18px",
          marginBottom: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "8px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "6px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <AlertOctagon size={16} color="#dc2626" />
            <strong style={{ fontSize: "0.88rem", color: "#991b1b" }}>
              Strong Cause-and-Effect Chain A: {chainA.title}
            </strong>
          </div>
          <span style={{ fontSize: "0.72rem", background: "#fee2e2", color: "#991b1b", fontWeight: 800, padding: "2px 8px", borderRadius: "5px" }}>
            Causal Reasoning Architecture
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", overflowX: "auto", paddingBottom: "4px" }}>
          {chainA.steps.map((st, idx) => (
            <React.Fragment key={idx}>
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #fecaca",
                  borderRadius: "8px",
                  padding: "6px 10px",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#0f172a",
                  whiteSpace: "nowrap",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
                }}
              >
                <span style={{ color: "#dc2626", marginRight: "4px" }}>Step {idx + 1}:</span>
                {st}
              </div>
              {idx < chainA.steps.length - 1 && (
                <ArrowRight size={14} color="#dc2626" style={{ flexShrink: 0 }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Primary Idea Bank Switcher Tabs */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          background: "#f1f5f9",
          padding: "4px",
          borderRadius: "12px",
          marginBottom: "16px"
        }}
      >
        <button
          type="button"
          onClick={() => setActiveTab("student")}
          style={{
            flex: 1,
            padding: "8px 14px",
            borderRadius: "8px",
            border: "none",
            background: activeTab === "student" ? "#ffffff" : "transparent",
            color: activeTab === "student" ? "#dc2626" : "#64748b",
            fontWeight: 800,
            fontSize: "0.85rem",
            cursor: "pointer",
            boxShadow: activeTab === "student" ? "0 1px 4px rgba(0,0,0,0.06)" : "none",
            transition: "all 0.15s ease"
          }}
        >
          Student Idea Bank (5 Problems)
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("faculty")}
          style={{
            flex: 1,
            padding: "8px 14px",
            borderRadius: "8px",
            border: "none",
            background: activeTab === "faculty" ? "#ffffff" : "transparent",
            color: activeTab === "faculty" ? "#dc2626" : "#64748b",
            fontWeight: 800,
            fontSize: "0.85rem",
            cursor: "pointer",
            boxShadow: activeTab === "faculty" ? "0 1px 4px rgba(0,0,0,0.06)" : "none",
            transition: "all 0.15s ease"
          }}
        >
          Faculty Idea Bank (7 Deeper Problems)
        </button>
      </div>

      {/* TAB 1: STUDENT IDEA BANK */}
      {activeTab === "student" && (
        <>
          {/* Quick Filter Bar */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "14px",
              padding: "10px 14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "16px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "#475569", display: "flex", alignItems: "center", gap: "4px" }}>
                <AlertOctagon size={14} color="#dc2626" /> Quick Jump:
              </span>
              <button
                type="button"
                onClick={() => setActiveFilter("all")}
                style={{
                  border: activeFilter === "all" ? "1.5px solid #dc2626" : "1px solid #e2e8f0",
                  background: activeFilter === "all" ? "#dc2626" : "#f8fafc",
                  color: activeFilter === "all" ? "#ffffff" : "#475569",
                  padding: "4px 10px",
                  borderRadius: "7px",
                  fontSize: "0.76rem",
                  fontWeight: 800,
                  cursor: "pointer",
                  transition: "all 0.12s ease"
                }}
              >
                All 5 Problems
              </button>
              {causes.map((c, idx) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveFilter(c.id)}
                  style={{
                    border: activeFilter === c.id ? "1.5px solid #dc2626" : "1px solid #e2e8f0",
                    background: activeFilter === c.id ? "#dc2626" : "#f8fafc",
                    color: activeFilter === c.id ? "#ffffff" : "#475569",
                    padding: "4px 10px",
                    borderRadius: "7px",
                    fontSize: "0.76rem",
                    fontWeight: 800,
                    cursor: "pointer",
                    transition: "all 0.12s ease"
                  }}
                >
                  Problem {idx + 1}
                </button>
              ))}
            </div>

            <span style={{ fontSize: "0.74rem", color: "#64748b", fontWeight: 700 }}>
              Structured: Core Ecological Dilemma + Concrete Global Precedent
            </span>
          </div>

          {/* ALL 5 STUDENT PROBLEM ARGUMENTS IN A CLEAN SMART BOARD GRID */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "14px",
              marginBottom: "16px"
            }}
          >
            {filteredCauses.map((cause) => {
              const isCopied = copiedId === cause.id;
              const fullText = `${cause.title}\n\n${cause.mainIdea}\n\nExample: ${cause.example}`;

              return (
                <div
                  key={cause.id}
                  style={{
                    background: "#ffffff",
                    border: "1.5px solid #fecaca",
                    borderRadius: "16px",
                    padding: "18px",
                    boxShadow: "0 2px 8px rgba(220, 38, 38, 0.04)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    position: "relative"
                  }}
                >
                  {/* Card Header & Badge */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                    <span
                      style={{
                        background: "#fef2f2",
                        color: "#b91c1c",
                        fontSize: "0.74rem",
                        fontWeight: 800,
                        padding: "3px 9px",
                        borderRadius: "6px"
                      }}
                    >
                      {cause.badge}
                    </span>

                    <button
                      type="button"
                      onClick={() => handleCopy(cause.id, fullText)}
                      style={{
                        background: isCopied ? "#dcfce7" : "#f8fafc",
                        border: "1px solid #e2e8f0",
                        color: isCopied ? "#166534" : "#475569",
                        padding: "3px 8px",
                        borderRadius: "6px",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px"
                      }}
                      title="Copy this problem argument"
                    >
                      {isCopied ? <Check size={12} color="#166534" /> : <Copy size={12} />}
                      <span>{isCopied ? "Copied" : "Copy"}</span>
                    </button>
                  </div>

                  {/* Title */}
                  <h4 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 800, color: "#0f172a", lineHeight: 1.35 }}>
                    {cause.title}
                  </h4>

                  {/* Main Argument / Explanation */}
                  <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "10px", padding: "12px 14px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "4px" }}>
                      <Lightbulb size={13} color="#dc2626" />
                      <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "#991b1b", textTransform: "uppercase" }}>
                        Problem Analysis &amp; Causal Chain
                      </span>
                    </div>
                    <p style={{ margin: 0, fontSize: "0.88rem", fontWeight: 650, color: "#0f172a", lineHeight: 1.5 }}>
                      {cause.mainIdea}
                    </p>
                  </div>

                  {/* Concrete Example */}
                  <div
                    style={{
                      background: "#fff1f2",
                      border: "1px solid #fecdd3",
                      borderRadius: "10px",
                      padding: "12px 14px",
                      marginTop: "auto"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "4px" }}>
                      <CircleCheck size={13} color="#e11d48" />
                      <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "#9f1239", textTransform: "uppercase" }}>
                        Concrete Environmental Example
                      </span>
                    </div>
                    <p style={{ margin: 0, fontSize: "0.85rem", color: "#881337", lineHeight: 1.5, fontWeight: 600 }}>
                      {cause.example}
                    </p>
                  </div>

                  {/* Collocations Tag Strip */}
                  {cause.collocations && cause.collocations.length > 0 && (
                    <div style={{ display: "flex", alignItems: "center", gap: "5px", flexWrap: "wrap", paddingTop: "4px" }}>
                      <Sparkles size={12} color="#94a3b8" />
                      {cause.collocations.map((col, cIdx) => (
                        <span
                          key={cIdx}
                          style={{
                            fontSize: "0.70rem",
                            fontWeight: 700,
                            background: "#f1f5f9",
                            color: "#475569",
                            padding: "2px 7px",
                            borderRadius: "5px"
                          }}
                        >
                          {col}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}

      {/* TAB 2: FACULTY DEEPER PROBLEMS & LINEAR VS CIRCULAR ARGUMENT */}
      {activeTab === "faculty" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "16px" }}>
          {/* Linear vs Circular Model Callout */}
          <div
            style={{
              background: "linear-gradient(135deg, #450a0a 0%, #1e1b4b 100%)",
              color: "#ffffff",
              borderRadius: "16px",
              padding: "18px 22px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.12)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <ShieldAlert size={18} color="#fca5a5" />
              <strong style={{ fontSize: "0.94rem", color: "#fca5a5", letterSpacing: "0.02em" }}>
                Particularly Strong Faculty Argument: Linear vs Circular Model
              </strong>
            </div>
            <p style={{ margin: 0, fontSize: "0.96rem", lineHeight: 1.6, fontWeight: 550, color: "#f1f5f9" }}>
              “Single-use products create a <strong>linear consumption model</strong> — resources are extracted, manufactured into products, used briefly and then discarded. This is fundamentally less sustainable than a <strong>circular model</strong> based on reuse, repair and recycling.”
            </p>
          </div>

          {/* 7 Deeper Faculty Problems Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "12px" }}>
            {FACULTY_DEEPER_PROBLEMS.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: "#ffffff",
                  border: "1.5px solid #fecaca",
                  borderRadius: "14px",
                  padding: "14px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.03)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "0.72rem", fontWeight: 800, background: "#fee2e2", color: "#991b1b", padding: "2px 7px", borderRadius: "5px" }}>
                    Deeper Problem 0{idx + 1}
                  </span>
                </div>
                <h4 style={{ margin: 0, fontSize: "0.95rem", fontWeight: 800, color: "#0f172a" }}>
                  {item.name}
                </h4>
                <p style={{ margin: 0, fontSize: "0.84rem", color: "#475569", lineHeight: 1.5 }}>
                  {item.development}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
