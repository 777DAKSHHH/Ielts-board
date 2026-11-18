import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Award, Clock, Sparkles, BookOpen, Layers, Copy, Check } from "lucide-react";
import { TASK2_DATA } from "../../data/task2Data";
import { tactilePress } from "../../motion";

const CONCLUSION_VARIATIONS = [
  {
    id: "standard",
    title: "Style 1: Standard Balanced Synthesis & Recommendation",
    badge: "Band 8.5–9 • Recommended",
    summary: "Recaps clean energy and financial savings, balances them against capital costs and weather dependency, and provides a forward-looking recommendation.",
    text: "In conclusion, household solar energy presents compelling advantages by delivering clean, renewable electricity and lowering long-term domestic power bills. However, these merits are counterbalanced by the heavy initial capital investment required and the system's inherent weather dependency, suggesting that government subsidies and advancements in battery storage will remain critical for widespread residential adoption.",
    breakdown: "Sentence 1: Recaps primary advantages (clean energy & bill reduction) | Sentence 2: Recaps primary disadvantages (upfront costs & weather intermittency) + Forward-looking recommendation."
  },
  {
    id: "academic",
    title: "Style 2: Academic Analytical Synthesis & Policy Outlook",
    badge: "Band 9 • Advanced Lexicon",
    summary: "Elevated academic syntax contrasting residential decarbonisation and grid autonomy with capital barriers and intermittency constraints.",
    text: "To conclude, the proliferation of domestic photovoltaic systems yields transformative environmental and economic benefits, notably the eradication of residential greenhouse emissions and reduced reliance on centralised utilities. Nonetheless, the substantial capital outlay required for installation and the inescapable intermittency of solar radiation represent formidable constraints that necessitate continued state subsidies and technological innovation.",
    breakdown: "Sentence 1: Synthesis of ecological decarbonisation and grid autonomy | Sentence 2: Synthesis of capital barrier and intermittency with policy recommendation."
  },
  {
    id: "rapid-exam",
    title: "Style 3: Rapid 2-Sentence Exam Model",
    badge: "Rapid Timing • Under 45 Words",
    summary: "High-speed concise model balancing emissions reduction against initial setup expenses under strict exam time pressure.",
    text: "In conclusion, while household solar power drastically curbs carbon emissions and utility bills, its substantial upfront cost and reliance on sunny weather remain key obstacles. Consequently, targeted government grants and cheaper batteries will determine its long-term feasibility.",
    breakdown: "Sentence 1: Rapid 2-part trade-off synthesis | Sentence 2: Crisp conclusion with forward-looking recommendation."
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
        <h2 className="stage-title">Sample Conclusion: Sum-Up Main Points + Balanced Recommendation</h2>
        <p className="stage-subtitle">
          Mandatory Conclusion Format: <strong>Sum-up primary advantages and disadvantages + provide a balanced forward-looking perspective</strong>.
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

        {/* Right Column: Golden Rules & Formula Check */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
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
                2-Element Causes &amp; Solutions Conclusion Architecture
              </h4>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.88rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center" }}>1</span>
                <span><strong>Sum-Up Main Causes &amp; Solutions:</strong> Concisely synthesize the primary catalysts (commercial fleets and legacy shrapnel) alongside their targeted remedies (automated deorbit thrusters and active robotic removal).</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "24px", textAlign: "center" }}>2</span>
                <span><strong>Suggestion / Policy Recommendation:</strong> Provide a forward-looking international governance recommendation (e.g., ratifying a binding United Nations space sustainability treaty before orbital lanes become unusable).</span>
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
              <li><strong>Never introduce new arguments:</strong> All evidence must come from Body 1 and Body 2.</li>
              <li><strong>Ensure opinion consistency:</strong> The opinion here must match the thesis in your introduction 100%.</li>
              <li><strong>Aim for 35–45 words:</strong> Keep it concise to ensure completion within the 40-minute time limit.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
