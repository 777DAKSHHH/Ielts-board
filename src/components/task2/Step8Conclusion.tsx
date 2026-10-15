import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Award, Clock, Sparkles, ShieldCheck, BookOpen, Layers } from "lucide-react";
import { TASK2_DATA } from "../../data/task2Data";
import { tactilePress } from "../../motion";

const CONCLUSION_VARIATIONS = [
  {
    id: "balanced",
    title: "Style 1: Standard Balanced Synthesis",
    badge: "Band 8.5–9 • Recommended",
    summary: "Reflects the recommended conclusion: financial security + mature decision-making outweigh biological limits.",
    text: "In conclusion, marrying and becoming parents later in life can enable individuals to make more informed decisions, establish financial security and provide a stable upbringing for their children. Although postponing parenthood may present certain practical and biological challenges, I believe the overall benefits of greater maturity and preparedness make this a positive development.",
    breakdown: "Sentence 1: Synthesis of informed choices, financial solvency, and stable upbringing | Sentence 2: Balanced concession to biological challenges + definitive positive judgement."
  },
  {
    id: "solution-oriented",
    title: "Style 2: Solution-Oriented Outweighed Model",
    badge: "Band 9 • Advanced Reasoning",
    summary: "Shows why biological and practical hurdles are manageable, whereas emotional/financial stability is irreplaceable.",
    text: "To conclude, while reproductive constraints and a widening generational gap are legitimate concerns, they can be substantially managed through modern healthcare and proactive family planning. Consequently, the irreplaceable advantages of emotional acuity and dual-career financial wherewithal render this societal trend predominantly positive.",
    breakdown: "Sentence 1: Explains that fertility risks and lifestyle friction are manageable via healthcare and planning | Sentence 2: Concludes that emotional and economic preparedness are irreplaceable."
  },
  {
    id: "rapid-exam",
    title: "Style 3: Rapid 2-Sentence Exam Model",
    badge: "Rapid Timing • Under 45 Words",
    summary: "Ultra-compact, high-speed conclusion ideal when running short on time in the real exam.",
    text: "In conclusion, despite the practical hurdles and fertility-related risks of postponing parenthood, I consider this a largely positive development. Greater financial wherewithal and emotional maturity enable mature couples to establish demonstrably more stable homes for their children.",
    breakdown: "Sentence 1: Rapid concession to practical/fertility risks + clear positive stance | Sentence 2: High-impact synthesis of financial solvency and emotional readiness."
  }
];

