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
    question: "What are the three essential macro features that must appear in a Band 9 overview for this diurnal line graph?",
    answerTitle: "1) Inverse Diurnal Patterns, 2) Prime-Time 45% TV Apex, 3) Midday Crossover Convergence",
    bulletPoints: [
      "Radio is the preferred broadcasting medium during the morning hours, whereas television decisively dominates from the early afternoon through the night.",
      "Prime-time television viewing achieved the single highest audience share of the entire 24-hour cycle (~45% between 20:00 and 21:00).",
      "Both mediums briefly converge at an identical level of approximately 15% around midday (13:00 / 1:00 pm)."
    ],
    band9Phrase:
      "“Overall, the two media displayed contrasting diurnal patterns; radio listenership was considerably higher during the morning hours, whereas television decisively dominated from the early afternoon through the night. Additionally, evening television viewing attracted the single highest audience share of the day, with both mediums briefly converging around midday.”"
  },
  {
    id: 2,
    category: "Card 2: Morning Radio Surge & Breakfast Apex",
    badgeColor: "#dc2626",
    question: "How should you report the morning trajectory of radio between 6:00 and 9:00 am compared to television?",
    answerTitle: "Dramatic Morning Surge to Daily Apex of ~27% at 8:30 am, Outpacing Subdued 7% TV Bump",
    bulletPoints: [
      "Radio surges rapidly: starting from ~4% at 6:00 am, climbing to 15% at 7:00, 25% at 8:00, and reaching its daily apex of ~27% around 8:30 am.",
      "Television remains subdued: rising only modestly to a minor morning peak of 7% at 8:00 am before sliding to a daytime trough of 3.5%–4% at 11:00 am.",
      "Key analytical contrast: At 8:30 am, radio listenership outstrips television viewership by over 20 percentage points."
    ],
    band9Phrase:
      "“Radio audience experienced a dramatic morning surge, climbing steeply to reach a daily apex of approximately 27% around 8:30. In contrast, television engagement rose only modestly to 7% at 8:00 before sliding back to around 4% at 11:00.”"
  },
  {
    id: 3,
    category: "Card 3: Midday Convergence & Crossover (13:00)",
    badgeColor: "#d97706",
    question: "Why is the 13:00 (1:00 pm) coordinate considered the pivotal structural bridge of this chart?",
    answerTitle: "The Unique Crossover Point Where Both Mediums Meet at 15% and TV Takes Permanent Dominance",
    bulletPoints: [
      "Radio has been declining steadily from its 27% morning peak, falling to 20% at 11:00 and reaching 15% at 13:00.",
      "Television has been rising from its 3.5% daytime low, climbing to 8% at 12:00 and reaching 15% at 13:00.",
      "From 14:00 onwards, television permanently supersedes radio as the nation's leading broadcasting platform."
    ],
    band9Phrase:
      "“By 13:00, radio audiences had tapered off while television viewership climbed, resulting in an intersection where both mediums stood at roughly 15%. From that point onward, television decisively superseded radio.”"
  },
  {
    id: 4,
    category: "Card 4: Prime-Time Television Explosion",
    badgeColor: "#2563eb",
    question: "How should you describe the spectacular evening surge of television between 17:00 and 21:00?",
    answerTitle: "Exponential Escalation to Global Peak of 45% (Captivating Nearly Half the UK Population)",
    bulletPoints: [
      "Television accelerates rapidly: rising from 17% at 16:00 to 25% at 17:00, and rocketing to 42% by 18:00.",
      "Peak Prime-Time Window: Holds at its absolute global zenith of 45% between 20:00 and 21:00.",
      "Radio contrast: While television commands 45%, radio listenership plunges below 10% after 18:00, hovering between 4% and 6%."
    ],
    band9Phrase:
      "“Conversely, television audiences skyrocketed from 16:00, culminating in a prime-time peak of 45% between 20:00 and 21:00, captivating nearly half the UK population.”"
  },
  {
    id: 5,
    category: "Card 5: Nocturnal Trough & Late-Night Descent",
    badgeColor: "#64748b",
    question: "How do radio and television audiences behave during the pre-dawn hours and late at night?",
    answerTitle: "Marginal Engagement Under 5% Overnight, and Steep Midnight TV Plummet to 15%",
    bulletPoints: [
      "Nocturnal lull (01:00–06:00): Audiences for both media bottom out under 5% (radio at 2%–3%, TV at 3%–4%).",
      "Late-night TV descent (21:00–24:00): Television viewership slides precipitously from 45% down to 38% at 22:00, 33% at 23:00, and closes at 15% by midnight.",
      "Radio late night: Levels off and stabilizes at roughly 4% to 5%."
    ],
    band9Phrase:
      "“Between 1:00 and 6:00, audience figures for both platforms remained marginal at under 7%. Late at night, television viewership dropped sharply to 15% by midnight, while radio leveled off at around 4%.”"
  },
  {
    id: 6,
    category: "Card 6: Exam Pitfalls & Band 9 Precautions",
    badgeColor: "#ea580c",
    isWarning: true,
    question: "What are the most frequent examiner-penalized mistakes in this 1992 audience graph?",
    answerTitle: "Unit Omissions, Misinterpreting Crossover Time, and Ignoring the Age Scope",
    bulletPoints: [
      "Scope Error: Failing to mention that the population surveyed is 'over 4 years old'—this demographic detail is explicitly highlighted on the Y-axis.",
      "Unit Error: Writing numbers without percentage signs (e.g. '45' instead of '45% of the UK population').",
      "Crossover Error: Neglecting to report the 13:00 intersection, or claiming that television led during the morning.",
      "Peak Misquotation: Claiming radio peaked at 40% (it peaked at ~27%), or that TV peaked at 50% (it peaked at 45%)."
    ],
    band9Phrase:
      "“Band 9 Criterion: Accurate demographic framing (UK population aged 4+), precise percentage citations (radio ~27% at 8:30 am, TV 45% at 20:00–21:00), and reporting the 13:00 crossover convergence (15%).”"
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
      {/* Navigation & Progress Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "820px",
          background: "#ffffff",
          border: "1.5px solid var(--border-subtle)",
          borderRadius: "16px",
          padding: "10px 18px",
          boxShadow: "var(--shadow-sm)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            className="apple-badge neutral"
            style={{
              background: card.badgeColor,
              color: "#ffffff",
              fontWeight: 800,
              fontSize: "0.78rem"
            }}
          >
            {card.category}
          </span>
          <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--slate-500)" }}>
            Card {currentIdx + 1} of {FLASHCARDS.length}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button
            onClick={handlePrev}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              border: "1px solid var(--border-subtle)",
              background: "var(--slate-50)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer"
            }}
          >
            <ChevronLeft size={18} color="var(--slate-700)" />
          </button>
          <button
            onClick={handleNext}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              border: "1px solid var(--border-subtle)",
              background: "var(--slate-50)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer"
            }}
          >
            <ChevronRight size={18} color="var(--slate-700)" />
          </button>
        </div>
      </div>

      {/* Main Flashcard Container */}
      <div
        onClick={handleFlip}
        style={{
          width: "100%",
          maxWidth: "820px",
          minHeight: "360px",
          background: isFlipped ? "#f8fafc" : "#ffffff",
          border: isFlipped ? `2px solid ${card.badgeColor}` : "1.5px solid var(--border-subtle)",
          borderRadius: "24px",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: "var(--shadow-md)",
          cursor: "pointer",
          transition: "all 0.25s ease",
          position: "relative"
        }}
      >
        {/* Flip Indicator Tag */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "24px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "0.78rem",
            fontWeight: 700,
            color: "var(--slate-400)"
          }}
        >
          <RotateCw size={14} />
          {isFlipped ? "Tap to see question" : "Tap to flip & reveal answer"}
        </div>

        {/* Card Face Content */}
        {!isFlipped ? (
          /* QUESTION FACE */
          <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginTop: "18px" }}>
            <span
              style={{
                fontSize: "0.85rem",
                fontWeight: 800,
                color: card.badgeColor,
                letterSpacing: "0.04em",
                textTransform: "uppercase"
              }}
            >
              Essential IELTS Examination Challenge
            </span>
            <h3
              style={{
                fontSize: "1.45rem",
                fontWeight: 800,
                color: "var(--slate-900)",
                lineHeight: 1.45,
                margin: 0
              }}
            >
              {card.question}
            </h3>
            <p style={{ fontSize: "0.92rem", color: "var(--slate-500)", lineHeight: 1.5, margin: 0 }}>
              Formulate your response using precise data points, comparative collocations, and temporal markers before flipping the card.
            </p>
          </div>
        ) : (
          /* ANSWER FACE */
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {card.isWarning ? (
                <AlertTriangle size={22} color="#ea580c" />
              ) : (
                <CheckCircle2 size={22} color={card.badgeColor} />
              )}
              <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                {card.answerTitle}
              </h4>
            </div>

            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.88rem", color: "var(--slate-700)" }}>
              {card.bulletPoints.map((pt, i) => (
                <li key={i} style={{ lineHeight: 1.5 }}>
                  {pt}
                </li>
              ))}
            </ul>

            <div
              style={{
                background: "#ffffff",
                border: "1px solid var(--border-subtle)",
                borderRadius: "12px",
                padding: "12px 16px",
                fontSize: "0.86rem",
                color: "var(--slate-800)",
                lineHeight: 1.55,
                borderLeft: `4px solid ${card.badgeColor}`
              }}
            >
              <strong style={{ color: card.badgeColor, display: "block", marginBottom: "3px" }}>
                Band 9 Formulation:
              </strong>
              {card.band9Phrase}
            </div>
          </div>
        )}

        {/* Footer Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: "16px",
            marginTop: "20px"
          }}
        >
          <span style={{ fontSize: "0.8rem", color: "var(--slate-400)", fontWeight: 600 }}>
            {isFlipped ? "Answer & Academic Lexicon Revealed" : "Test Your Memory & Analytical Precision"}
          </span>
          <div style={{ display: "flex", gap: "6px" }}>
            {FLASHCARDS.map((_, idx) => (
              <span
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                  setCurrentIdx(idx);
                }}
                style={{
                  width: idx === currentIdx ? "20px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  background: idx === currentIdx ? card.badgeColor : "var(--slate-200)",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
