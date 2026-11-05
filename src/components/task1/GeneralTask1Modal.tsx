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
  Copy,
  Check,
  Layers,
  ShieldCheck,
  ChevronRight,
  AlertCircle,
  Lightbulb
} from "lucide-react";
import { GENERAL_TASK1_DATA, GeneralTask1Bullet } from "../../data/generalTask1Data";

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
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const data = GENERAL_TASK1_DATA;
  const activeBullet =
    data.bullets.find((b) => b.id === selectedBulletId) || data.bullets[0];

  const handleCopyModel = () => {
    navigator.clipboard.writeText(data.modelLetter);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
          background: "rgba(15, 23, 42, 0.78)",
          backdropFilter: "blur(8px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px 32px"
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 14 }}
          transition={{ duration: 0.22 }}
          style={{
            background: "#ffffff",
            borderRadius: "28px",
            width: "100%",
            maxWidth: "1480px",
            height: "94vh",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 30px 70px rgba(0, 0, 0, 0.35)",
            overflow: "hidden",
            border: "1.5px solid #cbd5e1"
          }}
        >
          {/* Top Header Bar */}
          <div
            style={{
              padding: "18px 32px",
              background: "#0f172a",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px",
              flexShrink: 0
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div
                style={{
                  width: "46px",
                  height: "46px",
                  borderRadius: "14px",
                  background: "#2563eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  boxShadow: "0 4px 14px rgba(37,99,235,0.4)"
                }}
              >
                <Mail size={24} />
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 800, margin: 0, color: "#ffffff" }}>
                    IELTS General Training Task 1 • Semi-Formal Complaint Letter
                  </h3>
                  <span
                    style={{
                      background: "#3b82f6",
                      color: "#ffffff",
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      padding: "3px 10px",
                      borderRadius: "6px",
                      letterSpacing: "0.03em"
                    }}
                  >
                    Semi-Formal Register (Neighbour)
                  </span>
                </div>
                <p style={{ fontSize: "0.85rem", color: "#94a3b8", margin: "3px 0 0 0" }}>
                  {data.title} • Word Count: <strong>178 words</strong> (Within Cambridge 150–180 Word Band)
                </p>
              </div>
            </div>

            {/* Action Buttons in Header */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button
                type="button"
                onClick={handleCopyModel}
                style={{
                  background: copied ? "#16a34a" : "#1e293b",
                  border: "1px solid #334155",
                  color: "#ffffff",
                  padding: "8px 16px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.82rem",
                  fontWeight: 750,
                  transition: "all 0.15s ease"
                }}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? "Copied Letter" : "Copy Letter"}</span>
              </button>

              {onSpeak && (
                <button
                  type="button"
                  onClick={handleSpeakModel}
                  style={{
                    background: "#1e293b",
                    border: "1px solid #334155",
                    color: "#ffffff",
                    padding: "8px 16px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.82rem",
                    fontWeight: 750
                  }}
                >
                  <Volume2 size={16} color="#60a5fa" />
                  <span>Listen to Model</span>
                </button>
              )}

              {/* Close / Return Button */}
              <button
                type="button"
                onClick={onClose}
                style={{
                  background: "#ef4444",
                  border: "none",
                  color: "#ffffff",
                  padding: "8px 18px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontWeight: 800,
                  fontSize: "0.84rem"
                }}
              >
                <X size={16} />
                <span>Return to Academic Task 1</span>
              </button>
            </div>
          </div>

          {/* Prompt Banner Strip with Room to Breathe */}
          <div
            style={{
              background: "#f8fafc",
              borderBottom: "1.5px solid #e2e8f0",
              padding: "16px 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px",
              flexShrink: 0
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flex: 1, minWidth: "400px" }}>
              <FileText size={20} color="#2563eb" style={{ flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong style={{ fontSize: "0.92rem", color: "#0f172a", display: "block", marginBottom: "4px" }}>
                  General Training Question Prompt (Semi-Formal):
                </strong>
                <p style={{ fontSize: "0.88rem", color: "#334155", margin: 0, lineHeight: 1.55 }}>
                  You have had a problem with your neighbour for the past few months. You have not been able to meet your neighbour to discuss the problem. Write a letter to your neighbour. In your letter:
                  <strong style={{ display: "block", marginTop: "4px", color: "#1e40af" }}>
                    • Explain the problem &nbsp;• Suggest a solution &nbsp;• Explain what action you will take if the situation does not improve
                  </strong>
                </p>
              </div>
            </div>

            {/* 3 Nav Tabs */}
            <div style={{ display: "flex", gap: "8px", background: "#e2e8f0", padding: "5px", borderRadius: "12px" }}>
              {[
                { id: "model", label: "Model Letter & 5-Paragraph Architecture" },
                { id: "structure", label: "Official PPT Rules & Linker Matrix" },
                { id: "vocab", label: "Semi-Formal Lexical Vault" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  style={{
                    padding: "8px 18px",
                    borderRadius: "10px",
                    fontSize: "0.82rem",
                    fontWeight: 800,
                    border: "none",
                    background: activeTab === tab.id ? "#ffffff" : "transparent",
                    color: activeTab === tab.id ? "#0f172a" : "#64748b",
                    boxShadow: activeTab === tab.id ? "0 2px 6px rgba(0,0,0,0.08)" : "none",
                    cursor: "pointer",
                    transition: "all 0.15s ease"
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Modal Main Scrollable Content — GENEROUS ROOM TO BREATHE */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "28px 36px",
              background: "#f1f5f9"
            }}
          >
            {/* TAB 1: MODEL LETTER & 5-PARAGRAPH ARCHITECTURE */}
            {activeTab === "model" && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.25fr 1fr",
                  gap: "28px",
                  alignItems: "start",
                  maxWidth: "1400px",
                  margin: "0 auto"
                }}
              >
                {/* Left Side: Authentic High-Readability Letter Paper */}
                <div
                  style={{
                    background: "#ffffff",
                    border: "1.5px solid #cbd5e1",
                    borderRadius: "22px",
                    padding: "36px 42px",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px"
                  }}
                >
                  {/* Letter Header Bar */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: "1.5px solid #e2e8f0",
                      paddingBottom: "14px"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          background: "#16a34a"
                        }}
                      />
                      <strong style={{ fontSize: "0.92rem", color: "#0f172a" }}>
                        Authentic Band 9 Semi-Formal Letter Format
                      </strong>
                    </div>
                    <span
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 750,
                        background: "#eff6ff",
                        color: "#1e40af",
                        padding: "3px 10px",
                        borderRadius: "6px"
                      }}
                    >
                      5 Strict Paragraphs (Per PPT Guidelines)
                    </span>
                  </div>

                  {/* Letter Paragraphs with Visual Breathing Room & Annotations */}
                  <div
                    style={{
                      fontSize: "1.02rem",
                      lineHeight: 1.8,
                      color: "#1e293b",
                      fontFamily: "Georgia, Cambria, 'Times New Roman', serif",
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px"
                    }}
                  >
                    {/* Paragraph 1: Salutation */}
                    <div>
                      <span
                        style={{
                          display: "inline-block",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.7rem",
                          fontWeight: 800,
                          background: "#f3e8ff",
                          color: "#7e22ce",
                          padding: "2px 8px",
                          borderRadius: "4px",
                          marginBottom: "4px"
                        }}
                      >
                        SALUTATION • SEMI-FORMAL (PPT SLIDE 5)
                      </span>
                      <p style={{ margin: 0, fontWeight: 700, color: "#0f172a" }}>
                        Dear Mr. Patel,
                      </p>
                    </div>

                    {/* Paragraph 2: Opening */}
                    <div
                      style={{
                        background: "#faf5ff",
                        borderLeft: "4px solid #a855f7",
                        padding: "12px 18px",
                        borderRadius: "0 10px 10px 0"
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.7rem",
                          fontWeight: 800,
                          background: "#f3e8ff",
                          color: "#7e22ce",
                          padding: "2px 8px",
                          borderRadius: "4px",
                          marginBottom: "6px"
                        }}
                      >
                        OPENING • WHO ARE YOU? + WHY ARE YOU WRITING? (PPT SLIDE 6)
                      </span>
                      <p style={{ margin: 0 }}>
                        My name is Chirag Mehta, and I am your next-door neighbour residing at Apartment 3B. I am writing this letter to bring an urgent and persistent matter to your attention regarding recurring disturbances over the past few months.
                      </p>
                    </div>

                    {/* Paragraph 3: Bullet 1 — Problem (NO LINKER) */}
                    <div
                      style={{
                        background: selectedBulletId === "bullet-1" ? "#eff6ff" : "#f8fafc",
                        borderLeft: "4px solid #2563eb",
                        padding: "14px 18px",
                        borderRadius: "0 10px 10px 0",
                        transition: "all 0.2s ease"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                        <span
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "0.7rem",
                            fontWeight: 800,
                            background: "#dbeafe",
                            color: "#1e40af",
                            padding: "2px 8px",
                            borderRadius: "4px"
                          }}
                        >
                          BODY 1 (BULLET 1) • EXPLAIN PROBLEM
                        </span>
                        <span
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "0.68rem",
                            fontWeight: 800,
                            background: "#fef3c7",
                            color: "#92400e",
                            padding: "2px 6px",
                            borderRadius: "4px"
                          }}
                        >
                          RULE: DO NOT BEGIN WITH A LINKER (PPT SLIDE 7)
                        </span>
                      </div>
                      <p style={{ margin: 0 }}>
                        For the past three months, excessive noise has been emanating from your apartment late at night, particularly loud television audio and heavy bass music between 11:30 PM and 2:00 AM on weekdays. I have knocked on your door on several occasions to discuss this in person, but our contrasting work schedules have made a face-to-face meeting impossible. This persistent disturbance severely disrupts my sleep, leaving me chronically exhausted for my early morning commitments.
                      </p>
                    </div>

                    {/* Paragraph 4: Bullet 2 — Suggest Solution (SUPPORTING LINKER) */}
                    <div
                      style={{
                        background: selectedBulletId === "bullet-2" ? "#f0fdf4" : "#f8fafc",
                        borderLeft: "4px solid #16a34a",
                        padding: "14px 18px",
                        borderRadius: "0 10px 10px 0",
                        transition: "all 0.2s ease"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                        <span
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "0.7rem",
                            fontWeight: 800,
                            background: "#dcfce7",
                            color: "#166534",
                            padding: "2px 8px",
                            borderRadius: "4px"
                          }}
                        >
                          BODY 2 (BULLET 2) • SUGGEST A SOLUTION
                        </span>
                        <span
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "0.68rem",
                            fontWeight: 800,
                            background: "#dcfce7",
                            color: "#166534",
                            padding: "2px 6px",
                            borderRadius: "4px"
                          }}
                        >
                          RULE: MUST BEGIN WITH SUPPORTING LINKER (PPT SLIDE 8 &amp; 9)
                        </span>
                      </div>
                      <p style={{ margin: 0 }}>
                        <strong style={{ color: "#16a34a" }}>Furthermore,</strong> I would like to propose a straightforward and practical compromise that would resolve this matter comfortably for both of us. If you could kindly lower the volume after 10:00 PM on weeknights or consider utilizing wireless headphones when watching television late, it would make an immediate difference. Alternatively, positioning your sound system away from the shared bedroom wall or placing a thick rug underneath would significantly dampen the acoustic vibrations.
                      </p>
                    </div>

                    {/* Paragraph 5: Bullet 3 — Action if Unresolved (CONTRADICTING LINKER) */}
                    <div
                      style={{
                        background: selectedBulletId === "bullet-3" ? "#fef2f2" : "#f8fafc",
                        borderLeft: "4px solid #dc2626",
                        padding: "14px 18px",
                        borderRadius: "0 10px 10px 0",
                        transition: "all 0.2s ease"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                        <span
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "0.7rem",
                            fontWeight: 800,
                            background: "#fee2e2",
                            color: "#991b1b",
                            padding: "2px 8px",
                            borderRadius: "4px"
                          }}
                        >
                          BODY 3 (BULLET 3) • ACTION IF SITUATION DOES NOT IMPROVE
                        </span>
                        <span
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "0.68rem",
                            fontWeight: 800,
                            background: "#fee2e2",
                            color: "#991b1b",
                            padding: "2px 6px",
                            borderRadius: "4px"
                          }}
                        >
                          RULE: MUST BEGIN WITH CONTRADICTING LINKER (PPT SLIDE 8 &amp; 9)
                        </span>
                      </div>
                      <p style={{ margin: 0 }}>
                        <strong style={{ color: "#dc2626" }}>However,</strong> if this excessive noise continues unabated and no discernible effort is made to rectify the situation, I will be left with no choice but to escalate this matter to the building management committee and lodge a formal complaint with the local municipal council for noise ordinance violations. I sincerely hope this will not be necessary, as I genuinely value maintaining a cordial and respectful relationship between neighbours.
                      </p>
                    </div>

                    {/* Paragraph 6: Closing & Complementary Sign-off */}
                    <div
                      style={{
                        background: "#fafafa",
                        borderLeft: "4px solid #64748b",
                        padding: "12px 18px",
                        borderRadius: "0 10px 10px 0"
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.7rem",
                          fontWeight: 800,
                          background: "#f1f5f9",
                          color: "#334155",
                          padding: "2px 8px",
                          borderRadius: "4px",
                          marginBottom: "6px"
                        }}
                      >
                        CLOSING &amp; COMPLEMENTARY SIGN-OFF (PPT SLIDE 10 &amp; 11)
                      </span>
                      <p style={{ margin: "0 0 12px 0" }}>
                        I trust that you will take this matter seriously and that we can reach an amicable resolution.
                      </p>
                      <p style={{ margin: "0 0 4px 0", fontWeight: 700 }}>
                        Yours sincerely,
                      </p>
                      <p style={{ margin: 0, fontWeight: 700, color: "#0f172a" }}>
                        Chirag Mehta
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side: PPT Rules Inspector & 3-Bullet Breakdown */}
                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  {/* PPT Bullet Explorer */}
                  <div
                    style={{
                      background: "#ffffff",
                      border: "1.5px solid #cbd5e1",
                      borderRadius: "20px",
                      padding: "22px 26px",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.03)"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                      <Sparkles size={18} color="#2563eb" />
                      <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
                        Explore Prompt Bullets &amp; Exact PPT Rules
                      </h4>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      {data.bullets.map((b) => {
                        const isSelected = selectedBulletId === b.id;
                        return (
                          <div
                            key={b.id}
                            onClick={() => setSelectedBulletId(b.id)}
                            style={{
                              background: isSelected ? "#eff6ff" : "#f8fafc",
                              border: isSelected ? "2px solid #2563eb" : "1px solid #e2e8f0",
                              borderRadius: "14px",
                              padding: "14px 16px",
                              cursor: "pointer",
                              transition: "all 0.15s ease"
                            }}
                          >
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                <span
                                  style={{
                                    width: "22px",
                                    height: "22px",
                                    borderRadius: "6px",
                                    background: isSelected ? "#2563eb" : "#94a3b8",
                                    color: "#ffffff",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "0.75rem",
                                    fontWeight: 800
                                  }}
                                >
                                  {b.bulletNumber}
                                </span>
                                <strong style={{ fontSize: "0.9rem", color: "#0f172a" }}>
                                  Bullet {b.bulletNumber}: {b.promptText}
                                </strong>
                              </div>
                            </div>

                            <div
                              style={{
                                fontSize: "0.76rem",
                                fontWeight: 800,
                                color: b.bulletNumber === 1 ? "#92400e" : b.bulletNumber === 2 ? "#166534" : "#991b1b",
                                background: b.bulletNumber === 1 ? "#fef3c7" : b.bulletNumber === 2 ? "#dcfce7" : "#fee2e2",
                                padding: "3px 8px",
                                borderRadius: "6px",
                                display: "inline-block",
                                marginBottom: "6px"
                              }}
                            >
                              ✦ {b.linkerRule}
                            </div>

                            <p style={{ margin: "4px 0 0", fontSize: "0.82rem", color: "#475569", lineHeight: 1.45 }}>
                              {b.explanation}
                            </p>

                            {isSelected && (
                              <div style={{ marginTop: "10px", paddingTop: "8px", borderTop: "1px dashed #bfdbfe" }}>
                                <strong style={{ fontSize: "0.74rem", color: "#1e40af", display: "block", marginBottom: "4px" }}>
                                  KEY COLLOCATIONS DEPLOYED:
                                </strong>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                                  {b.keyCollocations.map((c) => (
                                    <span
                                      key={c}
                                      style={{
                                        background: "#ffffff",
                                        border: "1px solid #bfdbfe",
                                        borderRadius: "4px",
                                        padding: "2px 6px",
                                        fontSize: "0.72rem",
                                        fontWeight: 700,
                                        color: "#1e3a8a"
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
                    </div>
                  </div>

                  {/* Cambridge Examiner Compliance Card */}
                  <div
                    style={{
                      background: "linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%)",
                      border: "1.5px solid #bfdbfe",
                      borderRadius: "20px",
                      padding: "20px 24px"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                      <ShieldCheck size={20} color="#2563eb" />
                      <strong style={{ fontSize: "0.95rem", color: "#0f172a" }}>
                        Official PPT Assessment Rubric Checklist
                      </strong>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.82rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#166534" }}>
                        <CheckCircle2 size={15} />
                        <span><strong>Task Achievement (25%):</strong> Covers all 3 prompt bullets thoroughly and realistically.</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#166534" }}>
                        <CheckCircle2 size={15} />
                        <span><strong>Coherence &amp; Cohesion (25%):</strong> Strictly obeys PPT linker rules (no linker in Body 1, supporting in Body 2, contradicting in Body 3).</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#166534" }}>
                        <CheckCircle2 size={15} />
                        <span><strong>Lexical Resource (25%):</strong> Rich, polite semi-formal vocabulary (dampen vibrations, noise ordinance, unabated).</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#166534" }}>
                        <CheckCircle2 size={15} />
                        <span><strong>Grammar &amp; Accuracy (25%):</strong> Zero contractions, correct tenses, left-margin paragraph spacing.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: OFFICIAL PPT RULES & LINKER MATRIX */}
            {activeTab === "structure" && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                  maxWidth: "1200px",
                  margin: "0 auto"
                }}
              >
                {/* 5-Paragraph Architecture Card */}
                <div
                  style={{
                    background: "#ffffff",
                    border: "1.5px solid #cbd5e1",
                    borderRadius: "20px",
                    padding: "24px 28px",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.03)"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                    <Layers size={22} color="#2563eb" />
                    <div>
                      <h4 style={{ fontSize: "1.12rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
                        The 5-Paragraph Letter Architecture (From PPT Slide 4)
                      </h4>
                      <p style={{ margin: "2px 0 0", fontSize: "0.82rem", color: "#64748b" }}>
                        Required structural pathway for all IELTS General Task 1 letters
                      </p>
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "12px" }}>
                    {data.pptFormatRules.map((rule, idx) => (
                      <div
                        key={idx}
                        style={{
                          background: "#f8fafc",
                          border: "1px solid #e2e8f0",
                          borderRadius: "14px",
                          padding: "16px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px"
                        }}
                      >
                        <strong style={{ fontSize: "0.86rem", color: "#2563eb" }}>
                          {rule.stage}
                        </strong>
                        <p style={{ margin: 0, fontSize: "0.8rem", color: "#334155", lineHeight: 1.45, flex: 1 }}>
                          {rule.description}
                        </p>
                        <div
                          style={{
                            background: "#eff6ff",
                            borderRadius: "8px",
                            padding: "6px 8px",
                            fontSize: "0.72rem",
                            fontWeight: 750,
                            color: "#1e40af",
                            border: "1px solid #bfdbfe"
                          }}
                        >
                          ✦ {rule.specificRule}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Linker Matrix from PPT Slide 9 */}
                <div
                  style={{
                    background: "#ffffff",
                    border: "1.5px solid #cbd5e1",
                    borderRadius: "20px",
                    padding: "24px 28px",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.03)"
                  }}
                >
                  <h4 style={{ fontSize: "1.12rem", fontWeight: 800, color: "#0f172a", margin: "0 0 14px 0" }}>
                    Official Linker Matrix for Body Paragraphs 2 &amp; 3 (PPT Slide 9)
                  </h4>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                    {/* Supporting Linkers */}
                    <div
                      style={{
                        background: "#f0fdf4",
                        border: "1.5px solid #bbf7d0",
                        borderRadius: "16px",
                        padding: "18px 20px"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                        <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#16a34a", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 800 }}>
                          +
                        </span>
                        <strong style={{ fontSize: "0.95rem", color: "#166534" }}>
                          Supporting Linkers (Use for Body 2 / Bullet 2)
                        </strong>
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {[
                          "Furthermore,",
                          "In addition to this,",
                          "Additionally,",
                          "Apart from this,",
                          "Besides this,",
                          "To support further,"
                        ].map((l) => (
                          <span
                            key={l}
                            style={{
                              background: "#ffffff",
                              border: "1px solid #86efac",
                              padding: "4px 10px",
                              borderRadius: "6px",
                              fontSize: "0.85rem",
                              fontWeight: 750,
                              color: "#14532d"
                            }}
                          >
                            {l}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Contradicting Linkers */}
                    <div
                      style={{
                        background: "#fef2f2",
                        border: "1.5px solid #fecaca",
                        borderRadius: "16px",
                        padding: "18px 20px"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                        <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#dc2626", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 800 }}>
                          −
                        </span>
                        <strong style={{ fontSize: "0.95rem", color: "#991b1b" }}>
                          Contradicting Linkers (Use for Body 3 / Bullet 3)
                        </strong>
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {[
                          "However,",
                          "On the other hand,",
                          "On the contrary,",
                          "In contrast to,",
                          "On the flip side,"
                        ].map((l) => (
                          <span
                            key={l}
                            style={{
                              background: "#ffffff",
                              border: "1px solid #fca5a5",
                              padding: "4px 10px",
                              borderRadius: "6px",
                              fontSize: "0.85rem",
                              fontWeight: 750,
                              color: "#7f1d1d"
                            }}
                          >
                            {l}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dos and Don'ts Checklist (From PPT Slide 13) */}
                <div
                  style={{
                    background: "#ffffff",
                    border: "1.5px solid #cbd5e1",
                    borderRadius: "20px",
                    padding: "24px 28px",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.03)"
                  }}
                >
                  <h4 style={{ fontSize: "1.12rem", fontWeight: 800, color: "#0f172a", margin: "0 0 14px 0" }}>
                    Mandatory DOs &amp; DON'Ts (From PPT Slide 13)
                  </h4>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "14px", padding: "16px" }}>
                      <strong style={{ color: "#166534", display: "block", marginBottom: "8px", fontSize: "0.9rem" }}>
                        ✓ DOs (Cambridge Rules):
                      </strong>
                      <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "0.82rem", color: "#14532d", lineHeight: 1.6 }}>
                        <li>Write from the left margin and leave one line space between each paragraph.</li>
                        <li>Maintain a consistent semi-formal register throughout.</li>
                        <li>Follow the 5-paragraph structure strictly.</li>
                        <li>Manage time: 2–3 mins plan, 15 mins write, 2–3 mins review (Slide 14).</li>
                        <li>Write a realistic name (e.g. Chirag Mehta) — NEVER write "XYZ".</li>
                      </ul>
                    </div>

                    <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "14px", padding: "16px" }}>
                      <strong style={{ color: "#991b1b", display: "block", marginBottom: "8px", fontSize: "0.9rem" }}>
                        ✗ DON'Ts (Cambridge Penalties):
                      </strong>
                      <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "0.82rem", color: "#7f1d1d", lineHeight: 1.6 }}>
                        <li>No short forms / contractions (write "do not", not "don't").</li>
                        <li>No breaking of words, bullets, arrows, highlight, or underline in letter.</li>
                        <li>Never begin a sentence with a coordinating conjunction (And / But / Or / Because).</li>
                        <li>Do NOT begin Body Paragraph 1 with a linker.</li>
                        <li>Do NOT use "Yours faithfully" when the letter is addressed to a named individual.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: SEMI-FORMAL LEXICAL VAULT */}
            {activeTab === "vocab" && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "18px",
                  maxWidth: "1350px",
                  margin: "0 auto"
                }}
              >
                {data.vocabList.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "#ffffff",
                      border: "1.5px solid #cbd5e1",
                      borderRadius: "16px",
                      padding: "18px 20px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px"
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <strong style={{ fontSize: "0.95rem", color: "#2563eb" }}>
                        {item.term}
                      </strong>
                      <span
                        style={{
                          fontSize: "0.68rem",
                          fontWeight: 750,
                          padding: "2px 6px",
                          borderRadius: "4px",
                          background: "#f1f5f9",
                          color: "#475569"
                        }}
                      >
                        {item.category}
                      </span>
                    </div>

                    <p style={{ margin: 0, fontSize: "0.82rem", color: "#64748b", lineHeight: 1.45 }}>
                      {item.definition}
                    </p>

                    <div
                      style={{
                        marginTop: "4px",
                        background: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        borderRadius: "8px",
                        padding: "8px 10px",
                        fontSize: "0.8rem",
                        color: "#0f172a",
                        fontStyle: "italic",
                        lineHeight: 1.4
                      }}
                    >
                      “{item.example}”
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
