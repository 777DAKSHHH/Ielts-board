import type { Task1Data, VocabItem, SchoolData, ConvergenceMilestone, Task1TableData } from "../types";
export type { Task1Data, VocabItem, SchoolData, ConvergenceMilestone, Task1TableData };

export const SCHOOLS_DATA: SchoolData[] = [
  {
    id: "royston",
    name: "Royston Academy",
    originalLegendName: "ROYSTON ACADEMY",
    originalTableName: "ROYSTON ACADEMY",
    color: "#d97706",
    group: "net_increase",
    badge: "Stepped Climber (50% → 60%, +10% pts)",
    startValue: 50,
    peakOrPlateauValue: 60,
    endValue: 60,
    netChange: "+10 percentage points (+20% increase)",
    dataPoints: [
      { year: 1995, value: 50, annotation: "Began at exactly 50%" },
      { year: 1996, value: 52, annotation: "Marginal rise to 52%" },
      { year: 1997, value: 54, annotation: "Rose to 54%" },
      { year: 1998, value: 54, annotation: "Plateaued identically at 54%" },
      { year: 1999, value: 60, annotation: "Stepped up to 60%, joining Harble and Crackend" },
      { year: 2000, value: 60, annotation: "Level at 60% for a second consecutive year" }
    ],
    trendSummary:
      "Showed stepped growth, rising from 50% to 54% (1997–98) before stepping up to 60% (1999–2000).",
    band9Phrase:
      "“Royston Academy progressed in a stepped fashion, rising from 50% to plateau at 54% in 1997–1998 before leveling off at 60% by the end of the century.”",
    description:
      "Grew modestly by 10 percentage points overall, featuring two distinct two-year periods of stability at 54% and 60%."
  },
  {
    id: "greystone",
    name: "Greystone High",
    originalLegendName: "GREYSTONE HIGH",
    originalTableName: "GREYSTONE HIGH",
    color: "#dc2626",
    group: "net_decrease",
    badge: "Sole Decliner: Lost Dominance (90% → 70%)",
    startValue: 90,
    peakOrPlateauValue: 90,
    endValue: 70,
    netChange: "-20 percentage points (-22.2% decline)",
    dataPoints: [
      { year: 1995, value: 90, annotation: "Commanding lead at 90%, 25 points ahead of 2nd" },
      { year: 1996, value: 80, annotation: "Steep drop by 10 points to 80%" },
      { year: 1997, value: 75, annotation: "Fell to 75%, caught by Fairfield Girls" },
      { year: 1998, value: 73, annotation: "Dropped to 73%, falling behind Fairfield" },
      { year: 1999, value: 72, annotation: "Marginal decline to 72%" },
      { year: 2000, value: 70, annotation: "Concluded at 70%, slipping to third place" }
    ],
    trendSummary:
      "The only school to decline, suffering an uninterrupted downward slide from 90% down to 70% and dropping from 1st to 3rd place.",
    band9Phrase:
      "“Greystone High was the sole institution to experience a continuous downward trend, surrendering its commanding 90% lead to finish third at 70%.”",
    description:
      "Fell sharply by 15 points in the first two years, followed by a slower steady descent to drop from 1st to 3rd place."
  },
  {
    id: "harble",
    name: "Harble Secondary",
    originalLegendName: "HARBLE SECONDARY",
    originalTableName: "HARBLE SECONDARY",
    color: "#059669",
    group: "net_increase",
    badge: "Most Dramatic Surge (30% → 80%, Nearly Tripled)",
    startValue: 30,
    peakOrPlateauValue: 80,
    endValue: 80,
    netChange: "+50 percentage points (+167% relative surge)",
    dataPoints: [
      { year: 1995, value: 30, annotation: "Lowest initial percentage at 30%" },
      { year: 1996, value: 35, annotation: "Rose to 35% (+5%)" },
      { year: 1997, value: 40, annotation: "Climbed to 40% (+5%)" },
      { year: 1998, value: 50, annotation: "Accelerated to 50% (+10%)" },
      { year: 1999, value: 60, annotation: "Reached 60%, converging with Royston and Crackend" },
      { year: 2000, value: 80, annotation: "Jumped by 20% to finish 1st overall at 80%" }
    ],
    trendSummary:
      "Underwent an uninterrupted, accelerating climb, vaulting from last place at 30% to first place at 80%—nearly tripling its baseline.",
    band9Phrase:
      "“Harble Secondary registered the most dramatic surge, nearly tripling from a baseline of 30% in 1995 to emerge as the top performer at 80% in 2000.”",
    description:
      "Rose by 5% annually for two years, then accelerated by 10% in 1998 and 1999, before jumping by an extraordinary 20 percentage points in the final year."
  },
  {
    id: "fairfield",
    name: "Fairfield Girls",
    originalLegendName: "FAIRFIELD GIRLS",
    originalTableName: "FAIRFIELD GIRLS",
    color: "#4f46e5",
    group: "net_increase",
    badge: "Strong Climber (65% → 79%, 2nd Place)",
    startValue: 65,
    peakOrPlateauValue: 79,
    endValue: 79,
    netChange: "+14 percentage points (+21.5% growth)",
    dataPoints: [
      { year: 1995, value: 65, annotation: "Started second highest at 65%" },
      { year: 1996, value: 70, annotation: "Rose to 70% (+5%)" },
      { year: 1997, value: 75, annotation: "Equalized with Greystone High at 75%" },
      { year: 1998, value: 75, annotation: "Plateaued at 75%, surpassing Greystone High" },
      { year: 1999, value: 70, annotation: "Experienced a temporary 5% contraction to 70%" },
      { year: 2000, value: 79, annotation: "Rebounded sharply to finish in second place at 79%" }
    ],
    trendSummary:
      "Grew from 65% to 75% by 1997, overtook Greystone in 1998, and rebounded from a 1999 dip to conclude at 79% (just 1% behind Harble).",
    band9Phrase:
      "“Fairfield Girls climbed steadily from 65% to 75% in 1997, overtook Greystone in 1998, and rebounded from a transient dip in 1999 to conclude at 79%.”",
    description:
      "Maintained second place initially, briefly tied for first in 1997, held the sole lead in 1998, and concluded just one point shy of Harble."
  },
  {
    id: "crackend",
    name: "Crackend Boys",
    originalLegendName: "CRACKEND BOYS",
    originalTableName: "CRACKEND BOYS",
    color: "#475569",
    group: "steady",
    badge: "Static / Stable Baseline (59% – 62%)",
    startValue: 60,
    peakOrPlateauValue: 62,
    endValue: 62,
    netChange: "+2 percentage points (negligible change)",
    dataPoints: [
      { year: 1995, value: 60, annotation: "Began at 60%" },
      { year: 1996, value: 59, annotation: "Slight dip to 59%" },
      { year: 1997, value: 60, annotation: "Returned to 60%" },
      { year: 1998, value: 61, annotation: "Marginal uptick to 61%" },
      { year: 1999, value: 60, annotation: "Returned to 60%, part of the triple tie" },
      { year: 2000, value: 62, annotation: "Finished slightly higher at 62%" }
    ],
    trendSummary:
      "Maintained virtually static numbers across the entire six-year span, fluctuating within a tight band between 59% and 62%.",
    band9Phrase:
      "“Crackend Boys exhibited remarkable stability, oscillating within a narrow band of 59% to 62% throughout the six-year period.”",
    description:
      "Demonstrated near-total stability, never deviating by more than two percentage points from its initial 60% baseline."
  }
];

