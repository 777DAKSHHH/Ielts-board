import { StepDefinition } from "../types";

export const TASK2_STEPS: StepDefinition[] = [
  {
    id: "task2-step1",
    stepNumber: 1,
    title: "Audio Briefing & Guess",
    badge: "Step 01 / 09 • Cryptic Audio Guess",
    description: "Listen First: Guess the Public Health Topic"
  },
  {
    id: "task2-step2",
    title: "Task 2 Question & Format",
    badge: "Step 02 / 09 • Task Reveal & 4-Para Format",
    description: "Deconstruct the Effects & Solutions Prompt",
    stepNumber: 2
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
    description: "Epidemiology, Sedentary Lifestyles & Public Health Interventions"
  },
  {
    id: "task2-step5",
    stepNumber: 5,
    title: "Introduction & 2-Part Thesis",
    badge: "Step 05 / 09 • Introduction & 2-Part Thesis",
    description: "Paraphrase the Prompt + Outline Both Effects & Practical Solutions"
  },
  {
    id: "task2-step6",
    stepNumber: 6,
    title: "Q1: Repercussions & Societal Toll",
    badge: "Step 06 / 09 • Question 1: Health Repercussions & Societal Toll",
    description: "Levelled Points: Healthcare Fiscal Strain, Chronic Illnesses, Productivity Drain & Quality of Life"
  },
  {
    id: "task2-step7",
    stepNumber: 7,
    title: "Q2: Comprehensive Remedial Measures",
    badge: "Step 07 / 09 • Question 2: Remedial Measures & Strategic Interventions",
    description: "Levelled Points: Fiscal Levies, Active Urban Design, Workplace Wellness & Nutritional Subsidies"
  },
  {
    id: "task2-step8",
    stepNumber: 8,
    title: "Conclusion & Faculty Angles",
    badge: "Step 08 / 09 • Conclusion + Faculty Extension",
    description: "Sum-up Main Points, Restate Outlook & Public Health Economics Angles"
  },
  {
    id: "task2-step9",
    stepNumber: 9,
    title: "Final Essay Submission",
    badge: "Step 09 / 09 • Final Essay Submission",
    description: "Write Your Two-Part Essay Response"
  }
];

export const TASK2_TITLES = TASK2_STEPS.map((s) => s.title);
