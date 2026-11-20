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
  ConcreteIngredientItem,
  ProfessionWorkloadStress,
  WheatExportRegion,
  WheatExportYearPoint
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
  ConcreteIngredientItem,
  ProfessionWorkloadStress,
  WheatExportRegion,
  WheatExportYearPoint
};

// ==========================================
// 1. SUGARCANE PROCESS STAGES (STAGES 1 TO 7)
// ==========================================

export const SUGARCANE_PROCESS_STAGES: ProcessStageItem[] = [
  {
    stageNumber: 1,
    id: "stage-1-growing",
    name: "1. Growing (Field Cultivation)",
    equipment: "Agricultural field / Sunlight & soil",
    inputs: "Sugarcane seedlings / crops",
    output: "Mature sugar canes (12–18 months)",
    actionText: "Sugarcanes are planted and cultivated in fields over an extended maturation cycle lasting 12 to 18 months.",
    passiveVerb: "are grown / are cultivated",
    band9Phrase:
      "“Sugarcanes are initially grown in agricultural fields over a maturation cycle spanning 12 to 18 months.”",
    color: "#16a34a"
  },
  {
    stageNumber: 2,
    id: "stage-2-harvesting",
    name: "2. Harvesting (Dual Harvesting Method)",
    equipment: "Mechanised combine harvester OR manual sickle/hand tools",
    inputs: "Mature sugar canes",
    output: "Harvested sugarcane stalks ready for milling",
    actionText: "Mature stalks are harvested either mechanically using heavy combine harvesters or manually by agricultural laborers cutting them with hand blades.",
    passiveVerb: "are harvested (mechanically or manually)",
    band9Phrase:
      "“Once mature, the canes are harvested utilizing one of two methods: either mechanically by combine vehicles or manually by agricultural workers using hand blades.”",
    color: "#059669"
  },
  {
    stageNumber: 3,
    id: "stage-3-crushing",
    name: "3. Crushing (Juice Extraction)",
    equipment: "Mechanical crushing unit with heavy rotating cylindrical rollers",
    inputs: "Harvested sugarcane stalks",
    output: "Raw liquid juice & fibrous cane residue",
    actionText: "The harvested stalks are fed through heavy rotating rollers in a crushing mill, which press out the raw juice.",
    passiveVerb: "are crushed / is extracted",
    band9Phrase:
      "“The harvested stalks are subsequently fed through heavy mechanical rollers to crush the cane and extract raw liquid juice.”",
    color: "#0284c7"
  },
  {
    stageNumber: 4,
    id: "stage-4-purifying",
    name: "4. Purifying Juice (Limestone Filtration)",
    equipment: "Funnel filtration unit with limestone filter medium",
    inputs: "Raw extracted juice",
    output: "Purified / clarified sugar juice (solids removed)",
    actionText: "The raw juice is poured into a funnel equipped with a limestone filter to remove impurities, particulates, and solid debris.",
    passiveVerb: "is purified / is poured through",
    band9Phrase:
      "“Following extraction, the raw juice is poured through a limestone filter in order to purify the liquid and eliminate residual particulates.”",
    color: "#d97706"
  },
  {
    stageNumber: 5,
    id: "stage-5-evaporator",
    name: "5. Evaporator (Thermal Concentration into Syrup)",
    equipment: "Evaporator heating chamber / open fire heat source",
    inputs: "Purified liquid juice",
    output: "Thick, concentrated sugar syrup",
    actionText: "The clarified juice is transferred into an evaporator vat and heated over an open heat source so that moisture evaporates, reducing the liquid to thick syrup.",
    passiveVerb: "is heated / is condensed / becomes syrup",
    band9Phrase:
      "“The clarified liquid is then transferred to an evaporator vat where it is subjected to continuous heat, allowing water to boil off and turning the juice into a thick syrup.”",
    color: "#ea580c"
  },
  {
    stageNumber: 6,
    id: "stage-6-centrifuge",
    name: "6. Centrifuge (Rotational Crystal Separation)",
    equipment: "High-speed centrifuge machine / spinning drum",
    inputs: "Thick concentrated syrup",
    output: "Solid sugar crystals separated from liquid syrup",
    actionText: "The concentrated syrup is placed into a high-speed centrifuge, where rapid rotational force separates the solid sugar crystals from the remaining liquid syrup.",
    passiveVerb: "is spun / are separated",
    band9Phrase:
      "“Next, this thick syrup is introduced into a high-speed centrifuge, which spins rapidly to separate solid sugar crystals from the remaining syrup.”",
    color: "#7c3aed"
  },
  {
    stageNumber: 7,
    id: "stage-7-drying-cooling",
    name: "7. Drying and Cooling (Refined Sugar)",
    equipment: "Cylindrical drying and cooling drum / container",
    inputs: "Moist sugar crystals",
    output: "Dry, refined sugar ready for consumption & distribution",
    actionText: "The separated crystals are transferred into a large perforated cylinder for drying and cooling, resulting in the final refined granulated sugar product.",
    passiveVerb: "are dried and cooled / is produced",
    band9Phrase:
      "“In the culminating stage, the sugar crystals are fed into a cylindrical container for drying and cooling, producing refined sugar ready for packaging and commercial distribution.”",
    color: "#0f172a"
  }
];

