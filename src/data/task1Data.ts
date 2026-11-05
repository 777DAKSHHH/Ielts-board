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
// 1. CONSUMER SPENDING TABLE DATA (2002)
// ==========================================

export interface ConsumerSpendingCountryRow {
  id: string;
  country: string;
  foodDrinkTobacco: number; // Percentage
  clothingFootwear: number;
  leisureEducation: number;
  totalSpending?: number;
  foodRank: number;
  clothingRank: number;
  leisureRank: number;
  notableFeature: string;
  band9Sentence: string;
}

export const CONSUMER_SPENDING_ROWS: ConsumerSpendingCountryRow[] = [
  {
    id: "turkey",
    country: "Turkey",
    foodDrinkTobacco: 32.14,
    clothingFootwear: 6.63,
    leisureEducation: 4.35,
    foodRank: 1,
    clothingRank: 2,
    leisureRank: 1,
    notableFeature: "Highest overall spender on Food (32.14%) and Leisure/Education (4.35%)",
    band9Sentence:
      "“Turkey allocated nearly a third of all consumer expenditure to food, drinks, and tobacco (32.14%), representing the highest single proportion in the entire table, while also leading the leisure and education sector at 4.35%.”"
  },
  {
    id: "ireland",
    country: "Ireland",
    foodDrinkTobacco: 28.91,
    clothingFootwear: 6.43,
    leisureEducation: 2.21,
    foodRank: 2,
    clothingRank: 4,
    leisureRank: 4,
    notableFeature: "Second highest food spending (28.91%), but modest leisure allocation (2.21%)",
    band9Sentence:
      "“Ireland followed closely behind Turkey in sustenance spending, with 28.91% of consumer budgets directed towards food, drink, and tobacco.”"
  },
  {
    id: "spain",
    country: "Spain",
    foodDrinkTobacco: 18.80,
    clothingFootwear: 6.51,
    leisureEducation: 1.98,
    foodRank: 3,
    clothingRank: 3,
    leisureRank: 5,
    notableFeature: "Lowest leisure/education spending in entire table (1.98%), moderate food (18.80%)",
    band9Sentence:
      "“Spanish expenditure on food stood at 18.80%, while its spending on leisure and education was the lowest recorded in the entire table at just 1.98%.”"
  },
  {
    id: "italy",
    country: "Italy",
    foodDrinkTobacco: 16.36,
    clothingFootwear: 9.00,
    leisureEducation: 3.20,
    foodRank: 4,
    clothingRank: 1,
    leisureRank: 3,
    notableFeature: "Clear leader in Clothing & Footwear (9.00%), outspending all other nations",
    band9Sentence:
      "“Italy was the undisputed leader in clothing and footwear expenditure at exactly 9.00%, outstripping all other surveyed countries by a noticeable margin.”"
  },
  {
    id: "sweden",
    country: "Sweden",
    foodDrinkTobacco: 15.77,
    clothingFootwear: 5.40,
    leisureEducation: 3.22,
    foodRank: 5,
    clothingRank: 5,
    leisureRank: 2,
    notableFeature: "Lowest proportion on Food (15.77%) and Clothing (5.40%), but second in Leisure (3.22%)",
    band9Sentence:
      "“Sweden registered the lowest spending figures for both sustenance (15.77%) and clothing (5.40%), yet allocated a comparatively healthy 3.22% to leisure and education.”"
  }
];

export interface ConsumerSpendingCategorySummary {
  id: "food" | "clothing" | "leisure";
  title: string;
  shortLabel: string;
  rangeText: string;
  highestCountry: string;
  highestVal: number;
  lowestCountry: string;
  lowestVal: number;
  color: string;
  macroRole: string;
  band9OverviewClause: string;
}

