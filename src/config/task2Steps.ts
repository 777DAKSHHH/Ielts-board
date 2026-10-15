import { StepDefinition } from "../types";

export const TASK2_STEPS: StepDefinition[] = [
  {
    id: "task2-step1",
    stepNumber: 1,
    title: "Audio Briefing & Guess",
    badge: "Step 01 / 09 • Cryptic Audio Guess",
    description: "Listen First: Guess the Demographic & Social Trend"
  },
  {
    id: "task2-step2",
    stepNumber: 2,
    title: "Task 2 Question & 5-Para Format",
    badge: "Step 02 / 09 • Task Reveal & 5-Para Format (3 Body Paras)",
    description: "Deconstruct the 'Positive or Negative Development' Prompt & Architecture"
  },
  {
    id: "task2-step3",
    stepNumber: 3,
    title: "Guided Brainstorm Challenge",
    badge: "Step 03 / 09 • Guided Brainstorm Challenge",
    description: "Think First. Reveal Later. (Evaluating Positives vs Negatives)"
  },
  {
    id: "task2-step4",
    stepNumber: 4,
    title: "Academic Power Vocabulary",
    badge: "Step 04 / 09 • Lexical Resource",
    description: "Workbook High-Band Vocabulary: Top Six & Model Sentences"
  },
  {
    id: "task2-step5",
    stepNumber: 5,
    title: "Sample Introduction & Thesis",
    badge: "Step 05 / 09 • Sample Introduction & Thesis",
    description: "Paraphrase the Prompt + State Clear Positive Stance"
  },
  {
    id: "task2-step6",
    stepNumber: 6,
    title: "Points for the Advantages",
    badge: "Step 06 / 09 • Points for the Advantages (Strong Side)",
    description: "Student Idea Bank: 4 Positive Reasons + Development + Real-Life Examples"
  },
  {
    id: "task2-step7",
    stepNumber: 7,
    title: "Points for the Disadvantages",
    badge: "Step 07 / 09 • Points for the Disadvantages (Counterpoint)",
    description: "Student Idea Bank: 4 Potential Drawbacks + Development + Real-Life Examples"
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
    description: "Write Your 5-Paragraph Band 9 Essay Response"
  }
];

export const TASK2_TITLES = TASK2_STEPS.map((s) => s.title);
