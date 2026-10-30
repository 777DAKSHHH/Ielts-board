import type {
  Task1Data,
  VocabItem,
  CountryMarketData,
  MusicFormatItem,
  ComparisonHotspot,
  PacificConditionFeature,
  SchoolData,
  Task1DiagramData,
  HourlyAudiencePoint,
  MediaChannelInfo,
  AudienceHotspot,
  ActivityAgeGroup,
  ActivityGenderInfo,
  ActivityHotspot,
  SpendingCategoryItem,
  SpendingCategoryKey,
  SchoolSpendingYearData,
  SpendingHotspot,
  ProcessStageItem,
  ConcreteIngredientItem
} from "../types";

export type {
  Task1Data,
  VocabItem,
  CountryMarketData,
  MusicFormatItem,
  ComparisonHotspot,
  PacificConditionFeature,
  SchoolData,
  Task1DiagramData,
  HourlyAudiencePoint,
  MediaChannelInfo,
  AudienceHotspot,
  ActivityAgeGroup,
  ActivityGenderInfo,
  ActivityHotspot,
  SpendingCategoryItem,
  SpendingCategoryKey,
  SchoolSpendingYearData,
  SpendingHotspot,
  ProcessStageItem,
  ConcreteIngredientItem
};

// ==========================================
// 1. CEMENT PRODUCTION PROCESS STAGES
// ==========================================

export const CEMENT_PROCESS_STAGES: ProcessStageItem[] = [
  {
    stageNumber: 1,
    id: "crushing",
    name: "1. Crushing Limestone & Clay",
    equipment: "Crusher",
    inputs: "Limestone + Clay (Raw Minerals)",
    output: "Fine Powder",
    actionText: "Limestone and clay are introduced into a heavy-duty crusher to be pulverized into a fine powder.",
    passiveVerb: "are crushed / pulverized",
    band9Phrase: "“Initially, limestone and clay are introduced into a crusher to be pulverized into a fine powder.”",
    color: "#2563eb"
  },
  {
    stageNumber: 2,
    id: "mixing",
    name: "2. Mechanical Blending",
    equipment: "Mixer",
    inputs: "Crushed Powder",
    output: "Uniform Powder Blend",
    actionText: "The crushed powder passes into an industrial mixer where it is blended thoroughly into a homogeneous mixture.",
    passiveVerb: "is mixed / blended",
    band9Phrase: "“Following this, the powder is transferred to an industrial mixer to achieve a uniform blend.”",
    color: "#0284c7"
  },
  {
    stageNumber: 3,
    id: "heating",
    name: "3. Rotating Kiln / Thermal Treatment",
    equipment: "Rotating Heater (Inclined Cylinder)",
    inputs: "Blended Powder + Direct Heat",
    output: "Heated Material / Clinker",
    actionText: "The mixture enters an inclined rotating cylinder heater where intense heat is applied directly from the base as the drum turns.",
    passiveVerb: "is heated / rotated",
    band9Phrase: "“Next, the blended substance enters an inclined rotating cylinder heater where it is subjected to high temperatures applied from the lower end.”",
    color: "#ea580c"
  },
  {
    stageNumber: 4,
    id: "grinding",
    name: "4. Milling & Grinding",
    equipment: "Grinder & Conveyor Belt",
    inputs: "Heated Material",
    output: "Finished Cement Powder",
    actionText: "Having exited the rotating heater, the material travels along a conveyor belt to a grinder, where it is milled into fine cement.",
    passiveVerb: "is conveyed / ground",
    band9Phrase: "“After being heated, the mixture travels along a conveyor belt into a grinder, where it is finely milled into cement.”",
    color: "#7c3aed"
  },
  {
    stageNumber: 5,
    id: "packaging",
    name: "5. Packaging & Bagging",
    equipment: "Bagging Unit",
    inputs: "Finished Cement",
    output: "Bags of Cement",
    actionText: "The completed cement is poured into heavy-duty bags, ready for commercial storage, transport, or immediate concrete production.",
    passiveVerb: "is packed / bagged",
    band9Phrase: "“Finally, the resulting cement is packed into bags, ready for commercial distribution or immediate construction use.”",
    color: "#059669"
  }
];

// ==========================================
// 2. CONCRETE PRODUCTION INGREDIENTS
// ==========================================

