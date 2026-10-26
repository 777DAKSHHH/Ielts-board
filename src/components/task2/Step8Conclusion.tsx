import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Award, Clock, Sparkles, BookOpen, Layers } from "lucide-react";
import { TASK2_DATA } from "../../data/task2Data";
import { tactilePress } from "../../motion";

const CONCLUSION_VARIATIONS = [
  {
    id: "balanced",
    title: "Style 1: Standard Balanced Synthesis",
    badge: "Band 8.5–9 • Recommended",
    summary: "Synthesizes archival survivorship bias against physical path dependency and cyclical human psychology.",
    text: "In conclusion, although the elitist bias of historical archives and the novel scale of modern society lead some to dismiss the past, history remains an indispensable guide. Understanding the physical foundations of our cities and the cyclical nature of human psychology is essential for interpreting the present and making defensible decisions.",
    breakdown: "Sentence 1: Summarizes View 1 (survivorship bias & megacity scale) | Sentence 2: Synthesizes View 2 (physical path dependency & cyclical market psychology) and restates personal stance."
  },
  {
    id: "academic",
    title: "Style 2: Academic Causal Synthesis",
    badge: "Band 9 • Advanced Lexicon",
    summary: "Contrasts the trap of fighting the last war with enduring epidemiological playbooks and Roman infrastructure foundations.",
    text: "To conclude, while ancient chronicles ignore ordinary citizens and prepare leaders for yesterday's battles, modern infrastructure and human psychology remain deeply anchored in the past. Therefore, analyzing historical roadmaps and epidemiological playbooks provides contemporary society with an essential compass to navigate future crises.",
    breakdown: "Sentence 1: Contrasts past-crisis blindspots with physical and psychological continuity | Sentence 2: Restates defensible opinion with academic precision."
  },
  {
    id: "rapid-exam",
    title: "Style 3: Rapid 2-Sentence Exam Model",
    badge: "Rapid Timing • Under 45 Words",
    summary: "Ultra-compact, high-speed conclusion ideal when running short on time in the real exam.",
    text: "In conclusion, despite the limitations of ancient records, studying the past remains vital. From modern highway routes to market crash psychology, history provides the essential blueprint needed to understand today's world.",
    breakdown: "Sentence 1: Compact recap of prompt tension | Sentence 2: Crisp, concrete restatement of personal opinion."
  }
];

export const Step8ConclusionT2: React.FC = () => {
  const [selectedStyleIdx, setSelectedStyleIdx] = useState(0);
  const currentStyle = CONCLUSION_VARIATIONS[selectedStyleIdx];

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 08 / 09 • Sample Conclusion &amp; Restatement
        </span>
        <h2 className="stage-title">Sample Conclusion: Sum-Up Main Points + Restate Opinion</h2>
        <p className="stage-subtitle">
          Mandatory Conclusion Format: <strong>Sum-up all the main points + restate the opinion</strong>. Acknowledge why some consider history outdated in sentence 1, and synthesize the enduring relevance of past lessons to confirm your opinion in sentence 2.
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
                Sum-Up + Restate Opinion
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
                <Clock size={16} /> ~50 words • 2 sentences
              </span>
              <span>•</span>
              <span>Rapid exam timing (~2-2.5 minutes)</span>
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
              <li><strong>View 1 Recap:</strong> Survivorship bias in ancient chronicles and the strategic trap of fighting yesterday's battles.</li>
              <li><strong>View 2 Recap:</strong> Physical path dependency of Roman roads and recurring psychology in market manias and pandemics.</li>
              <li><strong>Opinion Restatement:</strong> Studying the past provides an indispensable blueprint to navigate recurring human patterns.</li>
            </ul>
          </div>

          {/* 2-Step Conclusion Formula */}
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
                The Discussion Conclusion Formula
              </h5>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "10px", padding: "10px 14px", fontSize: "0.88rem", color: "#1e40af" }}>
                <strong>Step 1: Sum-Up Both Perspectives:</strong> Signal conclusion and acknowledge both sides (`"In conclusion, although the uniqueness of contemporary dilemmas leads some to dismiss history..."`)
              </div>
              <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "10px", padding: "10px 14px", fontSize: "0.88rem", color: "#166534" }}>
                <strong>Step 2: Restate Opinion Defensively:</strong> Confirm your definitive personal stance (`"...understanding historical patterns of governance and economic crises remains vital for interpreting the present."`)
              </div>
            </div>
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

          {/* Discussion Signposting Toolkit */}
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
                Band 9 Discussion Signposting Toolkit
              </h5>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              <div style={{ background: "var(--slate-50)", border: "1px solid var(--border-subtle)", borderRadius: "10px", padding: "8px 12px", fontSize: "0.82rem" }}>
                <strong style={{ color: "#0066cc" }}>Summary Openers:</strong><br />
                • "In conclusion, although the unprecedented scale of modern dilemmas leads some to..."<br />
                • "To conclude, while the digital epoch presents challenges lacking past precedents..."
              </div>
              <div style={{ background: "var(--slate-50)", border: "1px solid var(--border-subtle)", borderRadius: "10px", padding: "8px 12px", fontSize: "0.82rem" }}>
                <strong style={{ color: "#059669" }}>Opinion Restatement:</strong><br />
                • "...the past remains an invaluable guide for interpreting the present."<br />
                • "...historical insight into human psychology provides the wisdom needed to guide decisions."
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
