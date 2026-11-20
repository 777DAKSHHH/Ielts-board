import React from "react";
import { CheckCircle2, TrendingUp, ShieldCheck, Sparkles, Award, Layers } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step6FlowBreakdown: React.FC = () => {
  const body1Model = TASK1_DATA.modelReport.paragraphs.find((p) => p.id === "body1");

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 06 / 08 • Body 1 — Agricultural &amp; Extraction Flow
        </span>
        <h2 className="stage-title">Deconstructing Body Paragraph 1: Field Cultivation to Raw Juice</h2>
        <p className="stage-subtitle">
          Examine the chronological and passive voice progression: opening with sugarcane cultivation in fields (12–18 months), moving to the essential dual harvest comparison (mechanised combine harvester vs manual hand sickle), and concluding with mechanical roller crushing to extract raw liquid juice.
        </p>
      </div>

      <div className="stage-grid-2col">
        {/* Left Column: 3 Analytical Process Stage Clusters */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* Cluster 1: Stage 1 Field Growing */}
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
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#16a34a" }} />
                <h4 style={{ fontSize: "1.05rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  1. Stage 1: Agricultural Cultivation (12–18 Months)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#f0fdf4", color: "#166534", fontWeight: 800 }}>
                Initial Maturation
              </span>
            </div>

            <div style={{ background: "#ffffff", borderRadius: "10px", padding: "12px", border: "1px solid var(--border-subtle)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--slate-700)" }}>
                  Field Parameters:
                </span>
                <span style={{ fontSize: "0.95rem", fontWeight: 800, color: "#16a34a" }}>
                  Sugarcane Seedlings → 12–18 Month Growth
                </span>
              </div>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Analytical Role:</strong> Establishes the initial biological phase. Sugarcanes are planted in agricultural fields and require an extended growing duration of 12 to 18 months before reaching harvestable maturity.
            </p>
          </div>

          {/* Cluster 2: Stage 2 Dual Harvesting Methods */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid rgba(5, 150, 105, 0.25)",
              borderRadius: "18px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#059669" }} />
                <h4 style={{ fontSize: "1.05rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  2. Stage 2: Dual Harvesting (Machine vs Hand Sickle)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#ecfdf5", color: "#065f46", fontWeight: 800 }}>
                Examiner Must-Report
              </span>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Key Phrasing:</strong> <em>“Once fully grown, the canes are harvested using one of two methods: either mechanically utilizing combine harvesters or manually by agricultural laborers cutting the stalks with hand blades.”</em>
            </p>
          </div>

          {/* Cluster 3: Stage 3 Mechanical Roller Crushing */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid rgba(2, 132, 199, 0.25)",
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
                <h4 style={{ fontSize: "1.05rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  3. Stage 3: Cylindrical Rollers &amp; Juice Extraction
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#f0f9ff", color: "#0369a1", fontWeight: 800 }}>
                Liquid Extraction
              </span>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Mechanical Function:</strong> Harvested stalks enter a crushing mill equipped with heavy rotating cylindrical rollers that squeeze out the raw liquid juice while discarding dry fibrous bagasse.
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
                Stages 1 to 3
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
                Band 9 Sequential Flow Blueprint for Body 1
              </h4>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.85rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>1</span>
                <span><strong>Temporal Process Opener &amp; Maturation:</strong> <em>“To begin with, sugarcanes are grown in agricultural fields over a maturation period lasting between 12 and 18 months.”</em></span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>2</span>
                <span><strong>Correlative Harvesting Comparison:</strong> <em>“Once fully grown, the canes are harvested using one of two methods: either mechanically utilizing combine harvesters or manually by agricultural laborers cutting the stalks with hand blades.”</em></span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>3</span>
                <span><strong>Mechanical Extraction Transition:</strong> <em>“Following the harvest, the raw stalks are fed through heavy rotating rollers in a crushing mill, which compress the plant material to extract raw liquid juice.”</em></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
