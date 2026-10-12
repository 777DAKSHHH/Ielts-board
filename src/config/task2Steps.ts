import { StepDefinition } from "../types";

export const TASK2_STEPS: StepDefinition[] = [
  {
    id: "task2-step1",
    stepNumber: 1,
    title: "Audio Briefing & Guess",
    badge: "Step 01 / 09 • Cryptic Audio Guess",
    description: "Listen First: Guess the Global Food Trade Topic"
  },
  {
    id: "task2-step2",
    stepNumber: 2,
    title: "Task 2 Question & 5-Para Format",
    badge: "Step 02 / 09 • Task Reveal & 5-Para Format (3 Body Paras)",
    description: "Deconstruct the 'Advantages Outweigh Disadvantages' Prompt & Architecture"
  },
  {
    id: "task2-step3",
    stepNumber: 3,
    title: "Guided Brainstorm Challenge",
    badge: "Step 03 / 09 • Guided Brainstorm Challenge",
    description: "Think First. Reveal Later. (Weighing Advantages vs Disadvantages)"
  },
  {
    id: "task2-step4",
    stepNumber: 4,
    title: "Academic Power Vocabulary",
    badge: "Step 04 / 09 • Lexical Resource",
    description: "Agrarian Economics, Food Miles & Global Supply Chains"
  },
  {
    id: "task2-step5",
    stepNumber: 5,
    title: "Sample Introduction & Thesis",
    badge: "Step 05 / 09 • Sample Introduction & Thesis",
    description: "Paraphrase the Prompt + State Clear Outweighing Opinion"
  },
  {
    id: "task2-step6",
    stepNumber: 6,
    title: "Points for the Advantages",
    badge: "Step 06 / 09 • Points for the Advantages (Strong Side)",
    description: "4 Relatable Main Reasons + Causal Explanations + Concrete Examples"
  },
  {
    id: "task2-step7",
    stepNumber: 7,
    title: "Points for the Disadvantages",
    badge: "Step 07 / 09 • Points for the Disadvantages (Counterpoint)",
    description: "4 Relatable Main Reasons + Causal Explanations + Concrete Examples"
  },
  {
    id: "task2-step8",
    stepNumber: 8,
    title: "Sample Conclusion",
    badge: "Step 08 / 09 • Sample Conclusion & Outweighing Strategy",
    description: "Decisive Outweighing Formula + Model Conclusion + Scoring Standards"
  },
  {
    id: "task2-step9",
    stepNumber: 9,
    title: "Final Essay Submission",
    badge: "Step 09 / 09 • Final Essay Submission",
    description: "Write Your 5-Paragraph Outweighed Essay Response"
  }
];

export const TASK2_TITLES = TASK2_STEPS.map((s) => s.title);