export const CONSUMER_CATEGORIES: ConsumerSpendingCategorySummary[] = [
  {
    id: "food",
    title: "Food / Drink / Tobacco",
    shortLabel: "Food & Sustenance",
    rangeText: "15.77% – 32.14%",
    highestCountry: "Turkey (32.14%)",
    highestVal: 32.14,
    lowestCountry: "Sweden (15.77%)",
    lowestVal: 15.77,
    color: "#2563eb",
    macroRole: "Overwhelmingly dominant expenditure category across all five nations",
    band9OverviewClause: "Food, drinks, and tobacco accounted for the largest proportion of consumer expenditure across all five surveyed nations."
  },
  {
    id: "clothing",
    title: "Clothing / Footwear",
    shortLabel: "Clothing & Footwear",
    rangeText: "5.40% – 9.00%",
    highestCountry: "Italy (9.00%)",
    highestVal: 9.00,
    lowestCountry: "Sweden (5.40%)",
    lowestVal: 5.40,
    color: "#d97706",
    macroRole: "Second highest spending category in every single nation",
    band9OverviewClause: "Clothing and footwear consistently represented the second highest category of spending, led by Italy."
  },
  {
    id: "leisure",
    title: "Leisure / Education",
    shortLabel: "Leisure & Education",
    rangeText: "1.98% – 4.35%",
    highestCountry: "Turkey (4.35%)",
    highestVal: 4.35,
    lowestCountry: "Spain (1.98%)",
    lowestVal: 1.98,
    color: "#059669",
    macroRole: "Consistently the lowest expenditure share throughout all countries",
    band9OverviewClause: "Leisure and education consistently accounted for the lowest share of consumer spending throughout."
  }
];

// Backward compatibility shims
export const SPENDING_CATEGORIES: SpendingCategoryItem[] = [
  {
    id: "teachers_salaries",
    label: "Food/ Drink/ Tobacco (Dominant Category)",
    shortLabel: "Food (15.77% – 32.14%)",
    color: "#2563eb",
    group: "staff",
    y1981: 15.77,
    y1991: 22.8,
    y2001: 32.14,
    netChange: 16.37,
    trendType: "peak_dip",
    trendDescription: "Turkey (32.14%) and Ireland (28.91%) lead sustenance spending.",
    band9Phrase: "“Food, drink, and tobacco constituted the largest share of consumer expenditure in all five nations.”"
  },
  {
    id: "other_workers_salaries",
    label: "Clothing/ Footwear (Secondary Category)",
    shortLabel: "Clothing (5.40% – 9.00%)",
    color: "#d97706",
    group: "staff",
    y1981: 5.4,
    y1991: 6.8,
    y2001: 9.0,
    netChange: 3.6,
    trendType: "continuous_fall",
    trendDescription: "Italy (9.00%) allocated the highest proportion to clothing, with Sweden lowest (5.40%).",
    band9Phrase: "“Italy stood out as the largest spender on clothing and footwear at exactly 9.00%.”"
  },
  {
    id: "furniture_and_equipment",
    label: "Leisure/ Education (Minority Category)",
    shortLabel: "Leisure (1.98% – 4.35%)",
    color: "#059669",
    group: "non_staff",
    y1981: 1.98,
    y1991: 3.0,
    y2001: 4.35,
    netChange: 2.37,
    trendType: "fluctuated_surge",
    trendDescription: "Leisure and education accounted for the smallest portion in every country, never exceeding 4.35%.",
    band9Phrase: "“Leisure and education accounted for the lowest proportion of spending in every nation.”"
  }
];

export const SPENDING_YEARS: SchoolSpendingYearData[] = [
  {
    year: 1981,
    slices: [
      { categoryId: "teachers_salaries", label: "Food/Drink/Tobacco", percentage: 55, color: "#2563eb" },
      { categoryId: "other_workers_salaries", label: "Clothing/Footwear", percentage: 30, color: "#d97706" },
      { categoryId: "furniture_and_equipment", label: "Leisure/Education", percentage: 15, color: "#059669" }
    ],
    totalStaffPercent: 85,
    totalNonStaffPercent: 15,
    topCategory: "Food/Drink/Tobacco (Turkey: 32.14%)",
    lowestCategory: "Leisure/Education (Spain: 1.98%)",
    notes: "Comparative table of consumer expenditure across 5 nations in 2002."
  }
];

