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
  AudienceHotspot
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
  AudienceHotspot
};

export const HOURLY_AUDIENCE_DATA: HourlyAudiencePoint[] = [
  { hour: 1, timeLabel: "1.00", tv: 7, radio: 3, annotation: "Cycle begins: TV at 7%, Radio at 3%" },
  { hour: 2, timeLabel: "2.00", tv: 3, radio: 2, annotation: "Nocturnal lull: both platforms drop under 4%" },
  { hour: 3, timeLabel: "3.00", tv: 3, radio: 2, annotation: "Overnight trough: TV at ~3%, Radio at ~2%" },
  { hour: 4, timeLabel: "4.00", tv: 3.5, radio: 2.5, annotation: "Pre-dawn quiet: minimal public engagement" },
  { hour: 5, timeLabel: "5.00", tv: 4, radio: 3, annotation: "Early risers: both remain flat under 5%" },
  { hour: 6, timeLabel: "6.00", tv: 5, radio: 4.5, annotation: "Dawn transition: Radio prepares for steep morning climb" },
  { hour: 7, timeLabel: "7.00", tv: 5, radio: 15, annotation: "Morning surge: Radio shoots up to 15%, TV holds at 5%" },
  { hour: 8, timeLabel: "8.00", tv: 7, radio: 25, annotation: "Breakfast rush: Radio leaps to 25%, TV has modest 7% news bump" },
  { hour: 8.5, timeLabel: "8.30", tv: 6, radio: 27, isPeak: "radio", annotation: "Radio Daily Apex: ~27% of UK population tuned in" },
  { hour: 9, timeLabel: "9.00", tv: 5.5, radio: 26, annotation: "Morning drive: Radio hovers strong at 26%" },
  { hour: 10, timeLabel: "10.00", tv: 4, radio: 23, annotation: "Post-commute: Radio begins gradual daytime descent" },
  { hour: 11, timeLabel: "11.00", tv: 3.5, radio: 20, annotation: "TV daytime low: TV dips to 3.5%, Radio slides to 20%" },
  { hour: 12, timeLabel: "12.00", tv: 8, radio: 17.5, annotation: "Midday approach: TV climbs toward 8%, Radio slides to 17.5%" },
  { hour: 13, timeLabel: "13.00", tv: 15, radio: 15, isCrossover: true, annotation: "Crossover Convergence: TV and Radio intersect at 15%" },
  { hour: 14, timeLabel: "14.00", tv: 14.5, radio: 12, annotation: "Leadership reversal: TV supersedes Radio permanently" },
  { hour: 15, timeLabel: "15.00", tv: 14, radio: 11, annotation: "Afternoon lull: TV steady at 14%, Radio at 11%" },
  { hour: 16, timeLabel: "16.00", tv: 17, radio: 13, annotation: "Late afternoon: TV starts ascending, Radio ticks up" },
  { hour: 17, timeLabel: "17.00", tv: 25, radio: 13.5, annotation: "Evening commute: Radio secondary bump (13.5%), TV surges to 25%" },
  { hour: 18, timeLabel: "18.00", tv: 42, radio: 7, annotation: "Prime-time explosion: TV rockets to 42%, Radio plunges to 7%" },
  { hour: 19, timeLabel: "19.00", tv: 43, radio: 7, annotation: "Prime-time entry: TV reaches 43%, Radio flat at 7%" },
  { hour: 20, timeLabel: "20.00", tv: 45, radio: 6, isPeak: "tv", annotation: "Prime-Time Global Apex: TV captivates 45% of UK population" },
  { hour: 21, timeLabel: "21.00", tv: 45, radio: 4, isPeak: "tv", annotation: "Prime-time plateau: TV holds at 45%, Radio drops to 4%" },
  { hour: 22, timeLabel: "22.00", tv: 38, radio: 5, annotation: "Late evening: TV begins steep slide down to 38%" },
  { hour: 23, timeLabel: "23.00", tv: 33, radio: 5, annotation: "Pre-midnight: TV drops to 33%, Radio at 5%" },
  { hour: 24, timeLabel: "24.00", tv: 15, radio: 4, annotation: "Cycle closes: TV falls to 15%, Radio settles at 4%" }
];

