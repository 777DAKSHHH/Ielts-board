import React, { useState } from "react";
import { CheckCircle2, Split, Clock, Disc, Layers, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { TASK1_DATA, MUSIC_FORMATS, COUNTRY_MARKETS } from "../../data/task1Data";

export const Step5Bifurcation: React.FC = () => {
  const [selectedStrategy, setSelectedStrategy] = useState<"chronological" | "format">("chronological");

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 05 / 08 • Structural Grouping Strategy
        </span>
        <h2 className="stage-title">Bifurcation Tactics: How to Group the Bar Graph Data</h2>
        <p className="stage-subtitle">
          With two time periods (1997 vs 2007), three countries, and five music distribution channels, choosing the right grouping strategy is essential for achieving Band 9 in Coherence &amp; Cohesion (CC) and Task Achievement (TA).
        </p>
      </div>

      {/* Strategy Switcher */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "8px" }}>
        <button
          onClick={() => setSelectedStrategy("chronological")}
          style={{
            flex: 1,
            padding: "14px 18px",
            borderRadius: "14px",
            border: selectedStrategy === "chronological" ? "2px solid #0284c7" : "1.5px solid var(--border-subtle)",
            background: selectedStrategy === "chronological" ? "#f0f9ff" : "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            boxShadow: selectedStrategy === "chronological" ? "var(--shadow-sm)" : "none"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Clock size={20} color={selectedStrategy === "chronological" ? "#0284c7" : "var(--slate-600)"} />
            <div style={{ textAlign: "left" }}>
              <strong style={{ fontSize: "0.95rem", color: "var(--slate-900)", display: "block" }}>
                Strategy A: Chronological Bifurcation (Recommended)
              </strong>
              <span style={{ fontSize: "0.78rem", color: "var(--slate-600)" }}>
                Body 1: 1997 Baseline • Body 2: 2007 Structural Transformation
              </span>
            </div>
          </div>
          <span className="apple-badge neutral" style={{ background: "#dbeafe", color: "#1e40af", fontWeight: 800 }}>
            Band 9 Standard
          </span>
        </button>

        <button
          onClick={() => setSelectedStrategy("format")}
          style={{
            flex: 1,
            padding: "14px 18px",
            borderRadius: "14px",
            border: selectedStrategy === "format" ? "2px solid #7c3aed" : "1.5px solid var(--border-subtle)",
            background: selectedStrategy === "format" ? "#f5f3ff" : "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            boxShadow: selectedStrategy === "format" ? "var(--shadow-sm)" : "none"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Disc size={20} color={selectedStrategy === "format" ? "#7c3aed" : "var(--slate-600)"} />
            <div style={{ textAlign: "left" }}>
              <strong style={{ fontSize: "0.95rem", color: "var(--slate-900)", display: "block" }}>
                Strategy B: Format-Based Bifurcation
              </strong>
              <span style={{ fontSize: "0.78rem", color: "var(--slate-600)" }}>
                Body 1: Physical / Analog Formats • Body 2: Remote / Digital Formats
              </span>
            </div>
          </div>
          <span className="apple-badge neutral" style={{ fontWeight: 700 }}>
            Alternative
          </span>
        </button>
      </div>

      {/* Selected Strategy Deep Dive Grid */}
      {selectedStrategy === "chronological" ? (
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
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#0284c7" }} />
                <h4 style={{ fontSize: "1.08rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  Body Paragraph 1: 1997 Baseline
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ background: "#e0f2fe", color: "#0369a1", fontWeight: 750 }}>
                124 Words
              </span>
            </div>

            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.5 }}>
              Establishes the initial commercial landscape where retail shop compact discs accounted for the immense lion's share of profits, digital downloads did not exist, and legacy analog media provided secondary revenue.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>1. Retail CD Dominance:</strong> Germany (€40m), France (€25m), Italy (€20m) — over 85% of total enterprise yield.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>2. Trivial Online &amp; Zero Downloads:</strong> Online CDs generated only €3m (Germany), €1.5m (France), and nil (Italy); internet downloads stood at 0 across all 3 nations.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>3. Legacy Analog Footprint:</strong> Italy led cassette sales at €6m (vs €5m Germany, &lt;€1m France); vinyl produced €3m in Italy and €2m in Germany.
              </div>
            </div>

            <div style={{ background: "#f8fafc", borderRadius: "10px", padding: "10px 12px", fontSize: "0.8rem", color: "var(--slate-700)", borderLeft: "3px solid #0284c7" }}>
              <strong>Teaching Note:</strong> Citing the 1997 baseline values for cassettes and vinyl is mandatory—without them, the examiner cannot grade your reporting of their subsequent demise.
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
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#16a34a" }} />
                <h4 style={{ fontSize: "1.08rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  Body Paragraph 2: 2007 Structural Shift
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ background: "#dcfce7", color: "#15803d", fontWeight: 750 }}>
                111 Words
              </span>
            </div>

            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.5 }}>
              Documents the structural transformation over the decade: steep contractions in store CDs, complete extinction of analog media to zero, and the surge of online CD purchasing and internet downloads.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>1. Shop CD Contraction:</strong> Slid to €25m (Germany), €15m (France), and €14m (Italy), yet preserved its status as the leading single contributor.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>2. Complete Obsolescence:</strong> Cassettes and vinyl fell to zero across all three countries, wiping out €9m of revenue from Italy's balance sheet.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>3. Rise of Remote &amp; Digital:</strong> Online CDs grew to €8m (Germany), €7m (France), and €1.5m (Italy); downloads surged to €5m each in Germany and France.
              </div>
            </div>

            <div style={{ background: "#f8fafc", borderRadius: "10px", padding: "10px 12px", fontSize: "0.8rem", color: "var(--slate-700)", borderLeft: "3px solid #16a34a" }}>
              <strong>Teaching Note:</strong> Use comparative discourse markers like <em>“In stark contrast,”</em> and <em>“The slack was partially absorbed by...”</em> to demonstrate high cohesive mastery.
            </div>
          </div>
        </div>
      ) : (
        /* Format Grouping Strategy */
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
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#7c3aed" }} />
              <h4 style={{ fontSize: "1.08rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                Body 1: Physical Retail &amp; Legacy Analog
              </h4>
            </div>
            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.5 }}>
              Groups the traditional declining formats: Shop-bought CDs, Cassettes, and Vinyl across both 1997 and 2007.
            </p>
            <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "0.84rem", color: "var(--slate-700)", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li>Shop CDs: €40m to €25m (Germany), €25m to €15m (France), €20m to €14m (Italy).</li>
              <li>Cassettes: €6m (Italy) and €5m (Germany) dropping to 0 across the board.</li>
              <li>Vinyl: €3m (Italy) and €2m (Germany) also dropping to nil in 2007.</li>
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
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#9333ea" }} />
              <h4 style={{ fontSize: "1.08rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                Body 2: Modern Remote &amp; Digital Distribution
              </h4>
            </div>
            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.5 }}>
              Groups the emerging modern channels: Online CD purchases and Internet downloads across both 1997 and 2007.
            </p>
            <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "0.84rem", color: "var(--slate-700)", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li>Online CDs: Grew from €3m to €8m in Germany, and €1.5m to €7m in France (Italy reached €1.5m).</li>
              <li>Internet downloads: Rose from zero in 1997 to €5m in Germany and France, and €1.5m in Italy in 2007.</li>
              <li>Combined digital contribution: Reached €13m in Germany and €12m in France.</li>
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
          <strong>Examiner Assessment Rationale:</strong> Strategy A (Chronological) is strongly recommended for classroom teaching because students can directly match Body 1 to the top chart (1997) and Body 2 to the bottom chart (2007). This eliminates cognitive overload and prevents skipping zero data points.
        </div>
      </div>
    </div>
  );
};