export const CONCRETE_INGREDIENTS: ConcreteIngredientItem[] = [
  {
    id: "gravel",
    name: "Gravel (small stones)",
    percentage: 50,
    role: "Dominant Coarse Aggregate (Half of entire mixture)",
    note: "Provides compressive strength and bulk structure",
    color: "#475569",
    band9Phrase: "“Gravel, consisting of small stones, constitutes half (50%) of the total mixture, serving as the primary coarse aggregate.”"
  },
  {
    id: "sand",
    name: "Sand",
    percentage: 25,
    role: "Fine Aggregate (One quarter of mixture)",
    note: "Fills interstitial voids between gravel stones",
    color: "#d97706",
    band9Phrase: "“Sand accounts for a quarter (25%) of the blend, functioning as a fine aggregate.”"
  },
  {
    id: "cement",
    name: "Cement",
    percentage: 15,
    role: "Binding Agent (Manufactured in Diagram 1)",
    note: "Glues aggregates together when activated by water",
    color: "#2563eb",
    band9Phrase: "“Manufactured cement comprises 15% of the composition to act as the essential binding agent.”"
  },
  {
    id: "water",
    name: "Water",
    percentage: 10,
    role: "Hydration & Slurry Agent (Smallest portion)",
    note: "Triggers chemical curing and enables workability",
    color: "#0284c7",
    band9Phrase: "“Water represents the smallest fraction at just 10%, activating the hydration process.”"
  }
];

// ==========================================
// 3. BACKWARD COMPATIBILITY DATA SHIMS
// ==========================================

export const SPENDING_CATEGORIES: SpendingCategoryItem[] = [
  {
    id: "teachers_salaries",
    label: "Crusher & Mixing (Stage 1 & 2)",
    shortLabel: "Crush & Mix",
    color: "#2563eb",
    group: "staff",
    y1981: 50,
    y1991: 50,
    y2001: 50,
    netChange: 0,
    trendType: "peak_dip",
    trendDescription: "Limestone and clay are crushed into powder and mixed thoroughly.",
    band9Phrase: "“Initially, limestone and clay are crushed into powder and mixed thoroughly.”"
  },
  {
    id: "other_workers_salaries",
    label: "Rotating Heater (Stage 3)",
    shortLabel: "Rotary Kiln",
    color: "#ea580c",
    group: "staff",
    y1981: 25,
    y1991: 25,
    y2001: 25,
    netChange: 0,
    trendType: "continuous_fall",
    trendDescription: "Substance is heated in an inclined rotating cylinder with heat from the base.",
    band9Phrase: "“The mixture is subjected to high heat in an inclined rotating cylinder.”"
  },
  {
    id: "furniture_and_equipment",
    label: "Grinding & Bagging (Stage 4 & 5)",
    shortLabel: "Grind & Bag",
    color: "#059669",
    group: "non_staff",
    y1981: 25,
    y1991: 25,
    y2001: 25,
    netChange: 0,
    trendType: "fluctuated_surge",
    trendDescription: "Cooled mixture is ground into fine cement and bagged for transport.",
    band9Phrase: "“After thermal treatment, the substance is ground into fine cement and bagged.”"
  },
  {
    id: "resources",
    label: "Concrete Aggregates: Gravel (50%) & Sand (25%)",
    shortLabel: "Aggregates (75%)",
    color: "#d97706",
    group: "non_staff",
    y1981: 75,
    y1991: 75,
    y2001: 75,
    netChange: 0,
    trendType: "surge_plunge",
    trendDescription: "Gravel (50%) and sand (25%) together form three-quarters (75%) of concrete.",
    band9Phrase: "“Gravel and sand combined make up 75% of the total concrete mixture.”"
  },
  {
    id: "insurance",
    label: "Concrete Binder & Liquid: Cement (15%) & Water (10%)",
    shortLabel: "Binder & Water (25%)",
    color: "#7c3aed",
    group: "non_staff",
    y1981: 25,
    y1991: 25,
    y2001: 25,
    netChange: 0,
    trendType: "quadrupled",
    trendDescription: "Cement (15%) and water (10%) form the remaining quarter (25%) as binder and activator.",
    band9Phrase: "“Cement and water comprise the remaining 25% of the concrete formulation.”"
  }
];