export const SPENDING_HOTSPOTS: SpendingHotspot[] = [
  {
    id: "turkey-food",
    title: "Turkey: Peak Food Spender (32.14%)",
    category: "Food/ Drink/ Tobacco",
    y1981: 32.14,
    y1991: 32.14,
    y2001: 32.14,
    trendText: "Nearly a third of total Turkish expenditure went towards sustenance.",
    contrastKey: "Highest single value in the entire table.",
    band9Sentence: "Turkey allocated the highest single proportion to food, drink, and tobacco at 32.14%.",
    keyFeature: "Overwhelmingly highest spending figure across all categories and countries."
  },
  {
    id: "ireland-food",
    title: "Ireland: High Food Spender (28.91%)",
    category: "Food/ Drink/ Tobacco",
    y1981: 28.91,
    y1991: 28.91,
    y2001: 28.91,
    trendText: "Second highest food expenditure, just 3.23% below Turkey.",
    contrastKey: "Substantially higher than Italy, Spain, and Sweden.",
    band9Sentence: "Ireland recorded the second highest food expenditure at 28.91%, far exceeding the remaining three nations.",
    keyFeature: "Forms the top tier of food spenders alongside Turkey."
  },
  {
    id: "italy-clothing",
    title: "Italy: Leader in Clothing (9.00%)",
    category: "Clothing/ Footwear",
    y1981: 9.0,
    y1991: 9.0,
    y2001: 9.0,
    trendText: "Italy spent 9.00% on clothing and footwear, well above the other four nations.",
    contrastKey: "Outstrips Sweden (5.40%) by 3.6 percentage points.",
    band9Sentence: "In terms of clothing and footwear, Italy was the clear leader, with consumers allocating 9.00% of expenditure.",
    keyFeature: "The only country where clothing reached 9%."
  },
  {
    id: "spain-leisure",
    title: "Spain: Lowest Table Figure (1.98%)",
    category: "Leisure/ Education",
    y1981: 1.98,
    y1991: 1.98,
    y2001: 1.98,
    trendText: "Leisure and education in Spain was the only figure in the entire table below 2%.",
    contrastKey: "Lowest value in the entire dataset.",
    band9Sentence: "Spain registered the lowest figure in the entire table, devoting a mere 1.98% to leisure and education.",
    keyFeature: "Sub-2% national expenditure record."
  },
  {
    id: "sweden-profile",
    title: "Sweden: Frugal Sustenance & Apparel (15.77% & 5.40%)",
    category: "Overall Profile",
    y1981: 15.77,
    y1991: 5.4,
    y2001: 3.22,
    trendText: "Sweden had the lowest spending on both food (15.77%) and clothing (5.40%).",
    contrastKey: "Second highest in leisure/education (3.22%).",
    band9Sentence: "Swedish consumers spent the lowest proportions on food (15.77%) and clothing (5.40%), yet allocated 3.22% to leisure.",
    keyFeature: "Inverted spending dynamic compared to Turkey and Ireland."
  }
];

export const CEMENT_PROCESS_STAGES: ProcessStageItem[] = [];
export const CONCRETE_INGREDIENTS: ConcreteIngredientItem[] = [];

// ==========================================
// 2. MASTER TASK 1 DATA OBJECT (TABLE ANALYSIS)
// ==========================================

