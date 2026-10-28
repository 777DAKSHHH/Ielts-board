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
  SpendingHotspot
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
  SpendingHotspot
};

// ==========================================
// 1. PRIMARY DATA SET: UK SCHOOL SPENDING (1981, 1991, 2001)
// ==========================================

export const SPENDING_CATEGORIES: SpendingCategoryItem[] = [
  {
    id: "teachers_salaries",
    label: "Teachers' salaries",
    shortLabel: "Teachers",
    color: "#2563eb", // Royal Blue
    group: "staff",
    y1981: 40,
    y1991: 50,
    y2001: 45,
    netChange: 5,
    trendType: "peak_dip",
    trendDescription: "Peaked at 50% in 1991 (half of total expenditure) before settling at 45% in 2001; consistently swallowed the lion's share throughout.",
    band9Phrase: "“Teachers’ salaries constituted the school’s single largest outlay in every surveyed period, rising from 40% in 1981 to a peak of 50% in 1991 before moderating slightly to 45% in 2001.”"
  },
  {
    id: "other_workers_salaries",
    label: "Other workers' salaries",
    shortLabel: "Other Staff",
    color: "#7c3aed", // Violet / Purple
    group: "staff",
    y1981: 28,
    y1991: 22,
    y2001: 15,
    netChange: -13,
    trendType: "continuous_fall",
    trendDescription: "Fell steadily from 28% in 1981 to 22% in 1991, almost halving to 15% by 2001.",
    band9Phrase: "“Conversely, expenditure on other workers’ salaries exhibited an unbroken downward trajectory, shrinking from 28% to 22% and almost halving to 15% by 2001.”"
  },
  {
    id: "furniture_and_equipment",
    label: "Furniture and equipment",
    shortLabel: "Furniture & Equip.",
    color: "#059669", // Emerald Green
    group: "non_staff",
    y1981: 15,
    y1991: 5,
    y2001: 23,
    netChange: 8,
    trendType: "fluctuated_surge",
    trendDescription: "Plunged by two-thirds from 15% to 5% in 1991 before experiencing a dramatic resurgence to 23% in 2001, becoming the second-largest cost.",
    band9Phrase: "“Allocations for furniture and equipment underwent dramatic fluctuation; after plummeting to a third of its original level at 5% in 1991, it surged to 23% in 2001.”"
  },
  {
    id: "resources",
    label: "Resources e.g. books",
    shortLabel: "Resources (Books)",
    color: "#d97706", // Amber / Warm Gold
    group: "non_staff",
    y1981: 15,
    y1991: 20,
    y2001: 9,
    netChange: -6,
    trendType: "surge_plunge",
    trendDescription: "Rose from 15% to 20% in 1991 before declining steeply to a single-digit low of 9% in 2001.",
    band9Phrase: "“Spending on educational resources climbed from 15% to 20% in 1991 before falling steeply to an all-time low of 9% in 2001.”"
  },
  {
    id: "insurance",
    label: "Insurance",
    shortLabel: "Insurance",
    color: "#dc2626", // Red / Coral
    group: "non_staff",
    y1981: 2,
    y1991: 3,
    y2001: 8,
    netChange: 6,
    trendType: "quadrupled",
    trendDescription: "Consistently the smallest proportion, yet quadrupled from 2% in 1981 to 8% by 2001.",
    band9Phrase: "“Insurance accounted for the smallest allocation throughout the period, despite a continuous fourfold surge from 2% to 8%.”"
  }
];

// ==========================================
// 2. YEAR-BY-YEAR PIE CHART SLICES
// ==========================================

