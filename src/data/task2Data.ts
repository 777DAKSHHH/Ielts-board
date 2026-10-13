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
  id: "delaying-marriage-children-in-30s-task2",

  taskType: "Positive or Negative Development Essay (3 Body Paragraphs)",

  title: "Marrying & Having Children in the 30s: Positive or Negative Development?",

  questionText:
    "Many young people tend to marry and have children in their 30s rather than at a younger age.\n\n- Is this a positive or negative development?",

  audioUrl: "materials/Staying_Young_as_a_Survival_Tactic.m4a",

  timingSeconds: 180,

  sampleIntro:
    "In contemporary society, an increasing proportion of young adults are choosing to marry and start families in their thirties rather than during their twenties. Although this postponement introduces biological fertility risks and contributes to an aging demographic, I firmly contend that it is a predominantly positive development because it provides couples with financial security, career fulfillment, and emotional maturity for raising children.",

  sampleConclusion:
    "In conclusion, while postponing marriage and childbirth into one's thirties carries medical fertility risks and accelerates population aging, the personal and familial advantages are far more compelling. By achieving career stability, financial independence, and emotional resilience prior to family life, mature parents can offer their children a significantly more stable and prosperous upbringing, rendering this a distinctly positive trend.",

  bodyParagraphs: [
    {
      paraNumber: 1,
      side: "strong_opinion",
      title: "Points for the Advantages (Strong Side - Advantage 1)",
      theme: "Financial Security, Career Foundation & Wealth Stability",
      mainReason:
        "The primary advantage of postponing marriage and parenthood until one's thirties is that it grants individuals the time required to establish financial independence and career stability.",
      supportingReasons:
        "Rearing children in modern economies is exceptionally costly, demanding substantial outlays for housing, healthcare, nutritious food, and education. Young adults in their twenties often struggle with student loan debt and volatile entry-level salaries, whereas individuals in their thirties have established professional careers and accumulated savings, allowing them to provide a secure and prosperous home.",
      example:
        "For example, couples who delay family formation until their thirties are statistically far more capable of purchasing a family home and absorbing child-rearing costs without falling into chronic debt.",
      band9Snippet:
        "“Foremost among the positive aspects of delaying marriage is that it provides couples with the financial foundation and career stability necessary to support a family.”",
      alternativeReasons: [
        {
          id: "body-adv-reason1",
          badge: "Reason 1 • Financial Security",
          title: "Accumulated Wealth & Freedom from Economic Hardship",
          mainReason:
            "Couples in their thirties have stable incomes and accumulated savings, ensuring they can comfortably afford the high costs of raising children.",
          supportingReasons:
            "Child-rearing requires immense financial resources for housing, healthcare, nutrition, and schooling. Young adults in their twenties frequently struggle with student loans and unstable entry-level wages, whereas thirty-somethings have climbed the career ladder, earned higher salaries, and saved enough money to give their children a secure, stress-free upbringing.",
          example:
            "For instance, parents in their thirties are far more likely to own their family home and comfortably afford quality daycare without resorting to high-interest personal loans.",
          band9Snippet:
            "“Foremost among the positive aspects of delaying marriage is that it provides couples with the financial stability needed to support a family comfortably.”",
          modelParagraph:
            "Foremost among the positive aspects of delaying marriage is that it provides couples with the financial stability needed to support a family comfortably. The economic burden of child-rearing—encompassing spacious housing, healthcare, quality nutrition, and educational fees—has escalated sharply in modern society. Individuals in their thirties typically enjoy established careers, higher earning capacity, and accumulated savings, whereas twenty-somethings frequently battle student debt and unstable entry-level wages. Consequently, mature parents are in a vastly superior position to absorb domestic expenses without enduring debilitating economic stress. For instance, parents in their thirties are statistically far more likely to own their family residence and finance early childhood schooling without descending into chronic debt.",
          examinerNotes:
            "Directly relatable economic argument. Contrasts entry-level 20s financial struggle with established 30s earning power."
        },
        {
          id: "body-adv-reason2",
          badge: "Reason 2 • Career Progression",
          title: "Uninterrupted Professional & Educational Advancement",
          mainReason:
            "Postponing marriage and parenthood allows young adults to complete higher education and reach senior career milestones without domestic disruption.",
          supportingReasons:
            "Balancing intense university degrees or demanding corporate hours with the 24/7 duties of childcare often forces young professionals—particularly women—to interrupt or abandon their ambitions. Delaying family obligations enables both partners to earn postgraduate qualifications, gain international experience, and secure promotions before taking parental leave.",
          example:
            "For example, female professionals in fields like medicine, law, and engineering who delay childbearing until their thirties are significantly more likely to achieve senior leadership and managerial roles.",
          band9Snippet:
            "“Equally significant is that deferring domestic commitments allows young adults to realize their full educational and professional potential unhindered.”",
          modelParagraph:
            "Equally significant is that deferring domestic responsibilities allows young adults to realize their full educational and professional potential unhindered. Demanding degree programs and competitive corporate careers require intensive commitment that is exceptionally difficult to balance with the relentless demands of newborn care. By postponing marriage and childbirth, individuals can complete postgraduate studies, acquire specialized workplace skills, and ascend to leadership positions before taking on family duties. For instance, female professionals in competitive fields like medicine, law, and corporate finance who delay motherhood until their thirties are much more likely to attain senior directorships without sacrificing their career trajectory.",
          examinerNotes:
            "Highlights gender equality and professional fulfillment without overcomplicating the logic."
        },
        {
          id: "body-adv-reason3",
          badge: "Reason 3 • Emotional Maturity",
          title: "Psychological Wisdom & Lower Divorce Rates",
          mainReason:
            "Adults in their thirties possess greater self-awareness and emotional wisdom, resulting in stronger marriages and calmer parenting.",
          supportingReasons:
            "Young people in their early twenties are still developing their personal identity and frequently rush into relationships driven by infatuation, leading to high divorce rates. By age thirty, people have gained life experience, understand what they value in a partner, and handle domestic disagreements with patient communication, creating a harmonious environment for children.",
          example:
            "Sociological studies demonstrate that couples who marry after age thirty experience substantially lower rates of divorce and marital separation compared to those marrying in their early twenties.",
          band9Snippet:
            "“Moreover, postponing marriage fosters greater emotional maturity and psychological resilience in both marital relationships and parenting.”",
          modelParagraph:
            "Moreover, postponing marriage fosters greater emotional maturity and psychological resilience in both marital relationships and parenting. Young adults in their early twenties are often still exploring their personal identities and lack the conflict-resolution skills necessary for lifelong commitment. By the age of thirty, individuals possess a clearer understanding of their personal values, make wiser partner choices, and handle parental stress with greater patience and emotional balance. Research consistently indicates that couples who marry in their thirties exhibit markedly lower divorce rates, providing children with a much calmer, more harmonious domestic environment.",
          examinerNotes:
            "Focuses on psychological well-being, mature decision-making, and marital stability."
        },
        {
          id: "body-adv-reason4",
          badge: "Reason 4 • Personal Freedom",
          title: "Living Youthful Dreams Without Later Resentment",
          mainReason:
            "Spending one's twenties independent allows people to travel, pursue passions, and mature without feeling trapped or resentful later in life.",
          supportingReasons:
            "Those who marry too young often suffer from 'lost youth syndrome,' resenting that domestic duties prevented them from seeing the world or exploring personal interests. Having enjoyed complete independence throughout their twenties, adults in their thirties transition into parenthood willingly and wholeheartedly.",
          example:
            "Many adults who spent their twenties traveling, studying abroad, and building creative hobbies report entering family life with deep satisfaction and zero feelings of missing out.",
          band9Snippet:
            "“Finally, spending one's twenties as an independent individual prevents the psychological resentment that often accompanies premature domesticity.”",
          modelParagraph:
            "Finally, spending one's twenties as an independent individual prevents the psychological resentment that often accompanies premature domesticity. Young people who marry prematurely frequently feel they have missed out on fundamental life experiences such as solo travel, personal hobbies, and social exploration. Having satisfied these youthful aspirations, men and women in their thirties transition into parenthood willingly and with deep gratitude, viewing family life as a fulfilling new chapter rather than a restrictive burden.",
          examinerNotes:
            "Psychological perspective on life satisfaction and parental commitment."
        }
      ]
    },
    {
      paraNumber: 2,
      side: "strong_opinion",
      title: "Body Paragraph 2 (Strong Side Advantage 2)",
      theme: "Emotional Maturity, Relationship Longevity & Quality Parenting",
      mainReason:
        "Equally important is that greater psychological maturity in one's thirties fosters durable marital partnerships and more nurturing, patient parenting.",
      supportingReasons:
        "Older parents are generally calmer, less impulsive, and more attentive to their children's psychological development, shielding children from chaotic home environments.",
      example:
        "Research confirms that children raised by mature, financially stable parents achieve higher educational outcomes and report greater emotional security.",
      band9Snippet:
        "“Equally important is that greater psychological maturity in one's thirties fosters durable marital partnerships and more nurturing, patient parenting.”"
    },
    {
      paraNumber: 3,
      side: "non_opinion",
      title: "Points for the Disadvantages (Counterpoint / Non-Opinion Side)",
      theme: "Biological Fertility Complications & Generational Age Gap",
      mainReason:
        "On the other hand, critics rightly emphasize that delaying marriage and childbirth introduces serious biological risks and creates a widening generational gap.",
      supportingReasons:
        "Human fertility declines significantly after age thirty, increasing the likelihood of conception difficulties, miscarriages, and expensive medical procedures, while older parents may lack the energy to raise active children.",
      example:
        "For instance, women attempting first-time conception in their late thirties experience higher rates of pregnancy complications and frequently require stressful in-vitro fertilization (IVF) treatments.",
      band9Snippet:
        "“On the other hand, critics rightly emphasize that delaying marriage and childbirth introduces serious biological risks and creates a widening generational gap.”",
      alternativeReasons: [
        {
          id: "body-disadv-reason1",
          badge: "Reason 1 • Biological Fertility Risks",
          title: "Reproductive Decline & Heightened Pregnancy Complications",
          mainReason:
            "Natural fertility declines significantly after age thirty, making conception harder and increasing pregnancy complications.",
          supportingReasons:
            "Human biological clocks are real: female ovarian reserve drops sharply after thirty and steeper after thirty-five, while sperm quality also declines. Older pregnancies carry higher risks of gestational diabetes, high blood pressure, and chromosomal disorders such as Down syndrome, often forcing couples to undergo emotionally exhausting and expensive IVF procedures.",
          example:
            "For example, women conceiving in their late thirties face higher rates of miscarriage and often spend thousands of dollars on assisted reproductive technologies.",
          band9Snippet:
            "“On the other hand, critics rightly emphasize the profound biological and medical hazards associated with delayed childbearing.”",
          modelParagraph:
            "On the other hand, critics rightly emphasize the profound biological and medical hazards associated with delayed childbearing. Human fertility declines precipitously after the age of thirty, particularly for women, making natural conception considerably more difficult and unpredictable. Furthermore, pregnancies at advanced maternal age carry heightened clinical risks, including preeclampsia, gestational diabetes, and chromosomal abnormalities such as Down syndrome. For example, many couples in their late thirties are compelled to undergo costly, emotionally distressing in-vitro fertilization (IVF) procedures that offer no guarantee of successful childbirth.",
          examinerNotes:
            "The most authoritative, scientifically backed drawback. Directly relatable and clear."
        },
        {
          id: "body-disadv-reason2",
          badge: "Reason 2 • Physical Energy & Age Gap",
          title: "Dwindling Physical Energy & Wide Generational Divide",
          mainReason:
            "Older parents often lack the physical stamina required to raise energetic toddlers and face a wider cultural gap with their offspring.",
          supportingReasons:
            "Caring for small children involves sleepless nights, physical carrying, and constant active play, which becomes far more taxing in one's late thirties and forties. Furthermore, being nearly forty years older than their children means parents will be approaching retirement when their children graduate, leaving less shared time with future grandchildren.",
          example:
            "A parent who has a baby at thirty-eight will be almost sixty when the child completes high school, creating a vast cultural and communication divide.",
          band9Snippet:
            "“Another significant drawback is the physical strain of late parenthood and the widening generational divide.”",
          modelParagraph:
            "Another significant drawback is the physical strain of late parenthood and the widening generational divide. Caring for hyperactive toddlers and coping with chronic sleep deprivation requires immense physical stamina that naturally diminishes as adults approach their forties. Moreover, a substantial age gap between parents and offspring can hinder mutual cultural understanding and communication. For instance, a parent who conceives at thirty-eight will be approaching retirement when their child graduates from secondary school, leaving them with less energy to participate in their child's athletic milestones and fewer years to bond with future grandchildren.",
          examinerNotes:
            "Very human and realistic. Relates to daily energy levels and long-term family relationships."
        },
        {
          id: "body-disadv-reason3",
          badge: "Reason 3 • Population Aging",
          title: "Plummeting Birth Rates & National Economic Contraction",
          mainReason:
            "Delaying marriage leads to smaller family sizes, causing national birth rates to plummet and creating an aging society.",
          supportingReasons:
            "When adults wait until their thirties to have children, biological time limits mean most have only one or two children instead of three or four. This causes national birth rates to drop below replacement level (2.1), leaving countries with a shrinking workforce unable to pay for pensions and healthcare for growing elderly populations.",
          example:
            "Countries like South Korea, Japan, and Italy, where the average marriage age exceeds thirty-one, are now experiencing severe labor shortages and closed elementary schools.",
          band9Snippet:
            "“From a broader societal perspective, widespread delays in family formation exacerbate severe demographic aging and workforce contraction.”",
          modelParagraph:
            "From a broader societal perspective, widespread delays in family formation exacerbate severe demographic aging and workforce contraction. Couples who postpone parenthood into their thirties inevitably have fewer children due to biological time limits, causing national birth rates to plummet below the replacement threshold. This creates a top-heavy demographic pyramid with a dwindling workforce struggling to fund the soaring pension and healthcare liabilities of an expanding elderly population. For instance, countries such as South Korea and Japan, where average marriage ages now exceed thirty-one, are currently grappling with labor shortages, rural depopulation, and unsustainable social security deficits.",
          examinerNotes:
            "Broad macroeconomic and demographic argument that connects delayed marriage to global issues."
        },
        {
          id: "body-disadv-reason4",
          badge: "Reason 4 • Double Caring Burden",
          title: "Simultaneously Caring for Young Children & Ailing Elderly Parents",
          mainReason:
            "Having children later in life coincides directly with the period when one's own elderly parents require intensive care and medical support.",
          supportingReasons:
            "When an adult has a toddler at thirty-eight, their own parents are typically in their seventies and developing chronic illnesses. This traps middle-aged adults in the exhausting 'sandwich generation,' forced to juggle career peaks, young children, and frail aging parents at the same time.",
          example:
            "Many forty-year-olds face severe emotional and financial burnout from managing preschool drop-offs alongside hospital visits for elderly parents suffering from dementia or mobility loss.",
          band9Snippet:
            "“Lastly, postponing childbirth frequently subjects adults to the grueling emotional and logistical burdens of the 'sandwich generation.'”",
          modelParagraph:
            "Lastly, postponing childbirth frequently subjects adults to the grueling emotional and logistical burdens of the 'sandwich generation.' When adults delay having children until their late thirties, their own parents are typically entering their seventies and suffering from chronic age-related ailments. Consequently, middle-aged adults find themselves squeezed between the relentless demands of rearing young toddlers and the exhaustive duties of providing eldercare for ailing parents. This dual caretaking burden causes acute psychological burnout, marital friction, and severe financial strain.",
          examinerNotes:
            "Deep psychological and sociological insight into modern family pressures."
        }
      ]
    }
  ],

  vocabList: [
    {
      word: "socio-economic independence",
      meaning:
        "The state of possessing sufficient personal wealth, professional stability, and material autonomy to live without financial reliance on others.",
      example:
        "Delaying marriage allows young adults to establish complete socio-economic independence before undertaking the responsibilities of child-rearing."
    },
    {
      word: "advanced maternal age",
      meaning:
        "A clinical term used in obstetrics referring to women who become pregnant at age 35 or older, associated with increased physiological risks.",
      example:
        "Pregnancies categorized as advanced maternal age require heightened medical vigilance to prevent gestational complications."
    },
    {
      word: "demographic contraction",
      meaning:
        "A sustained reduction in a nation's total population size accompanied by a shrinking proportion of young working-age citizens.",
      example:
        "Widespread postponement of childbearing has accelerated demographic contraction in nations like Japan and South Korea."
    },
    {
      word: "assisted reproductive technology",
      meaning:
        "Medical procedures such as IVF and egg freezing designed to achieve pregnancy when natural conception is hindered by age or biological factors.",
      example:
        "Couples who postpone family formation past age thirty-five increasingly rely on assisted reproductive technology to overcome fertility obstacles."
    },
    {
      word: "the sandwich generation",
      meaning:
        "A cohort of middle-aged adults simultaneously burdened with caring for their young children and supporting their aging, dependent parents.",
      example:
        "Older first-time parents frequently find themselves trapped in the sandwich generation, dividing time between toddlers and frail elderly parents."
    },
    {
      word: "marital longevity",
      meaning:
        "The durability, stability, and enduring survival of a marriage over a protracted period without divorce or separation.",
      example:
        "Greater emotional maturity in one's thirties is strongly correlated with increased marital longevity and lower rates of domestic breakdown."
    },
    {
      word: "emotional equilibrium",
      meaning:
        "A state of mental calmness, self-mastery, and psychological composure that enables patient and effective conflict resolution.",
      example:
        "Thirty-something parents generally display greater emotional equilibrium, shielding their offspring from impulsive, reactive parenting."
    },
    {
      word: "sub-replacement fertility",
      meaning:
        "A total fertility rate that falls below 2.1 children per woman, insufficient to keep a population stable without external immigration.",
      example:
        "Many developed economies have descended into sub-replacement fertility as young adults defer family formation indefinitely."
    },
    {
      word: "ovarian reserve depletion",
      meaning:
        "The progressive age-related decline in the quality and quantity of eggs in female ovaries, reducing natural conception likelihood.",
      example:
        "Women are biologically constrained by ovarian reserve depletion, which accelerates rapidly after thirty-five years of age."
    },
    {
      word: "psychological preparedness",
      meaning:
        "The mental and emotional readiness of an individual to willingly embrace the sacrifices and daily duties of parenthood.",
      example:
        "Having satisfied their youthful wanderlust in their twenties, older parents enter domestic life with superior psychological preparedness."
    }
  ],

  vocabHunt: [
    "socio-economic independence",
    "advanced maternal age",
    "demographic contraction",
    "assisted reproductive technology",
    "the sandwich generation",
    "marital longevity",
    "emotional equilibrium",
    "sub-replacement fertility",
    "ovarian reserve depletion",
    "psychological preparedness"
  ],

  consequences: [
    {
      type: "positive",
      title: "Financial Security & Accumulation of Family Wealth",
      desc: "Individuals in their 30s have stable professional careers, higher salaries, and savings, ensuring they can comfortably fund childcare, housing, and schooling without debt.",
      example: "Couples in their 30s purchasing a family home and absorbing healthcare and private tutoring costs comfortably.",
      level: "Advantage 1 (Step 6)",
      simpleTakeaway: "Financial stability: higher earnings and savings allow parents to provide superior living standards for their children.",
      collocation: "accumulated family wealth"
    },
    {
      type: "positive",
      title: "Uninterrupted Career Progression & Equal Opportunity",
      desc: "Delaying children allows young men and women to complete university degrees and achieve leadership promotions before taking parental leave.",
      example: "Female doctors, lawyers, and engineers attaining partnership or directorships in their early 30s before having babies.",
      level: "Advantage 2 (Step 6)",
      simpleTakeaway: "Career success: young adults reach senior professional milestones without domestic interruption.",
      collocation: "uninterrupted career trajectory"
    },
    {
      type: "positive",
      title: "Emotional Maturity & Drastically Lower Divorce Rates",
      desc: "30-year-olds know themselves, make deliberate partner choices, and handle domestic stress calmly, creating a harmonious upbringing for children.",
      example: "Sociological data confirming couples marrying after 30 have significantly lower divorce rates than those marrying at 21.",
      level: "Advantage 3 (Step 6)",
      simpleTakeaway: "Marital stability: emotional wisdom prevents impetuous relationship choices and lowers divorce rates.",
      collocation: "marital stability and longevity"
    },
    {
      type: "positive",
      title: "Youthful Freedom & Absence of Parental Resentment",
      desc: "Enjoying independence, travel, and personal hobbies in their 20s ensures adults enter family life willingly and without feelings of lost youth.",
      example: "Adults who traveled and explored creative interests in their 20s dedicating themselves wholeheartedly to family in their 30s.",
      level: "Advantage 4 (Step 6)",
      simpleTakeaway: "No lost youth: experiencing personal freedom first prevents resentment toward family commitments later.",
      collocation: "psychological life fulfillment"
    },
    {
      type: "negative",
      title: "Biological Fertility Decline & Pregnancy Complications",
      desc: "Natural reproductive capacity drops sharply after 30 and 35, increasing miscarriage risks, genetic disorders, and reliance on expensive IVF.",
      example: "Women in their late 30s facing higher risks of preeclampsia, gestational diabetes, and chromosomal conditions.",
      level: "Disadvantage 1 (Step 7)",
      simpleTakeaway: "Biological clock: natural fertility drops after 30, increasing medical complications and conception hurdles.",
      collocation: "age-related biological decline"
    },
    {
      type: "negative",
      title: "Reduced Physical Stamina & Widened Generational Gap",
      desc: "Older parents have less energy to keep up with active toddlers, and being 35-40 years older widens the cultural divide with their children.",
      example: "Parents approaching age 60 when their child finishes high school, leaving less shared time with future grandchildren.",
      level: "Disadvantage 2 (Step 7)",
      simpleTakeaway: "Physical fatigue: toddlers require intense stamina, and an older age gap widens the generational divide.",
      collocation: "widening generational divide"
    },
    {
      type: "negative",
      title: "National Population Aging & Shrinking Workforce",
      desc: "Couples who start having babies in their 30s have fewer children overall, causing national birth rates to plummet below replacement levels.",
      example: "South Korea and Japan facing closed schools and pension deficits due to average marriage ages exceeding 31.",
      level: "Disadvantage 3 (Step 7)",
      simpleTakeaway: "Demographic crisis: delaying children leads to smaller families, aging societies, and labor shortages.",
      collocation: "severe demographic contraction"
    },
    {
      type: "negative",
      title: "The Exhausting 'Sandwich Generation' Dilemma",
      desc: "Having children late means toddler care coincides directly with the onset of chronic illness in one's elderly parents in their 70s.",
      example: "40-year-olds juggling preschool runs while caring for frail parents suffering from dementia or mobility decline.",
      level: "Disadvantage 4 (Step 7)",
      simpleTakeaway: "Double burden: middle-aged adults are squeezed between raising young kids and caring for sick elderly parents.",
      collocation: "the sandwich generation strain"
    }
  ],

  evaluationArguments: [
    {
      title: "Socio-Economic Foundation & Child Well-being (Advantage)",
      reason: "Couples in their thirties have stable incomes and accumulated assets, ensuring a secure and prosperous environment for child development.",
      development: "Raising a child requires substantial capital for housing, healthcare, nutrition, and schooling. In their twenties, individuals struggle with student loans and entry-level wages, whereas thirty-somethings possess established earning power.",
      example: "Older parents are far more capable of purchasing a family home and financing extracurricular activities without chronic financial distress.",
      type: "argument",
      level: "Core Advantage 1",
      simpleTakeaway: "Economic foundation: accumulated wealth shields children from poverty and domestic stress.",
      collocation: "socio-economic stability"
    },
    {
      title: "Emotional Equilibrium & Marital Longevity (Advantage)",
      reason: "Thirty-somethings possess greater psychological self-awareness and life experience, resulting in durable marriages and patient parenting.",
      development: "Young adults in their early twenties are still developing their identity and often rush into marriages based on infatuation, leading to high divorce rates. By thirty, emotional resilience and communication skills foster peaceful domestic environments.",
      example: "Sociological data confirms that couples who marry in their thirties experience significantly lower divorce rates than those marrying in their early twenties.",
      type: "argument",
      level: "Core Advantage 2",
      simpleTakeaway: "Emotional maturity: wiser partner choices and calm parenting prevent divorce and domestic conflict.",
      collocation: "emotional equilibrium and maturity"
    },
    {
      title: "Biological Reproductive Decline & Clinical Risks (Disadvantage)",
      reason: "Human reproductive capacity declines significantly after age thirty, making conception difficult and increasing clinical complications.",
      development: "Female ovarian reserve drops sharply after thirty-five, while sperm quality also diminishes. Older pregnancies carry higher risks of gestational diabetes, preeclampsia, and chromosomal abnormalities like Down syndrome.",
      example: "Many couples in their late thirties are forced to undergo expensive, emotionally exhausting in-vitro fertilization (IVF) cycles.",
      type: "counterpoint",
      level: "Key Disadvantage 1",
      simpleTakeaway: "Biological fertility limits: natural conception declines sharply, raising medical risks.",
      collocation: "clinical fertility complications"
    },
    {
      title: "Demographic Aging & Shrinking Labor Force (Disadvantage)",
      reason: "Delaying marriage limits the biological window for having children, leading to smaller family sizes and national birth rate collapses.",
      development: "Couples who delay family formation typically have only one or two children, depressing national fertility rates below the 2.1 replacement rate and burdening social security systems.",
      example: "Japan, Italy, and South Korea face labor shortages and school closures as average marriage ages climb past thirty-one.",
      type: "counterpoint",
      level: "Key Disadvantage 2",
      simpleTakeaway: "Societal aging: lower birth rates shrink the future workforce and strain pension systems.",
      collocation: "accelerated demographic aging"
    }
  ],

  facultyAngles: [
    {
      title: "Developmental Psychology: Emotional Maturity vs. Impetuous Youth",
      development:
        "Psychologists emphasize that the prefrontal cortex and emotional self-regulation continue developing well into the mid-twenties. Thirty-somethings possess greater self-mastery, conflict-resolution capacity, and patience, leading to significantly lower divorce rates and nurturing parenting."
    },
    {
      title: "Reproductive Biology & Obstetrics: The Inflexible Ovarian Clock",
      development:
        "Medical researchers note that human biology has not evolved as rapidly as modern social trends. Ovarian reserve and egg quality decline precipitously after thirty-five, dramatically raising the clinical incidence of conception difficulty, miscarriage, and chromosomal disorders."
    },
    {
      title: "Macroeconomics & Demography: The Threat of Inverted Age Pyramids",
      development:
        "Economists warn that when societies delay marriage into the thirties, the total fertility rate inevitably plunges below the replacement threshold, creating an inverted demographic pyramid where a shrinking workforce cannot support escalating healthcare and pension costs."
    }
  ],

  powerExpressions: [
    {
      expression: "career consolidation before domestic commitments",
      meaning: "Establishing professional status and seniority before taking on family responsibilities.",
      example: "Delaying marriage allows career consolidation before domestic commitments, fostering greater long-term earning power."
    },
    {
      expression: "the precariousness of youthful impetuousness",
      meaning: "The danger of making rushed, immature decisions in one's early twenties.",
      example: "Marrying in one's thirties protects couples from the precariousness of youthful impetuousness and subsequent divorce."
    },
    {
      expression: "biological realities versus socio-economic prudence",
      meaning: "The conflict between natural reproductive age limits and the practical need for financial stability.",
      example: "The decision to defer childbearing reflects an ongoing tension between biological realities and socio-economic prudence."
    },
    {
      expression: "advanced maternal age and fertility decline",
      meaning: "Medical terms describing pregnancy after thirty-five and the drop in reproductive capacity.",
      example: "Couples must remain cognizant of the clinical risks associated with advanced maternal age and fertility decline."
    },
    {
      expression: "the grueling demands of the sandwich generation",
      meaning: "The heavy burden of having to care for young children and elderly parents at the same time.",
      example: "Late-stage parenthood often subjects adults in their forties to the grueling demands of the sandwich generation."
    },
    {
      expression: "foster enduring domestic and marital harmony",
      meaning: "Create long-lasting peace, stability, and mutual understanding in the home.",
      example: "Greater emotional maturity in one's thirties serves to foster enduring domestic and marital harmony."
    },
    {
      expression: "decisively eclipse the biological caveats",
      meaning: "The socio-economic and psychological advantages far outweigh the medical concerns.",
      example: "The profound stability of mature parenthood decisively eclipses the biological caveats."
    }
  ],

  brainstormCards: [
    {
      question: "Why do young adults prioritize career and financial independence before marriage?",
      thinkingLens: "Economic Security & Housing Market Lens",
      selfCheck: "Did you explain that high housing and child-rearing costs require established savings and stable income?",
      idea: "Raising children is extremely expensive in modern economies. Young adults in their twenties face student debt and low starting wages, so delaying family life until their thirties enables them to buy a home, save money, and raise children without chronic economic anxiety."
    },
    {
      question: "How does greater psychological maturity in one's 30s reduce divorce and support parenting?",
      thinkingLens: "Psychological Development & Relationship Longevity Lens",
      selfCheck: "Did you contrast impulsive twenty-something relationships with patient, mature thirty-something communication?",
      idea: "People in their twenties are still discovering their identity and often marry impulsively. By age thirty, adults have greater emotional wisdom, understand their core values, choose compatible partners, and parent with calm patience, drastically reducing divorce rates."
    },
    {
      question: "What biological risks and fertility challenges arise when childbearing is delayed past 35?",
      thinkingLens: "Reproductive Biology & Clinical Obstetric Lens",
      selfCheck: "Did you explain natural ovarian reserve decline, genetic conditions, and the need for IVF?",
      idea: "Human fertility declines sharply after thirty, particularly for women. Deferring pregnancy past thirty-five increases the risk of conception failure, preeclampsia, and genetic conditions like Down syndrome, often requiring costly and emotionally painful IVF treatments."
    },
    {
      question: "Why do the socio-economic advantages of delayed parenthood decisively outweigh the drawbacks?",
      thinkingLens: "Overall Synthesis & Outweighing Stance Lens",
      selfCheck: "Did you explain that financial security and emotional stability last a lifetime, while medical risks can be managed?",
      idea: "While biological fertility decline is a real concern, modern assisted reproductive technology can assist conception, whereas financial destitution and marital breakdown cause irreversible harm to children. Therefore, the benefits of mature, solvent parenthood decisively prevail."
    }
  ],

  connectorsTier: {
    sTier: [
      "Foremost among the positive aspects of delaying marriage is that...",
      "Beyond individual financial security, emotional maturity fosters...",
      "Detractors, however, cogently emphasize the biological hazards of...",
      "Consequently, when weighed against the manageable reproductive caveats...",
      "This dichotomy underscores that while clinical challenges persist, the socio-economic dividends decisively prevail..."
    ],
    aTier: [
      "In stark contrast to the financial instability of one's early twenties,",
      "Furthermore, achieving professional consolidation enables both partners to...",
      "Nevertheless, one cannot dismiss the demographic repercussions of...",
      "In light of these considerations, the overriding merits of mature parenthood decisively overshadow..."
    ],
    bTier: [
      "On the one hand,",
      "On the other hand,",
      "In addition,",
      "Overall, the positive side is stronger than the negative side"
    ]
  },

  strategicLinkers: [
    {
      zone: "Paragraph Openers (Structural Roadmap)",
      badge: "Macro Signposting",
      placementRule: "Place strictly at Sentence 1 of each body paragraph to establish categorical focus.",
      items: [
        {
          phrase: "Foremost among the compelling merits of delaying family formation is...",
          functionDesc: "Initiates Body Paragraph 1 by introducing the strong-opinion advantage (financial security & career foundation).",
          example: "Foremost among the compelling merits of delaying family formation is the unprecedented economic stability and career foundation it affords aspiring parents."
        },
        {
          phrase: "Equally significant is the emotional maturity and marital resilience that thirty-somethings possess...",
          functionDesc: "Transitions smoothly into Body Paragraph 2 (strong-opinion advantage 2: psychological wisdom & parenting stability).",
          example: "Equally significant is the emotional maturity and marital resilience that thirty-somethings possess, which fosters durable partnerships and calm parenting."
        },
        {
          phrase: "On the other hand, detractors and medical specialists cogently point to the biological ramifications of this trend...",
          functionDesc: "Opens Body Paragraph 3 (non-opinion counterpoint / concession) with measured academic neutrality.",
          example: "On the other hand, detractors and medical specialists cogently point to the biological ramifications of this trend, most notably steep fertility decline and obstetric risks."
        }
      ]
    },
    {
      zone: "Internal Causal Chains (Reason → Elaboration)",
      badge: "Depth & Logic Flow",
      placementRule: "Use within body paragraphs between the main reason and supporting explanation.",
      items: [
        {
          phrase: "...which in turn shields the household from the chronic friction of debt and financial instability...",
          functionDesc: "Connects accumulated career savings directly to domestic harmony and child well-being.",
          example: "Couples in their thirties command higher salaries, which in turn shields the household from the chronic friction of debt and financial instability."
        },
        {
          phrase: "This emotional equilibrium prevents impetuous relationship choices, thereby drastically curbing...",
          functionDesc: "Explains how mature partner selection directly lowers divorce rates.",
          example: "This emotional equilibrium prevents impetuous relationship choices, thereby drastically curbing the risk of marital breakdown."
        },
        {
          phrase: "Owing to the precipitous age-related depletion of ovarian reserve and declining sperm motility...",
          functionDesc: "Grounds medical critique in precise reproductive biology.",
          example: "Owing to the precipitous age-related depletion of ovarian reserve and declining sperm motility, natural conception becomes increasingly problematic."
        }
      ]
    },
    {
      zone: "Evaluative Weighed Verdict (Concession → Decisive Stance)",
      badge: "Task Achievement 9",
      placementRule: "Use at the end of Body 3 or in the introduction/conclusion to establish clear weighting.",
      items: [
        {
          phrase: "While these reproductive caveats are undeniably serious, they are increasingly manageable through modern medicine, whereas...",
          functionDesc: "Acknowledges the counter-argument before decisively demonstrating why advantages prevail.",
          example: "While these reproductive caveats are undeniably serious, they are increasingly manageable through modern medicine, whereas financial destitution causes lasting trauma."
        },
        {
          phrase: "Consequently, the undeniable gains in family prosperity, career equity, and marital stability far eclipse...",
          functionDesc: "Delivers the definitive outweighing verdict in the conclusion.",
          example: "Consequently, the undeniable gains in family prosperity, career equity, and marital stability far eclipse the biological drawbacks."
        }
      ]
    }
  ],

  fluidVocab: [
    {
      word: "precipitous",
      pos: "adjective",
      meaning: "Dangerously steep or rapid in decline.",
      naturalCollocation: "a precipitous decline in fertility / precipitous drop",
      organicExample:
        "Women face a precipitous decline in natural fertility once they surpass thirty-five years of age.",
      mechanicalPitfall: "Do not use casually for small decreases; reserve for sharp, steep drops.",
      examinerInsight: "Demonstrates Band 9 lexical precision when discussing biological trends."
    },
    {
      word: "equanimity",
      pos: "noun",
      meaning: "Mental calmness, composure, and evenness of temper, especially in difficult situations.",
      naturalCollocation: "handle stress with equanimity / emotional equanimity",
      organicExample:
        "Older parents are far more capable of navigating toddler tantrums with patience and equanimity.",
      mechanicalPitfall: "Do not say 'have an equanimity'. It is an uncountable abstract noun.",
      examinerInsight: "Elevates Task Achievement by capturing psychological maturity in one precise term."
    },
    {
      word: "myopic",
      pos: "adjective",
      meaning: "Short-sighted; lacking long-term foresight or realistic planning.",
      naturalCollocation: "a myopic choice / myopic romantic impulse",
      organicExample:
        "Rushing into marriage in one's early twenties often represents a myopic decision that overlooks long-term financial reality.",
      mechanicalPitfall: "Avoid using it casually as a synonym for 'blind'. Use for lack of foresight.",
      examinerInsight: "Exemplifies high-level academic critique of impulsive youthful choices."
    },
    {
      word: "catalyze",
      pos: "verb",
      meaning: "To accelerate or initiate a transformative process.",
      naturalCollocation: "catalyze career advancement / catalyze demographic shift",
      organicExample:
        "Delaying family commitments can catalyze career advancement for ambitious female professionals.",
      mechanicalPitfall: "Do not use 'cause' repeatedly; use 'catalyze' when an external condition speeds up success.",
      examinerInsight: "Demonstrates sophisticated understanding of causal dynamics."
    },
    {
      word: "dichotomy",
      pos: "noun",
      meaning: "A division or contrast between two things that are represented as being opposed or entirely different.",
      naturalCollocation: "the dichotomy between biological limits and social aspirations",
      organicExample:
        "This trend illustrates the sharp dichotomy between biological reproductive limits and modern socio-economic aspirations.",
      mechanicalPitfall: "Ensure there are two clear contrasting elements before using 'dichotomy'.",
      examinerInsight: "Frames the prompt within a sophisticated academic conceptual model."
    },
    {
      word: "subsume",
      pos: "verb",
      meaning: "To include, absorb, or incorporate within something larger or more comprehensive.",
      naturalCollocation: "be subsumed by domestic duties",
      organicExample:
        "Young adults in their twenties fear having their personal ambitions completely subsumed by domestic duties.",
      mechanicalPitfall: "Ensure correct passive or active usage with preposition 'by' or 'under'.",
      examinerInsight: "Band 9 precision for describing how individual identity can be overwhelmed by early family burdens."
    }
  ]
};