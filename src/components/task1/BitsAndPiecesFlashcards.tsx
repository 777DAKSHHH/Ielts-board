import React, { useState } from "react";
import {
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  AlertTriangle
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
    category: "Piece 1: Solar Fuel & Base",
    badgeColor: "#16a34a",
    question: "Where does the food chain get its energy, and how much biomass is stored at the base?",
    answerTitle: "Light Energy fuels Primary Producers (20,000 kcal/m²/yr)",
    bulletPoints: [
      "Solar radiation enters at the base marked 'Light energy'.",
      "Tier 1 'Primary producers' (vegetation/trees) synthesise this light into 20,000 kcal/m²/yr.",
      "This represents 100% of the baseline biomass energy for the entire ecosystem."
    ],
    band9Phrase: "Primary producers synthesize the baseline biomass, capturing 20,000 kcal/m²/yr from solar radiation."
  },
  {
    id: 2,
    category: "Piece 2: The 10% Trophic Rule",
    badgeColor: "#0284c7",
    question: "Why do the energy figures change from 2,000 to 200 to 20 to 2 kcal/m²/yr as we move up?",
    answerTitle: "Exact 10-Fold (90%) Reduction at Every Tier",
    bulletPoints: [
      "Primary consumers (insects, mice) retain 2,000 kcal/m²/yr (10% of base).",
      "Secondary consumers (birds, frogs) retain 200 kcal/m²/yr (1% of base).",
      "Tertiary consumers (snakes) assimilate 20 kcal/m²/yr (0.1% of base).",
      "Quaternary apex raptors receive a mere 2 kcal/m²/yr (1/10,000th of base)."
    ],
    band9Phrase: "Each ascending stage exhibits a tenfold caloric reduction, culminating in apex quaternary consumers receiving a mere 2 kcal/m²/yr."
  },
  {
    id: 3,
    category: "Piece 3: Energy Leakage",
    badgeColor: "#ea580c",
    question: "Where does the 90% missing energy go, and can it ever be re-used by plants?",
    answerTitle: "Metabolic Heat Dissipation (Unidirectional & Irreversible)",
    bulletPoints: [
      "Squiggly arrows labeled 'Heat' radiate from ALL 5 tiers and from DECOMPOSERS.",
      "Energy is lost via cellular respiration, thermal regulation, and physical movement.",
      "Heat is radiated into the atmosphere and is permanently lost (never recycled back to plants)."
    ],
    band9Phrase: "Concurrently, metabolic heat is continuously dissipated into the atmosphere across all levels, representing an irreversible thermal loss."
  },
  {
    id: 4,
    category: "Piece 4: Biological Detritus Flow",
    badgeColor: "#15803d",
    question: "Where do the arrows labeled 'Waste & dead matter' go, and what happens at DECOMPOSERS?",
    answerTitle: "All Pyramid Tiers Channel Waste & Dead Matter to DECOMPOSERS",
    bulletPoints: [
      "Arrows from Quaternary raptors (pink), Secondary consumers (yellow), Primary consumers (cyan), and Primary producers (green) all converge on DECOMPOSERS.",
      "Decomposers process decaying matter and carcasses from all biological tiers.",
      "Decomposers release their own metabolic heat into the atmosphere during biological decomposition."
    ],
    band9Phrase: "Dead matter and biological waste from all five trophic tiers are funneled into decomposers, which subsequently release metabolic heat."
  },
  {
    id: 5,
    category: "Piece 5: Band 9 Macro Overview",
    badgeColor: "#8b5cf6",
    question: "What are the TWO primary features to report in the macro overview?",
    answerTitle: "Upward Tenfold Energy Reduction & Multilevel Heat/Waste Dissipation",
    bulletPoints: [
      "Feature 1: Linear upward trophic diminution (tenfold reduction from 20,000 down to 2 kcal/m²/yr).",
      "Feature 2: Dissipation of metabolic heat across all levels alongside waste channeling to decomposers."
    ],
    band9Phrase: "Overall, energy transfers upward through five distinct tiers with an exponential tenfold reduction, while metabolic heat escapes continuously and biological detritus flows into decomposers."
  },
  {
    id: 6,
    category: "Piece 6: IELTS Title Trap Alert",
    badgeColor: "#dc2626",
    isWarning: true,
    question: "The prompt mentions 'food production chain of the United States' — should you write about farms, factories, or food logistics?",
    answerTitle: "DO NOT Write About Industrial Agriculture or Factories!",
    bulletPoints: [
      "The diagram is strictly an ecological energy pyramid and food web.",
      "Writing about tractors, slaughterhouses, packaging, or supermarkets will cause a severe penalty under Task Achievement.",
      "Report ONLY the scientific entities shown: trophic levels, kcal/m²/yr values, heat loss, and decomposer waste processing."
    ],
    band9Phrase: "The visual illustrates an ecological food web rather than industrial processing; stick strictly to the trophic tiers and energy metrics."
  }
];

