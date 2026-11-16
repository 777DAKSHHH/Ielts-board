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
    <footer className="touch-dock liquid-glass-surface" role="navigation" aria-label="Lesson Stage Navigation Dock">
      {/* Previous Step Button */}
      <motion.button
        whileTap={canPrev ? tactilePress : undefined}
        onClick={onPrev}
        disabled={!canPrev}
        className="apple-touch-btn liquid-action-btn"
        style={{
          minHeight: "42px",
          padding: "0 18px",
          gap: "8px",
          fontSize: "0.88rem",
          fontWeight: 700,
          background: canPrev ? undefined : "rgba(241, 245, 249, 0.7)",
          color: canPrev ? "var(--slate-800)" : "var(--slate-400)",
          border: `1.5px solid ${canPrev ? "rgba(203, 213, 225, 0.8)" : "rgba(226, 232, 240, 0.6)"}`,
          borderRadius: "10px",
          cursor: canPrev ? "pointer" : "not-allowed"
        }}
        aria-label="Previous Lesson Step"
      >
        <ChevronLeft size={18} />
        <span>Previous</span>
      </motion.button>

      {/* Step Indicators: Tactile Interactive Bubble Pills */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: "rgba(241, 245, 249, 0.85)",
          padding: "6px 14px",
          borderRadius: "14px",
          border: "1.5px solid rgba(226, 232, 240, 0.8)",
          backdropFilter: "blur(8px)"
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
                width: isActive ? "34px" : "12px",
                height: "10px",
                borderRadius: "6px",
                border: "none",
                background: isActive
                  ? "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
                  : isPassed
                  ? "var(--slate-400)"
                  : "var(--slate-300)",
                boxShadow: isActive ? "0 2px 6px rgba(15, 23, 42, 0.3), inset 0 1px 0.5px rgba(255, 255, 255, 0.3)" : "none",
                cursor: "pointer",
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)"
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
          background: canNext
            ? "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
            : "rgba(241, 245, 249, 0.7)",
          color: canNext ? "#ffffff" : "var(--slate-400)",
          border: `1.5px solid ${canNext ? "#020617" : "rgba(226, 232, 240, 0.6)"}`,
          borderRadius: "10px",
          cursor: canNext ? "pointer" : "not-allowed",
          boxShadow: canNext ? "0 4px 14px -2px rgba(15, 23, 42, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.2)" : "none"
        }}
        aria-label={currentStep === totalSteps ? "Finish Lesson" : "Next Lesson Step"}
      >
        <span>{currentStep === totalSteps ? "Finish Lesson" : "Next Step"}</span>
        {currentStep === totalSteps ? <CheckCircle2 size={18} /> : <ChevronRight size={18} />}
      </motion.button>
    </footer>
  );
};
