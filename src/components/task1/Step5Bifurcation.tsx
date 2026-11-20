import React, { useState } from "react";
import { CheckCircle2, Split, TrendingUp, Calendar, Layers, Sparkles, Flame, Filter } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step5Bifurcation: React.FC = () => {
  const [selectedStrategy, setSelectedStrategy] = useState<"domain" | "crystallisation">("domain");

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 05 / 08 • Structural Grouping Strategy
        </span>
        <h2 className="stage-title">Bifurcation Tactics: How to Group the 7 Sequential Stages</h2>
        <p className="stage-subtitle">
          With seven linear stages spanning from raw sugarcane field cultivation to refined crystalline sugar, choosing a logical two-body paragraph bifurcation ensures seamless coherence and cohesive flow (CC) and comprehensive reporting (TA).
        </p>
      </div>

      {/* Strategy Switcher */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "8px" }}>
        <button
          onClick={() => setSelectedStrategy("domain")}
          style={{
            flex: 1,
            padding: "14px 18px",
            borderRadius: "14px",
            border: selectedStrategy === "domain" ? "2px solid #16a34a" : "1.5px solid var(--border-subtle)",
            background: selectedStrategy === "domain" ? "#f0fdf4" : "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            boxShadow: selectedStrategy === "domain" ? "var(--shadow-sm)" : "none"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Layers size={20} color={selectedStrategy === "domain" ? "#16a34a" : "var(--slate-600)"} />
            <div style={{ textAlign: "left" }}>
              <strong style={{ fontSize: "0.95rem", color: "var(--slate-900)", display: "block" }}>
                Strategy A: Operational Domain Bifurcation (Recommended Band 9)
              </strong>
              <span style={{ fontSize: "0.78rem", color: "var(--slate-600)" }}>
                Body 1: Agricultural &amp; Extraction (Stages 1–3) • Body 2: Chemical &amp; Thermal Refining (Stages 4–7)
              </span>
            </div>
          </div>
          <span className="apple-badge neutral" style={{ background: "#dcfce7", color: "#166534", fontWeight: 800 }}>
            Band 9 Recommended
          </span>
        </button>

        <button
          onClick={() => setSelectedStrategy("crystallisation")}
          style={{
            flex: 1,
            padding: "14px 18px",
            borderRadius: "14px",
            border: selectedStrategy === "crystallisation" ? "2px solid #ea580c" : "1.5px solid var(--border-subtle)",
            background: selectedStrategy === "crystallisation" ? "#fff7ed" : "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            boxShadow: selectedStrategy === "crystallisation" ? "var(--shadow-sm)" : "none"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Flame size={20} color={selectedStrategy === "crystallisation" ? "#ea580c" : "var(--slate-600)"} />
            <div style={{ textAlign: "left" }}>
              <strong style={{ fontSize: "0.95rem", color: "var(--slate-900)", display: "block" }}>
                Strategy B: Juice Preparation vs Thermal Crystallisation (Alternative)
              </strong>
              <span style={{ fontSize: "0.78rem", color: "var(--slate-600)" }}>
                Body 1: Crop to Clarified Juice (Stages 1–4) • Body 2: Evaporation to Finished Sugar (Stages 5–7)
              </span>
            </div>
          </div>
          <span className="apple-badge neutral" style={{ fontWeight: 700 }}>
            Alternative
          </span>
        </button>
      </div>

      {/* Selected Strategy Deep Dive Grid */}
      {selectedStrategy === "domain" ? (
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
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#16a34a" }} />
                <h4 style={{ fontSize: "1.08rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  Body 1: Agricultural Cultivation &amp; Mechanical Extraction (Stages 1–3)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ background: "#f0fdf4", color: "#166534", fontWeight: 750 }}>
                71 Words
              </span>
            </div>

            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.5 }}>
              Covers field maturation over 12–18 months, the dual harvesting methods (combine machine vs manual sickle), and roller crushing to extract raw liquid juice.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>1. Stage 1 (Growing):</strong> Sugarcanes are planted and cultivated in fields over an extended maturation cycle spanning 12 to 18 months.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>2. Stage 2 (Dual Harvesting):</strong> Mature stalks are harvested either mechanically by combine vehicles or manually by laborers using hand blades.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>3. Stage 3 (Crushing):</strong> Cut stalks are compressed between rotating cylindrical rollers in a crushing mill to press out raw liquid juice.
              </div>
            </div>

            <div style={{ marginTop: "auto", background: "#f8fafc", padding: "12px 14px", borderRadius: "12px", fontSize: "0.83rem", color: "#1e293b", fontStyle: "italic", borderLeft: "3px solid #16a34a" }}>
              “To begin with, sugarcanes are grown in agricultural fields over a maturation period lasting between 12 and 18 months. Once fully grown, the canes are harvested using one of two methods: either mechanically utilizing combine harvesters or manually by agricultural laborers cutting the stalks with hand blades...”
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
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ea580c" }} />
                <h4 style={{ fontSize: "1.08rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  Body 2: Chemical &amp; Thermal Industrial Refining (Stages 4–7)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ background: "#fff7ed", color: "#9a3412", fontWeight: 750 }}>
                96 Words
              </span>
            </div>

            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.5 }}>
              Focuses on limestone purification, evaporation into thick syrup, centrifugal crystal separation, and final drying and cooling into refined dry sugar.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>4. Stage 4 (Purification):</strong> Raw extracted juice is poured through a limestone filter to eliminate impurities and solid particulates.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>5. Stage 5 (Evaporation):</strong> Clarified liquid is heated over flames in an evaporator vat, causing water to boil away and turning the juice into thick syrup.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>6. Stages 6 &amp; 7 (Centrifuge &amp; Drying):</strong> Centrifugal spin separates solid sugar crystals from liquid syrup, after which damp crystals are dried and cooled in a cylinder drum to yield finished refined sugar.
              </div>
            </div>

            <div style={{ marginTop: "auto", background: "#f8fafc", padding: "12px 14px", borderRadius: "12px", fontSize: "0.83rem", color: "#1e293b", fontStyle: "italic", borderLeft: "3px solid #ea580c" }}>
              “In the subsequent phase, the extracted juice is poured through a limestone filter in order to purify it and eliminate unwanted particulates. Thereafter, the clarified liquid is transferred to an evaporator vat where it is heated over an open heat source; during this boiling phase, water evaporates, transforming the juice into a thick syrup...”
            </div>
          </div>
        </div>
      ) : (
        /* Alternative Crystallisation Strategy */
        <div className="stage-grid-2col">
          <div style={{ background: "#ffffff", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "22px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
              Phase 1: Raw Material Preparation to Clarified Juice (Stages 1–4)
            </h4>
            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", lineHeight: 1.5 }}>
              Groups all operations related to raw sugarcane handling, harvesting (machine vs manual), mechanical roller crushing, and limestone purification before any heat is applied.
            </p>
          </div>
          <div style={{ background: "#ffffff", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "22px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
              Phase 2: Thermal Concentration to Dry Granulated Sugar (Stages 5–7)
            </h4>
            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", lineHeight: 1.5 }}>
              Covers all thermal and separation operations: boiling in the evaporator vat, high-speed centrifugal crystal separation, and final cylindrical drying and cooling drum.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
