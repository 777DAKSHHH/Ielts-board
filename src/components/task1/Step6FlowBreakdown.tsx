import React from "react";
import { CheckCircle2, TrendingUp, Disc, ShieldCheck, ShoppingBag, Radio } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step6FlowBreakdown: React.FC = () => {
  const body1Model = TASK1_DATA.modelReport.paragraphs.find((p) => p.id === "body1");

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 06 / 08 • Body 1 — Initial Market Landscape (1997)
        </span>
        <h2 className="stage-title">Deconstructing Body Paragraph 1: 1997 Retail Baseline</h2>
        <p className="stage-subtitle">
          Examine the sentence-by-sentence architectural breakdown for the 1997 baseline: physical store CD supremacy (exceeding 40m in Germany), negligible online orders, nonexistent downloads, and balanced legacy analog sales.
        </p>
      </div>

      <div className="stage-grid-2col">
        {/* Left Column: Feature Breakdown for 1997 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* Feature 1: Retail Shop CDs */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid rgba(2, 132, 199, 0.3)",
              borderRadius: "18px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#0284c7" }} />
                <h4 style={{ fontSize: "1.1rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  Retail Shop CDs (Undisputed Lion’s Share)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#e0f2fe", color: "#0369a1" }}>
                Over 80% of Total
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
              <div style={{ background: "#ffffff", borderRadius: "10px", padding: "10px", border: "1px solid var(--border-subtle)", textAlign: "center" }}>
                <div style={{ fontSize: "0.75rem", color: "var(--slate-500)", fontWeight: 700 }}>GERMANY</div>
                <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a" }}>~42 €m</div>
                <div style={{ fontSize: "0.68rem", color: "#0284c7", fontWeight: 700 }}>Above 40m line</div>
              </div>
              <div style={{ background: "#ffffff", borderRadius: "10px", padding: "10px", border: "1px solid var(--border-subtle)", textAlign: "center" }}>
                <div style={{ fontSize: "0.75rem", color: "var(--slate-500)", fontWeight: 700 }}>FRANCE</div>
                <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a" }}>25 €m</div>
                <div style={{ fontSize: "0.68rem", color: "var(--slate-500)" }}>Mid-tier</div>
              </div>
              <div style={{ background: "#ffffff", borderRadius: "10px", padding: "10px", border: "1px solid var(--border-subtle)", textAlign: "center" }}>
                <div style={{ fontSize: "0.75rem", color: "var(--slate-500)", fontWeight: 700 }}>ITALY</div>
                <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a" }}>~20.5 €m</div>
                <div style={{ fontSize: "0.68rem", color: "var(--slate-500)" }}>Baseline</div>
              </div>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Analytical Role:</strong> Establishes the commercial benchmark. Germany held an unchallenged lead, with its top bar clearly protruding past the 40 million line.
            </p>
          </div>

          {/* Feature 2: Digital Nonexistence & Trivial Online */}
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
                <h4 style={{ fontSize: "1.1rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  Pre-Digital Channels: Online CDs &amp; Downloads
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.72rem" }}>
                Nominal / Zero
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              <div style={{ background: "#ffffff", borderRadius: "10px", padding: "10px", border: "1px solid var(--border-subtle)" }}>
                <strong style={{ fontSize: "0.82rem", color: "var(--slate-900)" }}>Online CD Orders:</strong>
                <div style={{ fontSize: "0.78rem", color: "var(--slate-700)", marginTop: "4px" }}>
                  Germany: €3m • France: €1.5m • Italy: nil.
                </div>
              </div>
              <div style={{ background: "#ffffff", borderRadius: "10px", padding: "10px", border: "1px solid var(--border-subtle)" }}>
                <strong style={{ fontSize: "0.82rem", color: "var(--slate-900)" }}>Internet Downloads:</strong>
                <div style={{ fontSize: "0.78rem", color: "#dc2626", fontWeight: 700, marginTop: "4px" }}>
                  0 €m across all three countries.
                </div>
              </div>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Key Phrasing:</strong> <em>“By contrast, online CD orders were negligible... while internet downloads were non-existent across all three territories.”</em>
            </p>
          </div>

          {/* Feature 3: Legacy Analog Formats (Cassettes & Vinyl) */}
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
                <h4 style={{ fontSize: "1.1rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  Legacy Analog Sales (Active Across All 3 Nations)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#fef3c7", color: "#92400e" }}>
                Secondary Revenue
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              <div style={{ background: "#ffffff", borderRadius: "10px", padding: "10px", border: "1px solid var(--border-subtle)" }}>
                <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--slate-900)" }}>Cassettes:</div>
                <div style={{ fontSize: "0.78rem", color: "var(--slate-700)", marginTop: "3px" }}>
                  Italy (€6m) &gt; Germany (€5m) = France (€5m).
                </div>
              </div>
              <div style={{ background: "#ffffff", borderRadius: "10px", padding: "10px", border: "1px solid var(--border-subtle)" }}>
                <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--slate-900)" }}>Vinyl Singles / LPs:</div>
                <div style={{ fontSize: "0.78rem", color: "var(--slate-700)", marginTop: "3px" }}>
                  Italy (€3m) = France (€3m) &gt; Germany (€2m).
                </div>
              </div>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Accurate Data Note:</strong> France recorded substantial analog earnings (€5m in cassettes, €3m in vinyl), demonstrating that all three markets had active tape and vinyl customer bases before the digital revolution.
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
                <Disc size={20} color="var(--apple-blue)" />
                <h4 style={{ fontSize: "1.1rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  Body Paragraph 1 Model ({body1Model?.wordCount} words)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.75rem", fontWeight: 750 }}>
                1997 Baseline Focus
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
                <span><strong>Topic Sentence:</strong> State the physical retail supremacy (<em>lion's share</em>) of compact discs.</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>2</span>
                <span><strong>Data Attribution:</strong> Rank countries: Germany (~€42m, above 40m line), France (€25m), Italy (~€20.5m).</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>3</span>
                <span><strong>Digital Contrast:</strong> Frame online CD orders as negligible (&lt;€3m) and report downloads as zero across the board.</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>4</span>
                <span><strong>Analog Grouping:</strong> Synthesize cassettes (Italy €6m; France &amp; Germany tied at €5m) and vinyl (France &amp; Italy tied at €3m, Germany €2m).</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
