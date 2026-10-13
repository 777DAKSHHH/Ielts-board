import React from "react";
import { BookOpen, CheckCircle2, Award, Clock } from "lucide-react";
import { TASK2_DATA } from "../../data/task2Data";

export const Step5IntroStructureT2: React.FC = () => (
  <div className="stage-card-wrapper">
    <div>
      <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
        Step 05 / 09 • Sample Introduction &amp; Thesis
      </span>
      <h2 className="stage-title">Sample Introduction &amp; Decisive Opinion Thesis</h2>
      <p className="stage-subtitle">
        Ideal IELTS Positive/Negative Development Introduction: Paraphrase the trend of postponing marriage and childbearing in Sentence 1 + deliver a decisive opinion thesis arguing that the development is overwhelmingly positive in Sentence 2.
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
          <h4 style={{ fontSize: "1.15rem", fontWeight: 700 }}>Sample Introduction (Concise &amp; Focused)</h4>
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
          <Clock size={15} /> 58 words • 2 sentences • Rapid exam timing (~2.5-3 mins)
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <StructureCard
          icon={<CheckCircle2 size={18} />}
          title="1. Crisp Prompt Paraphrase (Sentence 1)"
          text="Restate the prompt naturally without mechanical copying: note the pervasive modern trend where young adults defer matrimony and parenthood until their fourth decade."
        />
        <StructureCard
          icon={<Award size={18} />}
          title="2. Decisive Opinion Thesis (Sentence 2)"
          text="Directly answer the prompt: acknowledge that while biological fertility windows and demographic aging pose valid concerns, the advantages—namely robust financial security, career consolidation, and emotional maturity—make this an overwhelmingly positive shift."
        />
        <StructureCard
          icon={<CheckCircle2 size={18} />}
          title="3. Word Economy & Roadmapping"
          text="Keep the introduction concise (~50–60 words across 2 sentences). A punchy opening establishes a crystal-clear position from the outset, unlocking Band 9 Task Achievement before launching into your body paragraphs."
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
