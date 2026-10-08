import type {
  BrainstormCard,
  ConsequenceItem,
  EvaluationArgument,
  FacultyAngle,
  FluidVocabItem,
  StrategicLinkerGroup,
  Task2Data,
  VocabItem
} from "../types";

export type {
  BrainstormCard,
  ConsequenceItem,
  EvaluationArgument,
  FacultyAngle,
  FluidVocabItem,
  StrategicLinkerGroup,
  Task2Data,
  VocabItem
};

export const TASK2_DATA: Task2Data = {
  id: "increasing-weight-declining-fitness-task2",

  taskType: "Two-Part / Direct Question Essay (Effects & Solutions)",

  title: "Rising Obesity and Declining Physical Fitness: Repercussions and Remedial Measures",

  questionText:
    "In some countries, the average weight of people is increasing and their levels of health and fitness are decreasing.\n\n- What are the effects of this?\n- What measures could be taken to solve them?",

  audioUrl: "materials/weight-health-fitness-briefing.m4a",

  timingSeconds: 180,

  sampleIntro:
    "In many nations, rising average body weight and declining physical fitness have become alarming public health concerns. This trend primarily strains healthcare systems and curtails economic productivity; however, imposing fiscal sugar levies and expanding active transit infrastructure offer viable solutions.",

  sampleConclusion:
    "In conclusion, the dual epidemics of rising obesity and declining physical fitness inflict profound damage upon national healthcare infrastructures and workforce vitality through chronic non-communicable diseases. Nevertheless, through aggressive government fiscal interventions, such as sugar levies, coupled with active urban redesign and mandatory physical wellness initiatives in schools and workplaces, societies can reverse this trajectory and foster a healthier, more resilient populace.",

  vocabList: [
    {
      word: "escalating obesity rates",
      meaning:
        "Rapidly multiplying proportions of individuals categorized as clinically overweight or obese within a population.",
      example:
        "Escalating obesity rates in industrialized societies correlate directly with the widespread availability of cheap, hyper-palatable convenience foods."
    },
    {
      word: "sedentary lifestyle habits",
      meaning:
        "Daily routines characterized by prolonged physical inactivity, such as desk-bound occupations and excessive recreational screen time.",
      example:
        "The shift from manual labor to automated office workflows has cemented sedentary lifestyle habits across the global workforce."
    },
    {
      word: "chronic non-communicable diseases",
      meaning:
        "Long-term medical conditions not transmitted between persons, notably cardiovascular disorders, type-2 diabetes, and hypertension.",
      example:
        "A sedentary populace inevitably experiences a surge in chronic non-communicable diseases, requiring lifelong medical management."
    },
    {
      word: "unsustainable healthcare expenditure",
      meaning:
        "Excessive government or personal fiscal spending required to manage preventable lifestyle ailments that exhausts state health budgets.",
      example:
        "Treating preventable weight-related illnesses accounts for an unsustainable healthcare expenditure in modern welfare states."
    },
    {
      word: "impair economic productivity",
      meaning:
        "Diminish national or corporate work efficiency, output, and GDP generation due to employee illness, fatigue, or absenteeism.",
      example:
        "Widespread physical unfitness threatens to impair economic productivity through heightened workplace absenteeism and premature retirement."
    },
    {
      word: "targeted fiscal disincentives",
      meaning:
        "State tax policies, such as levies on sugar-sweetened beverages or junk food, engineered to raise prices and discourage unhealthy consumption.",
      example:
        "Implementing targeted fiscal disincentives on carbonated drinks has demonstrated measurable success in curbing caloric intake."
    },
    {
      word: "active urban infrastructure",
      meaning:
        "Municipal city planning incorporating dedicated cycling highways, pedestrianized zones, and accessible public recreation parks.",
      example:
        "Investing in active urban infrastructure encourages daily non-motorized commuting, embedding exercise into routine life."
    },
    {
      word: "concomitant deterioration",
      meaning:
        "A simultaneous, accompanying decline in quality, status, or biological performance occurring in parallel with another phenomenon.",
      example:
        "The surge in average body mass has brought a concomitant deterioration in cardiovascular endurance and mental stamina."
    },
    {
      word: "subsidize nutritious whole foods",
      meaning:
        "Provide government financial assistance to reduce retail prices of fresh fruits, vegetables, and unrefined grains for consumers.",
      example:
        "Governments must actively subsidize nutritious whole foods to ensure low-income households can afford balanced dietary choices."
    },
    {
      word: "preventative public health paradigm",
      meaning:
        "A proactive healthcare strategy prioritizing disease prevention and active lifestyles rather than reactive clinical treatments.",
      example:
        "Shifting toward a preventative public health paradigm yields exponential savings compared to managing advanced metabolic disorders."
    }
  ],

  vocabHunt: [
    "escalating obesity rates",
    "sedentary lifestyle habits",
    "chronic non-communicable diseases",
    "unsustainable healthcare expenditure",
    "impair economic productivity",
    "targeted fiscal disincentives",
    "active urban infrastructure",
    "concomitant deterioration"
  ],

  /*
   * ================================================================
   * STEP 6: QUESTION 1 — WHAT ARE THE EFFECTS OF THIS?
   * ================================================================
   * Levelled points evaluating repercussions:
   * Level 1: Extreme Healthcare System Overload & Fiscal Strain (High Impact Macro)
   * Level 1: Proliferation of Debilitating Chronic Illnesses (High Impact Individual)
   * Level 2: Macroeconomic Productivity Loss & Workforce Depletion (Strategic Depth)
   * Level 2: Psychological Morbidity & Diminished Life Expectancy (Strategic Depth)
   * Plus 4 Nuances & Systemic Ramifications (Socio-Economic Gradient, Transgenerational Epigenetics, Mental Comorbidities, Emergency Logistics)
   */
  consequences: [
    {
      type: "positive",
      level: "Level 1: High Impact (Macro Healthcare)",
      simpleTakeaway:
        "Treating obesity-related illnesses drains billions from national health budgets, starving other medical sectors of essential resources.",
      collocation: "unsustainable healthcare expenditure",
      title: "Severe Overload & Fiscal Strain on Public Healthcare Infrastructures",
      desc:
        "The most immediate societal repercussion is the staggering financial burden imposed on national healthcare systems. When large proportions of the citizenry suffer from preventable weight-induced complications, public hospitals and subsidized health programs must allocate disproportionate capital to ongoing dialysis, cardiac surgeries, and bariatric care, diverting critical resources away from acute trauma, pediatrics, and emergency medicine.",
      example:
        "The UK's National Health Service (NHS) spends over £6 billion annually treating obesity-related conditions—surpassing the combined public expenditure on police and fire services."
    },
    {
      type: "positive",
      level: "Level 1: High Impact (Individual Pathology)",
      simpleTakeaway:
        "Excess weight directly triggers life-threatening conditions like type-2 diabetes, hypertension, and cardiovascular failure.",
      collocation: "chronic non-communicable diseases",
      title: "Proliferation of Debilitating Chronic Non-Communicable Diseases",
      desc:
        "On an individual level, escalating body fat percentage combined with muscular atrophy impairs metabolic homeostasis. Individuals face heightened vulnerability to cardiovascular disorders, stroke, osteoarthritis, and premature coronary failure. Unlike seasonal infectious diseases, these lifestyle ailments persist across decades, severely restricting physical mobility and drastically shortening healthy life expectancy.",
      example:
        "World Health Organization (WHO) epidemiological reports indicate that over 80% of adult type-2 diabetes diagnoses are directly attributable to excess weight and physical inactivity."
    },
    {
      type: "positive",
      level: "Level 2: Strategic Depth (Economic Output)",
      simpleTakeaway:
        "Unhealthy workers suffer frequent absenteeism, reduced daily work stamina, and premature retirement, curbing national economic growth.",
      collocation: "impair economic productivity",
      title: "Workforce Attrition, Absenteeism & Depleted Macroeconomic Productivity",
      desc:
        "Beyond clinical clinics, an unfit population inflicts severe damage on macroeconomic output. Workers suffering from chronic fatigue, spinal strain, and joint inflammation take frequent medical leave (absenteeism) or perform below their cognitive potential while physically present at their desks (presenteeism). This reduces corporate competitiveness, causes early workforce retirement, and shrinks the national tax base.",
      example:
        "Economic think-tank studies in the United States estimate that obesity-related productivity losses and sick days cost corporate employers over $150 billion in lost output each year."
    },
    {
      type: "positive",
      level: "Level 2: Strategic Depth (Mental & Physical Quality of Life)",
      simpleTakeaway:
        "Physical inactivity and obesity are tightly correlated with clinical depression, reduced mobility, and shortened lifespan.",
      collocation: "concomitant deterioration",
      title: "Psychological Morbidity, Social Isolation & Diminished Life Quality",
      desc:
        "The negative effects extend deeply into psychosocial well-being. Physical inactivity deprives the brain of essential mood-regulating endorphins and neurotrophic factors, leaving individuals susceptible to clinical depression, chronic anxiety, and low self-esteem. Furthermore, societal weight stigma and impaired mobility foster social isolation, trapping sufferers in a self-reinforcing loop of emotional eating and sedentary withdrawal.",
      example:
        "Psychiatric longitudinal studies demonstrate that individuals diagnosed with severe obesity are 55% more likely to develop long-term depressive disorders compared to their physically active peers."
    },
    {
      type: "negative",
      level: "Nuance 1: The Socio-Economic Asymmetry",
      simpleTakeaway:
        "Obesity strikes low-income families hardest because processed, calorie-dense junk food is far cheaper than fresh produce.",
      collocation: "socio-economic dietary disparity",
      title: "The Socio-Economic Gradient: Deepening Health Inequity",
      desc:
        "Weight gain does not afflict all social classes equally. Lower-income demographics residing in urban 'food deserts' face severe economic barriers to purchasing wholesome produce, forcing reliance on hyper-processed, calorie-dense fast foods that cost a fraction per calorie, thereby compounding structural poverty with chronic disease.",
      example:
        "In developed economies like Australia and the US, obesity rates among the lowest income quartile are nearly double those observed in the wealthiest demographic brackets."
    },
    {
      type: "negative",
      level: "Nuance 2: Transgenerational Health Deficits",
      simpleTakeaway:
        "Overweight parents unknowingly pass poor eating habits and metabolic risks down to their children, creating cyclical epidemics.",
      collocation: "transgenerational health vulnerability",
      title: "Transgenerational Transmission & Childhood Obesity Cascades",
      desc:
        "Parental obesity and sedentary lifestyle habits frequently program the next generation. Children raised in sedentary environments not only adopt poor nutritional norms but also inherit epigenetic predispositions toward metabolic dysfunction, setting off early childhood diabetes and heart complications.",
      example:
        "Pediatric health registries show that children with two obese parents are up to 80% more likely to become obese adults compared to children of normal-weight parents."
    },
    {
      type: "negative",
      level: "Nuance 3: Cognitive Stagnation in Sedentary Populations",
      simpleTakeaway:
        "Lack of exercise impairs neurogenesis and dopamine regulation, worsening chronic anxiety and social disengagement.",
      collocation: "cognitive stagnation and neurodegeneration",
      title: "Sedentary Cognitive Decline & Accelerated Neurodegeneration",
      desc:
        "Physical exercise stimulates brain-derived neurotrophic factor (BDNF), crucial for memory formation and neuroplasticity. Protracted physical inactivity accelerates vascular dementia risk and degrades cognitive sharpness in aging workforces, turning fitness deficits into mental decline.",
      example:
        "Neurological clinical studies confirm that regular aerobic exercise reduces the risk of vascular dementia by nearly 30% by maintaining cerebral blood flow."
    },
    {
      type: "negative",
      level: "Nuance 4: Logistical & Emergency Infrastructure Strain",
      simpleTakeaway:
        "Hospitals and emergency services must invest in heavier ambulances, bariatric surgical beds, and specialized medical logistics.",
      collocation: "specialized bariatric medical logistics",
      title: "Emergency Transport Bottlenecks & Specialized Medical Logistics",
      desc:
        "Rising average body mass imposes severe mechanical constraints on public infrastructure, requiring municipalities to retrofit ambulances with heavy-duty hydraulic lifts, reinforce surgical tables, and redesign transit seating, imposing massive hidden secondary capital costs on public utilities.",
      example:
        "Multiple metropolitan paramedic services in North America and Western Europe have spent millions re-engineering ambulance fleets with heavy-duty winches and reinforced stretchers."
    }
  ],

  /*
   * ================================================================
   * STEP 7: QUESTION 2 — WHAT MEASURES COULD BE TAKEN TO SOLVE THEM?
   * ================================================================
   * Levelled points for comprehensive remedial measures:
   * Level 1: State Fiscal Interventions & Junk Food Advertising Curfews (High Impact Policy)
   * Level 1: Active Urban Architecture & Green Commuting Infrastructure (High Impact Infrastructure)
   * Level 2: Institutional Physical Activity Mandates in Schools & Workplaces (Strategic Depth)
   * Level 2: Subsidizing Nutritious Whole Foods & Mandatory Nutrition Labeling (Strategic Depth)
   * Plus 4 Evaluative Strategic Implementations (Preventive Screenings, Gamified Nudges, Ergonomic Redesign, Public Awareness)
   */
  evaluationArguments: [
    {
      type: "argument",
      level: "Level 1: High Impact (Fiscal & Regulatory)",
      simpleTakeaway:
        "Taxing sugary drinks and banning fast-food ads aimed at children instantly shifts consumer habits toward healthier choices.",
      collocation: "targeted fiscal disincentives",
      title: "Aggressive State Fiscal Policies & Junk Food Marketing Curfews",
      reason:
        "Governments possess the sovereign power to reshape consumer purchasing behavior through taxation and stringent commercial advertising regulations.",
      development:
        "Market mechanisms are among the most effective drivers of dietary change. By levying substantial excise taxes on sugar-sweetened beverages, confectionery, and ultra-processed snacks—while simultaneously banning junk food advertisements during children's programming and on social media—authorities disincentivize unhealthy purchases. The revenue generated can then be ring-fenced to fund subsidized youth sports programs and school lunch overhauls.",
      example:
        "Following Mexico's 2014 introduction of a 10% tax on sugar-sweetened beverages, national purchases of taxed drinks declined by nearly 10% within two years, with the greatest reductions seen in low-income households."
    },
    {
      type: "argument",
      level: "Level 1: High Impact (Built Environment)",
      simpleTakeaway:
        "Building protected bike lanes, wide pedestrian walkways, and outdoor fitness parks makes daily exercise effortless.",
      collocation: "active urban infrastructure",
      title: "Redesigning Municipal Environments for Active Commuting & Recreation",
      reason:
        "Automobile-dominated urban designs passively enforce sedentary lifestyles; restructuring cities restores spontaneous physical movement.",
      development:
        "Rather than relying solely on individual motivation to visit commercial gyms, municipalities must integrate cardiovascular activity into daily commuting routines. Constructing separated bicycle superhighways, expansive pedestrianized high streets, and freely accessible public outdoor gym facilities normalizes daily non-motorized transport. When cycling and walking become the most convenient commuting choices, baseline fitness rises universally across the population.",
      example:
        "In Copenhagen and Amsterdam, dedicated cycling infrastructure enables over 40% of the population to commute by bicycle daily, resulting in significantly lower cardiovascular disease incidence than car-dependent Western cities."
    },
    {
      type: "argument",
      level: "Level 2: Strategic Depth (Institutional Mandates)",
      simpleTakeaway:
        "Enforcing daily fitness sessions in schools and subsidized gym hours in corporate offices reverses sedentary desk routines.",
      collocation: "mandatory physical education regimens",
      title: "Mandatory Physical Wellness Programs in Educational Institutions & Workplaces",
      reason:
        "Since individuals spend the majority of their waking hours in schools and corporate offices, institutional mandates ensure sustained exercise habits.",
      development:
        "Schools must implement mandatory, daily aerobic physical education classes combined with rigorous bans on sugary vending machines within campus grounds. Simultaneously, corporate employers should be incentivized through corporate tax breaks to offer standing desks, paid midday fitness breaks, and subsidized sports facility memberships, dismantling the culture of uninterrupted 8-hour sedentary sitting.",
      example:
        "Japan's 'Shuku' school lunch law and corporate 'Metabo Law' mandate daily healthy nutrition and annual employee waistline monitoring, contributing to Japan maintaining the lowest obesity rate in the industrialized OECD world."
    },
    {
      type: "argument",
      level: "Level 2: Strategic Depth (Nutritional Subsidies)",
      simpleTakeaway:
        "Lowering the cost of fresh vegetables and requiring traffic-light nutrition labels empowers citizens to eat well on any budget.",
      collocation: "subsidize nutritious whole foods",
      title: "Subsidizing Nutritious Whole Foods & Mandatory Front-of-Package Labeling",
      reason:
        "Ensuring wholesome, unprocessed foods are cheaper and easier to understand than ultra-processed alternatives democratizes good health.",
      development:
        "Governments should redirect agricultural subsidies toward fresh vegetables, legumes, and unrefined grains, making wholesome food more affordable than fast food. Concurrently, imposing mandatory, front-of-package 'traffic light' nutritional warning labels (clearly highlighting high sugar, saturated fat, and sodium content) eliminates deceptive marketing and enables consumers to make informed dietary decisions instantly.",
      example:
        "Chile's pioneering black-stop-sign warning label law prompted food manufacturers to reformulate over 20% of supermarket products to reduce sugar and salt levels below the regulatory threshold."
    },
    {
      type: "counterpoint",
      level: "Implementation 1: Preventative Screenings",
      simpleTakeaway:
        "Doctors prescribing structured gym classes and regular biometric checks catch pre-diabetes long before hospitalization is needed.",
      collocation: "preventative public health paradigm",
      title: "Clinical Exercise Prescriptions & Early Biometric Interventions",
      reason:
        "Transforming healthcare from reactive disease treatment into proactive physical conditioning stops chronic conditions before they become irreversible.",
      development:
        "Primary care physicians should be empowered to prescribe subsidized gym memberships and community exercise regimens alongside conventional pharmaceuticals. Routine biometric screening programs at age 30 and 40 catch pre-diabetes and early hypertension early, allowing lifestyle adjustments before irreversible organ damage occurs.",
      example:
        "The UK's 'Social Prescribing' initiative allows family doctors to refer patients directly to subsidized local cycling clubs and walking groups, yielding marked reductions in medication dependency."
    },
    {
      type: "counterpoint",
      level: "Implementation 2: Digital Nudges & Gamification",
      simpleTakeaway:
        "Wearable step-trackers and state-sponsored fitness apps rewarding daily steps with public transit discounts motivate mass participation.",
      collocation: "gamified behavioral incentivization",
      title: "Digital Health Nudges & Gamified Physical Activity Platforms",
      reason:
        "Leveraging mobile technology and behavioral economics makes daily exercise rewarding and competitive for younger generations.",
      development:
        "National health boards can deploy gamified mobile applications that track daily step counts and active heart rate minutes, rewarding consistent physical activity with tangible civic benefits such as public transit discounts or cinema vouchers. This transforms fitness from an intimidating chore into an engaging daily game.",
      example:
        "Singapore's National Steps Challenge has engaged over one million citizens by pairing smartphone step tracking with retail loyalty rewards, driving measurable increases in average daily steps."
    },
    {
      type: "counterpoint",
      level: "Implementation 3: Ergonomic Workplace Redesign",
      simpleTakeaway:
        "Replacing sedentary cubicles with height-adjustable desks and walking meetings combats 8 hours of uninterrupted daily sitting.",
      collocation: "ergonomic occupational restructuring",
      title: "Workplace Ergonomic Restructuring & Active Meeting Cultures",
      reason:
        "Altering physical office environments passively reduces prolonged sedentary posture without sacrificing professional output.",
      development:
        "Companies that incorporate height-adjustable sit-stand desks, treadmill workstations, and active 'walking meetings' break up continuous sitting spells. Even low-intensity postural shifts throughout the workday dramatically enhance insulin sensitivity and daily caloric expenditure.",
      example:
        "Scandinavian tech firms that provide standing desks and structured 5-minute stretch breaks report significant reductions in employee musculoskeletal complaints and afternoon lethargy."
    },
    {
      type: "counterpoint",
      level: "Implementation 4: Counter-Marketing Campaigns",
      simpleTakeaway:
        "Educating families on the hidden sugars in supermarket meals shifts national food culture similar to historical anti-smoking campaigns.",
      collocation: "public health education campaigns",
      title: "Aggressive Public Health Counter-Marketing & Nutritional Literacy",
      reason:
        "Demystifying misleading industrial food claims reshapes societal attitudes and denormalizes ultra-processed dietary staples.",
      development:
        "Just as anti-tobacco graphic campaigns successfully shifted public perceptions of smoking over several decades, aggressive public awareness drives highlighting the hidden sugars, trans fats, and metabolic hazards of convenience foods build grassroots demand for wholesome cooking and physical fitness.",
      example:
        "Australia's sustained 'LiveLighter' public health advertisements, illustrating visceral fat buildup caused by sugary drinks, led to a 30% reduction in weekly soft drink consumption among target audiences."
    }
  ],

  facultyAngles: [
    {
      title: "Behavioral Economics & Nudge Theory (Thaler & Sunstein)",
      development:
        "Analyze how default environmental choices shape human decisions. When convenience stores place water and fresh fruit at eye level while banishing confectionery to rear shelves, consumer purchase patterns shift automatically without coercive bans—demonstrating the power of choice architecture in combating obesity."
    },
    {
      title: "The Built Environment & Food Desert Determinism",
      development:
        "Examine urban sociology research showing that weight gain is heavily determined by postal code. In underserved communities lacking supermarkets with fresh produce but saturated with fast-food outlets, individual willpower is insufficient without systemic municipal rezoning and public transit connectivity."
    },
    {
      title: "Preventative vs. Curative Healthcare Economics (The WHO Mandate)",
      development:
        "Contrast the economic return on investment (ROI) of preventative measures versus curative interventions. Every dollar invested in public active transit and nutritional education saves approximately three to five dollars in avoided chronic disease hospitalizations over a ten-year horizon."
    },
    {
      title: "The Ultra-Processed Food Industry: Parallels with Big Tobacco",
      development:
        "Evaluate legal and ethical arguments comparing the multi-billion-dollar food processing conglomerates with twentieth-century tobacco corporations. Analyze the addictive hyper-palatability of sugar-fat-salt formulations designed by food chemists to bypass human biological satiety signals."
    },
    {
      title: "Epigenetics & The Developmental Origins of Health and Disease (DOHaD)",
      development:
        "Explore how maternal and paternal health at conception, alongside early childhood nutrition, epigenetically alters gene expression for metabolic efficiency and adiposity, illustrating why public health interventions must prioritize young mothers and primary school children to break multi-generational cycles."
    },
    {
      title: "Scandinavian Active Living ('Friluftsliv') and Urban Design Benchmarks",
      development:
        "Investigate Nordic public policies that embed outdoor recreation ('friluftsliv') into daily civic life, examining how municipal snow-clearing priorities for bike paths before motorways, alongside tax-free bicycle purchase schemes, have maintained exemplary population fitness across all age demographics."
    }
  ],

  brainstormCards: [
    {
      question:
        "Why does increasing population weight pose a devastating economic threat beyond individual medical problems?",
      thinkingLens: "Macroeconomic Healthcare Solvency & Workforce Productivity",
      selfCheck:
        "Did you consider both direct hospital spending and indirect losses from employee absenteeism and premature retirement?",
      idea:
        "Rising obesity drains billions in state healthcare budgets managing chronic conditions like type-2 diabetes, while simultaneously reducing workforce stamina, increasing sick leave, and shrinking the active labor pool required for economic growth."
    },
    {
      question:
        "How has modern technological and urban advancement engineered physical movement out of human existence?",
      thinkingLens: "Sedentary Automation & Automobile-Centric Urban Planning",
      selfCheck:
        "Did you identify desk-bound office automation, screen-based leisure, and car-dependent suburbs?",
      idea:
        "The shift from agricultural and manual labor to desk-bound computer occupations, combined with suburban car dependency and digital entertainment, has replaced natural daily physical movement with protracted, uninterrupted sedentary sitting."
    },
    {
      question:
        "Why do voluntary public education campaigns usually fail unless paired with aggressive government fiscal policies?",
      thinkingLens: "Price Elasticity & The Addictive Nature of Ultra-Processed Foods",
      selfCheck:
        "Did you evaluate why knowledge alone cannot overcome the cheapness and convenience of fast food?",
      idea:
        "Awareness campaigns cannot compete with ultra-processed foods that are artificially cheap and biologically addictive. Only hard fiscal interventions—like sugar taxes and price subsidies for fresh vegetables—make healthy food financially advantageous for ordinary families."
    },
    {
      question:
        "What institutional roles should schools and employers play in re-establishing daily physical activity?",
      thinkingLens: "Captive Audience Interventions & Mandatory Wellness Scheduling",
      selfCheck:
        "Can you propose specific structural solutions like mandatory physical education and standing desks?",
      idea:
        "Because citizens spend the majority of their weekdays in schools and offices, these institutions must mandate daily aerobic exercise classes, ban junk-food vending machines, and provide standing desks and subsidized gym hours to make fitness non-negotiable."
    }
  ],

  powerExpressions: [
    {
      expression: "a myopic focus on curative medicine",
      meaning:
        "A short-sighted healthcare strategy that prioritizes late-stage clinical treatments rather than addressing lifestyle root causes.",
      example:
        "Relying strictly on hospital pharmaceutical subsidies reflects a myopic focus on curative medicine rather than preventative lifestyle intervention."
    },
    {
      expression: "the epitome of active municipal planning",
      meaning:
        "The quintessential urban benchmark where city design effortlessly embeds daily exercise into ordinary routines.",
      example:
        "Copenhagen's separated bicycle highway corridors represent the epitome of active municipal planning, keeping citizen fitness high."
    },
    {
      expression: "pervasive exposure to hyper-palatable foods",
      meaning:
        "The ubiquitous and unescapable commercial saturation of cheap, high-sugar convenience products in daily environments.",
      example:
        "Pervasive exposure to hyper-palatable foods has normalized excessive caloric surpluses across working-class demographics."
    },
    {
      expression: "exacerbate sedentary workforce lethargy",
      meaning:
        "Intensify physical inactivity, musculoskeletal fatigue, and metabolic slowdown within desk-bound occupations.",
      example:
        "Prolonged desk-bound shifts exacerbate sedentary workforce lethargy, causing diminished daily productivity and chronic spinal ailments."
    },
    {
      expression: "catalyze a preventative public health paradigm",
      meaning:
        "Spark a proactive societal transition toward preventing illnesses before clinical treatments are required.",
      example:
        "Aggressive sugar levies can catalyze a preventative public health paradigm across developing economies."
    },
    {
      expression: "mitigate chronic disease prevalence",
      meaning:
        "Substantially decrease the occurrence, severity, and fiscal burden of long-term metabolic conditions.",
      example:
        "Subsidizing fresh whole foods and promoting active transit can effectively mitigate chronic disease prevalence in urban hubs."
    },
    {
      expression: "unsustainable strain on public healthcare coffers",
      meaning:
        "An overwhelming financial and logistical burden that threatens to bankrupt state medical systems.",
      example:
        "The surge in chronic lifestyle illnesses places an unsustainable strain on public healthcare coffers."
    },
    {
      expression: "embed active commuting into the municipal fabric",
      meaning:
        "Integrate walking, cycling, and pedestrian transit directly into the core architectural design of modern cities.",
      example:
        "Constructing protected bicycle highways embeds active commuting into the municipal fabric of European capitals."
    }
  ],

  connectorsTier: {
    sTier: [
      "From an epidemiological perspective, the primary consequence of this trend is...",
      "Consequently, public healthcare infrastructures are confronted with an unprecedented fiscal hemorrhage...",
      "To counter this multi-faceted crisis, governments must enact decisive regulatory and urban interventions...",
      "By combining targeted fiscal disincentives with the expansion of active urban infrastructure..."
    ],
    aTier: [
      "In terms of long-term economic ramifications",
      "Compounding this physiological deterioration is",
      "A particularly effective remedial measure involves",
      "As public health case studies convincingly demonstrate"
    ],
    bTier: [
      "First and foremost",
      "In addition to this",
      "For instance",
      "In conclusion, to summarize"
    ]
  },

  /*
   * ================================================================
   * STRATEGIC DISCOURSE LINKERS: WHERE EXACTLY TO USE THEM
   * ================================================================
   * Categorized by paragraph zone so students know the precise essay placement.
   */
  strategicLinkers: [
    {
      zone: "Zone 1: Opening the Core Effect (Topic Sentence)",
      badge: "Paragraph Opener (Body 1 & 2)",
      placementRule:
        "Place at the very beginning of Body 1 or Body 2 to state the primary repercussion (e.g. healthcare strain or workforce fatigue) with immediate academic authority, avoiding basic cliches like 'First of all'.",
      items: [
        {
          phrase: "From an epidemiological perspective, the primary consequence of this trend is...",
          functionDesc: "Establishes clinical, public health, and hospital capacity dimensions.",
          example:
            "From an epidemiological perspective, the primary consequence of this trend is the unsustainable financial and operational burden placed on state healthcare networks."
        },
        {
          phrase: "At a macroeconomic level, the most concerning repercussion manifests as...",
          functionDesc: "Frames workforce attrition, workplace absenteeism, and national output loss.",
          example:
            "At a macroeconomic level, the most concerning repercussion manifests as widespread workplace absenteeism and depleted daily labor productivity."
        },
        {
          phrase: "The foremost structural hazard arising from declining fitness is...",
          functionDesc: "Directly introduces systemic societal or logistical threats.",
          example:
            "The foremost structural hazard arising from declining fitness is the premature escalation of chronic non-communicable diseases among working-age adults."
        }
      ]
    },
    {
      zone: "Zone 2: Unpacking Causal Mechanisms (Supporting Detail)",
      badge: "Causal Logic Engine",
      placementRule:
        "Place immediately after the topic sentence to elucidate the exact cause-and-effect mechanism—explaining WHY and HOW sedentary routines and processed diets produce the stated damage.",
      items: [
        {
          phrase: "This crisis is largely attributable to...",
          functionDesc: "Identifies the core structural root cause with academic restraint.",
          example:
            "This crisis is largely attributable to desk-bound occupational workflows and the pervasive availability of calorie-dense convenience foods."
        },
        {
          phrase: "The underlying physiological mechanism stems from...",
          functionDesc: "Explains metabolic, physical, or behavioral causation in depth.",
          example:
            "The underlying physiological mechanism stems from protracted muscular inactivity, which impairs insulin sensitivity and cardiovascular endurance."
        },
        {
          phrase: "Consequently, public health infrastructures are confronted with...",
          functionDesc: "Bridges individual dietary choices to broader institutional damage.",
          example:
            "Consequently, public health infrastructures are confronted with an unrelenting surge in lifelong illnesses that exhaust state budgets."
        }
      ]
    },
    {
      zone: "Zone 3: Pivoting to the Remedial Solution (Mid-Paragraph Transition)",
      badge: "Problem-to-Solution Bridge",
      placementRule:
        "Place midway through Body 1 and Body 2 to smoothly pivot from the problem (Effect) to its direct countermeasure (Solution) within the paired [Effect + Solution + Example] architecture.",
      items: [
        {
          phrase: "To counter this dilemma, a viable antidote lies in...",
          functionDesc: "Pivots seamlessly from pathology to targeted legislative policy action.",
          example:
            "To counter this dilemma, a viable antidote lies in levying targeted fiscal excise taxes on sugar-sweetened beverages and ultra-processed confectionery."
        },
        {
          phrase: "A strategic countermeasure to this trend is for governments to...",
          functionDesc: "Introduces public infrastructure or municipal design reforms.",
          example:
            "A strategic countermeasure to this trend is for governments to reconfigure municipal layouts, ensuring active transit options are safe and accessible."
        },
        {
          phrase: "This vulnerability can be effectively mitigated through...",
          functionDesc: "Connects institutional settings (schools/workplaces) to proactive wellness mandates.",
          example:
            "This vulnerability can be effectively mitigated through mandatory physical wellness regimens and ergonomic workplace overhauls."
        }
      ]
    },
    {
      zone: "Zone 4: Anchoring Empirical Evidence (Concrete Precedents)",
      badge: "Case Study & Anchor",
      placementRule:
        "Place right before introducing verified real-world precedents, data, or municipal models to substantiate your proposed countermeasure.",
      items: [
        {
          phrase: "This dynamic is epitomized by...",
          functionDesc: "Seamlessly weaves 'epitome/epitomize' to introduce a gold-standard international benchmark.",
          example:
            "This dynamic is epitomized by Copenhagen, where municipal investments in dedicated bicycle superhighways enable over 40% of citizens to commute actively."
        },
        {
          phrase: "A compelling empirical precedent is observed in...",
          functionDesc: "Introduces verified sovereign tax or public health regulations.",
          example:
            "A compelling empirical precedent is observed in Mexico, where a 10% excise tax on sugary drinks precipitated a near 10% decrease in consumption."
        },
        {
          phrase: "Substantiating this approach, real-world data from...",
          functionDesc: "Grounds corporate wellness or municipal interventions in quantifiable outcomes.",
          example:
            "Substantiating this approach, real-world data from Japanese corporations under the 'Metabo Law' shows marked declines in metabolic syndrome."
        }
      ]
    },
    {
      zone: "Zone 5: Synthesizing Conclusions (Closing Restatement)",
      badge: "Conclusion Restatement",
      placementRule:
        "Place in the concluding paragraph to synthesize both core dimensions (effects and solutions) into a balanced, forward-looking assessment without introducing new claims.",
      items: [
        {
          phrase: "In synthesis, although escalating body mass exacts a heavy toll on...,",
          functionDesc: "Acknowledges the severity of the crisis before reaffirming the efficacy of targeted solutions.",
          example:
            "In synthesis, although escalating body mass exacts a heavy toll on healthcare solvency, enacting decisive fiscal disincentives offers a robust defense."
        },
        {
          phrase: "Ultimately, while lifestyle ailments present formidable economic hurdles,...",
          functionDesc: "Brings long-term economic stability and preventative policy together harmoniously.",
          example:
            "Ultimately, while lifestyle ailments present formidable economic hurdles, embedding active transit into urban centers ensures a healthier populace."
        }
      ]
    }
  ],

  /*
   * ================================================================
   * FLUID BAND 9 LEXICAL PRECISION ("SUGAR DISSOLVED IN WATER")
   * ================================================================
   * Sophisticated vocabulary integrated seamlessly into sentence logic
   * without sounding robotic, mechanical, or artificially forced.
   */
  fluidVocab: [
    {
      word: "myopic",
      pos: "adjective",
      meaning: "Lacking long-term foresight, vision, or discernment; short-sighted.",
      naturalCollocation: "a myopic strategy / myopic focus / myopic fiscal policy",
      organicExample:
        "Relying purely on hospital-based curative treatments is a myopic strategy; sustainable solvency requires proactive lifestyle interventions.",
      mechanicalPitfall:
        "❌ Clunky / Robotic: 'People who eat fast food have a myopic body.' (Distorted register and unnatural collocation).",
      examinerInsight:
        "Examiners reward 'myopic' when qualifying policy decisions or institutional perspectives rather than individuals' physical appearance."
    },
    {
      word: "epitome / epitomize",
      pos: "noun / verb",
      meaning: "The quintessential embodiment, perfect benchmark, or representative model of a principle.",
      naturalCollocation: "the epitome of active municipal design / epitomizes effective fiscal policy",
      organicExample:
        "Copenhagen's network of protected bicycle superhighways represents the epitome of active municipal design, proving that urban architecture directly dictates physical fitness.",
      mechanicalPitfall:
        "❌ Clunky / Robotic: 'Obesity is the epitome of bad health.' (Vague, simplistic, and melodramatic).",
      examinerInsight:
        "Band 9 writers use 'epitome' to elevate case studies into representative international paradigms."
    },
    {
      word: "pervasive",
      pos: "adjective",
      meaning: "Existing or spreading widely throughout every level of an environment or culture.",
      naturalCollocation: "pervasive availability / pervasive sedentary culture / pervasive marketing",
      organicExample:
        "The pervasive availability of inexpensive, ultra-processed convenience foods has normalized excessive caloric intake across all age brackets.",
      mechanicalPitfall:
        "❌ Clunky / Robotic: 'Junk food is pervasive everywhere around the streets.' (Tautological redundancy).",
      examinerInsight:
        "Shifts blame from individual weak willpower to structural environmental determinants of health."
    },
    {
      word: "exacerbate",
      pos: "verb",
      meaning: "To aggravate, intensify, or worsen an already acute crisis or medical condition.",
      naturalCollocation: "exacerbate cardiovascular risks / exacerbate public health strain",
      organicExample:
        "Protracted desk-bound shifts and motorized commuting exacerbate cardiovascular risks by eliminating spontaneous daily movement.",
      mechanicalPitfall:
        "❌ Clunky / Robotic: 'People exacerbate their weight by eating chips.' (Awkward verb-object pairing).",
      examinerInsight:
        "Provides exact causal tension between modern convenience and biological deterioration."
    },
    {
      word: "catalyze",
      pos: "verb",
      meaning: "To spark, initiate, or accelerate a profound transformation or institutional shift.",
      naturalCollocation: "catalyze a nationwide transition / catalyze preventative public health",
      organicExample:
        "Targeted fiscal levies on sugary beverages can catalyze a broader societal transition toward wholesome, home-cooked diets.",
      mechanicalPitfall:
        "❌ Clunky / Robotic: 'Gym classes catalyze people to be thin.' (Forced, unidiomatic usage).",
      examinerInsight:
        "A vibrant academic synonym for 'bring about' or 'cause' that implies positive momentum."
    },
    {
      word: "mitigate",
      pos: "verb",
      meaning: "To lessen the severity, gravity, or painful consequences of a systemic crisis.",
      naturalCollocation: "mitigate healthcare expenditures / mitigate obesity rates",
      organicExample:
        "Expanding dedicated cycling infrastructure can substantially mitigate urban obesity rates by embedding exercise into daily commutes.",
      mechanicalPitfall:
        "❌ Clunky / Robotic: 'Doctors mitigate patient weights with pills.' (Inaccurate lexical collocation).",
      examinerInsight:
        "Standard high-register verb for solution paragraphs assessing policy impact."
    },
    {
      word: "paradigm",
      pos: "noun",
      meaning: "A fundamental framework, institutional model, or philosophical approach.",
      naturalCollocation: "preventative public health paradigm / paradigm shift in urban transit",
      organicExample:
        "National healthcare authorities must pivot from reactive clinical treatment toward a preventative public health paradigm.",
      mechanicalPitfall:
        "❌ Clunky / Robotic: 'Citizens should live in a healthy paradigm.' (Nonsensical abstraction).",
      examinerInsight:
        "Demonstrates sophisticated awareness of overarching structural and philosophical systems."
    }
  ]
};