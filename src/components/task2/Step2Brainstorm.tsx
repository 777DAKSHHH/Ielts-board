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
  ArrowRight,
  GitBranch,
  MapPin,
  CheckCircle2
} from "lucide-react";
import { TASK2_DATA, CAUSE_AND_EFFECT_CHAINS } from "../../data/task2Data";
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
    formatRule: "Paraphrase prompt + State direct thesis outlining key problems & matching solutions"
  },
  {
    stepNum: "2",
    label: "BODY PARA 1",
    badgeBg: "rgba(220, 38, 38, 0.12)",
    badgeColor: "#dc2626",
    formatRule: "State Problem 1 → Solution for that Problem + Concrete Example (e.g. Non-biodegradable plastic accumulation in oceans & waterways → Targeted fiscal levies / product bans + bag charge precedent)"
  },
  {
    stepNum: "3",
    label: "BODY PARA 2",
    badgeBg: "rgba(22, 163, 74, 0.12)",
    badgeColor: "#16a34a",
    formatRule: "State Problem 2 → Solution for that Problem + Concrete Example (e.g. Excessive resource depletion & municipal waste strain → Extended Producer Responsibility (EPR) & durable reusables + deposit-return precedent)"
  },
  {
    stepNum: "4",
    label: "CONCLUSION",
    badgeBg: "rgba(15, 23, 42, 0.12)",
    badgeColor: "#0f172a",
    formatRule: "Synthesize both problem-and-solution dimensions + Reaffirm coordinated multi-stakeholder action"
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
    tag: "Environmental pollution",
    oneLiner:
      "Disposable products, particularly plastic items, frequently end up in landfills, rivers and oceans. Since many plastics take a very long time to break down, they accumulate in the natural environment.",
    example:
      "Plastic bags and packaging discarded on streets can eventually enter drainage systems and waterways."
  },
  {
    id: "prob-2",
    type: "cause",
    tag: "Threat to wildlife and marine ecosystems",
    oneLiner:
      "Animals may accidentally consume plastic waste or become trapped in discarded packaging. This can cause injuries, starvation and even death.",
    example:
      "Marine animals such as turtles and seabirds may mistake floating plastic for food."
  },
  {
    id: "prob-3",
    type: "cause",
    tag: "Excessive consumption of natural resources",
    oneLiner:
      "Producing disposable goods requires raw materials, energy and water. Manufacturing products that are discarded after a single use creates unnecessary demand for resources.",
    example:
      "Manufacturing large quantities of disposable plastic bottles requires petroleum-based raw materials and energy."
  },
  {
    id: "prob-4",
    type: "cause",
    tag: "Pressure on waste-management systems",
    oneLiner:
      "The continuous disposal of packaging and disposable items increases the volume of municipal waste. This places additional pressure on landfill sites and local waste-management authorities.",
    example:
      "Cities with high consumption of takeaway packaging may struggle to collect, sort and process the resulting waste."
  },
  {
    id: "prob-5",
    type: "cause",
    tag: "Long-term financial burden",
    oneLiner:
      "Governments must spend considerable public resources on collecting, transporting and processing disposable waste. These expenses can divert funds from other essential public services.",
    example:
      "Municipal authorities may need to invest in additional waste collection vehicles, recycling facilities and landfill maintenance."
  },

  // 5 Solutions (Body Para 2)
  {
    id: "sol-1",
    type: "solution",
    tag: "Restrict or tax unnecessary disposable products",
    oneLiner:
      "Governments can impose restrictions or additional charges on commonly used disposable products to discourage unnecessary consumption.",
    example:
      "Charging customers for plastic shopping bags can encourage them to carry reusable cloth bags."
  },
  {
    id: "sol-2",
    type: "solution",
    tag: "Promote reusable alternatives",
    oneLiner:
      "Consumers should be encouraged to replace disposable products with durable alternatives that can be used repeatedly.",
    example:
      "Using stainless-steel water bottles, reusable coffee cups and washable food containers can reduce daily waste."
  },
  {
    id: "sol-3",
    type: "solution",
    tag: "Encourage manufacturers to adopt sustainable packaging",
    oneLiner:
      "Businesses should reduce unnecessary packaging and invest in recyclable, reusable or lower-impact materials.",
    example:
      "Restaurants can replace excessive plastic packaging with appropriately designed reusable or recyclable containers."
  },
  {
    id: "sol-4",
    type: "solution",
    tag: "Improve recycling and waste-management infrastructure",
    oneLiner:
      "Governments should provide accessible recycling facilities and encourage households to separate waste according to material type.",
    example:
      "Separate collection bins for plastic, paper, glass and organic waste can make recycling more efficient."
  },
  {
    id: "sol-5",
    type: "solution",
    tag: "Increase public awareness",
    oneLiner:
      "Educational campaigns can help people understand the environmental consequences of disposable products and encourage responsible consumption.",
    example:
      "Schools can introduce activities encouraging students to avoid disposable bottles and bring reusable lunch containers."
  }
];

