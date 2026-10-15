import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY_SCALE = "ielts_smartboard_scale";
const STORAGE_KEY_CONTRAST = "ielts_smartboard_contrast";
const DEFAULT_SCALE = 1.2; // Optimized for classroom Senses IFPD & large displays

export interface BoardScaleHook {
  scale: number;
  scalePercent: number;
  isHighContrast: boolean;
  isFullscreen: boolean;
  increaseScale: () => void;
  decreaseScale: () => void;
  setScale: (newScale: number) => void;
  toggleHighContrast: () => void;
  toggleFullscreen: () => void;
  resetScale: () => void;
}

export function useBoardScale(): BoardScaleHook {
  const [scale, setScaleState] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_SCALE);
      if (saved) {
        const val = parseFloat(saved);
        if (!isNaN(val) && val >= 0.9 && val <= 1.6) return val;
      }
    } catch {
      // Ignore localStorage errors in private browsing
    }
    return DEFAULT_SCALE;
  });

  const [isHighContrast, setIsHighContrast] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY_CONTRAST) === "true";
    } catch {
      return false;
    }
  });

  const [isFullscreen, setIsFullscreen] = useState<boolean>(() => {
    return !!(typeof document !== "undefined" && document.fullscreenElement);
  });

  // Apply scale to CSS custom property on <html>
  useEffect(() => {
    document.documentElement.style.setProperty("--board-scale", scale.toString());
    try {
      localStorage.setItem(STORAGE_KEY_SCALE, scale.toString());
    } catch {
      // Ignore
    }
  }, [scale]);

  // Apply high contrast class on <html>
  useEffect(() => {
    document.documentElement.classList.toggle("board-high-contrast", isHighContrast);
    try {
      localStorage.setItem(STORAGE_KEY_CONTRAST, isHighContrast ? "true" : "false");
    } catch {
      // Ignore
    }
  }, [isHighContrast]);

  // Fullscreen event listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const increaseScale = useCallback(() => {
    setScaleState((prev) => {
      const next = Math.min(1.6, Math.round((prev + 0.08) * 100) / 100);
      return next;
    });
  }, []);

  const decreaseScale = useCallback(() => {
    setScaleState((prev) => {
      const next = Math.max(0.9, Math.round((prev - 0.08) * 100) / 100);
      return next;
    });
  }, []);

  const setScale = useCallback((newScale: number) => {
    const clamped = Math.max(0.9, Math.min(1.6, Math.round(newScale * 100) / 100));
    setScaleState(clamped);
  }, []);

  const toggleHighContrast = useCallback(() => {
    setIsHighContrast((prev) => !prev);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {
        // Fullscreen request may fail if blocked by browser policy
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  }, []);

  const resetScale = useCallback(() => {
    setScaleState(DEFAULT_SCALE);
  }, []);

  return {
    scale,
    scalePercent: Math.round(scale * 100),
    isHighContrast,
    isFullscreen,
    increaseScale,
    decreaseScale,
    setScale,
    toggleHighContrast,
    toggleFullscreen,
    resetScale
  };
}
