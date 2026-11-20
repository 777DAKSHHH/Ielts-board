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
  Flame,
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
    question: "What are the core overarching features that must be highlighted in the overview for this Sugarcane Process Diagram?",
    answerTitle: "Linear Sequence, Start to Finish & Dual Bifurcation",
    bulletPoints: [
      "Pillar 1 (Sequence & Span): The manufacturing procedure is a linear multi-stage sequence consisting of seven distinct stages, beginning with crop cultivation and ending with refined sugar crystals.",
      "Pillar 2 (Dual Harvest & Bifurcation): The initial stages involve agricultural field operations—notably dual harvesting (conducted either mechanically or manually)—and juice extraction, whereas subsequent phases rely on chemical purification, thermal evaporation, and centrifugal separation.",
      "Golden Rule: Never focus on tiny procedural steps in the overview; synthesize the overall journey and primary grouping."
    ],
    band9Phrase:
      "“Overall, the manufacturing process is a linear sequence comprising seven distinct stages, beginning with agricultural cultivation and harvesting and culminating in the industrial drying and cooling of pure sugar crystals. Notably, while the opening stages involve agricultural harvesting (performed either mechanically or manually) and mechanical juice extraction, the remaining phases rely on chemical filtration, thermal evaporation, and centrifugal separation.”"
  },
  {
    id: 2,
    category: "Card 2: Agricultural & Extraction Flow (Body 1)",
    badgeColor: "#16a34a",
    question: "How do you systematically deconstruct Stages 1, 2, and 3 in Body Paragraph 1?",
    answerTitle: "Maturation (12–18m), Dual Reaping (Combine vs Sickle) & Roller Crushing",
    bulletPoints: [
      "Stage 1 (Growing): Canes are cultivated in agricultural fields over a 12 to 18-month maturation timeframe.",
      "Stage 2 (Harvesting): Fully mature crops are reaped using two distinct methods: either mechanically by combine vehicles or manually by agricultural laborers using hand sickles.",
      "Stage 3 (Crushing): Cut stalks are fed through heavy rotating rollers in a crushing mill, expressing raw liquid juice.",
      "Examiner Tip: Always explicitly highlight the alternative dual harvesting method—failing to mention both mechanical and manual harvesting costs marks in Task Achievement."
    ],
    band9Phrase:
      "“To begin with, sugarcanes are grown in agricultural fields over a maturation period lasting between 12 and 18 months. Once fully grown, the canes are harvested using one of two methods: either mechanically utilizing combine harvesters or manually by agricultural laborers cutting the stalks with hand blades. Following the harvest, the raw stalks are fed through heavy rotating rollers in a crushing mill, which compress the plant material to extract raw liquid juice.”"
  },
  {
    id: 3,
    category: "Card 3: Refining, Evaporation & Separation (Body 2)",
    badgeColor: "#ea580c",
    question: "How do you link Stages 4, 5, 6, and 7 in Body Paragraph 2?",
    answerTitle: "Limestone Filtration, Evaporation into Syrup, Centrifuge Spin & Drum Drying",
    bulletPoints: [
      "Stage 4 (Purifying): Raw liquid juice is poured through a limestone filter to catch particulates and eliminate impurities.",
      "Stage 5 (Evaporator): Filtered juice is heated over a flame in an evaporator vat; water evaporates, turning the liquid into thick syrup.",
      "Stage 6 (Centrifuge): Viscous syrup is introduced into a high-speed centrifuge, which spins rapidly to separate solid sugar crystals from liquid syrup.",
      "Stage 7 (Drying & Cooling): Damp crystals enter a cylindrical container for drying and cooling, resulting in the final refined sugar product ready for packaging."
    ],
    band9Phrase:
      "“In the subsequent phase, the extracted juice is poured through a limestone filter in order to purify it and eliminate unwanted particulates. Thereafter, the clarified liquid is transferred to an evaporator vat where it is heated over an open heat source; during this boiling phase, water evaporates, transforming the juice into a thick syrup. Next, this syrup is introduced into a high-speed centrifuge, which spins rapidly to separate solid sugar crystals from the remaining liquid. Finally, in the culminating stage, the damp crystals are fed into a cylindrical container for drying and cooling, yielding finished refined sugar ready for commercial distribution.”"
  },
  {
    id: 4,
    category: "Card 4: Passive Voice Mastery in Processes",
    badgeColor: "#7c3aed",
    question: "Why is the passive voice mandatory in process diagrams, and how should you vary your sentence structures?",
    answerTitle: "Present Simple Passive & Varied Participial Structures",
    bulletPoints: [
      "Agent Irrelevance: In manufacturing processes, who performs the action (e.g. factory workers, machines) is less important than what happens to the product itself.",
      "Core Formula: Subject + is/are + Past Participle ('canes are grown', 'canes are harvested', 'stalks are crushed', 'juice is purified', 'liquid is heated', 'crystals are separated', 'sugar is dried').",
      "Band 9 Syntactic Variety: Avoid repetitive 'Then it is... Then it is...'; use prepositional phrases ('Following extraction,...'), relative clauses ('...into a centrifuge, which spins rapidly to separate...'), and purpose clauses ('...in order to eliminate unwanted particulates')."
    ],
    band9Phrase:
      "“Following the harvest, the raw stalks are fed through heavy rotating rollers in a crushing mill, which compress the plant material to extract raw liquid juice.”"
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
            Pedagogical Flashcards: Sugarcane Manufacturing Process
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
              💡 <em>Think through: What passive verbs are required? How do you connect the stages? Tap above to reveal examiner breakdown.</em>
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
