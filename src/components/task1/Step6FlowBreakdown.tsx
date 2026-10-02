import React from "react";
import { Flame, Recycle, CheckCircle2, ArrowRight, RefreshCw, Zap } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step6FlowBreakdown: React.FC = () => {
  const decomposers = TASK1_DATA.diagramData.decomposerCycle;

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 06 / 08 • Body 2 — Energy Dissipation &amp; Waste Processing
        </span>
        <h2 className="stage-title">Metabolic Heat Loss &amp; Decomposer Detritus Flow</h2>
        <p className="stage-subtitle">
          Examine the two parallel processes: continuous metabolic heat dissipation expelled into the atmosphere at every tier, alongside the convergence of waste and dead matter into decomposers.
        </p>
      </div>

      <div className="stage-grid-2col">
        {/* Left Column: Heat Dissipation & Decomposer Waste Flow */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* Card 1: Metabolic Heat Loss */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "20px",
              padding: "20px 22px",
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Flame size={20} color="#ea580c" />
              <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--slate-900)" }}>
                Continuous Metabolic Heat Dissipation
              </h4>
            </div>
            <p style={{ fontSize: "0.88rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.5 }}>
              Squiggly arrows at <strong>every single trophic tier</strong> (primary producers, all 4 consumer tiers, and decomposers) indicate that chemical energy is constantly converted into thermal heat through cellular respiration and locomotion, radiating irreversibly into the atmosphere.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "2px" }}>
              {["Producers Heat", "Primary Consumers Heat", "Secondary Consumers Heat", "Tertiary Heat", "Quaternary Heat", "Decomposers Heat"].map((label) => (
                <span key={label} className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "rgba(234, 88, 12, 0.1)", color: "#c2410c", border: "1px solid rgba(234, 88, 12, 0.2)" }}>
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Decomposer Detritus Flow */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "20px",
              padding: "20px 22px",
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Recycle size={20} color="#16a34a" />
              <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--slate-900)" }}>
                Decomposers &amp; Waste Convergence
              </h4>
            </div>
            <p style={{ fontSize: "0.88rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.5 }}>
              {decomposers.description}
            </p>
            <div style={{ background: "#ffffff", borderRadius: "12px", padding: "12px", border: "1px solid var(--border-subtle)", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--slate-800)" }}>
                Detritus Flow Sequence:
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.82rem", color: "var(--slate-600)", flexWrap: "wrap" }}>
                <span className="apple-badge neutral" style={{ padding: "2px 8px" }}>Tiers 1–5 Waste &amp; Dead Matter</span>
                <ArrowRight size={13} />
                <span className="apple-badge success" style={{ padding: "2px 8px" }}>DECOMPOSERS</span>
                <ArrowRight size={13} />
                <span className="apple-badge neutral" style={{ padding: "2px 8px", background: "rgba(234, 88, 12, 0.1)", color: "#c2410c" }}>Metabolic Heat</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Model Paragraph & Analytical Highlights */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
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
              <RefreshCw size={20} color="var(--apple-blue)" />
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--slate-900)" }}>
                Band 9 Model Body Paragraph 2
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
              “In addition to upward trophic transfers, significant energy is lost across all stages via metabolic heat. Squiggly indicators demonstrate that primary producers, all four consumer levels, and decomposers continuously expel thermal energy into the atmosphere. Simultaneously, non-living organic detritus—designated as 'waste and dead matter'—is channeled into decomposers from across the pyramid, including decaying vegetation from primary producers and deceased remains from consumers. Decomposers process this biological matter, which in turn radiates further metabolic heat into the surrounding environment.”
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
                Band 9 Body 2 Analytical Highlights
              </strong>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.86rem", color: "var(--slate-700)" }}>
                <Flame size={15} color="#c2410c" />
                <span><strong>Universal Heat Loss:</strong> Note that every trophic level and decomposers all vent metabolic heat to the environment.</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.86rem", color: "var(--slate-700)" }}>
                <Zap size={15} color="#ea580c" />
                <span><strong>Convergence on Decomposers:</strong> Four colored conduits direct waste from Quaternary, Secondary, Primary consumers, and Primary producers into decomposers.</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.86rem", color: "var(--slate-700)" }}>
                <Recycle size={15} color="#16a34a" />
                <span><strong>Terminal Dissipation:</strong> Decomposers process the biological detritus and release metabolic heat.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
