import React from "react";
import { CheckCircle2, TrendingUp, ShieldCheck, Sparkles, Award } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step6FlowBreakdown: React.FC = () => {
  const body1Model = TASK1_DATA.modelReport.paragraphs.find((p) => p.id === "body1");

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 06 / 08 • Body 1 — Weekly Hours Worked (Bar Chart)
        </span>
        <h2 className="stage-title">Deconstructing Body Paragraph 1: Working Hours Breakdown</h2>
        <p className="stage-subtitle">
          Examine the comparative data flow: opening with Business men's peak workweek (70 hrs), following with Movie Producers (60 hrs) and Doctors (52 hrs), down through Programmers (40 hrs) to Lecturers' floor (25 hrs).
        </p>
      </div>

      <div className="stage-grid-2col">
        {/* Left Column: 4 Analytical Data Clusters */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* Cluster 1: Business Men Global Peak */}
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
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#dc2626" }} />
                <h4 style={{ fontSize: "1.05rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  1. Peak Workweek: Business Men (70 hrs)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#fef2f2", color: "#991b1b", fontWeight: 800 }}>
                Rank 1 in Hours
              </span>
            </div>

            <div style={{ background: "#ffffff", borderRadius: "10px", padding: "12px", border: "1px solid var(--border-subtle)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--slate-700)" }}>
                  Comparative Extent:
                </span>
                <span style={{ fontSize: "0.95rem", fontWeight: 800, color: "#dc2626" }}>
                  70 hrs/wk (Nearly triple lecturers)
                </span>
              </div>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Analytical Role:</strong> Opens the paragraph with the highest single figure in the bar chart. Business men completed an average of 70 hours weekly, outworking every other group.
            </p>
          </div>

          {/* Cluster 2: Upper Tier Followers */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid rgba(8, 145, 178, 0.3)",
              borderRadius: "18px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#0891b2" }} />
                <h4 style={{ fontSize: "1.05rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  2. Upper Tier: Movie Producers (60h) &amp; Doctors (52h)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#ecfeff", color: "#0e7490" }}>
                Ranks 2 &amp; 3
              </span>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Key Phrasing:</strong> <em>“Movie producers and doctors followed with 60 and 52 hours per week respectively.”</em> Smoothly bridges from the peak to the remaining full-time professionals.
            </p>
          </div>

          {/* Cluster 3: Intermediate & Standard 40h Baseline */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid rgba(132, 204, 22, 0.3)",
              borderRadius: "18px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#84cc16" }} />
                <h4 style={{ fontSize: "1.05rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  3. Standard Baseline: Writers (45h) &amp; Programmers (40h)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#f7fee7", color: "#4d7c0f" }}>
                Standard Baseline
              </span>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Analytical Role:</strong> Establishes the conventional working norm: writers logged 45 hours, while programmers completed a standard 40-hour week.
            </p>
          </div>

          {/* Cluster 4: Lower Tier & Spectrum Minimum */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid rgba(13, 148, 136, 0.3)",
              borderRadius: "18px",
              padding: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#0d9488" }} />
              <div>
                <h4 style={{ fontSize: "0.95rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  4. Lower Tier: Lawyers (35h), Chefs (30h) &amp; Lecturers (25h)
                </h4>
                <span style={{ fontSize: "0.78rem", color: "var(--slate-500)" }}>
                  Lecturers recorded the lowest working hours in the entire survey at 25 hrs
                </span>
              </div>
            </div>
            <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#ccfbf1", color: "#115e59", fontWeight: 800 }}>
              25 – 35 hrs/wk
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
                Bar Chart Analysis
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
                <span><strong>Visual Topic Opener:</strong> <em>“Regarding working hours, business men logged the longest workweek at an average of 70 hours...”</em></span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>2</span>
                <span><strong>Sequential Coupling:</strong> <em>“...followed by movie producers and doctors at 60 and 52 hours per week respectively.”</em></span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>3</span>
                <span><strong>Intermediate Cluster:</strong> <em>“Writers averaged 45 hours on the job, while programmers completed a standard 40-hour week.”</em></span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>4</span>
                <span><strong>Lower Tier &amp; Superlative Floor:</strong> <em>“Lawyers and chefs worked somewhat fewer hours (35 and 30 hours respectively), whereas lecturers recorded the lowest figure across all groups at merely 25 hours per week.”</em></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
