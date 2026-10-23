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
  ActivityHotspot
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
  ActivityHotspot
};

// 1. Primary Data Set: Physical Activity by Age Group & Gender (Australia, 2010)
export const ACTIVITY_DATA: ActivityAgeGroup[] = [
  {
    id: "15_to_24",
    ageGroup: "15 to 24",
    shortLabel: "15–24",
    male: 52.8,
    female: 47.7,
    genderGap: -5.1,
    higherGender: "male",
    isPeak: "male",
    annotation: "Male peak across all demographics (52.8%); sole age bracket where men outpaced women"
  },
  {
    id: "25_to_34",
    ageGroup: "25 to 34",
    shortLabel: "25–34",
    male: 42.2,
    female: 48.9,
    genderGap: 6.7,
    higherGender: "female",
    annotation: "Gender leadership flips: female participation climbs to 48.9%, male rate falls sharply by 10.6 percentage points"
  },
  {
    id: "35_to_44",
    ageGroup: "35 to 44",
    shortLabel: "35–44",
    male: 39.5,
    female: 52.5,
    genderGap: 13.0,
    higherGender: "female",
    isTrough: "male",
    annotation: "Widest gender disparity (13.0 percentage points); absolute lowest figure in chart (males 39.5%)"
  },
  {
    id: "45_to_54",
    ageGroup: "45 to 54",
    shortLabel: "45–54",
    male: 43.1,
    female: 53.3,
    genderGap: 10.2,
    higherGender: "female",
    isPeak: "female",
    annotation: "Female peak (53.3%), the absolute highest figure in the entire bar chart"
  },
  {
    id: "55_to_64",
    ageGroup: "55 to 64",
    shortLabel: "55–64",
    male: 45.1,
    female: 53.0,
    genderGap: 7.9,
    higherGender: "female",
    annotation: "Female plateau persists near its peak (53.0%), while male rate steadily recovers to 45.1%"
  },
  {
    id: "65_and_over",
    ageGroup: "65 and over",
    shortLabel: "65+",
    male: 46.7,
    female: 47.1,
    genderGap: 0.4,
    higherGender: "female",
    annotation: "Gender convergence in retirement: male (46.7%) and female (47.1%) rates reach virtual parity"
  }
];

// 2. Gender Series Metadata
export const ACTIVITY_GENDERS: ActivityGenderInfo[] = [
  {
    id: "male",
    name: "Male (Australian Men)",
    color: "#0f172a",
    barColor: "#0f172a",
    bgBadge: "rgba(15, 23, 42, 0.12)",
    peakAge: "15 to 24 (52.8%)",
    peakValue: 52.8,
    lowestAge: "35 to 44 (39.5%)",
    lowestValue: 39.5,
    summary: "Peaked in youth at 52.8%, dropped to its lowest point of 39.5% at mid-life (35–44), before staging a progressive recovery to 46.7% in retirement.",
    band9Phrase: "“Australian men recorded an early peak among the 15-to-24 cohort at 52.8%, before slumping to an absolute low of 39.5% in the 35–44 bracket and progressively rebounding thereafter.”"
  },
  {
    id: "female",
    name: "Female (Australian Women)",
    color: "#64748b",
    barColor: "#cbd5e1",
    bgBadge: "rgba(100, 116, 139, 0.15)",
    peakAge: "45 to 54 (53.3%)",
    peakValue: 53.3,
    lowestAge: "65 and over (47.1%)",
    lowestValue: 47.1,
    summary: "Exceeded male participation in five out of six age groups, rising steadily from 47.7% in youth to a chart peak of 53.3% in middle age, before tapering to 47.1% among seniors.",
    band9Phrase: "“Conversely, female involvement in regular exercise consistently surpassed that of men across most brackets, reaching a peak of 53.3% in the 45-to-54 demographic.”"
  }
];

