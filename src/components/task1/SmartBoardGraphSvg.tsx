import React, { useState } from "react";
import {
  RotateCcw,
  Sparkles,
  Info,
  CheckCircle2,
  Award,
  Layers,
  ChevronRight,
  Eye,
  EyeOff,
  Maximize2,
  Table,
  TrendingUp,
  BarChart2,
  SlidersHorizontal
} from "lucide-react";

export type DiagramViewMode =
  | "all"
  | "food"
  | "clothing"
  | "leisure"
  | "turkey"
  | "ireland"
  | "spain"
  | "italy"
  | "sweden"
  | string;

export type TableHighlightMode = DiagramViewMode;
export type GraphHighlightMode = DiagramViewMode;

export interface ParameterMetric {
  label: string;
  value: string;
}

export interface HotspotDefinition {
  id: string;
  box: "food" | "clothing" | "leisure" | "country" | "all" | string;
  country?: string;
  category?: string;
  number: string;
  name: string;
  equipmentOrRole: string; // Analytical role / rank
  color: string;
  pin: { left: string; top: string };
  highlight: { x: string; y: string; w: string; h: string };
  description: string;
  band9Phrase: string;
  grammaticalFocus: string;
  examinerFocus?: string;
  parameterMetrics?: ParameterMetric[];
}

