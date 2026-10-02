import React from "react";
import { BookOpen, Globe } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";
import { VocabCard } from "../common/VocabCard";

interface Step3VocabProps {
  onSpeak: (text: string) => void;
  accent: "en-GB" | "en-US";
  setAccent: (accent: "en-GB" | "en-US") => void;
}

export const Step3Vocab: React.FC<Step3VocabProps> = ({ onSpeak, accent, setAccent }) => (
  <div className="stage-card-wrapper">
    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>Step 03 / 08 • Lexical Resource</span>
        <h2 className="stage-title">Ecological & Process Vocabulary</h2>
        <p className="stage-subtitle" style={{ marginBottom: 0 }}>
          Essential collocations and academic terminology for trophic hierarchies, biomass energy transfer, metabolic heat dissipation, and closed-loop nutrient cycling.
        </p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "6px", background: "var(--slate-100)", padding: "6px 10px", borderRadius: "12px" }}>
        <Globe size={15} color="var(--slate-600)" />
        {(["en-GB", "en-US"] as const).map((value) => (
          <button key={value} onClick={() => setAccent(value)} style={{ padding: "5px 9px", borderRadius: "8px", fontSize: "0.78rem", fontWeight: 700, background: accent === value ? "#ffffff" : "transparent", color: accent === value ? "var(--slate-900)" : "var(--slate-500)", boxShadow: accent === value ? "var(--shadow-sm)" : "none" }}>
            {value === "en-GB" ? "UK" : "US"}
          </button>
        ))}
      </div>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px", color: "var(--slate-700)" }}>
      <BookOpen size={18} /> <strong>10 essential academic ecological & process collocations</strong>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px", overflowY: "auto", paddingRight: "4px" }}>
      {TASK1_DATA.vocabList.map((vocab, index) => <VocabCard key={vocab.word} vocab={vocab} onSpeak={onSpeak} index={index} />)}
    </div>
  </div>
);
