import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { stageSlideVariants } from "./motion";

// Hooks
import { useGatekeeper } from "./hooks/useGatekeeper";
import { useTimer } from "./hooks/useTimer";
import { useSpeech } from "./hooks/useSpeech";
import { useBoardScale } from "./hooks/useBoardScale";

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

// Standalone Pages (General Training Task 1 & Cambridge Reading Solutions)
import { GeneralTask1Page } from "./components/generalTask1/GeneralTask1Page";
import { Cambridge7Test2Page } from "./components/cambridge/Cambridge7Test2Page";

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
  const boardScale = useBoardScale();

  const isStepModule = currentModule === "task1" || currentModule === "task2";
  const totalSteps =
    currentModule === "task1"
      ? TASK1_STEPS.length
      : currentModule === "task2"
      ? TASK2_STEPS.length
      : 1;

  const stepTitles =
    currentModule === "task1"
      ? TASK1_TITLES
      : currentModule === "task2"
      ? TASK2_TITLES
      : currentModule === "general1"
      ? ["General Training Task 1 Letter Masterclass"]
      : ["Cambridge 7 Test 2 Reading Solutions"];

  const currentStepTitle =
    stepTitles[Math.min(currentStep - 1, stepTitles.length - 1)] || "Lesson Overview";

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

  const handleSelectModule = (mod: ModuleType, targetStep?: number) => {
    const nextStep =
      targetStep ??
      (mod === "task1" && (currentModule === "general1" || currentModule === "cambridge7test2") ? 8 : 1);
    setCurrentModule(mod);
    setCurrentStep(nextStep);
    timer.reset(180);
  };

  // Render Active Stage Component
  const renderStageContent = () => {
    if (currentModule === "general1") {
      return (
        <GeneralTask1Page
          onSpeak={speech.speak}
          accent={speech.accent}
          onNavigateModule={handleSelectModule}
        />
      );
    }

    if (currentModule === "cambridge7test2") {
      return (
        <Cambridge7Test2Page
          onSpeak={speech.speak}
          accent={speech.accent}
          onNavigateModule={handleSelectModule}
        />
      );
    }

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
          return (
            <Step8Connectors
              onSpeak={speech.speak}
              onNavigateToGeneral={() => handleSelectModule("general1")}
              onNavigateToCambridge={() => handleSelectModule("cambridge7test2")}
            />
          );
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

  if (!isUnlocked) {
    return (
      <div className="app-stage-container" style={{ minHeight: "100vh", background: "var(--slate-50)" }}>
        <GatekeeperModal onUnlock={unlock} errorMsg={errorMsg} setErrorMsg={setErrorMsg} />
      </div>
    );
  }

  return (
    <div className="app-stage-container">
      {/* Master Teaching Header */}
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
        boardScale={boardScale}
      />

      {/* Center Stage Viewport with Tactile Spring Motion */}
      <main className={`stage-viewport ${!isStepModule ? "standalone-mode" : ""}`}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={`${currentModule}-${currentStep}`}
            custom={direction}
            variants={stageSlideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{
              width: "100%",
              height: "100%",
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden"
            }}
          >
            {renderStageContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Bottom Touch Dock (Only on multi-step modules Task 1 & Task 2) */}
      {isStepModule && (
        <TouchDock
          currentStep={currentStep}
          totalSteps={totalSteps}
          onPrev={handlePrev}
          onNext={handleNext}
          onSelectStep={handleSelectStep}
          canPrev={currentStep > 1}
          canNext={currentStep < totalSteps}
        />
      )}

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
