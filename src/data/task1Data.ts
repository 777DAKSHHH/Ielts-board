import type {
  Task1Data,
  VocabItem,
  CountryMarketData,
  MusicFormatItem,
  ComparisonHotspot,
  PacificConditionFeature,
  SchoolData,
  Task1DiagramData
} from "../types";

export type {
  Task1Data,
  VocabItem,
  CountryMarketData,
  MusicFormatItem,
  ComparisonHotspot,
  PacificConditionFeature,
  SchoolData,
  Task1DiagramData
};

export const MUSIC_FORMATS: MusicFormatItem[] = [
  {
    id: "shop_cds",
    name: "CDs bought in shops",
    shortLabel: "In-Store CDs",
    category: "Physical Retail",
    description: "Traditional brick-and-mortar retail purchase of physical compact discs.",
    profits: {
      germany: {
        y1997: 40,
        y2007: 25,
        change: "-15m (-37.5%)",
        band9Citation: "slid from 40 million euros to 25 million"
      },
      france: {
        y1997: 25,
        y2007: 15,
        change: "-10m (-40.0%)",
        band9Citation: "dropped from 25 million to 15 million euros"
      },
      italy: {
        y1997: 20,
        y2007: 14,
        change: "-6m (-30.0%)",
        band9Citation: "contracted from 20 million to 14 million euros"
      }
    },
    trendSummary: "Consistently the dominant profit generator across all three nations in both years, despite suffering substantial drops by 2007.",
    band9Phrase: "“Although retail purchases of CDs in shops remained the undisputed commercial backbone, profits shrank substantially in every country over the 10-year span.”",
    keyFeature: "Highest profit across all categories in both 1997 and 2007."
  },
  {
    id: "online_cds",
    name: "CDs bought online",
    shortLabel: "Online CDs",
    category: "Digital / Online",
    description: "Remote ordering of physical compact discs via internet web stores.",
    profits: {
      germany: {
        y1997: 3,
        y2007: 8,
        change: "+5m (+167%)",
        band9Citation: "more than doubled from 3 million to 8 million euros"
      },
      france: {
        y1997: 1.5,
        y2007: 7,
        change: "+5.5m (+367%)",
        band9Citation: "surged from a negligible 1.5 million to 7 million euros"
      },
      italy: {
        y1997: 0,
        y2007: 1.5,
        change: "+1.5m (from nil)",
        band9Citation: "emerged from zero to register approximately 1.5 million euros"
      }
    },
    trendSummary: "Experienced rapid expansion, becoming the second most profitable channel in Germany and France by 2007.",
    band9Phrase: "“Conversely, remote online CD orders gathered significant momentum, multiplying several-fold in Germany and France to reach 8 million and 7 million euros respectively.”",
    keyFeature: "Strongest growth trajectory among physical media delivery."
  },
  {
    id: "downloads",
    name: "Internet downloads",
    shortLabel: "Downloads",
    category: "Digital / Online",
    description: "Pure digital music file purchases downloaded directly over the web.",
    profits: {
      germany: {
        y1997: 0,
        y2007: 5,
        change: "+5m (from nil)",
        band9Citation: "emerged from zero to yield 5 million euros"
      },
      france: {
        y1997: 0,
        y2007: 5,
        change: "+5m (from nil)",
        band9Citation: "matched Germany’s tally at exactly 5 million euros"
      },
      italy: {
        y1997: 0,
        y2007: 1.5,
        change: "+1.5m (from nil)",
        band9Citation: "generated a modest 1.5 million euros from a standing start"
      }
    },
    trendSummary: "Completely absent in 1997; rose to become a major revenue stream by 2007, earning €5m each in Germany and France.",
    band9Phrase: "“Internet downloads, completely nonexistent at the start of the timeframe, emerged as a viable revenue stream contributing 5 million euros apiece in Germany and France.”",
    keyFeature: "Zero in 1997 across all countries; viable digital stream by 2007."
  },
  {
    id: "cassettes",
    name: "Cassettes",
    shortLabel: "Cassettes",
    category: "Legacy Analog",
    description: "Magnetic tape audio cassettes popular throughout the 1980s and 1990s.",
    profits: {
      germany: {
        y1997: 5,
        y2007: 0,
        change: "-5m (-100%)",
        band9Citation: "fell from 5 million euros to complete extinction"
      },
      france: {
        y1997: 0.5,
        y2007: 0,
        change: "-0.5m (-100%)",
        band9Citation: "dwindled from under 1 million euros to nil"
      },
      italy: {
        y1997: 6,
        y2007: 0,
        change: "-6m (-100%)",
        band9Citation: "collapsed from an initial peak of 6 million euros to zero"
      }
    },
    trendSummary: "Generated modest profits in 1997 (especially in Italy at €6m and Germany at €5m), but suffered total obsolescence by 2007.",
    band9Phrase: "“Cassettes, which had yielded 6 million euros in Italy and 5 million in Germany in 1997, became entirely obsolete, recording zero revenue by 2007.”",
    keyFeature: "Total phase-out: from €6m/€5m down to 0."
  },
  {
    id: "vinyl",
    name: "Vinyl singles and LPs",
    shortLabel: "Vinyl LPs",
    category: "Legacy Analog",
    description: "Polyvinyl chloride phonograph turntable discs.",
    profits: {
      germany: {
        y1997: 2,
        y2007: 0,
        change: "-2m (-100%)",
        band9Citation: "dropped from 2 million euros to zero"
      },
      france: {
        y1997: 0,
        y2007: 0,
        change: "0m (nil in both)",
        band9Citation: "remained virtually nonexistent in both reporting years"
      },
      italy: {
        y1997: 3,
        y2007: 0,
        change: "-3m (-100%)",
        band9Citation: "declined from 3 million euros to zero"
      }
    },
    trendSummary: "A niche analog medium that yielded €2m–€3m in Germany and Italy in 1997 before disappearing entirely by 2007.",
    band9Phrase: "“Vinyl records followed an identical downward trajectory, vanishing entirely from the balance sheets of all three territories after modest initial returns in 1997.”",
    keyFeature: "Disappeared completely by 2007."
  }
];

