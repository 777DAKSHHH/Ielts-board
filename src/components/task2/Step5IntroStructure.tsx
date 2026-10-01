import React from "react";
import { BookOpen, CheckCircle2, Award, Clock } from "lucide-react";
import { TASK2_DATA } from "../../data/task2Data";

export const Step5IntroStructureT2: React.FC = () => (
  <div className="stage-card-wrapper">
    <div>
      <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
        Step 05 / 09 • Introduction & Thesis
      </span>
      <h2 className="stage-title">Build the Introduction</h2>
      <p className="stage-subtitle">
        Ideal IELTS Opinion Introduction: Paraphrase the question in sentence 1 + state your clear unequivocal opinion in sentence 2.
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
          <Clock size={15} /> ~50 words • 2 sentences • Optimal IELTS exam timing (~3-4 mins)
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <StructureCard
          icon={<CheckCircle2 size={18} />}
          title="1. Paraphrase the Question"
          text="Restate the prompt in sentence 1: that ancient artifacts and cultural treasures held abroad should be returned to their countries of origin using varied academic vocabulary."
        />
        <StructureCard
          icon={<Award size={18} />}
          title="2. State Your Direct Opinion (Agree or Disagree)"
          text="State your clear stance in sentence 2: whether you AGREE (repatriation restores living cultural identity and rectifies colonial plunder) or DISAGREE (universal museums maximize global educational exposure and conservation security)."
        />
        <StructureCard
          icon={<CheckCircle2 size={18} />}
          title="3. Ideal Introduction Length"
          text="Keep the introduction concise (~45-52 words). Avoid rambling background narratives so you conserve time and word count for deep body paragraph analysis."
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
