import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

// Hooks
import { useGatekeeper } from "./hooks/useGatekeeper";
import { useTimer } from "./hooks/useTimer";
import { useSpeech } from "./hooks/useSpeech";

// Layout Components
import { GatekeeperModal } from "./components/layout/GatekeeperModal";
import { IslandHeader } from "./components/layout/IslandHeader";
import { TouchDock } from "./components/layout/TouchDock";
import { QuickJumpMenu } from "./components/layout/QuickJumpMenu";

// Modals
import { QuizModal } from "./components/modals/QuizModal";
import { TutorReportModal } from "./components/modals/TutorReportModal";

// Task 1 Steps
import { Step1Overview } from "./components/task1/Step1Overview";
import { Step2Brainstorm } from "./components/task1/Step2Brainstorm";
import { Step3Vocab } from "./components/task1/Step3Vocab";
import { Step4IntroOverview } from "./components/task1/Step4IntroOverview";
import { Step5Bifurcation } from "./components/task1/Step5Bifurcation";
import { Step6FlowBreakdown } from "./components/task1/Step6FlowBreakdown";
import { Step7ModelAnalysis } from "./components/task1/Step7ModelAnalysis";
import { Step8Connectors } from "./components/task1/Step8Connectors";

// Task 2 Steps
import { Step1OverviewT2 } from "./components/task2/Step1Overview";
import { Step2BrainstormT2 } from "./components/task2/Step2Brainstorm";
import { Step3BrainstormChallengeT2 } from "./components/task2/Step3BrainstormChallenge";
import { Step4VocabT2 } from "./components/task2/Step4Vocab";
import { Step5IntroStructureT2 } from "./components/task2/Step5IntroStructure";
import { Step6ConsequencesT2 } from "./components/task2/Step6Consequences";
import { Step7EvaluationT2 } from "./components/task2/Step7Evaluation";
import { Step8ConclusionT2 } from "./components/task2/Step8Conclusion";
import { Step9SubmissionT2 } from "./components/task2/Step9Submission";

// Types & Config
import type { ModuleType } from "./types";
import { TASK1_STEPS, TASK1_TITLES, TASK2_STEPS, TASK2_TITLES } from "./config";

