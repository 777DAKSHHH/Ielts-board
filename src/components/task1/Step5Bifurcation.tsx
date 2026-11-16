import React, { useState } from "react";
import { CheckCircle2, Split, TrendingUp, Calendar, Layers, Sparkles } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step5Bifurcation: React.FC = () => {
  const [selectedStrategy, setSelectedStrategy] = useState<"trend" | "chronological">("trend");

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 05 / 08 • Structural Grouping Strategy
        </span>
        <h2 className="stage-title">Bifurcation Tactics: How to Group the Three Regions</h2>
        <p className="stage-subtitle">
          With three distinct geographical areas tracked over six years (1985–1990), choosing a logical paragraph bifurcation prevents disjointed reporting and secures Band 9 in Coherence &amp; Cohesion (CC) and Task Achievement (TA).
        </p>
      </div>

      {/* Strategy Switcher */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "8px" }}>
        <button
          onClick={() => setSelectedStrategy("trend")}
          style={{
            flex: 1,
            padding: "14px 18px",
            borderRadius: "14px",
            border: selectedStrategy === "trend" ? "2px solid #2563eb" : "1.5px solid var(--border-subtle)",
            background: selectedStrategy === "trend" ? "#eff6ff" : "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            boxShadow: selectedStrategy === "trend" ? "var(--shadow-sm)" : "none"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <TrendingUp size={20} color={selectedStrategy === "trend" ? "#2563eb" : "var(--slate-600)"} />
            <div style={{ textAlign: "left" }}>
              <strong style={{ fontSize: "0.95rem", color: "var(--slate-900)", display: "block" }}>
                Strategy A: Region &amp; Trend Grouping (Recommended Band 9)
              </strong>
              <span style={{ fontSize: "0.78rem", color: "var(--slate-600)" }}>
                Body 1: Canada &amp; Australia (Volatile Peak vs Continuous Decline) • Body 2: European Community (Ascent to #1)
              </span>
            </div>
          </div>
          <span className="apple-badge neutral" style={{ background: "#dbeafe", color: "#1e40af", fontWeight: 800 }}>
            Band 9 Recommended
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
            <Calendar size={20} color={selectedStrategy === "chronological" ? "#059669" : "var(--slate-600)"} />
            <div style={{ textAlign: "left" }}>
              <strong style={{ fontSize: "0.95rem", color: "var(--slate-900)", display: "block" }}>
                Strategy B: Chronological Split (Alternative)
              </strong>
              <span style={{ fontSize: "0.78rem", color: "var(--slate-600)" }}>
                Body 1: 1985–1988 (Start &amp; Canadian Apex) • Body 2: 1988–1990 (Plunge, Rebound &amp; EC Lead)
              </span>
            </div>
          </div>
          <span className="apple-badge neutral" style={{ fontWeight: 700 }}>
            Alternative
          </span>
        </button>
      </div>

      {/* Selected Strategy Deep Dive Grid */}
      {selectedStrategy === "trend" ? (
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
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#0f172a" }} />
                <h4 style={{ fontSize: "1.08rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  Body 1: Canada &amp; Australia (Volatile Peak vs Steady Decline)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ background: "#f1f5f9", color: "#0f172a", fontWeight: 750 }}>
                125 Words
              </span>
            </div>

            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.5 }}>
              Focuses on the initial leader (Canada) with its 1988 apex and 1989 slump, contrasted against Australia's steady downward trajectory.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>1. Canada Start &amp; Apex:</strong> Started as leader at 19m tonnes in 1985, dipped to 17m in 1986, then surged to the overall graph apex of 25m tonnes in 1988.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>2. Canada Plunge &amp; Rebound:</strong> Suffered a dramatic drop to 14m in 1989 before rebounding to finish at 19m tonnes (0m net change).
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>3. Australia's Decline:</strong> Started at 15m, rose briefly to 16m in 1986, then steadily dropped to 11m in 1989, remaining flat through 1990 as lowest exporter.
              </div>
            </div>

            <div style={{ marginTop: "auto", background: "#f8fafc", padding: "12px 14px", borderRadius: "12px", fontSize: "0.83rem", color: "#1e293b", fontStyle: "italic", borderLeft: "3px solid #0f172a" }}>
              “In 1985, Canada was the leading wheat exporter at 19 million tonnes. Following a minor dip to 17 million tonnes in 1986, Canadian shipments surged rapidly to reach the highest point on the entire graph at 25 million tonnes in 1988...”
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
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#0284c7" }} />
                <h4 style={{ fontSize: "1.08rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  Body 2: European Community (Ascent to Market Leadership)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ background: "#eff6ff", color: "#1d4ed8", fontWeight: 750 }}>
                88 Words
              </span>
            </div>

            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.5 }}>
              Details the European Community's initial dip, two-year stabilization plateau, and final two-year surge to overtake competitors.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>1. 1985 Start &amp; 1986 Trough:</strong> Commenced in second place at 17m tonnes before dipping to a period low of 14m tonnes in 1986.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>2. 1987–1988 Plateau:</strong> Stood completely stable at 15m tonnes across both years.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>3. 1989–1990 Expansion &amp; Overtaking:</strong> Surged to 19m tonnes in 1989 and peaked at 21m in 1990, overtaking Canada to finish as the market leader.
              </div>
            </div>

            <div style={{ marginTop: "auto", background: "#f8fafc", padding: "12px 14px", borderRadius: "12px", fontSize: "0.83rem", color: "#1e293b", fontStyle: "italic", borderLeft: "3px solid #0284c7" }}>
              “Wheat exports from the European Community started in second place at 17 million tonnes in 1985 before declining to a period low of 14 million tonnes in 1986. Over the final two years, the European Community experienced a significant expansion...”
            </div>
          </div>
        </div>
      ) : (
        /* Chronological Alternative */
        <div className="stage-grid-2col">
          <div style={{ background: "#ffffff", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "22px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
              Period 1: 1985 to 1988 (Initial Standings &amp; Canadian Apex)
            </h4>
            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", lineHeight: 1.5 }}>
              Covers the opening positions in 1985 (Canada 19m, EC 17m, Australia 15m), the 1986 dip for EC (14m) and peak for Australia (16m), culminating in Canada's global peak of 25m tonnes in 1988.
            </p>
          </div>
          <div style={{ background: "#ffffff", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "22px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
              Period 2: 1988 to 1990 (Divergence, Overtaking &amp; Final Rankings)
            </h4>
            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", lineHeight: 1.5 }}>
              Analyzes the dramatic reversal in 1989 (Canada dropping to 14m, EC climbing to 19m), and the 1990 endpoints (EC leader at 21m, Canada at 19m, Australia at 11m).
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
