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
                  Fresh, Easily Justifiable Ideas: Growth Mindset vs. Psychological Burnout
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
              { id: "method", label: "4-Paragraph Architecture", icon: <GitBranch size={16} /> },
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
                    “When a child spends years practicing basketball but stops growing at 5 feet 4 inches, does telling them 'you can achieve anything' inspire them or set them up for heartbreak?”
                  </blockquote>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "4px" }}>
                    <span className="apple-badge neutral" style={{ background: "#ffffff", fontSize: "0.78rem" }}>
                      Follow-up 1: Why do students in high-pressure exam systems blame themselves when they fail, even after studying 14 hours a day?
                    </span>
                    <span className="apple-badge neutral" style={{ background: "#ffffff", fontSize: "0.78rem" }}>
                      Follow-up 2: How does Carol Dweck's research on praising 'effort rather than talent' build emotional resilience?
                    </span>
                    <span className="apple-badge neutral" style={{ background: "#ffffff", fontSize: "0.78rem" }}>
                      Follow-up 3: Can pure willpower conquer poverty and institutional barriers without external social support?
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--slate-600)", fontStyle: "italic" }}>
                    ✦ Pedagogical Purpose: This concrete question helps students instantly grasp the distinction between encouraging healthy effort (growth mindset) and making false promises that defy biology and economic reality.
                  </p>
                </div>

                {/* 8 Faculty Analytical Angles */}
                <div>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 750, color: "var(--slate-900)", marginBottom: "12px" }}>
                    Teacher Idea Bank (Strictly Advantages &amp; Disadvantages)
                  </h4>
                  <div className="stage-grid-2col" style={{ gap: "14px" }}>
                    {/* Advantages: Growth Mindset & Upward Mobility */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <span className="apple-badge accent" style={{ alignSelf: "flex-start", fontSize: "0.75rem", background: "#dcfce7", color: "#166534" }}>
                        🟢 ADVANTAGES: WHY EFFORT EMPOWERS CHILDREN
                      </span>
                      {[
                        {
                          title: "Fosters an Intrinsic Growth Mindset",
                          desc: "Teaches children that cognitive capability is malleable through practice rather than fixed, building resilience against early academic failure."
                        },
                        {
                          title: "Engine for Upward Social Mobility",
                          desc: "Eliminates defeatist mental ceilings for youngsters from disadvantaged backgrounds, inspiring them to pursue medicine, law, and elite STEM careers."
                        },
                        {
                          title: "Long-Term Emotional Tenacity & Grit",
                          desc: "Encourages students to perceive setbacks as constructive feedback rather than permanent personal indictments, sustaining motivation."
                        },
                        {
                          title: "Eradication of Defeatist Reluctance",
                          desc: "Sparks willing engagement in intimidating subjects like advanced mathematics and languages without fear of appearing unintelligent."
                        }
                      ].map((item, idx) => (
                        <div key={idx} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "12px 14px" }}>
                          <strong style={{ fontSize: "0.88rem", color: "#166534" }}>{item.title}:</strong>
                          <p style={{ margin: "4px 0 0", fontSize: "0.84rem", color: "#14532d", lineHeight: 1.45 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>

                    {/* Disadvantages: Self-Blame & Inherent Limitations */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <span className="apple-badge warning" style={{ alignSelf: "flex-start", fontSize: "0.75rem", background: "#fee2e2", color: "#991b1b" }}>
                        ⚡ DISADVANTAGES: PSYCHOLOGICAL PERILS &amp; REALITIES
                      </span>
                      {[
                        {
                          title: "Acute Psychological Self-Blame & Guilt",
                          desc: "Framing success purely as effort leads children to conclude that any failure is a shameful personal inadequacy and moral defect."
                        },
                        {
                          title: "Denial of Inborn Biological Aptitudes",
                          desc: "Ignores natural physical and neurological prerequisites (e.g., height in basketball, innate musical pitch), leading to wasted formative years."
                        },
                        {
                          title: "Disregard for Structural Inequities",
                          desc: "Promotes a naive meritocracy myth that blinds young people to financial inequities, systemic bottlenecks, and the unavoidable role of luck."
                        },
                        {
                          title: "Severe Adolescent Burnout & Anxiety",
                          desc: "High-stakes educational pressure (e.g., East Asian exam culture) triggers clinical depression when diligent students miss limited quotas."
                        }
                      ].map((item, idx) => (
                        <div key={idx} style={{ background: "#fff1f2", border: "1px solid #fecdd3", borderRadius: "12px", padding: "12px 14px" }}>
                          <strong style={{ fontSize: "0.88rem", color: "#991b1b" }}>{item.title}:</strong>
                          <p style={{ margin: "4px 0 0", fontSize: "0.84rem", color: "#881337", lineHeight: 1.45 }}>{item.desc}</p>
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
                    <strong>Mandatory 4-Paragraph Structure:</strong> Intro (Paraphrase + Thesis) → Body 1 (Advantages: 2 Main Reasons + Supporting + Example) → Body 2 (Disadvantages: 2 Main Reasons + Example) → Conclusion (Sum-up main reasons + Suggestion/Recommendation).
                  </p>
                </div>

                {[
                  {
                    step: "Para 01",
                    badge: "Introduction",
                    title: "Paraphrase Prompt + Balanced Thesis Statement",
                    say: "“In various parts of the world, children are consistently instilled with the belief that boundless success is achievable solely through diligence and relentless effort. While this message undeniably nurtures resilience, a growth mindset, and high personal aspirations, it simultaneously introduces notable perils, particularly the risk of severe psychological distress and an unrealistic disregard for innate limitations.”",
                    takeaway: "Directly fulfills Task Achievement by presenting a clear, balanced overview from the opening sentences."
                  },
                  {
                    step: "Para 02",
                    badge: "Body 1 (Advantages)",
                    title: "Develop 2 Main Reasons + Supporting Reasons + Carol Dweck Example",
                    say: "“On the positive side, imparting this empowering philosophy yields two substantial benefits. Primarily, it cultivates an intrinsic growth mindset and a strong work ethic... Furthermore, this outlook serves as an engine for social mobility by eliminating self-imposed psychological ceilings... A compelling illustration is evident in research by Dr. Carol Dweck; students praised for effort exhibited markedly higher perseverance.”",
                    takeaway: "Provides two distinct advantages with thorough explanation and empirical psychological evidence."
                  },
                  {
                    step: "Para 03",
                    badge: "Body 2 (Disadvantages)",
                    title: "Develop 2 Main Reasons + High-Stakes Exam Example",
                    say: "“Conversely, propagating this unconstrained narrative produces two profound drawbacks. The foremost hazard is the onset of acute psychological distress and devastating self-blame... In addition, this simplistic doctrine fosters a naive blindness toward tangible genetic limitations and structural societal barriers... For instance, in hyper-competitive systems like South Korea, the expectation that exertion guarantees admission precipitates severe depression when bottlenecks block hardworking candidates.”",
                    takeaway: "Exposes psychological guilt and biological/systemic limits with compelling real-world evidence."
                  },
                  {
                    step: "Para 04",
                    badge: "Conclusion",
                    title: "Sum-Up All Main Reasons + Suggestion / Recommendation",
                    say: "“In conclusion, while reassuring children that effort unlocks all doors effectively instills tenacity and fuels upward mobility, it can equally inflict crippling self-reproach and blind individuals to inevitable biological and socioeconomic constraints. It is therefore recommended that educators and guardians balance aspirational encouragement with pragmatic guidance, teaching the youth that while giving their utmost effort is commendable, developing self-compassion when facing unalterable realities is equally vital.”",
                    takeaway: "Crisp 2-sentence closure that synthesizes both sides and delivers actionable pedagogical guidance."
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
                    topic: "Body 1 (Advantages): Growth Mindset & Resilience",
                    band6: "Telling kids to work hard is good because they will try more and get better marks in school when things get tough.",
                    band9: "Primarily, this message cultivates an intrinsic growth mindset and a strong work ethic, prompting young minds to interpret setbacks as constructive learning opportunities rather than insurmountable barriers.",
                    why: "Replaces vague verbs and simplistic claims with precise developmental terms: 'intrinsic growth mindset', 'constructive learning opportunities'."
                  },
                  {
                    topic: "Body 2 (Disadvantages): Acute Psychological Guilt & Burnout",
                    band6: "If kids fail they will feel sad and think they are stupid because their parents told them hard work is everything.",
                    band9: "If children are led to believe that success is solely a product of willpower, they inevitably conclude that any failure is a direct personal deficiency, resulting in debilitating self-blame, perfectionism, and early burnout.",
                    why: "Elevates conversational feelings into analytical psychology: 'product of willpower', 'debilitating self-blame', 'perfectionism'."
                  },
                  {
                    topic: "Conclusion: Balanced Synthesis & Recommendation",
                    band6: "In conclusion, hard work is good but too much pressure is bad, so parents should be careful with their advice.",
                    band9: "In conclusion, while reassuring children that effort unlocks all doors fuels upward mobility, it is recommended that guardians balance aspirational encouragement with pragmatic guidance and self-compassion.",
                    why: "Demonstrates high-level cohesion and adult recommendation: 'temper aspirational encouragement with pragmatic guidance and self-compassion'."
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
                    title: "1. Introduction Formula (Paraphrase + Balanced Thesis)",
                    formula: "“In various parts of the world, children are consistently instilled with the belief that [boundless success is achievable solely through diligence]. While this message undeniably [nurtures resilience, a growth mindset, and high aspirations], it simultaneously introduces notable perils, particularly [the risk of severe psychological distress and an unrealistic disregard for innate limitations].”"
                  },
                  {
                    title: "2. Body 1 Opener Formula (Advantages: 2 Reasons + Supporting + Example)",
                    formula: "“On the positive side, imparting this empowering philosophy yields two substantial benefits. Primarily, it [cultivates an intrinsic growth mindset and a strong work ethic]... Furthermore, this outlook serves as an engine for [social mobility by eliminating self-imposed psychological ceilings]...”"
                  },
                  {
                    title: "3. Body 2 Opener Formula (Disadvantages: 2 Reasons + Example)",
                    formula: "“Conversely, propagating this unconstrained narrative produces two profound drawbacks. The foremost hazard is [the onset of acute psychological distress and devastating self-blame]... In addition, this simplistic doctrine fosters [a naive blindness toward tangible genetic limitations and structural societal barriers]...”"
                  },
                  {
                    title: "4. Conclusion Formula (Sum-Up Points + Suggestion / Recommendation)",
                    formula: "“In conclusion, while reassuring children that [effort unlocks all doors effectively instills tenacity and fuels upward mobility], it can equally [inflict crippling self-reproach and blind individuals to inevitable biological constraints]. It is therefore recommended that educators and guardians [balance aspirational encouragement with pragmatic guidance and self-compassion]...”"
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

