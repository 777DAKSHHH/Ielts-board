import React from "react";
import { Clock, LockKeyhole, LayoutGrid } from "lucide-react";

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
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div
          style={{
            display: "inline-flex",
            padding: "2px",
            background: "var(--slate-100)",
            borderRadius: "10px",
            border: "1px solid var(--border-subtle)"
          }}
        >
          <button
            onClick={() => onSelectModule("task1")}
            style={{
              padding: "4px 12px",
              borderRadius: "8px",
              fontSize: "0.82rem",
              fontWeight: 650,
              color: currentModule === "task1" ? "var(--slate-900)" : "var(--slate-500)",
              background: currentModule === "task1" ? "#ffffff" : "transparent",
              boxShadow: currentModule === "task1" ? "0 1px 4px rgba(0,0,0,0.06)" : "none",
              transition: "all 0.15s ease"
            }}
          >
            Task 1
          </button>
          <button
            onClick={() => onSelectModule("task2")}
            style={{
              padding: "4px 12px",
              borderRadius: "8px",
              fontSize: "0.82rem",
              fontWeight: 650,
              color: currentModule === "task2" ? "var(--slate-900)" : "var(--slate-500)",
              background: currentModule === "task2" ? "#ffffff" : "transparent",
              boxShadow: currentModule === "task2" ? "0 1px 4px rgba(0,0,0,0.06)" : "none",
              transition: "all 0.15s ease"
            }}
          >
            Task 2
          </button>
        </div>

        {/* Step Pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            paddingLeft: "6px",
            borderLeft: "1px solid var(--border-subtle)"
          }}
        >
          <div
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "999px",
              background: "var(--slate-900)",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.78rem",
              fontWeight: 700
            }}
          >
            {currentStep}
          </div>
          <div>
            <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--slate-900)", lineHeight: 1.15 }}>
              {stepTitle}
            </div>
            <div style={{ fontSize: "0.72rem", color: "var(--slate-500)", fontWeight: 500 }}>
              Step {currentStep} / {totalSteps}
            </div>
          </div>
        </div>
      </div>

      {/* Center: Slim Progress Bar */}
      <div style={{ width: "20%", display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            flex: 1,
            height: "5px",
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
        <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--slate-500)", minWidth: "30px" }}>
          {progressPercent}%
        </span>
      </div>

      {/* Right Controls: Quick Timer Badge, Stage Menu, Lock */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {/* Quick Focus Timer */}
        <button
          onClick={onTimerToggle}
          className="apple-touch-btn"
          style={{
            minHeight: "34px",
            padding: "0 10px",
            background: isTimerRunning ? "#fee2e2" : "var(--slate-100)",
            color: isTimerRunning ? "var(--apple-red)" : "var(--slate-700)",
            border: isTimerRunning ? "1px solid #fca5a5" : "1px solid var(--border-subtle)",
            fontSize: "0.82rem",
            gap: "6px"
          }}
          title="Toggle 3-min countdown timer"
        >
          <Clock size={15} />
          <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}>{formattedTime}</span>
        </button>

        {/* Quick Jump Drawer Button */}
        <button
          onClick={onOpenQuickJump}
          className="apple-touch-btn secondary"
          style={{ minHeight: "34px", padding: "0 10px", fontSize: "0.82rem", gap: "6px" }}
          title="Jump directly to any step"
        >
          <LayoutGrid size={15} />
          <span>Stages</span>
        </button>

        {/* Lock Screen */}
        <button
          onClick={onLock}
          className="apple-touch-btn"
          style={{
            minHeight: "34px",
            width: "34px",
            padding: 0,
            background: "var(--slate-100)",
            color: "var(--slate-600)",
            border: "1px solid var(--border-subtle)"
          }}
          title="Lock Workstation"
        >
          <LockKeyhole size={15} />
        </button>
      </div>
    </header>
  );
};
