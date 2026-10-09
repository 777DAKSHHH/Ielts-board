import React, { useState } from "react";
import {
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Maximize2
} from "lucide-react";

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
    question: "What is the single most important macro feature shown across the 1995–2000 timeframe?",
    answerTitle: "Four Rose vs. One Solitary Decliner (Greystone High)",
    bulletPoints: [
      "Higher education admission expanded across four of the five schools (Harble, Fairfield, Royston, Crackend).",
      "Greystone High was the SOLE institution to undergo an uninterrupted downward decline.",
      "Harble Secondary showed the most dramatic surge (+50% pts), while Crackend Boys displayed near-total stability."
    ],
    band9Phrase:
      "Overall, higher education entry rates rose in four out of the five secondary schools, with Greystone High being the sole institution to experience a continuous downward trend."
  },
  {
    id: 2,
    category: "Piece 2: Harble Secondary's Meteoric Leap",
    badgeColor: "#059669",
    question: "How did Harble Secondary transform across the 6-year period, and why is it the table's biggest highlight?",
    answerTitle: "Vaulted from Last to First (30% → 80%), Nearly Tripling its Initial Proportion",
    bulletPoints: [
      "Started lowest in 1995 at 30%—less than half of Fairfield and one-third of Greystone.",
      "Rose by 5% increments to 35% (1996) and 40% (1997), then accelerated to 50% (1998) and 60% (1999).",
      "In 2000, leaped by an extraordinary 20 percentage points to peak at 80%.",
      "Achieved a massive net gain of +50 percentage points (+167% relative surge)."
    ],
    band9Phrase:
      "Harble Secondary registered the most dramatic surge, nearly tripling from a baseline of 30% in 1995 to emerge as the top performer at 80% in 2000."
  },
  {
    id: 3,
    category: "Piece 3: Fairfield Girls' Ascent & Rebound",
    badgeColor: "#4f46e5",
    question: "What was Fairfield Girls' trajectory, and what happened in 1997, 1998, and 1999?",
    answerTitle: "Steady Rise (65% → 79%), Catching Greystone in 1997 and Rebounding to 2nd Place",
    bulletPoints: [
      "Started second highest at 65% in 1995.",
      "Climbed to 75% in 1997, equalizing with Greystone High, and held 75% in 1998 to take the sole lead.",
      "Experienced a temporary 5-point dip to 70% in 1999 before rebounding sharply to 79% in 2000.",
      "Finished in second place overall, just 1 percentage point behind Harble Secondary."
    ],
    band9Phrase:
      "Fairfield Girls climbed from 65% in 1995 to equalize with Greystone at 75% in 1997, before rebounding from a transient dip in 1999 to conclude at 79%."
  },
  {
    id: 4,
    category: "Piece 4: Greystone High's Continuous Decline",
    badgeColor: "#dc2626",
    question: "What happened to Greystone High after holding a commanding lead at the start?",
    answerTitle: "Uninterrupted Downward Slide (-20% pts), Falling from 1st (90%) to 3rd (70%)",
    bulletPoints: [
      "Commenced 1995 with an immense 25-percentage-point lead over second place (90% vs. 65%).",
      "Fell sharply by 10 points to 80% in 1996 and 75% in 1997 (caught by Fairfield).",
      "Continued declining to 73% (1998), 72% (1999), and finished at 70% in 2000.",
      "The ONLY school that did not experience any period of growth."
    ],
    band9Phrase:
      "Greystone High was the sole institution to experience a continuous downward trend, surrendering its commanding 90% lead to finish third at 70%."
  },
  {
    id: 5,
    category: "Piece 5: Royston Academy's Stepped Growth",
    badgeColor: "#d97706",
    question: "How did Royston Academy progress, and what pattern did its trajectory follow?",
    answerTitle: "Stepped Pattern with Two Multi-Year Plateaus (50% → 60%, +10% pts Net)",
    bulletPoints: [
      "Started at 50% in 1995 and climbed to 52% in 1996 and 54% in 1997.",
      "Plateaued identically at 54% in 1998.",
      "Stepped up to 60% in 1999, where it leveled off again through 2000.",
      "Demonstrated a disciplined, stepped pattern rather than continuous linear growth."
    ],
    band9Phrase:
      "Royston Academy progressed in a stepped manner, rising from 50% to plateau at 54% in 1997–1998 before leveling off at 60% from 1999 onwards."
  },
  {
    id: 6,
    category: "Piece 6: Crackend Boys' Static Stability",
    badgeColor: "#475569",
    question: "How did Crackend Boys behave across the timeframe, and why is this notable for Band 9?",
    answerTitle: "Virtually Static Baseline Oscillating Tightly Between 59% and 62%",
    bulletPoints: [
      "Registered 60% in 1995, 59% in 1996, 60% in 1997, 61% in 1998, 60% in 1999, and 62% in 2000.",
      "Total net variation was only +2 percentage points over the entire six years.",
      "Contrasts sharply with the dynamic volatility of Harble (+50%) and Greystone (-20%)."
    ],
    band9Phrase:
      "Crackend Boys displayed remarkable stability, fluctuating narrowly within a three-point band of 59% to 62% across the entire timeframe."
  },
  {
    id: 7,
    category: "Piece 7: Critical Intersections & Milestones",
    badgeColor: "#7c3aed",
    question: "What two exact intersection milestones must you report to demonstrate Band 9 comparative analysis?",
    answerTitle: "1997 Crossover at 75% and 1999 Triple Convergence at 60%",
    bulletPoints: [
      "Milestone 1 (1997): Fairfield Girls and Greystone High tied at exactly 75%.",
      "Milestone 2 (1999): Royston Academy, Harble Secondary, and Crackend Boys all met at precisely 60%.",
      "Hierarchical Inversion (2000): Harble vaulted from 5th to 1st (80%), while Greystone slipped from 1st to 3rd (70%)."
    ],
    band9Phrase:
      "In 1997, Fairfield Girls equalized with Greystone High at 75%, while in 1999, Royston, Harble, and Crackend all converged at an identical 60%."
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
          <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--slate-500)" }}>
            Card {activeIdx + 1} of {FLASHCARDS.length}
          </span>
          <div style={{ display: "flex", gap: "4px" }}>
            <button
              onClick={handlePrev}
              className="apple-touch-btn secondary"
              style={{ padding: "6px 10px", minHeight: "32px" }}
              aria-label="Previous Flashcard"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="apple-touch-btn secondary"
              style={{ padding: "6px 10px", minHeight: "32px" }}
              aria-label="Next Flashcard"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {!isEntireScreen && onToggleFullscreen && (
            <button
              type="button"
              onClick={onToggleFullscreen}
              className="apple-touch-btn primary"
              style={{
                padding: "6px 14px",
                fontSize: "0.78rem",
                fontWeight: 750,
                gap: "5px",
                marginLeft: "6px"
              }}
            >
              <Maximize2 size={13} /> Entire Screen
            </button>
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

            <div style={{ display: "flex", gap: "6px" }}>
              <button
                type="button"
                onClick={handlePrev}
                className="apple-touch-btn secondary"
                style={{ padding: "4px 10px", fontSize: "0.75rem", minHeight: "30px" }}
              >
                Previous
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="apple-touch-btn primary"
                style={{
                  padding: "4px 14px",
                  fontSize: "0.75rem",
                  minHeight: "30px",
                  background: card.badgeColor
                }}
              >
                Next Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
