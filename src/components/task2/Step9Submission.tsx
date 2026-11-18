import React, { useState } from "react";
import { CheckCircle2, Copy, Check, ChevronDown, ChevronUp, Layers, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

interface Step9SubmissionT2Props {
  onNavigateToNuanceLab?: () => void;
}

export const Step9SubmissionT2: React.FC<Step9SubmissionT2Props> = ({
  onNavigateToNuanceLab
}) => {
  const [copied, setCopied] = useState(false);
  const [showEssay, setShowEssay] = useState(false);

  const fullModelEssay = `In recent times, an increasing number of households worldwide have embraced solar energy as a primary domestic power source. While this shift offers substantial environmental sustainability and long-term utility bill savings, it is accompanied by distinct drawbacks, most notably high upfront installation costs and dependency on weather conditions.

On the one hand, the primary advantage of domestic solar power is its exceptional environmental sustainability. Unlike conventional electricity generated from fossil fuels, photovoltaic systems harness inexhaustible solar radiation without discharging greenhouse gases or airborne pollutants. Consequently, widespread household adoption drastically curtails domestic carbon footprints and contributes directly to mitigating global climate change. Furthermore, residential solar panels yield profound economic savings over time. Once the system is installed, families generate their own electricity, shielding themselves from escalating commercial utility tariffs and saving up to seventy percent on monthly power bills. Additionally, in jurisdictions with net-metering schemes, households can even sell surplus power back to the regional grid, turning their roofs into modest revenue streams.

On the other hand, the principal drawback of solar energy is the steep initial capital expenditure required for purchase and installation. High-efficiency solar panels, power inverters, mounting hardware, and professional labor demand an upfront investment often ranging between ten and twenty thousand dollars, making adoption prohibitive for lower-income households. Moreover, solar generation suffers from inherent weather dependency and seasonal intermittency. Solar panels produce minimal electricity during overcast days, heavy rainfall, or harsh winter seasons, and cannot generate power during night hours. To maintain continuous electricity supply, homeowners must either remain connected to the conventional grid or invest in expensive lithium-ion battery banks, which have limited lifespans and add substantial additional costs to the household budget.

In conclusion, household solar energy presents compelling advantages by delivering clean, renewable electricity and lowering long-term domestic power bills. However, these merits are counterbalanced by the heavy initial capital investment required and the system's inherent weather dependency, suggesting that government subsidies and advancements in battery storage will remain critical for widespread residential adoption.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullModelEssay);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="stage-card-wrapper" style={{ overflowY: "auto", maxHeight: "100%" }}>
      {/* Stage Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px", marginBottom: "14px" }}>
        <div>
          <span className="apple-badge accent" style={{ marginBottom: "6px" }}>
            Step 09 / 09 • Final Essay Structure &amp; Revision
          </span>
          <h2 className="stage-title">Essay Structure &amp; Revision Cheat Sheet</h2>
          <p className="stage-subtitle" style={{ marginBottom: 0 }}>
            Extreme concise one-liner revision checks for your Band 9 Advantages &amp; Disadvantages response.
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
          {onNavigateToNuanceLab && (
            <button
              type="button"
              onClick={onNavigateToNuanceLab}
              style={{
                padding: "8px 14px",
                background: "linear-gradient(135deg, #1e1b4b, #312e81)",
                color: "#ffffff",
                border: "1.5px solid #4338ca",
                borderRadius: "10px",
                fontSize: "0.82rem",
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(67, 56, 202, 0.2)",
                transition: "all 0.15s ease"
              }}
            >
              <Sparkles size={14} color="#a5b4fc" />
              <span>Nuance Lab (Below / Under / Underneath)</span>
              <span
                style={{
                  fontSize: "0.70rem",
                  background: "#4f46e5",
                  color: "#ffffff",
                  padding: "2px 6px",
                  borderRadius: "5px",
                  fontWeight: 750
                }}
              >
                Ep 01
              </span>
            </button>
          )}

          <button
            onClick={handleCopy}
            style={{
              padding: "8px 14px",
              borderRadius: "10px",
              border: "1px solid var(--border-subtle)",
              background: copied ? "#dcfce7" : "#0f172a",
              color: copied ? "#166534" : "#ffffff",
              fontSize: "0.82rem",
              fontWeight: 800,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
          >
            {copied ? <Check size={14} color="#166534" /> : <Copy size={14} />}
            <span>{copied ? "Copied Full Essay" : "Copy Complete Model Essay"}</span>
          </button>
        </div>
      </div>

      {/* SECTION 1: 4-PARAGRAPH BALANCED ARCHITECTURE (STRICT ONE-LINERS) */}
      <div
        style={{
          background: "#ffffff",
          border: "1.5px solid var(--border-subtle)",
          borderRadius: "16px",
          padding: "16px 20px",
          marginBottom: "14px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px", borderBottom: "1px solid #f1f5f9", paddingBottom: "8px" }}>
          <Layers size={16} color="var(--apple-blue)" />
          <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
            4-Paragraph Advantages &amp; Disadvantages Architecture (One-Liner Revision)
          </h3>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {/* Intro */}
          <div style={{ background: "#faf5ff", border: "1px solid #e9d5ff", borderRadius: "10px", padding: "10px 14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 800, background: "#9333ea", color: "#ffffff", padding: "2px 7px", borderRadius: "4px" }}>
                1. INTRO
              </span>
              <strong style={{ fontSize: "0.86rem", color: "#6b21a8" }}>Paraphrase Question + Balanced Outline Statement</strong>
            </div>
            <p style={{ margin: "4px 0 0", fontSize: "0.86rem", color: "#3b0764", lineHeight: 1.45 }}>
              Paraphrase increasing residential solar adoption + introduce both core benefits (environmental sustainability and bill savings) and drawbacks (high upfront capital and weather intermittency).
            </p>
          </div>

          {/* Body 1 */}
          <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "10px", padding: "10px 14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 800, background: "#2563eb", color: "#ffffff", padding: "2px 7px", borderRadius: "4px" }}>
                2. BODY PARA 1 (ADVANTAGES)
              </span>
              <strong style={{ fontSize: "0.86rem", color: "#1d4ed8" }}>Clean Renewable Power &amp; Substantial Utility Bill Savings</strong>
            </div>
            <p style={{ margin: "4px 0 0", fontSize: "0.86rem", color: "#1e3a8a", lineHeight: 1.45 }}>
              <strong>Point:</strong> Harnesses inexhaustible sunlight with zero emissions → <strong>Evidence:</strong> Drastically curtails carbon footprints &amp; insulates against escalating utility rates → <strong>Example:</strong> Saving 60–80% on bills and earning feed-in net metering credits.
            </p>
          </div>

          {/* Body 2 */}
          <div style={{ background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: "10px", padding: "10px 14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 800, background: "#ea580c", color: "#ffffff", padding: "2px 7px", borderRadius: "4px" }}>
                3. BODY PARA 2 (DISADVANTAGES)
              </span>
              <strong style={{ fontSize: "0.86rem", color: "#c2410c" }}>High Upfront Installation Capital &amp; Weather Intermittency</strong>
            </div>
            <p style={{ margin: "4px 0 0", fontSize: "0.86rem", color: "#7c2d12", lineHeight: 1.45 }}>
              <strong>Point:</strong> Hardware and installation require heavy capital ($12,000–$22,000) → <strong>Evidence:</strong> Generation stops at night and drops sharply during cloudy/winter days → <strong>Example:</strong> Costly lithium-ion batteries and prolonged payback periods.
            </p>
          </div>

          {/* Conclusion */}
          <div style={{ background: "#f8fafc", border: "1px solid #cbd5e1", borderRadius: "10px", padding: "10px 14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 800, background: "#0f172a", color: "#ffffff", padding: "2px 7px", borderRadius: "4px" }}>
                4. CONCLUSION
              </span>
              <strong style={{ fontSize: "0.86rem", color: "#0f172a" }}>Sum-Up Trade-Offs + Forward-Looking Policy Recommendation</strong>
            </div>
            <p style={{ margin: "4px 0 0", fontSize: "0.86rem", color: "#1e293b", lineHeight: 1.45 }}>
              Weigh clean energy advantages against upfront cost and intermittency, concluding that continued government subsidies and better battery tech are essential for universal adoption.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: BAND 9 EXAMINER REVISION CHECKPOINTS (STRICT ONE-LINERS) */}
      <div
        style={{
          background: "#ffffff",
          border: "1.5px solid var(--border-subtle)",
          borderRadius: "16px",
          padding: "16px 20px",
          marginBottom: "14px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px", borderBottom: "1px solid #f1f5f9", paddingBottom: "8px" }}>
          <ShieldCheck size={16} color="#16a34a" />
          <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
            4 Band 9 Examiner Revision Checkpoints (Strict One-Liners)
          </h3>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "10px" }}>
          {[
            {
              code: "TR",
              title: "Task Response",
              color: "#2563eb",
              bg: "#eff6ff",
              rule: "Equal, fully developed coverage of both advantages and disadvantages, reinforced by a balanced final synthesis."
            },
            {
              code: "CC",
              title: "Coherence & Cohesion",
              color: "#16a34a",
              bg: "#f0fdf4",
              rule: "Seamless comparative discourse markers: 'On the one hand... On the other hand... Furthermore... In conclusion...'."
            },
            {
              code: "LR",
              title: "Lexical Resource",
              color: "#9333ea",
              bg: "#faf5ff",
              rule: "Natural Band 9 energy lexis: 'photovoltaic', 'intermittency', 'decarbonisation', 'capital expenditure', 'net metering'."
            },
            {
              code: "GRA",
              title: "Grammatical Accuracy",
              color: "#d97706",
              bg: "#fffbeb",
              rule: "Complex concessive structures ('While this shift offers...', 'Although initial costs are high...') with zero errors."
            }
          ].map((chk) => (
            <div
              key={chk.code}
              style={{
                background: chk.bg,
                border: `1px solid ${chk.color}30`,
                borderRadius: "10px",
                padding: "10px 12px",
                display: "flex",
                flexDirection: "column",
                gap: "4px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ fontSize: "0.68rem", fontWeight: 800, background: chk.color, color: "#ffffff", padding: "1px 6px", borderRadius: "4px" }}>
                  {chk.code}
                </span>
                <strong style={{ fontSize: "0.84rem", color: "#0f172a" }}>{chk.title}</strong>
              </div>
              <p style={{ margin: 0, fontSize: "0.82rem", color: "#334155", lineHeight: 1.4 }}>
                {chk.rule}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: COMPACT EXPANDABLE FULL MODEL ESSAY DRAWER */}
      <div
        style={{
          background: "#ffffff",
          border: "1.5px solid var(--border-subtle)",
          borderRadius: "16px",
          padding: "14px 18px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
        }}
      >
        <button
          type="button"
          onClick={() => setShowEssay(!showEssay)}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Sparkles size={16} color="var(--apple-blue)" />
            <strong style={{ fontSize: "0.92rem", color: "#0f172a" }}>
              Complete Band 9 Model Essay (330 Words • 4-Paragraph Advantages &amp; Disadvantages Architecture)
            </strong>
            <span style={{ fontSize: "0.72rem", background: "#f1f5f9", color: "#475569", padding: "2px 8px", borderRadius: "6px" }}>
              {showEssay ? "Click to collapse" : "Click to view full text"}
            </span>
          </div>

          {showEssay ? <ChevronUp size={16} color="#64748b" /> : <ChevronDown size={16} color="#64748b" />}
        </button>

        {showEssay && (
          <div
            style={{
              marginTop: "12px",
              paddingTop: "12px",
              borderTop: "1px solid #f1f5f9",
              fontSize: "0.90rem",
              lineHeight: 1.65,
              color: "#1e293b",
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}
          >
            <p style={{ margin: 0 }}>
              <strong>1. Intro (Paraphrase + Balanced Outline Statement):</strong> In recent times, an increasing number of households worldwide have embraced solar energy as a primary domestic power source. While this shift offers substantial environmental sustainability and long-term utility bill savings, it is accompanied by distinct drawbacks, most notably high upfront installation costs and dependency on weather conditions.
            </p>
            <p style={{ margin: 0 }}>
              <strong>2. Body Para 1 (Primary Advantages — Environmental Sustainability &amp; Utility Savings):</strong> On the one hand, the primary advantage of domestic solar power is its exceptional environmental sustainability. Unlike conventional electricity generated from fossil fuels, photovoltaic systems harness inexhaustible solar radiation without discharging greenhouse gases or airborne pollutants. Consequently, widespread household adoption drastically curtails domestic carbon footprints and contributes directly to mitigating global climate change. Furthermore, residential solar panels yield profound economic savings over time. Once the system is installed, families generate their own electricity, shielding themselves from escalating commercial utility tariffs and saving up to seventy percent on monthly power bills. Additionally, in jurisdictions with net-metering schemes, households can even sell surplus power back to the regional grid, turning their roofs into modest revenue streams.
            </p>
            <p style={{ margin: 0 }}>
              <strong>3. Body Para 2 (Primary Disadvantages — Capital Expenditure &amp; Weather Intermittency):</strong> On the other hand, the principal drawback of solar energy is the steep initial capital expenditure required for purchase and installation. High-efficiency solar panels, power inverters, mounting hardware, and professional labor demand an upfront investment often ranging between ten and twenty thousand dollars, making adoption prohibitive for lower-income households. Moreover, solar generation suffers from inherent weather dependency and seasonal intermittency. Solar panels produce minimal electricity during overcast days, heavy rainfall, or harsh winter seasons, and cannot generate power during night hours. To maintain continuous electricity supply, homeowners must either remain connected to the conventional grid or invest in expensive lithium-ion battery banks, which have limited lifespans and add substantial additional costs to the household budget.
            </p>
            <p style={{ margin: 0 }}>
              <strong>4. Conclusion (Sum-Up Trade-Offs + Forward-Looking Recommendation):</strong> In conclusion, household solar energy presents compelling advantages by delivering clean, renewable electricity and lowering long-term domestic power bills. However, these merits are counterbalanced by the heavy initial capital investment required and the system's inherent weather dependency, suggesting that government subsidies and advancements in battery storage will remain critical for widespread residential adoption.
            </p>
          </div>
        )}
      </div>

      {/* SECTION 4: ENGLISH NUANCE LAB EXTENSION LAUNCHPAD */}
      {onNavigateToNuanceLab && (
        <div
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
            border: "1.5px solid var(--border-subtle)",
            borderRadius: "18px",
            padding: "20px 24px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
            marginTop: "14px"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", flexWrap: "wrap", gap: "10px" }}>
            <div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a", margin: "0 0 4px" }}>
                Specialist Modules &amp; Vocabulary Series
              </h3>
              <p style={{ fontSize: "0.85rem", color: "#64748b", margin: 0 }}>
                Explore dedicated teaching modules for subtle lexical distinctions and confusing prepositions.
              </p>
            </div>
            <span style={{ fontSize: "0.76rem", fontWeight: 800, background: "#e0e7ff", color: "#3730a3", padding: "4px 10px", borderRadius: "8px" }}>
              Step 9 Teaching Extension
            </span>
          </div>

          <div
            onClick={onNavigateToNuanceLab}
            style={{
              background: "linear-gradient(135deg, #f8fafc, #eff6ff)",
              border: "1.5px solid #bfdbfe",
              borderRadius: "16px",
              padding: "20px 24px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              boxShadow: "0 2px 10px rgba(37, 99, 235, 0.06)",
              transition: "all 0.2s ease"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#dbeafe", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Sparkles size={20} color="#2563eb" />
                </div>
                <div>
                  <strong style={{ fontSize: "1.05rem", color: "#0f172a" }}>English Nuance Lab (Words Often Misunderstood)</strong>
                  <div style={{ fontSize: "0.78rem", color: "#64748b" }}>New Ep 02: RISE vs. RAISE vs. ARISE • Ep 01: BELOW vs. UNDER vs. UNDERNEATH</div>
                </div>
              </div>
              <span style={{ fontSize: "0.74rem", background: "#dbeafe", color: "#1e40af", fontWeight: 750, padding: "3px 10px", borderRadius: "6px", border: "1px solid #bfdbfe" }}>
                Classroom Reveal Mode
              </span>
            </div>
            <p style={{ fontSize: "0.86rem", color: "#475569", margin: "4px 0 0", lineHeight: 1.5 }}>
              Interactive SmartBoard lesson: Master critical Task 1 trends and Task 2 transitive traps (Rise vs. Raise vs. Arise), prepositions (Below vs. Under vs. Underneath), teacher diagnostic prompts, and student drills.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#2563eb", fontSize: "0.88rem", fontWeight: 750, marginTop: "6px" }}>
              <span>Launch Nuance Lab Page</span>
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
