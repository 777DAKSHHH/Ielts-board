import React, { useState } from "react";
import { CheckCircle2, Award, Copy, Check } from "lucide-react";

const CONCLUSION_VARIATIONS = [
  {
    id: "standard",
    title: "Style 1: Official Sample Conclusion (43 Words)",
    badge: "Band 9 • Exact Curriculum Model",
    summary: "Restates the problems (environmental contamination + strain on infrastructure) and restates the solutions (charges/taxes + reusables + corporate accountability).",
    text: "In conclusion, the proliferation of single-use goods has led to widespread environmental contamination and placed severe pressure on waste infrastructure. However, this issue can be mitigated through targeted charges, support for reusable products and corporate accountability for packaging waste.",
    breakdown: "Sentence 1 — Restate the problems: Environmental contamination + strain on infrastructure | Sentence 2 — Restate the solutions: Charges/taxes + promotion of reusables + corporate accountability"
  },
  {
    id: "academic",
    title: "Style 2: Academic Analytical Synthesis & Circular Reform",
    badge: "Band 9 • Advanced Lexicon",
    summary: "Elevated academic syntax contrasting transient disposable convenience with irreversible ecological degradation, highlighting corporate EPR and material science.",
    text: "To conclude, while disposable commodities afford fleeting consumer convenience, their unchecked proliferation inflicts profound biosphere degradation through persistent solid waste accumulation and toxic marine bioaccumulation. Resolving this crisis necessitates systemic regulatory reform, namely statutory prohibitions on non-essential polymers alongside the strict enforcement of Extended Producer Responsibility to mandate corporate circularity.",
    breakdown: "Sentence 1: Philosophical contrast between convenience and biosphere damage | Sentence 2: High-level policy mandate combining prohibitions and Extended Producer Responsibility."
  },
  {
    id: "rapid-exam",
    title: "Style 3: Rapid 2-Sentence Exam Model",
    badge: "Rapid Timing • Under 45 Words",
    summary: "High-speed concise model balancing pollution problems against legislative and material solutions under strict exam time pressure.",
    text: "In conclusion, single-use products severely pollute landfills and oceans with non-biodegradable waste. To solve this dilemma, governments must ban unnecessary plastics, impose packaging taxes, and support compostable alternatives.",
    breakdown: "Sentence 1: Rapid 2-part problem synthesis | Sentence 2: Crisp conclusion with 3 actionable policy solutions."
  }
];

