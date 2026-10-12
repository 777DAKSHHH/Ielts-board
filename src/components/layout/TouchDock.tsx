import React from "react";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { tactilePress } from "../../motion";

interface TouchDockProps {
  currentStep: number;
  totalSteps: number;
  onPrev: () => void;
  onNext: () => void;
  onSelectStep: (step: number) => void;
  canPrev: boolean;
  canNext: boolean;
}

export const TouchDock: React.FC<TouchDockProps> = ({
  currentStep,
  totalSteps,
  onPrev,
  onNext,
  onSelectStep,
  canPrev,
  canNext
}) => {
  return (
    <footer className="touch-dock" role="navigation" aria-label="Lesson Stage Navigation Dock">
      {/* Previous Step Button */}
      <motion.button
        whileTap={canPrev ? tactilePress : undefined}
        onClick={onPrev}
        disabled={!canPrev}
        className="apple-touch-btn"
        style={{
          minHeight: "42px",
          padding: "0 18px",
          gap: "8px",
          fontSize: "0.88rem",
          fontWeight: 700,
          background: canPrev ? "#ffffff" : "var(--slate-100)",
          color: canPrev ? "var(--slate-800)" : "var(--slate-400)",
          border: `1.5px solid ${canPrev ? "var(--border-default)" : "var(--border-subtle)"}`,
          borderRadius: "10px",
          cursor: canPrev ? "pointer" : "not-allowed",
          boxShadow: canPrev ? "var(--shadow-xs)" : "none"
        }}
        aria-label="Previous Lesson Step"
      >
        <ChevronLeft size={18} />
        <span>Previous</span>
      </motion.button>

      {/* Step Indicators: Tactile Interactive Pills */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: "var(--slate-100)",
          padding: "5px 12px",
          borderRadius: "12px",
          border: "1px solid var(--border-subtle)"
        }}
      >
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((stepNum) => {
          const isActive = stepNum === currentStep;
          const isPassed = stepNum < currentStep;

          return (
            <motion.button
              key={stepNum}
              whileTap={tactilePress}
              onClick={() => onSelectStep(stepNum)}
              title={`Jump to Step ${stepNum}`}
              aria-label={`Step ${stepNum} of ${totalSteps}${isActive ? " (Current)" : isPassed ? " (Completed)" : ""}`}
              style={{
                width: isActive ? "32px" : "12px",
                height: "10px",
                borderRadius: "6px",
                border: "none",
                background: isActive
                  ? "var(--slate-900)"
                  : isPassed
                  ? "var(--slate-400)"
                  : "var(--slate-300)",
                cursor: "pointer",
                transition: "all 0.22s cubic-bezier(0.16, 1, 0.3, 1)"
              }}
            />
          );
        })}
      </div>

      {/* Next Step Button */}
      <motion.button
        whileTap={canNext ? tactilePress : undefined}
        onClick={onNext}
        disabled={!canNext}
        className="apple-touch-btn"
        style={{
          minHeight: "42px",
          padding: "0 20px",
          gap: "8px",
          fontSize: "0.88rem",
          fontWeight: 750,
          background: canNext ? "var(--slate-900)" : "var(--slate-100)",
          color: canNext ? "#ffffff" : "var(--slate-400)",
          border: `1.5px solid ${canNext ? "var(--slate-950)" : "var(--border-subtle)"}`,
          borderRadius: "10px",
          cursor: canNext ? "pointer" : "not-allowed",
          boxShadow: canNext ? "var(--shadow-sm)" : "none"
        }}
        aria-label={currentStep === totalSteps ? "Finish Lesson" : "Next Lesson Step"}
      >
        <span>{currentStep === totalSteps ? "Finish Lesson" : "Next Step"}</span>
        {currentStep === totalSteps ? <CheckCircle2 size={18} /> : <ChevronRight size={18} />}
      </motion.button>
    </footer>
  );
};
