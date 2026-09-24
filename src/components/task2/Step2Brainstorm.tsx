import React from "react";
import { FileText, Target, Scale } from "lucide-react";
import { TASK2_DATA } from "../../data/task2Data";
import { TouchTimer } from "../common/TouchTimer";

interface Step2BrainstormProps {
  formattedTime: string;
  isRunning: boolean;
  isFinished: boolean;
  onTimerToggle: () => void;
  onTimerReset: () => void;
}

export const Step2BrainstormT2: React.FC<Step2BrainstormProps> = ({ formattedTime, isRunning, isFinished, onTimerToggle, onTimerReset }) => (
  <div className="stage-card-wrapper">
    <div>
      <span className="apple-badge accent" style={{ marginBottom: "8px" }}>Step 02 / 09 • Task Reveal & Analysis</span>
      <h2 className="stage-title">Now Reveal the Actual Task</h2>
      <p className="stage-subtitle">Students have made their prediction. Now expose the wording and ask them to identify exactly what each question demands.</p>
    </div>

    <div style={{ marginBottom: "22px" }}>
      <TouchTimer formattedTime={formattedTime} isRunning={isRunning} isFinished={isFinished} onToggle={onTimerToggle} onReset={onTimerReset} instruction="Before looking at ideas, spend a short planning window identifying what the two questions require." />
    </div>

    <div className="stage-grid-2col">
      <div style={{ background: "var(--slate-50)", border: "1.5px solid var(--border-subtle)", borderRadius: "20px", padding: "26px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}><FileText size={21} /><h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>IELTS Academic Writing Task 2</h4></div>
          <span className="apple-badge accent">{TASK2_DATA.taskType}</span>
        </div>
        <div style={{ background: "#fff", border: "1px solid var(--border-subtle)", borderRadius: "16px", padding: "22px", fontSize: "1.18rem", fontWeight: 650, lineHeight: 1.65, boxShadow: "var(--shadow-sm)" }}>
          {TASK2_DATA.questionText.split("\n\n").map((chunk, i) => <p key={i} style={{ marginBottom: i === 0 ? "14px" : 0 }}>{chunk}</p>)}
        </div>
        <p style={{ fontSize: "0.85rem", color: "var(--slate-500)", fontStyle: "italic", marginTop: "14px" }}>* Write at least 250 words. Spend approximately 40 minutes on this task.</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <div style={{ background: "#fff", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "20px", boxShadow: "var(--shadow-sm)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--apple-blue)", marginBottom: "8px" }}><Target size={18} /><h5 style={{ fontSize: "1rem", fontWeight: 700 }}>Question 1 — Consequences</h5></div>
          <p style={{ fontSize: "0.95rem", color: "var(--slate-700)", lineHeight: 1.5 }}>Students need to explore the effects of the trend. This allows both beneficial and harmful consequences to be considered before deciding what is significant.</p>
        </div>
        <div style={{ background: "#fff", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "20px", boxShadow: "var(--shadow-sm)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#059669", marginBottom: "8px" }}><Scale size={18} /><h5 style={{ fontSize: "1rem", fontWeight: 700 }}>Question 2 — Good or Bad?</h5></div>
          <p style={{ fontSize: "0.95rem", color: "var(--slate-700)", lineHeight: 1.5 }}>Students must evaluate the trend, not merely list points. A balanced discussion can recognise personal choice while examining the pressure surrounding youthful appearance.</p>
        </div>
        <div style={{ background: "#f8fafc", border: "1px dashed var(--border-strong)", borderRadius: "16px", padding: "16px", color: "var(--slate-600)", fontSize: "0.9rem", lineHeight: 1.5 }}><strong>Next:</strong> do not show the idea bank yet. Go to the Brainstorm Challenge and make students generate their own routes first.</div>
      </div>
    </div>
  </div>
);
