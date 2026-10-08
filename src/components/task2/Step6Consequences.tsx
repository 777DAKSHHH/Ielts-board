import React, { useState } from "react";
import { CircleCheck, AlertCircle, Sparkles, BookOpen } from "lucide-react";
import { TASK2_DATA } from "../../data/task2Data";
import { CaveatsDeepDiveModal } from "./CaveatsDeepDiveModal";

export const Step6ConsequencesT2: React.FC = () => {
  const [isDeepDiveOpen, setIsDeepDiveOpen] = useState(false);
  const coreArguments = TASK2_DATA.consequences.filter((x) => x.type === "positive");
  const caveats = TASK2_DATA.consequences.filter((x) => x.type === "negative");

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 06 / 09 • Question 1: Health Repercussions & Societal Toll
        </span>
        <h2 className="stage-title">Question 1: What Are the Severe Effects of Increasing Weight &amp; Declining Fitness?</h2>
        <p className="stage-subtitle">
          Levelled arguments evaluating multidimensional repercussions. Examine the direct healthcare burdens, chronic disease proliferation, economic productivity depletion, and psychological tolls.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px", overflowY: "auto" }}>
        <EffectColumn
          title="Core Societal & Pathological Effects (Body 1 Anchors)"
          icon={<CircleCheck size={20} color="var(--apple-blue)" />}
          items={coreArguments}
        />
        <EffectColumn
          title="Systemic Nuances, Cascades & Hidden Ramifications"
          icon={<AlertCircle size={20} color="#d97706" />}
          items={caveats}
          actionButton={
            <button
              onClick={() => setIsDeepDiveOpen(true)}
              className="apple-touch-btn secondary"
              style={{
                minHeight: "34px",
                padding: "0 12px",
                fontSize: "0.8rem",
                fontWeight: 750,
                gap: "6px",
                color: "#92400e",
                background: "#fef3c7",
                border: "1.5px solid #fde68a",
                cursor: "pointer",
                borderRadius: "10px",
                boxShadow: "0 2px 6px rgba(217, 119, 6, 0.12)"
              }}
              title="Learn why caveats are essential in Body 1 and how to explain them to students"
            >
              <Sparkles size={14} color="#d97706" />
              <span>Dive Deeper</span>
            </button>
          }
        />
      </div>

      <CaveatsDeepDiveModal
        isOpen={isDeepDiveOpen}
        onClose={() => setIsDeepDiveOpen(false)}
      />
    </div>
  );
};

const EffectColumn: React.FC<{
  title: string;
  icon: React.ReactNode;
  items: typeof TASK2_DATA.consequences;
  actionButton?: React.ReactNode;
}> = ({ title, icon, items, actionButton }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 2px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
        {icon}
        <h4 style={{ fontSize: "1.05rem", fontWeight: 750 }}>{title}</h4>
      </div>
      {actionButton}
    </div>
    {items.map((item) => (
      <div
        key={item.title}
        style={{
          background: "#fff",
          border: "1.5px solid var(--border-subtle)",
          borderRadius: "18px",
          padding: "18px 20px",
          boxShadow: "var(--shadow-sm)",
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}
      >
        {/* Level & Vocabulary Badge Row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "6px" }}>
          <span
            className="apple-badge accent"
            style={{
              fontSize: "0.74rem",
              fontWeight: 750,
              background: item.type === "positive" ? "rgba(0, 113, 227, 0.1)" : "rgba(217, 119, 6, 0.12)",
              color: item.type === "positive" ? "var(--apple-blue)" : "#b45309",
              border: item.type === "positive" ? "1px solid rgba(0, 113, 227, 0.2)" : "1px solid rgba(217, 119, 6, 0.25)"
            }}
          >
            {item.level || (item.type === "positive" ? "Core Argument" : "Nuance")}
          </span>
          {item.collocation && (
            <span
              style={{
                fontSize: "0.74rem",
                color: "var(--slate-600)",
                fontFamily: "monospace",
                background: "var(--slate-100)",
                padding: "2px 8px",
                borderRadius: "6px",
                border: "1px solid var(--border-subtle)"
              }}
            >
              ✦ {item.collocation}
            </span>
          )}
        </div>

        <h5 style={{ fontSize: "1.02rem", fontWeight: 750, color: "var(--slate-900)" }}>{item.title}</h5>

        {/* Levelled Comprehension: Student Quick Take */}
        {item.simpleTakeaway && (
          <div
            style={{
              background: item.type === "positive" ? "#eff6ff" : "#fffbeb",
              borderLeft: item.type === "positive" ? "3.5px solid var(--apple-blue)" : "3.5px solid #d97706",
              borderRadius: "0 8px 8px 0",
              padding: "7px 12px",
              fontSize: "0.85rem",
              color: item.type === "positive" ? "#1e40af" : "#92400e",
              lineHeight: 1.45,
              fontWeight: 550
            }}
          >
            <BookOpen size={13} style={{ verticalAlign: "-2px", marginRight: "6px", display: "inline" }} />
            <strong>Student Quick Take:</strong> {item.simpleTakeaway}
          </div>
        )}

        <p style={{ fontSize: "0.91rem", color: "var(--slate-600)", lineHeight: 1.55 }}>
          {item.desc}
        </p>

        {/* Real-World Concrete Example */}
        <div
          style={{
            background: "var(--slate-50)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "12px",
            padding: "10px 12px",
            fontSize: "0.86rem",
            color: "var(--slate-700)",
            lineHeight: 1.45
          }}
        >
          <CircleCheck size={14} style={{ verticalAlign: "-2px", marginRight: "6px", color: "var(--apple-blue)" }} />
          <strong>Example:</strong> {item.example}
        </div>
      </div>
    ))}
  </div>
);
