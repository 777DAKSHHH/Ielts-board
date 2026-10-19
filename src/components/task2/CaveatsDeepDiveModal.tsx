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
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.35)",
            border: "1.5px solid var(--border-subtle)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden"
          }}
        >
          {/* Modal Header */}
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
                    FACULTY &amp; EXAMINER MASTERCLASS
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "var(--slate-500)", fontWeight: 600 }}>
                    Teacher Idea Bank • Analytical Extensions &amp; Discussion Prompts
                  </span>
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--slate-900)", margin: "3px 0 0" }}>
                  AI in the Classroom: High-Band Argumentation &amp; Nuance
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
              { id: "faculty", label: "1. Faculty Idea Bank (8 Angles)", icon: <Award size={15} /> },
              { id: "method", label: "2. The 3-Tier Body Architecture", icon: <Lightbulb size={15} /> },
              { id: "comparisons", label: "3. Band 6 vs Band 8.5+ Sentences", icon: <GitBranch size={15} /> },
              { id: "formulas", label: "4. Outweighing Formulas & Advice", icon: <BookOpen size={15} /> }
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
            {/* TAB 1: FACULTY IDEA BANK */}
            {activeTab === "faculty" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ display: "flex", flexDirection: "column", gap: "16px" }}
              >
                {/* Discussion Question Feature Card */}
                <div
                  style={{
                    background: "linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%)",
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
                    “Can an algorithm inspire a child to love learning or comfort a student in tears the way a dedicated human teacher does?”
                  </blockquote>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "4px" }}>
                    <span className="apple-badge neutral" style={{ background: "#ffffff", fontSize: "0.78rem" }}>
                      Follow-up 1: What is the difference between transmitting information and genuine pedagogical teaching?
                    </span>
                    <span className="apple-badge neutral" style={{ background: "#ffffff", fontSize: "0.78rem" }}>
                      Follow-up 2: Can artificial intelligence teach ethics and moral philosophy when it possesses no consciousness?
                    </span>
                    <span className="apple-badge neutral" style={{ background: "#ffffff", fontSize: "0.78rem" }}>
                      Follow-up 3: Does automating homework grading mean the teacher is being replaced, or merely assisted?
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--slate-600)", fontStyle: "italic" }}>
                    ✦ Pedagogical Purpose: These questions help students realize that education is fundamentally relational and ethical, whereas computer programs are merely cognitive calculators.
                  </p>
                </div>

                {/* 8 Faculty Analytical Angles */}
                <div>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 750, color: "var(--slate-900)", marginBottom: "12px" }}>
                    Faculty / Teacher Idea Bank (8 Analytical Discussion Angles)
                  </h4>
                  <div className="stage-grid-2col" style={{ gap: "14px" }}>
                    {/* Opinion Side Angles (Why AI Cannot Replace Teachers) */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <span className="apple-badge success" style={{ alignSelf: "flex-start", fontSize: "0.75rem" }}>
                        🟢 OPINION SIDE: WHY TEACHERS ARE IRREPLACEABLE
                      </span>
                      {[
                        {
                          title: "Psychological Pastoral Care",
                          desc: "Human teachers detect subtle emotional crises, bullying, or domestic distress in students, offering compassionate intervention that no algorithm can emulate."
                        },
                        {
                          title: "Socratic Debate & Critical Discernment",
                          desc: "Education requires challenging biases, dissecting ethical dilemmas, and fostering civil discourse through spontaneous classroom dialogue."
                        },
                        {
                          title: "Moral Integrity & Ethical Role Modeling",
                          desc: "Children learn ethical values not from abstract textual outputs, but by observing respected human mentors who embody fairness, honesty, and accountability."
                        },
                        {
                          title: "Dynamic Classroom Chemistry",
                          desc: "Experienced teachers instinctively read collective room energy, pivoting their pedagogical approach when sensing student exhaustion or confusion."
                        }
                      ].map((item, idx) => (
                        <div key={idx} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "12px 14px" }}>
                          <strong style={{ fontSize: "0.88rem", color: "#166534" }}>{item.title}:</strong>
                          <p style={{ margin: "4px 0 0", fontSize: "0.84rem", color: "#14532d", lineHeight: 1.45 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>

                    {/* Non-Opinion Side Angles (AI as Augmentative Tool) */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <span className="apple-badge warning" style={{ alignSelf: "flex-start", fontSize: "0.75rem", background: "#fee2e2", color: "#991b1b" }}>
                        🔴 NON-OPINION SIDE: AI'S AUGMENTATIVE STRENGTHS
                      </span>
                      {[
                        {
                          title: "Personalized Practice Velocity",
                          desc: "Intelligent software calibrates math problem difficulty and vocabulary drills to each student's exact speed, preventing boredom and frustration."
                        },
                        {
                          title: "Administrative Liberation",
                          desc: "Automating repetitive clerical tasks and objective grading frees educators to dedicate their limited energy to direct student mentorship."
                        },
                        {
                          title: "24/7 Homework Assistance",
                          desc: "Synthetic tutors provide continuous diagnostic guidance outside school hours, allowing students to clarify doubts whenever they study."
                        },
                        {
                          title: "Educational Lifeline in Remote Regions",
                          desc: "In under-resourced communities facing severe human teacher deficits, mobile AI tools deliver vital foundational literacy and numeracy lessons."
                        }
                      ].map((item, idx) => (
                        <div key={idx} style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "12px", padding: "12px 14px" }}>
                          <strong style={{ fontSize: "0.88rem", color: "#991b1b" }}>{item.title}:</strong>
                          <p style={{ margin: "4px 0 0", fontSize: "0.84rem", color: "#7f1d1d", lineHeight: 1.45 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
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
                    <strong>Mandatory Body Paragraph Format:</strong> 1 Main reason + Supporting reasons + Example. Construct every body paragraph with this inverted pyramid of logical cohesion:
                  </p>
                </div>

                {[
                  {
                    step: "Tier 01",
                    badge: "1 Main Reason",
                    title: "State 1 Clear Primary Reason",
                    say: "“Foremost among the reasons why artificial intelligence cannot supplant educators is that learning is an inherently relational endeavor requiring emotional intelligence and pastoral empathy.”",
                    takeaway: "Direct, unequivocal claim addressing the prompt without waffle."
                  },
                  {
                    step: "Tier 02",
                    badge: "Supporting Reasons",
                    title: "Unpack WHY and HOW with Causal Supporting Reasons",
                    say: "“Children and adolescents routinely experience motivational slumps, anxiety, and social friction. An observant teacher detects non-verbal cues and provides psychological reassurance, whereas algorithms possess zero consciousness or empathy.”",
                    takeaway: "Explains the psychological, cognitive, and relational mechanics."
                  },
                  {
                    step: "Tier 03",
                    badge: "Example",
                    title: "Substantiate with Specific Evidence",
                    say: "“For example, when a pupil struggles academically due to bereavement or severe domestic stress, an attentive educator offers compassionate counseling, whereas an automated software would rigidly log the missed deadline as academic failure.”",
                    takeaway: "Pins the theoretical reasoning to an undeniable real-world scenario."
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
                    topic: "Emotional Connection & Empathy (Body 1)",
                    band6: "Robots do not have feelings so they cannot understand when a student is crying or sad.",
                    band9: "Artificial neural networks operate entirely on cold computational logic, remaining fundamentally devoid of the conscious empathy and psychological intuition required to support emotionally vulnerable learners.",
                    why: "Replaces simplistic language with precise psychological and academic terminology: 'computational logic', 'conscious empathy', 'psychological intuition'."
                  },
                  {
                    topic: "Critical Thinking & Socratic Debate (Body 2)",
                    band6: "Teachers are better because they ask hard questions and make kids discuss things in class.",
                    band9: "Cultivating higher-order critical faculties requires dynamic Socratic facilitation, wherein an experienced human mentor interrogates student assumptions and navigates contentious ethical dilemmas.",
                    why: "Frames classroom discussion in terms of cognitive development: 'higher-order critical faculties', 'Socratic facilitation', 'interrogates student assumptions'."
                  },
                  {
                    topic: "AI as an Augmentative Tool (Body 3 Concession)",
                    band6: "AI is good because it checks homework fast and teaches math easily.",
                    band9: "Artificial intelligence functions as an exceptional augmentative asset by delivering calibrated practice exercises and automating routine assessment marking, thereby liberating educators from clerical exhaustion.",
                    why: "Uses precise conceptual framing: 'augmentative asset', 'calibrated practice exercises', 'clerical exhaustion'."
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
                    formula: "“With rapid advances in educational technology, it is often asserted that [AI will replace teachers in the classroom]. While I acknowledge that [AI can personalize drills and automate grading], I largely disagree that it will ever fully supersede human educators, whose [empathy, ethical mentorship, and critical facilitation] remain irreplaceable.”"
                  },
                  {
                    title: "2. Body 1 Opener Formula (Opinion Side — Empathy)",
                    formula: "“Foremost among the reasons why artificial intelligence cannot supplant educators is that learning is an inherently relational endeavor requiring [emotional intelligence and pastoral empathy].”"
                  },
                  {
                    title: "3. Body 2 Opener Formula (Opinion Side — Critical Thinking)",
                    formula: "“Equally significant is that cultivating higher-order cognitive faculties and moral reasoning necessitates [spontaneous human dialogue, intellectual challenge, and ethical stewardship].”"
                  },
                  {
                    title: "4. Body 3 Opener Formula (Non-Opinion Side — AI's Role)",
                    formula: "“On the other hand, proponents legitimately emphasize that artificial intelligence has immense value as an augmentative educational aid that [personalizes practice drills and streamlines administrative duties].”"
                  },
                  {
                    title: "5. Conclusion Formula (Sum-up Main Ideas + Restate Opinion)",
                    formula: "“In conclusion, although artificial intelligence is poised to revolutionize schooling by [automating grading and tailoring drills], I firmly disagree that it will replace classroom teachers. The essence of genuine education lies in [human empathy, moral stewardship, and inspirational mentorship]—qualities that no software can replicate.”"
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

                {/* Teaching Recommendation */}
                <div
                  style={{
                    background: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%)",
                    border: "1.5px solid #86efac",
                    borderRadius: "16px",
                    padding: "16px 20px",
                    boxShadow: "var(--shadow-sm)"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#166534", marginBottom: "6px" }}>
                    <Award size={18} />
                    <h5 style={{ fontSize: "0.95rem", fontWeight: 800, margin: 0 }}>
                      Faculty Teaching Recommendation
                    </h5>
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "#14532d", margin: 0, lineHeight: 1.55 }}>
                    Instruct students to strictly maintain the <strong>1 Main reason + Supporting reasons + Example</strong> formula in every body paragraph. Build Body 1 around emotional empathy, Body 2 around critical thinking and ethics, and use Body 3 to concede AI's augmentative role in homework and grading automation. Conclude decisively that assisting a teacher is fundamentally distinct from replacing one.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
