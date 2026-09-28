import React, { useState } from "react";
import { CircleCheck, Landmark, AlertCircle, Sparkles } from "lucide-react";
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
          Step 06 / 09 • Body 1 — View 1: Public Services
        </span>
        <h2 className="stage-title">Why Governments Need Substantial Tax Revenue</h2>
        <p className="stage-subtitle">
          Deconstruct View 1: Massive capital infrastructure, universal education, and social equity requiring collective public funding that private markets cannot deliver.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px", overflowY: "auto" }}>
        <EffectColumn
          title="Core Justifications for Public Funding"
          icon={<Landmark size={20} color="var(--apple-blue)" />}
          items={coreArguments}
        />
        <EffectColumn
          title="Nuances & Practical Caveats"
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
  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 2px" }}>
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
          padding: "18px",
          boxShadow: "var(--shadow-sm)"
        }}
      >
        <h5 style={{ fontSize: "1rem", fontWeight: 750, marginBottom: "8px" }}>{item.title}</h5>
        <p style={{ fontSize: "0.92rem", color: "var(--slate-600)", lineHeight: 1.5 }}>
          {item.desc}
        </p>
        <div
          style={{
            marginTop: "12px",
            background: "var(--slate-50)",
            borderRadius: "12px",
            padding: "10px 12px",
            fontSize: "0.86rem",
            color: "var(--slate-700)",
            lineHeight: 1.45
          }}
        >
          <CircleCheck size={14} style={{ verticalAlign: "-2px", marginRight: "6px", color: "var(--apple-blue)" }} />
          {item.example}
        </div>
      </div>
    ))}
  </div>
);
