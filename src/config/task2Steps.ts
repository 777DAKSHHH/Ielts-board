import { StepDefinition } from "../types";

export const TASK2_STEPS: StepDefinition[] = [
  {
    id: "task2-step1",
    stepNumber: 1,
    title: "Question Briefing & Topic Overview",
    badge: "Step 01 / 09 • Topic Briefing",
    description: "Businesses & Corporate Social Responsibility (Agree or Disagree)"
  },
  {
    id: "task2-step2",
    stepNumber: 2,
    title: "Task Question & Format Panel",
    badge: "Step 02 / 09 • Task Reveal & Essay Format",
    description: "Deconstruct Business Prompt & Master the Mandatory 5-Paragraph Opinion Format"
  },
  {
    id: "task2-step3",
    stepNumber: 3,
    title: "Guided Brainstorm Challenge",
    badge: "Step 03 / 09 • Guided Brainstorm Challenge",
    description: "Think First. Reveal Later. (4 One-Liner Opinion & Concession Cards)"
  },
  {
    id: "task2-step4",
    stepNumber: 4,
    title: "Academic Power Vocabulary",
    badge: "Step 04 / 09 • Lexical Resource",
    description: "Corporate Ethics, Sustainability & Economic Viability: 12 Band 9 Items"
  },
  {
    id: "task2-step5",
    stepNumber: 5,
    title: "Sample Introduction & Opinion",
    badge: "Step 05 / 09 • Sample Introduction & Opinion",
    description: "Format: Paraphrase the question + Clear Opinion Statement"
  },
  {
    id: "task2-step6",
    stepNumber: 6,
    title: "Idea Bank: Opinion Arguments",
    badge: "Step 06 / 09 • Idea Bank: Opinion Arguments",
    description: "Explore 5 Relatable Arguments Supporting Corporate Social & Environmental Duty"
  },
  {
    id: "task2-step7",
    stepNumber: 7,
    title: "Idea Bank: Non-Opinion / Concession",
    badge: "Step 07 / 09 • Idea Bank: Non-Opinion / Concession",
    description: "Explore 5 Economic Arguments on Profit Generation, Solvency & Shareholder Duties"
  },
  {
    id: "task2-step8",
    stepNumber: 8,
    title: "Sample Conclusion & Restatement",
    badge: "Step 08 / 09 • Sample Conclusion & Restatement",
    description: "Format: Sum-up all the main points + Restate your opinion"
  },
  {
    id: "task2-step9",
    stepNumber: 9,
    title: "Final Essay Structure & Revision",
    badge: "Step 09 / 09 • Final Essay Structure & Revision",
    description: "Ultra-Concise One-Liner Exam Revision & 5-Paragraph Architecture Check"
  }
];

export const TASK2_TITLES = TASK2_STEPS.map((s) => s.title);
