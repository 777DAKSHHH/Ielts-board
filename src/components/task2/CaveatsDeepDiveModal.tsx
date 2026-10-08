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
                    TWO-PART ESSAY MASTERCLASS
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "var(--slate-500)", fontWeight: 600 }}>
                    Step 06 Deep Dive • Nuances & 1 Reason + Support + Example
                  </span>
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--slate-900)", margin: "3px 0 0" }}>
                  Mastering Nuances & The "1 Reason + Support + Example" Architecture
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
              { id: "rationale", label: "1. Core Argument Logic", icon: <Award size={15} /> },
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
                    borderRadius: "18px",
                    padding: "18px 22px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "14px"
                  }}
                >
                  <AlertTriangle size={22} color="#d97706" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <h5 style={{ fontSize: "1rem", fontWeight: 800, color: "#92400e", margin: "0 0 4px" }}>
                      The "Laundry List" Mistake (Band 6.0 Trap)
                    </h5>
                    <p style={{ fontSize: "0.9rem", color: "#78350f", margin: 0, lineHeight: 1.55 }}>
                      Band 6 candidates dump 3 or 4 rushed ideas in one paragraph without developing any of them (*"People are fat because of burgers, and they don't walk, and hospitals have no beds, and economies suffer"*). IELTS Band 8.5+ criteria for Task Achievement strictly requires <strong>“a fully developed response with relevant, extended and supported ideas.”</strong>
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
                      By focusing on <strong>1 main reason per body paragraph</strong> in the paired format <code>[ Effect + Solution + Example ]</code> (Body 1: Healthcare Fiscal Strain paired with Fiscal Sugar Levies; Body 2: Workforce Inactivity paired with Active Transit Infrastructure), students have the space to unpack the causal chain thoroughly instead of superficial skimming.
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
                      Effective essays provide specific real-world grounding. Citing the <em>UK NHS £6 billion obesity expenditure</em> or <em>Mexico's sugar tax and Copenhagen's cycle highways</em> demonstrates genuine academic command and direct prompt response.
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
                    <strong>The 3-Tier Body Paragraph Blueprint:</strong> Construct every body paragraph like an inverted pyramid of logic:
                  </p>
                </div>

                {[
                  {
                    step: "Tier 01",
                    badge: "Topic Sentence",
                    title: "State 1 Clear Primary Consequence",
                    say: "“First and foremost, the primary societal repercussion of escalating obesity rates is the unsustainable financial and operational burden placed on public healthcare infrastructures.”",
                    takeaway: "Direct, unequivocal claim that immediately answers Question 1."
                  },
                  {
                    step: "Tier 02",
                    badge: "Supporting Causal Engine",
                    title: "Unpack WHY and HOW with Supporting Reasons",
                    say: "“As sedentary habits and hyper-processed diets proliferate, populations experience an exponential increase in preventable non-communicable conditions like type-2 diabetes and cardiovascular disease, forcing hospitals to divert billions toward continuous palliative treatments rather than acute emergency medicine.”",
                    takeaway: "Explains the underlying epidemiological mechanism and fiscal diversion effect."
                  },
                  {
                    step: "Tier 03",
                    badge: "Concrete Real-World Anchor",
                    title: "Substantiate with Specific Evidence",
                    say: "“This fiscal crisis is exemplified in the United Kingdom, where the National Health Service expends over £6 billion annually managing obesity-related pathology—a figure outstripping the entire national public budget for emergency policing services.”",
                    takeaway: "Pins the theoretical argument to an undeniable, verified public health reality."
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
                    <strong style={{ color: "#991b1b", fontSize: "0.9rem" }}>Vague &amp; Superficial (No Causal Depth or Specificity)</strong>
                  </div>
                  <div style={{ padding: "14px 18px", fontSize: "0.92rem", color: "#475569", lineHeight: 1.5 }}>
                    “People are getting fatter and unhealthier because they eat junk food and sit on chairs all day. This causes big problems for hospitals and makes economies poor.”
                  </div>
                  <div style={{ padding: "8px 18px 14px", fontSize: "0.8rem", color: "#dc2626" }}>
                    ❌ <em>Weak vocabulary ('getting fatter', 'sit on chairs', 'makes economies poor'); zero causal mechanism; completely lacks academic precision.</em>
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
                    <strong style={{ color: "#166534", fontSize: "0.9rem" }}>Fully Extended &amp; Empirically Grounded</strong>
                  </div>
                  <div style={{ padding: "14px 18px", fontSize: "0.95rem", color: "#1e293b", lineHeight: 1.6 }}>
                    “The alarming escalation in average body weight combined with pervasive physical inactivity imposes an unsustainable fiscal burden on state medical infrastructures. Specifically, as preventable chronic non-communicable illnesses like type-2 diabetes and cardiovascular disease surge, public healthcare systems must allocate billions toward palliative treatments, exemplified by the UK NHS expending over £6 billion annually managing obesity-related pathology.”
                  </div>
                  <div style={{ padding: "8px 18px 14px", fontSize: "0.82rem", color: "#15803d" }}>
                    ✓ <em>Key strengths: Academic collocations ('pervasive physical inactivity', 'unsustainable fiscal burden', 'chronic non-communicable illnesses'), complex sentence coordination, and a verifiable empirical health benchmark.</em>
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
                    Master these <strong>3 plug-and-play body paragraph templates</strong>:
                  </p>
                </div>

                {[
                  {
                    title: "Formula 1: The Topic Sentence Frame (1 Primary Consequence)",
                    pattern: "The primary consequence of [escalating weight / declining fitness] is that [1 Core Repercussion], which ultimately [societal / fiscal consequence].",
                    example: "“The primary consequence of escalating population obesity is the unsustainable fiscal burden placed on public health services, which ultimately starves other vital medical sectors of essential capital.”"
                  },
                  {
                    title: "Formula 2: The Causal Supporting Explanation",
                    pattern: "When populations succumb to [lifestyle driver], individuals inevitably [pathological outcome]; conversely, by enacting [targeted intervention], governments can [preventative health benefit].",
                    example: "“When populations succumb to sedentary routines and hyper-palatable diets, individuals inevitably develop chronic metabolic disorders; conversely, by instituting targeted fiscal sugar levies, governments can curb harmful consumption and incentivize healthier eating habits.”"
                  },
                  {
                    title: "Formula 3: The Concrete Case-Study Clincher",
                    pattern: "This dynamic is substantiated by [Public Health / Policy Precedent], where [regulatory / infrastructure measure] successfully [quantifiable health outcome achieved].",
                    example: "“This dynamic is substantiated by municipal infrastructure investments in Copenhagen, where dedicated cycling highways enable over 40% of residents to commute actively by bicycle, driving significant reductions in national cardiovascular morbidity.”"
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
              <span>Review this breakdown for paragraph depth and analytical logic</span>
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
