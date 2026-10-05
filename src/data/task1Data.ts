import type { Task1Data, VocabItem } from "../types";
export type { Task1Data, VocabItem };

export const TASK1_DATA: Task1Data = {
  id: "co2-emissions-per-person-task1",
  taskType: "Dynamic Line Graph (40-Year Comparative Trends)",
  title: "Average Carbon Dioxide (CO2) Emissions per Person (1967–2007)",
  questionText:
    "The line graph shows the average carbon dioxide emission.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
  imageFileName: "co2-emissions-per-person.png",
  audioUrl: "materials/co2-emissions-line-graph-briefing.m4a",
  audioClueText:
    "Today's visual task features a dynamic line graph tracking average carbon dioxide emissions per person across four European nations: the United Kingdom, Sweden, Italy, and Portugal, spanning a forty-year timeframe from 1967 to 2007, measured in metric tonnes. Notice the striking dichotomy in trajectories. While the United Kingdom remained the highest emitter throughout the period, falling gradually from nearly eleven to under nine tonnes, Sweden exhibited the most volatile trend, surging to a dramatic peak above ten tonnes in 1977 before plunging steeply down to approximately five point four tonnes. Conversely, Italy and Portugal both experienced continuous upward growth. Italy climbed steadily from four point two tonnes to plateau at around seven point six tonnes, overtaking Sweden by the late 1980s. Meanwhile, Portugal registered the steepest proportional rise, more than quadrupling its per capita emissions from a modest one point two tonnes to converge directly with Sweden at five point four tonnes by 2007.",
  timingSeconds: 180,
  sampleIntro:
    "The line graph illustrates average carbon dioxide (CO2) emissions per person across four European countries—the United Kingdom, Sweden, Italy, and Portugal—over a forty-year period from 1967 to 2007, measured in metric tonnes.",
  sampleOverview:
    "Overall, per capita emissions in the United Kingdom and Sweden followed an overall downward trajectory over the four decades, whereas Italy and Portugal experienced substantial growth. Furthermore, although the United Kingdom consistently recorded the highest emissions throughout the timeframe, Sweden exhibited the most volatile fluctuation, while Portugal registered the steepest proportional increase to converge with Sweden by 2007.",

  graphData: {
    years: [1967, 1977, 1987, 1997, 2007],
    unit: "Metric Tonnes per person",
    yRange: { min: 0, max: 12, step: 2 },
    countries: [
      {
        id: "uk",
        name: "United Kingdom",
        originalLegendName: "United Kingdom",
        color: "#9333ea",
        lineStyle: "dash-dot",
        strokeDashArray: "10 4 2 4",
        group: "net_decrease",
        badge: "Highest Emitter Throughout (Net Decrease)",
        startValue: 10.8,
        endValue: 8.7,
        netChange: "-2.1 metric tonnes (-19.4%)",
        dataPoints: [
          { year: 1967, value: 10.8, annotation: "Highest starting figure (~10.8 tonnes)" },
          { year: 1977, value: 10.7, annotation: "Near stable plateau (~10.7 tonnes)" },
          { year: 1987, value: 10.0, annotation: "Declined to exactly 10.0 tonnes" },
          { year: 1997, value: 9.6, annotation: "Gradual descent to 9.6 tonnes" },
          { year: 2007, value: 8.7, annotation: "Finished as highest emitter at ~8.7 tonnes" }
        ],
        trendSummary:
          "Maintained the dominant emitter position throughout the entire 40-year timeframe, declining steadily from nearly 11 tonnes to 8.7 tonnes.",
        band9Phrase:
          "“The United Kingdom was the dominant emitter throughout the entire four-decade span, despite a steady and continuous reduction from nearly 11 metric tonnes per capita in 1967 to just under 9 tonnes by 2007.”",
        description:
          "A gradual, unbroken descent over 40 years without sharp swings, remaining higher than all three other nations at every single recorded interval."
      },
      {
        id: "sweden",
        name: "Sweden",
        originalLegendName: "Sweden",
        color: "#0284c7",
        lineStyle: "dashed",
        strokeDashArray: "8 6",
        group: "net_decrease",
        badge: "Most Volatile: Peak & Plunge (Net Decrease)",
        startValue: 8.6,
        peakOrPlateauValue: 10.2,
        endValue: 5.4,
        netChange: "-3.2 metric tonnes (-37.2% overall; -47% from peak)",
        dataPoints: [
          { year: 1967, value: 8.6, annotation: "Second highest starter at 8.6 tonnes" },
          { year: 1977, value: 10.2, annotation: "Dramatic apex above 10 tonnes (~10.2 tonnes)" },
          { year: 1987, value: 7.0, annotation: "Plunged to 7.0 tonnes, overtaken by Italy" },
          { year: 1997, value: 6.0, annotation: "Continued steep descent to 6.0 tonnes" },
          { year: 2007, value: 5.4, annotation: "Finished at 5.4 tonnes, converging with Portugal" }
        ],
        trendSummary:
          "Experienced a roller-coaster trajectory: a sharp 10-year climb to a peak above 10 tonnes in 1977, followed by a precipitous 30-year plunge nearly halving its emissions.",
        band9Phrase:
          "“Sweden exhibited the most volatile trajectory, climbing sharply to an apex of approximately 10.2 metric tonnes in 1977 before plunging precipitously over the subsequent thirty years to finish at 5.4 tonnes.”",
        description:
          "The only nation to display both a sharp upward surge and an aggressive downward crash, dropping from second to tied-for-lowest by 2007."
      },
      {
        id: "italy",
        name: "Italy",
        originalLegendName: "Italy",
        color: "#b91c1c",
        lineStyle: "solid",
        strokeDashArray: "none",
        group: "net_increase",
        badge: "Steady Growth & Plateau (Net Increase)",
        startValue: 4.2,
        peakOrPlateauValue: 7.6,
        endValue: 7.6,
        netChange: "+3.4 metric tonnes (+81%)",
        dataPoints: [
          { year: 1967, value: 4.2, annotation: "Started third at 4.2 tonnes" },
          { year: 1977, value: 6.2, annotation: "Rapid initial rise to 6.2 tonnes" },
          { year: 1987, value: 6.7, annotation: "Reached 6.7 tonnes, overtaking Sweden" },
          { year: 1997, value: 7.6, annotation: "Climbed to 7.6 tonnes" },
          { year: 2007, value: 7.6, annotation: "Completely stable plateau at 7.6 tonnes" }
        ],
        trendSummary:
          "Grew substantially over the first 30 years from 4.2 to 7.6 tonnes, overtaking Sweden by 1987, before plateauing identically between 1997 and 2007.",
        band9Phrase:
          "“Italy witnessed a consistent upward climb from 4.2 metric tonnes in 1967, overtaking Sweden in the late 1980s, before plateauing at approximately 7.6 tonnes from 1997 onwards.”",
        description:
          "Almost doubled its per capita emissions (+81%) to emerge as the second highest emitter by the end of the timeframe."
      },
      {
        id: "portugal",
        name: "Portugal",
        originalLegendName: "Portgual",
        color: "#1e293b",
        lineStyle: "dotted",
        strokeDashArray: "3 4",
        group: "net_increase",
        badge: "Steepest Relative Growth (4-Fold Surge)",
        startValue: 1.2,
        peakOrPlateauValue: 5.4,
        endValue: 5.4,
        netChange: "+4.2 metric tonnes (+350%, >4x growth)",
        dataPoints: [
          { year: 1967, value: 1.2, annotation: "Lowest emitter by far at 1.2 tonnes" },
          { year: 1977, value: 2.2, annotation: "Rose to 2.2 tonnes" },
          { year: 1987, value: 3.6, annotation: "Steepened climb to 3.6 tonnes" },
          { year: 1997, value: 5.3, annotation: "Surged to 5.3 tonnes" },
          { year: 2007, value: 5.4, annotation: "Reached 5.4 tonnes, converging with Sweden" }
        ],
        trendSummary:
          "Demonstrated the steepest proportional surge on the chart, quadrupling from a baseline of 1.2 tonnes to converge directly with Sweden at 5.4 tonnes by 2007.",
        band9Phrase:
          "“Starting at a negligible 1.2 metric tonnes in 1967, Portugal registered more than a four-fold increase, surging to 5.4 tonnes in 2007 to match Sweden’s terminal figure.”",
        description:
          "The fastest expanding emitter in relative terms (+350%), closing a 7.4-tonne gap with Sweden to finish tied at 5.4 tonnes."
      }
    ],
    intersections: [
      {
        id: "italy-sweden-1987",
        year: 1987,
        approxValue: 6.8,
        countries: ["Italy", "Sweden"],
        title: "1987: Italy Overtakes Sweden",
        description:
          "Around 1987, Italy's ascending trajectory crossed Sweden's rapidly descending line at approximately 6.8 metric tonnes.",
        band9Phrase:
          "“In approximately 1987, Italy's steadily rising emissions intersected Sweden's declining line at roughly 6.8 metric tonnes, after which Italy assumed second position.”"
      },
      {
        id: "sweden-portugal-2007",
        year: 2007,
        approxValue: 5.4,
        countries: ["Sweden", "Portugal"],
        title: "2007: Sweden & Portugal Convergence",
        description:
          "By 2007, Sweden's 30-year plunge and Portugal's 40-year climb met precisely at 5.4 metric tonnes per person.",
        band9Phrase:
          "“By 2007, Sweden's protracted descent and Portugal's prolonged surge converged at an identical figure of approximately 5.4 metric tonnes per person.”"
      }
    ],
    comparisonsSummary: {
      dominantEmitter: "United Kingdom (consistently highest from ~10.8 down to 8.7 tonnes)",
      mostVolatile: "Sweden (peaked at 10.2 tonnes in 1977, then plunged by nearly 50% to 5.4 tonnes)",
      steepestGrowth: "Portugal (quadrupled from 1.2 tonnes to 5.4 tonnes, >350% increase)",
      convergences: "Italy overtook Sweden around 1987; Sweden and Portugal met at 5.4 tonnes in 2007"
    }
  },

  vocabList: [
    {
      word: "per capita carbon emissions",
      meaning:
        "The average quantity of carbon dioxide released into the atmosphere by a single individual within a country.",
      example:
        "The graph tracks fluctuations in per capita carbon emissions across four industrialized European nations."
    },
    {
      word: "exhibit an overall downward trajectory",
      meaning:
        "Show a general, long-term decreasing pattern from the start of the timeframe to the finish.",
      example:
        "Both the United Kingdom and Sweden exhibited an overall downward trajectory over the four-decade timeline."
    },
    {
      word: "experience a dramatic precipitous decline",
      meaning:
        "Undergo an exceptionally steep, rapid, and sustained reduction in numerical value.",
      example:
        "Following its 1977 peak, Sweden experienced a dramatic precipitous decline over the subsequent thirty years."
    },
    {
      word: "witness a four-fold increase",
      meaning:
        "Multiply by a factor of four (a 300% to 400% surge compared to the original baseline figure).",
      example:
        "Portuguese per capita emissions witnessed more than a four-fold increase, soaring from 1.2 to 5.4 tonnes."
    },
    {
      word: "reach an unprecedented peak",
      meaning:
        "Ascend to the highest recorded apex value throughout the historical period.",
      example:
        "Sweden reached an unprecedented peak of just over ten metric tonnes in 1977 before reversing course."
    },
    {
      word: "surpass and overtake",
      meaning:
        "Exceed another nation's value, crossing above it on the graphical scale.",
      example:
        "By the late 1980s, Italy managed to surpass and overtake Sweden's declining emissions figure."
    },
    {
      word: "converge at an identical figure",
      meaning:
        "Meet at the exact same statistical value or data point at the end of a timeframe.",
      example:
        "By the end of the recording period in 2007, Sweden and Portugal converged at an identical figure of 5.4 tonnes."
    },
    {
      word: "plateau and level off",
      meaning:
        "Reach a state of little or no change following a prior period of steady growth or decline.",
      example:
        "Italian emissions plateaued and leveled off at approximately 7.6 metric tonnes between 1997 and 2007."
    },
    {
      word: "remain the dominant contributor",
      meaning:
        "Maintain the primary, highest-ranking statistical position across all measured intervals.",
      example:
        "The United Kingdom remained the dominant contributor throughout the entirety of the survey period."
    },
    {
      word: "a marked divergence in trajectories",
      meaning:
        "A clear, noticeable separation in directional movement (e.g. one group rising while another falls).",
      example:
        "The visual highlights a marked divergence in trajectories between the established industrial powers and southern Europe."
    }
  ],

  vocabHunt: [
    "per capita carbon emissions",
    "exhibit an overall downward trajectory",
    "experience a dramatic precipitous decline",
    "witness a four-fold increase",
    "reach an unprecedented peak",
    "surpass and overtake",
    "converge at an identical figure",
    "plateau and level off",
    "remain the dominant contributor",
    "a marked divergence in trajectories"
  ],

  bp1: {
    title: "Body 1: The Net Decreasers (United Kingdom & Sweden)",
    focus: "Higher initial baselines experiencing long-term net reductions (UK descent & Sweden's roller-coaster)",
    points: [
      "The United Kingdom maintained the highest per capita emissions in every single decade recorded.",
      "British emissions began at approximately 10.8 metric tonnes in 1967 and hovered near 10.7 tonnes in 1977.",
      "Thereafter, UK output declined steadily to 10.0 tonnes in 1987, 9.6 tonnes in 1997, and ended at roughly 8.7 tonnes in 2007.",
      "Sweden started as the second highest emitter at 8.6 metric tonnes in 1967.",
      "Swedish emissions spiked sharply to a peak of roughly 10.2 tonnes in 1977, briefly rivaling the UK.",
      "Subsequently, Sweden experienced a dramatic 30-year plunge, dropping to 7.0 tonnes in 1987, 6.0 in 1997, and 5.4 in 2007 (nearly halving from its peak)."
    ],
    takeaways: [
      "UK: Unbroken dominance, steady decline from ~11 to ~8.7 tonnes (-2.1 tonnes)",
      "Sweden: Most volatile trajectory, sharp peak at ~10.2 in 1977 followed by an aggressive collapse to 5.4 tonnes"
    ]
  },

  bp2: {
    title: "Body 2: The Net Increasers (Italy & Portugal)",
    focus: "Lower initial baselines undergoing sustained upward growth and strategic crossovers",
    points: [
      "Italy began in third position at 4.2 metric tonnes in 1967 and experienced consistent, unbroken growth.",
      "Italian emissions climbed to 6.2 tonnes in 1977 and reached 6.7 tonnes in 1987, officially overtaking Sweden.",
      "Italy's output rose to 7.6 metric tonnes in 1997, where it remained completely static through 2007.",
      "Portugal started with the lowest emissions by a wide margin, registering a mere 1.2 metric tonnes in 1967.",
      "Over the next four decades, Portuguese emissions underwent a dramatic, more than four-fold surge.",
      "Portugal climbed to 2.2 tonnes (1977), 3.6 tonnes (1987), and 5.3 tonnes (1997), finishing at 5.4 tonnes in 2007 to converge with Sweden."
    ],
    takeaways: [
      "Italy: Consistent expansion from 4.2 to 7.6 tonnes (+81%), surpassing Sweden in 1987 and plateauing after 1997",
      "Portugal: Steepest proportional growth (>4x increase from 1.2 to 5.4 tonnes), meeting Sweden's descending figure in 2007"
    ]
  },

  processingGroups: [
    {
      title: "Trajectory Verbs & Movement Dynamics",
      items: [
        "Stood at approximately 10.8 metric tonnes in 1967",
        "Hovered near 10.7 metric tonnes before continuing a gradual descent",
        "Surged sharply to an apex of roughly 10.2 tonnes in 1977",
        "Plummeted precipitously over the subsequent three decades",
        "Plateaued identically at 7.6 metric tonnes between 1997 and 2007"
      ]
    },
    {
      title: "Comparative Relationships & Crossovers",
      items: [
        "Consistently recorded the highest per capita emissions throughout the period",
        "Overtook and surpassed Sweden around the year 1987",
        "Converged at an identical terminal figure of 5.4 tonnes in 2007",
        "Closed a substantial 7.4-tonne gap between 1967 and 2007",
        "Demonstrated a marked divergence between northern and southern European trajectories"
      ]
    },
    {
      title: "Proportional Shifts & Multiplier Language",
      items: [
        "Registered more than a four-fold increase from its baseline figure (+350%)",
        "Nearly halved its per capita carbon footprint relative to its 1977 peak",
        "Expanded by roughly 81% before leveling off completely",
        "Initiated the timeframe as the lowest contributor by a significant margin",
        "Exhibited a net contraction of 2.1 metric tonnes across forty years"
      ]
    }
  ],

  connectors: [
    {
      phrase: "Regarding the nations experiencing a net decline,...",
      purpose: "Topic sentence transition to open Body Paragraph 1 (the downward group).",
      example:
        "“Regarding the nations experiencing a net decline, the United Kingdom was consistently the highest emitter over the entire forty-year period.”"
    },
    {
      phrase: "By contrast, Sweden demonstrated the most erratic pattern...",
      purpose: "Contrastive linker highlighting the difference between UK's steady trend and Sweden's peak.",
      example:
        "“By contrast, Sweden demonstrated the most erratic pattern on the graph, surging to an apex before collapsing.”"
    },
    {
      phrase: "Turning to the countries with rising emissions,...",
      purpose: "Macro transition pivoting from Body Paragraph 1 to Body Paragraph 2 (the upward group).",
      example:
        "“Turning to the countries with rising per capita emissions, Italy and Portugal both saw substantial increases.”"
    },
    {
      phrase: "At which point it surpassed Sweden...",
      purpose: "Pinpointing a historical intersection and ranking shift between two data series.",
      example:
        "“Italian output reached 6.7 metric tonnes in 1987, at which point it surpassed Sweden.”"
    },
    {
      phrase: "Meanwhile, Portugal initiated the period as the lowest contributor...",
      purpose: "Parallel contrast introducing the nation with the lowest baseline figure.",
      example:
        "“Meanwhile, Portugal initiated the period as the lowest contributor by a wide margin, generating a mere 1.2 tonnes.”"
    },
    {
      phrase: "Precisely converging with Sweden's final level...",
      purpose: "Synthesizing a terminal data point where two separate lines meet.",
      example:
        "“Portuguese emissions ascended steadily to 5.4 metric tonnes in 2007, precisely converging with Sweden's final level.”"
    }
  ],

  modelReport: {
    wordCount: 228,
    paragraphs: [
      {
        id: "intro",
        title: "Introduction",
        wordCount: 31,
        badges: ["Paraphrase", "Parameters", "Unit"],
        text: "The line graph illustrates average carbon dioxide (CO2) emissions per person across four European countries—the United Kingdom, Sweden, Italy, and Portugal—over a forty-year period from 1967 to 2007, measured in metric tonnes."
      },
      {
        id: "overview",
        title: "Overview",
        wordCount: 52,
        badges: ["Macro Split", "Dominant Emitter", "Volatile Outlier", "Convergence"],
        text: "Overall, per capita emissions in the United Kingdom and Sweden followed an overall downward trajectory over the four decades, whereas Italy and Portugal experienced substantial growth. Furthermore, although the United Kingdom consistently recorded the highest emissions throughout the timeframe, Sweden exhibited the most volatile fluctuation, while Portugal registered the steepest proportional increase to converge with Sweden by 2007."
      },
      {
        id: "body1",
        title: "Body Paragraph 1: Net Decreasers (UK & Sweden)",
        wordCount: 74,
        badges: ["UK Dominance", "Steady Decline", "Sweden Peak & Plunge", "1977 Apex"],
        text: "Regarding the nations with decreasing emissions, the United Kingdom consistently generated the highest levels throughout the entire period. Starting at approximately 10.8 metric tonnes per person in 1967, British emissions remained nearly unchanged in 1977 before undergoing a steady, uninterrupted decline to 10.0 tonnes in 1987, 9.6 tonnes in 1997, and finally 8.7 tonnes by 2007. Sweden began as the second-highest emitter at 8.6 metric tonnes and climbed sharply to peak at approximately 10.2 tonnes in 1977, briefly challenging the UK. Thereafter, Swedish emissions plummeted precipitously over the remaining thirty years, falling to 7.0 tonnes in 1987 and continuing downward to 5.4 tonnes by 2007—nearly half its peak value."
      },
      {
        id: "body2",
        title: "Body Paragraph 2: Net Increasers (Italy & Portugal)",
        wordCount: 71,
        badges: ["Italy Crossover", "10-Year Plateau", "Portugal 4-Fold Surge", "2007 Meeting"],
        text: "Turning to the nations with upward trends, Italy initially produced 4.2 metric tonnes per capita in 1967. Italian emissions expanded steadily over the following three decades to 6.2 tonnes in 1977 and 6.7 tonnes in 1987, at which point Italy overtook Sweden. After reaching 7.6 metric tonnes in 1997, Italy's emissions plateaued identically through 2007. Meanwhile, Portugal commenced the period as the lowest contributor by a substantial margin, generating a modest 1.2 metric tonnes per person. Over the subsequent four decades, Portuguese emissions underwent a dramatic, more than four-fold surge, ascending steadily to 2.2 tonnes in 1977, 3.6 tonnes in 1987, and 5.3 tonnes in 1997, before finishing at 5.4 metric tonnes in 2007, precisely converging with Sweden."
      }
    ]
  }
};