export const COUNTRY_MARKETS: CountryMarketData[] = [
  {
    id: "germany",
    name: "Germany",
    fillPattern: "solid",
    barColor: "#1e293b",
    badge: "Dominant Market Leader",
    total1997: 50,
    total2007: 38,
    netChange: "-12m (-24%)",
    summary: "Led the company's profits in virtually every format across both years, recording €40m in store CDs in 1997 and pioneering online sales in 2007.",
    dominantFormat: "CDs bought in shops (€40m in 1997, €25m in 2007)"
  },
  {
    id: "france",
    name: "France",
    fillPattern: "empty",
    barColor: "#f8fafc",
    badge: "Strong Second Tier",
    total1997: 27,
    total2007: 27,
    netChange: "0m (Net Stable)",
    summary: "Generated €25m in shop CDs in 1997; balanced its €10m loss in store CDs by 2007 with rapid gains in online CDs (€7m) and downloads (€5m).",
    dominantFormat: "CDs bought in shops (€25m in 1997, €15m in 2007)"
  },
  {
    id: "italy",
    name: "Italy",
    fillPattern: "textured",
    barColor: "#94a3b8",
    badge: "Analog Heavy, Slower Digital Shift",
    total1997: 29,
    total2007: 17,
    netChange: "-12m (-41%)",
    summary: "Relied heavily on legacy cassettes (€6m) and vinyl (€3m) in 1997; when analog vanished and shop CDs fell, its digital channels only reached €1.5m each.",
    dominantFormat: "CDs bought in shops (€20m in 1997, €14m in 2007)"
  }
];