export const CONVERGENCES_DATA: ConvergenceMilestone[] = [
  {
    id: "fairfield-greystone-1997",
    year: 1997,
    approxValue: 75,
    schools: ["Fairfield Girls", "Greystone High"],
    countries: ["Fairfield Girls", "Greystone High"],
    title: "1997: Fairfield Girls Equalizes with Greystone High (75%)",
    description:
      "Fairfield's climb (+10 points) and Greystone's descent (-15 points) met at precisely 75% in 1997, prior to Fairfield taking the lead in 1998.",
    band9Phrase:
      "“In 1997, Fairfield Girls' ascending rate equalized with Greystone High's declining figure at exactly 75%.”"
  },
  {
    id: "triple-tie-1999",
    year: 1999,
    approxValue: 60,
    schools: ["Royston Academy", "Harble Secondary", "Crackend Boys"],
    countries: ["Royston Academy", "Harble Secondary", "Crackend Boys"],
    title: "1999: Triple Convergence at 60%",
    description:
      "In 1999, Royston Academy's stepped climb, Harble's rapid surge, and Crackend's stable rate all converged at precisely 60%.",
    band9Phrase:
      "“Remarkably, in 1999, Royston Academy, Harble Secondary, and Crackend Boys all converged at an identical figure of exactly 60%.”"
  }
];

