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
    category:
      | "Professional Etiquette"
      | "Internship & Learning"
      | "Corporate Operations"
      | "Formal Correspondence"
      | "Festive Traditions"
      | "Cultural Significance"
      | "Personal Impressions";
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
  id: "general-task1-world-food-festival-offer",
  taskType: "IELTS General Training • Writing Task 1",
  letterType: "Semi-Formal",
  title: "Semi-Formal Letter to Town Club Event Organiser",
  questionText:
    "WEDNESDAY (Semi Formal)\n\nYou have heard of the local town club organising an event to celebrate popular food from around the world. Write a letter to the event organiser. In your letter,\n• Offer to make a popular dish from your country\n• Describe what this dish is\n• Explain why it should be included in the event",
  salutation: "Dear Mr. Pritam,",
  signoff: "Warm regards,",
  senderName: "Arpit",
  wordCount: 295,

  architectureRevision: [
    {
      step: "1. Salutation & Opening",
      stage: "Semi-Formal Greeting & Event Commendation (Para 1)",
      badgeColor: "#1e3a8a",
      bgColor: "#eff6ff",
      borderColor: "#bfdbfe",
      textColor: "#1d4ed8",
      summary: "Polite salutation ('Dear Mr. Pritam,') + enthusiastic statement of purpose offering to volunteer culinary skills for the town club's international food celebration."
    },
    {
      step: "2. Body Para 1 (Bullet 1)",
      stage: "The National Dish Offer: Royal Dum Biryani",
      badgeColor: "#047857",
      bgColor: "#ecfdf5",
      borderColor: "#a7f3d0",
      textColor: "#047857",
      summary: "Proposing Indian Dum Biryani → Establishing its iconic cultural stature as the centerpiece of Indian hospitality, festivals, and communal banquets."
    },
    {
      step: "3. Body Para 2 (Bullet 2)",
      stage: "Sensory Description & Traditional 'Dum' Methodology",
      badgeColor: "#d97706",
      bgColor: "#fffbeb",
      borderColor: "#fde68a",
      textColor: "#b45309",
      summary: "Elaborating on aged basmati rice, aromatic spices (cardamom, saffron, cinnamon), layered marinated ingredients, and the sealed-steam slow-cooking technique."
    },
    {
      step: "4. Body Para 3 (Bullet 3)",
      stage: "Strategic Justification for Event Inclusion",
      badgeColor: "#4338ca",
      bgColor: "#eef2ff",
      borderColor: "#c7d2fe",
      textColor: "#3730a3",
      summary: "Highlighting universal flavor appeal, dietary versatility (vegetarian crowd-pleaser), scalable batch serving, and embodiment of multicultural fellowship."
    },
    {
      step: "5. Closing & Sign-off",
      stage: "Logistical Readiness & Semi-Formal Sign-off",
      badgeColor: "#0f172a",
      bgColor: "#f8fafc",
      borderColor: "#cbd5e1",
      textColor: "#0f172a",
      summary: "Proactive willingness to manage ingredients and equipment + respectful closing sign-off ('Warm regards,\nArpit')."
    }
  ],

  pptFormatRules: [
    {
      stage: "1. Salutation",
      description: "Semi-formal salutation using title and surname (Dear Mr. [Surname],)",
      specificRule: "When writing to an event organizer you do not know intimately, use 'Dear Mr. Pritam,' followed by a comma. Avoid overly casual greetings ('Hi Pritam') or cold formal formulas ('Dear Sir/Madam')."
    },
    {
      stage: "2. Opening (Paragraph 1)",
      description: "Courteous statement of purpose acknowledging the upcoming club event.",
      specificRule: "State why you are writing immediately: 'I am writing to you after learning about the upcoming international food festival organized by the town club... and would love to enthusiastically volunteer my culinary services...'"
    },
    {
      stage: "3. Body Para 1 (Bullet 1)",
      description: "Explicitly name the chosen dish and establish its cultural prestige.",
      specificRule: "Connect the dish to your homeland's celebratory culture: explain that Dum Biryani is the undisputed centerpiece of festive gatherings and community banquets in India."
    },
    {
      stage: "4. Body Para 2 (Bullet 2)",
      description: "Sensory depiction of ingredients, aromatics, and cooking methodology.",
      specificRule: "Detail specific culinary elements: aged basmati rice, whole spices (saffron, cardamom, cinnamon), the sealed-steam 'dum' slow-cooking technique, and accompaniments like cooling mint raita."
    },
    {
      stage: "5. Body Para 3 (Bullet 3)",
      description: "Persuasive justification for why the event needs this dish.",
      specificRule: "Provide three solid reasons: universal crowd appeal across age groups, ease of scalable batch serving, and perfect harmony with the festival's multicultural ethos."
    },
    {
      stage: "6. Closing & Sign-off",
      description: "Practical logistics offer + warm semi-formal sign-off.",
      specificRule: "Offer to handle ingredients and cookware independently, invite logistical discussion, and close with 'Warm regards,' followed by your name ('Arpit')."
    }
  ],

  bullets: [
    {
      id: "bullet-1",
      bulletNumber: 1,
      promptText: "Offer to make a popular dish from your country",
      targetParagraph: "Body Paragraph 1",
      linkerRule: "Enthusiastic offer markers (e.g. 'Specifically, I would like to offer to prepare...', 'In my home country,...')",
      explanation:
        "Name the specific traditional dish with pride, stating its cultural significance as a hallmark celebratory food in your native culture.",
      modelExcerpt:
        "Specifically, I would like to offer to cook a classic Indian Dum Biryani. In my home country, biryani is regarded as the undisputed pinnacle of celebratory cuisine, served at weddings, major festivals, and landmark community feasts. Offering this beloved national dish would allow attendees to experience a genuinely iconic culinary masterpiece that represents centuries of rich gastronomic heritage.",
      keyCollocations: [
        "offer to cook a classic",
        "undisputed pinnacle of celebratory cuisine",
        "landmark community feasts",
        "beloved national dish",
        "rich gastronomic heritage"
      ]
    },
    {
      id: "bullet-2",
      bulletNumber: 2,
      promptText: "Describe what this dish is",
      targetParagraph: "Body Paragraph 2",
      linkerRule: "Sensory and procedural transition linkers (e.g. 'For those unfamiliar with the recipe,...', 'Crucially, the pot is sealed...')",
      explanation:
        "Provide a mouth-watering description of the ingredients, whole aromatic spices, and traditional cooking technique (such as steam-sealing) along with classic accompaniments.",
      modelExcerpt:
        "For those unfamiliar with the recipe, Dum Biryani is a sumptuous, multi-layered rice delicacy consisting of aged, long-grain basmati rice and richly spiced marinated vegetables and cottage cheese. The ingredients are infused with fragrant whole spices—such as black cardamom, star anise, cinnamon quills, and saffron-soaked milk. Crucially, the pot is sealed with dough and slow-cooked over gentle embers—a traditional technique known as 'dum'—allowing the trapped steam to marry the flavors without scorching the ingredients. I will also serve it alongside a refreshing, cooling cucumber-mint raita.",
      keyCollocations: [
        "sumptuous multi-layered rice delicacy",
        "aged long-grain basmati rice",
        "fragrant whole spices",
        "sealed with dough and slow-cooked",
        "cooling cucumber-mint raita"
      ]
    },
    {
      id: "bullet-3",
      bulletNumber: 3,
      promptText: "Explain why it should be included in the event",
      targetParagraph: "Body Paragraph 3",
      linkerRule: "Persuasive argumentation linkers (e.g. 'There are several compelling reasons why...', 'Firstly,... Furthermore,... Most importantly,...')",
      explanation:
        "Give persuasive practical and cultural arguments: widespread crowd appeal, suitability for large crowds, inclusive dietary profile, and thematic alignment with international unity.",
      modelExcerpt:
        "There are several compelling reasons why Biryani would be an ideal addition to the town club's international lineup. Firstly, its harmonious balance of warmth and fragrance has proven universal appeal, making it an undeniable crowd-pleaser across all age groups. Furthermore, it is naturally wholesome, substantial, and easily prepared in large portions to feed substantial gatherings. Most importantly, biryani epitomizes the spirit of communal sharing and cultural exchange, which aligns seamlessly with the central vision of your world food event.",
      keyCollocations: [
        "ideal addition to the international lineup",
        "harmonious balance of warmth and fragrance",
        "undeniable crowd-pleaser",
        "communal sharing and cultural exchange",
        "aligns seamlessly with the central vision"
      ]
    }
  ],

  paragraphs: [
    {
      id: "opening",
      title: "Opening Paragraph: Semi-Formal Salutation & Purpose of Writing",
      purpose: "Warm greeting acknowledging the event and offering voluntary culinary participation",
      text: "I am writing to you after learning about the upcoming international food festival organized by the town club. As a long-standing local resident with deep roots in India, I would love to enthusiastically volunteer my culinary services and prepare an authentic national dish for the celebration.",
      wordCount: 45,
      ruleHighlight: "Polite semi-formal register: establishes personal connection, acknowledges club event, and clearly states intention to volunteer."
    },
    {
      id: "body1",
      title: "Body Paragraph 1: The Dish Offer & Cultural Prestige (Bullet 1)",
      purpose: "Propose Indian Dum Biryani and explain its preeminent status in Indian festive culture",
      bulletRef: 1,
      text: "Specifically, I would like to offer to cook a classic Indian Dum Biryani. In my home country, biryani is regarded as the undisputed pinnacle of celebratory cuisine, served at weddings, major festivals, and landmark community feasts. Offering this beloved national dish would allow attendees to experience a genuinely iconic culinary masterpiece that represents centuries of rich gastronomic heritage.",
      wordCount: 59,
      ruleHighlight: "Bullet 1 thoroughly covered: names the dish with pride and explains its celebratory cultural weight."
    },
    {
      id: "body2",
      title: "Body Paragraph 2: Dish Description & Culinary Technique (Bullet 2)",
      purpose: "Vivid description of ingredients, whole aromatic spices, and traditional sealed 'dum' cooking",
      bulletRef: 2,
      text: "For those unfamiliar with the recipe, Dum Biryani is a sumptuous, multi-layered rice delicacy consisting of aged, long-grain basmati rice and richly spiced marinated vegetables and cottage cheese. The ingredients are infused with fragrant whole spices—such as black cardamom, star anise, cinnamon quills, and saffron-soaked milk. Crucially, the pot is sealed with dough and slow-cooked over gentle embers—a traditional technique known as 'dum'—allowing the trapped steam to marry the flavors without scorching the ingredients. I will also serve it alongside a refreshing, cooling cucumber-mint raita.",
      wordCount: 88,
      ruleHighlight: "Bullet 2 thoroughly covered: rich sensory vocabulary describing aromatics, layered ingredients, and traditional preparation."
    },
    {
      id: "body3",
      title: "Body Paragraph 3: Justification for Event Inclusion (Bullet 3)",
      purpose: "Persuade the organizer with universal appeal, crowd scalability, and cultural harmony",
      bulletRef: 3,
      text: "There are several compelling reasons why Biryani would be an ideal addition to the town club's international lineup. Firstly, its harmonious balance of warmth and fragrance has proven universal appeal, making it an undeniable crowd-pleaser across all age groups. Furthermore, it is naturally wholesome, substantial, and easily prepared in large portions to feed substantial gatherings. Most importantly, biryani epitomizes the spirit of communal sharing and cultural exchange, which aligns seamlessly with the central vision of your world food event.",
      wordCount: 78,
      ruleHighlight: "Bullet 3 thoroughly covered: presents 3 layered justifications covering taste, logistics, and philosophical alignment."
    },
    {
      id: "closing",
      title: "Closing Paragraph & Semi-Formal Sign-off",
      purpose: "Offer logistical independence, invite coordination, and conclude with warm sign-off",
      text: "I am happy to bring my own cookware and manage all ingredient sourcing independently. Please let me know your thoughts on this proposal, as well as any relevant logistical arrangements regarding kitchen space or serving stations.\n\nWarm regards,\nArpit",
      wordCount: 39,
      ruleHighlight: "Courteous closing: demonstrates initiative by handling logistics, invites reply, and finishes with 'Warm regards,' matching the semi-formal register."
    }
  ],

  modelLetter: `Dear Mr. Pritam,

I am writing to you after learning about the upcoming international food festival organized by the town club. As a long-standing local resident with deep roots in India, I would love to enthusiastically volunteer my culinary services and prepare an authentic national dish for the celebration.

Specifically, I would like to offer to cook a classic Indian Dum Biryani. In my home country, biryani is regarded as the undisputed pinnacle of celebratory cuisine, served at weddings, major festivals, and landmark community feasts. Offering this beloved national dish would allow attendees to experience a genuinely iconic culinary masterpiece that represents centuries of rich gastronomic heritage.

For those unfamiliar with the recipe, Dum Biryani is a sumptuous, multi-layered rice delicacy consisting of aged, long-grain basmati rice and richly spiced marinated vegetables and cottage cheese. The ingredients are infused with fragrant whole spices—such as black cardamom, star anise, cinnamon quills, and saffron-soaked milk. Crucially, the pot is sealed with dough and slow-cooked over gentle embers—a traditional technique known as 'dum'—allowing the trapped steam to marry the flavors without scorching the ingredients. I will also serve it alongside a refreshing, cooling cucumber-mint raita.

There are several compelling reasons why Biryani would be an ideal addition to the town club's international lineup. Firstly, its harmonious balance of warmth and fragrance has proven universal appeal, making it an undeniable crowd-pleaser across all age groups. Furthermore, it is naturally wholesome, substantial, and easily prepared in large portions to feed substantial gatherings. Most importantly, biryani epitomizes the spirit of communal sharing and cultural exchange, which aligns seamlessly with the central vision of your world food event.

I am happy to bring my own cookware and manage all ingredient sourcing independently. Please let me know your thoughts on this proposal, as well as any relevant logistical arrangements regarding kitchen space or serving stations.

Warm regards,
Arpit`,

  toneGuidelines: [
    {
      rule: "Adopt a courteous, engaging semi-formal register without overly colloquial slang",
      doExample: "I would love to enthusiastically volunteer my culinary services... / Please let me know your thoughts on this proposal...",
      dontExample: "Hey man, I can whip up some rice for your food fest! / Hit me up with the details."
    },
    {
      rule: "Salutation and sign-off alignment for semi-formal correspondence",
      doExample: "Dear Mr. Pritam, ... Warm regards, Arpit (or With best regards, Arpit)",
      dontExample: "Hey buddy! ... Cheers, Arpit OR Dear Sir/Madam, ... Yours faithfully, Arpit (overly formal for a local town club organiser)"
    },
    {
      rule: "Sensory descriptive vocabulary for the dish",
      doExample: "aged long-grain basmati rice infused with fragrant whole spices and slow-cooked under sealed steam...",
      dontExample: "It is basically cooked rice with some vegetables and masala mixed together."
    },
    {
      rule: "Clear, proactive justification for the event organizer",
      doExample: "emphasize crowd appeal, ease of communal serving, vegetarian inclusivity, and cultural resonance...",
      dontExample: "You should have it because Indian food is my favorite."
    }
  ],

  vocabList: [
    {
      term: "Culinary Heritage",
      definition: "The traditions, customs, ingredients, and cooking techniques passed down through generations within a particular culture or country.",
      example: "Preparing this authentic recipe honors centuries of rich culinary heritage.",
      category: "Cultural Significance"
    },
    {
      term: "Aromatic Spices",
      definition: "Plant substances with a pleasant, distinctive, and noticeable smell used to add flavor to food.",
      example: "The basmati rice is infused with fragrant aromatic spices including cardamom and cinnamon.",
      category: "Festive Traditions"
    },
    {
      term: "Slow-cooked",
      definition: "Cooked slowly over a low heat for a long period of time to develop rich flavors and tender textures.",
      example: "The biryani is slow-cooked in a sealed vessel to ensure the flavors meld harmoniously.",
      category: "Festive Traditions"
    },
    {
      term: "Communal Gathering",
      definition: "An assembly of people from a community coming together to share experiences or celebrate.",
      example: "Food plays a central and unifying role at every communal gathering in my culture.",
      category: "Cultural Significance"
    },
    {
      term: "Universal Appeal",
      definition: "The quality of being attractive, interesting, or pleasing to everyone regardless of background.",
      example: "The balanced warmth and aromatic profile give this national delicacy universal appeal.",
      category: "Personal Impressions"
    },
    {
      term: "Crowd-pleaser",
      definition: "Something or someone that is very popular and that everyone enjoys.",
      example: "Its mouthwatering aroma makes the dish an undeniable crowd-pleaser for festival visitors.",
      category: "Personal Impressions"
    },
    {
      term: "Logistical Arrangements",
      definition: "Practical plans and preparations needed to organize a complex event or activity successfully.",
      example: "Please advise me regarding any specific logistical arrangements for burner stoves or serving counters.",
      category: "Formal Correspondence"
    },
    {
      term: "Enthusiastically Volunteer",
      definition: "To offer to do something willingly and with eagerness or intense interest.",
      example: "I would like to enthusiastically volunteer my culinary assistance for the weekend event.",
      category: "Formal Correspondence"
    }
  ]
};
