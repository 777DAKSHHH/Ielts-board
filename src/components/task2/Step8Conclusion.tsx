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
    summary: "Synthesizes digital banking proliferation & data breaches, followed by the financial ruin and psychological toll on victims.",
    text: "In conclusion, the alarming surge in identity theft is propelled primarily by the exponential expansion of digital commerce and systemic corporate database breaches. Consequently, innocent victims endure devastating repercussions, spanning immediate financial deprivation, ruined credit ratings, and enduring psychological trauma. Addressing this crisis necessitates both enhanced institutional cybersecurity and comprehensive victim restitution.",
    breakdown: "Sentence 1: Synthesis of primary technological & institutional causes | Sentence 2: Synthesis of victim monetary & psychological fallout | Sentence 3: Forward-looking systemic remedy."
  },
  {
    id: "academic",
    title: "Style 2: Academic Causal Synthesis",
    badge: "Band 9 • Advanced Lexicon",
    summary: "Contrasts vulnerable digital transaction infrastructure with the protracted bureaucratic ordeals and mental anguish endured by victims.",
    text: "To conclude, the escalation of financial impersonation stems undeniably from vulnerable digital transaction channels and illicit dark-web credential trafficking. In turn, individuals targeted by such cybercrimes suffer not only catastrophic monetary depletion but also profound mental anguish and protracted bureaucratic ordeals. Without stringent regulatory enforcement and proactive banking safeguards, this shadow economy will continue to thrive.",
    breakdown: "Sentence 1: Advanced synthesis of cyber infrastructure flaws & dark-web trade | Sentence 2: Vivid synthesis of economic devastation & bureaucratic trauma."
  },
  {
    id: "rapid-exam",
    title: "Style 3: Rapid 2-Sentence Exam Model",
    badge: "Rapid Timing • Under 50 Words",
    summary: "Ultra-compact, high-speed conclusion ideal when running short on time in the real exam.",
    text: "In conclusion, identity theft is burgeoning due to widespread digital transactions and corporate data leaks. For victims, the fallout is devastating, causing severe financial impoverishment, credit destruction, and long-lasting psychological anxiety.",
    breakdown: "Sentence 1: Compact synthesis of main causes | Sentence 2: Punchy recap of triple victim impact (financial, credit, emotional)."
  }
];

export const Step8ConclusionT2: React.FC = () => {
  const [selectedStyleIdx, setSelectedStyleIdx] = useState(0);
  const currentStyle = CONCLUSION_VARIATIONS[selectedStyleIdx];

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 08 / 09 • Sample Conclusion &amp; Synthesis
        </span>
        <h2 className="stage-title">Sample Conclusion: Sum-Up Main Ideas (Causes &amp; Effects)</h2>
        <p className="stage-subtitle">
          Mandatory Conclusion Format: <strong>Sum-up all the main ideas + synthesize causes and effects</strong>. Reiterate digital banking and corporate security lapses as key drivers in sentence 1, and synthesize the financial and psychological toll on victims in sentence 2.
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
                Cause &amp; Effect Synthesis
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
              <li><strong>Causes:</strong> Proliferation of digital transactions + corporate database breaches exfiltrating credentials.</li>
              <li><strong>Victim Effects:</strong> Immediate financial impoverishment + enduring psychological trauma and bureaucratic credit battles.</li>
              <li><strong>Synthesis:</strong> Demands robust institutional cyber defense paired with rapid victim restitution protocols.</li>
            </ul>
          </div>

          {/* 3-Step Cause-and-Effect Blueprint */}
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
                The 3-Step Cause &amp; Effect Conclusion Formula
              </h5>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: "10px", padding: "10px 14px", fontSize: "0.88rem", color: "#92400e" }}>
                <strong>Step 1: Direct Synthesis Opener:</strong> Signal conclusion and summarize root causes (`"In conclusion, the alarming escalation in identity theft is propelled primarily by..."`)
              </div>
              <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "10px", padding: "10px 14px", fontSize: "0.88rem", color: "#991b1b" }}>
                <strong>Step 2: Recap of Victim Toll:</strong> Summarize dual economic and psychological damage (`"...inflicting acute monetary loss, ruined credit ratings, and prolonged psychological distress."`)
              </div>
              <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "10px", padding: "10px 14px", fontSize: "0.88rem", color: "#166534" }}>
                <strong>Step 3: Forward-Looking Perspective:</strong> Emphasize institutional safeguards &amp; restitution (`"Stemming this crime demands rigorous cybersecurity alongside expedited legal support for victims."`)
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
              <li><strong>Never introduce new causes or effects:</strong> Restrict synthesis strictly to points developed in Body 1 and Body 2.</li>
              <li><strong>Match your Introduction:</strong> The causes and victim fallout previewed in Step 5 must be mirrored faithfully here.</li>
              <li><strong>Maintain balanced weight:</strong> Do not omit the victim effects in favor of causes; both parts of the question must be concluded.</li>
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

          {/* Cause-and-Effect Signposting Toolkit */}
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
                Band 9 Cause &amp; Effect Signposting Toolkit
              </h5>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              <div style={{ background: "var(--slate-50)", border: "1px solid var(--border-subtle)", borderRadius: "10px", padding: "8px 12px", fontSize: "0.82rem" }}>
                <strong style={{ color: "#0066cc" }}>Causal Summary Openers:</strong><br />
                • "In conclusion, the surge in identity theft is propelled primarily by..."<br />
                • "To conclude, the escalation in cyber fraud stems undeniably from..."
              </div>
              <div style={{ background: "var(--slate-50)", border: "1px solid var(--border-subtle)", borderRadius: "10px", padding: "8px 12px", fontSize: "0.82rem" }}>
                <strong style={{ color: "#dc2626" }}>Victim Toll Signposts:</strong><br />
                • "...leaving victims to bear the brunt of severe financial depletion..."<br />
                • "...inflicting lasting psychological trauma alongside protracted administrative battles."
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