export const Step8ConclusionT2: React.FC = () => {
  const [selectedStyleIdx, setSelectedStyleIdx] = useState(0);
  const currentStyle = CONCLUSION_VARIATIONS[selectedStyleIdx];

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 08 / 09 • Sample Conclusion &amp; Outweighing Strategy
        </span>
        <h2 className="stage-title">Sample Conclusion &amp; Decisive Outweighing Strategy</h2>
        <p className="stage-subtitle">
          Band 9 Conclusion Blueprint: Acknowledge the counterpoint + Restate your decisive opinion + Summarize why the advantages overwhelmingly prevail.
        </p>
      </div>

      <div className="stage-grid-2col" style={{ overflowY: "auto" }}>
        {/* Left Column: Master Sample Conclusion & Structural Blueprint */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* Master Sample Conclusion Card */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-default)",
              borderRadius: "20px",
              padding: "24px",
              boxShadow: "var(--shadow-sm)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Award size={24} color="var(--apple-blue)" />
                <h4 style={{ fontSize: "1.24rem", fontWeight: 750, color: "var(--slate-900)" }}>
                  Sample Conclusion (Band 9 Model)
                </h4>
              </div>
              <span className="apple-badge success">
                Decisive Outweighed Stance
              </span>
            </div>

            <div
              style={{
                background: "#ffffff",
                border: "1.5px solid var(--border-default)",
                borderRadius: "16px",
                padding: "22px 24px",
                fontSize: "1.24rem",
                fontWeight: 650,
                lineHeight: 1.75,
                color: "var(--slate-900)"
              }}
            >
              {TASK2_DATA.sampleConclusion}
            </div>

            <div style={{ marginTop: "14px", display: "flex", alignItems: "center", gap: "12px", color: "var(--slate-600)", fontSize: "0.92rem", fontWeight: 600 }}>
              <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <Clock size={16} /> 54 words • 2 sentences
              </span>
              <span>•</span>
              <span>Rapid exam timing (~2.5 minutes)</span>
            </div>
          </div>

          {/* One-Liner Planning Points */}
          <div
            style={{
              background: "#eff6ff",
              border: "1.5px solid #bfdbfe",
              borderRadius: "18px",
              padding: "18px 20px",
              boxShadow: "var(--shadow-sm)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--apple-blue)", marginBottom: "8px" }}>
              <CheckCircle2 size={20} />
              <h5 style={{ fontSize: "1.05rem", fontWeight: 750, margin: 0 }}>One-Liner Planning Points</h5>
            </div>
            <ul style={{ margin: "6px 0 0", paddingLeft: "18px", fontSize: "1.02rem", color: "var(--slate-800)", lineHeight: 1.6 }}>
              <li><strong>Benefits:</strong> Financial preparedness + mature decision-making.</li>
              <li><strong>Drawback:</strong> Fewer years available for raising children and possible fertility-related concerns.</li>
              <li><strong>Judgement:</strong> Benefits generally outweigh the drawbacks.</li>
            </ul>
          </div>

          {/* 3-Step Outweighing Blueprint */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-default)",
              borderRadius: "18px",
              padding: "20px",
              boxShadow: "var(--shadow-sm)",
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Layers size={18} color="var(--apple-blue)" />
              <h5 style={{ fontSize: "1rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                The 3-Step Outweighing Conclusion Formula
              </h5>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ background: "#fff1f2", border: "1px solid #fecdd3", borderRadius: "10px", padding: "10px 14px", fontSize: "0.88rem", color: "#9f1239" }}>
                <strong>Step 1: Measured Concession Clause:</strong> Acknowledge the counterpoint without lingering (`"Although postponing parenthood may present certain practical and biological challenges..."`)
              </div>
              <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "10px", padding: "10px 14px", fontSize: "0.88rem", color: "#1e40af" }}>
                <strong>Step 2: Assertive Outweighing Opinion:</strong> Confirm that the development is positive (`"...I believe the overall benefits make this a positive development."`)
              </div>
              <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "10px", padding: "10px 14px", fontSize: "0.88rem", color: "#166534" }}>
                <strong>Step 3: Synthesis &amp; Broad Impact:</strong> Summarize why (greater maturity, informed partner choices, and financial security provide a stable upbringing).
              </div>
            </div>
          </div>

          {/* Examiner Golden Rules for Conclusions */}
          <div
            style={{
              background: "#f8fafc",
              border: "1px solid var(--border-subtle)",
              borderRadius: "16px",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <ShieldCheck size={16} color="#059669" />
              <span style={{ fontSize: "0.88rem", fontWeight: 750, color: "var(--slate-900)" }}>
                Examiner Golden Rules: Conclusion Checklist
              </span>
            </div>
            <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "0.84rem", color: "var(--slate-700)", lineHeight: 1.55 }}>
              <li><strong>Never introduce new arguments:</strong> Do not bring up new examples or statistics here.</li>
              <li><strong>Match your Introduction:</strong> If you wrote "advantages outweigh" in Step 5, you MUST conclude the same in Step 8.</li>
              <li><strong>Be decisive:</strong> Avoid saying "it has both pros and cons". Directly state which side is stronger!</li>
            </ul>
          </div>
        </div>

        {/* Right Column: 3 Interactive Smartboard Conclusion Styles */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* Switcher Strip */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-default)",
              borderRadius: "18px",
              padding: "16px",
              boxShadow: "var(--shadow-sm)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Sparkles size={18} color="var(--apple-blue)" />
                <h4 style={{ fontSize: "1.02rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  Interactive Smartboard Conclusion Variations
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.72rem" }}>
                Tap to Switch
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginBottom: "14px" }}>
              {CONCLUSION_VARIATIONS.map((style, idx) => {
                const isSelected = selectedStyleIdx === idx;
                return (
                  <motion.button
                    key={style.id}
                    whileTap={tactilePress}
                    onClick={() => setSelectedStyleIdx(idx)}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      textAlign: "left",
                      padding: "10px 12px",
                      borderRadius: "12px",
                      border: isSelected ? "2px solid #0066cc" : "1.5px solid var(--border-subtle)",
                      background: isSelected ? "#eff6ff" : "var(--slate-100)",
                      cursor: "pointer",
                      boxShadow: isSelected ? "0 4px 12px rgba(0, 102, 204, 0.12)" : "none",
                      transition: "all 0.15s ease"
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.84rem",
                        fontWeight: 800,
                        color: isSelected ? "#0066cc" : "var(--slate-600)"
                      }}
                    >
                      Option 0{idx + 1}
                    </span>
                    <span
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 750,
                        color: isSelected ? "var(--slate-900)" : "var(--slate-700)",
                        marginTop: "2px"
                      }}
                    >
                      {style.title.split(":")[1]?.trim()}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedStyleIdx}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.16 }}
                style={{
                  background: "var(--slate-50)",
                  border: "1.5px solid var(--border-default)",
                  borderRadius: "14px",
                  padding: "18px"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span className="apple-badge accent" style={{ fontSize: "0.82rem" }}>
                    {currentStyle.badge}
                  </span>
                  <span style={{ fontSize: "0.88rem", color: "var(--slate-600)", fontWeight: 600 }}>
                    {currentStyle.summary}
                  </span>
                </div>

                <div
                  style={{
                    background: "#ffffff",
                    border: "1.5px solid var(--border-subtle)",
                    borderRadius: "12px",
                    padding: "18px 20px",
                    fontSize: "1.15rem",
                    lineHeight: 1.7,
                    color: "var(--slate-900)",
                    marginBottom: "12px"
                  }}
                >
                  {currentStyle.text}
                </div>

                <div style={{ fontSize: "0.95rem", color: "var(--slate-700)", lineHeight: 1.55, background: "#ffffff", padding: "12px 14px", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
                  <CheckCircle2 size={16} color="#059669" style={{ verticalAlign: "-3px", marginRight: "6px", display: "inline" }} />
                  <strong>Structural Logic:</strong> {currentStyle.breakdown}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Outweighing Vocabulary Toolkit */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-default)",
              borderRadius: "18px",
              padding: "20px",
              boxShadow: "var(--shadow-sm)",
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <BookOpen size={18} color="var(--apple-blue)" />
              <h5 style={{ fontSize: "0.98rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                Band 9 Outweighing Signposting Toolkit
              </h5>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              <div style={{ background: "var(--slate-50)", border: "1px solid var(--border-subtle)", borderRadius: "10px", padding: "8px 12px", fontSize: "0.82rem" }}>
                <strong style={{ color: "#0066cc" }}>Concession Openers:</strong><br />
                • "Although [drawback] is undeniable..."<br />
                • "While the concerns regarding [X] are legitimate..."
              </div>
              <div style={{ background: "var(--slate-50)", border: "1px solid var(--border-subtle)", borderRadius: "10px", padding: "8px 12px", fontSize: "0.82rem" }}>
                <strong style={{ color: "#059669" }}>Outweighed Verdicts:</strong><br />
                • "...the benefits decisively outweigh the drawbacks."<br />
                • "...render this retail development predominantly advantageous."
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
