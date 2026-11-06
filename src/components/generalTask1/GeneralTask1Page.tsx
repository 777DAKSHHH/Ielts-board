import React, { useState } from "react";
import {
  Mail,
  FileText,
  Sparkles,
  BookOpen,
  Volume2,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Award,
  Layers,
  HelpCircle,
  Copy,
  Check
} from "lucide-react";
import { ModuleType } from "../../types";
import { GENERAL_TASK1_DATA } from "../../data/generalTask1Data";

interface GeneralTask1PageProps {
  onSpeak?: (text: string) => void;
  accent?: "en-GB" | "en-US";
  onNavigateModule?: (mod: ModuleType) => void;
}

export const GeneralTask1Page: React.FC<GeneralTask1PageProps> = ({
  onSpeak,
  accent = "en-GB",
  onNavigateModule
}) => {
  const [activeTab, setActiveTab] = useState<"model" | "rules" | "lexical" | "prompt">("model");
  const [copied, setCopied] = useState(false);

  const data = GENERAL_TASK1_DATA;

  const getCategoryBadgeStyle = (category: string) => {
    switch (category) {
      case "Festive Traditions":
        return { bg: "#fef3c7", color: "#92400e" };
      case "Cultural Significance":
        return { bg: "#eff6ff", color: "#1e40af" };
      case "Personal Impressions":
        return { bg: "#f0fdf4", color: "#166534" };
      case "Informal Conversational":
        return { bg: "#fdf4ff", color: "#86198f" };
      case "Problem Description":
        return { bg: "#fee2e2", color: "#991b1b" };
      case "Constructive Solutions":
        return { bg: "#dcfce7", color: "#166534" };
      case "Escalation & Legal Action":
        return { bg: "#fef3c7", color: "#92400e" };
      default:
        return { bg: "#e0e7ff", color: "#3730a3" };
    }
  };

  const handleCopyLetter = () => {
    navigator.clipboard.writeText(
      `${data.salutation}\n\n${data.paragraphs.map((p) => p.text).join("\n\n")}\n\n${data.signoff}\n${data.senderName}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReadAloud = () => {
    if (onSpeak) {
      const fullLetter = `${data.salutation}. ${data.paragraphs.map((p) => p.text).join(" ")} ${data.signoff} ${data.senderName}`;
      onSpeak(fullLetter);
    }
  };

  return (
    <div
      className="standalone-scroll-container"
      style={{
        width: "100%",
        height: "100%",
        overflowY: "auto",
        overflowX: "hidden",
        WebkitOverflowScrolling: "touch",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "16px 20px 80px"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1360px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          fontFamily: "system-ui, -apple-system, sans-serif"
        }}
      >
        {/* Top Banner / Page Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          borderRadius: "24px",
          padding: "24px 28px",
          color: "#ffffff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
          boxShadow: "0 10px 25px -5px rgba(15, 23, 42, 0.2)"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span
              style={{
                fontSize: "0.76rem",
                fontWeight: 800,
                background: "#2563eb",
                color: "#ffffff",
                padding: "3px 10px",
                borderRadius: "6px",
                textTransform: "uppercase"
              }}
            >
              General Training • Writing Task 1
            </span>
            <span
              style={{
                fontSize: "0.76rem",
                fontWeight: 800,
                background: data.letterType === "Informal" ? "#d97706" : "#059669",
                color: "#ffffff",
                padding: "3px 10px",
                borderRadius: "6px"
              }}
            >
              {data.letterType} Register
            </span>
            <span
              style={{
                fontSize: "0.76rem",
                fontWeight: 800,
                background: "#334155",
                color: "#cbd5e1",
                padding: "3px 10px",
                borderRadius: "6px"
              }}
            >
              Exact PPT Structure Rules
            </span>
          </div>

          <h1 style={{ fontSize: "1.75rem", fontWeight: 800, margin: "4px 0 0", color: "#ffffff" }}>
            {data.title}
          </h1>
          <p style={{ fontSize: "0.92rem", color: "#94a3b8", margin: 0 }}>
            Master the strict 5-paragraph architectural format, critical linker rules, and authentic {data.letterType.toLowerCase()} expressions.
          </p>
        </div>

        {/* Action Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={handleReadAloud}
            style={{
              padding: "10px 18px",
              borderRadius: "12px",
              background: "#3b82f6",
              color: "#ffffff",
              border: "none",
              cursor: "pointer",
              fontWeight: 750,
              fontSize: "0.86rem",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)"
            }}
          >
            <Volume2 size={16} />
            <span>Read Letter Aloud</span>
          </button>

          <button
            type="button"
            onClick={handleCopyLetter}
            style={{
              padding: "10px 16px",
              borderRadius: "12px",
              background: "#1e293b",
              color: "#ffffff",
              border: "1.5px solid #475569",
              cursor: "pointer",
              fontWeight: 750,
              fontSize: "0.86rem",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            {copied ? <Check size={16} color="#4ade80" /> : <Copy size={16} />}
            <span>{copied ? "Copied to Clipboard!" : "Copy Model Letter"}</span>
          </button>

          {onNavigateModule && (
            <button
              type="button"
              onClick={() => onNavigateModule("task1")}
              style={{
                padding: "10px 16px",
                borderRadius: "12px",
                background: "#047857",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
                fontWeight: 750,
                fontSize: "0.86rem",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 4px 12px rgba(4, 120, 87, 0.3)"
              }}
            >
              <ArrowRight size={16} />
              <span>Back to Task 1 (Academic)</span>
            </button>
          )}
        </div>
      </div>

      {/* Navigation Pills Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
          background: "#ffffff",
          borderRadius: "16px",
          border: "1.5px solid var(--border-subtle, #cbd5e1)",
          padding: "8px 14px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
        }}
      >
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {[
            { id: "model", label: "Model Letter & 5-Paragraph Architecture", icon: <FileText size={16} /> },
            { id: "rules", label: "Official PPT Rules & Linker Matrix", icon: <ShieldCheck size={16} /> },
            { id: "lexical", label: `${data.letterType} Lexical Vault (12 Collocations)`, icon: <Sparkles size={16} /> },
            { id: "prompt", label: "Task Prompt & Situational Brief", icon: <HelpCircle size={16} /> }
          ].map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 16px",
                  borderRadius: "10px",
                  fontSize: "0.84rem",
                  fontWeight: 750,
                  border: isSelected ? "1.5px solid #0f172a" : "1px solid #e2e8f0",
                  background: isSelected ? "#0f172a" : "#f8fafc",
                  color: isSelected ? "#ffffff" : "#475569",
                  cursor: "pointer",
                  transition: "all 0.15s ease"
                }}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span
            style={{
              fontSize: "0.78rem",
              fontWeight: 800,
              padding: "4px 10px",
              borderRadius: "8px",
              background: "#eff6ff",
              color: "#1e40af",
              border: "1px solid #bfdbfe"
            }}
          >
            Word Count: {data.wordCount} words (Target: 150–180)
          </span>
        </div>
      </div>

      {/* TAB 1: MODEL LETTER & 5-PARAGRAPH ARCHITECTURE */}
      {activeTab === "model" && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.45fr 1fr",
            gap: "20px",
            alignItems: "start",
            width: "100%"
          }}
        >
          {/* Left Column: Authentic Stationary Letter Paper */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid #cbd5e1",
              borderRadius: "20px",
              padding: "36px 42px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              position: "relative"
            }}
          >
            {/* Watermark Banner */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1.5px solid #e2e8f0",
                paddingBottom: "14px",
                marginBottom: "8px"
              }}
            >
              <div>
                <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#64748b", textTransform: "uppercase" }}>
                  Official IELTS General Training Format
                </span>
                <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a" }}>
                  Model Response (Band 9 • {data.wordCount} Words)
                </div>
              </div>
              <span
                style={{
                  fontSize: "0.74rem",
                  fontWeight: 800,
                  background: "#dcfce7",
                  color: "#166534",
                  padding: "4px 10px",
                  borderRadius: "6px"
                }}
              >
                100% PPT Rule Compliant
              </span>
            </div>

            {/* Salutation */}
            <div>
              <div
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  color: "#2563eb",
                  textTransform: "uppercase",
                  marginBottom: "4px"
                }}
              >
                ✦ Salutation ({data.letterType === "Informal" ? "Informal with First Name" : data.letterType === "Semi-Formal" ? "Semi-Formal with Surname" : "Formal"})
              </div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#0f172a" }}>
                {data.salutation}
              </div>
            </div>

            {/* Dynamic 5 Paragraphs */}
            {data.paragraphs.map((p, idx) => {
              const borderColors = ["#3b82f6", "#ef4444", "#f59e0b", "#8b5cf6", "#10b981"];
              const titleColors = ["#1e40af", "#b91c1c", "#b45309", "#6d28d9", "#047857"];
              return (
                <div
                  key={p.id}
                  style={{
                    background: "#f8fafc",
                    borderLeft: `4px solid ${borderColors[idx % borderColors.length]}`,
                    padding: "16px 20px",
                    borderRadius: "0 12px 12px 0"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                    <span style={{ fontSize: "0.72rem", fontWeight: 800, color: titleColors[idx % titleColors.length], textTransform: "uppercase" }}>
                      {p.title}
                    </span>
                    <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#64748b" }}>
                      {p.wordCount} words
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "1.05rem",
                      color: "#1e293b",
                      lineHeight: 1.85,
                      margin: 0,
                      whiteSpace: "pre-line"
                    }}
                  >
                    {p.text}
                  </p>
                  {p.ruleHighlight && (
                    <div style={{ fontSize: "0.76rem", color: "#64748b", marginTop: "8px", fontStyle: "italic", borderTop: "1px dashed #e2e8f0", paddingTop: "6px" }}>
                      ✦ {p.ruleHighlight}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Complementary Closure & Sender Name */}
            <div style={{ marginTop: "12px", borderTop: "1.5px solid #e2e8f0", paddingTop: "16px" }}>
              <div
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  color: "#059669",
                  textTransform: "uppercase",
                  marginBottom: "4px"
                }}
              >
                ✦ Complementary Closure + First Name (Warm Informal Sign-off)
              </div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "1.05rem", color: "#1e293b", lineHeight: 1.6 }}>
                <div>{data.signoff}</div>
                <div style={{ fontWeight: 700, color: "#0f172a", marginTop: "4px" }}>{data.senderName}</div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Rules & Teaching Notes */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* The 5-Paragraph Law Card */}
            <div
              style={{
                background: "#ffffff",
                border: "1.5px solid #cbd5e1",
                borderRadius: "18px",
                padding: "20px",
                boxShadow: "var(--shadow-sm)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <ShieldCheck size={18} color="#2563eb" />
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
                  The 5-Paragraph PPT Blueprint
                </h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.84rem" }}>
                {data.pptFormatRules.map((rule, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "10px",
                      padding: "10px 12px"
                    }}
                  >
                    <div style={{ fontWeight: 800, color: "#0f172a", marginBottom: "2px" }}>
                      {rule.stage}
                    </div>
                    <div style={{ color: "#475569", lineHeight: 1.45 }}>{rule.description}</div>
                    <div style={{ fontSize: "0.78rem", color: "#2563eb", marginTop: "4px", fontStyle: "italic" }}>
                      ✦ Rule: {rule.specificRule}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why This Earns Band 9 */}
            <div
              style={{
                background: "#eff6ff",
                border: "1.5px solid #bfdbfe",
                borderRadius: "18px",
                padding: "20px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                <Award size={18} color="#1e40af" />
                <h4 style={{ fontSize: "0.98rem", fontWeight: 800, color: "#1e40af", margin: 0 }}>
                  Examiner Assessment Highlights
                </h4>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.82rem", color: "#1e3a8a", lineHeight: 1.5 }}>
                <div>
                  <strong>Task Achievement:</strong> Fully addresses all three prompt bullets (say how important, describe celebrations, explain what you like) with rich, authentic cultural Gujarati/Indian details.
                </div>
                <div>
                  <strong>Coherence &amp; Cohesion:</strong> Seamless conversational transitions with natural paragraphing and informal discourse markers.
                </div>
                <div>
                  <strong>Lexical Resource:</strong> Rich cultural collocations ('immense spiritual and cultural importance', 'clean slate', 'intricate rangoli patterns', 'vibrant traditional attire', 'touch the feet of our elders', 'open-hearted hospitality').
                </div>
                <div>
                  <strong>Grammatical Range:</strong> Natural informal structures: conversational exclamation, friendly enthusiasm, relative clauses, and compound-complex sentences.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: OFFICIAL PPT RULES & LINKER MATRIX */}
      {activeTab === "rules" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {/* Strict Linker Constraint Matrix */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid #cbd5e1",
              borderRadius: "20px",
              padding: "24px",
              boxShadow: "var(--shadow-sm)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <ShieldCheck size={22} color="#2563eb" />
              <div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
                  Official PPT Bullet-by-Bullet Directive Matrix
                </h3>
                <p style={{ fontSize: "0.84rem", color: "#64748b", margin: 0 }}>
                  The PPT explicitly mandates distinct structural objectives and discourse linkers for each body paragraph.
                </p>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px" }}>
              {data.bullets.map((b, idx) => (
                <div
                  key={b.id}
                  style={{
                    background: idx === 0 ? "#eff6ff" : idx === 1 ? "#fffbeb" : "#f0fdf4",
                    border: `1.5px solid ${idx === 0 ? "#bfdbfe" : idx === 1 ? "#fde68a" : "#bbf7d0"}`,
                    borderRadius: "14px",
                    padding: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <CheckCircle2 size={16} color={idx === 0 ? "#2563eb" : idx === 1 ? "#d97706" : "#16a34a"} />
                    <strong style={{ color: idx === 0 ? "#1e40af" : idx === 1 ? "#92400e" : "#166534", fontSize: "0.92rem" }}>
                      Bullet {b.bulletNumber}: {b.targetParagraph}
                    </strong>
                  </div>
                  <div style={{ fontSize: "0.82rem", fontWeight: 800, color: idx === 0 ? "#1e3a8a" : idx === 1 ? "#78350f" : "#14532d" }}>
                    RULE: {b.linkerRule}
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "#475569", margin: 0, lineHeight: 1.45 }}>
                    {b.explanation}
                  </p>
                  <div style={{ background: "#ffffff", padding: "10px", borderRadius: "8px", fontSize: "0.80rem", fontStyle: "italic", color: "#1e293b", marginTop: "auto", borderLeft: `3px solid ${idx === 0 ? "#2563eb" : idx === 1 ? "#d97706" : "#16a34a"}` }}>
                    “{b.modelExcerpt.length > 120 ? b.modelExcerpt.slice(0, 120) + "..." : b.modelExcerpt}”
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Full Stage-by-Stage PPT Breakdown */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid #cbd5e1",
              borderRadius: "20px",
              padding: "24px",
              boxShadow: "var(--shadow-sm)"
            }}
          >
            <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a", marginBottom: "14px" }}>
              Complete PPT Stage-by-Stage Guidelines
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {data.pptFormatRules.map((rule, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "180px 1fr",
                    gap: "14px",
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "12px",
                    padding: "12px 16px",
                    alignItems: "center"
                  }}
                >
                  <div>
                    <strong style={{ color: "#0f172a", fontSize: "0.9rem" }}>{rule.stage}</strong>
                    <div style={{ fontSize: "0.75rem", color: "#64748b" }}>{rule.description}</div>
                  </div>
                  <div style={{ fontSize: "0.84rem", color: "#334155", lineHeight: 1.45 }}>
                    {rule.specificRule}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: LEXICAL VAULT */}
      {activeTab === "lexical" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid #cbd5e1",
              borderRadius: "20px",
              padding: "24px",
              boxShadow: "var(--shadow-sm)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <Sparkles size={20} color="#2563eb" />
              <div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
                  {data.letterType} Lexical Vault &amp; Collocations
                </h3>
                <p style={{ fontSize: "0.84rem", color: "#64748b", margin: 0 }}>
                  12 high-scoring band 9 collocations and cultural expressions for authentic {data.letterType.toLowerCase()} letter writing.
                </p>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "14px" }}>
              {data.vocabList.map((item) => {
                const badgeStyle = getCategoryBadgeStyle(item.category);
                return (
                  <div
                    key={item.term}
                    style={{
                      background: "#f8fafc",
                      border: "1.5px solid #e2e8f0",
                      borderRadius: "14px",
                      padding: "16px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px"
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <strong style={{ fontSize: "0.95rem", color: "#0f172a" }}>{item.term}</strong>
                      <span
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 800,
                          padding: "2px 8px",
                          borderRadius: "6px",
                          background: badgeStyle.bg,
                          color: badgeStyle.color
                        }}
                      >
                        {item.category}
                      </span>
                    </div>

                    <p style={{ fontSize: "0.82rem", color: "#64748b", margin: 0, lineHeight: 1.45 }}>
                      {item.definition}
                    </p>

                    <div
                      style={{
                        background: "#ffffff",
                        borderLeft: "3px solid #2563eb",
                        borderRadius: "6px",
                        padding: "8px 10px",
                        fontSize: "0.82rem",
                        fontStyle: "italic",
                        color: "#1e293b",
                        marginTop: "auto",
                        lineHeight: 1.4
                      }}
                    >
                      “{item.example}”
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: TASK PROMPT & SITUATIONAL BRIEF */}
      {activeTab === "prompt" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid #cbd5e1",
              borderRadius: "20px",
              padding: "26px",
              boxShadow: "var(--shadow-sm)",
              display: "flex",
              flexDirection: "column",
              gap: "16px"
            }}
          >
            <div>
              <span className="apple-badge accent" style={{ marginBottom: "6px" }}>
                Official Task Instructions
              </span>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
                Writing Task 1 Prompt ({data.letterType} Letter)
              </h3>
            </div>

            <div
              style={{
                background: "#f8fafc",
                border: "1.5px solid #e2e8f0",
                borderRadius: "14px",
                padding: "20px",
                fontSize: "1.05rem",
                color: "#1e293b",
                lineHeight: 1.65
              }}
            >
              {data.questionText.split("\n\n").map((chunk, i) => (
                <p key={i} style={{ margin: i === 0 ? "0 0 10px" : i === 1 ? "0 0 10px" : "0" }}>
                  {chunk}
                </p>
              ))}
            </div>

            {/* Communicative Context Analysis */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
              <div style={{ background: "#eff6ff", padding: "14px", borderRadius: "12px", border: "1px solid #bfdbfe" }}>
                <strong style={{ color: "#1e40af", fontSize: "0.88rem", display: "block", marginBottom: "4px" }}>
                  Recipient &amp; Relationship
                </strong>
                <p style={{ fontSize: "0.82rem", color: "#1e3a8a", margin: 0, lineHeight: 1.4 }}>
                  English-speaking friend (Alex) working on a college academic project. Informal, warm, and highly supportive tone.
                </p>
              </div>

              <div style={{ background: "#fef3c7", padding: "14px", borderRadius: "12px", border: "1px solid #fde68a" }}>
                <strong style={{ color: "#92400e", fontSize: "0.88rem", display: "block", marginBottom: "4px" }}>
                  Cultural Authenticity
                </strong>
                <p style={{ fontSize: "0.82rem", color: "#78350f", margin: 0, lineHeight: 1.4 }}>
                  Authentic Indian / Gujarati New Year (Bestu Varas / Diwali season) context: spiritual clean slate, Saal Mubarak, sweets, and family blessings.
                </p>
              </div>

              <div style={{ background: "#f0fdf4", padding: "14px", borderRadius: "12px", border: "1px solid #bbf7d0" }}>
                <strong style={{ color: "#166534", fontSize: "0.88rem", display: "block", marginBottom: "4px" }}>
                  Tone &amp; PPT Requirements
                </strong>
                <p style={{ fontSize: "0.82rem", color: "#14532d", margin: 0, lineHeight: 1.4 }}>
                  Enthusiastic opening acknowledging the request, clear bullet paragraphing with natural discourse linkers, and warm sign-off from Devang.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

        {/* Bottom Return Bar */}
        {onNavigateModule && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#ffffff",
              border: "1.5px solid #e2e8f0",
              borderRadius: "16px",
              padding: "14px 20px",
              marginTop: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
            }}
          >
            <div>
              <strong style={{ color: "#0f172a", fontSize: "0.92rem", display: "block" }}>
                General Training Task 1 Masterclass Complete
              </strong>
              <span style={{ color: "#64748b", fontSize: "0.80rem" }}>
                Ready to return to the Academic comparative table transitions and connectors?
              </span>
            </div>

            <button
              type="button"
              onClick={() => onNavigateModule("task1")}
              style={{
                padding: "10px 20px",
                borderRadius: "12px",
                background: "#0f172a",
                color: "#ffffff",
                border: "none",
                fontWeight: 750,
                fontSize: "0.86rem",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(15, 23, 42, 0.15)"
              }}
            >
              <ArrowRight size={16} />
              <span>Back to Step 8 (Academic Task 1)</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
