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
                  Financial Cybercrime &amp; Identity Theft: High-Band Argumentation &amp; Nuance
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
              { id: "formulas", label: "4. Cause-Effect Formulas & Advice", icon: <BookOpen size={15} /> }
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
                    background: "linear-gradient(135deg, #eff6ff 0%, #fef3c7 100%)",
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
                    “Why has identity theft surged into one of the most lucrative financial crimes globally, and why is restoring a stolen identity so notoriously arduous for victims?”
                  </blockquote>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "4px" }}>
                    <span className="apple-badge neutral" style={{ background: "#ffffff", fontSize: "0.78rem" }}>
                      Follow-up 1: Is individual carelessness to blame, or is the root cause systemic corporate security failures?
                    </span>
                    <span className="apple-badge neutral" style={{ background: "#ffffff", fontSize: "0.78rem" }}>
                      Follow-up 2: Why do financial institutions often place the burden of proof onto the traumatized victim?
                    </span>
                    <span className="apple-badge neutral" style={{ background: "#ffffff", fontSize: "0.78rem" }}>
                      Follow-up 3: How does the borderless nature of cybercrime syndicates shield perpetrators from prosecution?
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--slate-600)", fontStyle: "italic" }}>
                    ✦ Pedagogical Purpose: These questions help students perceive that identity theft is an organized, industrial shadow economy enabled by flawed digital infrastructure, resulting in protracted legal and psychological trauma for individuals.
                  </p>
                </div>

                {/* 8 Faculty Analytical Angles */}
                <div>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 750, color: "var(--slate-900)", marginBottom: "12px" }}>
                    Faculty / Teacher Idea Bank (8 Analytical Discussion Angles)
                  </h4>
                  <div className="stage-grid-2col" style={{ gap: "14px" }}>
                    {/* Causes of Identity Theft */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <span className="apple-badge warning" style={{ alignSelf: "flex-start", fontSize: "0.75rem", background: "#fef3c7", color: "#92400e" }}>
                        ⚡ BODY 1: ROOT CAUSES OF IDENTITY THEFT
                      </span>
                      {[
                        {
                          title: "Ubiquitous Cashless Transactions",
                          desc: "The transition to mobile banking and online merchant checkouts drastically multiplies the attack surface, exposing payment credentials at countless digital touchpoints."
                        },
                        {
                          title: "Systemic Corporate Data Breaches",
                          desc: "Hackers breach centralized commercial databases, exfiltrating millions of unencrypted government ID numbers and credit records for dark-web distribution."
                        },
                        {
                          title: "Sophisticated Social Engineering",
                          desc: "Phishing emails and spoofed banking portals impersonate trusted authorities, manipulating vulnerable individuals into surrendering one-time passcodes and pins."
                        },
                        {
                          title: "Transnational Cybercrime Impunity",
                          desc: "Syndicates operate from foreign jurisdictions with weak extradition pacts, laundering illicit profits via crypto with minimal fear of law enforcement retribution."
                        }
                      ].map((item, idx) => (
                        <div key={idx} style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: "12px", padding: "12px 14px" }}>
                          <strong style={{ fontSize: "0.88rem", color: "#92400e" }}>{item.title}:</strong>
                          <p style={{ margin: "4px 0 0", fontSize: "0.84rem", color: "#78350f", lineHeight: 1.45 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>

                    {/* Effects on Victims */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <span className="apple-badge accent" style={{ alignSelf: "flex-start", fontSize: "0.75rem", background: "#fee2e2", color: "#b91c1c" }}>
                        🔴 BODY 2: DEVASTATING FALLOUT FOR VICTIMS
                      </span>
                      {[
                        {
                          title: "Catastrophic Financial Depletion",
                          desc: "Perpetrators rapidly siphon liquid savings, max out existing credit cards, and secure unauthorized loans, leaving victims facing sudden insolvency."
                        },
                        {
                          title: "Decimated Credit Ratings",
                          desc: "Unpaid fraudulent liabilities register as defaults, causing victims' credit scores to plummet and disqualifying them from mortgages and vehicle loans."
                        },
                        {
                          title: "Protracted Bureaucratic Ordeal",
                          desc: "Victims spend hundreds of agonizing hours disputing false claims, acquiring notarized affidavits, and battling recalcitrant credit bureaus to clean their names."
                        },
                        {
                          title: "Chronic Psychological Distress",
                          desc: "Having one's identity weaponized triggers intense anxiety, paranoia, feelings of severe violation, and insomnia akin to post-traumatic stress."
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
                    <strong>Mandatory Body Paragraph Format:</strong> Cause 1 + Effect 1 + Example. Construct every body paragraph with this cohesive cause-and-effect progression:
                  </p>
                </div>

                {[
                  {
                    step: "Tier 01",
                    badge: "Cause 1",
                    title: "State 1 Clear Primary Cause / Driver",
                    say: "“Foremost among the drivers behind the surge in identity theft is the ubiquity of digital financial transactions coupled with vulnerable corporate data repositories.”",
                    takeaway: "Direct, unequivocal topic sentence establishing the primary root cause."
                  },
                  {
                    step: "Tier 02",
                    badge: "Effect 1",
                    title: "Unpack the Immediate Effect & Causal Mechanism",
                    say: "“As everyday commerce transitions online, consumers submit personal information across countless platforms. When corporate security fails, cyber syndicates exfiltrate sensitive data in bulk and auction credentials on dark-web marketplaces to facilitate automated fraud.”",
                    takeaway: "Explains how the root cause generates immediate destructive effects."
                  },
                  {
                    step: "Tier 03",
                    badge: "Example",
                    title: "Substantiate with Specific Real-World Evidence",
                    say: "“A prominent illustration is the Equifax breach, in which hackers compromised the financial dossiers of over 147 million consumers, triggering an unprecedented wave of unauthorized credit cards and fraudulent loans.”",
                    takeaway: "Anchors the cause and effect to an undeniable real-world cybercrime event."
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
                    topic: "Root Causes: Cyber Breaches & Digital Banking (Body 1)",
                    band6: "Identity theft is increasing because everyone buys things on their phone now and hackers steal passwords from companies.",
                    band9: "The rapid proliferation of identity fraud is catalyzed by ubiquitous cashless transactions and systemic corporate database vulnerabilities, allowing cybercrime syndicates to exfiltrate personally identifiable information en masse.",
                    why: "Replaces vague everyday words with precise technological and academic terminology: 'ubiquitous cashless transactions', 'systemic vulnerabilities', 'exfiltrate personally identifiable information en masse'."
                  },
                  {
                    topic: "Victim Effects: Financial Ruin & Decimated Credit (Body 2)",
                    band6: "Victims lose all their money and their bank accounts are empty so they cannot buy a house or get a loan.",
                    band9: "Beyond immediate capital depletion, victims endure decimated credit ratings and false debt liabilities, effectively blacklisting them from obtaining mortgages, auto loans, or employment opportunities.",
                    why: "Frames the consequence comprehensively: 'immediate capital depletion', 'decimated credit ratings', 'blacklisting them from mortgages'."
                  },
                  {
                    topic: "Victim Effects: Psychological & Bureaucratic Toll (Body 2)",
                    band6: "People feel very sad and stressed out because they have to call the police and banks for many months.",
                    band9: "Compounding the economic damage, victims endure chronic psychological trauma and an exhausting bureaucratic ordeal, spending months filing notarized affidavits to expunge fraudulent records from credit bureaus.",
                    why: "Captures the emotional and institutional reality with precision: 'chronic psychological trauma', 'exhausting bureaucratic ordeal', 'expunge fraudulent records'."
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
                    title: "1. Introduction Formula (Paraphrase + Direct Outline)",
                    formula: "“In the contemporary digital era, financial crimes centered around identity theft are escalating at an alarming velocity worldwide. In this essay, I will examine how [ubiquitous online banking and corporate data breaches] have catalyzed this illicit trend, before illustrating the [catastrophic financial devastation, ruined creditworthiness, and profound psychological distress] inflicted upon victimized individuals.”"
                  },
                  {
                    title: "2. Body 1 Opener Formula (Root Causes)",
                    formula: "“Foremost among the drivers behind the escalating incidence of identity theft is the [ubiquity of electronic financial transactions combined with systemic corporate cybersecurity vulnerabilities]...”"
                  },
                  {
                    title: "3. Body 2 Opener Formula (Effects on Victims)",
                    formula: "“Turning to the ramifications, the consequences inflicted upon victims are both financially devastating and psychologically debilitating, characterized by [immediate monetary drainage and protracted bureaucratic struggles]...”"
                  },
                  {
                    title: "4. Conclusion Formula (Sum-up Causes + Synthesize Effects)",
                    formula: "“In conclusion, the alarming surge in identity theft is propelled primarily by [widespread digital commerce and corporate database leaks]. Consequently, innocent victims endure devastating repercussions, spanning [immediate financial deprivation, ruined credit ratings, and enduring psychological trauma]...”"
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
                    Instruct students to strictly maintain the <strong>Cause 1 + Effect 1 + Example</strong> formula in every body paragraph. Build Body 1 around digital transaction ubiquity and corporate database breaches, and construct Body 2 around direct financial ruin, destroyed credit ratings, and protracted bureaucratic/mental trauma. Symmetrical 50/50 paragraph balance between causes and effects guarantees maximum Band 9 Task Achievement.
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
