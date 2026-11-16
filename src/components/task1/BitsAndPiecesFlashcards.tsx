import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Award
} from "lucide-react";
import { tactilePress } from "../../motion";

interface FlashcardItem {
  id: number;
  category: string;
  badgeColor: string;
  question: string;
  answerTitle: string;
  bulletPoints: string[];
  band9Phrase: string;
  isWarning?: boolean;
}

const FLASHCARDS: FlashcardItem[] = [
  {
    id: 1,
    category: "Card 1: Macro Qualitative Overview (Zero Numbers Rule)",
    badgeColor: "#0284c7",
    question: "What are the core overarching trajectories that must be highlighted in the overview for this Wheat Exports line graph?",
    answerTitle: "Growth, Decline & Volatility Trajectories (Strictly Without Numbers!)",
    bulletPoints: [
      "Pillar 1 (Ascent): The European Community witnessed sustained upward growth over the period to become the dominant wheat exporter by 1990.",
      "Pillar 2 (Contraction): Australia underwent a steady downward trajectory to finish in the lowest position.",
      "Pillar 3 (Fluctuation): Canada exhibited marked volatility throughout the six-year span, registering both the overall peak and a dramatic plunge before returning to its starting level.",
      "Golden Rule: Never include raw numerical figures (25m, 21m, 14m, 11m) in the overview; keep observations strictly qualitative."
    ],
    band9Phrase:
      "“Overall, the European Community witnessed sustained upward growth over the period to become the dominant wheat exporter by 1990, whereas Australia underwent a steady downward trajectory to finish in the lowest position. In contrast, Canada exhibited marked volatility throughout the six-year span, registering both the overall peak and a dramatic plunge before returning to its starting level.”"
  },
  {
    id: 2,
    category: "Card 2: Canada & Australia Breakdown (Body 1)",
    badgeColor: "#0f172a",
    question: "How should you contrast Canada's volatile rollercoaster with Australia's steady decline in Body Paragraph 1?",
    answerTitle: "Contrast Canada's 1988 Apex (25m) with Australia's Diminishing Trajectory (16m to 11m)",
    bulletPoints: [
      "Canada Start & Apex: Started as leader at 19 million tonnes in 1985, dipped to 17m in 1986, then surged to the overall graph apex of 25m tonnes in 1988.",
      "Canada Slump & Return: Experienced a precipitous plunge of 11m tonnes down to 14m in 1989 before rebounding to finish at 19m tonnes in 1990 (zero net change).",
      "Australia Initial Peak: Began at 15 million tonnes and rose slightly to a peak of 16 million tonnes in 1986.",
      "Australia Contraction & Floor: Diminished continuously over the subsequent three years to 11 million tonnes in 1989, remaining flat through 1990 as the lowest exporter."
    ],
    band9Phrase:
      "“In 1985, Canada was the leading wheat exporter at 19 million tonnes. Following a minor dip to 17 million tonnes in 1986, Canadian shipments surged rapidly to reach the highest point on the entire graph at 25 million tonnes in 1988. However, this was immediately followed by a steep plunge to 14 million tonnes in 1989, after which exports rebounded back to their initial level of 19 million tonnes in 1990. In contrast, Australia commenced at 15 million tonnes and rose slightly to a peak of 16 million tonnes in 1986. Thereafter, Australian wheat exports steadily declined over the subsequent three years to 11 million tonnes in 1989, where they remained unchanged through 1990, ending as the lowest of the three regions.”"
  },
  {
    id: 3,
    category: "Card 3: European Community Ascent to Leadership (Body 2)",
    badgeColor: "#0284c7",
    question: "How do you chronologically develop the European Community's rise from second place to market leader in Body Paragraph 2?",
    answerTitle: "Opening Dip (14m), Plateau (15m), and Final Two-Year Leap to 21m Tonnes",
    bulletPoints: [
      "Starting Position: Commenced in second place at 17 million tonnes in 1985.",
      "1986 Period Trough: Dipped to a period low of 14 million tonnes the following year.",
      "1987–1988 Plateau: Stabilized and leveled off at 15 million tonnes for two consecutive years.",
      "1989–1990 Surge & Overtaking: Surged to 19m tonnes in 1989 and peaked at 21m in 1990, successfully overtaking both Canada and Australia to finish as the market leader."
    ],
    band9Phrase:
      "“Wheat exports from the European Community started in second place at 17 million tonnes in 1985 before declining to a period low of 14 million tonnes in 1986. The figures then plateaued at 15 million tonnes between 1987 and 1988. Over the final two years, the European Community experienced a significant expansion, with export volumes climbing sharply to 19 million tonnes in 1989 and reaching an apex of 21 million tonnes in 1990. By doing so, the European Community overtook both Canada and Australia to become the top exporter.”"
  },
  {
    id: 4,
    category: "Card 4: Examiner Trap Alert — The Zero-Numbers Rule",
    badgeColor: "#e11d48",
    question: "Why does citing raw numbers in the overview prevent candidates from achieving Band 8 or 9?",
    answerTitle: "An Overview is a Qualitative Synthesis, Not a Repetitive Data Listing",
    bulletPoints: [
      "Examiner Descriptors: Task Achievement Band 7 requires 'a clear overview of main trends'; Band 9 demands a 'fully developed response with a clear progression'.",
      "Common Pitfall: Writing 'Overall, Canada reached 25m while Australia fell to 11m' turns the overview into an incomplete body paragraph.",
      "Best Practice: Use conceptual qualitative vocabulary such as 'sustained upward growth', 'dominant exporter', 'steady downward trajectory', and 'marked volatility'.",
      "Data Allocation: Reserve exact numbers (19m, 25m, 14m, 11m, 21m) strictly for Body 1 and Body 2."
    ],
    band9Phrase:
      "“The hallmark of a Band 9 writer is the ability to perceive macro directional movements conceptually without relying on data crutches in the overview paragraph.”",
    isWarning: true
  }
];

