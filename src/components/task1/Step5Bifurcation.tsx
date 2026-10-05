import React from "react";
import { CheckCircle2, TrendingDown, ArrowRight, Activity, ShieldCheck } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step5Bifurcation: React.FC = () => {
  const uk = TASK1_DATA.graphData.countries.find((c) => c.id === "uk");
  const sweden = TASK1_DATA.graphData.countries.find((c) => c.id === "sweden");

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 05 / 08 • Body 1 — The Net Decreasers (UK &amp; Sweden)
        </span>
        <h2 className="stage-title">Documenting High Baselines &amp; Long-Term Downward Trajectories</h2>
        <p className="stage-subtitle">
          Analyze the two nations with net declines: the United Kingdom's uninterrupted dominance (from ~10.8 down to 8.7 tonnes), and Sweden's volatile trajectory (surging to ~10.2 tonnes in 1977 before collapsing by nearly 50% to 5.4 tonnes).
        </p>
      </div>

      <div className="stage-grid-2col">
        {/* Left Column: Data Progression Cards for UK and Sweden */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* UK Card */}
          {uk && (
            <div
              style={{
                background: "var(--slate-50)",
                border: "1.5px solid rgba(147, 51, 234, 0.25)",
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
                      background: uk.color
                    }}
                  />
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                    {uk.name}
                  </h4>
                  <span className="apple-badge neutral" style={{ fontSize: "0.72rem", fontFamily: "monospace" }}>
                    - • - • (dash-dot)
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "0.76rem",
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: "6px",
                    background: "rgba(147, 51, 234, 0.12)",
                    color: uk.color
                  }}
                >
                  {uk.netChange}
                </span>
              </div>

              {/* Data points row */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "6px" }}>
                {uk.dataPoints.map((pt) => (
                  <div
                    key={pt.year}
                    style={{
                      background: "#ffffff",
                      borderRadius: "10px",
                      padding: "8px 6px",
                      textAlign: "center",
                      border: "1px solid var(--border-subtle)"
                    }}
                  >
                    <div style={{ fontSize: "0.72rem", color: "var(--slate-500)", fontWeight: 600 }}>{pt.year}</div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 800, color: uk.color, marginTop: "2px" }}>
                      {pt.value}t
                    </div>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
                <strong>Key Trend:</strong> {uk.trendSummary}
              </p>
            </div>
          )}

          {/* Sweden Card */}
          {sweden && (
            <div
              style={{
                background: "var(--slate-50)",
                border: "1.5px solid rgba(2, 132, 199, 0.25)",
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
                      background: sweden.color
                    }}
                  />
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                    {sweden.name}
                  </h4>
                  <span className="apple-badge neutral" style={{ fontSize: "0.72rem", fontFamily: "monospace" }}>
                    - - - (dashed)
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "0.76rem",
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: "6px",
                    background: "rgba(2, 132, 199, 0.12)",
                    color: sweden.color
                  }}
                >
                  Peak: 10.2t (1977) • End: 5.4t
                </span>
              </div>

              {/* Data points row */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "6px" }}>
                {sweden.dataPoints.map((pt) => (
                  <div
                    key={pt.year}
                    style={{
                      background: pt.year === 1977 ? "rgba(2, 132, 199, 0.08)" : "#ffffff",
                      borderRadius: "10px",
                      padding: "8px 6px",
                      textAlign: "center",
                      border: pt.year === 1977 ? "1.5px solid var(--apple-blue)" : "1px solid var(--border-subtle)"
                    }}
                  >
                    <div style={{ fontSize: "0.72rem", color: pt.year === 1977 ? "var(--apple-blue)" : "var(--slate-500)", fontWeight: 700 }}>
                      {pt.year} {pt.year === 1977 ? "★" : ""}
                    </div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 800, color: sweden.color, marginTop: "2px" }}>
                      {pt.value}t
                    </div>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
                <strong>Key Trend:</strong> {sweden.trendSummary}
              </p>
            </div>
          )}
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
                <TrendingDown size={20} color="#9333ea" />
                <h4 style={{ fontSize: "1.1rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  Band 9 Model Body Paragraph 1
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.75rem", fontWeight: 700 }}>
                74 words
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
              “Regarding the nations with decreasing emissions, the United Kingdom consistently generated the highest levels throughout the entire period. Starting at approximately 10.8 metric tonnes per person in 1967, British emissions remained nearly unchanged in 1977 before undergoing a steady, uninterrupted decline to 10.0 tonnes in 1987, 9.6 tonnes in 1997, and finally 8.7 tonnes by 2007. Sweden began as the second-highest emitter at 8.6 metric tonnes and climbed sharply to peak at approximately 10.2 tonnes in 1977, briefly challenging the UK. Thereafter, Swedish emissions plummeted precipitously over the remaining thirty years, falling to 7.0 tonnes in 1987 and continuing downward to 5.4 tonnes by 2007—nearly half its peak value.”
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
                Band 9 Body 1 Analytical Techniques
              </strong>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.86rem", color: "var(--slate-700)" }}>
                <ShieldCheck size={16} color="var(--apple-blue)" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span><strong>Logical Grouping:</strong> Grouping UK and Sweden together provides immediate coherence because both started high (&gt;8.5 tonnes) and finished lower.</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.86rem", color: "var(--slate-700)" }}>
                <Activity size={16} color="#9333ea" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span><strong>Behavioral Contrast:</strong> Contrast the UK's smooth, gradual descent with Sweden's acute volatility (steep rise to apex followed by long-term collapse).</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.86rem", color: "var(--slate-700)" }}>
                <ArrowRight size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span><strong>Mathematical Proportionality:</strong> Noting that Sweden finished at “nearly half its peak value” displays superior mathematical analytical capability.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
