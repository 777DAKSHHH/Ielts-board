import React, { useState } from "react";
import { CircleCheck, Copy, Check, Lightbulb, ShieldCheck, Sparkles, ArrowRight, RefreshCw, AlertTriangle } from "lucide-react";
import { DISADVANTAGES_IDEA_BANK, FACULTY_DEEPER_SOLUTIONS, CAUSE_AND_EFFECT_CHAINS } from "../../data/task2Data";

export const Step7EvaluationT2: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [activeTab, setActiveTab] = useState<"student" | "faculty">("student");

  const solutions = DISADVANTAGES_IDEA_BANK;
  const chainB = CAUSE_AND_EFFECT_CHAINS.find((c) => c.id === "chain-b") || CAUSE_AND_EFFECT_CHAINS[1] || CAUSE_AND_EFFECT_CHAINS[0];

  const filteredSolutions = activeFilter === "all"
    ? solutions
    : solutions.filter((s) => s.id === activeFilter);

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
          style={{ marginBottom: "8px", background: "#f0fdf4", color: "#166534" }}
        >
          Step 07 / 09 • Possible Solutions to Single-Use Waste (Body Para 2)
        </span>
        <h2 className="stage-title">
          Possible Solutions to Single-Use Waste (Body Paragraph 2) — Idea Banks
        </h2>
        <p className="stage-subtitle">
          Explore 5 pragmatic student solutions and 8 sophisticated faculty policy interventions: statutory levies, Extended Producer Responsibility (EPR), deposit-return systems, circular business models, and behavioral nudges.
        </p>
      </div>

      {/* Cause-and-Effect Chain B Banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #f0fdf4 0%, #eff6ff 100%)",
          border: "1.5px solid #bbf7d0",
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
            <RefreshCw size={16} color="#16a34a" />
            <strong style={{ fontSize: "0.88rem", color: "#166534" }}>
              Strong Cause-and-Effect Chain B: {chainB.title}
            </strong>
          </div>
          <span style={{ fontSize: "0.72rem", background: "#dcfce7", color: "#166534", fontWeight: 800, padding: "2px 8px", borderRadius: "5px" }}>
            Causal Reasoning Architecture
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", overflowX: "auto", paddingBottom: "4px" }}>
          {chainB.steps.map((st, idx) => (
            <React.Fragment key={idx}>
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #bbf7d0",
                  borderRadius: "8px",
                  padding: "6px 10px",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#0f172a",
                  whiteSpace: "nowrap",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
                }}
              >
                <span style={{ color: "#16a34a", marginRight: "4px" }}>Step {idx + 1}:</span>
                {st}
              </div>
              {idx < chainB.steps.length - 1 && (
                <ArrowRight size={14} color="#16a34a" style={{ flexShrink: 0 }} />
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
            color: activeTab === "student" ? "#16a34a" : "#64748b",
            fontWeight: 800,
            fontSize: "0.85rem",
            cursor: "pointer",
            boxShadow: activeTab === "student" ? "0 1px 4px rgba(0,0,0,0.06)" : "none",
            transition: "all 0.15s ease"
          }}
        >
          Student Idea Bank (5 Solutions)
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
            color: activeTab === "faculty" ? "#16a34a" : "#64748b",
            fontWeight: 800,
            fontSize: "0.85rem",
            cursor: "pointer",
            boxShadow: activeTab === "faculty" ? "0 1px 4px rgba(0,0,0,0.06)" : "none",
            transition: "all 0.15s ease"
          }}
        >
          Faculty Solution Bank (8 Sophisticated Approaches)
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
                <ShieldCheck size={14} color="#16a34a" /> Quick Jump:
              </span>
              <button
                type="button"
                onClick={() => setActiveFilter("all")}
                style={{
                  border: activeFilter === "all" ? "1.5px solid #16a34a" : "1px solid #e2e8f0",
                  background: activeFilter === "all" ? "#16a34a" : "#f8fafc",
                  color: activeFilter === "all" ? "#ffffff" : "#475569",
                  padding: "4px 10px",
                  borderRadius: "7px",
                  fontSize: "0.76rem",
                  fontWeight: 800,
                  cursor: "pointer",
                  transition: "all 0.12s ease"
                }}
              >
                All 5 Solutions
              </button>
              {solutions.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveFilter(s.id)}
                  style={{
                    border: activeFilter === s.id ? "1.5px solid #16a34a" : "1px solid #e2e8f0",
                    background: activeFilter === s.id ? "#16a34a" : "#f8fafc",
                    color: activeFilter === s.id ? "#ffffff" : "#475569",
                    padding: "4px 10px",
                    borderRadius: "7px",
                    fontSize: "0.76rem",
                    fontWeight: 800,
                    cursor: "pointer",
                    transition: "all 0.12s ease"
                  }}
                >
                  Solution {idx + 1}
                </button>
              ))}
            </div>

            <span style={{ fontSize: "0.74rem", color: "#64748b", fontWeight: 700 }}>
              Structured: Core Strategic Policy + Concrete Global Precedent
            </span>
          </div>

          {/* ALL 5 STUDENT SOLUTIONS IN A CLEAN SMART BOARD GRID */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "14px",
              marginBottom: "16px"
            }}
          >
            {filteredSolutions.map((sol) => {
              const isCopied = copiedId === sol.id;
              const fullText = `${sol.title}\n\n${sol.mainIdea}\n\nExample: ${sol.example}`;

              return (
                <div
                  key={sol.id}
                  style={{
                    background: "#ffffff",
                    border: "1.5px solid #bbf7d0",
                    borderRadius: "16px",
                    padding: "18px",
                    boxShadow: "0 2px 8px rgba(22, 163, 74, 0.04)",
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
                        background: "#f0fdf4",
                        color: "#166534",
                        fontSize: "0.74rem",
                        fontWeight: 800,
                        padding: "3px 9px",
                        borderRadius: "6px"
                      }}
                    >
                      {sol.badge}
                    </span>

                    <button
                      type="button"
                      onClick={() => handleCopy(sol.id, fullText)}
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
                      title="Copy this solution"
                    >
                      {isCopied ? <Check size={12} color="#166534" /> : <Copy size={12} />}
                      <span>{isCopied ? "Copied" : "Copy"}</span>
                    </button>
                  </div>

                  {/* Title */}
                  <h4 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 800, color: "#0f172a", lineHeight: 1.35 }}>
                    {sol.title}
                  </h4>

                  {/* Main Solution Strategy */}
                  <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "10px", padding: "12px 14px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "4px" }}>
                      <Lightbulb size={13} color="#16a34a" />
                      <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "#166534", textTransform: "uppercase" }}>
                        Solution Strategy &amp; Implementation
                      </span>
                    </div>
                    <p style={{ margin: 0, fontSize: "0.88rem", fontWeight: 650, color: "#0f172a", lineHeight: 1.5 }}>
                      {sol.mainIdea}
                    </p>
                  </div>

                  {/* Concrete Precedent / Example */}
                  <div
                    style={{
                      background: "#f0fdf4",
                      border: "1px solid #86efac",
                      borderRadius: "10px",
                      padding: "12px 14px",
                      marginTop: "auto"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "4px" }}>
                      <CircleCheck size={13} color="#15803d" />
                      <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "#15803d", textTransform: "uppercase" }}>
                        Practical Application Example
                      </span>
                    </div>
                    <p style={{ margin: 0, fontSize: "0.85rem", color: "#14532d", lineHeight: 1.5, fontWeight: 600 }}>
                      {sol.example}
                    </p>
                  </div>

                  {/* Collocations Tag Strip */}
                  {sol.collocations && sol.collocations.length > 0 && (
                    <div style={{ display: "flex", alignItems: "center", gap: "5px", flexWrap: "wrap", paddingTop: "4px" }}>
                      <Sparkles size={12} color="#94a3b8" />
                      {sol.collocations.map((col, cIdx) => (
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

      {/* TAB 2: FACULTY SOLUTION BANK (8 ADVANCED APPROACHES & CRUCIAL DISTINCTION) */}
      {activeTab === "faculty" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "16px" }}>
          {/* Crucial Teaching Distinction: Recycling vs Reducing/Reusing */}
          <div
            style={{
              background: "linear-gradient(135deg, #064e3b 0%, #0f172a 100%)",
              color: "#ffffff",
              borderRadius: "16px",
              padding: "18px 22px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.12)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <AlertTriangle size={18} color="#86efac" />
              <strong style={{ fontSize: "0.94rem", color: "#86efac", letterSpacing: "0.02em" }}>
                Crucial Teaching Distinction: Recycling vs Reducing &amp; Reusing
              </strong>
            </div>
            <p style={{ margin: 0, fontSize: "0.94rem", lineHeight: 1.6, fontWeight: 550, color: "#f0fdf4" }}>
              Make sure students understand that <strong>recycling alone cannot solve the problem</strong>. Recycling processes consume significant energy and cannot manage low-grade or contaminated plastics efficiently. <strong>Reducing production and promoting reuse are far more effective long-term solutions</strong>.
            </p>
          </div>

          {/* 8 Sophisticated Faculty Approaches Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "12px" }}>
            {FACULTY_DEEPER_SOLUTIONS.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: "#ffffff",
                  border: "1.5px solid #bbf7d0",
                  borderRadius: "14px",
                  padding: "14px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.03)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "0.72rem", fontWeight: 800, background: "#dcfce7", color: "#166534", padding: "2px 7px", borderRadius: "5px" }}>
                    Approach 0{idx + 1}
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
