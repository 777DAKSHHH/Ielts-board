import { VocabItem } from "./vocab";

export interface ConsequenceItem {
  type: "positive" | "negative";
  title: string;
  desc: string;
  example: string;
  level?: string;
  simpleTakeaway?: string;
  collocation?: string;
  category?: "standard" | "additional";
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
  category?: "standard" | "additional";
}

export interface FacultyAngle {
  title: string;
  development: string;
  type?: "positive" | "negative";
}

export interface BrainstormCard {
  question: string;
  thinkingLens: string;
  selfCheck: string;
  idea: string;
  id?: string;
  stepNum?: number;
  badge?: string;
  title?: string;
  promptInsight?: string;
  collocations?: string[];
  example?: string;
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

export interface StrategicLinkerGroup {
  zone?: string;
  badge?: string;
  placementRule: string;
  items?: {
    phrase: string;
    functionDesc: string;
    example: string;
  }[];
  id?: string;
  title?: string;
  themeColor?: string;
  badgeText?: string;
  academicRole?: string;
  zoneGroup?: {
    zoneName: string;
    placementRule: string;
  };
  linkers?: {
    linker: string;
    functionNote: string;
  }[];
}

export interface FluidVocabItem {
  word: string;
  pos: string;
  meaning: string;
  naturalCollocation: string;
  organicExample: string;
  mechanicalPitfall: string;
  examinerInsight?: string;
}

export interface IdeaBankItem {
  id: string;
  badge: string;
  title: string;
  mainIdea: string;
  supportingReason: string;
  example: string;
  collocations?: string[];
}

export interface MainReasonOption {
  id: string;
  badge: string;
  title: string;
  mainReason: string;
  supportingReasons: string;
  example: string;
  band9Snippet?: string;
  modelParagraph?: string;
  examinerNotes?: string;
  category?: "standard" | "additional";
}

export interface BodyParaStructure {
  paraNumber: 1 | 2 | 3;
  side: "strong_opinion" | "non_opinion";
  title: string;
  theme: string;
  mainReason: string;
  supportingReasons: string;
  example: string;
  band9Snippet: string;
  alternativeReasons?: MainReasonOption[];
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
  recommendedPosition?: string;
  strongestArgument?: string;
  introPlanningPoints?: string[];
  conclusionPlanningPoints?: string[];
  classroomDiscussion?: {
    question: string;
    followUps: string[];
    pedagogicalInsight: string;
  };
  workbookTopSix?: string[];
  modelSentences?: {
    positive: string;
    balanced: string;
  };
  fiveMinutePlanningMap?: {
    positive?: string[];
    negative?: string[];
    causes?: { id: string; label: string; note: string }[];
    solutions?: { id: string; label: string; note: string }[];
    position?: string;
    body1?: string;
    body2?: string;
    teachingRecommendation?: string;
  };
  bodyParagraphs?: BodyParaStructure[];
  causesIdeaBank?: IdeaBankItem[];
  solutionsIdeaBank?: IdeaBankItem[];
  vocabList: VocabItem[];
  vocabHunt: string[];
  consequences: ConsequenceItem[];
  evaluationArguments: EvaluationArgument[];
  facultyAngles: FacultyAngle[];
  powerExpressions: PowerExpression[];
  brainstormCards: BrainstormCard[];
  connectorsTier: ConnectorsTier;
  strategicLinkers?: StrategicLinkerGroup[];
  fluidVocab?: FluidVocabItem[];
}
