import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, ShieldCheck, KeyRound } from "lucide-react";
import { modalDialogVariants, tactilePress } from "../../motion";

interface GatekeeperModalProps {
  onUnlock: (passcode: string) => boolean;
  errorMsg: string;
  setErrorMsg: (msg: string) => void;
}

export const GatekeeperModal: React.FC<GatekeeperModalProps> = ({
  onUnlock,
  errorMsg,
  setErrorMsg
}) => {
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) {
      setErrorMsg("Please enter the classroom access code.");
      return;
    }
    onUnlock(inputVal);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(15, 23, 42, 0.75)",
        padding: "24px"
      }}
    >
      <motion.div
        variants={modalDialogVariants}
        initial="hidden"
        animate="visible"
        style={{
          width: "min(92vw, 480px)",
          padding: "38px 36px",
          textAlign: "center",
          background: "#ffffff",
          border: "1.5px solid var(--border-default)",
          borderRadius: "22px",
          boxShadow: "var(--shadow-modal)"
        }}
      >
        <div
          style={{
            width: "68px",
            height: "68px",
            borderRadius: "18px",
            background: "var(--slate-100)",
            color: "var(--slate-900)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "18px",
            border: "1px solid var(--border-subtle)",
            boxShadow: "var(--shadow-xs)"
          }}
        >
          <Lock size={30} strokeWidth={2.2} />
        </div>

        <h2 style={{ fontSize: "1.65rem", fontWeight: 800, marginBottom: "8px", letterSpacing: "-0.02em", color: "var(--slate-900)" }}>
          IELTS Smartboard OS
        </h2>
        <p style={{ color: "var(--slate-600)", fontSize: "0.95rem", marginBottom: "26px", lineHeight: 1.45 }}>
          Enter teacher Roman numeral access key to initialize classroom workstation.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ position: "relative", marginBottom: "18px" }}>
            <KeyRound
              size={20}
              style={{
                position: "absolute",
                left: "18px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--slate-400)"
              }}
            />
            <input
              type="password"
              placeholder="Enter teacher access code"
              value={inputVal}
              onChange={(e) => {
                setInputVal(e.target.value);
                if (errorMsg) setErrorMsg("");
              }}
              autoFocus
              style={{
                width: "100%",
                minHeight: "52px",
                padding: "0 18px 0 50px",
                borderRadius: "12px",
                border: "1.5px solid var(--border-default)",
                background: "var(--slate-50)",
                fontSize: "1rem",
                fontWeight: 600,
                outline: "none",
                color: "var(--slate-900)",
                boxShadow: "inset 0 1px 2px rgba(0,0,0,0.04)",
                transition: "border-color 0.15s ease, background 0.15s ease"
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "var(--apple-blue)";
                e.currentTarget.style.background = "#ffffff";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "var(--border-default)";
                e.currentTarget.style.background = "var(--slate-50)";
              }}
            />
          </div>

          <AnimatePresence>
            {errorMsg && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                style={{
                  color: "var(--apple-red)",
                  fontSize: "0.85rem",
                  fontWeight: 650,
                  marginBottom: "16px",
                  background: "#fef2f2",
                  padding: "10px 14px",
                  borderRadius: "10px",
                  border: "1px solid #fca5a5"
                }}
              >
                {errorMsg}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            whileTap={tactilePress}
            type="submit"
            className="apple-touch-btn primary"
            style={{
              width: "100%",
              minHeight: "52px",
              fontSize: "1.05rem",
              fontWeight: 750,
              gap: "8px",
              boxShadow: "var(--shadow-sm)"
            }}
          >
            <ShieldCheck size={20} />
            <span>Unlock Teaching Station</span>
          </motion.button>
        </form>

        <div style={{ marginTop: "22px", fontSize: "0.78rem", color: "var(--slate-400)", fontWeight: 600 }}>
          IELTS Academic Writing &bull; Smartboard Classroom Console
        </div>
      </motion.div>
    </div>
  );
};
