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
  ProfessionWorkloadStress
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
  ProfessionWorkloadStress
};

// ==========================================
// 1. PROFESSIONS WORKLOAD & STRESS DATA
// ==========================================

export const PROFESSIONS_DATA: ProfessionWorkloadStress[] = [
  {
    id: "business-men",
    profession: "Business men",
    hoursWorked: 70,
    stressPercentage: 11,
    hoursRank: 1,
    stressRank: 4,
    color: "#ec4899",
    notableFeature: "Highest weekly hours (70 hrs/week), yet only 11% of stress sufferers.",
    band9Sentence:
      "“Business men logged the longest workweek by a considerable margin at 70 hours, yet accounted for only 11% of stress-related illnesses.”"
  },
  {
    id: "movie-producers",
    profession: "Movie Producers",
    hoursWorked: 60,
    stressPercentage: 25,
    hoursRank: 2,
    stressRank: 1,
    color: "#0284c7",
    notableFeature: "Second longest hours (60 hrs/week) and the undisputed leader in stress illness (25% - one in four).",
    band9Sentence:
      "“Movie producers represented a full quarter (25%) of all stress-related illness cases, while working the second longest hours at 60 per week.”"
  },
  {
    id: "doctors",
    profession: "Doctors",
    hoursWorked: 52,
    stressPercentage: 15,
    hoursRank: 3,
    stressRank: 3,
    color: "#e11d48",
    notableFeature: "Worked 52 hours per week and constituted 15% of those suffering from stress-related ailments.",
    band9Sentence:
      "“Doctors worked an average of 52 hours weekly and made up 15% of individuals suffering from stress-induced conditions.”"
  },
  {
    id: "writers",
    profession: "Writers",
    hoursWorked: 45,
    stressPercentage: 8,
    hoursRank: 4,
    stressRank: 6,
    color: "#16a34a",
    notableFeature: "Worked 45 hours per week and tied with lawyers at 8% of stress-related illness.",
    band9Sentence:
      "“Writers averaged 45 hours on the job each week and shared an identical 8% stress illness proportion with lawyers.”"
  },
  {
    id: "programmers",
    profession: "Programmers",
    hoursWorked: 40,
    stressPercentage: 5,
    hoursRank: 5,
    stressRank: 8,
    color: "#10b981",
    notableFeature: "Standard 40-hour workweek with the lowest recorded stress percentage at just 5%.",
    band9Sentence:
      "“Programmers completed a standard 40-hour workweek and registered the lowest incidence of stress-related illness at merely 5%.”"
  },
  {
    id: "lawyers",
    profession: "Lawyers",
    hoursWorked: 35,
    stressPercentage: 8,
    hoursRank: 6,
    stressRank: 6,
    color: "#6366f1",
    notableFeature: "Worked 35 hours per week with 8% suffering from stress illness.",
    band9Sentence:
      "“Lawyers worked an average of 35 hours weekly, contributing 8% to the total cohort of stress sufferers.”"
  },
  {
    id: "chefs",
    profession: "Chefs",
    hoursWorked: 30,
    stressPercentage: 10,
    hoursRank: 7,
    stressRank: 5,
    color: "#f59e0b",
    notableFeature: "Worked 30 hours per week and accounted for a tenth (10%) of stress illness sufferers.",
    band9Sentence:
      "“Chefs recorded an average of 30 hours of work per week and represented exactly one-tenth of stress-related illness cases.”"
  },
  {
    id: "lecturers",
    profession: "Lecturers",
    hoursWorked: 25,
    stressPercentage: 18,
    hoursRank: 8,
    stressRank: 2,
    color: "#0d9488",
    notableFeature: "Major Paradox: Worked the fewest hours (25 hrs/week), yet suffered the second highest stress level (18%).",
    band9Sentence:
      "“In stark contrast to working the shortest workweek at just 25 hours, lecturers made up the second largest proportion of stress sufferers at 18%.”"
  }
];

// Compatibility shims
export const SPENDING_CATEGORIES: SpendingCategoryItem[] = [];
export const SPENDING_YEARS: SchoolSpendingYearData[] = [];
export const SPENDING_HOTSPOTS: SpendingHotspot[] = [];
export const CEMENT_PROCESS_STAGES: ProcessStageItem[] = [];
export const CONCRETE_INGREDIENTS: ConcreteIngredientItem[] = [];

