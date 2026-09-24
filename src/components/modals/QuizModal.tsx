import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, HelpCircle, CheckCircle, RotateCcw, Volume2 } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";
import { TASK2_DATA } from "../../data/task2Data";

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentModule: "task1" | "task2";
  onSpeak: (word: string) => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  isOpen,
  onClose,
  currentModule,
  onSpeak
}) => {
  const vocabList = currentModule === "task1" ? TASK1_DATA.vocabList : TASK2_DATA.vocabList;
  const [activeIdx, setActiveIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  if (!isOpen) return null;

  const currentVocab = vocabList[activeIdx];

  const handleNext = () => {
    setIsFlipped(false);
    setActiveIdx((prev) => (prev + 1) % vocabList.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setActiveIdx((prev) => (prev - 1 + vocabList.length) % vocabList.length);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(15, 23, 42, 0.45)",
        backdropFilter: "blur(18px)",
        padding: "24px"
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 16 }}
        className="glass-panel"
        style={{
          width: "min(94vw, 680px)",
          padding: "36px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          boxShadow: "0 25px 60px rgba(0,0,0,0.22)"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                background: "var(--slate-900)",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <HelpCircle size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700 }}>Interactive Vocabulary Quiz</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--slate-500)" }}>
                Card {activeIdx + 1} of {vocabList.length} • Tap card to reveal definition
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="apple-touch-btn"
            style={{ width: "40px", height: "40px", padding: 0, borderRadius: "50%", background: "var(--slate-100)" }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Interactive Flashcard */}
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          style={{
            height: "240px",
            background: isFlipped ? "#eff6ff" : "var(--slate-50)",
            border: `1.5px solid ${isFlipped ? "#bfdbfe" : "var(--border-subtle)"}`,
            borderRadius: "20px",
            padding: "28px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            cursor: "pointer",
            boxShadow: "var(--shadow-sm)",
            transition: "all 0.25s ease"
          }}
        >
          {!isFlipped ? (
            <div>
              <span className="apple-badge neutral" style={{ marginBottom: "14px" }}>
                Term to Define
              </span>
              <h2 style={{ fontSize: "2.4rem", fontWeight: 800, color: "var(--slate-900)", letterSpacing: "-0.02em" }}>
                {currentVocab.word}
              </h2>
              <p style={{ fontSize: "0.9rem", color: "var(--slate-500)", marginTop: "12px" }}>
                (Tap anywhere on this card to flip)
              </p>
            </div>
          ) : (
            <div>
              <span className="apple-badge accent" style={{ marginBottom: "14px" }}>
                Definition & Example
              </span>
              <p style={{ fontSize: "1.15rem", fontWeight: 600, color: "var(--slate-800)", lineHeight: 1.5, marginBottom: "12px" }}>
                {currentVocab.meaning}
              </p>
              <p style={{ fontSize: "0.95rem", color: "var(--slate-600)", fontStyle: "italic" }}>
                "{currentVocab.example}"
              </p>
            </div>
          )}
        </div>

        {/* Footer Controls */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button
            onClick={() => onSpeak(currentVocab.word)}
            className="apple-touch-btn secondary"
            style={{ gap: "8px", minHeight: "48px" }}
          >
            <Volume2 size={18} />
            <span>Hear Pronunciation</span>
          </button>

          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={handlePrev} className="apple-touch-btn secondary" style={{ minHeight: "48px", padding: "0 18px" }}>
              Previous
            </button>
            <button onClick={handleNext} className="apple-touch-btn primary" style={{ minHeight: "48px", padding: "0 22px" }}>
              Next Card
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