// 15 Key Table Cell Hotspots (5 Countries x 3 Expenditure Categories)
export const TABLE_CELL_HOTSPOTS: HotspotDefinition[] = [
  // --- FOOD / DRINK / TOBACCO (Dominant Category) ---
  {
    id: "turkey-food",
    box: "food",
    country: "Turkey",
    category: "Food/Drink/Tobacco",
    number: "32.14%",
    name: "Turkey • Food, Drink & Tobacco (32.14%)",
    equipmentOrRole: "Global Peak (Rank 1 of 15 in Entire Table)",
    color: "#2563eb",
    pin: { left: "37%", top: "86%" },
    highlight: { x: "25%", y: "81%", w: "25%", h: "18%" },
    description:
      "Turkish consumers allocated nearly a third (32.14%) of their entire budget towards food, drink, and tobacco—representing the highest single percentage recorded in the entire table.",
    band9Phrase:
      "“Turkey allocated nearly a third of all consumer expenditure to food, drinks, and tobacco (32.14%), representing the highest single proportion in the entire table...”",
    grammaticalFocus: "Fractional Approximation: 'allocated nearly a third of all consumer expenditure (32.14%)'",
    examinerFocus:
      "Primary global peak feature: mandatory reporting requirement for Task Achievement Band 9.",
    parameterMetrics: [
      { label: "Category", value: "Food / Drink / Tobacco" },
      { label: "Expenditure", value: "32.14%" },
      { label: "Table Rank", value: "1st of 15 (Global Peak)" },
      { label: "National Status", value: "Nearly 1/3 of consumer budget" }
    ]
  },
  {
    id: "ireland-food",
    box: "food",
    country: "Ireland",
    category: "Food/Drink/Tobacco",
    number: "28.91%",
    name: "Ireland • Food, Drink & Tobacco (28.91%)",
    equipmentOrRole: "Rank 2 in Food (Close to Three-Tenths)",
    color: "#0284c7",
    pin: { left: "37%", top: "26%" },
    highlight: { x: "25%", y: "19%", w: "25%", h: "16%" },
    description:
      "Irish spending on sustenance was second only to Turkey at 28.91%, outpacing the next closest country (Spain) by more than 10 percentage points.",
    band9Phrase:
      "“Ireland followed closely behind Turkey in sustenance spending, with 28.91% of consumer budgets directed towards food, drink, and tobacco.”",
    grammaticalFocus: "Sequential Comparative: 'followed closely behind Turkey at 28.91%'",
    examinerFocus:
      "Groups Ireland and Turkey together as the high-spending upper tier in sustenance.",
    parameterMetrics: [
      { label: "Category", value: "Food / Drink / Tobacco" },
      { label: "Expenditure", value: "28.91%" },
      { label: "Category Rank", value: "2nd of 5" },
      { label: "Contrast", value: "+10.11% higher than Spain" }
    ]
  },
  {
    id: "spain-food",
    box: "food",
    country: "Spain",
    category: "Food/Drink/Tobacco",
    number: "18.80%",
    name: "Spain • Food, Drink & Tobacco (18.80%)",
    equipmentOrRole: "Rank 3 in Food (Intermediate Tier)",
    color: "#0369a1",
    pin: { left: "37%", top: "56%" },
    highlight: { x: "25%", y: "51%", w: "25%", h: "16%" },
    description:
      "Spanish consumers committed 18.80% of expenditure to sustenance, establishing an intermediate position between the leading pair and Italy/Sweden.",
    band9Phrase:
      "“In marked contrast, Spanish expenditure on food stood at 18.80%, substantially lower than Turkey and Ireland.”",
    grammaticalFocus: "Sharp Contrast Marker: 'In marked contrast, Spanish expenditure on food stood at 18.80%'",
    examinerFocus:
      "Marks the dividing threshold between the high-spending pair (>28%) and the remaining European nations (<19%).",
    parameterMetrics: [
      { label: "Category", value: "Food / Drink / Tobacco" },
      { label: "Expenditure", value: "18.80%" },
      { label: "Category Rank", value: "3rd of 5" },
      { label: "Role", value: "Intermediate Benchmark" }
    ]
  },
  {
    id: "italy-food",
    box: "food",
    country: "Italy",
    category: "Food/Drink/Tobacco",
    number: "16.36%",
    name: "Italy • Food, Drink & Tobacco (16.36%)",
    equipmentOrRole: "Rank 4 in Food (Lower Tier Pair)",
    color: "#64748b",
    pin: { left: "37%", top: "41%" },
    highlight: { x: "25%", y: "35%", w: "25%", h: "16%" },
    description:
      "Italian spending on food and drinks stood at 16.36%, nearly half the Turkish level and clustering closely with Sweden.",
    band9Phrase:
      "“...while Italy and Sweden spent the least on sustenance at 16.36% and 15.77% respectively.”",
    grammaticalFocus: "Dual Data Reporting with 'respectively': 'at 16.36% and 15.77% respectively'",
    examinerFocus:
      "Demonstrates high-level grammatical bundling without repetitive verb usage.",
    parameterMetrics: [
      { label: "Category", value: "Food / Drink / Tobacco" },
      { label: "Expenditure", value: "16.36%" },
      { label: "Category Rank", value: "4th of 5" },
      { label: "Pairing", value: "Closely aligned with Sweden" }
    ]
  },
  {
    id: "sweden-food",
    box: "food",
    country: "Sweden",
    category: "Food/Drink/Tobacco",
    number: "15.77%",
    name: "Sweden • Food, Drink & Tobacco (15.77%)",
    equipmentOrRole: "Rank 5 in Food (Category Minimum)",
    color: "#475569",
    pin: { left: "37%", top: "71%" },
    highlight: { x: "25%", y: "67%", w: "25%", h: "16%" },
    description:
      "Swedish households dedicated the lowest proportion to sustenance among all surveyed nations at 15.77%—less than half the Turkish figure.",
    band9Phrase:
      "“Swedish consumers recorded the lowest proportion in this category, with a modest 15.77% devoted to sustenance.”",
    grammaticalFocus: "Superlative Outlier Clause: 'recorded the lowest proportion in this category at 15.77%'",
    examinerFocus:
      "Critical outlier: represents the lower bound of the primary spending category.",
    parameterMetrics: [
      { label: "Category", value: "Food / Drink / Tobacco" },
      { label: "Expenditure", value: "15.77%" },
      { label: "Category Rank", value: "5th of 5 (Lowest in Food)" },
      { label: "Ratio to Turkey", value: "Roughly half of Turkey's 32.14%" }
    ]
  },

  // --- CLOTHING / FOOTWEAR (Secondary Category) ---
  {
    id: "italy-clothing",
    box: "clothing",
    country: "Italy",
    category: "Clothing/Footwear",
    number: "9.00%",
    name: "Italy • Clothing & Footwear (9.00%)",
    equipmentOrRole: "National Leader in Apparel (Rank 1 of 5)",
    color: "#d97706",
    pin: { left: "62%", top: "41%" },
    highlight: { x: "50%", y: "35%", w: "25%", h: "16%" },
    description:
      "Italy was the undisputed leader in clothing and footwear expenditure at exactly 9.00%, outstripping all other surveyed nations by a substantial margin.",
    band9Phrase:
      "“Turning to clothing and footwear, Italy was the undisputed leader at exactly 9.00%, outstripping all other surveyed countries by a noticeable margin.”",
    grammaticalFocus: "Participial Superlative: 'the undisputed leader at exactly 9.00%, outstripping all other surveyed countries'",
    examinerFocus:
      "Essential outlier: Italy defied the continental norm, dedicating nearly a tenth of its spending to apparel.",
    parameterMetrics: [
      { label: "Category", value: "Clothing / Footwear" },
      { label: "Expenditure", value: "9.00%" },
      { label: "Category Rank", value: "1st of 5 (Leader)" },
      { label: "Gap to 2nd", value: "+2.37% above Turkey" }
    ]
  },
  {
    id: "turkey-clothing",
    box: "clothing",
    country: "Turkey",
    category: "Clothing/Footwear",
    number: "6.63%",
    name: "Turkey • Clothing & Footwear (6.63%)",
    equipmentOrRole: "Rank 2 in Clothing (Cluster Anchor)",
    color: "#ea580c",
    pin: { left: "62%", top: "86%" },
    highlight: { x: "50%", y: "81%", w: "25%", h: "18%" },
    description:
      "Turkish expenditure on clothing and footwear reached 6.63%, heading a tightly grouped cluster alongside Spain and Ireland.",
    band9Phrase:
      "“...outstripping Turkey (6.63%), Spain (6.51%), and Ireland (6.43%), which all clustered closely around 6.5%.”",
    grammaticalFocus: "Clustering Verb: 'which all clustered closely around 6.5%'",
    examinerFocus:
      "Prevents mechanical reporting by clustering 3 similar values into a coherent narrative.",
    parameterMetrics: [
      { label: "Category", value: "Clothing / Footwear" },
      { label: "Expenditure", value: "6.63%" },
      { label: "Category Rank", value: "2nd of 5" },
      { label: "Cluster Band", value: "Tight 6.4%–6.6% bracket" }
    ]
  },
  {
    id: "spain-clothing",
    box: "clothing",
    country: "Spain",
    category: "Clothing/Footwear",
    number: "6.51%",
    name: "Spain • Clothing & Footwear (6.51%)",
    equipmentOrRole: "Rank 3 in Clothing (Cluster Member)",
    color: "#f59e0b",
    pin: { left: "62%", top: "56%" },
    highlight: { x: "50%", y: "51%", w: "25%", h: "16%" },
    description:
      "Spanish consumers directed 6.51% of expenditure towards clothing, virtually identical to figures recorded in Turkey and Ireland.",
    band9Phrase:
      "“Spanish consumers committed 6.51% to apparel, mirroring closely the proportions seen in Turkey and Ireland.”",
    grammaticalFocus: "Comparative Analogy: 'mirroring closely the proportions seen in...'",
    examinerFocus:
      "Highlights subtle parity between nations without repeating redundant data points.",
    parameterMetrics: [
      { label: "Category", value: "Clothing / Footwear" },
      { label: "Expenditure", value: "6.51%" },
      { label: "Category Rank", value: "3rd of 5" },
      { label: "Cluster Band", value: "Within 0.12% of Turkey" }
    ]
  },
  {
    id: "ireland-clothing",
    box: "clothing",
    country: "Ireland",
    category: "Clothing/Footwear",
    number: "6.43%",
    name: "Ireland • Clothing & Footwear (6.43%)",
    equipmentOrRole: "Rank 4 in Clothing (Cluster Member)",
    color: "#b45309",
    pin: { left: "62%", top: "26%" },
    highlight: { x: "50%", y: "19%", w: "25%", h: "16%" },
    description:
      "Irish spending on apparel stood at 6.43%, completing the trio of countries spending approximately one-fifteenth of their budget on attire.",
    band9Phrase:
      "“...followed closely by Ireland, where clothing spending was recorded at 6.43%.”",
    grammaticalFocus: "Relative Clause Qualification: 'where clothing spending was recorded at 6.43%'",
    examinerFocus:
      "Maintains paragraph flow while anchoring the lower edge of the 6.5% cluster.",
    parameterMetrics: [
      { label: "Category", value: "Clothing / Footwear" },
      { label: "Expenditure", value: "6.43%" },
      { label: "Category Rank", value: "4th of 5" },
      { label: "Cluster Band", value: "Within 0.08% of Spain" }
    ]
  },
  {
    id: "sweden-clothing",
    box: "clothing",
    country: "Sweden",
    category: "Clothing/Footwear",
    number: "5.40%",
    name: "Sweden • Clothing & Footwear (5.40%)",
    equipmentOrRole: "Rank 5 in Clothing (Category Floor)",
    color: "#78716c",
    pin: { left: "62%", top: "71%" },
    highlight: { x: "50%", y: "67%", w: "25%", h: "16%" },
    description:
      "Sweden recorded the lowest apparel figure across all five nations at 5.40%, trailing Italy by 3.60 percentage points.",
    band9Phrase:
      "“Sweden registered the lowest spending figure for apparel at just 5.40%, almost half that of Italy.”",
    grammaticalFocus: "Proportional Contrast: 'at just 5.40%, almost half that of Italy'",
    examinerFocus:
      "Bridges the top and bottom values within the clothing category for high Task Achievement.",
    parameterMetrics: [
      { label: "Category", value: "Clothing / Footwear" },
      { label: "Expenditure", value: "5.40%" },
      { label: "Category Rank", value: "5th of 5 (Lowest in Apparel)" },
      { label: "Contrast", value: "3.60% lower than Italy" }
    ]
  },

  // --- LEISURE / EDUCATION (Minority Category) ---
  {
    id: "turkey-leisure",
    box: "leisure",
    country: "Turkey",
    category: "Leisure/Education",
    number: "4.35%",
    name: "Turkey • Leisure & Education (4.35%)",
    equipmentOrRole: "Category Leader (Rank 1 of 5)",
    color: "#059669",
    pin: { left: "87%", top: "86%" },
    highlight: { x: "75%", y: "81%", w: "25%", h: "18%" },
    description:
      "Turkey allocated 4.35% of consumer funds to leisure and education, ranking first in this sector and leading in 2 of the 3 overall categories.",
    band9Phrase:
      "“Finally, leisure and education represented the smallest expenditure throughout; Turkey again topped the list at 4.35%.”",
    grammaticalFocus: "Adverbial Reiterative: 'Turkey again topped the list at 4.35%'",
    examinerFocus:
      "Shows macro synthesis by highlighting Turkey's dual leadership (Food and Leisure).",
    parameterMetrics: [
      { label: "Category", value: "Leisure / Education" },
      { label: "Expenditure", value: "4.35%" },
      { label: "Category Rank", value: "1st of 5 (Leader)" },
      { label: "Dual Lead", value: "Leads Food (32.14%) & Leisure (4.35%)" }
    ]
  },
  {
    id: "sweden-leisure",
    box: "leisure",
    country: "Sweden",
    category: "Leisure/Education",
    number: "3.22%",
    name: "Sweden • Leisure & Education (3.22%)",
    equipmentOrRole: "Rank 2 in Leisure (Parity with Italy)",
    color: "#10b981",
    pin: { left: "87%", top: "71%" },
    highlight: { x: "75%", y: "67%", w: "25%", h: "16%" },
    description:
      "Swedish households spent 3.22% on leisure and education—outstripping its clothing spending relative rank and matching Italy.",
    band9Phrase:
      "“...followed by Sweden (3.22%) and Italy (3.20%), which were virtually tied.”",
    grammaticalFocus: "Virtual Parity Phrase: 'which were virtually tied at 3.22% and 3.20% respectively'",
    examinerFocus:
      "Identifies that Sweden ranked higher in leisure (2nd) than in food (5th) or clothing (5th).",
    parameterMetrics: [
      { label: "Category", value: "Leisure / Education" },
      { label: "Expenditure", value: "3.22%" },
      { label: "Category Rank", value: "2nd of 5" },
      { label: "Parity", value: "Virtually identical to Italy (3.20%)" }
    ]
  },
  {
    id: "italy-leisure",
    box: "leisure",
    country: "Italy",
    category: "Leisure/Education",
    number: "3.20%",
    name: "Italy • Leisure & Education (3.20%)",
    equipmentOrRole: "Rank 3 in Leisure (Parity with Sweden)",
    color: "#047857",
    pin: { left: "87%", top: "41%" },
    highlight: { x: "75%", y: "35%", w: "25%", h: "16%" },
    description:
      "Italy allocated 3.20% to leisure and education, nearly identical to Sweden's 3.22% and comfortably above Ireland and Spain.",
    band9Phrase:
      "“Italian consumers allocated 3.20% to leisure and education, registering near parity with Sweden.”",
    grammaticalFocus: "Noun Phrase Precision: 'registering near parity with Sweden'",
    examinerFocus:
      "Highlights qualitative equilibrium between two distinct European economies.",
    parameterMetrics: [
      { label: "Category", value: "Leisure / Education" },
      { label: "Expenditure", value: "3.20%" },
      { label: "Category Rank", value: "3rd of 5" },
      { label: "Difference", value: "Merely 0.02% behind Sweden" }
    ]
  },
  {
    id: "ireland-leisure",
    box: "leisure",
    country: "Ireland",
    category: "Leisure/Education",
    number: "2.21%",
    name: "Ireland • Leisure & Education (2.21%)",
    equipmentOrRole: "Rank 4 in Leisure (Subdued Outlay)",
    color: "#065f46",
    pin: { left: "87%", top: "26%" },
    highlight: { x: "75%", y: "19%", w: "25%", h: "16%" },
    description:
      "Irish spending on leisure and education was a modest 2.21%, creating a sharp internal contrast with its high sustenance budget (28.91%).",
    band9Phrase:
      "“Ireland allocated a comparatively modest 2.21% to leisure and educational pursuits.”",
    grammaticalFocus: "Internal Disparity Marker: 'a comparatively modest 2.21% compared to 28.91% for sustenance'",
    examinerFocus:
      "Captures the profound internal budget imbalance in Irish expenditure.",
    parameterMetrics: [
      { label: "Category", value: "Leisure / Education" },
      { label: "Expenditure", value: "2.21%" },
      { label: "Category Rank", value: "4th of 5" },
      { label: "Internal Gap", value: "Food was 13 times higher (28.91%)" }
    ]
  },
  {
    id: "spain-leisure",
    box: "leisure",
    country: "Spain",
    category: "Leisure/Education",
    number: "1.98%",
    name: "Spain • Leisure & Education (1.98%)",
    equipmentOrRole: "Absolute Lowest Figure in Table (Rank 15 of 15)",
    color: "#0f766e",
    pin: { left: "87%", top: "56%" },
    highlight: { x: "75%", y: "51%", w: "25%", h: "16%" },
    description:
      "Spain committed just 1.98% to leisure and education—the sole figure under two percent and the lowest single value in the entire table.",
    band9Phrase:
      "“...while Spain registered the lowest single figure in the entire table at just 1.98%.”",
    grammaticalFocus: "Absolute Superlative Outlier: 'the lowest single figure in the entire table at just 1.98%'",
    examinerFocus:
      "Mandatory outlier: absolute floor value of the entire Cambridge dataset.",
    parameterMetrics: [
      { label: "Category", value: "Leisure / Education" },
      { label: "Expenditure", value: "1.98%" },
      { label: "Table Rank", value: "15th of 15 (Absolute Lowest)" },
      { label: "Threshold", value: "Sole sub-2.0% figure in dataset" }
    ]
  }
];

