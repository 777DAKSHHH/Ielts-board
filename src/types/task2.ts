import { VocabItem } from "./vocab";

export interface ConsequenceItem {
  type: "positive" | "negative";
  title: string;
  desc: string;
  example: string;
  level?: string;
  simpleTakeaway?: string;
  collocation?: string;
}

export interface EvaluationArgument {
  title: string;
  reason: string;
  development: string;
  example: string;
  type: "argument" | "counterpoint";
  level?: string;
  simpleTakeaway?: string;
  collocation?: string;
}

export interface FacultyAngle {
  title: string;
  development: string;
}

export interface BrainstormCard {
  question: string;
  thinkingLens: string;
  selfCheck: string;
  idea: string;
}

export interface PowerExpression {
  expression: string;
  meaning: string;
  example: string;
}

export interface ConnectorsTier {
  sTier: string[];
  aTier: string[];
  bTier: string[];
}

export interface Task2Data {
  id: string;
  taskType: string;
  title: string;
  questionText: string;
  audioUrl: string;
  timingSeconds: number;
  sampleIntro: string;
  sampleConclusion: string;
  vocabList: VocabItem[];
  vocabHunt: string[];
  consequences: ConsequenceItem[];
  evaluationArguments: EvaluationArgument[];
  facultyAngles: FacultyAngle[];
  powerExpressions: PowerExpression[];
  brainstormCards: BrainstormCard[];
  connectorsTier: ConnectorsTier;
}
