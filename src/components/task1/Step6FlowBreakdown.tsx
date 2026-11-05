import React from "react";
import { CheckCircle2, TrendingUp, ShieldCheck, Sparkles, Award } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step6FlowBreakdown: React.FC = () => {
  const body1Model = TASK1_DATA.modelReport.paragraphs.find((p) => p.id === "body1");

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 06 / 08 • Body 1 — Food, Drink &amp; Tobacco
        </span>
        <h2 className="stage-title">Deconstructing Body Paragraph 1: Sustenance Expenditure</h2>
        <p className="stage-subtitle">
          Examine the comparative data flow: opening with Turkey's peak proportion (32.14%), pairing with Ireland (28.91%), and contrasting with the lower tier of Spain (18.80%), Italy (16.36%), and Sweden (15.77%).
        </p>
      </div>

      <div className="stage-grid-2col">
        {/* Left Column: 4 Analytical Data Clusters */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* Cluster 1: Turkey Global Peak */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "18px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#2563eb" }} />
                <h4 style={{ fontSize: "1.05rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  1. Global Table Peak: Turkey (32.14%)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#dbeafe", color: "#1e40af", fontWeight: 800 }}>
                Rank 1 in Table
              </span>
            </div>

            <div style={{ background: "#ffffff", borderRadius: "10px", padding: "12px", border: "1px solid var(--border-subtle)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--slate-700)" }}>
                  Fractional Approximation:
                </span>
                <span style={{ fontSize: "0.95rem", fontWeight: 800, color: "#2563eb" }}>
                  Nearly a third (32.14%)
                </span>
              </div>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Analytical Role:</strong> Opens the paragraph with the highest single proportion in the entire table. Turkish consumers allocated nearly one out of every three euros to sustenance.
            </p>
          </div>

          {/* Cluster 2: Ireland Upper Tier */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid rgba(2, 132, 199, 0.3)",
              borderRadius: "18px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#0284c7" }} />
                <h4 style={{ fontSize: "1.05rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  2. Upper Tier Partner: Ireland (28.91%)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#f0f9ff", color: "#0369a1" }}>
                Rank 2 in Food
              </span>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Key Phrasing:</strong> <em>“Ireland followed closely behind at 28.91%.”</em> Couples seamlessly with Turkey, establishing that both countries spent over 28% on basic nourishment.
            </p>
          </div>

          {/* Cluster 3: Spain Intermediate Benchmark */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid rgba(217, 119, 6, 0.3)",
              borderRadius: "18px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#d97706" }} />
                <h4 style={{ fontSize: "1.05rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  3. Transitional Pivot: Spain (18.80%)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#fff7ed", color: "#c2410c" }}>
                Mid-Tier Split
              </span>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Sharp Contrast:</strong> Introduced with <em>“In marked contrast, the remaining three nations registered substantially lower figures; Spain recorded 18.80%...”</em>
            </p>
          </div>

          {/* Cluster 4: Italy & Sweden Low Spending Duo */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid rgba(71, 85, 105, 0.3)",
              borderRadius: "18px",
              padding: "16px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <div>
              <h4 style={{ fontSize: "0.95rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                4. Lowest Food Allocations: Italy (16.36%) &amp; Sweden (15.77%)
              </h4>
              <p style={{ fontSize: "0.8rem", color: "var(--slate-600)", margin: "4px 0 0 0" }}>
                Reported economically using the adverb <em>“respectively”</em> to conclude the paragraph.
              </p>
            </div>
            <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#475569", background: "#f1f5f9", padding: "4px 8px", borderRadius: "6px" }}>
              15.77% – 16.36%
            </span>
          </div>
        </div>

        {/* Right Column: Complete Body 1 Text & Analytical Formula */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* Model Paragraph Card */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "20px",
              padding: "22px",
              boxShadow: "var(--shadow-sm)",
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <TrendingUp size={20} color="var(--apple-blue)" />
                <h4 style={{ fontSize: "1.1rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  Body Paragraph 1 Model ({body1Model?.wordCount} words)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.75rem", fontWeight: 750 }}>
                Sustenance Sector
              </span>
            </div>

            <div
              style={{
                background: "var(--slate-50)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "14px",
                padding: "16px 18px",
                fontSize: "0.98rem",
                color: "var(--slate-800)",
                lineHeight: 1.7,
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.03)"
              }}
            >
              “{body1Model?.text}”
            </div>

            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {body1Model?.badges.map((b) => (
                <span key={b} className="apple-badge neutral" style={{ fontSize: "0.72rem" }}>
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* 4-Step Sentence Flow Blueprint */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "18px",
              padding: "20px",
              boxShadow: "var(--shadow-sm)",
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <ShieldCheck size={18} color="#16a34a" />
              <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                Band 9 Comparative Sentence Flow Blueprint
              </h4>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.85rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>1</span>
                <span><strong>Category Topic Opener:</strong> <em>“In terms of food, drinks, and tobacco, Turkey allocated the highest proportion of any country...”</em></span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>2</span>
                <span><strong>Fractional Data Anchor:</strong> <em>“...with nearly a third of all consumer expenditure (32.14%) directed towards this category.”</em></span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>3</span>
                <span><strong>Sequential Follower:</strong> <em>“Ireland followed closely behind at 28.91%.”</em></span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>4</span>
                <span><strong>Contrastive Linker &amp; Respective Coupling:</strong> <em>“In marked contrast, the remaining three nations registered substantially lower figures; Spain recorded 18.80%, while Italy and Sweden spent the least on sustenance at 16.36% and 15.77% respectively.”</em></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
