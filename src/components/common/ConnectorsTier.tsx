import React from "react";
import { Sparkles, Trophy, Award, Shield } from "lucide-react";

interface ConnectorsTierProps {
  sTier: string[];
  aTier: string[];
  bTier: string[];
}

export const ConnectorsTier: React.FC<ConnectorsTierProps> = ({ sTier, aTier, bTier }) => {
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
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Sparkles size={20} color="var(--slate-700)" />
        <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--slate-900)" }}>
          Academic Connectors & Transition Tier List
        </h4>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {/* S-Tier */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "110px 1fr",
            background: "#ffffff",
            borderRadius: "14px",
            border: "1.5px solid #fed7aa",
            overflow: "hidden"
          }}
        >
          <div
            style={{
              background: "#ffedd5",
              color: "#9a3412",
              fontWeight: 800,
              fontSize: "0.92rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px"
            }}
          >
            <Trophy size={16} /> S-Tier
          </div>
          <div style={{ padding: "12px 18px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {sTier.map((word) => (
              <span key={word} className="apple-badge accent" style={{ fontSize: "0.95rem" }}>
                {word}
              </span>
            ))}
          </div>
        </div>

        {/* A-Tier */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "110px 1fr",
            background: "#ffffff",
            borderRadius: "14px",
            border: "1.5px solid #bfdbfe",
            overflow: "hidden"
          }}
        >
          <div
            style={{
              background: "#dbeafe",
              color: "#1e40af",
              fontWeight: 800,
              fontSize: "0.92rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px"
            }}
          >
            <Award size={16} /> A-Tier
          </div>
          <div style={{ padding: "12px 18px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {aTier.map((word) => (
              <span key={word} className="apple-badge neutral" style={{ fontSize: "0.95rem" }}>
                {word}
              </span>
            ))}
          </div>
        </div>

        {/* B-Tier */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "110px 1fr",
            background: "#ffffff",
            borderRadius: "14px",
            border: "1.5px solid var(--border-subtle)",
            overflow: "hidden"
          }}
        >
          <div
            style={{
              background: "var(--slate-200)",
              color: "var(--slate-700)",
              fontWeight: 800,
              fontSize: "0.92rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px"
            }}
          >
            <Shield size={16} /> B-Tier
          </div>
          <div style={{ padding: "12px 18px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {bTier.map((word) => (
              <span key={word} style={{ padding: "6px 12px", borderRadius: "999px", background: "var(--slate-100)", color: "var(--slate-600)", fontSize: "0.9rem", fontWeight: 500 }}>
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