// Additional Macro Hotspots (Row / Column Focus)
export const CATEGORY_HOTSPOTS: HotspotDefinition[] = [
  {
    id: "cat-food",
    box: "food",
    number: "Food",
    name: "Category 1 • Food, Drink & Tobacco (15.77% – 32.14%)",
    equipmentOrRole: "Overwhelmingly Dominant Sector Across All Nations",
    color: "#2563eb",
    pin: { left: "37%", top: "8%" },
    highlight: { x: "25%", y: "0%", w: "25%", h: "100%" },
    description:
      "Sustenance consumed by far the greatest share of consumer income in all five countries, ranging from 15.77% in Sweden to 32.14% in Turkey.",
    band9Phrase:
      "“Overall, consumer expenditure was consistently highest on food, drinks, and tobacco across all five nations...”",
    grammaticalFocus: "Macro Superlative: 'was consistently highest on food, drinks, and tobacco across all five nations'",
    examinerFocus: "Pillar 1 of the zero-number macro overview.",
    parameterMetrics: [
      { label: "Category Scope", value: "Food, Drink & Tobacco" },
      { label: "Range", value: "15.77% (Sweden) – 32.14% (Turkey)" },
      { label: "Status", value: "Rank 1 expenditure in 100% of nations" }
    ]
  },
  {
    id: "cat-clothing",
    box: "clothing",
    number: "Clothing",
    name: "Category 2 • Clothing & Footwear (5.40% – 9.00%)",
    equipmentOrRole: "Universal Second-Rank Category Led by Italy",
    color: "#d97706",
    pin: { left: "62%", top: "8%" },
    highlight: { x: "50%", y: "0%", w: "25%", h: "100%" },
    description:
      "Apparel formed the secondary spending tier in every nation, consistently outranking leisure/education but remaining far below food.",
    band9Phrase:
      "“Clothing and footwear consistently represented the second highest category of spending, led by Italy.”",
    grammaticalFocus: "Consistent Trend Marker: 'consistently represented the second highest category of spending'",
    examinerFocus: "Pillar 2 of the macro comparative structure.",
    parameterMetrics: [
      { label: "Category Scope", value: "Clothing / Footwear" },
      { label: "Range", value: "5.40% (Sweden) – 9.00% (Italy)" },
      { label: "Status", value: "Rank 2 expenditure in 100% of nations" }
    ]
  },
  {
    id: "cat-leisure",
    box: "leisure",
    number: "Leisure",
    name: "Category 3 • Leisure & Education (1.98% – 4.35%)",
    equipmentOrRole: "Universal Lowest Sector in Every Country",
    color: "#059669",
    pin: { left: "87%", top: "8%" },
    highlight: { x: "75%", y: "0%", w: "25%", h: "100%" },
    description:
      "Recreational and educational expenditures received the lowest portion of consumer budgets throughout, never surpassing 4.35% in any country.",
    band9Phrase:
      "“...whereas leisure and education accounted for the smallest share of spending throughout.”",
    grammaticalFocus: "Minority Proportion Clause: 'accounted for the smallest share of spending throughout'",
    examinerFocus: "Pillar 3 of the macro overview contrast.",
    parameterMetrics: [
      { label: "Category Scope", value: "Leisure / Education" },
      { label: "Range", value: "1.98% (Spain) – 4.35% (Turkey)" },
      { label: "Status", value: "Rank 3 expenditure in 100% of nations" }
    ]
  }
];

