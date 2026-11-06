import React, { useState } from "react";
import { CheckCircle2, Split, BarChart2, PieChart as PieIcon, Layers, Sparkles } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step5Bifurcation: React.FC = () => {
  const [selectedStrategy, setSelectedStrategy] = useState<"visual" | "thematic">("visual");

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 05 / 08 • Structural Grouping Strategy
        </span>
        <h2 className="stage-title">Bifurcation Tactics: How to Group Dual Visuals</h2>
        <p className="stage-subtitle">
          With two distinct visual inputs (Bar Chart: Hours Worked vs Pie Chart: Stress Illness), choosing the right paragraph organization prevents disjointed listing and secures Band 9 in Coherence &amp; Cohesion (CC) and Task Achievement (TA).
        </p>
      </div>

      {/* Strategy Switcher */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "8px" }}>
        <button
          onClick={() => setSelectedStrategy("visual")}
          style={{
            flex: 1,
            padding: "14px 18px",
            borderRadius: "14px",
            border: selectedStrategy === "visual" ? "2px solid #2563eb" : "1.5px solid var(--border-subtle)",
            background: selectedStrategy === "visual" ? "#eff6ff" : "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            boxShadow: selectedStrategy === "visual" ? "var(--shadow-sm)" : "none"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <BarChart2 size={20} color={selectedStrategy === "visual" ? "#2563eb" : "var(--slate-600)"} />
            <div style={{ textAlign: "left" }}>
              <strong style={{ fontSize: "0.95rem", color: "var(--slate-900)", display: "block" }}>
                Strategy A: Visual-by-Visual Bifurcation (Recommended)
              </strong>
              <span style={{ fontSize: "0.78rem", color: "var(--slate-600)" }}>
                Body 1: Bar Chart (Weekly Hours Worked) • Body 2: Pie Chart (Stress-Related Illness &amp; Contrasts)
              </span>
            </div>
          </div>
          <span className="apple-badge neutral" style={{ background: "#dbeafe", color: "#1e40af", fontWeight: 800 }}>
            Band 9 Standard
          </span>
        </button>

        <button
          onClick={() => setSelectedStrategy("thematic")}
          style={{
            flex: 1,
            padding: "14px 18px",
            borderRadius: "14px",
            border: selectedStrategy === "thematic" ? "2px solid #059669" : "1.5px solid var(--border-subtle)",
            background: selectedStrategy === "thematic" ? "#ecfdf5" : "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            boxShadow: selectedStrategy === "thematic" ? "var(--shadow-sm)" : "none"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Layers size={20} color={selectedStrategy === "thematic" ? "#059669" : "var(--slate-600)"} />
            <div style={{ textAlign: "left" }}>
              <strong style={{ fontSize: "0.95rem", color: "var(--slate-900)", display: "block" }}>
                Strategy B: Analytical Correlation Grouping (Alternative)
              </strong>
              <span style={{ fontSize: "0.78rem", color: "var(--slate-600)" }}>
                Body 1: High Workload Cohorts • Body 2: Low Hours &amp; The Lecturer Paradox
              </span>
            </div>
          </div>
          <span className="apple-badge neutral" style={{ fontWeight: 700 }}>
            Alternative
          </span>
        </button>
      </div>

      {/* Selected Strategy Deep Dive Grid */}
      {selectedStrategy === "visual" ? (
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
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#dc2626" }} />
                <h4 style={{ fontSize: "1.08rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  Body 1: Bar Chart — Weekly Hours Worked
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ background: "#fef2f2", color: "#991b1b", fontWeight: 750 }}>
                78 Words
              </span>
            </div>

            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.5 }}>
              Ranks and clusters weekly working hours from highest to lowest across all eight professions.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>1. Workweek Peak:</strong> Business men logged the longest hours by far at 70 hours per week.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>2. Upper Tier Followers:</strong> Movie producers (60 hrs) and doctors (52 hrs) formed the next highest bracket.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>3. Baseline &amp; Lower Tier:</strong> Writers (45 hrs), programmers (40-hr standard), lawyers (35 hrs), chefs (30 hrs), and lecturers at the minimum (25 hrs).
              </div>
            </div>

            <div style={{ marginTop: "auto", background: "#f8fafc", padding: "12px 14px", borderRadius: "12px", fontSize: "0.83rem", color: "#1e293b", fontStyle: "italic", borderLeft: "3px solid #dc2626" }}>
              “Regarding working hours, business men logged the longest workweek at an average of 70 hours, followed by movie producers and doctors at 60 and 52 hours respectively...”
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
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#0891b2" }} />
                <h4 style={{ fontSize: "1.08rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  Body 2: Pie Chart — Stress Illness &amp; Paradoxes
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ background: "#ecfeff", color: "#155e75", fontWeight: 750 }}>
                86 Words
              </span>
            </div>

            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.5 }}>
              Reports percentage distribution of stress illness and highlights crucial contradictions with working hours.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>1. Peak Stress Leader:</strong> Movie producers represented a quarter (25%) of all stress-related illness cases.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>2. The Lecturer Paradox:</strong> Paradoxically, lecturers made up the second highest share at 18%, despite working the fewest hours (25 hrs).
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>3. Remaining Cohort:</strong> Doctors (15%), business men (11%), chefs (10%), writers &amp; lawyers (8% each), and programmers at the floor (5%).
              </div>
            </div>

            <div style={{ marginTop: "auto", background: "#f8fafc", padding: "12px 14px", borderRadius: "12px", fontSize: "0.83rem", color: "#1e293b", fontStyle: "italic", borderLeft: "3px solid #0891b2" }}>
              “In terms of stress-related illness, movie producers accounted for the largest single proportion at exactly 25%. Paradoxically, lecturers represented the second highest group at 18%...”
            </div>
          </div>
        </div>
      ) : (
        /* Alternative Strategy Grid */
        <div className="stage-grid-2col">
          <div style={{ background: "#ffffff", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "22px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
              Group 1: High Workload &amp; Upper Stress Groups (Business men, Producers, Doctors)
            </h4>
            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", lineHeight: 1.5 }}>
              Evaluates the three occupations exceeding 50 hours per week: business men (70h / 11% stress), movie producers (60h / 25% stress), and doctors (52h / 15% stress).
            </p>
          </div>
          <div style={{ background: "#ffffff", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "22px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
              Group 2: The Lecturer Paradox &amp; Lower Hours Bracket (Lecturers, Programmers, Lawyers, Chefs)
            </h4>
            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", lineHeight: 1.5 }}>
              Contrasts lecturers (25h vs 18% stress) against programmers (40h standard vs 5% lowest stress), chefs (30h vs 10%), writers (45h vs 8%), and lawyers (35h vs 8%).
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