export const MEDIA_CHANNELS: MediaChannelInfo[] = [
  {
    id: "radio",
    name: "Radio",
    color: "#dc2626",
    lineStroke: "#dc2626",
    bgBadge: "rgba(220, 38, 38, 0.12)",
    peakTime: "08:30 – 09:00",
    peakValue: 27,
    troughTime: "02:00 – 04:00",
    troughValue: 2,
    summary: "Preferred medium during breakfast and morning commuting hours, with a peak of ~27% before declining steadily into the afternoon.",
    band9Phrase: "“Radio listenership followed an early diurnal rhythm, surging steeply between 6:00 and 8:30 to register its day peak of roughly 27% before undergoing a prolonged descent.”"
  },
  {
    id: "tv",
    name: "Television (TV)",
    color: "#2563eb",
    lineStroke: "#2563eb",
    bgBadge: "rgba(37, 99, 235, 0.12)",
    peakTime: "20:00 – 21:00",
    peakValue: 45,
    troughTime: "02:00 – 04:00 & 11:00",
    troughValue: 3,
    summary: "Overwhelmingly dominant from early afternoon through nightfall, skyrocketing to a massive prime-time apex of 45% between 20:00 and 21:00.",
    band9Phrase: "“Conversely, television viewing commanded the lion’s share of audience attention from 13:00 onwards, escalating dramatically in the evening to reach an absolute maximum of 45% between 20:00 and 21:00.”"
  }
];

export const AUDIENCE_HOTSPOTS: AudienceHotspot[] = [
  {
    id: "radio_peak",
    title: "Morning Rush & Radio Peak (08:30–09:00)",
    zone: "morning",
    timeRange: "06:00 – 09:00",
    radioState: "Surges rapidly from ~4% to its maximum daily apex of ~27%",
    tvState: "Registers a modest bump to ~7% at 8:00 before sliding to ~5.5%",
    contrastKey: "Radio outstrips TV by over 20 percentage points during morning rush hour",
    band9Sentence: "“Radio audience experienced a dramatic morning surge, climbing steeply to reach a daily apex of approximately 27% around 8:30, far outpacing television’s modest 7% peak.”",
    keyFeature: "Highest radio listenership of the entire 24-hour cycle."
  },
  {
    id: "midday_crossover",
    title: "Midday Convergence & Crossover (13:00)",
    zone: "midday",
    timeRange: "12:00 – 14:00",
    radioState: "Declines steadily to meet television at exactly 15%",
    tvState: "Climbs sharply from midday news to reach 15%",
    contrastKey: "Precise intersection point where TV supersedes radio permanently",
    band9Sentence: "“By 13:00, radio audiences had tapered off while television viewership climbed, resulting in a pivotal intersection where both mediums converged at precisely 15%.”",
    keyFeature: "The unique crossover point separating morning radio dominance from evening TV supremacy."
  },
  {
    id: "evening_surge",
    title: "Prime-Time Television Explosion (20:00–21:00)",
    zone: "evening",
    timeRange: "17:00 – 21:00",
    radioState: "Plunges below 10%, settling between 4% and 6%",
    tvState: "Skyrockets from 25% at 17:00 to an overall global peak of 45%",
    contrastKey: "Television achieves a massive 41-percentage-point lead over radio",
    band9Sentence: "“Television audiences skyrocketed through the evening, culminating in a dominant prime-time peak of 45% between 20:00 and 21:00, captivating nearly half the UK population.”",
    keyFeature: "Absolute maximum audience recorded across the entire day."
  },
  {
    id: "nocturnal_trough",
    title: "Nocturnal Trough & Minimal Engagement (02:00–05:00)",
    zone: "overnight",
    timeRange: "01:00 – 06:00",
    radioState: "Bottoms out at 2% to 3%",
    tvState: "Flattens at 3% to 4%",
    contrastKey: "Both media languish below 5% with virtually negligible engagement",
    band9Sentence: "“Between 1:00 and 6:00, audience figures for both platforms remained marginal, hovering under 5% throughout the early pre-dawn hours.”",
    keyFeature: "The lowest collective audience period for both broadcasting channels."
  },
  {
    id: "commute_bump",
    title: "Radio Evening Drive-Time Bump (17:00)",
    zone: "afternoon",
    timeRange: "16:00 – 18:00",
    radioState: "Exhibits a minor secondary rise to 13.5%–14%",
    tvState: "Ascending rapidly to 25%",
    contrastKey: "Radio temporarily arrests its decline before dropping sharply at 18:00",
    band9Sentence: "“Although radio exhibited a brief afternoon commute bump to approximately 14% at 17:00, its figures plummeted below 10% immediately thereafter.”",
    keyFeature: "Nuanced secondary peak reflecting vehicular commuters returning home."
  }
];

