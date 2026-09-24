import { useState } from "react";

const CORRECT_PASSCODE = "VII I MMVI";

export function useGatekeeper() {
  // Intentionally starts locked on every page load. No localStorage bypass is used.
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const unlock = (inputPasscode: string): boolean => {
    const cleaned = inputPasscode.trim().toUpperCase().replace(/\s+/g, " ");
    const target = CORRECT_PASSCODE.toUpperCase();

    if (cleaned === target) {
      setIsUnlocked(true);
      setErrorMsg("");
      return true;
    }

    setErrorMsg("Incorrect Roman numeral access code. Please verify.");
    return false;
  };

  const lock = () => {
    setIsUnlocked(false);
    setErrorMsg("");
  };

  return { isUnlocked, errorMsg, unlock, lock, setErrorMsg };
}
