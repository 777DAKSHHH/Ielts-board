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

// Backward compatibility shims
export const SUGARCANE_PROCESS_STAGES: ProcessStageItem[] = [];
export const CEMENT_PROCESS_STAGES: ProcessStageItem[] = [];
export const CONCRETE_INGREDIENTS: ConcreteIngredientItem[] = [];
export const WHEAT_EXPORTS_DATA: WheatExportRegion[] = [];
export const PROFESSIONS_DATA: ProfessionWorkloadStress[] = [];
export const SPENDING_CATEGORIES: SpendingCategoryItem[] = [];
export const SPENDING_YEARS: SchoolSpendingYearData[] = [];
export const SPENDING_HOTSPOTS: SpendingHotspot[] = [];

// ==========================================
// MASTER TASK 1 DATA OBJECT (AUCKLAND SHOPPING COMPLEX SURVEY)
// Mixed Chart: Two Tables (Shops & Restaurants) + One Pie Chart (Design)
// ==========================================

export const TASK1_DATA: Task1Data = {
  id: "auckland-shopping-complex-survey",
  taskType: "IELTS Academic Writing Task 1 • Mixed Chart (Two Tables & Pie Chart)",
  title: "Survey Results of a New Shopping Complex in Auckland, New Zealand",
  companyName: "Cambridge IELTS Academic Writing Task 1",
  unit: "Percentage (%) of Survey Respondents",
  questionText:
    "The tables and piechart show in percentage terms the results of a survey of a new shopping complex in Auckland, NewZealand.\n\nSummarize the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
  imageFileName: "materials/auckland_shopping_complex_survey.jpg",
  hdImageFileName: "materials/auckland_shopping_complex_survey.jpg",
  scanImageFileName: "materials/auckland_shopping_complex_survey.jpg",
  audioUrl: "materials/Taxation_and_Public_Services_Briefing.m4a",
  audioClueText:
    "The survey evaluates public satisfaction with shops, restaurants, and architectural design at a new shopping complex in Auckland, New Zealand. Across all three categories, positive ratings heavily outweigh dissatisfaction. The complex's design achieved the highest aggregate approval at 79%, with nearly two-thirds of visitors reporting they were satisfied. While male and female shoppers shared an identical 20% dissatisfaction rate regarding retail shops, women were twice as likely to be very satisfied. In contrast, restaurants generated a sharp gender divide: men reported 80% satisfaction and only 5% dissatisfaction, whereas female dissatisfaction was over four times higher at 21%.",
  timingSeconds: 1200,

  sampleIntro:
    "The two tables and accompanying pie chart illustrate the percentage breakdown of customer feedback from a survey assessing shops, restaurants, and overall architectural design at a newly opened shopping complex in Auckland, New Zealand, with the former two categories distinguished by gender.",

  sampleOverview:
    "Overall, visitor feedback across all three evaluated criteria was predominantly favorable, with the majority of respondents expressing satisfaction. Notably, the complex's design achieved the highest overall level of customer approval, while dining amenities elicited the starkest gender divide, with men reporting significantly greater contentment than women.",

  formats: [],
  countries: [],

  diagramData: {
    hotspots: [
      {
        id: "shops-male",
        title: "Shops: Male Shoppers",
        zone: "Table 1 • Shops (Male)",
        normalState: "17% Very Satisfied | 45% Satisfied (62% Positive)",
        elNinoState: "20% Dissatisfied | 18% No Comment",
        contrastKey: "Lower extreme satisfaction than females (17% vs 34%), but identical dissatisfaction (20%).",
        band9Sentence:
          "“For retail shops, 45% of men reported being satisfied alongside 17% who were very satisfied, yielding an overall positive rating of 62%.”"
      },
      {
        id: "shops-female",
        title: "Shops: Female Shoppers",
        zone: "Table 1 • Shops (Female)",
        normalState: "34% Very Satisfied | 37% Satisfied (71% Positive)",
        elNinoState: "20% Dissatisfied | 9% No Comment",
        contrastKey: "Extreme satisfaction was exactly double the male rate (34% vs 17%).",
        band9Sentence:
          "“Female shoppers were notably more enthusiastic, with 34% describing themselves as very satisfied—exactly double the male figure of 17%—while an identical 20% expressed dissatisfaction.”"
      },
      {
        id: "restaurants-male",
        title: "Restaurants: Male Shoppers",
        zone: "Table 2 • Restaurants (Male)",
        normalState: "25% Very Satisfied | 55% Satisfied (80% Peak Positive)",
        elNinoState: "5% Dissatisfied (Lowest) | 15% No Comment",
        contrastKey: "Overwhelming approval (80%) and negligible dissatisfaction (5%).",
        band9Sentence:
          "“Male visitors expressed overwhelming contentment with dining facilities, with 55% satisfied and 25% very satisfied, whereas dissatisfaction was negligible at a mere 5%.”"
      },
      {
        id: "restaurants-female",
        title: "Restaurants: Female Shoppers",
        zone: "Table 2 • Restaurants (Female)",
        normalState: "27% Very Satisfied | 32% Satisfied (59% Positive)",
        elNinoState: "21% Dissatisfied (Over 4x Male Rate) | 20% No Comment",
        contrastKey: "Female dissatisfaction (21%) was more than quadruple the male rate (5%).",
        band9Sentence:
          "“In sharp contrast, female dissatisfaction with dining establishments stood at 21%, more than fourfold higher than the corresponding figure for males.”"
      },
      {
        id: "design-satisfied",
        title: "Design: Satisfied",
        zone: "Pie Chart • Dominant Wedge",
        normalState: "62% Satisfied",
        elNinoState: "Forms nearly two-thirds of all surveyed visitors",
        contrastKey: "Single largest individual category across the entire survey.",
        band9Sentence:
          "“Regarding the shopping complex's design, the pie chart indicates widespread acclaim, with nearly two-thirds of respondents (62%) reporting they were satisfied.”"
      },
      {
        id: "design-very-satisfied",
        title: "Design: Very Satisfied",
        zone: "Pie Chart • Top Right Wedge",
        normalState: "17% Very Satisfied",
        elNinoState: "Combined design approval reaches 79%",
        contrastKey: "Brings overall design satisfaction to nearly four-fifths of visitors.",
        band9Sentence:
          "“An additional 17% described the design as very satisfying, elevating the aggregate positive rating to nearly four-fifths (79%).”"
      },
      {
        id: "design-dissatisfied-no-comment",
        title: "Design: Dissatisfied & No Comment",
        zone: "Pie Chart • Minor Slices",
        normalState: "10% Dissatisfied | 11% No Comment",
        elNinoState: "Only 21% non-positive responses",
        contrastKey: "Dissatisfied visitors represented exactly one-tenth of the total.",
        band9Sentence:
          "“Conversely, adverse and indifferent reactions were minimal, with dissatisfied patrons constituting exactly a tenth (10%), closely mirrored by 11% who gave no comment.”"
      }
    ],
    comparisonsSummary: {
      overall_approval: "All three categories enjoyed strong public approval, with positive ratings consistently between 59% and 80%.",
      highest_category: "The complex's architectural design achieved the highest overall approval rating at 79% (62% satisfied, 17% very satisfied).",
      gender_divergence: "Restaurants showed the largest gender divide: male dissatisfaction was only 5%, whereas female dissatisfaction was over four times higher at 21%.",
      retail_commonality: "An identical 20% of both male and female shoppers were dissatisfied with the shops, though twice as many women were very satisfied (34% vs 17%)."
    }
  },

  graphData: {
    hotspots: [],
    comparisonsSummary: {
      bifurcation: "Body 1 covers the two gender-split tables (Shops and Restaurants), while Body 2 examines the overall design pie chart and synthesizes holistic comparisons."
    }
  },

  vocabList: [
    {
      word: "Predominantly",
      term: "Predominantly",
      phonetic: "/prɪˈdɒm.ɪ.nənt.li/",
      meaning: "Mainly, mostly, or for the most part; to a greater extent than others.",
      definition: "Mainly, mostly, or for the most part; to a greater extent than others.",
      example: "Public sentiment toward the new shopping complex was predominantly favorable.",
      sampleSentence: "Public sentiment toward the new shopping complex was predominantly favorable.",
      collocations: ["predominantly positive", "predominantly favorable", "predominantly satisfied"]
    },
    {
      word: "Disparity",
      term: "Disparity",
      phonetic: "/dɪˈspær.ə.ti/",
      meaning: "A noticeable and usually significant difference or inequality between two or more things.",
      definition: "A noticeable and usually significant difference or inequality between two or more things.",
      example: "A pronounced disparity was evident between male and female satisfaction in restaurants.",
      sampleSentence: "A pronounced disparity was evident between male and female satisfaction in restaurants.",
      collocations: ["pronounced disparity", "gender disparity", "significant disparity"]
    },
    {
      word: "Aggregate",
      term: "Aggregate",
      phonetic: "/ˈæɡ.rɪ.ɡət/",
      meaning: "Formed or calculated by the combination of many separate units or items; total.",
      definition: "Formed or calculated by the combination of many separate units or items; total.",
      example: "The aggregate approval rating for the complex's design reached nearly four-fifths.",
      sampleSentence: "The aggregate approval rating for the complex's design reached nearly four-fifths.",
      collocations: ["aggregate approval", "aggregate percentage", "in the aggregate"]
    },
    {
      word: "Disproportionate",
      term: "Disproportionate",
      phonetic: "/ˌdɪs.prəˈpɔː.ʃən.ət/",
      meaning: "Too large or too small in comparison for something else, or out of proper proportion.",
      definition: "Too large or too small in comparison for something else, or out of proper proportion.",
      example: "A disproportionate share of male shoppers expressed satisfaction with dining options.",
      sampleSentence: "A disproportionate share of male shoppers expressed satisfaction with dining options.",
      collocations: ["disproportionate share", "disproportionate number", "disproportionately high"]
    },
    {
      word: "Divergence",
      term: "Divergence",
      phonetic: "/daɪˈvɜː.dʒəns/",
      meaning: "A situation in which two or more things become different, separate, or distinct.",
      definition: "A situation in which two or more things become different, separate, or distinct.",
      example: "Dining amenities elicited the starkest divergence between male and female opinions.",
      sampleSentence: "Dining amenities elicited the starkest divergence between male and female opinions.",
      collocations: ["stark divergence", "gender divergence", "divergence of opinion"]
    },
    {
      word: "Fourfold",
      term: "Fourfold",
      phonetic: "/ˈfɔː.fəʊld/",
      meaning: "Four times as great or as numerous; by a factor of four.",
      definition: "Four times as great or as numerous; by a factor of four.",
      example: "Female dissatisfaction with the restaurants was more than fourfold higher than that of males.",
      sampleSentence: "Female dissatisfaction with the restaurants was more than fourfold higher than that of males.",
      collocations: ["fourfold increase", "fourfold higher", "increase fourfold"]
    },
    {
      word: "Plurality",
      term: "Plurality",
      phonetic: "/plʊəˈræl.ə.ti/",
      meaning: "A large number of people or things, or the largest individual share in a group without being an absolute majority.",
      definition: "A large number of people or things, or the largest individual share in a group without being an absolute majority.",
      example: "A vast plurality of respondents reported being satisfied with the retail shops.",
      sampleSentence: "A vast plurality of respondents reported being satisfied with the retail shops.",
      collocations: ["command a plurality", "substantial plurality", "relative plurality"]
    },
    {
      word: "Marginal",
      term: "Marginal",
      phonetic: "/ˈmɑː.dʒɪ.nəl/",
      meaning: "Very small in amount or degree; situated at the edge or margin; of secondary importance.",
      definition: "Very small in amount or degree; situated at the edge or margin; of secondary importance.",
      example: "Dissatisfaction with the shopping complex design remained strictly marginal at only ten percent.",
      sampleSentence: "Dissatisfaction with the shopping complex design remained strictly marginal at only ten percent.",
      collocations: ["marginal proportion", "strictly marginal", "marginal difference"]
    },
    {
      word: "Negligible",
      term: "Negligible",
      phonetic: "/ˈneɡ.lɪ.dʒə.bəl/",
      meaning: "So small or unimportant as to be not worth considering; insignificant.",
      definition: "So small or unimportant as to be not worth considering; insignificant.",
      example: "Male dissatisfaction with the dining facilities was negligible at a mere five percent.",
      sampleSentence: "Male dissatisfaction with the dining facilities was negligible at a mere five percent.",
      collocations: ["negligible proportion", "negligible amount", "almost negligible"]
    },
    {
      word: "Constituent",
      term: "Constituent",
      phonetic: "/kənˈstɪtʃ.u.ənt/",
      meaning: "Being a part of a whole; forming an element or component of a group or total.",
      definition: "Being a part of a whole; forming an element or component of a group or total.",
      example: "Satisfied patrons formed the single largest constituent segment of the design pie chart.",
      sampleSentence: "Satisfied patrons formed the single largest constituent segment of the design pie chart.",
      collocations: ["constituent segment", "constituent elements", "constituent cohort"]
    },
    {
      word: "Enthusiastic",
      term: "Enthusiastic",
      phonetic: "/ɪnˌθjuː.ziˈæs.tɪk/",
      meaning: "Showing intense and eager enjoyment, interest, or approval.",
      definition: "Showing intense and eager enjoyment, interest, or approval.",
      example: "Female shoppers were notably more enthusiastic about retail stores than their male peers.",
      sampleSentence: "Female shoppers were notably more enthusiastic about retail stores than their male peers.",
      collocations: ["enthusiastic response", "notably enthusiastic", "highly enthusiastic"]
    },
    {
      word: "Mirror",
      term: "Mirror",
      phonetic: "/ˈmɪr.ər/",
      meaning: "To correspond closely to; to reflect or resemble something accurately.",
      definition: "To correspond closely to; to reflect or resemble something accurately.",
      example: "The proportion of undecided respondents mirrored the dissatisfied cohort at eleven percent.",
      sampleSentence: "The proportion of undecided respondents mirrored the dissatisfied cohort at eleven percent.",
      collocations: ["closely mirror", "mirror the trend", "mirror each other"]
    }
  ],

  vocabHunt: [
    "predominantly",
    "disparity",
    "aggregate",
    "disproportionate",
    "divergence",
    "fourfold",
    "plurality",
    "marginal",
    "negligible",
    "constituent",
    "enthusiastic",
    "mirror"
  ],

  bp1: {
    title: "Body 1: Gender Breakdown in Shops & Restaurants (Tables 1 & 2)",
    focus: "Contrast male and female satisfaction levels across retail stores and dining amenities.",
    points: [
      "Retail Shops: Female shoppers were twice as likely to be 'very satisfied' (34% vs 17% for men), while 45% of men were 'satisfied' compared to 37% of women.",
      "Combined positive sentiment for shops reached 71% for females and 62% for males.",
      "An identical 20% of both men and women expressed dissatisfaction with retail shops, whereas twice as many men gave no comment (18% vs 9%).",
      "Restaurants: Men reported overwhelming satisfaction with dining facilities (55% satisfied, 25% very satisfied, totaling 80%), with only 5% dissatisfied.",
      "In contrast, only 59% of women viewed restaurants favorably (32% satisfied, 27% very satisfied), while female dissatisfaction was more than fourfold higher at 21%."
    ]
  },

  bp2: {
    title: "Body 2: Complex Design & Holistic Comparison (Pie Chart)",
    focus: "Detail the overall distribution of visitor sentiment regarding architectural design and make cross-category comparisons.",
    points: [
      "The pie chart illustrates that design achieved the highest overall approval among all three areas.",
      "Nearly two-thirds of visitors (62%) reported being satisfied with the design, while an additional 17% were very satisfied, producing an aggregate positive rating of 79%.",
      "Negative and neutral reactions were minor: exactly one-tenth (10%) of visitors expressed dissatisfaction, closely mirrored by 11% who gave no comment.",
      "Holistic comparison: Design was the most uniformly approved feature, whereas restaurants generated the sharpest gender conflict."
    ]
  },

  processingGroups: [
    {
      title: "1. Retail Shops Comparison (Table 1)",
      items: [
        "Females showed double the extreme satisfaction of males (34% vs 17%)",
        "Males favored moderate satisfaction (45% vs 37%)",
        "Total positive sentiment: Females 71% vs Males 62%",
        "Identical dissatisfaction: Exactly 20% for both genders",
        "No comment: Males 18% vs Females 9%"
      ]
    },
    {
      title: "2. Dining Amenities Disparity (Table 2)",
      items: [
        "Male approval peaked at 80% (55% satisfied, 25% very satisfied)",
        "Female approval was notably lower at 59% (32% satisfied, 27% very satisfied)",
        "Male dissatisfaction was negligible at only 5%",
        "Female dissatisfaction quadrupled the male figure, reaching 21%",
        "Undecided / No comment: Females 20% vs Males 15%"
      ]
    },
    {
      title: "3. Architectural Design Distribution (Pie Chart)",
      items: [
        "Satisfied cohort formed the dominant majority at 62% (~five-eighths)",
        "Very satisfied cohort contributed an additional 17%",
        "Combined design approval reached nearly four-fifths (79%)",
        "Dissatisfied visitors accounted for exactly one-tenth (10%)",
        "No comment cohort mirrored dissatisfaction at 11%"
      ]
    },
    {
      title: "4. Holistic Syntheses & Contrasts",
      items: [
        "Highest individual category positive: Men in restaurants (80%)",
        "Highest overall component approval: Complex design (79%)",
        "Lowest category dissatisfaction: Men in restaurants (5%)",
        "Highest category dissatisfaction: Women in restaurants (21%)",
        "Equal metric: Discontent with shops stood at exactly 20% for both sexes"
      ]
    }
  ],

  connectors: [
    {
      phrase: "In terms of retail facilities,...",
      purpose: "Table 1 Opener & Sector Marker",
      example: "In terms of retail facilities, female patrons demonstrated significantly higher extreme satisfaction than males."
    },
    {
      phrase: "Conversely,... / In sharp contrast,...",
      purpose: "Gender Disparity & Direct Contrast",
      example: "In sharp contrast, female dissatisfaction with dining establishments stood at 21%, more than fourfold higher than that of males."
    },
    {
      phrase: "An identical proportion of both genders...",
      purpose: "Equivalence & Similarity Connector",
      example: "An identical proportion of both genders (20%) registered dissatisfaction with retail shops."
    },
    {
      phrase: "Turning to the architectural design,...",
      purpose: "Pie Chart Transition Marker",
      example: "Turning to the architectural design of the shopping center, the pie chart indicates widespread public satisfaction."
    },
    {
      phrase: "Nearly two-thirds of all visitors (62%)...",
      purpose: "Proportional Fraction Synthesis",
      example: "Nearly two-thirds of all visitors (62%) reported being satisfied with the complex's design."
    },
    {
      phrase: "Representing an aggregate approval rating of...",
      purpose: "Cumulative Percentage Calculation",
      example: "...representing an aggregate approval rating of nearly four-fifths (79%)."
    },
    {
      phrase: "Closely mirrored by...",
      purpose: "Symmetrical Proportion Linker",
      example: "...with dissatisfied respondents accounting for exactly one-tenth (10%), closely mirrored by the 11% who gave no comment."
    }
  ],

  modelReport: {
    wordCount: 215,
    paragraphs: [
      {
        id: "intro",
        title: "Introduction: Graphic Scope, Subjects & Survey Location",
        text: "The two tables and accompanying pie chart illustrate the percentage breakdown of customer feedback from a survey assessing shops, restaurants, and overall architectural design at a newly opened shopping complex in Auckland, New Zealand, with the former two categories distinguished by gender.",
        wordCount: 39,
        badges: ["Paraphrase", "Tables & Pie Chart", "Auckland Shopping Complex", "Gender Split in Shops & Dining"]
      },
      {
        id: "overview",
        title: "Macro Overview: 2-Sentence Qualitative Synthesis (General Approval, Design Peak & Dining Disparity)",
        text: "Overall, visitor feedback across all three evaluated criteria was predominantly favorable, with the majority of respondents expressing satisfaction. Notably, the complex's design achieved the highest overall level of customer approval, while dining amenities elicited the starkest gender divide, with men reporting significantly greater contentment than women.",
        wordCount: 47,
        badges: ["Overall Favorable", "Design Peak Approval", "Restaurant Gender Divide", "Zero Raw Numbers"]
      },
      {
        id: "body1",
        title: "Body Paragraph 1: Gender Breakdown in Shops & Restaurants (Tables 1 & 2)",
        text: "Examining the retail facilities, female patrons were notably more enthusiastic, with 34% describing themselves as very satisfied—exactly double the male figure of 17%. Conversely, 45% of men were satisfied, compared to 37% of women, bringing total positive sentiment to 71% for females and 62% for males. An identical proportion of both genders (20%) registered dissatisfaction, whereas twice as many men offered no comment compared to women (18% versus 9%). In terms of restaurants, a pronounced gender disparity emerged. Men expressed overwhelming contentment, with 55% satisfied and 25% very satisfied (totaling 80%), while a mere 5% reported dissatisfaction. In contrast, only 59% of female visitors responded favorably (32% satisfied and 27% very satisfied), while their dissatisfaction rate was over fourfold higher at 21%, with the remaining 20% withholding comment.",
        wordCount: 131,
        badges: ["Shops Gender Comparison", "34% vs 17% Very Satisfied", "Equal 20% Dissatisfaction", "Restaurants Disparity", "80% Men vs 59% Women Positive", "5% vs 21% Dissatisfied"]
      },
      {
        id: "body2",
        title: "Body Paragraph 2: Architectural Design Distribution & Holistic Comparisons (Pie Chart)",
        text: "Turning to the architectural design of the shopping center, the pie chart reveals widespread public satisfaction across the entire surveyed cohort. Nearly two-thirds of all visitors (62%) reported being satisfied, with an additional 17% claiming to be very satisfied, representing an aggregate approval rating of nearly four-fifths (79%). Unfavorable and neutral evaluations remained minimal, with dissatisfied respondents accounting for exactly one-tenth (10%) of the total, closely mirrored by the 11% who made no comment.",
        wordCount: 71,
        badges: ["Design Pie Chart", "62% Satisfied", "17% Very Satisfied", "79% Aggregate Approval", "10% Dissatisfied vs 11% No Comment"]
      }
    ]
  }
};