export const BitsAndPiecesFlashcards: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [masteredIds, setMasteredIds] = useState<number[]>([]);

  const card = FLASHCARDS[currentIndex];
  const isMastered = masteredIds.includes(card.id);

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % FLASHCARDS.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + FLASHCARDS.length) % FLASHCARDS.length);
  };

  const toggleMastered = (id: number) => {
    setMasteredIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "14px", width: "100%" }}>
      {/* Header Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "10px",
          background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
          border: "1.5px solid var(--border-subtle)",
          borderRadius: "16px",
          padding: "14px 20px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "#0284c7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff"
            }}
          >
            <Sparkles size={18} />
          </div>
          <div>
            <h4 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 800, color: "var(--slate-900)" }}>
              Interactive Question Deciphering Flashcards
            </h4>
            <p style={{ margin: "2px 0 0 0", fontSize: "0.82rem", color: "var(--slate-600)" }}>
              Tap anywhere on the card to flip between Question and IELTS Breakdown.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "0.82rem", fontWeight: 750, color: "var(--slate-600)" }}>
            Card {currentIndex + 1} of {FLASHCARDS.length}
          </span>
          <span
            style={{
              background: isMastered ? "#16a34a" : "#f1f5f9",
              color: isMastered ? "#ffffff" : "var(--slate-700)",
              fontSize: "0.75rem",
              fontWeight: 800,
              padding: "4px 10px",
              borderRadius: "999px"
            }}
          >
            {isMastered ? "Mastered ✓" : "In Progress"}
          </span>
        </div>
      </div>

      {/* 3D Flip Card Container */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsFlipped(!isFlipped);
          }
        }}
        style={{
          perspective: "1000px",
          cursor: "pointer",
          width: "100%",
          minHeight: "340px"
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            minHeight: "340px",
            textAlign: "left",
            transition: "transform 0.4s ease",
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
          }}
        >
          {/* ================= FRONT SIDE (QUESTION) ================= */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              background: "#ffffff",
              border: `2px solid ${card.badgeColor}`,
              borderRadius: "20px",
              padding: "26px 30px",
              boxShadow: "0 10px 25px -5px rgba(0,0,0,0.06), 0 8px 10px -6px rgba(0,0,0,0.04)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                <span
                  style={{
                    background: card.badgeColor,
                    color: "#ffffff",
                    fontSize: "0.76rem",
                    fontWeight: 800,
                    padding: "4px 12px",
                    borderRadius: "8px",
                    letterSpacing: "0.5px"
                  }}
                >
                  {card.category}
                </span>

                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--slate-400)", fontSize: "0.78rem" }}>
                  <RotateCw size={14} /> Tap card to flip
                </div>
              </div>

              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--slate-900)", lineHeight: 1.4, margin: "14px 0" }}>
                {card.question}
              </h3>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "20px", paddingTop: "14px", borderTop: "1px solid var(--border-subtle)" }}>
              <span style={{ fontSize: "0.8rem", color: "var(--slate-500)" }}>
                Touch anywhere on card to reveal the breakdown
              </span>
              <button
                type="button"
                className="apple-touch-btn primary"
                style={{ fontSize: "0.78rem", padding: "6px 14px", display: "flex", alignItems: "center", gap: "6px" }}
              >
                <RotateCw size={13} /> Reveal Answer
              </button>
            </div>
          </div>

          {/* ================= BACK SIDE (ANSWER & BAND 9 DECONSTRUCTION) ================= */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              background: card.isWarning ? "#fef2f2" : "#ffffff",
              border: `2px solid ${card.badgeColor}`,
              borderRadius: "20px",
              padding: "24px 28px",
              boxShadow: "0 10px 25px -5px rgba(0,0,0,0.06), 0 8px 10px -6px rgba(0,0,0,0.04)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflowY: "auto"
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  {card.isWarning ? <AlertTriangle size={18} color="#dc2626" /> : <CheckCircle2 size={18} color={card.badgeColor} />}
                  <span
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 800,
                      color: card.badgeColor,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px"
                    }}
                  >
                    {card.category} • Solution
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--slate-400)", fontSize: "0.78rem" }}>
                  <RotateCw size={14} /> Tap to flip back
                </div>
              </div>

              <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: card.isWarning ? "#991b1b" : "var(--slate-900)", margin: "4px 0 10px 0" }}>
                {card.answerTitle}
              </h4>

              {/* Bullet points */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", margin: "10px 0" }}>
                {card.bulletPoints.map((point, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.85rem", color: "var(--slate-700)" }}>
                    <span style={{ color: card.badgeColor, fontWeight: 800, lineHeight: 1 }}>•</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Band 9 Phrasing */}
              <div
                style={{
                  background: card.isWarning ? "#fee2e2" : "var(--slate-50)",
                  border: `1px solid ${card.isWarning ? "#fca5a5" : "var(--border-subtle)"}`,
                  borderRadius: "10px",
                  padding: "10px 14px",
                  marginTop: "8px",
                  fontSize: "0.82rem",
                  color: "var(--slate-800)",
                  fontStyle: "italic"
                }}
              >
                <strong style={{ color: card.badgeColor, fontStyle: "normal" }}>Band 9 Phrasing: </strong>
                "{card.band9Phrase}"
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "14px", paddingTop: "10px", borderTop: "1px solid var(--border-subtle)" }}>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMastered(card.id);
                }}
                className={`apple-touch-btn ${isMastered ? "success" : "secondary"}`}
                style={{ fontSize: "0.76rem", padding: "6px 12px" }}
              >
                {isMastered ? "Mastered ✓ (Tap to Undo)" : "Mark as Mastered"}
              </button>

              <span style={{ fontSize: "0.78rem", color: "var(--slate-400)" }}>
                Card {currentIndex + 1} of {FLASHCARDS.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
        <button
          type="button"
          onClick={handlePrev}
          className="apple-touch-btn secondary"
          style={{ display: "flex", alignItems: "center", gap: "6px", padding: "10px 18px", fontSize: "0.88rem" }}
        >
          <ChevronLeft size={16} /> Previous Card
        </button>

        {/* Card Indicator Dots */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          {FLASHCARDS.map((fc, idx) => (
            <button
              key={fc.id}
              type="button"
              onClick={() => {
                setIsFlipped(false);
                setCurrentIndex(idx);
              }}
              style={{
                width: idx === currentIndex ? "24px" : "10px",
                height: "10px",
                borderRadius: "999px",
                background: idx === currentIndex ? "var(--slate-900)" : masteredIds.includes(fc.id) ? "#16a34a" : "var(--slate-300)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
              title={`Card ${idx + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={handleNext}
          className="apple-touch-btn primary"
          style={{ display: "flex", alignItems: "center", gap: "6px", padding: "10px 18px", fontSize: "0.88rem" }}
        >
          Next Card <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};
