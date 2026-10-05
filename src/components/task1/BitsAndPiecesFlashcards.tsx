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
    category: "Piece 1: The Macro Dichotomy",
    badgeColor: "#0284c7",
    question: "What is the single most important macro feature shown across the 40-year timeframe?",
    answerTitle: "Two Decreased (UK & Sweden) vs. Two Increased (Italy & Portugal)",
    bulletPoints: [
      "The United Kingdom and Sweden both experienced overall net reductions from their 1967 baselines.",
      "Italy and Portugal both underwent continuous, substantial per capita growth.",
      "This natural division gives the ideal 2-grouping architecture for your two body paragraphs!"
    ],
    band9Phrase:
      "Overall, per capita emissions in the United Kingdom and Sweden followed a downward trajectory, whereas Italy and Portugal experienced substantial growth."
  },
  {
    id: 2,
    category: "Piece 2: UK's Unbroken Dominance",
    badgeColor: "#9333ea",
    question: "Which nation emitted the most carbon dioxide per person, and how did its numbers change?",
    answerTitle: "The UK Remained Highest in Every Single Year (~10.8 to ~8.7 Tonnes)",
    bulletPoints: [
      "Started at ~10.8 metric tonnes in 1967—higher than any other nation.",
      "Hovered near 10.7 tonnes in 1977, before embarking on an unbroken, gradual descent.",
      "Declined to 10.0 tonnes (1987), 9.6 tonnes (1997), and concluded at roughly 8.7 tonnes (2007).",
      "Never surrendered first position, despite decreasing by nearly 20% overall."
    ],
    band9Phrase:
      "The United Kingdom was the dominant emitter throughout the four-decade span, despite a steady and continuous reduction from nearly 11 to under 9 metric tonnes."
  },
  {
    id: 3,
    category: "Piece 3: Sweden's Volatile Rollercoaster",
    badgeColor: "#0284c7",
    question: "Why is Sweden's trajectory the most visually erratic and dramatic on the graph?",
    answerTitle: "Sharp 1977 Peak (~10.2 Tonnes) Followed by a 30-Year Collapse (to 5.4 Tonnes)",
    bulletPoints: [
      "Began second highest at 8.6 tonnes in 1967.",
      "Surged rapidly to an apex above 10 tonnes in 1977, briefly rivaling the UK.",
      "Plunged precipitously for the next thirty years: 7.0 tonnes (1987), 6.0 (1997), 5.4 (2007).",
      "Nearly halved (-47%) from its 1977 peak, dropping from 2nd position to tied-for-lowest."
    ],
    band9Phrase:
      "Sweden exhibited the most volatile trajectory, climbing sharply to an apex of roughly 10.2 tonnes in 1977 before plunging precipitously to finish at 5.4 tonnes."
  },
  {
    id: 4,
    category: "Piece 4: Italy's Overtaking Ascent",
    badgeColor: "#b91c1c",
    question: "How did Italy progress over time, and what major milestone occurred in the late 1980s?",
    answerTitle: "Steady 30-Year Growth (+81%), Overtaking Sweden in 1987, and Plateauing at 7.6 Tonnes",
    bulletPoints: [
      "Began in third position at 4.2 tonnes in 1967.",
      "Climbed steadily to 6.2 tonnes in 1977 and 6.7 tonnes in 1987.",
      "In approximately 1987, Italy intersected and overtook Sweden's declining line.",
      "Reached 7.6 tonnes in 1997, where it remained completely static and plateaued through 2007."
    ],
    band9Phrase:
      "Italy witnessed a consistent upward climb from 4.2 tonnes, surpassing Sweden around 1987 before plateauing identically at 7.6 tonnes from 1997 onwards."
  },
  {
    id: 5,
    category: "Piece 5: Portugal's Four-Fold Surge",
    badgeColor: "#1e293b",
    question: "Which nation grew the fastest in proportional terms, and where did it finish?",
    answerTitle: "Portugal Quadrupled from 1.2 to 5.4 Tonnes (+350%), Equalizing with Sweden in 2007",
    bulletPoints: [
      "Lowest emitter by far in 1967, generating a mere 1.2 metric tonnes per person.",
      "Ascended continuously across all four decades: 2.2t (1977), 3.6t (1987), 5.3t (1997).",
      "Finished at 5.4 tonnes in 2007—a more than four-fold surge (+350%).",
      "Completely bridged the historical gap, converging identically with Sweden by 2007."
    ],
    band9Phrase:
      "Starting at a negligible 1.2 metric tonnes in 1967, Portugal registered more than a four-fold surge to converge directly with Sweden at 5.4 tonnes by 2007."
  },
  {
    id: 6,
    category: "Piece 6: Critical Inflections & Crossovers",
    badgeColor: "#ea580c",
    question: "What two exact intersection events must you report to achieve Band 8+ in Task Achievement?",
    answerTitle: "1987 Overtake (~6.8t) and 2007 Convergence (5.4t)",
    bulletPoints: [
      "Milestone 1 (~1987): Italy crosses above Sweden's line at approximately 6.8 metric tonnes.",
      "Milestone 2 (2007): Sweden and Portugal converge at an identical figure of 5.4 metric tonnes.",
      "Reporting these exact intersection moments proves you can analyze relative shifts rather than just reciting lists of numbers!"
    ],
    band9Phrase:
      "Italy overtook Sweden around 1987 at approximately 6.8 metric tonnes, while Portugal and Sweden concluded the period by converging at an identical 5.4 tonnes in 2007."
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
              style={{ minHeight: "34px", width: "34px", padding: 0, borderRadius: "8px" }}
              title="Previous card"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="apple-touch-btn secondary"
              style={{ minHeight: "34px", width: "34px", padding: 0, borderRadius: "8px" }}
              title="Next card"
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
                boxShadow: "0 2px 6px rgba(0, 113, 227, 0.2)"
              }}
            >
              <Maximize2 size={13} /> Entire Screen
            </button>
          )}
        </div>
      </div>

      {/* Card Quick-Jumper Chips */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          overflowX: "auto",
          paddingBottom: "8px",
          marginBottom: "12px"
        }}
      >
        {FLASHCARDS.map((f, i) => {
          const isSelected = activeIdx === i;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => {
                setIsFlipped(false);
                setActiveIdx(i);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 12px",
                borderRadius: "10px",
                border: isSelected ? `1.5px solid ${f.badgeColor}` : "1px solid var(--border-subtle)",
                background: isSelected ? "#ffffff" : "var(--slate-100)",
                color: isSelected ? f.badgeColor : "var(--slate-700)",
                fontSize: "0.78rem",
                fontWeight: 750,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.15s ease",
                boxShadow: isSelected ? "var(--shadow-sm)" : "none"
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: f.badgeColor
                }}
              />
              Card {f.id}: {f.category.split(":")[1]?.trim() || f.category}
            </button>
          );
        })}
      </div>

      {/* Main Flashcard Card (Interactive Flip on Click) */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        style={{
          flex: 1,
          minHeight: isEntireScreen ? "440px" : "320px",
          background: "#ffffff",
          border: `2.5px solid ${isFlipped ? card.badgeColor : "var(--border-subtle)"}`,
          borderRadius: "20px",
          padding: isEntireScreen ? "32px 38px" : "22px 26px",
          boxShadow: isFlipped
            ? "0 18px 40px rgba(0, 0, 0, 0.09)"
            : "0 4px 16px rgba(0, 0, 0, 0.04)",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transition: "all 0.25s ease",
          position: "relative"
        }}
      >
        {/* Flip Indicator */}
        <div
          style={{
            position: "absolute",
            top: isEntireScreen ? "20px" : "16px",
            right: isEntireScreen ? "24px" : "20px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: isEntireScreen ? "0.85rem" : "0.78rem",
            fontWeight: 750,
            background: isFlipped ? `${card.badgeColor}15` : "var(--slate-100)",
            padding: "4px 10px",
            borderRadius: "8px",
            color: isFlipped ? card.badgeColor : "var(--slate-600)"
          }}
        >
          <RotateCw size={14} />
          <span>{isFlipped ? "Tap card to flip back to question" : "Tap card to reveal answer"}</span>
        </div>

        {/* Content Side A (Question) vs Side B (Answer) */}
        {!isFlipped ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flex: 1,
              paddingRight: "40px"
            }}
          >
            <span
              style={{
                fontSize: isEntireScreen ? "0.95rem" : "0.82rem",
                fontWeight: 800,
                color: card.badgeColor,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "12px"
              }}
            >
              Concept Challenge #{card.id}:
            </span>
            <h4
              style={{
                fontSize: isEntireScreen ? "1.65rem" : "1.3rem",
                fontWeight: 850,
                color: "var(--slate-900)",
                lineHeight: 1.45,
                margin: 0
              }}
            >
              {card.question}
            </h4>
            <p
              style={{
                marginTop: "18px",
                fontSize: isEntireScreen ? "1.05rem" : "0.9rem",
                color: "var(--slate-500)",
                fontStyle: "italic"
              }}
            >
              💡 Smart Board Tip: Have students decipher the graph independently, then tap anywhere on this card to verify the Band 9 answer.
            </p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: isEntireScreen ? "18px" : "12px", flex: 1 }}>
            <div>
              <span
                style={{
                  fontSize: isEntireScreen ? "0.88rem" : "0.78rem",
                  fontWeight: 800,
                  color: card.badgeColor,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }}
              >
                Key Insight &amp; Deciphered Data:
              </span>
              <h4
                style={{
                  fontSize: isEntireScreen ? "1.38rem" : "1.15rem",
                  fontWeight: 850,
                  color: "var(--slate-900)",
                  margin: "6px 0 0"
                }}
              >
                {card.answerTitle}
              </h4>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: isEntireScreen ? "10px" : "7px" }}>
              {card.bulletPoints.map((pt, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <CheckCircle2
                    size={isEntireScreen ? 18 : 16}
                    color={card.badgeColor}
                    style={{ flexShrink: 0, marginTop: "3px" }}
                  />
                  <span
                    style={{
                      fontSize: isEntireScreen ? "1.05rem" : "0.92rem",
                      color: "var(--slate-700)",
                      lineHeight: 1.55
                    }}
                  >
                    {pt}
                  </span>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "auto",
                background: "var(--slate-50)",
                borderLeft: `4px solid ${card.badgeColor}`,
                borderRadius: "0 12px 12px 0",
                padding: isEntireScreen ? "14px 18px" : "10px 14px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "3px" }}>
                <Sparkles size={14} color={card.badgeColor} />
                <span
                  style={{
                    fontSize: isEntireScreen ? "0.8rem" : "0.72rem",
                    fontWeight: 800,
                    color: "var(--slate-700)",
                    textTransform: "uppercase"
                  }}
                >
                  Band 9 Report Phrasing:
                </span>
              </div>
              <p
                style={{
                  fontSize: isEntireScreen ? "1rem" : "0.88rem",
                  fontStyle: "italic",
                  color: "var(--slate-800)",
                  margin: 0,
                  lineHeight: 1.5
                }}
              >
                “{card.band9Phrase}”
              </p>
            </div>
          </div>
        )}

        {/* Bottom Card Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "16px",
            paddingTop: "12px",
            borderTop: "1px solid var(--border-subtle)",
            fontSize: isEntireScreen ? "0.88rem" : "0.8rem",
            color: "var(--slate-500)"
          }}
        >
          <span>Active recall check • Tap card to toggle</span>
          <span style={{ fontWeight: 800, color: card.badgeColor }}>
            Piece {card.id} of {FLASHCARDS.length}
          </span>
        </div>
      </div>
    </div>
  );
};
