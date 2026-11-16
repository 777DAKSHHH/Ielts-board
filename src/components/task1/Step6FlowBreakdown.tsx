import React from "react";
import { CheckCircle2, TrendingUp, ShieldCheck, Sparkles, Award } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step6FlowBreakdown: React.FC = () => {
  const body1Model = TASK1_DATA.modelReport.paragraphs.find((p) => p.id === "body1");

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 06 / 08 • Body 1 — Canada &amp; Australia Analysis
        </span>
        <h2 className="stage-title">Deconstructing Body Paragraph 1: Canada &amp; Australia</h2>
        <p className="stage-subtitle">
          Examine the comparative data flow: opening with Canada's initial lead (19m tonnes), charting its climb to the 1988 global apex (25m tonnes) and subsequent plunge (14m), contrasted against Australia's steady downward contraction (16m to 11m tonnes).
        </p>
      </div>

      <div className="stage-grid-2col">
        {/* Left Column: 4 Analytical Data Clusters */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* Cluster 1: Canada Opening & Global Peak */}
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
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#0f172a" }} />
                <h4 style={{ fontSize: "1.05rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  1. Canadian Opening &amp; 1988 Apex (25m tonnes)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#f1f5f9", color: "#0f172a", fontWeight: 800 }}>
                Apex of Diagram
              </span>
            </div>

            <div style={{ background: "#ffffff", borderRadius: "10px", padding: "12px", border: "1px solid var(--border-subtle)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--slate-700)" }}>
                  Peak Trajectory:
                </span>
                <span style={{ fontSize: "0.95rem", fontWeight: 800, color: "#0f172a" }}>
                  19m (1985) → 17m (1986) → 25m (1988 Peak)
                </span>
              </div>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Analytical Role:</strong> Opens with the original market leader. Canada started at 19 million tonnes, dipped slightly in 1986, and then surged to achieve the overall apex of the entire diagram at 25 million tonnes in 1988.
            </p>
          </div>

          {/* Cluster 2: Canada's Precipitous Plunge & Rebound */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid rgba(15, 23, 42, 0.2)",
              borderRadius: "18px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#dc2626" }} />
                <h4 style={{ fontSize: "1.05rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  2. Canadian Plunge (14m) &amp; Baseline Rebound (19m)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#fef2f2", color: "#991b1b" }}>
                Zero Net Change
              </span>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Key Phrasing:</strong> <em>“However, this was immediately followed by a steep plunge to 14 million tonnes in 1989, after which exports rebounded back to their initial level of 19 million tonnes in 1990.”</em>
            </p>
          </div>

          {/* Cluster 3: Australia's Initial Rise & Steady Decline */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid rgba(100, 116, 139, 0.3)",
              borderRadius: "18px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "2px", background: "#64748b" }} />
                <h4 style={{ fontSize: "1.05rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  3. Australia: Brief Rise (16m) to Steady Contraction
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#f8fafc", color: "#475569" }}>
                Steady Downward
              </span>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Analytical Role:</strong> Contrasts sharply with Canada: Australia rose from 15 million tonnes in 1985 to a brief high of 16 million in 1986, before embarking on a steady downward trajectory over the next three years.
            </p>
          </div>

          {/* Cluster 4: Australia's Floor & Final Position */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid rgba(100, 116, 139, 0.3)",
              borderRadius: "18px",
              padding: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "12px", height: "12px", borderRadius: "2px", background: "#64748b" }} />
              <div>
                <h4 style={{ fontSize: "0.95rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  4. Australia: Plateau at 11m Tonnes &amp; Lowest Finish
                </h4>
                <span style={{ fontSize: "0.78rem", color: "var(--slate-500)" }}>
                  Remained static at 11 million tonnes across 1989 and 1990
                </span>
              </div>
            </div>
            <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#f1f5f9", color: "#334155", fontWeight: 800 }}>
              Final #3 Floor
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
                <TrendingUp size={20} color="var(--apple-blue)" />
                <h4 style={{ fontSize: "1.1rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  Body Paragraph 1 Model ({body1Model?.wordCount} words)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.75rem", fontWeight: 750 }}>
                Canada &amp; Australia
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
                Band 9 Comparative Sentence Flow Blueprint
              </h4>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.85rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>1</span>
                <span><strong>Opening Baseline &amp; Surge:</strong> <em>“In 1985, Canada was the leading wheat exporter at 19 million tonnes. Following a minor dip to 17 million tonnes in 1986, Canadian shipments surged rapidly to reach the highest point on the entire graph at 25 million tonnes in 1988.”</em></span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>2</span>
                <span><strong>Sharp Reversal &amp; Return:</strong> <em>“However, this was immediately followed by a steep plunge to 14 million tonnes in 1989, after which exports rebounded back to their initial level of 19 million tonnes in 1990.”</em></span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>3</span>
                <span><strong>Sharp Contrast Transition:</strong> <em>“In contrast, Australia commenced at 15 million tonnes and rose slightly to a peak of 16 million tonnes in 1986.”</em></span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>4</span>
                <span><strong>Floor Stabilization &amp; Lowest Rank:</strong> <em>“Thereafter, Australian wheat exports steadily declined over the subsequent three years to 11 million tonnes in 1989, where they remained unchanged through 1990, ending as the lowest of the three regions.”</em></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
