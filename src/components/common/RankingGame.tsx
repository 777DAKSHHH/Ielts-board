import React, { useState, useMemo } from "react";
import { ArrowUpDown, RotateCcw, CheckCircle2, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";

interface RankingItem {
  id: string;
  text: string;
  correctOrder: number;
}

interface RankingGameProps {
  items: RankingItem[];
  title?: string;
  instruction?: string;
}

export const RankingGame: React.FC<RankingGameProps> = ({
  items,
  title = "Passenger Preference Ranking Challenge",
  instruction = "Rank the survey findings from Highest Priority ➔ Lowest Priority by clicking them:"
}) => {
  // Scramble items initially
  const initialScrambled = useMemo(() => {
    return [...items].sort(() => Math.random() - 0.5);
  }, [items]);

  const [available, setAvailable] = useState<RankingItem[]>(initialScrambled);
  const [selected, setSelected] = useState<RankingItem[]>([]);

  const handleSelectItem = (item: RankingItem) => {
    setAvailable((prev) => prev.filter((i) => i.id !== item.id));
    const nextSelected = [...selected, item];
    setSelected(nextSelected);

    // Check completion
    if (nextSelected.length === items.length) {
      const isPerfect = nextSelected.every((it, idx) => it.correctOrder === idx + 1);
      if (isPerfect) {
        confetti({ particleCount: 60, spread: 70, origin: { y: 0.7 } });
      }
    }
  };

  const handleRemoveItem = (item: RankingItem) => {
    setSelected((prev) => prev.filter((i) => i.id !== item.id));
    setAvailable((prev) => [...prev, item]);
  };

  const handleReset = () => {
    setSelected([]);
    setAvailable([...items].sort(() => Math.random() - 0.5));
  };

  const isComplete = selected.length === items.length;
  const isCorrect = isComplete && selected.every((it, idx) => it.correctOrder === idx + 1);

  return (
    <div
      style={{
        background: "var(--slate-50)",
        border: "1.5px solid var(--border-subtle)",
        borderRadius: "20px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "18px"
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "var(--slate-200)",
              color: "var(--slate-800)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <ArrowUpDown size={18} />
          </div>
          <div>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--slate-900)" }}>{title}</h4>
            <p style={{ fontSize: "0.85rem", color: "var(--slate-500)" }}>{instruction}</p>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="apple-touch-btn secondary"
          style={{ minHeight: "40px", padding: "0 14px", fontSize: "0.85rem", gap: "6px" }}
        >
          <RotateCcw size={16} />
          <span>Reset Order</span>
        </button>
      </div>

      {/* Scrambled Available Pool */}
      {available.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {available.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSelectItem(item)}
              className="apple-touch-btn secondary"
              style={{
                minHeight: "46px",
                padding: "8px 16px",
                fontSize: "0.95rem",
                borderRadius: "12px",
                background: "#ffffff",
                border: "1px solid var(--slate-300)",
                boxShadow: "var(--shadow-sm)",
                textAlign: "left"
              }}
            >
              + {item.text}
            </button>
          ))}
        </div>
      )}

      {/* Ordered Timeline Tray */}
      <div
        style={{
          background: "#ffffff",
          border: `1.5px dashed ${isComplete ? (isCorrect ? "var(--apple-green)" : "var(--apple-orange)") : "var(--border-strong)"}`,
          borderRadius: "16px",
          padding: "16px 20px",
          minHeight: "90px",
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}
      >
        <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--slate-500)", textTransform: "uppercase" }}>
          Your Ranked Timeline ({selected.length}/{items.length} Selected):
        </div>

        {selected.length === 0 ? (
          <div style={{ color: "var(--slate-400)", fontSize: "0.92rem", fontStyle: "italic", padding: "10px 0" }}>
            Click items above to build the ranking sequence...
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {selected.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => handleRemoveItem(item)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 16px",
                  borderRadius: "10px",
                  background: "var(--slate-100)",
                  fontSize: "0.95rem",
                  cursor: "pointer"
                }}
                title="Click to remove"
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "6px",
                      background: "var(--slate-900)",
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.8rem",
                      fontWeight: 700
                    }}
                  >
                    #{idx + 1}
                  </span>
                  <span style={{ color: "var(--slate-800)", fontWeight: 500 }}>{item.text}</span>
                </div>
                <span style={{ fontSize: "0.8rem", color: "var(--slate-400)" }}>✕</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Completion Validation Banner */}
      {isComplete && (
        <div
          style={{
            padding: "14px 18px",
            borderRadius: "14px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            background: isCorrect ? "#ecfdf5" : "#fff7ed",
            border: `1px solid ${isCorrect ? "#a7f3d0" : "#fed7aa"}`,
            color: isCorrect ? "#065f46" : "#9a3412",
            fontSize: "0.95rem",
            fontWeight: 600
          }}
        >
          {isCorrect ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
          <span>
            {isCorrect
              ? "Perfect! All survey trends have been prioritized in exact hierarchical order."
              : "Review ranking: Some items are out of comparative hierarchy. Reset or swap cards."}
          </span>
        </div>
      )}
    </div>
  );
};
