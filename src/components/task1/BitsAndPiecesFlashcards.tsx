import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Maximize2
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
    category: "Piece 1: The Macro Overview Split",
    badgeColor: "#0284c7",
    question: "What is the single most important macro contrast between normal conditions and El Niño across the Pacific?",
    answerTitle: "Systemic Reversal: Westward Warm Pool & Australian Rain vs. Eastward Warm Surge & Drought",
    bulletPoints: [
      "Normal conditions feature strong westward trade winds pushing warm water and rain toward Australia, alongside nutrient upwelling off Peru.",
      "El Niño represents a systematic inversion: trade winds weaken, warm water surges eastward, and rainfall shifts to Peru.",
      "Australia is plunged into severe drought, while Peruvian coastal upwelling ceases, causing commercial fisheries to collapse."
    ],
    band9Phrase:
      "Overall, normal conditions feature strong trade winds driving warm water and heavy rain toward Australia while cold upwelling sustains Peruvian fisheries, whereas El Niño conditions see weakened trade winds and eastward shifts that invert rainfall patterns and decimate marine life."
  },
  {
    id: 2,
    category: "Piece 2: Atmospheric Trade Winds & Upper Winds",
    badgeColor: "#4f46e5",
    question: "How do atmospheric winds differ between normal conditions and an El Niño phase?",
    answerTitle: "Strong Westward Trade Winds Falter; Upper Winds Shift Eastward",
    bulletPoints: [
      "Normal: Strong trade winds blow continuously from the East Pacific toward the West Pacific; upper winds blow weakly eastward.",
      "El Niño: Trade winds in the East Pacific weaken noticeably; upper atmosphere over the West Pacific is dominated by strong eastward winds.",
      "Consequence: The weakened trade winds fail to hold warm water in the western basin, allowing it to migrate back across the ocean."
    ],
    band9Phrase:
      "Whereas strong trade winds normally blow westward from the East Pacific, an El Niño episode witnesses these winds weaken substantially, accompanied by strong eastward upper-level winds."
  },
  {
    id: 3,
    category: "Piece 3: Warm Pool & Thermocline Displacement",
    badgeColor: "#059669",
    question: "What happens to the warm surface water and ocean thermocline during El Niño?",
    answerTitle: "Warm Pool Shifts Eastward, Capping the Basin & Suppressing Cold Thermocline",
    bulletPoints: [
      "Normal: Warm water is banked deeply in the western Pacific; cold thermocline sits near the surface in the east off Peru.",
      "El Niño: Warm water is 'pushed eastwards' across the central and eastern Pacific basin.",
      "Impact: The warm blanket suppresses the thermocline and prevents cold, deep water from reaching the surface."
    ],
    band9Phrase:
      "Consequently, the reservoir of warm water that typically banks against the western basin surges eastwards, capping the cooler subsurface layers across the Pacific."
  },
  {
    id: 4,
    category: "Piece 4: Peruvian Upwelling & Fishery Collapse",
    badgeColor: "#d97706",
    question: "Why do Peruvian commercial fish harvests crash from flourishing (up arrow) to depleted (down arrow)?",
    answerTitle: "Cessation of Cool Water Upwelling Causes Severe Nutrient Starvation",
    bulletPoints: [
      "Normal: Upward arrow indicates active upwelling of 'cool water and rich nutrients', sustaining 2 large fish (booming fisheries).",
      "El Niño: Eastward warm water cap blocks upwelling, leaving coastal waters with 'poor nutrients'.",
      "Result: Downward arrow denotes fishery collapse, represented by a solitary thin fish."
    ],
    band9Phrase:
      "While normal conditions foster cold, nutrient-rich upwelling that sustains flourishing fish stocks off Peru, El Niño shuts down this upwelling, leading to nutrient impoverishment and a catastrophic decline in marine catches."
  },
  {
    id: 5,
    category: "Piece 5: Australian Precipitation vs. Scorching Drought",
    badgeColor: "#dc2626",
    question: "How does the terrestrial weather in Australia invert between the two states?",
    answerTitle: "Transition from Convective Downpours & Lush Flora to Scorching Sun & Aridity",
    bulletPoints: [
      "Normal: Warm surface water fuels intense atmospheric convection, producing storm clouds, heavy rainfall, and lush green grass in Australia.",
      "El Niño: Convective storm clouds shift eastward to Peru; Australia is left under clear skies, blazing sunshine, and severe drought.",
      "Diagram Detail: Australia inset switches from rain clouds and grass to a burning sun and desiccated terrain."
    ],
    band9Phrase:
      "As convective storm clouds migrate eastward toward Peru, Australia transitions from receiving abundant rain that nurtures green vegetation to enduring blazing sunshine, parched terrain, and severe drought."
  },
  {
    id: 6,
    category: "Piece 6: Band 9 Cohesive Architecture & Paragraphing",
    badgeColor: "#7c3aed",
    question: "How should you divide the report into four balanced paragraphs for maximum Task Achievement?",
    answerTitle: "Four Balanced Paragraphs: Intro, Overview, Body 1 (Normal), Body 2 (El Niño)",
    bulletPoints: [
      "Paragraph 1 (Intro): Paraphrase diagram type, subject (Normal vs. El Niño), and geographic domain (Pacific Ocean).",
      "Paragraph 2 (Overview): State the master dichotomy (wind/thermal reversal, Australian rain vs drought, Peruvian fisheries).",
      "Paragraph 3 (Body 1): Describe Normal Conditions systematically (winds -> warm pool -> Australian rain -> Peruvian upwelling & fish).",
      "Paragraph 4 (Body 2): Describe El Niño systematically (wind weakening -> eastward warm surge -> Australian drought -> Peruvian rain & fish crash)."
    ],
    band9Phrase:
      "By dedicating Body 1 entirely to the baseline equilibrium and Body 2 to the El Niño disruption, the report achieves flawless comparative balance and logical coherence."
  }
];

