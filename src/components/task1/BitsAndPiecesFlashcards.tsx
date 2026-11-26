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
  Filter,
  Car,
  Home,
  Compass
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
    question: "What overarching transformations must be emphasized in a Band 9 overview for the Islip development maps?",
    answerTitle: "Infrastructural Modernization, Circumscribing Bypass & Expansion at Expense of Green Space",
    bulletPoints: [
      "Pillar 1 (Transport Modernization): The town shifts from a traffic-bisected rural settlement into a pedestrianised core enclosed by an outer dual carriageway bypass.",
      "Pillar 2 (Land-Use & Expansion): Substantial residential and commercial growth occurs to the north and east at the direct expense of rural countryside and municipal parkland.",
      "Golden Rule: Never report minor micro-details in the overview; synthesize systemic spatial shifts and macro civic trade-offs."
    ],
    band9Phrase:
      "“Overall, the town centre is slated to undergo extensive infrastructural modernization, transitioning from a traffic-bisected settlement into a predominantly pedestrianised commercial and residential hub. The most prominent changes involve the construction of a perimeter dual carriageway encircling the central core, alongside substantial residential and commercial expansion to the north and east at the expense of open countryside and recreational parkland.”"
  },
  {
    id: 2,
    category: "Card 2: Transport Infrastructure & Bypass Dynamics (Body 1A)",
    badgeColor: "#2563eb",
    question: "How do you accurately describe the perimeter dual carriageway and central pedestrianisation?",
    answerTitle: "Circumscription of Central Core & Conversion to Foot Traffic",
    bulletPoints: [
      "Bypass Function: A new dual carriageway completely circumscribes the town core, linking western and eastern roads to divert through-traffic.",
      "Pedestrianisation: The central east-west main road is closed to vehicular traffic and redesignated as 'Pedestrians only'.",
      "Key Prepositions: 'encircling the urban core', 'circumscribing the perimeter', 'bisecting the settlement', 'diverting traffic around'."
    ],
    band9Phrase:
      "“Regarding transport infrastructure and the northern sector, the current main road bisecting the town centre will be converted into a pedestrianised thoroughfare. To accommodate through vehicular traffic, a new dual carriageway will be constructed to circumscribe the entire urban core, linking the western and eastern access roads.”"
  },
  {
    id: 3,
    category: "Card 3: Northern Commercial Hub & Countryside Expansion (Body 1B)",
    badgeColor: "#7c3aed",
    question: "How do you frame the demolition of the northern shops and development of greenfield land?",
    answerTitle: "Complete Demolition for Tripartite Complex & Greenfield Housing",
    bulletPoints: [
      "Commercial Replacement: The existing northern row of shops is completely demolished to construct a tripartite complex: bus station, shopping centre, and car park.",
      "Greenfield Housing: Open countryside to the north-east is converted into a new housing development with a dedicated road feeder from the dual carriageway.",
      "Lexical Resource: 'completely demolished', 'make way for', 'tripartite transit and retail complex', 'erected on what is currently open countryside'."
    ],
    band9Phrase:
      "“Furthermore, the northern row of shops will be completely demolished to make way for a newly built bus station, shopping centre, and car park. North-east of this complex, on what is currently open countryside, a new housing development will be erected with dedicated road access.”"
  },
  {
    id: 4,
    category: "Card 4: Southern Retention, Park Diminution & School Access (Body 2)",
    badgeColor: "#ea580c",
    question: "How do you structure Body Paragraph 2 to balance retention with major south-eastern changes?",
    answerTitle: "Southern Retail Retention, Parkland Compression & Direct Bypass Feeder",
    bulletPoints: [
      "Structural Retention: Southern shops remain intact, now enjoying direct frontage onto the peaceful pedestrian street; existing central housing is also preserved.",
      "Park Diminution: A second new housing estate is erected east of the central houses, resulting in a marked diminution of the park.",
      "School Reconfiguration: The school in the south-west is retained, but its access road is reconnected directly to the southern arc of the dual carriageway."
    ],
    band9Phrase:
      "“Turning to the southern zone, the existing row of shops will be preserved intact alongside the residential neighborhood immediately to its south. In contrast, the south-eastern sector will undergo noticeable reconfiguration: a second new housing estate will be built, leading to a substantial diminution of the adjacent parkland. Finally, the school in the south-west will be retained, but its existing curved access route will be connected directly to the southern arc of the dual carriageway.”"
  }
];

export const BitsAndPiecesFlashcards: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const card = FLASHCARDS[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % FLASHCARDS.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + FLASHCARDS.length) % FLASHCARDS.length);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%", maxWidth: "800px", margin: "0 auto" }}>
      {/* Flashcard Header Controls */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              fontSize: "0.74rem",
              fontWeight: 800,
              background: `${card.badgeColor}15`,
              color: card.badgeColor,
              padding: "3px 10px",
              borderRadius: "6px"
            }}
          >
            {card.category}
          </span>
          <span style={{ fontSize: "0.78rem", color: "#64748b", fontWeight: 700 }}>
            Card {currentIndex + 1} of {FLASHCARDS.length}
          </span>
        </div>

        <div style={{ display: "flex", gap: "6px" }}>
          <button
            type="button"
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
              fontSize: "0.78rem",
              fontWeight: 700,
              color: "#0f172a"
            }}
          >
            <ChevronLeft size={16} /> Prev
          </button>
          <button
            type="button"
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
              fontSize: "0.78rem",
              fontWeight: 700,
              color: "#0f172a"
            }}
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Interactive Flip Card */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        style={{
          background: "#ffffff",
          border: `2px solid ${card.badgeColor}`,
          borderRadius: "20px",
          padding: "26px",
          minHeight: "340px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          cursor: "pointer",
          boxShadow: `0 8px 24px ${card.badgeColor}18`,
          transition: "all 0.2s ease"
        }}
      >
        {!isFlipped ? (
          /* FRONT OF CARD (Question) */
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", height: "100%", justifyContent: "center", textAlign: "center" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, color: card.badgeColor, textTransform: "uppercase" }}>
              Examiner Challenge Question
            </span>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a", lineHeight: 1.45 }}>
              {card.question}
            </h3>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", color: "#64748b", fontSize: "0.82rem", marginTop: "16px" }}>
              <RotateCw size={15} /> Click anywhere to reveal the Band 9 Strategy
            </div>
          </div>
        ) : (
          /* BACK OF CARD (Answer) */
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <strong style={{ fontSize: "1rem", color: card.badgeColor }}>
                {card.answerTitle}
              </strong>
              <span style={{ fontSize: "0.72rem", color: "#64748b" }}>Click to flip back</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {card.bulletPoints.map((pt, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.85rem", color: "#334155", lineHeight: 1.45 }}>
                  <CheckCircle2 size={16} color={card.badgeColor} style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div
              style={{
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "10px",
                padding: "10px 14px",
                fontSize: "0.84rem",
                fontStyle: "italic",
                color: "#0f172a",
                lineHeight: 1.5,
                marginTop: "6px"
              }}
            >
              {card.band9Phrase}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
