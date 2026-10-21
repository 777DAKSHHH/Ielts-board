import React from "react";
import { CheckCircle2, TrendingUp, Tv, Radio, ShieldCheck, Clock, Sparkles } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step6FlowBreakdown: React.FC = () => {
  const body1Model = TASK1_DATA.modelReport.paragraphs.find((p) => p.id === "body1");

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 06 / 08 • Body 1 — Morning Surge to Crossover (01:00 – 13:00)
        </span>
        <h2 className="stage-title">Deconstructing Body Paragraph 1: Morning Dynamics &amp; Midday Crossover</h2>
        <p className="stage-subtitle">
          Examine the sentence-by-sentence architectural breakdown for the first half of the day: nocturnal baseline (&lt;5%), the dramatic morning climb of radio to its daily apex of ~27% at 8:30 am, TV's modest morning bump, and the pivotal 13:00 crossover convergence at 15%.
        </p>
      </div>

      <div className="stage-grid-2col">
        {/* Left Column: Feature Breakdown for Morning (01:00 - 13:00) */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* Feature 1: Nocturnal Pre-Dawn Trough */}
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
                  1. Nocturnal Lull (01:00 – 06:00)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.72rem" }}>
                Under 5% Trough
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              <div style={{ background: "#ffffff", borderRadius: "10px", padding: "10px", border: "1px solid var(--border-subtle)", textAlign: "center" }}>
                <div style={{ fontSize: "0.75rem", color: "#dc2626", fontWeight: 700 }}>RADIO (02:00–04:00)</div>
                <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a" }}>2% – 3%</div>
                <div style={{ fontSize: "0.68rem", color: "var(--slate-500)" }}>Night trough</div>
              </div>
              <div style={{ background: "#ffffff", borderRadius: "10px", padding: "10px", border: "1px solid var(--border-subtle)", textAlign: "center" }}>
                <div style={{ fontSize: "0.75rem", color: "#2563eb", fontWeight: 700 }}>TV (02:00–05:00)</div>
                <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a" }}>3% – 4%</div>
                <div style={{ fontSize: "0.68rem", color: "var(--slate-500)" }}>Flatline</div>
              </div>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Analytical Role:</strong> Establishes the baseline. Both broadcasting channels command negligible attention prior to the morning commute.
            </p>
          </div>

          {/* Feature 2: Radio Morning Surge & Peak */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid rgba(220, 38, 38, 0.3)",
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
                  2. Radio Morning Surge &amp; Apex (06:00 – 09:00)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#fee2e2", color: "#991b1b" }}>
                Peak: ~27%
              </span>
            </div>

            <div style={{ background: "#ffffff", borderRadius: "10px", padding: "12px", border: "1px solid var(--border-subtle)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.84rem", fontWeight: 700, color: "var(--slate-800)" }}>
                  Surge: 4% at 06:00 → 15% at 07:00 → 25% at 08:00
                </span>
                <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "#dc2626" }}>~27% at 08:30</span>
              </div>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Key Phrasing:</strong> <em>“Radio audience experienced a dramatic morning surge, climbing steeply to reach a daily apex of approximately 27% around 8:30...”</em>
            </p>
          </div>

          {/* Feature 3: TV Subdued Morning & 13:00 Crossover */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid rgba(217, 119, 6, 0.3)",
              borderRadius: "18px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#d97706" }} />
                <h4 style={{ fontSize: "1.05rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  3. Subdued TV &amp; Midday Crossover (13:00)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#fef3c7", color: "#92400e" }}>
                15% Intersection
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              <div style={{ background: "#ffffff", borderRadius: "10px", padding: "10px", border: "1px solid var(--border-subtle)" }}>
                <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#2563eb" }}>TV Morning Arc:</div>
                <div style={{ fontSize: "0.78rem", color: "var(--slate-700)", marginTop: "3px" }}>
                  7% peak at 08:00 → 3.5% trough at 11:00 → 15% at 13:00.
                </div>
              </div>
              <div style={{ background: "#ffffff", borderRadius: "10px", padding: "10px", border: "1px solid var(--border-subtle)" }}>
                <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#d97706" }}>13:00 Convergence:</div>
                <div style={{ fontSize: "0.78rem", color: "var(--slate-700)", marginTop: "3px" }}>
                  Both mediums intersect at exactly 15%.
                </div>
              </div>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Accurate Data Note:</strong> At 13:00, TV viewership catches up to declining radio listenership, creating the single intersection of the day.
            </p>
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
                <Clock size={20} color="var(--apple-blue)" />
                <h4 style={{ fontSize: "1.1rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  Body Paragraph 1 Model ({body1Model?.wordCount} words)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.75rem", fontWeight: 750 }}>
                01:00 to 13:00 Focus
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
                <span><strong>Nocturnal Baseline:</strong> Group 1:00 to 6:00 as marginal engagement (&lt;7% for TV, &lt;5% for radio).</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>2</span>
                <span><strong>Radio Morning Surge:</strong> Document the steep climb to its daily apex of ~27% at approximately 8:30 am.</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>3</span>
                <span><strong>Television Morning Contrast:</strong> Note TV’s modest rise to 7% at 8:00 before sliding back to 4% at 11:00.</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>4</span>
                <span><strong>Midday Crossover Point:</strong> Detail the convergence at 13:00 where both curves meet at roughly 15%.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
