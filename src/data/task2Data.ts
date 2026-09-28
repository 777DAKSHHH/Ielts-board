import type {
  BrainstormCard,
  ConsequenceItem,
  EvaluationArgument,
  FacultyAngle,
  Task2Data,
  VocabItem
} from "../types";

export type {
  BrainstormCard,
  ConsequenceItem,
  EvaluationArgument,
  FacultyAngle,
  Task2Data,
  VocabItem
};

export const TASK2_DATA: Task2Data = {
  id: "taxation-and-public-services-task2",

  taskType: "Discussion Essay: Discuss Both Views + Opinion",

  title: "Income Taxation vs. Essential Public Services",

  questionText:
    "Some people feel that the government should take a large proportion of people’s salaries to pay for necessary public services such as roads and schools. Others feel that high taxes are a bad thing.\n\nDiscuss both the views and give your opinion.",

  audioUrl: "materials/Taxation_and_Public_Services_Briefing.m4a",

  timingSeconds: 180,

  sampleIntro:
    "While some argue that governments should claim a large share of citizens’ earnings to fund essential services like roads and schools, others believe that high taxes are harmful. In my opinion, high taxation is necessary to ensure equal access to vital infrastructure, provided that tax brackets remain progressive.",

  sampleConclusion:
    "In conclusion, while excessively high taxes risk eroding work motivation and shrinking household purchasing power, the collective necessity of modern roads, robust healthcare, and free universal education far outweighs these concerns. I believe that governments must retain a progressive taxation model—ensuring the affluent contribute proportionately while shielding lower earners—provided that public expenditures are managed with uncompromising fiscal transparency.",

  vocabList: [
    {
      word: "progressive taxation",
      meaning: "A fiscal system wherein tax rates increase proportionately with an individual's income level.",
      example:
        "A system of progressive taxation ensures that wealthier individuals contribute a fairer share toward civic infrastructure."
    },
    {
      word: "essential public amenities",
      meaning: "Fundamental services and facilities provided by the state for the welfare of all citizens.",
      example:
        "Without state intervention, essential public amenities such as motorways and primary schools would suffer chronic underfunding."
    },
    {
      word: "stifle entrepreneurial initiative",
      meaning: "Discourage individuals from innovating, investing, or founding commercial enterprises.",
      example:
        "Exorbitant corporate and personal income taxes can stifle entrepreneurial initiative and drive startups offshore."
    },
    {
      word: "wealth redistribution",
      meaning: "The transfer of income from richer citizens to public services and lower-income groups.",
      example:
        "Income taxation acts as a crucial instrument for wealth redistribution, narrowing the divide between rich and poor."
    },
    {
      word: "fiscal accountability",
      meaning: "The transparent, responsible stewardship of public tax revenue by government officials.",
      example:
        "Public willingness to pay substantial taxes depends directly on the government demonstrating strict fiscal accountability."
    },
    {
      word: "erode purchasing power",
      meaning: "Diminish the real volume of goods and services that households can afford with their earnings.",
      example:
        "Heavy tax deductions on middle-class salaries can severely erode purchasing power during times of inflation."
    },
    {
      word: "disincentivise productivity",
      meaning: "Reduce workers' willingness to perform overtime, seek promotions, or work harder.",
      example:
        "When marginal tax rates approach fifty percent, they often disincentivise productivity among ambitious professionals."
    },
    {
      word: "civic social contract",
      meaning: "The unwritten mutual pact between citizens who contribute revenue and the state that provides protection and services.",
      example:
        "Paying taxes to maintain common roads and schools is fundamental to upholding the modern civic social contract."
    },
    {
      word: "subsidised education and healthcare",
      meaning: "Vital social provisions funded wholly or partially by public revenue rather than commercial market rates.",
      example:
        "Heavily subsidised education and healthcare ensure that underprivileged youth have equal opportunities to excel."
    },
    {
      word: "bureaucratic inefficiency",
      meaning: "Wasteful, convoluted, or incompetent administration of public resources by government agencies.",
      example:
        "Critics contend that high tax yields are squandered through bureaucratic inefficiency rather than invested in roads."
    }
  ],

  vocabHunt: [
    "progressive taxation",
    "essential public amenities",
    "stifle entrepreneurial initiative",
    "wealth redistribution",
    "fiscal accountability",
    "erode purchasing power",
    "disincentivise productivity",
    "bureaucratic inefficiency"
  ],

  consequences: [
    {
      type: "positive",
      title: "Foundational Infrastructure & Transit",
      desc:
        "Massive capital projects—such as expressway networks, bridges, and public transit—require continuous public funding that private corporations cannot equitably deliver.",
      example:
        "High tax revenues enable the construction of nationwide transport links that lower logistics costs and stimulate commercial trade."
    },
    {
      type: "positive",
      title: "Universal Access to Quality Education",
      desc:
        "Publicly funded schools guarantee that every child receives quality schooling regardless of household income, fostering social mobility and national productivity.",
      example:
        "State-financed schools and vocational colleges equip youth from modest backgrounds with market-ready qualifications."
    },
    {
      type: "positive",
      title: "Social Cohesion & Wealth Redistribution",
      desc:
        "Using income tax revenues to fund universal public services prevents extreme wealth disparity, establishing an essential safety net for vulnerable citizens.",
      example:
        "Tax-funded healthcare subsidies and welfare programmes safeguard low-income families during macroeconomic downturns."
    },
    {
      type: "negative",
      title: "Risk of State Monopoly on Services",
      desc:
        "When government bodies monopolise the provision of schools or roads, the absence of market competition can sometimes slow down modernization.",
      example:
        "Public school systems may lag behind private academies in adopting cutting-edge educational technology."
    },
    {
      type: "negative",
      title: "Tax Avoidance & Offshore Loopholes",
      desc:
        "When income tax brackets are perceived as excessively high, affluent individuals and corporations actively exploit offshore tax havens.",
      example:
        "High earners may shelter capital in overseas accounts, shrinking the actual domestic tax revenue collected."
    }
  ],

  /*
   * BALANCED DISCUSSION EVALUATION BANK
   */
  evaluationArguments: [
    {
      type: "argument",
      title: "Erosion of Work Incentives",
      reason:
        "Taking a large proportion of earned salaries diminishes the direct financial reward for extra effort, skill acquisition, and longer hours.",
      development:
        "When workers realise that a major share of their overtime or promotion pay is absorbed by taxes, they often choose to work less or decline added responsibilities.",
      example:
        "Surgeons, engineers, and entrepreneurs may cap their billable hours or decline demanding leadership promotions to avoid higher tax brackets."
    },
    {
      type: "argument",
      title: "Reduction in Household Purchasing Power",
      reason:
        "High taxation directly deprives families of capital they could otherwise allocate towards personal savings, mortgages, and family investments.",
      development:
        "In periods of rising inflation or escalating living costs, heavy salary deductions can push middle-income households into severe financial strain.",
      example:
        "Working parents may struggle to afford basic private childcare or home ownership because a large portion of their paycheck is withheld at source."
    },
    {
      type: "argument",
      title: "Brain Drain and Capital Flight",
      reason:
        "Highly skilled professionals and innovative entrepreneurs have international mobility and will migrate to countries with lighter tax burdens.",
      development:
        "When a nation imposes punitive tax rates, it risks losing its most productive minds and innovative corporations to tax-friendly jurisdictions.",
      example:
        "Technology founders and medical specialists relocating from high-tax European nations to competitive hubs like Singapore or Dubai."
    },
    {
      type: "argument",
      title: "Bureaucratic Inefficiency & Squandered Revenue",
      reason:
        "Governments are rarely as cost-effective or accountable as private managers in deploying capital.",
      development:
        "Without the discipline of market competition, public agencies frequently suffer from cost overruns, administrative bloat, and corrupt tender processes.",
      example:
        "Civic road-resurfacing projects that take years to complete and cost twice the original budget due to bureaucratic mismanagement."
    },
    {
      type: "counterpoint",
      title: "Market Failure of Pure Privatisation",
      reason:
        "Leaving roads and schools purely to private profit motives would deny access to the poor and leave unprofitable rural regions abandoned.",
      development:
        "Private road operators would erect toll booths everywhere, and private schools would price out ordinary families, destroying equal opportunity.",
      example:
        "In countries without universal state-funded schooling, illiteracy rates remain high among low-income and rural populations."
    },
    {
      type: "counterpoint",
      title: "The Nordic High-Trust Model",
      reason:
        "High taxation is proven to generate exceptional quality of life when paired with transparency, equality, and high social trust.",
      development:
        "Nations with higher tax rates frequently top global indexes for happiness, health, and social stability because citizens receive outstanding public value in return.",
      example:
        "Scandinavian nations such as Denmark and Norway combine substantial income taxes with world-leading infrastructure and virtually free education."
    }
  ],

  facultyAngles: [
    {
      title: "The Nordic Model vs. Free-Market Capitalism",
      development:
        "Examine why high taxes work brilliantly in high-trust Scandinavian societies (Denmark, Norway) with transparent institutions, but often fail or breed resentment in countries plagued by bureaucratic corruption."
    },
    {
      title: "The Laffer Curve & Optimal Revenue",
      development:
        "Discuss the economic principle that taxing beyond an optimal rate actually reduces total tax revenue by encouraging tax avoidance, capital flight, and diminished workforce participation."
    },
    {
      title: "Hypothecated (Earmarked) Taxation",
      development:
        "Consider whether citizens would be more willing to accept high deductions if governments legally ring-fenced funds specifically for visible local schools and road maintenance rather than general treasury pools."
    },
    {
      title: "Progressive Brackets vs. Flat Tax Rates",
      development:
        "Analyze how tiered tax systems protect low and middle earners while ensuring high-net-worth individuals shoulder the primary burden of national public service financing."
    },
    {
      title: "Intergenerational Equity & Future Infrastructure",
      development:
        "Explore the perspective that today's high taxes fund long-term infrastructure (green energy grids, high-speed rail, modern digital schools) that will benefit future generations decades later."
    },
    {
      title: "Direct Income Tax vs. Indirect Consumption Tax (VAT)",
      development:
        "Debate whether governments should collect revenue from consumption (luxury taxes, sales taxes) rather than penalizing productive labor and income generation directly."
    }
  ],

  powerExpressions: [
    {
      expression: "progressive taxation",
      meaning: "system where tax rates rise with income",
      example:
        "A system of progressive taxation ensures that wealthier individuals contribute a fairer share toward civic infrastructure."
    },
    {
      expression: "essential public amenities",
      meaning: "fundamental state-provided services",
      example:
        "Without state intervention, essential public amenities such as motorways and primary schools would suffer chronic underfunding."
    },
    {
      expression: "stifle entrepreneurial initiative",
      meaning: "discourage enterprise, innovation and investment",
      example:
        "Exorbitant corporate and personal income taxes can stifle entrepreneurial initiative and drive startups offshore."
    },
    {
      expression: "wealth redistribution",
      meaning: "transfer of wealth to balance inequality",
      example:
        "Income taxation acts as a crucial instrument for wealth redistribution, narrowing the divide between rich and poor."
    },
    {
      expression: "fiscal accountability",
      meaning: "transparent and responsible public fund management",
      example:
        "Public willingness to pay substantial taxes depends directly on the government demonstrating strict fiscal accountability."
    },
    {
      expression: "erode purchasing power",
      meaning: "reduce real volume of goods income can buy",
      example:
        "Heavy tax deductions on middle-class salaries can severely erode purchasing power during times of inflation."
    },
    {
      expression: "disincentivise productivity",
      meaning: "discourage extra work, overtime and ambition",
      example:
        "When marginal tax rates approach fifty percent, they often disincentivise productivity among ambitious professionals."
    },
    {
      expression: "civic social contract",
      meaning: "mutual agreement between citizens and the state",
      example:
        "Paying taxes to maintain common roads and schools is fundamental to upholding the modern civic social contract."
    },
    {
      expression: "subsidised education and healthcare",
      meaning: "services funded through state revenue",
      example:
        "Heavily subsidised education and healthcare ensure that underprivileged youth have equal opportunities to excel."
    },
    {
      expression: "bureaucratic inefficiency",
      meaning: "wasteful or corrupt administrative procedures",
      example:
        "Critics contend that high tax yields are squandered through bureaucratic inefficiency rather than invested in roads."
    }
  ],

  /*
   * ================================================================
   * GUIDED BRAINSTORM CHALLENGES
   * ================================================================
   *
   * The student sees:
   *
   * SIDE 1: Question
   * SIDE 2: Thinking Lens
   * SIDE 3: One Possible Developable Idea
   */
  brainstormCards: [
    {
      question:
        "What is the foundational clash between the two viewpoints in this prompt?",
      thinkingLens:
        "Frame the topic as a philosophical tension between collective welfare (public goods) and individual financial liberty (property & rewards for effort).",
      selfCheck:
        "State the conflict in one balanced, neutral sentence without taking sides yet.",
      idea:
        "The debate centers on whether citizens should sacrifice a large portion of personal earnings to secure universal public goods and social equity, or whether excessive taxation punishes individual diligence and harms economic freedom."
    },
    {
      question:
        "Why do proponents believe roads, schools, and hospitals require substantial government funding rather than private markets?",
      thinkingLens:
        "Consider 'public goods' in economics—vital infrastructure that must remain accessible to everyone regardless of their wealth.",
      selfCheck:
        "Explain what happens if roads and schools are left entirely to profit-driven corporations.",
      idea:
        "Major infrastructure like highways and universal schools requires massive capital and cannot be equitably operated for profit; if privatised, remote regions and low-income families would be excluded from essential services."
    },
    {
      question:
        "How does state-funded education and transit stimulate long-term economic growth?",
      thinkingLens:
        "Trace the chain reaction: tax revenue → modern transit + educated workforce → increased productivity and business growth.",
      selfCheck:
        "Connect the initial deduction from workers' paychecks to a tangible national economic benefit.",
      idea:
        "Reliable roads reduce transportation costs for commercial enterprises, while free public education produces an educated, skilled workforce that drives national innovation and lifts citizens out of poverty."
    },
    {
      question:
        "What is the psychological argument that high income taxes are a 'bad thing'?",
      thinkingLens:
        "Focus on human motivation, incentives to work hard, and the perception of fairness.",
      selfCheck:
        "Avoid simply saying 'people dislike paying taxes'; explain the behavioural consequence on workers.",
      idea:
        "When governments deduct a huge portion of incremental salary, ambitious professionals feel their diligence is penalised, which can disincentivise productivity, reduce willingness to do overtime, and breed resentment."
    },
    {
      question:
        "How does taking a large proportion of salaries affect household living standards and consumer spending?",
      thinkingLens:
        "Look at disposable income, cost-of-living pressures, and wider retail commerce.",
      selfCheck:
        "Trace what happens to the broader economy when families have significantly less money in their pockets.",
      idea:
        "Heavy income tax deductions shrink household disposable income, making it harder for families to save or cope with inflation, which in turn dampens consumer demand across local shops and service industries."
    },
    {
      question:
        "Why do taxpayers often grow cynical or resentful about paying high taxes?",
      thinkingLens:
        "Distinguish the theoretical principle of taxation from the daily reality of public administration.",
      selfCheck:
        "Identify the specific grievance citizens have with how public funds are managed.",
      idea:
        "Taxpayers frequently resent high deductions when bureaucratic inefficiency, waste, or corruption results in potholed roads, overcrowded hospitals, and underperforming schools despite astronomical state budgets."
    },
    {
      question:
        "Can high income taxes trigger 'brain drain' or 'capital flight'? How?",
      thinkingLens:
        "Consider global mobility: highly qualified doctors, researchers, tech specialists, and investors can move internationally.",
      selfCheck:
        "Explain the cross-border consequence of uncompetitive national taxation.",
      idea:
        "Punitive personal income taxes can prompt top surgeons, engineers, and entrepreneurs to emigrate to lower-tax nations, depriving the domestic economy of vital skills, business investments, and future tax revenue."
    },
    {
      question:
        "What real-world evidence shows that high taxation can lead to an exceptional standard of living?",
      thinkingLens:
        "Draw upon comparative international examples such as the Nordic/Scandinavian model.",
      selfCheck:
        "Show the link between high tax rates, social trust, and public service quality.",
      idea:
        "Countries like Denmark and Sweden levy substantial income taxes, yet consistently rank among the world's happiest and most prosperous nations because their revenues are transparently reinvested into world-class healthcare, childcare, and infrastructure."
    },
    {
      question:
        "How can an IELTS candidate synthesize these opposing views to form a nuanced, Band 9 opinion?",
      thinkingLens:
        "Avoid an extreme 'taxes should be abolished' or 'the state should take 70% of all salaries' stance. Build a balanced, realistic policy compromise.",
      selfCheck:
        "Ensure your thesis explicitly addresses both prompt views while providing a clear resolution.",
      idea:
        "A compelling thesis argues that while excessive flat taxation is economically destructive, a progressive tax system—paired with rigorous fiscal transparency and targeted exemptions—is essential to uphold civilised society without stifling enterprise."
    },
    {
      question:
        "How should Body Paragraph 1 and Body Paragraph 2 be structured in this Discussion Essay?",
      thinkingLens:
        "Dedicate one body paragraph to View 1 (case for public services) and one to View 2 (case against high taxes), integrating your balanced evaluation logically.",
      selfCheck:
        "Make sure neither perspective is treated superficially; each must have a topic sentence, explanation, and concrete evidence.",
      idea:
        "Body 1 should explore why modern public goods demand large collective revenue, Body 2 should examine the economic hazards and individual burdens of excessive taxation, paving the way for a reasoned conclusion supporting progressive taxation."
    }
  ],

  connectorsTier: {
    sTier: [
      "It is widely contended that",
      "Conversely, critics argue with equal justification",
      "Notwithstanding these legitimate concerns",
      "A compelling case can be made that"
    ],

    aTier: [
      "Proponents maintain that",
      "In sharp contrast",
      "Consequently",
      "On the other hand"
    ],

    bTier: [
      "Also",
      "Furthermore",
      "In conclusion"
    ]
  }
};