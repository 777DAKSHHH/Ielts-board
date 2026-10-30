import { VocabItem } from "./vocab";

export type SpendingCategoryKey =
  | "teachers_salaries"
  | "other_workers_salaries"
  | "furniture_and_equipment"
  | "resources"
  | "insurance";

export interface SpendingCategoryItem {
  id: SpendingCategoryKey;
  label: string;
  shortLabel: string;
  color: string;
  group: "staff" | "non_staff";
  y1981: number;
  y1991: number;
  y2001: number;
  netChange: number;
  trendType: "peak_dip" | "continuous_fall" | "fluctuated_surge" | "surge_plunge" | "quadrupled";
  trendDescription: string;
  band9Phrase: string;
}

export interface SchoolSpendingSlice {
  categoryId: SpendingCategoryKey;
  label: string;
  percentage: number;
  color: string;
}

export interface SchoolSpendingYearData {
  year: 1981 | 1991 | 2001;
  slices: SchoolSpendingSlice[];
  totalStaffPercent: number;
  totalNonStaffPercent: number;
  topCategory: string;
  lowestCategory: string;
  notes: string;
}

export interface SpendingHotspot {
  id: string;
  title: string;
  category: string;
  y1981: number;
  y1991: number;
  y2001: number;
  trendText: string;
  contrastKey: string;
  band9Sentence: string;
  keyFeature: string;
}

export type GenderKey = "male" | "female";

export interface ActivityAgeGroup {
  id: string; // "15_to_24", "25_to_34", etc.
  ageGroup: string; // "15 to 24", "25 to 34", etc.
  shortLabel: string; // "15–24", "25–34", etc.
  male: number; // 52.8
  female: number; // 47.7
  genderGap: number; // female - male (+ for female lead, - for male lead)
  higherGender: "male" | "female" | "equal";
  annotation?: string;
  isPeak?: "male" | "female";
  isTrough?: "male" | "female";
}

export interface ActivityGenderInfo {
  id: GenderKey;
  name: string;
  color: string;
  barColor: string;
  bgBadge: string;
  peakAge: string;
  peakValue: number;
  lowestAge: string;
  lowestValue: number;
  summary: string;
  band9Phrase: string;
}

export interface ActivityHotspot {
  id: string;
  title: string;
  ageGroup: string;
  maleValue: number;
  femaleValue: number;
  gapText: string;
  contrastKey: string;
  band9Sentence: string;
  keyFeature: string;
}

// Backward compatibility types
export type MediaChannelKey = "tv" | "radio";
export type TimeOfDayZone = "overnight" | "morning" | "midday" | "afternoon" | "evening" | "night";

export interface HourlyAudiencePoint {
  hour: number;
  timeLabel: string;
  tv: number;
  radio: number;
  annotation?: string;
  isPeak?: "tv" | "radio";
  isCrossover?: boolean;
}

export interface MediaChannelInfo {
  id: MediaChannelKey;
  name: string;
  color: string;
  lineStroke: string;
  bgBadge: string;
  peakTime: string;
  peakValue: number;
  troughTime: string;
  troughValue: number;
  summary: string;
  band9Phrase: string;
}

export interface AudienceHotspot {
  id: string;
  title: string;
  zone: TimeOfDayZone;
  timeRange: string;
  radioState: string;
  tvState: string;
  contrastKey: string;
  band9Sentence: string;
  keyFeature: string;
}

export type CountryKey = "germany" | "france" | "italy";
export type FormatKey = "shop_cds" | "online_cds" | "downloads" | "cassettes" | "vinyl";

export interface CountryProfitDetail {
  y1997: number;
  y2007: number;
  change: string;
  band9Citation: string;
}

export interface MusicFormatItem {
  id: FormatKey;
  name: string;
  shortLabel: string;
  category: "Physical Retail" | "Digital / Online" | "Legacy Analog";
  description: string;
  profits: Record<CountryKey, CountryProfitDetail>;
  trendSummary: string;
  band9Phrase: string;
  keyFeature: string;
}

export interface CountryMarketData {
  id: CountryKey;
  name: string;
  fillPattern: "solid" | "empty" | "textured";
  barColor: string;
  badge: string;
  total1997: number;
  total2007: number;
  netChange: string;
  summary: string;
  dominantFormat: string;
}

export interface ComparisonHotspot {
  id: string;
  title: string;
  zone: string;
  normalState: string;
  elNinoState: string;
  contrastKey: string;
  band9Sentence: string;
}

export interface PacificConditionFeature {
  id: "normal" | "el_nino";
  title: string;
  badge: string;
  tradeWinds: string;
  upperWinds: string;
  waterThermocline: string;
  upwellingStatus: string;
  rainfallPattern: string;
  australiaCondition: {
    climate: string;
    weather: string;
    rainfall: string;
    visualDetail: string;
  };
  peruCondition: {
    climate: string;
    marineLife: string;
    fisheryStatus: string;
    visualDetail: string;
  };
  band9Phrase: string;
  summary: string;
}

export interface Task1DiagramData {
  conditions?: PacificConditionFeature[];
  hotspots: ComparisonHotspot[];
  comparisonsSummary: Record<string, string>;
  formats?: MusicFormatItem[];
  countries?: CountryMarketData[];
  audiencePoints?: HourlyAudiencePoint[];
  channels?: MediaChannelInfo[];
  schools?: any[];
  convergences?: any[];
  intersections?: any[];
}

export type Task1GraphData = Task1DiagramData;
export type Task1TableData = Task1DiagramData;

export interface SchoolData {
  id: string;
  name: string;
  color: string;
  badge: string;
  dataPoints: { year: number; value: number; annotation?: string }[];
  netChange: string;
  trendSummary: string;
  band9Phrase: string;
}
export type CountryData = SchoolData;

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

export interface ProcessStageItem {
  stageNumber: number;
  id: string;
  name: string;
  equipment: string;
  inputs: string;
  output: string;
  actionText: string;
  passiveVerb: string;
  band9Phrase: string;
  color: string;
}

export interface ConcreteIngredientItem {
  id: string;
  name: string;
  percentage: number;
  role: string;
  note?: string;
  color: string;
  band9Phrase: string;
}

export interface Task1Data {
  id: string;
  taskType: string;
  title: string;
  companyName: string;
  unit: string;
  questionText: string;
  imageFileName: string;
  hdImageFileName?: string;
  scanImageFileName?: string;
  audioUrl: string;
  audioClueText: string;
  sampleIntro: string;
  sampleOverview: string;
  timingSeconds: number;
  hourlyPoints?: HourlyAudiencePoint[];
  channels?: MediaChannelInfo[];
  audienceHotspots?: AudienceHotspot[];
  activityData?: ActivityAgeGroup[];
  genderInfo?: ActivityGenderInfo[];
  activityHotspots?: ActivityHotspot[];
  spendingCategories?: SpendingCategoryItem[];
  spendingYears?: SchoolSpendingYearData[];
  spendingHotspots?: SpendingHotspot[];
  processStages?: ProcessStageItem[];
  concreteIngredients?: ConcreteIngredientItem[];
  formats: MusicFormatItem[];
  countries: CountryMarketData[];
  diagramData: Task1DiagramData;
  graphData: Task1DiagramData;
  tableData?: Task1DiagramData;
  vocabList: VocabItem[];
  vocabHunt: string[];
  bp1: BpSection;
  bp2: BpSection;
  processingGroups: ProcessingGroup[];
  connectors: ConnectorItem[];
  modelReport: {
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
