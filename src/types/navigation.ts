
export type ModuleType = "task1" | "task2";

export interface StepDefinition {
  id: string;
  stepNumber: number;
  title: string;
  badge: string;
  description: string;
}

export interface StepContextProps {
  speech: {
    speak: (text: string) => void;
    accent: "en-GB" | "en-US";
    setAccent: (accent: "en-GB" | "en-US") => void;
    isSpeaking: boolean;
  };
  timer: {
    formattedTime: string;
    isRunning: boolean;
    isFinished: boolean;
    toggle: () => void;
    reset: (customSeconds?: number) => void;
  };
  navigation: {
    goToStep: (step: number) => void;
    nextStep: () => void;
    prevStep: () => void;
  };
  isUnlocked: boolean;
}

export interface StepModuleConfig {
  id: ModuleType;
  title: string;
  steps: StepDefinition[];
}
