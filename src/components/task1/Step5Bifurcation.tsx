import React from "react";
import { ArrowUpRight, CheckCircle2, ArrowRight, Sun, TrendingDown, Layers } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step5Bifurcation: React.FC = () => {
  const tiers = TASK1_DATA.diagramData.trophicTiers;

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 05 / 08 • Body 1 — Trophic Hierarchy & Stored Biomass
        </span>
        <h2 className="stage-title">Ascending Energy Transfer: From Sunlight to Apex Raptors</h2>
        <p className="stage-subtitle">
          Detail the sequential energy passage across all five trophic tiers: photosynthetic primary producers generating 20,000 kcal/m²/yr, followed by consecutive tenfold reductions up to apex raptors at 2 kcal/m²/yr.
        </p>
      </div>

      <div className="stage-grid-2col">
        {/* Left Column: Trophic Tier Progression Card */}
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
            <Layers size={20} color="var(--apple-blue)" />
            <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--slate-900)" }}>
              The 5 Ascending Trophic Tiers
            </h4>
          </div>
          <p style={{ fontSize: "0.88rem", color: "var(--slate-500)", margin: 0 }}>
            Every step represents an exact 90% energy loss, meaning only 10% is incorporated into living biomass.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {tiers.map((tier) => (
              <div
                key={tier.id}
                style={{
                  background: "#ffffff",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "14px",
                  padding: "13px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  boxShadow: "var(--shadow-sm)"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="apple-badge neutral" style={{ fontSize: "0.8rem", fontWeight: 750 }}>
                    Tier {tier.tierNumber}: {tier.name}
                  </span>
                  <span
                    style={{
                      fontSize: "0.76rem",
                      fontWeight: 700,
                      padding: "3px 9px",
                      borderRadius: "6px",
                      background:
                        tier.tierNumber === 1
                          ? "rgba(22, 163, 74, 0.12)"
                          : tier.tierNumber === 5
                          ? "rgba(239, 68, 68, 0.12)"
                          : "rgba(0, 113, 227, 0.12)",
                      color:
                        tier.tierNumber === 1
                          ? "#15803d"
                          : tier.tierNumber === 5
                          ? "#b91c1c"
                          : "var(--apple-blue)"
                    }}
                  >
                    {tier.energyPercentOfBase} of Base
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.92rem", fontWeight: 700, color: "var(--slate-900)" }}>
                  <span>{tier.organisms}</span>
                  <span style={{ color: "var(--apple-blue)", fontFamily: "monospace" }}>{tier.energyKcal}</span>
                </div>

                <p style={{ fontSize: "0.83rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.4 }}>
                  {tier.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Model Paragraph & Analytical Formula */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* Band 9 Model Paragraph */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "20px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Sun size={20} color="#d97706" />
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--slate-900)" }}>
                Band 9 Model Body Paragraph 1
              </h4>
            </div>

            <div
              style={{
                background: "#ffffff",
                border: "1px solid var(--border-subtle)",
                borderRadius: "14px",
                padding: "18px",
                fontSize: "0.98rem",
                color: "var(--slate-800)",
                lineHeight: 1.65,
                boxShadow: "var(--shadow-sm)"
              }}
            >
              “In terms of upward energy transfer, the ecological pyramid commences at the base with primary producers, which harness incoming solar radiation to synthesize an initial 20,000 kcal/m²/yr of living biomass. This chemical energy is subsequently transferred to primary consumers—predominantly herbivorous insects and small rodents—which assimilate exactly 2,000 kcal/m²/yr. Moving up to the third trophic tier, secondary consumers including insectivorous birds, frogs, and small mammals register a further tenfold reduction to 200 kcal/m²/yr. This progressive decline continues through tertiary predatory snakes at 20 kcal/m²/yr, ultimately terminating at the pinnacle with quaternary apex raptors, where a minuscule 2 kcal/m²/yr is retained—representing a 99.99% overall dissipation of the foundational energy.”
            </div>
          </div>

          {/* Key Analytical Takeaways */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "18px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              boxShadow: "var(--shadow-sm)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <CheckCircle2 size={18} color="#16a34a" />
              <strong style={{ fontSize: "0.95rem", color: "var(--slate-900)" }}>
                Band 9 Body 1 Analytical Highlights
              </strong>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.86rem", color: "var(--slate-700)" }}>
                <TrendingDown size={15} color="#b91c1c" />
                <span><strong>The 10% Rule:</strong> Highlight that energy drops by an order of magnitude (tenfold / 90% loss) at every tier.</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.86rem", color: "var(--slate-700)" }}>
                <ArrowRight size={15} color="var(--apple-blue)" />
                <span><strong>Comparative Ratio:</strong> Note that apex eagles possess only 1/10,000th (0.01%) of the initial solar energy captured by vegetation.</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.86rem", color: "var(--slate-700)" }}>
                <ArrowUpRight size={15} color="#16a34a" />
                <span><strong>Organism Categorization:</strong> Explicitly mention key biological representatives (plants → insects/mice → birds/frogs → snakes → eagles).</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