// ==========================================
// 2. MASTER TASK 1 DATA OBJECT (DUAL CHART)
// ==========================================

export const TASK1_DATA: Task1Data = {
  id: "hours-worked-stress-levels-eight-occupations",
  taskType: "IELTS Academic Writing Task 1 • Dual Bar & Pie Chart Analysis",
  title: "Hours Worked and Stress Levels in Eight Occupations",
  companyName: "Cambridge IELTS Academic Writing Task 1",
  unit: "Hours per week (Bar Chart) & Proportion of Stress-Related Illness (%) (Pie Chart)",
  questionText:
    "The graphs show figures relating to hours worked and stress levels amongst professionals in eight groups.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
  imageFileName: "materials/hours_worked_stress_levels.jpg",
  hdImageFileName: "materials/hours_worked_stress_levels.jpg",
  scanImageFileName: "materials/hours_worked_stress_levels.jpg",
  audioUrl: "materials/Taxation_and_Public_Services_Briefing.m4a",
  audioClueText:
    "The bar chart compares weekly hours worked across eight professions, led by business men at 70 hours and movie producers at 60 hours, with lecturers working the fewest at 25 hours. The pie chart displays stress-related illness, where movie producers suffer the highest rate at 25% and lecturers paradoxically rank second at 18%.",
  timingSeconds: 1200,

  sampleIntro:
    "The bar chart and pie chart illustrate the average weekly working hours and the proportion of individuals suffering from stress-related illnesses across eight professional occupations.",

  sampleOverview:
    "Overall, business men committed the longest hours per week by a considerable margin, whereas lecturers logged the fewest hours. However, working time did not correlate directly with stress-related conditions; movie producers and lecturers constituted the two largest segments of stress sufferers, while programmers recorded the lowest prevalence of stress-induced illnesses.",

  professionData: PROFESSIONS_DATA,
  formats: [],
  countries: [],

  diagramData: {
    hotspots: PROFESSIONS_DATA.map((p) => ({
      id: p.id,
      title: p.profession,
      zone: `${p.hoursWorked} hrs/wk • ${p.stressPercentage}% stress`,
      normalState: `Hours Rank: #${p.hoursRank} (${p.hoursWorked}h)`,
      elNinoState: `Stress Rank: #${p.stressRank} (${p.stressPercentage}%)`,
      contrastKey: p.notableFeature,
      band9Sentence: p.band9Sentence
    })),
    comparisonsSummary: {
      highest_hours: "Business men logged the longest workweek at 70 hours.",
      highest_stress: "Movie producers experienced the greatest stress burden at 25%.",
      lecturer_paradox: "Lecturers worked the least (25 hours) but suffered the second highest stress level (18%).",
      lowest_stress: "Programmers recorded the lowest stress rate at just 5% with a standard 40-hour week."
    }
  },
  graphData: {
    hotspots: PROFESSIONS_DATA.map((p) => ({
      id: p.id,
      title: p.profession,
      zone: `${p.hoursWorked} hrs/wk • ${p.stressPercentage}% stress`,
      normalState: `Hours: ${p.hoursWorked} hrs`,
      elNinoState: `Stress: ${p.stressPercentage}%`,
      contrastKey: p.notableFeature,
      band9Sentence: p.band9Sentence
    })),
    comparisonsSummary: {
      hours_vs_stress: "Long working hours did not guarantee high stress levels, as seen in the contrast between business men and lecturers."
    }
  },

  vocabList: [
    {
      word: "Stress-Related Illness",
      term: "Stress-Related Illness",
      phonetic: "/stres rɪˈleɪtɪd ˈɪlnəs/",
      meaning: "Medical conditions or ailments triggered or exacerbated by occupational tension and pressure.",
      definition: "Medical conditions or ailments triggered or exacerbated by occupational tension and pressure.",
      example: "Movie producers accounted for a quarter of all individuals suffering from stress-related illness.",
      sampleSentence: "Movie producers accounted for a quarter of all individuals suffering from stress-related illness.",
      collocations: ["suffer from stress-related illness", "incidence of stress-related illness", "stress-induced conditions"]
    },
    {
      word: "Log Hours",
      term: "Log Hours",
      phonetic: "/lɒɡ ˈaʊərz/",
      meaning: "To work, record, or complete a specific number of working hours.",
      definition: "To work, record, or complete a specific number of working hours.",
      example: "Business men logged an average of 70 hours per week, far exceeding all other professions.",
      sampleSentence: "Business men logged an average of 70 hours per week, far exceeding all other professions.",
      collocations: ["log substantial hours", "logged the longest workweek", "log on the job"]
    },
    {
      word: "In Marked Contrast",
      term: "In Marked Contrast",
      phonetic: "/ɪn mɑːkt ˈkɒntrɑːst/",
      meaning: "Emphasizing a clear, sharp, and unmistakable difference between two data points.",
      definition: "Emphasizing a clear, sharp, and unmistakable difference between two data points.",
      example: "In marked contrast to business men, lecturers spent just 25 hours per week at work.",
      sampleSentence: "In marked contrast to business men, lecturers spent just 25 hours per week at work.",
      collocations: ["in marked contrast to", "marked contrast between", "stands in marked contrast"]
    },
    {
      word: "Account For a Quarter",
      term: "Account For a Quarter",
      phonetic: "/əˈkaʊnt fɔːr ə ˈkwɔːtər/",
      meaning: "To comprise or represent exactly 25% of a whole dataset.",
      definition: "To comprise or represent exactly 25% of a whole dataset.",
      example: "Movie producers accounted for a quarter (25%) of all reported stress cases.",
      sampleSentence: "Movie producers accounted for a quarter (25%) of all reported stress cases.",
      collocations: ["account for a quarter of the total", "constitute a quarter", "represent one in four"]
    },
    {
      word: "Paradoxical Disparity",
      term: "Paradoxical Disparity",
      phonetic: "/ˌpærəˈdɒksɪkl dɪˈspærəti/",
      meaning: "A surprising contradiction where reality contradicts logical expectation.",
      definition: "A surprising contradiction where reality contradicts logical expectation.",
      example: "A paradoxical disparity exists for lecturers, who worked the fewest hours yet suffered high stress.",
      sampleSentence: "A paradoxical disparity exists for lecturers, who worked the fewest hours yet suffered high stress.",
      collocations: ["paradoxical disparity", "apparent paradox", "contradictory pattern"]
    },
    {
      word: "Standard Workweek",
      term: "Standard Workweek",
      phonetic: "/ˈstændəd ˈwɜːkwiːk/",
      meaning: "The typical baseline of employment time, conventionally 40 hours per week.",
      definition: "The typical baseline of employment time, conventionally 40 hours per week.",
      example: "Programmers maintained a standard 40-hour workweek with the lowest stress levels.",
      sampleSentence: "Programmers maintained a standard 40-hour workweek with the lowest stress levels.",
      collocations: ["standard workweek", "conventional 40-hour workweek", "standard working baseline"]
    },
    {
      word: "By a Considerable Margin",
      term: "By a Considerable Margin",
      phonetic: "/baɪ ə kənˈsɪdərəbl ˈmɑːdʒɪn/",
      meaning: "By a noticeable, significant, and undeniable difference in quantity.",
      definition: "By a noticeable, significant, and undeniable difference in quantity.",
      example: "Business men outworked all other professions by a considerable margin.",
      sampleSentence: "Business men outworked all other professions by a considerable margin.",
      collocations: ["lead by a considerable margin", "surpass by a considerable margin", "differ by a margin"]
    },
    {
      word: "Prevalence",
      term: "Prevalence",
      phonetic: "/ˈprevələns/",
      meaning: "The proportion or frequency of a condition found to affect a particular population.",
      definition: "The proportion or frequency of a condition found to affect a particular population.",
      example: "The prevalence of stress illness was lowest among programmers at only 5%.",
      sampleSentence: "The prevalence of stress illness was lowest among programmers at only 5%.",
      collocations: ["prevalence of stress illness", "lowest prevalence", "high prevalence rate"]
    },
    {
      word: "Opposite End of the Spectrum",
      term: "Opposite End of the Spectrum",
      phonetic: "/ˈɒpəzɪt end əv ðə ˈspektrəm/",
      meaning: "Occupying the diametrically extreme lowest or highest position in a comparison.",
      definition: "Occupying the diametrically extreme lowest or highest position in a comparison.",
      example: "At the opposite end of the spectrum, lecturers recorded only 25 hours per week.",
      sampleSentence: "At the opposite end of the spectrum, lecturers recorded only 25 hours per week.",
      collocations: ["at the opposite end of the spectrum", "opposite extreme", "polar opposite"]
    },
    {
      word: "Direct Correlation",
      term: "Direct Correlation",
      phonetic: "/daɪˈrekt ˌkɒrəˈleɪʃn/",
      meaning: "A mutual relationship where an increase in one variable corresponds to an increase in another.",
      definition: "A mutual relationship where an increase in one variable corresponds to an increase in another.",
      example: "There was no direct correlation between long working hours and the percentage of stress sufferers.",
      sampleSentence: "There was no direct correlation between long working hours and the percentage of stress sufferers.",
      collocations: ["direct correlation between", "positive correlation", "lack of direct correlation"]
    },
    {
      word: "Identical Proportion",
      term: "Identical Proportion",
      phonetic: "/aɪˈdentɪkl prəˈpɔːʃn/",
      meaning: "Sharing the exact same percentage or numerical share as another group.",
      definition: "Sharing the exact same percentage or numerical share as another group.",
      example: "Writers and lawyers accounted for an identical proportion of stress illness at 8% each.",
      sampleSentence: "Writers and lawyers accounted for an identical proportion of stress illness at 8% each.",
      collocations: ["share an identical proportion", "identical share of 8%", "equal proportions"]
    },
    {
      word: "Constitutes the Smallest Segment",
      term: "Constitutes the Smallest Segment",
      phonetic: "/ˈkɒnstɪtjuːts ðə ˈsmɔːlɪst ˈseɡmənt/",
      meaning: "Forms the lowest fraction or slice in a comparative breakdown.",
      definition: "Forms the lowest fraction or slice in a comparative breakdown.",
      example: "At merely 5%, programmers constituted the smallest segment of the pie chart.",
      sampleSentence: "At merely 5%, programmers constituted the smallest segment of the pie chart.",
      collocations: ["constitute the smallest segment", "form the smallest portion", "minimal segment"]
    }
  ],

  vocabHunt: [
    "stress-related illness",
    "log hours",
    "in marked contrast",
    "account for a quarter",
    "paradoxical disparity",
    "standard workweek",
    "by a considerable margin",
    "prevalence",
    "opposite end of the spectrum",
    "direct correlation",
    "identical proportion",
    "smallest segment"
  ],

  bp1: {
    title: "Body 1: Weekly Hours Worked (The Bar Chart Breakdown)",
    focus: "Report and rank working hours from longest (business men & movie producers) down to shortest (chefs & lecturers).",
    points: [
      "Business men worked the longest week of all professions at 70 hours.",
      "Movie producers and doctors followed with 60 and 52 hours per week respectively.",
      "Writers averaged 45 hours, while programmers completed a standard 40-hour workweek.",
      "Lawyers (35 hours) and chefs (30 hours) worked noticeably less, with lecturers recording the lowest figure at 25 hours."
    ]
  },

  bp2: {
    title: "Body 2: Stress-Related Illness (The Pie Chart & Key Contrasts)",
    focus: "Report the pie chart percentages and highlight the central paradoxes (movie producers 25%, lecturers 18% vs business men 11%).",
    points: [
      "Movie producers constituted a quarter (25%) of all stress illness sufferers, forming the largest single group.",
      "Paradoxically, lecturers represented the second highest proportion at 18%, despite logging the fewest hours.",
      "Doctors made up 15%, while business men accounted for 11% despite their 70-hour workweek.",
      "Chefs comprised 10%, writers and lawyers shared an identical 8%, and programmers had the lowest rate at 5%."
    ]
  },

  processingGroups: [
    {
      title: "1. Workweek Leaders (50–70 Hours)",
      items: [
        "Business men: 70 hours (Peak of entire bar chart)",
        "Movie Producers: 60 hours (Second longest)",
        "Doctors: 52 hours (Exceeding 50 hours)"
      ]
    },
    {
      title: "2. Mid-Tier Workloads (35–45 Hours)",
      items: [
        "Writers: 45 hours (Moderate overtime)",
        "Programmers: 40 hours (Standard baseline)",
        "Lawyers: 35 hours (Sub-40 hours)"
      ]
    },
    {
      title: "3. Shortest Workweeks (25–30 Hours)",
      items: [
        "Chefs: 30 hours per week",
        "Lecturers: 25 hours (Lowest across all 8 groups)"
      ]
    },
    {
      title: "4. Stress Illness Outliers (Pie Chart)",
      items: [
        "Movie Producers: 25% (1 in 4 stress cases - Highest)",
        "Lecturers: 18% (2nd Highest despite lowest hours!)",
        "Doctors (15%) & Business men (11%)",
        "Chefs (10%), Writers & Lawyers (8% each)",
        "Programmers: 5% (Lowest stress rate)"
      ]
    }
  ],

  connectors: [
    {
      phrase: "Regarding weekly working hours,...",
      purpose: "Category Transition Marker for Chart 1",
      example: "Regarding weekly working hours, business men were the clear leaders, logging 70 hours per week."
    },
    {
      phrase: "Turning to stress-related illness,...",
      purpose: "Category Transition Marker for Chart 2",
      example: "Turning to stress-related illness, movie producers accounted for a quarter of all cases."
    },
    {
      phrase: "In marked contrast,...",
      purpose: "Sharp Comparative Pivot",
      example: "In marked contrast to business men, lecturers spent just 25 hours per week at work."
    },
    {
      phrase: "..., standing at X and Y respectively.",
      purpose: "Orderly Multiple Data Reporting",
      example: "Movie producers and doctors followed, standing at 60 and 52 hours respectively."
    },
    {
      phrase: "Remarkably,... / Paradoxically,...",
      purpose: "Counter-Intuitive Trend Marker",
      example: "Remarkably, lecturers constituted the second highest proportion at 18%, despite working the shortest workweek."
    },
    {
      phrase: "At the opposite end of the spectrum,...",
      purpose: "Bottom-Rank Reporting Marker",
      example: "At the opposite end of the spectrum, programmers represented the lowest share of stress sufferers at merely 5%."
    }
  ],

  modelReport: {
    wordCount: 216,
    paragraphs: [
      {
        id: "intro",
        title: "Introduction: Dual Visual Scope & Parameter Paraphrase",
        text: "The bar chart and pie chart illustrate the average weekly working hours and the proportion of individuals suffering from stress-related illnesses across eight professional occupations.",
        wordCount: 24,
        badges: ["Paraphrase", "Bar & Pie Charts", "8 Occupations", "Hours & Stress Levels"]
      },
      {
        id: "overview",
        title: "Macro Overview: Key Trends & Central Paradox (NO NUMBERS)",
        text: "Overall, business men committed the longest hours per week by a considerable margin, whereas lecturers logged the fewest hours. However, working time did not correlate directly with stress-related conditions; movie producers and lecturers constituted the two largest segments of stress sufferers, while programmers recorded the lowest prevalence of stress-induced illnesses.",
        wordCount: 52,
        badges: ["Macro Trends", "Zero Numerical Figures", "Hours Peak (Business men)", "Lecturer & Producer Stress Lead"]
      },
      {
        id: "body1",
        title: "Body Paragraph 1: Weekly Hours Worked (Bar Chart Analysis)",
        text: "Regarding weekly working hours, business men were the clear leaders, logging 70 hours per week, followed by movie producers and doctors at 60 and 52 hours respectively. Writers worked an average of 45 hours, while programmers completed a standard 40-hour workweek. In contrast, lawyers and chefs spent noticeably less time on the job, recording 35 and 30 hours respectively. Finally, lecturers worked the fewest hours among all surveyed professions at just 25 hours per week.",
        wordCount: 69,
        badges: ["Top Tier (70h & 60h)", "Mid Tier (52h, 45h, 40h)", "Lower Tier (35h, 30h, 25h)"]
      },
      {
        id: "body2",
        title: "Body Paragraph 2: Stress-Related Illness & Correlations (Pie Chart Analysis)",
        text: "Turning to stress-related illness, movie producers accounted for a quarter (25%) of all cases, representing the largest single category. Remarkably, lecturers constituted the second highest proportion at 18%, despite working the shortest workweek. Doctors formed 15% of the total, while business men made up 11%, even though they had the highest working hours. Chefs accounted for 10%, while writers and lawyers each contributed an identical 8%. Lastly, programmers represented the lowest share of stress sufferers at merely 5%.",
        wordCount: 71,
        badges: ["Producer Lead (25%)", "Lecturer Paradox (18%)", "Business Men Contrast (11%)", "Programmer Minimum (5%)"]
      }
    ]
  }
};
