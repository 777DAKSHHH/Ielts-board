import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Award, Clock, Sparkles, BookOpen, Layers } from "lucide-react";
import { TASK2_DATA } from "../../data/task2Data";
import { tactilePress } from "../../motion";

const CONCLUSION_VARIATIONS = [
  {
    id: "balanced",
    title: "Style 1: Standard Balanced Synthesis & Recommendation",
    badge: "Band 8.5–9 • Recommended",
    summary: "Synthesizes resilience and social mobility against psychological burnout and inborn limits, concluding with pragmatic guidance.",
    text: "In conclusion, while reassuring children that effort unlocks all doors effectively instills tenacity and fuels upward mobility, it can equally inflict crippling self-reproach and blind individuals to inevitable biological and socioeconomic constraints. It is therefore recommended that educators and guardians balance aspirational encouragement with pragmatic guidance, teaching the youth that while giving their utmost effort is commendable, recognizing personal boundaries and developing self-compassion when facing unalterable realities are equally vital for lifelong well-being.",
    breakdown: "Sentence 1: Sums up main reasons (tenacity/mobility vs self-reproach/constraints) | Sentence 2: Actionable recommendation (balance aspirational encouragement with pragmatic guidance and self-compassion)."
  },
  {
    id: "academic",
    title: "Style 2: Academic Pedagogical Recommendation",
    badge: "Band 9 • Advanced Lexicon",
    summary: "Contrasts growth mindset empowerment against the fallacy of meritocracy, recommending a dual approach of ambition and emotional support.",
    text: "To conclude, imparting the philosophy that effort guarantees accomplishment fosters an invaluable growth mindset and dismantles defeatist ceilings, yet it risks precipitating acute mental distress when structural or genetic boundaries intervene. Consequently, society ought to promote effort-based praise while concurrently cultivating emotional resilience, ensuring young people understand that unavoidable failure is not an indictment of personal worth.",
    breakdown: "Sentence 1: Recaps advantages vs disadvantages | Sentence 2: Recommends effort-based praise paired with emotional resilience."
  },
  {
    id: "rapid-exam",
    title: "Style 3: Rapid 2-Sentence Exam Model",
    badge: "Rapid Timing • Under 50 Words",
    summary: "Ultra-compact, high-speed conclusion ideal when running short on time in the real exam.",
    text: "In conclusion, although telling children they can achieve anything builds admirable grit and ambition, it can also lead to severe self-blame and unrealistic expectations. Mentors should therefore encourage diligent effort while teaching youth to accept unavoidable limitations with self-compassion.",
    breakdown: "Sentence 1: Compact recap of both sides | Sentence 2: Crisp, actionable suggestion."
  }
];

export const Step8ConclusionT2: React.FC = () => {
  const [selectedStyleIdx, setSelectedStyleIdx] = useState(0);
  const currentStyle = CONCLUSION_VARIATIONS[selectedStyleIdx];

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 08 / 09 • Sample Conclusion &amp; Recommendation
        </span>
        <h2 className="stage-title">Sample Conclusion: Sum-Up Main Reasons + Suggestion / Recommendation</h2>
        <p className="stage-subtitle">
          Mandatory Conclusion Format: <strong>Sentence 1: Sum-up all the main reasons (advantages vs disadvantages) + Sentence 2: Suggestion / Pedagogical Recommendation</strong>.
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
                <BookOpen size={22} color="var(--apple-blue)" />
                <h4 style={{ fontSize: "1.2rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  Master Conclusion (Sum-Up + Recommendation)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ background: "#ecfdf5", color: "#065f46", fontWeight: 750 }}>
                Band 9 Standard
              </span>
            </div>

            <div
              style={{
                background: "var(--slate-50)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "14px",
                padding: "20px",
                fontSize: "1.2rem",
                lineHeight: 1.75,
                color: "var(--slate-900)",
                fontWeight: 550,
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.03)"
              }}
            >
              “{TASK2_DATA.sampleConclusion}”
            </div>

            <div style={{ marginTop: "14px", display: "flex", alignItems: "center", gap: "12px", color: "var(--slate-600)", fontSize: "0.88rem", fontWeight: 600 }}>
              <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <Clock size={15} /> ~70 words
              </span>
              <span>•</span>
              <span>2 Balanced Sentences</span>
              <span>•</span>
              <span>Satisfies Format 100%</span>
            </div>
          </div>

          {/* 2-Step Structural Blueprint */}
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
              <Award size={18} color="#16a34a" />
              <h5 style={{ fontSize: "1rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                Band 9 Conclusion Blueprint (Sum-Up + Recommendation)
              </h5>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.95rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: "3px" }} />
                <span>
                  <strong>Sentence 1 (Sum-Up):</strong> Synthesizes the core advantages (grit, social mobility) against the severe disadvantages (crippling self-blame, unyielding constraints).
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: "3px" }} />
                <span>
                  <strong>Sentence 2 (Recommendation):</strong> Delivers a practical, mature pedagogical suggestion (e.g. balancing aspirational effort with pragmatic realism and self-compassion).
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Variations for Smart Board Teaching */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* Style Selector Tabs */}
          <div
            style={{
              background: "var(--slate-100)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "14px",
              padding: "4px",
              display: "flex",
              gap: "4px"
            }}
          >
            {CONCLUSION_VARIATIONS.map((style, idx) => (
              <button
                key={style.id}
                onClick={() => setSelectedStyleIdx(idx)}
                style={{
                  flex: 1,
                  padding: "8px 12px",
                  borderRadius: "10px",
                  fontSize: "0.82rem",
                  fontWeight: 750,
                  border: "none",
                  background: selectedStyleIdx === idx ? "#ffffff" : "transparent",
                  color: selectedStyleIdx === idx ? "var(--slate-900)" : "var(--slate-600)",
                  boxShadow: selectedStyleIdx === idx ? "var(--shadow-sm)" : "none",
                  cursor: "pointer",
                  transition: "all 0.15s ease"
                }}
              >
                {style.title.split(":")[0]}
              </button>
            ))}
          </div>

          {/* Active Variation Display Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStyle.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
              style={{
                background: "#ffffff",
                border: "1.5px solid var(--border-default)",
                borderRadius: "20px",
                padding: "24px",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column",
                gap: "14px"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  {currentStyle.title}
                </h4>
                <span className="apple-badge accent" style={{ fontSize: "0.76rem" }}>
                  {currentStyle.badge}
                </span>
              </div>

              <div
                style={{
                  background: "#f8fafc",
                  border: "1px solid #cbd5e1",
                  borderRadius: "14px",
                  padding: "18px 20px",
                  fontSize: "1.15rem",
                  lineHeight: 1.7,
                  color: "var(--slate-800)"
                }}
              >
                “{currentStyle.text}”
              </div>

              <div
                style={{
                  background: "#eff6ff",
                  borderRadius: "12px",
                  padding: "12px 14px",
                  fontSize: "0.9rem",
                  color: "#1e40af",
                  lineHeight: 1.5
                }}
              >
                <strong>Sentence Breakdown:</strong> {currentStyle.breakdown}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
