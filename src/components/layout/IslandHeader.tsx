import React from "react";
import { Clock, LockKeyhole, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";
import { tactilePress } from "../../motion";
import { SmartBoardDisplayControl } from "./SmartBoardDisplayControl";
import { BoardScaleHook } from "../../hooks/useBoardScale";

import { ModuleType } from "../../types";

interface IslandHeaderProps {
  currentModule: ModuleType;
  onSelectModule: (mod: ModuleType) => void;
  currentStep: number;
  totalSteps: number;
  stepTitle: string;
  onOpenQuickJump: () => void;
  onLock: () => void;
  formattedTime: string;
  isTimerRunning: boolean;
  onTimerToggle: () => void;
  boardScale: BoardScaleHook;
  originModuleForNuance?: "task1" | "task2";
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
  boardScale,
  originModuleForNuance = "task1"
}) => {
  const progressPercent = Math.round((currentStep / totalSteps) * 100);

  return (
    <header className="island-header liquid-glass-surface">
      {/* Left: Tactile Module Switcher & Active Stage Info */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        {/* Module Switcher Tabs (ReactDrops Fluid Bubble UI) */}
        <div
          className="liquid-bubble-track"
          role="tablist"
          aria-label="IELTS Module Selector"
        >
          <button
            onClick={() => onSelectModule("task1")}
            role="tab"
            aria-selected={currentModule === "task1"}
            className="liquid-bubble-btn"
            style={{
              color: currentModule === "task1" ? "#ffffff" : "var(--slate-600)"
            }}
          >
            {currentModule === "task1" && (
              <motion.div
                layoutId="bubble-active-module"
                className="liquid-bubble-active-pill"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span style={{ position: "relative", zIndex: 1 }}>Task 1 (Academic)</span>
          </button>
          <button
            onClick={() => onSelectModule("task2")}
            role="tab"
            aria-selected={currentModule === "task2"}
            className="liquid-bubble-btn"
            style={{
              color: currentModule === "task2" ? "#ffffff" : "var(--slate-600)"
            }}
          >
            {currentModule === "task2" && (
              <motion.div
                layoutId="bubble-active-module"
                className="liquid-bubble-active-pill"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span style={{ position: "relative", zIndex: 1 }}>Task 2 (Essay)</span>
          </button>
        </div>

        {/* Quick Return Pill when viewing Extension Modules */}
        {currentModule === "general1" && (
          <motion.button
            whileTap={tactilePress}
            onClick={() => onSelectModule("task1")}
            style={{
              minHeight: "34px",
              padding: "0 13px",
              borderRadius: "8px",
              fontSize: "0.80rem",
              fontWeight: 750,
              color: "#1d4ed8",
              background: "#eff6ff",
              border: "1.5px solid #bfdbfe",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}
            title="Return to Academic Task 1 Step 8"
          >
            <span>← Return to Step 8</span>
          </motion.button>
        )}

        {currentModule === "confusedWords" && (
          <motion.button
            whileTap={tactilePress}
            onClick={() => onSelectModule(originModuleForNuance || "task1")}
            style={{
              minHeight: "34px",
              padding: "0 13px",
              borderRadius: "8px",
              fontSize: "0.80rem",
              fontWeight: 750,
              color: originModuleForNuance === "task2" ? "#7c3aed" : "#1d4ed8",
              background: originModuleForNuance === "task2" ? "#faf5ff" : "#eff6ff",
              border: originModuleForNuance === "task2" ? "1.5px solid #ddd6fe" : "1.5px solid #bfdbfe",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}
            title={`Return to ${originModuleForNuance === "task2" ? "Task 2 Step 9" : "Task 1 Step 8"}`}
          >
            <span>← Return to {originModuleForNuance === "task2" ? "Task 2 (Step 9)" : "Task 1 (Step 8)"}</span>
          </motion.button>
        )}

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
              fontSize: "0.78rem",
              fontWeight: 800
            }}
          >
            {currentModule === "general1" ? "GT" : currentModule === "confusedWords" ? "NL" : currentStep}
          </div>
          <div>
            <div style={{ fontSize: "0.92rem", fontWeight: 750, color: "var(--slate-900)", lineHeight: 1.2 }}>
              {currentModule === "general1"
                ? "General Training Task 1 (Letter)"
                : currentModule === "confusedWords"
                ? "English Nuance Lab • Episode 01"
                : stepTitle}
            </div>
            <div style={{ fontSize: "0.74rem", color: "var(--slate-500)", fontWeight: 600 }}>
              {currentModule === "general1"
                ? "Informal 5-Paragraph Architectural Rules"
                : currentModule === "confusedWords"
                ? "Below vs. Under vs. Underneath • Commonly Confused Words"
                : `Step ${currentStep} of ${totalSteps}`}
            </div>
          </div>
        </div>
      </div>

      {/* Center: Slim Progress Indicator */}
      <div style={{ width: "20%", minWidth: "140px", display: "flex", alignItems: "center", gap: "10px" }}>
        {currentModule === "task1" || currentModule === "task2" ? (
          <>
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
          </>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ fontSize: "0.76rem", fontWeight: 750, background: "#f0fdf4", color: "#16a34a", padding: "3px 10px", borderRadius: "8px", border: "1px solid #bbf7d0" }}>
              ✓ Dedicated Standalone Page
            </span>
          </div>
        )}
      </div>

      {/* Right Controls: Board Scale Stepper, Tactile Timer, Stage Menu, Lock */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {/* Senses Smart Board Display Scale & Clarity Tool */}
        <SmartBoardDisplayControl boardScale={boardScale} />

        {/* Quick Focus Timer */}
        <motion.button
          whileTap={tactilePress}
          onClick={onTimerToggle}
          className="apple-touch-btn liquid-action-btn"
          style={{
            minHeight: "38px",
            padding: "0 14px",
            background: isTimerRunning ? "#fef2f2" : undefined,
            color: isTimerRunning ? "var(--apple-red)" : "var(--slate-800)",
            borderColor: isTimerRunning ? "#f87171" : undefined,
            borderRadius: "10px",
            fontSize: "0.84rem",
            fontWeight: 750,
            gap: "7px"
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
          className="apple-touch-btn liquid-action-btn"
          style={{
            minHeight: "38px",
            padding: "0 14px",
            fontSize: "0.84rem",
            fontWeight: 700,
            gap: "7px",
            color: "var(--slate-800)",
            borderRadius: "10px"
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
          className="apple-touch-btn liquid-action-btn"
          style={{
            minHeight: "38px",
            width: "38px",
            padding: 0,
            color: "var(--slate-600)",
            borderRadius: "10px"
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
