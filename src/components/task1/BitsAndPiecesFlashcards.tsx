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
    question: "What are the three essential macro features that must appear in a Band 9 overview for this bar chart?",
    answerTitle: "1) Store CD Persistent Dominance, 2) Analog Obsolescence, 3) Digital Growth",
    bulletPoints: [
      "Retail store-bought CDs remained the principal profit generator across all three nations throughout the decade, despite heavy drops.",
      "Legacy analog formats (cassettes and vinyl) suffered total commercial obsolescence, collapsing to zero profit across the board.",
      "Digital channels (online CD purchases and internet downloads) experienced substantial expansion, with Germany consistently recording the highest profits."
    ],
    band9Phrase:
      "“Overall, retail store-bought compact discs remained the primary source of revenue in all three nations throughout the decade, despite experiencing marked contractions by 2007. Concurrently, legacy analog formats became completely obsolete, while digital distribution channels witnessed substantial growth, with Germany consistently generating the highest overall profits.”"
  },
  {
    id: 2,
    category: "Card 2: In-Store CDs Dynamic",
    badgeColor: "#4f46e5",
    question: "How should you contrast the numerical performance of shop-bought CDs between 1997 and 2007?",
    answerTitle: "Universal 30%–40% Contraction across All Nations, Yet Undisputed #1 Rank Preserved",
    bulletPoints: [
      "1997: Germany led at approximately 42 million euros (just exceeding the 40 million line), France recorded 25 million, and Italy generated just over 20 million (accounting for over 80% of total company profit).",
      "2007: Profits plummeted sharply—Germany fell to 25 million (-17m), France dropped to 15 million (-10m), and Italy contracted to 14 million (-6.5m).",
      "Key analytical contrast: Even after these steep declines, shop CDs remained larger than all other formats combined in each country."
    ],
    band9Phrase:
      "“Although shop-bought CDs suffered substantial contractions in all three territories—sliding from just above 40 million euros to 25 million in Germany, 15 million in France, and 14 million in Italy—this format remained the undisputed commercial backbone of SMG Entertainment.”"
  },
  {
    id: 3,
    category: "Card 3: Analog Cassettes & Vinyl Obsolescence",
    badgeColor: "#dc2626",
    question: "Why is it vital to report the 1997 figures for cassettes and vinyl rather than just saying they became zero?",
    answerTitle: "Band 9 Task Achievement Demands Contextualizing Initial Commercial Value Before Demise",
    bulletPoints: [
      "In 1997, cassettes were commercially active across all three markets: Italy led at 6 million euros, while Germany and France were tied at 5 million each.",
      "Vinyl singles and LPs contributed 3 million euros each in France and Italy, alongside 2 million in Germany.",
      "By 2007, both media were completely phased out, generating exactly 0 million euros across all three markets."
    ],
    band9Phrase:
      "“Cassettes, which had yielded 6 million euros in Italy and 5 million each in Germany and France in 1997, alongside vinyl returns of 3 million in France and Italy, were rendered completely obsolete, recording zero revenue across the board a decade later.”"
  },
  {
    id: 4,
    category: "Card 4: Emergence of Digital & Online Channels",
    badgeColor: "#16a34a",
    question: "How did internet downloads and online CD sales develop from 1997 to 2007?",
    answerTitle: "Emergence from Zero Baseline / Nominal Figures into Major Secondary Revenue Streams",
    bulletPoints: [
      "1997: Internet downloads were completely nonexistent (0 €m) across all three nations. Online CD orders were trivial (Germany €3m, France €1.5m, Italy 0).",
      "2007: Online CD orders surged to 8 million euros in Germany, 7 million in France, and 1.5 million in Italy.",
      "2007: Internet downloads emerged from a standing start to generate 5 million euros each in Germany and France, and 1.5 million in Italy."
    ],
    band9Phrase:
      "“Internet downloads emerged from a standing start of zero to generate 5 million euros apiece in Germany and France, while remote online CD orders multiplied to reach 8 million and 7 million euros respectively.”"
  },
  {
    id: 5,
    category: "Card 5: National Market Ranking & Agility",
    badgeColor: "#9333ea",
    question: "How did the total profitability and resilience of Germany, France, and Italy compare over the decade?",
    answerTitle: "Germany Dominant Leader, France Digitally Resilient, Italy Severely Contracted",
    bulletPoints: [
      "Germany: Market leader in total profit in both 1997 (~50m) and 2007 (~38m), dominating store CDs, online CDs, and downloads.",
      "France: Highly resilient (~27m total in both 1997 and 2007); losses in retail CDs (-10m) were offset by rapid gains in online CDs (+5.5m) and downloads (+5m).",
      "Italy: Sunk from ~29m down to ~17m (-41% drop); high initial dependence on cassettes/vinyl backfired when analog died, and digital adoption was sluggish."
    ],
    band9Phrase:
      "“Geographically, Germany stood out as the principal commercial engine throughout, whereas France demonstrated remarkable digital agility to maintain net revenue stability, in contrast to Italy which suffered a steep 41% profit collapse.”"
  },
  {
    id: 6,
    category: "Card 6: Exam Pitfalls & Band 9 Precautions",
    badgeColor: "#ea580c",
    isWarning: true,
    question: "What are the most frequent examiner-penalized mistakes in this SMG Entertainment task?",
    answerTitle: "Unit Omissions, Misreporting Zero Baselines, and Neglecting National Comparisons",
    bulletPoints: [
      "Unit Error: Failing to specify 'million euros (€m)' in the body paragraphs (saying just '40' or 'euros' without 'million').",
      "Baseline Error: Claiming internet downloads 'decreased' or 'changed little'—they were zero in 1997 and emerged brand new in 2007.",
      "Obsolescence Error: Ignoring the zero values in 2007 for cassettes and vinyl; examiners test your ability to report complete market extinction.",
      "Grouping Error: Writing a separate paragraph for each of the 5 formats without synthesizing comparisons between countries or years."
    ],
    band9Phrase:
      "“Band 9 Criterion: Grouping data chronologically (1997 baseline vs. 2007 shift) or structurally (physical/analog vs. digital/online) with accurate units and explicit comparisons.”"
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

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%", alignItems: "center" }}>
      {/* Header Info */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", flexWrap: "wrap", gap: "8px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Sparkles size={18} color="var(--apple-blue)" />
          <span style={{ fontSize: "0.88rem", fontWeight: 800, color: "var(--slate-900)" }}>
            SMG Entertainment Interactive Flashcard Deck
          </span>
        </div>
        <span className="apple-badge neutral" style={{ fontWeight: 750 }}>
          Card {currentIdx + 1} of {FLASHCARDS.length}
        </span>
      </div>

      {/* Main Tactile Flashcard */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        style={{
          width: "100%",
          maxWidth: "760px",
          minHeight: "360px",
          background: isFlipped ? "#ffffff" : "var(--slate-50)",
          border: `2px solid ${card.isWarning ? "#fca5a5" : card.badgeColor}`,
          borderRadius: "22px",
          padding: "26px 30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          cursor: "pointer",
          boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
          transition: "all 0.2s ease"
        }}
      >
        {/* Card Top Label */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span
            style={{
              fontSize: "0.76rem",
              fontWeight: 800,
              padding: "4px 10px",
              borderRadius: "8px",
              background: isFlipped ? "var(--slate-100)" : card.badgeColor,
              color: isFlipped ? "var(--slate-800)" : "#ffffff"
            }}
          >
            {card.category}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.78rem", color: "var(--slate-500)", fontWeight: 650 }}>
            <RotateCw size={13} /> Tap card to flip
          </div>
        </div>

        {/* Card Body Content (Front vs Back) */}
        {!isFlipped ? (
          /* FRONT: QUESTION */
          <div style={{ margin: "auto 0", display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--slate-500)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Key Analytical Challenge:
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 850, color: "var(--slate-900)", lineHeight: 1.4, margin: 0 }}>
              {card.question}
            </h3>
            <div style={{ fontSize: "0.88rem", color: "var(--slate-600)" }}>
              Tap anywhere on this card to reveal the Band 9 deduction and phrasing.
            </div>
          </div>
        ) : (
          /* BACK: ANSWER & BAND 9 FORMULA */
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", margin: "auto 0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {card.isWarning ? (
                <AlertTriangle size={20} color="#dc2626" />
              ) : (
                <CheckCircle2 size={20} color={card.badgeColor} />
              )}
              <h4 style={{ fontSize: "1.08rem", fontWeight: 850, color: "var(--slate-900)", margin: 0 }}>
                {card.answerTitle}
              </h4>
            </div>

            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.88rem", color: "var(--slate-700)", lineHeight: 1.5 }}>
              {card.bulletPoints.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>

            <div
              style={{
                background: "var(--slate-50)",
                borderRadius: "10px",
                padding: "12px 14px",
                border: "1px solid var(--border-subtle)",
                fontSize: "0.84rem",
                color: "var(--slate-800)",
                lineHeight: 1.5
              }}
            >
              <strong style={{ color: card.badgeColor }}>Band 9 Model Sentence:</strong> {card.band9Phrase}
            </div>
          </div>
        )}

        {/* Bottom Helper */}
        <div style={{ fontSize: "0.75rem", color: "var(--slate-400)", textAlign: "center" }}>
          Showing {isFlipped ? "Band 9 Answer & Sentence Model" : "Exam Inquiry Question"}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <motion.button
          whileTap={tactilePress}
          onClick={handlePrev}
          className="apple-touch-btn secondary"
          style={{ minHeight: "42px", padding: "0 18px", fontWeight: 700, gap: "6px" }}
        >
          <ChevronLeft size={16} /> Previous Card
        </motion.button>

        <motion.button
          whileTap={tactilePress}
          onClick={handleNext}
          className="apple-touch-btn primary"
          style={{ minHeight: "42px", padding: "0 22px", fontWeight: 700, gap: "6px" }}
        >
          Next Card <ChevronRight size={16} />
        </motion.button>
      </div>
    </div>
  );
};
