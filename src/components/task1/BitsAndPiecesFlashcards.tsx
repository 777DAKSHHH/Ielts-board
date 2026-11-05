import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Table,
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
    question: "What are the core overarching trends that must be highlighted in the overview for this consumer spending table?",
    answerTitle: "Universal Sector Hierarchy + Key National Outliers (Without Numbers!)",
    bulletPoints: [
      "Pillar 1: Food, drinks, and tobacco accounted for the largest proportion of consumer expenditure across all five surveyed nations without exception.",
      "Pillar 2: Leisure and education consistently represented the smallest category of spending throughout.",
      "Pillar 3: Turkish and Irish consumers devoted significantly larger proportions to sustenance than their European peers, while Italy recorded the largest proportion spent on clothing and footwear.",
      "Rule: Never include raw numerical figures in the overview; keep observations strictly macro and qualitative."
    ],
    band9Phrase:
      "“Overall, consumer expenditure was consistently highest on food, drinks, and tobacco across all five nations, whereas leisure and education accounted for the smallest share of spending throughout. Furthermore, Turkish and Irish consumers devoted significantly larger proportions of their budgets to sustenance than their European counterparts, while Italy recorded the largest proportion spent on clothing and footwear.”"
  },
  {
    id: 2,
    category: "Card 2: Food, Drink & Tobacco Comparison (Body 1)",
    badgeColor: "#2563eb",
    question: "How should you group and contrast the 5 countries for sustenance spending?",
    answerTitle: "High-Spending Upper Pair (Turkey & Ireland) vs Lower Tier (Spain, Italy, Sweden)",
    bulletPoints: [
      "Group 1 (Upper Tier): Turkey allocated nearly a third of all consumer expenditure (32.14%), representing the highest single proportion in the entire table, closely followed by Ireland at 28.91%.",
      "Group 2 (Lower Tier): In marked contrast, Spain recorded 18.80%, while Italy and Sweden registered the lowest proportions in this category at 16.36% and 15.77% respectively.",
      "Key Contrast: Turkish and Irish spending was nearly double that of Italian and Swedish households."
    ],
    band9Phrase:
      "“In terms of food, drinks, and tobacco, Turkey allocated the highest proportion of any country, with nearly a third of all consumer expenditure (32.14%) directed towards this category. Ireland followed closely behind at 28.91%. In marked contrast, the remaining three nations registered substantially lower figures; Spain recorded 18.80%, while Italy and Sweden spent the least on sustenance at 16.36% and 15.77% respectively.”"
  },
  {
    id: 3,
    category: "Card 3: Clothing & Footwear Outlier (Body 2)",
    badgeColor: "#d97706",
    question: "How do you effectively report Italy's unique clothing figure against the other nations?",
    answerTitle: "Identify Italy as the Undisputed Leader and Cluster Turkey, Spain, and Ireland",
    bulletPoints: [
      "Italian Outlier: Italy dedicated exactly 9.00% to clothing and footwear, making it the clear continental leader.",
      "Clustered Trio: Turkey (6.63%), Spain (6.51%), and Ireland (6.43%) all grouped tightly around 6.5%.",
      "Category Floor: Sweden registered the lowest proportion at just 5.40%, trailing Italy by 3.60 percentage points.",
      "Grammatical Tip: Use participial phrasing ('outstripping all other surveyed nations') to avoid repetitive verbs."
    ],
    band9Phrase:
      "“Turning to clothing and footwear, Italy was the undisputed leader at exactly 9.00%, outstripping Turkey (6.63%), Spain (6.51%), and Ireland (6.43%), with Sweden recording the lowest share at 5.40%.”"
  },
  {
    id: 4,
    category: "Card 4: Leisure & Education Sector & Spain's Floor (Body 2)",
    badgeColor: "#059669",
    question: "What are the key data points to report for the minority leisure and education category?",
    answerTitle: "Turkey Tops the List (4.35%), Sweden/Italy Parity (~3.2%), and Spain's Table Floor (1.98%)",
    bulletPoints: [
      "Category Peak: Turkey allocated 4.35% to leisure and education, ranking first in 2 out of the 3 overall table categories.",
      "Middle Parity: Sweden (3.22%) and Italy (3.20%) were virtually tied in leisure expenditure.",
      "Moderate Allocation: Ireland directed 2.21% towards recreation and education.",
      "Table Minimum: Spain recorded the lowest single figure in the entire table at a mere 1.98% (the sole sub-2% value)."
    ],
    band9Phrase:
      "“Finally, leisure and education represented the smallest expenditure throughout all five nations; Turkey again topped the list at 4.35%, followed by Sweden (3.22%) and Italy (3.20%), while Spain registered the lowest single figure in the table at just 1.98%.”"
  },
  {
    id: 5,
    category: "Card 5: Advanced Comparative Vocabulary & Syntax",
    badgeColor: "#7c3aed",
    question: "Which lexical items and syntactic patterns guarantee Band 9 in Lexical Resource and Grammatical Range?",
    answerTitle: "Precision Collocations + Varied Comparison Structures",
    bulletPoints: [
      "Proportion verbs: 'accounted for', 'constituted', 'represented the smallest share', 'allocated'.",
      "Comparative adverbs/prepositions: 'outstripping', 'followed closely by', 'in marked contrast', 'respectively'.",
      "Clustering phrases: 'clustered tightly around 6.5%', 'virtual parity between Sweden and Italy'.",
      "Avoid writing lists: Always synthesize figures with comparative clauses rather than simply reciting rows."
    ],
    band9Phrase:
      "“Outstripping all other surveyed nations, Italy dedicated 9.00% to apparel and footwear, whereas Swedish households committed the lowest proportion to sustenance at 15.77%.”"
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
        maxWidth: "880px",
        margin: "0 auto"
      }}
    >
      {/* Top Controls Strip */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "8px",
          background: "#ffffff",
          borderRadius: "14px",
          border: "1.5px solid var(--border-subtle, #cbd5e1)",
          padding: "10px 16px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Sparkles size={16} color={card.badgeColor} />
          <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#0f172a" }}>
            Comparative Table Flashcard {currentIdx + 1} of {FLASHCARDS.length}
          </span>
          <span
            style={{
              fontSize: "0.72rem",
              fontWeight: 800,
              padding: "2px 8px",
              borderRadius: "6px",
              background: `${card.badgeColor}15`,
              color: card.badgeColor
            }}
          >
            {card.category.split(":")[0]}
          </span>
        </div>

        {/* Prev / Next Navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <button
            type="button"
            onClick={handlePrev}
            style={{
              padding: "6px 10px",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
              background: "#ffffff",
              color: "#334155",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "0.78rem",
              fontWeight: 700
            }}
          >
            <ChevronLeft size={14} />
            <span>Prev</span>
          </button>

          <button
            type="button"
            onClick={toggleFlip}
            style={{
              padding: "6px 14px",
              borderRadius: "8px",
              border: "1.5px solid #0f172a",
              background: isFlipped ? "#0f172a" : "#f8fafc",
              color: isFlipped ? "#ffffff" : "#0f172a",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.78rem",
              fontWeight: 800,
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)"
            }}
          >
            <RotateCw size={13} />
            <span>{isFlipped ? "Show Question" : "Reveal Answer"}</span>
          </button>

          <button
            type="button"
            onClick={handleNext}
            style={{
              padding: "6px 10px",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
              background: "#ffffff",
              color: "#334155",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "0.78rem",
              fontWeight: 700
            }}
          >
            <span>Next</span>
            <ChevronRight size={14} />
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
