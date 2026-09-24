import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, ShieldCheck, KeyRound } from "lucide-react";

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
        background: "rgba(15, 23, 42, 0.45)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        padding: "24px"
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 350, damping: 28 }}
        className="glass-panel"
        style={{
          width: "min(92vw, 480px)",
          padding: "40px 36px",
          textAlign: "center",
          boxShadow: "0 25px 60px rgba(0,0,0,0.18)"
        }}
      >
        <div
          style={{
            width: "68px",
            height: "68px",
            borderRadius: "20px",
            background: "var(--slate-100)",
            color: "var(--slate-800)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
            boxShadow: "var(--shadow-sm)"
          }}
        >
          <Lock size={32} strokeWidth={2.2} />
        </div>

        <h2 style={{ fontSize: "1.65rem", fontWeight: 700, marginBottom: "8px", letterSpacing: "-0.02em" }}>
          IELTS Smartboard OS
        </h2>
        <p style={{ color: "var(--slate-500)", fontSize: "0.98rem", marginBottom: "28px" }}>
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
                height: "56px",
                paddingLeft: "52px",
                paddingRight: "18px",
                borderRadius: "16px",
                border: "1.5px solid var(--border-strong)",
                background: "#ffffff",
                fontSize: "1.1rem",
                letterSpacing: "0.08em",
                color: "var(--slate-900)",
                outline: "none",
                transition: "border-color 0.15s ease, box-shadow 0.15s ease"
              }}
              onFocus={(e) => (e.target.style.borderColor = "var(--slate-900)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--border-strong)")}
            />
          </div>

          <AnimatePresence>
            {errorMsg && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                style={{
                  color: "var(--apple-red)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  marginBottom: "16px"
                }}
              >
                {errorMsg}
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="submit"
            className="apple-touch-btn primary"
            style={{ width: "100%", height: "56px", fontSize: "1.1rem", gap: "10px" }}
          >
            <ShieldCheck size={22} /> Unlock Session
          </button>
        </form>

        <div style={{ marginTop: "24px", fontSize: "0.85rem", color: "var(--slate-400)" }}>
          Teacher access is required before the classroom workstation can open.
        </div>
      </motion.div>
    </div>
  );
};
