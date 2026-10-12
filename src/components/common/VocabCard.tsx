import React, { useState } from "react";
import { motion } from "framer-motion";
import { Volume2, CheckCircle, Circle } from "lucide-react";
import type { VocabItem } from "../../data/task1Data";
import { tactilePress } from "../../motion";

interface VocabCardProps {
  vocab: VocabItem;
  onSpeak: (text: string) => void;
  index: number;
}

export const VocabCard: React.FC<VocabCardProps> = ({ vocab, onSpeak, index }) => {
  const [isMastered, setIsMastered] = useState(false);

  return (
    <motion.div
      layout
      animate={isMastered ? { scale: [1, 0.98, 1.01, 1] } : { scale: 1 }}
      transition={{ duration: 0.25 }}
      style={{
        background: isMastered ? "#f0fdf4" : "#ffffff",
        border: `1.5px solid ${isMastered ? "#86efac" : "var(--border-default)"}`,
        borderRadius: "18px",
        padding: "20px 22px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        boxShadow: isMastered ? "0 4px 12px rgba(22, 163, 74, 0.08)" : "var(--shadow-sm)",
        transition: "border-color 0.2s ease, background-color 0.2s ease"
      }}
    >
      {/* Header: Word, Speak, and Mastered Pill */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span
            style={{
              fontSize: "0.82rem",
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
          <motion.button
            whileTap={tactilePress}
            onClick={() => onSpeak(vocab.word)}
            className="apple-touch-btn secondary"
            style={{
              minHeight: "44px",
              width: "44px",
              padding: 0,
              borderRadius: "50%"
            }}
            title={`Listen to pronunciation of ${vocab.word}`}
            aria-label={`Listen to pronunciation of ${vocab.word}`}
          >
            <Volume2 size={18} color="var(--slate-700)" />
          </motion.button>
        </div>

        <motion.button
          whileTap={tactilePress}
          onClick={() => setIsMastered(!isMastered)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            minHeight: "44px",
            padding: "0 14px",
            borderRadius: "999px",
            border: `1px solid ${isMastered ? "#86efac" : "var(--border-default)"}`,
            background: isMastered ? "#dcfce7" : "var(--slate-100)",
            color: isMastered ? "#15803d" : "var(--slate-700)",
            fontSize: "0.85rem",
            fontWeight: 700,
            cursor: "pointer"
          }}
        >
          {isMastered ? <CheckCircle size={18} /> : <Circle size={18} />}
          <span>{isMastered ? "Mastered ✓" : "Mark Mastered"}</span>
        </motion.button>
      </div>

      {/* Meaning */}
      <p style={{ fontSize: "0.98rem", color: "var(--slate-700)", lineHeight: 1.5 }}>
        <strong style={{ color: "var(--slate-900)" }}>Meaning:</strong> {vocab.meaning}
      </p>

      {/* Example Context Sentence */}
      <div
        style={{
          background: isMastered ? "#ffffff" : "var(--slate-50)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "12px",
          padding: "12px 16px",
          fontSize: "0.93rem",
          color: "var(--slate-700)",
          fontStyle: "italic",
          lineHeight: 1.5
        }}
      >
        "{vocab.example}"
      </div>
    </motion.div>
  );
};