export const COUNTRY_HOTSPOTS: HotspotDefinition[] = [
  {
    id: "country-turkey",
    box: "country",
    number: "Turkey",
    name: "Country • Turkey (Total Profile)",
    equipmentOrRole: "Dual Category Leader (Food & Leisure)",
    color: "#dc2626",
    pin: { left: "12%", top: "86%" },
    highlight: { x: "0%", y: "81%", w: "100%", h: "18%" },
    description:
      "Turkey exhibited the most distinctive profile, leading the table in food (32.14%) and leisure (4.35%), and ranking second in clothing (6.63%).",
    band9Phrase:
      "“Furthermore, Turkish consumers devoted significantly larger proportions of their budgets to sustenance than their European counterparts, while also leading the leisure sector.”",
    grammaticalFocus: "Comparative Outlier: 'devoted significantly larger proportions than their counterparts'",
    examinerFocus: "National outlier profile synthesis.",
    parameterMetrics: [
      { label: "Country", value: "Turkey" },
      { label: "Food", value: "32.14% (1st)" },
      { label: "Clothing", value: "6.63% (2nd)" },
      { label: "Leisure", value: "4.35% (1st)" }
    ]
  },
  {
    id: "country-ireland",
    box: "country",
    number: "Ireland",
    name: "Country • Ireland (Total Profile)",
    equipmentOrRole: "Second Highest Sustenance Spender (28.91%)",
    color: "#2563eb",
    pin: { left: "12%", top: "26%" },
    highlight: { x: "0%", y: "19%", w: "100%", h: "16%" },
    description:
      "Ireland directed nearly 29% of consumer expenditure towards food, drink, and tobacco—second only to Turkey—while allocating modest proportions to clothing (6.43%) and leisure/education (2.21%).",
    band9Phrase:
      "“Ireland followed closely behind Turkey in sustenance spending, with 28.91% of consumer budgets directed towards food, drink, and tobacco, while leisure received only 2.21%.”",
    grammaticalFocus: "Proportional Contrast: 'followed closely behind Turkey in sustenance spending'",
    examinerFocus: "Second highest essential expenditure profile.",
    parameterMetrics: [
      { label: "Country", value: "Ireland" },
      { label: "Food", value: "28.91% (2nd)" },
      { label: "Clothing", value: "6.43% (4th)" },
      { label: "Leisure", value: "2.21% (4th)" }
    ]
  },
  {
    id: "country-italy",
    box: "country",
    number: "Italy",
    name: "Country • Italy (Total Profile)",
    equipmentOrRole: "Undisputed Fashion Leader (9.00%)",
    color: "#d97706",
    pin: { left: "12%", top: "41%" },
    highlight: { x: "0%", y: "35%", w: "100%", h: "16%" },
    description:
      "Italy allocated 9.00% to clothing—the highest of any nation—while food spending was low at 16.36% and leisure was moderate at 3.20%.",
    band9Phrase:
      "“Italy was the undisputed leader in clothing and footwear expenditure at exactly 9.00%, outstripping all other surveyed countries.”",
    grammaticalFocus: "Superlative Focus: 'undisputed leader in clothing at exactly 9.00%'",
    examinerFocus: "National outlier in apparel expenditure.",
    parameterMetrics: [
      { label: "Country", value: "Italy" },
      { label: "Clothing", value: "9.00% (1st - Outlier)" },
      { label: "Food", value: "16.36% (4th)" },
      { label: "Leisure", value: "3.20% (3rd)" }
    ]
  },
  {
    id: "country-spain",
    box: "country",
    number: "Spain",
    name: "Country • Spain (Total Profile)",
    equipmentOrRole: "Lowest Leisure Allocation (1.98%)",
    color: "#e11d48",
    pin: { left: "12%", top: "56%" },
    highlight: { x: "0%", y: "51%", w: "100%", h: "16%" },
    description:
      "Spain spent 18.80% on food and 6.51% on clothing, while registering the lowest proportion of all surveyed nations on leisure and education at just 1.98%.",
    band9Phrase:
      "“Spanish expenditure on food stood at 18.80%, while its spending on leisure and education was the lowest recorded in the entire table at just 1.98%.”",
    grammaticalFocus: "Floor Marker: 'lowest recorded in the entire table at just 1.98%'",
    examinerFocus: "Lowest leisure allocation across all surveyed nations.",
    parameterMetrics: [
      { label: "Country", value: "Spain" },
      { label: "Food", value: "18.80% (3rd)" },
      { label: "Clothing", value: "6.51% (3rd)" },
      { label: "Leisure", value: "1.98% (5th - Floor)" }
    ]
  },
  {
    id: "country-sweden",
    box: "country",
    number: "Sweden",
    name: "Country • Sweden (Total Profile)",
    equipmentOrRole: "Lowest Food & Clothing, Strong Leisure (3.22%)",
    color: "#475569",
    pin: { left: "12%", top: "71%" },
    highlight: { x: "0%", y: "67%", w: "100%", h: "16%" },
    description:
      "Sweden recorded the lowest spending figures for both food (15.77%) and clothing (5.40%), yet committed a comparatively substantial 3.22% to leisure and education.",
    band9Phrase:
      "“Sweden registered the lowest spending figures for both sustenance (15.77%) and clothing (5.40%), yet allocated a comparatively healthy 3.22% to leisure and education.”",
    grammaticalFocus: "Dual Low Superlative: 'lowest spending figures for both sustenance and clothing'",
    examinerFocus: "Discretionary spending prioritization profile.",
    parameterMetrics: [
      { label: "Country", value: "Sweden" },
      { label: "Food", value: "15.77% (5th - Lowest)" },
      { label: "Clothing", value: "5.40% (5th - Lowest)" },
      { label: "Leisure", value: "3.22% (2nd)" }
    ]
  },
  {
    id: "cat-country",
    box: "country",
    number: "5 Nations",
    name: "Overview • All 5 Surveyed Countries (2002)",
    equipmentOrRole: "Pan-European Comparative Matrix",
    color: "#1e40af",
    pin: { left: "12%", top: "8%" },
    highlight: { x: "0%", y: "0%", w: "25%", h: "100%" },
    description:
      "The five countries (Ireland, Italy, Spain, Sweden, Turkey) show a consistent hierarchical spending pattern where food expenditure dominated, clothing ranked second, and leisure represented the smallest share.",
    band9Phrase:
      "“Overall, consumer expenditure was consistently highest on food, drinks, and tobacco across all five nations, whereas leisure and education accounted for the smallest share of spending throughout.”",
    grammaticalFocus: "Macro Overview Sentence: 'consistently highest... whereas leisure and education accounted for the smallest share'",
    examinerFocus: "Comprehensive Task Achievement overview without numerical figures.",
    parameterMetrics: [
      { label: "Survey Scope", value: "5 European Nations" },
      { label: "Year", value: "2002" },
      { label: "Dominant Sector", value: "Food, Drink & Tobacco (15.77% – 32.14%)" },
      { label: "Smallest Sector", value: "Leisure & Education (1.98% – 4.35%)" }
    ]
  }
];

