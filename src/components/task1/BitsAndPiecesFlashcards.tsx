import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Award,
  Filter
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
    badgeColor: "#059669",
    question: "What are the core overarching features that must be highlighted in the overview for this Auckland Shopping Complex Survey?",
    answerTitle: "Overall Positive Approval, Design Dominance & Stark Dining Gender Disparity",
    bulletPoints: [
      "Pillar 1 (General High Approval): Visitors viewed the complex predominantly positively across all three evaluated sectors, with complex architectural design achieving the highest cumulative approval (79% favorable).",
      "Pillar 2 (Gender Divergence in Dining): While both male and female cohorts exhibited identical dissatisfaction with retail shops (20%), attitudes toward dining facilities diverged sharply, with female dissatisfaction exceeding the male rate by more than four times.",
      "Golden Rule: Never list raw numbers or individual percentages in the overview; synthesize overarching tendencies and primary contrasts."
    ],
    band9Phrase:
      "“Overall, the shopping complex garnered predominantly positive feedback across all evaluated domains, with architectural design receiving the highest aggregate approval. Notably, while dissatisfaction with retail shops was identical between genders, dining facilities revealed a pronounced disparity, as females were considerably more critical than males.”"
  },
  {
    id: 2,
    category: "Card 2: Retail Shops Proportions & Parity (Body 1A)",
    badgeColor: "#16a34a",
    question: "How do you systematically report and contrast male and female responses for retail shops in Table 1?",
    answerTitle: "Enthusiasm Doubling (34% vs 17%) & Dissatisfaction Parity (20%)",
    bulletPoints: [
      "Male Ratings: 45% satisfied and 17% very satisfied, yielding a solid 62% combined positive evaluation.",
      "Female Ratings: 37% satisfied, but extreme enthusiasm was exactly double that of men (34% vs 17%), yielding 71% total positive rating.",
      "The Unifying Similarity: Despite divergent enthusiasm, both genders registered an identical 20% dissatisfaction rate.",
      "Neutrality Contrast: 18% of men offered no comment compared to just 9% of women."
    ],
    band9Phrase:
      "“In retail shops, 45% of male visitors were satisfied alongside 17% who were very satisfied. By comparison, female shoppers demonstrated considerably higher enthusiasm, with 34% describing themselves as very satisfied—exactly double the male proportion—while dissatisfaction rates for both sexes were identical at 20%.”"
  },
  {
    id: 3,
    category: "Card 3: Restaurants & Dining Contrast (Body 1B)",
    badgeColor: "#ea580c",
    question: "How do you frame the dramatic contrast between men and women in Table 2 (Restaurants)?",
    answerTitle: "Peak Male Approval (80%) vs Quadruple Female Dissatisfaction (21% vs 5%)",
    bulletPoints: [
      "Peak Male Contentment: Men registered the highest positive feedback in the entire survey, with 55% satisfied and 25% very satisfied (80% total approval), while dissatisfaction was minuscule at 5%.",
      "Stark Female Displeasure: In sharp contrast, female dissatisfaction stood at 21%, more than fourfold higher than that of males.",
      "Neutrality Cohort: Female patrons also displayed higher neutrality (20% no comment vs 15% for males)."
    ],
    band9Phrase:
      "“Regarding dining establishments, male visitors expressed overwhelming contentment, with 55% satisfied and 25% very satisfied, whereas dissatisfaction was negligible at just 5%. In sharp contrast, female dissatisfaction stood at 21%, more than fourfold higher than that of their male counterparts.”"
  },
  {
    id: 4,
    category: "Card 4: Complex Architectural Design (Body 2)",
    badgeColor: "#7c3aed",
    question: "How do you deconstruct the single pie chart for overall design without repeating tabular language?",
    answerTitle: "Proportional Fractions (Nearly Two-Thirds) & Cumulative Synthesis (79%)",
    bulletPoints: [
      "Dominant Majority: 62% satisfied represents nearly two-thirds (~5/8) of all respondents, forming the single largest cohort in the survey.",
      "Cumulative Synthesis: Adding 17% very satisfied brings total positive approval to 79%.",
      "Minority Opposition & Indifference: Dissatisfaction and neutral non-responses accounted for only 10% and 11% respectively."
    ],
    band9Phrase:
      "“Regarding the complex's design, the pie chart indicates widespread acclaim, with nearly two-thirds of respondents (62%) reporting satisfaction. An additional 17% were very satisfied, bringing total positive sentiment to 79%, whereas negative appraisals and neutral responses were marginal at 10% and 11% respectively.”"
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
    setIsFlipped((prev) => !prev);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "100%",
        fontFamily: "system-ui, -apple-system, sans-serif"
      }}
    >
      {/* Top Controller Strip */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
          background: "#f8fafc",
          border: "1px solid #e2e8f0",
          borderRadius: "14px",
          padding: "10px 16px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Sparkles size={18} color="#2563eb" />
          <strong style={{ fontSize: "0.95rem", color: "#0f172a" }}>
            Pedagogical Flashcards: Auckland Shopping Complex Survey
          </strong>
          <span
            style={{
              fontSize: "0.74rem",
              fontWeight: 800,
              background: card.badgeColor,
              color: "#ffffff",
              padding: "2px 8px",
              borderRadius: "6px"
            }}
          >
            Card {card.id} of {FLASHCARDS.length}
          </span>
        </div>

        {/* Prev / Next & Flip Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button
            type="button"
            onClick={handlePrev}
            style={{
              padding: "6px 12px",
              borderRadius: "8px",
              background: "#ffffff",
              border: "1px solid #cbd5e1",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "0.78rem",
              fontWeight: 750,
              color: "#0f172a"
            }}
          >
            <ChevronLeft size={16} />
            <span>Prev</span>
          </button>

          <button
            type="button"
            onClick={handleFlip}
            style={{
              padding: "6px 14px",
              borderRadius: "8px",
              background: "#2563eb",
              border: "none",
              color: "#ffffff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.78rem",
              fontWeight: 750,
              boxShadow: "0 2px 8px rgba(37, 99, 235, 0.25)"
            }}
          >
            <RotateCw size={14} />
            <span>{isFlipped ? "Show Prompt Question" : "Reveal Band 9 Deconstruction"}</span>
          </button>

          <button
            type="button"
            onClick={handleNext}
            style={{
              padding: "6px 12px",
              borderRadius: "8px",
              background: "#ffffff",
              border: "1px solid #cbd5e1",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "0.78rem",
              fontWeight: 750,
              color: "#0f172a"
            }}
          >
            <span>Next</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* The Flashcard Body */}
      <motion.div
        key={`${card.id}-${isFlipped}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        onClick={handleFlip}
        style={{
          background: "#ffffff",
          border: `2px solid ${card.badgeColor}`,
          borderRadius: "20px",
          padding: "26px 30px",
          minHeight: "320px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.04)",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          gap: "14px"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "0.74rem", fontWeight: 800, color: card.badgeColor, textTransform: "uppercase" }}>
            {card.category}
          </span>
          <span style={{ fontSize: "0.72rem", color: "#64748b", fontStyle: "italic" }}>
            Tap card anywhere to {isFlipped ? "flip to question" : "flip to answer"} ↻
          </span>
        </div>

        {!isFlipped ? (
          /* FRONT OF CARD: QUESTION */
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", margin: "auto 0" }}>
            <span style={{ fontSize: "0.82rem", fontWeight: 750, color: "#64748b" }}>
              CRITICAL EXAM QUESTION:
            </span>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#0f172a", lineHeight: 1.45, margin: 0 }}>
              {card.question}
            </h2>
            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "12px 16px", color: "#475569", fontSize: "0.86rem" }}>
              💡 <em>Think through: What proportion markers and comparative structures are required? How do you synthesize the data? Tap above to reveal examiner breakdown.</em>
            </div>
          </div>
        ) : (
          /* BACK OF CARD: ANSWER BREAKDOWN */
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <CheckCircle2 size={20} color={card.badgeColor} />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
                {card.answerTitle}
              </h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {card.bulletPoints.map((pt, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.86rem", color: "#334155", lineHeight: 1.45 }}>
                  <span style={{ color: card.badgeColor, fontWeight: 800 }}>•</span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div style={{ background: "#f8fafc", border: "1px solid #cbd5e1", borderLeft: `3.5px solid ${card.badgeColor}`, borderRadius: "10px", padding: "10px 14px", marginTop: "4px" }}>
              <span style={{ fontSize: "0.7rem", fontWeight: 800, color: card.badgeColor, textTransform: "uppercase" }}>
                Band 9 Model Implementation:
              </span>
              <p style={{ fontSize: "0.86rem", color: "#0f172a", fontStyle: "italic", margin: "3px 0 0", lineHeight: 1.45 }}>
                {card.band9Phrase}
              </p>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
