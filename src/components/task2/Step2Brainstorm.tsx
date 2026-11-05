import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Layers,
  FileText,
  Eye,
  EyeOff,
  BookOpen,
  Copy,
  Check,
  Rocket,
  ShieldAlert,
  ArrowRight
} from "lucide-react";
import { TASK2_DATA } from "../../data/task2Data";
import { TouchTimer } from "../common/TouchTimer";
import { tactilePress } from "../../motion";

interface Step2BrainstormProps {
  formattedTime: string;
  isRunning: boolean;
  isFinished: boolean;
  onTimerToggle: () => void;
  onTimerReset: () => void;
}

const ESSAY_FORMAT_STEPS = [
  {
    stepNum: "1",
    label: "INTRODUCTION",
    badgeBg: "rgba(147, 51, 234, 0.12)",
    badgeColor: "#7e22ce",
    formatRule: "Paraphrase the question + Thesis"
  },
  {
    stepNum: "2",
    label: "Body Paragraph 1",
    badgeBg: "rgba(37, 99, 235, 0.12)",
    badgeColor: "#1d4ed8",
    formatRule: "Cause 1 + Solution 1 + Example"
  },
  {
    stepNum: "3",
    label: "Body Paragraph 2",
    badgeBg: "rgba(37, 99, 235, 0.12)",
    badgeColor: "#1d4ed8",
    formatRule: "Cause 2 + Solution 2 + Example"
  },
  {
    stepNum: "4",
    label: "CONCLUSION",
    badgeBg: "rgba(13, 148, 136, 0.12)",
    badgeColor: "#0f766e",
    formatRule: "Sum-up all the main causes, solutions + Suggestion / Recommendation"
  }
];

// Structured cut-to-the-chase student idea cards
interface IdeaItem {
  id: string;
  type: "cause" | "solution";
  tag: string;
  oneLiner: string;
  example: string;
}

const STUDENT_IDEAS: IdeaItem[] = [
  // 5 Causes from Student Idea Bank
  {
    id: "cause-1",
    type: "cause",
    tag: "Growing demand for satellite-based services",
    oneLiner: "Modern society increasingly depends on satellite technology for internet connectivity, GPS navigation, weather forecasting and communication, prompting companies to launch large numbers of satellites.",
    example: "Satellite internet providers deploy thousands of small satellites to deliver broadband connectivity to remote areas."
  },
  {
    id: "cause-2",
    type: "cause",
    tag: "Commercialisation of space exploration",
    oneLiner: "The growing involvement of private companies has made space activities commercially attractive, increasing the frequency of rocket launches as businesses compete.",
    example: "Private aerospace companies regularly conduct launches to deploy satellites and provide services to other organisations."
  },
  {
    id: "cause-3",
    type: "cause",
    tag: "Abandoned satellites and rocket components",
    oneLiner: "Many satellites eventually stop functioning, while discarded rocket stages and equipment remain in orbit without proper disposal procedures, accumulating over time.",
    example: "A satellite that has completed its operational life may remain in orbit if it is not moved to a safer disposal orbit or deorbited."
  },
  {
    id: "cause-4",
    type: "cause",
    tag: "Collisions and fragmentation",
    oneLiner: "When satellites or other orbital objects collide, they break into thousands of smaller fragments that remain in orbit and create further collision risks.",
    example: "The destruction of an old satellite during an accidental collision can produce debris that threatens other functioning spacecraft."
  },
  {
    id: "cause-5",
    type: "cause",
    tag: "International competition and strategic interests",
    oneLiner: "Countries invest heavily in space technology for scientific, economic and national-security purposes, encouraging frequent launches without sufficient attention to environmental consequences.",
    example: "Governments may prioritise establishing satellite networks and strengthening space capabilities over investing in debris-management systems."
  },

  // 5 Solutions from Student Idea Bank
  {
    id: "sol-1",
    type: "solution",
    tag: "Develop active debris-removal technology",
    oneLiner: "Space agencies and private companies should invest in spacecraft capable of capturing and removing dangerous debris from orbit.",
    example: "Robotic spacecraft could attach to defunct satellites and guide them towards controlled re-entry into Earth's atmosphere."
  },
  {
    id: "sol-2",
    type: "solution",
    tag: "Enforce responsible satellite disposal",
    oneLiner: "Satellite operators should be required to remove inactive satellites from valuable orbital regions within a specified period after their missions end.",
    example: "Operators could design satellites with propulsion systems that allow them to descend safely towards Earth's atmosphere after completing their operational lives."
  },
  {
    id: "sol-3",
    type: "solution",
    tag: "Improve satellite tracking and collision prevention",
    oneLiner: "Countries should strengthen space surveillance systems to monitor objects in orbit and identify potential collisions before they occur.",
    example: "Satellite operators can receive collision warnings and adjust spacecraft trajectories to avoid dangerous encounters."
  },
  {
    id: "sol-4",
    type: "solution",
    tag: "Introduce stricter international regulations",
    oneLiner: "Governments should cooperate to establish common standards for satellite launches, orbital disposal and debris prevention.",
    example: "International agreements could make responsible disposal plans compulsory before a satellite receives launch approval."
  },
  {
    id: "sol-5",
    type: "solution",
    tag: "Design satellites for sustainability",
    oneLiner: "Manufacturers should develop spacecraft that are easier to repair, reuse or safely dispose of once their missions are completed.",
    example: "Satellites could be designed with reliable deorbiting mechanisms and components that minimise the creation of additional fragments."
  }
];

