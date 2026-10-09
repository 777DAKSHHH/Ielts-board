import React from "react";
import { CheckCircle2, TrendingDown, GitMerge, Milestone, Zap } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step6FlowBreakdown: React.FC = () => {
  const greystone = TASK1_DATA.graphData.countries.find((c) => c.id === "greystone");
  const royston = TASK1_DATA.graphData.countries.find((c) => c.id === "royston");
  const crackend = TASK1_DATA.graphData.countries.find((c) => c.id === "crackend");
  const intersections = TASK1_DATA.graphData.intersections;
  const body2Model = TASK1_DATA.modelReport?.paragraphs.find((p) => p.id === "body2");

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 06 / 08 • Body 2 — Decliner &amp; Moderates (Greystone, Royston, Crackend)
        </span>
        <h2 className="stage-title">Analyzing the Sole Decliner, Stepped Growth &amp; Baseline Stability</h2>
        <p className="stage-subtitle">
          Examine the remaining three institutions: Greystone High's continuous slide from 90% to 70%, Royston Academy's stepped climb to 60%, and Crackend Boys' remarkable stability around 60%, culminating in the 1999 triple convergence.
        </p>
      </div>

      <div className="stage-grid-2col">
        {/* Left Column: Data Progression Cards for Greystone, Royston, and Crackend */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* Greystone High Card */}
          {greystone && (
            <div
              style={{
                background: "var(--slate-50)",
                border: "1.5px solid rgba(220, 38, 38, 0.3)",
                borderRadius: "18px",
                padding: "16px 18px",
                display: "flex",
                flexDirection: "column",
                gap: "10px"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: greystone.color
                    }}
                  />
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                    {greystone.name}
                  </h4>
                  <span className="apple-badge neutral" style={{ fontSize: "0.7rem", background: "#fee2e2", color: "#991b1b" }}>
                    Sole Decliner (-20% pts)
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "0.74rem",
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: "6px",
                    background: "rgba(220, 38, 38, 0.12)",
                    color: greystone.color
                  }}
                >
                  {greystone.netChange}
                </span>
              </div>

              {/* Data points row (6 years) */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "4px" }}>
                {greystone.dataPoints.map((pt) => (
                  <div
                    key={pt.year}
                    style={{
                      background: pt.year === 1995 ? "rgba(220, 38, 38, 0.1)" : "#ffffff",
                      borderRadius: "8px",
                      padding: "6px 2px",
                      textAlign: "center",
                      border: pt.year === 1995 ? "1.5px solid #dc2626" : "1px solid var(--border-subtle)"
                    }}
                  >
                    <div style={{ fontSize: "0.68rem", color: pt.year === 1995 ? "#dc2626" : "var(--slate-500)", fontWeight: 700 }}>
                      {pt.year} {pt.year === 1995 ? "Peak" : ""}
                    </div>
                    <div style={{ fontSize: "0.88rem", fontWeight: 800, color: greystone.color, marginTop: "2px" }}>
                      {pt.value}%
                    </div>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: "0.82rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.4 }}>
                <strong>Key Trend:</strong> {greystone.trendSummary}
              </p>
            </div>
          )}

          {/* Royston Academy Card */}
          {royston && (
            <div
              style={{
                background: "var(--slate-50)",
                border: "1.5px solid rgba(217, 119, 6, 0.3)",
                borderRadius: "18px",
                padding: "16px 18px",
                display: "flex",
                flexDirection: "column",
                gap: "10px"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: royston.color
                    }}
                  />
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                    {royston.name}
                  </h4>
                  <span className="apple-badge neutral" style={{ fontSize: "0.7rem", background: "#fef3c7", color: "#92400e" }}>
                    Stepped Growth (+10% pts)
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "0.74rem",
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: "6px",
                    background: "rgba(217, 119, 6, 0.12)",
                    color: royston.color
                  }}
                >
                  {royston.netChange}
                </span>
              </div>

              {/* Data points row */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "4px" }}>
                {royston.dataPoints.map((pt) => (
                  <div
                    key={pt.year}
                    style={{
                      background: pt.year === 1999 || pt.year === 2000 ? "rgba(217, 119, 6, 0.1)" : "#ffffff",
                      borderRadius: "8px",
                      padding: "6px 2px",
                      textAlign: "center",
                      border: pt.year === 1999 ? "1.5px solid #d97706" : "1px solid var(--border-subtle)"
                    }}
                  >
                    <div style={{ fontSize: "0.68rem", color: pt.year === 1999 ? "#d97706" : "var(--slate-500)", fontWeight: 700 }}>
                      {pt.year}
                    </div>
                    <div style={{ fontSize: "0.88rem", fontWeight: 800, color: royston.color, marginTop: "2px" }}>
                      {pt.value}%
                    </div>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: "0.82rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.4 }}>
                <strong>Key Trend:</strong> {royston.trendSummary}
              </p>
            </div>
          )}

          {/* Crackend Boys Card */}
          {crackend && (
            <div
              style={{
                background: "var(--slate-50)",
                border: "1.5px solid rgba(71, 85, 105, 0.3)",
                borderRadius: "18px",
                padding: "16px 18px",
                display: "flex",
                flexDirection: "column",
                gap: "10px"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: crackend.color
                    }}
                  />
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                    {crackend.name}
                  </h4>
                  <span className="apple-badge neutral" style={{ fontSize: "0.7rem", background: "#f1f5f9", color: "#334155" }}>
                    Static Baseline (+2% pts)
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "0.74rem",
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: "6px",
                    background: "rgba(71, 85, 105, 0.12)",
                    color: crackend.color
                  }}
                >
                  {crackend.netChange}
                </span>
              </div>

              {/* Data points row */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "4px" }}>
                {crackend.dataPoints.map((pt) => (
                  <div
                    key={pt.year}
                    style={{
                      background: "#ffffff",
                      borderRadius: "8px",
                      padding: "6px 2px",
                      textAlign: "center",
                      border: "1px solid var(--border-subtle)"
                    }}
                  >
                    <div style={{ fontSize: "0.68rem", color: "var(--slate-500)", fontWeight: 700 }}>
                      {pt.year}
                    </div>
                    <div style={{ fontSize: "0.88rem", fontWeight: 800, color: crackend.color, marginTop: "2px" }}>
                      {pt.value}%
                    </div>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: "0.82rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.4 }}>
                <strong>Key Trend:</strong> {crackend.trendSummary}
              </p>
            </div>
          )}

          {/* Two Critical Intersections Box */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "16px",
              padding: "16px 18px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              boxShadow: "var(--shadow-sm)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <GitMerge size={17} color="var(--apple-blue)" />
              <strong style={{ fontSize: "0.92rem", color: "var(--slate-900)" }}>
                Two Critical Intersections to Report
              </strong>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "2px" }}>
              {intersections.map((inter) => (
                <div
                  key={inter.id}
                  style={{
                    background: "var(--slate-50)",
                    borderRadius: "12px",
                    padding: "10px 12px",
                    border: "1px solid var(--border-subtle)"
                  }}
                >
                  <div style={{ fontSize: "0.82rem", fontWeight: 750, color: "var(--slate-900)", marginBottom: "4px" }}>
                    {inter.title}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--slate-600)", lineHeight: 1.4 }}>
                    {inter.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Model Paragraph & Analytical Highlights */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* Model Paragraph */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "20px",
              padding: "22px",
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <TrendingDown size={20} color="#dc2626" />
                <h4 style={{ fontSize: "1.1rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  Band 9 Model Body Paragraph 2
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.75rem", fontWeight: 700 }}>
                {body2Model?.wordCount ?? 60} words
              </span>
            </div>

            <div
              style={{
                background: "#ffffff",
                border: "1px solid var(--border-subtle)",
                borderRadius: "14px",
                padding: "18px",
                fontSize: "0.98rem",
                color: "var(--slate-800)",
                lineHeight: 1.65,
                boxShadow: "var(--shadow-sm)"
              }}
            >
              “{body2Model?.text ?? "In contrast, Greystone High was the only school to decline, surrendering its commanding initial lead of 90% as it fell consecutively each year to end at 70%. Meanwhile, Royston Academy progressed in a stepped manner from 50% to plateau at 54% in 1997–1998, before leveling off at 60% from 1999 onwards. Crackend Boys displayed remarkable stability, fluctuating narrowly between 59% and 62% across the entire timeframe. Notably, in 1999, Royston, Harble, and Crackend all converged at exactly 60%."}”
            </div>
          </div>

          {/* Key Analytical Takeaways */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "18px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              boxShadow: "var(--shadow-sm)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <CheckCircle2 size={18} color="#16a34a" />
              <strong style={{ fontSize: "0.95rem", color: "var(--slate-900)" }}>
                Band 9 Body 2 Analytical Techniques
              </strong>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.86rem", color: "var(--slate-700)" }}>
                <Milestone size={16} color="#dc2626" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span><strong>The Sole Decliner Anchor:</strong> Clearly emphasize that Greystone High was the only school to experience a continuous downward trend, surrendering its initial 25-point lead.</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.86rem", color: "var(--slate-700)" }}>
                <Zap size={16} color="#d97706" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span><strong>Stepped Growth vs. Stability:</strong> Highlight Royston's stepped plateaus (54% in 1997–98, 60% in 1999–2000) alongside Crackend's narrow 3% oscillation band.</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.86rem", color: "var(--slate-700)" }}>
                <GitMerge size={16} color="#7c3aed" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span><strong>1999 Triple Convergence:</strong> Explicitly synthesize the 1999 intersection where Royston, Harble, and Crackend all aligned at precisely 60%.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
