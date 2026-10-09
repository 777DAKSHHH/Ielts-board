import { VocabItem } from "./vocab";

export interface DataPoint {
  year: number;
  value: number;
  annotation?: string;
}

export interface SchoolData {
  id: string;
  name: string;
  originalLegendName?: string;
  originalTableName?: string;
  color: string;
  group: "net_decrease" | "net_increase" | "steady" | string;
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

export type CountryData = SchoolData;

export interface ConvergenceMilestone {
  id: string;
  year: number;
  approxValue: number;
  schools: string[];
  countries?: string[];
  title: string;
  description: string;
  band9Phrase: string;
}

export type IntersectionPoint = ConvergenceMilestone;

export interface Task1TableData {
  years: number[];
  unit: string;
  schools: SchoolData[];
  countries: SchoolData[]; // backwards-compatible alias
  convergences: ConvergenceMilestone[];
  intersections: ConvergenceMilestone[]; // backwards-compatible alias
  comparisonsSummary: Record<string, string>;
}

export type Task1GraphData = Task1TableData;

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
  tableData?: Task1TableData;
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