export const TASK1_DATA: Task1Data = {
  id: "consumer-spending-five-countries-2002-table",
  taskType: "IELTS Academic Writing Task 1 • Comparative Table Analysis",
  title: "Consumer Spending on Different Items in Five Countries (2002)",
  companyName: "Cambridge IELTS Academic Writing Task 1",
  unit: "Percentage of Consumer Expenditure (%)",
  questionText:
    "The table below gives information on consumer spending on different items in five different countries in 2002.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
  imageFileName: "materials/consumer_spending_table_2002.jpg",
  hdImageFileName: "materials/consumer_spending_table_2002.jpg",
  scanImageFileName: "materials/consumer_spending_table_2002.jpg",
  audioUrl: "materials/Taxation_and_Public_Services_Briefing.m4a",
  audioClueText:
    "The table compares consumer spending across Ireland, Italy, Spain, Sweden, and Turkey in 2002. Food, drink, and tobacco dominated spending across all five nations, while leisure and education consistently represented the smallest share.",
  timingSeconds: 1200,

  sampleIntro:
    "The table compares the proportion of national consumer expenditure allocated to three broad categories of goods and services across five European countries in 2002.",

  sampleOverview:
    "Overall, consumer expenditure was consistently highest on food, drinks, and tobacco across all five nations, whereas leisure and education accounted for the smallest share of spending throughout. Furthermore, Turkish and Irish consumers devoted significantly larger proportions of their budgets to sustenance than their European counterparts, while Italy recorded the largest proportion spent on clothing and footwear.",

  spendingCategories: SPENDING_CATEGORIES,
  spendingYears: SPENDING_YEARS,
  spendingHotspots: SPENDING_HOTSPOTS,

  diagramData: {
    hotspots: SPENDING_HOTSPOTS.map((h) => ({
      id: h.id,
      title: h.title,
      zone: h.category,
      normalState: h.contrastKey,
      elNinoState: h.keyFeature,
      contrastKey: h.contrastKey,
      band9Sentence: h.band9Sentence
    })),
    comparisonsSummary: {
      food_dominance: "Food, drink, and tobacco was by far the largest expenditure category in every country (15.77% to 32.14%).",
      clothing_rank: "Clothing and footwear ranked second throughout, with Italy leading at 9.00%.",
      leisure_minority: "Leisure and education received the lowest funding across all nations, ranging between 1.98% and 4.35%."
    }
  },
  graphData: {
    hotspots: SPENDING_HOTSPOTS.map((h) => ({
      id: h.id,
      title: h.title,
      zone: h.category,
      normalState: h.contrastKey,
      elNinoState: h.keyFeature,
      contrastKey: h.contrastKey,
      band9Sentence: h.band9Sentence
    })),
    comparisonsSummary: {
      highest_vs_lowest: "Turkey spent the most on food (32.14%) and leisure (4.35%), while Spain had the lowest single figure in leisure (1.98%)."
    }
  },

  formats: [],
  countries: [],

  vocabList: [
    {
      word: "Consumer Expenditure",
      term: "Consumer Expenditure",
      phonetic: "/kənˈsjuːmər ɪkˈspendɪtʃər/",
      meaning: "The total spending of households on goods and services within an economy.",
      definition: "The total spending of households on goods and services within an economy.",
      example: "Consumer expenditure was distributed across three primary categories in 2002.",
      sampleSentence: "Consumer expenditure was distributed across three primary categories in 2002.",
      collocations: ["national consumer expenditure", "allocated to consumer expenditure", "patterns of expenditure"]
    },
    {
      word: "Sustenance",
      term: "Sustenance",
      phonetic: "/ˈsʌstənəns/",
      meaning: "Food and drink regarded as a source of physical strength and nourishment.",
      definition: "Food and drink regarded as a source of physical strength and nourishment.",
      example: "Consumers in Turkey and Ireland dedicated substantial portions of their income to basic sustenance.",
      sampleSentence: "Consumers in Turkey and Ireland dedicated substantial portions of their income to basic sustenance.",
      collocations: ["expenditure on sustenance", "basic sustenance needs", "vital sustenance"]
    },
    {
      word: "Account For / Constitute",
      term: "Account For / Constitute",
      phonetic: "/əˈkaʊnt fɔːr/ – /ˈkɒnstɪtjuːt/",
      meaning: "To form, comprise, or make up a specified proportion or fraction of a total.",
      definition: "To form, comprise, or make up a specified proportion or fraction of a total.",
      example: "Food and drink accounted for over 30% of total expenditure in Turkey.",
      sampleSentence: "Food and drink accounted for over 30% of total expenditure in Turkey.",
      collocations: ["account for nearly a third", "constitute the largest share", "account for the smallest portion"]
    },
    {
      word: "Outstrip / Exceed",
      term: "Outstrip / Exceed",
      phonetic: "/aʊtˈstrɪp/ – /ɪkˈsiːd/",
      meaning: "To be greater in quantity, degree, or proportion than something else.",
      definition: "To be greater in quantity, degree, or proportion than something else.",
      example: "Italian expenditure on clothing outstripped all other nations at exactly 9.00%.",
      sampleSentence: "Italian expenditure on clothing outstripped all other nations at exactly 9.00%.",
      collocations: ["outstrip all other nations", "exceed the average", "substantially outstrip"]
    },
    {
      word: "By a Noticeable Margin",
      term: "By a Noticeable Margin",
      phonetic: "/baɪ ə ˈnəʊtɪsəbl ˈmɑːdʒɪn/",
      meaning: "By an amount that is distinct, clearly visible, and statistically noteworthy.",
      definition: "By an amount that is distinct, clearly visible, and statistically noteworthy.",
      example: "Turkey led food expenditure by a noticeable margin over Sweden and Italy.",
      sampleSentence: "Turkey led food expenditure by a noticeable margin over Sweden and Italy.",
      collocations: ["lead by a noticeable margin", "surpass by a significant margin", "differ by a narrow margin"]
    },
    {
      word: "Cluster Around",
      term: "Cluster Around",
      phonetic: "/ˈklʌstər əˈraʊnd/",
      meaning: "To group closely together within a narrow numeric or percentage band.",
      definition: "To group closely together within a narrow numeric or percentage band.",
      example: "Clothing spending in Spain, Turkey, and Ireland clustered closely around 6.5%.",
      sampleSentence: "Clothing spending in Spain, Turkey, and Ireland clustered closely around 6.5%.",
      collocations: ["cluster closely around", "clustered within a narrow range", "figures cluster near"]
    },
    {
      word: "Apparel & Footwear",
      term: "Apparel & Footwear",
      phonetic: "/əˈpærəl ænd ˈfʊtweər/",
      meaning: "Clothing, garments, shoes, and wearable personal attire.",
      definition: "Clothing, garments, shoes, and wearable personal attire.",
      example: "Italy directed nearly a tenth of its spending towards apparel and footwear.",
      sampleSentence: "Italy directed nearly a tenth of its spending towards apparel and footwear.",
      collocations: ["outlay on apparel", "expenditure on footwear", "clothing and apparel"]
    },
    {
      word: "Represent the Smallest Share",
      term: "Represent the Smallest Share",
      phonetic: "/ˌreprɪˈzent ðə ˈsmɔːlɪst ʃeər/",
      meaning: "To form the lowest numerical fraction or minority percentage among all categories.",
      definition: "To form the lowest numerical fraction or minority percentage among all categories.",
      example: "Leisure and education represented the smallest share in every surveyed country.",
      sampleSentence: "Leisure and education represented the smallest share in every surveyed country.",
      collocations: ["represent the smallest share", "account for the lowest fraction", "smallest portion throughout"]
    },
    {
      word: "Respectively",
      term: "Respectively",
      phonetic: "/rɪˈspektɪvli/",
      meaning: "Separately or individually in the exact order previously mentioned.",
      definition: "Separately or individually in the exact order previously mentioned.",
      example: "Turkey and Ireland allocated 32.14% and 28.91% to food, respectively.",
      sampleSentence: "Turkey and Ireland allocated 32.14% and 28.91% to food, respectively.",
      collocations: ["standing at X and Y respectively", "recorded respectively", "allocated respectively"]
    },
    {
      word: "Disproportionately",
      term: "Disproportionately",
      phonetic: "/ˌdɪsprəˈpɔːʃənətli/",
      meaning: "To a degree that is unequal or out of proportion compared to other entities.",
      definition: "To a degree that is unequal or out of proportion compared to other entities.",
      example: "Turkish consumers spent disproportionately high amounts on sustenance compared to leisure.",
      sampleSentence: "Turkish consumers spent disproportionately high amounts on sustenance compared to leisure.",
      collocations: ["disproportionately high", "allocated disproportionately", "disproportionate share"]
    },
    {
      word: "Undisputed Leader",
      term: "Undisputed Leader",
      phonetic: "/ˌʌndɪˈspjuːtɪd ˈliːdər/",
      meaning: "The entity that holds the clear, acknowledged highest position without rivalry.",
      definition: "The entity that holds the clear, acknowledged highest position without rivalry.",
      example: "Italy was the undisputed leader in apparel expenditure at 9.00%.",
      sampleSentence: "Italy was the undisputed leader in apparel expenditure at 9.00%.",
      collocations: ["undisputed leader", "clear leader in spending", "lead all surveyed nations"]
    },
    {
      word: "Sub-Two Percent",
      term: "Sub-Two Percent",
      phonetic: "/sʌb tuː pəˈsent/",
      meaning: "Falling below the threshold of two percentage points (under 2.0%).",
      definition: "Falling below the threshold of two percentage points (under 2.0%).",
      example: "Spain was the solitary country with a sub-two percent allocation for leisure and education.",
      sampleSentence: "Spain was the solitary country with a sub-two percent allocation for leisure and education.",
      collocations: ["sub-two percent figure", "sub-five percent share", "minority proportion"]
    }
  ],

  vocabHunt: [
    "consumer expenditure",
    "sustenance",
    "account for",
    "outstrip",
    "by a noticeable margin",
    "cluster around",
    "apparel",
    "represent the smallest share",
    "respectively",
    "disproportionately",
    "undisputed leader",
    "sub-two percent"
  ],

  bp1: {
    title: "Body 1: Food, Drink, and Tobacco (The Dominant Expenditure)",
    focus: "Report and compare the largest category across all five nations (Turkey & Ireland leading vs Spain, Italy, Sweden).",
    points: [
      "Turkey allocated the largest share of any nation to food, drink, and tobacco at nearly a third (32.14%).",
      "Ireland followed closely in second position with 28.91% devoted to sustenance.",
      "In marked contrast, Spain recorded 18.80%, while Italy and Sweden registered the lowest proportions in this category at 16.36% and 15.77% respectively."
    ]
  },

  bp2: {
    title: "Body 2: Clothing/Footwear and Leisure/Education (Secondary & Minority Shares)",
    focus: "Report Italy's lead in clothing (9.00%) and contrast with the minor figures for leisure and education (1.98% to 4.35%).",
    points: [
      "In clothing and footwear, Italy was the undisputed leader at exactly 9.00%, outspending Turkey (6.63%), Spain (6.51%), and Ireland (6.43%), while Sweden trailed at 5.40%.",
      "Leisure and education constituted the smallest expenditure throughout, with Turkey again highest at 4.35%, followed by Sweden (3.22%) and Italy (3.20%).",
      "Ireland allocated 2.21%, while Spain registered the lowest single figure in the entire table at a mere 1.98%."
    ]
  },

  processingGroups: [
    {
      title: "1. Food & Drink: Dominant Cluster",
      items: [
        "Turkey: 32.14% (Highest in entire table)",
        "Ireland: 28.91% (Second highest food share)",
        "Spain (18.80%), Italy (16.36%), Sweden (15.77%)"
      ]
    },
    {
      title: "2. Clothing & Footwear: Moderate Outlay",
      items: [
        "Italy: 9.00% (National leader in clothing)",
        "Turkey (6.63%), Spain (6.51%), Ireland (6.43%)",
        "Sweden: 5.40% (Lowest apparel expenditure)"
      ]
    },
    {
      title: "3. Leisure & Education: Minor Fraction",
      items: [
        "Turkey: 4.35% (Peak leisure spending)",
        "Sweden (3.22%) & Italy (3.20%) closely matched",
        "Ireland (2.21%) & Spain (1.98% - lowest in table)"
      ]
    }
  ],

  connectors: [
    {
      phrase: "In terms of / Regarding...",
      purpose: "Category Transition Marker",
      example: "In terms of clothing and footwear, Italy was the undisputed leader at 9.00%."
    },
    {
      phrase: "In marked contrast,...",
      purpose: "Sharp Comparative Pivot",
      example: "In marked contrast to Turkey's 32.14%, Swedish consumers spent just 15.77% on food."
    },
    {
      phrase: "..., standing at X and Y respectively.",
      purpose: "Orderly Multiple Data Reporting",
      example: "Turkey and Ireland led food expenditure, standing at 32.14% and 28.91% respectively."
    },
    {
      phrase: "..., closely followed by...",
      purpose: "Sequential Comparative Ranking",
      example: "Turkey was the highest spender on food, closely followed by Ireland at 28.91%."
    },
    {
      phrase: "Outstripping all other surveyed nations,...",
      purpose: "Participial Superlative Framing",
      example: "Outstripping all other surveyed nations, Italy dedicated 9.00% to clothing and footwear."
    },
    {
      phrase: "Registering the lowest proportion throughout,...",
      purpose: "Bottom-Rank Reporting Marker",
      example: "Registering the lowest proportion throughout, Spain spent a mere 1.98% on leisure and education."
    }
  ],

  modelReport: {
    wordCount: 182,
    paragraphs: [
      {
        id: "intro",
        title: "Introduction: Table Scope & Parameter Paraphrase",
        text: "The table compares the proportion of national consumer expenditure allocated to three broad categories of goods and services across five European countries in 2002.",
        wordCount: 24,
        badges: ["Paraphrase", "3 Categories", "5 Countries", "Year 2002"]
      },
      {
        id: "overview",
        title: "Macro Overview: Key Trends & Outliers (NO NUMBERS)",
        text: "Overall, consumer expenditure was consistently highest on food, drinks, and tobacco across all five nations, whereas leisure and education accounted for the smallest share of spending throughout. Furthermore, Turkish and Irish consumers devoted significantly larger proportions of their budgets to sustenance than their European counterparts, while Italy recorded the largest proportion spent on clothing and footwear.",
        wordCount: 57,
        badges: ["Macro Trends", "Zero Numerical Figures", "Food Dominance", "Italian Apparel Lead"]
      },
      {
        id: "body1",
        title: "Body Paragraph 1: Food, Drink, and Tobacco (The Major Category)",
        text: "In terms of food, drinks, and tobacco, Turkey allocated the highest proportion of any country, with nearly a third of all consumer expenditure (32.14%) directed towards this category. Ireland followed closely behind at 28.91%. In marked contrast, the remaining three nations registered substantially lower figures; Spain recorded 18.80%, while Italy and Sweden spent the least on sustenance at 16.36% and 15.77% respectively.",
        wordCount: 65,
        badges: ["Top Tier (Turkey & Ireland)", "Lower Tier (Spain, Italy, Sweden)", "Comparative Linking"]
      },
      {
        id: "body2",
        title: "Body Paragraph 2: Clothing/Footwear & Leisure/Education",
        text: "Turning to clothing and footwear, Italy was the undisputed leader at exactly 9.00%, outstripping Turkey (6.63%), Spain (6.51%), and Ireland (6.43%), with Sweden recording the lowest share at 5.40%. Finally, leisure and education represented the smallest expenditure throughout all five nations; Turkey again topped the list at 4.35%, followed by Sweden (3.22%) and Italy (3.20%), while Spain registered the lowest single figure in the table at just 1.98%.",
        wordCount: 69,
        badges: ["Italy Clothing Lead (9.00%)", "Clustered Nations (6.4–6.6%)", "Spain Lowest Value (1.98%)"]
      }
    ]
  }
};
