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
  id: "imported-supermarket-goods-task2",

  taskType: "Advantages Outweigh Disadvantages Essay (3 Body Paragraphs)",

  title: "Supermarket Imported Goods vs. Local Produce: Do Advantages Outweigh Disadvantages?",

  questionText:
    "Nowadays, instead of locally produced goods, many supermarkets sell a variety of products imported from countries all across the world.\n\n- Do the advantages of this development outweigh the disadvantages?",

  audioUrl: "materials/imported-goods-supermarkets-briefing.m4a",

  timingSeconds: 180,

  sampleIntro:
    "In contemporary retail, supermarkets increasingly stock products imported from across the globe rather than goods cultivated locally. Although this trend creates transport-related carbon emissions and exerts commercial pressure on domestic farmers, I firmly contend that the advantages—namely guaranteed year-round fresh produce, lower consumer grocery costs, and greater cultural food variety—decisively outweigh the drawbacks.",

  sampleConclusion:
    "In conclusion, although importing supermarket goods increases environmental food miles and poses serious financial challenges for local agriculturalists, the advantages are far more compelling. By securing year-round access to fresh nutrition, keeping daily grocery prices affordable, and catering to diverse multicultural diets, imported goods deliver broad societal benefits that decisively outweigh the disadvantages.",

  bodyParagraphs: [
    {
      paraNumber: 1,
      side: "strong_opinion",
      title: "Points for the Advantages (Strong Side)",
      theme: "Year-Round Fresh Produce, Lower Grocery Prices & Cultural Variety",
      mainReason:
        "The primary advantage of stocking imported goods is that it guarantees consumers year-round access to fresh, healthy produce, overcoming harsh local seasonal limitations.",
      supportingReasons:
        "In cold and temperate nations, domestic farming halts during winter months. Importing from warmer countries eliminates seasonal shortages, ensuring families always have access to essential fresh fruit, vegetables, and daily nutrients without waiting for summer harvests.",
      example:
        "For example, consumers in colder European or Canadian cities can easily purchase fresh strawberries, tomatoes, and citrus in the middle of January at stable prices.",
      band9Snippet:
        "“Foremost among the advantages is that importing goods guarantees consumers year-round access to fresh produce, overcoming harsh seasonal limitations.”",
      alternativeReasons: [
        {
          id: "body-adv-reason1",
          badge: "Reason 1 • Fresh Food All Year",
          title: "Year-Round Fresh Produce in Every Season",
          mainReason:
            "Supermarkets can provide fresh fruits and vegetables all year round, even during freezing winter months when domestic farms cannot grow anything.",
          supportingReasons:
            "In cold and temperate countries, winter weather halts agricultural cultivation. Importing from warmer nations or the opposite hemisphere eliminates seasonal shortages, ensuring families maintain a healthy, balanced diet with daily fresh vitamins.",
          example:
            "For example, consumers in colder European or Canadian cities can easily purchase fresh strawberries, tomatoes, and oranges in the middle of winter at stable prices.",
          band9Snippet:
            "“Foremost among the advantages is that importing goods guarantees consumers year-round access to fresh produce, overcoming harsh seasonal limitations.”",
          modelParagraph:
            "Foremost among the advantages is that importing goods guarantees consumers year-round access to fresh, healthy produce, overcoming harsh seasonal limitations. In colder countries, local farming shuts down almost entirely during the winter months, meaning domestic farms cannot produce fresh crops. By sourcing food from warmer countries in the southern hemisphere, supermarkets ensure that families can purchase essential fruits, vegetables, and vitamins throughout all twelve months. For instance, consumers in chilly northern European cities can regularly buy fresh strawberries, avocados, and citrus in the middle of January at stable prices.",
          examinerNotes:
            "Relatable & practical. Explains the seasonal winter gap in cold nations and shows how supermarket imports solve daily nutritional needs."
        },
        {
          id: "body-adv-reason2",
          badge: "Reason 2 • Family Grocery Savings",
          title: "Lower Grocery Prices & Household Affordability",
          mainReason:
            "Imported food is often significantly cheaper than goods grown locally under expensive artificial conditions, helping families save money on daily groceries.",
          supportingReasons:
            "Countries with warm climates and fertile land can grow crops naturally in sunlight, whereas producing tropical food locally requires expensive heated greenhouses and high electricity bills. Supermarkets pass these production savings to consumers, keeping basic food baskets affordable.",
          example:
            "For instance, importing bananas, rice, and coffee from tropical nations is far cheaper for households than attempting to grow them locally in heated glasshouses.",
          band9Snippet:
            "“Equally important is that imported goods reduce household grocery costs, as food is grown where natural conditions make cultivation far cheaper.”",
          modelParagraph:
            "Equally important is that imported goods significantly reduce grocery costs for ordinary households. Food can be grown much more cheaply in regions blessed with abundant natural sunshine and fertile soil, avoiding the massive heating and electricity costs of running artificial domestic glasshouses. Supermarkets pass these production savings directly on to shoppers, keeping basic food baskets affordable for low-income and working-class families. For instance, importing staples such as bananas, rice, and coffee from equatorial nations is far more cost-effective than trying to cultivate them domestically under energy-intensive artificial conditions.",
          examinerNotes:
            "Directly relatable economic argument. Contrasts natural outdoor sun-grown crops with costly artificial heated greenhouses."
        },
        {
          id: "body-adv-reason3",
          badge: "Reason 3 • Cultural Food Variety",
          title: "Diverse Food Choices for Multicultural Communities",
          mainReason:
            "Selling imported products allows shoppers to enjoy foods from diverse cultures and helps immigrant families cook authentic traditional meals.",
          supportingReasons:
            "Modern cities are home to people from many cultural backgrounds who rely on specific international ingredients that cannot grow in native soil. Offering foreign products in local supermarkets respects cultural diversity and allows all residents to explore global culinary traditions.",
          example:
            "For example, supermarkets in major cities regularly stock authentic Asian noodles, Indian spices, and Mexican tortillas that local farms cannot produce.",
          band9Snippet:
            "“Furthermore, a wide selection of imported foodstuffs caters to the dietary needs of increasingly diverse and multicultural communities.”",
          modelParagraph:
            "Furthermore, a wide selection of imported foodstuffs caters to the daily dietary needs of increasingly multicultural urban communities. In modern cosmopolitan cities, immigrant families rely on authentic ingredients that simply cannot be grown in native soil due to unsuitable climates. Stocking international foods allows people to preserve their cultural culinary traditions while introducing native shoppers to exciting global flavors. For example, supermarkets in major cities routinely stock authentic basmati rice, Asian spices, and Mexican specialty items, enriching everyday cooking for everyone.",
          examinerNotes:
            "Strong social and cultural dimension. Directly observable in modern supermarkets and easy for any student to explain."
        },
        {
          id: "body-adv-reason4",
          badge: "Reason 4 • Emergency Food Security",
          title: "Protection Against Local Crop Failures & Food Shortages",
          mainReason:
            "Having global supply chains protects a nation from empty supermarket shelves when local farms suffer from severe droughts, floods, or bad weather.",
          supportingReasons:
            "If a country relies solely on its own farmers, a single heatwave, flood, or insect plague can destroy the harvest and cause sudden food shortages. Importing from multiple countries acts as a safety shield, ensuring supermarkets always have backup supplies.",
          example:
            "To illustrate, when severe summer droughts destroyed domestic potato and grain harvests in northern Europe, supermarkets prevented food shortages by quickly importing from international partners.",
          band9Snippet:
            "“Additionally, global procurement networks provide vital food security by protecting consumers against unexpected local crop failures.”",
          modelParagraph:
            "Additionally, global procurement networks provide vital food security by protecting consumers against unexpected local harvest failures. If a country relies entirely on domestic agriculture, an unexpected flood, prolonged summer drought, or crop disease can wipe out local fields and trigger dangerous food shortages. Having established trade links allows supermarkets to quickly import produce from other parts of the world, keeping grocery shelves full. To illustrate, when severe droughts damaged domestic wheat and vegetable yields in northern Europe, supermarkets prevented shortages by immediately sourcing produce from international partners.",
          examinerNotes:
            "Crucial food security point. Intuitive disaster-insurance logic that students easily understand and remember."
        }
      ]
    },
    {
      paraNumber: 2,
      side: "non_opinion",
      title: "Points for the Disadvantages (Counterpoint)",
      theme: "Local Farmer Strain, Food Miles & Chemical Preservatives",
      mainReason:
        "On the other hand, the primary disadvantage is that cheap foreign imports create intense commercial competition for local farmers and generate transport pollution.",
      supportingReasons:
        "Small family farms have higher labor and heating costs and cannot compete with mass-produced overseas goods, leading to farm closures. Furthermore, flying and shipping food thousands of kilometers burns immense fossil fuels.",
      example:
        "For example, many small family dairy and vegetable farms have been forced out of business because supermarkets prioritize cheaper imported produce.",
      band9Snippet:
        "“Nonetheless, critics rightly highlight the commercial strain exerted on local farmers and the ecological toll of extensive food miles.”",
      alternativeReasons: [
        {
          id: "body-dis-reason1",
          badge: "Reason 1 • Threat to Local Farmers",
          title: "Severe Financial Strain & Job Losses for Local Farmers",
          mainReason:
            "Inexpensive imported products create tough competition for local farmers, putting their family businesses and traditional livelihoods at serious risk.",
          supportingReasons:
            "Small local farmers face higher labor, land, and heating costs, meaning they cannot match the rock-bottom prices of massive overseas industrial farms. When supermarkets favor cheaper imports, local farmers lose customers, face bankruptcy, and are forced to close.",
          example:
            "For example, many small family dairy and vegetable farms across Europe and the UK have been forced to shut down because supermarkets prioritize cheaper milk and produce from abroad.",
          band9Snippet:
            "“On the other hand, the primary disadvantage is that cheap foreign imports threaten the livelihoods of hardworking local farmers.”",
          modelParagraph:
            "On the other hand, critics rightly point out that cheap foreign goods place immense commercial pressure on local farmers. Small family-owned farms face higher labor and land costs and cannot match the rock-bottom prices of massive, highly subsidized overseas agribusinesses. As supermarkets increasingly favor cheaper foreign imports to maximize profit margins, local agriculturalists lose their market share, face severe financial hardship, and are frequently driven into bankruptcy. For instance, thousands of small dairy and fruit farmers across Europe have been forced to shut down in recent years because supermarkets prioritized cheaper imports.",
          examinerNotes:
            "The most relatable and common drawback. Easy to explain: local family farms cannot compete with cheap overseas mega-farms."
        },
        {
          id: "body-dis-reason2",
          badge: "Reason 2 • Food Miles & Pollution",
          title: "Environmental Pollution & Carbon Footprint ('Food Miles')",
          mainReason:
            "Transporting food over thousands of kilometers burns huge amounts of fossil fuel, creating heavy air pollution and contributing to global warming.",
          supportingReasons:
            "Fresh food must be flown on airplanes or shipped across oceans on massive cargo vessels, both of which burn immense amounts of diesel and jet fuel. Furthermore, long-distance transport demands heavy plastic packaging and constant refrigeration, increasing waste.",
          example:
            "For instance, air-freighting out-of-season berries thousands of kilometers from South America generates far higher carbon emissions per kilogram than buying apples harvested from a regional orchard.",
          band9Snippet:
            "“Another significant drawback is the environmental harm caused by long-distance transportation, commonly referred to as 'food miles'.”",
          modelParagraph:
            "Another significant drawback is the environmental harm caused by long-distance transportation, commonly referred to as 'food miles'. Flying fresh perishables on aeroplanes and transporting goods on container ships across oceans burns enormous quantities of fossil fuels, releasing harmful greenhouse gases into the atmosphere. In addition, long-distance transit demands heavy plastic packaging and constant refrigeration to keep produce from rotting. For instance, air-freighting out-of-season berries thousands of kilometers from South America generates far higher carbon emissions per kilogram than buying apples harvested from a regional orchard.",
          examinerNotes:
            "Classic IELTS environmental argument. Crystal-clear explanation of aviation emissions, freight fuel burn, and plastic waste."
        },
        {
          id: "body-dis-reason3",
          badge: "Reason 3 • Chemicals & Lost Freshness",
          title: "Use of Chemical Preservatives & Loss of Freshness and Flavor",
          mainReason:
            "To survive weeks of travel, imported food is often treated with chemical preservatives and harvested unripe, resulting in poorer taste and fewer natural nutrients.",
          supportingReasons:
            "Perishable produce that spends weeks in transit cannot be harvested when ripe without rotting before arrival. Instead, crops are picked green, coated in synthetic waxes, and artificially ripened with gases in storage, making them taste bland and watery compared to freshly harvested farm food.",
          example:
            "For example, imported supermarket tomatoes often spend weeks in refrigerated containers, resulting in a watery flavor and fewer vitamins compared to fresh produce from a local farmer's market.",
          band9Snippet:
            "“Furthermore, imported produce is frequently harvested prematurely and treated with artificial preservatives, compromising its natural taste and nutritional value.”",
          modelParagraph:
            "Furthermore, imported produce is frequently harvested prematurely and treated with artificial preservatives, compromising its natural taste and nutritional value. Perishable fruits and vegetables shipped across oceans cannot be harvested at peak ripeness without rotting during long transit journeys. Consequently, they are picked unripe, coated in synthetic waxes, and artificially ripened with gas in storage facilities, leaving them bland and less nutritious. For example, imported supermarket tomatoes often spend weeks in refrigerated containers, resulting in a watery flavor and fewer vitamins compared to produce harvested fresh from nearby farms.",
          examinerNotes:
            "Highly relatable consumer complaint: imported fruits taste bland or watery because they were picked unripe and preserved with chemicals."
        },
        {
          id: "body-dis-reason4",
          badge: "Reason 4 • Supply Disruption Risk",
          title: "Risk of Food Shortages Due to Foreign Supply Disruptions",
          mainReason:
            "Relying heavily on foreign food makes a nation vulnerable to international crises, border closures, and global shipping strikes.",
          supportingReasons:
            "If a country lets its domestic farms disappear and depends entirely on other nations for its daily meals, any sudden geopolitical crisis, war, or shipping strike can cut off supplies. Without strong local farms, the nation cannot feed itself in times of international trouble.",
          example:
            "To illustrate, recent global shipping delays and border restrictions during international crises caused severe supermarket shortages in countries that rely heavily on imported staples.",
          band9Snippet:
            "“Finally, becoming overly reliant on foreign food weakens a country's self-sufficiency, leaving it vulnerable to sudden international disruptions.”",
          modelParagraph:
            "Finally, becoming overly reliant on foreign food weakens a country's self-sufficiency, leaving it vulnerable to sudden international disruptions. If domestic farming is neglected in favor of cheap foreign imports, a nation loses its ability to feed its own citizens during emergencies. When unexpected geopolitical conflicts, shipping strikes, or border closures happen, cross-border supply lines can break down overnight, creating acute shortages on supermarket shelves. To illustrate, recent global logistics bottlenecks left supermarkets with empty shelves in countries that depend almost entirely on imported staples.",
          examinerNotes:
            "Strategic vulnerability point. Relatable to recent real-world shipping strikes and border delays."
        }
      ]
    },
    {
      paraNumber: 3,
      side: "non_opinion",
      title: "Body Paragraph 3 (Non-Opinion Counterpoint)",
      theme: "Local Farm Strain & Transport Food Miles",
      mainReason:
        "On the other hand, critics rightly point out that cheap foreign goods place immense commercial pressure on local farmers and increase transport pollution.",
      supportingReasons:
        "Small family farms cannot match the low prices of massive overseas industrial farms, while flying and shipping food over thousands of kilometers generates heavy greenhouse gas emissions.",
      example:
        "For example, small dairy farmers in Britain and Europe have struggled to survive against cheap imported milk, while air-freighting out-of-season berries creates a heavy carbon footprint.",
      band9Snippet:
        "“Nonetheless, critics rightly highlight the commercial strain exerted on local farmers and the ecological toll of extensive food miles.”"
    }
  ],

  vocabList: [
    {
      word: "cross-border supply chains",
      meaning:
        "Integrated international logistic networks facilitating the transit and distribution of goods across sovereign boundaries.",
      example:
        "Modern supermarkets rely on agile cross-border supply chains to source perishable produce from multiple continents simultaneously."
    },
    {
      word: "counter-seasonal availability",
      meaning:
        "The commercial supply of fresh agricultural items outside of their natural domestic growing calendar by sourcing from the opposite hemisphere.",
      example:
        "Southern hemisphere imports guarantee counter-seasonal availability of stone fruits and berries during northern winter months."
    },
    {
      word: "ecological food miles",
      meaning:
        "The cumulative distance food is transported from its place of harvest to consumer plates, measuring environmental carbon impact.",
      example:
        "Critics advocate for reducing ecological food miles by prioritizing regionally cultivated, zero-mile seasonal produce."
    },
    {
      word: "domestic agrarian displacement",
      meaning:
        "The economic marginalization or bankruptcy of local farmers due to cheaper, mass-produced foreign agricultural imports.",
      example:
        "Unregulated agricultural dumping can trigger domestic agrarian displacement, threatening national food sovereignty."
    },
    {
      word: "dietary diversification",
      meaning:
        "Expanding the spectrum and variety of nutritional foods consumed by a population beyond traditional regional staples.",
      example:
        "Global trade has fostered unprecedented dietary diversification, introducing exotic grains, legumes, and nutrient-dense superfoods into everyday diets."
    },
    {
      word: "reciprocal trade linkages",
      meaning:
        "Mutually beneficial bilateral commercial agreements whereby trading partners exchange goods to stimulate shared economic prosperity.",
      example:
        "Establishing reciprocal trade linkages allows developing nations to export specialty agricultural goods while importing advanced industrial machinery."
    },
    {
      word: "carbon-intensive air freight",
      meaning:
        "High-emission aviation transport utilized for rapid intercontinental delivery of high-value, highly perishable foodstuffs.",
      example:
        "Transporting fresh asparagus via carbon-intensive air freight incurs an exorbitant environmental footprint compared to surface maritime shipping."
    },
    {
      word: "monopolistic complacency",
      meaning:
        "A lack of innovation, efficiency, or quality improvement that occurs when domestic suppliers face no foreign market competition.",
      example:
        "Exposure to foreign supermarket goods dismantles monopolistic complacency, compelling local producers to refine quality and customer service."
    },
    {
      word: "artisanal specialization",
      meaning:
        "Focusing production on high-value, distinctive, small-batch, or culturally authentic goods rather than uniform mass commodities.",
      example:
        "Local farmers often counter mass-market imports through artisanal specialization in organic sourdough, heirloom varieties, and raw-milk cheeses."
    },
    {
      word: "unprecedented consumer sovereignty",
      meaning:
        "The complete freedom and authority of shoppers to select from an exhaustive array of competitive global goods tailored to their tastes and budget.",
      example:
        "Supermarket shelves offering global condiments grant modern shoppers unprecedented consumer sovereignty."
    }
  ],

  vocabHunt: [
    "cross-border supply chains",
    "counter-seasonal availability",
    "ecological food miles",
    "domestic agrarian displacement",
    "dietary diversification",
    "reciprocal trade linkages",
    "carbon-intensive air freight",
    "monopolistic complacency",
    "artisanal specialization",
    "unprecedented consumer sovereignty"
  ],

  consequences: [
    {
      type: "positive",
      title: "Year-Round Fresh Produce & Overcoming Winter Crop Ceilings",
      desc: "Supermarkets import produce from warmer countries so families can eat fresh strawberries, tomatoes, and vitamins all year round, even when local farms are frozen.",
      example: "Shoppers in cold northern cities buying fresh citrus and avocados in the middle of January.",
      level: "Advantage 1 (Step 6)",
      simpleTakeaway: "Fresh produce in winter: families eat healthy fresh food every single month of the year.",
      collocation: "year-round fresh produce"
    },
    {
      type: "positive",
      title: "Lower Grocery Prices & Family Household Savings",
      desc: "Crops grow naturally in sunny tropical regions without needing expensive heated greenhouses. Supermarkets pass these savings to consumers, lowering grocery bills.",
      example: "Importing rice, bananas, and coffee from warm climates at far cheaper prices than heating domestic glasshouses.",
      level: "Advantage 2 (Step 6)",
      simpleTakeaway: "Affordable groceries: natural sunshine makes food cheaper to grow than artificial domestic greenhouses.",
      collocation: "lower household grocery costs"
    },
    {
      type: "positive",
      title: "Diverse Food Choices for Multicultural Communities",
      desc: "Stocking international ingredients allows immigrant families to cook traditional cultural recipes while introducing local shoppers to exciting world cuisines.",
      example: "Supermarkets regularly stocking authentic Asian noodles, Indian spices, and Mexican specialty items.",
      level: "Advantage 3 (Step 6)",
      simpleTakeaway: "Cultural food variety: modern cities enjoy authentic ingredients from around the world.",
      collocation: "multicultural culinary diversity"
    },
    {
      type: "positive",
      title: "Emergency Food Security During Domestic Crop Blights",
      desc: "If bad weather, flooding, or summer droughts ruin local fields, supermarkets can import from other nations to prevent empty shelves and price spikes.",
      example: "Importing grain and potatoes from foreign partners after severe summer heatwaves damaged domestic harvests.",
      level: "Advantage 4 (Step 6)",
      simpleTakeaway: "Disaster backup: international trade prevents food shortages when local crops fail.",
      collocation: "resilient emergency food security"
    },
    {
      type: "negative",
      title: "Severe Commercial Threat to Local Family Farmers",
      desc: "Small local farmers have higher labor and land costs and cannot match the rock-bottom prices of massive foreign mega-farms, leading to farm bankruptcies.",
      example: "Family-owned dairy and vegetable farms closing down because supermarkets choose cheaper foreign milk and produce.",
      level: "Disadvantage 1 (Step 7)",
      simpleTakeaway: "Threat to local farms: small farmers lose customers to cheap foreign imports and face bankruptcy.",
      collocation: "commercial strain on domestic smallholders"
    },
    {
      type: "negative",
      title: "Air Pollution & Carbon Emissions from 'Food Miles'",
      desc: "Flying perishables on airplanes and shipping cargo across oceans burns immense fossil fuels, releasing carbon emissions that contribute to global warming.",
      example: "Air-freighting out-of-season berries across continents generating far higher emissions than buying local seasonal apples.",
      level: "Disadvantage 2 (Step 7)",
      simpleTakeaway: "Pollution from food miles: long-distance planes and cargo ships burn massive amounts of fossil fuel.",
      collocation: "carbon emissions from food miles"
    },
    {
      type: "negative",
      title: "Chemical Preservatives & Loss of Natural Freshness",
      desc: "Food traveling for weeks must be picked unripe, coated in synthetic wax, and treated with preservatives, making it taste bland compared to freshly picked farm food.",
      example: "Imported tomatoes spending weeks in cold storage and tasting watery compared to freshly harvested local market produce.",
      level: "Disadvantage 3 (Step 7)",
      simpleTakeaway: "Chemicals & lost taste: long transit times mean food is picked unripe and sprayed with preservatives.",
      collocation: "loss of natural freshness and flavor"
    },
    {
      type: "negative",
      title: "Over-Dependence on Foreign Food & Supply Disruptions",
      desc: "If domestic farming shuts down, a nation becomes helpless during international crises, shipping strikes, or border closures that halt imports.",
      example: "Sudden international logistics bottlenecks leaving supermarket shelves empty in countries that rely completely on food imports.",
      level: "Disadvantage 4 (Step 7)",
      simpleTakeaway: "Vulnerability to crises: relying entirely on foreign food leaves nations vulnerable when borders or trade routes close.",
      collocation: "vulnerability to foreign supply disruptions"
    }
  ],

  evaluationArguments: [
    {
      title: "Year-Round Fresh Nutrition & Public Health (Advantage)",
      reason: "Supermarket imports eliminate seasonal winter gaps, providing uninterrupted access to fresh vitamins and nutrient-dense produce.",
      development: "In cold climates, local farming shuts down for months. Without global imports, consumers would be restricted to stored root vegetables and preserved foods during winter.",
      example: "Families in cold northern regions buying fresh berries, citrus, and greens in January at normal retail prices.",
      type: "argument",
      level: "Core Advantage 1",
      simpleTakeaway: "Year-round nutrition: keeps families healthy throughout freezing winter months.",
      collocation: "uninterrupted year-round nutrition"
    },
    {
      title: "Grocery Affordability Through Natural Growing Conditions (Advantage)",
      reason: "Crops cultivated in naturally sunny, fertile climates cost far less to grow than using energy-hungry domestic heated greenhouses.",
      development: "Supermarkets pass these lower production costs on to shoppers, protecting low-income families from rising grocery inflation.",
      example: "Importing tropical fruits, rice, and coffee is much cheaper than attempting to grow them in expensive heated glasshouses.",
      type: "argument",
      level: "Core Advantage 2",
      simpleTakeaway: "Affordable groceries: natural sunshine keeps staple food prices down for families.",
      collocation: "natural agrarian price efficiency"
    },
    {
      title: "Commercial Threat to Local Smallholders (Disadvantage)",
      reason: "Small family farms cannot compete with the ultra-low prices of giant, subsidized foreign agricultural corporations.",
      development: "When supermarkets stock cheaper imports, local farmers lose their customer base, leading to rural bankruptcies and loss of traditional farming jobs.",
      example: "Local dairy and berry farmers going out of business because supermarkets prioritize cheap overseas suppliers.",
      type: "counterpoint",
      level: "Key Disadvantage 1",
      simpleTakeaway: "Local farm strain: small farmers cannot match the prices of massive foreign mega-farms.",
      collocation: "severe strain on local smallholders"
    },
    {
      title: "Environmental Impact of 'Food Miles' (Disadvantage)",
      reason: "Transporting perishable groceries across oceans on airplanes and container ships generates heavy carbon emissions and plastic packaging waste.",
      development: "The burning of aviation fuel and marine diesel for long-haul food transport directly contributes to global air pollution and climate change.",
      example: "Air-freighting out-of-season fruits thousands of miles emitting far more carbon per kilo than local seasonal harvests.",
      type: "counterpoint",
      level: "Key Disadvantage 2",
      simpleTakeaway: "Carbon footprint: long-distance planes and ships release heavy emissions into the atmosphere.",
      collocation: "environmental toll of food miles"
    }
  ],

  facultyAngles: [
    {
      title: "Consumer Economics: Natural Solar Advantage vs. Greenhouse Energy",
      development:
        "Economists highlight that crops grown in naturally sunny, warm climates require far less energy and expense than crops forced to grow in cold nations inside heated, fossil-fuel-powered glasshouses."
    },
    {
      title: "Environmental Science: The Nuance of Life-Cycle Carbon Assessment",
      development:
        "Ecological research reveals that 'food miles' represent only one part of total food emissions; field-grown crops shipped by sea often produce less carbon than heating artificial glasshouses with electricity."
    },
    {
      title: "Food Security Policy: Global Diversification vs. Domestic Vulnerability",
      development:
        "Modern agricultural analysts emphasize that having backup international food suppliers is essential to protect citizens whenever local droughts, floods, or crop diseases destroy domestic harvests."
    }
  ],

  powerExpressions: [
    {
      expression: "year-round nutritional accessibility",
      meaning: "Continuous availability of fresh, healthy foods in all seasons.",
      example: "Supermarket imports have established year-round nutritional accessibility for families living in cold climates."
    },
    {
      expression: "mitigate localized harvest shortages",
      meaning: "Prevent or reduce food shortages caused by bad weather on domestic farms.",
      example: "Having global supply routes helps supermarkets mitigate localized harvest shortages caused by summer droughts."
    },
    {
      expression: "the environmental toll of food miles",
      meaning: "The damage caused to nature and the air by transporting food long distances.",
      example: "Critics rightfully emphasize the environmental toll of food miles associated with air-freighting fresh produce."
    },
    {
      expression: "commercial strain on domestic smallholders",
      meaning: "Intense financial pressure and risk of bankruptcy faced by small local farmers.",
      example: "Cheap foreign supermarket imports exert severe commercial strain on domestic smallholders."
    },
    {
      expression: "energy-intensive artificial cultivation",
      meaning: "Growing crops indoors using huge amounts of electricity and greenhouse heating.",
      example: "Importing tropical crops avoids the need for energy-intensive artificial cultivation in cold countries."
    },
    {
      expression: "multicultural culinary diversity",
      meaning: "A wide variety of international ingredients that reflect different cultures.",
      example: "Supermarket imports support multicultural culinary diversity in modern cosmopolitan cities."
    },
    {
      expression: "decisively outweigh the drawbacks",
      meaning: "The benefits are vastly more significant and valuable than the negatives.",
      example: "The nutritional and economic advantages of imported food decisively outweigh the drawbacks."
    }
  ],

  brainstormCards: [
    {
      question: "Why do supermarkets stock imported fruits and vegetables during winter?",
      thinkingLens: "Consumer Nutrition & Seasonal Climate Lens",
      selfCheck: "Did you explain that freezing winters stop local farming, so imports supply fresh vitamins?",
      idea: "In cold countries, domestic farming shuts down in winter. Supermarkets import fresh produce from warmer countries so families can eat fresh strawberries, tomatoes, and vitamins all year round without waiting for summer."
    },
    {
      question: "Why is imported tropical food often cheaper than food grown locally?",
      thinkingLens: "Production Cost & Natural Sunshine Lens",
      selfCheck: "Did you contrast natural outdoor sunlight with expensive heated domestic greenhouses?",
      idea: "Tropical produce grows naturally outdoors in abundant sunshine and fertile soil. In contrast, growing tropical food locally in cold nations requires expensive heated greenhouses with massive electricity bills, making local production far more costly."
    },
    {
      question: "What is the biggest problem for local farmers when supermarkets sell cheap foreign imports?",
      thinkingLens: "Local Farmer Livelihoods & Competition Lens",
      selfCheck: "Did you explain that small family farms cannot match the low prices of foreign mega-farms?",
      idea: "Small family farmers have higher labor, land, and heating costs. When supermarkets choose cheaper foreign imports, local farmers lose customers, face severe financial hardship, and are frequently forced out of business."
    },
    {
      question: "Why do the advantages of imported supermarket food decisively outweigh the disadvantages?",
      thinkingLens: "Overall Synthesis & Outweighing Verdict Lens",
      selfCheck: "Did you explain that benefits help the entire population's health and budget, while drawbacks can be managed?",
      idea: "While local farm competition and transport emissions are real challenges, the benefits—providing fresh year-round nutrition, keeping grocery bills affordable for ordinary families, and protecting against crop blights—affect the health and well-being of the entire population."
    }
  ],

  connectorsTier: {
    sTier: [
      "Foremost among the advantages is that...",
      "Beyond household consumption, international commerce fosters...",
      "Detractors, however, cogently contend that...",
      "Consequently, when weighed against the manageable environmental drawbacks...",
      "This dichotomy underscores that while localized challenges persist..."
    ],
    aTier: [
      "In stark contrast to domestic seasonal limitations,",
      "Furthermore, exposure to global market dynamics compels...",
      "Nevertheless, one cannot dismiss the ecological repercussions of...",
      "In light of these considerations, the overriding merits decisively overshadow..."
    ],
    bTier: [
      "On the one hand,",
      "On the other hand,",
      "In addition,",
      "Overall, the benefits are greater than the negatives"
    ]
  },

  strategicLinkers: [
    {
      zone: "Paragraph Openers (Structural Roadmap)",
      badge: "Macro Signposting",
      placementRule: "Place strictly at Sentence 1 of each body paragraph to establish categorical focus.",
      items: [
        {
          phrase: "Foremost among the compelling merits of international food retail is...",
          functionDesc: "Initiates Body Paragraph 1 by introducing the strong-opinion advantage (consumer diversity & nutrition).",
          example: "Foremost among the compelling merits of international food retail is the unprecedented dietary diversity and counter-seasonal nutritional resilience it affords modern households."
        },
        {
          phrase: "Equally significant is the broader macroeconomic catalyst that cross-border trade provides...",
          functionDesc: "Transitions smoothly into Body Paragraph 2 (strong-opinion advantage 2: trade integration & innovation).",
          example: "Equally significant is the broader macroeconomic catalyst that cross-border trade provides by stimulating developing economies and driving domestic innovation."
        },
        {
          phrase: "On the other hand, detractors cogently point to the ecological and agrarian ramifications of this trend...",
          functionDesc: "Opens Body Paragraph 3 (non-opinion counterpoint / concession) with measured academic neutrality.",
          example: "On the other hand, detractors cogently point to the ecological and agrarian ramifications of this trend, most notably extensive food miles and pressure on local smallholders."
        }
      ]
    },
    {
      zone: "Internal Causal Chains (Reason → Elaboration)",
      badge: "Depth & Logic Flow",
      placementRule: "Use within body paragraphs between the main reason and supporting explanation.",
      items: [
        {
          phrase: "...which in turn eliminates localized nutritional deprivation during winter months...",
          functionDesc: "Connects counter-seasonal supply directly to biological and public health outcomes.",
          example: "Supermarkets import produce from the opposite hemisphere, which in turn eliminates localized nutritional deprivation during winter months."
        },
        {
          phrase: "This dynamic compels domestic agricultural enterprises to abandon complacency and...",
          functionDesc: "Explains how foreign competition triggers positive adaptation rather than simple destruction.",
          example: "This dynamic compels domestic agricultural enterprises to abandon complacency and pivot toward lucrative organic and artisanal niches."
        },
        {
          phrase: "Owing to the exorbitant fuel consumption inherent in transcontinental aviation freight...",
          functionDesc: "Grounds environmental critique in concrete logistical mechanics.",
          example: "Owing to the exorbitant fuel consumption inherent in transcontinental aviation freight, out-of-season produce generates a disproportionate carbon footprint."
        }
      ]
    },
    {
      zone: "Evaluative Weighed Verdict (Concession → Decisive Stance)",
      badge: "Task Achievement 9",
      placementRule: "Use at the end of Body 3 or in the introduction/conclusion to establish clear weighting.",
      items: [
        {
          phrase: "While these environmental and agrarian reservations are undeniably legitimate, they are largely remediable through...",
          functionDesc: "Acknowledges the counter-argument before decisively demonstrating why advantages prevail.",
          example: "While these environmental and agrarian reservations are undeniably legitimate, they are largely remediable through green logistics and targeted domestic farm subsidies."
        },
        {
          phrase: "Consequently, the undeniable gains in consumer welfare and global economic equity far eclipse...",
          functionDesc: "Delivers the definitive outweighing verdict in the conclusion.",
          example: "Consequently, the undeniable gains in consumer welfare and global economic equity far eclipse the localized logistical drawbacks."
        }
      ]
    }
  ],

  fluidVocab: [
    {
      word: "myopic",
      pos: "adjective",
      meaning: "Lacking foresight or intellectual breadth; narrow-minded.",
      naturalCollocation: "myopic protectionism / myopic policies",
      organicExample:
        "Restricting supermarket imports to preserve obsolete domestic monopolies represents a myopic approach that penalizes low-income consumers.",
      mechanicalPitfall: "Avoid using it casually as a synonym for 'blind' or 'bad'.",
      examinerInsight: "Demonstrates Band 9 stylistic sophistication when characterizing short-sighted economic views."
    },
    {
      word: "epitome",
      pos: "noun",
      meaning: "A person or thing that is a perfect example of a particular quality or type.",
      naturalCollocation: "the epitome of consumer welfare / the epitome of globalization",
      organicExample:
        "The ability to purchase fresh Mediterranean citrus during a Scandinavian freeze stands as the epitome of globalized consumer welfare.",
      mechanicalPitfall: "Do not say 'an epitome of everything'. Use with a definitive concept.",
      examinerInsight: "Elevates Task Achievement by framing everyday phenomena within broader economic concepts."
    },
    {
      word: "counter-seasonal",
      pos: "adjective",
      meaning: "Relating to agricultural produce harvested in one hemisphere during the winter of the other.",
      naturalCollocation: "counter-seasonal produce / counter-seasonal availability",
      organicExample:
        "Counter-seasonal imports ensure that households maintain uninterrupted access to vital vitamins throughout midwinter.",
      mechanicalPitfall: "Do not use 'out of season' when you can use precise terminology.",
      examinerInsight: "Specific, accurate academic jargon directly tailored to the food trade prompt."
    },
    {
      word: "food miles",
      pos: "noun",
      meaning: "The distance food is transported from the producer to the consumer.",
      naturalCollocation: "minimize food miles / excessive food miles",
      organicExample:
        "The primary ecological critique centers on excessive food miles and the associated aviation fuel burn.",
      mechanicalPitfall: "Do not say 'food distance travel'. 'Food miles' is the established technical phrase.",
      examinerInsight: "Essential environmental economics term for Task 2 essays on imported food."
    },
    {
      word: "complacency",
      pos: "noun",
      meaning: "A feeling of uncritical satisfaction with oneself or one's achievements.",
      naturalCollocation: "monopolistic complacency / breeding complacency",
      organicExample:
        "Sheltered domestic food markets inevitably breed complacency, resulting in inflated prices and sluggish innovation.",
      mechanicalPitfall: "Ensure correct noun form rather than confusing with 'complaisance'.",
      examinerInsight: "Exemplifies nuanced economic vocabulary that examiners look for at Band 8.5–9."
    },
    {
      word: "catalyze",
      pos: "verb",
      meaning: "Cause or accelerate a process or action without being consumed.",
      naturalCollocation: "catalyze innovation / catalyze modernization",
      organicExample:
        "International supermarket competition has served to catalyze innovation in domestic greenhouse automation.",
      mechanicalPitfall: "Avoid using 'cause' repeatedly; use 'catalyze' when an external force speeds up transformation.",
      examinerInsight: "Demonstrates powerful precision in explaining causal relationships."
    }
  ]
};