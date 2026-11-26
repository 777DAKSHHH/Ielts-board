import React, { useState } from "react";
import { CheckCircle2, Split, Layers, Sparkles, Compass, Car, Home, TreePine } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step5Bifurcation: React.FC = () => {
  const [selectedStrategy, setSelectedStrategy] = useState<"spatial" | "functional">("spatial");

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 05 / 08 • Spatial Grouping Strategy
        </span>
        <h2 className="stage-title">Bifurcation Tactics: How to Group Development Maps</h2>
        <p className="stage-subtitle">
          With two comparative maps depicting complex urban transformations across transport, commerce, housing, and amenities, choosing a structured two-body paragraph strategy guarantees clarity and logical geographical flow.
        </p>
      </div>

      {/* Strategy Switcher */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "8px" }}>
        <button
          onClick={() => setSelectedStrategy("spatial")}
          style={{
            flex: 1,
            padding: "14px 18px",
            borderRadius: "14px",
            border: selectedStrategy === "spatial" ? "2px solid #16a34a" : "1.5px solid var(--border-subtle)",
            background: selectedStrategy === "spatial" ? "#f0fdf4" : "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            boxShadow: selectedStrategy === "spatial" ? "var(--shadow-sm)" : "none"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Compass size={20} color={selectedStrategy === "spatial" ? "#16a34a" : "var(--slate-600)"} />
            <div style={{ textAlign: "left" }}>
              <strong style={{ fontSize: "0.95rem", color: "var(--slate-900)", display: "block" }}>
                Strategy A: Spatial Bifurcation (North vs South Zone — Recommended Band 9)
              </strong>
              <span style={{ fontSize: "0.78rem", color: "var(--slate-600)" }}>
                Body 1: Transport Bypass &amp; Northern Zone • Body 2: Southern Zone Amenities &amp; Parkland
              </span>
            </div>
          </div>
          <span className="apple-badge neutral" style={{ background: "#dcfce7", color: "#166534", fontWeight: 800 }}>
            Band 9 Recommended
          </span>
        </button>

        <button
          onClick={() => setSelectedStrategy("functional")}
          style={{
            flex: 1,
            padding: "14px 18px",
            borderRadius: "14px",
            border: selectedStrategy === "functional" ? "2px solid #ea580c" : "1.5px solid var(--border-subtle)",
            background: selectedStrategy === "functional" ? "#fff7ed" : "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            boxShadow: selectedStrategy === "functional" ? "var(--shadow-sm)" : "none"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Split size={20} color={selectedStrategy === "functional" ? "#ea580c" : "var(--slate-600)"} />
            <div style={{ textAlign: "left" }}>
              <strong style={{ fontSize: "0.95rem", color: "var(--slate-900)", display: "block" }}>
                Strategy B: Functional Grouping (Infrastructure &amp; Commerce vs Housing &amp; Recreation)
              </strong>
              <span style={{ fontSize: "0.78rem", color: "var(--slate-600)" }}>
                Body 1: Dual Carriageway, Pedestrian Mall &amp; Commercial Hub • Body 2: Housing Expansion &amp; Park Loss
              </span>
            </div>
          </div>
          <span className="apple-badge neutral" style={{ fontWeight: 700 }}>
            Alternative
          </span>
        </button>
      </div>

      {/* Selected Strategy Deep Dive Grid */}
      {selectedStrategy === "spatial" ? (
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
                <Car size={18} color="#2563eb" />
                <h4 style={{ fontSize: "1.08rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  Body 1: Transport Infrastructure &amp; Northern Zone
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ background: "#eff6ff", color: "#1e40af", fontWeight: 750 }}>
                94 Words
              </span>
            </div>

            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.5 }}>
              Groups all modifications along the northern sector: the encircling dual carriageway bypass, the pedestrianisation of the central main road, the demolition of northern shops for a transit and commercial complex, and new countryside housing.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>1. Perimeter Dual Carriageway:</strong> Circumscribes the town core, connecting eastern and western entry points to divert through-traffic.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>2. Pedestrian Thoroughfare:</strong> Central main road closed to vehicular traffic and designated &lsquo;Pedestrians only&rsquo;.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>3. Commercial Hub &amp; NE Housing:</strong> Northern shops demolished for a bus station, shopping centre, and car park; new housing erected in the countryside.
              </div>
            </div>

            <div style={{ marginTop: "auto", background: "#f8fafc", padding: "12px 14px", borderRadius: "12px", fontSize: "0.83rem", color: "#1e293b", fontStyle: "italic", borderLeft: "3px solid #2563eb" }}>
              “Regarding transport infrastructure and the northern sector, the current main road bisecting the town centre will be converted into a pedestrianised thoroughfare. To accommodate through vehicular traffic, a new dual carriageway will be constructed to circumscribe the entire urban core...”
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
                <Home size={18} color="#16a34a" />
                <h4 style={{ fontSize: "1.08rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  Body 2: Southern Sector Amenities &amp; Parkland Diminution
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ background: "#f0fdf4", color: "#166534", fontWeight: 750 }}>
                77 Words
              </span>
            </div>

            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.5 }}>
              Groups all features in the southern half: retention of the southern shop row, preservation of existing residential housing, construction of a second new housing estate, diminution of parkland, and school access reconfiguration.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>1. Southern Retail Preservation:</strong> Southern row of shops preserved intact, fronting onto the new pedestrianised walkway.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>2. SE Housing &amp; Park Reduction:</strong> New residential estate erected east of existing housing, substantially reducing the park in size.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>3. South-Western School:</strong> Building preserved, but access road reconfigured to connect directly into the southern loop of the dual carriageway.
              </div>
            </div>

            <div style={{ marginTop: "auto", background: "#f8fafc", padding: "12px 14px", borderRadius: "12px", fontSize: "0.83rem", color: "#1e293b", fontStyle: "italic", borderLeft: "3px solid #16a34a" }}>
              “Turning to the southern zone, the existing row of shops will be preserved intact alongside the residential neighborhood immediately to its south. In contrast, the south-eastern sector will undergo noticeable reconfiguration...”
            </div>
          </div>
        </div>
      ) : (
        /* Alternative Strategy: Functional Grouping */
        <div className="stage-grid-2col">
          <div style={{ background: "#ffffff", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "22px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
              Body 1: Civic &amp; Commercial Infrastructure
            </h4>
            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", lineHeight: 1.5 }}>
              Groups all transit and commercial features together: the circumscribing dual carriageway bypass, the pedestrianisation of the main road, the new bus station, shopping centre, car park, and school feeder road.
            </p>
          </div>
          <div style={{ background: "#ffffff", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "22px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
              Body 2: Residential Zones &amp; Recreational Green Space
            </h4>
            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", lineHeight: 1.5 }}>
              Groups all housing developments and natural environments: preserved southern housing, new north-east countryside housing, new south-east park housing, and the corresponding shrinkage of parkland.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
