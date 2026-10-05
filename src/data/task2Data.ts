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
  id: "employee-bonuses-and-motivation-task2",

  taskType: "Two-Part / Direct Question Essay",

  title: "Rewarding Staff with Financial Bonuses vs. Superior Motivational Strategies",

  questionText:
    "Some employers reward members of staff for their exceptional contribution to the company by giving them extra money.\n\n- To what extent is this style of management effective?\n- What are the better ways of encouraging employees to work hard?",

  audioUrl: "materials/staff-bonus-motivation-briefing.m4a",

  timingSeconds: 180,

  sampleIntro:
    "It is increasingly common for enterprises to incentivize high-performing personnel by providing supplementary financial bonuses. In my view, while cash incentives are moderately effective in driving immediate, quantifiable commercial targets, their long-term efficacy is constrained; sustainable employee dedication is far better cultivated through professional autonomy, structured career progression, and sincere organizational recognition.",

  sampleConclusion:
    "In conclusion, financial rewards remain a pragmatic tool for boosting short-term output, yet their effectiveness is limited by diminishing psychological returns and potential workplace friction. Employers seeking profound and lasting dedication should instead prioritize non-monetary incentives, specifically empowering staff with operational autonomy, transparent promotion ladders, and meaningful social recognition.",

  vocabList: [
    {
      word: "monetary remuneration",
      meaning:
        "Direct financial compensation or cash bonuses distributed in exchange for labor or extraordinary achievements.",
      example:
        "Relying purely on monetary remuneration fails to address employees' deeper psychological desires for purpose and creative autonomy."
    },
    {
      word: "extrinsic reward systems",
      meaning:
        "Incentive structures that rely on external tangible payouts, such as cash bonuses or prizes, to drive performance.",
      example:
        "While extrinsic reward systems can boost quarterly sales metrics, they rarely foster genuine, enduring innovation."
    },
    {
      word: "intrinsic motivation",
      meaning:
        "An internal psychological drive to perform an activity for its inherent satisfaction, personal fulfillment, or professional mastery.",
      example:
        "Cultivating intrinsic motivation produces higher workforce resilience and problem-solving tenacity than transient cash stipends."
    },
    {
      word: "performance-related bonuses",
      meaning:
        "Additional variable cash disbursements allocated to staff who meet or exceed predetermined corporate quotas or milestones.",
      example:
        "High-pressure investment firms frequently utilize performance-related bonuses to drive individual productivity."
    },
    {
      word: "professional autonomy",
      meaning:
        "The independence and authority granted to employees to make decisions, direct their own projects, and control their workflow.",
      example:
        "Providing talented software engineers with greater professional autonomy stimulates breakthrough innovation far more effectively than annual cash perks."
    },
    {
      word: "meritocratic career progression",
      meaning:
        "Transparent advancement frameworks where promotions and leadership roles are awarded strictly on proven competence and skill.",
      example:
        "Ambitious young professionals prioritize organizations that guarantee clear, meritocratic career progression over those offering one-off cash bonuses."
    },
    {
      word: "the overjustification effect",
      meaning:
        "A psychological phenomenon whereby introducing external financial rewards diminishes a person's pre-existing, natural passion for a task.",
      example:
        "Organizational psychologists caution that the overjustification effect can transform genuine creative passion into transactional compliance."
    },
    {
      word: "cultivate organizational loyalty",
      meaning:
        "Build deep employee commitment, institutional pride, and multi-year retention toward the company and its broader mission.",
      example:
        "Empathetic leadership and structured mentorship do far more to cultivate organizational loyalty than occasional financial payouts."
    },
    {
      word: "foster a collaborative culture",
      meaning:
        "Establish a cooperative workplace climate where knowledge sharing, teamwork, and mutual support replace toxic rivalry.",
      example:
        "Individual monetary bonuses often spark internal friction, whereas shared recognition helps foster a collaborative culture."
    },
    {
      word: "continuing professional development",
      meaning:
        "Systematic institutional investment in training, skill workshops, executive coaching, and academic credentials for employees.",
      example:
        "Funding continuing professional development equips workers with future-proof capabilities while proving institutional faith in their potential."
    }
  ],

  vocabHunt: [
    "monetary remuneration",
    "extrinsic reward systems",
    "intrinsic motivation",
    "performance-related bonuses",
    "professional autonomy",
    "meritocratic career progression",
    "the overjustification effect",
    "cultivate organizational loyalty"
  ],

  /*
   * ================================================================
   * STEP 6: QUESTION 1 — TO WHAT EXTENT IS THIS EFFECTIVE?
   * ================================================================
   * Levelled points evaluating monetary bonuses:
   * Level 1: Immediate Output & Metrics (High Impact Positive)
   * Level 1: Competitive Talent Acquisition (High Impact Positive)
   * Level 2: Tangible Sacrifice Validation (Strategic Positive)
   * Level 3: Diminishing Marginal Returns (Psychological Limit)
   * Plus 4 Nuances & Practical Caveats (Overjustification, Rivalry, Metric Gaming, Burnout)
   */
  consequences: [
    {
      type: "positive",
      level: "Level 1: High Impact (Target Metrics)",
      simpleTakeaway:
        "Cash bonuses generate immediate, measurable spikes in repetitive and quantifiable performance targets.",
      collocation: "quantifiable performance metrics",
      title: "Immediate Stimulation of Target-Driven Productivity",
      desc:
        "Monetary bonuses exert a powerful, immediate psychological stimulus on employees assigned to quantifiable, metrics-driven roles such as corporate sales and routine operations. When financial compensation is visibly tied to clear quotas, staff expend extra discretionary effort to secure tangible rewards.",
      example:
        "Corporate sales representatives offered commission bonuses routinely accelerate contract closing rates before fiscal quarter-ends to maximize their take-home earnings."
    },
    {
      type: "positive",
      level: "Level 1: High Impact (Recruitment)",
      simpleTakeaway:
        "Lucrative bonus packages attract and briefly secure high-performing external specialists in competitive markets.",
      collocation: "competitive talent acquisition",
      title: "Competitive Talent Acquisition & External Recruitment",
      desc:
        "In highly competitive industries such as investment banking and software engineering, generous performance bonuses serve as a critical differentiator that convinces elite professionals to join a firm and meet aggressive operational benchmarks.",
      example:
        "Tech startups frequently leverage signing bonuses and lucrative milestone payouts to lure top-tier artificial intelligence researchers from established corporate competitors."
    },
    {
      type: "positive",
      level: "Level 2: Strategic Depth (Fair Restitution)",
      simpleTakeaway:
        "Bonuses provide immediate, tangible validation for extraordinary personal sacrifices during critical company emergencies.",
      collocation: "tangible financial restitution",
      title: "Tangible Restitution for Extraordinary Overtime & Strain",
      desc:
        "When staff undertake weeks of arduous overtime to rescue failing projects or execute urgent product launches, extra money functions as fair restitution. Failing to compensate extra labor financially breeds deep resentment and demoralization.",
      example:
        "Engineering teams that worked around the clock to fix critical system outages viewed special crisis bonuses as rightful validation of their physical and mental strain."
    },
    {
      type: "positive",
      level: "Level 3: Psychological Limit (Habituation)",
      simpleTakeaway:
        "Cash bonuses suffer from diminishing returns because workers quickly normalize higher pay as an expected entitlement.",
      collocation: "hedonic habituation",
      title: "Psychological Habituation & Diminishing Marginal Returns",
      desc:
        "The motivational potency of cash incentives erodes rapidly over time due to hedonic treadmill effects. Once a monetary reward is received, it becomes the baseline expectation rather than a fresh motivator, requiring ever-larger financial disbursements to generate equivalent effort.",
      example:
        "Wall Street compensation studies reveal that annual cash bonuses lose their motivational impact within three months as bankers adjust their lifestyle spending to the higher income."
    },
    {
      type: "negative",
      level: "Nuance 1: The Overjustification Trap",
      simpleTakeaway:
        "Paying cash for complex problem-solving reduces natural curiosity and turns enjoyable challenges into transactional chores.",
      collocation: "the overjustification effect",
      title: "The Overjustification Trap: Eradicating Intrinsic Passion",
      desc:
        "When management attaches financial payouts to creative problem-solving or artistic innovation, staff begin to view their work through an extrinsic lens, paradoxically stifling deep curiosity and willingness to take bold intellectual risks.",
      example:
        "Research in behavioral economics demonstrates that oversized monetary incentives actually degrade performance on complex cognitive and creative tasks."
    },
    {
      type: "negative",
      level: "Nuance 2: Toxic Workplace Rivalry",
      simpleTakeaway:
        "Individual bonuses pit colleagues against one another, destroying teamwork and encouraging information hoarding.",
      collocation: "destructive internal friction",
      title: "Destructive Workplace Rivalry & Knowledge Hoarding",
      desc:
        "Rewarding individual high-performers with exclusive cash bonuses breeds jealousy and undermines peer cooperation. Colleagues withhold vital client data or sabotage shared workflows to protect their individual bonus rankings.",
      example:
        "Retail banking scandals revealed that aggressive individual bonus targets motivated staff to undermine team members and engage in cutthroat internal politics."
    },
    {
      type: "negative",
      level: "Nuance 3: Metric Gaming & Shortcuts",
      simpleTakeaway:
        "Aggressive financial incentives incentivize employees to exploit loopholes, sacrifice product quality, or fudge data.",
      collocation: "perverse incentive structures",
      title: "Perverse Incentives: Prioritizing Short-Term Numbers over Quality",
      desc:
        "When extra money is strictly linked to numerical targets, workers inevitably game the system—slashing long-term safety, neglecting customer service, or falsifying numbers to hit the payout threshold.",
      example:
        "The Wells Fargo retail banking controversy occurred because employees faced extreme cash-linked quotas, leading them to open millions of unauthorized accounts without customer consent."
    },
    {
      type: "negative",
      level: "Nuance 4: Chronic Burnout & Churn",
      simpleTakeaway:
        "Chasing financial targets causes severe chronic stress, leading to high staff turnover once workers burn out.",
      collocation: "occupational exhaustion and attrition",
      title: "Chronic Occupational Stress & Accelerated Workforce Churn",
      desc:
        "A workplace culture reliant exclusively on monetary incentives treats human labor as a transactional commodity. Employees endure unsustainable workloads to capture bonuses, eventually suffering severe burnout and leaving the organization as soon as their health deteriorates.",
      example:
        "Consulting firms that emphasize high bonus culture often experience 25% annual staff turnover as young associates exit due to sleep deprivation and emotional exhaustion."
    }
  ],

  /*
   * ================================================================
   * STEP 7: QUESTION 2 — WHAT ARE THE BETTER WAYS TO MOTIVATE?
   * ================================================================
   * Levelled points for alternative, superior motivators:
   * Level 1: Career Advancement & Promotion Pathways (High Impact)
   * Level 1: Autonomy, Ownership & Flexible Working (High Impact)
   * Level 2: Authentic Social Recognition & Status (Strategic Depth)
   * Level 2: Psychologically Safe Corporate Culture (Strategic Depth)
   * Plus 4 Evaluative Strategic Implementations (Upskilling, Purpose, Mentorship, Hybrid Baseline)
   */
  evaluationArguments: [
    {
      type: "argument",
      level: "Level 1: High Impact (Career Advancement)",
      simpleTakeaway:
        "Clear promotion tracks and skill development give employees a durable, long-term reason to commit to the company.",
      collocation: "meritocratic promotion ladders",
      title: "Structured Career Progression & Transparent Promotion Pathways",
      reason:
        "Employees invest far greater long-term energy when they see a predictable, transparent path to career advancement and leadership within the organization.",
      development:
        "Unlike a one-off cash bonus that is quickly spent and forgotten, the prospect of ascending to higher managerial ranks, expanding professional authority, and building long-term career capital provides continuous, multi-year motivation. When workers know that hard work directly translates into higher organizational standing, their dedication remains steadfast through daily challenges.",
      example:
        "Multinational corporations such as Unilever and Google achieve superior retention by mapping 5-year leadership development tracks that guarantee executive mentorship for dedicated staff."
    },
    {
      type: "argument",
      level: "Level 1: High Impact (Autonomy & Trust)",
      simpleTakeaway:
        "Granting employees ownership over their schedules and decisions unleashes genuine personal responsibility and creative pride.",
      collocation: "operational autonomy and flexibility",
      title: "Professional Autonomy, Project Ownership & Flexible Working",
      reason:
        "Empowering personnel with decision-making independence and flexible working conditions inspires profound personal pride in work quality.",
      development:
        "Micromanagement and rigid surveillance crush motivation. When leaders entrust staff to manage their own deadlines, explore novel methodologies, and choose hybrid working arrangements, employees develop a deep sense of ownership over the end product. They work diligently not because a supervisor is watching or a bonus is dangling, but because their professional self-esteem is invested in the outcome.",
      example:
        "Tech firms like Atlassian that allow engineers 'ShipIt Days'—24 hours of total autonomy to develop any company project—generate groundbreaking features while driving record employee engagement."
    },
    {
      type: "argument",
      level: "Level 2: Strategic Depth (Authentic Recognition)",
      simpleTakeaway:
        "Sincere public and private praise fulfills the human psychological need for validation and belonging far better than money.",
      collocation: "meaningful peer-to-peer recognition",
      title: "Authentic Social Recognition & Public Validation of Contribution",
      reason:
        "Human beings possess an innate psychological hunger for respect, appreciation, and status from their leaders and peers.",
      development:
        "Psychological studies consistently show that sincere verbal recognition from senior management, executive shout-outs during company summits, and peer-nominated excellence awards provide a deeper dopamine release and greater emotional satisfaction than anonymous cash transfers. When employees feel genuinely seen and valued as individuals, their organizational commitment becomes personal rather than transactional.",
      example:
        "Healthcare and non-profit organizations where leaders regularly write personalized handwritten appreciation notes report significantly higher staff morale and lower turnover than commercial firms with cash bonuses."
    },
    {
      type: "argument",
      level: "Level 2: Strategic Depth (Supportive Culture)",
      simpleTakeaway:
        "A healthy work-life balance, mental health support, and psychological safety inspire sustainable high performance without burnout.",
      collocation: "psychologically safe workplace culture",
      title: "Psychologically Safe Corporate Culture & Comprehensive Well-Being",
      reason:
        "A workplace characterized by psychological safety, manageable workloads, and holistic well-being prevents burnout and sustains enduring excellence.",
      development:
        "Employees work hardest in environments where they do not fear reprisal for asking questions, experimenting, or admitting mistakes. Providing generous paid leave, mental health resources, wellness allowances, and manageable work hours ensures staff remain physically energized and cognitively sharp, allowing them to perform at their peak year after year.",
      example:
        "Scandinavian enterprises consistently rank among the most productive global workforces despite shorter working weeks, precisely because comprehensive well-being policies prevent chronic fatigue."
    },
    {
      type: "counterpoint",
      level: "Evaluation 1: Continuous Upskilling",
      simpleTakeaway:
        "Sponsoring higher education, certifications, and industry conferences builds mutual loyalty and high skill capability.",
      collocation: "sponsored continuous upskilling",
      title: "Investment in Continuing Education & Sponsored Upskilling",
      reason:
        "Financing advanced degrees, industry certifications, and executive workshops proves that the company values the employee's future.",
      development:
        "When organizations sponsor MBAs, technical certifications, or international conference attendance, workers reciprocate with profound loyalty and applied expertise. This creates a virtuous cycle where the company gains cutting-edge capabilities while the employee feels continuously stimulated.",
      example:
        "Leading biotech companies that fully reimburse postgraduate tuition achieve significantly higher tenure rates than competitors relying on annual cash allowances."
    },
    {
      type: "counterpoint",
      level: "Evaluation 2: Purpose & Mission",
      simpleTakeaway:
        "Connecting daily duties to a meaningful corporate purpose inspires deeper effort than chasing corporate profit alone.",
      collocation: "purpose-driven organizational mission",
      title: "Alignment with a Compelling Organizational Mission & Social Impact",
      reason:
        "Staff exert extraordinary effort when they understand how their daily tasks contribute to societal well-being or ethical breakthroughs.",
      development:
        "Modern professionals, particularly younger demographics, seek meaning in their labor. Transparent communication of how the enterprise improves customer lives, protects the environment, or advances science transforms mundane work into a shared moral mission.",
      example:
        "Aerospace engineers at space exploration firms routinely work grueling hours without monetary bonuses because they are inspired by the historic mission of space discovery."
    },
    {
      type: "counterpoint",
      level: "Evaluation 3: Active Mentorship",
      simpleTakeaway:
        "Regular developmental feedback from respected leaders builds confidence and mastery faster than periodic monetary reviews.",
      collocation: "transformative executive mentorship",
      title: "Dedicated Executive Mentorship & Continuous Formative Feedback",
      reason:
        "One-on-one coaching from experienced leaders provides actionable guidance that accelerates mastery and builds personal connection.",
      development:
        "Annual bonus reviews come too late to guide professional growth. In contrast, weekly or biweekly developmental coaching sessions help employees navigate obstacles, refine technical acumen, and feel actively nurtured by leadership.",
      example:
        "Professional service firms utilizing structured apprenticeship models retain their top junior associates far more effectively than firms using purely billable-hour financial incentives."
    },
    {
      type: "counterpoint",
      level: "Evaluation 4: The Baseline Factor",
      simpleTakeaway:
        "While non-monetary motivators are superior for drive, baseline compensation must still be fair and competitive.",
      collocation: "hygiene factor baseline parity",
      title: "The Hybrid Reality: Fair Base Salaries Combined with Intrinsic Catalysts",
      reason:
        "Non-monetary motivators only succeed when an employee's fundamental financial security is already established.",
      development:
        "According to Herzberg's motivation-hygiene theory, base salary is a hygiene factor—inadequate pay breeds dissatisfaction, but excess cash does not generate passion. Employers must pay competitive, dignified base wages first, and then rely on autonomy, progression, and culture to ignite extraordinary effort.",
      example:
        "Companies that pay fair baseline wages but invest heavily in culture and autonomy consistently outperform Wall Street firms in employee satisfaction surveys."
    }
  ],

  facultyAngles: [
    {
      title: "Herzberg's Two-Factor Theory & The Hygiene Fallacy",
      development:
        "Analyze Frederick Herzberg's motivation-hygiene theory, dissecting why monetary bonuses act merely as an extrinsic hygiene factor that eliminates temporary dissatisfaction, while intrinsic motivators like responsibility, personal growth, and achievement are the true drivers of sustained high performance."
    },
    {
      title: "Deci & Ryan's Self-Determination Theory (SDT)",
      development:
        "Evaluate how Self-Determination Theory proves that human motivation flourishes under three core psychological conditions: Autonomy (freedom to choose), Competence (feeling capable and effective), and Relatedness (feeling a sense of social belonging). When companies rely strictly on cash bonuses, they neglect all three pillars."
    },
    {
      title: "The Wells Fargo Case Study: Perverse Incentives & Ethical Collapse",
      development:
        "Examine the corporate fallout when executive leadership tied employee bonuses to hyper-aggressive account-opening quotas, resulting in thousands of employees systematically defrauding customers to hit financial thresholds—demonstrating how cash incentives can corrupt organizational culture."
    },
    {
      title: "Daniel Pink's 'Drive': The Mismatch Between Science and Business",
      development:
        "Deconstruct Daniel Pink's findings showing that for any task requiring even rudimentary cognitive skill or conceptual thinking, higher financial rewards lead to poorer performance, whereas autonomy, mastery, and purpose consistently produce superior outcomes."
    },
    {
      title: "Nordic Work Culture: High Productivity Without Bonus-Chasing",
      development:
        "Investigate how enterprises in Denmark, Sweden, and Finland achieve some of the world's highest worker productivity and innovation metrics with virtually no individual cash-bonus culture, relying instead on flat hierarchies, high trust, flexible schedules, and collective well-being."
    },
    {
      title: "Discretionary Bonus Allocation & In-Group Favoritism",
      development:
        "Explore how discretionary managerial bonuses frequently trigger allegations of bias, nepotism, and discrimination, severely alienating marginalized employees and damaging workplace diversity compared to transparent, objective career advancement benchmarks."
    }
  ],

  brainstormCards: [
    {
      question:
        "Why do monetary bonuses often trigger an immediate boost in output, but fail to maintain long-term employee dedication?",
      thinkingLens: "Extrinsic Habituation & The Hedonic Treadmill",
      selfCheck:
        "Did you consider how quickly extra cash is normalized into an employee's regular baseline expectation?",
      idea:
        "Cash rewards create a brief spike in effort for simple, quantifiable targets, but employees quickly become habituated to the extra money, viewing it as an entitlement and requiring escalating bonuses to sustain the same work pace."
    },
    {
      question:
        "In what ways can individual performance bonuses actually damage teamwork and organizational culture?",
      thinkingLens: "Internal Rivalry & Knowledge Hoarding",
      selfCheck:
        "Did you examine how pitting colleagues against each other harms collaboration and mutual trust?",
      idea:
        "When cash payouts are tied to individual performance rankings, workers are disincentivized from collaborating; they hoard information, undermine peers, and avoid helping newcomers to protect their personal bonus scores."
    },
    {
      question:
        "What psychological factors make career progression and professional autonomy far more inspiring than financial bonuses?",
      thinkingLens: "Self-Determination & Long-Term Professional Self-Worth",
      selfCheck:
        "Did you link autonomy, mastery, and upward mobility to intrinsic human motivation?",
      idea:
        "Autonomy grants employees trusted ownership of their projects, while clear promotion paths offer durable status and personal growth. These satisfy deep psychological needs for mastery and respect that money cannot fulfill."
    },
    {
      question:
        "How can modern organizations effectively recognize exceptional contribution without relying purely on financial payouts?",
      thinkingLens: "Social Recognition, Sponsored Upskilling & Work-Life Well-Being",
      selfCheck:
        "Can you cite real-world workplace practices like mentorship, peer awards, or flexible hours?",
      idea:
        "Companies can reward outstanding work by offering executive mentorship, public recognition from leadership, sponsorship for professional certifications, and greater flexibility such as remote working or sabbatical options."
    }
  ],

  powerExpressions: [
    {
      expression: "monetary remuneration as a transient catalyst",
      meaning:
        "Cash compensation that sparks only brief, fleeting effort rather than sustained institutional loyalty.",
      example:
        "Management must recognize monetary remuneration as a transient catalyst rather than an enduring motivational strategy."
    },
    {
      expression: "cultivate enduring intrinsic motivation",
      meaning:
        "Nurture deep internal passion, personal craft pride, and purpose in an employee's daily responsibilities.",
      example:
        "Progressive tech firms cultivate enduring intrinsic motivation by giving engineers creative project ownership."
    },
    {
      expression: "suffer from diminishing psychological returns",
      meaning:
        "Produce progressively less emotional satisfaction, engagement, or motivational drive over time.",
      example:
        "Financial bonuses suffer from diminishing psychological returns once an employee's basic lifestyle needs are met."
    },
    {
      expression: "foster a cutthroat and siloed workplace culture",
      meaning:
        "Create an environment where employees compete destructively, hoard information, and refuse to collaborate.",
      example:
        "Ranking workers by individual bonus tiers tends to foster a cutthroat and siloed workplace culture."
    },
    {
      expression: "transparent meritocratic advancement pathways",
      meaning:
        "Clear, impartial promotion routes based on verifiable skill, excellence, and organizational contribution.",
      example:
        "Top graduates choose employers that provide transparent meritocratic advancement pathways."
    },
    {
      expression: "empower staff with operational autonomy",
      meaning:
        "Grant workers decision-making authority, scheduling flexibility, and trusted ownership of their workflows.",
      example:
        "Rather than monitoring hours, forward-thinking managers empower staff with operational autonomy."
    }
  ],

  connectorsTier: {
    sTier: [
      "While financial bonuses undeniably stimulate short-term commercial quotas...",
      "Crucially, sustainable workplace dedication is rooted in intrinsic psychological fulfillment...",
      "By granting employees meaningful operational autonomy and transparent career ladders...",
      "From an organizational psychology standpoint, cash incentives suffer from rapid habituation..."
    ],
    aTier: [
      "In terms of managerial effectiveness",
      "Consequently, exclusive reliance on monetary rewards often backfires",
      "In contrast, non-financial incentives foster genuine institutional loyalty",
      "As psychological research consistently illustrates"
    ],
    bTier: [
      "First and foremost",
      "In addition to this",
      "For example",
      "Ultimately, in conclusion"
    ]
  }
};