// 3. Hotspots: Key Features & Contrasts
export const ACTIVITY_HOTSPOTS: ActivityHotspot[] = [
  {
    id: "youth_inversion",
    title: "Youth Reversal: Sole Male Lead (15–24)",
    ageGroup: "15 to 24",
    maleValue: 52.8,
    femaleValue: 47.7,
    gapText: "Male lead of 5.1 percentage points",
    contrastKey: "The only age bracket where male physical activity exceeded female participation",
    band9Sentence: "“Among 15-to-24-year-olds, men registered their highest participation rate at 52.8%, outstripping their female peers (47.7%) in what was the sole demographic where male activity prevailed.”",
    keyFeature: "Only cohort where men surpassed women (52.8% vs 47.7%)."
  },
  {
    id: "widest_gap",
    title: "Widest Gender Disparity & Male Lowest Point (35–44)",
    ageGroup: "35 to 44",
    maleValue: 39.5,
    femaleValue: 52.5,
    gapText: "Female lead of 13.0 percentage points",
    contrastKey: "The largest divergence in the entire chart; male engagement hits its lowest point",
    band9Sentence: "“The divergence between sexes peaked in the 35-to-44 demographic, where a substantial 13-percentage-point gap emerged between active women (52.5%) and men, who touched their lowest recorded level of 39.5%.”",
    keyFeature: "Greatest gender divide (13.0%) and the lowest figure in the chart (39.5%)."
  },
  {
    id: "female_peak",
    title: "Overall Chart Peak (45–54 Females)",
    ageGroup: "45 to 54",
    maleValue: 43.1,
    femaleValue: 53.3,
    gapText: "Female lead of 10.2 percentage points",
    contrastKey: "The absolute highest participation rate recorded across the entire chart",
    band9Sentence: "“Women aged 45 to 54 attained the highest participation rate of the entire visual at 53.3%, closely mirrored by the 55-to-64 female demographic at precisely 53.0%.”",
    keyFeature: "Highest figure in the chart (53.3%) among middle-aged Australian women."
  },
  {
    id: "senior_convergence",
    title: "Senior Gender Convergence (65 and over)",
    ageGroup: "65 and over",
    maleValue: 46.7,
    femaleValue: 47.1,
    gapText: "Virtual parity (0.4 percentage point gap)",
    contrastKey: "Gender disparities effectively disappear in the retirement years",
    band9Sentence: "“In the senior cohort (65 and over), gender disparities virtually dissolved, with male (46.7%) and female (47.1%) participation rates converging at near-identical levels.”",
    keyFeature: "Near-total parity between elderly men and women."
  }
];

// Backward compatibility hotspots mapping
export const TASK1_HOTSPOTS: ComparisonHotspot[] = ACTIVITY_HOTSPOTS.map((h) => ({
  id: h.id,
  title: h.title,
  zone: h.ageGroup,
  normalState: `Males: ${h.maleValue}%`,
  elNinoState: `Females: ${h.femaleValue}%`,
  contrastKey: h.contrastKey,
  band9Sentence: h.band9Sentence
}));

// Backward compatibility legacy audience data
export const HOURLY_AUDIENCE_DATA: HourlyAudiencePoint[] = [
  { hour: 1, timeLabel: "15 to 24", tv: 47.7, radio: 52.8, annotation: "Youth cohort: Males 52.8%, Females 47.7%" },
  { hour: 2, timeLabel: "25 to 34", tv: 48.9, radio: 42.2, annotation: "Young adults: Females 48.9%, Males 42.2%" },
  { hour: 3, timeLabel: "35 to 44", tv: 52.5, radio: 39.5, isCrossover: true, annotation: "Widest gap: Females 52.5%, Males 39.5%" },
  { hour: 4, timeLabel: "45 to 54", tv: 53.3, radio: 43.1, isPeak: "tv", annotation: "Female peak: 53.3%, Males 43.1%" },
  { hour: 5, timeLabel: "55 to 64", tv: 53.0, radio: 45.1, annotation: "Late middle age: Females 53.0%, Males 45.1%" },
  { hour: 6, timeLabel: "65 and over", tv: 47.1, radio: 46.7, annotation: "Seniors: Females 47.1%, Males 46.7%" }
];

