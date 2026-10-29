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

                {/* 11 Faculty Analytical Angles (6 Advantages + 5 Disadvantages) */}
                <div>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 750, color: "var(--slate-900)", marginBottom: "12px" }}>
                    Student Idea Bank — Relatable Examples &amp; Real-Life Angles
                  </h4>
                  <div className="stage-grid-2col" style={{ gap: "14px" }}>
                    {/* Advantages: 6 Points */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <span className="apple-badge accent" style={{ alignSelf: "flex-start", fontSize: "0.75rem", background: "#dcfce7", color: "#166534" }}>
                        🟢 ADVANTAGES: 6 RELATABLE REASONS &amp; EXAMPLES
                      </span>
                      {[
                        {
                          tag: "Standard Idea 1",
                          title: "1. Builds Perseverance",
                          desc: "Children may be more willing to practise difficult skills instead of giving up after initial failure.",
                          example: "Example: A student who performs poorly in mathematics may practise regularly, seek help and gradually improve their results."
                        },
                        {
                          tag: "Standard Idea 2",
                          title: "2. Encourages Self-Confidence & Ambition",
                          desc: "Children may become more willing to attempt challenging tasks, participate in competitions or pursue demanding careers.",
                          example: "Example: A child who believes improvement is possible may audition for a school play despite being nervous about performing in public."
                        },
                        {
                          tag: "Standard Idea 3",
                          title: "3. Develops Personal Responsibility",
                          desc: "Children learn that their choices, preparation and consistent effort can influence their progress rather than waiting for success automatically.",
                          example: "Example: A student creates an organized daily revision schedule for exams rather than relying on parents or luck."
                        },
                        {
                          tag: "Real-Life Angle 1",
                          title: "4. Less Afraid of Making Mistakes",
                          desc: "If children believe effort leads to improvement, they see mistakes as part of learning rather than evidence of incompetence.",
                          example: "Example: A child learning to ride a bicycle may keep practising after falling instead of giving up out of embarrassment."
                        },
                        {
                          tag: "Real-Life Angle 2",
                          title: "5. Independent Problem-Solvers",
                          desc: "Rather than immediately asking adults to solve every difficulty, children experiment with different approaches and take ownership.",
                          example: "Example: A student struggling with a science project may research alternatives and revise the design instead of abandoning it."
                        },
                        {
                          tag: "Real-Life Angle 3",
                          title: "6. Stronger Work Ethic",
                          desc: "Repeated encouragement establishes habits such as regular practice, preparation and discipline, whose value persists lifelong.",
                          example: "Example: A young athlete may not become a professional player but can still gain fitness, discipline and teamwork skills."
                        }
                      ].map((item, idx) => (
                        <div key={idx} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "10px 12px" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                            <strong style={{ fontSize: "0.86rem", color: "#166534" }}>{item.title}</strong>
                            <span style={{ fontSize: "0.68rem", fontWeight: 700, background: "#dcfce7", color: "#166534", padding: "1px 6px", borderRadius: "4px" }}>
                              {item.tag}
                            </span>
                          </div>
                          <p style={{ margin: "2px 0 4px", fontSize: "0.82rem", color: "#14532d", lineHeight: 1.4 }}>{item.desc}</p>
                          <p style={{ margin: 0, fontSize: "0.78rem", color: "#15803d", fontStyle: "italic", lineHeight: 1.35 }}>{item.example}</p>
                        </div>
                      ))}
                    </div>

                    {/* Disadvantages: 5 Points */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <span className="apple-badge warning" style={{ alignSelf: "flex-start", fontSize: "0.75rem", background: "#fee2e2", color: "#991b1b" }}>
                        ⚡ DISADVANTAGES: 5 RELATABLE DRAWBACKS &amp; EXAMPLES
                      </span>
                      {[
                        {
                          tag: "Standard Idea 1",
                          title: "1. Creates Unrealistic Expectations",
                          desc: "Children may assume that effort alone guarantees success, overlooking financial limits, unequal opportunities, or natural aptitude.",
                          example: "Example: A talented student may work extremely hard to enter a prestigious university but still be unable to afford the fees."
                        },
                        {
                          tag: "Standard Idea 2",
                          title: "2. Leads to Guilt & Low Self-Esteem",
                          desc: "When children fail despite working hard, they may interpret the outcome as proof that they are not capable or did not try enough.",
                          example: "Example: A child who prepares thoroughly but loses a sports competition may feel personally inadequate rather than recognising competitors' advantages."
                        },
                        {
                          tag: "Standard Idea 3",
                          title: "3. Encourages Excessive Pressure",
                          desc: "Children may overwork themselves, become afraid of failure or sacrifice sleep and leisure because they believe they must succeed at everything.",
                          example: "Example: A student may study late every night to achieve top grades, eventually experiencing exhaustion and reduced concentration."
                        },
                        {
                          tag: "Real-Life Angle 1",
                          title: "4. Confusing Persistence with Never Giving Up",
                          desc: "They might continue pursuing an unsuitable goal simply because they believe changing direction means they have failed.",
                          example: "Example: A teenager may continue preparing for a career they dislike rather than exploring a field better suited to their interests."
                        },
                        {
                          tag: "Real-Life Angle 2",
                          title: "5. Encourages Unhealthy Comparisons",
                          desc: "Children may assume that anyone who achieves more must have worked harder, overlooking differences in resources and support.",
                          example: "Example: A student who receives lower marks than a classmate may feel inferior despite having made substantial progress."
                        }
                      ].map((item, idx) => (
                        <div key={idx} style={{ background: "#fff1f2", border: "1px solid #fecdd3", borderRadius: "12px", padding: "10px 12px" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                            <strong style={{ fontSize: "0.86rem", color: "#991b1b" }}>{item.title}</strong>
                            <span style={{ fontSize: "0.68rem", fontWeight: 700, background: "#fee2e2", color: "#991b1b", padding: "1px 6px", borderRadius: "4px" }}>
                              {item.tag}
                            </span>
                          </div>
                          <p style={{ margin: "2px 0 4px", fontSize: "0.82rem", color: "#881337", lineHeight: 1.4 }}>{item.desc}</p>
                          <p style={{ margin: 0, fontSize: "0.78rem", color: "#be123c", fontStyle: "italic", lineHeight: 1.35 }}>{item.example}</p>
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
                    title: "Paraphrase Prompt + Explicit Thesis Statement",
                    say: "“In many societies, children are consistently taught that hard work guarantees success in any endeavor. While this message fosters admirable resilience and ambition, it also risks severe self-blame and overlooks natural limitations.”",
                    takeaway: "Directly fulfills Task Achievement with a concise 33-word opening and an unmistakable roadmap."
                  },
                  {
                    step: "Para 02",
                    badge: "Body 1 (Advantages)",
                    title: "Develop 2 Main Reasons + Relatable Student Examples",
                    say: "“On the positive side, imparting this empowering philosophy yields two substantial benefits. Primarily, it builds perseverance; children taught that diligence determines success are far more willing to practise challenging skills instead of quitting after early defeat, as seen in a student who struggles with mathematics but practises regularly to steadily elevate their performance. Furthermore, this belief inspires ambition, encouraging youngsters to audition for competitive school plays or tackle daunting projects without paralyzing fear of failure.”",
                    takeaway: "Provides two distinct advantages with thorough explanation and relatable student examples."
                  },
                  {
                    step: "Para 03",
                    badge: "Body 2 (Disadvantages)",
                    title: "Develop 2 Main Reasons + Real-Life Drawbacks",
                    say: "“Conversely, propagating this unconstrained narrative produces two profound drawbacks. Foremost among these is the creation of unrealistic expectations that blind youth to financial limits and unequal opportunities, such as when a talented student works relentlessly for an elite university but remains unable to afford tuition fees. Additionally, it frequently induces deep-seated guilt and low self-esteem, causing a dedicated child who loses a sports tournament to feel personally inadequate rather than recognising superior competition.”",
                    takeaway: "Exposes psychological guilt and financial/systemic constraints with relatable real-world evidence."
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
                    topic: "Body 1 (Advantages): Perseverance & Mathematics Example",
                    band6: "Telling kids to work hard is good because a student who is bad at math will practice every day and finally pass their exams.",
                    band9: "Primarily, this message instills admirable perseverance, encouraging pupils to practise demanding competencies rather than surrendering after early setbacks, as demonstrated when struggling mathematics students seek assistance and steadily elevate their performance.",
                    why: "Replaces simplistic language with precise academic structures and natural cohesive development."
                  },
                  {
                    topic: "Body 2 (Disadvantages): Sports Defeat & Unfair Guilt",
                    band6: "When children lose a game after training hard, they feel stupid and think their parents were lying about hard work.",
                    band9: "If children are taught that effort guarantees success, any defeat is interpreted as a shameful personal inadequacy, causing dedicated young athletes who lose matches to shoulder deep guilt while overlooking competitors' superior experience.",
                    why: "Elevates informal emotional complaints into mature psychological attribution analysis."
                  },
                  {
                    topic: "Conclusion: Balanced Synthesis & Recommendation",
                    band6: "In conclusion, hard work is good for school but too much pressure is bad, so parents should be careful with their advice.",
                    band9: "In conclusion, while reassuring children that effort unlocks all doors effectively instills tenacity, guardians must temper aspirational optimism with pragmatic realism, ensuring youth develop self-compassion alongside ambition.",
                    why: "Demonstrates high-level cohesion, lexical precision, and an actionable pedagogical recommendation."
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
                    title: "1. Introduction Formula (Paraphrase + Explicit Thesis Statement)",
                    formula: "“In many societies, children are consistently taught that [hard work guarantees success in any endeavor]. While this message fosters [admirable resilience and ambition], it also risks [severe self-blame and overlooks natural limitations].”"
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