const TABLE_DATA_PAYLOAD: Task1TableData = {
  years: [1995, 1996, 1997, 1998, 1999, 2000],
  unit: "% of pupils entering higher education",
  schools: SCHOOLS_DATA,
  countries: SCHOOLS_DATA,
  convergences: CONVERGENCES_DATA,
  intersections: CONVERGENCES_DATA,
  comparisonsSummary: {
    highestStarter: "Greystone High (90% in 1995, falling to 70% in 2000)",
    mostDramaticSurge: "Harble Secondary (surged from 30% to 80%, nearly tripling)",
    soleDecliner: "Greystone High (dropped 20 percentage points, falling from 1st to 3rd)",
    mostStable: "Crackend Boys (fluctuated minimally between 59% and 62%)",
    convergences: "Fairfield & Greystone tied at 75% in 1997; Royston, Harble & Crackend tied at 60% in 1999"
  }
};

export const TASK1_DATA: Task1Data = {
  id: "higher-education-pupils-task1",
  taskType: "Statistical Table & Progression Trends (1995–2000)",
  title: "Percentage of Pupils Entering Higher Education from Five Secondary Schools (1995–2000)",
  questionText:
    "The table shows the percentage of pupils who entered higher education from five secondary school between 1995 and 2000.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
  imageFileName: "higher-education-pupils-table.png",
  audioUrl: "materials/weight-health-fitness-briefing.m4a",
  audioClueText:
    "Today's visual task presents a statistical table detailing the percentage of secondary school leavers entering higher education across five distinct institutions: Royston Academy, Greystone High, Harble Secondary, Fairfield Girls, and Crackend Boys, spanning from 1995 to 2000. Over this six-year timeframe, four of the five institutions recorded overall increases, while only one experienced a continuous decline. Greystone High commenced the period with a dominant lead of ninety percent, but steadily fell by twenty percentage points to finish at seventy percent. In stark contrast, Harble Secondary achieved the most remarkable leap, ascending from a baseline of just thirty percent to finish as the frontrunner at eighty percent—nearly tripling its baseline. Fairfield Girls followed an upward trajectory, rising from sixty-five percent to seventy-nine percent, briefly tying with Greystone at seventy-five percent in 1997 before overtaking it. Meanwhile, Royston Academy progressed moderately from fifty to sixty percent, and Crackend Boys demonstrated near-total stability, hovering between fifty-nine and sixty-two percent. Notably, in 1999, Royston, Crackend, and Harble all intersected at exactly sixty percent.",
  timingSeconds: 180,
  sampleIntro:
    "The table illustrates the proportion of pupils who proceeded to tertiary education from five secondary schools—Royston Academy, Greystone High, Harble Secondary, Fairfield Girls, and Crackend Boys—between 1995 and 2000.",
  sampleOverview:
    "Overall, higher education entry rates rose in four out of the five secondary schools, with Greystone High being the sole institution to experience a continuous downward trend. Furthermore, while Harble Secondary exhibited the most dramatic expansion to finish with the highest percentage, Crackend Boys maintained notable consistency throughout the six-year period.",

  tableData: TABLE_DATA_PAYLOAD,
  graphData: TABLE_DATA_PAYLOAD,

  vocabList: [
    {
      word: "tertiary education entry rate",
      meaning:
        "The proportion or percentage of secondary school leavers who gain admission and enroll in university or higher education.",
      example:
        "The table tracks variations in tertiary education entry rates across five secondary schools between 1995 and 2000."
    },
    {
      word: "register an uninterrupted downward trend",
      meaning:
        "Continuously decrease year over year without experiencing any rebound or leveling off.",
      example:
        "Greystone High was the only school to register an uninterrupted downward trend, falling every single year."
    },
    {
      word: "experience a meteoric surge",
      meaning:
        "Undergo an extraordinarily swift, steep, and dramatic upward climb in statistical value.",
      example:
        "Harble Secondary experienced a meteoric surge, vaulting from thirty percent in 1995 to eighty percent in 2000."
    },
    {
      word: "nearly triple its initial baseline",
      meaning:
        "Multiply by almost a factor of three relative to the starting figure at the beginning of the timeframe.",
      example:
        "By soaring from 30% to 80%, Harble Secondary nearly tripled its initial baseline over the six-year period."
    },
    {
      word: "surrender a commanding lead",
      meaning:
        "Relinquish the undisputed top-ranked position after holding a substantial numerical advantage.",
      example:
        "Greystone High surrendered its commanding 25-point lead, eventually slipping to third place by the end of the survey."
    },
    {
      word: "converge at an identical proportion",
      meaning:
        "Align at the exact same percentage figure across separate data series in a specific year.",
      example:
        "In 1999, Royston Academy, Harble Secondary, and Crackend Boys converged at an identical proportion of 60%."
    },
    {
      word: "oscillate within a narrow band",
      meaning:
        "Fluctuate slightly up and down within very tight numerical limits, demonstrating high stability.",
      example:
        "Crackend Boys oscillated within a narrow band of 59% to 62%, exhibiting near-total stability."
    },
    {
      word: "exhibit a stepped upward pattern",
      meaning:
        "Progress through alternating periods of growth followed by short multi-year plateaus.",
      example:
        "Royston Academy exhibited a stepped upward pattern, pausing at 54% in 1997–98 before leveling at 60%."
    },
    {
      word: "rebound following a transient dip",
      meaning:
        "Recover strongly after experiencing a brief, temporary downward decline.",
      example:
        "Fairfield Girls rebounded following a transient dip to 70% in 1999, concluding at 79% in 2000."
    },
    {
      word: "overtake and displace from first place",
      meaning:
        "Surpass a higher-ranked entity and take over the leading position.",
      example:
        "By 1998, Fairfield Girls had overtaken Greystone High, temporarily holding the highest progression rate."
    }
  ],

  vocabHunt: [
    "tertiary education entry rate",
    "register an uninterrupted downward trend",
    "experience a meteoric surge",
    "nearly triple its initial baseline",
    "surrender a commanding lead",
    "converge at an identical proportion",
    "oscillate within a narrow band",
    "exhibit a stepped upward pattern",
    "rebound following a transient dip",
    "overtake and displace from first place"
  ],

  bp1: {
    title: "Body 1: The Surging Risers & Frontrunners (Harble Secondary & Fairfield Girls)",
    focus: "Harble's meteoric leap from last to first (30% to 80%) and Fairfield's progression to second place (65% to 79%)",
    points: [
      "Harble Secondary started as the lowest-ranking institution at 30% in 1995.",
      "It rose steadily by 5% annually to 35% in 1996 and 40% in 1997, before accelerating to 50% in 1998 and 60% in 1999.",
      "In the final year, Harble leaped by an extraordinary 20 percentage points to capture the top rank at 80% (nearly tripling its baseline).",
      "Fairfield Girls commenced in second position at 65% in 1995, climbing to 70% in 1996.",
      "In 1997, Fairfield reached 75%, equalizing with Greystone High, and held this level in 1998 to take the sole lead.",
      "After a brief 5% dip to 70% in 1999, Fairfield rebounded sharply to finish in second place at 79% in 2000 (just 1% behind Harble)."
    ],
    takeaways: [
      "Harble: Meteoric surge from 30% to 80% (+50% pts, +167%), vaulting from 5th to 1st place",
      "Fairfield: Strong rise from 65% to 79% (+14% pts), briefly leading in 1998 and rebounding to 2nd place"
    ]
  },

  bp2: {
    title: "Body 2: The Sole Decliner, Stepped Climber & Static Baseline (Greystone, Royston, Crackend)",
    focus: "Greystone's continuous decline (-20% pts), Royston's stepped rise (50% to 60%), Crackend's flatline (59%–62%), and the 1999 triple tie at 60%",
    points: [
      "Greystone High began with a commanding 25-point lead at 90% in 1995, but was the sole school to decrease.",
      "It dropped sharply to 80% in 1996 and 75% in 1997, followed by gradual declines to 73% (1998), 72% (1999), and 70% (2000), slipping to third place.",
      "Royston Academy progressed in a stepped manner, rising from 50% to 52% in 1996 and 54% in 1997, where it plateaued in 1998.",
      "It stepped up to 60% in 1999 and remained level in 2000 (+10% pts net).",
      "Crackend Boys exhibited remarkable stability, oscillating between 59% and 62% across the entire period (ending at 62%, +2% pts).",
      "In 1999, Royston Academy, Harble Secondary, and Crackend Boys all converged at an identical figure of exactly 60%."
    ],
    takeaways: [
      "Greystone: Continuous decline from 90% to 70% (-20% pts), surrendering its lead to finish 3rd",
      "Royston: Stepped growth from 50% to 60% (+10% pts) with plateaus in 1997–98 (54%) and 1999–2000 (60%)",
      "Crackend: Virtually static baseline hovering tightly between 59% and 62%",
      "1999 Milestone: Triple convergence at exactly 60% among Royston, Harble, and Crackend"
    ]
  },

  processingGroups: [
    {
      title: "Ascending Trends & Exponential Growth",
      items: [
        "Soared from 30% to finish at a peak of 80% in 2000",
        "Nearly tripled its initial baseline over the six-year period",
        "Jumped by an extraordinary 20 percentage points in a single year",
        "Vaulted from the lowest-ranked institution to the frontrunner position",
        "Rebounded sharply following a transient 5% contraction"
      ]
    },
    {
      title: "Decline, Stagnation & Stepped Plateaus",
      items: [
        "Was the sole institution to register an uninterrupted downward trend",
        "Surrendered its commanding 25-point lead, slipping from 1st to 3rd place",
        "Progressed in a stepped manner, featuring distinct multi-year plateaus",
        "Hovered tightly within a narrow 3% band between 59% and 62%",
        "Maintained notable consistency throughout the recording timeframe"
      ]
    },
    {
      title: "Comparative Crossovers & Convergences",
      items: [
        "Equalized with Greystone High at exactly 75% in 1997",
        "Overtook the former leader to claim the sole lead in 1998",
        "Converged at an identical figure of precisely 60% in 1999",
        "Concluded the period just one percentage point behind the top performer",
        "Inverted the historical hierarchy between first and last place by 2000"
      ]
    }
  ],

  connectors: [
    {
      phrase: "Turning first to the two highest-performing institutions by 2000,...",
      purpose: "Topic sentence transition opening Body Paragraph 1 (the surging risers).",
      example:
        "“Turning first to the two highest-performing institutions by 2000, Harble Secondary and Fairfield Girls recorded substantial growth.”"
    },
    {
      phrase: "Starting with the lowest figure of 30% in 1995,...",
      purpose: "Introducing the baseline figure for the most dramatic climber.",
      example:
        "“Starting with the lowest figure of 30% in 1995, Harble Secondary rose steadily before accelerating rapidly.”"
    },
    {
      phrase: "Despite a transient dip in 1999,...",
      purpose: "Concessive linker introducing a temporary reversal before a final recovery.",
      example:
        "“Despite a transient dip to 70% in 1999, Fairfield Girls rebounded to conclude at 79%.”"
    },
    {
      phrase: "In contrast, Greystone High was the only school to decline,...",
      purpose: "Contrastive macro transition opening Body Paragraph 2 (the falling and steady group).",
      example:
        "“In contrast, Greystone High was the only school to decline, surrendering its commanding initial lead of 90%.”"
    },
    {
      phrase: "Meanwhile, Royston Academy progressed in a stepped manner,...",
      purpose: "Parallel connector introducing moderate, stepped upward growth.",
      example:
        "“Meanwhile, Royston Academy progressed in a stepped manner from 50% to plateau at 54%.”"
    },
    {
      phrase: "Notably, in 1999, three institutions converged at exactly 60%...",
      purpose: "Highlighting a major multi-school convergence milestone.",
      example:
        "“Notably, in 1999, Royston, Harble, and Crackend all converged at an identical proportion of 60%.”"
    }
  ],

  modelReport: {
    wordCount: 194,
    paragraphs: [
      {
        id: "intro",
        title: "Introduction",
        wordCount: 27,
        badges: ["Paraphrase", "Parameters", "Schools Listed"],
        text: "The table illustrates the proportion of pupils who proceeded to tertiary education from five secondary schools—Royston Academy, Greystone High, Harble Secondary, Fairfield Girls, and Crackend Boys—between 1995 and 2000."
      },
      {
        id: "overview",
        title: "Overview",
        wordCount: 47,
        badges: ["Macro Dichotomy", "Sole Decliner", "Meteoric Surge", "Static Baseline"],
        text: "Overall, higher education entry rates rose in four out of the five secondary schools, with Greystone High being the sole institution to experience a continuous downward trend. Furthermore, while Harble Secondary exhibited the most dramatic expansion to finish with the highest percentage, Crackend Boys maintained notable consistency throughout the six-year period."
      },
      {
        id: "body1",
        title: "Body Paragraph 1: Surging Risers (Harble & Fairfield)",
        wordCount: 60,
        badges: ["Harble Leap", "Nearly Tripled", "Fairfield 1997 Tie", "1999 Dip & Rebound"],
        text: "Turning first to the two highest-performing institutions by 2000, Harble Secondary recorded a meteoric ascent. Starting with the lowest figure of 30% in 1995, it rose steadily to 40% in 1997 and 60% in 1999, before jumping by 20 percentage points to finish at a peak of 80%—nearly tripling its baseline. Fairfield Girls also followed an upward trajectory, climbing from 65% in 1995 to equalize with Greystone at 75% in 1997. Despite a transient dip to 70% in 1999, Fairfield rebounded to conclude at 79%, securing second position."
      },
      {
        id: "body2",
        title: "Body Paragraph 2: Decliner & Moderates (Greystone, Royston, Crackend)",
        wordCount: 60,
        badges: ["Greystone Fall", "Stepped Growth", "Crackend Stability", "1999 Triple Convergence"],
        text: "In contrast, Greystone High was the only school to decline, surrendering its commanding initial lead of 90% as it fell consecutively each year to end at 70%. Meanwhile, Royston Academy progressed in a stepped manner from 50% to plateau at 54% in 1997–1998, before leveling off at 60% from 1999 onwards. Crackend Boys displayed remarkable stability, fluctuating narrowly between 59% and 62% across the entire timeframe. Notably, in 1999, Royston, Harble, and Crackend all converged at exactly 60%."
      }
    ]
  }
};
