import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, ArrowRight, HelpCircle, FileText, QrCode } from "lucide-react";

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
  return (
    <AnimatePresence>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(15, 23, 42, 0.4)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            padding: "24px"
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 14 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
            className="glass-panel"
            style={{
              width: "min(94vw, 760px)",
              maxHeight: "88vh",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 25px 60px rgba(0,0,0,0.2)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
              <div>
                <h3 style={{ fontSize: "1.45rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
                  Classroom Stage Navigator
                </h3>
                <p style={{ fontSize: "0.92rem", color: "var(--slate-500)", marginTop: "2px" }}>
                  Jump directly to any lesson stage or open auxiliary classroom tools.
                </p>
              </div>
              <button
                onClick={onClose}
                className="apple-touch-btn"
                style={{ width: "42px", height: "42px", padding: 0, borderRadius: "50%", background: "var(--slate-100)" }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Stage Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "12px",
                overflowY: "auto",
                marginBottom: "24px",
                paddingRight: "6px"
              }}
            >
              {stepTitles.map((title, idx) => {
                const stepNum = idx + 1;
                const isCurrent = stepNum === currentStep;
                const isPassed = stepNum < currentStep;

                return (
                  <button
                    key={stepNum}
                    onClick={() => {
                      onSelectStep(stepNum);
                      onClose();
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "16px 20px",
                      borderRadius: "16px",
                      border: isCurrent ? "2px solid var(--slate-900)" : "1px solid var(--border-subtle)",
                      background: isCurrent ? "#ffffff" : "var(--slate-50)",
                      boxShadow: isCurrent ? "var(--shadow-md)" : "none",
                      textAlign: "left",
                      transition: "transform 0.1s ease, border-color 0.15s ease"
                    }}
                    onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.98)")}
                    onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                      <div
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "10px",
                          background: isCurrent ? "var(--slate-900)" : isPassed ? "#dcfce7" : "var(--slate-200)",
                          color: isCurrent ? "#ffffff" : isPassed ? "#15803d" : "var(--slate-700)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.9rem",
                          fontWeight: 700
                        }}
                      >
                        {isPassed ? <CheckCircle size={18} /> : stepNum}
                      </div>
                      <span style={{ fontSize: "1rem", fontWeight: isCurrent ? 700 : 600, color: "var(--slate-800)" }}>
                        {title}
                      </span>
                    </div>
                    <ArrowRight size={16} color={isCurrent ? "var(--slate-900)" : "var(--slate-400)"} />
                  </button>
                );
              })}
            </div>

            {/* Quick Auxiliary Modules */}
            <div
              style={{
                borderTop: "1px solid var(--border-subtle)",
                paddingTop: "20px",
                display: "flex",
                gap: "14px"
              }}
            >
              <button
                onClick={() => {
                  onClose();
                  onOpenQuiz();
                }}
                className="apple-touch-btn secondary"
                style={{ flex: 1, minHeight: "50px", gap: "8px", fontSize: "0.95rem" }}
              >
                <HelpCircle size={18} />
                <span>Vocabulary Quiz</span>
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenReport();
                }}
                className="apple-touch-btn secondary"
                style={{ flex: 1, minHeight: "50px", gap: "8px", fontSize: "0.95rem" }}
              >
                <FileText size={18} />
                <span>Tutor Live Report</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
