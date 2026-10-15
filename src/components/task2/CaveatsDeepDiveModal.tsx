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
                    FACULTY &amp; EXAMINER MASTERCLASS
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "var(--slate-500)", fontWeight: 600 }}>
                    Teacher Idea Bank • Analytical Extensions &amp; Discussion Prompts
                  </span>
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--slate-900)", margin: "3px 0 0" }}>
                  Faculty Idea Bank &amp; High-Band Argumentation
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
                    “Would you rather have a child at 25 while still building your career, or at 35 when you are financially established?”
                  </blockquote>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "4px" }}>
                    <span className="apple-badge neutral" style={{ background: "#ffffff", fontSize: "0.78rem" }}>
                      Follow-up 1: Does financial security automatically make someone a better parent?
                    </span>
                    <span className="apple-badge neutral" style={{ background: "#ffffff", fontSize: "0.78rem" }}>
                      Follow-up 2: Can emotional maturity compensate for financial instability?
                    </span>
                    <span className="apple-badge neutral" style={{ background: "#ffffff", fontSize: "0.78rem" }}>
                      Follow-up 3: Is there ever a perfect time to start a family?
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--slate-600)", fontStyle: "italic" }}>
                    ✦ Pedagogical Purpose: These questions help students see that the issue is not simply age; it is the level of preparedness that age may bring.
                  </p>
                </div>

                {/* 8 Faculty Analytical Angles */}
                <div>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 750, color: "var(--slate-900)", marginBottom: "12px" }}>
                    Faculty / Teacher Idea Bank (8 Analytical Discussion Angles)
                  </h4>
                  <div className="stage-grid-2col" style={{ gap: "14px" }}>
                    {/* Positive Angles */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <span className="apple-badge success" style={{ alignSelf: "flex-start", fontSize: "0.75rem" }}>
                        🟢 POSITIVE ANGLES (EXTENDED TEACHING)
                      </span>
                      {[
                        {
                          title: "Reduced Financial Dependence",
                          desc: "Couples who have established their own incomes may be less dependent on parents or extended family, allowing them to make independent decisions about their household and children."
                        },
                        {
                          title: "Greater Equality Within Relationships",
                          desc: "When both partners have had time to pursue education and careers, they may be better positioned to negotiate domestic responsibilities and share financial decisions."
                        },
                        {
                          title: "Breaking the Cycle of Financial Insecurity",
                          desc: "Parents who enter family life with savings and stable employment may be better able to invest in nutrition, education and enriching experiences for their children."
                        },
                        {
                          title: "More Deliberate Family Planning",
                          desc: "Delaying parenthood can give couples time to decide whether they genuinely want children and how many they can realistically support, potentially reducing unplanned pregnancies."
                        }
                      ].map((item, idx) => (
                        <div key={idx} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "12px 14px" }}>
                          <strong style={{ fontSize: "0.88rem", color: "#166534" }}>{item.title}:</strong>
                          <p style={{ margin: "4px 0 0", fontSize: "0.84rem", color: "#14532d", lineHeight: 1.45 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>

                    {/* Negative Angles */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <span className="apple-badge warning" style={{ alignSelf: "flex-start", fontSize: "0.75rem", background: "#fee2e2", color: "#991b1b" }}>
                        🔴 NEGATIVE ANGLES (EXTENDED TEACHING)
                      </span>
                      {[
                        {
                          title: "A Narrowing Window for Family Planning",
                          desc: "Delayed decisions may leave couples with less flexibility if conception takes longer than expected or they encounter fertility difficulties."
                        },
                        {
                          title: "The Dual Burden of Caring Responsibilities",
                          desc: "People who become parents later may simultaneously have young children and ageing parents who need financial or practical support."
                        },
                        {
                          title: "Over-Optimisation of Life Plans",
                          desc: "Waiting for the perfect salary, house or career position may lead some individuals to postpone family life indefinitely because complete security is rarely achievable."
                        },
                        {
                          title: "Changing Expectations of Independence",
                          desc: "People accustomed to controlling their time and spending may find the compromises required by marriage and parenting more challenging than anticipated."
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
                    <strong>The 3-Tier Body Paragraph Blueprint:</strong> Construct every body paragraph like an inverted pyramid of logic:
                  </p>
                </div>

                {[
                  {
                    step: "Tier 01",
                    badge: "Topic Sentence",
                    title: "State 1 Clear Primary Reason",
                    say: "“Foremost among the advantages is that delaying marriage and parenthood until one’s thirties allows individuals to establish robust financial resilience before taking on familial obligations.”",
                    takeaway: "Direct, unequivocal claim answering the question."
                  },
                  {
                    step: "Tier 02",
                    badge: "Supporting Causal Engine",
                    title: "Unpack WHY and HOW with Supporting Reasons",
                    say: "“Young adults in their twenties frequently face volatile rental markets and student debts. Remaining unencumbered affords them time to attain career seniority, accumulate emergency capital, and secure stable housing.”",
                    takeaway: "Explains the underlying economic, professional, and lifestyle mechanics."
                  },
                  {
                    step: "Tier 03",
                    badge: "Concrete Real-World Anchor",
                    title: "Substantiate with Specific Evidence",
                    say: "“For example, dual-income couples in major metropolitan regions who marry in their early thirties are far more capable of purchasing fixed-rate homes and funding early childhood education without incurring debt.”",
                    takeaway: "Pins the theoretical argument to an undeniable, verified real-world reality."
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
                    topic: "Financial & Household Stability",
                    band6: "People in their 30s have better jobs and more money so they can buy a house and feed their babies easily.",
                    band9: "Postponing domestic commitments until one’s fourth decade ensures couples have attained professional seniority and accumulated capital reserves, thereby shielding the burgeoning household from chronic financial precarity.",
                    why: "Replaces colloquial expressions with high-register academic collocations: 'attained professional seniority', 'accumulated capital reserves', 'chronic financial precarity'."
                  },
                  {
                    topic: "Emotional Maturity & Marital Durability",
                    band6: "Older people understand each other more and do not fight or get divorced as quickly as young people.",
                    band9: "Greater psychological maturity and emotional equanimity acquired through twenties life experience substantially reduce domestic friction and correlate with precipitously lower rates of marital breakdown.",
                    why: "Frames relationship stability through mature psychological dynamics: 'emotional equanimity', 'marital breakdown'."
                  },
                  {
                    topic: "Biological Fertility Limits (Counterpoint)",
                    band6: "Having babies when you are older is dangerous and women cannot get pregnant easily.",
                    band9: "Advanced parental age brings physiological challenges, as natural fecundity declines sharply past the mid-thirties, increasing reliance on invasive reproductive interventions and elevating maternal health risks.",
                    why: "Deploys precise biomedical and demographic terminology: 'natural fecundity', 'reproductive interventions', 'maternal health risks'."
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
                    title: "Outweighing Thesis Formula (Introduction)",
                    formula: "“Although [concession: biological fertility constraints and demographic aging] present undeniable hurdles, I firmly contend that [core advantages: accumulated financial stability and psychological maturity] render this trend predominantly positive.”"
                  },
                  {
                    title: "Body 1 Opener Formula (Strong Advantage 1)",
                    formula: "“Foremost among the compelling merits of deferring family formation is the unprecedented [financial resilience / economic security] that established careers afford prospective parents.”"
                  },
                  {
                    title: "Body 2 Opener Formula (Strong Advantage 2)",
                    formula: "“Beyond financial solvency, mature adulthood fosters [heightened emotional equanimity] and [workplace seniority], creating an intrinsically more stable environment for raising children.”"
                  },
                  {
                    title: "Body 3 Opener Formula (Non-Opinion Counterpoint)",
                    formula: "“On the other hand, detractors cogently point to [the physiological decline in reproductive capacity] and [the macroeconomic pressures of an aging societal demographic].”"
                  },
                  {
                    title: "Decisive Verdict Formula (Conclusion)",
                    formula: "“In conclusion, while starting families in one’s thirties entails genuine biological and demographic complexities, the enduring advantages of parental maturity and financial security make this development overwhelmingly beneficial.”"
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
                    Have students build their essay around financial preparedness and emotional maturity, then acknowledge reproductive constraints as the principal counterargument. This gives them a clear, defensible position without making unsupported claims that marrying later always leads to better relationships or parenting.
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
