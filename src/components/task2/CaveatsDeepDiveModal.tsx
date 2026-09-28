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
                    EXAMINER'S SECRET WEAPON
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "var(--slate-500)", fontWeight: 600 }}>
                    Step 06 Deep Dive • Body Paragraph 1 Strategy
                  </span>
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--slate-900)", margin: "3px 0 0" }}>
                  Why Include "Nuances & Practical Caveats" in Body 1?
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
              { id: "method", label: "2. The 3-Step Student Model", icon: <Lightbulb size={15} /> },
              { id: "comparisons", label: "3. Band 6 vs Band 8.5+ Sentences", icon: <GitBranch size={15} /> },
              { id: "formulas", label: "4. Plug & Play Templates", icon: <BookOpen size={15} /> }
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
                      The "Blind Cheerleading" Trap (Band 6.0 Mistake)
                    </h5>
                    <p style={{ fontSize: "0.9rem", color: "#78350f", margin: 0, lineHeight: 1.55 }}>
                      Weak candidates assume that because Body 1 is defending View 1, they must praise high taxes blindly (*"High taxes build roads and schools, so high taxes are 100% positive"*). IELTS examiners penalize this as simplistic, one-dimensional thinking. Real academics always test the boundary conditions of an argument.
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
                        1. Conditionality & Qualification
                      </h5>
                    </div>
                    <p style={{ fontSize: "0.88rem", color: "var(--slate-600)", lineHeight: 1.55, margin: 0 }}>
                      Under the <strong>Band 8/9 Task Achievement</strong> rubric, candidates must present a <em>“well-developed response to the question with relevant, extended and supported ideas.”</em> Adding a caveat proves that the student understands public funding only works under certain real-world conditions (e.g. transparency, efficiency).
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
                        2. The Natural Bridge to Body 2
                      </h5>
                    </div>
                    <p style={{ fontSize: "0.88rem", color: "var(--slate-600)", lineHeight: 1.55, margin: 0 }}>
                      Body 2 will discuss <em>why critics consider high taxes harmful</em>. By acknowledging the caveats in Body 1 (such as bureaucratic monopoly and tax avoidance), you create an effortless, organic transition into Body 2 instead of writing two disconnected paragraphs.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: THE 3-STEP TEACHING METHOD */}
            {activeTab === "method" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ display: "flex", flexDirection: "column", gap: "14px" }}
              >
                <div style={{ background: "var(--slate-50)", borderRadius: "16px", padding: "16px 20px", border: "1px solid var(--border-subtle)" }}>
                  <p style={{ margin: 0, fontSize: "0.92rem", color: "var(--slate-700)", lineHeight: 1.5 }}>
                    <strong>Teacher's Classroom Script:</strong> When teaching Step 6 on the Smart Board, walk students through these 3 conceptual steps in under two minutes:
                  </p>
                </div>

                {[
                  {
                    step: "Step 01",
                    badge: "The Provocation",
                    title: "Challenge the Obvious",
                    say: "“Class, look at the left column: roads, schools, hospitals. Anyone can say public services are good. That is a Band 6 observation. But what happens if a government takes 50% of your salary and the roads remain full of potholes and the schools are falling apart? Is high taxation still justified?”",
                    takeaway: "Students immediately realize that public funding is not an absolute good—it depends on execution."
                  },
                  {
                    step: "Step 02",
                    badge: "The Definition",
                    title: "Define What a 'Caveat' Is",
                    say: "“A caveat is a condition for success. We are telling the examiner: 'Yes, heavy taxation is necessary for major infrastructure, BUT it only works IF the state avoids bureaucratic monopoly and prevents rich corporations from exploiting offshore tax loopholes.'”",
                    takeaway: "Students learn that 'caveats' are not contradictions, but mature academic conditions."
                  },
                  {
                    step: "Step 03",
                    badge: "The Handoff",
                    title: "Build the Bridge to Body 2",
                    say: "“When you conclude Body 1 by admitting these practical dangers, you have already built the bridge to Body 2! In Body 2, you can start: 'These very inefficiencies are why critics vehemently oppose high taxes...'”",
                    takeaway: "Ensures seamless Coherence & Cohesion between conflicting viewpoints."
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
                      <strong>Student Takeaway:</strong> {item.takeaway}
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
                <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--slate-600)" }}>
                  Show students how adding a caveat elevates their grammatical range, lexical resource, and critical thinking:
                </p>

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
                    <strong style={{ color: "#991b1b", fontSize: "0.9rem" }}>Basic / One-Dimensional (No Caveats)</strong>
                  </div>
                  <div style={{ padding: "14px 18px", fontSize: "0.92rem", color: "#475569", lineHeight: 1.5 }}>
                    “Governments should take a large share of citizens’ salaries because building expressways and schools requires a lot of public money, which benefits everybody in society.”
                  </div>
                  <div style={{ padding: "8px 18px 14px", fontSize: "0.8rem", color: "#dc2626" }}>
                    ❌ <em>Problem: Simplistic cause-and-effect; assumes state spending is always flawless; zero qualification.</em>
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
                    <strong style={{ color: "#166534", fontSize: "0.9rem" }}>Qualified & Nuanced (With Caveat Integration)</strong>
                  </div>
                  <div style={{ padding: "14px 18px", fontSize: "0.95rem", color: "#1e293b", lineHeight: 1.6 }}>
                    “While claiming a substantial portion of earnings is indispensable for funding nationwide transit networks and universal education, <span style={{ background: "#fef3c7", padding: "2px 6px", borderRadius: "4px", color: "#92400e", fontWeight: 700 }}>this policy is only justifiable if governments actively curb bureaucratic monopolies and close offshore tax evasion loopholes</span>.”
                  </div>
                  <div style={{ padding: "8px 18px 14px", fontSize: "0.82rem", color: "#15803d" }}>
                    ✓ <em>Examiner impact: Demonstrates conditionality, complex subordinate clauses, and mature academic evaluation.</em>
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
                    Students can memorize these <strong>3 plug-and-play concession formulas</strong> to add caveats effortlessly in their IELTS exam:
                  </p>
                </div>

                {[
                  {
                    title: "Formula 1: The 'Provided that' Anchor",
                    pattern: "While [View 1 benefit] is undeniably vital, this policy remains viable only provided that [Caveat condition].",
                    example: "“While state funding for expressways and primary schools is undeniably vital, this policy remains viable only provided that revenue is shielded from bureaucratic leakage.”"
                  },
                  {
                    title: "Formula 2: The 'Albeit with the caveat' Clause",
                    pattern: "[View 1 core claim], albeit with the significant caveat that [Caveat hazard].",
                    example: "“Governments have a compelling mandate to pool societal wealth for universal amenities, albeit with the significant caveat that excessive rates risk provoking corporate capital flight.”"
                  },
                  {
                    title: "Formula 3: The Handoff Pivot (Body 1 Conclusion)",
                    pattern: "Nonetheless, the success of this model hinges on fiscal accountability, without which high taxation risks becoming counterproductive.",
                    example: "“Nonetheless, the civic success of public spending hinges on strict fiscal accountability, without which substantial taxation breeds public resentment—a concern championed by its critics.”"
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
              <span>Use this masterclass to explain caveats on the Senses Smartboard during Step 06</span>
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
