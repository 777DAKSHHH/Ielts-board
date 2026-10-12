import React from "react";
import { CheckCircle2, Activity, Droplets, Wind, CloudRain, Fish, ShieldCheck } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step5Bifurcation: React.FC = () => {
  const normalCond = TASK1_DATA.diagramData.conditions[0];
  const body1Model = TASK1_DATA.modelReport?.paragraphs.find((p) => p.id === "body1");

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 05 / 08 • Body 1 — Normal Pacific Equilibrium
        </span>
        <h2 className="stage-title">Documenting the Normal Circulation &amp; Ecological Baseline</h2>
        <p className="stage-subtitle">
          Deconstruct the baseline state: powerful westward trade winds pushing warm surface water toward Australia to fuel convective rainfall, balanced by cold, nutrient-rich upwelling off Peru that supports thriving commercial fish stocks.
        </p>
      </div>

      <div className="stage-grid-2col">
        {/* Left Column: Feature Progression Cards for Normal Conditions */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* Trade Winds & Oceanic Warm Pool */}
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
                <span
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#0284c7"
                  }}
                />
                <h4 style={{ fontSize: "1.1rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  Westward Trade Winds &amp; Warm Pool
                </h4>
                <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#e0f2fe", color: "#0369a1" }}>
                  Atmospheric Driver
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
                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#0369a1", fontWeight: 800, fontSize: "0.82rem" }}>
                  <Wind size={15} /> Trade Winds
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--slate-700)", marginTop: "4px" }}>
                  Blow strongly from east to west across the tropical Pacific.
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
                  <Droplets size={15} /> Surface Warm Pool
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--slate-700)", marginTop: "4px" }}>
                  Thick reservoir accumulates against the western basin (Australia).
                </div>
              </div>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Mechanism:</strong> {normalCond?.summary}
            </p>
          </div>

          {/* Australian Weather & Peruvian Upwelling */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid rgba(16, 185, 129, 0.3)",
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
                    background: "#059669"
                  }}
                />
                <h4 style={{ fontSize: "1.1rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  Australian Rain &amp; Peruvian Upwelling
                </h4>
                <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#d1fae5", color: "#065f46" }}>
                  Regional Impacts
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
                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#0284c7", fontWeight: 800, fontSize: "0.82rem" }}>
                  <CloudRain size={15} /> Australia Inset
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--slate-700)", marginTop: "4px" }}>
                  Convective storm clouds dump heavy rain, nurturing lush green grass.
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
                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#059669", fontWeight: 800, fontSize: "0.82rem" }}>
                  <Fish size={15} /> Peru Inset (2 Fish ⇧)
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--slate-700)", marginTop: "4px" }}>
                  Cool water &amp; rich nutrients surge upward; sunny skies &amp; booming fish.
                </div>
              </div>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Ecological Key:</strong> Cold upwelling supplies continuous nutrients, ensuring high coastal fish biomass off Peru.
            </p>
          </div>
        </div>

        {/* Right Column: Model Body Paragraph 1 Breakdown */}
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
                <Activity size={18} color="var(--apple-blue)" />
                <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  Band 9 Body 1 Model Paragraph
                </h4>
              </div>
              <span className="apple-badge accent">{body1Model?.wordCount} Words</span>
            </div>

            <div
              style={{
                background: "var(--slate-50)",
                border: "1.5px solid rgba(2, 132, 199, 0.2)",
                borderRadius: "14px",
                padding: "16px",
                fontSize: "1.02rem",
                color: "var(--slate-900)",
                lineHeight: 1.6,
                fontWeight: 650
              }}
            >
              “{body1Model?.text}”
            </div>

            {/* Paragraph Micro-Breakdown */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "4px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.85rem", color: "var(--slate-700)" }}>
                <CheckCircle2 size={16} color="#0284c7" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>
                  <strong>Sentence 1 (Wind &amp; Warm Pool):</strong> <em>“Under normal conditions, powerful trade winds blow westward from the East Pacific, pushing warm surface water to accumulate in the western basin.”</em>
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.85rem", color: "var(--slate-700)" }}>
                <CheckCircle2 size={16} color="#0284c7" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>
                  <strong>Sentence 2 (Australian Convection):</strong> <em>“This generates convective storm clouds and substantial rainfall over Australia.”</em>
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.85rem", color: "var(--slate-700)" }}>
                <CheckCircle2 size={16} color="#0284c7" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>
                  <strong>Sentence 3 (Peruvian Upwelling &amp; Fishery):</strong> <em>“Meanwhile, off the Peruvian coast, cool water laden with rich nutrients wells up from the ocean depths beneath sunny skies, fostering flourishing fish populations.”</em>
                </span>
              </div>
            </div>
          </div>

          {/* Examiner Band 9 Assessment Checklist */}
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
                Why This Satisfies Band 9 Criteria for Body 1:
              </strong>
            </div>
            <div style={{ fontSize: "0.82rem", color: "var(--slate-700)", lineHeight: 1.45 }}>
              • Complete coverage of all 4 visual cues: wind vector, warm water accumulation, Australia weather, and Peru nutrients/fish.
              <br />
              • Uses accurate collocations: <em>“accumulate in the western basin”</em>, <em>“convective storm clouds”</em>, <em>“cool water laden with rich nutrients”</em>, and <em>“fostering flourishing fish populations”</em>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
