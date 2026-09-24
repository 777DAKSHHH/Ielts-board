import React from "react";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

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
    <footer className="touch-dock glass-panel">
      {/* Previous Step Button */}
      <button
        onClick={onPrev}
        disabled={!canPrev}
        className="apple-touch-btn secondary"
        style={{
          minHeight: "52px",
          padding: "0 22px",
          gap: "8px",
          opacity: canPrev ? 1 : 0.45,
          cursor: canPrev ? "pointer" : "not-allowed"
        }}
      >
        <ChevronLeft size={20} />
        <span>Previous</span>
      </button>

      {/* Step Dot Indicators */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((stepNum) => {
          const isActive = stepNum === currentStep;
          const isPassed = stepNum < currentStep;

          return (
            <button
              key={stepNum}
              onClick={() => onSelectStep(stepNum)}
              title={`Go to Step ${stepNum}`}
              style={{
                width: isActive ? "32px" : "12px",
                height: "12px",
                borderRadius: "999px",
                background: isActive
                  ? "var(--slate-900)"
                  : isPassed
                  ? "var(--slate-400)"
                  : "var(--slate-200)",
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)"
              }}
            />
          );
        })}
      </div>

      {/* Next Step Button */}
      <button
        onClick={onNext}
        disabled={!canNext}
        className="apple-touch-btn primary"
        style={{
          minHeight: "52px",
          padding: "0 24px",
          gap: "8px",
          opacity: canNext ? 1 : 0.45,
          cursor: canNext ? "pointer" : "not-allowed"
        }}
      >
        <span>{currentStep === totalSteps ? "Finish Lesson" : "Next Step"}</span>
        {currentStep === totalSteps ? <CheckCircle2 size={20} /> : <ChevronRight size={20} />}
      </button>
    </footer>
  );
};
