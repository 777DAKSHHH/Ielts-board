import React, { useState } from "react";
import { CheckCircle2, Split, Workflow, Boxes, Flame, Sparkles, Layers } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step5Bifurcation: React.FC = () => {
  const [selectedStrategy, setSelectedStrategy] = useState<"diagrammatic" | "functional">("diagrammatic");

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 05 / 08 • Structural Grouping Strategy
        </span>
        <h2 className="stage-title">Bifurcation Tactics: How to Group Cement &amp; Concrete Diagrams</h2>
        <p className="stage-subtitle">
          With two interrelated industrial graphics (a 5-stage linear sequence and a 4-ingredient batch mixing recipe), establishing the optimal paragraph architecture guarantees Band 9 in Coherence &amp; Cohesion (CC) and Task Achievement (TA).
        </p>
      </div>

      {/* Strategy Switcher */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "8px" }}>
        <button
          onClick={() => setSelectedStrategy("diagrammatic")}
          style={{
            flex: 1,
            padding: "14px 18px",
            borderRadius: "14px",
            border: selectedStrategy === "diagrammatic" ? "2px solid #2563eb" : "1.5px solid var(--border-subtle)",
            background: selectedStrategy === "diagrammatic" ? "#eff6ff" : "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            boxShadow: selectedStrategy === "diagrammatic" ? "var(--shadow-sm)" : "none"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Workflow size={20} color={selectedStrategy === "diagrammatic" ? "#2563eb" : "var(--slate-600)"} />
            <div style={{ textAlign: "left" }}>
              <strong style={{ fontSize: "0.95rem", color: "var(--slate-900)", display: "block" }}>
                Strategy A: Diagrammatic Bifurcation (Recommended)
              </strong>
              <span style={{ fontSize: "0.78rem", color: "var(--slate-600)" }}>
                Body 1: The 5 Cement Stages (Crushing to Bagging) • Body 2: Concrete Batch Proportions (Gravel 50%, Sand 25%, Cement 15%, Water 10%)
              </span>
            </div>
          </div>
          <span className="apple-badge neutral" style={{ background: "#dbeafe", color: "#1e40af", fontWeight: 800 }}>
            Band 9 Standard
          </span>
        </button>

        <button
          onClick={() => setSelectedStrategy("functional")}
          style={{
            flex: 1,
            padding: "14px 18px",
            borderRadius: "14px",
            border: selectedStrategy === "functional" ? "2px solid #059669" : "1.5px solid var(--border-subtle)",
            background: selectedStrategy === "functional" ? "#ecfdf5" : "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            boxShadow: selectedStrategy === "functional" ? "var(--shadow-sm)" : "none"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Layers size={20} color={selectedStrategy === "functional" ? "#059669" : "var(--slate-600)"} />
            <div style={{ textAlign: "left" }}>
              <strong style={{ fontSize: "0.95rem", color: "var(--slate-900)", display: "block" }}>
                Strategy B: Functional Prerequisite Bifurcation
              </strong>
              <span style={{ fontSize: "0.78rem", color: "var(--slate-600)" }}>
                Body 1: Thermal &amp; Mechanical Refinement of Cement • Body 2: Aggregate Binding &amp; Mechanical Concrete Agitation
              </span>
            </div>
          </div>
          <span className="apple-badge neutral" style={{ fontWeight: 700 }}>
            Alternative
          </span>
        </button>
      </div>

      {/* Selected Strategy Deep Dive Grid */}
      {selectedStrategy === "diagrammatic" ? (
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
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#2563eb" }} />
                <h4 style={{ fontSize: "1.08rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  Body 1: The 5 Stages of Cement Production
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ background: "#eff6ff", color: "#1e40af", fontWeight: 750 }}>
                76 Words
              </span>
            </div>

            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.5 }}>
              Traces the step-by-step linear transformation of raw minerals into finished bagged cement: crushing, mixing, rotating cylinder heating with direct flame, conveyor grinding, and final bagging.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>1. Raw Inputs &amp; Crushing:</strong> Limestone and clay pass through a mechanical crusher to be pulverized into fine powder.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>2. Uniform Blending:</strong> Powder enters an industrial mixer for thorough blending before thermal processing.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>3. Rotating Kiln / Heater:</strong> Substance travels down an inclined rotating cylinder while heat is applied from the base.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>4. Conveyor Grinding &amp; Bagging:</strong> Transported via conveyor belt to a grinder, milled into cement, and packed into bags.
              </div>
            </div>

            <div style={{ marginTop: "auto", background: "#f8fafc", padding: "12px 14px", borderRadius: "12px", fontSize: "0.83rem", color: "#1e293b", fontStyle: "italic", borderLeft: "3px solid #2563eb" }}>
              “Regarding the manufacture of cement, limestone and clay are initially passed through a crusher to be pulverized into a fine powder...”
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
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#059669" }} />
                <h4 style={{ fontSize: "1.08rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  Body 2: Concrete Batch Production &amp; Ratios
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ background: "#ecfdf5", color: "#065f46", fontWeight: 750 }}>
                66 Words
              </span>
            </div>

            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.5 }}>
              Details the four ingredients in descending mathematical order, establishing the structural roles of coarse aggregate, fine aggregate, cement binder, and water slurry in the rotating mixer.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>1. Coarse Aggregate (50% Gravel):</strong> Small stones constitute half of the entire concrete recipe, providing primary structural bulk.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>2. Fine Aggregate (25% Sand):</strong> Sand accounts for a quarter of the composition, filling the voids between gravel stones.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>3. Binding Agent (15% Cement):</strong> Produced in Diagram 1, cement forms 15% to bind the dry aggregates together.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>4. Hydration &amp; Mixing (10% Water):</strong> Water activates hydration as all 4 components rotate in the concrete mixer drum.
              </div>
            </div>

            <div style={{ marginTop: "auto", background: "#f8fafc", padding: "12px 14px", borderRadius: "12px", fontSize: "0.83rem", color: "#1e293b", fontStyle: "italic", borderLeft: "3px solid #059669" }}>
              “Turning to concrete production, four distinct raw materials are combined inside a cylindrical concrete mixer in precise proportions. Gravel constitutes half (50%)...”
            </div>
          </div>
        </div>
      ) : (
        /* Alternative Strategy Grid */
        <div className="stage-grid-2col">
          <div style={{ background: "#ffffff", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "22px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
              Phase 1: Raw Mineral Extraction &amp; Chemical Alteration
            </h4>
            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", lineHeight: 1.5 }}>
              Groups all thermodynamic and chemical procedures: crushing limestone and clay, blending the raw powder, and subjecting it to intense rotary kiln heating to synthesize intermediate clinker.
            </p>
          </div>
          <div style={{ background: "#ffffff", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "22px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
              Phase 2: Final Mechanical Processing &amp; Construction Blending
            </h4>
            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", lineHeight: 1.5 }}>
              Groups all final mechanical steps: grinding clinker into cement, packaging into bags, and combining the finished cement with gravel, sand, and water in the rotating mixer.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