export const SPENDING_YEARS: SchoolSpendingYearData[] = [
  {
    year: 1981,
    slices: [
      { categoryId: "teachers_salaries", label: "Crush & Mix", percentage: 35, color: "#2563eb" },
      { categoryId: "other_workers_salaries", label: "Rotating Heater", percentage: 35, color: "#ea580c" },
      { categoryId: "furniture_and_equipment", label: "Grind & Bag", percentage: 30, color: "#059669" }
    ],
    totalStaffPercent: 70,
    totalNonStaffPercent: 30,
    topCategory: "Cement Production Line",
    lowestCategory: "Packaging",
    notes: "5 linear manufacturing stages transform raw minerals into bagged cement."
  },
  {
    year: 1991,
    slices: [
      { categoryId: "resources", label: "Gravel (50%)", percentage: 50, color: "#475569" },
      { categoryId: "resources", label: "Sand (25%)", percentage: 25, color: "#d97706" },
      { categoryId: "insurance", label: "Cement (15%)", percentage: 15, color: "#2563eb" },
      { categoryId: "insurance", label: "Water (10%)", percentage: 10, color: "#0284c7" }
    ],
    totalStaffPercent: 75,
    totalNonStaffPercent: 25,
    topCategory: "Gravel (50%)",
    lowestCategory: "Water (10%)",
    notes: "Concrete batch mixing: 4 ingredients combined in a rotating mixer."
  },
  {
    year: 2001,
    slices: [
      { categoryId: "resources", label: "Coarse Aggregates (50%)", percentage: 50, color: "#475569" },
      { categoryId: "resources", label: "Fine Aggregates (25%)", percentage: 25, color: "#d97706" },
      { categoryId: "insurance", label: "Binder & Hydration (25%)", percentage: 25, color: "#2563eb" }
    ],
    totalStaffPercent: 75,
    totalNonStaffPercent: 25,
    topCategory: "Total Aggregates (75%)",
    lowestCategory: "Binder & Hydration (25%)",
    notes: "Aggregates account for three-quarters of the final volume."
  }
];

export const SPENDING_HOTSPOTS: SpendingHotspot[] = [
  {
    id: "stage-1-crushing",
    title: "1. Crushing Limestone & Clay",
    category: "Crusher & Mixing (Stage 1 & 2)",
    y1981: 1,
    y1991: 1,
    y2001: 1,
    trendText: "Limestone and clay are crushed into fine powder by a mechanical crusher.",
    contrastKey: "First mechanical step in cement manufacturing.",
    band9Sentence: "Initially, limestone and clay are fed into a mechanical crusher to be pulverized into a fine powder.",
    keyFeature: "Raw minerals $\\rightarrow$ Crusher $\\rightarrow$ Powder."
  },
  {
    id: "stage-2-mixing",
    title: "2. Industrial Mixing Chamber",
    category: "Crusher & Mixing (Stage 1 & 2)",
    y1981: 2,
    y1991: 2,
    y2001: 2,
    trendText: "Crushed powder enters an industrial mixer for thorough blending.",
    contrastKey: "Ensures uniform distribution before heating.",
    band9Sentence: "Following this, the powder is blended thoroughly in an industrial mixer to achieve a uniform consistency.",
    keyFeature: "Homogeneous blending of crushed minerals."
  },
  {
    id: "stage-3-heater",
    title: "3. Rotating Heater / Kiln",
    category: "Rotating Heater (Stage 3)",
    y1981: 3,
    y1991: 3,
    y2001: 3,
    trendText: "Mixture passes through an inclined rotating cylinder while intense heat is applied from the base.",
    contrastKey: "Core thermal processing stage of cement production.",
    band9Sentence: "The blended material then enters an inclined rotating cylinder heater where it is subjected to high heat applied from the lower end.",
    keyFeature: "Direct heat application in a continuously rotating drum."
  },
  {
    id: "stage-4-grinding",
    title: "4. Conveyor Belt & Grinder",
    category: "Grinding & Bagging (Stage 4 & 5)",
    y1981: 4,
    y1991: 4,
    y2001: 4,
    trendText: "Heated output is transported by conveyor belt into a grinder, milling it into fine cement.",
    contrastKey: "Transforms heated clinker into usable powdery cement.",
    band9Sentence: "Having exited the heater, the material travels along a conveyor belt to a grinder, where it is milled into fine cement powder.",
    keyFeature: "Conveyor belt transport $\\rightarrow$ Grinder $\\rightarrow$ Cement."
  },
  {
    id: "stage-5-packaging",
    title: "5. Packaging into Bags",
    category: "Grinding & Bagging (Stage 4 & 5)",
    y1981: 5,
    y1991: 5,
    y2001: 5,
    trendText: "Finished cement is poured into bags for storage or transportation.",
    contrastKey: "Final output of Diagram 1, ready for commercial distribution.",
    band9Sentence: "Finally, the completed cement is packaged into bags, ready for transport or immediate use in concrete production.",
    keyFeature: "Bags of cement ready for use."
  },
  {
    id: "concrete-proportions",
    title: "6. Concrete Recipe: 4 Ingredients",
    category: "Concrete Aggregates: Gravel (50%) & Sand (25%)",
    y1981: 50,
    y1991: 50,
    y2001: 50,
    trendText: "Concrete comprises 50% gravel, 25% sand, 15% cement, and 10% water.",
    contrastKey: "Aggregates (gravel + sand) account for 75% of total volume.",
    band9Sentence: "Regarding concrete production, gravel forms half (50%) of the mixture, sand makes up 25%, cement accounts for 15%, and water represents 10%.",
    keyFeature: "Gravel (50%) + Sand (25%) + Cement (15%) + Water (10%)."
  },
  {
    id: "concrete-mixer",
    title: "7. Rotating Concrete Mixer",
    category: "Concrete Binder & Liquid: Cement (15%) & Water (10%)",
    y1981: 100,
    y1991: 100,
    y2001: 100,
    trendText: "All four ingredients are loaded simultaneously into a rotating concrete mixer to yield wet concrete.",
    contrastKey: "Single-stage batch mixing compared to 5-stage linear cement process.",
    band9Sentence: "All four elements are loaded simultaneously into a cylindrical concrete mixer, which rotates to produce an even slurry of concrete.",
    keyFeature: "Mechanical rotating drum yielding wet concrete."
  }
];

