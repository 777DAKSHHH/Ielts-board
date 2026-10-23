import React from "react";
import { CheckCircle2, TrendingUp, Users, ShieldCheck, Sparkles, Award } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step6FlowBreakdown: React.FC = () => {
  const body1Model = TASK1_DATA.modelReport.paragraphs.find((p) => p.id === "body1");

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 06 / 08 • Body 1 — Female Trajectory &amp; Mid-Life Dominance
        </span>
        <h2 className="stage-title">Deconstructing Body Paragraph 1: Female Physical Activity Trajectory</h2>
        <p className="stage-subtitle">
          Examine the sentence-by-sentence architectural breakdown for Australian women: initial baseline (47.7%), steady multi-decade rise through 48.9% and 52.5%, chart peak of 53.3% in middle age, sustained 53.0% plateau, and the senior decline to 47.1%.
        </p>
      </div>

      <div className="stage-grid-2col">
        {/* Left Column: Feature Breakdown for Female Trajectory */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* Feature 1: Youth Baseline */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "18px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#64748b" }} />
                <h4 style={{ fontSize: "1.05rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  1. Youth Baseline (15 to 24)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.72rem" }}>
                Starting Level: 47.7%
              </span>
            </div>

            <div style={{ background: "#ffffff", borderRadius: "10px", padding: "12px", border: "1px solid var(--border-subtle)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--slate-700)" }}>
                  Female Youngest Cohort
                </span>
                <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "#334155" }}>
                  47.7%
                </span>
              </div>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Analytical Role:</strong> Establishes the female starting point. Note that although this was women's second-lowest figure, they were only behind men in this single age group.
            </p>
          </div>

          {/* Feature 2: Steady Multi-Decade Ascent */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid rgba(37, 99, 235, 0.3)",
              borderRadius: "18px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#2563eb" }} />
                <h4 style={{ fontSize: "1.05rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  2. Progressive Mid-Life Rise (25–34 &amp; 35–44)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#eff6ff", color: "#1e40af" }}>
                Climb: +4.8%
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              <div style={{ background: "#ffffff", borderRadius: "10px", padding: "10px", border: "1px solid var(--border-subtle)", textAlign: "center" }}>
                <div style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 700 }}>25 TO 34 COHORT</div>
                <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a" }}>48.9%</div>
                <div style={{ fontSize: "0.68rem", color: "var(--slate-500)" }}>Women take lead</div>
              </div>
              <div style={{ background: "#ffffff", borderRadius: "10px", padding: "10px", border: "1px solid var(--border-subtle)", textAlign: "center" }}>
                <div style={{ fontSize: "0.75rem", color: "#2563eb", fontWeight: 700 }}>35 TO 44 COHORT</div>
                <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a" }}>52.5%</div>
                <div style={{ fontSize: "0.68rem", color: "var(--slate-500)" }}>Crosses 50% threshold</div>
              </div>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Key Phrasing:</strong> <em>“...before progressing steadily through the 25–34 (48.9%) and 35–44 (52.5%) age brackets...”</em>
            </p>
          </div>

          {/* Feature 3: Overall Peak & Plateau */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid rgba(22, 163, 74, 0.3)",
              borderRadius: "18px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#16a34a" }} />
                <h4 style={{ fontSize: "1.05rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  3. Chart Peak &amp; Plateau (45–54 &amp; 55–64)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#f0fdf4", color: "#166534" }}>
                Peak: 53.3%
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              <div style={{ background: "#ffffff", borderRadius: "10px", padding: "10px", border: "1px solid var(--border-subtle)", textAlign: "center" }}>
                <div style={{ fontSize: "0.75rem", color: "#16a34a", fontWeight: 700 }}>45 TO 54 COHORT</div>
                <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#16a34a" }}>53.3%</div>
                <div style={{ fontSize: "0.68rem", color: "var(--slate-500)" }}>Overall Chart Peak</div>
              </div>
              <div style={{ background: "#ffffff", borderRadius: "10px", padding: "10px", border: "1px solid var(--border-subtle)", textAlign: "center" }}>
                <div style={{ fontSize: "0.75rem", color: "#475569", fontWeight: 700 }}>55 TO 64 COHORT</div>
                <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a" }}>53.0%</div>
                <div style={{ fontSize: "0.68rem", color: "var(--slate-500)" }}>Sustained plateau</div>
              </div>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Examiner Precision:</strong> Grouping 45–54 and 55–64 as an <em>“elevated plateau sustained above 53%”</em> showcases sophisticated lexical synthesis.
            </p>
          </div>

          {/* Feature 4: Senior Decline */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "18px",
              padding: "16px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <div>
              <h4 style={{ fontSize: "0.95rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                4. Senior Cohort (65 and over): Drop to 47.1%
              </h4>
              <p style={{ fontSize: "0.8rem", color: "var(--slate-600)", margin: "4px 0 0 0" }}>
                Recedes by 5.9 points to reach its lowest point across all female cohorts.
              </p>
            </div>
            <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "#475569" }}>
              47.1%
            </span>
          </div>
        </div>

        {/* Right Column: Complete Body 1 Text & Analytical Formula */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* Model Paragraph Card */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "20px",
              padding: "22px",
              boxShadow: "var(--shadow-sm)",
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Users size={20} color="var(--apple-blue)" />
                <h4 style={{ fontSize: "1.1rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  Body Paragraph 1 Model ({body1Model?.wordCount} words)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.75rem", fontWeight: 750 }}>
                Female Focus
              </span>
            </div>

            <div
              style={{
                background: "var(--slate-50)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "14px",
                padding: "16px 18px",
                fontSize: "0.98rem",
                color: "var(--slate-800)",
                lineHeight: 1.7,
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.03)"
              }}
            >
              “{body1Model?.text}”
            </div>

            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {body1Model?.badges.map((b) => (
                <span key={b} className="apple-badge neutral" style={{ fontSize: "0.72rem" }}>
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* 4-Step Sentence Flow Blueprint */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "18px",
              padding: "20px",
              boxShadow: "var(--shadow-sm)",
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <ShieldCheck size={18} color="#16a34a" />
              <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                Band 9 Sentence Sequencing Blueprint
              </h4>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.85rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>1</span>
                <span><strong>Starting Baseline:</strong> <em>“Focusing first on females, regular exercise commenced at 47.7% among those aged 15 to 24...”</em></span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>2</span>
                <span><strong>Steady Progression:</strong> <em>“...before progressing steadily through the 25–34 (48.9%) and 35–44 (52.5%) age brackets.”</em></span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>3</span>
                <span><strong>Chart Peak &amp; Plateau:</strong> <em>“Physical activity reached its peak among women aged 45 to 54 at 53.3%... sustained in the 55-to-64 demographic at precisely 53.0%.”</em></span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>4</span>
                <span><strong>Senior Tapering:</strong> <em>“However, female involvement experienced a noticeable decline among seniors aged 65 and over, receding to 47.1%.”</em></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
