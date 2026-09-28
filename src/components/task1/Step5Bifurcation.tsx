import React from "react";
import { Building, Train, CheckCircle2, ArrowRight } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step5Bifurcation: React.FC = () => {
  const leftAndUpper = TASK1_DATA.mapData.leftAndUpperZone;

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 05 / 08 • Body 1 — Left-Hand & Upper Sectors
        </span>
        <h2 className="stage-title">Housing, Transit & Preserved Amenities</h2>
        <p className="stage-subtitle">
          Detail the developments situated to the left of and directly above the central city centre: woodland cleared for residential apartments in the top-left, a new railway station constructed on the left flank, alongside the preserved shopping centre and top-right trees.
        </p>
      </div>

      <div className="stage-grid-2col">
        {/* Upper Sector Card */}
        <div
          style={{
            background: "var(--slate-50)",
            border: "1.5px solid var(--border-subtle)",
            borderRadius: "20px",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "14px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Building size={20} color="var(--apple-blue)" />
            <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--slate-900)" }}>
              Upper Sectors (Residential & Retail)
            </h4>
          </div>
          <p style={{ fontSize: "0.88rem", color: "var(--slate-500)", margin: 0 }}>
            Woodland cleared for high-density housing in the top-left, while commercial shopping directly above the centre and top-right trees remained unchanged.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {leftAndUpper.slice(0, 3).map((item) => (
              <div
                key={item.location}
                style={{
                  background: "#ffffff",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "14px",
                  padding: "14px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="apple-badge neutral" style={{ fontSize: "0.8rem", fontWeight: 700 }}>
                    {item.location}
                  </span>
                  <span
                    style={{
                      fontSize: "0.76rem",
                      fontWeight: 700,
                      padding: "3px 9px",
                      borderRadius: "6px",
                      background:
                        item.changeType === "constructed"
                          ? "rgba(37, 99, 235, 0.12)"
                          : "rgba(16, 185, 129, 0.12)",
                      color: item.changeType === "constructed" ? "var(--apple-blue)" : "#047857"
                    }}
                  >
                    {item.changeType === "constructed" ? "NEW HOUSING" : "PRESERVED"}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.92rem", fontWeight: 650, color: "var(--slate-800)" }}>
                  <span>2002: {item.in2002}</span>
                  <ArrowRight size={14} color="var(--slate-400)" />
                  <span style={{ color: item.changeType === "constructed" ? "var(--apple-blue)" : "inherit" }}>
                    Today: {item.today}
                  </span>
                </div>
                <p style={{ fontSize: "0.84rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.4 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Left Flank Sector Card & Model Sentence */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "20px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "14px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Train size={20} color="#0284c7" />
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--slate-900)" }}>
                Left Flank (Transit Infrastructure)
              </h4>
            </div>
            <p style={{ fontSize: "0.88rem", color: "var(--slate-500)", margin: 0 }}>
              Direct integration of rail transportation to serve the expanding town population.
            </p>

            <div
              style={{
                background: "#ffffff",
                border: "1px solid var(--border-subtle)",
                borderRadius: "14px",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="apple-badge neutral" style={{ fontSize: "0.8rem", fontWeight: 700 }}>
                  To the Left of City Centre
                </span>
                <span className="apple-badge success" style={{ fontSize: "0.76rem" }}>
                  NEW INFRASTRUCTURE
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.95rem", fontWeight: 700, color: "var(--slate-900)" }}>
                <span style={{ color: "var(--slate-500)" }}>2002: Open Land</span>
                <ArrowRight size={14} color="var(--slate-400)" />
                <span style={{ color: "#0284c7" }}>Today: New Train Station</span>
              </div>
              <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
                An arched railway station was erected on open ground directly to the left of the city centre, granting local residents direct access to rail transit.
              </p>
            </div>
          </div>

          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "18px",
              padding: "18px 20px",
              boxShadow: "var(--shadow-sm)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <CheckCircle2 size={17} color="#16a34a" />
              <strong style={{ fontSize: "0.95rem", color: "var(--slate-900)" }}>Body Paragraph 1 Model Draft</strong>
            </div>
            <p style={{ fontSize: "0.88rem", color: "var(--slate-700)", lineHeight: 1.55, margin: 0 }}>
              “Looking first at the left-hand and upper sections relative to the city centre, the trees in the top-left corner were cleared to make way for a block of new apartments. Directly beneath this, on the left flank of the central area, a new train station was constructed on previously open land. By contrast, the shopping centre situated directly above the city centre remained unchanged, as did the wooded area in the top-right corner.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
