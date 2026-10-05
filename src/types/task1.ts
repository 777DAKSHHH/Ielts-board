import { VocabItem } from "./vocab";

export interface DataPoint {
  year: number;
  value: number;
  annotation?: string;
}

export interface CountryData {
  id: string;
  name: string;
  originalLegendName: string;
  color: string;
  lineStyle: "dash-dot" | "dashed" | "solid" | "dotted";
  strokeDashArray: string;
  group: "net_decrease" | "net_increase";
  badge: string;
  startValue: number;
  peakOrPlateauValue?: number;
  endValue: number;
  netChange: string;
  dataPoints: DataPoint[];
  trendSummary: string;
  band9Phrase: string;
  description: string;
}

export interface IntersectionPoint {
  id: string;
  year: number;
  approxValue: number;
  countries: [string, string];
  title: string;
  description: string;
  band9Phrase: string;
}

export interface Task1GraphData {
  years: number[];
  unit: string;
  yRange: { min: number; max: number; step: number };
  countries: CountryData[];
  intersections: IntersectionPoint[];
  comparisonsSummary: {
    dominantEmitter: string;
    mostVolatile: string;
    steepestGrowth: string;
    convergences: string;
  };
}

export interface BpSection {
  title: string;
  focus: string;
  points: string[];
  flow?: string[];
  takeaways?: string[];
}

export interface ProcessingGroup {
  title: string;
  items: string[];
}

export interface ConnectorItem {
  phrase: string;
  purpose: string;
  example: string;
}

export interface Task1Data {
  id: string;
  taskType: string;
  title: string;
  questionText: string;
  imageFileName: string;
  audioUrl: string;
  audioClueText: string;
  sampleIntro: string;
  sampleOverview: string;
  timingSeconds: number;
  graphData: Task1GraphData;
  vocabList: VocabItem[];
  vocabHunt: string[];
  bp1: BpSection;
  bp2: BpSection;
  processingGroups: ProcessingGroup[];
  connectors: ConnectorItem[];
  modelReport?: {
    wordCount: number;
    paragraphs: {
      id: string;
      title: string;
      text: string;
      wordCount: number;
      badges: string[];
    }[];
  };
}
