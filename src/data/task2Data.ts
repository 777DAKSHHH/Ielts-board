import { VocabItem } from "./task1Data";

export interface ConsequenceItem {
  type: "positive" | "negative";
  title: string;
  desc: string;
  example: string;
}

export interface EvaluationArgument {
  title: string;
  reason: string;
  development: string;
  example: string;
  type: "argument" | "counterpoint";
}

export interface FacultyAngle {
  title: string;
  development: string;
}

export interface BrainstormCard {
  question: string;
  thinkingLens: string;
  selfCheck: string;
  idea: string;
}

export interface Task2Data {
  id: string;
  taskType: string;
  title: string;
  questionText: string;
  audioUrl: string;
  timingSeconds: number;
  sampleIntro: string;
  sampleConclusion: string;
  vocabList: VocabItem[];
  vocabHunt: string[];
  consequences: ConsequenceItem[];
  evaluationArguments: EvaluationArgument[];
  facultyAngles: FacultyAngle[];
  powerExpressions: {
    expression: string;
    meaning: string;
    example: string;
  }[];
  brainstormCards: BrainstormCard[];
  connectorsTier: {
    sTier: string[];
    aTier: string[];
    bTier: string[];
  };
}

export const TASK2_DATA: Task2Data = {
  id: "anti-ageing-products-task2",

  taskType: "Hybrid: Consequences + Good/Bad",

  title: "The Trend Towards Looking Younger",

  questionText:
    "Nowadays it is possible for people to buy many products or pay for treatments that help them look younger.\n\nWhat are the consequences of this trend?\nIs this a good or a bad thing?",

  audioUrl: "materials/Staying_Young_as_a_Survival_Tactic.m4a",

  timingSeconds: 180,

  sampleIntro:
    "The growing availability of cosmetic products and treatments designed to maintain a youthful appearance has made attempts to delay the visible signs of ageing increasingly commonplace. While this development can enhance people's confidence and provide greater freedom of personal choice, I believe its wider consequences are predominantly negative because it can intensify appearance-related pressure and unrealistic expectations about ageing.",

  sampleConclusion:
    "In conclusion, the growing accessibility of anti-ageing products and treatments can help some individuals feel more confident about their appearance and exercise greater control over their personal choices. Nevertheless, the resulting pressure to maintain a youthful appearance, together with unrealistic expectations about ageing, makes this trend more detrimental than beneficial overall.",

  vocabList: [
    {
      word: "proliferation of",
      meaning: "A rapid increase or spread of something.",
      example:
        "The proliferation of anti-ageing products has changed attitudes towards ageing.",
    },
    {
      word: "appearance-conscious",
      meaning: "Highly concerned about appearance.",
      example:
        "Modern societies are becoming increasingly appearance-conscious.",
    },
    {
      word: "age-related changes",
      meaning: "Natural physical changes associated with ageing.",
      example:
        "People may become dissatisfied with normal age-related changes.",
    },
    {
      word: "cultivate unrealistic expectations",
      meaning:
        "Develop or encourage ideas that are not realistic.",
      example:
        "Social media can cultivate unrealistic expectations about youthful appearance.",
    },
    {
      word: "commodify ageing",
      meaning:
        "Turn ageing into something that can be commercially exploited.",
      example:
        "The beauty industry can commodify ageing by presenting natural changes as problems requiring products.",
    },
    {
      word: "perpetuate an ideal",
      meaning:
        "Cause an ideal or belief to continue.",
      example:
        "Advertising may perpetuate an ideal of perpetual youth.",
    },
    {
      word: "succumb to pressure",
      meaning:
        "Give in to pressure from other people or society.",
      example:
        "Some consumers may succumb to social pressure to maintain a youthful appearance.",
    },
    {
      word: "normalise cosmetic intervention",
      meaning:
        "Make cosmetic procedures seem ordinary or expected.",
      example:
        "Widespread treatment can normalise cosmetic intervention at increasingly younger ages.",
    },
    {
      word: "acceptance of natural ageing",
      meaning:
        "Willingness to regard ageing as a normal part of life.",
      example:
        "Society should encourage greater acceptance of natural ageing.",
    },
    {
      word: "exercise personal autonomy",
      meaning:
        "Make one's own decisions about a matter.",
      example:
        "Adults should be free to exercise personal autonomy over their appearance.",
    },
  ],

  vocabHunt: [
    "proliferation of",
    "appearance-conscious",
    "cultivate unrealistic expectations",
    "commodify ageing",
    "perpetuate an ideal",
    "succumb to pressure",
    "normalise cosmetic intervention",
    "exercise personal autonomy",
  ],

  consequences: [
    {
      type: "positive",
      title: "Greater confidence",
      desc:
        "People who are unhappy with visible signs of ageing may feel more comfortable with their appearance after using cosmetic products or treatments.",
      example:
        "Someone concerned about wrinkles may use skincare or a non-surgical treatment and subsequently feel more confident at work or in social situations.",
    },
    {
      type: "positive",
      title: "Greater personal choice",
      desc:
        "Technological and cosmetic advances allow individuals to decide how they want to manage their appearance rather than simply accepting age-related changes.",
      example:
        "An individual can choose between skincare, cosmetic procedures or doing nothing according to their own preferences.",
    },
    {
      type: "negative",
      title: "Appearance-related pressure",
      desc:
        "As anti-ageing options become increasingly normalised, people may feel that looking older is undesirable and something that should be corrected.",
      example:
        "A middle-aged person may feel pressured to undergo cosmetic treatment because colleagues or social-media personalities appear significantly younger.",
    },
    {
      type: "negative",
      title: "Unrealistic expectations about ageing",
      desc:
        "Constant exposure to youthful-looking celebrities and edited online images can make natural ageing appear abnormal or unattractive.",
      example:
        "Someone may compare their appearance with heavily edited photographs and become dissatisfied with completely normal signs of ageing.",
    },
    {
      type: "negative",
      title: "Financial and social pressure",
      desc:
        "Repeated treatments can place financial strain on individuals while wider social expectations may make appearance maintenance feel necessary.",
      example:
        "Someone may repeatedly pay for cosmetic procedures while cutting back on savings or other household expenditure.",
    },
  ],

  /*
   * BALANCED GOOD / BAD EVALUATION BANK
   *
   * GOOD / POTENTIAL BENEFITS
   * 1. Greater confidence
   * 2. Personal autonomy
   * 3. Greater control over appearance
   * 4. Genuine personal satisfaction
   *
   * BAD / POTENTIAL DRAWBACKS
   * 1. Commercial pressure
   * 2. Financial burden
   * 3. Appearance-related social pressure
   * 4. Unrealistic expectations
   * 5. Negative attitudes towards ageing
   * 6. Workplace pressure
   */
  evaluationArguments: [
    {
      type: "counterpoint",
      title: "Greater confidence",
      reason:
        "Some individuals may feel uncomfortable about visible signs of ageing and may gain confidence after using products or treatments.",
      development:
        "If a person feels more comfortable with their appearance, this may improve their confidence in social or professional situations.",
      example:
        "Someone who is particularly concerned about wrinkles may use skincare or a non-surgical treatment and subsequently feel more confident at work or in social settings.",
    },

    {
      type: "counterpoint",
      title: "Personal autonomy",
      reason:
        "Adults should generally have the freedom to decide how they manage their own appearance.",
      development:
        "If a person voluntarily chooses a treatment and understands its costs and limitations, the availability of that choice can be considered a benefit.",
      example:
        "An individual may choose skincare, a cosmetic procedure or no intervention at all according to personal preferences.",
    },

    {
      type: "counterpoint",
      title: "Greater control over appearance",
      reason:
        "Technological and cosmetic advances give individuals more options for managing age-related changes.",
      development:
        "Rather than simply accepting visible changes, people can choose from a range of approaches depending on their preferences.",
      example:
        "A person may combine skincare, exercise and a cosmetic treatment to manage their appearance in a way that makes them feel comfortable.",
    },

    {
      type: "counterpoint",
      title: "Genuine personal satisfaction",
      reason:
        "Cosmetic treatments can provide a genuine psychological benefit when they are chosen freely rather than because of external pressure.",
      development:
        "For some people, satisfaction with their appearance may improve their overall confidence and sense of personal control.",
      example:
        "Someone who voluntarily chooses a treatment because it makes them feel happier about their appearance may experience a genuine personal benefit.",
    },

    {
      type: "argument",
      title: "Commercial pressure",
      reason:
        "The beauty industry has a financial incentive to convince consumers that ordinary signs of ageing are problems requiring correction.",
      development:
        "This can turn natural ageing into a source of insecurity and encourage repeated spending on products and procedures.",
      example:
        "A consumer may continually purchase increasingly expensive creams or treatments because advertisements suggest that visible ageing reflects poor self-care.",
    },

    {
      type: "argument",
      title: "Financial burden",
      reason:
        "Some treatments are expensive and may require repeated procedures to maintain their effects.",
      development:
        "People can end up spending substantial amounts of disposable income on appearance rather than more essential priorities.",
      example:
        "Someone may repeatedly pay for cosmetic procedures while simultaneously cutting back on savings or other household expenditure.",
    },

    {
      type: "argument",
      title: "Appearance-related social pressure",
      reason:
        "As anti-ageing treatments become increasingly normalised, people may feel that looking older is undesirable.",
      development:
        "This can make individuals feel that they must actively maintain a youthful appearance in order to fit social expectations.",
      example:
        "A middle-aged person may feel pressured to undergo cosmetic treatment because colleagues or social-media personalities appear significantly younger.",
    },

    {
      type: "argument",
      title: "Unrealistic expectations about ageing",
      reason:
        "Constant exposure to youthful-looking celebrities and edited online images can distort perceptions of normal ageing.",
      development:
        "People may begin to view ordinary age-related changes as unattractive or abnormal and become increasingly dissatisfied with their appearance.",
      example:
        "Someone may compare their appearance with heavily edited photographs and become dissatisfied with completely normal signs of ageing.",
    },

    {
      type: "argument",
      title: "Negative attitudes towards ageing",
      reason:
        "Normalising anti-ageing treatments may reinforce the idea that growing older is embarrassing or undesirable.",
      development:
        "This can reduce acceptance of natural ageing and place greater pressure on older people to appear younger.",
      example:
        "Older adults may feel that they are expected to maintain a youthful appearance because society increasingly associates youth with attractiveness and relevance.",
    },

    {
      type: "argument",
      title: "Workplace pressure",
      reason:
        "If youthful appearance becomes associated with professionalism or attractiveness, older employees may experience subtle pressure to conceal their age.",
      development:
        "This can create an unfair expectation that workers should maintain a particular appearance rather than being judged primarily on their abilities.",
      example:
        "An older employee may feel compelled to spend money on cosmetic treatments because they believe a younger appearance will help them fit workplace expectations.",
    },
  ],

  facultyAngles: [
    {
      title: "Employment implications",
      development:
        "If youthful appearance becomes associated with professionalism or attractiveness, older workers may experience subtle pressure to conceal their age.",
    },
    {
      title: "Intergenerational attitudes",
      development:
        "A culture that excessively celebrates youth may unintentionally portray older generations as less attractive, relevant or socially desirable.",
    },
    {
      title: "Medicalisation of normal ageing",
      development:
        "Ordinary biological changes may increasingly be treated as conditions requiring intervention rather than accepted as a normal part of life.",
    },
    {
      title: "Accessibility and inequality",
      development:
        "Expensive treatments may create a visible divide between people who can afford to maintain a youthful appearance and those who cannot.",
    },
    {
      title: "Psychological dependence",
      development:
        "Repeated cosmetic interventions may lead some consumers to become increasingly dissatisfied with their appearance and seek further procedures.",
    },
    {
      title: "Consumer freedom vs social pressure",
      development:
        "The availability of choice can be positive, but the same market can create pressure by constantly presenting ageing as a defect that should be corrected.",
    },
  ],

  powerExpressions: [
    {
      expression: "proliferation of",
      meaning: "rapid increase/spread",
      example:
        "The proliferation of anti-ageing products has changed attitudes towards ageing.",
    },
    {
      expression: "appearance-conscious",
      meaning: "highly concerned about appearance",
      example:
        "Modern societies are becoming increasingly appearance-conscious.",
    },
    {
      expression: "age-related changes",
      meaning: "natural changes associated with ageing",
      example:
        "People may become dissatisfied with normal age-related changes.",
    },
    {
      expression: "cultivate unrealistic expectations",
      meaning: "develop unrealistic ideas",
      example:
        "Social media can cultivate unrealistic expectations about youthful appearance.",
    },
    {
      expression: "commodify ageing",
      meaning: "turn ageing into something commercially exploited",
      example:
        "The beauty industry can commodify ageing by presenting natural changes as problems requiring products.",
    },
    {
      expression: "perpetuate an ideal",
      meaning: "cause an ideal to continue",
      example:
        "Advertising may perpetuate an ideal of perpetual youth.",
    },
    {
      expression: "succumb to pressure",
      meaning: "give in to pressure",
      example:
        "Some consumers may succumb to social pressure to maintain a youthful appearance.",
    },
    {
      expression: "normalise cosmetic intervention",
      meaning: "make cosmetic procedures seem ordinary/expected",
      example:
        "Widespread treatment can normalise cosmetic intervention at increasingly younger ages.",
    },
    {
      expression: "acceptance of natural ageing",
      meaning: "willingness to accept ageing as normal",
      example:
        "Society should encourage greater acceptance of natural ageing.",
    },
    {
      expression: "exercise personal autonomy",
      meaning: "make one's own decisions",
      example:
        "Adults should be free to exercise personal autonomy over their appearance.",
    },
  ],

  /*
   * ================================================================
   * GUIDED BRAINSTORM CHALLENGES
   * ================================================================
   *
   * The student sees:
   *
   * SIDE 1
   * Question
   *
   * SIDE 2
   * Thinking Lens
   *
   * SIDE 3
   * One Possible Developable Idea
   *
   * The third side deliberately does NOT say "the correct answer".
   * It is one possible direction students could have generated.
   */

  brainstormCards: [
    {
      question:
        "What is actually changing in society in this topic?",

      thinkingLens:
        "Describe the trend before judging it. Ask: what is becoming more available, common or socially visible?",

      selfCheck:
        "You should be able to state the trend in one neutral sentence without giving an opinion.",

      idea:
        "Anti-ageing products and treatments are becoming increasingly available and socially common, allowing more people to actively delay or disguise visible signs of ageing.",
    },

    {
      question:
        "Who might benefit personally from this trend, and why?",

      thinkingLens:
        "Think at the individual level first. Consider feelings, confidence, choice and control over appearance.",

      selfCheck:
        "Your point should explain a mechanism: trend → personal effect → why that effect matters.",

      idea:
        "Some people may gain greater confidence and feel more comfortable with their appearance, while also having greater personal choice over how they manage age-related changes.",
    },

    {
      question:
        "Could the same trend create pressure rather than freedom? How?",

      thinkingLens:
        "Look for the tension between voluntary choice and social expectations.",

      selfCheck:
        "A strong response identifies what creates the pressure and who may experience it.",

      idea:
        "As anti-ageing treatments become normalised, people may feel pressure to look younger because ageing can increasingly be presented as something undesirable that should be corrected.",
    },

    {
      question:
        "Who has a financial incentive to encourage people to look younger?",

      thinkingLens:
        "Move from the individual to the market. Ask who benefits when people see ageing as a problem to solve.",

      selfCheck:
        "Do not stop at 'companies make money'; explain how marketing can influence behaviour.",

      idea:
        "The beauty industry has a financial incentive to present ordinary signs of ageing as problems requiring correction, which can create insecurity and encourage repeated purchases.",
    },

    {
      question:
        "What happens if appearance becomes an ongoing expense?",

      thinkingLens:
        "Explore repeated costs rather than only the price of one product or treatment.",

      selfCheck:
        "Consider opportunity cost: what else might the money have been used for?",

      idea:
        "Repeated cosmetic products and procedures can create a substantial financial burden, causing people to spend disposable income on appearance instead of savings or other essential priorities.",
    },

    {
      question:
        "How could social media change people's expectations of normal ageing?",

      thinkingLens:
        "Think about edited images, celebrity culture, comparison and what people begin to regard as normal.",

      selfCheck:
        "Link exposure to images with a change in expectations, then to a consequence.",

      idea:
        "Constant exposure to youthful-looking celebrities and edited online images can cultivate unrealistic expectations, making normal age-related changes appear unattractive or abnormal.",
    },

    {
      question:
        "Could this affect older people at work or in wider society?",

      thinkingLens:
        "Look beyond beauty and consider employability, professionalism, attractiveness and age-related stereotypes.",

      selfCheck:
        "Your idea should identify a social setting and explain the pressure or attitude created there.",

      idea:
        "If youthful appearance becomes associated with professionalism or attractiveness, older workers may experience subtle pressure to conceal their age or maintain a younger appearance.",
    },

    {
      question:
        "What could happen if society increasingly treats natural ageing as a defect?",

      thinkingLens:
        "Explore cultural attitudes and whether normal biological changes become something people feel they must hide.",

      selfCheck:
        "Distinguish the change in attitude from its psychological or social consequence.",

      idea:
        "Treating natural ageing as a defect can reduce acceptance of ageing and reinforce the idea that growing older is embarrassing or undesirable.",
    },

    {
      question:
        "Is the availability of a treatment itself the problem, or could the pressure to use it be the problem?",

      thinkingLens:
        "Test both sides instead of assuming every cosmetic treatment is harmful.",

      selfCheck:
        "A nuanced answer can recognise personal autonomy while still evaluating social pressure.",

      idea:
        "The availability of anti-ageing treatments is not necessarily harmful in itself; the more significant concern is when social or commercial pressure makes people feel they must use them to conform to a youthful ideal.",
    },

    {
      question:
        "Choose two consequences and decide which one is easier to develop with a reason and example. Why?",

      thinkingLens:
        "Practise exam strategy: choose ideas you can explain, not merely ideas that sound impressive.",

      selfCheck:
        "You should be able to produce: point → why/how → concrete example → consequence.",

      idea:
        "Strong developable directions include confidence and personal autonomy on the positive side, and appearance pressure or financial burden on the negative side, because each can be developed through a clear cause-and-effect chain.",
    },
  ],

  connectorsTier: {
    sTier: [
      "Nevertheless",
      "The key issue is not",
      "Predominantly",
      "More detrimental than beneficial",
    ],

    aTier: [
      "Consequently",
      "Furthermore",
      "In contrast",
      "Conversely",
    ],

    bTier: [
      "Also",
      "Because of this",
      "In conclusion",
    ],
  },
};