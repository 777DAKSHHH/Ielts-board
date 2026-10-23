import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  X,
  Volume2,
  CheckCircle2,
  FileText,
  HelpCircle,
  Sparkles,
  BookOpen,
  Send,
  Layers,
  ShieldCheck,
  ChevronRight,
  Monitor
} from "lucide-react";
import { GENERAL_TASK1_DATA, GeneralTask1Bullet } from "../../data/generalTask1Data";
import { tactilePress } from "../../motion";

interface GeneralTask1ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSpeak?: (text: string) => void;
}

export const GeneralTask1Modal: React.FC<GeneralTask1ModalProps> = ({
  isOpen,
  onClose,
  onSpeak
}) => {
  const [activeTab, setActiveTab] = useState<"model" | "structure" | "vocab">("model");
  const [selectedBulletId, setSelectedBulletId] = useState<string>("bullet-1");
  const [accent, setAccent] = useState<"en-GB" | "en-US">("en-GB");

  if (!isOpen) return null;

  const data = GENERAL_TASK1_DATA;
  const activeBullet =
    data.bullets.find((b) => b.id === selectedBulletId) || data.bullets[0];

  const handleSpeakModel = () => {
    if (onSpeak) {
      onSpeak(data.modelLetter);
    }
  };

  return (
    <AnimatePresence>
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99999,
          background: "rgba(15, 23, 42, 0.75)",
          backdropFilter: "blur(6px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px"
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.2 }}
          style={{
            background: "#ffffff",
            borderRadius: "24px",
            width: "100%",
            maxWidth: "1380px",
            height: "92vh",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.3)",
            overflow: "hidden",
            border: "1.5px solid #cbd5e1"
          }}
        >
          {/* Top Header Bar */}
          <div
            style={{
              padding: "16px 24px",
              background: "#0f172a",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "12px",
              flexShrink: 0
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background: "#2563eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff"
                }}
              >
                <Mail size={22} />
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 800, margin: 0, color: "#ffffff" }}>
                    IELTS General Training Task 1 • Semi-Formal Letter Writing
                  </h3>
                  <span
                    style={{
                      background: "#3b82f6",
                      color: "#ffffff",
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      padding: "2px 8px",
                      borderRadius: "6px"
                    }}
                  >
                    Semi-Formal Register
                  </span>
                </div>
                <p style={{ fontSize: "0.8rem", color: "#94a3b8", margin: "2px 0 0 0" }}>
                  Hardware Procurement Inquiry &amp; Price Quotation Request • 150+ Words
                </p>
              </div>
            </div>

            {/* Action Buttons in Header */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {/* Voice playback */}
              {onSpeak && (
                <button
                  type="button"
                  onClick={handleSpeakModel}
                  style={{
                    background: "#1e293b",
                    border: "1px solid #334155",
                    color: "#ffffff",
                    padding: "7px 14px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.8rem",
                    fontWeight: 700
                  }}
                >
                  <Volume2 size={16} color="#60a5fa" /> Listen to Model Letter
                </button>
              )}

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                style={{
                  background: "#ef4444",
                  border: "none",
                  color: "#ffffff",
                  padding: "7px 16px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontWeight: 750,
                  fontSize: "0.82rem"
                }}
              >
                <X size={16} /> Exit to Academic Task 1
              </button>
            </div>
          </div>

          {/* Prompt Banner Strip */}
          <div
            style={{
              background: "#f8fafc",
              borderBottom: "1.5px solid #e2e8f0",
              padding: "12px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "12px",
              flexShrink: 0
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", flex: 1 }}>
              <FileText size={18} color="#2563eb" style={{ flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong style={{ fontSize: "0.88rem", color: "#0f172a", display: "block" }}>
                  Question Prompt:
                </strong>
                <span style={{ fontSize: "0.86rem", color: "#334155", lineHeight: 1.45 }}>
                  “You want to buy some computers. Therefore, write to a vendor seeking information and price quotation for the same. In your letter, introduce yourself, give details on what type of computers you are looking for, and request the quotation.”
                </span>
              </div>
            </div>

            {/* 3 Nav Tabs */}
            <div style={{ display: "flex", gap: "6px", background: "#e2e8f0", padding: "4px", borderRadius: "10px" }}>
              {[
                { id: "model", label: "Model Letter & 3 Bullets" },
                { id: "structure", label: "Format & Tone Rules" },
                { id: "vocab", label: "Procurement Lexicon" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  style={{
                    padding: "6px 14px",
                    borderRadius: "8px",
                    fontSize: "0.78rem",
                    fontWeight: 750,
                    border: "none",
                    background: activeTab === tab.id ? "#ffffff" : "transparent",
                    color: activeTab === tab.id ? "#0f172a" : "#64748b",
                    boxShadow: activeTab === tab.id ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
                    cursor: "pointer"
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Modal Main Scrollable Content */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "20px 24px",
              background: "#ffffff"
            }}
          >
            {activeTab === "model" && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1.35fr",
                  gap: "20px",
                  alignItems: "start"
                }}
              >
                {/* Left Side: 3-Bullet Interactive Selector & Guide */}
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <h4 style={{ fontSize: "0.98rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
                      The 3 Prompt Bullets (Tap to Inspect)
                    </h4>
                    <span style={{ fontSize: "0.75rem", color: "#64748b" }}>
                      All 3 must be fully covered
                    </span>
                  </div>

                  {data.bullets.map((b) => {
                    const isSelected = selectedBulletId === b.id;
                    return (
                      <div
                        key={b.id}
                        onClick={() => setSelectedBulletId(b.id)}
                        style={{
                          background: isSelected ? "#eff6ff" : "#f8fafc",
                          border: isSelected ? "2px solid #2563eb" : "1.5px solid #e2e8f0",
                          borderRadius: "16px",
                          padding: "16px",
                          cursor: "pointer",
                          transition: "all 0.15s ease",
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px"
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <span
                              style={{
                                width: "24px",
                                height: "24px",
                                borderRadius: "6px",
                                background: isSelected ? "#2563eb" : "#cbd5e1",
                                color: "#ffffff",
                                fontSize: "0.78rem",
                                fontWeight: 800,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                              }}
                            >
                              {b.bulletNumber}
                            </span>
                            <strong style={{ fontSize: "0.92rem", color: "#0f172a" }}>
                              Bullet {b.bulletNumber}: {b.promptText}
                            </strong>
                          </div>
                          <span
                            style={{
                              fontSize: "0.72rem",
                              fontWeight: 750,
                              color: isSelected ? "#2563eb" : "#64748b"
                            }}
                          >
                            {b.targetParagraph}
                          </span>
                        </div>

                        <p style={{ fontSize: "0.82rem", color: "#475569", margin: 0, lineHeight: 1.45 }}>
                          {b.explanation}
                        </p>

                        {isSelected && (
                          <div
                            style={{
                              marginTop: "4px",
                              paddingTop: "8px",
                              borderTop: "1px dashed #bfdbfe",
                              display: "flex",
                              flexDirection: "column",
                              gap: "4px"
                            }}
                          >
                            <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#1e40af" }}>
                              KEY COLLOCATIONS:
                            </span>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                              {b.keyCollocations.map((c) => (
                                <span
                                  key={c}
                                  style={{
                                    fontSize: "0.72rem",
                                    background: "#ffffff",
                                    padding: "2px 8px",
                                    borderRadius: "4px",
                                    border: "1px solid #bfdbfe",
                                    color: "#1e3a8a",
                                    fontWeight: 600
                                  }}
                                >
                                  {c}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {/* Smart Board Examiner Tip Card */}
                  <div
                    style={{
                      background: "#f0fdf4",
                      border: "1.5px solid #bbf7d0",
                      borderRadius: "16px",
                      padding: "14px 16px",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px"
                    }}
                  >
                    <ShieldCheck size={20} color="#16a34a" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <div style={{ fontSize: "0.82rem", color: "#166534", lineHeight: 1.5 }}>
                      <strong>Band 9 Examiner Strategy:</strong> Maintain a consistent <em>semi-formal</em> register throughout. You are writing to a business vendor, so avoid overly casual contractions (e.g. write <em>“I am writing”</em> instead of <em>“I'm writing”</em>) and use polite indirect inquiries (e.g. <em>“Could you please clarify...”</em>).
                    </div>
                  </div>
                </div>

                {/* Right Side: Full Band 9 Model Letter */}
                <div
                  style={{
                    background: "#f8fafc",
                    border: "1.5px solid #cbd5e1",
                    borderRadius: "20px",
                    padding: "24px 28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <Sparkles size={18} color="#2563eb" />
                      <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
                        Band 9 Semi-Formal Model Letter ({data.wordCount} words)
                      </h4>
                    </div>
                    <span
                      style={{
                        fontSize: "0.76rem",
                        fontWeight: 750,
                        color: "#16a34a",
                        background: "#dcfce7",
                        padding: "3px 10px",
                        borderRadius: "999px"
                      }}
                    >
                      Exceeds 150-Word Requirement ✓
                    </span>
                  </div>

                  {/* Letter Content Container */}
                  <div
                    style={{
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                      borderRadius: "14px",
                      padding: "22px 24px",
                      fontSize: "0.96rem",
                      lineHeight: 1.7,
                      color: "#1e293b",
                      fontFamily: "var(--font-sans)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "14px"
                    }}
                  >
                    {data.paragraphs.map((para) => {
                      const isHighlighted =
                        activeBullet && para.bulletRef === activeBullet.bulletNumber;
                      return (
                        <div
                          key={para.id}
                          style={{
                            background: isHighlighted ? "rgba(37, 99, 235, 0.06)" : "transparent",
                            borderLeft: isHighlighted ? "3px solid #2563eb" : "3px solid transparent",
                            paddingLeft: isHighlighted ? "12px" : "0",
                            transition: "all 0.2s ease"
                          }}
                        >
                          {para.bulletRef && (
                            <span
                              style={{
                                fontSize: "0.7rem",
                                fontWeight: 800,
                                textTransform: "uppercase",
                                color: isHighlighted ? "#2563eb" : "#94a3b8",
                                display: "block",
                                marginBottom: "2px"
                              }}
                            >
                              [Bullet {para.bulletRef}: {data.bullets.find((b) => b.bulletNumber === para.bulletRef)?.promptText}]
                            </span>
                          )}
                          <p style={{ margin: 0, whiteSpace: "pre-line" }}>{para.text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "structure" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0f172a" }}>
                    Standard Semi-Formal Letter Architecture
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "#64748b", margin: "2px 0 0 0" }}>
                    Follow this clear 5-section layout to achieve Band 9 in Coherence &amp; Cohesion (CC) and Task Achievement (TA):
                  </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "14px" }}>
                  <div style={{ background: "#f8fafc", padding: "16px", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
                    <div style={{ fontWeight: 800, color: "#2563eb", fontSize: "0.88rem" }}>1. Salutation</div>
                    <div style={{ fontWeight: 700, color: "#0f172a", marginTop: "4px" }}>“Dear Sales Manager,” / “Dear Mr. Jenkins,”</div>
                    <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "6px 0 0 0" }}>
                      Since you are writing to a company representative you have not personally met, use their job title or surname.
                    </p>
                  </div>

                  <div style={{ background: "#f8fafc", padding: "16px", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
                    <div style={{ fontWeight: 800, color: "#2563eb", fontSize: "0.88rem" }}>2. Purpose &amp; Introduction (Bullet 1)</div>
                    <div style={{ fontWeight: 700, color: "#0f172a", marginTop: "4px" }}>“I am writing to inquire about purchasing...”</div>
                    <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "6px 0 0 0" }}>
                      Introduce yourself, your position, and state the exact purpose of the letter in the very first sentence.
                    </p>
                  </div>

                  <div style={{ background: "#f8fafc", padding: "16px", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
                    <div style={{ fontWeight: 800, color: "#2563eb", fontSize: "0.88rem" }}>3. Specifications (Bullet 2)</div>
                    <div style={{ fontWeight: 700, color: "#0f172a", marginTop: "4px" }}>“Specifically, we are looking to procure...”</div>
                    <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "6px 0 0 0" }}>
                      Provide exact hardware parameters (CPU, RAM, storage, GPU, screens, quantity) to prove thorough task completion.
                    </p>
                  </div>

                  <div style={{ background: "#f8fafc", padding: "16px", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
                    <div style={{ fontWeight: 800, color: "#2563eb", fontSize: "0.88rem" }}>4. Quotation Request (Bullet 3)</div>
                    <div style={{ fontWeight: 700, color: "#0f172a", marginTop: "4px" }}>“Could you please provide an itemized quote...”</div>
                    <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "6px 0 0 0" }}>
                      Inquire about bulk pricing discounts, warranty terms, delivery timelines, and technical maintenance.
                    </p>
                  </div>

                  <div style={{ background: "#f8fafc", padding: "16px", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
                    <div style={{ fontWeight: 800, color: "#2563eb", fontSize: "0.88rem" }}>5. Professional Sign-off</div>
                    <div style={{ fontWeight: 700, color: "#0f172a", marginTop: "4px" }}>“Yours sincerely, Marcus Vance”</div>
                    <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "6px 0 0 0" }}>
                      Always finish with standard semi-formal complimentary close and your full name.
                    </p>
                  </div>
                </div>

                {/* Tone Comparison Dos & Don'ts */}
                <div style={{ marginTop: "10px" }}>
                  <h4 style={{ fontSize: "0.98rem", fontWeight: 800, color: "#0f172a", marginBottom: "12px" }}>
                    Tone &amp; Register: Dos vs Don'ts
                  </h4>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    {data.toneGuidelines.map((rule, idx) => (
                      <div
                        key={idx}
                        style={{
                          background: "#ffffff",
                          border: "1.5px solid #e2e8f0",
                          borderRadius: "14px",
                          padding: "14px 16px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "6px"
                        }}
                      >
                        <strong style={{ fontSize: "0.88rem", color: "#0f172a" }}>{rule.rule}</strong>
                        <div style={{ fontSize: "0.82rem", color: "#16a34a", background: "#f0fdf4", padding: "6px 10px", borderRadius: "6px" }}>
                          ✓ <strong>Do:</strong> {rule.doExample}
                        </div>
                        <div style={{ fontSize: "0.82rem", color: "#dc2626", background: "#fef2f2", padding: "6px 10px", borderRadius: "6px" }}>
                          ✗ <strong>Don't:</strong> {rule.dontExample}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "vocab" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0f172a" }}>
                    Commercial Procurement &amp; Hardware Lexicon
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "#64748b", margin: "2px 0 0 0" }}>
                    Band 9 vocabulary for business correspondence, technical computing specifications, and commercial inquiries:
                  </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "14px" }}>
                  {data.vocabList.map((v, i) => (
                    <div
                      key={v.term}
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
                        <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#2563eb", background: "#eff6ff", padding: "2px 8px", borderRadius: "6px" }}>
                          {v.category}
                        </span>
                        <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>#{i + 1}</span>
                      </div>
                      <strong style={{ fontSize: "0.98rem", color: "#0f172a" }}>{v.term}</strong>
                      <p style={{ fontSize: "0.84rem", color: "#475569", margin: 0, lineHeight: 1.45 }}>
                        {v.definition}
                      </p>
                      <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "8px 12px", fontSize: "0.82rem", fontStyle: "italic", color: "#334155" }}>
                        “{v.example}”
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