export const Step8ConclusionT2: React.FC = () => {
  const [selectedStyleIdx, setSelectedStyleIdx] = useState(0);
  const [copied, setCopied] = useState(false);
  const currentStyle = CONCLUSION_VARIATIONS[selectedStyleIdx];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentStyle.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 08 / 09 • Sample Conclusion &amp; Synthesis
        </span>
        <h2 className="stage-title">Sample Conclusion: Sum-Up Problems + Reaffirm Solutions</h2>
        <p className="stage-subtitle">
          Mandatory Conclusion Format: <strong>Synthesize core problems (landfills &amp; oceans) + reiterate actionable solutions (charges, reusables, corporate accountability)</strong>.
        </p>
      </div>

      <div className="stage-grid-2col" style={{ overflowY: "auto" }}>
        {/* Left Column: Style Switcher & Selected Model */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* Style Selector Tabs */}
          <div style={{ display: "flex", gap: "8px", background: "var(--slate-50)", padding: "4px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
            {CONCLUSION_VARIATIONS.map((style, idx) => (
              <button
                key={style.id}
                type="button"
                onClick={() => setSelectedStyleIdx(idx)}
                style={{
                  flex: 1,
                  padding: "8px 12px",
                  borderRadius: "8px",
                  border: "none",
                  background: selectedStyleIdx === idx ? "#ffffff" : "transparent",
                  color: selectedStyleIdx === idx ? "var(--slate-900)" : "var(--slate-600)",
                  fontWeight: selectedStyleIdx === idx ? 800 : 600,
                  fontSize: "0.82rem",
                  boxShadow: selectedStyleIdx === idx ? "var(--shadow-sm)" : "none",
                  cursor: "pointer",
                  transition: "all 0.15s ease"
                }}
              >
                {style.title.split(":")[0]}
              </button>
            ))}
          </div>

          {/* Active Conclusion Card */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-default)",
              borderRadius: "20px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              boxShadow: "var(--shadow-sm)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
              <div>
                <span className="apple-badge success" style={{ fontSize: "0.74rem", padding: "2px 8px" }}>
                  {currentStyle.badge}
                </span>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--slate-900)", margin: "4px 0 0" }}>
                  {currentStyle.title}
                </h4>
              </div>

              <button
                onClick={handleCopy}
                style={{
                  border: "1px solid var(--border-subtle)",
                  background: copied ? "#dcfce7" : "#ffffff",
                  padding: "5px 12px",
                  borderRadius: "8px",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: copied ? "#166534" : "var(--slate-700)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px"
                }}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? "Copied" : "Copy Conclusion"}</span>
              </button>
            </div>

            <p style={{ margin: 0, fontSize: "0.84rem", color: "var(--slate-500)", lineHeight: 1.45 }}>
              {currentStyle.summary}
            </p>

            {/* Model Text */}
            <div
              style={{
                background: "#f8fafc",
                border: "1.5px solid #cbd5e1",
                borderRadius: "14px",
                padding: "18px 20px",
                fontSize: "1.1rem",
                lineHeight: 1.65,
                fontWeight: 650,
                color: "var(--slate-900)"
              }}
            >
              “{currentStyle.text}”
            </div>

            {/* Breakdown Note */}
            <div
              style={{
                background: "#eff6ff",
                border: "1px solid #bfdbfe",
                borderRadius: "10px",
                padding: "10px 14px",
                fontSize: "0.84rem",
                color: "#1e40af",
                lineHeight: 1.5
              }}
            >
              <strong>Structural Breakdown:</strong> {currentStyle.breakdown}
            </div>
          </div>
        </div>

        {/* Right Column: Golden Rules & Teaching Recommendation */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {/* Teaching Recommendation Card */}
          <div
            style={{
              background: "#eff6ff",
              border: "1.5px solid #bfdbfe",
              borderRadius: "18px",
              padding: "18px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Award size={18} color="#2563eb" />
              <h4 style={{ fontSize: "0.96rem", fontWeight: 800, color: "#1e3a8a", margin: 0 }}>
                Faculty Teaching Recommendation
              </h4>
            </div>
            <p style={{ margin: 0, fontSize: "0.85rem", color: "#1e40af", lineHeight: 1.5 }}>
              Encourage students to focus on:
            </p>
            <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "0.85rem", color: "#1e40af", lineHeight: 1.5 }}>
              <li><strong>2 clear problems in Body 1</strong></li>
              <li><strong>2 well-developed solutions in Body 2</strong></li>
            </ul>
            <p style={{ margin: "4px 0 0", fontSize: "0.82rem", color: "#2563eb", fontStyle: "italic" }}>
              ✦ This ensures depth and fully elaborated causal chains rather than superficial listing.
            </p>
          </div>

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
              <Award size={18} color="var(--apple-blue)" />
              <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                2-Element Problems &amp; Solutions Conclusion Architecture
              </h4>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.88rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center" }}>1</span>
                <span><strong>Sentence 1 — Restate Problems:</strong> Environmental contamination + strain on infrastructure.</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center" }}>2</span>
                <span><strong>Sentence 2 — Restate Solutions:</strong> Targeted charges/taxes + promotion of reusables + corporate accountability.</span>
              </div>
            </div>
          </div>

          <div
            style={{
              background: "#f0fdf4",
              border: "1.5px solid #bbf7d0",
              borderRadius: "18px",
              padding: "18px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <CheckCircle2 size={18} color="#16a34a" />
              <h4 style={{ fontSize: "0.96rem", fontWeight: 800, color: "#166534", margin: 0 }}>
                Examiner Golden Rules for Conclusions
              </h4>
            </div>
            <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "0.86rem", color: "#14532d", lineHeight: 1.55 }}>
              <li><strong>Never introduce new arguments:</strong> All ideas must directly reflect points developed in Body 1 and Body 2.</li>
              <li><strong>Balance both dimensions:</strong> Address both problems and solutions in the summary rather than only one.</li>
              <li><strong>Aim for 40–55 words:</strong> Keep it concise to ensure completion within the 40-minute time limit.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