export const MEDIA_CHANNELS: MediaChannelInfo[] = [
  {
    id: "radio",
    name: "Australian Men (Male)",
    color: "#0f172a",
    lineStroke: "#0f172a",
    bgBadge: "rgba(15, 23, 42, 0.12)",
    peakTime: "15 to 24",
    peakValue: 52.8,
    troughTime: "35 to 44",
    troughValue: 39.5,
    summary: "Highest in youth at 52.8%, lowest in middle age at 39.5%, rebounding to 46.7% at age 65+.",
    band9Phrase: "“Men exhibited a U-shaped trajectory, peaking initially at 52.8% before dropping to 39.5% and recovering to 46.7%.”"
  },
  {
    id: "tv",
    name: "Australian Women (Female)",
    color: "#64748b",
    lineStroke: "#64748b",
    bgBadge: "rgba(100, 116, 139, 0.15)",
    peakTime: "45 to 54",
    peakValue: 53.3,
    troughTime: "65 and over",
    troughValue: 47.1,
    summary: "Exceeded men in 5 of 6 age groups, rising to peak at 53.3% between ages 45 and 54.",
    band9Phrase: "“Women maintained superior activity rates across most cohorts, reaching a peak of 53.3%.”"
  }
];

export const AUDIENCE_HOTSPOTS: AudienceHotspot[] = ACTIVITY_HOTSPOTS.map((h) => ({
  id: h.id,
  title: h.title,
  zone: "morning",
  timeRange: h.ageGroup,
  radioState: `Males: ${h.maleValue}%`,
  tvState: `Females: ${h.femaleValue}%`,
  contrastKey: h.contrastKey,
  band9Sentence: h.band9Sentence,
  keyFeature: h.keyFeature
}));