const TARGET_LEXIS = [
  { word: "Pervasive", note: "widespread in consumer culture" },
  { word: "Proliferation", note: "rapid increase in numbers or volume" },
  { word: "Accumulation", note: "gradual gathering in landfills and waterways" },
  { word: "Degradation", note: "decline in quality and ecological health" },
  { word: "Detrimental", note: "harmful to wildlife and marine species" },
  { word: "Depletion", note: "reduction or exhaustion of finite resources" },
  { word: "Indiscriminate", note: "done without careful thought or disposal control" },
  { word: "Unsustainable", note: "not maintainable at current consumption levels" },
  { word: "Perpetuate", note: "cause wasteful habits to continue indefinitely" },
  { word: "Mitigate", note: "reduce severity of environmental destruction" },
  { word: "Stringent", note: "strict packaging and waste standards" },
  { word: "Viable", note: "practical and workable reusable alternative" },
  { word: "Decompose", note: "break down naturally into organic elements" },
  { word: "Contamination", note: "pollution of freshwater and soil tables" },
  { word: "Resource-intensive", note: "requiring vast amounts of energy and raw materials" },
  { word: "Accountability", note: "manufacturers accepting responsibility for packaging waste" }
];

export const Step2BrainstormT2: React.FC<Step2BrainstormProps> = ({
  formattedTime,
  isRunning,
  isFinished,
  onTimerToggle,
  onTimerReset
}) => {
  const [activeTab, setActiveTab] = useState<"all" | "cause" | "solution" | "chains" | "map">("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isFormatRevealed, setIsFormatRevealed] = useState(false);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const filteredIdeas = STUDENT_IDEAS.filter((idea) => {
    if (activeTab === "all") return true;
    return idea.type === activeTab;
  });

  return (
    <div className="stage-card-wrapper" style={{ overflowY: "auto", maxHeight: "100%" }}>
      {/* Top Header Bar */}
      <div style={{ marginBottom: "12px" }}>
        <span className="apple-badge accent" style={{ marginBottom: "6px" }}>
          Step 02 / 09 • Task Question, Essay Format &amp; Student Idea Bank
        </span>
        <h2 className="stage-title">Deconstruct Task 2: Single-Use Products (Problems &amp; Solutions)</h2>
        <p className="stage-subtitle">
          Examine the prompt, review the 4-paragraph essay architecture, and master the core Student Idea Bank (5 Problems &amp; 5 Solutions with concrete real-world examples).
        </p>
      </div>

      {/* Focus Timer */}
      <div style={{ marginBottom: "14px" }}>
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
              <strong>Examiner Architecture (Paired Method):</strong> In the introduction, paraphrase the prompt and provide a direct problem-and-solution thesis. In <strong>Body Paragraph 1</strong>, state Problem 1, develop its causal mechanism, and directly present its targeted Solution accompanied by a concrete example. In <strong>Body Paragraph 2</strong>, follow the identical paired format for Problem 2 (State Problem 2 → Solution for that + Example). Conclude with a balanced synthesis reinforcing both dimensions.
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
                ⚡ Essay Format: <strong>4-Paragraph Problems and Solutions Architecture (Paired Method)</strong>
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

      {/* STUDENT IDEA DECK WITH MULTI-MODE TABS */}
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
                Student Idea Bank &amp; Strategic Maps
              </h3>
              <p style={{ margin: "2px 0 0", fontSize: "0.82rem", color: "var(--slate-500)" }}>
                Authentic IELTS Ideas: 1 Core Concept + 1 Concrete Example. Includes Cause &amp; Effect Chains and Smartboard Map.
              </p>
            </div>
          </div>

          {/* Filter Pills */}
          <div style={{ display: "flex", gap: "6px", background: "var(--slate-100)", padding: "4px", borderRadius: "12px", flexWrap: "wrap" }}>
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
              🔴 Problems (5)
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
              🟢 Solutions (5)
            </button>
            <button
              onClick={() => setActiveTab("chains")}
              style={{
                padding: "6px 14px",
                borderRadius: "8px",
                border: "none",
                background: activeTab === "chains" ? "#7c3aed" : "transparent",
                color: activeTab === "chains" ? "#ffffff" : "#6d28d9",
                fontWeight: activeTab === "chains" ? 800 : 600,
                fontSize: "0.82rem",
                boxShadow: activeTab === "chains" ? "0 2px 6px rgba(124,58,237,0.3)" : "none",
                cursor: "pointer",
                transition: "all 0.15s ease"
              }}
            >
              🔗 Cause-and-Effect Chains
            </button>
            <button
              onClick={() => setActiveTab("map")}
              style={{
                padding: "6px 14px",
                borderRadius: "8px",
                border: "none",
                background: activeTab === "map" ? "#0284c7" : "transparent",
                color: activeTab === "map" ? "#ffffff" : "#0369a1",
                fontWeight: activeTab === "map" ? 800 : 600,
                fontSize: "0.82rem",
                boxShadow: activeTab === "map" ? "0 2px 6px rgba(2,132,199,0.3)" : "none",
                cursor: "pointer",
                transition: "all 0.15s ease"
              }}
            >
              🗺️ Smart-Board Map
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
            <strong style={{ fontSize: "0.78rem" }}>16 High-Band Vocabulary Bank (Authentic Meanings):</strong>
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

        {/* VIEW 1 & 2: IDEA CARDS GRID */}
        {(activeTab === "all" || activeTab === "cause" || activeTab === "solution") && (
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
        )}

        {/* VIEW 3: CAUSE-AND-EFFECT CHAINS */}
        {activeTab === "chains" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {CAUSE_AND_EFFECT_CHAINS.map((chain, idx) => (
                <div
                  key={chain.id}
                  style={{
                    background: "#ffffff",
                    border: "1.5px solid #e2e8f0",
                    borderRadius: "16px",
                    padding: "20px",
                    boxShadow: "var(--shadow-sm)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <GitBranch size={18} color={idx === 0 ? "#dc2626" : "#d97706"} />
                      <strong style={{ fontSize: "1rem", color: "#0f172a" }}>{chain.title}</strong>
                    </div>
                    <span style={{ fontSize: "0.72rem", background: "#f1f5f9", padding: "2px 8px", borderRadius: "6px", fontWeight: 700, color: "#475569" }}>
                      {chain.subtitle}
                    </span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {chain.steps.map((st, stepIdx) => (
                      <React.Fragment key={st}>
                        <div
                          style={{
                            background: stepIdx === chain.steps.length - 1 ? "#fef2f2" : "#f8fafc",
                            border: stepIdx === chain.steps.length - 1 ? "1.5px solid #fecaca" : "1px solid #e2e8f0",
                            borderRadius: "10px",
                            padding: "10px 14px",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            fontSize: "0.86rem",
                            fontWeight: stepIdx === chain.steps.length - 1 ? 800 : 600,
                            color: stepIdx === chain.steps.length - 1 ? "#991b1b" : "#1e293b"
                          }}
                        >
                          <span
                            style={{
                              width: "22px",
                              height: "22px",
                              borderRadius: "50%",
                              background: stepIdx === chain.steps.length - 1 ? "#dc2626" : "#cbd5e1",
                              color: "#ffffff",
                              fontSize: "0.72rem",
                              fontWeight: 800,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0
                            }}
                          >
                            {stepIdx + 1}
                          </span>
                          <span>{st}</span>
                        </div>
                        {stepIdx < chain.steps.length - 1 && (
                          <div style={{ display: "flex", justifyContent: "center", margin: "-2px 0" }}>
                            <ArrowRight size={14} color="#94a3b8" style={{ transform: "rotate(90deg)" }} />
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 4: SMART-BOARD BRAINSTORMING MAP */}
        {activeTab === "map" && (
          <div
            style={{
              background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
              borderRadius: "18px",
              padding: "24px",
              color: "#ffffff",
              display: "flex",
              flexDirection: "column",
              gap: "20px"
            }}
          >
            <div style={{ textAlign: "center" }}>
              <span style={{ fontSize: "0.76rem", background: "rgba(255,255,255,0.15)", padding: "3px 10px", borderRadius: "6px", fontWeight: 700, textTransform: "uppercase" }}>
                Interactive Smart-Board Map
              </span>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, margin: "6px 0 2px" }}>
                Single-Use Products: Problems → Solutions
              </h3>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              {/* Problems Column */}
              <div style={{ background: "rgba(239, 68, 68, 0.12)", border: "1.5px solid rgba(239, 68, 68, 0.35)", borderRadius: "14px", padding: "18px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", borderBottom: "1px solid rgba(239, 68, 68, 0.3)", paddingBottom: "8px" }}>
                  <ShieldAlert size={18} color="#f87171" />
                  <strong style={{ fontSize: "1rem", color: "#fca5a5" }}>5 Major Problems</strong>
                </div>
                {TASK2_DATA.smartboardBrainstormMap?.problems.map((p, i) => (
                  <div key={p} style={{ background: "rgba(0,0,0,0.25)", padding: "8px 12px", borderRadius: "8px", fontSize: "0.86rem", display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "#f87171", fontWeight: 800 }}>•</span> {p}
                  </div>
                ))}
              </div>

              {/* Solutions Column */}
              <div style={{ background: "rgba(34, 197, 94, 0.12)", border: "1.5px solid rgba(34, 197, 94, 0.35)", borderRadius: "14px", padding: "18px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", borderBottom: "1px solid rgba(34, 197, 94, 0.3)", paddingBottom: "8px" }}>
                  <CheckCircle2 size={18} color="#4ade80" />
                  <strong style={{ fontSize: "1rem", color: "#86efac" }}>5 Pragmatic Solutions</strong>
                </div>
                {TASK2_DATA.smartboardBrainstormMap?.solutions.map((s, i) => (
                  <div key={s} style={{ background: "rgba(0,0,0,0.25)", padding: "8px 12px", borderRadius: "8px", fontSize: "0.86rem", display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "#4ade80", fontWeight: 800 }}>•</span> {s}
                  </div>
                ))}
              </div>
            </div>

            {/* Central Message Banner */}
            <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "14px 18px", textAlign: "center", fontSize: "0.95rem" }}>
              <span style={{ color: "#93c5fd", fontWeight: 800 }}>Central Message: </span>
              <strong>{TASK2_DATA.smartboardBrainstormMap?.centralMessage}</strong>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
