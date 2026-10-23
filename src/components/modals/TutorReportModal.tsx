import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, FileText, Search } from "lucide-react";
import { modalBackdropVariants, modalDialogVariants, tactilePress } from "../../motion";

import { ModuleType } from "../../types";

interface TutorReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentModule: ModuleType;
}

const TASK1_SUBMISSIONS = [
  { student: "Aarav Sharma", type: "Line Graph", topic: "Morning rush surge & Radio daily peak (~27% at 8:30 am) vs TV news bump", accuracy: "High" },
  { student: "Pooja Patel", type: "Line Graph", topic: "Midday crossover convergence at 13:00 (15%) and TV leadership reversal", accuracy: "High" },
  { student: "Rohan Verma", type: "Line Graph", topic: "Prime-time TV explosion to 45% (20:00–21:00) vs Radio commute bump & plunge", accuracy: "High" },
  { student: "Ananya Iyer", type: "Line Graph", topic: "Inverse diurnal patterns, nocturnal troughs (<5%) and complete 24-hour cycle synthesis", accuracy: "High" }
];

const TASK2_SUBMISSIONS = [
  { student: "Aarav Sharma", type: "Agree / Disagree", topic: "Body 1: Emotional intelligence, empathy and pastoral care unique to human teachers", accuracy: "High" },
  { student: "Pooja Patel", type: "Agree / Disagree", topic: "Body 2: Moral mentorship, debate moderation and cultivating critical thinking", accuracy: "High" },
  { student: "Rohan Verma", type: "Agree / Disagree", topic: "Body 3: AI as augmentative pedagogical aid (grading & adaptive drills) without replacement", accuracy: "Moderate" },
  { student: "Ananya Iyer", type: "Agree / Disagree", topic: "Introduction & 3-Body Paragraph Architecture: Clear decisive disagree thesis", accuracy: "High" }
];

export const TutorReportModal: React.FC<TutorReportModalProps> = ({
  isOpen,
  onClose,
  currentModule
}) => {
  const [filterTerm, setFilterTerm] = useState("");

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const dataset = currentModule === "task1" ? TASK1_SUBMISSIONS : TASK2_SUBMISSIONS;
  const submissions = dataset.filter(
    (sub) =>
      sub.student.toLowerCase().includes(filterTerm.toLowerCase()) ||
      sub.topic.toLowerCase().includes(filterTerm.toLowerCase()) ||
      sub.type.toLowerCase().includes(filterTerm.toLowerCase())
  );

  return (
    <motion.div
      variants={modalBackdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(15, 23, 42, 0.72)",
        padding: "24px"
      }}
      onClick={onClose}
    >
      <motion.div
        variants={modalDialogVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={{
          width: "min(94vw, 800px)",
          maxHeight: "86vh",
          background: "#ffffff",
          borderRadius: "24px",
          border: "1px solid var(--border-default)",
          padding: "36px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          boxShadow: "var(--shadow-modal)"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: "var(--slate-900)",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <FileText size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--slate-900)" }}>
                Tutor Live Participation Report
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--slate-500)", marginTop: "2px" }}>
                Incoming student predictions from Step 1 active listening QR check
              </p>
            </div>
          </div>

          <motion.button
            whileTap={tactilePress}
            onClick={onClose}
            className="apple-touch-btn"
            style={{ width: "44px", height: "44px", padding: 0, borderRadius: "50%", background: "var(--slate-100)" }}
            aria-label="Close Report"
          >
            <X size={20} />
          </motion.button>
        </div>

        {/* Search / Filter bar */}
        <div style={{ position: "relative" }}>
          <Search size={18} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "var(--slate-400)" }} />
          <input
            type="text"
            placeholder="Search student or prediction..."
            value={filterTerm}
            onChange={(e) => setFilterTerm(e.target.value)}
            style={{
              width: "100%",
              height: "46px",
              paddingLeft: "42px",
              paddingRight: "14px",
              borderRadius: "12px",
              border: "1px solid var(--border-subtle)",
              background: "#ffffff",
              fontSize: "0.95rem"
            }}
          />
        </div>

        {/* Submissions Table */}
        <div style={{ overflowY: "auto", border: "1px solid var(--border-subtle)", borderRadius: "14px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.92rem" }}>
            <thead style={{ background: "var(--slate-100)", borderBottom: "1px solid var(--border-subtle)", color: "var(--slate-700)" }}>
              <tr>
                <th style={{ padding: "12px 16px" }}>Student Name</th>
                <th style={{ padding: "12px 16px" }}>Guessed Format</th>
                <th style={{ padding: "12px 16px" }}>Topic Prediction</th>
                <th style={{ padding: "12px 16px" }}>Accuracy</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((sub, idx) => (
                <tr key={idx} style={{ borderBottom: "1px solid var(--border-subtle)", background: idx % 2 === 0 ? "#ffffff" : "var(--slate-50)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: 600, color: "var(--slate-900)" }}>{sub.student}</td>
                  <td style={{ padding: "12px 16px", color: "var(--slate-700)" }}>{sub.type}</td>
                  <td style={{ padding: "12px 16px", color: "var(--slate-700)" }}>{sub.topic}</td>
                  <td style={{ padding: "12px 16px" }}>
                    <span className="apple-badge success">{sub.accuracy}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.85rem", color: "var(--slate-500)" }}>
          <span>Total connected students: {submissions.length}</span>
          <span>Refreshes automatically via live channel</span>
        </div>
      </motion.div>
    </motion.div>
  );
};
