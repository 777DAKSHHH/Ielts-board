import React, { useState } from "react";
import { Lightbulb, CircleCheck, Copy, Check, AlertOctagon, Sparkles } from "lucide-react";
import { CAUSES_IDEA_BANK } from "../../data/task2Data";

export const Step6ConsequencesT2: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const causes = CAUSES_IDEA_BANK;

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
          style={{ marginBottom: "8px", background: "#fee2e2", color: "#991b1b" }}
        >
          Step 06 / 09 • Student Idea Bank: Main Causes
        </span>
        <h2 className="stage-title">
          Main Causes — Student Idea Bank
        </h2>
        <p className="stage-subtitle">
          These are the arguments students can understand and develop with relatable, real-world examples.
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
            All 5 Causes
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
              Cause {idx + 1}
            </button>
          ))}
        </div>

        <span style={{ fontSize: "0.74rem", color: "#64748b", fontWeight: 700 }}>
          Structured: Main Argument + Concrete Relatable Example
        </span>
      </div>

      {/* ALL 5 STUDENT CAUSES IN A CLEAN HIGH-READABILITY SMART BOARD GRID */}
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
                    background: "#fee2e2",
                    color: "#991b1b",
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
                  title="Copy this cause idea"
                >
                  {isCopied ? <Check size={12} color="#166534" /> : <Copy size={12} />}
                  <span>{isCopied ? "Copied" : "Copy"}</span>
                </button>
              </div>

              {/* Title */}
              <h4 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 800, color: "#0f172a", lineHeight: 1.35 }}>
                {cause.title}
              </h4>

              {/* Main Argument / Relatable Explanation */}
              <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "10px", padding: "12px 14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "4px" }}>
                  <Lightbulb size={13} color="#dc2626" />
                  <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "#991b1b", textTransform: "uppercase" }}>
                    Main Argument &amp; Explanation
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: "0.88rem", fontWeight: 650, color: "#0f172a", lineHeight: 1.5 }}>
                  {cause.mainIdea}
                </p>
              </div>

              {/* Relatable Concrete Example */}
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
                    Relatable Student Example
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
    </div>
  );
};
