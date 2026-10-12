import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, ArrowRight, HelpCircle, FileText } from "lucide-react";
import { modalBackdropVariants, modalDialogVariants, tactilePress } from "../../motion";

interface QuickJumpMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentStep: number;
  stepTitles: string[];
  onSelectStep: (step: number) => void;
  onOpenQuiz: () => void;
  onOpenReport: () => void;
}

export const QuickJumpMenu: React.FC<QuickJumpMenuProps> = ({
  isOpen,
  onClose,
  currentStep,
  stepTitles,
  onSelectStep,
  onOpenQuiz,
  onOpenReport
}) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={modalBackdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
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
              width: "min(94vw, 780px)",
              maxHeight: "88vh",
              padding: "30px 34px",
              display: "flex",
              flexDirection: "column",
              background: "#ffffff",
              border: "1.5px solid var(--border-default)",
              borderRadius: "20px",
              boxShadow: "var(--shadow-modal)"
            }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="quick-jump-title"
          >
            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
              <div>
                <h3 id="quick-jump-title" style={{ fontSize: "1.4rem", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--slate-900)" }}>
                  Classroom Stage Navigator
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--slate-500)", marginTop: "2px" }}>
                  Jump directly to any lesson stage or open auxiliary classroom tools.
                </p>
              </div>
              <motion.button
                whileTap={tactilePress}
                onClick={onClose}
                className="apple-touch-btn"
                style={{
                  width: "42px",
                  height: "42px",
                  padding: 0,
                  borderRadius: "50%",
                  background: "var(--slate-100)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--slate-700)"
                }}
                aria-label="Close Navigator (Esc)"
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* Stage Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "10px",
                overflowY: "auto",
                marginBottom: "20px",
                paddingRight: "6px"
              }}
            >
              {stepTitles.map((title, idx) => {
                const stepNum = idx + 1;
                const isCurrent = stepNum === currentStep;
                const isPassed = stepNum < currentStep;

                return (
                  <motion.button
                    key={stepNum}
                    whileTap={tactilePress}
                    onClick={() => {
                      onSelectStep(stepNum);
                      onClose();
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "14px 18px",
                      borderRadius: "14px",
                      border: isCurrent
                        ? "2px solid var(--slate-900)"
                        : "1.5px solid var(--border-subtle)",
                      background: isCurrent ? "#ffffff" : "var(--slate-50)",
                      boxShadow: isCurrent ? "var(--shadow-sm)" : "none",
                      textAlign: "left",
                      cursor: "pointer",
                      transition: "background 0.15s ease, border-color 0.15s ease"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "8px",
                          background: isCurrent ? "var(--slate-900)" : isPassed ? "#dcfce7" : "var(--slate-200)",
                          color: isCurrent ? "#ffffff" : isPassed ? "#15803d" : "var(--slate-700)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.86rem",
                          fontWeight: 800
                        }}
                      >
                        {isPassed ? <CheckCircle size={16} /> : stepNum}
                      </div>
                      <span style={{ fontSize: "0.95rem", fontWeight: isCurrent ? 750 : 600, color: "var(--slate-800)" }}>
                        {title}
                      </span>
                    </div>
                    <ArrowRight size={16} color={isCurrent ? "var(--slate-900)" : "var(--slate-400)"} />
                  </motion.button>
                );
              })}
            </div>

            {/* Quick Auxiliary Modules */}
            <div
              style={{
                borderTop: "1.5px solid var(--border-subtle)",
                paddingTop: "18px",
                display: "flex",
                gap: "12px"
              }}
            >
              <motion.button
                whileTap={tactilePress}
                onClick={() => {
                  onClose();
                  onOpenQuiz();
                }}
                className="apple-touch-btn secondary"
                style={{
                  flex: 1,
                  minHeight: "48px",
                  gap: "8px",
                  fontSize: "0.92rem",
                  fontWeight: 700,
                  borderRadius: "12px"
                }}
              >
                <HelpCircle size={18} color="var(--apple-blue)" />
                <span>Vocabulary Quiz</span>
              </motion.button>
              <motion.button
                whileTap={tactilePress}
                onClick={() => {
                  onClose();
                  onOpenReport();
                }}
                className="apple-touch-btn secondary"
                style={{
                  flex: 1,
                  minHeight: "48px",
                  gap: "8px",
                  fontSize: "0.92rem",
                  fontWeight: 700,
                  borderRadius: "12px"
                }}
              >
                <FileText size={18} color="#059669" />
                <span>Tutor Live Report</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
