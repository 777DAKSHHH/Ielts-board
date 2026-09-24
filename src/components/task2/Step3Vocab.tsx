import React from "react";
import { Globe } from "lucide-react";
import { TASK2_DATA } from "../../data/task2Data";
import { VocabCard } from "../common/VocabCard";

interface Step3VocabProps { onSpeak: (text: string) => void; accent: "en-GB" | "en-US"; setAccent: (accent: "en-GB" | "en-US") => void; }

export const Step3VocabT2: React.FC<Step3VocabProps> = ({ onSpeak, accent, setAccent }) => (
  <div className="stage-card-wrapper">
    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
      <div><span className="apple-badge accent" style={{ marginBottom: "8px" }}>Step 04 / 09 • Lexical Resource</span><h2 className="stage-title">Workbook Power Expressions</h2><p className="stage-subtitle" style={{ marginBottom: 0 }}>Use precise academic language after the student has already generated the ideas.</p></div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "var(--slate-100)", padding: "6px 12px", borderRadius: "12px" }}><Globe size={16} color="var(--slate-600)" /><span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--slate-600)" }}>Accent:</span>{(["en-GB", "en-US"] as const).map(v => <button key={v} onClick={() => setAccent(v)} style={{ padding: "4px 10px", borderRadius: "8px", fontSize: "0.85rem", fontWeight: 700, background: accent === v ? "#fff" : "transparent", color: accent === v ? "var(--slate-900)" : "var(--slate-500)" }}>{v === "en-GB" ? "UK" : "US"}</button>)}</div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px", overflowY: "auto", paddingRight: "4px" }}>{TASK2_DATA.vocabList.map((vocab, index) => <VocabCard key={vocab.word} vocab={vocab} onSpeak={onSpeak} index={index} />)}</div>
  </div>
);
