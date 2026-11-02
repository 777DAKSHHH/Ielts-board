import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Layers,
  Eye,
  EyeOff,
  Sparkles,
  Check,
  Copy,
  BookOpen,
  CheckCircle2
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
    formatRule: "Paraphrase the question + Opinion"
  },
  {
    stepNum: "2",
    label: "Body Paragraph 1",
    badgeBg: "rgba(37, 99, 235, 0.12)",
    badgeColor: "#1d4ed8",
    formatRule: "Opinion side: 1 Main Reason + Supporting Reasoning + Example"
  },
  {
    stepNum: "3",
    label: "Body Paragraph 2",
    badgeBg: "rgba(37, 99, 235, 0.12)",
    badgeColor: "#1d4ed8",
    formatRule: "Opinion side: 1 Main Reason + Supporting Reasoning + Example"
  },
  {
    stepNum: "4",
    label: "CONCLUSION",
    badgeBg: "rgba(13, 148, 136, 0.12)",
    badgeColor: "#0f766e",
    formatRule: "Sum-up all the main reasons + Restate your opinion"
  }
];

// Structured cut-to-the-chase student idea cards
interface IdeaItem {
  id: string;
  type: "positive" | "negative";
  tag: string;
  oneLiner: string;
  example: string;
}

const STUDENT_IDEAS: IdeaItem[] = [
  // 4 Positive cut-to-the-chase ideas
  {
    id: "pos-1",
    type: "positive",
    tag: "Interactive Learning",
    oneLiner: "Gamified educational apps make abstract math and literacy intuitive through playful challenges.",
    example: "A preschooler learns basic addition through counting games rather than paper drill sheets."
  },
  {
    id: "pos-2",
    type: "positive",
    tag: "Early Digital Fluency",
    oneLiner: "Interface familiarity provides foundational tech competence essential for computerized modern schooling.",
    example: "Children who use tablets early transition effortlessly to school research portals and typing assignments."
  },
  {
    id: "pos-3",
    type: "positive",
    tag: "Long-Distance Connection",
    oneLiner: "High-definition video calling sustains vital emotional bonds with distant relatives across time zones.",
    example: "Toddlers stay emotionally bonded with grandparents living abroad via weekly video calls."
  },
  {
    id: "pos-4",
    type: "positive",
    tag: "Creative Exploration",
    oneLiner: "Age-appropriate digital software enables children to experiment freely with digital art, music, and storytelling.",
    example: "Children create animations or record spoken stories using beginner creative applications."
  },

  // 6 Negative cut-to-the-chase ideas
  {
    id: "neg-1",
    type: "negative",
    tag: "Reduces Physical Activity",
    oneLiner: "Prolonged screen staring displaces active outdoor exercise, elevating risks of childhood obesity.",
    example: "Spending afternoons watching videos leaves children with fewer chances to cycle, run, or play football."
  },
  {
    id: "neg-2",
    type: "negative",
    tag: "Disrupts Sleep Habits",
    oneLiner: "Night-time screen viewing and blue light delay bedtime routines, causing chronic morning exhaustion.",
    example: "Watching cartoons on tablets before bed pushes sleep onset back by up to an hour."
  },
  {
    id: "neg-3",
    type: "negative",
    tag: "Weakens Social Skills",
    oneLiner: "Passive digital entertainment replaces family dialogue, stunting conversational manners and emotional empathy.",
    example: "Children glued to phones at family meals miss crucial opportunities to practise conversational manners."
  },
  {
    id: "neg-4",
    type: "negative",
    tag: "Erodes Attention Span",
    oneLiner: "Fast-paced short videos condition young brains to crave instant gratification, undermining classroom focus.",
    example: "Pupils accustomed to short clips grow restless when reading full book pages or doing extended homework."
  },
  {
    id: "neg-5",
    type: "negative",
    tag: "Inappropriate Content",
    oneLiner: "Young children lack critical maturity, making them acutely susceptible to violent or harmful media.",
    example: "Video autoplay algorithms can expose unattended preschoolers to graphic or frightening videos."
  },
  {
    id: "neg-6",
    type: "negative",
    tag: "Screen Dependency",
    oneLiner: "Constant virtual amusement leaves children restless and unable to entertain themselves through independent play.",
    example: "A toddler throws an intense tantrum and becomes restless whenever a mobile phone is removed."
  }
];

const TARGET_LEXIS = [
  { word: "inevitable", note: "sedentary habits become inevitable" },
  { word: "transient", note: "transient digital stimulation" },
  { word: "discernible", note: "discernible speech & empathy deficits" },
  { word: "resilient", note: "lacks resilient problem-solving" },
  { word: "pervasive", note: "pervasive presence of touchscreens" },
  { word: "indispensable", note: "digital fluency is indispensable" },
  { word: "sedentary", note: "entrenches a sedentary routine" },
  { word: "susceptible", note: "acutely susceptible to cyber risks" }
];