// Compatibility definitions for legacy structures
export const TASK1_HOTSPOTS: ComparisonHotspot[] = AUDIENCE_HOTSPOTS.map((h) => ({
  id: h.id,
  title: h.title,
  zone: h.zone,
  normalState: h.radioState,
  elNinoState: h.tvState,
  contrastKey: h.contrastKey,
  band9Sentence: h.band9Sentence
}));

export const MUSIC_FORMATS: MusicFormatItem[] = [];
export const COUNTRY_MARKETS: CountryMarketData[] = [];
export const PACIFIC_CONDITIONS: PacificConditionFeature[] = [];

export const TASK1_DATA: Task1Data = {
  id: "task1-uk-audiences-1992",
  taskType: "Line Graph (24-Hour Diurnal Cycle)",
  title: "Radio and Television Audiences in UK (Oct – Dec 1992)",
  companyName: "UK Broadcasting Audience Research",
  unit: "Percentage of UK population (over 4-years old) [%]",
  questionText:
    "The graph below shows radio and television audiences throughout the day in 1992. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
  imageFileName: "radio_tv_audiences_1992.png",
  hdImageFileName: "radio_tv_audiences_1992.png",
  scanImageFileName: "radio_tv_audiences_1992.png",
  audioUrl: "/audio/task1_briefing.mp3",
  audioClueText:
    "Welcome students to Task 1 analysis. You are examining a dual line graph depicting the percentage of the UK population aged four and above who tuned into radio and television over a full 24-hour cycle between October and December 1992. Notice the striking inverse relationship: radio is the preferred broadcasting medium during the morning hours, shooting up between 6:00 and 8:30 to reach a daily apex of roughly 27% during breakfast and morning commuting. In contrast, television begins slowly, maintaining a low audience of around 4% to 7% through the morning. At 13:00, or 1:00 pm, both curves intersect at approximately 15%. From this point forward, television decisively commands the afternoon and evening, skyrocketing past 40% after 18:00 to reach a colossal prime-time peak of 45% between 20:00 and 21:00, while radio languishes below 10%.",
  sampleIntro:
    "The line graph illustrates the percentage of the UK population aged four and above who listened to the radio and watched television throughout a 24-hour cycle between October and December in 1992.",
  sampleOverview:
    "Overall, the two media displayed contrasting diurnal patterns; radio listenership was considerably higher during the morning hours, whereas television decisively dominated from the early afternoon through the night. Additionally, evening television viewing attracted the single highest audience share of the day, with both mediums briefly converging around midday.",
  timingSeconds: 180,
  hourlyPoints: HOURLY_AUDIENCE_DATA,
  channels: MEDIA_CHANNELS,
  audienceHotspots: AUDIENCE_HOTSPOTS,
  formats: MUSIC_FORMATS,
  countries: COUNTRY_MARKETS,
  diagramData: {
    hotspots: TASK1_HOTSPOTS,
    comparisonsSummary: {
      "Morning Rush (06:00–09:00)": "Radio surges to daily peak of ~27% at 8:30 am; TV has minor 7% bump.",
      "Midday Crossover (13:00)": "Both channels intersect at exactly 15%; TV overtakes radio permanently.",
      "Prime-Time Surge (18:00–21:00)": "TV explodes to peak of 45% between 20:00–21:00; Radio drops below 7%.",
      "Late Afternoon Commute (17:00)": "Radio shows brief secondary bump to 13.5%–14% before dropping.",
      "Nocturnal Trough (02:00–05:00)": "Both media bottom out under 5% with minimal participation."
    },
    audiencePoints: HOURLY_AUDIENCE_DATA,
    channels: MEDIA_CHANNELS
  },
  graphData: {
    hotspots: TASK1_HOTSPOTS,
    comparisonsSummary: {},
    audiencePoints: HOURLY_AUDIENCE_DATA,
    channels: MEDIA_CHANNELS
  },
  vocabList: [
    {
      word: "diurnal pattern",
      partOfSpeech: "noun phrase",
      meaning: "A recurring daily cycle of variation occurring over a 24-hour period.",
      definition: "A recurring daily cycle of variation occurring over a 24-hour period.",
      example: "Radio and television audiences followed contrasting diurnal patterns throughout the day.",
      band: 9
    },
    {
      word: "reach an apex / peak at",
      partOfSpeech: "verb phrase",
      meaning: "To reach the absolute highest statistical point or maximum level in a distribution.",
      definition: "To reach the absolute highest statistical point or maximum level in a distribution.",
      example: "Television viewership reached its daily apex of 45% between 20:00 and 21:00.",
      band: 9
    },
    {
      word: "crossover point / intersection",
      partOfSpeech: "noun phrase",
      meaning: "The precise coordinate where two trend lines meet and trade positions of leadership.",
      definition: "The precise coordinate where two trend lines meet and trade positions of leadership.",
      example: "At 13:00, a crossover point occurred as both media intersected at roughly 15%.",
      band: 9
    },
    {
      word: "supersede / eclipse",
      partOfSpeech: "verb",
      meaning: "To take the place of, surpass, or become much more prominent than another entity.",
      definition: "To take the place of, surpass, or become much more prominent than another entity.",
      example: "From early afternoon onwards, television decisively superseded radio.",
      band: 9
    },
    {
      word: "prime-time viewing",
      partOfSpeech: "collocation / noun phrase",
      meaning: "The peak evening broadcasting block when audience viewership reaches its zenith.",
      definition: "The peak evening broadcasting block when audience viewership reaches its zenith.",
      example: "Prime-time viewing between 20:00 and 21:00 captivated almost half the UK population.",
      band: 8
    },
    {
      word: "trough / bottom out",
      partOfSpeech: "noun / verb phrase",
      meaning: "The lowest point in a cycle or curve, followed by stabilization or subsequent rise.",
      definition: "The lowest point in a cycle or curve, followed by stabilization or subsequent rise.",
      example: "Between 2:00 and 4:00 am, audience engagement bottomed out at just 2% to 3%.",
      band: 8
    },
    {
      word: "skyrocket / surge",
      partOfSpeech: "verb",
      meaning: "To rise or increase abruptly and extremely rapidly.",
      definition: "To rise or increase abruptly and extremely rapidly.",
      example: "Television ratings skyrocketed from 25% at 17:00 to 42% by 18:00.",
      band: 8
    },
    {
      word: "plummet / steep descent",
      partOfSpeech: "verb / noun phrase",
      meaning: "To fall precipitously and sharply from an elevated level.",
      definition: "To fall precipitously and sharply from an elevated level.",
      example: "After the evening news, radio audience plummeted below 10%.",
      band: 8
    },
    {
      word: "marginal engagement",
      partOfSpeech: "noun phrase",
      meaning: "Very low, negligible, or minimal participation or audience measurement.",
      definition: "Very low, negligible, or minimal participation or audience measurement.",
      example: "Both channels registered marginal engagement during the early pre-dawn hours.",
      band: 9
    },
    {
      word: "commute bump",
      partOfSpeech: "collocation / noun phrase",
      meaning: "A temporary secondary rise in listenership coinciding with vehicular travel times.",
      definition: "A temporary secondary rise in listenership coinciding with vehicular travel times.",
      example: "Radio enjoyed a brief commute bump to 14% around 17:00 as workers journeyed home.",
      band: 8
    },
    {
      word: "level off / plateau",
      partOfSpeech: "verb",
      meaning: "To flatten out and remain relatively stable after a period of increase or decrease.",
      definition: "To flatten out and remain relatively stable after a period of increase or decrease.",
      example: "Late at night, radio listenership leveled off at roughly 4% to 5%.",
      band: 8
    },
    {
      word: "inverse trajectory",
      partOfSpeech: "noun phrase",
      meaning: "Opposite directional pathways where one indicator rises while the other falls.",
      definition: "Opposite directional pathways where one indicator rises while the other falls.",
      example: "The two broadcasting mediums maintained inverse trajectories across the morning and evening.",
      band: 9
    }
  ],
  vocabHunt: [
    "Identify the academic term for 'a recurring 24-hour cycle of behavior'.",
    "Locate the phrase meaning 'the exact point where two lines meet and change rank'.",
    "Find the verb meaning 'to surpass or replace someone or something in dominance'.",
    "Identify the collocation for 'the peak evening television broadcasting window'."
  ],
  bp1: {
    title: "Body 1: Morning Surge to Midday Crossover (01:00 – 13:00)",
    focus: "Detail the overnight lull (<5%), the explosive morning rise of radio to its daily peak of ~27% at 8:30 am versus TV's modest 7% bump, followed by radio's steady decline and TV's ascent to the 13:00 crossover at 15%.",
    points: [
      "Overnight lull (01:00–06:00): Audiences for both media remained marginal, hovering below 5% (radio at 2%–3%, TV at 3%–4%).",
      "Morning rush hour (06:00–09:00): Radio listenership surged dramatically, soaring to a daily maximum peak of approximately 27% around 8:30.",
      "Television morning trend: Rose modestly to a small bump of 7% at 8:00 before sliding back to a daytime low of ~3.5% at 11:00.",
      "Midday crossover (13:00): Radio audiences steadily tapered down while television viewership climbed, meeting at an identical 15%."
    ],
    flow: [
      "1. Frame the pre-dawn baseline: marginal figures (<5%) for both radio and television.",
      "2. Document the explosive morning ascent of radio, quoting its peak of ~27% at 8:30 am.",
      "3. Contrast with television's subdued morning bump (7% at 8:00) and drop to 3.5% at 11:00.",
      "4. Highlight the crucial 13:00 intersection where both mediums converged at precisely 15%."
    ],
    takeaways: [
      "Radio was the undisputed morning leader, outpacing TV by roughly 20 percentage points at 8:30 am.",
      "13:00 marks the exact watershed moment when TV and radio audience curves crossed."
    ]
  },
  bp2: {
    title: "Body 2: Afternoon Ascent, Prime-Time Peak & Nightfall (14:00 – 24:00)",
    focus: "Detail television superseding radio from 14:00 onwards, radio's secondary 17:00 commute bump (14%) followed by its plunge below 10%, TV's explosive surge to its 45% peak between 20:00–21:00, and late-night declines.",
    points: [
      "TV dominance begins (14:00): Television overtook radio, holding steady around 14%–15% while radio declined to 11%–12%.",
      "Late afternoon commute (16:00–17:00): Radio enjoyed a slight secondary bump to ~14% at 17:00, while TV accelerated to 25%.",
      "Evening prime-time explosion (18:00–21:00): TV rocketed to 42% by 18:00, reaching an absolute peak of 45% between 20:00 and 21:00.",
      "Radio evening collapse: Plunged below 10% after 18:00 and hovered between 4% and 7% for the remainder of the evening.",
      "Late-night descent (22:00–24:00): TV dropped steeply from 38% to 15% by midnight, while radio leveled off at ~4%."
    ],
    flow: [
      "1. Establish TV taking permanent leadership after 13:00.",
      "2. Note radio's secondary commute bump (14% at 17:00) before its sharp slump below 10%.",
      "3. Trace television's spectacular surge past 40% to its prime-time zenith of 45% (20:00–21:00).",
      "4. Conclude with late-night trajectories: TV sliding to 15% and radio stabilizing at 4% by midnight."
    ],
    takeaways: [
      "Prime-time television achieved the single highest audience of the day at 45% (nearly half the population).",
      "Radio audience remained subdued throughout the evening, hovering under 7%."
    ]
  },
  processingGroups: [
    {
      title: "Describing Temporal Peaks & Zenith",
      items: [
        "“...surged steeply to reach a daily apex of approximately 27% at 8:30...”",
        "“...culminated in a prime-time peak of 45% between 20:00 and 21:00...”",
        "“...commanded the single largest audience share of the entire 24-hour cycle...”"
      ]
    },
    {
      title: "Framing Intersections & Crossovers",
      items: [
        "“...converged at an identical level of approximately 15% around midday...”",
        "“...marked a pivotal crossover point at 13:00 where television superseded radio...”",
        "“...intersected briefly before embarking on diametrically opposed paths...”"
      ]
    },
    {
      title: "Contrasting Inverse Diurnal Trajectories",
      items: [
        "“...in stark contrast to radio’s morning supremacy, television dominated the evening...”",
        "“...while television viewership skyrocketed, radio listenership plummeted below 10%...”",
        "“...displayed contrasting diurnal patterns across the morning and nocturnal hours...”"
      ]
    }
  ],
  connectors: [
    {
      phrase: "In stark contrast, / Conversely,",
      purpose: "Contrasting opposite morning and evening trends between radio and television",
      example: "In stark contrast to radio's morning dominance, television commanded the vast majority of viewers from the afternoon onwards."
    },
    {
      phrase: "Reaching a daily apex of...",
      purpose: "Attributing the maximum statistical peak with high lexical sophistication",
      example: "Radio audiences climbed sharply between 6:00 and 8:30, reaching a daily apex of roughly 27%."
    },
    {
      phrase: "By 13:00, / Around midday,",
      purpose: "Marking chronological milestones and temporal transitions",
      example: "By 13:00, both broadcasting mediums had converged at an identical level of 15%."
    },
    {
      phrase: "Thereafter, / From this point forward,",
      purpose: "Signaling permanent leadership change following the crossover point",
      example: "From this point forward, television superseded radio as the nation's premier medium."
    },
    {
      phrase: "Skyrocketing to... / Rocketing past...",
      purpose: "Depicting dramatic, rapid evening acceleration in television ratings",
      example: "Television viewership skyrocketed past 40% after 18:00, culminating in a 45% prime-time high."
    },
    {
      phrase: "Hovering under... / Bottoming out at...",
      purpose: "Accurately reporting low nocturnal troughs and minor percentages",
      example: "Between 2:00 and 5:00 am, audience engagement bottomed out at under 5% for both channels."
    }
  ],
  modelReport: {
    wordCount: 192,
    paragraphs: [
      {
        id: "intro",
        title: "Introduction",
        text: "The line graph illustrates the percentage of the UK population aged four and above who listened to the radio and watched television throughout a 24-hour cycle between October and December in 1992.",
        wordCount: 33,
        badges: ["Band 9 Paraphrase", "Scale of Measurement Included", "Temporal & Age Scope"]
      },
      {
        id: "overview",
        title: "Overview",
        text: "Overall, the two media displayed contrasting diurnal patterns; radio listenership was considerably higher during the morning hours, whereas television decisively dominated from the early afternoon through the night. Additionally, evening television viewing attracted the single highest audience share of the day, with both mediums briefly converging around midday.",
        wordCount: 51,
        badges: ["3-Pillar Macro Summary", "Inverse Trajectories", "Global Peak & Midday Convergence"]
      },
      {
        id: "body1",
        title: "Body 1: Morning Trends & Crossover (01:00 – 13:00)",
        text: "Between 1:00 and 6:00, audience figures for both platforms remained marginal at under 7%. Radio then experienced a dramatic morning surge, climbing steeply to reach a daily apex of approximately 27% around 8:30. In contrast, television engagement rose only modestly to 7% at 8:00 before sliding back to around 4% at 11:00. By 13:00, radio audiences had tapered off while television viewership climbed, resulting in an intersection where both mediums stood at roughly 15%.",
        wordCount: 75,
        badges: ["Nocturnal Baseline", "Radio 27% Morning Peak", "13:00 Crossover Convergence"]
      },
      {
        id: "body2",
        title: "Body 2: Afternoon Ascent, Prime-Time Peak & Night (14:00 – 24:00)",
        text: "From 14:00 onwards, television superseded radio. Although radio exhibited a brief afternoon commute bump to 14% at 17:00, its figures plummeted below 10% thereafter. Conversely, television audiences skyrocketed from 16:00, culminating in a prime-time peak of 45% between 20:00 and 21:00. Late at night, television viewership dropped sharply to 15% by midnight, while radio leveled off at around 4%.",
        wordCount: 63,
        badges: ["TV Leadership Reversal", "Prime-Time 45% Zenith", "Nightfall Stabilization"]
      }
    ]
  }
};
