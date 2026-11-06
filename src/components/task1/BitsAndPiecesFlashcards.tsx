import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  BarChart2,
  PieChart as PieIcon,
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
    question: "What are the core overarching trends that must be highlighted in the overview for this dual bar and pie chart task?",
    answerTitle: "Workweek Extremes + Lack of Direct Correlation with Stress (Without Numbers!)",
    bulletPoints: [
      "Pillar 1: Business men committed the longest hours per week by a considerable margin, whereas lecturers logged the fewest hours.",
      "Pillar 2: Working time did not correlate directly with stress-related conditions; movie producers and lecturers constituted the two largest segments of stress sufferers.",
      "Pillar 3: Programmers recorded the lowest prevalence of stress-induced illnesses throughout the surveyed cohort.",
      "Golden Rule: Never include raw numerical figures (70 hrs, 25%, 18%, etc.) in the overview; keep observations strictly qualitative."
    ],
    band9Phrase:
      "“Overall, business men committed the longest hours per week by a considerable margin, whereas lecturers logged the fewest hours. However, working time did not correlate directly with stress-related conditions; movie producers and lecturers constituted the two largest segments of stress sufferers, while programmers recorded the lowest prevalence of stress-induced illnesses.”"
  },
  {
    id: 2,
    category: "Card 2: Bar Chart Breakdown — Weekly Hours Worked (Body 1)",
    badgeColor: "#dc2626",
    question: "How should you structure the report of weekly hours worked across the 8 professions in Body Paragraph 1?",
    answerTitle: "Rank from Peak Workweek (Business Men) Down to Minimum Floor (Lecturers)",
    bulletPoints: [
      "Workweek Leader: Business men logged the longest workweek at an astounding 70 hours—nearly triple the hours of lecturers.",
      "Upper Tier Followers: Movie producers and doctors followed closely at 60 and 52 hours per week respectively.",
      "Intermediate Standard: Writers averaged 45 hours, while programmers completed a standard 40-hour workweek.",
      "Lower Tier & Floor: Lawyers (35 hours) and chefs (30 hours) worked somewhat fewer hours, with lecturers recording the lowest figure at just 25 hours per week."
    ],
    band9Phrase:
      "“Regarding working hours, business men logged the longest workweek at an average of 70 hours, followed by movie producers and doctors at 60 and 52 hours per week respectively. Writers averaged 45 hours on the job, while programmers completed a standard 40-hour week. Lawyers and chefs worked somewhat fewer hours (35 and 30 hours respectively), whereas lecturers recorded the lowest figure across all groups at merely 25 hours per week.”"
  },
  {
    id: 3,
    category: "Card 3: Pie Chart Breakdown — Stress Illness & The Lecturer Paradox (Body 2)",
    badgeColor: "#0891b2",
    question: "What is the central analytical paradox in the pie chart that examiners look for to award Band 9?",
    answerTitle: "The Lecturer Disparity (Lowest Hours vs Second Highest Stress) & Movie Producers Leader",
    bulletPoints: [
      "Stress Leader: Movie producers accounted for the largest single proportion at exactly a quarter (25%) of all cases.",
      "Central Paradox: Lecturers comprised the second highest proportion of stress sufferers at 18%, despite working the fewest hours of any group (25 hrs/week).",
      "Business Men Disparity: Conversely, business men worked 70 hours weekly but accounted for only 11% of stress sufferers.",
      "Remaining Slices: Doctors made up 15%, chefs 10%, writers and lawyers shared an identical 8% each, and programmers recorded the lowest rate at 5%."
    ],
    band9Phrase:
      "“In terms of stress-related illness, movie producers accounted for the largest single proportion at exactly 25%. Paradoxically, lecturers represented the second highest group at 18%, despite working the fewest hours. Doctors constituted 15% of the total, whereas business men comprised a modest 11% despite their extensive workweek. Chefs made up exactly one-tenth of sufferers, while writers and lawyers shared an identical 8% each. At merely 5%, programmers formed the smallest proportion of the illness cohort.”"
  },
  {
    id: 4,
    category: "Card 4: Lack of Correlation Analysis (Task Achievement Discriminator)",
    badgeColor: "#7c3aed",
    question: "Why is pointing out the absence of direct correlation essential for scoring Band 9 in Task Achievement?",
    answerTitle: "Demonstrates Synthesis Across Dual Visuals Rather Than Isolated Listing",
    bulletPoints: [
      "Task Achievement Requirement: The prompt asks to 'make comparisons where relevant.' Merely summarizing the bar chart and then the pie chart in isolation caps the score at Band 7.",
      "Cross-Visual Synthesis: You must connect labor duration with mental health outcomes to show that working more hours does NOT automatically produce higher illness.",
      "Prime Evidence: Business men work nearly 3 times as long as lecturers (70h vs 25h), yet suffer significantly less stress illness (11% vs 18%).",
      "Vocabulary Cue: Use phrases like 'paradoxical disparity', 'no direct correlation', and 'in marked contrast'."
    ],
    band9Phrase:
      "“There was no direct correlation between hours worked and the incidence of stress illness, as illustrated by lecturers, who logged the shortest workweek yet endured the second greatest health burden.”"
  },
  {
    id: 5,
    category: "Card 5: Band 9 Lexical Collocations & Grammatical Variety",
    badgeColor: "#059669",
    question: "Which high-scoring collocations and grammatical structures elevate a dual chart report to Band 9?",
    answerTitle: "Respective Reporting, Fractional Parity, Participial Clauses, and Adverbial Contrast",
    bulletPoints: [
      "Fractional Equivalences: 'account for a quarter (25%)', 'exactly one-tenth (10%)', 'merely 5%'.",
      "Respective Precision: '...followed by movie producers and doctors at 60 and 52 hours per week respectively.'",
      "Shared Parity: '...writers and lawyers shared an identical 8% each.'",
      "Contrasting Adverbials: 'In marked contrast', 'Paradoxically', 'By a considerable margin', 'At the opposite end of the spectrum'."
    ],
    band9Phrase:
      "“Writers and lawyers accounted for an identical proportion of stress illness at 8% each, while movie producers experienced the greatest stress burden, accounting for a full quarter of all reported cases.”"
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

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
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
      {/* Top Banner & Flashcard Stepper Controls */}
      <div
        style={{
          background: "#ffffff",
          borderRadius: "16px",
          border: "1.5px solid var(--border-subtle, #cbd5e1)",
          padding: "16px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
            <Sparkles size={18} color="#2563eb" />
            <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
              Dual Visual Band 9 Mastery Flashcards
            </h3>
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 800,
                background: "#eff6ff",
                color: "#1d4ed8",
                padding: "2px 8px",
                borderRadius: "6px"
              }}
            >
              Tactile Study Engine
            </span>
          </div>
          <p style={{ fontSize: "0.85rem", color: "#64748b", margin: 0 }}>
            Flip through essential examiner criteria, paragraph bifurcation rules, and Band 9 analytical sentences.
          </p>
        </div>

        {/* Stepper Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button
            type="button"
            onClick={handlePrev}
            style={{
              padding: "7px 12px",
              borderRadius: "10px",
              border: "1.5px solid #cbd5e1",
              background: "#ffffff",
              color: "#334155",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "0.82rem",
              fontWeight: 700
            }}
          >
            <ChevronLeft size={16} />
            <span>Prev</span>
          </button>

          <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#0f172a", minWidth: "48px", textAlign: "center" }}>
            {currentIdx + 1} / {FLASHCARDS.length}
          </span>

          <button
            type="button"
            onClick={handleNext}
            style={{
              padding: "7px 12px",
              borderRadius: "10px",
              border: "1.5px solid #cbd5e1",
              background: "#ffffff",
              color: "#334155",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "0.82rem",
              fontWeight: 700
            }}
          >
            <span>Next</span>
            <ChevronRight size={16} />
          </button>

          <button
            type="button"
            onClick={toggleFlip}
            style={{
              padding: "7px 14px",
              borderRadius: "10px",
              border: "none",
              background: "#0f172a",
              color: "#ffffff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.82rem",
              fontWeight: 750,
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
              marginLeft: "4px"
            }}
          >
            <RotateCw size={14} />
            <span>{isFlipped ? "Show Question" : "Reveal Answer"}</span>
          </button>
        </div>
      </div>

      {/* Main Flashcard Body (Card Face or Back) */}
      <motion.div
        key={card.id + (isFlipped ? "-back" : "-front")}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        onClick={toggleFlip}
        style={{
          background: "#ffffff",
          border: `2px solid ${isFlipped ? card.badgeColor : "#e2e8f0"}`,
          borderRadius: "20px",
          padding: "24px",
          minHeight: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          cursor: "pointer",
          boxShadow: isFlipped
            ? `0 10px 25px -5px ${card.badgeColor}25`
            : "0 4px 16px rgba(0,0,0,0.04)",
          transition: "border-color 0.2s ease"
        }}
      >
        {!isFlipped ? (
          /* FRONT: QUESTION SIDE */
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", flex: 1, justifyContent: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
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
            </div>

            <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#0f172a", lineHeight: 1.45, margin: 0 }}>
              {card.question}
            </h3>

            <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#64748b", fontSize: "0.82rem" }}>
              <RotateCw size={14} />
              <span>Click anywhere on the card or use the button above to reveal Band 9 analysis</span>
            </div>
          </div>
        ) : (
          /* BACK: ANSWER & BAND 9 ANALYSIS SIDE */
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <CheckCircle2 size={18} color={card.badgeColor} />
                <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
                  {card.answerTitle}
                </h4>
              </div>
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  padding: "2px 8px",
                  borderRadius: "6px",
                  background: "#f1f5f9",
                  color: "#475569"
                }}
              >
                Band 9 Key Feature Analysis
              </span>
            </div>

            {/* Bullet Points */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {card.bulletPoints.map((pt, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.88rem", color: "#334155", lineHeight: 1.5 }}>
                  <span style={{ color: card.badgeColor, fontWeight: 800, marginTop: "1px" }}>•</span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            {/* Band 9 Application Quote */}
            <div
              style={{
                background: "#f8fafc",
                borderLeft: `3.5px solid ${card.badgeColor}`,
                borderRadius: "8px",
                padding: "10px 14px",
                fontSize: "0.9rem",
                color: "#1e293b",
                lineHeight: 1.55,
                fontStyle: "italic",
                marginTop: "auto"
              }}
            >
              <div style={{ fontSize: "0.72rem", fontWeight: 800, color: card.badgeColor, marginBottom: "3px", fontStyle: "normal" }}>
                ★ EXAMINER BAND 9 PHRASING:
              </div>
              {card.band9Phrase}
            </div>
          </div>
        )}

        {/* Footer Hint */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #f1f5f9", paddingTop: "12px", marginTop: "14px" }}>
          <span style={{ fontSize: "0.74rem", color: "#94a3b8" }}>
            Tap card to flip • Card {currentIdx + 1} of {FLASHCARDS.length}
          </span>
          <span style={{ fontSize: "0.74rem", fontWeight: 700, color: card.badgeColor }}>
            {isFlipped ? "Answer View" : "Question View"}
          </span>
        </div>
      </motion.div>
    </div>
  );
};
