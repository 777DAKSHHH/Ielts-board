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

  const fullModelEssay = `It is widely argued that commercial enterprises ought to shoulder social responsibilities extending beyond their primary objective of making money. However, I strongly disagree with this view, as the fundamental purpose of any business is to maximize profit and guarantee economic survival, whereas social welfare remains the exclusive responsibility of government authorities.

To begin with, the fundamental justification for rejecting corporate social obligations is that commercial viability remains the indispensable prerequisite for enterprise existence. The primary purpose of any private firm is to generate revenue, service operational expenses, and avoid insolvency. If a company fails to operate profitably, it inevitably collapses, precipitating mass unemployment, disrupted supply chains, and the immediate destruction of capital. For instance, small and medium-sized enterprises operating on razor-thin profit margins must prioritize revenue generation simply to meet payroll, pay rent, and service supplier invoices; compelling them to divert scarce financial resources toward broader social initiatives would jeopardize their very survival.

Furthermore, business managers bear a strict fiduciary responsibility to deliver financial returns to shareholders and pension funds whose capital is invested in the enterprise. Diverting corporate earnings toward discretionary social causes without shareholder consent represents a misallocation of private capital. Crucially, profitable corporations already make an immense societal contribution by providing millions of citizens with stable livelihoods and contributing substantial corporate taxes. It is the constitutional duty of elected governments—not private corporations—to utilize these tax revenues to build public healthcare, schools, and environmental infrastructure, as state authorities possess the democratic mandate and specialized competence to manage public welfare.

On the other hand, critics argue that businesses have a social responsibility because industrial production consumes public natural resources and generates environmental degradation. While it is undeniable that firms must not pollute local ecosystems or exploit vulnerable workers, adhering to emission standards and occupational safety regulations represents statutory compliance rather than voluntary social philanthropy. Enterprises must operate within the boundaries of the law, but expecting them to proactively solve complex societal challenges beyond legal compliance confuses the distinct roles of private enterprise and the state.

In conclusion, although companies must operate within statutory environmental and employment codes, I firmly disagree that they possess social responsibilities beyond generating profit. The primary duty of commerce is economic viability, job preservation, and shareholder returns, leaving public welfare initiatives to governments financed through corporate taxation.`;

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
            Extreme concise one-liner revision checks for your Band 9 Opinion response (5-Paragraph Architecture).
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

      {/* SECTION 1: 5-PARAGRAPH ARCHITECTURE (STRICT ONE-LINERS) */}
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
            5-Paragraph Opinion Structure (One-Liner Revision)
          </h3>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {/* Intro */}
          <div style={{ background: "#faf5ff", border: "1px solid #e9d5ff", borderRadius: "10px", padding: "10px 14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 800, background: "#9333ea", color: "#ffffff", padding: "2px 7px", borderRadius: "4px" }}>
                1. INTRO
              </span>
              <strong style={{ fontSize: "0.86rem", color: "#6b21a8" }}>Paraphrase Question + Disagree Thesis</strong>
            </div>
            <p style={{ margin: "4px 0 0", fontSize: "0.86rem", color: "#3b0764", lineHeight: 1.45 }}>
              Paraphrase businesses making money vs social duty + declare firm disagreement, asserting that economic solvency is the sole corporate duty while social welfare belongs to government.
            </p>
          </div>

          {/* Body 1 */}
          <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "10px", padding: "10px 14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 800, background: "#2563eb", color: "#ffffff", padding: "2px 7px", borderRadius: "4px" }}>
                2. BODY PARA 1 (OPINION - DISAGREE)
              </span>
              <strong style={{ fontSize: "0.86rem", color: "#1d4ed8" }}>Commercial Solvency &amp; Survival Prerequisite</strong>
            </div>
            <p style={{ margin: "4px 0 0", fontSize: "0.86rem", color: "#1e3a8a", lineHeight: 1.45 }}>
              <strong>Point:</strong> Primary purpose is financial survival and insolvency prevention → <strong>Evidence:</strong> Insolvent firms cause mass layoffs and destroy capital → <strong>Example:</strong> SMEs must prioritize revenue simply to meet rent and payroll.
            </p>
          </div>

          {/* Body 2 */}
          <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "10px", padding: "10px 14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 800, background: "#2563eb", color: "#ffffff", padding: "2px 7px", borderRadius: "4px" }}>
                3. BODY PARA 2 (OPINION - DISAGREE)
              </span>
              <strong style={{ fontSize: "0.86rem", color: "#1d4ed8" }}>Fiduciary Duty &amp; Government Welfare Mandate</strong>
            </div>
            <p style={{ margin: "4px 0 0", fontSize: "0.86rem", color: "#1e3a8a", lineHeight: 1.45 }}>
              <strong>Point:</strong> Executives owe fiduciary duty to shareholders/pensioners; corporate taxes fund state welfare → <strong>Evidence:</strong> State has the democratic mandate for public goods → <strong>Example:</strong> Corporate tax revenues financing healthcare and schools.
            </p>
          </div>

          {/* Body 3 */}
          <div style={{ background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: "10px", padding: "10px 14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 800, background: "#ea580c", color: "#ffffff", padding: "2px 7px", borderRadius: "4px" }}>
                4. BODY PARA 3 (NON-OPINION - CONCESSION)
              </span>
              <strong style={{ fontSize: "0.86rem", color: "#c2410c" }}>Statutory Regulatory Compliance vs Voluntary Altruism</strong>
            </div>
            <p style={{ margin: "4px 0 0", fontSize: "0.86rem", color: "#7c2d12", lineHeight: 1.45 }}>
              <strong>Point:</strong> Acknowledge that firms must respect environmental thresholds and labor codes → <strong>Evidence:</strong> Obeying laws is mandatory statutory compliance, not voluntary philanthropy → <strong>Example:</strong> Installing smoke filters to meet legal safety codes.
            </p>
          </div>

          {/* Conclusion */}
          <div style={{ background: "#f8fafc", border: "1px solid #cbd5e1", borderRadius: "10px", padding: "10px 14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 800, background: "#0f172a", color: "#ffffff", padding: "2px 7px", borderRadius: "4px" }}>
                5. CONCLUSION
              </span>
              <strong style={{ fontSize: "0.86rem", color: "#0f172a" }}>Sum-Up Main Points + Restate Disagree Opinion</strong>
            </div>
            <p style={{ margin: "4px 0 0", fontSize: "0.86rem", color: "#1e293b", lineHeight: 1.45 }}>
              Synthesize statutory compliance vs commercial viability, restating that commerce's core duty is profit and jobs, while public welfare belongs to tax-funded governments.
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
              rule: "Clear position presented in Intro and Conclusion, supported by 2 opinion paragraphs and 1 concession paragraph."
            },
            {
              code: "CC",
              title: "Coherence & Cohesion",
              color: "#16a34a",
              bg: "#f0fdf4",
              rule: "Seamless progression markers: 'To begin with... Furthermore... On the other hand... In conclusion...'."
            },
            {
              code: "LR",
              title: "Lexical Resource",
              color: "#9333ea",
              bg: "#faf5ff",
              rule: "Natural Band 9 CSR & business lexis: 'philanthropy', 'viability', 'stewardship', 'exploitation', 'remuneration'."
            },
            {
              code: "GRA",
              title: "Grammatical Accuracy",
              color: "#d97706",
              bg: "#fffbeb",
              rule: "Complex concessive clauses ('even though...', 'while...') and passive academic phrasing without error."
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
              Complete Band 9 Model Essay (365 Words • 5-Paragraph Opinion Architecture)
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
              <strong>1. Intro (Paraphrase + Disagree Opinion):</strong> It is widely argued that commercial enterprises ought to shoulder social responsibilities extending beyond their primary objective of making money. However, I strongly disagree with this view, as the fundamental purpose of any business is to maximize profit and guarantee economic survival, whereas social welfare remains the exclusive responsibility of government authorities.
            </p>
            <p style={{ margin: 0 }}>
              <strong>2. Body Para 1 (Opinion Side — Commercial Solvency &amp; Survival):</strong> To begin with, the fundamental justification for rejecting corporate social obligations is that commercial viability remains the indispensable prerequisite for enterprise existence. The primary purpose of any private firm is to generate revenue, service operational expenses, and avoid insolvency. If a company fails to operate profitably, it inevitably collapses, precipitating mass unemployment, disrupted supply chains, and the immediate destruction of capital. For instance, small and medium-sized enterprises operating on razor-thin profit margins must prioritize revenue generation simply to meet payroll, pay rent, and service supplier invoices; compelling them to divert scarce financial resources toward broader social initiatives would jeopardize their very survival.
            </p>
            <p style={{ margin: 0 }}>
              <strong>3. Body Para 2 (Opinion Side — Fiduciary Duty &amp; Government Social Mandate):</strong> Furthermore, business managers bear a strict fiduciary responsibility to deliver financial returns to shareholders and pension funds whose capital is invested in the enterprise. Diverting corporate earnings toward discretionary social causes without shareholder consent represents a misallocation of private capital. Crucially, profitable corporations already make an immense societal contribution by providing millions of citizens with stable livelihoods and contributing substantial corporate taxes. It is the constitutional duty of elected governments—not private corporations—to utilize these tax revenues to build public healthcare, schools, and environmental infrastructure, as state authorities possess the democratic mandate and specialized competence to manage public welfare.
            </p>
            <p style={{ margin: 0 }}>
              <strong>4. Body Para 3 (Non-Opinion Side — Statutory Regulatory Compliance Concession):</strong> On the other hand, critics argue that businesses have a social responsibility because industrial production consumes public natural resources and generates environmental degradation. While it is undeniable that firms must not pollute local ecosystems or exploit vulnerable workers, adhering to emission standards and occupational safety regulations represents statutory compliance rather than voluntary social philanthropy. Enterprises must operate within the boundaries of the law, but expecting them to proactively solve complex societal challenges beyond legal compliance confuses the distinct roles of private enterprise and the state.
            </p>
            <p style={{ margin: 0 }}>
              <strong>5. Conclusion (Sum-Up + Restate Disagree Opinion):</strong> In conclusion, although companies must operate within statutory environmental and employment codes, I firmly disagree that they possess social responsibilities beyond generating profit. The primary duty of commerce is economic viability, job preservation, and shareholder returns, leaving public welfare initiatives to governments financed through corporate taxation.
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
                  <div style={{ fontSize: "0.78rem", color: "#64748b" }}>Episode 01: BELOW vs. UNDER vs. UNDERNEATH</div>
                </div>
              </div>
              <span style={{ fontSize: "0.74rem", background: "#dbeafe", color: "#1e40af", fontWeight: 750, padding: "3px 10px", borderRadius: "6px", border: "1px solid #bfdbfe" }}>
                Classroom Reveal Mode
              </span>
            </div>
            <p style={{ fontSize: "0.86rem", color: "#475569", margin: "4px 0 0", lineHeight: 1.5 }}>
              Interactive SmartBoard lesson: Ask students first about imaginary horizontal lines (below), 3D vertical shelter / abstract states (under), and hidden layers (underneath), then reveal definitive rules and practice drills.
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
