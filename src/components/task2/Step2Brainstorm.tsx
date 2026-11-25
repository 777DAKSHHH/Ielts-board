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
    formatRule: "Paraphrase prompt + State direct thesis outlining core problems and solutions"
  },
  {
    stepNum: "2",
    label: "BODY PARA 1",
    badgeBg: "rgba(220, 38, 38, 0.12)",
    badgeColor: "#dc2626",
    formatRule: "The Problems: Landfill saturation, century-long persistence, marine microplastics & leaching"
  },
  {
    stepNum: "3",
    label: "BODY PARA 2",
    badgeBg: "rgba(22, 163, 74, 0.12)",
    badgeColor: "#16a34a",
    formatRule: "The Solutions: Statutory bans, plastic taxes, biodegradable subsidies & corporate EPR"
  },
  {
    stepNum: "4",
    label: "CONCLUSION",
    badgeBg: "rgba(15, 23, 42, 0.12)",
    badgeColor: "#0f172a",
    formatRule: "Synthesize primary ecological dilemma + Reaffirm transition to a circular reusable economy"
  }
];

// Structured cut-to-the-chase student idea cards
interface IdeaItem {
  id: string;
  type: "cause" | "solution"; // "cause" = Problem (Body 1), "solution" = Solution (Body 2)
  tag: string;
  oneLiner: string;
  example: string;
}

const STUDENT_IDEAS: IdeaItem[] = [
  // 5 Problems (Body Para 1)
  {
    id: "prob-1",
    type: "cause",
    tag: "Landfill saturation & non-biodegradable longevity",
    oneLiner: "Disposable plastics take between 400 and 1,000 years to decompose, rapidly exhausting municipal waste facilities.",
    example: "Global municipal landfill sites reaching total capacity decades ahead of schedule due to billions of single-use bottles and wrappers."
  },
  {
    id: "prob-2",
    type: "cause",
    tag: "Marine ecosystem destruction & toxic microplastics",
    oneLiner: "Lightweight packaging migrates into oceans, causing fatal physical ingestion among aquatic wildlife and poisoning human seafood.",
    example: "The Great Pacific Garbage Patch accumulating millions of tons of single-use debris, with microplastics detected in 70%+ of pelagic fish."
  },
  {
    id: "prob-3",
    type: "cause",
    tag: "Petrochemical depletion & heavy carbon footprint",
    oneLiner: "Refining finite crude oil into single-use items squanders non-renewable resources and generates immense greenhouse gas emissions.",
    example: "The plastic packaging sector consuming over 10% of global oil refining outputs annually, generating more carbon emissions than aviation."
  },
  {
    id: "prob-4",
    type: "cause",
    tag: "Urban drainage clogging & flash flood disasters",
    oneLiner: "Discarded plastic containers and bags create impermeable barriers within stormwater conduits, multiplying destructive urban flood risks.",
    example: "Metropolises in South and Southeast Asia experiencing severe localized flash floods directly caused by plastic refuse choking culverts."
  },
  {
    id: "prob-5",
    type: "cause",
    tag: "Hazardous chemical leaching into soil and aquifers",
    oneLiner: "Decomposing polymers leach toxic plasticizers, phthalates, and bisphenol A (BPA) into surrounding agricultural soils and groundwater.",
    example: "Farming zones adjacent to unlined municipal waste dumps recording elevated soil toxicity and endocrine risks in drinking water."
  },

  // 5 Solutions (Body Para 2)
  {
    id: "sol-1",
    type: "solution",
    tag: "Statutory product bans & fiscal plastic taxes",
    oneLiner: "Enacting legal prohibitions on non-essential disposables alongside steep charges on remaining packaging swiftly curbs consumer demand.",
    example: "Ireland's plastic bag tax slashing single-use consumption by 90% within months and raising millions for green environmental funds."
  },
  {
    id: "sol-2",
    type: "solution",
    tag: "Subsidising organic biodegradable packaging",
    oneLiner: "State research grants and tax breaks accelerate the mass commercialization of compostable packaging derived from seaweed or cornstarch.",
    example: "European startups deploying seaweed and mushroom mycelium takeout containers supported by government clean-technology funds."
  },
  {
    id: "sol-3",
    type: "solution",
    tag: "Mandatory Extended Producer Responsibility (EPR)",
    oneLiner: "Holding manufacturing conglomerates legally accountable for post-consumer packaging forces circular, recyclable product redesign.",
    example: "Germany's dual-system EPR laws requiring packaging producers to fund 100% of collection, achieving national recycling rates over 75%."
  },
  {
    id: "sol-4",
    type: "solution",
    tag: "Deposit-return schemes & reverse-vending kiosks",
    oneLiner: "Refundable deposits on beverage containers provide immediate financial incentives for consumers to return packaging for recycling.",
    example: "Scandinavian countries operating automated reverse-vending deposit kiosks, maintaining container recovery rates above 95%."
  },
  {
    id: "sol-5",
    type: "solution",
    tag: "Normalizing reusable ecosystems through civic education",
    oneLiner: "Sustained civic education and retail discounts for personal flasks and containers transform reusability into standard social etiquette.",
    example: "Major café chains offering price reductions to customers supplying reusable thermos mugs, drastically reducing paper cup waste."
  }
];

