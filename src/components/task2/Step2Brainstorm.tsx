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
    label: "INTRO",
    badgeBg: "rgba(147, 51, 234, 0.12)",
    badgeColor: "#7e22ce",
    formatRule: "Paraphrase the question + opinion"
  },
  {
    stepNum: "2",
    label: "body para 1 & 2",
    badgeBg: "rgba(37, 99, 235, 0.12)",
    badgeColor: "#1d4ed8",
    formatRule: "On your opinion side"
  },
  {
    stepNum: "3",
    label: "body para 3",
    badgeBg: "rgba(234, 88, 12, 0.12)",
    badgeColor: "#c2410c",
    formatRule: "On your non-opinion side"
  },
  {
    stepNum: "4",
    label: "conclusion",
    badgeBg: "rgba(13, 148, 136, 0.12)",
    badgeColor: "#0f766e",
    formatRule: "Sum-up all the main points + restate your opinion"
  }
];

// Structured cut-to-the-chase student idea cards
interface IdeaItem {
  id: string;
  type: "cause" | "solution"; // "cause" mapped to opinion side, "solution" mapped to non-opinion side
  tag: string;
  oneLiner: string;
  example: string;
}

const STUDENT_IDEAS: IdeaItem[] = [
  // 5 Opinion Side arguments (Body 1 & 2 - DISAGREE)
  {
    id: "opinion-1",
    type: "cause",
    tag: "Commercial solvency & avoiding bankruptcy",
    oneLiner: "Profit generation is the primary prerequisite for corporate survival; without healthy profit margins, a company collapses into insolvency and cannot employ anyone or sustain any social cause.",
    example: "Small and medium-sized enterprises (SMEs) prioritizing sales revenue simply to meet payroll, pay rent, and service supplier invoices."
  },
  {
    id: "opinion-2",
    type: "cause",
    tag: "Employment creation & sustaining livelihoods",
    oneLiner: "Profitable businesses employ millions of citizens, providing dependable household incomes and career security that represent their greatest direct contribution to society.",
    example: "Major employers sustaining local township economies by keeping factories operational and payrolls active during economic downturns."
  },
  {
    id: "opinion-3",
    type: "cause",
    tag: "Government welfare mandate & corporate taxation",
    oneLiner: "Social welfare, public healthcare, schools, and environmental governance belong exclusively to elected governments, which are democratically funded by heavy corporate tax revenues.",
    example: "Corporate income taxes collected from thriving commercial sectors enabling national governments to finance free public healthcare and highway networks."
  },
  {
    id: "opinion-4",
    type: "cause",
    tag: "Fiduciary responsibility to shareholders & pensioners",
    oneLiner: "Corporate managers are legally bound fiduciaries entrusted with investor capital; diverting private earnings to social causes without shareholder consent breaches their core mandate.",
    example: "Pension and retirement funds relying on corporate stock dividends to disburse monthly retirement income to senior citizens."
  },
  {
    id: "opinion-5",
    type: "cause",
    tag: "Specialized commercial efficiency vs social engineering",
    oneLiner: "Corporate executives specialize in commerce, manufacturing, and logistics, not public welfare; forcing companies into social engineering leads to misallocated resources and greenwashing.",
    example: "Companies squandering capital on publicity-driven philanthropic campaigns rather than reinvesting in technological innovation and product quality."
  },

  // 5 Non-Opinion / Concession arguments (Body 3 - AGREE COUNTERPOINT)
  {
    id: "non-opinion-1",
    type: "solution",
    tag: "Statutory environmental regulations & pollution limits",
    oneLiner: "Businesses consume natural resources and produce waste, requiring them to adhere to emission limits and clean disposal laws as mandatory statutory compliance.",
    example: "Manufacturing facilities installing industrial smoke filters and wastewater treatment plants to meet legal government environmental standards."
  },
  {
    id: "non-opinion-2",
    type: "solution",
    tag: "Workplace safety & mandatory labor codes",
    oneLiner: "Providing safe conditions, reasonable working hours, and living wages is legally enforced by state labor standards, protecting workers from commercial exploitation.",
    example: "Retail and factory employers complying with mandatory fire safety codes, minimum wage legislation, and maximum weekly working hours."
  },
  {
    id: "non-opinion-3",
    type: "solution",
    tag: "Consumer protection & product integrity",
    oneLiner: "Ensuring non-toxic, safe merchandise is a fundamental commercial prerequisite enforced by consumer protection legislation rather than discretionary corporate goodwill.",
    example: "Pharmaceutical and food producers adhering to rigorous government inspection and safety certification standards."
  },
  {
    id: "non-opinion-4",
    type: "solution",
    tag: "Brand reputation & calculated marketing advantages",
    oneLiner: "Engaging in ethical practices and charitable initiatives is often a calculated marketing strategy aimed at protecting brand equity and boosting long-term sales.",
    example: "Apparel brands publicizing organic fabric lines to attract premium consumers and defend market share."
  },
  {
    id: "non-opinion-5",
    type: "solution",
    tag: "Civic cooperation & local operating permits",
    oneLiner: "Firms supporting local neighborhood events or sports clubs do so to foster good civic relations and secure municipal operational permits, directly serving enterprise interests.",
    example: "Supermarkets sponsoring local clean-up drives to maintain positive relations with surrounding communities."
  }
];

