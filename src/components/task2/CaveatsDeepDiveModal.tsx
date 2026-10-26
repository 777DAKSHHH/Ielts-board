import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Sparkles,
  Award,
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
                  Faculty Teaching Vault &amp; Discussion Architecture
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--slate-500)", margin: "2px 0 0" }}>
                  Fresh, Easily Justifiable Ideas: History &amp; Modern Society
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
              { id: "faculty", label: "Classroom Discussion & Idea Vault", icon: <Lightbulb size={16} /> },
              { id: "method", label: "5-Paragraph Architecture", icon: <GitBranch size={16} /> },
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
                    “Why do modern highway maps across Europe still follow roads paved by Roman soldiers two thousand years ago?”
                  </blockquote>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "4px" }}>
                    <span className="apple-badge neutral" style={{ background: "#ffffff", fontSize: "0.78rem" }}>
                      Follow-up 1: Did public panic during COVID-19 prove that human compliance during pandemics hasn't changed since 1918?
                    </span>
                    <span className="apple-badge neutral" style={{ background: "#ffffff", fontSize: "0.78rem" }}>
                      Follow-up 2: Why did building the massive Maginot Line wall fail to protect France in World War II?
                    </span>
                    <span className="apple-badge neutral" style={{ background: "#ffffff", fontSize: "0.78rem" }}>
                      Follow-up 3: Can studying the 1637 Dutch Tulip Mania help everyday investors avoid losing money in cryptocurrency crashes?
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--slate-600)", fontStyle: "italic" }}>
                    ✦ Pedagogical Purpose: These concrete questions instantly prove to students that history is not an abstract subject in old textbooks—it is physically under our car tires and psychologically behind our financial decisions today.
                  </p>
                </div>

                {/* 8 Faculty Analytical Angles */}
                <div>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 750, color: "var(--slate-900)", marginBottom: "12px" }}>
                    Teacher Idea Bank (Strictly View 1 &amp; View 2 Points)
                  </h4>
                  <div className="stage-grid-2col" style={{ gap: "14px" }}>
                    {/* View 1: History Fails Modernity */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <span className="apple-badge warning" style={{ alignSelf: "flex-start", fontSize: "0.75rem", background: "#fef3c7", color: "#92400e" }}>
                        ⚡ VIEW 1: WHY HISTORY FAILS TO GUIDE US TODAY
                      </span>
                      {[
                        {
                          title: "Survivorship Bias in Historical Records",
                          desc: "History was recorded exclusively by victorious monarchs and elites, offering zero practical guidance for common citizens' modern struggles."
                        },
                        {
                          title: "The 'Fighting the Last War' Blindspot",
                          desc: "Fixating on past crises creates a false sense of security, blinding modern leadership to novel, asymmetric technological threats like aircraft and cyberattacks."
                        },
                        {
                          title: "Radical Megacity Demographic Scale",
                          desc: "Ancient small-town governance frameworks cannot manage modern twenty-million-person multicultural megacities with automated infrastructure."
                        },
                        {
                          title: "Hyper-Fragile Global Supply Chains",
                          desc: "Ancient economies were localized and self-contained, whereas today a single foreign disruption halts international food and medicine."
                        }
                      ].map((item, idx) => (
                        <div key={idx} style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: "12px", padding: "12px 14px" }}>
                          <strong style={{ fontSize: "0.88rem", color: "#92400e" }}>{item.title}:</strong>
                          <p style={{ margin: "4px 0 0", fontSize: "0.84rem", color: "#78350f", lineHeight: 1.45 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>

                    {/* View 2: Past Silently Shapes Present */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <span className="apple-badge accent" style={{ alignSelf: "flex-start", fontSize: "0.75rem", background: "#dcfce7", color: "#166534" }}>
                        🟢 VIEW 2: HOW THE PAST SILENTLY SHAPES THE PRESENT
                      </span>
                      {[
                        {
                          title: "Physical Path Dependency & Roman Roads",
                          desc: "Modern European highways, railway lines, and city centers are built directly on top of ancient Roman and medieval engineering foundations."
                        },
                        {
                          title: "The Psychology of Speculative Bubbles",
                          desc: "While financial technology changes, human greed and collective delusion during market crashes follow the identical stages of the 1637 Dutch Tulip Mania."
                        },
                        {
                          title: "Epidemiological Protocols & Pandemics",
                          desc: "Human behavioral reactions and containment strategies during disease outbreaks repeat identically; COVID-19 rules were adapted from the 1918 Spanish Flu."
                        },
                        {
                          title: "Century-Old Peace Treaties & Diplomacy",
                          desc: "Contemporary international law, sovereign borders, and diplomatic neutrality (such as Swiss neutrality) are direct continuations of historic peace treaties."
                        }
                      ].map((item, idx) => (
                        <div key={idx} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "12px 14px" }}>
                          <strong style={{ fontSize: "0.88rem", color: "#166534" }}>{item.title}:</strong>
                          <p style={{ margin: "4px 0 0", fontSize: "0.84rem", color: "#14532d", lineHeight: 1.45 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: THE 5-PARAGRAPH ARCHITECTURE */}
            {activeTab === "method" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ display: "flex", flexDirection: "column", gap: "14px" }}
              >
                <div style={{ background: "var(--slate-50)", borderRadius: "16px", padding: "16px 20px", border: "1px solid var(--border-subtle)" }}>
                  <p style={{ margin: 0, fontSize: "0.92rem", color: "var(--slate-700)", lineHeight: 1.5 }}>
                    <strong>Mandatory 5-Paragraph Structure:</strong> Intro (Paraphrase + Opinion) → Body 1 (Ideas for 1st View) → Body 2 (Ideas for 2nd View) → Body 3 (Ideas for Opinion) → Conclusion (Sum-up main points + Restate opinion).
                  </p>
                </div>

                {[
                  {
                    step: "Para 01",
                    badge: "Introduction",
                    title: "Paraphrase Prompt + State Defensible Opinion",
                    say: "“While some individuals argue that historical records provide little practical guidance in our fast-evolving modern world, others maintain that analyzing the past is essential for comprehending contemporary reality. In my opinion, although rapid urban and technological changes present unprecedented challenges, studying historical human psychology and institutional foundations remains indispensable for sound decision-making.”",
                    takeaway: "Directly satisfies Band 9 Task Achievement by stating a clear, consistent stance from the beginning."
                  },
                  {
                    step: "Para 02",
                    badge: "Body 1 (1st View)",
                    title: "Develop Survivorship Bias & 'Fighting the Last War'",
                    say: "“On the one hand, proponents argue that historical lessons are inherently flawed because historical archives suffer from profound survivorship bias and prepare policymakers for yesterday's battles rather than today's reality.”",
                    takeaway: "Gives full analytical weight to View 1 with the Maginot Line and megacity scale examples."
                  },
                  {
                    step: "Para 03",
                    badge: "Body 2 (2nd View)",
                    title: "Develop Path Dependency & Cyclical Human Psychology",
                    say: "“On the other hand, analyzing historical developments is indispensable because through path dependency, modern society is physically anchored to ancient foundations, while human speculative greed remains immutable.”",
                    takeaway: "Grounds View 2 in tangible evidence: Roman road maps, Tulip Mania, and 1918 flu quarantines."
                  },
                  {
                    step: "Para 04",
                    badge: "Body 3 (Opinion)",
                    title: "Develop the Author's Nuanced Stance",
                    say: "“In my view, while the demographic and technological scale of modern life is novel, the underlying architecture of human society cannot be understood in isolation from its origins.”",
                    takeaway: "Reconciles modern novelty with timeless historical patterns logically."
                  },
                  {
                    step: "Para 05",
                    badge: "Conclusion",
                    title: "Sum-Up Main Points + Restate Opinion",
                    say: "“In conclusion, although the elitist bias of historical archives and the novel scale of modern society lead some to dismiss the past, history remains an indispensable guide for interpreting the present.”",
                    takeaway: "Crisp 2-sentence closure that synthesizes the debate without introducing new ideas."
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
                    topic: "View 1: Historical Bias & Blindspots (Body 1)",
                    band6: "History doesn't help us because books were written by old kings who only cared about winning wars.",
                    band9: "Historical archives suffer from profound survivorship bias, having been authored almost exclusively by ruling elites to chronicle military triumphs rather than the lived socioeconomic realities of ordinary citizens.",
                    why: "Replaces basic vocabulary with precise academic terms: 'survivorship bias', 'socioeconomic realities of ordinary citizens'."
                  },
                  {
                    topic: "View 2: Physical Foundations & Roman Roads (Body 2)",
                    band6: "We need history because roads and streets in cities were made a long time ago by Romans.",
                    band9: "Through the lens of path dependency, modern infrastructure remains physically anchored to ancient foundations, with contemporary European transport corridors directly tracing Roman military roads.",
                    why: "Elevates informal expressions into academic concepts: 'path dependency', 'physically anchored to ancient foundations'."
                  },
                  {
                    topic: "Author Opinion: Synthesis of Both Sides (Body 3)",
                    band6: "I think history is still useful because when people get crazy over money like in tulips or crypto, it is the same thing.",
                    band9: "In my view, while the demographic and technological scale of modern life is novel, the cyclical human psychology of speculative mania and disease containment proves that historical literacy is an indispensable compass.",
                    why: "Demonstrates high-level nuance and synthesis: 'cyclical human psychology of speculative mania', 'historical literacy is an indispensable compass'."
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
                    title: "1. Introduction Formula (Paraphrase + Clear Opinion)",
                    formula: "“While some individuals argue that [historical records provide little practical guidance in our fast-evolving modern world], others maintain that [analyzing the past is essential for comprehending contemporary reality]. In my opinion, although [rapid urban and technological changes present unprecedented challenges], [studying historical human psychology and institutional foundations remains indispensable for sound decision-making].”"
                  },
                  {
                    title: "2. Body 1 Opener Formula (1st View: History Fails Modernity)",
                    formula: "“On the one hand, proponents argue that historical lessons are inherently flawed because past archives suffer from [profound survivorship bias and prepare policymakers for yesterday's battles rather than today's reality]...”"
                  },
                  {
                    title: "3. Body 2 Opener Formula (2nd View: Past Silently Shapes Present)",
                    formula: "“On the other hand, analyzing historical developments is indispensable because through [path dependency, modern society is physically anchored to ancient foundations, while human speculative greed remains immutable]...”"
                  },
                  {
                    title: "4. Body 3 Opener Formula (Author Opinion)",
                    formula: "“In my view, while the demographic and technological scale of modern life is novel, the underlying architecture of [human governance and financial mania remains identical across eras]...”"
                  },
                  {
                    title: "5. Conclusion Formula (Sum-Up Points + Restate Opinion)",
                    formula: "“In conclusion, although the elitist bias of historical archives and the novel scale of modern society lead some to [dismiss the past], history remains an indispensable guide, as [understanding the physical foundations of our cities and the cyclical nature of human psychology is essential for interpreting the present]...”"
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
