import React, { useRef } from "react";
import { Headphones, Lightbulb, Unlock, Sparkles } from "lucide-react";
import { TASK2_DATA } from "../../data/task2Data";

interface Step1OverviewProps {
  onUnlockBypass: () => void;
  isUnlocked: boolean;
}

export const Step1OverviewT2: React.FC<Step1OverviewProps> = ({ onUnlockBypass }) => {
  const clickTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleUnlockClick = () => {
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
      clickTimeoutRef.current = null;
      onUnlockBypass();
      return;
    }
    clickTimeoutRef.current = setTimeout(() => {
      clickTimeoutRef.current = null;
      alert("Task reveal unlocked! Double-click to jump directly to the question.");
    }, 250);
  };

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>Step 01 / 09 • Cryptic Audio Guess</span>
        <h2 className="stage-title">Listen First: Guess the Essay Topic</h2>
        <p className="stage-subtitle">
          Play the briefing before revealing the actual IELTS question. Students should infer the topic, the social issue behind it and possible directions for discussion.
        </p>
      </div>

      <div className="stage-grid-2col">
        <div style={{ background: "var(--slate-50)", border: "1.5px solid var(--border-subtle)", borderRadius: "20px", padding: "26px", display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "var(--slate-900)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Headphones size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: "1.15rem", fontWeight: 700 }}>Cryptic Audio Briefing</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--slate-500)" }}>Staying Young as a Survival Tactic • ~1:51</p>
            </div>
          </div>

          <audio controls preload="metadata" style={{ width: "100%", height: "54px", borderRadius: "14px", outline: "none" }}>
            <source src={TASK2_DATA.audioUrl} type="audio/mp4" />
            Your browser does not support audio playback.
          </audio>

          <div style={{ background: "#fff", border: "1px solid var(--border-subtle)", borderRadius: "14px", padding: "16px", color: "var(--slate-700)", lineHeight: 1.55 }}>
            <strong style={{ color: "var(--slate-900)" }}>Teacher move:</strong> Do not show the task yet. Ask students to listen, discuss their prediction, and justify what clues led them there.
          </div>
        </div>

        <div style={{ background: "var(--slate-50)", border: "1.5px solid var(--border-subtle)", borderRadius: "20px", padding: "26px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Lightbulb size={21} color="var(--slate-800)" />
            <h4 style={{ fontSize: "1.15rem", fontWeight: 700 }}>Student Guess Board</h4>
          </div>
          {[
            "What broad topic is the speaker discussing?",
            "What change or trend might the IELTS question describe?",
            "What kinds of consequences could this trend create?",
            "Could the issue reasonably have both benefits and drawbacks?"
          ].map((question, index) => (
            <div key={question} style={{ background: "#fff", border: "1px solid var(--border-subtle)", borderRadius: "14px", padding: "15px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <span className="apple-badge neutral" style={{ minWidth: "30px", justifyContent: "center" }}>{index + 1}</span>
              <span style={{ fontSize: "0.95rem", color: "var(--slate-700)", lineHeight: 1.45 }}>{question}</span>
            </div>
          ))}
          <button onClick={handleUnlockClick} className="apple-touch-btn primary" style={{ minHeight: "50px", gap: "8px", marginTop: "auto" }}>
            <Unlock size={18} /> <span>Reveal Task 2 Question</span>
          </button>
          <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "14px", padding: "13px 15px", color: "#1e3a8a", fontSize: "0.88rem" }}>
            <Sparkles size={14} style={{ verticalAlign: "-2px", marginRight: "6px" }} /> The next stage reveals the exact wording. The guided brainstorming challenge comes immediately after it.
          </div>
        </div>
      </div>
    </div>
  );
};
