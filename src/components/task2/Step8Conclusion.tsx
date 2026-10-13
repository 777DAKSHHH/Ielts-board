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
    summary: "Acknowledges the biological & demographic drawbacks and proves individual & familial resilience is far superior.",
    text: "In conclusion, although delaying marriage and childbearing until one's thirties introduces legitimate biological hurdles and demographic challenges, the societal and individual benefits are far more significant. The economic stability, homeownership readiness, and emotional maturity achieved by mature parents create enduring foundations that decisively outweigh these concerns.",
    breakdown: "Sentence 1: Concession to biological fertility limits & demographic aging | Sentence 2: Synthesis of financial solvency, career footing, and psychological maturity as outweighing factors."
  },
  {
    id: "solution-oriented",
    title: "Style 2: Solution-Oriented Outweighed Model",
    badge: "Band 9 • Advanced Reasoning",
    summary: "Shows why medical advancements and workplace policies mitigate the drawbacks, whereas emotional/financial stability is irreplaceable.",
    text: "To conclude, while reduced biological fertility and national demographic shifts are notable drawbacks, they can be substantially mitigated through modern healthcare advancements and progressive family-support policies. Consequently, the irreplaceable advantages of emotional preparedness and dual-career financial resilience render this societal evolution predominantly beneficial.",
    breakdown: "Sentence 1: Explains that fertility risks and workforce gaps can be managed via reproductive medicine and policy | Sentence 2: Concludes that emotional and economic preparedness are irreplaceable."
  },
  {
    id: "rapid-exam",
    title: "Style 3: Rapid 2-Sentence Exam Model",
    badge: "Rapid Timing • Under 45 Words",
    summary: "Ultra-compact, high-speed conclusion ideal when running short on time in the real exam.",
    text: "In conclusion, despite the biological fertility risks and wider demographic challenges associated with starting families later, I am convinced this trend is overwhelmingly positive. The financial stability and psychological maturity gained in one's thirties cultivate demonstrably healthier and more resilient family units.",
    breakdown: "Sentence 1: Rapid concession to fertility risks + clear positive stance | Sentence 2: High-impact synthesis of financial solvency and emotional readiness."
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
                <Award size={22} color="var(--apple-blue)" />
                <h4 style={{ fontSize: "1.15rem", fontWeight: 750, color: "var(--slate-900)" }}>
                  Sample Conclusion (Band 9 Model)
                </h4>
              </div>
              <span className="apple-badge success">
                Decisive Outweighed Stance
              </span>
            </div>

            <div
              style={{
                background: "var(--slate-50)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "14px",
                padding: "20px",
                fontSize: "1.06rem",
                lineHeight: 1.75,
                color: "var(--slate-800)"
              }}
            >
              {TASK2_DATA.sampleConclusion}
            </div>

            <div style={{ marginTop: "14px", display: "flex", alignItems: "center", gap: "12px", color: "var(--slate-500)", fontSize: "0.85rem" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <Clock size={15} /> 57 words • 2 sentences
              </span>
              <span>•</span>
              <span>Rapid exam timing (~2.5 minutes)</span>
            </div>
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
                <strong>Step 1: Measured Concession Clause:</strong> Acknowledge the counterpoint without lingering (`"In conclusion, although postponing marriage and childbirth introduces undeniable biological constraints and contributes to demographic aging..."`)
              </div>
              <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "10px", padding: "10px 14px", fontSize: "0.88rem", color: "#1e40af" }}>
                <strong>Step 2: Assertive Outweighing Opinion:</strong> Confirm that the development is predominantly positive (`"...I firmly believe that this is a predominantly positive development."`)
              </div>
              <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "10px", padding: "10px 14px", fontSize: "0.88rem", color: "#166534" }}>
                <strong>Step 3: Synthesis &amp; Broad Impact:</strong> Summarize why (elevated financial resilience, advanced career footing, and emotional maturity cultivate far more resilient families).
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
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        color: isSelected ? "#0066cc" : "var(--slate-600)"
                      }}
                    >
                      Option 0{idx + 1}
                    </span>
                    <span
                      style={{
                        fontSize: "0.82rem",
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
                  <span className="apple-badge accent" style={{ fontSize: "0.74rem" }}>
                    {currentStyle.badge}
                  </span>
                  <span style={{ fontSize: "0.78rem", color: "var(--slate-500)", fontWeight: 600 }}>
                    {currentStyle.summary}
                  </span>
                </div>

                <div
                  style={{
                    background: "#ffffff",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "12px",
                    padding: "16px",
                    fontSize: "0.98rem",
                    lineHeight: 1.7,
                    color: "var(--slate-900)",
                    marginBottom: "12px"
                  }}
                >
                  {currentStyle.text}
                </div>

                <div style={{ fontSize: "0.84rem", color: "var(--slate-600)", lineHeight: 1.5, background: "#ffffff", padding: "10px 12px", borderRadius: "8px", border: "1px solid var(--border-subtle)" }}>
                  <CheckCircle2 size={14} color="#059669" style={{ verticalAlign: "-2px", marginRight: "6px", display: "inline" }} />
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
