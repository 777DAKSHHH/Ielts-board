import React from "react";
import { Clock, LockKeyhole, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";
import { tactilePress } from "../../motion";
import { SmartBoardDisplayControl } from "./SmartBoardDisplayControl";
import { BoardScaleHook } from "../../hooks/useBoardScale";

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
  boardScale: BoardScaleHook;
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
  onTimerToggle,
  boardScale
}) => {
  const progressPercent = Math.round((currentStep / totalSteps) * 100);

  return (
    <header className="island-header">
      {/* Left: Tactile Module Switcher & Active Stage Info */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        {/* Module Switcher Tabs */}
        <div
          style={{
            display: "inline-flex",
            padding: "3px",
            background: "var(--slate-100)",
            borderRadius: "10px",
            border: "1.5px solid var(--border-subtle)"
          }}
          role="tablist"
          aria-label="IELTS Module Selector"
        >
          <motion.button
            whileTap={tactilePress}
            onClick={() => onSelectModule("task1")}
            role="tab"
            aria-selected={currentModule === "task1"}
            style={{
              minHeight: "36px",
              padding: "0 14px",
              borderRadius: "8px",
              fontSize: "0.84rem",
              fontWeight: 750,
              color: currentModule === "task1" ? "#ffffff" : "var(--slate-600)",
              background: currentModule === "task1" ? "var(--slate-900)" : "transparent",
              boxShadow: currentModule === "task1" ? "var(--shadow-xs)" : "none",
              border: "none",
              cursor: "pointer",
              transition: "color 0.15s ease, background 0.15s ease"
            }}
          >
            Task 1 (Academic)
          </motion.button>
          <motion.button
            whileTap={tactilePress}
            onClick={() => onSelectModule("task2")}
            role="tab"
            aria-selected={currentModule === "task2"}
            style={{
              minHeight: "36px",
              padding: "0 14px",
              borderRadius: "8px",
              fontSize: "0.84rem",
              fontWeight: 750,
              color: currentModule === "task2" ? "#ffffff" : "var(--slate-600)",
              background: currentModule === "task2" ? "var(--slate-900)" : "transparent",
              boxShadow: currentModule === "task2" ? "var(--shadow-xs)" : "none",
              border: "none",
              cursor: "pointer",
              transition: "color 0.15s ease, background 0.15s ease"
            }}
          >
            Task 2 (Essay)
          </motion.button>
        </div>

        {/* Stage Pill & Title */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            paddingLeft: "10px",
            borderLeft: "1.5px solid var(--border-subtle)"
          }}
        >
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "8px",
              background: "var(--slate-900)",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.82rem",
              fontWeight: 800
            }}
          >
            {currentStep}
          </div>
          <div>
            <div style={{ fontSize: "0.92rem", fontWeight: 750, color: "var(--slate-900)", lineHeight: 1.2 }}>
              {stepTitle}
            </div>
            <div style={{ fontSize: "0.74rem", color: "var(--slate-500)", fontWeight: 600 }}>
              Step {currentStep} of {totalSteps}
            </div>
          </div>
        </div>
      </div>

      {/* Center: Slim Progress Indicator */}
      <div style={{ width: "22%", minWidth: "140px", display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            flex: 1,
            height: "6px",
            background: "var(--slate-100)",
            borderRadius: "999px",
            overflow: "hidden",
            border: "1px solid var(--border-subtle)"
          }}
        >
          <div
            style={{
              width: `${progressPercent}%`,
              height: "100%",
              background: "var(--apple-blue)",
              borderRadius: "999px",
              transition: "width 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
            }}
          />
        </div>
        <span style={{ fontSize: "0.78rem", fontWeight: 750, color: "var(--slate-600)", minWidth: "34px", textAlign: "right" }}>
          {progressPercent}%
        </span>
      </div>

      {/* Right Controls: Board Scale Stepper, Tactile Timer, Stage Menu, Lock */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {/* Senses Smart Board Display Scale & Clarity Tool */}
        <SmartBoardDisplayControl boardScale={boardScale} />

        {/* Quick Focus Timer */}
        <motion.button
          whileTap={tactilePress}
          onClick={onTimerToggle}
          className="apple-touch-btn"
          style={{
            minHeight: "38px",
            padding: "0 14px",
            background: isTimerRunning ? "#fef2f2" : "#ffffff",
            color: isTimerRunning ? "var(--apple-red)" : "var(--slate-800)",
            border: `1.5px solid ${isTimerRunning ? "#f87171" : "var(--border-default)"}`,
            borderRadius: "10px",
            fontSize: "0.84rem",
            fontWeight: 750,
            gap: "7px",
            boxShadow: "var(--shadow-xs)"
          }}
          title={isTimerRunning ? "Pause Countdown" : "Start 3-Minute Countdown"}
        >
          <Clock size={16} />
          <span style={{ fontFamily: "var(--font-mono)", fontWeight: 800 }}>{formattedTime}</span>
        </motion.button>

        {/* Quick Jump Drawer Button */}
        <motion.button
          whileTap={tactilePress}
          onClick={onOpenQuickJump}
          className="apple-touch-btn"
          style={{
            minHeight: "38px",
            padding: "0 14px",
            fontSize: "0.84rem",
            fontWeight: 700,
            gap: "7px",
            background: "#ffffff",
            color: "var(--slate-800)",
            border: "1.5px solid var(--border-default)",
            borderRadius: "10px",
            boxShadow: "var(--shadow-xs)"
          }}
          title="Jump directly to any lesson stage"
        >
          <LayoutGrid size={16} />
          <span>Stages</span>
        </motion.button>

        {/* Lock Screen */}
        <motion.button
          whileTap={tactilePress}
          onClick={onLock}
          className="apple-touch-btn"
          style={{
            minHeight: "38px",
            width: "38px",
            padding: 0,
            background: "#ffffff",
            color: "var(--slate-600)",
            border: "1.5px solid var(--border-default)",
            borderRadius: "10px",
            boxShadow: "var(--shadow-xs)"
          }}
          title="Lock Workstation"
          aria-label="Lock Workstation"
        >
          <LockKeyhole size={16} />
        </motion.button>
      </div>
    </header>
  );
};
