import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  Eye,
  EyeOff,
  Sparkles,
  Volume2,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Table,
  Check,
  X,
  Compass,
  Layers,
  ShieldAlert,
  Flame,
  Award
} from "lucide-react";
import {
  CONFUSED_WORDS_EPISODES,
  ConfusedWordItem,
  PracticeQuizQuestion
} from "../../data/confusedWordsData";
import { ModuleType } from "../../types";

interface ConfusedWordsPageProps {
  onSpeak?: (text: string) => void;
  accent?: "en-GB" | "en-US";
  onNavigateModule?: (mod: ModuleType, step?: number) => void;
  returnModule?: "task1" | "task2";
}

export const ConfusedWordsPage: React.FC<ConfusedWordsPageProps> = ({
  onSpeak,
  onNavigateModule,
  returnModule = "task1"
}) => {
  // Episode Selection (Defaults to newest episode in series)
  const [selectedEpisodeIndex, setSelectedEpisodeIndex] = useState<number>(CONFUSED_WORDS_EPISODES.length - 1);
  const data = CONFUSED_WORDS_EPISODES[selectedEpisodeIndex] || CONFUSED_WORDS_EPISODES[0];

  // Classroom teaching mode: Teacher asks first, then reveals!
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const [activeWordTab, setActiveWordTab] = useState<string>("all");
  const [revealedHints, setRevealedHints] = useState<Record<number, boolean>>({});
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});

  const handleSwitchEpisode = (idx: number) => {
    setSelectedEpisodeIndex(idx);
    setIsRevealed(false);
    setActiveWordTab("all");
    setRevealedHints({});
    setSelectedAnswers({});
  };

  const toggleHint = (id: number) => {
    setRevealedHints((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelectAnswer = (questionId: number, answer: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
  };

  const calculateScore = () => {
    let score = 0;
    data.practiceDrills.forEach((q) => {
      if (selectedAnswers[q.id]?.toLowerCase() === q.blankWord.toLowerCase()) {
        score++;
      }
    });
    return score;
  };

  const score = calculateScore();
  const allAnswered = Object.keys(selectedAnswers).length === data.practiceDrills.length;

  const handleReturn = () => {
    if (onNavigateModule) {
      if (returnModule === "task2") {
        onNavigateModule("task2", 9);
      } else {
        onNavigateModule("task1", 8);
      }
    }
  };

  return (
    <div className="stage-card-wrapper" style={{ overflowY: "auto", maxHeight: "100%", paddingBottom: "40px" }}>
      {/* Top Navigation & Series Header Banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          borderRadius: "20px",
          padding: "24px 28px",
          color: "#ffffff",
          marginBottom: "20px",
          boxShadow: "0 10px 30px rgba(15, 23, 42, 0.15)",
          border: "1.5px solid #334155"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "14px", marginBottom: "14px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px", flexWrap: "wrap" }}>
              <span
                style={{
                  background: "#3b82f6",
                  color: "#ffffff",
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  padding: "4px 10px",
                  borderRadius: "999px",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase"
                }}
              >
                Episode 0{data.episodeNumber} • Vocabulary Nuance Lab
              </span>
              <span
                style={{
                  background: "rgba(255,255,255,0.12)",
                  color: "#94a3b8",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  padding: "4px 10px",
                  borderRadius: "999px"
                }}
              >
                Words Often Misunderstood
              </span>
            </div>
            <h1 style={{ fontSize: "1.9rem", fontWeight: 850, margin: "0 0 6px", letterSpacing: "-0.02em" }}>
              {data.targetWords.map((tw, twIdx) => (
                <React.Fragment key={tw}>
                  <span style={{ color: data.words[twIdx]?.themeColor || "#60a5fa" }}>{tw}</span>
                  {twIdx < data.targetWords.length - 1 && (
                    <span style={{ color: "#94a3b8", margin: "0 8px", fontSize: "1.2rem", fontWeight: 600 }}>vs.</span>
                  )}
                </React.Fragment>
              ))}
            </h1>
            <p style={{ fontSize: "0.94rem", color: "#cbd5e1", margin: 0, maxWidth: "750px", lineHeight: 1.5 }}>
              {data.seriesSubtitle}
            </p>
          </div>

          {/* Action Strip: Return Button & Reveal All Toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={handleReturn}
              style={{
                padding: "10px 16px",
                background: "rgba(255, 255, 255, 0.1)",
                color: "#ffffff",
                border: "1.5px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "12px",
                fontSize: "0.84rem",
                fontWeight: 750,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.15s ease"
              }}
              title={`Return to ${returnModule === "task2" ? "Task 2 Step 9" : "Task 1 Step 8"}`}
            >
              <ArrowLeft size={16} />
              <span>Back to {returnModule === "task2" ? "Task 2 (Step 9)" : "Task 1 (Step 8)"}</span>
            </button>

            <button
              type="button"
              onClick={() => setIsRevealed(!isRevealed)}
              style={{
                padding: "10px 18px",
                background: isRevealed ? "#10b981" : "#3b82f6",
                color: "#ffffff",
                border: "none",
                borderRadius: "12px",
                fontSize: "0.84rem",
                fontWeight: 800,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: isRevealed ? "0 4px 14px rgba(16, 185, 129, 0.4)" : "0 4px 14px rgba(59, 130, 246, 0.4)",
                transition: "all 0.15s ease"
              }}
            >
              {isRevealed ? <EyeOff size={16} /> : <Eye size={16} />}
              <span>{isRevealed ? "Teacher View: Breakdown Active" : "Ask Students First (Reveal Breakdown)"}</span>
            </button>
          </div>
        </div>

        {/* EPISODE SELECTOR ARCHIVE BAR */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flexWrap: "wrap",
            background: "rgba(0, 0, 0, 0.25)",
            padding: "8px 14px",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            marginBottom: "14px"
          }}
        >
          <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em", marginRight: "6px" }}>
            Series Episode Selector:
          </span>
          {CONFUSED_WORDS_EPISODES.map((ep, idx) => {
            const isActive = selectedEpisodeIndex === idx;
            return (
              <button
                key={ep.seriesId}
                type="button"
                onClick={() => handleSwitchEpisode(idx)}
                style={{
                  padding: "5px 12px",
                  borderRadius: "8px",
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  cursor: "pointer",
                  border: isActive ? "1.5px solid #60a5fa" : "1px solid rgba(255, 255, 255, 0.18)",
                  background: isActive ? "#2563eb" : "rgba(255, 255, 255, 0.06)",
                  color: "#ffffff",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "all 0.15s ease",
                  boxShadow: isActive ? "0 2px 8px rgba(37, 99, 235, 0.4)" : "none"
                }}
              >
                <span>Ep 0{ep.episodeNumber}: {ep.episodeTitle}</span>
                {idx === CONFUSED_WORDS_EPISODES.length - 1 && (
                  <span style={{ background: "#10b981", color: "#ffffff", fontSize: "0.62rem", padding: "1px 5px", borderRadius: "4px", fontWeight: 900 }}>
                    LATEST
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Quick Core Distinction Summary Strip (Dynamic for Active Episode) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "12px",
            marginTop: "12px",
            paddingTop: "14px",
            borderTop: "1px solid rgba(255,255,255,0.12)"
          }}
        >
          {data.words.map((w, wIdx) => (
            <div
              key={w.word}
              style={{
                background: `${w.themeColor}1a`,
                border: `1px solid ${w.themeColor}4d`,
                borderRadius: "10px",
                padding: "10px 14px"
              }}
            >
              <div style={{ color: w.themeColor, fontSize: "0.74rem", fontWeight: 800, textTransform: "uppercase" }}>
                {wIdx + 1}. {w.word}
              </div>
              <strong style={{ color: "#ffffff", fontSize: "0.88rem", display: "block", marginTop: "2px" }}>
                {w.coreConcept}
              </strong>
              <div style={{ color: "#cbd5e1", fontSize: "0.78rem", marginTop: "2px" }}>
                {w.visualMetaphor} • {w.partOfSpeech.split("(")[0].trim()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 1: CLASSROOM DISCUSSION CHALLENGE ("ASK STUDENTS FIRST") */}
      <div
        style={{
          background: "#ffffff",
          border: "2px solid #e2e8f0",
          borderRadius: "18px",
          padding: "22px",
          marginBottom: "22px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.04)"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px", flexWrap: "wrap", gap: "10px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "#fef3c7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Lightbulb size={20} color="#d97706" />
            </div>
            <div>
              <h2 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
                {data.classroomPrompt.leadQuestion}
              </h2>
              <p style={{ fontSize: "0.84rem", color: "#64748b", margin: 0 }}>
                {data.classroomPrompt.subtext}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsRevealed(true)}
            style={{
              padding: "7px 14px",
              background: "#f1f5f9",
              border: "1px solid #cbd5e1",
              borderRadius: "8px",
              fontSize: "0.78rem",
              fontWeight: 750,
              color: "#334155",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            <Sparkles size={14} color="#d97706" />
            <span>Reveal Detailed Rules Below</span>
          </button>
        </div>

        {/* 3 Interactive Classroom Inquiry Prompt Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "14px" }}>
          {data.classroomPrompt.discussionQuestions.map((q) => {
            const hasHint = revealedHints[q.id];
            return (
              <div
                key={q.id}
                style={{
                  background: "#f8fafc",
                  border: "1.5px solid #e2e8f0",
                  borderRadius: "14px",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                    <span
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        background: "#0f172a",
                        color: "#ffffff",
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      Q{q.id}
                    </span>
                    <strong style={{ fontSize: "0.88rem", color: "#1e293b" }}>Prompt {q.id}</strong>
                  </div>

                  <p style={{ fontSize: "0.90rem", color: "#334155", fontWeight: 650, margin: "0 0 10px", lineHeight: 1.45 }}>
                    {q.question}
                  </p>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => toggleHint(q.id)}
                    style={{
                      background: hasHint ? "#eff6ff" : "#ffffff",
                      border: "1px solid #cbd5e1",
                      borderRadius: "8px",
                      padding: "5px 10px",
                      fontSize: "0.76rem",
                      fontWeight: 750,
                      color: hasHint ? "#1d4ed8" : "#475569",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      width: "fit-content"
                    }}
                  >
                    <HelpCircle size={13} />
                    <span>{hasHint ? "Hide Teacher Hint" : "Show Teacher Hint"}</span>
                  </button>

                  {hasHint && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{
                        marginTop: "8px",
                        padding: "8px 10px",
                        background: "#eff6ff",
                        borderLeft: "3px solid #2563eb",
                        borderRadius: "6px",
                        fontSize: "0.80rem",
                        color: "#1e40af",
                        lineHeight: 1.4
                      }}
                    >
                      <strong>Teacher Hint:</strong> {q.hint}
                    </motion.div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 2: THREE CORE WORD CARDS (REVEALED OR TOGGLED) */}
      <div style={{ marginBottom: "26px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px", flexWrap: "wrap", gap: "10px" }}>
          <div>
            <span className="apple-badge accent" style={{ marginBottom: "4px" }}>
              Linguistic Architecture &amp; Mental Visuals
            </span>
            <h2 className="stage-title" style={{ margin: 0 }}>
              Definitive Breakdown: Rules, Metaphors &amp; Applications
            </h2>
          </div>

          {/* Word Filter Tabs */}
          <div style={{ display: "flex", gap: "6px", background: "#f1f5f9", padding: "4px", borderRadius: "10px" }}>
            {["all", ...data.targetWords].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveWordTab(tab)}
                style={{
                  padding: "5px 12px",
                  borderRadius: "7px",
                  border: "none",
                  fontSize: "0.78rem",
                  fontWeight: 750,
                  cursor: "pointer",
                  background: activeWordTab === tab ? "#0f172a" : "transparent",
                  color: activeWordTab === tab ? "#ffffff" : "#64748b",
                  transition: "all 0.15s ease"
                }}
              >
                {tab === "all" ? `Show All ${data.targetWords.length}` : tab}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Word Cards Grid */}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {data.words
            .filter((w) => activeWordTab === "all" || w.word === activeWordTab)
            .map((item: ConfusedWordItem) => (
              <div
                key={item.word}
                style={{
                  background: "#ffffff",
                  border: `2px solid ${item.borderColor}`,
                  borderRadius: "18px",
                  padding: "22px 24px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.03)"
                }}
              >
                {/* Word Card Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "14px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div
                      style={{
                        padding: "6px 14px",
                        background: item.themeColor,
                        color: "#ffffff",
                        borderRadius: "10px",
                        fontSize: "1.15rem",
                        fontWeight: 850,
                        letterSpacing: "0.03em"
                      }}
                    >
                      {item.word}
                    </div>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ fontSize: "0.85rem", color: "#64748b", fontWeight: 600 }}>{item.pronunciation}</span>
                        <span style={{ fontSize: "0.74rem", background: "#f1f5f9", color: "#475569", padding: "2px 6px", borderRadius: "4px", fontWeight: 700 }}>
                          {item.partOfSpeech}
                        </span>
                      </div>
                      <strong style={{ fontSize: "1.05rem", color: "#0f172a", display: "block", marginTop: "2px" }}>
                        {item.coreConcept}
                      </strong>
                    </div>
                  </div>

                  {onSpeak && (
                    <button
                      type="button"
                      onClick={() => onSpeak(item.sampleSentence)}
                      style={{
                        padding: "6px 12px",
                        background: item.bgLight,
                        border: `1px solid ${item.borderColor}`,
                        color: item.themeColor,
                        borderRadius: "8px",
                        fontSize: "0.78rem",
                        fontWeight: 750,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px"
                      }}
                    >
                      <Volume2 size={14} />
                      <span>Hear Sample</span>
                    </button>
                  )}
                </div>

                {/* Mental Visual Metaphor Box */}
                <div
                  style={{
                    background: item.bgLight,
                    borderLeft: `4px solid ${item.themeColor}`,
                    borderRadius: "10px",
                    padding: "12px 16px",
                    marginBottom: "14px"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                    <Compass size={16} color={item.themeColor} />
                    <strong style={{ fontSize: "0.88rem", color: item.themeColor }}>
                      Visual Metaphor: {item.visualMetaphor}
                    </strong>
                  </div>
                  <p style={{ margin: 0, fontSize: "0.86rem", color: "#334155", lineHeight: 1.5 }}>
                    {item.visualMetaphorDetail}
                  </p>
                </div>

                {/* Key Golden Rule */}
                <div style={{ marginBottom: "14px" }}>
                  <div style={{ fontSize: "0.76rem", fontWeight: 800, color: "#64748b", textTransform: "uppercase", marginBottom: "4px" }}>
                    The Golden Rule
                  </div>
                  <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "#0f172a", background: "#f8fafc", padding: "10px 14px", borderRadius: "10px", border: "1px solid #e2e8f0" }}>
                    {item.keyRule}
                  </div>
                </div>

                {/* Usage Domains & Concrete Examples */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "12px", marginBottom: "14px" }}>
                  {item.usageDomains.map((domain) => (
                    <div
                      key={domain.domainTitle}
                      style={{
                        background: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        borderRadius: "12px",
                        padding: "12px 14px"
                      }}
                    >
                      <strong style={{ fontSize: "0.88rem", color: item.themeColor, display: "block", marginBottom: "3px" }}>
                        {domain.domainTitle}
                      </strong>
                      <p style={{ fontSize: "0.78rem", color: "#64748b", margin: "0 0 8px", lineHeight: 1.4 }}>
                        {domain.description}
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                        {domain.examples.map((ex, exIdx) => (
                          <div
                            key={exIdx}
                            style={{
                              fontSize: "0.82rem",
                              color: "#1e293b",
                              background: "#ffffff",
                              padding: "6px 8px",
                              borderRadius: "6px",
                              border: "1px solid #e2e8f0",
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "6px"
                            }}
                          >
                            <span style={{ color: item.themeColor, fontWeight: 800 }}>•</span>
                            <span style={{ lineHeight: 1.35 }}>{ex}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Abstract Idioms Cloud (Special for UNDER) */}
                {item.abstractIdioms && item.abstractIdioms.length > 0 && (
                  <div style={{ marginBottom: "14px", background: "#ecfdf5", border: "1px solid #a7f3d0", borderRadius: "12px", padding: "12px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                      <Flame size={15} color="#059669" />
                      <strong style={{ fontSize: "0.86rem", color: "#065f46" }}>
                        Essential Abstract Idiomatic Clusters with UNDER:
                      </strong>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {item.abstractIdioms.map((idiom) => (
                        <div
                          key={idiom.phrase}
                          style={{
                            background: "#ffffff",
                            border: "1px solid #6ee7b7",
                            borderRadius: "8px",
                            padding: "6px 10px",
                            fontSize: "0.78rem"
                          }}
                        >
                          <strong style={{ color: "#047857" }}>{idiom.phrase}:</strong>{" "}
                          <span style={{ color: "#475569" }}>{idiom.meaning}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bottom Strip: Memory Hack & Pitfall Alert */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "10px" }}>
                  {/* Memory Hack */}
                  <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "10px", padding: "10px 14px", display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <div>
                      <strong style={{ fontSize: "0.80rem", color: "#166534", display: "block" }}>Memory Hack:</strong>
                      <span style={{ fontSize: "0.80rem", color: "#14532d", lineHeight: 1.4 }}>{item.memoryHack}</span>
                    </div>
                  </div>

                  {/* Common Pitfall */}
                  <div style={{ background: "#fff1f2", border: "1px solid #fecdd3", borderRadius: "10px", padding: "10px 14px", display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <AlertTriangle size={16} color="#e11d48" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <div>
                      <strong style={{ fontSize: "0.80rem", color: "#9f1239", display: "block" }}>Common Pitfall:</strong>
                      <span style={{ fontSize: "0.80rem", color: "#881337", lineHeight: 1.4 }}>{item.commonPitfall}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* SECTION 3: COMPARISON MATRIX TABLE */}
      <div
        style={{
          background: "#ffffff",
          border: "2px solid #e2e8f0",
          borderRadius: "18px",
          padding: "22px",
          marginBottom: "26px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.03)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
          <Table size={20} color="#0f172a" />
          <h2 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
            Side-by-Side Comparison Matrix
          </h2>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.84rem", textAlign: "left" }}>
            <thead>
              <tr style={{ background: "#f8fafc", borderBottom: "2px solid #cbd5e1" }}>
                <th style={{ padding: "12px 14px", color: "#475569", fontWeight: 800 }}>Feature / Context</th>
                {data.targetWords.map((tw, idx) => (
                  <th
                    key={tw}
                    style={{
                      padding: "12px 14px",
                      color: data.words[idx]?.themeColor || "#2563eb",
                      fontWeight: 850
                    }}
                  >
                    {tw}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.matrixComparison.map((row, rIdx) => (
                <tr
                  key={row.feature}
                  style={{
                    background: rIdx % 2 === 0 ? "#ffffff" : "#f8fafc",
                    borderBottom: "1px solid #e2e8f0"
                  }}
                >
                  <td style={{ padding: "11px 14px", fontWeight: 750, color: "#1e293b" }}>{row.feature}</td>
                  {data.targetWords.map((tw) => {
                    const val =
                      row.wordValues?.[tw] ||
                      (tw === "BELOW" ? row.below : tw === "UNDER" ? row.under : row.underneath) ||
                      "—";
                    return (
                      <td key={tw} style={{ padding: "11px 14px", color: "#1e293b", lineHeight: 1.4 }}>
                        {val}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 4: INTERACTIVE PRACTICE DRILLS (6 QUESTIONS) */}
      <div
        style={{
          background: "#ffffff",
          border: "2px solid #e2e8f0",
          borderRadius: "18px",
          padding: "22px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.03)"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", flexWrap: "wrap", gap: "10px" }}>
          <div>
            <span className="apple-badge success" style={{ marginBottom: "4px" }}>
              Student Practice Drills
            </span>
            <h2 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
              Test Your Mastery: Select the Correct Word
            </h2>
            <p style={{ fontSize: "0.84rem", color: "#64748b", margin: 0 }}>
              Tap one of the options below to fill in the blank. Instant visual feedback and rule explanations will appear.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                background: allAnswered ? (score >= 5 ? "#dcfce7" : "#fef3c7") : "#f1f5f9",
                border: "1px solid #cbd5e1",
                borderRadius: "10px",
                padding: "6px 14px",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <Award size={18} color={score >= 5 ? "#16a34a" : "#d97706"} />
              <strong style={{ fontSize: "0.88rem", color: "#0f172a" }}>
                Score: {score} / {data.practiceDrills.length}
              </strong>
            </div>

            <button
              type="button"
              onClick={handleResetQuiz}
              style={{
                padding: "6px 12px",
                background: "#f1f5f9",
                border: "1px solid #cbd5e1",
                borderRadius: "8px",
                fontSize: "0.78rem",
                fontWeight: 700,
                color: "#475569",
                cursor: "pointer"
              }}
            >
              Reset Drills
            </button>
          </div>
        </div>

        {/* Drill Questions List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {data.practiceDrills.map((drill: PracticeQuizQuestion) => {
            const userAnswer = selectedAnswers[drill.id];
            const isCorrect = userAnswer?.toLowerCase() === drill.blankWord.toLowerCase();
            const hasAnswered = !!userAnswer;

            return (
              <div
                key={drill.id}
                style={{
                  background: hasAnswered ? (isCorrect ? "#f0fdf4" : "#fff1f2") : "#f8fafc",
                  border: hasAnswered ? (isCorrect ? "1.5px solid #86efac" : "1.5px solid #fecdd3") : "1.5px solid #e2e8f0",
                  borderRadius: "14px",
                  padding: "16px 18px",
                  transition: "all 0.15s ease"
                }}
              >
                {/* Sentence Prompt */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "12px" }}>
                  <span
                    style={{
                      width: "26px",
                      height: "26px",
                      borderRadius: "6px",
                      background: hasAnswered ? (isCorrect ? "#16a34a" : "#e11d48") : "#0f172a",
                      color: "#ffffff",
                      fontSize: "0.78rem",
                      fontWeight: 800,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    }}
                  >
                    {hasAnswered ? (isCorrect ? <Check size={14} /> : <X size={14} />) : drill.id}
                  </span>

                  <div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0f172a", lineHeight: 1.45 }}>
                      {drill.sentence.split(/_{3,}/).map((part, pIdx, arr) => (
                        <React.Fragment key={pIdx}>
                          {part}
                          {pIdx < arr.length - 1 && (
                            <span
                              style={{
                                display: "inline-block",
                                padding: "2px 10px",
                                margin: "0 4px",
                                borderRadius: "6px",
                                fontWeight: 800,
                                background: hasAnswered ? (isCorrect ? "#bbf7d0" : "#fecdd3") : "#e2e8f0",
                                color: hasAnswered ? (isCorrect ? "#166534" : "#9f1239") : "#64748b",
                                borderBottom: "2px solid #0f172a"
                              }}
                            >
                              {userAnswer ? userAnswer.toUpperCase() : "______"}
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Multiple Choice Options Strip */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", paddingLeft: "36px" }}>
                  {drill.options.map((opt) => {
                    const isSelected = userAnswer === opt;
                    const isTarget = drill.blankWord === opt;

                    let btnBg = "#ffffff";
                    let btnColor = "#334155";
                    let btnBorder = "#cbd5e1";

                    if (hasAnswered) {
                      if (isSelected && isCorrect) {
                        btnBg = "#16a34a";
                        btnColor = "#ffffff";
                        btnBorder = "#15803d";
                      } else if (isSelected && !isCorrect) {
                        btnBg = "#e11d48";
                        btnColor = "#ffffff";
                        btnBorder = "#be123c";
                      } else if (isTarget) {
                        btnBg = "#bbf7d0";
                        btnColor = "#166534";
                        btnBorder = "#86efac";
                      }
                    }

                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handleSelectAnswer(drill.id, opt)}
                        style={{
                          padding: "6px 16px",
                          background: btnBg,
                          color: btnColor,
                          border: `1.5px solid ${btnBorder}`,
                          borderRadius: "8px",
                          fontSize: "0.82rem",
                          fontWeight: 750,
                          cursor: "pointer",
                          textTransform: "uppercase",
                          letterSpacing: "0.03em",
                          transition: "all 0.15s ease"
                        }}
                      >
                        {opt}
                      </button>
                    );
                  })}

                  <span style={{ fontSize: "0.72rem", background: "#f1f5f9", color: "#64748b", padding: "3px 8px", borderRadius: "5px", fontWeight: 700, marginLeft: "auto" }}>
                    Rule: {drill.ruleTag}
                  </span>
                </div>

                {/* Explanation on Answer */}
                {hasAnswered && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    style={{
                      marginTop: "10px",
                      paddingTop: "10px",
                      borderTop: isCorrect ? "1px solid #bbf7d0" : "1px solid #fecdd3",
                      paddingLeft: "36px",
                      fontSize: "0.82rem",
                      color: isCorrect ? "#15803d" : "#9f1239",
                      lineHeight: 1.45
                    }}
                  >
                    <strong>{isCorrect ? "Correct!" : `Incorrect — Correct answer: ${drill.blankWord.toUpperCase()}`}</strong>{" "}
                    {drill.explanation}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