export const ACTIVITY_DATA: ActivityAgeGroup[] = SPENDING_CATEGORIES.map((c) => ({
  id: c.id,
  ageGroup: c.label,
  shortLabel: c.shortLabel,
  male: c.y1981,
  female: c.y2001,
  genderGap: c.y2001 - c.y1981,
  higherGender: "equal",
  annotation: c.trendDescription,
  isPeak: undefined,
  isTrough: undefined
}));

export const ACTIVITY_GENDERS: ActivityGenderInfo[] = [
  {
    id: "male",
    name: "Cement Production",
    color: "#2563eb",
    barColor: "#2563eb",
    bgBadge: "rgba(37, 99, 235, 0.12)",
    peakAge: "Crushing & Heating (5 Stages)",
    peakValue: 100,
    lowestAge: "Raw Limestone & Clay",
    lowestValue: 0,
    summary: "Linear 5-stage manufacturing process transforming limestone and clay into bagged cement.",
    band9Phrase: "“Cement production is a multi-step industrial procedure requiring specialized equipment and intense heat.”"
  },
  {
    id: "female",
    name: "Concrete Production",
    color: "#059669",
    barColor: "#059669",
    bgBadge: "rgba(5, 150, 105, 0.12)",
    peakAge: "Gravel (50%)",
    peakValue: 50,
    lowestAge: "Water (10%)",
    lowestValue: 10,
    summary: "Single-stage batch mixing combining gravel (50%), sand (25%), cement (15%), and water (10%) in a rotating drum.",
    band9Phrase: "“Concrete production is a single-stage batch mixing process combining four distinct materials.”"
  }
];

export const ACTIVITY_HOTSPOTS: ActivityHotspot[] = SPENDING_HOTSPOTS.map((h) => ({
  id: h.id,
  title: h.title,
  ageGroup: h.category,
  maleValue: h.y1981,
  femaleValue: h.y2001,
  gapText: "Stage",
  contrastKey: h.contrastKey,
  band9Sentence: h.band9Sentence,
  keyFeature: h.keyFeature
}));

export const HOURLY_AUDIENCE_DATA: HourlyAudiencePoint[] = [
  { hour: 1, timeLabel: "Crush", tv: 50, radio: 50 },
  { hour: 2, timeLabel: "Mix", tv: 50, radio: 50 },
  { hour: 3, timeLabel: "Heat", tv: 100, radio: 25 },
  { hour: 4, timeLabel: "Grind", tv: 50, radio: 25 },
  { hour: 5, timeLabel: "Bag", tv: 25, radio: 25 }
];

export const MEDIA_CHANNELS: MediaChannelInfo[] = [
  {
    id: "tv",
    name: "Cement Production Stages",
    color: "#2563eb",
    lineStroke: "#2563eb",
    bgBadge: "rgba(37, 99, 235, 0.15)",
    peakTime: "Heating",
    peakValue: 100,
    troughTime: "Crush",
    troughValue: 20,
    summary: "5 sequential stages from raw materials to bagged cement.",
    band9Phrase: "“Cement requires 5 sequential mechanical and thermal stages.”"
  },
  {
    id: "radio",
    name: "Concrete Batch Ingredients",
    color: "#059669",
    lineStroke: "#059669",
    bgBadge: "rgba(5, 150, 105, 0.12)",
    peakTime: "Gravel (50%)",
    peakValue: 50,
    troughTime: "Water (10%)",
    troughValue: 10,
    summary: "4 ingredients mixed simultaneously in a rotating drum.",
    band9Phrase: "“Concrete mixes 4 ingredients simultaneously in a rotating drum.”"
  }
];

export const AUDIENCE_HOTSPOTS: AudienceHotspot[] = ACTIVITY_HOTSPOTS.map((h) => ({
  id: h.id,
  title: h.title,
  zone: "morning",
  timeRange: h.ageGroup,
  radioState: h.contrastKey,
  tvState: h.keyFeature,
  contrastKey: h.contrastKey,
  band9Sentence: h.band9Sentence,
  keyFeature: h.keyFeature
}));

