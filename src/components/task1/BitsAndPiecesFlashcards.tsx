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
    question: "What are the three essential macro features that must appear in a Band 9 overview for this Australian physical activity bar chart?",
    answerTitle: "1) Overall Female Preponderance, 2) Youth Male Exception (15–24), 3) Mid-Life Divergence & Senior Parity",
    bulletPoints: [
      "Australian females recorded higher rates of regular exercise than males across five out of the six age cohorts.",
      "Australian males recorded their sole statistical advantage in the youngest cohort (15 to 24), leading by 5.1 percentage points (52.8% vs 47.7%).",
      "While female activity peaked at 53.3% in middle age (45–54), males experienced a U-shaped dip to 39.5% before rebounding to converge with females at ~47% in retirement."
    ],
    band9Phrase:
      "“Overall, Australian females generally recorded higher rates of regular physical exercise than males across most age cohorts, with the notable exception of the youngest demographic (aged 15 to 24). Additionally, while female participation peaked during mid-adulthood, male activity exhibited a distinct dip-and-recovery trajectory, touching its lowest point before rebounding to converge with women in retirement.”"
  },
  {
    id: 2,
    category: "Card 2: Youth Inversion & Sole Male Lead (15–24)",
    badgeColor: "#dc2626",
    question: "How should you report the youth demographic (15–24) compared to all subsequent age brackets?",
    answerTitle: "The Sole Demographic Where Men Outpaced Women (52.8% vs 47.7%), Marking the Male Peak",
    bulletPoints: [
      "Australian men attained their highest participation rate in this youth bracket at 52.8%.",
      "Young women recorded 47.7%, giving men a 5.1 percentage point margin.",
      "Key analytical contrast: This was the only age cohort in the entire graphic where male physical activity exceeded female participation."
    ],
    band9Phrase:
      "“Among 15-to-24-year-olds, men registered their highest participation rate at 52.8%, outstripping their female peers (47.7%) in what was the sole demographic where male activity prevailed.”"
  },
  {
    id: 3,
    category: "Card 3: Widest Disparity & Lowest Level (35–44)",
    badgeColor: "#d97706",
    question: "Why is the 35-to-44 demographic considered a critical analytical focal point for examiners?",
    answerTitle: "The Maximum Gender Divergence (13.0%) and the Lowest Figure in the Chart (Males 39.5%)",
    bulletPoints: [
      "Men slumped to 39.5%, representing the absolute lowest figure recorded across the entire chart.",
      "Women climbed to 52.5%, comfortably crossing the 50% milestone.",
      "The resulting 13.0 percentage point divide constituted the widest disparity between sexes in the visual."
    ],
    band9Phrase:
      "“The divergence between sexes peaked in the 35-to-44 demographic, where a substantial 13-percentage-point gap emerged between active women (52.5%) and men, who touched their lowest recorded level of 39.5%.”"
  },
  {
    id: 4,
    category: "Card 4: Overall Chart Peak (45–54 Females) & Plateau",
    badgeColor: "#16a34a",
    question: "How should you report the participation peak and plateau among middle-aged Australian women?",
    answerTitle: "Overall Peak of 53.3% at Ages 45–54, Followed by a Sustained 53.0% Plateau",
    bulletPoints: [
      "Women aged 45 to 54 achieved 53.3%, the single highest data point recorded across the entire visual.",
      "This elevated level was sustained in the 55-to-64 demographic at precisely 53.0%.",
      "Concurrently, men began their multi-decade recovery, rising through 43.1% and 45.1%."
    ],
    band9Phrase:
      "“Physical activity reached its peak among women aged 45 to 54 at 53.3%, representing the highest figure in the entire chart. This elevated participation was sustained in the 55-to-64 demographic at precisely 53.0%.”"
  },
  {
    id: 5,
    category: "Card 5: Senior Convergence & Virtual Parity (65 and over)",
    badgeColor: "#64748b",
    question: "What unique demographic phenomenon occurs in the 65-and-over cohort?",
    answerTitle: "Virtual Gender Parity (0.4% Gap) as Disparities Effectively Dissolve in Retirement",
    bulletPoints: [
      "Senior men completed their steady rebound, climbing to 46.7%.",
      "Senior women dropped by 5.9 points to 47.1%, their lowest rate across all cohorts.",
      "The gender divide virtually disappeared, narrowing to an insignificant margin of just 0.4 percentage points."
    ],
    band9Phrase:
      "“In the senior cohort (65 and over), gender disparities virtually dissolved, with male (46.7%) and female (47.1%) participation rates converging at near-identical levels.”"
  },
  {
    id: 6,
    category: "Card 6: Exam Pitfalls & Band 9 Precautions",
    badgeColor: "#ea580c",
    isWarning: true,
    question: "What are the most frequent examiner-penalized mistakes in this Australian physical activity bar chart?",
    answerTitle: "Margin Units (Percentage vs Percentage Points), Omitting Scale (%), and Rote Listing",
    bulletPoints: [
      "Margin Error: Confusing 'percentages' with 'percentage points' (e.g. say 'outstripped by 5.1 percentage points', NOT '5.1% more').",
      "Scale Omission: Failing to state that figures represent the percentage of each demographic cohort (%).",
      "Trend Failure: Listing figures cohort-by-cohort without identifying the male U-shaped trajectory or female mid-life plateau.",
      "Factual Precision: Forgetting that men led in only one cohort (15–24) or misquoting the lowest figure (39.5%)."
    ],
    band9Phrase:
      "“Band 9 Criterion: Accurate demographic framing (Australian men & women across 6 age cohorts), precise margin reporting (e.g., a 13.0 percentage point gap), and synthesizing trajectories rather than mechanically listing numbers.”"
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
        fontFamily: "var(--font-sans)"
      }}
    >
      {/* Category Strip & Counter */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "760px",
          padding: "4px 8px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {card.isWarning ? (
            <AlertTriangle size={18} color="#ea580c" />
          ) : (
            <Sparkles size={18} color={card.badgeColor} />
          )}
          <span
            style={{
              fontSize: "0.85rem",
              fontWeight: 800,
              color: card.badgeColor,
              letterSpacing: "0.02em"
            }}
          >
            {card.category}
          </span>
        </div>

        <span
          style={{
            fontSize: "0.82rem",
            fontWeight: 700,
            color: "var(--slate-500)",
            background: "var(--slate-100)",
            padding: "4px 10px",
            borderRadius: "999px"
          }}
        >
          {currentIdx + 1} of {FLASHCARDS.length}
        </span>
      </div>

      {/* Interactive 3D Flip Card */}
      <div
        onClick={handleFlip}
        style={{
          perspective: "1000px",
          width: "100%",
          maxWidth: "760px",
          minHeight: "340px",
          cursor: "pointer"
        }}
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            transformStyle: "preserve-3d"
          }}
        >
          {/* Card Front: Question */}
          <div
            style={{
              width: "100%",
              minHeight: "340px",
              background: "#ffffff",
              border: `2px solid ${card.badgeColor}`,
              borderRadius: "22px",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
              backfaceVisibility: "hidden",
              position: isFlipped ? "absolute" : "relative",
              inset: 0
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "0.76rem",
                  fontWeight: 800,
                  color: card.badgeColor,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  display: "block",
                  marginBottom: "12px"
                }}
              >
                Question Prompt • Tap Anywhere to Flip
              </span>
              <h3
                style={{
                  fontSize: "1.32rem",
                  fontWeight: 800,
                  color: "var(--slate-900)",
                  lineHeight: 1.45,
                  margin: 0
                }}
              >
                {card.question}
              </h3>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "16px",
                borderTop: "1px solid var(--border-subtle)",
                color: "var(--slate-500)",
                fontSize: "0.82rem"
              }}
            >
              <span>Tap card to see Band 9 key features</span>
              <RotateCw size={15} color="var(--slate-400)" />
            </div>
          </div>

          {/* Card Back: Answer, Bullets & Band 9 Formula */}
          <div
            style={{
              width: "100%",
              minHeight: "340px",
              background: "#ffffff",
              border: `2px solid ${card.badgeColor}`,
              borderRadius: "22px",
              padding: "28px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              position: isFlipped ? "relative" : "absolute",
              inset: 0
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  color: card.badgeColor,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em"
                }}
              >
                Band 9 Analytical Answer
              </span>
              <h4
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  color: "var(--slate-900)",
                  margin: "4px 0 0 0"
                }}
              >
                {card.answerTitle}
              </h4>
            </div>

            {/* Bullet Points */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {card.bulletPoints.map((pt, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px",
                    fontSize: "0.85rem",
                    color: "var(--slate-700)",
                    lineHeight: 1.45
                  }}
                >
                  <CheckCircle2
                    size={15}
                    color={card.badgeColor}
                    style={{ flexShrink: 0, marginTop: "2px" }}
                  />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            {/* Band 9 Formula Quote Box */}
            <div
              style={{
                background: "var(--slate-50)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "12px",
                padding: "10px 14px",
                fontSize: "0.84rem",
                fontStyle: "italic",
                color: "var(--slate-800)",
                lineHeight: 1.5,
                borderLeft: `3px solid ${card.badgeColor}`,
                marginTop: "auto"
              }}
            >
              {card.band9Phrase}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Navigation Controls Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          marginTop: "4px"
        }}
      >
        <motion.button
          whileTap={tactilePress}
          onClick={handlePrev}
          className="apple-touch-btn secondary"
          style={{
            padding: "8px 16px",
            fontSize: "0.82rem",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: "4px"
          }}
        >
          <ChevronLeft size={16} /> Previous Card
        </motion.button>

        <motion.button
          whileTap={tactilePress}
          onClick={handleFlip}
          className="apple-touch-btn secondary"
          style={{
            padding: "8px 18px",
            fontSize: "0.82rem",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: "6px"
          }}
        >
          <RotateCw size={15} /> Flip Card
        </motion.button>

        <motion.button
          whileTap={tactilePress}
          onClick={handleNext}
          className="apple-touch-btn primary"
          style={{
            padding: "8px 18px",
            fontSize: "0.82rem",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: "4px"
          }}
        >
          Next Card <ChevronRight size={16} />
        </motion.button>
      </div>
    </div>
  );
};