// Master Task 1 Data Object
export const TASK1_DATA: Task1Data = {
  id: "australian-physical-activity-2010",
  taskType: "IELTS Academic Writing Task 1 • Double Bar Chart",
  title: "Australian Physical Activity by Age and Gender (2010)",
  companyName: "Australian Bureau of Statistics / Cambridge IELTS",
  unit: "Percentage of Population (%)",
  questionText:
    "The bar chart below shows the percentage of Australian men and women in different age groups who did regular physical activity in 2010.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
  imageFileName: "australian_physical_activity_2010.png",
  hdImageFileName: "australian_physical_activity_2010.png",
  scanImageFileName: "australian_physical_activity_2010.png",
  audioUrl: "/audio/task1_briefing.m4a",
  audioClueText:
    "The bar chart compares regular exercise participation between Australian men and women in 2010 across six age groups. Women generally led in five age brackets, peaking at 53.3% in middle age, while men peaked only in youth at 52.8% and reached an overall low of 39.5% at mid-life before converging in retirement.",
  timingSeconds: 1200,

  sampleIntro:
    "The bar chart compares the proportions of Australian men and women across six distinct age brackets who engaged in regular physical activity in the year 2010, measured as a percentage of each demographic cohort.",

  sampleOverview:
    "Overall, Australian females generally recorded higher rates of regular physical exercise than males across most age cohorts, with the notable exception of the youngest demographic (aged 15 to 24). Additionally, while female participation peaked during mid-adulthood (ages 45 to 54), male activity exhibited a distinct dip-and-recovery trajectory, touching its lowest point among 35-to-44-year-olds before rebounding in later life, where rates for both sexes virtually converged.",

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
      youth: "Men outstrip women by 5.1% in the 15–24 demographic (52.8% vs 47.7%).",
      gap: "Widest divergence in the 35–44 cohort, where women lead by 13.0% (52.5% vs 39.5%).",
      peak: "Overall peak achieved by 45–54-year-old females at 53.3%.",
      convergence: "Both sexes reach near parity at age 65+ (Males 46.7%, Females 47.1%)."
    }
  },
  graphData: {
    hotspots: TASK1_HOTSPOTS,
    comparisonsSummary: {
      female_lead: "Females lead across 5 out of 6 cohorts (ages 25 to 64+).",
      male_trough: "Male activity hits absolute low of 39.5% at ages 35–44.",
      plateau: "Female rates plateau above 52–53% from age 35 to 64."
    }
  },

  vocabList: [
    {
      word: "Cohort / Age Bracket",
      term: "Cohort / Age Bracket",
      phonetic: "/ˈkəʊhɔːt/",
      meaning: "A specific demographic group of people sharing a statistical factor, such as age.",
      definition: "A specific demographic group of people sharing a statistical factor, such as age.",
      example: "Physical exercise was surveyed across six distinct age cohorts, ranging from youth to retirement.",
      sampleSentence: "Physical exercise was surveyed across six distinct age cohorts, ranging from youth to retirement.",
      collocations: ["demographic cohort", "age bracket", "generational cohort"]
    },
    {
      word: "Outstrip / Outpace",
      term: "Outstrip / Outpace",
      phonetic: "/aʊtˈstrɪp/",
      meaning: "To exceed, surpass, or be greater than another figure or group in percentage or number.",
      definition: "To exceed, surpass, or be greater than another figure or group in percentage or number.",
      example: "Young men outstripped their female counterparts by 5.1 percentage points in regular activity.",
      sampleSentence: "Young men outstripped their female counterparts by 5.1 percentage points in regular activity.",
      collocations: ["significantly outstrip", "outpace peers", "outstrip the national average"]
    },
    {
      word: "Counterpart",
      term: "Counterpart",
      phonetic: "/ˈkaʊntəpɑːt/",
      meaning: "A person or thing holding a corresponding position or function in another group.",
      definition: "A person or thing holding a corresponding position or function in another group.",
      example: "Australian women generally exercised more frequently than their male counterparts.",
      sampleSentence: "Australian women generally exercised more frequently than their male counterparts.",
      collocations: ["male counterparts", "female counterparts", "international counterparts"]
    },
    {
      word: "Trough / Lowest Point",
      term: "Trough / Lowest Point",
      phonetic: "/trɒf/ – /ˈləʊ.ɪst pɔɪnt/",
      meaning: "The lowest point or least active level in a statistical trend or curve.",
      definition: "The lowest point or least active level in a statistical trend or curve.",
      example: "Male participation dropped to its lowest point of 39.5% in the 35-to-44 demographic.",
      sampleSentence: "Male participation dropped to its lowest point of 39.5% in the 35-to-44 demographic.",
      collocations: ["reach a low of", "hit a trough", "lowest point recorded"]
    },
    {
      word: "Peak / Highest Point",
      term: "Peak / Highest Point",
      phonetic: "/piːk/ – /ˈhaɪ.ɪst pɔɪnt/",
      meaning: "The highest point, peak value, or maximum figure in a statistical distribution.",
      definition: "The highest point, peak value, or maximum figure in a statistical distribution.",
      example: "Female physical exercise reached its peak of 53.3% in the 45-to-54 age category.",
      sampleSentence: "Female physical exercise reached its peak of 53.3% in the 45-to-54 age category.",
      collocations: ["reach a peak of", "highest point", "attain the peak"]
    },
    {
      word: "Disparity / Divergence",
      term: "Disparity / Divergence",
      phonetic: "/dɪˈspærɪti/",
      meaning: "A noticeable and substantial difference or gap between two or more statistical figures.",
      definition: "A noticeable and substantial difference or gap between two or more statistical figures.",
      example: "The widest gender disparity was observed at mid-life, with a 13-point gap in favor of women.",
      sampleSentence: "The widest gender disparity was observed at mid-life, with a 13-point gap in favor of women.",
      collocations: ["gender disparity", "marked divergence", "wide disparity"]
    },
    {
      word: "Plateau",
      term: "Plateau",
      phonetic: "/ˈplætəʊ/",
      meaning: "To reach an elevated level and remain substantially unchanged over a period.",
      definition: "To reach an elevated level and remain substantially unchanged over a period.",
      example: "Female engagement plateaued above 52% across three consecutive age brackets from 35 to 64.",
      sampleSentence: "Female engagement plateaued above 52% across three consecutive age brackets from 35 to 64.",
      collocations: ["plateau at around", "reach a plateau", "maintain a plateau"]
    },
    {
      word: "Dip-and-Recovery Trajectory",
      term: "Dip-and-Recovery Trajectory",
      phonetic: "/dɪp ænd rɪˈkʌvəri/",
      meaning: "A U-shaped pattern marked by an initial decline followed by a subsequent rebound.",
      definition: "A U-shaped pattern marked by an initial decline followed by a subsequent rebound.",
      example: "Men followed a dip-and-recovery trajectory, declining from youth to mid-life before ascending.",
      sampleSentence: "Men followed a dip-and-recovery trajectory, declining from youth to mid-life before ascending.",
      collocations: ["dip-and-recovery pattern", "curved trajectory", "exhibit a trajectory"]
    },
    {
      word: "Convergence / Virtual Parity",
      term: "Convergence / Virtual Parity",
      phonetic: "/kənˈvɜːdʒəns/",
      meaning: "The condition of approaching and achieving near-identical numerical levels.",
      definition: "The condition of approaching and achieving near-identical numerical levels.",
      example: "In the 65-and-over cohort, male and female figures reached virtual parity at 46.7% and 47.1%.",
      sampleSentence: "In the 65-and-over cohort, male and female figures reached virtual parity at 46.7% and 47.1%.",
      collocations: ["reach virtual parity", "near convergence", "converge at roughly"]
    },
    {
      word: "Demographic",
      term: "Demographic",
      phonetic: "/ˌdɛməˈɡræfɪk/",
      meaning: "A particular sector of a population categorized by age, gender, or social characteristics.",
      definition: "A particular sector of a population categorized by age, gender, or social characteristics.",
      example: "Participation rates varied markedly according to demographic group and gender.",
      sampleSentence: "Participation rates varied markedly according to demographic group and gender.",
      collocations: ["demographic group", "senior demographic", "target demographic"]
    },
    {
      word: "Rebound",
      term: "Rebound",
      phonetic: "/rɪˈbaʊnd/",
      meaning: "To bounce back or recover upward following a prior reduction or slump.",
      definition: "To bounce back or recover upward following a prior reduction or slump.",
      example: "Following a mid-life low, male activity rates rebounded steadily into senior years.",
      sampleSentence: "Following a mid-life low, male activity rates rebounded steadily into senior years.",
      collocations: ["stage a rebound", "rebound to 46.7%", "progressive rebound"]
    },
    {
      word: "Commence",
      term: "Commence",
      phonetic: "/kəˈmɛns/",
      meaning: "To begin, initiate, or start at a given statistical baseline.",
      definition: "To begin, initiate, or start at a given statistical baseline.",
      example: "Female activity commenced at 47.7% in the youngest bracket before escalating steadily.",
      sampleSentence: "Female activity commenced at 47.7% in the youngest bracket before escalating steadily.",
      collocations: ["commence at", "commence with", "initial commencement"]
    }
  ],

  vocabHunt: [
    "cohort",
    "outstrip",
    "counterpart",
    "lowest point",
    "peak",
    "disparity",
    "plateau",
    "trajectory",
    "convergence",
    "rebound",
    "parity",
    "demographic"
  ],

  bp1: {
    title: "Body Paragraph 1: Female Physical Activity Trajectory & Mid-Life Dominance",
    focus: "Female participation across all 6 age cohorts (from 47.7% to peak of 53.3% and drop to 47.1%)",
    points: [
      "Commencement at 47.7% in the 15-to-24 cohort",
      "Steady climb through 25–34 (48.9%) and 35–44 (52.5%)",
      "Chart peak achieved in the 45-to-54 category at 53.3%",
      "Sustained plateau in 55-to-64 demographic at 53.0%",
      "Marked decline in the 65-and-over cohort, receding to 47.1%"
    ],
    flow: [
      "1. Baseline start: 47.7% in youngest females",
      "2. Steady ascent: 48.9% (25–34) → 52.5% (35–44)",
      "3. Global chart peak: 53.3% in 45–54 age bracket",
      "4. Elevated plateau: 53.0% in 55–64 bracket",
      "5. Late decline: drop to 47.1% among senior women"
    ],
    takeaways: [
      "Women recorded the single highest figure in the entire bar chart (53.3%).",
      "Women led in 5 out of 6 age groups, sustaining a high plateau between ages 35 and 64."
    ]
  },

  bp2: {
    title: "Body Paragraph 2: Male U-Shaped Trajectory & Gender Contrasts",
    focus: "Male participation, youth peak (52.8%), mid-life slump (39.5%), recovery, and 65+ parity",
    points: [
      "Youth peak at 52.8% (15–24), outstripping females by 5.1 percentage points (sole male lead)",
      "Sharp drop to 42.2% (25–34) and lowest point of 39.5% (35–44)",
      "Widest disparity in 35–44 bracket: 13.0 percentage points behind women (39.5% vs 52.5%)",
      "Progressive rebound: 43.1% (45–54) and 45.1% (55–64)",
      "Senior convergence: 46.7% at age 65+, virtually matching women (47.1%)"
    ],
    flow: [
      "1. Male peak in youth: 52.8% among 15–24-year-olds (+5.1% over females)",
      "2. Sharp drop: slump to 42.2% and lowest point of 39.5% in 35–44 group",
      "3. Widest divergence highlighted: 13.0% gap between sexes at mid-life",
      "4. Multi-decade recovery: rising through 43.1% and 45.1%",
      "5. Final parity: convergence at 46.7% and 47.1% among seniors"
    ],
    takeaways: [
      "Men were only more active than women in the youngest group (15–24).",
      "By retirement (65+), the activity rates for both genders converged to near equality."
    ]
  },

  processingGroups: [
    {
      title: "Group 1: Comparative Structures & Margin Reporting",
      items: [
        "outstripping their female peers by 5.1 percentage points (52.8% vs 47.7%)",
        "in sharp contrast to young men, females recorded...",
        "whereas their male counterparts slumped to...",
        "comfortably outpacing men across five out of six age cohorts"
      ]
    },
    {
      title: "Group 2: Extremes, Plateaus & Trajectories",
      items: [
        "reaching a peak of 53.3% among women aged 45 to 54",
        "touching the lowest point in the chart of 39.5% in the 35–44 male bracket",
        "following a distinct dip-and-recovery trajectory throughout adulthood",
        "maintaining an elevated plateau above 52% across mid-life"
      ]
    },
    {
      title: "Group 3: Disparity & Parity Markers",
      items: [
        "generating the widest gender disparity of 13.0 percentage points",
        "reaching virtual parity in the 65-and-over cohort (46.7% vs 47.1%)",
        "gender differences effectively dissolved in retirement",
        "with the sole exception of the 15-to-24 demographic"
      ]
    }
  ],

  connectors: [
    {
      phrase: "In sharp contrast to... / Conversely,",
      purpose: "Introducing contrasting gender trajectories between men and women",
      example: "In sharp contrast to young women, Australian men recorded their highest activity in youth."
    },
    {
      phrase: "Outstripping... by [X] percentage points,",
      purpose: "Quantifying comparative margins with grammatical precision",
      example: "Young men outstripped their female counterparts by 5.1 percentage points (52.8% vs 47.7%)."
    },
    {
      phrase: "Thereafter, / Subsequently,",
      purpose: "Signaling chronological progression across successive age brackets",
      example: "Thereafter, male participation slumped to 42.2% among 25-to-34-year-olds."
    },
    {
      phrase: "Reaching a peak of... / Dropping to a lowest point of...",
      purpose: "Attributing peak and lowest statistical values with high lexical precision",
      example: "Female exercise reached a peak of 53.3%, whereas males dropped to a low of 39.5%."
    },
    {
      phrase: "Generating the widest disparity / A 13-point gap emerged",
      purpose: "Spotlighting the maximum gap between the two series",
      example: "The 35-to-44 bracket witnessed the widest divergence, generating a 13-point disparity."
    },
    {
      phrase: "Converging at near-identical levels / Reaching virtual parity",
      purpose: "Reporting statistical convergence in the final senior demographic",
      example: "In the 65-and-over cohort, both sexes reached virtual parity at 46.7% and 47.1%."
    }
  ],

  modelReport: {
    wordCount: 188,
    paragraphs: [
      {
        id: "intro",
        title: "Introduction",
        text: "The bar chart compares the proportions of Australian men and women across six distinct age brackets who engaged in regular physical activity in the year 2010, measured as a percentage of each demographic cohort.",
        wordCount: 34,
        badges: ["Band 9 Paraphrase", "Scale of Measurement Included (%)", "Demographic & Temporal Scope"]
      },
      {
        id: "overview",
        title: "Overview",
        text: "Overall, Australian females generally recorded higher rates of regular physical exercise than males across most age cohorts, with the notable exception of the youngest demographic (aged 15 to 24). Additionally, while female participation peaked during mid-adulthood (ages 45 to 54), male activity exhibited a distinct dip-and-recovery trajectory, touching its lowest point among 35-to-44-year-olds before rebounding in later life, where rates for both sexes virtually converged.",
        wordCount: 65,
        badges: ["3-Pillar Macro Summary", "Overall Female Lead", "Male U-Shape & Senior Convergence"]
      },
      {
        id: "body1",
        title: "Body 1: Female Trajectory & Mid-Life Dominance",
        text: "Focusing first on females, regular exercise commenced at 47.7% among those aged 15 to 24, before progressing steadily through the 25–34 (48.9%) and 35–44 (52.5%) age brackets. Physical activity reached its peak among women aged 45 to 54 at 53.3%, representing the highest figure in the entire chart. This elevated participation was sustained in the 55-to-64 demographic at precisely 53.0%. However, female involvement experienced a noticeable decline among seniors aged 65 and over, receding to 47.1%.",
        wordCount: 74,
        badges: ["Initial 47.7% Baseline", "Peak Rate at 53.3%", "Senior Decline to 47.1%"]
      },
      {
        id: "body2",
        title: "Body 2: Male U-Shaped Trend & Cross-Gender Comparisons",
        text: "In sharp contrast, Australian men recorded their peak physical activity in the youngest cohort (15 to 24) at 52.8%, outstripping young females by 5.1 percentage points. Thereafter, male participation slumped to 42.2% among 25-to-34-year-olds and dropped to its lowest point of 39.5% in the 35-to-44 bracket, generating the widest gender divergence of 13.0%. Nevertheless, male exercise figures staged a steady rebound across the older demographics, rising through 43.1% (ages 45 to 54) and 45.1% (ages 55 to 64), ultimately reaching 46.7% in the 65-and-over cohort to virtually match their female counterparts (47.1%).",
        wordCount: 89,
        badges: ["Sole Male Lead (52.8%)", "Male Lowest Point (39.5%)", "Rebound to Senior Parity"]
      }
    ]
  }
};