export const ALL_HOTSPOTS: HotspotDefinition[] = [
  ...TABLE_CELL_HOTSPOTS,
  ...CATEGORY_HOTSPOTS,
  ...COUNTRY_HOTSPOTS
];

// Backward-compatibility shims
export const CEMENT_HOTSPOTS = TABLE_CELL_HOTSPOTS.filter((h) => h.box === "food");
export const CONCRETE_HOTSPOTS = TABLE_CELL_HOTSPOTS.filter(
  (h) => h.box === "clothing" || h.box === "leisure"
);

interface SmartBoardDiagramProps {
  onSelectCountry?: (id: string) => void;
  selectedCountryId?: string | null;
  highlightMode?: DiagramViewMode;
  onHighlightModeChange?: (mode: DiagramViewMode) => void;
  selectedCohortId?: string;
  onSelectCohort?: (id: string) => void;
  showInternalToolbar?: boolean;
  showDeepDiveCard?: boolean;
  forcedLayoutMode?: "stacked" | "split";
}

export const SmartBoardTableMatrix: React.FC<SmartBoardDiagramProps> = ({
  highlightMode = "all",
  onHighlightModeChange,
  selectedCohortId: controlledCategoryId,
  onSelectCohort,
  showInternalToolbar = true,
  showDeepDiveCard = true
}) => {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<"all" | "food" | "clothing" | "leisure">("all");
  const [activeHotspotId, setActiveHotspotId] = useState<string>("turkey-food");
  const [showPins, setShowPins] = useState<boolean>(true);
  const [viewFormat, setViewFormat] = useState<"interactive" | "side_by_side" | "original">("interactive");

  // Synchronize internal state when controlled selection changes from the presenter dock
  React.useEffect(() => {
    if (controlledCategoryId && controlledCategoryId !== "all") {
      setActiveHotspotId(controlledCategoryId);
      const match = ALL_HOTSPOTS.find((h) => h.id === controlledCategoryId);
      if (match && match.box !== "all" && match.box !== "country") {
        setActiveCategoryFilter(match.box as any);
      }
    }
  }, [controlledCategoryId]);

  React.useEffect(() => {
    if (
      highlightMode &&
      highlightMode !== "all" &&
      highlightMode !== "both"
    ) {
      const match = ALL_HOTSPOTS.find((h) => h.id === highlightMode);
      if (match) {
        setActiveHotspotId(match.id);
        if (match.box !== "all" && match.box !== "country") {
          setActiveCategoryFilter(match.box as any);
        }
      }
    }
  }, [highlightMode]);

  const activeHotspot =
    ALL_HOTSPOTS.find((h) => h.id === activeHotspotId) || TABLE_CELL_HOTSPOTS[0];

  const handleSelectHotspot = (hotspot: HotspotDefinition) => {
    setActiveHotspotId(hotspot.id);
    if (onSelectCohort) onSelectCohort(hotspot.id);
    if (onHighlightModeChange) onHighlightModeChange(hotspot.id);
  };

  const handleReset = () => {
    setActiveCategoryFilter("all");
    setActiveHotspotId("turkey-food");
    setShowPins(true);
    setViewFormat("interactive");
    if (onHighlightModeChange) onHighlightModeChange("all");
  };

  // 5 Countries Data in authentic pamphlet order: Ireland, Italy, Spain, Sweden, Turkey
  const tableRows = [
    {
      countryId: "ireland",
      countryName: "Ireland",
      foodId: "ireland-food",
      foodVal: "28.91%",
      clothingId: "ireland-clothing",
      clothingVal: "6.43%",
      leisureId: "ireland-leisure",
      leisureVal: "2.21%"
    },
    {
      countryId: "italy",
      countryName: "Italy",
      foodId: "italy-food",
      foodVal: "16.36%",
      clothingId: "italy-clothing",
      clothingVal: "9.00%",
      leisureId: "italy-leisure",
      leisureVal: "3.20%"
    },
    {
      countryId: "spain",
      countryName: "Spain",
      foodId: "spain-food",
      foodVal: "18.80%",
      clothingId: "spain-clothing",
      clothingVal: "6.51%",
      leisureId: "spain-leisure",
      leisureVal: "1.98%"
    },
    {
      countryId: "sweden",
      countryName: "Sweden",
      foodId: "sweden-food",
      foodVal: "15.77%",
      clothingId: "sweden-clothing",
      clothingVal: "5.40%",
      leisureId: "sweden-leisure",
      leisureVal: "3.22%"
    },
    {
      countryId: "turkey",
      countryName: "Turkey",
      foodId: "turkey-food",
      foodVal: "32.14%",
      clothingId: "turkey-clothing",
      clothingVal: "6.63%",
      leisureId: "turkey-leisure",
      leisureVal: "4.35%"
    }
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        width: "100%",
        fontFamily: "inherit"
      }}
    >
      {/* SmartBoard Presentation Controls Toolbar */}
      {showInternalToolbar && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
            background: "#ffffff",
            padding: "10px 14px",
            borderRadius: "14px",
            border: "1px solid var(--border-subtle, #cbd5e1)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
          }}
        >
          {/* View Toggles */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--slate-500, #64748b)" }}>
              View:
            </span>
            {[
              { id: "interactive", label: "Smartboard Interactive Table" },
              { id: "side_by_side", label: "Side-by-Side (Table + Original Scan)" },
              { id: "original", label: "Pamphlet Task Scan" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setViewFormat(tab.id as any)}
                style={{
                  padding: "5px 12px",
                  borderRadius: "8px",
                  fontSize: "0.78rem",
                  fontWeight: 750,
                  border: viewFormat === tab.id ? "1.5px solid #0f172a" : "1px solid #e2e8f0",
                  background: viewFormat === tab.id ? "#0f172a" : "#f8fafc",
                  color: viewFormat === tab.id ? "#ffffff" : "#334155",
                  cursor: "pointer",
                  transition: "all 0.15s ease"
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Quick-Jump Outlier Chips & Controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--slate-500, #64748b)" }}>
              Key Outliers:
            </span>

            {/* Quick Outlier Jump Buttons */}
            {[
              { id: "turkey-food", label: "Turkey Food (32.14% Peak)", color: "#2563eb" },
              { id: "italy-clothing", label: "Italy Clothing (9.00% Leader)", color: "#d97706" },
              { id: "spain-leisure", label: "Spain Leisure (1.98% Min)", color: "#059669" },
              { id: "sweden-food", label: "Sweden Food (15.77% Lowest)", color: "#475569" },
              { id: "turkey-leisure", label: "Turkey Leisure (4.35% Peak)", color: "#0f766e" }
            ].map((chip) => {
              const isSelected = activeHotspotId === chip.id;
              const hotspot = ALL_HOTSPOTS.find((h) => h.id === chip.id);
              return (
                <button
                  key={chip.id}
                  onClick={() => hotspot && handleSelectHotspot(hotspot)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    padding: "3px 9px",
                    borderRadius: "6px",
                    fontSize: "0.74rem",
                    fontWeight: 750,
                    border: isSelected ? `2px solid ${chip.color}` : "1px solid #e2e8f0",
                    background: isSelected ? `${chip.color}18` : "#ffffff",
                    color: isSelected ? chip.color : "#475569",
                    cursor: "pointer",
                    transition: "all 0.15s ease"
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: chip.color
                    }}
                  />
                  <span>{chip.label}</span>
                </button>
              );
            })}

            {/* Toggle Pins */}
            <button
              onClick={() => setShowPins(!showPins)}
              title={showPins ? "Hide Hotspot Pin Beacons" : "Show Hotspot Pin Beacons"}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                padding: "3px 8px",
                borderRadius: "6px",
                fontSize: "0.74rem",
                fontWeight: 700,
                border: "1px solid #e2e8f0",
                background: showPins ? "#f8fafc" : "#e2e8f0",
                color: "#475569",
                cursor: "pointer"
              }}
            >
              {showPins ? <Eye size={12} /> : <EyeOff size={12} />}
              <span>{showPins ? "Pins On" : "Pins Off"}</span>
            </button>

            {/* Reset */}
            <button
              onClick={handleReset}
              title="Reset Filters"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                padding: "3px 8px",
                borderRadius: "6px",
                fontSize: "0.74rem",
                fontWeight: 700,
                border: "1px solid #e2e8f0",
                background: "#f1f5f9",
                color: "#475569",
                cursor: "pointer"
              }}
            >
              <RotateCcw size={12} />
              <span>Reset</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Diagrams Stage — EXACT IDENTICAL FORMAT TO STUDENT PAMPHLET */}
      <div
        style={{
          background: "#ffffff",
          borderRadius: "18px",
          border: "1.5px solid var(--border-subtle, #cbd5e1)",
          padding: "16px 20px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          alignItems: "center"
        }}
      >
        {/* Stage Header Info Banner */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", flexWrap: "wrap", gap: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Table size={18} color="#2563eb" />
            <strong style={{ fontSize: "0.98rem", color: "#0f172a" }}>
              Authentic Task Visual • Identical Format to Student Pamphlet
            </strong>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                fontSize: "0.74rem",
                fontWeight: 750,
                background: "#eff6ff",
                color: "#1e40af",
                padding: "3px 10px",
                borderRadius: "6px",
                border: "1px solid #bfdbfe"
              }}
            >
              Touch any cell, header, or pin to sync with the Presenter Dock
            </span>
          </div>
        </div>

        {/* Visual Content Container (Interactive Table, Side-by-Side, or Scan) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              viewFormat === "side_by_side"
                ? "repeat(2, minmax(0, 1fr))"
                : "minmax(0, 100%)",
            gap: "20px",
            width: "100%",
            maxWidth: viewFormat === "side_by_side" ? "1060px" : "860px",
            margin: "0 auto",
            alignItems: "center"
          }}
        >
          {/* Interactive SmartBoard Table (Rendered in identical Cambridge Blue layout) */}
          {(viewFormat === "interactive" || viewFormat === "side_by_side") && (
            <div
              style={{
                width: "100%",
                background: "#ffffff",
                border: "2px solid #cbd5e1",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
                position: "relative"
              }}
            >
              {/* Authentic Cambridge Prompt Card directly matching Image 1 */}
              <div
                style={{
                  background: "#f8fafc",
                  borderBottom: "2px solid #cbd5e1",
                  padding: "16px 20px",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  color: "#1e293b",
                  fontSize: "1.02rem",
                  lineHeight: 1.55
                }}
              >
                <p style={{ margin: "0 0 10px 0" }}>
                  The table below gives information on consumer spending on different items in five different countries in 2002.
                </p>
                <p style={{ margin: "0 0 10px 0" }}>
                  Summarise the information by selecting and reporting the main features, and make comparisons where relevant.
                </p>
                <p style={{ margin: 0, fontWeight: 700 }}>
                  Write at least 150 words.
                </p>
              </div>

              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  textAlign: "center"
                }}
              >
                {/* Cambridge Pamphlet Steel Blue Header Bar */}
                <thead>
                  <tr style={{ background: "#346294", color: "#ffffff" }}>
                    <th
                      style={{
                        padding: "14px 16px",
                        textAlign: "left",
                        fontSize: "0.98rem",
                        fontWeight: 700,
                        borderRight: "2px solid #ffffff",
                        borderBottom: "2px solid #ffffff",
                        width: "25%",
                        cursor: "pointer",
                        background: activeHotspot.id === "cat-country" ? "#234973" : "#346294"
                      }}
                      onClick={() => {
                        const h = ALL_HOTSPOTS.find((x) => x.id === "cat-country");
                        if (h) handleSelectHotspot(h);
                        else handleReset();
                      }}
                      title="Country column — Click to view national breakdown overview"
                    >
                      Country
                    </th>
                    <th
                      style={{
                        padding: "14px 16px",
                        fontSize: "0.98rem",
                        fontWeight: 700,
                        borderRight: "2px solid #ffffff",
                        borderBottom: "2px solid #ffffff",
                        width: "25%",
                        cursor: "pointer",
                        background: activeHotspot.category === "Food/Drink/Tobacco" ? "#234973" : "#346294",
                        transition: "background 0.2s",
                        textAlign: "left"
                      }}
                      onClick={() => {
                        const h = ALL_HOTSPOTS.find((x) => x.id === "cat-food");
                        if (h) handleSelectHotspot(h);
                      }}
                      title="Food/Drink/Tobacco column — Click to view category overview"
                    >
                      Food/ Drink/<br />Tobacco
                    </th>
                    <th
                      style={{
                        padding: "14px 16px",
                        fontSize: "0.98rem",
                        fontWeight: 700,
                        borderRight: "2px solid #ffffff",
                        borderBottom: "2px solid #ffffff",
                        width: "25%",
                        cursor: "pointer",
                        background: activeHotspot.category === "Clothing/Footwear" ? "#234973" : "#346294",
                        transition: "background 0.2s",
                        textAlign: "left"
                      }}
                      onClick={() => {
                        const h = ALL_HOTSPOTS.find((x) => x.id === "cat-clothing");
                        if (h) handleSelectHotspot(h);
                      }}
                      title="Clothing/Footwear column — Click to view category overview"
                    >
                      Clothing/<br />Footwear
                    </th>
                    <th
                      style={{
                        padding: "14px 16px",
                        fontSize: "0.98rem",
                        fontWeight: 700,
                        borderBottom: "2px solid #ffffff",
                        width: "25%",
                        cursor: "pointer",
                        background: activeHotspot.category === "Leisure/Education" ? "#234973" : "#346294",
                        transition: "background 0.2s",
                        textAlign: "left"
                      }}
                      onClick={() => {
                        const h = ALL_HOTSPOTS.find((x) => x.id === "cat-leisure");
                        if (h) handleSelectHotspot(h);
                      }}
                      title="Leisure/Education column — Click to view category overview"
                    >
                      Leisure/<br />Education
                    </th>
                  </tr>
                </thead>

                {/* 5 Authentic Country Rows with Zebra Tint and White Dividers */}
                <tbody>
                  {tableRows.map((row, index) => {
                    const isEven = index % 2 === 0;
                    // Matching original pamphlet zebra soft-blue colors
                    const cellBg = isEven ? "#cddbe8" : "#e4edf5";

                    const isFoodSelected = activeHotspotId === row.foodId;
                    const isClothingSelected = activeHotspotId === row.clothingId;
                    const isLeisureSelected = activeHotspotId === row.leisureId;
                    const isCountrySelected = activeHotspot.country === row.countryName;

                    return (
                      <tr key={row.countryId} style={{ borderBottom: "2px solid #ffffff" }}>
                        {/* Country Cell (Medium Steel Blue Background with White Text) */}
                        <td
                          onClick={() => {
                            const h = ALL_HOTSPOTS.find((x) => x.id === `country-${row.countryId}`) || ALL_HOTSPOTS.find((x) => x.id === row.foodId);
                            if (h) handleSelectHotspot(h);
                          }}
                          style={{
                            background: isCountrySelected ? "#2a598c" : "#4478ae",
                            color: "#ffffff",
                            padding: "14px 16px",
                            textAlign: "left",
                            fontWeight: 700,
                            fontSize: "0.96rem",
                            borderRight: "2px solid #ffffff",
                            cursor: "pointer",
                            transition: "background 0.15s ease",
                            position: "relative"
                          }}
                          title={`Click to inspect ${row.countryName}'s entire national profile`}
                        >
                          {row.countryName}
                          {isCountrySelected && (
                            <span
                              style={{
                                marginLeft: "8px",
                                display: "inline-block",
                                width: "7px",
                                height: "7px",
                                borderRadius: "50%",
                                background: "#fbbf24"
                              }}
                            />
                          )}
                        </td>

                        {/* Food/Drink/Tobacco Cell */}
                        <td
                          onClick={() => {
                            const h = ALL_HOTSPOTS.find((x) => x.id === row.foodId);
                            if (h) handleSelectHotspot(h);
                          }}
                          style={{
                            background: isFoodSelected
                              ? "#bfdbfe"
                              : cellBg,
                            padding: "14px 16px",
                            fontWeight: isFoodSelected ? 800 : 650,
                            fontSize: "0.98rem",
                            color: isFoodSelected ? "#1e40af" : "#1e293b",
                            borderRight: "2px solid #ffffff",
                            cursor: "pointer",
                            position: "relative",
                            outline: isFoodSelected ? "2.5px solid #2563eb" : "none",
                            outlineOffset: "-2px",
                            transition: "all 0.15s ease"
                          }}
                        >
                          <span>{row.foodVal}</span>
                          {showPins && (
                            <div
                              style={{
                                position: "absolute",
                                top: "4px",
                                right: "6px",
                                width: isFoodSelected ? "8px" : "6px",
                                height: isFoodSelected ? "8px" : "6px",
                                borderRadius: "50%",
                                background: isFoodSelected ? "#2563eb" : "#3b82f680",
                                boxShadow: isFoodSelected ? "0 0 6px #2563eb" : "none"
                              }}
                            />
                          )}
                          {row.foodId === "turkey-food" && (
                            <span
                              style={{
                                position: "absolute",
                                bottom: "2px",
                                right: "6px",
                                fontSize: "0.62rem",
                                fontWeight: 800,
                                color: "#1e40af",
                                background: "#dbeafe",
                                padding: "1px 4px",
                                borderRadius: "4px"
                              }}
                            >
                              PEAK
                            </span>
                          )}
                        </td>

                        {/* Clothing/Footwear Cell */}
                        <td
                          onClick={() => {
                            const h = ALL_HOTSPOTS.find((x) => x.id === row.clothingId);
                            if (h) handleSelectHotspot(h);
                          }}
                          style={{
                            background: isClothingSelected
                              ? "#fed7aa"
                              : cellBg,
                            padding: "14px 16px",
                            fontWeight: isClothingSelected ? 800 : 650,
                            fontSize: "0.98rem",
                            color: isClothingSelected ? "#9a3412" : "#1e293b",
                            borderRight: "2px solid #ffffff",
                            cursor: "pointer",
                            position: "relative",
                            outline: isClothingSelected ? "2.5px solid #d97706" : "none",
                            outlineOffset: "-2px",
                            transition: "all 0.15s ease"
                          }}
                        >
                          <span>{row.clothingVal}</span>
                          {showPins && (
                            <div
                              style={{
                                position: "absolute",
                                top: "4px",
                                right: "6px",
                                width: isClothingSelected ? "8px" : "6px",
                                height: isClothingSelected ? "8px" : "6px",
                                borderRadius: "50%",
                                background: isClothingSelected ? "#d97706" : "#f59e0b80",
                                boxShadow: isClothingSelected ? "0 0 6px #d97706" : "none"
                              }}
                            />
                          )}
                          {row.clothingId === "italy-clothing" && (
                            <span
                              style={{
                                position: "absolute",
                                bottom: "2px",
                                right: "6px",
                                fontSize: "0.62rem",
                                fontWeight: 800,
                                color: "#9a3412",
                                background: "#ffedd5",
                                padding: "1px 4px",
                                borderRadius: "4px"
                              }}
                            >
                              LEADER
                            </span>
                          )}
                        </td>

                        {/* Leisure/Education Cell */}
                        <td
                          onClick={() => {
                            const h = ALL_HOTSPOTS.find((x) => x.id === row.leisureId);
                            if (h) handleSelectHotspot(h);
                          }}
                          style={{
                            background: isLeisureSelected
                              ? "#bbf7d0"
                              : cellBg,
                            padding: "14px 16px",
                            fontWeight: isLeisureSelected ? 800 : 650,
                            fontSize: "0.98rem",
                            color: isLeisureSelected ? "#065f46" : "#1e293b",
                            cursor: "pointer",
                            position: "relative",
                            outline: isLeisureSelected ? "2.5px solid #059669" : "none",
                            outlineOffset: "-2px",
                            transition: "all 0.15s ease"
                          }}
                        >
                          <span>{row.leisureVal}</span>
                          {showPins && (
                            <div
                              style={{
                                position: "absolute",
                                top: "4px",
                                right: "6px",
                                width: isLeisureSelected ? "8px" : "6px",
                                height: isLeisureSelected ? "8px" : "6px",
                                borderRadius: "50%",
                                background: isLeisureSelected ? "#059669" : "#10b98180",
                                boxShadow: isLeisureSelected ? "0 0 6px #059669" : "none"
                              }}
                            />
                          )}
                          {row.leisureId === "spain-leisure" && (
                            <span
                              style={{
                                position: "absolute",
                                bottom: "2px",
                                right: "6px",
                                fontSize: "0.62rem",
                                fontWeight: 800,
                                color: "#065f46",
                                background: "#dcfce7",
                                padding: "1px 4px",
                                borderRadius: "4px"
                              }}
                            >
                              LOWEST
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {/* Original Student Pamphlet Image Scan */}
          {(viewFormat === "original" || viewFormat === "side_by_side") && (
            <div
              style={{
                width: "100%",
                background: "#ffffff",
                border: "2px solid #cbd5e1",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <div
                style={{
                  background: "#f8fafc",
                  width: "100%",
                  padding: "6px 12px",
                  borderBottom: "1px solid #e2e8f0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <span style={{ fontSize: "0.75rem", fontWeight: 750, color: "#475569" }}>
                  Official Cambridge IELTS 7 Test 1 Task Prompt &amp; Table
                </span>
                <span
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 800,
                    padding: "2px 6px",
                    borderRadius: "4px",
                    background: "#eff6ff",
                    color: "#1e40af"
                  }}
                >
                  Pamphlet Scan
                </span>
              </div>
              <img
                src="materials/consumer_spending_table_2002.jpg"
                alt="Original Cambridge Student Pamphlet Task 1 Table"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "contain"
                }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Synchronized Smartboard Pedagogical Deep Dive Card */}
      {showDeepDiveCard && activeHotspot && (
        <div
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            border: `1.5px solid ${activeHotspot.color}40`,
            padding: "16px 20px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
            display: "flex",
            flexDirection: "column",
            gap: "10px"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Award size={18} color={activeHotspot.color} />
              <h4 style={{ fontSize: "1.02rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
                {activeHotspot.name}
              </h4>
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  padding: "2px 8px",
                  borderRadius: "6px",
                  background: `${activeHotspot.color}15`,
                  color: activeHotspot.color
                }}
              >
                {activeHotspot.equipmentOrRole}
              </span>
            </div>

            <span
              style={{
                fontSize: "0.74rem",
                fontWeight: 800,
                padding: "3px 10px",
                borderRadius: "8px",
                background: "#f1f5f9",
                color: "#334155"
              }}
            >
              {activeHotspot.grammaticalFocus}
            </span>
          </div>

          <p style={{ fontSize: "0.88rem", color: "#334155", margin: 0, lineHeight: 1.5 }}>
            <strong>Analytical Insight:</strong> {activeHotspot.description}
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderLeft: `3.5px solid ${activeHotspot.color}`,
              borderRadius: "8px",
              padding: "10px 14px",
              fontSize: "0.92rem",
              color: "#1e293b",
              lineHeight: 1.55,
              fontStyle: "italic"
            }}
          >
            {activeHotspot.band9Phrase}
          </div>

          {/* Key Metrics Strip */}
          {activeHotspot.parameterMetrics && activeHotspot.parameterMetrics.length > 0 && (
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "2px" }}>
              {activeHotspot.parameterMetrics.map((pm) => (
                <div
                  key={pm.label}
                  style={{
                    background: "#f1f5f9",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    fontSize: "0.74rem",
                    color: "#334155"
                  }}
                >
                  <strong style={{ color: "#0f172a" }}>{pm.label}:</strong> {pm.value}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