// Backward compatibility shims
export const WHEAT_EXPORTS_DATA: WheatExportRegion[] = [];
export const PROFESSIONS_DATA: ProfessionWorkloadStress[] = [];
export const SPENDING_CATEGORIES: SpendingCategoryItem[] = [];
export const SPENDING_YEARS: SchoolSpendingYearData[] = [];
export const SPENDING_HOTSPOTS: SpendingHotspot[] = [];
export const CEMENT_PROCESS_STAGES: ProcessStageItem[] = SUGARCANE_PROCESS_STAGES;
export const CONCRETE_INGREDIENTS: ConcreteIngredientItem[] = [];

// ==========================================
// 2. MASTER TASK 1 DATA OBJECT (PROCESS DIAGRAM)
// ==========================================

export const TASK1_DATA: Task1Data = {
  id: "process-sugarcane-sugar-production",
  taskType: "IELTS Academic Writing Task 1 • Manufacturing Process Diagram",
  title: "The Process of Making Sugar from Sugarcane",
  companyName: "Cambridge IELTS Academic Writing Task 1",
  unit: "7 Linear Process Stages",
  questionText:
    "The diagram below shows the process of making sugar from sugarcane.\n\nSummarize the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
  imageFileName: "materials/sugarcane_sugar_production.jpg",
  hdImageFileName: "materials/sugarcane_sugar_production.jpg",
  scanImageFileName: "materials/sugarcane_sugar_production.jpg",
  audioUrl: "materials/How_Instant_Cup_Noodles_Are_Made.m4a",
  audioClueText:
    "The manufacturing process consists of seven sequential stages, beginning with the agricultural cultivation and dual harvesting of sugarcane and concluding with the drying and cooling of refined sugar crystals. Following a 12 to 18-month growing cycle, sugar canes are reaped either mechanically using combine harvesters or manually by workers. The stalks are crushed through heavy rollers to extract juice, which is purified through a limestone filter. Next, the liquid is heated in an evaporator until it concentrates into syrup, after which a high-speed centrifuge separates solid crystals from the remaining liquid before final drying and cooling.",
  timingSeconds: 1200,

  sampleIntro:
    "The process diagram delineates the seven sequential stages involved in the manufacture of refined sugar from raw sugarcane, spanning from initial field cultivation to final drying and cooling.",

  sampleOverview:
    "Overall, the manufacturing process is a linear sequence comprising seven distinct stages, beginning with agricultural cultivation and harvesting and culminating in the industrial refinement and drying of pure sugar crystals. Notably, while the initial stages involve agricultural harvesting (performed either mechanically or manually) and mechanical juice extraction, the subsequent phases rely on chemical purification, thermal evaporation, and centrifugal separation.",

  processStages: SUGARCANE_PROCESS_STAGES,
  wheatExportData: [],
  professionData: [],
  formats: [],
  countries: [],

  diagramData: {
    hotspots: SUGARCANE_PROCESS_STAGES.map((s) => ({
      id: s.id,
      title: s.name,
      zone: `Stage ${s.stageNumber} • ${s.equipment}`,
      normalState: `Inputs: ${s.inputs}`,
      elNinoState: `Output: ${s.output}`,
      contrastKey: `Passive Action: ${s.actionText}`,
      band9Sentence: s.band9Phrase
    })),
    comparisonsSummary: {
      harvest_methods: "Crops can be harvested either mechanically with a combine harvester or manually by hand sickle.",
      duration_stage1: "The growing phase requires an extended maturation timeframe of 12 to 18 months.",
      purification_filter: "A specialized limestone filter is utilized to clarify raw juice before thermal concentration.",
      centrifugal_separation: "High-speed centrifugal spinning physically separates solid sugar crystals from residual syrup."
    }
  },
  graphData: {
    hotspots: SUGARCANE_PROCESS_STAGES.map((s) => ({
      id: s.id,
      title: s.name,
      zone: `Stage ${s.stageNumber}`,
      normalState: s.inputs,
      elNinoState: s.output,
      contrastKey: s.actionText,
      band9Sentence: s.band9Phrase
    })),
    comparisonsSummary: {
      overview_structure: "Phase 1 covers agricultural harvesting and juice extraction (stages 1–3); Phase 2 covers chemical purification, evaporation, centrifuge separation, and drying (stages 4–7)."
    }
  },

  vocabList: [
    {
      word: "Linear Sequence",
      term: "Linear Sequence",
      phonetic: "/ˈlɪniər ˈsiːkwəns/",
      meaning: "A straightforward series of ordered stages with a clear beginning, middle, and end, with no repeating loops.",
      definition: "A straightforward series of ordered stages with a clear beginning, middle, and end, with no repeating loops.",
      example: "The diagram presents a linear sequence comprising seven distinct manufacturing stages.",
      sampleSentence: "The diagram presents a linear sequence comprising seven distinct manufacturing stages.",
      collocations: ["linear sequence", "sequential procedure", "multi-stage linear process"]
    },
    {
      word: "Maturation Cycle",
      term: "Maturation Cycle",
      phonetic: "/ˌmætʃʊˈreɪʃn ˈsaɪkl/",
      meaning: "The period of time required for crops or plants to develop and reach full harvestable growth.",
      definition: "The period of time required for crops or plants to develop and reach full harvestable growth.",
      example: "Sugar canes undergo an extended maturation cycle spanning 12 to 18 months.",
      sampleSentence: "Sugar canes undergo an extended maturation cycle spanning 12 to 18 months.",
      collocations: ["maturation cycle", "extended maturation period", "grow to maturity"]
    },
    {
      word: "Mechanised Harvester",
      term: "Mechanised Harvester",
      phonetic: "/ˈmekənaɪzd ˈhɑːvɪstər/",
      meaning: "Heavy motorized agricultural machinery (such as a combine) used to reap crops efficiently.",
      definition: "Heavy motorized agricultural machinery (such as a combine) used to reap crops efficiently.",
      example: "In the second stage, mature canes are reaped mechanically using a combine harvester.",
      sampleSentence: "In the second stage, mature canes are reaped mechanically using a combine harvester.",
      collocations: ["harvested mechanically", "combine harvester", "mechanised agricultural vehicle"]
    },
    {
      word: "Manual Reaping",
      term: "Manual Reaping",
      phonetic: "/ˈmænjuəl ˈriːpɪŋ/",
      meaning: "The cutting and gathering of crops by hand using handheld tools such as sickles or machetes.",
      definition: "The cutting and gathering of crops by hand using handheld tools such as sickles or machetes.",
      example: "Alternatively, manual reaping is carried out by farm workers cutting the stalks with hand blades.",
      sampleSentence: "Alternatively, manual reaping is carried out by farm workers cutting the stalks with hand blades.",
      collocations: ["reaped manually", "manual harvesting", "cut by hand"]
    },
    {
      word: "Cylindrical Rollers",
      term: "Cylindrical Rollers",
      phonetic: "/sɪˈlɪndrɪkl ˈrəʊlərz/",
      meaning: "Heavy rotating metal cylinders that press and crush material to extract liquids.",
      definition: "Heavy rotating metal cylinders that press and crush material to extract liquids.",
      example: "The stalks are compressed between heavy cylindrical rollers to press out the juice.",
      sampleSentence: "The stalks are compressed between heavy cylindrical rollers to press out the juice.",
      collocations: ["cylindrical rollers", "heavy rotating rollers", "mechanical crushing unit"]
    },
    {
      word: "Limestone Filtration",
      term: "Limestone Filtration",
      phonetic: "/ˈlaɪmstəʊn fɪlˈtreɪʃn/",
      meaning: "The process of passing raw liquid through calcium carbonate limestone medium to remove impurities.",
      definition: "The process of passing raw liquid through calcium carbonate limestone medium to remove impurities.",
      example: "Limestone filtration purifies the extracted juice by removing sediment and neutralizing particulates.",
      sampleSentence: "Limestone filtration purifies the extracted juice by removing sediment and neutralizing particulates.",
      collocations: ["limestone filter", "purified through limestone", "filtration funnel"]
    },
    {
      word: "Thermal Evaporation",
      term: "Thermal Evaporation",
      phonetic: "/ˈθɜːml ɪˌvæpəˈreɪʃn/",
      meaning: "The application of heat to cause liquid moisture to boil off, thickening the remaining solution.",
      definition: "The application of heat to cause liquid moisture to boil off, thickening the remaining solution.",
      example: "Thermal evaporation transforms the purified juice into thick, concentrated syrup.",
      sampleSentence: "Thermal evaporation transforms the purified juice into thick, concentrated syrup.",
      collocations: ["heated in an evaporator", "boil off moisture", "thermal evaporation"]
    },
    {
      word: "Concentrated Syrup",
      term: "Concentrated Syrup",
      phonetic: "/ˈkɒnsntreɪtɪd ˈsɪrəp/",
      meaning: "A dense, viscous liquid remaining after water content has been boiled away.",
      definition: "A dense, viscous liquid remaining after water content has been boiled away.",
      example: "Once the water evaporates, the liquid condenses into a thick, concentrated syrup.",
      sampleSentence: "Once the water evaporates, the liquid condenses into a thick, concentrated syrup.",
      collocations: ["thick concentrated syrup", "viscous liquid", "reduce to syrup"]
    },
    {
      word: "Centrifugal Separation",
      term: "Centrifugal Separation",
      phonetic: "/ˌsentrɪˈfjuːɡl ˌsepəˈreɪʃn/",
      meaning: "The physical separation of solid particles from liquid through high-speed rotational spinning force.",
      definition: "The physical separation of solid particles from liquid through high-speed rotational spinning force.",
      example: "Centrifugal separation drives solid sugar crystals away from the remaining liquid syrup.",
      sampleSentence: "Centrifugal separation drives solid sugar crystals away from the remaining liquid syrup.",
      collocations: ["centrifugal force", "spun in a centrifuge", "separate crystals from syrup"]
    },
    {
      word: "Drying and Cooling Drum",
      term: "Drying and Cooling Drum",
      phonetic: "/ˈdraɪɪŋ ənd ˈkuːlɪŋ drʌm/",
      meaning: "A specialized cylindrical chamber where damp crystals are ventilated and cooled to stabilize them.",
      definition: "A specialized cylindrical chamber where damp crystals are ventilated and cooled to stabilize them.",
      example: "The moist crystals are transferred into a drying and cooling drum to remove residual humidity.",
      sampleSentence: "The moist crystals are transferred into a drying and cooling drum to remove residual humidity.",
      collocations: ["drying and cooling cylinder", "rotary drying drum", "cooling container"]
    },
    {
      word: "Culminating Phase",
      term: "Culminating Phase",
      phonetic: "/ˈkʌlmɪneɪtɪŋ feɪz/",
      meaning: "The final concluding step in a multi-stage production procedure.",
      definition: "The final concluding step in a multi-stage production procedure.",
      example: "In the culminating phase, dry refined sugar crystals are produced for consumer markets.",
      sampleSentence: "In the culminating phase, dry refined sugar crystals are produced for consumer markets.",
      collocations: ["culminating stage", "final phase of production", "culminate in"]
    },
    {
      word: "Refined Sugar",
      term: "Refined Sugar",
      phonetic: "/rɪˈfaɪnd ˈʃʊɡər/",
      meaning: "The purified, crystallized final commercial food product ready for distribution and consumption.",
      definition: "The purified, crystallized final commercial food product ready for distribution and consumption.",
      example: "The end result of the seven-step operation is dry refined sugar ready for commercial distribution.",
      sampleSentence: "The end result of the seven-step operation is dry refined sugar ready for commercial distribution.",
      collocations: ["dry refined sugar", "crystalline sugar product", "refined granulated sugar"]
    }
  ],

  vocabHunt: [
    "linear sequence",
    "maturation cycle",
    "mechanised harvester",
    "manual reaping",
    "cylindrical rollers",
    "limestone filtration",
    "thermal evaporation",
    "concentrated syrup",
    "centrifugal separation",
    "drying and cooling drum",
    "culminating phase",
    "refined sugar"
  ],

  bp1: {
    title: "Body 1: Agricultural Cultivation, Dual Harvesting & Crushing (Stages 1–3)",
    focus: "Detail the 12–18 month growing cycle, the dual mechanised vs manual harvest, and roller crushing to extract juice.",
    points: [
      "Sugarcanes are planted and grown in agricultural fields over a period of 12 to 18 months.",
      "Once fully mature, the canes are harvested using two distinct methods: either mechanically by combine harvesters or manually by farm workers cutting stalks with hand sickles.",
      "Following the harvest, the cut stalks are transported to a crushing unit.",
      "The stalks pass through heavy rotating rollers, which thoroughly compress the cane to press out raw liquid juice."
    ]
  },

  bp2: {
    title: "Body 2: Limestone Filtration, Evaporation, Centrifuge & Drying (Stages 4–7)",
    focus: "Explain limestone purification, thermal concentration into syrup, centrifugal separation, and drum drying into refined sugar.",
    points: [
      "The raw extracted juice is poured into a funnel fitted with a limestone filter to remove solid debris and impurities.",
      "Next, the purified liquid is transferred to an evaporator chamber and heated over an open flame until water evaporates and the juice turns into thick syrup.",
      "This concentrated syrup is then fed into a high-speed centrifuge, which spins rapidly to separate solid sugar crystals from the residual syrup.",
      "Finally, in the culminating stage, the sugar crystals are placed into a cylindrical container for drying and cooling, producing refined dry sugar."
    ]
  },

  processingGroups: [
    {
      title: "1. Agricultural Cultivation & Harvesting (Stages 1–2)",
      items: [
        "Stage 1: Canes grow in fields over 12–18 months",
        "Stage 2 Method A: Mechanised harvesting via combine agricultural vehicle",
        "Stage 2 Method B: Manual harvesting by farm laborers cutting stalks by hand",
        "Passive formula: 'are grown', 'are harvested mechanically or manually'"
      ]
    },
    {
      title: "2. Mechanical Crushing & Limestone Filtration (Stages 3–4)",
      items: [
        "Stage 3: Stalks are fed through heavy rotating cylindrical rollers",
        "Raw liquid juice is squeezed out from the crushed plant fibers",
        "Stage 4: Raw juice is poured through a limestone funnel filter",
        "Solid particulates and impurities are filtered out to clarify the liquid"
      ]
    },
    {
      title: "3. Thermal Evaporation & Centrifugal Separation (Stages 5–6)",
      items: [
        "Stage 5: Clarified juice is heated over a flame in an evaporator vat",
        "Moisture boils off until the liquid condenses into thick concentrated syrup",
        "Stage 6: Heated syrup is introduced into a high-speed centrifuge",
        "Rotational centrifugal force separates solid sugar crystals from liquid syrup"
      ]
    },
    {
      title: "4. Final Drying, Cooling & Commercial Product (Stage 7)",
      items: [
        "Stage 7: Damp sugar crystals enter a drying and cooling cylinder drum",
        "Airflow and temperature reduction remove all residual moisture",
        "Final Product: Refined dry sugar ready for consumption and packaging",
        "Culminating passive: 'are dried and cooled', 'is produced'"
      ]
    }
  ],

  connectors: [
    {
      phrase: "The initial stage begins with...",
      purpose: "Process Opener & Cultivation Marker",
      example: "The initial stage begins with the cultivation of sugarcanes in fields over an extended timeframe of 12 to 18 months."
    },
    {
      phrase: "Once the crops reach maturity, they are harvested either... or...",
      purpose: "Dual Alternative Harvesting Marker",
      example: "Once the crops reach maturity, they are harvested either mechanically using combine harvesters or manually by hand."
    },
    {
      phrase: "Following the harvest, the raw stalks are fed into...",
      purpose: "Extraction Phase Transition",
      example: "Following the harvest, the raw stalks are fed into heavy mechanical rollers to extract liquid juice."
    },
    {
      phrase: "In the subsequent phase, the extracted juice is poured through...",
      purpose: "Chemical Filtration Transition",
      example: "In the subsequent phase, the extracted juice is poured through a limestone filter to eliminate impurities."
    },
    {
      phrase: "Thereafter, the purified liquid is transferred to an evaporator where...",
      purpose: "Thermal Concentration Marker",
      example: "Thereafter, the purified liquid is transferred to an evaporator where it is heated until it condenses into thick syrup."
    },
    {
      phrase: "Next, this syrup is introduced into a high-speed centrifuge, which...",
      purpose: "Rotational Separation Connector",
      example: "Next, this syrup is introduced into a high-speed centrifuge, which spins rapidly to separate sugar crystals from the remaining liquid."
    },
    {
      phrase: "Finally, in the culminating stage, the crystals are...",
      purpose: "Culminating Final Product Marker",
      example: "Finally, in the culminating stage, the crystals are placed into a cylindrical container for drying and cooling, producing refined sugar."
    }
  ],

  modelReport: {
    wordCount: 228,
    paragraphs: [
      {
        id: "intro",
        title: "Introduction: Diagram Scope, Subject & Linear Stages",
        text: "The process diagram delineates the seven sequential stages involved in the manufacture of refined sugar from raw sugarcane, spanning from initial field cultivation to final drying and cooling.",
        wordCount: 26,
        badges: ["Paraphrase", "7 Stages", "Sugarcane to Sugar", "Cultivation to Drying"]
      },
      {
        id: "overview",
        title: "Macro Overview: 2-Sentence Qualitative Synthesis (Stages, Start/End & Dual Bifurcation)",
        text: "Overall, the manufacturing process is a linear sequence comprising seven distinct stages, beginning with the agricultural cultivation and harvesting of sugarcane and culminating in the industrial drying and cooling of pure sugar crystals. Notably, while the opening stages involve agricultural harvesting—conducted either mechanically or manually—and mechanical juice extraction, the remaining phases rely on chemical purification, thermal evaporation, and centrifugal separation.",
        wordCount: 65,
        badges: ["Linear Sequence", "7 Stages", "Start to End", "Agricultural vs Chemical Split", "Dual Harvest Highlight"]
      },
      {
        id: "body1",
        title: "Body Paragraph 1: Agricultural Cultivation, Dual Harvesting & Crushing (Stages 1–3)",
        text: "To begin with, sugarcanes are grown in agricultural fields over a maturation period lasting between 12 and 18 months. Once fully grown, the canes are harvested using one of two methods: either mechanically utilizing combine harvesters or manually by agricultural laborers cutting the stalks with hand blades. Following the harvest, the raw stalks are fed through heavy rotating rollers in a crushing mill, which compress the plant material to extract raw liquid juice.",
        wordCount: 71,
        badges: ["Stage 1: 12-18 Months", "Stage 2: Machine vs Hand Reaping", "Stage 3: Rollers & Juice Extraction"]
      },
      {
        id: "body2",
        title: "Body Paragraph 2: Limestone Filtration, Evaporation, Centrifuge & Drying (Stages 4–7)",
        text: "In the subsequent phase, the extracted juice is poured through a limestone filter in order to purify it and eliminate unwanted particulates. Thereafter, the clarified liquid is transferred to an evaporator vat where it is heated over an open heat source; during this boiling phase, water evaporates, transforming the juice into a thick syrup. Next, this syrup is introduced into a high-speed centrifuge, which spins rapidly to separate solid sugar crystals from the remaining liquid. Finally, in the culminating stage, the damp crystals are fed into a cylindrical container for drying and cooling, yielding finished refined sugar ready for commercial distribution.",
        wordCount: 96,
        badges: ["Stage 4: Limestone Filter", "Stage 5: Evaporator Flame & Syrup", "Stage 6: Centrifuge Spin", "Stage 7: Drying Drum & Final Sugar"]
      }
    ]
  }
};
