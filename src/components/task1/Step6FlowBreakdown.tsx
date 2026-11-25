import React from "react";
import { CheckCircle2, TrendingUp, ShieldCheck, Sparkles, Award, Layers, ShoppingBag, Utensils } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step6FlowBreakdown: React.FC = () => {
  const body1Model = TASK1_DATA.modelReport.paragraphs.find((p) => p.id === "body1");

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 06 / 08 • Body 1 — Retail Shops &amp; Dining Establishments
        </span>
        <h2 className="stage-title">Deconstructing Body Paragraph 1: Comparative Tabular Analysis</h2>
        <p className="stage-subtitle">
          Examine the comparative progression across Tables 1 and 2: opening with retail shops (double female extreme enthusiasm alongside identical 20% dissatisfaction), progressing to dining facilities (peak 80% male approval contrasted with fourfold female dissatisfaction at 21%).
        </p>
      </div>

      <div className="stage-grid-2col">
        {/* Left Column: 3 Analytical Process Stage Clusters */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* Cluster 1: Retail Shops Gender Comparison */}
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
                  1. Retail Shops: Double Female Extreme Enthusiasm
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#eff6ff", color: "#1e40af", fontWeight: 800 }}>
                Enthusiasm Doubling
              </span>
            </div>

            <div style={{ background: "#ffffff", borderRadius: "10px", padding: "12px", border: "1px solid var(--border-subtle)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--slate-700)" }}>
                  Very Satisfied Metric:
                </span>
                <span style={{ fontSize: "0.95rem", fontWeight: 800, color: "#2563eb" }}>
                  Females 34% vs Males 17% (2x)
                </span>
              </div>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Analytical Role:</strong> Highlights gender divergence in enthusiasm. 45% of men were satisfied and 17% very satisfied (62% total), whereas female shoppers were twice as likely to express extreme satisfaction (34% vs 17%, with 37% satisfied).
            </p>
          </div>

          {/* Cluster 2: Retail Dissatisfaction Parity */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid rgba(5, 150, 105, 0.25)",
              borderRadius: "18px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#059669" }} />
                <h4 style={{ fontSize: "1.05rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  2. Retail Dissatisfaction: Exact Gender Parity (20%)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#ecfdf5", color: "#065f46", fontWeight: 800 }}>
                Identical Rate
              </span>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Key Phrasing:</strong> <em>“...while dissatisfaction rates for both sexes were identical at 20%.”</em> Examiner tip: Grouping identical figures is a hallmark of Band 9 synthesizing efficiency.
            </p>
          </div>

          {/* Cluster 3: Dining Facilities Disparity */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid rgba(2, 132, 199, 0.25)",
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
                  3. Dining: 80% Male Approval vs Quadruple Female Dissatisfaction
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.72rem", background: "#f0f9ff", color: "#0369a1", fontWeight: 800 }}>
                Sharp Contrast
              </span>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.45 }}>
              <strong>Stark Contrast:</strong> Male visitors expressed overwhelming contentment (55% satisfied + 25% very satisfied = 80%) with a negligible 5% dissatisfaction, whereas female dissatisfaction reached 21% (more than four times higher).
            </p>
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
                <Layers size={20} color="var(--apple-blue)" />
                <h4 style={{ fontSize: "1.1rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  Body Paragraph 1 Model ({body1Model?.wordCount} words)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ fontSize: "0.75rem", fontWeight: 750, background: "#f0fdf4", color: "#166534" }}>
                Tables 1 &amp; 2
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

          {/* 3-Step Process Sentence Flow Blueprint */}
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
                Band 9 Comparative Architecture for Body 1
              </h4>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.85rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>1</span>
                <span><strong>Retail Base Sentence &amp; Gender Disparity:</strong> <em>“In retail shops, 45% of male visitors were satisfied alongside 17% who were very satisfied. By comparison, female shoppers demonstrated considerably higher enthusiasm, with 34% describing themselves as very satisfied—exactly double the male proportion...”</em></span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>2</span>
                <span><strong>Similarity Anchor (Shared 20%):</strong> <em>“...while dissatisfaction rates for both sexes were identical at 20%.”</em></span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "var(--slate-700)" }}>
                <span className="apple-badge neutral" style={{ minWidth: "22px", textAlign: "center" }}>3</span>
                <span><strong>Dining Contrast &amp; Multiplicative Ratio:</strong> <em>“Regarding dining establishments, male visitors expressed overwhelming contentment, with 55% satisfied and 25% very satisfied, whereas dissatisfaction was negligible at just 5%. In sharp contrast, female dissatisfaction stood at 21%, more than fourfold higher than that of their male counterparts.”</em></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
