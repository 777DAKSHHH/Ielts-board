import React, { useState } from "react";
import { Lightbulb, CircleCheck, Copy, Check, ShieldCheck, Sparkles } from "lucide-react";
import { SOLUTIONS_IDEA_BANK } from "../../data/task2Data";

export const Step7EvaluationT2: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const solutions = SOLUTIONS_IDEA_BANK;

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
          style={{ marginBottom: "8px", background: "#ffedd5", color: "#c2410c" }}
        >
          Step 07 / 09 • Student Idea Bank: Non-Opinion / Concession
        </span>
        <h2 className="stage-title">
          Non-Opinion / Concession (Body 3) — Student Idea Bank
        </h2>
        <p className="stage-subtitle">
          These are pragmatic economic arguments analyzing the necessity of profit generation, financial solvency, employment creation, and shareholder returns with relatable examples.
        </p>
      </div>

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
            <ShieldCheck size={14} color="#ea580c" /> Quick Jump:
          </span>
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            style={{
              border: activeFilter === "all" ? "1.5px solid #ea580c" : "1px solid #e2e8f0",
              background: activeFilter === "all" ? "#ea580c" : "#f8fafc",
              color: activeFilter === "all" ? "#ffffff" : "#475569",
              padding: "4px 10px",
              borderRadius: "7px",
              fontSize: "0.76rem",
              fontWeight: 800,
              cursor: "pointer",
              transition: "all 0.12s ease"
            }}
          >
            All 5 Arguments
          </button>
          {solutions.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveFilter(s.id)}
              style={{
                border: activeFilter === s.id ? "1.5px solid #ea580c" : "1px solid #e2e8f0",
                background: activeFilter === s.id ? "#ea580c" : "#f8fafc",
                color: activeFilter === s.id ? "#ffffff" : "#475569",
                padding: "4px 10px",
                borderRadius: "7px",
                fontSize: "0.76rem",
                fontWeight: 800,
                cursor: "pointer",
                transition: "all 0.12s ease"
              }}
            >
              Concession {idx + 1}
            </button>
          ))}
        </div>

        <span style={{ fontSize: "0.74rem", color: "#64748b", fontWeight: 700 }}>
          Structured: Core Economic Reality + Concrete Relatable Example
        </span>
      </div>

      {/* ALL 5 STUDENT CONCESSION IDEAS IN A CLEAN HIGH-READABILITY SMART BOARD GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "14px",
          marginBottom: "16px"
        }}
      >
        {filteredSolutions.map((solution) => {
          const isCopied = copiedId === solution.id;
          const fullText = `${solution.title}\n\n${solution.mainIdea}\n\nExample: ${solution.example}`;

          return (
            <div
              key={solution.id}
              style={{
                background: "#ffffff",
                border: "1.5px solid #fed7aa",
                borderRadius: "16px",
                padding: "18px",
                boxShadow: "0 2px 8px rgba(234, 88, 12, 0.04)",
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
                    background: "#ffedd5",
                    color: "#c2410c",
                    fontSize: "0.74rem",
                    fontWeight: 800,
                    padding: "3px 9px",
                    borderRadius: "6px"
                  }}
                >
                  {solution.badge}
                </span>

                <button
                  type="button"
                  onClick={() => handleCopy(solution.id, fullText)}
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
                  title="Copy this concession idea"
                >
                  {isCopied ? <Check size={12} color="#166534" /> : <Copy size={12} />}
                  <span>{isCopied ? "Copied" : "Copy"}</span>
                </button>
              </div>

              {/* Title */}
              <h4 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 800, color: "#0f172a", lineHeight: 1.35 }}>
                {solution.title}
              </h4>

              {/* Core Economic Reality / Relatable Explanation */}
              <div style={{ background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: "10px", padding: "12px 14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "4px" }}>
                  <Lightbulb size={13} color="#ea580c" />
                  <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "#c2410c", textTransform: "uppercase" }}>
                    Economic Reality &amp; Justification
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: "0.88rem", fontWeight: 650, color: "#0f172a", lineHeight: 1.5 }}>
                  {solution.mainIdea}
                </p>
              </div>

              {/* Relatable Concrete Example */}
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
                  <CircleCheck size={13} color="#16a34a" />
                  <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "#15803d", textTransform: "uppercase" }}>
                    Relatable Student Example
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: "0.85rem", color: "#14532d", lineHeight: 1.5, fontWeight: 600 }}>
                  {solution.example}
                </p>
              </div>

              {/* Collocations Tag Strip */}
              {solution.collocations && solution.collocations.length > 0 && (
                <div style={{ display: "flex", alignItems: "center", gap: "5px", flexWrap: "wrap", paddingTop: "4px" }}>
                  <Sparkles size={12} color="#94a3b8" />
                  {solution.collocations.map((col, cIdx) => (
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
    </div>
  );
};
