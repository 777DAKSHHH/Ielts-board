import React, { useState } from "react";
import { CheckCircle2, Split, Users, UserCheck, ShieldCheck, Sparkles, TrendingUp, Layers } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step5Bifurcation: React.FC = () => {
  const [selectedStrategy, setSelectedStrategy] = useState<"gender" | "cohort">("gender");

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 05 / 08 • Structural Grouping Strategy
        </span>
        <h2 className="stage-title">Bifurcation Tactics: How to Group Australian Physical Activity Data</h2>
        <p className="stage-subtitle">
          With two genders surveyed across six distinct age brackets, selecting the optimal logical grouping structure ensures Band 9 in Coherence &amp; Cohesion (CC) and Task Achievement (TA).
        </p>
      </div>

      {/* Strategy Switcher */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "8px" }}>
        <button
          onClick={() => setSelectedStrategy("gender")}
          style={{
            flex: 1,
            padding: "14px 18px",
            borderRadius: "14px",
            border: selectedStrategy === "gender" ? "2px solid #0f172a" : "1.5px solid var(--border-subtle)",
            background: selectedStrategy === "gender" ? "#f8fafc" : "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            boxShadow: selectedStrategy === "gender" ? "var(--shadow-sm)" : "none"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Users size={20} color={selectedStrategy === "gender" ? "#0f172a" : "var(--slate-600)"} />
            <div style={{ textAlign: "left" }}>
              <strong style={{ fontSize: "0.95rem", color: "var(--slate-900)", display: "block" }}>
                Strategy A: Gender-Based Bifurcation (Recommended)
              </strong>
              <span style={{ fontSize: "0.78rem", color: "var(--slate-600)" }}>
                Body 1: Female Trajectory (47.7% → 53.3% Peak → 47.1%) • Body 2: Male U-Shape (52.8% → 39.5% Low Point → 46.7%)
              </span>
            </div>
          </div>
          <span className="apple-badge neutral" style={{ background: "#dbeafe", color: "#1e40af", fontWeight: 800 }}>
            Band 9 Standard
          </span>
        </button>

        <button
          onClick={() => setSelectedStrategy("cohort")}
          style={{
            flex: 1,
            padding: "14px 18px",
            borderRadius: "14px",
            border: selectedStrategy === "cohort" ? "2px solid #7c3aed" : "1.5px solid var(--border-subtle)",
            background: selectedStrategy === "cohort" ? "#f5f3ff" : "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            boxShadow: selectedStrategy === "cohort" ? "var(--shadow-sm)" : "none"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Layers size={20} color={selectedStrategy === "cohort" ? "#7c3aed" : "var(--slate-600)"} />
            <div style={{ textAlign: "left" }}>
              <strong style={{ fontSize: "0.95rem", color: "var(--slate-900)", display: "block" }}>
                Strategy B: Age-Cohort Phase Bifurcation
              </strong>
              <span style={{ fontSize: "0.78rem", color: "var(--slate-600)" }}>
                Body 1: Younger Demographics (15 to 44) • Body 2: Older &amp; Senior Demographics (45 to 65+)
              </span>
            </div>
          </div>
          <span className="apple-badge neutral" style={{ fontWeight: 700 }}>
            Alternative
          </span>
        </button>
      </div>

      {/* Selected Strategy Deep Dive Grid */}
      {selectedStrategy === "gender" ? (
        <div className="stage-grid-2col">
          {/* Body 1 Column */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "18px",
              padding: "22px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              boxShadow: "var(--shadow-sm)"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#64748b" }} />
                <h4 style={{ fontSize: "1.08rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  Body 1: Female Physical Activity Trajectory &amp; Mid-Life Dominance
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ background: "#f1f5f9", color: "#334155", fontWeight: 750 }}>
                74 Words
              </span>
            </div>

            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.5 }}>
              Chronicles women's exercise participation across the life course: starting at 47.7% in youth, progressing through 48.9% and 52.5%, attaining a peak of 53.3% in the 45–54 bracket, plateauing at 53.0%, and declining to 47.1% among seniors.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>1. Youth Baseline (15–24):</strong> Commences at 47.7% among young women, trailing behind young men.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>2. Steady Multi-Decade Ascent:</strong> Climbs to 48.9% among 25-to-34-year-olds and surges to 52.5% in the 35–44 bracket.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "#16a34a" }}>3. Overall Chart Peak (45–54):</strong> Touches the highest point in the chart of 53.3%, the highest single data point in the graphic.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "#2563eb" }}>4. Plateau &amp; Senior Descent:</strong> Sustains at 53.0% (55–64) before receding to 47.1% among those aged 65 and over.
              </div>
            </div>

            <div style={{ background: "#f8fafc", borderRadius: "10px", padding: "10px 12px", fontSize: "0.8rem", color: "var(--slate-700)", borderLeft: "3px solid #64748b" }}>
              <strong>Band 9 Takeaway:</strong> Highlighting female mid-life stability (&gt;52% from age 35 to 64) provides examiners with high-level data grouping rather than rote number listing.
            </div>
          </div>

          {/* Body 2 Column */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "18px",
              padding: "22px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              boxShadow: "var(--shadow-sm)"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#0f172a" }} />
                <h4 style={{ fontSize: "1.08rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  Body 2: Male U-Shaped Trend &amp; Cross-Gender Comparisons
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ background: "#0f172a", color: "#ffffff", fontWeight: 750 }}>
                89 Words
              </span>
            </div>

            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.5 }}>
              Contrasts male performance: youth peak at 52.8% (sole male lead), sharp slump to 42.2% and chart trough of 39.5% at ages 35–44 (widest 13-point divergence), followed by steady rebound to 46.7% and convergence with females (47.1%).
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "#dc2626" }}>1. Sole Male Lead (15–24):</strong> Peaked early at 52.8%, outstripping female peers (47.7%) by 5.1 percentage points.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "#d97706" }}>2. Mid-Life Drop &amp; Lowest Point:</strong> Dropped to 42.2% (25–34) and reached the lowest point of 39.5% (35–44).
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "#2563eb" }}>3. Maximum Gender Divergence:</strong> A 13.0 percentage point gap separated active women (52.5%) and men (39.5%) at mid-life.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "#16a34a" }}>4. Rebound &amp; Senior Convergence:</strong> Rebounded steadily through 43.1% and 45.1% to touch 46.7% at age 65+, virtually matching women (47.1%).
              </div>
            </div>

            <div style={{ background: "#f8fafc", borderRadius: "10px", padding: "10px 12px", fontSize: "0.8rem", color: "var(--slate-700)", borderLeft: "3px solid #0f172a" }}>
              <strong>Teaching Note:</strong> Framing the male trend as a <em>“dip-and-recovery / U-shaped trajectory”</em> directly answers examiner criteria for synthesizing complex data into clear trends.
            </div>
          </div>
        </div>
      ) : (
        /* Age Cohort Grouping Strategy */
        <div className="stage-grid-2col">
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "18px",
              padding: "22px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              boxShadow: "var(--shadow-sm)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#2563eb" }} />
              <h4 style={{ fontSize: "1.08rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                Body 1: Younger &amp; Working-Age Cohorts (15 to 44)
              </h4>
            </div>
            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.5 }}>
              Focuses on the youth male supremacy, the leadership flip in young adulthood, and the emergence of the widest gender gap:
            </p>
            <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "0.84rem", color: "var(--slate-700)", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li>15–24: Men lead at 52.8%, exceeding women (47.7%) by 5.1 points (sole male advantage).</li>
              <li>25–34: Women take the lead at 48.9%, while men drop significantly by 10.6 points to 42.2%.</li>
              <li>35–44: Women rise further to 52.5%, whereas men hit their lowest point of 39.5%, generating the widest disparity (13.0 points).</li>
            </ul>
          </div>

          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "18px",
              padding: "22px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              boxShadow: "var(--shadow-sm)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#16a34a" }} />
              <h4 style={{ fontSize: "1.08rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                Body 2: Mature &amp; Senior Cohorts (45 to 65+)
              </h4>
            </div>
            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.5 }}>
              Covers the female peak, the sustained high plateau, the male rebound, and retirement convergence:
            </p>
            <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "0.84rem", color: "var(--slate-700)", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li>45–54: Women attain their peak of 53.3%, while men begin their recovery at 43.1%.</li>
              <li>55–64: Women maintain an elevated plateau at 53.0%, while men continue climbing to 45.1%.</li>
              <li>65 and over: Both sexes converge at near parity, with women at 47.1% and men at 46.7% (a negligible 0.4% difference).</li>
            </ul>
          </div>
        </div>
      )}

      {/* Rationale Banner */}
      <div
        style={{
          background: "#f8fafc",
          border: "1.5px solid var(--border-subtle)",
          borderRadius: "16px",
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          gap: "12px"
        }}
      >
        <ShieldCheck size={22} color="#16a34a" style={{ flexShrink: 0 }} />
        <div style={{ fontSize: "0.88rem", color: "var(--slate-800)", lineHeight: 1.5 }}>
          <strong>Examiner Assessment Rationale:</strong> Strategy A (Gender-Based Bifurcation) is strongly recommended for this visual because describing each gender’s full trajectory from youth to old age allows the student to contrast women's elevated mid-life plateau against men's distinctive U-shaped curve, fulfilling Band 9 criteria for clear progression and synthesized comparison.
        </div>
      </div>
    </div>
  );
};
