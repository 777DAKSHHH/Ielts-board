import React from "react";
import { CircleCheck, ThumbsUp, ThumbsDown } from "lucide-react";
import { TASK2_DATA } from "../../data/task2Data";

export const Step5CausesT2: React.FC = () => {
  const positives = TASK2_DATA.consequences.filter(x => x.type === "positive");
  const negatives = TASK2_DATA.consequences.filter(x => x.type === "negative");
  return <div className="stage-card-wrapper"><div><span className="apple-badge accent" style={{ marginBottom: "8px" }}>Step 06 / 09 • Body 1 — Consequences</span><h2 className="stage-title">What Are the Consequences?</h2><p className="stage-subtitle">The first question asks for consequences, so students should be able to discuss both sides before the essay's evaluation becomes clear.</p></div><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px", overflowY: "auto" }}><EffectColumn title="Potential benefits" icon={<ThumbsUp size={20} />} items={positives} /><EffectColumn title="Potential drawbacks" icon={<ThumbsDown size={20} />} items={negatives} /></div></div>;
};

const EffectColumn: React.FC<{ title: string; icon: React.ReactNode; items: typeof TASK2_DATA.consequences }> = ({ title, icon, items }) => <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}><div style={{ display: "flex", alignItems: "center", gap: "9px", padding: "10px 2px" }}>{icon}<h4 style={{ fontSize: "1.05rem", fontWeight: 750 }}>{title}</h4></div>{items.map(item => <div key={item.title} style={{ background: "#fff", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "18px", boxShadow: "var(--shadow-sm)" }}><h5 style={{ fontSize: "1rem", fontWeight: 750, marginBottom: "8px" }}>{item.title}</h5><p style={{ fontSize: "0.92rem", color: "var(--slate-600)", lineHeight: 1.5 }}>{item.desc}</p><div style={{ marginTop: "12px", background: "var(--slate-50)", borderRadius: "12px", padding: "10px 12px", fontSize: "0.86rem", color: "var(--slate-700)", lineHeight: 1.45 }}><CircleCheck size={14} style={{ verticalAlign: "-2px", marginRight: "6px" }} />{item.example}</div></div>)}</div>;
