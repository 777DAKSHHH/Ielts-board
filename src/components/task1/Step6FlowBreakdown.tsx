import React from "react";
import { CheckCircle2, TrendingUp, ShieldCheck, Sparkles, Award, Layers, Car, Home } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step6FlowBreakdown: React.FC = () => {
  const body1Model = TASK1_DATA.modelReport.paragraphs.find((p) => p.id === "body1");

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 06 / 08 • Body 1 — Transport Infrastructure &amp; Northern Zone
        </span>
        <h2 className="stage-title">Deconstructing Body Paragraph 1: Transport &amp; Northern Zone Overhaul</h2>
        <p className="stage-subtitle">
          Examine the analytical progression across Body 1: opening with the conversion of the central road to a pedestrian street, introducing the circumscribing dual carriageway bypass, reporting the demolition of northern shops for a transit and commercial complex, and detailing the north-eastern housing expansion into open countryside.
        </p>
      </div>

      <div className="stage-grid-2col">
        {/* Left Column: 3 Analytical Process Stage Clusters */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* Cluster 1: Central Pedestrianisation & Circumscribing Dual Carriageway */}
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
                  1. Central Pedestrianisation &amp; Circumscribing Bypass
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#eff6ff", color: "#1e40af", fontWeight: 800 }}>
                Core Infrastructure
              </span>
            </div>

            <div style={{ background: "#ffffff", borderRadius: "10px", padding: "12px", border: "1px solid var(--border-subtle)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--slate-700)" }}>
                  Traffic Reorganisation:
                </span>
                <span style={{ fontSize: "0.95rem", fontWeight: 800, color: "#2563eb" }}>
                  Main Road Pedestrianised • Outer Bypass Loop
                </span>
              </div>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Analytical Role:</strong> Explains how through-traffic is redirected away from the settlement center onto an encircling dual carriageway, freeing the central east-west axis for pedestrian shoppers.
            </p>
          </div>

          {/* Cluster 2: Demolition of Northern Shops for Tripartite Complex */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid rgba(124, 58, 237, 0.25)",
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
                  2. Demolition of Shops for Tripartite Commercial Hub
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#f5f3ff", color: "#6d28d9", fontWeight: 800 }}>
                Commercial Overhaul
              </span>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Key Phrasing:</strong> <em>“...the northern row of shops will be completely demolished to make way for a newly built bus station, shopping centre, and car park.”</em> Examiner tip: Grouping the three adjacent civic facilities highlights integrated multi-modal urban planning.
            </p>
          </div>

          {/* Cluster 3: Greenfield Residential Incursion into Open Countryside */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid rgba(217, 119, 6, 0.25)",
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
                  3. North-Eastern Countryside Housing Expansion
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#fffbeb", color: "#b45309", fontWeight: 800 }}>
                Greenfield Growth
              </span>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Spatial Precision:</strong> Locates the new residential development in what is currently open countryside north-east of the town centre, connected via a dedicated spur road off the dual carriageway.
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
                <Layers size={20} color="var(--apple-blue)" />
                <h4 style={{ fontSize: "1.1rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  Body Paragraph 1 Model ({body1Model?.wordCount} words)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.75rem", fontWeight: 750, background: "#f0fdf4", color: "#166534" }}>
                Transport &amp; North Zone
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

          {/* 3-Step Process Sentence Flow Blueprint */}
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
                Band 9 Comparative Architecture for Body 1
              </h4>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.85rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>1</span>
                <span><strong>Pedestrianisation &amp; Outer Bypass Loop:</strong> <em>“Regarding transport infrastructure and the northern sector, the current main road bisecting the town centre will be converted into a pedestrianised thoroughfare. To accommodate through vehicular traffic, a new dual carriageway will be constructed to circumscribe the entire urban core...”</em></span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>2</span>
                <span><strong>Demolition &amp; Replacement of Northern Shops:</strong> <em>“Furthermore, the northern row of shops will be completely demolished to make way for a newly built bus station, shopping centre, and car park.”</em></span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>3</span>
                <span><strong>Greenfield Countryside Housing:</strong> <em>“North-east of this complex, on what is currently open countryside, a new housing development will be erected with dedicated road access.”</em></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