export const TASK1_HOTSPOTS: ComparisonHotspot[] = SPENDING_HOTSPOTS.map((h) => ({
  id: h.id,
  title: h.title,
  zone: h.category,
  normalState: h.contrastKey,
  elNinoState: h.keyFeature,
  contrastKey: h.contrastKey,
  band9Sentence: h.band9Sentence
}));

// ==========================================
// 4. MASTER TASK 1 DATA OBJECT
// ==========================================

export const TASK1_DATA: Task1Data = {
  id: "cement-concrete-production-process",
  taskType: "IELTS Academic Writing Task 1 • Process Diagrams",
  title: "The Procedure of Making Cement and Concrete",
  companyName: "Cambridge IELTS Academic Writing Task 1",
  unit: "Percentage (%) & Industrial Stages",
  questionText:
    "The diagrams show the procedure of making cement and concrete.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
  imageFileName: "cement_concrete_production.png",
  hdImageFileName: "cement_concrete_production.jpg",
  scanImageFileName: "cement_concrete_production.png",
  audioUrl: "materials/flowchart-for-task-1.png",
  audioClueText:
    "The diagrams illustrate the multi-stage procedure of manufacturing cement from limestone and clay, followed by the four-ingredient batch mixing required to produce concrete in a rotating mixer.",
  timingSeconds: 1200,

  sampleIntro:
    "The two diagrams illustrate the multi-stage industrial procedure involved in manufacturing cement, followed by how it is subsequently combined with other raw ingredients to produce concrete.",

  sampleOverview:
    "Overall, cement production is a multi-step, sequential process requiring specialized equipment, physical crushing, and intense heating, whereas concrete manufacturing is a straightforward, single-stage batch mixing procedure wherein coarse and fine aggregates constitute the vast majority of the mixture, bound together by cement and activated with water.",

  processStages: CEMENT_PROCESS_STAGES,
  concreteIngredients: CONCRETE_INGREDIENTS,

  spendingCategories: SPENDING_CATEGORIES,
  spendingYears: SPENDING_YEARS,
  spendingHotspots: SPENDING_HOTSPOTS,

  hourlyPoints: HOURLY_AUDIENCE_DATA,
  channels: MEDIA_CHANNELS,
  audienceHotspots: AUDIENCE_HOTSPOTS,
  activityData: ACTIVITY_DATA,
  genderInfo: ACTIVITY_GENDERS,
  activityHotspots: ACTIVITY_HOTSPOTS,

  formats: [],
  countries: [],

  diagramData: {
    hotspots: TASK1_HOTSPOTS,
    comparisonsSummary: {
      cement_stages: "Cement involves 5 linear stages: Crushing $\\rightarrow$ Mixing $\\rightarrow$ Rotating Heater $\\rightarrow$ Grinding $\\rightarrow$ Packaging.",
      concrete_mix: "Concrete requires 4 ingredients: Gravel (50%), Sand (25%), Cement (15%), Water (10%) poured into a rotating drum.",
      aggregates_ratio: "Aggregates (gravel + sand) account for 75% of concrete volume, while cement serves as a 15% binder.",
      structural_contrast: "Cement undergoes chemical/thermal transformation, whereas concrete is a mechanical batch blend."
    }
  },
  graphData: {
    hotspots: TASK1_HOTSPOTS,
    comparisonsSummary: {
      linear_vs_batch: "Cement production follows a strict linear sequence, while concrete is produced through a single batch mixing step.",
      ingredient_hierarchy: "Gravel forms the largest component at half (50%), while water forms the smallest at 10%."
    }
  },

  vocabList: [
    {
      word: "Pulverize / Crush",
      term: "Pulverize / Crush",
      phonetic: "/ˈpʌlvəraɪz/ – /krʌʃ/",
      meaning: "To mechanically grind, smash, or crush raw solids into extremely fine dust or powder.",
      definition: "To mechanically grind, smash, or crush raw solids into extremely fine dust or powder.",
      example: "Limestone and clay are first introduced into a crusher to be pulverized into a fine powder.",
      sampleSentence: "Limestone and clay are first introduced into a crusher to be pulverized into a fine powder.",
      collocations: ["pulverized into fine powder", "mechanical crusher", "crushed raw minerals"]
    },
    {
      word: "Rotating Heater / Kiln",
      term: "Rotating Heater / Kiln",
      phonetic: "/rəʊˈteɪtɪŋ ˈhiːtə/ – /kɪln/",
      meaning: "A large inclined revolving cylindrical furnace where chemical thermal reactions occur under high heat.",
      definition: "A large inclined revolving cylindrical furnace where chemical thermal reactions occur under high heat.",
      example: "The blended mixture is fed into an inclined rotating heater where intense heat is applied from the base.",
      sampleSentence: "The blended mixture is fed into an inclined rotating heater where intense heat is applied from the base.",
      collocations: ["inclined rotating heater", "cylindrical kiln", "subjected to high heat"]
    },
    {
      word: "Conveyor Belt",
      term: "Conveyor Belt",
      phonetic: "/kənˈveɪə belt/",
      meaning: "A continuous moving band of fabric or rubber used to transport industrial substances between processing units.",
      definition: "A continuous moving band of fabric or rubber used to transport industrial substances between processing units.",
      example: "After heating, the material travels along a conveyor belt into a grinder.",
      sampleSentence: "After heating, the material travels along a conveyor belt into a grinder.",
      collocations: ["transported via conveyor belt", "transferred along a conveyor belt", "industrial conveyor"]
    },
    {
      word: "Grinder / Mill",
      term: "Grinder / Mill",
      phonetic: "/ˈɡraɪndə/ – /mɪl/",
      meaning: "Heavy industrial machinery that crushes roasted material into fine finished cement.",
      definition: "Heavy industrial machinery that crushes roasted material into fine finished cement.",
      example: "The heated clinker is conveyed to a grinder, where it is milled into fine cement powder.",
      sampleSentence: "The heated clinker is conveyed to a grinder, where it is milled into fine cement powder.",
      collocations: ["milled into fine cement", "industrial grinder", "finely ground"]
    },
    {
      word: "Aggregate",
      term: "Aggregate",
      phonetic: "/ˈæɡrɪɡət/",
      meaning: "Coarse granular materials like gravel (50%) and sand (25%) used in construction mixtures.",
      definition: "Coarse granular materials like gravel (50%) and sand (25%) used in construction mixtures.",
      example: "Gravel and sand serve as the coarse and fine aggregates, comprising three-quarters of the concrete volume.",
      sampleSentence: "Gravel and sand serve as the coarse and fine aggregates, comprising three-quarters of the concrete volume.",
      collocations: ["coarse aggregate", "fine aggregate", "mineral aggregates"]
    },
    {
      word: "Binding Agent",
      term: "Binding Agent",
      phonetic: "/ˈbaɪndɪŋ ˈeɪdʒənt/",
      meaning: "A substance like cement that chemically hardens to hold other aggregate particles firmly together.",
      definition: "A substance like cement that chemically hardens to hold other aggregate particles firmly together.",
      example: "Manufactured cement functions as the primary binding agent, making up 15% of the concrete recipe.",
      sampleSentence: "Manufactured cement functions as the primary binding agent, making up 15% of the concrete recipe.",
      collocations: ["act as a binding agent", "primary binder", "cohesive binding agent"]
    },
    {
      word: "Hydration & Slurry",
      term: "Hydration & Slurry",
      phonetic: "/haɪˈdreɪʃn ænd ˈslʌri/",
      meaning: "The chemical reaction triggered by adding 10% water, creating a workable, fluid wet concrete paste.",
      definition: "The chemical reaction triggered by adding 10% water, creating a workable, fluid wet concrete paste.",
      example: "Water accounts for 10% of the composition, activating hydration to turn dry aggregates into wet concrete.",
      sampleSentence: "Water accounts for 10% of the composition, activating hydration to turn dry aggregates into wet concrete.",
      collocations: ["activate hydration", "concrete slurry", "hydration reaction"]
    },
    {
      word: "Batch Mixing",
      term: "Batch Mixing",
      phonetic: "/bætʃ ˈmɪksɪŋ/",
      meaning: "Combining discrete quantities of different ingredients simultaneously inside a mechanical drum.",
      definition: "Combining discrete quantities of different ingredients simultaneously inside a mechanical drum.",
      example: "Unlike the sequential cement pipeline, concrete production relies on single-stage batch mixing.",
      sampleSentence: "Unlike the sequential cement pipeline, concrete production relies on single-stage batch mixing.",
      collocations: ["single-stage batch mixing", "batch mixer drum", "batch production"]
    },
    {
      word: "Sequential Progression",
      term: "Sequential Progression",
      phonetic: "/sɪˈkwenʃl prəˈɡreʃn/",
      meaning: "An orderly progression through distinct consecutive phases where each step depends on the previous one.",
      definition: "An orderly progression through distinct consecutive phases where each step depends on the previous one.",
      example: "Cement production follows a strict sequential progression from raw limestone to bagged product.",
      sampleSentence: "Cement production follows a strict sequential progression from raw limestone to bagged product.",
      collocations: ["sequential progression", "sequential stages", "step-by-step sequence"]
    },
    {
      word: "Uniform Consistency",
      term: "Uniform Consistency",
      phonetic: "/ˈjuːnɪfɔːm kənˈsɪstənsi/",
      meaning: "An evenly blended physical state with no clumps, air gaps, or unmixed raw dry powder.",
      definition: "An evenly blended physical state with no clumps, air gaps, or unmixed raw dry powder.",
      example: "The rotating mixer agitates all four materials until a uniform consistency is achieved.",
      sampleSentence: "The rotating mixer agitates all four materials until a uniform consistency is achieved.",
      collocations: ["achieve a uniform consistency", "uniform blend", "homogeneous mixture"]
    },
    {
      word: "Simultaneously Introduced",
      term: "Simultaneously Introduced",
      phonetic: "/ˌsɪmlˈteɪniəsli ˌɪntrəˈdjuːst/",
      meaning: "Poured or added together at the exact same moment into a vessel or container.",
      definition: "Poured or added together at the exact same moment into a vessel or container.",
      example: "All four concrete components are simultaneously introduced into the revolving mixer.",
      sampleSentence: "All four concrete components are simultaneously introduced into the revolving mixer.",
      collocations: ["simultaneously introduced", "poured simultaneously", "added concurrently"]
    },
    {
      word: "Packaged / Bagged",
      term: "Packaged / Bagged",
      phonetic: "/ˈpækɪdʒd/ – /bæɡd/",
      meaning: "Sealed into commercial paper sacks for easy transport, wholesale storage, or retail sale.",
      definition: "Sealed into commercial paper sacks for easy transport, wholesale storage, or retail sale.",
      example: "In the final stage, the refined cement is bagged for distribution to construction sites.",
      sampleSentence: "In the final stage, the refined cement is bagged for distribution to construction sites.",
      collocations: ["bagged into sacks", "packaged for distribution", "commercial packaging"]
    }
  ],

  vocabHunt: [
    "pulverize",
    "crush",
    "kiln",
    "conveyor belt",
    "grinder",
    "aggregate",
    "binding agent",
    "hydration",
    "batch mixing",
    "sequential",
    "uniform consistency",
    "simultaneously"
  ],

  bp1: {
    title: "Body Paragraph 1: The Multi-Stage Manufacturing of Cement",
    focus: "5 Sequential Stages: Limestone & clay crushing $\\rightarrow$ mixing $\\rightarrow$ heating in rotating kiln $\\rightarrow$ grinding $\\rightarrow$ packaging",
    points: [
      "Limestone and clay are first introduced into a crusher to be pulverized into a fine powder.",
      "The powder is then transferred to an industrial mixer to achieve a uniform blend.",
      "Next, the mixture enters an inclined rotating cylinder heater where intense heat is applied from the lower end.",
      "After thermal processing, the substance is moved along a conveyor belt to a grinder, milling it into fine cement.",
      "Finally, the completed cement is poured into bags, ready for commercial storage or construction."
    ],
    flow: [
      "1. Raw Materials: Limestone + Clay",
      "2. Crushing: Mechanically pulverized into fine powder",
      "3. Mixing: Blended uniformly in industrial mixer",
      "4. Heating: Passed through rotating heater with direct heat applied",
      "5. Grinding: Conveyed to grinder and milled into cement",
      "6. Packaging: Poured into bags ready for distribution"
    ],
    takeaways: [
      "Cement manufacturing requires linear thermal and mechanical transformation across 5 distinct stages.",
      "The resulting cement is a mandatory prerequisite before concrete can be made."
    ]
  },

  bp2: {
    title: "Body Paragraph 2: Concrete Batch Production & Proportional Synthesis",
    focus: "4 Ingredients (Gravel 50%, Sand 25%, Cement 15%, Water 10%) & Concrete Mixer",
    points: [
      "Gravel (small stones) constitutes half (50%) of the total concrete mixture, forming the primary coarse aggregate.",
      "Sand accounts for a quarter (25%) of the blend as the fine aggregate.",
      "Manufactured cement represents 15% of the composition, serving as the essential binding agent.",
      "Water forms the smallest fraction at 10%, activating the hydration reaction.",
      "All four components are poured simultaneously into a cylindrical concrete mixer, which rotates to yield homogeneous wet concrete."
    ],
    flow: [
      "1. Formulation: 50% Gravel, 25% Sand, 15% Cement, 10% Water",
      "2. Loading: Simultaneous addition into rotating concrete mixer drum",
      "3. Agitation: Mechanical rotation blends aggregates and slurry",
      "4. Output: Usable wet concrete ready for building"
    ],
    takeaways: [
      "Concrete is a single-stage batch mix, in contrast to the five sequential phases of cement production.",
      "Aggregates (gravel + sand) account for 75% of the total, with cement acting only as a 15% binding agent."
    ]
  },

  processingGroups: [
    {
      title: "Group 1: Sequential Process Verbs (Passive Voice)",
      items: [
        "are fed into a mechanical crusher to be pulverized",
        "is blended thoroughly in an industrial mixer",
        "is subjected to intense heat in an inclined rotating cylinder",
        "is transported along a conveyor belt to be milled",
        "is poured into heavy-duty bags for commercial distribution"
      ]
    },
    {
      title: "Group 2: Mathematical Proportion Phrases (Strictly Band 9)",
      items: [
        "constitutes precisely half (50%) of the total mixture",
        "accounts for exactly a quarter (25%) of the overall composition",
        "comprises 15% to function as the essential binding agent",
        "represents the smallest fraction at a modest 10%"
      ]
    },
    {
      title: "Group 3: Industrial & Comparative Connectors",
      items: [
        "regarding the manufacture of cement / turning to concrete production",
        "initially, ... / following this, ... / subsequently, ...",
        "after being subjected to intense heat, ...",
        "by contrast, concrete manufacturing relies on a single-stage batch mixing process"
      ]
    }
  ],

  connectors: [
    {
      phrase: "Initially, ... / To begin with, ...",
      purpose: "Introducing the opening stage of a multi-step manufacturing procedure",
      example: "Initially, raw limestone and clay are fed into a crusher to be pulverized into a fine powder."
    },
    {
      phrase: "Following this, ... / Subsequently, ...",
      purpose: "Signaling progression to the next sequential mechanical phase",
      example: "Following this, the powdered minerals are transferred to an industrial mixer to achieve a uniform blend."
    },
    {
      phrase: "After being heated, ... / Having exited the kiln, ...",
      purpose: "Using participial clauses to link consecutive thermal and milling operations",
      example: "After being heated in the rotating cylinder, the material travels along a conveyor belt into a grinder."
    },
    {
      phrase: "Finally, the resulting [product] is [verb-ed]...",
      purpose: "Marking the culminating output and commercial packaging stage",
      example: "Finally, the finished cement is packed into bags, ready for transport or use in concrete production."
    },
    {
      phrase: "Turning to [second process], ... / In contrast to [first process], ...",
      purpose: "Creating a seamless macro transition between two contrasting diagrams",
      example: "Turning to concrete production, four distinct raw materials are combined inside a rotating mixer."
    },
    {
      phrase: "Constitutes half (50%) of... / Accounts for a quarter (25%)...",
      purpose: "Accurately reporting statistical proportions and aggregate ratios",
      example: "Gravel constitutes half (50%) of the mixture, while sand accounts for a quarter (25%)."
    }
  ],

  modelReport: {
    wordCount: 228,
    paragraphs: [
      {
        id: "intro",
        title: "Introduction",
        text: "The two diagrams illustrate the multi-stage industrial procedure involved in manufacturing cement, followed by how it is subsequently combined with other raw ingredients to produce concrete.",
        wordCount: 28,
        badges: ["Band 9 Paraphrase", "Two Diagrams Identified", "Cement & Concrete Roles"]
      },
      {
        id: "overview",
        title: "Overview",
        text: "Overall, cement production is a multi-step, sequential process requiring specialized equipment, physical crushing, and intense heating, whereas concrete manufacturing is a straightforward, single-stage batch mixing procedure wherein coarse and fine aggregates constitute the vast majority of the mixture, bound together by cement and activated with water.",
        wordCount: 47,
        badges: ["Macro Contrast", "Sequential Thermal Pipeline vs Single Batch Mix", "Aggregates Bulk & Cement Binder"]
      },
      {
        id: "body1",
        title: "Body 1: The 5 Stages of Cement Production",
        text: "Regarding the manufacture of cement, limestone and clay are initially passed through a crusher to be pulverized into a fine powder. This powdered mixture is then fed into an industrial mixer to achieve a uniform blend before entering an elongated, rotating cylinder heater. In this chamber, the substance is subjected to intense heat applied from the lower end as the drum continuously revolves. After being heated, the resulting mixture is transported along a conveyor belt to a grinder, where it is milled into fine cement. Finally, the finished product is poured into heavy-duty bags, ready for commercial distribution or immediate construction use.",
        wordCount: 76,
        badges: ["Limestone & Clay Crusher", "Mixer & Rotating Heater", "Conveyor Belt & Grinder", "Bagging"]
      },
      {
        id: "body2",
        title: "Body 2: Concrete Batch Production & Proportions",
        text: "Turning to concrete production, four distinct raw materials are combined inside a cylindrical concrete mixer in precise proportions. Gravel, consisting of small stones, constitutes half (50%) of the total mixture, followed by sand, which accounts for a quarter (25%). Cement makes up 15% of the composition to bind the components together, while water represents the smallest portion at just 10%. Once all four elements are poured simultaneously into the concrete drum, the machine rotates in a clockwise direction to blend the aggregates and slurry into usable wet concrete.",
        wordCount: 66,
        badges: ["Gravel 50% (Half)", "Sand 25% (Quarter)", "Cement 15% Binder", "Water 10% Hydration", "Rotating Mixer"]
      }
    ]
  }
};
