import React from "react";
import { CheckCircle2, Workflow, Flame, ShieldCheck, Sparkles, Award } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step6FlowBreakdown: React.FC = () => {
  const body1Model = TASK1_DATA.modelReport.paragraphs.find((p) => p.id === "body1");

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 06 / 08 • Body 1 — Cement Manufacturing Pipeline
        </span>
        <h2 className="stage-title">Deconstructing Body Paragraph 1: The 5 Stages of Cement Production</h2>
        <p className="stage-subtitle">
          Examine the stage-by-stage mechanical breakdown: crushing limestone and clay into powder, mechanical blending, heating in an inclined rotating cylinder, conveyor milling, and commercial bagging.
        </p>
      </div>

      <div className="stage-grid-2col">
        {/* Left Column: 4 Key Stages of Cement Production */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* Stage 1: Crushing */}
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
                  1. Raw Mineral Crushing: Limestone &amp; Clay
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.72rem" }}>
                Equipment: Crusher
              </span>
            </div>

            <div style={{ background: "#ffffff", borderRadius: "10px", padding: "12px", border: "1px solid var(--border-subtle)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--slate-700)" }}>
                  Mechanical Action:
                </span>
                <span style={{ fontSize: "0.95rem", fontWeight: 800, color: "#2563eb" }}>
                  Limestone + Clay → Powder
                </span>
              </div>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Analytical Role:</strong> Opens the report with the initial raw mineral extraction. Both solids pass through a mechanical crusher to be pulverized into a fine dry powder.
            </p>
          </div>

          {/* Stage 2: Blending in Mixer */}
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
                <h4 style={{ fontSize: "1.05rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  2. Industrial Blending Chamber
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#f0f9ff", color: "#0369a1" }}>
                Equipment: Mixer
              </span>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Key Phrasing:</strong> <em>“This powdered mixture is then fed into an industrial mixer to achieve a uniform blend...”</em> Ensures homogeneous consistency before thermal treatment.
            </p>
          </div>

          {/* Stage 3: Rotating Kiln & High Heat */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid rgba(234, 88, 12, 0.3)",
              borderRadius: "18px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ea580c" }} />
                <h4 style={{ fontSize: "1.05rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  3. Thermal Processing: Rotating Heater
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#fff7ed", color: "#c2410c" }}>
                Equipment: Rotating Kiln + Heat
              </span>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Crucial Visual Detail:</strong> The heater is an <strong>inclined cylinder</strong> rotating continuously while heat is applied directly from the lower end, synthesizing intermediate clinker.
            </p>
          </div>

          {/* Stage 4 & 5: Conveyor Grinder & Bagging */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid rgba(5, 150, 105, 0.3)",
              borderRadius: "18px",
              padding: "16px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <div>
              <h4 style={{ fontSize: "0.95rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                4 &amp; 5. Conveyor Grinding &amp; Final Packaging
              </h4>
              <p style={{ fontSize: "0.8rem", color: "var(--slate-600)", margin: "4px 0 0 0" }}>
                Transported via conveyor belt to a grinder, milled into cement, and packed into bags.
              </p>
            </div>
            <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#059669", background: "#dcfce7", padding: "4px 8px", borderRadius: "6px" }}>
              Bags Ready
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
                <Workflow size={20} color="var(--apple-blue)" />
                <h4 style={{ fontSize: "1.1rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  Body Paragraph 1 Model ({body1Model?.wordCount} words)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.75rem", fontWeight: 750 }}>
                Cement Sequence
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
                Band 9 Process Sentence Flow Blueprint
              </h4>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.85rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>1</span>
                <span><strong>Opening Process Signal:</strong> <em>“Regarding the manufacture of cement, limestone and clay are initially passed through a crusher to be pulverized into a fine powder.”</em></span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>2</span>
                <span><strong>Sequential Link &amp; Blending:</strong> <em>“This powdered mixture is then fed into an industrial mixer to achieve a uniform blend before entering an elongated, rotating cylinder heater.”</em></span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>3</span>
                <span><strong>Thermal Detail &amp; Heat Direction:</strong> <em>“In this chamber, the substance is subjected to intense heat applied from the lower end as the drum continuously revolves.”</em></span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>4</span>
                <span><strong>Participial Clause &amp; Packaging:</strong> <em>“After being heated, the resulting mixture is transported along a conveyor belt to a grinder, where it is milled into fine cement. Finally, the finished product is poured into heavy-duty bags...”</em></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
