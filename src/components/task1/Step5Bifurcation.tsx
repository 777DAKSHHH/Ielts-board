import React, { useState } from "react";
import { CheckCircle2, Split, TrendingUp, Calendar, Layers, Sparkles, Filter, ShoppingBag, Utensils, PieChart as PieIcon } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step5Bifurcation: React.FC = () => {
  const [selectedStrategy, setSelectedStrategy] = useState<"domain" | "polarity">("domain");

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 05 / 08 • Structural Grouping Strategy
        </span>
        <h2 className="stage-title">Bifurcation Tactics: How to Group Tables &amp; Pie Chart</h2>
        <p className="stage-subtitle">
          With two tables (gender breakdown for shops and restaurants) and one pie chart (overall architectural design), choosing a logical two-body paragraph grouping guarantees coherent flow and structured comparisons.
        </p>
      </div>

      {/* Strategy Switcher */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "8px" }}>
        <button
          onClick={() => setSelectedStrategy("domain")}
          style={{
            flex: 1,
            padding: "14px 18px",
            borderRadius: "14px",
            border: selectedStrategy === "domain" ? "2px solid #16a34a" : "1.5px solid var(--border-subtle)",
            background: selectedStrategy === "domain" ? "#f0fdf4" : "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            boxShadow: selectedStrategy === "domain" ? "var(--shadow-sm)" : "none"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Layers size={20} color={selectedStrategy === "domain" ? "#16a34a" : "var(--slate-600)"} />
            <div style={{ textAlign: "left" }}>
              <strong style={{ fontSize: "0.95rem", color: "var(--slate-900)", display: "block" }}>
                Strategy A: Component-by-Component Bifurcation (Recommended Band 9)
              </strong>
              <span style={{ fontSize: "0.78rem", color: "var(--slate-600)" }}>
                Body 1: Tables 1 &amp; 2 (Shops &amp; Dining Genders) • Body 2: Pie Chart (Complex Architectural Design)
              </span>
            </div>
          </div>
          <span className="apple-badge neutral" style={{ background: "#dcfce7", color: "#166534", fontWeight: 800 }}>
            Band 9 Recommended
          </span>
        </button>

        <button
          onClick={() => setSelectedStrategy("polarity")}
          style={{
            flex: 1,
            padding: "14px 18px",
            borderRadius: "14px",
            border: selectedStrategy === "polarity" ? "2px solid #ea580c" : "1.5px solid var(--border-subtle)",
            background: selectedStrategy === "polarity" ? "#fff7ed" : "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            boxShadow: selectedStrategy === "polarity" ? "var(--shadow-sm)" : "none"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Split size={20} color={selectedStrategy === "polarity" ? "#ea580c" : "var(--slate-600)"} />
            <div style={{ textAlign: "left" }}>
              <strong style={{ fontSize: "0.95rem", color: "var(--slate-900)", display: "block" }}>
                Strategy B: Sentiment Polarity Grouping (Alternative Approach)
              </strong>
              <span style={{ fontSize: "0.78rem", color: "var(--slate-600)" }}>
                Body 1: Positive Ratings (Very Satisfied &amp; Satisfied) • Body 2: Dissatisfaction &amp; Neutrality
              </span>
            </div>
          </div>
          <span className="apple-badge neutral" style={{ fontWeight: 700 }}>
            Alternative
          </span>
        </button>
      </div>

      {/* Selected Strategy Deep Dive Grid */}
      {selectedStrategy === "domain" ? (
        <div className="stage-grid-2col">
          {/* Body 1 Column */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "18px",
              padding: "22px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              boxShadow: "var(--shadow-sm)"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#16a34a" }} />
                <h4 style={{ fontSize: "1.08rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  Body 1: Tables 1 &amp; 2 — Retail Shops &amp; Dining Gender Breakdown
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ background: "#f0fdf4", color: "#166534", fontWeight: 750 }}>
                105 Words
              </span>
            </div>

            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.5 }}>
              Compares male and female responses across retail shops (double extreme satisfaction among women: 34% vs 17%, equal 20% dissatisfaction) and dining establishments (80% male approval vs 21% female dissatisfaction).
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>1. Retail Shops (Table 1):</strong> 45% male / 37% female satisfied; women had double the very satisfied rate (34% vs 17%); identical 20% dissatisfaction.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>2. Dining Male Peak (Table 2):</strong> 55% satisfied + 25% very satisfied = 80% total positive feedback, with a negligible 5% dissatisfaction.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>3. Dining Female Contrast:</strong> 21% of women were dissatisfied (more than four times the male rate), with 20% offering no comment.
              </div>
            </div>

            <div style={{ marginTop: "auto", background: "#f8fafc", padding: "12px 14px", borderRadius: "12px", fontSize: "0.83rem", color: "#1e293b", fontStyle: "italic", borderLeft: "3px solid #16a34a" }}>
              “In retail shops, 45% of male visitors were satisfied alongside 17% who were very satisfied. By comparison, female shoppers demonstrated considerably higher enthusiasm, with 34% describing themselves as very satisfied—exactly double the male proportion—while dissatisfaction rates for both sexes were identical at 20%...”
            </div>
          </div>

          {/* Body 2 Column */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "18px",
              padding: "22px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              boxShadow: "var(--shadow-sm)"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ea580c" }} />
                <h4 style={{ fontSize: "1.08rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  Body 2: Pie Chart — Complex Architectural Design Reception
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ background: "#fff7ed", color: "#9a3412", fontWeight: 750 }}>
                58 Words
              </span>
            </div>

            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.5 }}>
              Deconstructs the pie chart for complex design, highlighting nearly two-thirds satisfaction (62%), cumulative 79% positive approval, and marginal negative/neutral shares.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>1. Plurality Satisfied:</strong> Nearly two-thirds (62%) of respondents expressed satisfaction with the architectural layout.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>2. Cumulative Acclaim:</strong> Adding 17% very satisfied brings total positive approval to 79%.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>3. Low Disapproval &amp; Neutrality:</strong> Only 10% were dissatisfied, while 11% made no comment.
              </div>
            </div>

            <div style={{ marginTop: "auto", background: "#f8fafc", padding: "12px 14px", borderRadius: "12px", fontSize: "0.83rem", color: "#1e293b", fontStyle: "italic", borderLeft: "3px solid #ea580c" }}>
              “Regarding the complex's design, the pie chart indicates widespread acclaim, with nearly two-thirds of respondents (62%) reporting satisfaction. An additional 17% were very satisfied, bringing total positive sentiment to 79%, whereas negative appraisals and neutral responses were marginal at 10% and 11% respectively.”
            </div>
          </div>
        </div>
      ) : (
        /* Alternative Polarity Strategy */
        <div className="stage-grid-2col">
          <div style={{ background: "#ffffff", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "22px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
              Group 1: Positive Approval Across All Sectors (Satisfied &amp; Very Satisfied)
            </h4>
            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", lineHeight: 1.5 }}>
              Groups all favorable metrics: 79% design approval, 80% male restaurant approval, 71% female shop approval, and 62% male shop approval, establishing the dominant welcoming reception.
            </p>
          </div>
          <div style={{ background: "#ffffff", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "22px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
              Group 2: Critical &amp; Neutral Sentiment (Dissatisfaction &amp; No Comment)
            </h4>
            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", lineHeight: 1.5 }}>
              Examines areas of friction and apathy: the shared 20% shop dissatisfaction, the 4x dining dissatisfaction disparity (21% female vs 5% male), and the modest 10% design dissatisfaction.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
