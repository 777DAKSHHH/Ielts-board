import React, { useState } from "react";
import { Volume2, CheckCircle, Circle } from "lucide-react";
import { VocabItem } from "../../data/task1Data";

interface VocabCardProps {
  vocab: VocabItem;
  onSpeak: (text: string) => void;
  index: number;
}

export const VocabCard: React.FC<VocabCardProps> = ({ vocab, onSpeak, index }) => {
  const [isMastered, setIsMastered] = useState(false);

  return (
    <div
      style={{
        background: isMastered ? "#f0fdf4" : "#ffffff",
        border: `1.5px solid ${isMastered ? "#86efac" : "var(--border-subtle)"}`,
        borderRadius: "18px",
        padding: "20px 22px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        boxShadow: "var(--shadow-sm)",
        transition: "all 0.2s ease"
      }}
    >
      {/* Header: Word, Speak, and Mastered Pill */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span
            style={{
              fontSize: "0.8rem",
              fontWeight: 700,
              color: "var(--slate-400)",
              fontFamily: "var(--font-mono)"
            }}
          >
            0{index + 1}
          </span>
          <h4
            style={{
              fontSize: "1.3rem",
              fontWeight: 700,
              color: "var(--slate-900)",
              letterSpacing: "-0.01em"
            }}
          >
            {vocab.word}
          </h4>
          <button
            onClick={() => onSpeak(vocab.word)}
            className="apple-touch-btn secondary"
            style={{
              minHeight: "36px",
              width: "36px",
              padding: 0,
              borderRadius: "50%"
            }}
            title={`Listen to pronunciation of ${vocab.word}`}
          >
            <Volume2 size={18} color="var(--slate-700)" />
          </button>
        </div>

        <button
          onClick={() => setIsMastered(!isMastered)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "6px 12px",
            borderRadius: "999px",
            background: isMastered ? "#dcfce7" : "var(--slate-100)",
            color: isMastered ? "#15803d" : "var(--slate-600)",
            fontSize: "0.85rem",
            fontWeight: 600,
            cursor: "pointer"
          }}
        >
          {isMastered ? <CheckCircle size={16} /> : <Circle size={16} />}
          <span>{isMastered ? "Mastered ✓" : "Mark Mastered"}</span>
        </button>
      </div>

      {/* Meaning */}
      <p style={{ fontSize: "0.98rem", color: "var(--slate-600)", lineHeight: 1.5 }}>
        <strong style={{ color: "var(--slate-800)" }}>Meaning:</strong> {vocab.meaning}
      </p>

      {/* Example Context Sentence */}
      <div
        style={{
          background: isMastered ? "#ffffff" : "var(--slate-50)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "12px",
          padding: "10px 14px",
          fontSize: "0.92rem",
          color: "var(--slate-700)",
          fontStyle: "italic",
          lineHeight: 1.5
        }}
      >
        "{vocab.example}"
      </div>
    </div>
  );
};