const TARGET_LEXIS = [
  { word: "proliferation", note: "rapid proliferation of commercial satellites" },
  { word: "congested", note: "dangerously congested orbital lanes" },
  { word: "defunct", note: "thousands of defunct satellites adrift" },
  { word: "catastrophic", note: "risk of catastrophic chain reactions" },
  { word: "remediation", note: "active orbital debris remediation" },
  { word: "decommission", note: "mandatory protocol to decommission units" },
  { word: "hypervelocity", note: "shrapnel traveling at hypervelocity speeds" },
  { word: "derelict", note: "multi-ton derelict rocket boosters" },
  { word: "mitigate", note: "mitigate orbital saturation hazards" },
  { word: "shrapnel", note: "clouds of untrackable metallic shrapnel" },
  { word: "multilateral", note: "enforceable multilateral space treaties" },
  { word: "sustainable", note: "preserving a sustainable orbital commons" }
];

export const Step2BrainstormT2: React.FC<Step2BrainstormProps> = ({
  formattedTime,
  isRunning,
  isFinished,
  onTimerToggle,
  onTimerReset
}) => {
  const [isFormatRevealed, setIsFormatRevealed] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "cause" | "solution">("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const filteredIdeas = STUDENT_IDEAS.filter((item) => {
    if (activeTab === "cause") return item.type === "cause";
    if (activeTab === "solution") return item.type === "solution";
    return true;
  });

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 02 / 09 • Task Reveal &amp; Essay Format
        </span>
        <h2 className="stage-title">Deconstruct the Causes &amp; Solutions Architecture &amp; One-Liner Points</h2>
        <p className="stage-subtitle">
          Essay Type: <strong>Causes &amp; Solutions Essay</strong>. Master the mandatory linked format: Cause 1 + Solution 1 and Cause 2 + Solution 2.
        </p>
      </div>

      <div style={{ marginBottom: "18px" }}>
        <TouchTimer
          formattedTime={formattedTime}
          isRunning={isRunning}
          isFinished={isFinished}
          onToggle={onTimerToggle}
          onReset={onTimerReset}
          instruction="Focus Timer: 3 minutes to review the two direct questions, pair each cause with its direct solution, and lock in your thesis."
        />
      </div>

      <div className="stage-grid-2col">
        {/* Left Column: Question Card */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "20px",
              padding: "24px 26px",
              height: "100%",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "16px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Rocket size={22} color="var(--slate-800)" />
                <h4 style={{ fontSize: "1.15rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  IELTS Academic Writing Task 2
                </h4>
              </div>
              <span className="apple-badge accent" style={{ fontSize: "0.82rem" }}>
                {TASK2_DATA.taskType}
              </span>
            </div>

            <div
              style={{
                background: "#fff",
                border: "1.5px solid var(--border-default)",
                borderRadius: "16px",
                padding: "24px 26px",
                fontSize: "1.22rem",
                fontWeight: 750,
                lineHeight: 1.6,
                boxShadow: "var(--shadow-sm)",
                color: "var(--slate-900)",
                flex: 1
              }}
            >
              {TASK2_DATA.questionText.split("\n\n").map((chunk, i) => (
                <p key={i} style={{ marginBottom: i === 0 ? "14px" : 0 }}>
                  {chunk}
                </p>
              ))}
            </div>

            <div
              style={{
                marginTop: "16px",
                background: "#eff6ff",
                border: "1px solid #bfdbfe",
                borderRadius: "12px",
                padding: "12px 14px",
                fontSize: "0.86rem",
                color: "#1e40af",
                lineHeight: 1.5
              }}
            >
              <strong>Examiner Requirement:</strong> Answer both questions fully. Symmetrically pair each cause with its direct solution in Body 1 and Body 2 with concrete examples.
            </div>
          </div>
        </div>

        {/* Right Column: Standard 4-Paragraph Essay Format Card (Blurred until Revealed) */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "20px",
              padding: "24px 26px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Layers size={22} color="var(--apple-blue)" />
                <h4 style={{ fontSize: "1.15rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  Mandatory Essay Format
                </h4>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {isFormatRevealed && (
                  <motion.button
                    whileTap={tactilePress}
                    onClick={() => setIsFormatRevealed(false)}
                    style={{
                      border: "1px solid var(--border-subtle)",
                      background: "#ffffff",
                      padding: "4px 10px",
                      borderRadius: "8px",
                      fontSize: "0.76rem",
                      fontWeight: 700,
                      color: "var(--slate-600)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px"
                    }}
                  >
                    <EyeOff size={13} /> Hide Format
                  </motion.button>
                )}
                <span className="apple-badge neutral" style={{ fontSize: "0.82rem" }}>
                  4-Paragraph Architecture
                </span>
              </div>
            </div>

            {/* Content Container (Blurred when !isFormatRevealed) */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                flex: 1,
                filter: isFormatRevealed ? "none" : "blur(10px)",
                opacity: isFormatRevealed ? 1 : 0.25,
                transition: "filter 0.35s ease, opacity 0.35s ease",
                pointerEvents: isFormatRevealed ? "auto" : "none",
                userSelect: isFormatRevealed ? "auto" : "none"
              }}
            >
              <div
                style={{
                  background: "#eff6ff",
                  border: "1.5px solid #bfdbfe",
                  borderRadius: "12px",
                  padding: "10px 16px",
                  fontSize: "0.98rem",
                  fontWeight: 800,
                  color: "#1d4ed8"
                }}
              >
                ⚡ Essay Format: <strong>Linked Causes &amp; Solutions Architecture</strong>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  flex: 1,
                  justifyContent: "space-between"
                }}
              >
                {ESSAY_FORMAT_STEPS.map((step) => (
                  <div
                    key={step.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      background: "#fff",
                      border: "1.5px solid var(--border-subtle)",
                      borderRadius: "14px",
                      padding: "14px 18px",
                      boxShadow: "var(--shadow-sm)"
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.88rem",
                        fontWeight: 800,
                        padding: "6px 12px",
                        borderRadius: "8px",
                        background: step.badgeBg,
                        color: step.badgeColor,
                        minWidth: "155px",
                        textAlign: "center",
                        flexShrink: 0
                      }}
                    >
                      {step.label}
                    </span>
                    <div
                      style={{
                        fontSize: "1.02rem",
                        fontWeight: 800,
                        color: "var(--slate-900)",
                        letterSpacing: "0.01em"
                      }}
                    >
                      {step.formatRule}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Locked Overlay */}
            {!isFormatRevealed && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(248, 250, 252, 0.72)",
                  backdropFilter: "blur(4px)",
                  zIndex: 10,
                  padding: "24px"
                }}
              >
                <div
                  style={{
                    background: "#ffffff",
                    border: "1.5px solid var(--border-subtle)",
                    borderRadius: "18px",
                    padding: "24px 28px",
                    textAlign: "center",
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    maxWidth: "340px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px"
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "rgba(37, 99, 235, 0.1)",
                      color: "var(--apple-blue)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Eye size={24} />
                  </div>

                  <div>
                    <h4 style={{ fontSize: "1.12rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                      Format Hidden
                    </h4>
                    <p style={{ fontSize: "0.86rem", color: "var(--slate-500)", margin: "4px 0 0", lineHeight: 1.45 }}>
                      Ask students to recall the Causes &amp; Solutions linked format, then click to reveal.
                    </p>
                  </div>

                  <motion.button
                    whileTap={tactilePress}
                    onClick={() => setIsFormatRevealed(true)}
                    className="apple-touch-btn primary"
                    style={{
                      minHeight: "44px",
                      padding: "0 20px",
                      gap: "8px",
                      fontSize: "0.95rem",
                      fontWeight: 750,
                      width: "100%",
                      borderRadius: "12px",
                      marginTop: "6px"
                    }}
                  >
                    <Eye size={17} /> <span>Reveal Essay Format</span>
                  </motion.button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* STUDENT IDEA DECK: ONE-LINER ONLY */}
      <div
        style={{
          marginTop: "24px",
          background: "#ffffff",
          border: "1.5px solid var(--border-subtle)",
          borderRadius: "22px",
          padding: "24px 26px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.03)"
        }}
      >
        {/* Top Control Bar: Title & Filter Pills */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "14px",
            borderBottom: "1.5px solid var(--border-subtle)",
            paddingBottom: "16px",
            marginBottom: "16px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
                color: "#2563eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Sparkles size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: "1.18rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
                Student Idea Bank • Cut-to-the-Chase One-Liners
              </h3>
              <p style={{ margin: "2px 0 0", fontSize: "0.82rem", color: "var(--slate-500)" }}>
                Relatable arguments: 1 Core Sentence + 1 Concrete Example. Strictly one-liner only.
              </p>
            </div>
          </div>

          {/* Filter Pills */}
          <div style={{ display: "flex", gap: "6px", background: "var(--slate-100)", padding: "4px", borderRadius: "12px" }}>
            <button
              onClick={() => setActiveTab("all")}
              style={{
                padding: "6px 14px",
                borderRadius: "8px",
                border: "none",
                background: activeTab === "all" ? "#ffffff" : "transparent",
                color: activeTab === "all" ? "#0f172a" : "var(--slate-600)",
                fontWeight: activeTab === "all" ? 800 : 600,
                fontSize: "0.82rem",
                boxShadow: activeTab === "all" ? "0 2px 6px rgba(0,0,0,0.06)" : "none",
                cursor: "pointer",
                transition: "all 0.15s ease"
              }}
            >
              All Ideas (8)
            </button>
            <button
              onClick={() => setActiveTab("cause")}
              style={{
                padding: "6px 14px",
                borderRadius: "8px",
                border: "none",
                background: activeTab === "cause" ? "#dc2626" : "transparent",
                color: activeTab === "cause" ? "#ffffff" : "#991b1b",
                fontWeight: activeTab === "cause" ? 800 : 600,
                fontSize: "0.82rem",
                boxShadow: activeTab === "cause" ? "0 2px 6px rgba(220,38,38,0.3)" : "none",
                cursor: "pointer",
                transition: "all 0.15s ease"
              }}
            >
              🔴 Causes (4)
            </button>
            <button
              onClick={() => setActiveTab("solution")}
              style={{
                padding: "6px 14px",
                borderRadius: "8px",
                border: "none",
                background: activeTab === "solution" ? "#16a34a" : "transparent",
                color: activeTab === "solution" ? "#ffffff" : "#166534",
                fontWeight: activeTab === "solution" ? 800 : 600,
                fontSize: "0.82rem",
                boxShadow: activeTab === "solution" ? "0 2px 6px rgba(22,163,74,0.3)" : "none",
                cursor: "pointer",
                transition: "all 0.15s ease"
              }}
            >
              🟢 Solutions (4)
            </button>
          </div>
        </div>

        {/* High-Utility Academic Lexis Banner */}
        <div
          style={{
            background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "14px",
            padding: "10px 14px",
            marginBottom: "18px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            flexWrap: "wrap"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--slate-700)", flexShrink: 0 }}>
            <BookOpen size={15} color="var(--apple-blue)" />
            <strong style={{ fontSize: "0.78rem" }}>Band 8.5/9 Space &amp; Remediation Lexis:</strong>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {TARGET_LEXIS.map((lex) => (
              <span
                key={lex.word}
                title={lex.note}
                style={{
                  background: "#ffffff",
                  border: "1px solid #cbd5e1",
                  borderRadius: "6px",
                  padding: "2px 8px",
                  fontSize: "0.74rem",
                  fontWeight: 750,
                  color: "#1e293b",
                  cursor: "help"
                }}
              >
                {lex.word}
              </span>
            ))}
          </div>
        </div>

        {/* Card Grid Layout: 2 Columns for 'all', 1 Column for filtered views */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: activeTab === "all" ? "repeat(2, minmax(0, 1fr))" : "1fr",
            gap: "14px"
          }}
        >
          {filteredIdeas.map((idea, index) => {
            const isCause = idea.type === "cause";
            const isCopied = copiedId === idea.id;

            return (
              <div
                key={idea.id}
                style={{
                  background: isCause ? "#fffcfc" : "#fcfdfc",
                  border: isCause ? "1.5px solid #fecaca" : "1.5px solid #bbf7d0",
                  borderRadius: "16px",
                  padding: "16px 18px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  transition: "transform 0.15s ease, box-shadow 0.15s ease"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        padding: "2px 8px",
                        borderRadius: "6px",
                        background: isCause ? "#fee2e2" : "#dcfce7",
                        color: isCause ? "#991b1b" : "#166534",
                        textTransform: "uppercase"
                      }}
                    >
                      {isCause ? "🔴 Cause" : "🟢 Solution"} #{index + 1}
                    </span>
                    <strong style={{ fontSize: "0.96rem", color: "#0f172a" }}>
                      {idea.tag}
                    </strong>
                  </div>

                  <button
                    onClick={() => handleCopy(idea.id, `${idea.oneLiner} Example: ${idea.example}`)}
                    style={{
                      border: "1px solid #e2e8f0",
                      background: isCopied ? "#dcfce7" : "#ffffff",
                      color: isCopied ? "#166534" : "#64748b",
                      padding: "3px 8px",
                      borderRadius: "6px",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px"
                    }}
                  >
                    {isCopied ? <Check size={11} /> : <Copy size={11} />}
                    <span>{isCopied ? "Copied" : "Copy"}</span>
                  </button>
                </div>

                <div
                  style={{
                    fontSize: "0.94rem",
                    color: "#1e293b",
                    fontWeight: 650,
                    lineHeight: 1.5,
                    borderLeft: isCause ? "3px solid #ef4444" : "3px solid #22c55e",
                    paddingLeft: "10px"
                  }}
                >
                  “{idea.oneLiner}”
                </div>

                <div
                  style={{
                    background: isCause ? "#fef2f2" : "#f0fdf4",
                    border: isCause ? "1px dashed #fca5a5" : "1px dashed #86efac",
                    borderRadius: "8px",
                    padding: "6px 10px",
                    fontSize: "0.82rem",
                    color: isCause ? "#7f1d1d" : "#14532d",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px"
                  }}
                >
                  <span style={{ fontWeight: 800 }}>Example:</span>
                  <span>{idea.example}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
