import React, { useState, useRef, useEffect } from "react";
import {
  BookOpen,
  Search,
  Sparkles,
  Volume2,
  Copy,
  Check,
  ArrowRight,
  ArrowLeft,
  Layers,
  ChevronRight,
  ChevronLeft,
  Eye,
  List
} from "lucide-react";
import { ModuleType } from "../../types";
import { CAMBRIDGE7_TEST2_READING, CambridgeReadingQuestion } from "../../data/cambridge7Test2Data";

interface Cambridge7Test2PageProps {
  onSpeak?: (text: string) => void;
  accent?: "en-GB" | "en-US";
  onNavigateModule?: (mod: ModuleType) => void;
}

export const Cambridge7Test2Page: React.FC<Cambridge7Test2PageProps> = ({
  onSpeak,
  accent = "en-GB",
  onNavigateModule
}) => {
  const [selectedPassage, setSelectedPassage] = useState<number | "all">(3); // Default to Passage 3 containing Q30
  const [selectedQuestionNumber, setSelectedQuestionNumber] = useState<number | null>(30); // Default to Q30 from user's image
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const questionCardRefs = useRef<Record<number, HTMLDivElement | null>>({});

  // Questions filtered by passage
  const passageQuestions = CAMBRIDGE7_TEST2_READING.filter((q) => {
    if (selectedPassage === "all") return true;
    return q.passageId === selectedPassage;
  });

  // Questions filtered by search
  const searchedQuestions = passageQuestions.filter((q) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase().trim();
    return (
      q.questionNumber.toString() === term ||
      q.sectionOrTitle.toLowerCase().includes(term) ||
      q.questionPrompt.toLowerCase().includes(term) ||
      q.fullAnswerText.toLowerCase().includes(term) ||
      q.exactQuote.toLowerCase().includes(term) ||
      q.keywordBridge.toLowerCase().includes(term)
    );
  });

  // Active question in focus mode
  const currentFocusedQuestion =
    selectedQuestionNumber !== null
      ? CAMBRIDGE7_TEST2_READING.find((q) => q.questionNumber === selectedQuestionNumber) || null
      : null;

  // Handle Passage change
  const handlePassageSelect = (passage: number | "all") => {
    setSelectedPassage(passage);
    setSearchTerm("");
    if (passage === 1) setSelectedQuestionNumber(1);
    else if (passage === 2) setSelectedQuestionNumber(14);
    else if (passage === 3) setSelectedQuestionNumber(30);
    else setSelectedQuestionNumber(null);
  };

  // Next / Previous Question Navigation
  const handlePrevQuestion = () => {
    if (!currentFocusedQuestion) return;
    const currentNum = currentFocusedQuestion.questionNumber;
    if (currentNum > 1) {
      const prevNum = currentNum - 1;
      const prevQ = CAMBRIDGE7_TEST2_READING.find((q) => q.questionNumber === prevNum);
      if (prevQ) {
        if (selectedPassage !== "all" && prevQ.passageId !== selectedPassage) {
          setSelectedPassage(prevQ.passageId);
        }
        setSelectedQuestionNumber(prevNum);
      }
    }
  };

  const handleNextQuestion = () => {
    if (!currentFocusedQuestion) return;
    const currentNum = currentFocusedQuestion.questionNumber;
    if (currentNum < 40) {
      const nextNum = currentNum + 1;
      const nextQ = CAMBRIDGE7_TEST2_READING.find((q) => q.questionNumber === nextNum);
      if (nextQ) {
        if (selectedPassage !== "all" && nextQ.passageId !== selectedPassage) {
          setSelectedPassage(nextQ.passageId);
        }
        setSelectedQuestionNumber(nextNum);
      }
    }
  };

  const handleCopyExplanation = (q: CambridgeReadingQuestion) => {
    const formattedText = `${q.sectionOrTitle}\n\n${q.paragraphBreakdown}\n\n${q.contextExplanation}\n\n${q.quoteLocation} “${q.exactQuote}”\n\n${q.keywordBridge}\n\nSo, the answer is: ${q.fullAnswerText}`;
    navigator.clipboard.writeText(formattedText);
    setCopiedId(q.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleReadQuestion = (q: CambridgeReadingQuestion) => {
    if (onSpeak) {
      const speechText = `${q.sectionOrTitle}. ${q.paragraphBreakdown} ${q.contextExplanation} ${q.quoteLocation} ${q.exactQuote}. ${q.keywordBridge}. So, the answer is ${q.fullAnswerText}.`;
      onSpeak(speechText);
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
            background: "linear-gradient(135deg, #091e3a 0%, #173865 100%)",
            borderRadius: "24px",
            padding: "24px 28px",
            color: "#ffffff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            boxShadow: "0 10px 25px -5px rgba(9, 30, 58, 0.25)"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
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
                Cambridge IELTS 7 • Test 2
              </span>
              <span
                style={{
                  fontSize: "0.76rem",
                  fontWeight: 800,
                  background: "#059669",
                  color: "#ffffff",
                  padding: "3px 10px",
                  borderRadius: "6px"
                }}
              >
                Academic Reading Solutions
              </span>
              <span
                style={{
                  fontSize: "0.76rem",
                  fontWeight: 800,
                  background: "#1e293b",
                  color: "#93c5fd",
                  padding: "3px 10px",
                  borderRadius: "6px"
                }}
              >
                Exact Passage Quotations &amp; Locations
              </span>
            </div>

            <h1 style={{ fontSize: "1.75rem", fontWeight: 800, margin: "4px 0 0", color: "#ffffff" }}>
              Cambridge Book 7 Test 2: Reading Answers &amp; Exact Text Locations
            </h1>
            <p style={{ fontSize: "0.92rem", color: "#bfdbfe", margin: 0 }}>
              Authentic pedagogical format: Paragraph context → Direct passage quote → Keyword synonym bridge → Final answer key.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
            <span
              style={{
                fontSize: "0.82rem",
                fontWeight: 800,
                padding: "6px 14px",
                borderRadius: "10px",
                background: "rgba(255, 255, 255, 0.12)",
                color: "#ffffff",
                backdropFilter: "blur(6px)",
                border: "1px solid rgba(255, 255, 255, 0.2)"
              }}
            >
              40 Questions Available
            </span>

            {onNavigateModule && (
              <button
                type="button"
                onClick={() => onNavigateModule("task1")}
                style={{
                  padding: "9px 18px",
                  borderRadius: "12px",
                  background: "#ffffff",
                  color: "#0f172a",
                  border: "none",
                  fontWeight: 800,
                  fontSize: "0.84rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.15)"
                }}
              >
                <ArrowLeft size={16} />
                <span>Return to Step 8</span>
              </button>
            )}
          </div>
        </div>

        {/* Passage Selection Controls */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            border: "1.5px solid var(--border-subtle, #cbd5e1)",
            padding: "16px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
          }}
        >
          {/* Top Row: Passage Switcher & Search Bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px"
            }}
          >
            {/* Passage Tabs */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {[
                { id: 1, label: "Passage 1: Pagodas", range: "Q1–Q13" },
                { id: 2, label: "Passage 2: Cost of Food", range: "Q14–Q26" },
                { id: 3, label: "Passage 3: Makete MIRTP", range: "Q27–Q40" },
                { id: "all", label: "All Passages", range: "Q1–Q40" }
              ].map((tab) => {
                const isSelected = selectedPassage === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handlePassageSelect(tab.id as any)}
                    style={{
                      padding: "8px 16px",
                      borderRadius: "12px",
                      fontSize: "0.84rem",
                      fontWeight: 800,
                      border: isSelected ? "2px solid #0f172a" : "1.5px solid #e2e8f0",
                      background: isSelected ? "#0f172a" : "#f8fafc",
                      color: isSelected ? "#ffffff" : "#334155",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "7px",
                      boxShadow: isSelected ? "0 4px 12px rgba(15, 23, 42, 0.15)" : "none",
                      transition: "all 0.15s ease"
                    }}
                  >
                    <span>{tab.label}</span>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        padding: "2px 6px",
                        borderRadius: "6px",
                        background: isSelected ? "rgba(255,255,255,0.2)" : "#e2e8f0",
                        color: isSelected ? "#ffffff" : "#64748b"
                      }}
                    >
                      {tab.range}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Search Bar */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#f8fafc",
                  border: "1.5px solid #cbd5e1",
                  borderRadius: "10px",
                  padding: "6px 12px"
                }}
              >
                <Search size={15} color="#64748b" />
                <input
                  type="text"
                  placeholder="Jump to Q# (e.g. 30, Section F)..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    if (e.target.value.trim()) {
                      setSelectedQuestionNumber(null); // Show matching list
                    }
                  }}
                  style={{
                    border: "none",
                    background: "transparent",
                    outline: "none",
                    fontSize: "0.84rem",
                    color: "#0f172a",
                    width: "210px"
                  }}
                />
              </div>

              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  style={{
                    fontSize: "0.76rem",
                    color: "#64748b",
                    background: "#f1f5f9",
                    border: "1px solid #e2e8f0",
                    borderRadius: "6px",
                    padding: "5px 10px",
                    cursor: "pointer"
                  }}
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Interactive Question Selector Strip */}
          <div
            style={{
              paddingTop: "12px",
              borderTop: "1px solid #f1f5f9",
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
              <span style={{ fontSize: "0.82rem", fontWeight: 750, color: "#475569" }}>
                Select Specific Question to View Explanation:
              </span>
              <button
                type="button"
                onClick={() => setSelectedQuestionNumber(null)}
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 750,
                  color: selectedQuestionNumber === null ? "#2563eb" : "#64748b",
                  background: selectedQuestionNumber === null ? "#eff6ff" : "transparent",
                  border: selectedQuestionNumber === null ? "1px solid #bfdbfe" : "none",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px"
                }}
              >
                <List size={13} />
                <span>Show All in Passage ({passageQuestions.length})</span>
              </button>
            </div>

            {/* 3 Passage Question Selector Groups — Instantly select from any of the 3 passages */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { id: 1, name: "Passage 1 • Pagodas (Q1–Q13)", questions: CAMBRIDGE7_TEST2_READING.filter((q) => q.passageId === 1) },
                { id: 2, name: "Passage 2 • Cost of Food (Q14–Q26)", questions: CAMBRIDGE7_TEST2_READING.filter((q) => q.passageId === 2) },
                { id: 3, name: "Passage 3 • Makete MIRTP (Q27–Q40)", questions: CAMBRIDGE7_TEST2_READING.filter((q) => q.passageId === 3) }
              ].map((pGroup) => (
                <div
                  key={pGroup.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    flexWrap: "wrap",
                    padding: "4px 8px",
                    borderRadius: "8px",
                    background: selectedPassage === pGroup.id ? "#f1f5f9" : "transparent"
                  }}
                >
                  <button
                    type="button"
                    onClick={() => handlePassageSelect(pGroup.id as any)}
                    style={{
                      fontSize: "0.76rem",
                      fontWeight: 800,
                      color: selectedPassage === pGroup.id ? "#ffffff" : "#1e40af",
                      background: selectedPassage === pGroup.id ? "#1e40af" : "#eff6ff",
                      border: "1px solid #bfdbfe",
                      borderRadius: "6px",
                      padding: "4px 10px",
                      cursor: "pointer",
                      minWidth: "190px",
                      textAlign: "left"
                    }}
                  >
                    {pGroup.name}
                  </button>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                    {pGroup.questions.map((q) => {
                      const isSelected = selectedQuestionNumber === q.questionNumber;
                      return (
                        <button
                          key={q.id}
                          type="button"
                          onClick={() => {
                            setSelectedQuestionNumber(q.questionNumber);
                            setSelectedPassage(q.passageId);
                            setSearchTerm("");
                          }}
                          style={{
                            minWidth: "36px",
                            height: "30px",
                            padding: "0 6px",
                            borderRadius: "6px",
                            fontSize: "0.80rem",
                            fontWeight: 800,
                            border: isSelected ? "2px solid #2563eb" : "1px solid #cbd5e1",
                            background: isSelected ? "#2563eb" : "#ffffff",
                            color: isSelected ? "#ffffff" : "#1e293b",
                            cursor: "pointer",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: isSelected ? "0 2px 6px rgba(37, 99, 235, 0.25)" : "none",
                            transition: "all 0.15s ease"
                          }}
                          title={`Question ${q.questionNumber}: ${q.sectionOrTitle}`}
                        >
                          Q{q.questionNumber}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View Mode 1: Single Question Focus View */}
        {currentFocusedQuestion && !searchTerm && (
          <div
            style={{
              background: "#ffffff",
              border: "2px solid #2563eb",
              borderRadius: "20px",
              padding: "28px 34px",
              boxShadow: "0 8px 30px rgba(37, 99, 235, 0.12)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              position: "relative"
            }}
          >
            {/* Focus Header & Next / Prev Controls */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "12px",
                borderBottom: "1.5px solid #f1f5f9",
                paddingBottom: "16px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{
                    background: "#eff6ff",
                    color: "#1d4ed8",
                    border: "1.5px solid #bfdbfe",
                    padding: "4px 12px",
                    borderRadius: "8px",
                    fontWeight: 800,
                    fontSize: "0.90rem"
                  }}
                >
                  Question {currentFocusedQuestion.questionNumber} of 40
                </span>
                <span
                  style={{
                    background: "#f1f5f9",
                    color: "#475569",
                    padding: "4px 10px",
                    borderRadius: "8px",
                    fontWeight: 700,
                    fontSize: "0.80rem"
                  }}
                >
                  {currentFocusedQuestion.questionType}
                </span>
                <strong style={{ fontSize: "1.1rem", color: "#0f172a" }}>
                  {currentFocusedQuestion.sectionOrTitle}
                </strong>
              </div>

              {/* Action Buttons: Prev / Next / Listen / Copy */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                <button
                  type="button"
                  onClick={handlePrevQuestion}
                  disabled={currentFocusedQuestion.questionNumber <= 1}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "8px",
                    border: "1px solid #cbd5e1",
                    background: currentFocusedQuestion.questionNumber <= 1 ? "#f1f5f9" : "#ffffff",
                    color: currentFocusedQuestion.questionNumber <= 1 ? "#94a3b8" : "#0f172a",
                    fontWeight: 750,
                    fontSize: "0.80rem",
                    cursor: currentFocusedQuestion.questionNumber <= 1 ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px"
                  }}
                >
                  <ChevronLeft size={15} />
                  <span>Prev Q</span>
                </button>

                <button
                  type="button"
                  onClick={handleNextQuestion}
                  disabled={currentFocusedQuestion.questionNumber >= 40}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "8px",
                    border: "1px solid #cbd5e1",
                    background: currentFocusedQuestion.questionNumber >= 40 ? "#f1f5f9" : "#ffffff",
                    color: currentFocusedQuestion.questionNumber >= 40 ? "#94a3b8" : "#0f172a",
                    fontWeight: 750,
                    fontSize: "0.80rem",
                    cursor: currentFocusedQuestion.questionNumber >= 40 ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px"
                  }}
                >
                  <span>Next Q</span>
                  <ChevronRight size={15} />
                </button>

                <button
                  type="button"
                  onClick={() => handleReadQuestion(currentFocusedQuestion)}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "8px",
                    border: "1px solid #e2e8f0",
                    background: "#f8fafc",
                    color: "#334155",
                    fontSize: "0.80rem",
                    fontWeight: 750,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px"
                  }}
                >
                  <Volume2 size={15} />
                  <span>Listen</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleCopyExplanation(currentFocusedQuestion)}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "8px",
                    border: "1px solid #e2e8f0",
                    background: copiedId === currentFocusedQuestion.id ? "#dcfce7" : "#f8fafc",
                    color: copiedId === currentFocusedQuestion.id ? "#166534" : "#334155",
                    fontSize: "0.80rem",
                    fontWeight: 750,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px"
                  }}
                >
                  {copiedId === currentFocusedQuestion.id ? <Check size={15} color="#166534" /> : <Copy size={15} />}
                  <span>{copiedId === currentFocusedQuestion.id ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Prompt Statement (if applicable) */}
            {currentFocusedQuestion.questionPrompt && (
              <div
                style={{
                  background: "#f8fafc",
                  borderLeft: "4px solid #3b82f6",
                  padding: "12px 16px",
                  borderRadius: "0 10px 10px 0",
                  fontSize: "0.96rem",
                  color: "#1e293b",
                  fontWeight: 650
                }}
              >
                <strong style={{ color: "#0f172a" }}>Statement/Task Prompt:</strong> “{currentFocusedQuestion.questionPrompt}”
              </div>
            )}

            {/* Pedagogical Breakdown — EXACT 1:1 Matching User Screenshot */}
            <div
              style={{
                background: "#ffffff",
                border: "1.5px solid #cbd5e1",
                borderRadius: "14px",
                padding: "26px 32px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                fontSize: "1.10rem",
                lineHeight: 1.8,
                color: "#000000",
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
              }}
            >
              {/* Heading matching Image 2 */}
              <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#000000", margin: 0 }}>
                {currentFocusedQuestion.sectionOrTitle}
              </div>

              {/* 1. Paragraph Breakdown */}
              <div style={{ color: "#000000" }}>
                {currentFocusedQuestion.paragraphBreakdown}
              </div>

              {/* 2. Context Explanation */}
              <div style={{ color: "#000000" }}>
                {currentFocusedQuestion.contextExplanation}
              </div>

              {/* 3. Direct Quote and Location */}
              <div style={{ color: "#000000" }}>
                {currentFocusedQuestion.quoteLocation}{" "}
                <span style={{ fontWeight: 600 }}>
                  “... {currentFocusedQuestion.exactQuote}”
                </span>
              </div>

              {/* 4. Keyword Bridge */}
              <div style={{ color: "#000000", fontStyle: "italic", fontWeight: 600 }}>
                {currentFocusedQuestion.keywordBridge}
              </div>

              {/* 5. Final Answer Statement with Red Highlight exactly matching Image 2 */}
              <div
                style={{
                  fontSize: "1.15rem",
                  color: "#000000",
                  marginTop: "6px"
                }}
              >
                <span>So, the answer is: </span>
                <span
                  style={{
                    color: "#dc2626", // Red accent matching user image
                    fontSize: "1.25rem",
                    fontWeight: 800
                  }}
                >
                  {currentFocusedQuestion.answerLabel}
                </span>
                {currentFocusedQuestion.fullAnswerText !== currentFocusedQuestion.answerLabel && (
                  <span>
                    {" "}
                    ({currentFocusedQuestion.fullAnswerText.replace(`${currentFocusedQuestion.answerLabel} `, "").replace(`(${currentFocusedQuestion.answerLabel})`, "").trim()})
                  </span>
                )}
              </div>

              {/* Tips */}
              {currentFocusedQuestion.tips && (
                <div style={{ fontSize: "0.86rem", color: "#64748b", display: "flex", alignItems: "center", gap: "6px", marginTop: "8px", borderTop: "1px dashed #e2e8f0", paddingTop: "10px" }}>
                  <Sparkles size={14} color="#2563eb" />
                  <span><strong>Examiner Tip:</strong> {currentFocusedQuestion.tips}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* View Mode 2: All Questions Scrollable List */}
        {(selectedQuestionNumber === null || searchTerm) && (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 4px" }}>
              <span style={{ fontSize: "0.86rem", fontWeight: 750, color: "#475569" }}>
                Showing {searchedQuestions.length} Questions for{" "}
                {selectedPassage === "all" ? "All Passages" : `Passage ${selectedPassage}`}
              </span>
              <span style={{ fontSize: "0.78rem", color: "#94a3b8" }}>
                Click 'Focus Mode' on any question to isolate it on the board
              </span>
            </div>

            {searchedQuestions.map((q) => {
              const isCopied = copiedId === q.id;

              return (
                <div
                  key={q.id}
                  ref={(el) => {
                    questionCardRefs.current[q.questionNumber] = el;
                  }}
                  style={{
                    background: "#ffffff",
                    border: q.questionNumber === 30 ? "2px solid #2563eb" : "1.5px solid #e2e8f0",
                    borderRadius: "18px",
                    padding: "24px 30px",
                    boxShadow: q.questionNumber === 30 ? "0 8px 24px rgba(37, 99, 235, 0.12)" : "0 3px 12px rgba(0,0,0,0.03)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    position: "relative"
                  }}
                >
                  {/* Question Header */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "10px",
                      borderBottom: "1px solid #f1f5f9",
                      paddingBottom: "12px"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span
                        style={{
                          background: "#0f172a",
                          color: "#ffffff",
                          fontSize: "0.80rem",
                          fontWeight: 800,
                          padding: "3px 10px",
                          borderRadius: "6px"
                        }}
                      >
                        Q{q.questionNumber}
                      </span>
                      <strong style={{ color: "#0f172a", fontSize: "1.05rem" }}>
                        {q.sectionOrTitle}
                      </strong>
                      <span
                        style={{
                          background: "#f1f5f9",
                          color: "#475569",
                          fontSize: "0.76rem",
                          fontWeight: 700,
                          padding: "2px 8px",
                          borderRadius: "6px"
                        }}
                      >
                        {q.questionType}
                      </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <button
                        type="button"
                        onClick={() => setSelectedQuestionNumber(q.questionNumber)}
                        style={{
                          padding: "5px 10px",
                          borderRadius: "8px",
                          border: "1px solid #bfdbfe",
                          background: "#eff6ff",
                          color: "#1d4ed8",
                          fontSize: "0.76rem",
                          fontWeight: 750,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "5px"
                        }}
                      >
                        <Eye size={13} />
                        <span>Focus Mode</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleReadQuestion(q)}
                        style={{
                          padding: "5px 10px",
                          borderRadius: "8px",
                          border: "1px solid #e2e8f0",
                          background: "#f8fafc",
                          color: "#334155",
                          fontSize: "0.76rem",
                          fontWeight: 700,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "5px"
                        }}
                      >
                        <Volume2 size={13} />
                        <span>Listen</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleCopyExplanation(q)}
                        style={{
                          padding: "5px 10px",
                          borderRadius: "8px",
                          border: "1px solid #e2e8f0",
                          background: isCopied ? "#dcfce7" : "#f8fafc",
                          color: isCopied ? "#166534" : "#334155",
                          fontSize: "0.76rem",
                          fontWeight: 700,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "5px"
                        }}
                      >
                        {isCopied ? <Check size={13} color="#166534" /> : <Copy size={13} />}
                        <span>{isCopied ? "Copied" : "Copy"}</span>
                      </button>
                    </div>
                  </div>

                  {/* Prompt Statement (if applicable) */}
                  {q.questionPrompt && (
                    <div
                      style={{
                        background: "#f8fafc",
                        borderLeft: "3.5px solid #64748b",
                        padding: "10px 14px",
                        borderRadius: "0 8px 8px 0",
                        fontSize: "0.92rem",
                        color: "#334155",
                        fontWeight: 650
                      }}
                    >
                      <strong style={{ color: "#0f172a" }}>Statement/Prompt:</strong> “{q.questionPrompt}”
                    </div>
                  )}

                  {/* Pedagogical Breakdown */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "14px",
                      fontSize: "1.02rem",
                      lineHeight: 1.7,
                      color: "#1e293b"
                    }}
                  >
                    <div>{q.paragraphBreakdown}</div>
                    <div>{q.contextExplanation}</div>
                    <div>
                      {q.quoteLocation}{" "}
                      <strong style={{ color: "#0f172a" }}>“... {q.exactQuote}”</strong>
                    </div>
                    <div style={{ color: "#0f172a", fontWeight: 700, fontStyle: "italic" }}>
                      {q.keywordBridge}
                    </div>

                    <div
                      style={{
                        fontSize: "1.08rem",
                        color: "#000000",
                        marginTop: "4px"
                      }}
                    >
                      <span>So, the answer is: </span>
                      <span
                        style={{
                          color: "#dc2626", // Red accent matching user image
                          fontSize: "1.18rem",
                          fontWeight: 800
                        }}
                      >
                        {q.answerLabel}
                      </span>
                      {q.fullAnswerText !== q.answerLabel && (
                        <span style={{ color: "#000000" }}>
                          {" "}
                          ({q.fullAnswerText.replace(`${q.answerLabel} `, "").replace(`(${q.answerLabel})`, "").trim()})
                        </span>
                      )}
                    </div>

                    {q.tips && (
                      <div style={{ fontSize: "0.82rem", color: "#64748b", display: "flex", alignItems: "center", gap: "6px" }}>
                        <Sparkles size={13} color="#2563eb" />
                        <span><strong>Exam Tip:</strong> {q.tips}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {searchedQuestions.length === 0 && (
              <div
                style={{
                  background: "#ffffff",
                  border: "1.5px solid #cbd5e1",
                  borderRadius: "16px",
                  padding: "48px 24px",
                  textAlign: "center"
                }}
              >
                <p style={{ color: "#64748b", fontSize: "1rem", margin: 0 }}>
                  No questions match your search for "{searchTerm}".
                </p>
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  style={{
                    marginTop: "12px",
                    padding: "8px 16px",
                    background: "#0f172a",
                    color: "#ffffff",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: 700,
                    fontSize: "0.82rem"
                  }}
                >
                  Reset Search
                </button>
              </div>
            )}
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
                Cambridge Book 7 Test 2 Reading Key Complete
              </strong>
              <span style={{ color: "#64748b", fontSize: "0.80rem" }}>
                Return to Academic Task 1 Step 8 transitions and comparative discourse markers?
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
              <ArrowLeft size={16} />
              <span>Back to Step 8 (Academic Task 1)</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