export const TASK1_HOTSPOTS: ComparisonHotspot[] = [
  {
    id: "shop_cds_dominance",
    title: "Lion’s Share: In-Store CDs",
    zone: "shop_cds",
    normalState: "Accounted for €40m in Germany, €25m in France, and €20m in Italy (over 85% of total company profit).",
    elNinoState: "Fell sharply to €25m in Germany, €15m in France, and €14m in Italy, yet still remained the largest revenue earner by far.",
    contrastKey: "Universal contraction across all three nations yet persistent dominance over all other media.",
    band9Sentence: "“Although earnings from CDs bought in shops dropped substantially across all three nations by 2007, this channel remained by far the single greatest contributor to total profit.”"
  },
  {
    id: "digital_revolution",
    title: "Digital Transition: Online CDs & Downloads",
    zone: "digital",
    normalState: "Negligible online CDs (€3m in Germany, €1.5m in France, 0 in Italy) and exactly zero internet downloads.",
    elNinoState: "Online CDs rose to €8m (Germany), €7m (France), and €1.5m (Italy); downloads reached €5m in Germany/France and €1.5m in Italy.",
    contrastKey: "Rapid expansion from nonexistence or trivial amounts to vital commercial streams.",
    band9Sentence: "“Conversely, digital and remote distribution emerged rapidly, with online CD sales and internet downloads generating combined profits of 13 million euros in Germany and 12 million in France by 2007.”"
  },
  {
    id: "analog_extinction",
    title: "Analog Obsolescence: Cassettes & Vinyl",
    zone: "legacy_analog",
    normalState: "Cassettes generated €6m in Italy and €5m in Germany; vinyl produced €3m in Italy and €2m in Germany.",
    elNinoState: "Both formats were completely wiped out, generating 0 million euros in all three countries.",
    contrastKey: "Total commercial extinction within a single decade.",
    band9Sentence: "“Meanwhile, traditional analog media underwent total obsolescence; cassettes and vinyl, which had generated combined returns of 9 million euros in Italy in 1997, recorded zero profit a decade later.”"
  },
  {
    id: "national_rankings",
    title: "Geographic Hierarchy: Germany vs France vs Italy",
    zone: "national_contrast",
    normalState: "Germany led overall (~€50m), Italy placed second (~€29m due to strong cassette sales), and France stood third (~€27m).",
    elNinoState: "Germany retained top position (~€38m), France held firm at ~€27m via rapid digital adoption, while Italy sank to ~€17m.",
    contrastKey: "Germany’s commanding leadership and Italy’s steep net loss due to slow digital migration.",
    band9Sentence: "“Geographically, Germany remained the most lucrative territory throughout, while Italy experienced the sharpest overall decline as its reliance on phased-out analog formats took a heavy toll.”"
  }
];

export const PACIFIC_CONDITIONS: PacificConditionFeature[] = [
  {
    id: "normal",
    title: "1997 Baseline Profit Distribution",
    badge: "Store CDs & Analog Baseline",
    tradeWinds: "Retail CDs in shops dominated (>85% of total profits across all nations)",
    upperWinds: "Internet downloads completely non-existent (0 €m across all three markets)",
    waterThermocline: "Online CD sales virtually negligible (€3m in Germany, €1.5m in France, 0 in Italy)",
    upwellingStatus: "Cassettes and vinyl still provided noticeable secondary returns, especially in Italy and Germany",
    rainfallPattern: "Germany generated the greatest profit volume at ~€50m total",
    australiaCondition: {
      climate: "Germany: Market leader (€40m in store CDs, €5m cassettes, €3m online CDs)",
      weather: "Solid physical retail footprint",
      rainfall: "€50m total turnover",
      visualDetail: "Germany's black bars represent the longest reach across almost every category"
    },
    peruCondition: {
      climate: "Italy: Highest analog reliance (€6m cassettes, €3m vinyl, €20m store CDs)",
      marineLife: "Second in total profitability in 1997 (~€29m)",
      fisheryStatus: "Cassettes outearned Germany's cassette sales",
      visualDetail: "Italy showed higher cassette and vinyl returns than France"
    },
    band9Phrase: "“In 1997, retail purchases of CDs in shops represented the overwhelming lion’s share of SMG Entertainment’s earnings, with Germany yielding a remarkable 40 million euros.”",
    summary: "1997 was marked by absolute dominance of physical store CD sales, moderate cassette and vinyl sales, and zero internet downloads."
  },
  {
    id: "el_nino",
    title: "2007 Structural Digital Shift",
    badge: "Contraction & Digital Emergence",
    tradeWinds: "Shop CD sales contracted steeply across all three nations (by €6m to €15m)",
    upperWinds: "Internet downloads surfaced strongly to €5m in Germany and France",
    waterThermocline: "Online CD sales surged to €8m in Germany and €7m in France",
    upwellingStatus: "Analog media (cassettes and vinyl) suffered total commercial extinction (0 €m)",
    rainfallPattern: "Germany remained the top revenue market at ~€38m; France held steady at ~€27m",
    australiaCondition: {
      climate: "Germany & France: Swift digital uptake (€12m-€13m in combined online & downloads)",
      weather: "Shift toward modern remote purchasing",
      rainfall: "Offset physical losses",
      visualDetail: "Bars for online CDs and downloads grew noticeably in Germany and France"
    },
    peruCondition: {
      climate: "Italy: Slowest digital adoption (€1.5m in online CDs and €1.5m in downloads)",
      marineLife: "Experienced sharpest overall drop (~€17m total)",
      fisheryStatus: "Zero analog buffer remaining",
      visualDetail: "All Italian bars contracted significantly compared to 1997"
    },
    band9Phrase: "“By 2007, the music company’s revenue landscape was restructured by the demise of analog media, a sharp decline in retail CD sales, and the rise of digital downloads.”",
    summary: "2007 witnessed the complete extinction of cassettes and vinyl, substantial contraction in store CDs, and a surge in digital distribution."
  }
];

