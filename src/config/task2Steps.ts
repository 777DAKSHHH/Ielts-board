import { StepDefinition } from "../types";

export const TASK2_STEPS: StepDefinition[] = [
  {
    id: "task2-step1",
    stepNumber: 1,
    title: "Question Briefing & Topic Overview",
    badge: "Step 01 / 09 • Topic Briefing",
    description: "Household Solar Energy (Advantages and Disadvantages Essay)"
  },
  {
    id: "task2-step2",
    stepNumber: 2,
    title: "Task Question & Format Panel",
    badge: "Step 02 / 09 • Task Reveal & Essay Format",
    description: "Deconstruct Solar Energy Prompt & Master the Balanced Advantages & Disadvantages Format"
  },
  {
    id: "task2-step3",
    stepNumber: 3,
    title: "Guided Brainstorm Challenge",
    badge: "Step 03 / 09 • Guided Brainstorm Challenge",
    description: "Think First. Reveal Later. (4 Core Solar Advantages vs. Disadvantages Cards)"
  },
  {
    id: "task2-step4",
    stepNumber: 4,
    title: "Academic Power Vocabulary",
    badge: "Step 04 / 09 • Lexical Resource",
    description: "Renewable Technology, Energy Grids & Environmental Economics: 12 Band 9 Items"
  },
  {
    id: "task2-step5",
    stepNumber: 5,
    title: "Sample Introduction & Outline",
    badge: "Step 05 / 09 • Sample Introduction & Outline",
    description: "Format: Paraphrase the prompt + Clear Outline Statement (Benefits & Drawbacks)"
  },
  {
    id: "task2-step6",
    stepNumber: 6,
    title: "Idea Bank: Advantages of Solar Energy",
    badge: "Step 06 / 09 • Idea Bank: Advantages (Body Para 1)",
    description: "Explore 5 Relatable Arguments on Clean Renewable Electricity, Bill Reductions & Autonomy"
  },
  {
    id: "task2-step7",
    stepNumber: 7,
    title: "Idea Bank: Disadvantages of Solar Energy",
    badge: "Step 07 / 09 • Idea Bank: Disadvantages (Body Para 2)",
    description: "Explore 5 Pragmatic Arguments on High Initial Costs, Weather Intermittency & Storage"
  },
  {
    id: "task2-step8",
    stepNumber: 8,
    title: "Sample Conclusion & Synthesis",
    badge: "Step 08 / 09 • Sample Conclusion & Synthesis",
    description: "Format: Sum-up main advantages and disadvantages + Balanced future recommendation"
  },
  {
    id: "task2-step9",
    stepNumber: 9,
    title: "Final Essay Structure & Revision",
    badge: "Step 09 / 09 • Final Essay Structure & Revision",
    description: "Ultra-Concise One-Liner Exam Revision & Advantages/Disadvantages Architecture Check"
  }
];

export const TASK2_TITLES = TASK2_STEPS.map((s) => s.title);