interface BitsAndPiecesFlashcardsProps {
  isEntireScreen?: boolean;
  onToggleFullscreen?: () => void;
}

export const BitsAndPiecesFlashcards: React.FC<BitsAndPiecesFlashcardsProps> = ({
  isEntireScreen = false,
  onToggleFullscreen
}) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const card = FLASHCARDS[activeIdx];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(false);
    setActiveIdx((prev) => (prev + 1) % FLASHCARDS.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(false);
    setActiveIdx((prev) => (prev - 1 + FLASHCARDS.length) % FLASHCARDS.length);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        padding: isEntireScreen ? "20px 28px" : "16px",
        background: isEntireScreen ? "#f8fafc" : "var(--slate-50)",
        borderRadius: isEntireScreen ? "0" : "18px",
        overflowY: "auto",
        boxSizing: "border-box"
      }}
    >
      {/* Top Header Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "14px",
          background: "#ffffff",
          padding: "10px 16px",
          borderRadius: "14px",
          border: "1.5px solid var(--border-subtle)",
          boxShadow: "var(--shadow-sm)"
        }}
      >
        <div>
          <span
            className="apple-badge neutral"
            style={{
              fontSize: "0.72rem",
              fontWeight: 800,
              background: card.badgeColor,
              color: "#ffffff"
            }}
          >
            {card.category}
          </span>
          <h3
            style={{
              fontSize: isEntireScreen ? "1.25rem" : "1.08rem",
              fontWeight: 800,
              color: "var(--slate-900)",
              margin: "3px 0 0"
            }}
          >
            Bits &amp; Pieces: Active Flashcard Recall
          </h3>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--slate-500)" }}>
            Card {activeIdx + 1} of {FLASHCARDS.length}
          </span>
          <div style={{ display: "flex", gap: "6px" }}>
            <motion.button
              whileTap={tactilePress}
              onClick={handlePrev}
              className="apple-touch-btn secondary"
              style={{ padding: "6px 12px", minHeight: "40px" }}
              aria-label="Previous Flashcard"
            >
              <ChevronLeft size={18} />
            </motion.button>
            <motion.button
              whileTap={tactilePress}
              onClick={handleNext}
              className="apple-touch-btn secondary"
              style={{ padding: "6px 12px", minHeight: "40px" }}
              aria-label="Next Flashcard"
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>

          {!isEntireScreen && onToggleFullscreen && (
            <motion.button
              whileTap={tactilePress}
              type="button"
              onClick={onToggleFullscreen}
              className="apple-touch-btn primary"
              style={{
                padding: "8px 16px",
                fontSize: "0.82rem",
                fontWeight: 700,
                gap: "6px",
                minHeight: "40px",
                marginLeft: "6px"
              }}
            >
              <Maximize2 size={14} /> Entire Screen
            </motion.button>
          )}
        </div>
      </div>

      {/* Main Flashcard Interactive Area */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "440px",
          position: "relative"
        }}
      >
        <div
          onClick={() => setIsFlipped((prev) => !prev)}
          style={{
            width: "100%",
            maxWidth: "760px",
            minHeight: "360px",
            background: "#ffffff",
            borderRadius: "20px",
            border: `2px solid ${card.badgeColor}`,
            boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
            padding: "32px 36px",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            transition: "all 0.25s ease",
            boxSizing: "border-box"
          }}
        >
          {/* Top Row on Card */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span
              style={{
                fontSize: "0.76rem",
                fontWeight: 800,
                padding: "3px 10px",
                borderRadius: "8px",
                background: `${card.badgeColor}18`,
                color: card.badgeColor
              }}
            >
              {isFlipped ? "Band 9 Synthesis & Model Formula" : "Architectural Investigation"}
            </span>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "0.76rem",
                fontWeight: 700,
                color: "var(--slate-400)"
              }}
            >
              <RotateCw size={13} /> Tap card to {isFlipped ? "view question" : "reveal answer"}
            </div>
          </div>

          {/* Card Body */}
          {!isFlipped ? (
            <div style={{ margin: "auto 0", padding: "16px 0" }}>
              <div
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  color: card.badgeColor,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "8px"
                }}
              >
                Question Prompt
              </div>
              <h2
                style={{
                  fontSize: isEntireScreen ? "1.65rem" : "1.35rem",
                  fontWeight: 800,
                  color: "var(--slate-900)",
                  lineHeight: 1.45,
                  margin: 0
                }}
              >
                {card.question}
              </h2>
            </div>
          ) : (
            <div style={{ margin: "auto 0", padding: "12px 0", display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <div
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 800,
                    color: card.badgeColor,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: "4px"
                  }}
                >
                  Key Architectural Finding
                </div>
                <h3
                  style={{
                    fontSize: isEntireScreen ? "1.25rem" : "1.1rem",
                    fontWeight: 800,
                    color: "var(--slate-900)",
                    margin: 0
                  }}
                >
                  {card.answerTitle}
                </h3>
              </div>

              {/* Bullet Points */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {card.bulletPoints.map((pt, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <CheckCircle2
                      size={15}
                      color={card.badgeColor}
                      style={{ flexShrink: 0, marginTop: "2px" }}
                    />
                    <span style={{ fontSize: "0.88rem", color: "var(--slate-700)", lineHeight: 1.45 }}>
                      {pt}
                    </span>
                  </div>
                ))}
              </div>

              {/* Band 9 Application Quote */}
              <div
                style={{
                  background: "var(--slate-50)",
                  borderRadius: "12px",
                  padding: "12px 14px",
                  border: "1px solid var(--border-subtle)",
                  marginTop: "4px"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                  <Sparkles size={13} color={card.badgeColor} />
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      color: card.badgeColor,
                      textTransform: "uppercase"
                    }}
                  >
                    Band 9 Application Sentence
                  </span>
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.88rem",
                    fontStyle: "italic",
                    color: "var(--slate-800)",
                    lineHeight: 1.5
                  }}
                >
                  “{card.band9Phrase}”
                </p>
              </div>
            </div>
          )}

          {/* Bottom Card Navigation Indicator */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid var(--border-subtle)",
              paddingTop: "12px",
              marginTop: "12px"
            }}
          >
            <div style={{ display: "flex", gap: "6px" }}>
              {FLASHCARDS.map((_, i) => (
                <span
                  key={i}
                  style={{
                    width: i === activeIdx ? "20px" : "6px",
                    height: "6px",
                    borderRadius: "3px",
                    background: i === activeIdx ? card.badgeColor : "var(--slate-200)",
                    transition: "all 0.2s ease"
                  }}
                />
              ))}
            </div>

            <div style={{ display: "flex", gap: "8px" }}>
              <motion.button
                whileTap={tactilePress}
                type="button"
                onClick={handlePrev}
                className="apple-touch-btn secondary"
                style={{ padding: "0 16px", fontSize: "0.85rem", fontWeight: 600, minHeight: "44px" }}
              >
                Previous
              </motion.button>
              <motion.button
                whileTap={tactilePress}
                type="button"
                onClick={handleNext}
                className="apple-touch-btn primary"
                style={{
                  padding: "0 20px",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  minHeight: "44px",
                  background: card.badgeColor
                }}
              >
                Next Card
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
