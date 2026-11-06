export interface GeneralTask1Bullet {
  id: string;
  bulletNumber: number;
  promptText: string;
  targetParagraph: string;
  linkerRule: string;
  explanation: string;
  modelExcerpt: string;
  keyCollocations: string[];
}

export interface GeneralTask1Data {
  id: string;
  taskType: string;
  letterType: "Semi-Formal" | "Formal" | "Informal";
  title: string;
  questionText: string;
  salutation: string;
  signoff: string;
  senderName: string;
  wordCount: number;
  bullets: GeneralTask1Bullet[];
  paragraphs: {
    id: string;
    title: string;
    purpose: string;
    text: string;
    wordCount: number;
    bulletRef?: number;
    ruleHighlight?: string;
  }[];
  modelLetter: string;
  toneGuidelines: {
    rule: string;
    doExample: string;
    dontExample: string;
  }[];
  pptFormatRules: {
    stage: string;
    description: string;
    specificRule: string;
  }[];
  vocabList: {
    term: string;
    definition: string;
    example: string;
    category: "Festive Traditions" | "Cultural Significance" | "Personal Impressions" | "Informal Conversational";
  }[];
}

export const GENERAL_TASK1_DATA: GeneralTask1Data = {
  id: "general-task1-new-year-friend-project",
  taskType: "IELTS General Training • Writing Task 1",
  letterType: "Informal",
  title: "Helping a Friend with a College Project on New Year Celebrations",
  questionText:
    "You have had a friend who has asked for your help with a college project he/she is doing about celebrating New Year in a different country. Write a letter to your friend.\n\nIn your letter,\n• Say how important New Year is to people in your country\n• Describe how New Year is celebrated in your country\n• Explain what you like about New Year celebration in your country",
  salutation: "Dear Alex,",
  signoff: "Warm regards,",
  senderName: "Devang",
  wordCount: 195,

  pptFormatRules: [
    {
      stage: "1. Salutation",
      description: "Informal friendly greeting using first name only (Dear [First Name],)",
      specificRule: "Never use formal 'Dear Mr. Smith' or 'Dear Sir/Madam' when writing to a personal friend."
    },
    {
      stage: "2. Opening (Paragraph 1)",
      description: "Warm social opening & immediate acknowledgement of the college project request.",
      specificRule: "Enquire warmly about their wellbeing and enthusiastically offer assistance: 'It was fantastic to hear from you... I would love to help with your college project...'"
    },
    {
      stage: "3. Body Para 1 (Bullet 1)",
      description: "Say how important New Year is to people in your country (cultural & spiritual significance).",
      specificRule: "Explain the deep-rooted cultural importance: renewal, spiritual fresh start, family bonding, and auspicious beginnings."
    },
    {
      stage: "4. Body Para 2 (Bullet 2)",
      description: "Describe how New Year is celebrated in your country (decorations, rituals, food, greetings).",
      specificRule: "Provide sensory, colorful details: thorough house cleaning, rangoli patterns, temple visits, blessings from elders ('Saal Mubarak'), and traditional festive sweets."
    },
    {
      stage: "5. Body Para 3 (Bullet 3)",
      description: "Explain what you personally like about New Year celebration in your country.",
      specificRule: "Highlight personal connection: the boundless warmth, forgiveness of past grudges, open-door hospitality, and sense of community harmony."
    },
    {
      stage: "6. Closing & Sign-off",
      description: "Warm concluding offer + Informal sign-off with first name.",
      specificRule: "Offer further project support: 'Let me know if you need photos or further details...' + 'Warm regards,' / 'Best wishes,' + First name only ('Devang')."
    }
  ],

  bullets: [
    {
      id: "bullet-1",
      bulletNumber: 1,
      promptText: "Say how important New Year is to people in your country",
      targetParagraph: "Body Paragraph 1",
      linkerRule: "Natural transition establishing cultural context (e.g. 'To begin with', 'In my country')",
      explanation:
        "Frame the celebration within Indian / Gujarati culture (Bestu Varas / Diwali season), highlighting how it symbolizes spiritual renewal, financial closure, and family unity across generations.",
      modelExcerpt:
        "In India, and particularly in my home state of Gujarat, New Year—known locally as Bestu Varas—is celebrated right after Diwali and holds immense spiritual and cultural importance. It symbolizes a clean slate, marking a time when people close old financial accounts, forgive past grievances, and welcome prosperity and positivity into their lives. For families, it is by far the most anticipated time of the year.",
      keyCollocations: [
        "spiritual and cultural importance",
        "symbolizes a clean slate",
        "forgive past grievances",
        "welcome prosperity"
      ]
    },
    {
      id: "bullet-2",
      bulletNumber: 2,
      promptText: "Describe how New Year is celebrated in your country",
      targetParagraph: "Body Paragraph 2",
      linkerRule: "Descriptive sequencing linkers (e.g. 'The festivities begin with', 'On the day itself', 'Furthermore')",
      explanation:
        "Walk your friend through authentic visual customs: cleaning and decorating homes with rangoli and diyas, donning new clothes, touching elders' feet for blessings, visiting neighbors, and relishing festive treats.",
      modelExcerpt:
        "The preparations start days beforehand with rigorous house cleaning and decorating front porches with intricate, colorful rangoli patterns and oil lamps. On New Year’s Day, we wake up at dawn, dress in vibrant traditional attire, and head to local temples for early morning prayers. Afterwards, we visit relatives and neighbors to exchange the traditional greeting of 'Saal Mubarak' (Happy New Year) and touch the feet of our elders to receive their blessings. The day is filled with bursting fireworks and sharing lavish homemade sweets such as kaju katli and ghughra.",
      keyCollocations: [
        "intricate rangoli patterns",
        "vibrant traditional attire",
        "touch the feet of our elders",
        "lavish homemade sweets"
      ]
    },
    {
      id: "bullet-3",
      bulletNumber: 3,
      promptText: "Explain what you like about New Year celebration in your country",
      targetParagraph: "Body Paragraph 3",
      linkerRule: "Personal reflection marker (e.g. 'What I love most about it is', 'The aspect I cherish the most')",
      explanation:
        "Express genuine heartfelt appreciation for the open-door hospitality, the spirit of universal reconciliation, and the joyous community vibe where everyone feels included.",
      modelExcerpt:
        "What I cherish most about our New Year is the sheer warmth and open-hearted hospitality. Front doors are kept wide open all day, and anyone can drop by without an appointment to celebrate and share food. There is no lingering bitterness—old disputes are dissolved with warm hugs, creating an infectious sense of harmony that brings the entire community together.",
      keyCollocations: [
        "open-hearted hospitality",
        "sheer warmth",
        "drop by without an appointment",
        "infectious sense of harmony"
      ]
    }
  ],

  paragraphs: [
    {
      id: "opening",
      title: "Opening Paragraph: Friendly Social Opening & Project Acknowledgement",
      purpose: "Warm social greeting + Enthusiastic response to your friend's project request",
      text: "It was wonderful to hear from you! I hope everything is going well with your studies. I would be more than happy to help you with your college project on international New Year celebrations—it sounds like a fascinating topic!",
      wordCount: 41,
      ruleHighlight: "Informal tone: enthusiastic, supportive, and immediately addressing the friend's request."
    },
    {
      id: "body1",
      title: "Body Paragraph 1: Importance of New Year (Bullet 1)",
      purpose: "Say how important New Year is to people in your country",
      bulletRef: 1,
      text: "In India, and particularly in my home state of Gujarat, New Year—known locally as Bestu Varas—is celebrated right after Diwali and holds immense spiritual and cultural importance. It symbolizes a clean slate, marking a time when people close old financial accounts, forgive past grievances, and welcome prosperity and positivity into their lives. For families, it is by far the most anticipated time of the year.",
      wordCount: 68,
      ruleHighlight: "Bullet 1 covered: clearly explains cultural significance, renewal, and spiritual weight."
    },
    {
      id: "body2",
      title: "Body Paragraph 2: Celebration Customs & Traditions (Bullet 2)",
      purpose: "Describe how New Year is celebrated in your country",
      bulletRef: 2,
      text: "The preparations start days beforehand with rigorous house cleaning and decorating front porches with intricate, colorful rangoli patterns and oil lamps. On New Year’s Day, we wake up at dawn, dress in vibrant traditional attire, and head to local temples for early morning prayers. Afterwards, we visit relatives and neighbors to exchange the traditional greeting of 'Saal Mubarak' (Happy New Year) and touch the feet of our elders to receive their blessings. The day is filled with bursting fireworks and sharing lavish homemade sweets such as kaju katli and ghughra.",
      wordCount: 92,
      ruleHighlight: "Bullet 2 covered: rich sensory descriptions of decorations, rituals, greetings, and festive food."
    },
    {
      id: "body3",
      title: "Body Paragraph 3: Personal Highlight & Community Spirit (Bullet 3)",
      purpose: "Explain what you like about New Year celebration in your country",
      bulletRef: 3,
      text: "What I cherish most about our New Year is the sheer warmth and open-hearted hospitality. Front doors are kept wide open all day, and anyone can drop by without an appointment to celebrate and share food. There is no lingering bitterness—old disputes are dissolved with warm hugs, creating an infectious sense of harmony that brings the entire community together.",
      wordCount: 61,
      ruleHighlight: "Bullet 3 covered: authentic personal reflection highlighting hospitality and community unity."
    },
    {
      id: "closing",
      title: "Closing Paragraph & Sign-off",
      purpose: "Offer further help + Warm closing sign-off with first name",
      text: "I really hope this gives you rich, authentic material for your project! Please let me know if you need any photographs or extra details. Best of luck with your presentation, and let's catch up soon!\n\nWarm regards,\nDevang",
      wordCount: 42,
      ruleHighlight: "Informal sign-off: friendly concluding offer + 'Warm regards,' + first name only."
    }
  ],

  modelLetter: `Dear Alex,

It was wonderful to hear from you! I hope everything is going well with your studies. I would be more than happy to help you with your college project on international New Year celebrations—it sounds like a fascinating topic!

In India, and particularly in my home state of Gujarat, New Year—known locally as Bestu Varas—is celebrated right after Diwali and holds immense spiritual and cultural importance. It symbolizes a clean slate, marking a time when people close old financial accounts, forgive past grievances, and welcome prosperity and positivity into their lives. For families, it is by far the most anticipated time of the year.

The preparations start days beforehand with rigorous house cleaning and decorating front porches with intricate, colorful rangoli patterns and oil lamps. On New Year’s Day, we wake up at dawn, dress in vibrant traditional attire, and head to local temples for early morning prayers. Afterwards, we visit relatives and neighbors to exchange the traditional greeting of 'Saal Mubarak' (Happy New Year) and touch the feet of our elders to receive their blessings. The day is filled with bursting fireworks and sharing lavish homemade sweets such as kaju katli and ghughra.

What I cherish most about our New Year is the sheer warmth and open-hearted hospitality. Front doors are kept wide open all day, and anyone can drop by without an appointment to celebrate and share food. There is no lingering bitterness—old disputes are dissolved with warm hugs, creating an infectious sense of harmony that brings the entire community together.

I really hope this gives you rich, authentic material for your project! Please let me know if you need any photographs or extra details. Best of luck with your presentation, and let's catch up soon!

Warm regards,
Devang`,

  toneGuidelines: [
    {
      rule: "Use natural conversational contractions and warmth",
      doExample: "I'd be more than happy to help you with your project...",
      dontExample: "I am writing this communication to render formal assistance regarding..."
    },
    {
      rule: "Keep salutation and sign-off informal",
      doExample: "Dear Alex, ... Warm regards, Devang",
      dontExample: "Dear Mr. Alex, ... Yours faithfully, D. Patel"
    },
    {
      rule: "Engage your friend with active enthusiasm",
      doExample: "It sounds like a fascinating topic! / What I cherish most is...",
      dontExample: "The prompt necessitates a description of the festive occurrences."
    },
    {
      rule: "Vivid, culturally authentic descriptions",
      doExample: "intricate rangoli patterns, oil lamps, touching elders' feet for blessings...",
      dontExample: "People do some decorations and eat food."
    }
  ],

  vocabList: [
    {
      term: "Bestu Varas",
      definition: "The Gujarati New Year celebrated immediately following the day of Diwali.",
      example: "Bestu Varas marks the start of the new fiscal and cultural calendar across Gujarat.",
      category: "Festive Traditions"
    },
    {
      term: "Clean Slate",
      definition: "A fresh beginning with all previous debts, grievances, or mistakes forgiven.",
      example: "The arrival of the New Year symbolizes a spiritual clean slate for families.",
      category: "Cultural Significance"
    },
    {
      term: "Saal Mubarak",
      definition: "Traditional festive greeting in Gujarati meaning 'Happy and Blessed New Year'.",
      example: "Neighbors warmly greet each other with hugs and exclaim 'Saal Mubarak!'.",
      category: "Festive Traditions"
    },
    {
      term: "Open-Hearted Hospitality",
      definition: "Generous, welcoming, and warm treatment of guests without formality.",
      example: "The open-hearted hospitality during New Year means anyone can visit without prior notice.",
      category: "Personal Impressions"
    },
    {
      term: "Infectious Harmony",
      definition: "A positive, joyful atmosphere that quickly spreads and influences everyone.",
      example: "The festivities create an infectious harmony that dissolves past misunderstandings.",
      category: "Personal Impressions"
    },
    {
      term: "Intricate Rangoli",
      definition: "Detailed, colorful floor art created at house entrances using colored powders.",
      example: "Front porches are adorned with intricate rangoli patterns to welcome prosperity.",
      category: "Festive Traditions"
    },
    {
      term: "Auspicious Beginnings",
      definition: "Promising success, good fortune, and favorable outcomes for the future.",
      example: "Families visit the temple at dawn to offer prayers for auspicious beginnings.",
      category: "Cultural Significance"
    },
    {
      term: "Drop By Without an Appointment",
      definition: "Informal, spontaneous visits demonstrating high social closeness.",
      example: "During New Year, relatives and neighbors drop by without an appointment to celebrate.",
      category: "Informal Conversational"
    }
  ]
};
