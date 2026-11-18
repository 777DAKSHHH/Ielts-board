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
    formatRule: "Paraphrase the prompt + Outline statement (benefits & drawbacks)"
  },
  {
    stepNum: "2",
    label: "BODY PARA 1",
    badgeBg: "rgba(37, 99, 235, 0.12)",
    badgeColor: "#1d4ed8",
    formatRule: "Advantages: Clean renewable electricity + Substantial utility bill savings"
  },
  {
    stepNum: "3",
    label: "BODY PARA 2",
    badgeBg: "rgba(234, 88, 12, 0.12)",
    badgeColor: "#c2410c",
    formatRule: "Disadvantages: High initial setup costs + Weather intermittency & storage"
  },
  {
    stepNum: "4",
    label: "CONCLUSION",
    badgeBg: "rgba(13, 148, 136, 0.12)",
    badgeColor: "#0f766e",
    formatRule: "Sum-up main advantages & disadvantages + Balanced future recommendation"
  }
];

// Structured cut-to-the-chase student idea cards
interface IdeaItem {
  id: string;
  type: "cause" | "solution"; // "cause" = advantages (Body 1), "solution" = disadvantages (Body 2)
  tag: string;
  oneLiner: string;
  example: string;
}

const STUDENT_IDEAS: IdeaItem[] = [
  // 5 Advantages (Body Para 1)
  {
    id: "adv-1",
    type: "cause",
    tag: "Clean renewable power & decarbonisation",
    oneLiner: "Solar power converts inexhaustible sunlight into electricity with zero toxic emissions, drastically reducing residential carbon footprints and combating climate change.",
    example: "A standard 5kW rooftop solar system preventing four to five tonnes of carbon dioxide emissions annually, equivalent to planting over a hundred trees."
  },
  {
    id: "adv-2",
    type: "cause",
    tag: "Drastic long-term electricity bill savings",
    oneLiner: "Once installed, sunlight is completely free; homeowners generate their own electricity on-site and are shielded from volatile commercial power tariffs.",
    example: "Families in sunny climates reducing their annual electricity utility bills by sixty to eighty percent after installing rooftop photovoltaic panels."
  },
  {
    id: "adv-3",
    type: "cause",
    tag: "Grid autonomy & blackout resilience",
    oneLiner: "Equipping homes with solar panels and battery storage provides energy independence, keeping vital household appliances running during municipal grid blackouts.",
    example: "Suburban and rural residences maintaining uninterrupted refrigeration and medical equipment during severe storm-induced power outages."
  },
  {
    id: "adv-4",
    type: "cause",
    tag: "Revenue generation through net-metering",
    oneLiner: "Many modern power companies credit homeowners for exporting surplus midday electricity back to the municipal grid, converting roofs into modest revenue streams.",
    example: "Domestic solar owners receiving monthly financial rebates or utility credits for surplus daytime solar electricity fed into regional power lines."
  },
  {
    id: "adv-5",
    type: "cause",
    tag: "Minimal maintenance & 25-year panel longevity",
    oneLiner: "Photovoltaic solar panels have no moving mechanical parts, resulting in negligible wear and tear, low servicing costs, and operational lifespans exceeding twenty-five years.",
    example: "Manufacturers providing 25-year performance warranties with virtually zero required maintenance beyond periodic surface dust removal."
  },

  // 5 Disadvantages (Body Para 2)
  {
    id: "dis-1",
    type: "solution",
    tag: "High upfront capital expenditure & installation",
    oneLiner: "Purchasing high-efficiency solar panels, power inverters, mounting equipment, and hiring certified electrical technicians requires a prohibitive upfront investment.",
    example: "A typical residential installation costing between $12,000 and $22,000 before government subsidies, placing it out of reach for lower-income families."
  },
  {
    id: "dis-2",
    type: "solution",
    tag: "Weather dependency & seasonal intermittency",
    oneLiner: "Solar energy is inherently intermittent; electricity generation plummets during overcast, rainy, or winter days, and ceases completely during night hours.",
    example: "Households in northern European regions experiencing up to a seventy percent reduction in solar electricity production throughout dark winter months."
  },
  {
    id: "dis-3",
    type: "solution",
    tag: "Exorbitant cost & finite battery lifespan",
    oneLiner: "Achieving true 24/7 power independence requires expensive lithium-ion battery banks, which degrade chemically and demand costly replacement every decade.",
    example: "Adding a domestic battery storage unit increasing total setup costs by $7,000 to $10,000, significantly extending the system's financial payback period."
  },
  {
    id: "dis-4",
    type: "solution",
    tag: "Roof space, shading & structural constraints",
    oneLiner: "Electricity generation is constrained by roof surface area, angle, and shading; properties with small, shaded roofs or urban apartment tenants cannot utilize rooftop solar.",
    example: "High-density apartment dwellers and tenants without private roof access being effectively excluded from adopting personal solar energy."
  },
  {
    id: "dis-5",
    type: "solution",
    tag: "Manufacturing chemicals & e-waste disposal",
    oneLiner: "Fabricating silicon photovoltaic cells involves hazardous chemical solvents, while decommissioned solar panels create mounting electronic waste challenges.",
    example: "Millions of aging first-generation solar panels reaching the end of their operational lifespans and requiring specialized heavy-metal recycling."
  }
];

const TARGET_LEXIS = [
  { word: "photovoltaic", note: "residential photovoltaic installations" },
  { word: "intermittency", note: "power generation intermittency" },
  { word: "decarbonisation", note: "accelerating residential decarbonisation" },
  { word: "autonomy", note: "greater household energy autonomy" },
  { word: "expenditure", note: "substantial upfront capital expenditure" },
  { word: "inexhaustible", note: "virtually inexhaustible solar radiation" },
  { word: "net metering", note: "net-metering feed-in tariffs" },
  { word: "amortisation", note: "amortisation period of installation costs" },
  { word: "subsidise", note: "government subsidized clean technology" },
  { word: "footprint", note: "shrinking household ecological footprints" },
  { word: "surplus", note: "exporting surplus daytime electricity" },
  { word: "depletion", note: "counteracting fossil fuel depletion" }
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
        <h2 className="stage-title">Deconstruct Household Solar Energy Architecture &amp; One-Liner Points</h2>
        <p className="stage-subtitle">
          Essay Type: <strong>Advantages &amp; Disadvantages Essay</strong>. Master the balanced 4-paragraph architecture: Advantages in Body 1, Disadvantages in Body 2.
        </p>
      </div>

      <div style={{ marginBottom: "18px" }}>
        <TouchTimer
          formattedTime={formattedTime}
          isRunning={isRunning}
          isFinished={isFinished}
          onToggle={onTimerToggle}
          onReset={onTimerReset}
          instruction="Focus Timer: 3 minutes to review the solar prompt, identify key environmental and economic trade-offs, and lock in your core arguments."
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
              <strong>Examiner Requirement:</strong> Present a clear outline statement in the introduction, dedicate Body Paragraph 1 to primary advantages (clean renewable electricity and utility bill savings), dedicate Body Paragraph 2 to primary disadvantages (high upfront capital costs and weather intermittency), and deliver a balanced synthesis in the conclusion.
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
                ⚡ Essay Format: <strong>Balanced 4-Paragraph Advantages &amp; Disadvantages Architecture</strong>
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
              🟢 Advantages (5)
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
              🔴 Disadvantages (5)
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
            <strong style={{ fontSize: "0.78rem" }}>Band 8.5/9 Clean Energy &amp; Technology Lexis:</strong>
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
                      {isCause ? "🟢 Advantage" : "🔴 Disadvantage"} #{index + 1}
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
