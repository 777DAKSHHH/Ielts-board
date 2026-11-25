import React, { useState } from "react";
import { CheckCircle2, Copy, Check, ChevronDown, ChevronUp, Layers, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

interface Step9SubmissionT2Props {
  onNavigateToNuanceLab?: () => void;
}

export const Step9SubmissionT2: React.FC<Step9SubmissionT2Props> = ({
  onNavigateToNuanceLab
}) => {
  const [copied, setCopied] = useState(false);
  const [showEssay, setShowEssay] = useState(false);

  const fullModelEssay = `In contemporary society, manufactured single-use items have become exceptionally ubiquitous across domestic and commercial sectors. While this disposable culture inflicts severe environmental degradation, notably acute landfill saturation and marine contamination, viable solutions exist, including statutory product bans, fiscal deterrents, and state subsidies for biodegradable alternatives.

To begin with, the unchecked dominance of single-use commodities triggers immense ecological crises, most notably acute landfill exhaustion and pervasive marine pollution. Because petroleum-based plastics are engineered for durability rather than biodegradability, they linger in landfills for centuries, overwhelming municipal waste management infrastructure worldwide. Furthermore, a substantial percentage of lightweight disposable containers inevitably escapes waste streams and migrates into aquatic environments. In oceans, marine wildlife routinely ingests discarded plastic fragments, suffering fatal internal blockages and starvation. Over time, these polymers fragment into toxic microplastics, which absorb industrial carcinogens and bioaccumulate through marine trophic levels, ultimately posing severe endocrine and oncological risks to human consumers.

Nevertheless, this environmental dilemma can be effectively resolved through a coordinated approach combining legislative deterrents, material innovation, and corporate accountability. Firstly, national governments must institute statutory bans on unnecessary single-use items, accompanied by substantial fiscal levies on remaining disposable packaging. As evidenced by jurisdictions like Ireland, implementing plastic taxes rapidly curtails consumer reliance on disposables by making reusable alternatives economically advantageous. Secondly, authorities should provide research subsidies and tax breaks to companies developing fully compostable materials derived from seaweed, cornstarch, or agricultural residues. Finally, enforcing stringent Extended Producer Responsibility mandates would require manufacturers to cover the full financial cost of collecting and recycling their packaging, compelling multinational corporations to transition toward sustainable, circular product designs.

In conclusion, the widespread prevalence of single-use items poses grave ecological threats, chiefly the overwhelming of municipal landfills and the pervasive contamination of aquatic ecosystems. Nevertheless, through decisive government intervention—including strict legislative bans, targeted packaging taxes, and the subsidisation of biodegradable materials—societies can effectively reverse this disposable trend and transition toward a sustainable circular economy.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullModelEssay);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="stage-card-wrapper" style={{ overflowY: "auto", maxHeight: "100%" }}>
      {/* Stage Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px", marginBottom: "14px" }}>
        <div>
          <span className="apple-badge accent" style={{ marginBottom: "6px" }}>
            Step 09 / 09 • Final Essay Structure &amp; Revision
          </span>
          <h2 className="stage-title">Essay Structure &amp; Revision Cheat Sheet</h2>
          <p className="stage-subtitle" style={{ marginBottom: 0 }}>
            Extreme concise one-liner revision checks for your Band 9 Problems and Solutions response.
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
          {onNavigateToNuanceLab && (
            <button
              type="button"
              onClick={onNavigateToNuanceLab}
              style={{
                padding: "8px 14px",
                background: "linear-gradient(135deg, #1e1b4b, #312e81)",
                color: "#ffffff",
                border: "1.5px solid #4338ca",
                borderRadius: "10px",
                fontSize: "0.82rem",
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(67, 56, 202, 0.2)",
                transition: "all 0.15s ease"
              }}
            >
              <Sparkles size={14} color="#a5b4fc" />
              <span>Nuance Lab (Below / Under / Underneath)</span>
              <span
                style={{
                  fontSize: "0.70rem",
                  background: "#4f46e5",
                  color: "#ffffff",
                  padding: "2px 6px",
                  borderRadius: "5px",
                  fontWeight: 750
                }}
              >
                Ep 01
              </span>
            </button>
          )}

          <button
            onClick={handleCopy}
            style={{
              padding: "8px 14px",
              borderRadius: "10px",
              border: "1px solid var(--border-subtle)",
              background: copied ? "#dcfce7" : "#0f172a",
              color: copied ? "#166534" : "#ffffff",
              fontSize: "0.82rem",
              fontWeight: 800,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
          >
            {copied ? <Check size={14} color="#166534" /> : <Copy size={14} />}
            <span>{copied ? "Copied Full Essay" : "Copy Complete Model Essay"}</span>
          </button>
        </div>
      </div>

      {/* SECTION 1: 4-PARAGRAPH PROBLEMS & SOLUTIONS ARCHITECTURE (STRICT ONE-LINERS) */}
      <div
        style={{
          background: "#ffffff",
          border: "1.5px solid var(--border-subtle)",
          borderRadius: "16px",
          padding: "16px 20px",
          marginBottom: "14px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px", borderBottom: "1px solid #f1f5f9", paddingBottom: "8px" }}>
          <Layers size={16} color="var(--apple-blue)" />
          <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
            4-Paragraph Problems and Solutions Architecture (One-Liner Revision)
          </h3>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {/* Intro */}
          <div style={{ background: "#faf5ff", border: "1px solid #e9d5ff", borderRadius: "10px", padding: "10px 14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 800, background: "#9333ea", color: "#ffffff", padding: "2px 7px", borderRadius: "4px" }}>
                1. INTRO
              </span>
              <strong style={{ fontSize: "0.86rem", color: "#6b21a8" }}>Paraphrase Question + Direct Problem &amp; Solution Thesis</strong>
            </div>
            <p style={{ margin: "4px 0 0", fontSize: "0.86rem", color: "#3b0764", lineHeight: 1.45 }}>
              Paraphrase the ubiquity of single-use products + introduce the dual threat (landfill saturation &amp; marine poisoning) alongside solutions (statutory bans, plastic taxes, and biodegradable subsidies).
            </p>
          </div>

          {/* Body 1 */}
          <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "10px", padding: "10px 14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 800, background: "#dc2626", color: "#ffffff", padding: "2px 7px", borderRadius: "4px" }}>
                2. BODY PARA 1 (THE PROBLEMS)
              </span>
              <strong style={{ fontSize: "0.86rem", color: "#b91c1c" }}>Landfill Exhaustion, Non-Biodegradable Persistence &amp; Marine Microplastics</strong>
            </div>
            <p style={{ margin: "4px 0 0", fontSize: "0.86rem", color: "#7f1d1d", lineHeight: 1.45 }}>
              <strong>Point:</strong> Synthetic polymers resist biodegradation for centuries → <strong>Evidence:</strong> Overwhelms municipal landfills and escapes into oceans → <strong>Impact:</strong> Ingested by marine wildlife and bioaccumulates up the food chain to humans.
            </p>
          </div>

          {/* Body 2 */}
          <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "10px", padding: "10px 14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 800, background: "#16a34a", color: "#ffffff", padding: "2px 7px", borderRadius: "4px" }}>
                3. BODY PARA 2 (THE SOLUTIONS)
              </span>
              <strong style={{ fontSize: "0.86rem", color: "#15803d" }}>Statutory Prohibitions, Plastic Taxes, Subsidies &amp; Corporate EPR</strong>
            </div>
            <p style={{ margin: "4px 0 0", fontSize: "0.86rem", color: "#14532d", lineHeight: 1.45 }}>
              <strong>Point:</strong> Legislative bans and fees swiftly alter consumer demand → <strong>Evidence:</strong> Ireland's plastic bag tax cut usage by 90% → <strong>Action:</strong> Subsidising seaweed/cornstarch packaging and enforcing Extended Producer Responsibility mandates.
            </p>
          </div>

          {/* Conclusion */}
          <div style={{ background: "#f8fafc", border: "1px solid #cbd5e1", borderRadius: "10px", padding: "10px 14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 800, background: "#0f172a", color: "#ffffff", padding: "2px 7px", borderRadius: "4px" }}>
                4. CONCLUSION
              </span>
              <strong style={{ fontSize: "0.86rem", color: "#0f172a" }}>Sum-Up Primary Problems + Reaffirm Multi-Tiered Solutions</strong>
            </div>
            <p style={{ margin: "4px 0 0", fontSize: "0.86rem", color: "#1e293b", lineHeight: 1.45 }}>
              Reiterate the dual ecological crisis of overflowing dumps and contaminated oceans, concluding that proactive bans, fiscal packaging taxes, and compostable innovation can transition society toward a circular economy.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: BAND 9 EXAMINER REVISION CHECKPOINTS (STRICT ONE-LINERS) */}
      <div
        style={{
          background: "#ffffff",
          border: "1.5px solid var(--border-subtle)",
          borderRadius: "16px",
          padding: "16px 20px",
          marginBottom: "14px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px", borderBottom: "1px solid #f1f5f9", paddingBottom: "8px" }}>
          <ShieldCheck size={16} color="#16a34a" />
          <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
            4 Band 9 Examiner Revision Checkpoints (Strict One-Liners)
          </h3>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "10px" }}>
          {[
            {
              code: "TR",
              title: "Task Response",
              color: "#2563eb",
              bg: "#eff6ff",
              rule: "Equal, fully developed coverage of both questions (problems & solutions) with logical causal chains and specific policy examples."
            },
            {
              code: "CC",
              title: "Coherence & Cohesion",
              color: "#16a34a",
              bg: "#f0fdf4",
              rule: "Seamless progression markers: 'In contemporary society... To begin with... Furthermore... Over time... Nevertheless... Firstly... Secondly... Finally... In conclusion...'."
            },
            {
              code: "LR",
              title: "Lexical Resource",
              color: "#9333ea",
              bg: "#faf5ff",
              rule: "Authentic Band 9 environmental lexis: 'ubiquitous', 'biodegradability', 'trophic levels', 'statutory bans', 'fiscal deterrent', 'extended producer responsibility'."
            },
            {
              code: "GRA",
              title: "Grammatical Accuracy",
              color: "#d97706",
              bg: "#fffbeb",
              rule: "Complex conditional and causal structures ('Because petroleum-based plastics are engineered for...', 'As evidenced by...') with flawless syntax."
            }
          ].map((chk) => (
            <div
              key={chk.code}
              style={{
                background: chk.bg,
                border: `1px solid ${chk.color}30`,
                borderRadius: "10px",
                padding: "10px 12px",
                display: "flex",
                flexDirection: "column",
                gap: "4px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ fontSize: "0.68rem", fontWeight: 800, background: chk.color, color: "#ffffff", padding: "1px 6px", borderRadius: "4px" }}>
                  {chk.code}
                </span>
                <strong style={{ fontSize: "0.84rem", color: "#0f172a" }}>{chk.title}</strong>
              </div>
              <p style={{ margin: 0, fontSize: "0.82rem", color: "#334155", lineHeight: 1.4 }}>
                {chk.rule}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: COMPACT EXPANDABLE FULL MODEL ESSAY DRAWER */}
      <div
        style={{
          background: "#ffffff",
          border: "1.5px solid var(--border-subtle)",
          borderRadius: "16px",
          padding: "14px 18px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
        }}
      >
        <button
          type="button"
          onClick={() => setShowEssay(!showEssay)}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Sparkles size={16} color="var(--apple-blue)" />
            <strong style={{ fontSize: "0.92rem", color: "#0f172a" }}>
              Complete Band 9 Model Essay (335 Words • 4-Paragraph Problems and Solutions Architecture)
            </strong>
            <span style={{ fontSize: "0.72rem", background: "#f1f5f9", color: "#475569", padding: "2px 8px", borderRadius: "6px" }}>
              {showEssay ? "Click to collapse" : "Click to view full text"}
            </span>
          </div>

          {showEssay ? <ChevronUp size={16} color="#64748b" /> : <ChevronDown size={16} color="#64748b" />}
        </button>

        {showEssay && (
          <div
            style={{
              marginTop: "12px",
              paddingTop: "12px",
              borderTop: "1px solid #f1f5f9",
              fontSize: "0.90rem",
              lineHeight: 1.65,
              color: "#1e293b",
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}
          >
            <p style={{ margin: 0 }}>
              <strong>1. Intro (Paraphrase + Direct Dual Thesis):</strong> In contemporary society, manufactured single-use items have become exceptionally ubiquitous across domestic and commercial sectors. While this disposable culture inflicts severe environmental degradation, notably acute landfill saturation and marine contamination, viable solutions exist, including statutory product bans, fiscal deterrents, and state subsidies for biodegradable alternatives.
            </p>
            <p style={{ margin: 0 }}>
              <strong>2. Body Para 1 (The Problems — Landfill Saturation &amp; Marine Toxicity):</strong> To begin with, the unchecked dominance of single-use commodities triggers immense ecological crises, most notably acute landfill exhaustion and pervasive marine pollution. Because petroleum-based plastics are engineered for durability rather than biodegradability, they linger in landfills for centuries, overwhelming municipal waste management infrastructure worldwide. Furthermore, a substantial percentage of lightweight disposable containers inevitably escapes waste streams and migrates into aquatic environments. In oceans, marine wildlife routinely ingests discarded plastic fragments, suffering fatal internal blockages and starvation. Over time, these polymers fragment into toxic microplastics, which absorb industrial carcinogens and bioaccumulate through marine trophic levels, ultimately posing severe endocrine and oncological risks to human consumers.
            </p>
            <p style={{ margin: 0 }}>
              <strong>3. Body Para 2 (The Solutions — Statutory Bans, Taxes, Subsidies &amp; EPR):</strong> Nevertheless, this environmental dilemma can be effectively resolved through a coordinated approach combining legislative deterrents, material innovation, and corporate accountability. Firstly, national governments must institute statutory bans on unnecessary single-use items, accompanied by substantial fiscal levies on remaining disposable packaging. As evidenced by jurisdictions like Ireland, implementing plastic taxes rapidly curtails consumer reliance on disposables by making reusable alternatives economically advantageous. Secondly, authorities should provide research subsidies and tax breaks to companies developing fully compostable materials derived from seaweed, cornstarch, or agricultural residues. Finally, enforcing stringent Extended Producer Responsibility mandates would require manufacturers to cover the full financial cost of collecting and recycling their packaging, compelling multinational corporations to transition toward sustainable, circular product designs.
            </p>
            <p style={{ margin: 0 }}>
              <strong>4. Conclusion (Synthesize Dilemma + Reaffirm Circular Future):</strong> In conclusion, the widespread prevalence of single-use items poses grave ecological threats, chiefly the overwhelming of municipal landfills and the pervasive contamination of aquatic ecosystems. Nevertheless, through decisive government intervention—including strict legislative bans, targeted packaging taxes, and the subsidisation of biodegradable materials—societies can effectively reverse this disposable trend and transition toward a sustainable circular economy.
            </p>
          </div>
        )}
      </div>

      {/* SECTION 4: ENGLISH NUANCE LAB EXTENSION LAUNCHPAD */}
      {onNavigateToNuanceLab && (
        <div
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
            border: "1.5px solid var(--border-subtle)",
            borderRadius: "18px",
            padding: "20px 24px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
            marginTop: "14px"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", flexWrap: "wrap", gap: "10px" }}>
            <div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a", margin: "0 0 4px" }}>
                Specialist Modules &amp; Vocabulary Series
              </h3>
              <p style={{ fontSize: "0.85rem", color: "#64748b", margin: 0 }}>
                Explore dedicated teaching modules for subtle lexical distinctions and confusing prepositions.
              </p>
            </div>
            <span style={{ fontSize: "0.76rem", fontWeight: 800, background: "#e0e7ff", color: "#3730a3", padding: "4px 10px", borderRadius: "8px" }}>
              Step 9 Teaching Extension
            </span>
          </div>

          <div
            onClick={onNavigateToNuanceLab}
            style={{
              background: "linear-gradient(135deg, #f8fafc, #eff6ff)",
              border: "1.5px solid #bfdbfe",
              borderRadius: "16px",
              padding: "20px 24px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              boxShadow: "0 2px 10px rgba(37, 99, 235, 0.06)",
              transition: "all 0.2s ease"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#dbeafe", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Sparkles size={20} color="#2563eb" />
                </div>
                <div>
                  <strong style={{ fontSize: "1.05rem", color: "#0f172a" }}>English Nuance Lab (Words Often Misunderstood)</strong>
                  <div style={{ fontSize: "0.78rem", color: "#64748b" }}>Complete 5-Episode Series • Ep 01 to Ep 05 • Affect / Effect • Comprise / Compose • Specially / Especially</div>
                </div>
              </div>
              <span style={{ fontSize: "0.74rem", background: "#dbeafe", color: "#1e40af", fontWeight: 750, padding: "3px 10px", borderRadius: "6px", border: "1px solid #bfdbfe" }}>
                5 Episodes Active
              </span>
            </div>
            <p style={{ fontSize: "0.86rem", color: "#475569", margin: "4px 0 0", lineHeight: 1.5 }}>
              Interactive SmartBoard lesson: Master classic vocabulary traps including Prepositions (Below/Under), Transitive Verbs (Rise/Raise), Influence (Affect/Effect), Part-Whole (Comprise/Compose), and Custom Purpose (Specially/Especially).
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#2563eb", fontSize: "0.88rem", fontWeight: 750, marginTop: "6px" }}>
              <span>Launch Nuance Lab Page</span>
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