export const SPENDING_YEARS: SchoolSpendingYearData[] = [
  {
    year: 1981,
    slices: [
      { categoryId: "teachers_salaries", label: "Teachers' salaries", percentage: 40, color: "#2563eb" },
      { categoryId: "other_workers_salaries", label: "Other workers' salaries", percentage: 28, color: "#7c3aed" },
      { categoryId: "furniture_and_equipment", label: "Furniture and equipment", percentage: 15, color: "#059669" },
      { categoryId: "resources", label: "Resources e.g. books", percentage: 15, color: "#d97706" },
      { categoryId: "insurance", label: "Insurance", percentage: 2, color: "#dc2626" }
    ],
    totalStaffPercent: 68,
    totalNonStaffPercent: 32,
    topCategory: "Teachers' salaries (40%)",
    lowestCategory: "Insurance (2%)",
    notes: "Staff remuneration absorbed over two-thirds (68%) of school outlay. Furniture and resources stood equal at 15% each."
  },
  {
    year: 1991,
    slices: [
      { categoryId: "teachers_salaries", label: "Teachers' salaries", percentage: 50, color: "#2563eb" },
      { categoryId: "other_workers_salaries", label: "Other workers' salaries", percentage: 22, color: "#7c3aed" },
      { categoryId: "resources", label: "Resources e.g. books", percentage: 20, color: "#d97706" },
      { categoryId: "furniture_and_equipment", label: "Furniture and equipment", percentage: 5, color: "#059669" },
      { categoryId: "insurance", label: "Insurance", percentage: 3, color: "#dc2626" }
    ],
    totalStaffPercent: 72,
    totalNonStaffPercent: 28,
    topCategory: "Teachers' salaries (50% - Half of budget)",
    lowestCategory: "Insurance (3%)",
    notes: "Teachers' salaries peaked at precisely half (50%) of all spending. Furniture fell to a third of its prior level (5%)."
  },
  {
    year: 2001,
    slices: [
      { categoryId: "teachers_salaries", label: "Teachers' salaries", percentage: 45, color: "#2563eb" },
      { categoryId: "furniture_and_equipment", label: "Furniture and equipment", percentage: 23, color: "#059669" },
      { categoryId: "other_workers_salaries", label: "Other workers' salaries", percentage: 15, color: "#7c3aed" },
      { categoryId: "resources", label: "Resources e.g. books", percentage: 9, color: "#d97706" },
      { categoryId: "insurance", label: "Insurance", percentage: 8, color: "#dc2626" }
    ],
    totalStaffPercent: 60,
    totalNonStaffPercent: 40,
    topCategory: "Teachers' salaries (45%)",
    lowestCategory: "Insurance (8%)",
    notes: "Furniture staged a dramatic resurgence to 23% (2nd largest item). Resources dropped to single digits (9%). Insurance quadrupled to 8%."
  }
];

// ==========================================
// 3. SPENDING HOTSPOTS FOR SMARTBOARD TEACHING
// ==========================================

export const SPENDING_HOTSPOTS: SpendingHotspot[] = [
  {
    id: "teachers",
    title: "1. Teachers' Salaries: Dominant Lion's Share",
    category: "Teachers' salaries",
    y1981: 40,
    y1991: 50,
    y2001: 45,
    trendText: "Dominant cost in all 3 periods; rose to peak at exactly 50% in 1991, receding slightly to 45% in 2001.",
    contrastKey: "Always the #1 expenditure item, absorbing between 40% and 50% of the entire budget.",
    band9Sentence: "Teachers’ salaries constituted the school’s principal outlay in every year surveyed, commencing at 40% in 1981, climbing to a peak of 50% in 1991, and subsequently dipping to 45% in 2001.",
    keyFeature: "Consistent #1 rank across all 20 years; peaked at half the budget."
  },
  {
    id: "other_workers",
    title: "2. Other Workers' Salaries: Unbroken Downward Trend",
    category: "Other workers' salaries",
    y1981: 28,
    y1991: 22,
    y2001: 15,
    trendText: "Steadily decreased across both decades: 28% → 22% → 15%, almost halving over the 20-year timeframe.",
    contrastKey: "Second-largest cost in 1981 and 1991, but surpassed by furniture in 2001.",
    band9Sentence: "By contrast, expenditure on other workers’ salaries followed an unbroken downward trajectory; having formed the second-largest cost at 28% in 1981, it diminished to 22% in 1991 before almost halving to 15% by 2001.",
    keyFeature: "Net decline of 13 percentage points; nearly halved by 2001."
  },
  {
    id: "furniture",
    title: "3. Furniture & Equipment: Marked Fluctuation & Resurgence",
    category: "Furniture and equipment",
    y1981: 15,
    y1991: 5,
    y2001: 23,
    trendText: "Dropped by two-thirds from 15% to 5% in 1991, then surged by 18 percentage points to 23% in 2001.",
    contrastKey: "Leaped to the second-highest expenditure category by 2001.",
    band9Sentence: "Allocations for furniture and equipment stood at 15% in 1981, plummeted to just 5% in 1991, and then experienced a dramatic resurgence to 23% in 2001, making it the second most significant budget component that year.",
    keyFeature: "Most volatile category: dropped to 5% before quadrupling to 23%."
  },
  {
    id: "resources",
    title: "4. Resources (Books): Initial Rise Followed by Steep Drop",
    category: "Resources e.g. books",
    y1981: 15,
    y1991: 20,
    y2001: 9,
    trendText: "Climbed from 15% to 20% in 1991, before plunging to an all-time low of 9% in 2001.",
    contrastKey: "Ranked 3rd in 1981 and 1991, but dropped to 4th place and single digits in 2001.",
    band9Sentence: "Meanwhile, spending on educational resources such as books initially rose from 15% to 20% between 1981 and 1991, before declining steeply to a twenty-year low of 9% in 2001.",
    keyFeature: "Only non-staff category to peak in 1991 before falling by more than half."
  },
  {
    id: "insurance",
    title: "5. Insurance: Smallest Share with a 4-Fold Surge",
    category: "Insurance",
    y1981: 2,
    y1991: 3,
    y2001: 8,
    trendText: "Remained the lowest allocation in all three years (2% → 3% → 8%), but quadrupled overall.",
    contrastKey: "Smallest slice in all 3 pie charts despite experiencing the greatest relative percentage increase.",
    band9Sentence: "Finally, insurance accounted for the smallest percentage in all three periods, edging up from a negligible 2% in 1981 to 3% in 1991, before surging to 8% in 2001.",
    keyFeature: "Consistent #5 rank; quadrupled from 2% to 8%."
  }
];

