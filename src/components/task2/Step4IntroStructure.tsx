import React from "react";
import { BookOpen, CheckCircle2, Award } from "lucide-react";
import { TASK2_DATA } from "../../data/task2Data";

export const Step4IntroStructureT2: React.FC = () => (
  <div className="stage-card-wrapper">
    <div><span className="apple-badge accent" style={{ marginBottom: "8px" }}>Step 05 / 09 • Introduction & Thesis</span><h2 className="stage-title">Build the Introduction</h2><p className="stage-subtitle">The PDF's model introduction moves from trend → balanced acknowledgement → predominantly negative evaluation.</p></div>
    <div className="stage-grid-2col">
      <div style={{ background: "var(--slate-50)", border: "1.5px solid var(--border-subtle)", borderRadius: "20px", padding: "24px" }}><div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}><BookOpen size={20} /><h4 style={{ fontSize: "1.15rem", fontWeight: 700 }}>Sample Introduction</h4></div><div style={{ background: "#fff", border: "1px solid var(--border-subtle)", borderRadius: "14px", padding: "20px", fontSize: "1.05rem", lineHeight: 1.7, boxShadow: "var(--shadow-sm)" }}>{TASK2_DATA.sampleIntro}</div></div>
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <StructureCard icon={<CheckCircle2 size={18} />} title="1. Trend / paraphrase" text="Increasing availability and use of anti-ageing products and treatments." />
        <StructureCard icon={<CheckCircle2 size={18} />} title="2. Balanced acknowledgement" text="Recognise confidence and personal choice before moving to the evaluation." />
        <StructureCard icon={<Award size={18} />} title="3. Thesis / position" text="The PDF takes a predominantly negative position because of appearance-related pressure and unrealistic expectations about ageing." />
      </div>
    </div>
  </div>
);

const StructureCard: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => <div style={{ background: "#fff", border: "1px solid var(--border-subtle)", borderRadius: "16px", padding: "18px" }}><div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--apple-blue)", marginBottom: "6px" }}>{icon}<h5 style={{ fontSize: "0.95rem", fontWeight: 700 }}>{title}</h5></div><p style={{ fontSize: "0.92rem", color: "var(--slate-600)", lineHeight: 1.5 }}>{text}</p></div>;
