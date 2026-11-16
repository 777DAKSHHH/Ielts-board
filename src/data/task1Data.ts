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
// 1. WHEAT EXPORTS DATA (1985–1990)
// ==========================================

export const WHEAT_EXPORTS_DATA: WheatExportRegion[] = [
  {
    id: "canada",
    name: "Canada",
    markerType: "circle",
    color: "#0f172a",
    dataPoints: [
      { year: 1985, value: 19, annotation: "Starting baseline at 19 million tonnes (initial #1)" },
      { year: 1986, value: 17, annotation: "Modest dip to 17m tonnes" },
      { year: 1987, value: 21, annotation: "Strong surge to 21m tonnes" },
      { year: 1988, value: 25, annotation: "Global peak of entire graph at 25m tonnes" },
      { year: 1989, value: 14, annotation: "Precipitous slump of 11m tonnes to 14m tonnes" },
      { year: 1990, value: 19, annotation: "Rebounded to exact initial baseline at 19m tonnes" }
    ],
    startValue: 19,
    endValue: 19,
    peakValue: 25,
    peakYear: 1988,
    troughValue: 14,
    troughYear: 1989,
    netChange: 0,
    trendType: "erratic_fluctuation",
    trendSummary: "Marked by extreme volatility; reached the overall apex of 25m tonnes in 1988 before a steep drop and subsequent rebound to finish back at 19m tonnes.",
    band9Sentence:
      "“Canadian wheat exports exhibited marked volatility, surging to an overall peak of 25 million tonnes in 1988 before plunging sharply and eventually returning to their starting level of 19 million tonnes.”",
    examinerNotes: "Essential features: overall apex in 1988 (25m), dramatic 1989 slump (-11m), and zero net change (19 to 19)."
  },
  {
    id: "european-community",
    name: "European Community",
    markerType: "triangle",
    color: "#0284c7",
    dataPoints: [
      { year: 1985, value: 17, annotation: "Commenced in second place at 17 million tonnes" },
      { year: 1986, value: 14, annotation: "Period trough at 14m tonnes" },
      { year: 1987, value: 15, annotation: "Slight recovery to 15m tonnes" },
      { year: 1988, value: 15, annotation: "Plateaued steadily at 15m tonnes" },
      { year: 1989, value: 19, annotation: "Steep upward leap to 19m tonnes" },
      { year: 1990, value: 21, annotation: "Apex at 21m tonnes, securing #1 rank" }
    ],
    startValue: 17,
    endValue: 21,
    peakValue: 21,
    peakYear: 1990,
    troughValue: 14,
    troughYear: 1986,
    netChange: 4,
    trendType: "sustained_growth",
    trendSummary: "Despite an initial dip in 1986, it underwent sustained growth across the second half of the period, climbing to 21m tonnes to finish as the dominant exporter.",
    band9Sentence:
      "“Despite an initial dip to 14 million tonnes in 1986, the European Community experienced sustained growth over the subsequent four years, eventually overtaking both competitors to finish as the leading exporter at 21 million tonnes.”",
    examinerNotes: "Essential features: 1986 trough (14m), 1987-88 plateau (15m), and late surge to finish as market leader (21m)."
  },
  {
    id: "australia",
    name: "Australia",
    markerType: "square",
    color: "#64748b",
    dataPoints: [
      { year: 1985, value: 15, annotation: "Commenced at 15 million tonnes" },
      { year: 1986, value: 16, annotation: "Brief peak at 16m tonnes" },
      { year: 1987, value: 14, annotation: "Began downward trajectory to 14m tonnes" },
      { year: 1988, value: 12, annotation: "Continued drop to 12m tonnes" },
      { year: 1989, value: 11, annotation: "Fell to period low of 11m tonnes" },
      { year: 1990, value: 11, annotation: "Plateaued flat at 11m tonnes (final #3)" }
    ],
    startValue: 15,
    endValue: 11,
    peakValue: 16,
    peakYear: 1986,
    troughValue: 11,
    troughYear: 1989,
    netChange: -4,
    trendType: "continuous_decline",
    trendSummary: "Followed a steady downward trajectory from 1986 onwards, dropping from 16 to 11m tonnes and remaining flat to finish in last place.",
    band9Sentence:
      "“Australia followed a consistent downward trajectory after a modest rise in 1986, steadily diminishing to 11 million tonnes by 1989 and remaining static through 1990 to finish in the lowest position.”",
    examinerNotes: "Essential features: peak at 1986 (16m), steady 4-year decline, 1989-1990 plateau (11m), and lowest final rank."
  }
];

