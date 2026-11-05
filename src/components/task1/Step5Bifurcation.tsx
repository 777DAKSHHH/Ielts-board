import React, { useState } from "react";
import { CheckCircle2, Split, Table, TrendingUp, Layers, Sparkles } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step5Bifurcation: React.FC = () => {
  const [selectedStrategy, setSelectedStrategy] = useState<"category" | "country">("category");

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 05 / 08 • Structural Grouping Strategy
        </span>
        <h2 className="stage-title">Bifurcation Tactics: How to Group the Comparative Table</h2>
        <p className="stage-subtitle">
          With a 5-country by 3-category data table, choosing the right paragraph organization prevents repetitive listing and secures Band 9 in Coherence &amp; Cohesion (CC) and Task Achievement (TA).
        </p>
      </div>

      {/* Strategy Switcher */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "8px" }}>
        <button
          onClick={() => setSelectedStrategy("category")}
          style={{
            flex: 1,
            padding: "14px 18px",
            borderRadius: "14px",
            border: selectedStrategy === "category" ? "2px solid #2563eb" : "1.5px solid var(--border-subtle)",
            background: selectedStrategy === "category" ? "#eff6ff" : "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            boxShadow: selectedStrategy === "category" ? "var(--shadow-sm)" : "none"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Table size={20} color={selectedStrategy === "category" ? "#2563eb" : "var(--slate-600)"} />
            <div style={{ textAlign: "left" }}>
              <strong style={{ fontSize: "0.95rem", color: "var(--slate-900)", display: "block" }}>
                Strategy A: Category Grouping (Recommended)
              </strong>
              <span style={{ fontSize: "0.78rem", color: "var(--slate-600)" }}>
                Body 1: Food, Drink &amp; Tobacco (Dominant Sector) • Body 2: Clothing/Footwear &amp; Leisure/Education (Secondary &amp; Minority Sectors)
              </span>
            </div>
          </div>
          <span className="apple-badge neutral" style={{ background: "#dbeafe", color: "#1e40af", fontWeight: 800 }}>
            Band 9 Standard
          </span>
        </button>

        <button
          onClick={() => setSelectedStrategy("country")}
          style={{
            flex: 1,
            padding: "14px 18px",
            borderRadius: "14px",
            border: selectedStrategy === "country" ? "2px solid #059669" : "1.5px solid var(--border-subtle)",
            background: selectedStrategy === "country" ? "#ecfdf5" : "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            boxShadow: selectedStrategy === "country" ? "var(--shadow-sm)" : "none"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Layers size={20} color={selectedStrategy === "country" ? "#059669" : "var(--slate-600)"} />
            <div style={{ textAlign: "left" }}>
              <strong style={{ fontSize: "0.95rem", color: "var(--slate-900)", display: "block" }}>
                Strategy B: Country Grouping (Alternative)
              </strong>
              <span style={{ fontSize: "0.78rem", color: "var(--slate-600)" }}>
                Body 1: High Spenders &amp; Outliers (Turkey, Ireland, Italy) • Body 2: Moderate &amp; Low Spenders (Spain &amp; Sweden)
              </span>
            </div>
          </div>
          <span className="apple-badge neutral" style={{ fontWeight: 700 }}>
            Alternative
          </span>
        </button>
      </div>

      {/* Selected Strategy Deep Dive Grid */}
      {selectedStrategy === "category" ? (
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
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#2563eb" }} />
                <h4 style={{ fontSize: "1.08rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  Body 1: Food, Drink &amp; Tobacco (Dominant Sector)
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ background: "#eff6ff", color: "#1e40af", fontWeight: 750 }}>
                65 Words
              </span>
            </div>

            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.5 }}>
              Focuses exclusively on the primary expenditure category across all five nations, contrasting the leading pair against the lower tier.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>1. Upper Tier (Turkey &amp; Ireland):</strong> Turkey peaked at 32.14% (highest in the entire table), closely followed by Ireland at 28.91%.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>2. Lower Tier (Spain, Italy, Sweden):</strong> Spain stood at 18.80%, while Italy (16.36%) and Sweden (15.77%) spent the least on sustenance.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>3. Why Group Here:</strong> Allows clear internal contrast: Turkish/Irish food spending was nearly double that of Sweden.
              </div>
            </div>

            <div style={{ marginTop: "auto", background: "#f8fafc", padding: "12px 14px", borderRadius: "12px", fontSize: "0.83rem", color: "#1e293b", fontStyle: "italic", borderLeft: "3px solid #2563eb" }}>
              “In terms of food, drinks, and tobacco, Turkey allocated the highest proportion of any country, with nearly a third of all consumer expenditure (32.14%) directed towards this category...”
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
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#d97706" }} />
                <h4 style={{ fontSize: "1.08rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  Body 2: Clothing/Footwear &amp; Leisure/Education
                </h4>
              </div>
              <span className="apple-badge neutral" style={{ background: "#fff7ed", color: "#9a3412", fontWeight: 750 }}>
                69 Words
              </span>
            </div>

            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", margin: 0, lineHeight: 1.5 }}>
              Analyzes Italy's clothing outlier alongside the tightly clustered group, then synthesizes the minority leisure and education figures.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>1. Italian Clothing Outlier:</strong> Italy was the undisputed leader at 9.00%, outstripping all other nations by over 2.3 percentage points.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>2. Clothing Cluster &amp; Floor:</strong> Turkey (6.63%), Spain (6.51%), and Ireland (6.43%) clustered around 6.5%, with Sweden lowest at 5.40%.
              </div>
              <div style={{ background: "var(--slate-50)", padding: "10px 12px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "0.84rem" }}>
                <strong style={{ color: "var(--slate-900)" }}>3. Leisure/Education Spectrum:</strong> Turkey again topped this sector (4.35%), Sweden &amp; Italy matched at ~3.2%, and Spain fell to 1.98% (table floor).
              </div>
            </div>

            <div style={{ marginTop: "auto", background: "#f8fafc", padding: "12px 14px", borderRadius: "12px", fontSize: "0.83rem", color: "#1e293b", fontStyle: "italic", borderLeft: "3px solid #d97706" }}>
              “Turning to clothing and footwear, Italy was the undisputed leader at exactly 9.00%, outstripping Turkey (6.63%), Spain (6.51%), and Ireland (6.43%)...”
            </div>
          </div>
        </div>
      ) : (
        /* Alternative Strategy Grid */
        <div className="stage-grid-2col">
          <div style={{ background: "#ffffff", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "22px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
              Group 1: Turkey, Ireland &amp; Italy (Distinctive High Spenders)
            </h4>
            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", lineHeight: 1.5 }}>
              Groups the three countries with the most prominent peaks: Turkey (leading food 32.14% and leisure 4.35%), Ireland (second in food 28.91%), and Italy (undisputed clothing leader at 9.00%).
            </p>
          </div>
          <div style={{ background: "#ffffff", border: "1.5px solid var(--border-subtle)", borderRadius: "18px", padding: "22px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
              Group 2: Spain &amp; Sweden (Moderate &amp; Frugal Economies)
            </h4>
            <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", lineHeight: 1.5 }}>
              Covers Spain (intermediate food 18.80%, table floor in leisure 1.98%) and Sweden (lowest sustenance 15.77% and apparel 5.40%, but moderate leisure 3.22%).
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
