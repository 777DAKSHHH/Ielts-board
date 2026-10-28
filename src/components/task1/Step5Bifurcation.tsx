import React, { useState } from "react";
import { CheckCircle2, Split, Users, UserCheck, ShieldCheck, Sparkles, TrendingUp, Layers, PieChart as PieIcon } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step5Bifurcation: React.FC = () => {
  const [selectedStrategy, setSelectedStrategy] = useState<"categorical" | "chronological">("categorical");

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 05 / 08 • Structural Grouping Strategy
        </span>
        <h2 className="stage-title">Bifurcation Tactics: How to Group UK School Spending Data</h2>
        <p className="stage-subtitle">
          With five expense categories surveyed across three separate milestone years (1981, 1991, 2001), selecting the optimal logical grouping structure ensures Band 9 in Coherence &amp; Cohesion (CC) and Task Achievement (TA).
        </p>
      </div>

      {/* Strategy Switcher */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "8px" }}>
        <button
          onClick={() => setSelectedStrategy("categorical")}
          style={{
            flex: 1,
            padding: "14px 18px",
            borderRadius: "14px",
            border: selectedStrategy === "categorical" ? "2px solid #2563eb" : "1.5px solid var(--border-subtle)",
            background: selectedStrategy === "categorical" ? "#eff6ff" : "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            boxShadow: selectedStrategy === "categorical" ? "var(--shadow-sm)" : "none"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Users size={20} color={selectedStrategy === "categorical" ? "#2563eb" : "var(--slate-600)"} />
            <div style={{ textAlign: "left" }}>
              <strong style={{ fontSize: "0.95rem", color: "var(--slate-900)", display: "block" }}>
                Strategy A: Thematic Categorical Bifurcation (Recommended)
              </strong>
              <span style={{ fontSize: "0.78rem", color: "var(--slate-600)" }}>
                Body 1: Staff Remuneration (Teachers 40%–50% &amp; Other Staff 28%–15%) • Body 2: Non-Staff Outlay (Furniture, Books, Insurance)
              </span>
            </div>
          </div>
          <span className="apple-badge neutral" style={{ background: "#dbeafe", color: "#1e40af", fontWeight: 800 }}>
            Band 9 Standard
          </span>
        </button>

        <button
          onClick={() => setSelectedStrategy("chronological")}
          style={{
            flex: 1,
            padding: "14px 18px",
            borderRadius: "14px",
            border: selectedStrategy === "chronological" ? "2px solid #059669" : "1.5px solid var(--border-subtle)",
            background: selectedStrategy === "chronological" ? "#ecfdf5" : "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            boxShadow: selectedStrategy === "chronological" ? "var(--shadow-sm)" : "none"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Layers size={20} color={selectedStrategy === "chronological" ? "#059669" : "var(--slate-600)"} />
            <div style={{ textAlign: "left" }}>
              <strong style={{ fontSize: "0.95rem", color: "var(--slate-900)", display: "block" }}>
                Strategy B: Chronological Phase Bifurcation
              </strong>
              <span style={{ fontSize: "0.78rem", color: "var(--slate-600)" }}>
                Body 1: 1981 Baseline &amp; 1991 Peaks/Slumps • Body 2: 2001 Resurgence &amp; Turn-of-Century Allocations
              </span>
            </div>
          </div>
          <span className="apple-badge neutral" style={{ fontWeight: 700 }}>
            Alternative
          </span>
        </button>
      </div>

      {/* Selected Strategy Deep Dive Grid */}
      {selectedStrategy === "categorical" ? (
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
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#2563eb" }} />
                <h4 style={{ fontSize: "1.08rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  Body 1: Staff Remuneration (Teachers &amp; Other Workers)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ background: "#eff6ff", color: "#1e40af", fontWeight: 750 }}>
                88 Words
              </span>
            </div>

            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.5 }}>
              Analyzes employee wage expenditures: Teachers' salaries as the principal cost (40% in 1981, 50% peak in 1991, 45% in 2001) alongside other staff salaries in an unbroken descent (28% → 22% → 15%), combining to absorb 60%–72% of annual funds.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>1. Teachers' Salaries Baseline (1981):</strong> Commenced as the premier expense at 40%, comfortably ahead of all other categories.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "#2563eb" }}>2. The 50% Milestone Peak (1991):</strong> Expanded by 10 percentage points to absorb precisely half of the school's total budget.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>3. Slight Moderation (2001):</strong> Eased slightly to 45%, yet remained more than double any other individual cost.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "#7c3aed" }}>4. Other Workers' Continuous Halving:</strong> Unbroken decline from 28% to 22% and then to 15%, dropping 13 percentage points overall.
              </div>
            </div>

            <div style={{ background: "#f8fafc", borderRadius: "10px", padding: "10px 12px", fontSize: "0.8rem", color: "var(--slate-700)", borderLeft: "3px solid #2563eb" }}>
              <strong>Band 9 Takeaway:</strong> Grouping staff remuneration together demonstrates high-level conceptual synthesis (68% → 72% → 60%) that examiners prioritize over mechanical slice-by-slice listing.
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
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#059669" }} />
                <h4 style={{ fontSize: "1.08rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  Body 2: Non-Staff Outlay (Furniture, Books &amp; Insurance)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ background: "#ecfdf5", color: "#065f46", fontWeight: 750 }}>
                97 Words
              </span>
            </div>

            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.5 }}>
              Covers operational, capital, and resource expenditure: Furniture and equipment volatility (15% → 5% → 23%), resources e.g. books rise and fall (15% → 20% → 9%), and insurance quadrupling (2% → 3% → 8%).
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "#059669" }}>1. Furniture Plunge &amp; Resurgence:</strong> Collapsed from 15% to 5% in 1991, before surging to 23% in 2001 to become the 2nd most expensive item.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "#d97706" }}>2. Educational Resources (Books):</strong> Tied with furniture at 15% in 1981, expanded to 20% in 1991, then dropped to an all-time low of 9%.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "#dc2626" }}>3. Insurance Fourfold Expansion:</strong> Remained lowest in all years (2% → 3% → 8%), but experienced the largest relative multiplier (quadrupled).
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>4. Rank Re-ordering in 2001:</strong> In 2001, furniture overtook both other workers and books, reshaping the secondary budget hierarchy.
              </div>
            </div>

            <div style={{ background: "#f8fafc", borderRadius: "10px", padding: "10px 12px", fontSize: "0.8rem", color: "var(--slate-700)", borderLeft: "3px solid #059669" }}>
              <strong>Teaching Note:</strong> Contrasting the volatile surge of furniture against the steep decline of books provides strong comparative cohesion, satisfying Coherence &amp; Cohesion Band 9 criteria.
            </div>
          </div>
        </div>
      ) : (
        /* Chronological Bifurcation Strategy */
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
                Body 1: Baseline 1981 &amp; Mid-Period Peaks/Slumps (1991)
              </h4>
            </div>
            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.5 }}>
              Describes the initial distribution and the first decade shifts:
            </p>
            <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "0.84rem", color: "var(--slate-700)", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li>1981: Teachers (40%) and other workers (28%) took 68%; furniture and books stood equal at 15%; insurance accounted for 2%.</li>
              <li>1991: Teachers rose to peak at 50%; resources rose to 20%; furniture collapsed to 5%; other staff fell to 22%; insurance edged to 3%.</li>
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
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#059669" }} />
              <h4 style={{ fontSize: "1.08rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                Body 2: Turn-of-the-Century Shifts (2001 Final Year)
              </h4>
            </div>
            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.5 }}>
              Analyzes the final configuration and 20-year net changes:
            </p>
            <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "0.84rem", color: "var(--slate-700)", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li>2001: Teachers moderated to 45% (retaining 1st place).</li>
              <li>Furniture staged an 18-point resurgence to 23%, overtaking other staff (15%).</li>
              <li>Resources dropped to single digits (9%), while insurance reached an all-time high of 8% (quadrupled).</li>
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
          <strong>Examiner Assessment Rationale:</strong> Strategy A (Thematic Categorical Bifurcation: Staff Remuneration vs Non-Staff Costs) is strongly recommended for this visual. Grouping the two employee salary categories together in Body 1 allows the candidate to report the combined 60%–72% staffing share and track wage trajectories across time, leaving Body 2 to analyze equipment, educational resources, and insurance without confusing the reader with date-switching.
        </div>
      </div>
    </div>
  );
};
