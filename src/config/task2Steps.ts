import { StepDefinition } from "../types";

export const TASK2_STEPS: StepDefinition[] = [
  {
    id: "task2-step1",
    stepNumber: 1,
    title: "Audio Briefing & Guess",
    badge: "Step 01 / 09 • Cryptic Audio Guess",
    description: "Listen First: Guess the Essay Topic"
  },
  {
    id: "task2-step2",
    stepNumber: 2,
    title: "Task 2 Question & Format",
    badge: "Step 02 / 09 • Task Reveal & 4-Para Format",
    description: "Deconstruct the 2-Part Management Prompt"
  },
  {
    id: "task2-step3",
    stepNumber: 3,
    title: "Guided Brainstorm Challenge",
    badge: "Step 03 / 09 • Guided Brainstorm Challenge",
    description: "Think First. Reveal Later."
  },
  {
    id: "task2-step4",
    stepNumber: 4,
    title: "Academic Power Vocabulary",
    badge: "Step 04 / 09 • Lexical Resource",
    description: "Workplace Psychology & Employee Motivation Collocations"
  },
  {
    id: "task2-step5",
    stepNumber: 5,
    title: "Introduction & 2-Part Thesis",
    badge: "Step 05 / 09 • Introduction & 2-Part Thesis",
    description: "Paraphrase the Question + Direct Answer to Both Prompts"
  },
  {
    id: "task2-step6",
    stepNumber: 6,
    title: "Q1: Financial Rewards & Limits",
    badge: "Step 06 / 09 • Question 1: Monetary Rewards & Efficacy",
    description: "Levelled Points: Short-term Sales vs. Diminishing Returns & Cultural Nuances"
  },
  {
    id: "task2-step7",
    stepNumber: 7,
    title: "Q2: Superior Motivators",
    badge: "Step 07 / 09 • Question 2: Better Ways to Motivate Staff",
    description: "Levelled Points: Autonomy, Career Progression, Recognition & Positive Culture"
  },
  {
    id: "task2-step8",
    stepNumber: 8,
    title: "Conclusion & Faculty Angles",
    badge: "Step 08 / 09 • Conclusion + Faculty Extension",
    description: "Sum-up Main Reasons, Restate Stance & HR Psychology Angles"
  },
  {
    id: "task2-step9",
    stepNumber: 9,
    title: "Final Submission & Wrap-up",
    badge: "Step 09 / 09 • Final Submission & Wrap-up",
    description: "From Guided Thinking to Independent Writing"
  }
];

export const TASK2_TITLES = TASK2_STEPS.map((s) => s.title);