const TARGET_LEXIS = [
  { word: "proliferation", note: "rapid increase or spread in quantity" },
  { word: "biodegradable", note: "capable of being decomposed by biological agents" },
  { word: "ubiquitous", note: "present or appearing everywhere simultaneously" },
  { word: "saturation", note: "state where no more can be absorbed or added" },
  { word: "deterrent", note: "thing that discourages someone from an action" },
  { word: "mandate", note: "official order, directive, or authorization" },
  { word: "depletion", note: "reduction or exhaustion of resource supply" },
  { word: "non-renewable", note: "finite resource not replenished naturally" },
  { word: "leach", note: "drain away chemicals through liquid percolation" },
  { word: "subsidise", note: "support financially through state funds" },
  { word: "contaminate", note: "make impure, unclean, or poisonous" },
  { word: "incentivise", note: "motivate by offering a reward or financial benefit" }
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
        <h2 className="stage-title">Deconstruct Single-Use Products Architecture &amp; One-Liner Points</h2>
        <p className="stage-subtitle">
          Essay Type: <strong>Problems and Solutions Essay</strong>. Master the 4-paragraph architecture: Problems in Body 1, Solutions in Body 2.
        </p>
      </div>

      <div style={{ marginBottom: "18px" }}>
        <TouchTimer
          formattedTime={formattedTime}
          isRunning={isRunning}
          isFinished={isFinished}
          onToggle={onTimerToggle}
          onReset={onTimerReset}
          instruction="Focus Timer: 3 minutes to review the prompt on single-use products, identify core ecological problems and actionable solutions, and structure your essay."
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
              <strong>Examiner Requirement:</strong> Present a clear thesis statement in the introduction, dedicate Body Paragraph 1 to the critical problems caused by single-use goods (landfill exhaustion and marine microplastic contamination), dedicate Body Paragraph 2 to viable solutions (statutory bans, fiscal packaging taxes, and corporate Extended Producer Responsibility), and deliver an authoritative synthesis in the conclusion.
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
                ⚡ Essay Format: <strong>4-Paragraph Problems and Solutions Architecture</strong>
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
                      Ask students to recall the 4-paragraph Problems &amp; Solutions format, then click to reveal.
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
                background: activeTab === "cause" ? "#dc2626" : "transparent",
                color: activeTab === "cause" ? "#ffffff" : "#991b1b",
                fontWeight: activeTab === "cause" ? 800 : 600,
                fontSize: "0.82rem",
                boxShadow: activeTab === "cause" ? "0 2px 6px rgba(220,38,38,0.3)" : "none",
                cursor: "pointer",
                transition: "all 0.15s ease"
              }}
            >
              🔴 Problems Caused (5)
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
              🟢 Possible Solutions (5)
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
            <strong style={{ fontSize: "0.78rem" }}>Band 8.5/9 Materials Science &amp; Policy Lexis (Authentic Meanings):</strong>
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
                  background: isCause ? "#fffbfb" : "#fbfdfb",
                  border: isCause ? "1.5px solid #fecaca" : "1.5px solid #bbf7d0",
                  borderRadius: "16px",
                  padding: "18px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  boxShadow: "var(--shadow-sm)",
                  position: "relative"
                }}
              >
                {/* Header Badge & Copy Button */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span
                    style={{
                      fontSize: "0.74rem",
                      fontWeight: 800,
                      padding: "3px 9px",
                      borderRadius: "6px",
                      background: isCause ? "rgba(220, 38, 38, 0.12)" : "rgba(22, 163, 74, 0.12)",
                      color: isCause ? "#dc2626" : "#16a34a"
                    }}
                  >
                    {isCause ? `Problem 0${(index % 5) + 1} (Body 1)` : `Solution 0${(index % 5) + 1} (Body 2)`}
                  </span>

                  <button
                    onClick={() => handleCopy(idea.id, `${idea.oneLiner} Example: ${idea.example}`)}
                    style={{
                      border: "1px solid var(--border-subtle)",
                      background: isCopied ? "#dcfce7" : "#ffffff",
                      padding: "3px 9px",
                      borderRadius: "6px",
                      fontSize: "0.74rem",
                      fontWeight: 700,
                      color: isCopied ? "#166534" : "var(--slate-600)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px"
                    }}
                  >
                    {isCopied ? <Check size={12} /> : <Copy size={12} />}
                    <span>{isCopied ? "Copied" : "Copy"}</span>
                  </button>
                </div>

                {/* Core Idea Tag */}
                <h5 style={{ fontSize: "1.02rem", fontWeight: 800, color: "var(--slate-900)", margin: 0, lineHeight: 1.35 }}>
                  {idea.tag}
                </h5>

                {/* One-Liner Sentence */}
                <p style={{ fontSize: "0.90rem", color: "var(--slate-700)", margin: 0, lineHeight: 1.55 }}>
                  {idea.oneLiner}
                </p>

                {/* Concrete Example */}
                <div
                  style={{
                    background: "#ffffff",
                    border: "1px dashed var(--border-subtle)",
                    borderRadius: "10px",
                    padding: "8px 12px",
                    fontSize: "0.82rem",
                    color: "var(--slate-600)",
                    lineHeight: 1.45,
                    marginTop: "auto"
                  }}
                >
                  <strong style={{ color: "var(--slate-800)" }}>Example:</strong> {idea.example}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
