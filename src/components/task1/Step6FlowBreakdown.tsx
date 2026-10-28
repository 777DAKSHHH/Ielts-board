import React from "react";
import { CheckCircle2, TrendingUp, Users, ShieldCheck, Sparkles, Award } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step6FlowBreakdown: React.FC = () => {
  const body1Model = TASK1_DATA.modelReport.paragraphs.find((p) => p.id === "body1");

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 06 / 08 • Body 1 — Staff Costs &amp; Wage Trajectories
        </span>
        <h2 className="stage-title">Deconstructing Body Paragraph 1: Staff Remuneration</h2>
        <p className="stage-subtitle">
          Examine the sentence-by-sentence architectural breakdown for employee remuneration: teachers' salaries commanding the lion's share (40% → 50% → 45%), other workers' continuous downward trajectory (28% → 22% → 15%), and combined staff costs absorbing 60%–72% of annual outlay.
        </p>
      </div>

      <div className="stage-grid-2col">
        {/* Left Column: Feature Breakdown for Staff Remuneration */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* Feature 1: Teachers' Baseline */}
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
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#2563eb" }} />
                <h4 style={{ fontSize: "1.05rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  1. Teachers' Salaries Baseline (1981)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.72rem" }}>
                Starting Baseline: 40%
              </span>
            </div>

            <div style={{ background: "#ffffff", borderRadius: "10px", padding: "12px", border: "1px solid var(--border-subtle)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--slate-700)" }}>
                  Premier Single Expense (1981)
                </span>
                <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "#2563eb" }}>
                  40%
                </span>
              </div>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Analytical Role:</strong> Establishes the school's primary expense right from the start. Teachers' salaries formed two-fifths of all funding in 1981, well ahead of other workers (28%).
            </p>
          </div>

          {/* Feature 2: Peak Expansion to 50% & Slight Moderation */}
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
                  2. Peak at 50% (1991) &amp; Moderation to 45% (2001)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#eff6ff", color: "#1e40af" }}>
                Peak: 50% (Half of Budget)
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              <div style={{ background: "#ffffff", borderRadius: "10px", padding: "10px", border: "1px solid var(--border-subtle)", textAlign: "center" }}>
                <div style={{ fontSize: "0.75rem", color: "#2563eb", fontWeight: 700 }}>1991 PEAK</div>
                <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1d4ed8" }}>50%</div>
                <div style={{ fontSize: "0.68rem", color: "var(--slate-500)" }}>Exactly half of outlay</div>
              </div>
              <div style={{ background: "#ffffff", borderRadius: "10px", padding: "10px", border: "1px solid var(--border-subtle)", textAlign: "center" }}>
                <div style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 700 }}>2001 SETTLEMENT</div>
                <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a" }}>45%</div>
                <div style={{ fontSize: "0.68rem", color: "var(--slate-500)" }}>Remains dominant #1</div>
              </div>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Key Phrasing:</strong> <em>“...climbing to a peak of 50% in 1991, and subsequently dipping to 45% in 2001.”</em>
            </p>
          </div>

          {/* Feature 3: Other Workers' Unbroken Downward Trajectory */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid rgba(124, 58, 237, 0.3)",
              borderRadius: "18px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#7c3aed" }} />
                <h4 style={{ fontSize: "1.05rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  3. Other Staff Salaries: Unbroken Downward Trend
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#f5f3ff", color: "#6d28d9" }}>
                Almost Halved: 28% → 15%
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
              <div style={{ background: "#ffffff", borderRadius: "10px", padding: "10px", border: "1px solid var(--border-subtle)", textAlign: "center" }}>
                <div style={{ fontSize: "0.7rem", color: "#64748b", fontWeight: 700 }}>1981</div>
                <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0f172a" }}>28%</div>
                <div style={{ fontSize: "0.65rem", color: "var(--slate-500)" }}>2nd largest cost</div>
              </div>
              <div style={{ background: "#ffffff", borderRadius: "10px", padding: "10px", border: "1px solid var(--border-subtle)", textAlign: "center" }}>
                <div style={{ fontSize: "0.7rem", color: "#7c3aed", fontWeight: 700 }}>1991</div>
                <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#7c3aed" }}>22%</div>
                <div style={{ fontSize: "0.65rem", color: "var(--slate-500)" }}>-6% drop</div>
              </div>
              <div style={{ background: "#ffffff", borderRadius: "10px", padding: "10px", border: "1px solid var(--border-subtle)", textAlign: "center" }}>
                <div style={{ fontSize: "0.7rem", color: "#991b1b", fontWeight: 700 }}>2001</div>
                <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#991b1b" }}>15%</div>
                <div style={{ fontSize: "0.65rem", color: "var(--slate-500)" }}>Nearly halved</div>
              </div>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Examiner Precision:</strong> Describing this as an <em>“unbroken downward trajectory, diminishing from 28% to 22% and almost halving to 15%”</em> demonstrates Band 9 lexical resource.
            </p>
          </div>

          {/* Feature 4: Combined Staff Total */}
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
                4. Combined Staff Outlay Synthesis
              </h4>
              <p style={{ fontSize: "0.8rem", color: "var(--slate-600)", margin: "4px 0 0 0" }}>
                Staff wages consistently accounted for 60% to 72% of total school expenditure.
              </p>
            </div>
            <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "#1e40af" }}>
              60%–72%
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
                Staff Focus
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
                <span><strong>Categorical Signal &amp; Baseline:</strong> <em>“In terms of staffing costs, teachers’ salaries constituted the school’s principal outlay in every year surveyed, beginning at 40% in 1981...”</em></span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>2</span>
                <span><strong>Peak Milestone &amp; Dip:</strong> <em>“...climbing to a peak of 50% in 1991, and subsequently dipping to 45% in 2001.”</em></span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>3</span>
                <span><strong>Contrastive Downward Trajectory:</strong> <em>“By contrast, expenditure on other workers’ salaries followed an unbroken downward trajectory; having formed the second-largest cost at 28% in 1981, it diminished to 22% in 1991 before almost halving to 15% by 2001.”</em></span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>4</span>
                <span><strong>High-Level Macro Total:</strong> <em>“Combined, staff remuneration consistently absorbed well over half of the school’s annual funding, ranging between 60% and 72%.”</em></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