export const TASK1_DATA: Task1Data = {
  id: "task1-smg-entertainment",
  taskType: "Comparative Bar Graphs (Two Time Periods)",
  title: "SMG Entertainment Record Company Profit (1997 vs 2007)",
  companyName: "SMG Entertainment",
  unit: "Million Euros (€m)",
  questionText:
    "The bar graphs show the profit made by SMG entertainment (a record company) in three countries. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
  imageFileName: "smg_entertainment_chart.png",
  hdImageFileName: "smg_entertainment_chart.png",
  scanImageFileName: "smg_entertainment_chart.png",
  audioUrl: "/audio/task1_briefing.mp3",
  audioClueText:
    "Welcome students to Task 1 analysis. You are examining two horizontal bar graphs documenting the profits generated by SMG Entertainment, an international record label, across Germany, France, and Italy in 1997 and 2007. Listen carefully to the structural shift: at the start of the decade, physical shop-bought compact discs formed the immense bulk of company earnings, generating up to 40 million euros in Germany alone. Traditional analog tapes and vinyl records still brought in modest profits, while digital downloads were nonexistent. However, over the subsequent ten years, a technological revolution transformed the industry: cassettes and vinyl suffered complete extinction, shop CD profits plummeted, and remote online channels emerged as pivotal new revenue streams.",
  sampleIntro:
    "The horizontal bar charts illustrate the profits earned by SMG Entertainment, a music record company, across five distinct audio distribution formats in Germany, France, and Italy between 1997 and 2007.",
  sampleOverview:
    "Overall, retail store-bought compact discs remained the primary source of revenue in all three nations throughout the decade, despite experiencing marked contractions by 2007. Concurrently, legacy analog formats—namely cassettes and vinyl—became completely obsolete, while digital distribution channels, comprising online CD purchases and internet downloads, witnessed substantial growth, with Germany consistently generating the highest overall profits.",
  timingSeconds: 180,
  formats: MUSIC_FORMATS,
  countries: COUNTRY_MARKETS,
  diagramData: {
    conditions: PACIFIC_CONDITIONS,
    hotspots: TASK1_HOTSPOTS,
    comparisonsSummary: {
      "Shop CDs": "Dominant across both decades; Germany led at €40m (1997) dropping to €25m (2007).",
      "Online CDs": "Rapid growth; surged to €8m in Germany and €7m in France by 2007.",
      "Downloads": "Zero in 1997; rose to €5m in Germany and France, and €1.5m in Italy by 2007.",
      "Cassettes": "Italy led with €6m in 1997, Germany had €5m; both fell to zero by 2007.",
      "Vinyl": "Niche in 1997 (€3m Italy, €2m Germany); completely extinct by 2007.",
      "Market Hierarchy": "Germany generated the most profit throughout, while France proved more digitally agile than Italy."
    },
    formats: MUSIC_FORMATS,
    countries: COUNTRY_MARKETS
  },
  graphData: {
    conditions: PACIFIC_CONDITIONS,
    hotspots: TASK1_HOTSPOTS,
    comparisonsSummary: {},
    formats: MUSIC_FORMATS,
    countries: COUNTRY_MARKETS
  },
  vocabList: [
    {
      word: "lion’s share",
      partOfSpeech: "idiom / noun phrase",
      meaning: "The largest part or majority of something, especially revenue or market share.",
      definition: "The largest part or majority of something, especially revenue or market share.",
      example: "In 1997, shop-bought CDs represented the lion’s share of SMG Entertainment’s revenue.",
      band: 9
    },
    {
      word: "contract / contraction",
      partOfSpeech: "verb / noun",
      meaning: "To decrease in size, volume, or monetary value; a substantial shrinkage.",
      definition: "To decrease in size, volume, or monetary value; a substantial shrinkage.",
      example: "Profits from in-store CD sales contracted by 15 million euros in Germany over the decade.",
      band: 8
    },
    {
      word: "obsolete / obsolescence",
      partOfSpeech: "adjective / noun",
      meaning: "No longer in use or commercially viable because of being replaced by something newer.",
      definition: "No longer in use or commercially viable because of being replaced by something newer.",
      example: "Legacy analog formats such as cassettes and vinyl were rendered entirely obsolete by 2007.",
      band: 9
    },
    {
      word: "plummet / plunge",
      partOfSpeech: "verb",
      meaning: "To fall or drop rapidly and drastically from a high level.",
      definition: "To fall or drop rapidly and drastically from a high level.",
      example: "Cassette revenues plummeted to nil across all three European markets.",
      band: 8
    },
    {
      word: "burgeoning / surge",
      partOfSpeech: "adjective / verb",
      meaning: "Growing or developing rapidly; an abrupt, significant upward movement.",
      definition: "Growing or developing rapidly; an abrupt, significant upward movement.",
      example: "Internet downloads emerged as a burgeoning revenue channel, surging to five million euros in France.",
      band: 9
    },
    {
      word: "outstrip / eclipse",
      partOfSpeech: "verb",
      meaning: "To exceed or surpass someone or something in quantity, value, or importance.",
      definition: "To exceed or surpass someone or something in quantity, value, or importance.",
      example: "German profits outstripped those of France and Italy in nearly every individual category.",
      band: 9
    },
    {
      word: "revenue stream",
      partOfSpeech: "collocation / noun phrase",
      meaning: "A specific category or medium through which a business earns monetary returns.",
      definition: "A specific category or medium through which a business earns monetary returns.",
      example: "Digital downloads materialized as a viable secondary revenue stream by 2007.",
      band: 8
    },
    {
      word: "negligible / nominal",
      partOfSpeech: "adjective",
      meaning: "So small, insignificant, or trivial as to not be worth considering.",
      definition: "So small, insignificant, or trivial as to not be worth considering.",
      example: "In 1997, online CD purchases generated a negligible 1.5 million euros in France.",
      band: 9
    },
    {
      word: "yield / generate",
      partOfSpeech: "verb",
      meaning: "To produce a financial gain, profit, or return.",
      definition: "To produce a financial gain, profit, or return.",
      example: "In-store CD sales yielded 40 million euros in Germany in 1997.",
      band: 8
    },
    {
      word: "from a standing start",
      partOfSpeech: "idiom / adverbial phrase",
      meaning: "Beginning from a point of zero prior progress or nonexistent baseline.",
      definition: "Beginning from a point of zero prior progress or nonexistent baseline.",
      example: "Internet downloads emerged from a standing start to generate five million euros each in France and Germany.",
      band: 9
    },
    {
      word: "phase out",
      partOfSpeech: "phrasal verb",
      meaning: "To discontinue the manufacture, sale, or distribution of a product gradually over time.",
      definition: "To discontinue the manufacture, sale, or distribution of a product gradually over time.",
      example: "Analog cassettes were progressively phased out of distribution until reaching zero profit.",
      band: 8
    },
    {
      word: "disparity",
      partOfSpeech: "noun",
      meaning: "A noticeable difference, imbalance, or inequality between two or more figures.",
      definition: "A noticeable difference, imbalance, or inequality between two or more figures.",
      example: "A marked disparity was evident between Germany’s commercial volume and Italy’s modest digital returns.",
      band: 9
    }
  ],
  vocabHunt: [
    "Identify the idiom meaning 'the largest portion of revenue'.",
    "Locate the academic synonym for 'becoming extinct or out of date'.",
    "Find the phrasal verb meaning 'gradually discontinued'.",
    "Identify the verb describing an abrupt, steep monetary decline."
  ],
  bp1: {
    title: "Body 1: 1997 Baseline — Store Dominance & Analog Sales",
    focus: "Detail the initial 1997 figures: in-store CDs generating the immense bulk of profit, modest cassette and vinyl returns, and zero downloads.",
    points: [
      "In-store CDs generated the vast majority of profit: Germany led at 40 million euros, followed by France (25m) and Italy (20m).",
      "Online CD purchases were negligible: 3m in Germany, 1.5m in France, and virtually nil in Italy.",
      "Internet downloads were completely absent (0 million euros) across all three nations.",
      "Analog media produced modest returns: Italy generated the highest cassette profits (6m), ahead of Germany (5m) and France (~0.5m).",
      "Vinyl contributed 3m in Italy and 2m in Germany, while registering zero in France."
    ],
    flow: [
      "1. Frame the 1997 commercial baseline with in-store CDs as the predominant revenue generator.",
      "2. Quote exact figures for Germany (€40m), France (€25m), and Italy (€20m).",
      "3. Highlight the trivial role of online orders (<€3m) and total absence of digital downloads (0m).",
      "4. Synthesize analog earnings, citing Italy’s unique lead in cassette (€6m) and vinyl (€3m) profits."
    ],
    takeaways: [
      "Germany was the runaway market leader in shop CDs (€40m).",
      "Italy had the highest dependence on legacy analog cassettes and vinyl.",
      "Digital music distribution was practically nonexistent in 1997."
    ]
  },
  bp2: {
    title: "Body 2: 2007 Shift — Digital Surge, Contraction & Obsolescence",
    focus: "Detail the 2007 transformations: sharp decline in shop CDs, extinction of cassettes and vinyl, and the rapid emergence of online CDs and internet downloads.",
    points: [
      "In-store CDs fell substantially across all markets: down to 25 million euros in Germany (-15m), 15m in France (-10m), and 14m in Italy (-6m).",
      "Cassettes and vinyl records suffered total obsolescence, dropping to exactly zero across all three countries.",
      "Online CD orders grew significantly: climbing to 8m in Germany, 7m in France, and 1.5m in Italy.",
      "Internet downloads surged from zero to become a viable format: generating 5m each in Germany and France, and 1.5m in Italy.",
      "Overall market ranking preserved: Germany remained the top earner, France stayed stable, and Italy experienced the steepest contraction."
    ],
    flow: [
      "1. Introduce the structural shift over the decade toward digital and remote channels.",
      "2. Document the contraction of retail CDs, emphasizing that they nonetheless remained the leading earner.",
      "3. State the complete wipe-out of cassettes and vinyl to zero million euros.",
      "4. Detail the dual rise of online CD sales (€8m in Germany, €7m in France) and newly emerged internet downloads (€5m each)."
    ],
    takeaways: [
      "Store CDs contracted by between 30% and 40%, yet remained the #1 format.",
      "Cassettes and vinyl fell from up to €6m to completely zero.",
      "Online purchases and downloads combined for €13m in Germany and €12m in France."
    ]
  },
  processingGroups: [
    {
      title: "Synthesizing Market Dominance",
      items: [
        "“...constituted the lion’s share of earnings...”",
        "“...remained by far the primary profit generator...”",
        "“...maintained an unchallenged commercial lead across all territories...”"
      ]
    },
    {
      title: "Describing Total Obsolescence & Phasing Out",
      items: [
        "“...became completely obsolete by the conclusion of the decade...”",
        "“...were entirely phased out, generating zero profit across the board...”",
        "“...plummeted to nil from modest initial returns...”"
      ]
    },
    {
      title: "Framing Digital Growth & Emergence",
      items: [
        "“...emerged from a standing start of zero to yield...”",
        "“...experienced rapid expansion, multiplying several-fold to reach...”",
        "“...surfaced as a viable secondary revenue stream, contributing...”"
      ]
    }
  ],
  connectors: [
    {
      phrase: "By contrast, / In stark contrast,",
      purpose: "Contrasting declining traditional formats with burgeoning digital channels",
      example: "In stark contrast to the slump in retail CD sales, online CD purchases expanded vigorously."
    },
    {
      phrase: "Across all three territories,",
      purpose: "Highlighting universal macro trends that applied to Germany, France, and Italy equally",
      example: "Across all three territories, analog media ceased generating any revenue whatsoever by 2007."
    },
    {
      phrase: "From a standing start of zero,",
      purpose: "Emphasizing the birth of an entirely new market segment",
      example: "From a standing start of zero in 1997, internet downloads reached five million euros in France."
    },
    {
      phrase: "Concurrently, / Simultaneously,",
      purpose: "Connecting two parallel shifts occurring over the same ten-year window",
      example: "Concurrently, online CD purchases rose sharply, partially offsetting losses in traditional retail."
    },
    {
      phrase: "Yielding a modest... / Accounting for...",
      purpose: "Precisely attributing numerical data and financial proportions",
      example: "Cassettes accounted for six million euros in Italy, outstripping German sales by one million."
    },
    {
      phrase: "Despite this downturn, / Notwithstanding this decline,",
      purpose: "Maintaining nuance when a dominant category shrinks but remains number one",
      example: "Despite this downturn, shop-bought CDs continued to outperform all other formats combined."
    }
  ],
  modelReport: {
    wordCount: 191,
    paragraphs: [
      {
        id: "intro",
        title: "Introduction",
        text: "The horizontal bar charts illustrate the profits earned by SMG Entertainment, a music record company, across five distinct audio distribution formats in Germany, France, and Italy between 1997 and 2007.",
        wordCount: 30,
        badges: ["Band 9 Paraphrase", "Format & Entity Identification", "Temporal Parameters"]
      },
      {
        id: "overview",
        title: "Overview",
        text: "Overall, retail store-bought compact discs remained the primary source of revenue in all three nations throughout the decade, despite experiencing marked contractions by 2007. Concurrently, legacy analog formats—namely cassettes and vinyl—became completely obsolete, while digital distribution channels, comprising online CD purchases and internet downloads, witnessed substantial growth, with Germany consistently generating the highest overall profits.",
        wordCount: 52,
        badges: ["3-Pillar Macro Summary", "Dominance vs Obsolescence", "National Hierarchy"]
      },
      {
        id: "body1",
        title: "Body 1: 1997 Initial Distribution",
        text: "In 1997, retail purchases of CDs in shops represented the overwhelming lion’s share of SMG Entertainment’s earnings. Germany was by far the most lucrative market in this category, generating 40 million euros, followed by France at 25 million and Italy at 20 million. By contrast, online CD orders were negligible, yielding 3 million euros in Germany and 1.5 million in France, while producing virtually no return in Italy. Internet downloads were non-existent across all three territories. Regarding analog formats, Italy led cassette sales at 6 million euros, slightly ahead of Germany’s 5 million, whereas France recorded under 1 million. Vinyl singles and LPs accounted for modest profits, generating 3 million euros in Italy and 2 million in Germany, with zero yield in France.",
        wordCount: 124,
        badges: ["Baseline Synthesis", "Complete Data Citation", "Comparative Grouping"]
      },
      {
        id: "body2",
        title: "Body 2: 2007 Structural Shift",
        text: "A decade later, the financial landscape underwent a pronounced structural transformation. Although shop-bought CDs remained the leading profit contributor, earnings plummeted across all markets—sliding to 25 million euros in Germany, 15 million in France, and 14 million in Italy. In stark contrast, both cassettes and vinyl records were entirely phased out, generating zero profit across the board. The slack was partially absorbed by digital and remote channels; online CD sales surged to 8 million euros in Germany and 7 million in France, with Italy registering 1.5 million. Concurrently, internet downloads emerged as a viable revenue stream, contributing 5 million euros each in Germany and France, alongside 1.5 million in Italy.",
        wordCount: 111,
        badges: ["Trend Direction", "Digital Rise vs Analog Demise", "Precise Figures"]
      }
    ]
  }
};
