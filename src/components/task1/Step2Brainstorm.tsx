import React from "react";
import { FileText, GitBranch, Clock3 } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";
import { TouchTimer } from "../common/TouchTimer";

interface Step2BrainstormProps {
  formattedTime: string;
  isRunning: boolean;
  isFinished: boolean;
  onTimerToggle: () => void;
  onTimerReset: () => void;
}

export const Step2Brainstorm: React.FC<Step2BrainstormProps> = ({
  formattedTime,
  isRunning,
  isFinished,
  onTimerToggle,
  onTimerReset
}) => {
  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 02 / 08 • Task Prompt & Process Analysis
        </span>
        <h2 className="stage-title">Read the Task and Map the Process</h2>
        <p className="stage-subtitle">
          Identify the process type, the shared pulp-making stage, the branching point and the two production routes before writing.
        </p>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <TouchTimer
          formattedTime={formattedTime}
          isRunning={isRunning}
          isFinished={isFinished}
          onToggle={onTimerToggle}
          onReset={onTimerReset}
          instruction="Focus Timer: identify the start, shared stages, branching point and two final outcomes."
        />
      </div>

      <div className="stage-grid-2col" style={{ alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ background: "var(--slate-50)", border: "1.5px solid var(--border-subtle)", borderRadius: "20px", padding: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <FileText size={20} color="var(--slate-800)" />
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--slate-900)" }}>IELTS Academic Writing Task 1</h4>
            </div>
            <div style={{ background: "#ffffff", border: "1px solid var(--border-subtle)", borderRadius: "16px", padding: "20px", fontSize: "1.08rem", fontWeight: 600, color: "var(--slate-900)", lineHeight: 1.6, boxShadow: "var(--shadow-sm)" }}>
              {TASK1_DATA.questionText.split("\n\n").map((chunk, index) => (
                <p key={index} style={{ margin: index === TASK1_DATA.questionText.split("\n\n").length - 1 ? 0 : "12px 0" }}>{chunk}</p>
              ))}
            </div>
          </div>

          <div style={{ background: "#ffffff", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "20px", boxShadow: "var(--shadow-sm)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
              <GitBranch size={18} color="var(--slate-800)" />
              <h5 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--slate-900)" }}>Task type</h5>
            </div>
            <p style={{ fontSize: "0.96rem", color: "var(--slate-700)", lineHeight: 1.5, margin: 0 }}>
              <strong>{TASK1_DATA.taskType}</strong> → one pulp-making stage, followed by two separate paper-production routes.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--slate-500)", fontSize: "0.86rem" }}>
            <Clock3 size={16} /> Write at least 150 words and spend about 20 minutes on this task.
          </div>
        </div>

        <div style={{ background: "#ffffff", border: "1.5px solid var(--border-subtle)", borderRadius: "20px", padding: "14px", boxShadow: "var(--shadow-sm)" }}>
          <img
            src={`materials/${TASK1_DATA.imageFileName}`}
            alt="Pulp and paper making process diagram"
            style={{ display: "block", width: "100%", height: "auto", borderRadius: "14px" }}
          />
        </div>
      </div>
    </div>
  );
};
