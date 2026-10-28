import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  AlertTriangle
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
    category: "Card 1: The Macro Overview Split",
    badgeColor: "#0284c7",
    question: "What are the three essential macro features that must appear in a Band 9 overview for this UK school spending pie chart task?",
    answerTitle: "1) Teachers' Salaries Lion's Share, 2) Insurance as Smallest Proportion, 3) Furniture Volatility vs Staff Decreases",
    bulletPoints: [
      "Teachers' salaries consistently formed the largest expenditure across all three years, peaking at exactly half (50%) of all funds in 1991.",
      "Insurance remained the lowest cost in every period, despite undergoing a continuous fourfold increase from 2% to 8%.",
      "While other workers' salaries and resources experienced net drops by 2001, furniture and equipment displayed marked fluctuation, falling to 5% before surging to 23%."
    ],
    band9Phrase:
      "“Overall, teachers’ salaries consistently represented the largest share of the school’s budget throughout the entire twenty-year timeframe, peaking at precisely half of all expenditure in 1991. Conversely, insurance consistently accounted for the lowest proportion, despite undergoing a continuous fourfold increase. Furthermore, while other workers’ salaries and resources saw overall reductions by 2001, spending on furniture and equipment exhibited dramatic fluctuation, recovering strongly after an initial slump.”"
  },
  {
    id: 2,
    category: "Card 2: Staff Remuneration Dominance (Body 1)",
    badgeColor: "#2563eb",
    question: "How should you report and group teachers' salaries and other workers' salaries to demonstrate Band 9 Coherence and Cohesion?",
    answerTitle: "Group as Combined Staff Remuneration (60%–72% of budget), Contrasting the Peak with the Steady Decline",
    bulletPoints: [
      "Teachers' salaries: 40% (1981) → 50% (1991 peak) → 45% (2001). Always the predominant cost.",
      "Other workers' salaries: 28% (1981) → 22% (1991) → 15% (2001). Unbroken downward trend, almost halving over 20 years.",
      "Synthesis: Combined staff pay absorbed 68% in 1981, 72% in 1991, and 60% in 2001, consistently commanding well over half the budget."
    ],
    band9Phrase:
      "“In terms of staffing costs, teachers’ salaries constituted the school’s principal outlay in every year surveyed, beginning at 40% in 1981, climbing to a peak of 50% in 1991, and subsequently dipping to 45% in 2001. By contrast, expenditure on other workers’ salaries followed an unbroken downward trajectory, diminishing from 28% to 22% and almost halving to 15% by 2001.”"
  },
  {
    id: 3,
    category: "Card 3: Furniture & Equipment Volatility (Body 2)",
    badgeColor: "#059669",
    question: "Why is the trajectory of furniture and equipment considered the most dramatic trend in the visual?",
    answerTitle: "A Two-Thirds Collapse to 5% Followed by an 18-Point Surge to 23% (Overtaking Other Staff)",
    bulletPoints: [
      "1981 baseline: Started at 15%, tied with educational resources.",
      "1991 slump: Plunged to just 5%, a reduction of two-thirds, becoming almost negligible.",
      "2001 resurgence: Surged to 23%, more than quadrupling from its 1991 low and becoming the second-largest cost that year."
    ],
    band9Phrase:
      "“Allocations for furniture and equipment stood at 15% in 1981, plummeted to just 5% in 1991, and then experienced a dramatic resurgence to 23% in 2001, making it the second most significant budget component that year.”"
  },
  {
    id: 4,
    category: "Card 4: Educational Resources (Books) Rise and Fall",
    badgeColor: "#d97706",
    question: "How did spending on educational resources evolve compared to the other non-staff categories?",
    answerTitle: "Temporary Expansion from 15% to 20% in 1991, Followed by a Steep Fall to Single Digits (9% in 2001)",
    bulletPoints: [
      "1981: Represented 15% of spending, equal to furniture.",
      "1991: Rose by 5 percentage points to reach 20%, ranking 3rd behind staff salaries.",
      "2001: Steep drop to 9%, falling below double digits and ending at an all-time low."
    ],
    band9Phrase:
      "“Meanwhile, spending on educational resources such as books initially rose from 15% to 20% between 1981 and 1991, before declining steeply to a twenty-year low of 9% in 2001.”"
  },
  {
    id: 5,
    category: "Card 5: Insurance Fourfold Expansion",
    badgeColor: "#dc2626",
    question: "What is the key analytical nuance to highlight when reporting insurance spending?",
    answerTitle: "Smallest Absolute Percentage in Every Year, Yet Experienced the Greatest Relative Expansion (Quadrupled)",
    bulletPoints: [
      "1981: Started at a negligible 2% (lowest in the visual).",
      "1991: Edged up marginally to 3%, remaining the smallest slice.",
      "2001: Surged to 8%, representing a fourfold increase over the initial 1981 figure."
    ],
    band9Phrase:
      "“Finally, insurance accounted for the smallest percentage in all three periods, edging up from a negligible 2% in 1981 to 3% in 1991, before surging to 8% in 2001 (a fourfold increase).”"
  },
  {
    id: 6,
    category: "Card 6: Exam Pitfalls & Band 9 Precautions",
    badgeColor: "#ea580c",
    isWarning: true,
    question: "What are the most frequent examiner-penalized mistakes in this UK school spending pie chart task?",
    answerTitle: "Mechanical Slice-by-Slice Listing, Using Informal Words (nadir/chasm), and Omitting Combined Totals",
    bulletPoints: [
      "Mechanical Listing: Merely describing Pie 1, then Pie 2, then Pie 3 in sequence without synthesizing trends across years.",
      "Unnatural Vocabulary: Strictly avoid banned melodramatic terms like 'nadir', 'chasm', 'zenith', or 'ebb'. Use standard academic phrasing like 'peak', 'lowest figure', 'downward trajectory'.",
      "Overlooking Grouping: Examiners award Band 9 for grouping data into logical categories (Staff Remuneration vs Operational/Capital Outlay).",
      "Confusing Units: Remember all numbers are percentages of annual expenditure (%), not raw pound amounts (£)."
    ],
    band9Phrase:
      "“Band 9 Criterion: Grouping data logically into Staff Remuneration (Body 1) and Non-Staff Outlay (Body 2), accurately synthesizing multi-decade trajectories, and using precise academic collocations without overly dramatic jargon.”"
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

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "18px",
        width: "100%",
        fontFamily: "inherit"
      }}
    >
      {/* Top Card Counter Strip */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "680px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              fontSize: "0.76rem",
              fontWeight: 800,
              padding: "4px 10px",
              borderRadius: "8px",
              background: card.isWarning ? "#fee2e2" : "#f1f5f9",
              color: card.isWarning ? "#dc2626" : card.badgeColor
            }}
          >
            {card.category}
          </span>
          <span style={{ fontSize: "0.78rem", color: "#64748b", fontWeight: 600 }}>
            Card {currentIdx + 1} of {FLASHCARDS.length}
          </span>
        </div>

        <div style={{ display: "flex", gap: "6px" }}>
          <button
            onClick={handlePrev}
            style={{
              padding: "6px 12px",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
              background: "#ffffff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "0.78rem",
              fontWeight: 700
            }}
          >
            <ChevronLeft size={16} /> Prev
          </button>
          <button
            onClick={handleNext}
            style={{
              padding: "6px 12px",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
              background: "#ffffff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "0.78rem",
              fontWeight: 700
            }}
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Main Flashcard Card (Interactive Flip) */}
      <motion.div
        whileTap={tactilePress}
        onClick={handleFlip}
        style={{
          width: "100%",
          maxWidth: "680px",
          minHeight: "340px",
          background: "#ffffff",
          borderRadius: "22px",
          border: card.isWarning ? "2px solid #f87171" : "1.5px solid #cbd5e1",
          padding: "26px 28px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          transition: "border-color 0.2s ease"
        }}
      >
        {!isFlipped ? (
          /* Question Side */
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", height: "100%" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  color: "#64748b",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }}
              >
                Question / Prompt
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "0.75rem",
                  color: "#2563eb",
                  fontWeight: 700
                }}
              >
                <RotateCw size={12} /> Tap card to reveal Band 9 analysis
              </span>
            </div>

            <div
              style={{
                fontSize: "1.25rem",
                fontWeight: 800,
                color: "#0f172a",
                lineHeight: 1.45,
                marginTop: "12px"
              }}
            >
              {card.question}
            </div>

            <div
              style={{
                marginTop: "auto",
                background: "#f8fafc",
                borderRadius: "12px",
                padding: "12px 14px",
                fontSize: "0.82rem",
                color: "#64748b",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <Sparkles size={16} color="#2563eb" />
              <span>
                Think about the analytical grouping and Band 9 reporting vocabulary before flipping!
              </span>
            </div>
          </div>
        ) : (
          /* Answer Side */
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", height: "100%" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  color: card.badgeColor,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }}
              >
                Band 9 Analytical Answer
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "0.75rem",
                  color: "#64748b",
                  fontWeight: 700
                }}
              >
                <RotateCw size={12} /> Tap to flip back
              </span>
            </div>

            <div style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0f172a", lineHeight: 1.35 }}>
              {card.answerTitle}
            </div>

            <ul
              style={{
                margin: 0,
                paddingLeft: "20px",
                fontSize: "0.86rem",
                color: "#334155",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                lineHeight: 1.45
              }}
            >
              {card.bulletPoints.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>

            <div
              style={{
                background: "#f8fafc",
                borderLeft: `3.5px solid ${card.badgeColor}`,
                borderRadius: "8px",
                padding: "10px 14px",
                fontSize: "0.85rem",
                color: "#1e293b",
                lineHeight: 1.5,
                marginTop: "auto"
              }}
            >
              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  color: card.badgeColor,
                  marginBottom: "3px"
                }}
              >
                MODEL SENTENCE:
              </div>
              <em>{card.band9Phrase}</em>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
