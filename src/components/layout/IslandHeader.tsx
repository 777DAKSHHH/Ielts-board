import React from "react";
import { Layers, Clock, LockKeyhole, LayoutGrid } from "lucide-react";

interface IslandHeaderProps {
  currentModule: "task1" | "task2";
  onSelectModule: (mod: "task1" | "task2") => void;
  currentStep: number;
  totalSteps: number;
  stepTitle: string;
  onOpenQuickJump: () => void;
  onLock: () => void;
  formattedTime: string;
  isTimerRunning: boolean;
  onTimerToggle: () => void;
}

export const IslandHeader: React.FC<IslandHeaderProps> = ({
  currentModule,
  onSelectModule,
  currentStep,
  totalSteps,
  stepTitle,
  onOpenQuickJump,
  onLock,
  formattedTime,
  isTimerRunning,
  onTimerToggle
}) => {
  const progressPercent = Math.round((currentStep / totalSteps) * 100);

  return (
    <header className="island-header glass-panel">
      {/* Left: Apple-Style Module Switcher */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div
          style={{
            display: "inline-flex",
            padding: "4px",
            background: "var(--slate-100)",
            borderRadius: "14px",
            border: "1px solid var(--border-subtle)"
          }}
        >
          <button
            onClick={() => onSelectModule("task1")}
            style={{
              padding: "8px 18px",
              borderRadius: "10px",
              fontSize: "0.95rem",
              fontWeight: 600,
              color: currentModule === "task1" ? "var(--slate-900)" : "var(--slate-500)",
              background: currentModule === "task1" ? "#ffffff" : "transparent",
              boxShadow: currentModule === "task1" ? "0 2px 8px rgba(0,0,0,0.06)" : "none",
              transition: "all 0.15s ease"
            }}
          >
            Task 1 Report
          </button>
          <button
            onClick={() => onSelectModule("task2")}
            style={{
              padding: "8px 18px",
              borderRadius: "10px",
              fontSize: "0.95rem",
              fontWeight: 600,
              color: currentModule === "task2" ? "var(--slate-900)" : "var(--slate-500)",
              background: currentModule === "task2" ? "#ffffff" : "transparent",
              boxShadow: currentModule === "task2" ? "0 2px 8px rgba(0,0,0,0.06)" : "none",
              transition: "all 0.15s ease"
            }}
          >
            Task 2 Essay
          </button>
        </div>

        {/* Step Pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            paddingLeft: "6px",
            borderLeft: "1px solid var(--border-subtle)"
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "999px",
              background: "var(--slate-900)",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.9rem",
              fontWeight: 700
            }}
          >
            {currentStep}
          </div>
          <div>
            <div style={{ fontSize: "1.02rem", fontWeight: 700, color: "var(--slate-900)", lineHeight: 1.2 }}>
              {stepTitle}
            </div>
            <div style={{ fontSize: "0.78rem", color: "var(--slate-500)", fontWeight: 500 }}>
              Step {currentStep} of {totalSteps}
            </div>
          </div>
        </div>
      </div>

      {/* Center: Slim Progress Bar */}
      <div style={{ width: "24%", display: "flex", alignItems: "center", gap: "12px" }}>
        <div
          style={{
            flex: 1,
            height: "8px",
            background: "var(--slate-200)",
            borderRadius: "999px",
            overflow: "hidden"
          }}
        >
          <div
            style={{
              width: `${progressPercent}%`,
              height: "100%",
              background: "var(--slate-900)",
              borderRadius: "999px",
              transition: "width 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
            }}
          />
        </div>
        <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--slate-500)", minWidth: "36px" }}>
          {progressPercent}%
        </span>
      </div>

      {/* Right Controls: Quick Timer Badge, Stage Menu, Lock */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {/* Quick Focus Timer */}
        <button
          onClick={onTimerToggle}
          className="apple-touch-btn"
          style={{
            minHeight: "44px",
            padding: "0 14px",
            background: isTimerRunning ? "#fee2e2" : "var(--slate-100)",
            color: isTimerRunning ? "var(--apple-red)" : "var(--slate-700)",
            border: isTimerRunning ? "1px solid #fca5a5" : "1px solid var(--border-subtle)",
            fontSize: "0.95rem",
            gap: "8px"
          }}
          title="Toggle 3-min countdown timer"
        >
          <Clock size={18} />
          <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}>{formattedTime}</span>
        </button>

        {/* Quick Jump Drawer Button */}
        <button
          onClick={onOpenQuickJump}
          className="apple-touch-btn secondary"
          style={{ minHeight: "44px", padding: "0 14px", fontSize: "0.95rem", gap: "8px" }}
          title="Jump directly to any step"
        >
          <LayoutGrid size={18} />
          <span>Stages</span>
        </button>

        {/* Lock Screen */}
        <button
          onClick={onLock}
          className="apple-touch-btn"
          style={{
            minHeight: "44px",
            width: "44px",
            padding: 0,
            background: "var(--slate-100)",
            color: "var(--slate-600)",
            border: "1px solid var(--border-subtle)"
          }}
          title="Lock Workstation"
        >
          <LockKeyhole size={18} />
        </button>
      </div>
    </header>
  );
};
