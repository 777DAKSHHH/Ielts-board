import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Workflow,
  Flame,
  Boxes
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
    category: "Card 1: The Macro Overview Contrast",
    badgeColor: "#0284c7",
    question: "What are the two core overarching features that must be contrasted in a Band 9 overview for this dual process task?",
    answerTitle: "1) Cement as a Linear Multi-Stage Thermal Process vs 2) Concrete as a Single-Stage Batch Mixture",
    bulletPoints: [
      "Cement production is a multi-step, sequential industrial procedure requiring physical crushing, thorough mixing, and high-heat transformation in a rotating kiln.",
      "Concrete manufacturing, by contrast, is a straightforward single-stage batch mixing process where raw ingredients are poured into a rotating drum.",
      "Aggregates (gravel and sand) form the dominant bulk of concrete, bound together by cement and activated with water (avoid all specific numerical figures in the overview; reserve exact percentages for Body Paragraph 2)."
    ],
    band9Phrase:
      "“Overall, cement production is a multi-step, sequential process requiring specialized equipment, physical crushing, and intense heating, whereas concrete manufacturing is a straightforward, single-stage batch mixing procedure wherein coarse and fine aggregates constitute the vast majority of the mixture, bound together by cement and activated with water.”"
  },
  {
    id: 2,
    category: "Card 2: Cement Manufacturing Flow (Body 1)",
    badgeColor: "#ea580c",
    question: "How should you chronologically sequence and report the 5 stages of cement production using passive voice?",
    answerTitle: "Crusher (Powder) → Mixer → Rotating Heater (Heat from base) → Conveyor Grinder → Bagging",
    bulletPoints: [
      "Stage 1: Limestone and clay are fed into a mechanical crusher to be pulverized into fine powder.",
      "Stage 2: Powder is transferred to an industrial mixer to create a uniform blend.",
      "Stage 3: Mixture passes through an inclined rotating cylinder heater with intense heat applied from the base.",
      "Stage 4: Heated material travels along a conveyor belt into a grinder to be milled into fine cement.",
      "Stage 5: Finished cement is poured into heavy-duty bags ready for transport or concrete mixing."
    ],
    band9Phrase:
      "“Regarding the manufacture of cement, limestone and clay are initially passed through a crusher to be pulverized into a fine powder. This powdered mixture is then fed into an industrial mixer to achieve a uniform blend before entering an elongated, rotating cylinder heater...”"
  },
  {
    id: 3,
    category: "Card 3: Concrete Recipe Proportions (Body 2)",
    badgeColor: "#7c3aed",
    question: "What are the exact four ingredient proportions for concrete, and how should their structural roles be described?",
    answerTitle: "Gravel 50% (Coarse Aggregate), Sand 25% (Fine Aggregate), Cement 15% (Binder), Water 10% (Hydration)",
    bulletPoints: [
      "Gravel (small stones) constitutes half (50%) of the mixture, functioning as the primary structural coarse aggregate.",
      "Sand represents a quarter (25%) of the volume as the fine aggregate, making total aggregate content 75%.",
      "Cement represents 15%, functioning as the manufactured binding agent that glues the aggregates together.",
      "Water forms the smallest fraction at 10%, activating the hydration reaction to yield wet workable concrete."
    ],
    band9Phrase:
      "“Turning to concrete production, gravel constitutes half (50%) of the total mixture, followed by sand, which accounts for a quarter (25%). Cement makes up 15% to bind the components together, while water represents the smallest portion at 10%.”"
  },
  {
    id: 4,
    category: "Card 4: Passive Voice Mastery in Process Diagrams",
    badgeColor: "#059669",
    question: "Why is the passive voice mandatory in process tasks, and what are the key grammatical patterns?",
    answerTitle: "The Agent is Irrelevant; Focus on the Material and Mechanical Transformation",
    bulletPoints: [
      "Formula: Subject + is / are + past participle (e.g., 'limestone and clay are crushed', 'the powder is blended').",
      "Never write: 'Workers crush limestone' or 'The factory makes cement'. Always maintain objective scientific voice.",
      "Combine with participial clauses: 'Having been heated in the rotating kiln, the material is transported...'"
    ],
    band9Phrase:
      "“...in this chamber, the substance is subjected to intense heat applied from the lower end as the drum continuously revolves. After being heated, the resulting mixture is transported along a conveyor belt to a grinder...”"
  },
  {
    id: 5,
    category: "Card 5: Sequence Linkers & Macro Transition",
    badgeColor: "#2563eb",
    question: "Which discourse linkers ensure seamless flow across the 5 cement steps and into the concrete diagram?",
    answerTitle: "Initially → Following this → Next → After being heated → Finally → Turning to concrete production",
    bulletPoints: [
      "Initial stage: 'Initially,' / 'To begin with,'",
      "Intermediate steps: 'Following this,' / 'Subsequently,' / 'The next phase entails...'",
      "Culmination: 'Finally, the completed cement is packaged into bags...'",
      "Macro Transition to Diagram 2: 'Turning to concrete production, four distinct raw materials are combined inside a cylindrical mixer...'"
    ],
    band9Phrase:
      "“Turning to concrete production, four distinct raw materials are combined inside a cylindrical concrete mixer in precise proportions. Once all four elements are poured simultaneously into the concrete drum, the machine rotates...”"
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
        background: "#ffffff",
        borderRadius: "18px",
        border: "1.5px solid var(--border-subtle, #cbd5e1)",
        padding: "16px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.03)"
      }}
    >
      {/* Top Header Controls */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "10px",
          borderBottom: "1px solid #f1f5f9"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Sparkles size={18} color="#2563eb" />
          <strong style={{ fontSize: "0.95rem", color: "#0f172a" }}>
            Bits &amp; Pieces Teaching Flashcards ({currentIdx + 1} of {FLASHCARDS.length})
          </strong>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
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
              fontSize: "0.8rem",
              fontWeight: 700,
              color: "#475569"
            }}
          >
            <ChevronLeft size={14} /> Prev
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
              fontSize: "0.8rem",
              fontWeight: 700,
              color: "#475569"
            }}
          >
            Next <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Main Flashcard Container */}
      <div
        onClick={toggleFlip}
        style={{
          minHeight: "310px",
          borderRadius: "16px",
          border: `2px solid ${card.badgeColor}30`,
          background: isFlipped ? "#ffffff" : "#f8fafc",
          padding: "22px 26px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          cursor: "pointer",
          boxShadow: "0 6px 20px rgba(0,0,0,0.04)",
          transition: "all 0.2s ease"
        }}
      >
        {/* Card Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span
            style={{
              fontSize: "0.76rem",
              fontWeight: 800,
              padding: "3px 10px",
              borderRadius: "6px",
              background: `${card.badgeColor}18`,
              color: card.badgeColor
            }}
          >
            {card.category}
          </span>

          <span
            style={{
              fontSize: "0.74rem",
              fontWeight: 700,
              color: "#64748b",
              display: "flex",
              alignItems: "center",
              gap: "4px"
            }}
          >
            <RotateCw size={12} /> Click Card to {isFlipped ? "See Question" : "Reveal Answer"}
          </span>
        </div>

        {/* Card Content Area */}
        {!isFlipped ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", margin: "auto 0" }}>
            <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#64748b" }}>
              EXAMINER CHALLENGE QUESTION:
            </span>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a", margin: 0, lineHeight: 1.45 }}>
              {card.question}
            </h3>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", margin: "auto 0" }}>
            <div>
              <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "#16a34a" }}>
                BAND 9 ANSWER BLUEPRINT:
              </span>
              <h4 style={{ fontSize: "1.08rem", fontWeight: 800, color: "#0f172a", margin: "4px 0 0" }}>
                {card.answerTitle}
              </h4>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {card.bulletPoints.map((bp, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.84rem", color: "#334155", lineHeight: 1.4 }}>
                  <CheckCircle2 size={14} color="#16a34a" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span>{bp}</span>
                </div>
              ))}
            </div>

            <div
              style={{
                background: "#f8fafc",
                borderLeft: `3px solid ${card.badgeColor}`,
                borderRadius: "6px",
                padding: "8px 12px",
                fontSize: "0.84rem",
                color: "#1e293b",
                fontStyle: "italic",
                lineHeight: 1.45
              }}
            >
              {card.band9Phrase}
            </div>
          </div>
        )}

        {/* Card Footer Indicator */}
        <div style={{ display: "flex", justifyContent: "center", gap: "6px" }}>
          {FLASHCARDS.map((_, i) => (
            <span
              key={i}
              style={{
                width: i === currentIdx ? "20px" : "6px",
                height: "6px",
                borderRadius: "3px",
                background: i === currentIdx ? card.badgeColor : "#cbd5e1",
                transition: "all 0.2s ease"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
