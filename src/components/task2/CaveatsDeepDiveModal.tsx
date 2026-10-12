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
  const [activeTab, setActiveTab] = useState<"rationale" | "method" | "comparisons" | "formulas">("rationale");

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
                    OUTWEIGHING ESSAY MASTERCLASS
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "var(--slate-500)", fontWeight: 600 }}>
                    Step 06 Deep Dive • 1 Main Reason + Support + Example
                  </span>
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--slate-900)", margin: "3px 0 0" }}>
                  Mastering the 3-Body Paragraph Architecture &amp; Causal Depth
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
              { id: "formulas", label: "4. Outweighing Formulas", icon: <BookOpen size={15} /> }
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
                      The "Shopping List" Mistake (Band 6.0 Trap)
                    </h5>
                    <p style={{ fontSize: "0.9rem", color: "#78350f", margin: 0, lineHeight: 1.55 }}>
                      Band 6 candidates dump 3 or 4 rushed points in one paragraph without developing any of them (*"Supermarket imports are good because we get bananas, and chocolate, and farmers get money, but ships pollute"*). IELTS Band 8.5+ criteria for Task Achievement strictly requires <strong>“a fully developed response with relevant, extended and supported ideas.”</strong>
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
                        1. One Main Reason = Analytical Depth
                      </h5>
                    </div>
                    <p style={{ fontSize: "0.88rem", color: "var(--slate-600)", lineHeight: 1.55, margin: 0 }}>
                      Focusing on <strong>1 main reason per body paragraph</strong> in the format <code>[ 1 Main Reason + Supporting Reasons + Example ]</code> allows students to unpack the causal chain thoroughly (e.g. why frost limits winter yields, how opposite-hemisphere imports prevent scurvy and localized inflation).
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
                        2. Verifiable Evidence vs. Vague Generalities
                      </h5>
                    </div>
                    <p style={{ fontSize: "0.88rem", color: "var(--slate-600)", lineHeight: 1.55, margin: 0 }}>
                      Effective essays substantiate with concrete precedents. Citing <em>Fairtrade farming cooperatives in Colombia and Ghana</em> or <em>South American winter berry air freight</em> demonstrates authentic academic authority and directly satisfies Task Achievement.
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
                    title: "State 1 Clear Primary Reason",
                    say: "“Foremost among the advantages is that stocking imported merchandise affords consumers unprecedented dietary diversity and counter-seasonal nutritional resilience.”",
                    takeaway: "Direct, unequivocal claim answering the question."
                  },
                  {
                    step: "Tier 02",
                    badge: "Supporting Causal Engine",
                    title: "Unpack WHY and HOW with Supporting Reasons",
                    say: "“In colder climates, domestic harvests are paralyzed during winter months. International supply chains transcend these natural limits, ensuring families have continuous access to fresh produce and eliminating winter vitamin deficiencies.”",
                    takeaway: "Explains the underlying economic, climatic, and biological mechanics."
                  },
                  {
                    step: "Tier 03",
                    badge: "Concrete Real-World Anchor",
                    title: "Substantiate with Specific Evidence",
                    say: "“For instance, European consumers routinely purchase Spanish citrus and Mexican avocados in midwinter at stable, affordable price points without suffering seasonal inflation.”",
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
                    topic: "Consumer Variety & Nutrition",
                    band6: "Supermarkets have food from everywhere so people can buy different fruits and vegetables every day.",
                    band9: "Supermarket imports confer unprecedented dietary diversification, liberating households from localized climatic ceilings to sustain optimal nutritional intake throughout winter.",
                    why: "Replaces simplistic vocabulary with precise academic collocations: 'unprecedented dietary diversification', 'localized climatic ceilings'."
                  },
                  {
                    topic: "Global Trade Cooperation",
                    band6: "Selling food makes poor countries get money and become richer.",
                    band9: "Procurement contracts with developing farming cooperatives inject essential foreign capital into rural agrarian economies, fostering mutually advantageous bilateral trade linkages.",
                    why: "Connects commercial food transactions to institutional macroeconomic development."
                  },
                  {
                    topic: "Environmental Food Miles (Counterpoint)",
                    band6: "Flying food in planes is bad for nature because of pollution.",
                    band9: "The intercontinental aviation transit of perishable goods generates excessive 'food miles' and substantial carbon emissions, imposing severe ecological externalities.",
                    why: "Deploys precise environmental terminology ('food miles', 'aviation transit', 'ecological externalities')."
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
                    formula: "“Although [concession: transport carbon emissions and pressure on domestic farmers] remain legitimate concerns, I firmly contend that [core advantages: counter-seasonal nutrition and mutual global trade] decisively outweigh these drawbacks.”"
                  },
                  {
                    title: "Body 1 Opener Formula (Strong Advantage 1)",
                    formula: "“Foremost among the compelling merits of international food retail is the unprecedented [dietary diversity / counter-seasonal nutritional security] that global supply networks afford modern households.”"
                  },
                  {
                    title: "Body 2 Opener Formula (Strong Advantage 2)",
                    formula: "“Beyond consumer convenience, cross-border agricultural trade serves as an indispensable macroeconomic catalyst by [enriching developing agrarian exporters] and [compelling domestic producers to modernize].”"
                  },
                  {
                    title: "Body 3 Opener Formula (Non-Opinion Counterpoint)",
                    formula: "“On the other hand, detractors cogently point to [the environmental toll of extended food miles] and [the commercial precarity imposed on local smallholders].”"
                  },
                  {
                    title: "Decisive Verdict Formula (Conclusion)",
                    formula: "“In conclusion, while the proliferation of imported food generates transport emissions and challenges local growers, the overriding benefits of universal nutritional resilience and international economic cooperation render this development predominantly advantageous.”"
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
