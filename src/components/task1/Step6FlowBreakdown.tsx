import React from "react";
import { CheckCircle2, Flame, Wind, Sun, Fish, ShieldCheck, Activity } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step6FlowBreakdown: React.FC = () => {
  const elNinoCond = TASK1_DATA.diagramData.conditions[1];
  const body2Model = TASK1_DATA.modelReport?.paragraphs.find((p) => p.id === "body2");

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 06 / 08 • Body 2 — El Niño Climatic Reversal
        </span>
        <h2 className="stage-title">Deconstructing Atmospheric Reversal &amp; Ecological Disruption</h2>
        <p className="stage-subtitle">
          Analyze the systematic inversion: weakened trade winds allow warm water to surge eastwards, transferring torrential rainfall to Peru while plunging Australia into severe drought and shutting down Peruvian nutrient upwelling.
        </p>
      </div>

      <div className="stage-grid-2col">
        {/* Left Column: Feature Breakdown for El Niño */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* Weakened Trade Winds & Eastward Warm Surge */}
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
                <span
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#dc2626"
                  }}
                />
                <h4 style={{ fontSize: "1.1rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  Weakened Winds &amp; Eastward Surge
                </h4>
                <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#fee2e2", color: "#991b1b" }}>
                  Circulation Collapse
                </span>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "10px",
                  padding: "10px",
                  border: "1px solid var(--border-subtle)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#991b1b", fontWeight: 800, fontSize: "0.82rem" }}>
                  <Wind size={15} /> Weak Trade Winds
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--slate-700)", marginTop: "4px" }}>
                  Trade winds falter; upper winds blow strongly eastward over the western basin.
                </div>
              </div>
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "10px",
                  padding: "10px",
                  border: "1px solid var(--border-subtle)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#ea580c", fontWeight: 800, fontSize: "0.82rem" }}>
                  <Flame size={15} /> Eastward Warm Surge
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--slate-700)", marginTop: "4px" }}>
                  Warm water pushed eastwards, capping the ocean and depressing the thermocline.
                </div>
              </div>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Thermal Impact:</strong> {elNinoCond?.summary}
            </p>
          </div>

          {/* Australian Drought & Peruvian Fishery Crash */}
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
                <span
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#d97706"
                  }}
                />
                <h4 style={{ fontSize: "1.1rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  Australian Drought &amp; Peruvian Fishery Crash
                </h4>
                <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#fef3c7", color: "#92400e" }}>
                  Ecological Inversion
                </span>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "10px",
                  padding: "10px",
                  border: "1px solid var(--border-subtle)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#dc2626", fontWeight: 800, fontSize: "0.82rem" }}>
                  <Sun size={15} /> Australia Inset
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--slate-700)", marginTop: "4px" }}>
                  Blazing sun, desiccated terrain, zero rain, and severe drought.
                </div>
              </div>
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "10px",
                  padding: "10px",
                  border: "1px solid var(--border-subtle)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#475569", fontWeight: 800, fontSize: "0.82rem" }}>
                  <Fish size={15} /> Peru Inset (1 Fish ⇩)
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--slate-700)", marginTop: "4px" }}>
                  Heavy rain; warm surface cap blocks upwelling, starving fish stocks.
                </div>
              </div>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Nutrient Blockade:</strong> The warm blanket halts cold upwelling, producing "poor nutrients" and causing fish populations to crash precipitously.
            </p>
          </div>
        </div>

        {/* Right Column: Model Body Paragraph 2 Breakdown */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "18px",
              padding: "20px",
              boxShadow: "var(--shadow-sm)",
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Activity size={18} color="#dc2626" />
                <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  Band 9 Body 2 Model Paragraph
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ background: "#fee2e2", color: "#dc2626" }}>
                {body2Model?.wordCount} Words
              </span>
            </div>

            <div
              style={{
                background: "var(--slate-50)",
                border: "1.5px solid rgba(220, 38, 38, 0.2)",
                borderRadius: "14px",
                padding: "16px",
                fontSize: "1.02rem",
                color: "var(--slate-900)",
                lineHeight: 1.6,
                fontWeight: 650
              }}
            >
              “{body2Model?.text}”
            </div>

            {/* Paragraph Micro-Breakdown */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "4px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.85rem", color: "var(--slate-700)" }}>
                <CheckCircle2 size={16} color="#dc2626" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>
                  <strong>Sentence 1 (System Reversal):</strong> <em>“During an El Niño phase, this system undergoes a marked reversal.”</em>
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.85rem", color: "var(--slate-700)" }}>
                <CheckCircle2 size={16} color="#dc2626" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>
                  <strong>Sentence 2 (Wind Reversal):</strong> <em>“Trade winds in the East Pacific weaken, while strong upper winds blow eastwards from the West Pacific.”</em>
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.85rem", color: "var(--slate-700)" }}>
                <CheckCircle2 size={16} color="#dc2626" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>
                  <strong>Sentence 3 (Eastward Warm Surge &amp; Upwelling Suppression):</strong> <em>“As a result, warm surface water is propelled eastwards, capping the colder layers below and suppressing the upwelling of nutrients.”</em>
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.85rem", color: "var(--slate-700)" }}>
                <CheckCircle2 size={16} color="#dc2626" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>
                  <strong>Sentence 4 (Inverted Regional Impacts):</strong> <em>“Consequently, Australia suffers from scorching sun and severe drought, whereas storm clouds migrate to Peru, bringing heavy rain accompanied by a sharp decline in coastal fish stocks.”</em>
                </span>
              </div>
            </div>
          </div>

          {/* Examiner Assessment Box */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "16px",
              padding: "16px 18px",
              boxShadow: "var(--shadow-sm)",
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <ShieldCheck size={17} color="#16a34a" />
              <strong style={{ fontSize: "0.88rem", color: "var(--slate-900)" }}>
                Examiner Band 9 Highlights:
              </strong>
            </div>
            <div style={{ fontSize: "0.82rem", color: "var(--slate-700)", lineHeight: 1.45 }}>
              • Seamless cause-and-effect transitions (<em>“As a result”</em>, <em>“Consequently”</em>, <em>“whereas”</em>).
              <br />
              • Direct comparisons with Body 1 without repeating repetitive structures.
              <br />
              • Captures every single diagram detail: weakened trade winds, eastward warm water, Australia sun/drought, and Peru rain + fish stock decline.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