export const Step2BrainstormT2: React.FC<Step2BrainstormProps> = ({
  formattedTime,
  isRunning,
  isFinished,
  onTimerToggle,
  onTimerReset
}) => {
  const [isFormatRevealed, setIsFormatRevealed] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "positive" | "negative">("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const filteredIdeas = STUDENT_IDEAS.filter((item) => {
    if (activeTab === "positive") return item.type === "positive";
    if (activeTab === "negative") return item.type === "negative";
    return true;
  });

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 02 / 09 • Task Reveal &amp; Essay Format
        </span>
        <h2 className="stage-title">Deconstruct the Opinion Essay Architecture &amp; One-Liner Points</h2>
        <p className="stage-subtitle">
          Essay Type: <strong>Direct Opinion (Positive or Negative Development)</strong>. Master the mandatory 4-paragraph format and review cut-to-the-chase arguments for both perspectives.
        </p>
      </div>

      <div style={{ marginBottom: "18px" }}>
        <TouchTimer
          formattedTime={formattedTime}
          isRunning={isRunning}
          isFinished={isFinished}
          onToggle={onTimerToggle}
          onReset={onTimerReset}
          instruction="Focus Timer: 3 minutes to evaluate both sides, select your opinion stance, and choose two sharp supporting reasons."
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
                <FileText size={22} color="var(--slate-800)" />
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
                fontSize: "1.28rem",
                fontWeight: 750,
                lineHeight: 1.65,
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
              <strong>Examiner Requirement:</strong> State a decisive opinion in the introduction and defend that exact side across Body 1 and Body 2 using concrete reasoning and examples.
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
                ⚡ Essay Format: <strong>4-Paragraph Opinion Architecture</strong>
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
                        fontSize: "1.05rem",
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
                      Ask students to recall the 4-Paragraph Opinion Essay format, then click to reveal.
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

      {/* BRAND NEW REDESIGNED HIGH-READABILITY STUDENT IDEA DECK */}
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
                Relatable real-world arguments: 1 Core Sentence + 1 Concrete Example. No fluff.
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
              onClick={() => setActiveTab("positive")}
              style={{
                padding: "6px 14px",
                borderRadius: "8px",
                border: "none",
                background: activeTab === "positive" ? "#16a34a" : "transparent",
                color: activeTab === "positive" ? "#ffffff" : "#166534",
                fontWeight: activeTab === "positive" ? 800 : 600,
                fontSize: "0.82rem",
                boxShadow: activeTab === "positive" ? "0 2px 6px rgba(22,163,74,0.3)" : "none",
                cursor: "pointer",
                transition: "all 0.15s ease"
              }}
            >
              🟢 Positive (4)
            </button>
            <button
              onClick={() => setActiveTab("negative")}
              style={{
                padding: "6px 14px",
                borderRadius: "8px",
                border: "none",
                background: activeTab === "negative" ? "#dc2626" : "transparent",
                color: activeTab === "negative" ? "#ffffff" : "#991b1b",
                fontWeight: activeTab === "negative" ? 800 : 600,
                fontSize: "0.82rem",
                boxShadow: activeTab === "negative" ? "0 2px 6px rgba(220,38,38,0.3)" : "none",
                cursor: "pointer",
                transition: "all 0.15s ease"
              }}
            >
              ⚡ Negative (6)
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
            <strong style={{ fontSize: "0.78rem" }}>High-Utility Essay Vocabulary:</strong>
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
            const isPos = idea.type === "positive";
            const isCopied = copiedId === idea.id;

            return (
              <div
                key={idea.id}
                style={{
                  background: isPos ? "#fcfdfc" : "#fffcfc",
                  border: isPos ? "1.5px solid #bbf7d0" : "1.5px solid #fecaca",
                  borderLeft: isPos ? "5px solid #16a34a" : "5px solid #dc2626",
                  borderRadius: "14px",
                  padding: "14px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                  transition: "transform 0.15s ease, box-shadow 0.15s ease"
                }}
              >
                {/* Card Top: Number, Badge Tag & Copy Action */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        padding: "2px 8px",
                        borderRadius: "6px",
                        background: isPos ? "#dcfce7" : "#fee2e2",
                        color: isPos ? "#15803d" : "#b91c1c"
                      }}
                    >
                      {isPos ? `+ ADVANTAGE 0${(index % 4) + 1}` : `− DISADVANTAGE 0${(index % 6) + 1}`}
                    </span>
                    <strong style={{ fontSize: "0.88rem", color: isPos ? "#166534" : "#991b1b" }}>
                      {idea.tag}
                    </strong>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(idea.id, `${idea.tag}: ${idea.oneLiner} (e.g., ${idea.example})`)}
                    title="Copy full point and example"
                    style={{
                      background: isCopied ? (isPos ? "#dcfce7" : "#fee2e2") : "#ffffff",
                      border: "1px solid #cbd5e1",
                      borderRadius: "6px",
                      padding: "3px 8px",
                      cursor: "pointer",
                      color: isCopied ? (isPos ? "#15803d" : "#b91c1c") : "#64748b",
                      fontSize: "0.7rem",
                      fontWeight: 750,
                      display: "flex",
                      alignItems: "center",
                      gap: "4px"
                    }}
                  >
                    {isCopied ? <Check size={12} /> : <Copy size={12} />}
                    <span>{isCopied ? "Copied" : "Copy"}</span>
                  </button>
                </div>

                {/* Core One-Liner Argument */}
                <div
                  style={{
                    fontSize: "0.93rem",
                    fontWeight: 700,
                    lineHeight: 1.45,
                    color: "var(--slate-900)"
                  }}
                >
                  {idea.oneLiner}
                </div>

                {/* Relatable Mini Example Pill */}
                <div
                  style={{
                    background: isPos ? "#f0fdf4" : "#fef2f2",
                    border: isPos ? "1px dashed #86efac" : "1px dashed #fca5a5",
                    borderRadius: "8px",
                    padding: "6px 10px",
                    fontSize: "0.8rem",
                    color: isPos ? "#14532d" : "#7f1d1d",
                    lineHeight: 1.4
                  }}
                >
                  <strong style={{ color: isPos ? "#166534" : "#991b1b" }}>💡 Example: </strong>
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