// ==========================================
// 4. BACKWARD COMPATIBILITY DATA SHIMS
// ==========================================

export const ACTIVITY_DATA: ActivityAgeGroup[] = SPENDING_CATEGORIES.map((c) => ({
  id: c.id,
  ageGroup: c.label,
  shortLabel: c.shortLabel,
  male: c.y1981,
  female: c.y2001,
  genderGap: c.y2001 - c.y1981,
  higherGender: c.y2001 >= c.y1981 ? "female" : "male",
  annotation: c.trendDescription,
  isPeak: c.id === "teachers_salaries" ? "female" : undefined,
  isTrough: c.id === "insurance" ? "male" : undefined
}));

export const ACTIVITY_GENDERS: ActivityGenderInfo[] = [
  {
    id: "male",
    name: "1981 Baseline",
    color: "#2563eb",
    barColor: "#2563eb",
    bgBadge: "rgba(37, 99, 235, 0.12)",
    peakAge: "Teachers' salaries (40%)",
    peakValue: 40,
    lowestAge: "Insurance (2%)",
    lowestValue: 2,
    summary: "In 1981, staff costs absorbed 68% of expenditure, led by teachers (40%) and other workers (28%).",
    band9Phrase: "“In 1981, teachers’ salaries and other workers’ wages represented 40% and 28% respectively.”"
  },
  {
    id: "female",
    name: "2001 Final Year",
    color: "#059669",
    barColor: "#059669",
    bgBadge: "rgba(5, 150, 105, 0.12)",
    peakAge: "Teachers' salaries (45%)",
    peakValue: 45,
    lowestAge: "Insurance (8%)",
    lowestValue: 8,
    summary: "By 2001, furniture and equipment leaped to 23%, while other workers' salaries dropped to 15%.",
    band9Phrase: "“By 2001, furniture and equipment surged to 23%, while resources dropped to 9%.”"
  }
];

export const ACTIVITY_HOTSPOTS: ActivityHotspot[] = SPENDING_HOTSPOTS.map((h) => ({
  id: h.id,
  title: h.title,
  ageGroup: h.category,
  maleValue: h.y1981,
  femaleValue: h.y2001,
  gapText: `${h.y2001 >= h.y1981 ? "+" : ""}${h.y2001 - h.y1981}%`,
  contrastKey: h.contrastKey,
  band9Sentence: h.band9Sentence,
  keyFeature: h.keyFeature
}));

export const HOURLY_AUDIENCE_DATA: HourlyAudiencePoint[] = [
  { hour: 1981, timeLabel: "1981", tv: 40, radio: 28 },
  { hour: 1991, timeLabel: "1991", tv: 50, radio: 22 },
  { hour: 2001, timeLabel: "2001", tv: 45, radio: 15 }
];