// Backward compatibility shims
export const PROFESSIONS_DATA: ProfessionWorkloadStress[] = [];
export const SPENDING_CATEGORIES: SpendingCategoryItem[] = [];
export const SPENDING_YEARS: SchoolSpendingYearData[] = [];
export const SPENDING_HOTSPOTS: SpendingHotspot[] = [];
export const CEMENT_PROCESS_STAGES: ProcessStageItem[] = [];
export const CONCRETE_INGREDIENTS: ConcreteIngredientItem[] = [];

// ==========================================
// 2. MASTER TASK 1 DATA OBJECT (LINE GRAPH)
// ==========================================

export const TASK1_DATA: Task1Data = {
  id: "wheat-exports-1985-1990-three-areas",
  taskType: "IELTS Academic Writing Task 1 • Multi-Line Graph Analysis",
  title: "Wheat Exports 1985–1990 (in millions of tonnes)",
  companyName: "Cambridge IELTS Academic Writing Task 1",
  unit: "Millions of tonnes",
  questionText:
    "The diagram below shows the differences in wheat exports in three different areas.\n\nSummarize the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
  imageFileName: "materials/wheat_exports_1985_1990.jpg",
  hdImageFileName: "materials/wheat_exports_1985_1990.jpg",
  scanImageFileName: "materials/wheat_exports_1985_1990.jpg",
  audioUrl: "materials/Taxation_and_Public_Services_Briefing.m4a",
  audioClueText:
    "The line graph tracks wheat export volumes across Australia, Canada, and the European Community between 1985 and 1990. Canada began as the leader at 19 million tonnes, hit the overall peak of 25 million in 1988, dropped to 14 million in 1989, and finished at 19 million. The European Community rose from 17 million to become the top exporter at 21 million tonnes, while Australia declined from 15 million to finish lowest at 11 million tonnes.",
  timingSeconds: 1200,

  sampleIntro:
    "The line graph illustrates the volume of wheat exported by three different areas—Australia, Canada, and the European Community—between 1985 and 1990, measured in millions of tonnes.",

  sampleOverview:
    "Overall, the European Community witnessed sustained upward growth over the period to become the dominant wheat exporter by 1990, whereas Australia underwent a steady downward trajectory to finish in the lowest position. In contrast, Canada exhibited marked volatility throughout the six-year span, registering both the overall peak and a dramatic plunge before returning to its starting level.",

  wheatExportData: WHEAT_EXPORTS_DATA,
  professionData: PROFESSIONS_DATA,
  formats: [],
  countries: [],

  diagramData: {
    hotspots: WHEAT_EXPORTS_DATA.map((r) => ({
      id: r.id,
      title: r.name,
      zone: `${r.startValue}m → ${r.endValue}m tonnes (${r.netChange >= 0 ? `+${r.netChange}` : r.netChange}m)`,
      normalState: `Peak: ${r.peakValue}m tonnes (${r.peakYear})`,
      elNinoState: `Trough: ${r.troughValue}m tonnes (${r.troughYear})`,
      contrastKey: r.trendSummary,
      band9Sentence: r.band9Sentence
    })),
    comparisonsSummary: {
      market_leader_1990: "The European Community finished as the leading exporter at 21 million tonnes.",
      global_peak_1988: "Canada registered the single highest export figure across all regions at 25 million tonnes in 1988.",
      australia_decline: "Australia steadily declined from 16 million tonnes in 1986 to finish lowest at 11 million tonnes.",
      canada_zero_net: "Canada ended at the exact same level as it began (19 million tonnes) despite severe fluctuations."
    }
  },
  graphData: {
    hotspots: WHEAT_EXPORTS_DATA.map((r) => ({
      id: r.id,
      title: r.name,
      zone: `${r.startValue}m → ${r.endValue}m tonnes`,
      normalState: `Start (1985): ${r.startValue}m tonnes`,
      elNinoState: `End (1990): ${r.endValue}m tonnes`,
      contrastKey: r.trendSummary,
      band9Sentence: r.band9Sentence
    })),
    comparisonsSummary: {
      overall_trends: "European Community expanded, Australia contracted, and Canada experienced erratic oscillations with zero net change."
    }
  },

  vocabList: [
    {
      word: "Apex / Pinnacle",
      term: "Apex / Pinnacle",
      phonetic: "/ˈeɪpeks / ˈpɪnəkl/",
      meaning: "The absolute highest point or peak achieved in a data trajectory.",
      definition: "The absolute highest point or peak achieved in a data trajectory.",
      example: "Canadian wheat exports reached the apex of the entire graph at 25 million tonnes in 1988.",
      sampleSentence: "Canadian wheat exports reached the apex of the entire graph at 25 million tonnes in 1988.",
      collocations: ["reach an apex of", "hit the pinnacle", "overall apex of the graph"]
    },
    {
      word: "Upward Trajectory",
      term: "Upward Trajectory",
      phonetic: "/ˈʌpwəd trəˈdʒektəri/",
      meaning: "A sustained path or trend of growth and expansion over time.",
      definition: "A sustained path or trend of growth and expansion over time.",
      example: "The European Community followed an upward trajectory over the second half of the decade.",
      sampleSentence: "The European Community followed an upward trajectory over the second half of the decade.",
      collocations: ["witness an upward trajectory", "sustained upward trajectory", "upward momentum"]
    },
    {
      word: "Downward Trajectory",
      term: "Downward Trajectory",
      phonetic: "/ˈdaʊnwəd trəˈdʒektəri/",
      meaning: "A continuous path of decline, reduction, or diminution over successive intervals.",
      definition: "A continuous path of decline, reduction, or diminution over successive intervals.",
      example: "Australia underwent a steady downward trajectory from 1986 through 1989.",
      sampleSentence: "Australia underwent a steady downward trajectory from 1986 through 1989.",
      collocations: ["follow a downward trajectory", "undergo a downward trajectory", "continuous decline"]
    },
    {
      word: "Marked Volatility",
      term: "Marked Volatility",
      phonetic: "/mɑːkt ˌvɒləˈtɪləti/",
      meaning: "Sharp, noticeable, and unpredictable fluctuations back and forth.",
      definition: "Sharp, noticeable, and unpredictable fluctuations back and forth.",
      example: "Canada exhibited marked volatility throughout the six-year period.",
      sampleSentence: "Canada exhibited marked volatility throughout the six-year period.",
      collocations: ["exhibit marked volatility", "volatile fluctuations", "erratic pattern"]
    },
    {
      word: "Precipitous Plunge",
      term: "Precipitous Plunge",
      phonetic: "/prɪˈsɪpɪtəs plʌndʒ/",
      meaning: "An extremely steep, sudden, and dramatic downward drop.",
      definition: "An extremely steep, sudden, and dramatic downward drop.",
      example: "A precipitous plunge of 11 million tonnes occurred in Canadian wheat exports between 1988 and 1989.",
      sampleSentence: "A precipitous plunge of 11 million tonnes occurred in Canadian wheat exports between 1988 and 1989.",
      collocations: ["experience a precipitous plunge", "plunge sharply to", "dramatic slump"]
    },
    {
      word: "Plateau",
      term: "Plateau",
      phonetic: "/ˈplætəʊ/",
      meaning: "To reach a stable level with no significant increase or decrease.",
      definition: "To reach a stable level with no significant increase or decrease.",
      example: "Between 1987 and 1988, exports from the European Community plateaued at 15 million tonnes.",
      sampleSentence: "Between 1987 and 1988, exports from the European Community plateaued at 15 million tonnes.",
      collocations: ["plateau at 15 million", "level off", "remain static at"]
    },
    {
      word: "Rebound",
      term: "Rebound",
      phonetic: "/rɪˈbaʊnd/",
      meaning: "To recover or bounce back after an abrupt drop or recession.",
      definition: "To recover or bounce back after an abrupt drop or recession.",
      example: "Canadian shipments rebounded from 14 million to 19 million tonnes in the final year.",
      sampleSentence: "Canadian shipments rebounded from 14 million to 19 million tonnes in the final year.",
      collocations: ["rebound back to", "experience a sharp rebound", "rebound to initial levels"]
    },
    {
      word: "Overtake / Surpass",
      term: "Overtake / Surpass",
      phonetic: "/ˌəʊvəˈteɪk / səˈpɑːs/",
      meaning: "To exceed or pull ahead of another competing figure in quantity or rank.",
      definition: "To exceed or pull ahead of another competing figure in quantity or rank.",
      example: "The European Community overtook Canada in 1989 and solidified its lead in 1990.",
      sampleSentence: "The European Community overtook Canada in 1989 and solidified its lead in 1990.",
      collocations: ["overtake both competitors", "surpass the initial leader", "eclipse the competition"]
    },
    {
      word: "Starting Baseline",
      term: "Starting Baseline",
      phonetic: "/ˈstɑːtɪŋ ˈbeɪslaɪn/",
      meaning: "The initial starting measurement at the very beginning of the recorded timeline.",
      definition: "The initial starting measurement at the very beginning of the recorded timeline.",
      example: "Canada returned to its starting baseline of 19 million tonnes by the end of 1990.",
      sampleSentence: "Canada returned to its starting baseline of 19 million tonnes by the end of 1990.",
      collocations: ["return to starting baseline", "initial baseline figure", "starting point"]
    },
    {
      word: "Dominant Exporter",
      term: "Dominant Exporter",
      phonetic: "/ˈdɒmɪnənt ɪkˈspɔːtər/",
      meaning: "The leading region or entity exporting the highest volume among all surveyed areas.",
      definition: "The leading region or entity exporting the highest volume among all surveyed areas.",
      example: "By 1990, the European Community had emerged as the dominant exporter.",
      sampleSentence: "By 1990, the European Community had emerged as the dominant exporter.",
      collocations: ["emerge as dominant exporter", "dominant market leader", "top-ranked exporter"]
    },
    {
      word: "Steady Diminution",
      term: "Steady Diminution",
      phonetic: "/ˈstedi ˌdɪmɪˈnjuːʃn/",
      meaning: "A regular, uninterrupted gradual reduction in volume or rate.",
      definition: "A regular, uninterrupted gradual reduction in volume or rate.",
      example: "Australian wheat exports witnessed a steady diminution from 16 to 11 million tonnes.",
      sampleSentence: "Australian wheat exports witnessed a steady diminution from 16 to 11 million tonnes.",
      collocations: ["steady diminution in exports", "gradual diminution", "continuous reduction"]
    },
    {
      word: "Period Trough",
      term: "Period Trough",
      phonetic: "/ˈpɪəriəd trɒf/",
      meaning: "The absolute lowest recorded data point for a given line across the entire timeframe.",
      definition: "The absolute lowest recorded data point for a given line across the entire timeframe.",
      example: "The European Community dipped to a period trough of 14 million tonnes in 1986.",
      sampleSentence: "The European Community dipped to a period trough of 14 million tonnes in 1986.",
      collocations: ["hit a period trough", "dip to a trough of", "lowest point of the period"]
    }
  ],

  vocabHunt: [
    "apex",
    "upward trajectory",
    "downward trajectory",
    "marked volatility",
    "precipitous plunge",
    "plateau",
    "rebound",
    "overtake",
    "starting baseline",
    "dominant exporter",
    "steady diminution",
    "period trough"
  ],

  bp1: {
    title: "Body 1: Canada & Australia (Volatile Peak vs Steady Decline)",
    focus: "Analyze Canada's erratic oscillations and 1988 peak, contrasted with Australia's steady downward trajectory.",
    points: [
      "Canada began as the leading exporter at 19 million tonnes in 1985.",
      "After a small dip to 17m tonnes in 1986, Canada rocketed to 25 million tonnes in 1988 (overall apex).",
      "Canadian exports plummeted by 11m tonnes to 14m in 1989, before rebounding back to 19m tonnes in 1990.",
      "Australia started at 15m tonnes, peaked briefly at 16m in 1986, and then steadily declined to 11m tonnes by 1989.",
      "Australian shipments remained static at 11m tonnes in 1990, finishing in last position."
    ]
  },

  bp2: {
    title: "Body 2: European Community (The Ascent to Market Leadership)",
    focus: "Detail the European Community's initial dip, plateau, and rapid ascent to surpass both rivals.",
    points: [
      "The European Community commenced in second position at 17 million tonnes in 1985.",
      "Shipments dipped to a period trough of 14 million tonnes in 1986.",
      "Exports stabilized and plateaued at 15 million tonnes between 1987 and 1988.",
      "A dramatic two-year surge saw exports jump to 19m tonnes in 1989 and reach an apex of 21m tonnes in 1990.",
      "This late expansion allowed the European Community to overtake Canada and finish as the top exporter."
    ]
  },

  processingGroups: [
    {
      title: "1. The Dominant Rise (European Community)",
      items: [
        "1985: Started at 17m tonnes (Rank #2)",
        "1986: Dipped to period trough of 14m tonnes",
        "1987–1988: Plateaued steadily at 15m tonnes",
        "1989: Surged to 19m tonnes, tying Canada",
        "1990: Peaked at 21m tonnes to secure #1 rank (+4m net)"
      ]
    },
    {
      title: "2. The Volatile Rollercoaster (Canada)",
      items: [
        "1985: Started as leader at 19m tonnes (Rank #1)",
        "1986: Dipped to 17m tonnes",
        "1987–1988: Rocketed to overall graph apex at 25m tonnes",
        "1989: Precipitous plunge to 14m tonnes (-11m collapse)",
        "1990: Rebounded to exactly 19m tonnes (0m net change)"
      ]
    },
    {
      title: "3. The Downward Decline (Australia)",
      items: [
        "1985: Started at 15m tonnes (Rank #3)",
        "1986: Brief peak at 16m tonnes",
        "1987–1989: Continuous decline (14m → 12m → 11m)",
        "1989–1990: Leveled off flat at 11m tonnes",
        "Finished in last place (-4m net loss)"
      ]
    },
    {
      title: "4. Key Analytical Intersections & Contrasts",
      items: [
        "1986 Intersection: Canada and Australia both stood near 16–17m while EC dropped to 14m.",
        "1988 Divergence: Canada at highest peak (25m), Australia down to 12m, EC steady at 15m.",
        "1989 Reversal: EC jumped to 19m while Canada plunged to 14m (EC overtook Canada).",
        "1990 Final Standing: EC #1 (21m), Canada #2 (19m), Australia #3 (11m)."
      ]
    }
  ],

  connectors: [
    {
      phrase: "With regard to Canada and Australia,...",
      purpose: "Comparative Category Opener",
      example: "With regard to Canada and Australia, both regions started as major suppliers before experiencing diverging paths."
    },
    {
      phrase: "Surging to an overall apex of...",
      purpose: "Peak Identification Marker",
      example: "Canadian wheat exports surged rapidly, reaching an overall apex of 25 million tonnes in 1988."
    },
    {
      phrase: "This was immediately followed by a steep plunge to...",
      purpose: "Abrupt Reversal Connector",
      example: "However, this was immediately followed by a steep plunge to 14 million tonnes in 1989."
    },
    {
      phrase: "In stark contrast, Australia...",
      purpose: "Opposing Trend Transition",
      example: "In stark contrast, Australia followed a consistent downward trajectory after peaking at 16 million tonnes in 1986."
    },
    {
      phrase: "Turning to the European Community,...",
      purpose: "Paragraph Transition Marker",
      example: "Turning to the European Community, exports began at 17 million tonnes before dipping to 14 million in 1986."
    },
    {
      phrase: "Successfully overtaking both competitors to finish as...",
      purpose: "Climactic Overtaking Marker",
      example: "Over the final two years, exports rose to 21 million tonnes, successfully overtaking both competitors to finish as the market leader."
    }
  ],

  modelReport: {
    wordCount: 198,
    paragraphs: [
      {
        id: "intro",
        title: "Introduction: Diagram Scope, Subject & Parameters",
        text: "The line graph illustrates the volume of wheat exported by three different areas—Australia, Canada, and the European Community—between 1985 and 1990, measured in millions of tonnes.",
        wordCount: 26,
        badges: ["Paraphrase", "Line Graph", "3 Areas", "1985–1990", "Millions of Tonnes"]
      },
      {
        id: "overview",
        title: "Macro Overview: Key Trends & Dominant Positions (NO NUMBERS)",
        text: "Overall, the European Community witnessed sustained upward growth over the period to become the dominant wheat exporter by 1990, whereas Australia underwent a steady downward trajectory to finish in the lowest position. In contrast, Canada exhibited marked volatility throughout the six-year span, registering both the overall peak and a dramatic plunge before returning to its starting level.",
        wordCount: 56,
        badges: ["Macro Trends", "Zero Numerical Figures", "EC Dominance", "Australia Lowest", "Canada Volatility"]
      },
      {
        id: "body1",
        title: "Body Paragraph 1: Canada & Australia (Volatile Peak vs Steady Decline)",
        text: "In 1985, Canada was the leading wheat exporter at 19 million tonnes. Following a minor dip to 17 million tonnes in 1986, Canadian shipments surged rapidly to reach the highest point on the entire graph at 25 million tonnes in 1988. However, this was immediately followed by a steep plunge to 14 million tonnes in 1989, after which exports rebounded back to their initial level of 19 million tonnes in 1990. In contrast, Australia commenced at 15 million tonnes and rose slightly to a peak of 16 million tonnes in 1986. Thereafter, Australian wheat exports steadily declined over the subsequent three years to 11 million tonnes in 1989, where they remained unchanged through 1990, ending as the lowest of the three regions.",
        wordCount: 125,
        badges: ["Canada 1985-90", "Overall Peak (25m)", "1989 Slump (14m)", "Australia Decline (16m → 11m)", "Final Lowest"]
      },
      {
        id: "body2",
        title: "Body Paragraph 2: The European Community (Sustained Ascent to Leadership)",
        text: "Wheat exports from the European Community started in second place at 17 million tonnes in 1985 before declining to a period low of 14 million tonnes in 1986. The figures then plateaued at 15 million tonnes between 1987 and 1988. Over the final two years, the European Community experienced a significant expansion, with export volumes climbing sharply to 19 million tonnes in 1989 and reaching an apex of 21 million tonnes in 1990. By doing so, the European Community overtook both Canada and Australia to become the top exporter.",
        wordCount: 88,
        badges: ["EC 1985 Start (17m)", "1986 Dip (14m)", "1987-88 Plateau (15m)", "1989 Surge (19m)", "1990 Apex (21m Leader)"]
      }
    ]
  }
};
