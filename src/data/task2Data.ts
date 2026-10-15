import type {
  BodyParaStructure,
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
  BodyParaStructure,
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
  id: "marriage-parenthood-in-30s-task2",

  taskType: "Positive or Negative Development",

  title: "IELTS Writing Task 2 — Marriage and Parenthood in One’s 30s",

  questionText:
    "Many young people tend to marry and have children in their 30s rather than at a younger age.\n\nIs this a positive or negative development?",

  audioUrl: "materials/Staying_Young_as_a_Survival_Tactic.m4a",

  timingSeconds: 180,

  recommendedPosition: "A largely positive development.",

  strongestArgument:
    "The strongest argument is that people may enter marriage and parenthood with greater financial stability, emotional maturity and a clearer sense of responsibility. However, delaying parenthood can also create practical challenges.",

  // 1. Sample introduction
  introPlanningPoints: [
    "Trend: marriage and parenthood occur later in life.",
    "Opinion: largely positive.",
    "Main reasons: financial independence + emotional maturity."
  ],

  sampleIntro:
    "In many societies, individuals are increasingly choosing to establish their careers and achieve personal stability before getting married and starting a family. I consider this a largely positive development, as greater financial security and emotional maturity can help couples build more stable family environments, despite the potential challenges associated with delayed parenthood.",

  // 2. Sample conclusion
  conclusionPlanningPoints: [
    "Benefits: financial preparedness + mature decision-making.",
    "Drawback: fewer years available for raising children and possible fertility-related concerns.",
    "Judgement: benefits generally outweigh the drawbacks."
  ],

  sampleConclusion:
    "In conclusion, marrying and becoming parents later in life can enable individuals to make more informed decisions, establish financial security and provide a stable upbringing for their children. Although postponing parenthood may present certain practical and biological challenges, I believe the overall benefits of greater maturity and preparedness make this a positive development.",

  // 6. Smart Board Five-Minute Planning Map & Teaching Recommendation
  fiveMinutePlanningMap: {
    positive: [
      "Financial independence → savings, housing, childcare",
      "Emotional maturity → better conflict resolution",
      "Informed decisions → compatible partners, planned families"
    ],
    negative: [
      "Fertility concerns → possible difficulty conceiving",
      "Later family responsibilities → childcare may overlap with retirement planning",
      "Social pressure → criticism for marrying later"
    ],
    position: "Largely positive",
    body1: "Financial security + emotional maturity",
    body2: "Acknowledge fertility concerns, but explain why the benefits generally outweigh them.",
    teachingRecommendation:
      "Have students build their essay around financial preparedness and emotional maturity, then acknowledge reproductive constraints as the principal counterargument. This gives them a clear, defensible position without making unsupported claims that marrying later always leads to better relationships or parenting."
  },

  // Strongest Classroom Discussion Question
  classroomDiscussion: {
    question:
      "Would you rather have a child at 25 while still building your career, or at 35 when you are financially established?",
    followUps: [
      "Does financial security automatically make someone a better parent?",
      "Can emotional maturity compensate for financial instability?",
      "Is there ever a perfect time to start a family?"
    ],
    pedagogicalInsight:
      "These questions help students see that the issue is not simply age; it is the level of preparedness that age may bring."
  },

  // 3. Student Idea Bank & Body Paragraph Formats
  bodyParagraphs: [
    {
      paraNumber: 1,
      side: "strong_opinion",
      title: "Points for the Advantages (Strong Side — Positive Development)",
      theme: "Financial Preparedness, Emotional Maturity & Relationship Stability",
      mainReason:
        "Young adults can establish careers, build savings and secure housing before taking on the expenses of raising children.",
      supportingReasons:
        "Entering marriage and parenthood after gaining professional experience ensures couples have greater financial wherewithal and emotional acuity, drastically reducing interpersonal discord.",
      example:
        "A couple who have worked for several years may be better equipped to afford rent or a mortgage, childcare and school fees.",
      band9Snippet:
        "“Foremost among the benefits is that delaying family formation allows individuals to achieve financial independence and emotional maturity, creating a resilient household foundation.”",
      alternativeReasons: [
        {
          id: "body-adv-reason1",
          badge: "Reason 1 • Financial Independence",
          title: "Financial Independence",
          mainReason:
            "Young adults can establish careers, build savings and secure housing before taking on the expenses of raising children.",
          supportingReasons:
            "Remaining unencumbered during the early career stage allows individuals to clear student debts, accumulate capital reserves, and attain higher-earning positions without the heavy financial strain of early dependents.",
          example:
            "A couple who have worked for several years may be better equipped to afford rent or a mortgage, childcare and school fees.",
          band9Snippet:
            "“By deferring parenthood until they have greater financial wherewithal, couples may be better equipped to assume familial responsibilities without experiencing severe financial precarity.”",
          modelParagraph:
            "Foremost among the positive aspects of delaying marriage is that it provides couples with the financial independence needed to support a family comfortably. Child-rearing requires immense financial resources for housing, healthcare, nutrition, and schooling. Young adults in their twenties frequently struggle with student loans and unstable entry-level wages, whereas individuals in their thirties have established professional careers and accumulated savings. Consequently, mature parents are in a vastly superior position to absorb domestic expenses. For instance, a couple who have worked for several years are far better equipped to afford a mortgage down payment, quality childcare, and ongoing educational fees without falling into severe debt.",
          examinerNotes:
            "Relatable & practical. Explains the transition from early-career debt to 30s financial solvency."
        },
        {
          id: "body-adv-reason2",
          badge: "Reason 2 • Emotional Maturity",
          title: "Emotional Maturity",
          mainReason:
            "People may become more self-aware and better at managing disagreements, making them more capable of handling marital and parenting responsibilities.",
          supportingReasons:
            "Additional life experience cultivates emotional acuity, self-regulation, and patience. Mature partners are significantly less prone to impulsive conflicts and more adept at constructive problem-solving during parental stress.",
          example:
            "A couple who have learnt to resolve conflicts constructively may be better prepared to manage disagreements about childcare.",
          band9Snippet:
            "“Greater emotional acuity and self-awareness acquired through life experience enable partners to navigate domestic friction with constructive composure.”",
          modelParagraph:
            "Equally important is that entering marriage and parenthood later in life fosters greater emotional maturity. Raising children inevitably introduces severe physical exhaustion and emotional stress, which can strain a relationship. Individuals in their thirties generally possess greater self-awareness, patience, and emotional acuity developed through diverse adult experiences. As a result, they can manage disagreements constructively rather than reacting with impulsive frustration. For example, a couple who have already established healthy communication patterns in their twenties are far better prepared to negotiate domestic duties and resolve disputes over childcare harmoniously.",
          examinerNotes:
            "Focuses on psychological readiness, conflict resolution, and marital durability."
        },
        {
          id: "body-adv-reason3",
          badge: "Reason 3 • Informed Partner Selection",
          title: "More Informed Partner Selection",
          mainReason:
            "Additional life experience can help people understand their own priorities and choose partners with compatible values and long-term goals.",
          supportingReasons:
            "In their twenties, individuals often have evolving identities and uncertain aspirations. By their thirties, people have developed a grounded understanding of their personal values, lifestyle preferences, and financial habits.",
          example:
            "Two people may discuss financial habits, career plans and expectations about raising children before committing to marriage.",
          band9Snippet:
            "“Maturity affords prospective spouses the clarity to evaluate long-term compatibility, thereby significantly curbing the likelihood of interpersonal discord.”",
          modelParagraph:
            "Furthermore, delaying matrimony facilitates more informed partner selection. In early adulthood, individuals frequently undergo rapid psychological shifts and career transitions, making it difficult to discern whether an initial relationship will endure long term. By their thirties, prospective spouses have a lucid understanding of their core values, financial philosophy, and parenting aspirations. Consequently, they choose life partners based on genuine compatibility rather than youthful infatuation. For instance, mature couples typically discuss savings habits, career trajectories, and child-rearing expectations prior to marriage, laying the groundwork for enduring marital harmony.",
          examinerNotes:
            "Explains why mature dating and value alignment lead to stronger long-term family stability."
        },
        {
          id: "body-adv-reason4",
          badge: "Reason 4 • Established Careers",
          title: "Established Careers and Better Time Management",
          mainReason:
            "Individuals who have progressed professionally may have greater control over their schedules and resources, making family responsibilities easier to manage.",
          supportingReasons:
            "Senior employees and established professionals generally enjoy greater bargaining power, employment protections, and workplace autonomy compared to junior hires striving to prove themselves.",
          example:
            "An established employee may be in a better position to negotiate parental leave or flexible working arrangements.",
          band9Snippet:
            "“Career seniority endows working parents with the temporal autonomy and institutional leverage needed to balance demanding careers with childcare.”",
          modelParagraph:
            "Finally, postponing parenthood until one has achieved professional seniority affords working parents greater control over their time and resources. Junior workers must frequently work late hours and travel extensively to advance their careers, creating severe friction with domestic duties. By contrast, individuals who have established themselves professionally by their thirties possess greater job security and institutional influence. This professional standing enables them to negotiate favorable parental leave policies and telecommuting options. For instance, an established corporate manager is in a far stronger position to request flexible working arrangements to care for a toddler without jeopardizing their livelihood.",
          examinerNotes:
            "Demonstrates practical workplace reality: established professionals have flexibility and control."
        }
      ]
    },
    {
      paraNumber: 2,
      side: "non_opinion",
      title: "Points for the Disadvantages (Counterpoint — Potential Drawbacks)",
      theme: "Biological Constraints, Generation Gaps & Lifestyle Friction",
      mainReason:
        "Fertility generally declines with age, particularly for women, which can make conception more difficult for some couples.",
      supportingReasons:
        "Postponing parenthood indefinitely can expose couples to reproductive constraints, less time with offspring, and conflicting priorities after years of personal independence.",
      example:
        "A couple trying to conceive in their late 30s may face difficulties that they might not have encountered earlier.",
      band9Snippet:
        "“Nevertheless, delaying parenthood indefinitely can expose some couples to reproductive constraints, demonstrating that financial preparedness must be balanced against biological considerations.”",
      alternativeReasons: [
        {
          id: "body-dis-reason1",
          badge: "Reason 1 • Reduced Fertility",
          title: "Reduced Fertility with Age",
          mainReason:
            "Fertility generally declines with age, particularly for women, which can make conception more difficult for some couples.",
          supportingReasons:
            "Human reproductive biology becomes progressively more constrained after the mid-thirties, increasing the likelihood of conception delays, pregnancy complications, and the need for costly medical interventions.",
          example:
            "A couple trying to conceive in their late 30s may face difficulties that they might not have encountered earlier.",
          band9Snippet:
            "“Nevertheless, delaying parenthood indefinitely can expose some couples to reproductive constraints, demonstrating that financial preparedness must be balanced against biological considerations.”",
          modelParagraph:
            "On the other hand, the most prominent drawback of delaying family planning is that fertility naturally declines with age. Biological research confirms that reproductive capacity decreases steadily after the early thirties, particularly for women. Consequently, couples who wait until their mid-to-late thirties may encounter unintended delays or severe difficulties in conceiving naturally. This frequently necessitates emotionally taxing and cost-prohibitive fertility interventions such as IVF. For example, a couple trying to conceive in their late thirties may experience prolonged medical challenges that they would not have faced had they started a family in their mid-twenties.",
          examinerNotes:
            "The primary biological counterargument. Grounded, balanced, and defensible without exaggeration."
        },
        {
          id: "body-dis-reason2",
          badge: "Reason 2 • Less Time for Raising Children",
          title: "Less Time for Raising Children",
          mainReason:
            "Becoming a parent later means parents will be older when their children reach adulthood, potentially affecting long-term family plans.",
          supportingReasons:
            "Starting parenthood in the late thirties widens the age gap between generations, which may lead to diminished physical stamina for active parenting and an overlap between retirement and university funding.",
          example:
            "Parents may be approaching retirement while their children are still completing university.",
          band9Snippet:
            "“An expanded intergenerational gap means that mature parents may find their retirement timelines colliding directly with tertiary educational expenses.”",
          modelParagraph:
            "Another notable challenge is that becoming a parent later in life limits the time parents share with their children during adulthood. When individuals have children in their late thirties or forties, they will naturally be approaching their senior years by the time their offspring finish schooling. This substantial age gap can mean parents have reduced physical energy to keep pace with young toddlers, and their window to witness their grandchildren grow up is noticeably contracted. For instance, older parents may be nearing formal retirement age at the precise moment their children are entering university, compounding financial pressures.",
          examinerNotes:
            "Very relatable practical point: energy levels and retirement collision."
        },
        {
          id: "body-dis-reason3",
          badge: "Reason 3 • Conflicting Priorities",
          title: "Conflicting Career and Family Priorities",
          mainReason:
            "After years of professional independence, some people may find it difficult to reorganise their routines around childcare.",
          supportingReasons:
            "Adults who spend a decade enjoying unfettered personal freedom, flexible schedules, and career autonomy may experience significant psychological friction when forced to adapt to the selfless, round-the-clock sacrifices of early parenthood.",
          example:
            "Someone accustomed to frequent work travel may struggle to balance professional commitments with caring for a young child.",
          band9Snippet:
            "“Prolonged individual autonomy can entrench personal habits that make the sudden, relentless compromises of infant care psychologically jarring.”",
          modelParagraph:
            "Furthermore, delaying domestic commitments can create difficult conflicts between ingrained career habits and family duties. Adults who have spent over a decade enjoying complete personal autonomy and dedicated career immersion often establish rigid daily routines. Adapting to the unpredictable, all-consuming demands of infant care can therefore represent a major psychological shock. For example, a professional accustomed to frequent international business travel or long corporate evenings may find it exceptionally stressful to abruptly curtail their career trajectory to tend to a newborn's daily needs.",
          examinerNotes:
            "Explores lifestyle adaptation: deeply established adult independence vs. infant care compromises."
        },
        {
          id: "body-dis-reason4",
          badge: "Reason 4 • Social Pressure",
          title: "Family and Social Pressure",
          mainReason:
            "People who marry later may face persistent questions or criticism from relatives and communities that expect earlier marriage.",
          supportingReasons:
            "In many cultures, early marriage and prompt childbearing remain deeply entrenched social expectations. Unmarried adults in their late twenties and thirties often experience persistent familial scrutiny and social isolation.",
          example:
            "An adult may feel pressured to marry before finding a genuinely compatible partner simply to satisfy family expectations.",
          band9Snippet:
            "“Later marriage frequently collides with entrenched social expectations, subjecting individuals to unwarranted familial anxiety and community scrutiny.”",
          modelParagraph:
            "Finally, individuals who postpone marriage often face intense societal and familial pressure. In numerous societies, traditional cultural norms mandate that young adults marry and produce offspring in their early twenties. Those who deliberately deviate from this timetable are often subjected to persistent probing, unwarranted criticism, or anxiety from extended relatives. For example, an adult in their early thirties may feel coerced into rushing into an incompatible marriage simply to appease aging parents, inadvertently undermining the very stability they sought to achieve.",
          examinerNotes:
            "Highlights cultural expectations and interpersonal tension without losing essay focus."
        }
      ]
    }
  ],

  // 4. Faculty / Teacher Idea Bank (8 Analytical Angles)
  facultyAngles: [
    {
      type: "positive",
      title: "Reduced Financial Dependence",
      development:
        "Couples who have established their own incomes may be less dependent on parents or extended family, allowing them to make independent decisions about their household and children."
    },
    {
      type: "positive",
      title: "Greater Equality Within Relationships",
      development:
        "When both partners have had time to pursue education and careers, they may be better positioned to negotiate domestic responsibilities and share financial decisions."
    },
    {
      type: "positive",
      title: "Breaking the Cycle of Financial Insecurity",
      development:
        "Parents who enter family life with savings and stable employment may be better able to invest in nutrition, education and enriching experiences for their children."
    },
    {
      type: "positive",
      title: "More Deliberate Family Planning",
      development:
        "Delaying parenthood can give couples time to decide whether they genuinely want children and how many they can realistically support, potentially reducing unplanned pregnancies."
    },
    {
      type: "negative",
      title: "A Narrowing Window for Family Planning",
      development:
        "Delayed decisions may leave couples with less flexibility if conception takes longer than expected or they encounter fertility difficulties."
    },
    {
      type: "negative",
      title: "The Dual Burden of Caring Responsibilities",
      development:
        "People who become parents later may simultaneously have young children and ageing parents who need financial or practical support."
    },
    {
      type: "negative",
      title: "Over-Optimisation of Life Plans",
      development:
        "Waiting for the perfect salary, house or career position may lead some individuals to postpone family life indefinitely because complete security is rarely achievable."
    },
    {
      type: "negative",
      title: "Changing Expectations of Independence",
      development:
        "People accustomed to controlling their time and spending may find the compromises required by marriage and parenting more challenging than anticipated."
    }
  ],

  // 5. Workbook — High-Band Vocabulary (10 Expressions)
  vocabList: [
    {
      word: "financial wherewithal",
      phonetic: "/faɪˈnænʃəl ˈwɛəwɪðɔːl/",
      pos: "noun phrase",
      meaning: "The financial means to do something",
      collocations: ["greater financial wherewithal", "sufficient wherewithal", "lack the wherewithal"],
      example: "Couples may have greater financial wherewithal to raise children comfortably.",
      band: 9,
      topic: "Economics & Family",
      cefr: "C2",
      usageNotes: "Formal, academic phrasing for having sufficient financial means."
    },
    {
      word: "emotional acuity",
      phonetic: "/ɪˈməʊʃənl əˈkjuːəti/",
      pos: "noun phrase",
      meaning: "The ability to understand emotions and emotional situations",
      collocations: ["develop emotional acuity", "heightened acuity", "demonstrate emotional acuity"],
      example: "Greater emotional acuity can help partners navigate disagreements constructively.",
      band: 9,
      topic: "Psychology & Relationships",
      cefr: "C2",
      usageNotes: "Far superior to basic words like 'emotional intelligence' or 'feelings'."
    },
    {
      word: "defer parenthood",
      phonetic: "/dɪˈfɜː ˈpeərənthʊd/",
      pos: "verb phrase",
      meaning: "Postpone having children",
      collocations: ["defer parenthood until", "choice to defer parenthood", "deferring childbearing"],
      example: "Many couples defer parenthood until they have established their careers.",
      band: 8.5,
      topic: "Demographics & Life Decisions",
      cefr: "C1",
      usageNotes: "Precise academic synonym for 'delay having babies'."
    },
    {
      word: "assume familial responsibilities",
      phonetic: "/əˈsjuːm fəˈmɪliəl rɪˌspɒnsəˈbɪlɪtiz/",
      pos: "verb phrase",
      meaning: "Take on family duties and obligations",
      collocations: ["prepared to assume", "assume familial responsibilities", "readiness to assume"],
      example: "Mature adults may be better prepared to assume familial responsibilities.",
      band: 8.5,
      topic: "Family & Adulthood",
      cefr: "C1",
      usageNotes: "High-level collocation for taking care of a family."
    },
    {
      word: "financial precarity",
      phonetic: "/faɪˈnænʃəl prɪˈkeərəti/",
      pos: "noun phrase",
      meaning: "A state of persistent financial insecurity or vulnerability",
      collocations: ["intensify financial precarity", "escape precarity", "experience severe precarity"],
      example: "Early parenthood can intensify financial precarity among couples with unstable incomes.",
      band: 9,
      topic: "Socioeconomics",
      cefr: "C2",
      usageNotes: "Academic alternative to 'being poor' or 'financial instability'."
    },
    {
      word: "interpersonal discord",
      phonetic: "/ˌɪntəˈpɜːsənl ˈdɪskɔːd/",
      pos: "noun phrase",
      meaning: "Conflict or disagreement between people",
      collocations: ["resolve interpersonal discord", "curb discord", "domestic discord"],
      example: "Greater maturity may help couples resolve interpersonal discord more effectively.",
      band: 8.5,
      topic: "Relationships",
      cefr: "C1",
      usageNotes: "Elevated expression for relationship fights or marital conflicts."
    },
    {
      word: "reproductive constraints",
      phonetic: "/ˌriːprəˈdʌktɪv kənˈstreɪnts/",
      pos: "noun phrase",
      meaning: "Limitations affecting the biological ability to have children",
      collocations: ["expose couples to reproductive constraints", "biological constraints", "face constraints"],
      example: "Delayed parenthood may expose some couples to reproductive constraints.",
      band: 9,
      topic: "Biology & Health",
      cefr: "C2",
      usageNotes: "Medical and academic register for fertility limits."
    },
    {
      word: "long-term provisioning",
      phonetic: "/ˈlɒŋ tɜːm prəˈvɪʒənɪŋ/",
      pos: "noun phrase",
      meaning: "Planning and providing resources for the future",
      collocations: ["capacity for long-term provisioning", "financial provisioning", "household provisioning"],
      example: "Stable employment can improve a couple’s capacity for long-term provisioning.",
      band: 8.5,
      topic: "Household Economics",
      cefr: "C1",
      usageNotes: "Academic concept encompassing saving, budgeting, and safeguarding future needs."
    },
    {
      word: "parental readiness",
      phonetic: "/pəˈrɛntl ˈrɛdɪnɪs/",
      pos: "noun phrase",
      meaning: "Preparedness to become a parent psychologically and financially",
      collocations: ["determine parental readiness", "foster readiness", "assess readiness"],
      example: "Age alone does not necessarily determine parental readiness.",
      band: 8,
      topic: "Child Development",
      cefr: "C1",
      usageNotes: "Comprehensive term combining emotional and economic preparedness."
    },
    {
      word: "entrenched social expectations",
      phonetic: "/ɪnˈtrɛnʧt ˈsəʊʃəl ˌɛksprɛkˈteɪʃənz/",
      pos: "noun phrase",
      meaning: "Deeply established social beliefs about how people should behave",
      collocations: ["challenge entrenched social expectations", "conform to expectations", "cultural expectations"],
      example: "Later marriage can challenge entrenched social expectations about adulthood.",
      band: 9,
      topic: "Sociology & Culture",
      cefr: "C2",
      usageNotes: "Perfect sociological phrasing for traditional marriage pressures."
    }
  ],

  // Best Six for Workbook
  workbookTopSix: [
    "financial wherewithal",
    "defer parenthood",
    "assume familial responsibilities",
    "financial precarity",
    "reproductive constraints",
    "entrenched social expectations"
  ],

  // Model Sentences
  modelSentences: {
    positive:
      "By deferring parenthood until they have greater financial wherewithal, couples may be better equipped to assume familial responsibilities without experiencing severe financial precarity.",
    balanced:
      "Nevertheless, delaying parenthood indefinitely can expose some couples to reproductive constraints, demonstrating that financial preparedness must be balanced against biological considerations."
  },

  vocabHunt: [
    "financial wherewithal",
    "emotional acuity",
    "defer parenthood",
    "assume familial responsibilities",
    "financial precarity",
    "interpersonal discord",
    "reproductive constraints",
    "long-term provisioning",
    "parental readiness",
    "entrenched social expectations"
  ],

  // Fluid Lexicon ("Sugar in Water")
  fluidVocab: [
    {
      word: "wherewithal",
      pos: "noun",
      meaning: "The money or other means needed for a particular purpose",
      naturalCollocation: "financial wherewithal to raise children",
      organicExample:
        "Couples in their thirties have greater financial wherewithal to provide for their children's education.",
      mechanicalPitfall: "Do not write 'they have a wherewithal'—it is an uncountable noun.",
      examinerInsight: "Band 9 register when discussing household economics."
    },
    {
      word: "defer",
      pos: "verb",
      meaning: "Put off to a later time; postpone",
      naturalCollocation: "defer parenthood / defer marriage",
      organicExample:
        "Young professionals frequently defer parenthood until they have achieved employment security.",
      mechanicalPitfall: "Do not confuse with 'differ' (to disagree). Follow with a direct noun.",
      examinerInsight: "Natural formal verb replacing repetitive uses of 'delay'."
    },
    {
      word: "acuity",
      pos: "noun",
      meaning: "Sharpness or keenness of thought, vision, or hearing",
      naturalCollocation: "emotional acuity / intellectual acuity",
      organicExample:
        "Adults with heightened emotional acuity navigate marital disagreements with calmness and empathy.",
      mechanicalPitfall: "Avoid using as an adjective ('acuity minds' is incorrect; use 'acute').",
      examinerInsight: "Elevates psychological descriptions above generic 'mature thinking'."
    },
    {
      word: "precarity",
      pos: "noun",
      meaning: "A state of persistent insecurity, vulnerability, or uncertainty",
      naturalCollocation: "financial precarity / economic precarity",
      organicExample:
        "Early parenthood can plunge low-income workers into prolonged financial precarity.",
      mechanicalPitfall: "Avoid 'precarity situation'—use 'precarious situation' or simply 'precarity'.",
      examinerInsight: "High-level sociological descriptor recognized by Band 9 examiners."
    },
    {
      word: "entrenched",
      pos: "adjective",
      meaning: "Firmly established and difficult or unlikely to change",
      naturalCollocation: "entrenched social expectations / entrenched traditions",
      organicExample:
        "Delaying matrimony often collides with entrenched social expectations regarding adulthood.",
      mechanicalPitfall: "Do not say 'deeply entrenched in' when describing simple temporary habits.",
      examinerInsight: "Accurately captures generational and cultural community norms."
    },
    {
      word: "provisioning",
      pos: "noun",
      meaning: "The action of providing or supplying something for use, especially resources",
      naturalCollocation: "long-term provisioning for the family",
      organicExample:
        "Senior career status dramatically strengthens a couple's capacity for long-term provisioning.",
      mechanicalPitfall: "Do not use 'provisionings' as plural.",
      examinerInsight: "Displays sophisticated command of domestic economic terminology."
    }
  ],

  // 4 Guided Brainstorming Cards for Step 3
  brainstormCards: [
    {
      question:
        "How does entering marriage in your 30s affect household finances compared to your early 20s?",
      thinkingLens:
        "Think about entry-level salaries, student loans, and rental instability versus 10 years of savings, career promotion, and mortgage qualification.",
      selfCheck:
        "Did I focus on concrete expenses like housing down payments, childcare, and healthcare rather than just saying 'they have more money'?",
      idea:
        "Financial Independence: Young adults can establish careers, build savings and secure housing before taking on child-rearing costs. A couple who have worked for several years are far better equipped to afford rent or a mortgage, childcare and school fees."
    },
    {
      question:
        "Why might personal maturity and life experience improve marital longevity and parenting quality?",
      thinkingLens:
        "Consider self-awareness, conflict resolution skills, and knowing what you want in a partner versus youthful impetuousness and unaddressed insecurities.",
      selfCheck:
        "Can I explain how constructive communication prevents divorce and reduces toxic stress for growing children?",
      idea:
        "Emotional Maturity: People become more self-aware and skilled at managing disagreements. A couple who have learnt to resolve interpersonal discord constructively are better prepared to manage disputes over parenting duties."
    },
    {
      question:
        "What biological and medical realities arise when couples wait until their late 30s to have children?",
      thinkingLens:
        "Focus on natural reproductive decline, chromosomal and gestational health concerns, and reliance on assisted reproductive technology.",
      selfCheck:
        "Did I frame this as a real biological limitation without exaggerating it into an impossible obstacle?",
      idea:
        "Reduced Fertility with Age: Fertility naturally declines with age, especially past the mid-thirties, making conception more difficult. Couples may face unintended delays or require costly assisted therapies like IVF."
    },
    {
      question:
        "How does becoming a parent at 35 or 38 alter long-term family life and retirement planning?",
      thinkingLens:
        "Examine the generational age gap: parents reaching their late 50s while their children are teenagers or college students, plus caring for aging grandparents.",
      selfCheck:
        "Did I connect parental age to energy levels, retirement savings, and the dual caring burden?",
      idea:
        "Less Time & Overlapping Priorities: Parents will be older when children reach adulthood, meaning university tuition may overlap with retirement planning, alongside reduced physical stamina for toddler care."
    }
  ],

  // Consequences & Student Idea Bank Table
  consequences: [
    {
      type: "positive",
      title: "Financial Independence",
      desc: "Young adults can establish careers, build savings and secure housing before taking on the expenses of raising children.",
      example: "A couple who have worked for several years may be better equipped to afford rent or a mortgage, childcare and school fees.",
      level: "Student Bank 01",
      simpleTakeaway: "Clear career footing and accumulated savings shield families from debt.",
      collocation: "financial wherewithal"
    },
    {
      type: "positive",
      title: "Emotional Maturity",
      desc: "People may become more self-aware and better at managing disagreements, making them more capable of handling marital and parenting responsibilities.",
      example: "A couple who have learnt to resolve conflicts constructively may be better prepared to manage disagreements about childcare.",
      level: "Student Bank 02",
      simpleTakeaway: "Self-awareness and constructive conflict resolution build durable marriages.",
      collocation: "emotional acuity"
    },
    {
      type: "positive",
      title: "More Informed Partner Selection",
      desc: "Additional life experience can help people understand their own priorities and choose partners with compatible values and long-term goals.",
      example: "Two people may discuss financial habits, career plans and expectations about raising children before committing to marriage.",
      level: "Student Bank 03",
      simpleTakeaway: "Aligning values and life goals prevents domestic discord.",
      collocation: "compatible values"
    },
    {
      type: "positive",
      title: "Established Careers and Better Time Management",
      desc: "Individuals who have progressed professionally may have greater control over their schedules and resources, making family responsibilities easier to manage.",
      example: "An established employee may be in a better position to negotiate parental leave or flexible working arrangements.",
      level: "Student Bank 04",
      simpleTakeaway: "Seniority allows parents to negotiate flexible work hours and leave.",
      collocation: "workplace autonomy"
    },
    {
      type: "negative",
      title: "Reduced Fertility with Age",
      desc: "Fertility generally declines with age, particularly for women, which can make conception more difficult for some couples.",
      example: "A couple trying to conceive in their late 30s may face difficulties that they might not have encountered earlier.",
      level: "Drawback 01",
      simpleTakeaway: "Biological reproductive constraints increase after the mid-thirties.",
      collocation: "reproductive constraints"
    },
    {
      type: "negative",
      title: "Less Time for Raising Children",
      desc: "Becoming a parent later means parents will be older when their children reach adulthood, potentially affecting long-term family plans.",
      example: "Parents may be approaching retirement while their children are still completing university.",
      level: "Drawback 02",
      simpleTakeaway: "Age gap means university costs collide with retirement savings.",
      collocation: "intergenerational gap"
    },
    {
      type: "negative",
      title: "Conflicting Career and Family Priorities",
      desc: "After years of professional independence, some people may find it difficult to reorganise their routines around childcare.",
      example: "Someone accustomed to frequent work travel may struggle to balance professional commitments with caring for a young child.",
      level: "Drawback 03",
      simpleTakeaway: "Transition from complete adult independence to infant care can be jarring.",
      collocation: "lifestyle adjustment"
    },
    {
      type: "negative",
      title: "Family and Social Pressure",
      desc: "People who marry later may face persistent questions or criticism from relatives and communities that expect earlier marriage.",
      example: "An adult may feel pressured to marry before finding a genuinely compatible partner simply to satisfy family expectations.",
      level: "Drawback 04",
      simpleTakeaway: "Unmarried 30-somethings encounter social expectations and scrutiny.",
      collocation: "entrenched social expectations"
    }
  ],

  // Evaluation arguments mapping to the essay
  evaluationArguments: [
    {
      title: "Financial Security Outweighs Early Hardship",
      reason: "Having children without financial stability causes severe marital distress and child poverty.",
      development: "When parents marry in their thirties, their combined earning power and savings provide a secure platform for healthcare, quality nutrition, and tutoring.",
      example: "Dual-income households in their thirties carry 40% lower consumer debt upon their first child's birth.",
      type: "argument",
      level: "Economic Proof",
      simpleTakeaway: "Financial resilience outweighs any benefit of having children earlier on low wages.",
      collocation: "financial precarity"
    },
    {
      title: "Emotional Maturity Protects Children",
      reason: "Divorce and volatile home environments cause profound psychological trauma to developing children.",
      development: "Older parents exhibit higher patience and constructive communication, resulting in lower divorce rates and happier households.",
      example: "Sociological data links later marriages with significantly lower rates of legal separation within the first seven years.",
      type: "argument",
      level: "Psychological Proof",
      simpleTakeaway: "Emotional stability in your 30s fosters an enduring marital bond.",
      collocation: "interpersonal discord"
    },
    {
      title: "Biological Limits Require Balanced Planning",
      reason: "Biological fertility cannot be ignored despite financial comfort.",
      development: "Postponing parenthood indefinitely increases the chance of conception difficulties and high medical costs.",
      example: "Women attempting conception past age 35 experience lower natural monthly conception probabilities.",
      type: "counterpoint",
      level: "Biological Concession",
      simpleTakeaway: "Financial preparedness must be weighed against reproductive realities.",
      collocation: "reproductive constraints"
    },
    {
      title: "Managing the Generational Gap",
      reason: "Being older parents requires conscious lifestyle and financial planning.",
      development: "Although parents are older, healthy longevity and modern preventative healthcare mean parents remain energetic into their 50s and 60s.",
      example: "Modern 40-year-olds enjoy far better cardiovascular health and life expectancy than previous generations.",
      type: "argument",
      level: "Rebuttal Angle",
      simpleTakeaway: "Modern health and longevity offset traditional concerns about parental age.",
      collocation: "parental readiness"
    }
  ],

  powerExpressions: [
    {
      expression: "financial wherewithal",
      meaning: "The financial means or capital necessary to achieve an undertaking",
      example: "Established professionals possess the financial wherewithal to fund private schooling and secure fixed mortgages."
    },
    {
      expression: "emotional acuity",
      meaning: "Keen insight and understanding into interpersonal and psychological dynamics",
      example: "Couples who have honed their emotional acuity resolve domestic disagreements through calm negotiation."
    },
    {
      expression: "defer parenthood",
      meaning: "To deliberately postpone having children until a future date",
      example: "Modern graduates frequently choose to defer parenthood until their career foundations are secure."
    },
    {
      expression: "assume familial responsibilities",
      meaning: "To take upon oneself the obligations and duties of marriage and child-rearing",
      example: "Older adults enter domestic life better prepared to assume familial responsibilities without resentment."
    },
    {
      expression: "financial precarity",
      meaning: "A precarious state of economic insecurity, vulnerability, and debt",
      example: "Starting a family in one's early twenties often plunges young couples into acute financial precarity."
    },
    {
      expression: "reproductive constraints",
      meaning: "Biological or physiological limitations affecting conception and pregnancy",
      example: "Couples who postpone family planning indefinitely must confront inevitable reproductive constraints."
    }
  ],

  connectorsTier: {
    sTier: [
      "Foremost among the positive aspects of...",
      "In consequence of their accumulated financial reserves...",
      "Nevertheless, delaying parenthood indefinitely can expose couples to...",
      "On the other hand, critics rightly point to...",
      "By deferring parenthood until they have greater financial wherewithal..."
    ],
    aTier: [
      "Equally significant is that...",
      "As a direct corollary...",
      "It is therefore evident that...",
      "Although postponing parenthood presents certain practical challenges..."
    ],
    bTier: [
      "Furthermore,",
      "In addition,",
      "However,",
      "Consequently,"
    ]
  },

  strategicLinkers: [
    {
      zone: "Zone 1: Opening Strong Opinion Body Paragraphs",
      badge: "Advantage Openers",
      placementRule: "Use at the beginning of Body 1 and Body 2 to declare your primary advantage clearly.",
      items: [
        {
          phrase: "Foremost among the positive aspects of delaying marriage is that...",
          functionDesc: "Declares your strongest advantage immediately with authority.",
          example:
            "Foremost among the positive aspects of delaying marriage is that it provides couples with the financial independence needed to support a family."
        },
        {
          phrase: "Equally important is that entering parenthood later in life fosters...",
          functionDesc: "Introduces your second major argument (Body 2) while maintaining logical cohesion.",
          example:
            "Equally important is that entering parenthood later in life fosters greater emotional maturity and relationship stability."
        }
      ]
    },
    {
      zone: "Zone 2: Concession & Counterpoint Placement",
      badge: "Drawback Transitions",
      placementRule: "Use at the start of Body 3 to acknowledge the counterpoint fairly without conceding your overall stance.",
      items: [
        {
          phrase: "On the other hand, the most prominent drawback of delaying family planning is that...",
          functionDesc: "Smoothly shifts to the counter-perspective while signaling a measured concession.",
          example:
            "On the other hand, the most prominent drawback of delaying family planning is that natural fertility declines noticeably with advancing age."
        },
        {
          phrase: "Nevertheless, delaying parenthood indefinitely can expose some couples to...",
          functionDesc: "Introduces biological or practical constraints while maintaining a balanced tone.",
          example:
            "Nevertheless, delaying parenthood indefinitely can expose some couples to reproductive constraints and higher medical costs."
        }
      ]
    },
    {
      zone: "Zone 3: Decisive Outweighing Conclusion",
      badge: "Conclusion Synthesis",
      placementRule: "Use in the final paragraph to synthesize drawbacks against the superior benefits.",
      items: [
        {
          phrase: "In conclusion, marrying and becoming parents later in life can enable individuals to...",
          functionDesc: "Directly mirrors the prompt's scope and synthesizes personal preparedness.",
          example:
            "In conclusion, marrying and becoming parents later in life can enable individuals to make more informed decisions and establish financial security."
        },
        {
          phrase: "Although postponing parenthood may present certain practical and biological challenges, I believe...",
          functionDesc: "Acknowledges the counterpoint in the first clause and asserts the positive verdict in the second.",
          example:
            "Although postponing parenthood may present certain practical and biological challenges, I believe the overall benefits make this a positive development."
        }
      ]
    }
  ]
};