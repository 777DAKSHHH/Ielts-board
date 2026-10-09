import React from "react";
import { CheckCircle2, TrendingUp, ArrowRight, Activity, ShieldCheck } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step5Bifurcation: React.FC = () => {
  const harble = TASK1_DATA.graphData.countries.find((c) => c.id === "harble");
  const fairfield = TASK1_DATA.graphData.countries.find((c) => c.id === "fairfield");
  const body1Model = TASK1_DATA.modelReport?.paragraphs.find((p) => p.id === "body1");

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 05 / 08 • Body 1 — The Surging Risers (Harble &amp; Fairfield)
        </span>
        <h2 className="stage-title">Documenting Rapid Momentum &amp; Top-Ranking Performers</h2>
        <p className="stage-subtitle">
          Analyze the two secondary schools that achieved dominant positions by 2000: Harble Secondary's meteoric surge from last to first place (30% to 80%), and Fairfield Girls' steady climb to second place (65% to 79%).
        </p>
      </div>

      <div className="stage-grid-2col">
        {/* Left Column: Data Progression Cards for Harble and Fairfield */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* Harble Secondary Card */}
          {harble && (
            <div
              style={{
                background: "var(--slate-50)",
                border: "1.5px solid rgba(5, 150, 105, 0.3)",
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
                      background: harble.color
                    }}
                  />
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                    {harble.name}
                  </h4>
                  <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#d1fae5", color: "#065f46" }}>
                    Top Climber (+50% pts)
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "0.76rem",
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: "6px",
                    background: "rgba(5, 150, 105, 0.12)",
                    color: harble.color
                  }}
                >
                  {harble.netChange}
                </span>
              </div>

              {/* Data points row (6 years) */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "5px" }}>
                {harble.dataPoints.map((pt) => (
                  <div
                    key={pt.year}
                    style={{
                      background: pt.year === 2000 ? "rgba(5, 150, 105, 0.12)" : "#ffffff",
                      borderRadius: "10px",
                      padding: "8px 4px",
                      textAlign: "center",
                      border: pt.year === 2000 ? "1.5px solid #059669" : "1px solid var(--border-subtle)"
                    }}
                  >
                    <div style={{ fontSize: "0.7rem", color: pt.year === 2000 ? "#059669" : "var(--slate-500)", fontWeight: 700 }}>
                      {pt.year} {pt.year === 2000 ? "★" : ""}
                    </div>
                    <div style={{ fontSize: "0.92rem", fontWeight: 800, color: harble.color, marginTop: "2px" }}>
                      {pt.value}%
                    </div>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
                <strong>Key Trend:</strong> {harble.trendSummary}
              </p>
            </div>
          )}

          {/* Fairfield Girls Card */}
          {fairfield && (
            <div
              style={{
                background: "var(--slate-50)",
                border: "1.5px solid rgba(79, 70, 229, 0.3)",
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
                      background: fairfield.color
                    }}
                  />
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                    {fairfield.name}
                  </h4>
                  <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#ede9fe", color: "#5b21b6" }}>
                    2nd Place (+14% pts)
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "0.76rem",
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: "6px",
                    background: "rgba(79, 70, 229, 0.12)",
                    color: fairfield.color
                  }}
                >
                  {fairfield.netChange}
                </span>
              </div>

              {/* Data points row (6 years) */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "5px" }}>
                {fairfield.dataPoints.map((pt) => (
                  <div
                    key={pt.year}
                    style={{
                      background: pt.year === 1997 ? "rgba(245, 158, 11, 0.1)" : "#ffffff",
                      borderRadius: "10px",
                      padding: "8px 4px",
                      textAlign: "center",
                      border: pt.year === 1997 ? "1.5px solid #d97706" : "1px solid var(--border-subtle)"
                    }}
                  >
                    <div style={{ fontSize: "0.7rem", color: pt.year === 1997 ? "#b45309" : "var(--slate-500)", fontWeight: 700 }}>
                      {pt.year} {pt.year === 1997 ? "Tie" : ""}
                    </div>
                    <div style={{ fontSize: "0.92rem", fontWeight: 800, color: fairfield.color, marginTop: "2px" }}>
                      {pt.value}%
                    </div>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
                <strong>Key Trend:</strong> {fairfield.trendSummary}
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
                <TrendingUp size={20} color="#059669" />
                <h4 style={{ fontSize: "1.1rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  Band 9 Model Body Paragraph 1
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.75rem", fontWeight: 700 }}>
                {body1Model?.wordCount ?? 60} words
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
              “{body1Model?.text ?? "Turning first to the two highest-performing institutions by 2000, Harble Secondary recorded a meteoric ascent. Starting with the lowest figure of 30% in 1995, it rose steadily to 40% in 1997 and 60% in 1999, before jumping by 20 percentage points to finish at a peak of 80%—nearly tripling its baseline. Fairfield Girls also followed an upward trajectory, climbing from 65% in 1995 to equalize with Greystone at 75% in 1997. Despite a transient dip to 70% in 1999, Fairfield rebounded to conclude at 79%, securing second position."}”
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
                <span><strong>Logical Grouping:</strong> Grouping Harble and Fairfield together provides immediate coherence because both emerged as the undisputed top performers in 2000 (80% and 79%).</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.86rem", color: "var(--slate-700)" }}>
                <Activity size={16} color="#059669" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span><strong>Surge &amp; Acceleration Language:</strong> Accurately document Harble's accelerating increments (+5%, +5%, +10%, +10%, +20%) culminating in nearly tripling its initial proportion.</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.86rem", color: "var(--slate-700)" }}>
                <ArrowRight size={16} color="#4f46e5" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span><strong>Relational Inflection Points:</strong> Note Fairfield tying Greystone at 75% in 1997, taking the sole lead in 1998, and rebounding from a 1999 dip to conclude just 1% behind Harble.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