export const MEDIA_CHANNELS: MediaChannelInfo[] = [
  {
    id: "radio",
    name: "Other Staff Salaries",
    color: "#7c3aed",
    lineStroke: "#7c3aed",
    bgBadge: "rgba(124, 58, 237, 0.12)",
    peakTime: "1981",
    peakValue: 28,
    troughTime: "2001",
    troughValue: 15,
    summary: "Fell steadily from 28% in 1981 to 15% in 2001.",
    band9Phrase: "“Other staff salaries followed a downward trend from 28% to 15%.”"
  },
  {
    id: "tv",
    name: "Teachers' Salaries",
    color: "#2563eb",
    lineStroke: "#2563eb",
    bgBadge: "rgba(37, 99, 235, 0.15)",
    peakTime: "1991",
    peakValue: 50,
    troughTime: "1981",
    troughValue: 40,
    summary: "Highest in all years, peaking at 50% in 1991.",
    band9Phrase: "“Teachers’ salaries represented the largest share in all three years.”"
  }
];

export const AUDIENCE_HOTSPOTS: AudienceHotspot[] = ACTIVITY_HOTSPOTS.map((h) => ({
  id: h.id,
  title: h.title,
  zone: "morning",
  timeRange: h.ageGroup,
  radioState: `1981: ${h.maleValue}%`,
  tvState: `2001: ${h.femaleValue}%`,
  contrastKey: h.contrastKey,
  band9Sentence: h.band9Sentence,
  keyFeature: h.keyFeature
}));

export const TASK1_HOTSPOTS: ComparisonHotspot[] = SPENDING_HOTSPOTS.map((h) => ({
  id: h.id,
  title: h.title,
  zone: h.category,
  normalState: `1981: ${h.y1981}%`,
  elNinoState: `2001: ${h.y2001}%`,
  contrastKey: h.contrastKey,
  band9Sentence: h.band9Sentence
}));

// ==========================================
// 5. MASTER TASK 1 DATA OBJECT
// ==========================================

