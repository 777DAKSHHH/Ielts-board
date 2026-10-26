import { StepDefinition } from "../types";

export const TASK2_STEPS: StepDefinition[] = [
  {
    id: "task2-step1",
    stepNumber: 1,
    title: "Audio Briefing & Topic Reveal",
    badge: "Step 01 / 09 • Cryptic Audio Briefing",
    description: "Listen First: The Relevance of History vs Modern Technological Progress"
  },
  {
    id: "task2-step2",
    stepNumber: 2,
    title: "Task 2 Question & 5-Para Architecture",
    badge: "Step 02 / 09 • Task Reveal & Essay Format",
    description: "Deconstruct 'Relevance of History vs Understanding the Present' & Master the 5-Paragraph Architecture"
  },
  {
    id: "task2-step3",
    stepNumber: 3,
    title: "Guided Brainstorm Challenge",
    badge: "Step 03 / 09 • Guided Brainstorm Challenge",
    description: "Think First. Reveal Later. (View 1: History is Outdated vs View 2: History Guides the Present)"
  },
  {
    id: "task2-step4",
    stepNumber: 4,
    title: "Academic Power Vocabulary",
    badge: "Step 04 / 09 • Lexical Resource",
    description: "History, Modernity & Social Evolution: 12 Band 9 Vocabulary Items & Model Sentences"
  },
  {
    id: "task2-step5",
    stepNumber: 5,
    title: "Sample Introduction & Outline",
    badge: "Step 05 / 09 • Sample Introduction & Thesis",
    description: "Formula: Paraphrase the question + Clear Personal Opinion"
  },
  {
    id: "task2-step6",
    stepNumber: 6,
    title: "Body 1: Ideas for 1st View",
    badge: "Step 06 / 09 • Body Para 1 (1st View: History is Outdated)",
    description: "Ideas for 1st View: Unprecedented Technology, Global Frameworks & Modern Realities"
  },
  {
    id: "task2-step7",
    stepNumber: 7,
    title: "Body 2: Ideas for 2nd View",
    badge: "Step 07 / 09 • Body Para 2 (2nd View: History Guides Us)",
    description: "Ideas for 2nd View: Recurring Human Nature, Geopolitical Origins & Economic Lessons"
  },
  {
    id: "task2-step8",
    stepNumber: 8,
    title: "Sample Conclusion & Restatement",
    badge: "Step 08 / 09 • Sample Conclusion & Synthesis",
    description: "Formula: Sum-up all the main points + Restate the opinion"
  },
  {
    id: "task2-step9",
    stepNumber: 9,
    title: "Final Essay Submission",
    badge: "Step 09 / 09 • Final Essay Submission",
    description: "Complete Band 9 Model Essay Response (Discussion with Opinion: 5-Paragraph Structure)"
  }
];

export const TASK2_TITLES = TASK2_STEPS.map((s) => s.title);
