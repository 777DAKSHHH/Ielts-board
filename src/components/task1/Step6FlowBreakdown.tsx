import React from "react";
import { Factory, Trophy, CheckCircle2, ArrowRight } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step6FlowBreakdown: React.FC = () => {
  const rightAndLower = TASK1_DATA.mapData.rightAndLowerZone;

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 06 / 08 • Body 2 — Right-Hand & Lower Sectors
        </span>
        <h2 className="stage-title">Commercial, Leisure & Industrial Shift</h2>
        <p className="stage-subtitle">
          Examine the right-hand and lower sections relative to the city centre: the industrial factory replaced by a high-tech software company, the cinema converted into a pub, and a new football stadium.
        </p>
      </div>

      <div className="stage-grid-2col">
        {/* Right-Hand Sector Card */}
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
              <Factory size={20} color="#b91c1c" />
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--slate-900)" }}>
                Right-Hand Sector (Industrial to Tech Shift)
              </h4>
            </div>
            <p style={{ fontSize: "0.88rem", color: "var(--slate-500)", margin: 0 }}>
              Complete demolition of heavy manufacturing in favour of modern corporate technology towers.
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
                  To the Right of City Centre
                </span>
                <span
                  style={{
                    fontSize: "0.76rem",
                    fontWeight: 700,
                    padding: "3px 9px",
                    borderRadius: "6px",
                    background: "rgba(220, 38, 38, 0.12)",
                    color: "#b91c1c"
                  }}
                >
                  DEMOLISHED & REPLACED
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.95rem", fontWeight: 700 }}>
                <span style={{ color: "#b91c1c" }}>2002: Factory (Smokestack)</span>
                <ArrowRight size={14} color="var(--slate-400)" />
                <span style={{ color: "var(--apple-blue)" }}>Today: Software Company</span>
              </div>
              <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
                The polluting manufacturing plant to the right of the city centre was completely torn down, replaced by modern multi-storey office towers accommodating a software firm.
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
              <strong style={{ fontSize: "0.95rem", color: "var(--slate-900)" }}>Body Paragraph 2 Model Draft</strong>
            </div>
            <p style={{ fontSize: "0.88rem", color: "var(--slate-700)", lineHeight: 1.55, margin: 0 }}>
              “Turning to the remaining areas, the factory to the right of the city centre was demolished and replaced by modern software company offices. Directly below the central core, the old cinema building was converted into a pub, while the trees in the bottom-left corner were cleared to make way for a football stadium. The bottom-right woodland and the central city centre itself remained untouched throughout the period.”
            </p>
          </div>
        </div>

        {/* Lower Sector Card */}
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
            <Trophy size={20} color="#059669" />
            <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--slate-900)" }}>
              Lower Sectors (Leisure & Conversion)
            </h4>
          </div>
          <p style={{ fontSize: "0.88rem", color: "var(--slate-500)", margin: 0 }}>
            Adaptive reuse of cultural amenities and introduction of sports infrastructure.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {rightAndLower.slice(1).map((item) => (
              <div
                key={item.location}
                style={{
                  background: "#ffffff",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "14px",
                  padding: "12px 14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="apple-badge neutral" style={{ fontSize: "0.78rem", fontWeight: 700 }}>
                    {item.location}
                  </span>
                  <span
                    style={{
                      fontSize: "0.74rem",
                      fontWeight: 700,
                      padding: "2px 8px",
                      borderRadius: "6px",
                      background:
                        item.changeType === "repurposed"
                          ? "rgba(147, 51, 234, 0.12)"
                          : item.changeType === "constructed"
                          ? "rgba(37, 99, 235, 0.12)"
                          : "rgba(16, 185, 129, 0.12)",
                      color:
                        item.changeType === "repurposed"
                          ? "#7e22ce"
                          : item.changeType === "constructed"
                          ? "var(--apple-blue)"
                          : "#047857"
                    }}
                  >
                    {item.changeType === "repurposed"
                      ? "CONVERTED"
                      : item.changeType === "constructed"
                      ? "NEW FACILITY"
                      : "PRESERVED"}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem", fontWeight: 650, color: "var(--slate-800)" }}>
                  <span>2002: {item.in2002}</span>
                  <ArrowRight size={13} color="var(--slate-400)" />
                  <span style={{ color: item.changeType === "repurposed" ? "#7e22ce" : item.changeType === "constructed" ? "var(--apple-blue)" : "inherit" }}>
                    Today: {item.today}
                  </span>
                </div>
                <p style={{ fontSize: "0.82rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.35 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
