import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Sparkles,
  Award,
  Lightbulb,
  GitBranch,
  BookOpen,
  Compass
} from "lucide-react";
import { TASK2_DATA } from "../../data/task2Data";

interface CaveatsDeepDiveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CaveatsDeepDiveModal: React.FC<CaveatsDeepDiveModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<"faculty" | "method" | "comparisons" | "formulas">("faculty");

  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

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
          background: "rgba(15, 23, 42, 0.72)",
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
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden"
          }}
        >
          {/* Top Bar */}
          <div
            style={{
              padding: "20px 28px",
              borderBottom: "1.5px solid var(--border-subtle)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#ffffff"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
                  color: "var(--apple-blue)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Compass size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  Faculty Teaching Vault &amp; Essay Architecture
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--slate-500)", margin: "2px 0 0" }}>
                  One-Liner Arguments &amp; 4-Paragraph Opinion Logic: Children &amp; Early Technology Usage
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                border: "1px solid var(--border-subtle)",
                background: "var(--slate-100)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--slate-600)"
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div
            style={{
              display: "flex",
              borderBottom: "1.5px solid var(--border-subtle)",
              background: "var(--slate-50)",
              padding: "0 24px"
            }}
          >
            {[
              { id: "faculty", label: "Classroom Discussion & One-Liner Vault", icon: <Lightbulb size={16} /> },
              { id: "method", label: "4-Paragraph Opinion Architecture", icon: <GitBranch size={16} /> },
              { id: "comparisons", label: "Band 6 vs Band 9 Contrasts", icon: <Award size={16} /> },
              { id: "formulas", label: "Plug & Play Sentence Formulas", icon: <BookOpen size={16} /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 18px",
                  fontSize: "0.9rem",
                  fontWeight: activeTab === tab.id ? 750 : 600,
                  color: activeTab === tab.id ? "var(--apple-blue)" : "var(--slate-600)",
                  borderBottom: activeTab === tab.id ? "2.5px solid var(--apple-blue)" : "2.5px solid transparent",
                  background: "transparent",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  cursor: "pointer",
                  transition: "all 0.15s ease"
                }}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Modal Content Body */}
          <div style={{ padding: "24px 28px", overflowY: "auto", flex: 1 }}>
            {/* TAB 1: FACULTY CLASSROOM IDEAS */}
            {activeTab === "faculty" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ display: "flex", flexDirection: "column", gap: "18px" }}
              >
                {/* Classroom Discussion Spotlight */}
                <div
                  style={{
                    background: "linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)",
                    border: "1.5px solid #bfdbfe",
                    borderRadius: "18px",
                    padding: "18px 22px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--apple-blue)" }}>
                    <Lightbulb size={20} />
                    <h5 style={{ fontSize: "1rem", fontWeight: 800, margin: 0 }}>
                      The Strongest Classroom Discussion Question
                    </h5>
                  </div>
                  <blockquote style={{ margin: 0, fontSize: "1.02rem", fontWeight: 700, color: "var(--slate-900)", lineHeight: 1.5 }}>
                    “{TASK2_DATA.classroomDiscussion?.question}”
                  </blockquote>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "4px" }}>
                    {TASK2_DATA.classroomDiscussion?.followUps.map((fu, idx) => (
                      <span key={idx} className="apple-badge neutral" style={{ background: "#ffffff", fontSize: "0.78rem" }}>
                        Follow-up {idx + 1}: {fu}
                      </span>
                    ))}
                  </div>
                  <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--slate-600)", fontStyle: "italic" }}>
                    ✦ Pedagogical Purpose: {TASK2_DATA.classroomDiscussion?.pedagogicalInsight}
                  </p>
                </div>

                {/* Dual Comparison Board: Positive vs Negative One-Liners */}
                <div>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 750, color: "var(--slate-900)", marginBottom: "12px" }}>
                    Student Idea Bank — Scannable One-Liners for Both Perspectives
                  </h4>
                  <div className="stage-grid-2col" style={{ gap: "14px" }}>
                    {/* Positive One-Liners */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <span className="apple-badge accent" style={{ alignSelf: "flex-start", fontSize: "0.75rem", background: "#dcfce7", color: "#166534" }}>
                        🟢 POSITIVE DEVELOPMENT (4 ONE-LINERS)
                      </span>
                      {TASK2_DATA.fiveMinutePlanningMap?.positive?.map((item, idx) => (
                        <div key={idx} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "10px 12px" }}>
                          <p style={{ margin: 0, fontSize: "0.85rem", color: "#14532d", fontWeight: 650, lineHeight: 1.45 }}>
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Negative One-Liners */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <span className="apple-badge warning" style={{ alignSelf: "flex-start", fontSize: "0.75rem", background: "#fee2e2", color: "#991b1b" }}>
                        ⚡ NEGATIVE DEVELOPMENT (6 ONE-LINERS)
                      </span>
                      {TASK2_DATA.fiveMinutePlanningMap?.negative?.map((item, idx) => (
                        <div key={idx} style={{ background: "#fff1f2", border: "1px solid #fecdd3", borderRadius: "12px", padding: "10px 12px" }}>
                          <p style={{ margin: 0, fontSize: "0.85rem", color: "#881337", fontWeight: 650, lineHeight: 1.45 }}>
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: THE 4-PARAGRAPH ARCHITECTURE */}
            {activeTab === "method" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ display: "flex", flexDirection: "column", gap: "14px" }}
              >
                <div style={{ background: "var(--slate-50)", borderRadius: "16px", padding: "16px 20px", border: "1px solid var(--border-subtle)" }}>
                  <p style={{ margin: 0, fontSize: "0.92rem", color: "var(--slate-700)", lineHeight: 1.5 }}>
                    <strong>Mandatory 4-Paragraph Opinion Structure:</strong> Intro (Paraphrase + Opinion) → Body 1 (Opinion side: 1 Main Reason + Supporting Reasoning + Example) → Body 2 (Opinion side: 1 Main Reason + Supporting Reasoning + Example) → Conclusion (Sum-up main reasons + Restate opinion).
                  </p>
                </div>

                {[
                  {
                    step: "Para 01",
                    badge: "Introduction",
                    title: "Paraphrase Prompt + Clear Opinion",
                    say: "“In contemporary society, children are being exposed to digital devices and technology at an increasingly early age. While early technological exposure fosters basic digital literacy, I firmly believe that this is predominantly a negative development due to the physical health hazards and impaired social communication it causes.”",
                    takeaway: "Directly answers the prompt question with a clear personal stance and a 2-part roadmap."
                  },
                  {
                    step: "Para 02",
                    badge: "Body 1 (Opinion Side: Reason 1)",
                    title: "Sedentary Habits & Physical Health Complications",
                    say: "“First and foremost, premature technology adoption promotes an intensely sedentary lifestyle, leading to severe physical health complications. When young children spend prolonged hours engrossed in tablets, energetic outdoor recreation—which is biologically vital for muscular and skeletal growth—is inevitably displaced. Furthermore, blue light suppresses nocturnal melatonin production, causing chronic sleep deficits. For example, pediatric studies reveal that preschoolers using tablets over two hours daily suffer double the rates of childhood obesity and frequent sleep disturbances.”",
                    takeaway: "1 Main Reason (one-liner) + Supporting reasoning + Tangible pediatric medical example."
                  },
                  {
                    step: "Para 03",
                    badge: "Body 2 (Opinion Side: Reason 2)",
                    title: "Impaired Interpersonal Communication & Social Delays",
                    say: "“Additionally, early dependency on technology severely undermines the cultivation of interpersonal communication skills and emotional empathy. Developing social competence requires reciprocal, face-to-face interaction where children learn to interpret vocal inflections, decipher subtle facial expressions, and navigate peer disputes. In contrast, digital interfaces offer one-way stimulation that encourages passive consumption. A clear illustration of this is observed in kindergarten classrooms, where teachers increasingly report that screen-accustomed toddlers frequently suffer expressive speech delays and struggle to cooperate harmoniously with peers.”",
                    takeaway: "1 Main Reason (one-liner) + Supporting reasoning + Real-world classroom evidence."
                  },
                  {
                    step: "Para 04",
                    badge: "Conclusion",
                    title: "Sum-Up All Main Reasons + Restate Your Opinion",
                    say: "“In conclusion, although early engagement with technology can cultivate basic digital literacy, I am convinced that this trend represents an overwhelmingly negative development. Unrestricted screen immersion directly promotes sedentary health complications such as childhood obesity, while concurrently stunting essential emotional empathy and face-to-face communication skills during formative developmental years.”",
                    takeaway: "Concise 2-sentence closure that synthesizes both arguments and firmly restates the opinion."
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
                        {item.step} • {item.badge}
                      </span>
                      <strong style={{ fontSize: "0.95rem", color: "var(--slate-900)" }}>{item.title}</strong>
                    </div>
                    <p style={{ fontSize: "0.92rem", color: "var(--slate-800)", fontStyle: "italic", margin: "0 0 8px", lineHeight: 1.5 }}>
                      {item.say}
                    </p>
                    <div style={{ fontSize: "0.82rem", color: "var(--slate-500)", fontWeight: 600 }}>
                      ✦ Examiner Function: {item.takeaway}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* TAB 3: BAND 6 VS BAND 8.5+ SENTENCES */}
            {activeTab === "comparisons" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ display: "flex", flexDirection: "column", gap: "14px" }}
              >
                {[
                  {
                    topic: "Body 1 (Physical Health): Sedentary Lifestyle & Obesity",
                    band6: "Kids who play with tablets all day don't run around outside, so they become fat and get bad eyesight.",
                    band9: "First and foremost, premature technology adoption promotes an intensely sedentary routine, displacing energetic outdoor recreation vital for musculoskeletal growth and escalating the risk of pediatric obesity.",
                    why: "Replaces simplistic vocabulary with medical precision and mature physiological causation."
                  },
                  {
                    topic: "Body 2 (Social Development): Delayed Speech & Peer Communication",
                    band6: "When toddlers only look at phones they cannot talk to other children nicely and cry in school.",
                    band9: "Additionally, early screen immersion stunts interpersonal communication, as passive, one-way digital interfaces fail to teach the subtle facial cues and reciprocal dialogue required for peer collaboration.",
                    why: "Transforms descriptive complaint into developmental psychology analysis (Band 9 Lexical & Task Response)."
                  },
                  {
                    topic: "Conclusion: Sum-Up & Firm Restatement of Opinion",
                    band6: "In conclusion, tech is useful for school but it has bad points so overall I think it is negative.",
                    band9: "In conclusion, while early device usage confers foundational digital literacy, the physical health detriments and impaired conversational competencies overwhelmingly render this an unfavorable development.",
                    why: "Delivers sophisticated concessive synthesis with zero repetitive filler phrasing."
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    style={{
                      background: "#ffffff",
                      border: "1.5px solid var(--border-subtle)",
                      borderRadius: "16px",
                      padding: "18px 20px",
                      boxShadow: "var(--shadow-sm)"
                    }}
                  >
                    <h5 style={{ fontSize: "1rem", fontWeight: 750, color: "var(--slate-900)", marginBottom: "12px" }}>
                      {item.topic}
                    </h5>
                    <div className="stage-grid-2col" style={{ gap: "14px", marginBottom: "12px" }}>
                      <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "12px", padding: "12px 14px" }}>
                        <span style={{ fontSize: "0.76rem", fontWeight: 800, color: "#991b1b" }}>BAND 6.0 (SHALLOW)</span>
                        <p style={{ fontSize: "0.88rem", color: "#7f1d1d", margin: "6px 0 0", lineHeight: 1.45 }}>{item.band6}</p>
                      </div>
                      <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "12px 14px" }}>
                        <span style={{ fontSize: "0.76rem", fontWeight: 800, color: "#166534" }}>BAND 8.5+ (ACADEMIC)</span>
                        <p style={{ fontSize: "0.88rem", color: "#14532d", margin: "6px 0 0", lineHeight: 1.45 }}>{item.band9}</p>
                      </div>
                    </div>
                    <div style={{ fontSize: "0.84rem", color: "var(--slate-600)", lineHeight: 1.45 }}>
                      <Sparkles size={14} color="#d97706" style={{ verticalAlign: "-2px", marginRight: "6px" }} />
                      <strong>Why It Works:</strong> {item.why}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* TAB 4: PLUG & PLAY FORMULAS */}
            {activeTab === "formulas" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ display: "flex", flexDirection: "column", gap: "14px" }}
              >
                {[
                  {
                    title: "1. Introduction Formula (Paraphrase + Opinion)",
                    formula: "“In contemporary society, children are being exposed to [digital devices at an increasingly early age]. While early exposure fosters [basic digital literacy], I firmly believe that this is predominantly a [negative development due to physical health hazards and impaired interpersonal communication].”"
                  },
                  {
                    title: "2. Body 1 Opener Formula (Opinion Side: Reason 1 + Reasoning + Example)",
                    formula: "“First and foremost, premature technology adoption promotes [an intensely sedentary lifestyle], leading to [severe physical health complications including juvenile obesity and chronic sleep disruption]...”"
                  },
                  {
                    title: "3. Body 2 Opener Formula (Opinion Side: Reason 2 + Reasoning + Example)",
                    formula: "“Additionally, early dependency on technology severely undermines [the cultivation of face-to-face communication skills and emotional empathy]...”"
                  },
                  {
                    title: "4. Conclusion Formula (Sum-Up Points + Restate Opinion)",
                    formula: "“In conclusion, although early engagement can cultivate [foundational digital literacy], I am convinced that this trend represents an [overwhelmingly negative development due to sedentary health hazards and the erosion of social skills]...”"
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    style={{
                      background: "#ffffff",
                      border: "1.5px solid var(--border-subtle)",
                      borderRadius: "16px",
                      padding: "16px 20px",
                      boxShadow: "var(--shadow-sm)"
                    }}
                  >
                    <h5 style={{ fontSize: "0.95rem", fontWeight: 750, color: "var(--slate-900)", marginBottom: "8px" }}>
                      {item.title}
                    </h5>
                    <p style={{ fontSize: "0.92rem", color: "#1e40af", fontFamily: "Georgia, serif", margin: 0, lineHeight: 1.6 }}>
                      {item.formula}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
