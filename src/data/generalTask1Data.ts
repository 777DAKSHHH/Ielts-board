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
    category: "Museum Exhibits" | "Personal Impressions" | "Informal Conversational" | "Narrative Setting";
  }[];
  architectureRevision?: {
    step: string;
    stage: string;
    badgeColor: string;
    bgColor: string;
    borderColor: string;
    textColor: string;
    summary: string;
  }[];
}

export const GENERAL_TASK1_DATA: GeneralTask1Data = {
  id: "general-task1-recent-museum-visit-friend",
  taskType: "IELTS General Training • Writing Task 1",
  letterType: "Informal",
  title: "Letter to a Friend About a Recent Museum Visit",
  questionText:
    "WEEK 21\n\nWEDNESDAY (Informal)\nYou have recently visited a museum. Write a letter to your friend (him/her) about the museum you have visited. In your letter,\n• When and where you went\n• What you saw there\n• How you felt about it",
  salutation: "Dear Sam,",
  signoff: "Warmly,",
  senderName: "Alex",
  wordCount: 215,

  architectureRevision: [
    {
      step: "1. Salutation & Opening",
      stage: "Friendly Check-in & Energetic Hook (Para 1)",
      badgeColor: "#9333ea",
      bgColor: "#faf5ff",
      borderColor: "#e9d5ff",
      textColor: "#6b21a8",
      summary: "Warm informal greeting ('Dear Sam,') + friendly catch-up inquiry + enthusiastic reason for dropping a quick line about the weekend excursion."
    },
    {
      step: "2. Body Para 1 (Bullet 1)",
      stage: "When & Where You Went",
      badgeColor: "#2563eb",
      bgColor: "#eff6ff",
      borderColor: "#bfdbfe",
      textColor: "#1d4ed8",
      summary: "Point: Spontaneous trip last Saturday morning → Setting: National Science & Aerospace Museum in city center → Atmosphere: Arrived early to beat weekend crowds."
    },
    {
      step: "3. Body Para 2 (Bullet 2)",
      stage: "What You Saw There",
      badgeColor: "#ea580c",
      bgColor: "#fff7ed",
      borderColor: "#fed7aa",
      textColor: "#c2410c",
      summary: "Centerpiece: Authentic Apollo lunar command module, genuine moon rocks & vintage suits → Interactive: Supersonic VR flight simulator & robotics wing."
    },
    {
      step: "4. Body Para 3 (Bullet 3)",
      stage: "How You Felt About It",
      badgeColor: "#059669",
      bgColor: "#ecfdf5",
      borderColor: "#a7f3d0",
      textColor: "#047857",
      summary: "Personal Reaction: Completely spellbound; colossal spacecraft replicas gave goosebumps → Friend Connection: Knew friend would love the aeronautics exhibits."
    },
    {
      step: "5. Closing & Sign-off",
      stage: "Social Call to Action & Sign-off (Para 5)",
      badgeColor: "#0f172a",
      bgColor: "#f8fafc",
      borderColor: "#cbd5e1",
      textColor: "#0f172a",
      summary: "Call to Action: Suggesting a joint museum visit next time in town + coffee catch-up → Informal Sign-off: 'Warmly,' + first name only ('Alex')."
    }
  ],

  pptFormatRules: [
    {
      stage: "1. Salutation",
      description: "Informal friendly greeting using first name only (Dear [First Name],)",
      specificRule: "Never use formal 'Dear Mr. Smith' or 'Dear Sir/Madam' when writing to a personal friend."
    },
    {
      stage: "2. Opening (Paragraph 1)",
      description: "Warm conversational social opening & enthusiastic reason for writing.",
      specificRule: "Enquire warmly about their life and set an energetic narrative hook: 'I hope you're having a brilliant week! I'm dropping you a quick line because I had the most incredible weekend...'"
    },
    {
      stage: "3. Body Para 1 (Bullet 1)",
      description: "When and where you went (time, setting, travel circumstance).",
      specificRule: "Set a clear scene: specify the day/time, the exact name and location of the museum, and why you decided to go on a whim."
    },
    {
      stage: "4. Body Para 2 (Bullet 2)",
      description: "What you saw there (sensory details, centerpiece artifacts, interactive exhibits).",
      specificRule: "Provide vivid visual descriptions: historic spacecraft modules, lunar rock samples, flight simulators, or rare archival collections."
    },
    {
      stage: "5. Body Para 3 (Bullet 3)",
      description: "How you felt about it (emotional reaction & sharing the excitement with your friend).",
      specificRule: "Express genuine personal awe: goosebumps, feeling like stepping into a time machine, and eagerly insisting that you both visit together soon."
    },
    {
      stage: "6. Closing & Sign-off",
      description: "Warm conversational closing invitation + Informal sign-off with first name.",
      specificRule: "Suggest an upcoming meetup: 'Let me know when you're free next week...' + 'Warmly,' / 'Best,' + First name only ('Alex')."
    }
  ],

  bullets: [
    {
      id: "bullet-1",
      bulletNumber: 1,
      promptText: "When and where you went",
      targetParagraph: "Body Paragraph 1",
      linkerRule: "Narrative temporal opener (e.g. 'Last Saturday morning', 'On a spontaneous whim')",
      explanation:
        "Establish the exact setting and timing of your museum visit, detailing how you arrived early to beat the weekend rush.",
      modelExcerpt:
        "Last Saturday morning, I decided on a whim to visit the newly renovated National Science and Aerospace Museum in the city center. It was a crisp, sunny autumn morning, and I arrived right as the grand doors opened at ten, which meant I practically had the ground floor galleries all to myself before the weekend crowds arrived.",
      keyCollocations: [
        "decided on a whim",
        "newly renovated museum",
        "crisp sunny autumn morning",
        "ground floor galleries"
      ]
    },
    {
      id: "bullet-2",
      bulletNumber: 2,
      promptText: "What you saw there",
      targetParagraph: "Body Paragraph 2",
      linkerRule: "Descriptive sequencing linkers (e.g. 'The centerpiece was', 'Further inside', 'Aside from that')",
      explanation:
        "Highlight standout artifacts and interactive galleries, giving your friend sensory, vivid details of spacecraft replicas, lunar relics, and simulators.",
      modelExcerpt:
        "The exhibitions were truly out of this world. The centerpiece was an authentic Apollo lunar command module, surrounded by genuine moon rock samples and vintage astronaut suits. Further inside, there was a breathtaking interactive robotics wing and a state-of-the-art virtual reality flight simulator, where you could actually experience piloting a supersonic jet through a turbulent storm.",
      keyCollocations: [
        "out of this world",
        "authentic lunar command module",
        "genuine moon rock samples",
        "state-of-the-art flight simulator"
      ]
    },
    {
      id: "bullet-3",
      bulletNumber: 3,
      promptText: "How you felt about it",
      targetParagraph: "Body Paragraph 3",
      linkerRule: "Emotional reflection markers (e.g. 'Honestly, I was completely spellbound', 'It gave me goosebumps')",
      explanation:
        "Share your genuine enthusiasm and intellectual wonder, explaining why the experience resonated so deeply and why your friend would love it.",
      modelExcerpt:
        "Honestly, I was completely spellbound the entire time. Standing beneath those colossal spacecraft replicas gave me goosebumps—it felt like stepping straight into a time machine. I couldn't stop thinking about how much you would have enjoyed the aeronautics section, and you know how rarely I get this excited about weekend excursions!",
      keyCollocations: [
        "completely spellbound",
        "gave me goosebumps",
        "stepping into a time machine",
        "colossal spacecraft replicas"
      ]
    }
  ],

  paragraphs: [
    {
      id: "opening",
      title: "Opening Paragraph: Friendly Social Greeting & Hook",
      purpose: "Warm social opening + Enthusiastic reason for dropping a letter",
      text: "I hope you're having a brilliant week! It feels like ages since we last caught up properly. I'm dropping you a quick line because I had the most incredible weekend, and knowing how much you love history and science, I just had to tell you about it!",
      wordCount: 47,
      ruleHighlight: "Informal tone: warm conversational warmth, natural contractions ('I'm', 'you're'), and energetic hook."
    },
    {
      id: "body1",
      title: "Body Paragraph 1: When & Where You Went (Bullet 1)",
      purpose: "Detail the timing, setting, and spontaneous decision to visit",
      bulletRef: 1,
      text: "Last Saturday morning, I decided on a whim to visit the newly renovated National Science and Aerospace Museum in the city center. It was a crisp, sunny autumn morning, and I arrived right as the grand doors opened at ten, which meant I practically had the ground floor galleries all to myself before the weekend crowds arrived.",
      wordCount: 57,
      ruleHighlight: "Bullet 1 covered: specifies last Saturday morning, city center location, and opening atmosphere."
    },
    {
      id: "body2",
      title: "Body Paragraph 2: What You Saw (Bullet 2)",
      purpose: "Vivid, sensory description of exhibits, lunar modules & flight simulators",
      bulletRef: 2,
      text: "The exhibitions were truly out of this world. The centerpiece was an authentic Apollo lunar command module, surrounded by genuine moon rock samples and vintage astronaut suits. Further inside, there was a breathtaking interactive robotics wing and a state-of-the-art virtual reality flight simulator, where you could actually experience piloting a supersonic jet through a turbulent storm.",
      wordCount: 57,
      ruleHighlight: "Bullet 2 covered: rich descriptions of Apollo spacecraft, lunar rocks, and interactive VR flight simulators."
    },
    {
      id: "body3",
      title: "Body Paragraph 3: Personal Emotional Impression (Bullet 3)",
      purpose: "Express awe, emotional reaction, and enthusiastic friend connection",
      bulletRef: 3,
      text: "Honestly, I was completely spellbound the entire time. Standing beneath those colossal spacecraft replicas gave me goosebumps—it felt like stepping straight into a time machine. I couldn't stop thinking about how much you would have enjoyed the aeronautics section, and you know how rarely I get this excited about weekend excursions!",
      wordCount: 53,
      ruleHighlight: "Bullet 3 covered: authentic informal idioms ('spellbound', 'gave me goosebumps') showing intense personal reaction."
    },
    {
      id: "closing",
      title: "Closing Paragraph & Friendly Sign-off",
      purpose: "Enthusiastic proposal to visit together + Informal closing sign-off",
      text: "We definitely need to plan a visit together the next time you're in town. Let me know what your schedule looks like next week so we can grab a coffee and catch up properly.\n\nWarmly,\nAlex",
      wordCount: 35,
      ruleHighlight: "Informal sign-off: proactive invitation to meet up + 'Warmly,' + first name only ('Alex')."
    }
  ],

  modelLetter: `Dear Sam,

I hope you're having a brilliant week! It feels like ages since we last caught up properly. I'm dropping you a quick line because I had the most incredible weekend, and knowing how much you love history and science, I just had to tell you about it!

Last Saturday morning, I decided on a whim to visit the newly renovated National Science and Aerospace Museum in the city center. It was a crisp, sunny autumn morning, and I arrived right as the grand doors opened at ten, which meant I practically had the ground floor galleries all to myself before the weekend crowds arrived.

The exhibitions were truly out of this world. The centerpiece was an authentic Apollo lunar command module, surrounded by genuine moon rock samples and vintage astronaut suits. Further inside, there was a breathtaking interactive robotics wing and a state-of-the-art virtual reality flight simulator, where you could actually experience piloting a supersonic jet through a turbulent storm.

Honestly, I was completely spellbound the entire time. Standing beneath those colossal spacecraft replicas gave me goosebumps—it felt like stepping straight into a time machine. I couldn't stop thinking about how much you would have enjoyed the aeronautics section, and you know how rarely I get this excited about weekend excursions!

We definitely need to plan a visit together the next time you're in town. Let me know what your schedule looks like next week so we can grab a coffee and catch up properly.

Warmly,
Alex`,

  toneGuidelines: [
    {
      rule: "Use natural conversational contractions and emotional idioms",
      doExample: "I'm dropping you a quick line... / It gave me goosebumps!",
      dontExample: "I am writing this correspondence to communicate the museum exhibits."
    },
    {
      rule: "Keep salutation and sign-off warm and informal",
      doExample: "Dear Sam, ... Warmly, Alex",
      dontExample: "Dear Mr. Sam, ... Yours faithfully, D. Patel"
    },
    {
      rule: "Vivid, authentic sensory descriptions",
      doExample: "authentic Apollo command module, genuine moon rocks, supersonic VR flight simulator...",
      dontExample: "I saw some planes and historical objects."
    },
    {
      rule: "Engage your friend directly and suggest future plans",
      doExample: "We definitely need to plan a visit together next time you're in town!",
      dontExample: "The reader should consider visiting the facility."
    }
  ],

  vocabList: [
    {
      term: "Out of this World",
      definition: "Extremely impressive, enjoyable, or extraordinary.",
      example: "The aerospace exhibitions were truly out of this world.",
      category: "Personal Impressions"
    },
    {
      term: "Decided on a Whim",
      definition: "Made a sudden decision based on a spontaneous impulse rather than planning.",
      example: "I woke up early on Saturday and decided on a whim to visit the museum.",
      category: "Narrative Setting"
    },
    {
      term: "Colossal Replicas",
      definition: "Extremely large, exact copies or full-scale models of historic artifacts.",
      example: "Standing beneath the colossal rocket replicas was an awe-inspiring sight.",
      category: "Museum Exhibits"
    },
    {
      term: "Gave Me Goosebumps",
      definition: "Caused a physiological sensation of excitement, awe, or intense admiration.",
      example: "Seeing the authentic lunar module up close gave me genuine goosebumps.",
      category: "Personal Impressions"
    },
    {
      term: "Spellbound",
      definition: "Holding one's complete attention as if under a magic spell; deeply fascinated.",
      example: "I was completely spellbound wandering through the interactive planetary gallery.",
      category: "Personal Impressions"
    },
    {
      term: "State-of-the-Art",
      definition: "Using the most modern, sophisticated, and up-to-date technology available.",
      example: "The simulator utilized state-of-the-art virtual reality headsets.",
      category: "Museum Exhibits"
    },
    {
      term: "Drop a Quick Line",
      definition: "An informal idiom meaning to send a short friendly message or letter.",
      example: "I'm dropping you a quick line before my work week kicks into high gear.",
      category: "Informal Conversational"
    },
    {
      term: "Time Machine Effect",
      definition: "An immersive feeling of being transported backward or forward in history.",
      example: "The atmospheric archival lighting made it feel like stepping into a time machine.",
      category: "Personal Impressions"
    }
  ]
};
