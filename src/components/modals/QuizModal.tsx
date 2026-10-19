import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, HelpCircle, Volume2 } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";
import { TASK2_DATA } from "../../data/task2Data";
import { modalBackdropVariants, modalDialogVariants, tactilePress } from "../../motion";

import { ModuleType } from "../../types";

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentModule: ModuleType;
  onSpeak: (word: string) => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  isOpen,
  onClose,
  currentModule,
  onSpeak
}) => {
  const vocabList = currentModule === "task2" ? TASK2_DATA.vocabList : TASK1_DATA.vocabList;
  const [activeIdx, setActiveIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

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
    <motion.div
      variants={modalBackdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(15, 23, 42, 0.72)",
        padding: "24px"
      }}
      onClick={onClose}
    >
      <motion.div
        variants={modalDialogVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={{
          width: "min(94vw, 680px)",
          background: "#ffffff",
          borderRadius: "24px",
          border: "1px solid var(--border-default)",
          padding: "36px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          boxShadow: "var(--shadow-modal)"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: "var(--slate-900)",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <HelpCircle size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--slate-900)" }}>
                Interactive Vocabulary Quiz
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--slate-500)", marginTop: "2px" }}>
                Card {activeIdx + 1} of {vocabList.length} • Tap card to reveal definition
              </p>
            </div>
          </div>

          <motion.button
            whileTap={tactilePress}
            onClick={onClose}
            className="apple-touch-btn"
            style={{ width: "44px", height: "44px", padding: 0, borderRadius: "50%", background: "var(--slate-100)" }}
            aria-label="Close Quiz"
          >
            <X size={20} />
          </motion.button>
        </div>

        {/* Interactive Flashcard */}
        <motion.div
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsFlipped(!isFlipped)}
          style={{
            height: "240px",
            background: isFlipped ? "#eff6ff" : "var(--slate-50)",
            border: `1.5px solid ${isFlipped ? "#93c5fd" : "var(--border-subtle)"}`,
            borderRadius: "20px",
            padding: "28px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            cursor: "pointer",
            boxShadow: "var(--shadow-sm)",
            userSelect: "none"
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
                Definition & Context
              </span>
              <p style={{ fontSize: "1.15rem", fontWeight: 600, color: "var(--slate-800)", lineHeight: 1.5, marginBottom: "12px" }}>
                {currentVocab.meaning}
              </p>
              <p style={{ fontSize: "0.95rem", color: "var(--slate-600)", fontStyle: "italic" }}>
                "{currentVocab.example}"
              </p>
            </div>
          )}
        </motion.div>

        {/* Footer Controls */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <motion.button
            whileTap={tactilePress}
            onClick={() => onSpeak(currentVocab.word)}
            className="apple-touch-btn secondary"
            style={{ gap: "8px", minHeight: "48px" }}
          >
            <Volume2 size={18} />
            <span>Hear Pronunciation</span>
          </motion.button>

          <div style={{ display: "flex", gap: "10px" }}>
            <motion.button
              whileTap={tactilePress}
              onClick={handlePrev}
              className="apple-touch-btn secondary"
              style={{ minHeight: "48px", padding: "0 18px" }}
            >
              Previous
            </motion.button>
            <motion.button
              whileTap={tactilePress}
              onClick={handleNext}
              className="apple-touch-btn primary"
              style={{ minHeight: "48px", padding: "0 22px" }}
            >
              Next Card
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