export function App() {
  // Gatekeeper Auth
  const { isUnlocked, errorMsg, unlock, lock, setErrorMsg } = useGatekeeper();

  // State Management
  const [currentModule, setCurrentModule] = useState<ModuleType>("task1");
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [direction, setDirection] = useState<number>(1);

  // Aux Modals
  const [isQuickJumpOpen, setIsQuickJumpOpen] = useState<boolean>(false);
  const [isQuizOpen, setIsQuizOpen] = useState<boolean>(false);
  const [isReportOpen, setIsReportOpen] = useState<boolean>(false);

  // Shared Hooks
  const timer = useTimer(180);
  const speech = useSpeech();

  const totalSteps = currentModule === "task1" ? TASK1_STEPS.length : TASK2_STEPS.length;
  const stepTitles = currentModule === "task1" ? TASK1_TITLES : TASK2_TITLES;
  const currentStepTitle = stepTitles[currentStep - 1];

  // Navigation Handlers
  const handlePrev = () => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep((prev: number) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setDirection(1);
      setCurrentStep((prev: number) => prev + 1);
    }
  };

  const handleSelectStep = (step: number) => {
    setDirection(step > currentStep ? 1 : -1);
    setCurrentStep(step);
  };

  const handleSelectModule = (mod: "task1" | "task2") => {
    setCurrentModule(mod);
    setCurrentStep(1);
    timer.reset(180);
  };

  // Render Active Stage Component
  const renderStageContent = () => {
    if (currentModule === "task1") {
      switch (currentStep) {
        case 1:
          return <Step1Overview onSpeak={speech.speak} accent={speech.accent} setAccent={speech.setAccent} onContinue={() => setCurrentStep(2)} />;
        case 2:
          return (
            <Step2Brainstorm
              formattedTime={timer.formatTime()}
              isRunning={timer.isRunning}
              isFinished={timer.isFinished}
              onTimerToggle={timer.toggle}
              onTimerReset={timer.reset}
            />
          );
        case 3:
          return <Step3Vocab onSpeak={speech.speak} accent={speech.accent} setAccent={speech.setAccent} />;
        case 4:
          return <Step4IntroOverview />;
        case 5:
          return <Step5Bifurcation />;
        case 6:
          return <Step6FlowBreakdown />;
        case 7:
          return <Step7ModelAnalysis />;
        case 8:
          return <Step8Connectors />;
        default:
          return null;
      }
    } else {
      switch (currentStep) {
        case 1:
          return <Step1OverviewT2 onUnlockBypass={() => setCurrentStep(2)} isUnlocked={isUnlocked} />;
        case 2:
          return (
            <Step2BrainstormT2
              formattedTime={timer.formatTime()}
              isRunning={timer.isRunning}
              isFinished={timer.isFinished}
              onTimerToggle={timer.toggle}
              onTimerReset={timer.reset}
            />
          );
        case 3:
          return <Step3BrainstormChallengeT2 />;
        case 4:
          return <Step4VocabT2 onSpeak={speech.speak} accent={speech.accent} setAccent={speech.setAccent} />;
        case 5:
          return <Step5IntroStructureT2 />;
        case 6:
          return <Step6ConsequencesT2 />;
        case 7:
          return <Step7EvaluationT2 />;
        case 8:
          return <Step8ConclusionT2 />;
        case 9:
          return <Step9SubmissionT2 />;
        default:
          return null;
      }
    }
  };

  // Slide Animation Variants (120 FPS Spring Motion)
  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 320 : -320,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 340, damping: 32 },
        opacity: { duration: 0.22 },
        scale: { duration: 0.22 }
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -320 : 320,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: "spring" as const, stiffness: 340, damping: 32 },
        opacity: { duration: 0.18 },
        scale: { duration: 0.18 }
      }
    })
  };

  if (!isUnlocked) {
    return (
      <div className="app-stage-container" style={{ minHeight: "100vh", background: "var(--slate-50)" }}>
        <GatekeeperModal onUnlock={unlock} errorMsg={errorMsg} setErrorMsg={setErrorMsg} />
      </div>
    );
  }

  return (
    <div className="app-stage-container">
      {/* Floating Island Header */}
      <IslandHeader
        currentModule={currentModule}
        onSelectModule={handleSelectModule}
        currentStep={currentStep}
        totalSteps={totalSteps}
        stepTitle={currentStepTitle}
        onOpenQuickJump={() => setIsQuickJumpOpen(true)}
        onLock={lock}
        formattedTime={timer.formatTime()}
        isTimerRunning={timer.isRunning}
        onTimerToggle={timer.toggle}
      />

      {/* Center Stage Viewport with 120 FPS Spring Motion */}
      <main className="stage-viewport">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={`${currentModule}-${currentStep}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{ width: "100%", height: "100%" }}
          >
            {renderStageContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Bottom Touch Dock */}
      <TouchDock
        currentStep={currentStep}
        totalSteps={totalSteps}
        onPrev={handlePrev}
        onNext={handleNext}
        onSelectStep={handleSelectStep}
        canPrev={currentStep > 1}
        canNext={currentStep < totalSteps}
      />

      {/* Stage Navigation Quick Jump Drawer */}
      <QuickJumpMenu
        isOpen={isQuickJumpOpen}
        onClose={() => setIsQuickJumpOpen(false)}
        currentStep={currentStep}
        stepTitles={stepTitles}
        onSelectStep={handleSelectStep}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenReport={() => setIsReportOpen(true)}
      />

      {/* Auxiliary Modals */}
      <QuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        currentModule={currentModule}
        onSpeak={speech.speak}
      />

      <TutorReportModal
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
        currentModule={currentModule}
      />
    </div>
  );
}

export default App;
