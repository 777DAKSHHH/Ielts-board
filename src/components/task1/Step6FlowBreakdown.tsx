import React from "react";
import { CheckCircle2, TrendingUp, GitMerge, Milestone, Zap } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step6FlowBreakdown: React.FC = () => {
  const italy = TASK1_DATA.graphData.countries.find((c) => c.id === "italy");
  const portugal = TASK1_DATA.graphData.countries.find((c) => c.id === "portugal");
  const intersections = TASK1_DATA.graphData.intersections;

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 06 / 08 • Body 2 — The Net Increasers (Italy &amp; Portugal)
        </span>
        <h2 className="stage-title">Tracking Sustained Growth, Ranking Overtake &amp; Terminal Convergence</h2>
        <p className="stage-subtitle">
          Examine the two nations with upward trajectories: Italy's steady rise from 4.2 to 7.6 tonnes (overtaking Sweden in 1987 and plateauing), and Portugal's unprecedented 4-fold surge from 1.2 to 5.4 tonnes (converging with Sweden in 2007).
        </p>
      </div>

      <div className="stage-grid-2col">
        {/* Left Column: Data Progression Cards for Italy and Portugal */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* Italy Card */}
          {italy && (
            <div
              style={{
                background: "var(--slate-50)",
                border: "1.5px solid rgba(185, 28, 28, 0.25)",
                borderRadius: "18px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "12px"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: italy.color
                    }}
                  />
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                    {italy.name}
                  </h4>
                  <span className="apple-badge neutral" style={{ fontSize: "0.72rem", fontFamily: "monospace" }}>
                    ——— (solid line)
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "0.76rem",
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: "6px",
                    background: "rgba(185, 28, 28, 0.12)",
                    color: italy.color
                  }}
                >
                  {italy.netChange}
                </span>
              </div>

              {/* Data points row */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "6px" }}>
                {italy.dataPoints.map((pt) => (
                  <div
                    key={pt.year}
                    style={{
                      background: pt.year >= 1997 ? "rgba(185, 28, 28, 0.07)" : "#ffffff",
                      borderRadius: "10px",
                      padding: "8px 6px",
                      textAlign: "center",
                      border: pt.year >= 1997 ? "1.5px solid rgba(185, 28, 28, 0.4)" : "1px solid var(--border-subtle)"
                    }}
                  >
                    <div style={{ fontSize: "0.72rem", color: pt.year >= 1997 ? italy.color : "var(--slate-500)", fontWeight: 700 }}>
                      {pt.year} {pt.year >= 1997 ? "⏸" : ""}
                    </div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 800, color: italy.color, marginTop: "2px" }}>
                      {pt.value}t
                    </div>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
                <strong>Key Trend:</strong> {italy.trendSummary}
              </p>
            </div>
          )}

          {/* Portugal Card */}
          {portugal && (
            <div
              style={{
                background: "var(--slate-50)",
                border: "1.5px solid rgba(30, 41, 59, 0.25)",
                borderRadius: "18px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "12px"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: portugal.color
                    }}
                  />
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                    {portugal.name}
                  </h4>
                  <span className="apple-badge neutral" style={{ fontSize: "0.72rem", fontFamily: "monospace" }}>
                    •••• (dotted) [Chart: Portgual]
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "0.76rem",
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: "6px",
                    background: "rgba(30, 41, 59, 0.12)",
                    color: portugal.color
                  }}
                >
                  {portugal.netChange}
                </span>
              </div>

              {/* Data points row */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "6px" }}>
                {portugal.dataPoints.map((pt) => (
                  <div
                    key={pt.year}
                    style={{
                      background: pt.year === 2007 ? "rgba(16, 185, 129, 0.1)" : "#ffffff",
                      borderRadius: "10px",
                      padding: "8px 6px",
                      textAlign: "center",
                      border: pt.year === 2007 ? "1.5px solid #10b981" : "1px solid var(--border-subtle)"
                    }}
                  >
                    <div style={{ fontSize: "0.72rem", color: pt.year === 2007 ? "#059669" : "var(--slate-500)", fontWeight: 700 }}>
                      {pt.year} {pt.year === 2007 ? "🤝" : ""}
                    </div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 800, color: portugal.color, marginTop: "2px" }}>
                      {pt.value}t
                    </div>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
                <strong>Key Trend:</strong> {portugal.trendSummary}
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
                Two Critical Graphical Intersections to Mention
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
                <TrendingUp size={20} color="#b91c1c" />
                <h4 style={{ fontSize: "1.1rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  Band 9 Model Body Paragraph 2
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.75rem", fontWeight: 700 }}>
                71 words
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
              “Turning to the nations with upward trends, Italy initially produced 4.2 metric tonnes per capita in 1967. Italian emissions expanded steadily over the following three decades to 6.2 tonnes in 1977 and 6.7 tonnes in 1987, at which point Italy overtook Sweden. After reaching 7.6 metric tonnes in 1997, Italy's emissions plateaued identically through 2007. Meanwhile, Portugal commenced the period as the lowest contributor by a substantial margin, generating a modest 1.2 metric tonnes per person. Over the subsequent four decades, Portuguese emissions underwent a dramatic, more than four-fold surge, ascending steadily to 2.2 tonnes in 1977, 3.6 tonnes in 1987, and 5.3 tonnes in 1997, before finishing at 5.4 metric tonnes in 2007, precisely converging with Sweden.”
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
                <Milestone size={16} color="#b91c1c" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span><strong>Overtaking Clause:</strong> Connect Italy's 1987 figure directly to Sweden using an adverbial relative clause (<em>“at which point Italy overtook Sweden”</em>).</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.86rem", color: "var(--slate-700)" }}>
                <Zap size={16} color="#d97706" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span><strong>Proportional Multiplier:</strong> Emphasize Portugal's “more than four-fold surge” (1.2t to 5.4t) to showcase Band 9 precision beyond just raw addition.</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.86rem", color: "var(--slate-700)" }}>
                <GitMerge size={16} color="var(--apple-blue)" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span><strong>Convergence Synthesis:</strong> Conclude by linking Portugal's finish directly with Sweden's terminal value (<em>“precisely converging with Sweden”</em>).</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
