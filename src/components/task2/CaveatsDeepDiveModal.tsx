import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Sparkles,
  Award,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  GitBranch,
  BookOpen,
  Compass
} from "lucide-react";

interface CaveatsDeepDiveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CaveatsDeepDiveModal: React.FC<CaveatsDeepDiveModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<"rationale" | "method" | "comparisons" | "formulas">("rationale");

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(15, 23, 42, 0.65)",
          backdropFilter: "blur(16px)",
          padding: "20px"
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            width: "100%",
            maxWidth: "1060px",
            maxHeight: "90vh",
            background: "#ffffff",
            borderRadius: "24px",
            border: "1.5px solid var(--border-subtle)",
            boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.35)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden"
          }}
        >
          {/* Header Bar */}
          <div
            style={{
              padding: "20px 28px",
              borderBottom: "1.5px solid var(--border-subtle)",
              background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background: "#d97706",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Compass size={22} />
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span
                    className="apple-badge"
                    style={{
                      background: "#fef3c7",
                      color: "#92400e",
                      fontWeight: 800,
                      fontSize: "0.72rem",
                      padding: "2px 8px"
                    }}
                  >
                    OPINION ESSAY MASTERCLASS
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "var(--slate-500)", fontWeight: 600 }}>
                    Step 06 Deep Dive • 1 Main Reason + Support + Example
                  </span>
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--slate-900)", margin: "3px 0 0" }}>
                  Mastering the "1 Main Reason + Support + Example" Formula
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="apple-touch-btn secondary"
              style={{
                minHeight: "38px",
                width: "38px",
                padding: 0,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              title="Close modal"
            >
              <X size={19} />
            </button>
          </div>

          {/* Interactive Navigation Tabs for Smart Board */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              padding: "12px 28px",
              borderBottom: "1px solid var(--border-subtle)",
              background: "#ffffff"
            }}
          >
            {[
              { id: "rationale", label: "1. Examiner's Mindset", icon: <Award size={15} /> },
              { id: "method", label: "2. The 3-Tier Body Architecture", icon: <Lightbulb size={15} /> },
              { id: "comparisons", label: "3. Band 6 vs Band 8.5+ Sentences", icon: <GitBranch size={15} /> },
              { id: "formulas", label: "4. Plug & Play Formulas", icon: <BookOpen size={15} /> }
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 14px",
                    borderRadius: "10px",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                    background: isActive ? "var(--slate-900)" : "var(--slate-100)",
                    color: isActive ? "#ffffff" : "var(--slate-700)"
                  }}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Scrollable Content Body */}
          <div
            style={{
              padding: "24px 28px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "20px"
            }}
          >
            {/* TAB 1: EXAMINER RATIONALE */}
            {activeTab === "rationale" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ display: "flex", flexDirection: "column", gap: "16px" }}
              >
                <div
                  style={{
                    background: "#fffbeb",
                    border: "1.5px solid #fde68a",
                    borderRadius: "16px",
                    padding: "16px 20px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px"
                  }}
                >
                  <AlertTriangle size={22} color="#d97706" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <h5 style={{ fontSize: "1rem", fontWeight: 800, color: "#92400e", margin: "0 0 4px" }}>
                      The "Laundry List" Mistake (Band 6.0 Trap)
                    </h5>
                    <p style={{ fontSize: "0.9rem", color: "#78350f", margin: 0, lineHeight: 1.55 }}>
                      Band 6 candidates dump 3 or 4 rushed ideas in one paragraph without developing any of them (*"Artifacts should be returned because it is their culture, and also museums are far, and also it helps poor countries"*). IELTS Band 8.5+ criteria for Task Achievement strictly requires <strong>“a fully developed response with relevant, extended and supported ideas.”</strong>
                    </p>
                  </div>
                </div>

                <div className="stage-grid-2col" style={{ gap: "16px" }}>
                  <div
                    style={{
                      background: "var(--slate-50)",
                      border: "1.5px solid var(--border-subtle)",
                      borderRadius: "18px",
                      padding: "20px"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                      <CheckCircle2 size={18} color="var(--apple-blue)" />
                      <h5 style={{ fontSize: "1rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                        1. One Main Reason = Depth Over Breadth
                      </h5>
                    </div>
                    <p style={{ fontSize: "0.88rem", color: "var(--slate-600)", lineHeight: 1.55, margin: 0 }}>
                      By focusing on <strong>1 main reason per body paragraph</strong> (Body 1: Cultural Identity & Moral Justice; Body 2: Sovereignty & Economic Equity), students have the space to unpack the causal logic thoroughly instead of superficial skimming.
                    </p>
                  </div>

                  <div
                    style={{
                      background: "var(--slate-50)",
                      border: "1.5px solid var(--border-subtle)",
                      borderRadius: "18px",
                      padding: "20px"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                      <CheckCircle2 size={18} color="#059669" />
                      <h5 style={{ fontSize: "1rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                        2. Verifiable Evidence vs. Vague Statements
                      </h5>
                    </div>
                    <p style={{ fontSize: "0.88rem", color: "var(--slate-600)", lineHeight: 1.55, margin: 0 }}>
                      Examiners look for specific real-world grounding. Citing the <em>Benin Bronzes looted from Nigeria</em> or the <em>Acropolis Museum in Athens</em> demonstrates genuine academic command and scores Band 9 in Task Achievement.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: THE 3-TIER ARCHITECTURE */}
            {activeTab === "method" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ display: "flex", flexDirection: "column", gap: "14px" }}
              >
                <div style={{ background: "var(--slate-50)", borderRadius: "16px", padding: "16px 20px", border: "1px solid var(--border-subtle)" }}>
                  <p style={{ margin: 0, fontSize: "0.92rem", color: "var(--slate-700)", lineHeight: 1.5 }}>
                    <strong>The 3-Tier Body Paragraph Blueprint:</strong> Teach students to construct every body paragraph like an inverted pyramid of logic:
                  </p>
                </div>

                {[
                  {
                    step: "Tier 01",
                    badge: "Topic Sentence",
                    title: "State 1 Clear Main Reason",
                    say: "“First and foremost, historical treasures embody the living cultural identity and spiritual soul of their native civilizations, making their repatriation a non-negotiable moral duty.”",
                    takeaway: "Direct, unequivocal claim that immediately answers the prompt."
                  },
                  {
                    step: "Tier 02",
                    badge: "Supporting Causal Engine",
                    title: "Unpack WHY and HOW with Supporting Reasons",
                    say: "“An overwhelming majority of non-Western antiquities were plundered during colonial military raids. Retaining them in foreign institutions perpetuates historical humiliation and severs descendant generations from their living traditions.”",
                    takeaway: "Explains the underlying historical mechanism and psychological harm."
                  },
                  {
                    step: "Tier 03",
                    badge: "Concrete Real-World Anchor",
                    title: "Substantiate with Specific Evidence",
                    say: "“A prominent illustration is the ongoing repatriation of the Benin Bronzes to Nigeria and sacred Maori ancestral remains to New Zealand, which has enabled indigenous communities to restore sacred ceremonial rites and reclaim their heritage.”",
                    takeaway: "Pins the theoretical argument to a famous, undeniable historical case study."
                  }
                ].map((item) => (
                  <div
                    key={item.step}
                    style={{
                      background: "#ffffff",
                      border: "1.5px solid var(--border-subtle)",
                      borderRadius: "16px",
                      padding: "16px 20px",
                      boxShadow: "var(--shadow-sm)"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                      <span className="apple-badge accent" style={{ fontSize: "0.75rem", padding: "2px 8px" }}>
                        {item.step}
                      </span>
                      <strong style={{ fontSize: "0.95rem", color: "var(--slate-900)" }}>
                        {item.title} ({item.badge})
                      </strong>
                    </div>
                    <p style={{ fontStyle: "italic", fontSize: "0.9rem", color: "var(--slate-800)", margin: "0 0 8px", background: "#f8fafc", padding: "10px 14px", borderRadius: "10px", borderLeft: "3px solid var(--apple-blue)" }}>
                      {item.say}
                    </p>
                    <p style={{ fontSize: "0.82rem", color: "var(--slate-500)", margin: 0 }}>
                      <strong>Function in Essay:</strong> {item.takeaway}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}

            {/* TAB 3: SENTENCE COMPARISONS */}
            {activeTab === "comparisons" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ display: "flex", flexDirection: "column", gap: "16px" }}
              >
                <div
                  style={{
                    background: "#ffffff",
                    border: "1.5px solid var(--border-subtle)",
                    borderRadius: "18px",
                    overflow: "hidden",
                    boxShadow: "var(--shadow-sm)"
                  }}
                >
                  <div
                    style={{
                      background: "#fef2f2",
                      borderBottom: "1px solid #fee2e2",
                      padding: "12px 18px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px"
                    }}
                  >
                    <span className="apple-badge" style={{ background: "#ef4444", color: "#fff", fontSize: "0.72rem" }}>
                      BAND 6.0
                    </span>
                    <strong style={{ color: "#991b1b", fontSize: "0.9rem" }}>Vague & Superficial (No Depth or Specificity)</strong>
                  </div>
                  <div style={{ padding: "14px 18px", fontSize: "0.92rem", color: "#475569", lineHeight: 1.5 }}>
                    “Historical objects must be given back because they were stolen in old wars. People want their history back so they can see it in their own countries.”
                  </div>
                  <div style={{ padding: "8px 18px 14px", fontSize: "0.8rem", color: "#dc2626" }}>
                    ❌ <em>Weak vocabulary ('stolen in old wars', 'given back'); zero causal development; lacks any specific historical example.</em>
                  </div>
                </div>

                <div
                  style={{
                    background: "#ffffff",
                    border: "1.5px solid #bbf7d0",
                    borderRadius: "18px",
                    overflow: "hidden",
                    boxShadow: "var(--shadow-sm)"
                  }}
                >
                  <div
                    style={{
                      background: "#f0fdf4",
                      borderBottom: "1px solid #dcfce7",
                      padding: "12px 18px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px"
                    }}
                  >
                    <span className="apple-badge success" style={{ fontSize: "0.72rem" }}>
                      BAND 8.5+
                    </span>
                    <strong style={{ color: "#166534", fontSize: "0.9rem" }}>Fully Extended & Real-World Evidenced</strong>
                  </div>
                  <div style={{ padding: "14px 18px", fontSize: "0.95rem", color: "#1e293b", lineHeight: 1.6 }}>
                    “Chief among the arguments for restitution is that historical relics represent the living cultural identity of their creators, making their repatriation essential to rectifying colonial injustices. Because the majority of these artifacts were illicitly plundered during 19th-century imperial expeditions, returning them restores ancestral dignity—a truth exemplified by the recent restitution of the Benin Bronzes to Nigeria.”
                  </div>
                  <div style={{ padding: "8px 18px 14px", fontSize: "0.82rem", color: "#15803d" }}>
                    ✓ <em>Examiner impact: Advanced collocations ('illicitly plundered', 'ancestral dignity'), seamless causal subordination, and concrete historical validation.</em>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 4: FORMULAS */}
            {activeTab === "formulas" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ display: "flex", flexDirection: "column", gap: "14px" }}
              >
                <div style={{ background: "var(--slate-50)", borderRadius: "14px", padding: "14px 18px", border: "1px solid var(--border-subtle)" }}>
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--slate-700)" }}>
                    Students can memorize these <strong>3 plug-and-play body paragraph templates</strong>:
                  </p>
                </div>

                {[
                  {
                    title: "Formula 1: The Topic Sentence Frame (1 Main Reason)",
                    pattern: "The primary justification for [opinion stance] is that [1 Main Reason], which in turn [broader cultural or economic impact].",
                    example: "“The primary justification for repatriating historical objects is that ancestral treasures embody the spiritual identity of their creators, which in turn heals the enduring trauma of imperial exploitation.”"
                  },
                  {
                    title: "Formula 2: The Causal Supporting Explanation",
                    pattern: "When [situation occurs], it inevitably [negative outcome]; conversely, by [taking action], origin nations [positive resolution].",
                    example: "“When antiquities are sequestered in overseas institutions, native populations are estranged from their cultural roots; conversely, by returning rightful custodianship, communities can revive sacred ancestral traditions.”"
                  },
                  {
                    title: "Formula 3: The Concrete Case-Study Clincher",
                    pattern: "This principle is powerfully illustrated by [Specific Case Study], where [action taken] successfully [tangible result achieved].",
                    example: "“This principle is powerfully illustrated by Greece's purpose-built Acropolis Museum, which dismantled conservation excuses and demonstrated that origin nations can safeguard their own antiquities.”"
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "#ffffff",
                      border: "1.5px solid var(--border-subtle)",
                      borderRadius: "16px",
                      padding: "16px 20px"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                      <Sparkles size={16} color="var(--apple-blue)" />
                      <strong style={{ fontSize: "0.95rem", color: "var(--slate-900)" }}>{item.title}</strong>
                    </div>
                    <div style={{ background: "#f8fafc", borderRadius: "8px", padding: "8px 12px", fontFamily: "monospace", fontSize: "0.84rem", color: "#334155", marginBottom: "8px" }}>
                      {item.pattern}
                    </div>
                    <div style={{ fontSize: "0.88rem", color: "var(--slate-700)", fontStyle: "italic", lineHeight: 1.45 }}>
                      {item.example}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Footer Bar */}
          <div
            style={{
              padding: "16px 28px",
              borderTop: "1.5px solid var(--border-subtle)",
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--slate-500)", fontSize: "0.85rem" }}>
              <Sparkles size={15} color="#d97706" />
              <span>Use this masterclass on the Senses Smartboard to train students on paragraph depth</span>
            </div>
            <button
              onClick={onClose}
              className="apple-touch-btn primary"
              style={{ minHeight: "42px", padding: "0 20px", fontSize: "0.88rem", gap: "6px" }}
            >
              <span>Back to Step 6 (Body 1)</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