const TARGET_LEXIS = [
  { word: "philanthropy", note: "corporate philanthropy and community development" },
  { word: "viability", note: "commercial viability and financial solvency" },
  { word: "stewardship", note: "environmental stewardship and emissions reduction" },
  { word: "exploitation", note: "preventing exploitation of vulnerable labor" },
  { word: "accountability", note: "corporate environmental and social accountability" },
  { word: "remuneration", note: "fair and equitable worker remuneration" },
  { word: "sustainable", note: "sustainable production and commerce" },
  { word: "altruism", note: "pure altruism vs statutory compliance" },
  { word: "degradation", note: "mitigating industrial ecological degradation" },
  { word: "concession", note: "balanced academic concession on profit necessity" },
  { word: "compliance", note: "full compliance with labor and emission codes" },
  { word: "prosperity", note: "shared economic and societal prosperity" }
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
        <h2 className="stage-title">Deconstruct the Corporate Social Responsibility Architecture &amp; One-Liner Points</h2>
        <p className="stage-subtitle">
          Essay Type: <strong>Opinion Essay (Agree or Disagree)</strong>. Master the mandatory 5-paragraph format: Opinion in Body 1 &amp; 2, Non-Opinion in Body 3.
        </p>
      </div>

      <div style={{ marginBottom: "18px" }}>
        <TouchTimer
          formattedTime={formattedTime}
          isRunning={isRunning}
          isFinished={isFinished}
          onToggle={onTimerToggle}
          onReset={onTimerReset}
          instruction="Focus Timer: 3 minutes to review the opinion prompt, formulate your balanced thesis, and lock in your core arguments."
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
              <strong>Examiner Requirement:</strong> Present a clear opinion in the introduction, develop two body paragraphs on your opinion side (environmental stewardship and worker/community welfare), examine the non-opinion counterpoint in body 3 (profit necessity), and restate your balanced opinion in the conclusion.
            </div>
          </div>
        </div>

        {/* Right Column: Standard 5-Paragraph Essay Format Card (Blurred until Revealed) */}
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
                  5-Paragraph Architecture
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
                ⚡ Essay Format: <strong>5-Paragraph Opinion Architecture (with Concession)</strong>
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
                      Ask students to recall the 5-paragraph opinion format with concession, then click to reveal.
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
              All Ideas (10)
            </button>
            <button
              onClick={() => setActiveTab("cause")}
              style={{
                padding: "6px 14px",
                borderRadius: "8px",
                border: "none",
                background: activeTab === "cause" ? "#2563eb" : "transparent",
                color: activeTab === "cause" ? "#ffffff" : "#1e40af",
                fontWeight: activeTab === "cause" ? 800 : 600,
                fontSize: "0.82rem",
                boxShadow: activeTab === "cause" ? "0 2px 6px rgba(37,99,235,0.3)" : "none",
                cursor: "pointer",
                transition: "all 0.15s ease"
              }}
            >
              🔵 Opinion Side (5)
            </button>
            <button
              onClick={() => setActiveTab("solution")}
              style={{
                padding: "6px 14px",
                borderRadius: "8px",
                border: "none",
                background: activeTab === "solution" ? "#ea580c" : "transparent",
                color: activeTab === "solution" ? "#ffffff" : "#c2410c",
                fontWeight: activeTab === "solution" ? 800 : 600,
                fontSize: "0.82rem",
                boxShadow: activeTab === "solution" ? "0 2px 6px rgba(234,88,12,0.3)" : "none",
                cursor: "pointer",
                transition: "all 0.15s ease"
              }}
            >
              🟠 Non-Opinion Concession (5)
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
            <strong style={{ fontSize: "0.78rem" }}>Band 8.5/9 Corporate Ethics &amp; Economics Lexis:</strong>
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
                  background: isCause ? "#f8fafc" : "#fffbeb",
                  border: isCause ? "1.5px solid #bfdbfe" : "1.5px solid #fed7aa",
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
                        background: isCause ? "#eff6ff" : "#ffedd5",
                        color: isCause ? "#1d4ed8" : "#c2410c",
                        textTransform: "uppercase"
                      }}
                    >
                      {isCause ? "🔵 Opinion Side" : "🟠 Non-Opinion Concession"} #{index + 1}
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
                    borderLeft: isCause ? "3px solid #2563eb" : "3px solid #ea580c",
                    paddingLeft: "10px"
                  }}
                >
                  “{idea.oneLiner}”
                </div>

                <div
                  style={{
                    background: isCause ? "#eff6ff" : "#fff7ed",
                    border: isCause ? "1px dashed #93c5fd" : "1px dashed #fdba74",
                    borderRadius: "8px",
                    padding: "6px 10px",
                    fontSize: "0.82rem",
                    color: isCause ? "#1e3a8a" : "#7c2d12",
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