export const TASK1_DATA: Task1Data = {
  id: "uk-school-spending-pie-charts",
  taskType: "IELTS Academic Writing Task 1 • Three Pie Charts",
  title: "School Spending of One UK School (1981, 1991, 2001)",
  companyName: "Cambridge IELTS / UK Educational Expenditure Survey",
  unit: "Percentage of Annual Expenditure (%)",
  questionText:
    "The three charts below show the spending of one UK school.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
  imageFileName: "uk_school_spending_pie_charts.png",
  hdImageFileName: "uk_school_spending_pie_charts.png",
  scanImageFileName: "uk_school_spending_pie_charts.png",
  audioUrl: "/audio/task1_briefing.m4a",
  audioClueText:
    "The three pie charts illustrate the proportion of expenditure allocated across five categories in one UK school in 1981, 1991, and 2001. Teachers' salaries formed the largest expense throughout, peaking at 50% in 1991. Other workers' salaries steadily declined from 28% to 15%. Furniture and equipment saw dramatic fluctuation, plunging to 5% before rebounding to 23%. Insurance remained the smallest outlay, though it quadrupled from 2% to 8%.",
  timingSeconds: 1200,

  sampleIntro:
    "The three pie charts illustrate the proportion of annual expenditure allocated across five different categories by a single school in the United Kingdom in three separate years: 1981, 1991, and 2001.",

  sampleOverview:
    "Overall, teachers’ salaries consistently represented the largest share of the school’s budget throughout the entire twenty-year timeframe, peaking at precisely half of all expenditure in 1991. Conversely, insurance consistently accounted for the lowest proportion, despite undergoing a continuous fourfold increase. Furthermore, while other workers’ salaries and resources saw overall reductions by 2001, spending on furniture and equipment exhibited dramatic fluctuation, recovering strongly after an initial slump.",

  hourlyPoints: HOURLY_AUDIENCE_DATA,
  channels: MEDIA_CHANNELS,
  audienceHotspots: AUDIENCE_HOTSPOTS,
  activityData: ACTIVITY_DATA,
  genderInfo: ACTIVITY_GENDERS,
  activityHotspots: ACTIVITY_HOTSPOTS,

  spendingCategories: SPENDING_CATEGORIES,
  spendingYears: SPENDING_YEARS,
  spendingHotspots: SPENDING_HOTSPOTS,

  formats: [],
  countries: [],

  diagramData: {
    hotspots: TASK1_HOTSPOTS,
    comparisonsSummary: {
      teachers: "Teachers' salaries remained the primary cost in all 3 periods (40% → 50% → 45%).",
      furniture: "Furniture and equipment fell sharply from 15% to 5% in 1991 before surging to 23% in 2001.",
      other_workers: "Other workers' salaries declined continuously from 28% to 22% and 15%.",
      insurance: "Insurance remained the smallest allocation, but quadrupled from 2% to 8%."
    }
  },
  graphData: {
    hotspots: TASK1_HOTSPOTS,
    comparisonsSummary: {
      staff_dominance: "Combined staff remuneration (teachers + other workers) consumed 60%–72% of total outlay.",
      resources_decline: "Resources e.g. books rose to 20% in 1991 before dropping to a single-digit low of 9% in 2001.",
      furniture_resurgence: "Furniture surged from 5% to 23% in 2001 to become the 2nd largest spending item."
    }
  },

  vocabList: [
    {
      word: "Allocation / Outlay",
      term: "Allocation / Outlay",
      phonetic: "/ˌæləˈkeɪʃn/ – /ˈaʊtleɪ/",
      meaning: "The distribution or expenditure of financial resources towards specific operational or capital items.",
      definition: "The distribution or expenditure of financial resources towards specific operational or capital items.",
      example: "The school's largest financial allocation was designated for teachers' salaries across all three decades.",
      sampleSentence: "The school's largest financial allocation was designated for teachers' salaries across all three decades.",
      collocations: ["budgetary allocation", "financial outlay", "capital allocation"]
    },
    {
      word: "The Lion's Share",
      term: "The Lion's Share",
      phonetic: "/ðə ˈlaɪənz ʃeə/",
      meaning: "The largest or predominant portion of a total sum or budget.",
      definition: "The largest or predominant portion of a total sum or budget.",
      example: "Teachers' salaries absorbed the lion's share of total school spending, peaking at precisely 50% in 1991.",
      sampleSentence: "Teachers' salaries absorbed the lion's share of total school spending, peaking at precisely 50% in 1991.",
      collocations: ["absorb the lion's share", "command the lion's share", "constitute the lion's share"]
    },
    {
      word: "Account For / Comprise",
      term: "Account For / Comprise",
      phonetic: "/əˈkaʊnt fɔː/ – /kəmˈpraɪz/",
      meaning: "To make up, constitute, or represent a specified statistical proportion or percentage.",
      definition: "To make up, constitute, or represent a specified statistical proportion or percentage.",
      example: "In 1981, other workers' salaries accounted for 28% of the total annual budget.",
      sampleSentence: "In 1981, other workers' salaries accounted for 28% of the total annual budget.",
      collocations: ["accounted for precisely", "comprised nearly half", "constituted the lowest share"]
    },
    {
      word: "Quadruple",
      term: "Quadruple",
      phonetic: "/kwɒˈdruːpl/",
      meaning: "To increase fourfold; expand to four times its original baseline level.",
      definition: "To increase fourfold; expand to four times its original baseline level.",
      example: "Expenditure on insurance quadrupled over the twenty-year timeframe, rising from 2% to 8%.",
      sampleSentence: "Expenditure on insurance quadrupled over the twenty-year timeframe, rising from 2% to 8%.",
      collocations: ["quadrupled over the period", "a fourfold increase", "quadrupled by 2001"]
    },
    {
      word: "Resurgence",
      term: "Resurgence",
      phonetic: "/rɪˈsɜːdʒəns/",
      meaning: "An upward revival or sharp recovery in proportion after a period of reduction.",
      definition: "An upward revival or sharp recovery in proportion after a period of reduction.",
      example: "Furniture and equipment experienced a dramatic resurgence, climbing from 5% in 1991 to 23% in 2001.",
      sampleSentence: "Furniture and equipment experienced a dramatic resurgence, climbing from 5% in 1991 to 23% in 2001.",
      collocations: ["dramatic resurgence", "stage a resurgence", "notable resurgence"]
    },
    {
      word: "Unbroken Downward Trajectory",
      term: "Unbroken Downward Trajectory",
      phonetic: "/ʌnˈbrəʊkən ˈdaʊnwəd trəˈdʒɛktəri/",
      meaning: "A continuous, uninterrupted decline across all observed time intervals.",
      definition: "A continuous, uninterrupted decline across all observed time intervals.",
      example: "Other workers' salaries followed an unbroken downward trajectory, declining from 28% to 22% and then to 15%.",
      sampleSentence: "Other workers' salaries followed an unbroken downward trajectory, declining from 28% to 22% and then to 15%.",
      collocations: ["downward trajectory", "unbroken decline", "exhibit a downward trajectory"]
    },
    {
      word: "Diminish / Almost Halve",
      term: "Diminish / Almost Halve",
      phonetic: "/dɪˈmɪnɪʃ/ – /ˈɔːlməʊst hɑːv/",
      meaning: "To decrease significantly in size, importance, or value; reduce to approximately 50%.",
      definition: "To decrease significantly in size, importance, or value; reduce to approximately 50%.",
      example: "By 2001, spending on other staff had diminished significantly, almost halving from its 1981 level.",
      sampleSentence: "By 2001, spending on other staff had diminished significantly, almost halving from its 1981 level.",
      collocations: ["almost halved", "diminished progressively", "diminish to single digits"]
    },
    {
      word: "Negligible / Minor Share",
      term: "Negligible / Minor Share",
      phonetic: "/ˈnɛɡlɪdʒəbl/ – /ˈmaɪnə ʃeə/",
      meaning: "An extremely modest proportion that represents only a tiny fraction of total spending.",
      definition: "An extremely modest proportion that represents only a tiny fraction of total spending.",
      example: "Insurance represented a negligible 2% of the school's total expenditure in 1981.",
      sampleSentence: "Insurance represented a negligible 2% of the school's total expenditure in 1981.",
      collocations: ["negligible proportion", "minor share", "negligible percentage"]
    },
    {
      word: "Fluctuate Markedly",
      term: "Fluctuate Markedly",
      phonetic: "/ˈflʌktʃueɪt ˈmɑːkɪdli/",
      meaning: "To swing or shift substantially up and down over a given duration.",
      definition: "To swing or shift substantially up and down over a given duration.",
      example: "Spending on furniture and equipment fluctuated markedly, crashing to 5% before leaping to 23%.",
      sampleSentence: "Spending on furniture and equipment fluctuated markedly, crashing to 5% before leaping to 23%.",
      collocations: ["fluctuated markedly", "exhibit marked fluctuation", "fluctuating expenditure"]
    },
    {
      word: "Predominance",
      term: "Predominance",
      phonetic: "/prɪˈdɒmɪnəns/",
      meaning: "The state of being greater in number, proportion, or importance than others.",
      definition: "The state of being greater in number, proportion, or importance than others.",
      example: "Teachers' salaries retained their clear predominance in all three pie charts.",
      sampleSentence: "Teachers' salaries retained their clear predominance in all three pie charts.",
      collocations: ["clear predominance", "retain predominance", "financial predominance"]
    },
    {
      word: "Remuneration / Staff Costs",
      term: "Remuneration / Staff Costs",
      phonetic: "/rɪˌmjuːnəˈreɪʃn/",
      meaning: "Financial compensation or wage payment made to teaching and administrative employees.",
      definition: "Financial compensation or wage payment made to teaching and administrative employees.",
      example: "Combined staff remuneration consistently absorbed well over half of the school's total annual budget.",
      sampleSentence: "Combined staff remuneration consistently absorbed well over half of the school's total annual budget.",
      collocations: ["staff remuneration", "employee remuneration", "remuneration costs"]
    },
    {
      word: "Plummet / Plunge",
      term: "Plummet / Plunge",
      phonetic: "/ˈplʌmɪt/ – /plʌndʒ/",
      meaning: "To fall or drop rapidly and dramatically from an earlier statistical level.",
      definition: "To fall or drop rapidly and dramatically from an earlier statistical level.",
      example: "In 1991, allocations for furniture plummeted by two-thirds to just 5%.",
      sampleSentence: "In 1991, allocations for furniture plummeted by two-thirds to just 5%.",
      collocations: ["plummeted to 5%", "plunged steeply", "plummet by two-thirds"]
    }
  ],

  vocabHunt: [
    "allocation",
    "outlay",
    "lion's share",
    "account for",
    "comprise",
    "quadruple",
    "resurgence",
    "trajectory",
    "diminish",
    "negligible",
    "fluctuate",
    "remuneration"
  ],

  bp1: {
    title: "Body Paragraph 1: Staff Remuneration (Teachers' & Other Workers' Salaries)",
    focus: "Staff costs: Teachers' salaries (40% → 50% → 45%) and Other workers' salaries (28% → 22% → 15%), combined staff totals (60%–72%)",
    points: [
      "Teachers' salaries formed the principal outlay in all years: 40% in 1981, peak of 50% in 1991, moderating to 45% in 2001.",
      "Maintained dominant position throughout, swallowing roughly half of all annual funds.",
      "Other workers' salaries experienced an unbroken downward trajectory: 28% in 1981, 22% in 1991, almost halving to 15% in 2001.",
      "Combined staff remuneration absorbed well over half of the budget in all three periods (68% in 1981, 72% in 1991, 60% in 2001)."
    ],
    flow: [
      "1. Teachers' salaries initial baseline: 40% in 1981 (dominant item)",
      "2. Peak expansion: expanded by 10% to reach 50% (half of budget) in 1991",
      "3. Slight moderation: dipped to 45% in 2001 while remaining #1",
      "4. Other workers' salaries steady fall: 28% (1981) → 22% (1991) → 15% (2001)",
      "5. Combined staff synthesis: Remuneration absorbed 60%–72% of total school expenditure"
    ],
    takeaways: [
      "Teachers' salaries were the single biggest expenditure across all 20 years.",
      "Other workers' salaries nearly halved over the period, dropping by 13 percentage points."
    ]
  },

  bp2: {
    title: "Body Paragraph 2: Non-Staff Costs (Furniture & Equipment, Resources, Insurance)",
    focus: "Furniture & equipment (15% → 5% → 23%), Resources (15% → 20% → 9%), Insurance (2% → 3% → 8%)",
    points: [
      "Furniture and equipment plunged by two-thirds from 15% to 5% in 1991 before staging a dramatic resurgence to 23% in 2001 (becoming second-largest component).",
      "Educational resources (books) initially expanded from 15% to 20% in 1991 before falling steeply to a single-digit low of 9% in 2001.",
      "Insurance represented the lowest outlay in all three years, edging from a negligible 2% in 1981 to 3% in 1991 before surging to 8% in 2001 (quadrupled)."
    ],
    flow: [
      "1. Furniture and equipment volatility: 15% in 1981, slumped to 5% in 1991",
      "2. Resurgence: leaped by 18% to 23% in 2001, overtaking other workers' salaries",
      "3. Educational resources (books): climbed from 15% to 20% in 1991 before declining to 9% in 2001",
      "4. Insurance progression: lowest in all years (2% → 3% → 8%), but experienced a fourfold expansion"
    ],
    takeaways: [
      "Furniture and equipment was the most volatile category, rebounding from 5% to 23%.",
      "Insurance remained the smallest allocation throughout, despite quadrupling to 8%."
    ]
  },

  processingGroups: [
    {
      title: "Group 1: Proportions & Budgetary Shares",
      items: [
        "consistently swallowing the lion's share of expenditure",
        "peaking at precisely half (50%) of all school spending",
        "accounting for a negligible 2% in the baseline year",
        "comprising the second most significant budget component at 23%"
      ]
    },
    {
      title: "Group 2: Trend & Trajectory Verbs (Strictly Band 9)",
      items: [
        "following an unbroken downward trajectory from 28% to 15%",
        "almost halving over the twenty-year timeframe",
        "experiencing a dramatic resurgence after an initial slump",
        "quadrupling from 2% in 1981 to 8% by 2001"
      ]
    },
    {
      title: "Group 3: Comparative & Structural Transitions",
      items: [
        "in terms of staffing costs / turning to non-staff expenditure",
        "by contrast, expenditure on other workers' salaries...",
        "while educational resources initially expanded, it subsequently...",
        "combined staff remuneration absorbed well over half of the budget"
      ]
    }
  ],

  connectors: [
    {
      phrase: "In terms of staffing costs,... / Turning to non-staff expenditure,...",
      purpose: "Signaling macro categorical bifurcation between staff remuneration and operational costs",
      example: "In terms of staffing costs, teachers' salaries constituted the school's principal outlay in every year."
    },
    {
      phrase: "Peaking at precisely half (50%) of... / Moderating slightly to...",
      purpose: "Accurately reporting peak statistical milestones and subsequent minor contractions",
      example: "Teachers' salaries peaked at precisely half (50%) of total expenditure in 1991, before moderating to 45% in 2001."
    },
    {
      phrase: "By contrast, ... followed an unbroken downward trajectory,",
      purpose: "Contrasting declining components against stable or surging budget items",
      example: "By contrast, other workers' salaries followed an unbroken downward trajectory, almost halving to 15%."
    },
    {
      phrase: "Undergoing a dramatic resurgence to [X]%,",
      purpose: "Describing a sharp recovery after an initial severe drop",
      example: "Allocations for furniture experienced a dramatic resurgence to 23%, becoming the second-largest cost."
    },
    {
      phrase: "Initially expanding from [X]% to [Y]%, before declining steeply to...",
      purpose: "Synthesizing a rise-and-fall pattern across multi-year intervals",
      example: "Spending on resources initially expanded from 15% to 20%, before declining steeply to a low of 9%."
    },
    {
      phrase: "Despite undergoing a fourfold increase / quadrupling to...",
      purpose: "Highlighting relative growth while acknowledging its low absolute proportion",
      example: "Insurance accounted for the lowest share in all three years, despite quadrupling from 2% to 8%."
    }
  ],

  modelReport: {
    wordCount: 285,
    paragraphs: [
      {
        id: "intro",
        title: "Introduction",
        text: "The three pie charts illustrate the proportion of annual expenditure allocated across five different categories by a single school in the United Kingdom in three separate years: 1981, 1991, and 2001.",
        wordCount: 31,
        badges: ["Band 9 Paraphrase", "3 Pie Charts Identified", "5 Spending Categories & Temporal Range"]
      },
      {
        id: "overview",
        title: "Overview",
        text: "Overall, teachers’ salaries consistently represented the largest share of the school’s budget throughout the entire twenty-year timeframe, peaking at precisely half of all expenditure in 1991. Conversely, insurance consistently accounted for the lowest proportion, despite undergoing a continuous fourfold increase. Furthermore, while other workers’ salaries and resources saw overall reductions by 2001, spending on furniture and equipment exhibited dramatic fluctuation, recovering strongly after an initial slump.",
        wordCount: 69,
        badges: ["3-Pillar Macro Synthesis", "Teachers' Dominance & Insurance Baseline", "Furniture Volatility & Staff Reductions"]
      },
      {
        id: "body1",
        title: "Body 1: Staff Remuneration (Teachers & Other Workers)",
        text: "In terms of staffing costs, teachers’ salaries constituted the school’s principal outlay in every year surveyed, beginning at 40% in 1981, climbing to a peak of 50% in 1991, and subsequently dipping to 45% in 2001. By contrast, expenditure on other workers’ salaries followed an unbroken downward trajectory; having formed the second-largest cost at 28% in 1981, it diminished to 22% in 1991 before almost halving to 15% by 2001. Combined, staff remuneration consistently absorbed well over half of the school’s annual funding, ranging between 60% and 72%.",
        wordCount: 88,
        badges: ["Teachers' 40% → 50% → 45%", "Other Workers 28% → 22% → 15%", "Combined Staff Total (60%–72%)"]
      },
      {
        id: "body2",
        title: "Body 2: Non-Staff Outlay (Furniture, Resources & Insurance)",
        text: "Turning to non-staff expenditure, allocations for furniture and equipment stood at 15% in 1981, plummeted to just 5% in 1991, and then experienced a dramatic resurgence to 23% in 2001, making it the second most significant budget component that year. Meanwhile, spending on educational resources such as books initially rose from 15% to 20% between 1981 and 1991, before declining steeply to a twenty-year low of 9% in 2001. Finally, insurance accounted for the smallest percentage in all three periods, edging up from a negligible 2% in 1981 to 3% in 1991, before surging to 8% in 2001.",
        wordCount: 97,
        badges: ["Furniture Crash (5%) & Resurgence (23%)", "Resources Fall to 9%", "Insurance Quadrupling (2% → 8%)"]
      }
    ]
  }
};
