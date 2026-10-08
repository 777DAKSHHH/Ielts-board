import React from "react";
import { BookOpen, CheckCircle2, Award, Clock } from "lucide-react";
import { TASK2_DATA } from "../../data/task2Data";

export const Step5IntroStructureT2: React.FC = () => (
  <div className="stage-card-wrapper">
    <div>
      <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
        Step 05 / 09 • Introduction & 2-Part Thesis
      </span>
      <h2 className="stage-title">Build the Introduction & 2-Part Thesis</h2>
      <p className="stage-subtitle">
        Ideal IELTS 2-Part Introduction: Paraphrase the prompt in sentence 1 + deliver a clear 2-part thesis answering both questions in sentence 2.
      </p>
    </div>
    <div className="stage-grid-2col">
      <div
        style={{
          background: "var(--slate-50)",
          border: "1.5px solid var(--border-subtle)",
          borderRadius: "20px",
          padding: "24px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
          <BookOpen size={20} />
          <h4 style={{ fontSize: "1.15rem", fontWeight: 700 }}>Sample Introduction (Concise & Focused)</h4>
        </div>
        <div
          style={{
            background: "#fff",
            border: "1px solid var(--border-subtle)",
            borderRadius: "14px",
            padding: "20px",
            fontSize: "1.08rem",
            lineHeight: 1.7,
            boxShadow: "var(--shadow-sm)",
            color: "var(--slate-800)"
          }}
        >
          {TASK2_DATA.sampleIntro}
        </div>
        <div style={{ marginTop: "14px", display: "flex", alignItems: "center", gap: "8px", color: "var(--slate-500)", fontSize: "0.85rem" }}>
          <Clock size={15} /> 39 words • 2 sentences • Rapid exam timing (~2.5-3 mins)
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <StructureCard
          icon={<CheckCircle2 size={18} />}
          title="1. Crisp Prompt Paraphrase (Sentence 1)"
          text="Restate the prompt cleanly without fluff: that in many nations, rising average body weight and declining physical fitness have emerged as alarming public health concerns."
        />
        <StructureCard
          icon={<Award size={18} />}
          title="2. Paired 2-Part Thesis (Sentence 2)"
          text="Directly outline paired answers to both questions: state the two primary repercussions (healthcare strain and curtailed economic productivity) and propose the counter-solutions (fiscal sugar levies and active transit infrastructure)."
        />
        <StructureCard
          icon={<CheckCircle2 size={18} />}
          title="3. Word Economy & Exam Time Management"
          text="Keep the introduction concise (~38–42 words across 2 sentences in ~2.5–3 mins). A punchy, focused introduction avoids fluff, secures full marks for Task Achievement, and saves vital minutes for in-depth body paragraph development."
        />
      </div>
    </div>
  </div>
);

const StructureCard: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({
  icon,
  title,
  text
}) => (
  <div
    style={{
      background: "#fff",
      border: "1px solid var(--border-subtle)",
      borderRadius: "16px",
      padding: "18px"
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        color: "var(--apple-blue)",
        marginBottom: "6px"
      }}
    >
      {icon}
      <h5 style={{ fontSize: "0.95rem", fontWeight: 700 }}>{title}</h5>
    </div>
    <p style={{ fontSize: "0.92rem", color: "var(--slate-600)", lineHeight: 1.5 }}>{text}</p>
  </div>
);