export const BitsAndPiecesFlashcards: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const card = FLASHCARDS[currentIdx];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIdx((prev) => (prev + 1) % FLASHCARDS.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIdx((prev) => (prev - 1 + FLASHCARDS.length) % FLASHCARDS.length);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        width: "100%",
        fontFamily: "system-ui, -apple-system, sans-serif"
      }}
    >
      {/* Flashcard Header Controls */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Sparkles size={18} color="#2563eb" />
          <strong style={{ fontSize: "0.95rem", color: "#0f172a" }}>
            Interactive Flashcard Deck • Card {currentIdx + 1} of {FLASHCARDS.length}
          </strong>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button
            type="button"
            onClick={handlePrev}
            style={{
              padding: "6px 12px",
              borderRadius: "8px",
              border: "1.5px solid #cbd5e1",
              background: "#ffffff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "0.8rem",
              fontWeight: 700,
              color: "#475569"
            }}
          >
            <ChevronLeft size={16} /> Prev
          </button>

          <button
            type="button"
            onClick={handleNext}
            style={{
              padding: "6px 12px",
              borderRadius: "8px",
              border: "1.5px solid #cbd5e1",
              background: "#ffffff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "0.8rem",
              fontWeight: 700,
              color: "#475569"
            }}
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Main Flashcard Container */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        style={{
          background: "#ffffff",
          border: `1.5px solid ${card.badgeColor}40`,
          borderRadius: "20px",
          padding: "24px",
          minHeight: "340px",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "14px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
          position: "relative",
          transition: "all 0.2s ease"
        }}
      >
        {/* Top Card Badge & Flip Indicator */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 800,
              padding: "3px 10px",
              borderRadius: "6px",
              background: `${card.badgeColor}15`,
              color: card.badgeColor
            }}
          >
            {card.category}
          </span>

          <span
            style={{
              fontSize: "0.75rem",
              color: "#64748b",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontWeight: 650
            }}
          >
            <RotateCw size={13} /> {isFlipped ? "Showing Band 9 Answer" : "Click anywhere to Flip"}
          </span>
        </div>

        {/* Card Body */}
        {!isFlipped ? (
          /* Question Side */
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", margin: "auto 0" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "#94a3b8", textTransform: "uppercase" }}>
              Question &amp; Analytical Challenge
            </span>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a", lineHeight: 1.45, margin: 0 }}>
              {card.question}
            </h3>
            <p style={{ fontSize: "0.86rem", color: "#64748b", margin: 0 }}>
              Tap or click to reveal the examiner-approved Band 9 response formula and model phrasing.
            </p>
          </div>
        ) : (
          /* Answer Side */
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div>
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: card.badgeColor, textTransform: "uppercase" }}>
                Band 9 Solution Formula
              </span>
              <h4 style={{ fontSize: "1.08rem", fontWeight: 800, color: "#0f172a", margin: "2px 0 0" }}>
                {card.answerTitle}
              </h4>
            </div>

            <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "0.88rem", color: "#334155", lineHeight: 1.55 }}>
              {card.bulletPoints.map((pt, i) => (
                <li key={i} style={{ marginBottom: "4px" }}>
                  {pt}
                </li>
              ))}
            </ul>

            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "10px 14px", marginTop: "4px" }}>
              <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "#64748b", textTransform: "uppercase" }}>
                Model Sentence Application
              </span>
              <p style={{ margin: "2px 0 0", fontSize: "0.86rem", color: "#0f172a", fontStyle: "italic", lineHeight: 1.45 }}>
                {card.band9Phrase}
              </p>
            </div>
          </div>
        )}

        {/* Card Footer Progress Bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "8px", borderTop: "1px solid #f1f5f9" }}>
          <span style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 650 }}>
            {card.isWarning ? "⚠️ High-Frequency Examiner Trap" : "✓ Band 9 Analytical Anchor"}
          </span>
          <div style={{ display: "flex", gap: "4px" }}>
            {FLASHCARDS.map((_, i) => (
              <span
                key={i}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: i === currentIdx ? card.badgeColor : "#e2e8f0"
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
