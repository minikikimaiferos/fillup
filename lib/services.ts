export interface Service {
  slug: string;
  icon: string;
  externalLink?: string;
  content: {
    fr: ServiceContent;
    en: ServiceContent;
    nl?: ServiceContent;
  };
}

export interface ServiceContent {
  title: string;
  tagline: string;
  whatIs: string;
  benefits: { title: string; desc: string }[];
  approach: { step: string; desc: string }[];
  relatedSlugs: string[];
}

export const services: Service[] = [
  {
    slug: "optimisation-digitale",
    icon: "TrendingUp",
    content: {
      fr: {
        title: "Optimisation Digitale",
        tagline:
          "Remplacez les tâches chronophages par des outils intelligents qui font le travail pour vous",
        whatIs:
          "On identifie les tâches qui vous prennent du temps au quotidien et on les remplace par des outils d'IA que l'on maîtrise ou des méthodologies confirmées. Le but est simple : obtenir les mêmes résultats — voire meilleurs — avec moins d'effort. Mise en place de plugins, configuration d'outils d'automatisation, optimisation de vos workflows existants. On ne change pas ce qui fonctionne, on le rend plus rapide et plus efficace.",
        benefits: [
          {
            title: "Moins d'effort, mêmes résultats",
            desc: "Des tâches autrefois chronophages remplacées par des outils d'IA et des process optimisés qui tournent en autonomie.",
          },
          {
            title: "Outils d'IA maîtrisés",
            desc: "On ne teste pas des gadgets — on déploie des outils qu'on connaît, qu'on a validés et qu'on sait configurer pour votre cas.",
          },
          {
            title: "Plugins & intégrations",
            desc: "Mise en place de plugins et d'extensions qui s'intègrent dans vos outils existants pour les rendre plus performants.",
          },
          {
            title: "Méthodologies éprouvées",
            desc: "Des approches testées et confirmées, pas des expériences. Chaque optimisation est basée sur ce qui fonctionne déjà.",
          },
        ],
        approach: [
          {
            step: "Analyse des workflows",
            desc: "On identifie les tâches répétitives et chronophages dans votre fonctionnement actuel.",
          },
          {
            step: "Sélection des outils",
            desc: "On choisit les outils d'IA et les méthodologies les plus adaptés à chaque tâche identifiée.",
          },
          {
            step: "Configuration & plugins",
            desc: "Mise en place des outils, installation des plugins et configuration sur mesure pour votre environnement.",
          },
          {
            step: "Formation",
            desc: "On vous montre comment utiliser chaque outil pour que vous soyez autonome au quotidien.",
          },
          {
            step: "Suivi & ajustement",
            desc: "On mesure les gains de temps réels et on ajuste les outils pour maximiser l'efficacité.",
          },
        ],
        relatedSlugs: [
          "developpement-web",
          "ads-social-media",
          "ia-automatisation",
        ],
      },
      en: {
        title: "Digital Optimization",
        tagline:
          "Replace time-consuming tasks with smart tools that do the work for you",
        whatIs:
          "We identify the tasks that eat up your time every day and replace them with AI tools we've mastered or proven methodologies. The goal is simple: get the same results — or better — with less effort. Plugin setup, automation tool configuration, optimization of your existing workflows. We don't change what works, we make it faster and more efficient.",
        benefits: [
          {
            title: "Less effort, same results",
            desc: "Formerly time-consuming tasks replaced by AI tools and optimized processes that run on their own.",
          },
          {
            title: "Mastered AI tools",
            desc: "We don't test gadgets — we deploy tools we know, have validated and know how to configure for your case.",
          },
          {
            title: "Plugins & integrations",
            desc: "Setup of plugins and extensions that integrate into your existing tools to make them more powerful.",
          },
          {
            title: "Proven methodologies",
            desc: "Tested and confirmed approaches, not experiments. Every optimization is based on what already works.",
          },
        ],
        approach: [
          {
            step: "Workflow analysis",
            desc: "We identify repetitive and time-consuming tasks in your current operations.",
          },
          {
            step: "Tool selection",
            desc: "We choose the best AI tools and methodologies for each identified task.",
          },
          {
            step: "Configuration & plugins",
            desc: "Tool setup, plugin installation and custom configuration for your environment.",
          },
          {
            step: "Training",
            desc: "We show you how to use each tool so you're autonomous day-to-day.",
          },
          {
            step: "Tracking & adjustment",
            desc: "We measure real time savings and fine-tune the tools to maximize efficiency.",
          },
        ],
        relatedSlugs: [
          "developpement-web",
          "ads-social-media",
          "ia-automatisation",
        ],
      },
      nl: {
        title: "Digitale Optimalisatie",
        tagline:
          "Vervang tijdrovende taken door slimme tools die het werk voor u doen",
        whatIs:
          "We identificeren de taken die uw dagelijks tijd kosten en vervangen ze door AI-tools die we beheersen of door beproefde methodieken. Het doel is simpel: dezelfde resultaten — of beter — met minder inspanning. Plugin-installatie, configuratie van automatiseringstools, optimalisatie van uw bestaande workflows. We veranderen niet wat werkt, we maken het sneller en efficiënter.",
        benefits: [
          {
            title: "Minder inspanning, zelfde resultaten",
            desc: "Voorheen tijdrovende taken vervangen door AI-tools en geoptimaliseerde processen die autonoom draaien.",
          },
          {
            title: "Beheerste AI-tools",
            desc: "We testen geen gadgets — we gebruiken tools die we kennen, gevalideerd hebben en voor uw geval kunnen configureren.",
          },
          {
            title: "Plugins & integraties",
            desc: "Installatie van plugins en extensies die in uw bestaande tools integreren om ze krachtiger te maken.",
          },
          {
            title: "Beproefde methodieken",
            desc: "Geteste en bevestigde benaderingen, geen experimenten. Elke optimalisatie is gebaseerd op wat al werkt.",
          },
        ],
        approach: [
          {
            step: "Workflow-analyse",
            desc: "We identificeren repetitieve en tijdrovende taken in uw huidige werking.",
          },
          {
            step: "Toolselectie",
            desc: "We kiezen de AI-tools en methodieken die het beste bij elke geïdentificeerde taak passen.",
          },
          {
            step: "Configuratie & plugins",
            desc: "Tool-installatie, plugin-configuratie en maatwerk voor uw omgeving.",
          },
          {
            step: "Opleiding",
            desc: "We leren u hoe elke tool te gebruiken zodat u dagelijks autonoom bent.",
          },
          {
            step: "Opvolging & bijsturing",
            desc: "We meten de reële tijdwinst en sturen de tools bij om de efficiëntie te maximaliseren.",
          },
        ],
        relatedSlugs: [
          "developpement-web",
          "ads-social-media",
          "ia-automatisation",
        ],
      },
    },
  },
  {
    slug: "developpement-web",
    icon: "Code",
    content: {
      fr: {
        title: "Développement Web & Apps",
        tagline: "Des sites et applications qui servent vos objectifs business",
        whatIs:
          "On conçoit et développe des sites web, landing pages, applications et plateformes sur mesure. Mais on va plus loin : on crée aussi des web apps sur mesure pour répondre à des besoins spécifiques — bots d'automatisation, outils de scraping, cartes digitales interactives, applications métier pour gérer vos opérations ou celles de vos clients. Chaque projet est pensé pour convertir et vous positionner comme la référence numéro un dans votre domaine : architecture optimisée pour le référencement, performance technique poussée, intégration avec vos outils existants (formulaires de contact, systèmes de réservation, outils d'emailing). On s'assure aussi que vos pages de destination sont prêtes à accueillir le trafic de vos campagnes publicitaires.",
        benefits: [
          {
            title: "Pensé pour convertir",
            desc: "Pages de destination optimisées, formulaires connectés, parcours utilisateur fluide du clic à la prise de contact.",
          },
          {
            title: "Référencement intégré dès le départ",
            desc: "Structure technique pensée pour vous hisser en tête des résultats : balises, vitesse, maillage interne, indexation.",
          },
          {
            title: "Connecté à vos outils",
            desc: "Intégration avec vos plateformes d'emailing, CRM, outils de réservation et systèmes de suivi.",
          },
          {
            title: "Évolutif",
            desc: "Code propre et architecture modulaire pour ajouter des fonctionnalités sans tout refaire.",
          },
        ],
        approach: [
          {
            step: "Cadrage du besoin",
            desc: "On définit ensemble les objectifs, les fonctionnalités et les contraintes techniques.",
          },
          {
            step: "Design & maquettes",
            desc: "Prototypes visuels validés avec vous avant de coder une seule ligne.",
          },
          {
            step: "Développement",
            desc: "Construction avec des technologies modernes, tests continus et optimisation performance.",
          },
          {
            step: "Intégrations",
            desc: "Connexion avec vos outils : formulaire de contact, emailing, réservation, analytics.",
          },
          {
            step: "Mise en ligne & support",
            desc: "Déploiement, vérifications finales et support continu pour les évolutions.",
          },
        ],
        relatedSlugs: [
          "optimisation-digitale",
          "ads-social-media",
          "ia-automatisation",
        ],
      },
      en: {
        title: "Web & App Development",
        tagline: "Websites and apps that serve your business goals",
        whatIs:
          "We design and develop custom websites, landing pages, applications and platforms. But we go further: we also build custom web apps for specific needs — automation bots, scraping tools, interactive digital maps, business applications to manage your operations or your clients'. Every project is built to convert and to position you as the number-one reference in your field: search-optimized architecture, deep technical performance, integration with your existing tools (contact forms, booking systems, emailing platforms). We also ensure your landing pages are ready to receive traffic from your ad campaigns.",
        benefits: [
          {
            title: "Built to convert",
            desc: "Optimized landing pages, connected forms, smooth user journey from click to contact.",
          },
          {
            title: "Search visibility from day one",
            desc: "Technical structure built to climb to the top of results: tags, speed, internal linking, indexation.",
          },
          {
            title: "Connected to your tools",
            desc: "Integration with your emailing platforms, CRM, booking tools and tracking systems.",
          },
          {
            title: "Scalable",
            desc: "Clean code and modular architecture to add features without rebuilding.",
          },
        ],
        approach: [
          {
            step: "Scoping",
            desc: "Together we define objectives, features and technical constraints.",
          },
          {
            step: "Design & mockups",
            desc: "Visual prototypes validated with you before writing a single line of code.",
          },
          {
            step: "Development",
            desc: "Built with modern technologies, continuous testing and performance optimization.",
          },
          {
            step: "Integrations",
            desc: "Connect with your tools: contact forms, emailing, bookings, analytics.",
          },
          {
            step: "Launch & support",
            desc: "Deployment, final checks and ongoing support for future evolutions.",
          },
        ],
        relatedSlugs: [
          "optimisation-digitale",
          "ads-social-media",
          "ia-automatisation",
        ],
      },
      nl: {
        title: "Web & App Development",
        tagline: "Websites en apps die uw businessdoelen dienen",
        whatIs:
          "We ontwerpen en ontwikkelen websites op maat, landingspagina's, applicaties en platformen. Maar we gaan verder: we bouwen ook custom web apps voor specifieke behoeften — automatiseringsbots, scraping-tools, interactieve digitale kaarten, business-applicaties om uw activiteiten of die van uw klanten te beheren. Elk project is gebouwd om te converteren en u te positioneren als dé referentie nummer één in uw vakgebied: architectuur geoptimaliseerd voor zoekmachines, doorgedreven technische prestaties, integratie met uw bestaande tools (contactformulieren, reserveringssystemen, e-mailplatformen). We zorgen er ook voor dat uw landingspagina's klaar zijn om het verkeer van uw advertentiecampagnes te ontvangen.",
        benefits: [
          {
            title: "Gebouwd om te converteren",
            desc: "Geoptimaliseerde landingspagina's, verbonden formulieren, vloeiende gebruikerservaring van klik tot contact.",
          },
          {
            title: "Referencering vanaf dag één",
            desc: "Technische structuur ontworpen om u naar de top van de resultaten te brengen: tags, snelheid, interne links, indexering.",
          },
          {
            title: "Verbonden met uw tools",
            desc: "Integratie met uw e-mailplatformen, CRM, reserveringstools en trackingsystemen.",
          },
          {
            title: "Schaalbaar",
            desc: "Schone code en modulaire architectuur om functies toe te voegen zonder alles opnieuw te bouwen.",
          },
        ],
        approach: [
          {
            step: "Scoping",
            desc: "Samen definiëren we doelen, functies en technische beperkingen.",
          },
          {
            step: "Design & mockups",
            desc: "Visuele prototypes gevalideerd met u voordat er één regel code geschreven wordt.",
          },
          {
            step: "Development",
            desc: "Gebouwd met moderne technologieën, continue tests en performance-optimalisatie.",
          },
          {
            step: "Integraties",
            desc: "Verbinding met uw tools: contactformulieren, e-mailing, boekingen, analytics.",
          },
          {
            step: "Lancering & support",
            desc: "Deployment, eindcontroles en continue ondersteuning voor toekomstige ontwikkelingen.",
          },
        ],
        relatedSlugs: [
          "optimisation-digitale",
          "ads-social-media",
          "ia-automatisation",
        ],
      },
    },
  },
  {
    slug: "audiovisuel",
    icon: "Video",
    content: {
      fr: {
        title: "Audiovisuel & Production Créative",
        tagline:
          "Une équipe dédiée à la création de contenu qui performe",
        whatIs:
          "On a une équipe spécialisée dans la création audiovisuelle, capable de gérer plusieurs types de shootings selon votre budget — du tournage physique sur le terrain à la production digitale en studio ou à distance. Notre force, c'est de produire du contenu taillé pour les réseaux : reels, courts formats, hooks qui accrochent dès la première seconde, visuels publicitaires et bannières. On analyse les formats qui performent dans votre secteur, on en tire les structures gagnantes, puis on les adapte à votre marque avec une vraie direction artistique. Et pour accélérer la cadence, on s'appuie aussi sur des outils d'IA qui nous simplifient la vie et démultiplient le volume livré sans sacrifier la qualité.",
        benefits: [
          {
            title: "Équipe experte en création de contenu",
            desc: "Une vraie équipe spécialisée en audiovisuel, pas juste des outils — des créateurs qui savent raconter votre marque en images.",
          },
          {
            title: "Shootings physiques & digitaux",
            desc: "On s'adapte à votre budget : tournage terrain avec matériel pro ou production 100% digitale, selon le format qui sert le mieux votre message.",
          },
          {
            title: "Spécialistes du short form",
            desc: "Reels, TikTok, courts formats, hooks d'accroche — tout ce qui fait la dynamique des réseaux aujourd'hui, on le maîtrise.",
          },
          {
            title: "Volume & rapidité grâce à l'IA",
            desc: "On combine savoir-faire humain et outils d'IA pour alimenter vos campagnes en continu, sans goulot d'étranglement.",
          },
        ],
        approach: [
          {
            step: "Brief créatif",
            desc: "On cadre votre besoin, votre marque et le type de shooting adapté à votre budget et vos objectifs.",
          },
          {
            step: "Veille & benchmarks",
            desc: "Analyse des hooks, formats et structures qui performent dans votre secteur et chez vos concurrents.",
          },
          {
            step: "Shooting & production",
            desc: "Tournage physique ou digital selon le projet, avec notre équipe spécialisée en création audiovisuelle.",
          },
          {
            step: "Montage & déclinaisons",
            desc: "Montage dynamique, déclinaison en reels, courts formats, stories, bannières et visuels publicitaires.",
          },
          {
            step: "Accélération IA",
            desc: "Nos outils d'IA viennent en appui pour multiplier les variantes, accélérer les itérations et alimenter vos campagnes en continu.",
          },
        ],
        relatedSlugs: [
          "ads-social-media",
          "developpement-web",
          "optimisation-digitale",
        ],
      },
      en: {
        title: "Audiovisual & Creative Production",
        tagline: "A dedicated team for content that performs",
        whatIs:
          "We have a team specialized in audiovisual creation, capable of handling several types of shoots depending on your budget — from on-location physical shoots to studio or remote digital production. Our strength is producing content tailored for social: reels, short-form videos, hooks that grab attention in the first second, ad visuals and banners. We analyze the formats that perform in your industry, extract the winning structures, then adapt them to your brand with real creative direction. And to speed things up, we also leverage AI tools that make our lives easier and multiply the output without sacrificing quality.",
        benefits: [
          {
            title: "Expert content creation team",
            desc: "A real team specialized in audiovisual work, not just tools — creators who know how to tell your brand's story in images.",
          },
          {
            title: "Physical & digital shoots",
            desc: "We adapt to your budget: on-location shoots with pro gear or fully digital production, whichever format best serves your message.",
          },
          {
            title: "Short-form specialists",
            desc: "Reels, TikTok, short formats, attention-grabbing hooks — everything that drives social today, we've got it covered.",
          },
          {
            title: "Volume & speed with AI",
            desc: "We combine human craft with AI tools to fuel your campaigns continuously, without bottlenecks.",
          },
        ],
        approach: [
          {
            step: "Creative brief",
            desc: "We frame your needs, your brand and the type of shoot that fits your budget and goals.",
          },
          {
            step: "Research & benchmarks",
            desc: "Analysis of hooks, formats and structures that perform in your industry and among your competitors.",
          },
          {
            step: "Shoot & production",
            desc: "Physical or digital shoot depending on the project, with our team specialized in audiovisual creation.",
          },
          {
            step: "Editing & variations",
            desc: "Dynamic editing, declination into reels, short formats, stories, banners and ad visuals.",
          },
          {
            step: "AI acceleration",
            desc: "Our AI tools come in as support to multiply variants, speed up iterations and keep your campaigns fueled.",
          },
        ],
        relatedSlugs: [
          "ads-social-media",
          "developpement-web",
          "optimisation-digitale",
        ],
      },
      nl: {
        title: "Audiovisueel & Creatieve Productie",
        tagline: "Een toegewijd team voor content die presteert",
        whatIs:
          "We hebben een team gespecialiseerd in audiovisuele creatie, in staat om verschillende soorten shoots te beheren afhankelijk van uw budget — van fysieke opnames op locatie tot digitale productie in studio of op afstand. Onze kracht is het produceren van content op maat voor sociale media: reels, short-form video's, hooks die vanaf de eerste seconde de aandacht trekken, advertentievisuals en banners. We analyseren de formats die in uw sector presteren, halen de winnende structuren eruit en passen ze aan uw merk aan met echte artistieke regie. En om het tempo te verhogen, leunen we ook op AI-tools die ons leven makkelijker maken en het geleverde volume vermenigvuldigen zonder in te boeten op kwaliteit.",
        benefits: [
          {
            title: "Expert contentcreatieteam",
            desc: "Een echt team gespecialiseerd in audiovisueel werk, niet alleen tools — creators die uw merk in beeld weten te brengen.",
          },
          {
            title: "Fysieke & digitale shoots",
            desc: "We passen ons aan uw budget aan: opnames op locatie met professionele apparatuur of volledig digitale productie, wat uw boodschap het beste dient.",
          },
          {
            title: "Short-form specialisten",
            desc: "Reels, TikTok, korte formats, aandachttrekkende hooks — alles wat sociale media vandaag drijft, hebben we in huis.",
          },
          {
            title: "Volume & snelheid dankzij AI",
            desc: "We combineren menselijk vakmanschap met AI-tools om uw campagnes continu te voeden, zonder knelpunten.",
          },
        ],
        approach: [
          {
            step: "Creatieve briefing",
            desc: "We kaderen uw behoeften, uw merk en het type shoot dat past bij uw budget en doelen.",
          },
          {
            step: "Onderzoek & benchmarks",
            desc: "Analyse van hooks, formats en structuren die presteren in uw sector en bij uw concurrenten.",
          },
          {
            step: "Shoot & productie",
            desc: "Fysieke of digitale opname afhankelijk van het project, met ons team gespecialiseerd in audiovisuele creatie.",
          },
          {
            step: "Montage & varianten",
            desc: "Dynamische montage, uitwerking in reels, korte formats, stories, banners en advertentievisuals.",
          },
          {
            step: "AI-versnelling",
            desc: "Onze AI-tools komen ter ondersteuning om varianten te vermenigvuldigen, iteraties te versnellen en uw campagnes gevoed te houden.",
          },
        ],
        relatedSlugs: [
          "ads-social-media",
          "developpement-web",
          "optimisation-digitale",
        ],
      },
    },
  },
  {
    slug: "ia-automatisation",
    icon: "BrainCircuit",
    content: {
      fr: {
        title: "IA & Automatisation",
        tagline: "Automatisez ce qui peut l'être, concentrez-vous sur ce qui compte",
        whatIs:
          "On met en place des systèmes d'automatisation et des outils d'intelligence artificielle pour accélérer vos opérations. Prospection automatisée, extraction de données, enrichissement de bases de contacts, vérification d'emails, CRM intelligent, relances programmées — on structure des workflows qui tournent en continu sans intervention manuelle. On utilise aussi l'IA pour la génération de contenu, l'analyse de données et l'optimisation de vos processus internes.",
        benefits: [
          {
            title: "Prospection à grande échelle",
            desc: "Extraction automatisée de prospects depuis les annuaires, réseaux professionnels et bases de données publiques.",
          },
          {
            title: "Données propres et exploitables",
            desc: "Enrichissement et vérification automatique de vos contacts pour des campagnes qui atteignent leur cible.",
          },
          {
            title: "Workflows autonomes",
            desc: "Séquences d'emails, relances et suivis qui s'exécutent sans intervention manuelle.",
          },
          {
            title: "Temps libéré",
            desc: "Moins de tâches répétitives pour vos équipes, plus de temps pour les interactions à forte valeur.",
          },
        ],
        approach: [
          {
            step: "Cartographie des process",
            desc: "On identifie les tâches répétitives, les goulots d'étranglement et les opportunités d'automatisation.",
          },
          {
            step: "Mise en place des outils",
            desc: "Configuration des outils d'extraction, d'enrichissement, de vérification et de séquençage.",
          },
          {
            step: "Construction des workflows",
            desc: "Création des chaînes d'automatisation avec déclencheurs, conditions et actions.",
          },
          {
            step: "Formation",
            desc: "Vos équipes apprennent à piloter et ajuster les automatisations au quotidien.",
          },
          {
            step: "Optimisation continue",
            desc: "Suivi des performances, ajustement des séquences et amélioration itérative.",
          },
        ],
        relatedSlugs: [
          "optimisation-digitale",
          "secretariat-b2b",
          "ads-social-media",
        ],
      },
      en: {
        title: "AI & Automation",
        tagline: "Automate what can be, focus on what matters",
        whatIs:
          "We set up automation systems and AI tools to accelerate your operations. Automated prospecting, data extraction, contact database enrichment, email verification, smart CRM, scheduled follow-ups — we build workflows that run continuously without manual intervention. We also use AI for content generation, data analysis and optimization of your internal processes.",
        benefits: [
          {
            title: "Prospecting at scale",
            desc: "Automated prospect extraction from directories, professional networks and public databases.",
          },
          {
            title: "Clean, actionable data",
            desc: "Automatic enrichment and verification of your contacts for campaigns that reach their target.",
          },
          {
            title: "Autonomous workflows",
            desc: "Email sequences, follow-ups and tracking that run without manual intervention.",
          },
          {
            title: "Time freed up",
            desc: "Fewer repetitive tasks for your teams, more time for high-value interactions.",
          },
        ],
        approach: [
          {
            step: "Process mapping",
            desc: "We identify repetitive tasks, bottlenecks and automation opportunities.",
          },
          {
            step: "Tool setup",
            desc: "Configure extraction, enrichment, verification and sequencing tools.",
          },
          {
            step: "Workflow building",
            desc: "Create automation chains with triggers, conditions and actions.",
          },
          {
            step: "Training",
            desc: "Your teams learn to manage and adjust automations day-to-day.",
          },
          {
            step: "Continuous optimization",
            desc: "Performance tracking, sequence tuning and iterative improvement.",
          },
        ],
        relatedSlugs: [
          "optimisation-digitale",
          "secretariat-b2b",
          "ads-social-media",
        ],
      },
      nl: {
        title: "AI & Automatisering",
        tagline: "Automatiseer wat kan, focus op wat telt",
        whatIs:
          "We zetten automatiseringssystemen en AI-tools op om uw werking te versnellen. Geautomatiseerde prospectie, data-extractie, verrijking van contactdatabases, e-mailverificatie, slim CRM, geplande opvolgingen — we bouwen workflows die continu draaien zonder manuele tussenkomst. We gebruiken AI ook voor contentgeneratie, data-analyse en optimalisatie van uw interne processen.",
        benefits: [
          {
            title: "Prospectie op grote schaal",
            desc: "Geautomatiseerde extractie van prospects uit directories, professionele netwerken en openbare databases.",
          },
          {
            title: "Schone, bruikbare data",
            desc: "Automatische verrijking en verificatie van uw contacten voor campagnes die hun doel bereiken.",
          },
          {
            title: "Autonome workflows",
            desc: "E-mailsequenties, follow-ups en opvolging die zonder manuele tussenkomst draaien.",
          },
          {
            title: "Tijd vrijgemaakt",
            desc: "Minder repetitieve taken voor uw team, meer tijd voor waardevolle interacties.",
          },
        ],
        approach: [
          {
            step: "Proces-mapping",
            desc: "We identificeren repetitieve taken, knelpunten en automatiseringskansen.",
          },
          {
            step: "Tool-installatie",
            desc: "Configuratie van extractie-, verrijkings-, verificatie- en sequencingtools.",
          },
          {
            step: "Workflow-opbouw",
            desc: "Creatie van automatiseringsketens met triggers, condities en acties.",
          },
          {
            step: "Opleiding",
            desc: "Uw team leert de automatiseringen dagelijks te beheren en bij te sturen.",
          },
          {
            step: "Continue optimalisatie",
            desc: "Performance-opvolging, afstelling van sequenties en iteratieve verbetering.",
          },
        ],
        relatedSlugs: [
          "optimisation-digitale",
          "secretariat-b2b",
          "ads-social-media",
        ],
      },
    },
  },
  {
    slug: "ads-social-media",
    icon: "Megaphone",
    content: {
      fr: {
        title: "Ads & Social Media",
        tagline:
          "SEO, SEA, GEO : être visible partout où vos clients cherchent",
        whatIs:
          "On crée et pilote vos campagnes publicitaires sur Google Ads, Meta (Facebook/Instagram) et TikTok, mais on va plus loin que la pub classique. On travaille les trois leviers de visibilité modernes : le SEO (référencement naturel sur Google), le SEA (campagnes payantes ciblées) et le GEO (Generative Engine Optimization) — c'est-à-dire les techniques qu'on développe pour placer nos clients en tête des réponses des moteurs IA comme ChatGPT, Perplexity ou Gemini. Parce que demain, vos clients ne chercheront plus uniquement sur Google. Recherche de mots-clés, rédaction des annonces, ciblage géographique et par audience, gestion du budget, A/B testing et optimisation continue — on couvre toute la chaîne.",
        benefits: [
          {
            title: "Visible sur Google et les IA",
            desc: "On combine SEO, SEA et GEO pour que vous apparaissiez à la fois dans les résultats Google classiques et dans les réponses des moteurs IA qui prennent de l'ampleur.",
          },
          {
            title: "Budget maîtrisé",
            desc: "On démarre petit, on teste, on optimise et on scale ce qui fonctionne. Chaque euro est tracé.",
          },
          {
            title: "Ciblage chirurgical",
            desc: "Zone géographique, horaires, mots-clés, centres d'intérêt — on touche les bonnes personnes au bon moment.",
          },
          {
            title: "Reporting transparent",
            desc: "Rapports réguliers avec coût par lead, taux de conversion et recommandations concrètes.",
          },
        ],
        approach: [
          {
            step: "Stratégie & mots-clés",
            desc: "Analyse du marché, recherche de mots-clés et définition du positionnement publicitaire.",
          },
          {
            step: "Création des campagnes",
            desc: "Configuration des comptes, rédaction des annonces, paramétrage du ciblage et du budget.",
          },
          {
            step: "Création des visuels",
            desc: "Production des créatives publicitaires adaptées à chaque plateforme et audience.",
          },
          {
            step: "Lancement & monitoring",
            desc: "Activation des campagnes avec suivi quotidien des performances.",
          },
          {
            step: "Optimisation & scaling",
            desc: "A/B testing, ajustement des enchères, réallocation du budget vers les meilleurs résultats.",
          },
          {
            step: "Reporting",
            desc: "Bilans réguliers avec KPIs, insights et plan d'action pour la période suivante.",
          },
        ],
        relatedSlugs: [
          "audiovisuel",
          "optimisation-digitale",
          "developpement-web",
        ],
      },
      en: {
        title: "Ads & Social Media",
        tagline:
          "SEO, SEA, GEO: be visible wherever your customers search",
        whatIs:
          "We create and manage your advertising campaigns on Google Ads, Meta (Facebook/Instagram) and TikTok, but we go further than classic ads. We work the three modern visibility levers: SEO (organic search on Google), SEA (targeted paid campaigns) and GEO (Generative Engine Optimization) — the techniques we're developing to place our clients at the top of AI engine answers like ChatGPT, Perplexity or Gemini. Because tomorrow, your customers won't only be searching on Google. Keyword research, ad copywriting, geographic and audience targeting, budget management, A/B testing and continuous optimization — we cover the full chain.",
        benefits: [
          {
            title: "Visible on Google and AI engines",
            desc: "We combine SEO, SEA and GEO so you appear in classic Google results and in the answers of the AI engines that are taking over.",
          },
          {
            title: "Controlled budget",
            desc: "We start small, test, optimize and scale what works. Every euro is tracked.",
          },
          {
            title: "Surgical targeting",
            desc: "Geographic zone, hours, keywords, interests — we reach the right people at the right time.",
          },
          {
            title: "Transparent reporting",
            desc: "Regular reports with cost per lead, conversion rate and actionable recommendations.",
          },
        ],
        approach: [
          {
            step: "Strategy & keywords",
            desc: "Market analysis, keyword research and ad positioning definition.",
          },
          {
            step: "Campaign creation",
            desc: "Account setup, ad copywriting, targeting and budget configuration.",
          },
          {
            step: "Creative production",
            desc: "Ad creatives produced and adapted for each platform and audience.",
          },
          {
            step: "Launch & monitoring",
            desc: "Campaign activation with daily performance tracking.",
          },
          {
            step: "Optimization & scaling",
            desc: "A/B testing, bid adjustments, budget reallocation toward best results.",
          },
          {
            step: "Reporting",
            desc: "Regular reviews with KPIs, insights and action plan for the next period.",
          },
        ],
        relatedSlugs: [
          "audiovisuel",
          "optimisation-digitale",
          "developpement-web",
        ],
      },
      nl: {
        title: "Ads & Social Media",
        tagline:
          "SEO, SEA, GEO: zichtbaar overal waar uw klanten zoeken",
        whatIs:
          "We creëren en beheren uw advertentiecampagnes op Google Ads, Meta (Facebook/Instagram) en TikTok, maar we gaan verder dan klassieke advertenties. We bewerken de drie moderne zichtbaarheidshefbomen: SEO (organische zoekresultaten op Google), SEA (gerichte betaalde campagnes) en GEO (Generative Engine Optimization) — de technieken die we ontwikkelen om onze klanten bovenaan de antwoorden van AI-engines zoals ChatGPT, Perplexity of Gemini te plaatsen. Want morgen zoeken uw klanten niet langer alleen op Google. Zoekwoordenonderzoek, advertentietekst, geografische en doelgroepgerichte targeting, budgetbeheer, A/B-testen en continue optimalisatie — we dekken de volledige keten.",
        benefits: [
          {
            title: "Zichtbaar op Google en AI-engines",
            desc: "We combineren SEO, SEA en GEO zodat u zowel in de klassieke Google-resultaten als in de antwoorden van de opkomende AI-engines verschijnt.",
          },
          {
            title: "Gecontroleerd budget",
            desc: "We beginnen klein, testen, optimaliseren en schalen wat werkt. Elke euro wordt getraceerd.",
          },
          {
            title: "Chirurgische targeting",
            desc: "Geografische zone, uren, trefwoorden, interesses — we bereiken de juiste mensen op het juiste moment.",
          },
          {
            title: "Transparante rapportering",
            desc: "Regelmatige rapporten met kost per lead, conversiepercentage en concrete aanbevelingen.",
          },
        ],
        approach: [
          {
            step: "Strategie & trefwoorden",
            desc: "Marktanalyse, zoekwoordenonderzoek en definitie van de advertentiepositionering.",
          },
          {
            step: "Campagnecreatie",
            desc: "Account-setup, advertentietekst, targeting- en budgetconfiguratie.",
          },
          {
            step: "Creatieve productie",
            desc: "Advertentievisuals geproduceerd en aangepast voor elk platform en elke doelgroep.",
          },
          {
            step: "Lancering & monitoring",
            desc: "Activering van campagnes met dagelijkse performance-opvolging.",
          },
          {
            step: "Optimalisatie & schaling",
            desc: "A/B-testen, bijstelling van biedingen, herverdeling van budget naar de beste resultaten.",
          },
          {
            step: "Rapportering",
            desc: "Regelmatige reviews met KPI's, inzichten en actieplan voor de volgende periode.",
          },
        ],
        relatedSlugs: [
          "audiovisuel",
          "optimisation-digitale",
          "developpement-web",
        ],
      },
    },
  },
  {
    slug: "secretariat-b2b",
    icon: "Briefcase",
    content: {
      fr: {
        title: "Secrétariat & Gestion B2B",
        tagline: "L'approche directe : une base de données qualifiée et une secrétaire qui parle à vos prospects",
        whatIs:
          "Parfois, la meilleure approche n'est pas digitale — elle est directe. On dispose d'une large base de données d'entreprises que nous avons récoltée, triée et filtrée pour couvrir de nombreux secteurs et zones géographiques. Notre secrétaire dédiée prend directement contact avec ces entreprises pour mettre vos produits et services en avant, de manière locale et ciblée. C'est une approche qui vient casser tout le côté purement digital qu'on déploie par ailleurs : un vrai contact humain, avec une voix, une relation, un suivi. On adapte les listes et l'approche en fonction de vos demandes — votre cible, votre zone, votre pitch. Vous gardez le contrôle, on actionne le terrain.",
        benefits: [
          {
            title: "Base de données qualifiée",
            desc: "Une base d'entreprises B2B déjà récoltée, triée et filtrée, prête à être exploitée et adaptée à votre cible.",
          },
          {
            title: "Approche directe & humaine",
            desc: "Une secrétaire dédiée qui prend contact en direct avec vos prospects — le contre-pied de l'approche 100% digitale, quand ça fait la différence.",
          },
          {
            title: "Mise en avant locale",
            desc: "On exploite la base pour positionner vos produits et services auprès d'entreprises proches de votre zone d'action et de votre marché.",
          },
          {
            title: "Adapté à votre demande",
            desc: "On filtre et on adapte la base selon vos critères : secteur, taille, localisation, pour que chaque appel serve votre stratégie.",
          },
        ],
        approach: [
          {
            step: "Brief & ciblage",
            desc: "On comprend votre offre, votre cible et la zone géographique à travailler en priorité.",
          },
          {
            step: "Extraction & filtrage",
            desc: "On pioche dans notre base, on filtre selon vos critères et on prépare une liste de contacts qualifiés et pertinents.",
          },
          {
            step: "Prise de contact directe",
            desc: "Notre secrétaire contacte directement les entreprises pour présenter votre offre, de manière humaine et adaptée.",
          },
          {
            step: "Suivi & qualification",
            desc: "Chaque contact est suivi, qualifié et transmis avec les informations utiles pour que vous puissiez conclure.",
          },
          {
            step: "Reporting & ajustements",
            desc: "Bilan des appels, des retours et ajustement du pitch et du ciblage pour maximiser les retombées.",
          },
        ],
        relatedSlugs: [
          "ia-automatisation",
          "optimisation-digitale",
          "ads-social-media",
        ],
      },
      en: {
        title: "Secretarial & B2B Management",
        tagline: "The direct approach: a qualified database and a secretary talking to your prospects",
        whatIs:
          "Sometimes, the best approach isn't digital — it's direct. We have a large database of companies that we've gathered, sorted and filtered to cover many industries and geographic areas. Our dedicated secretary reaches out directly to these companies to put your products and services forward, locally and with precision. It's an approach that breaks the purely digital playbook we deploy elsewhere: a real human contact, with a voice, a relationship, a follow-up. We tailor the lists and the pitch to your needs — your target, your area, your message. You stay in control, we work the field.",
        benefits: [
          {
            title: "Qualified database",
            desc: "A B2B database already gathered, sorted and filtered, ready to be activated and adapted to your target.",
          },
          {
            title: "Direct & human approach",
            desc: "A dedicated secretary reaching out directly to your prospects — the opposite of the 100% digital approach, when that's what makes the difference.",
          },
          {
            title: "Local positioning",
            desc: "We leverage the database to position your products and services with companies close to your area and your market.",
          },
          {
            title: "Adapted to your request",
            desc: "We filter and adapt the base to your criteria: industry, size, location, so every call serves your strategy.",
          },
        ],
        approach: [
          {
            step: "Brief & targeting",
            desc: "We understand your offer, your target and the geographic area to prioritize.",
          },
          {
            step: "Extraction & filtering",
            desc: "We pull from our database, filter by your criteria and prepare a list of qualified, relevant contacts.",
          },
          {
            step: "Direct outreach",
            desc: "Our secretary contacts companies directly to pitch your offer, in a human and adapted way.",
          },
          {
            step: "Follow-up & qualification",
            desc: "Every contact is tracked, qualified and passed to you with the info you need to close.",
          },
          {
            step: "Reporting & adjustments",
            desc: "Review of calls, feedback and tuning of the pitch and targeting to maximize results.",
          },
        ],
        relatedSlugs: [
          "ia-automatisation",
          "optimisation-digitale",
          "ads-social-media",
        ],
      },
      nl: {
        title: "Secretariaat & B2B Beheer",
        tagline: "De directe aanpak: een gekwalificeerde database en een secretaresse die met uw prospects spreekt",
        whatIs:
          "Soms is de beste aanpak niet digitaal — maar direct. We beschikken over een uitgebreide database van bedrijven die we hebben verzameld, gesorteerd en gefilterd om vele sectoren en geografische gebieden te dekken. Onze toegewijde secretaresse neemt rechtstreeks contact op met deze bedrijven om uw producten en diensten lokaal en gericht in de kijker te zetten. Het is een aanpak die de volledig digitale strategie die we elders uitrollen doorbreekt: een echt menselijk contact, met een stem, een relatie, een opvolging. We passen de lijsten en de aanpak aan volgens uw wensen — uw doelgroep, uw regio, uw pitch. U behoudt de controle, wij activeren het terrein.",
        benefits: [
          {
            title: "Gekwalificeerde database",
            desc: "Een B2B-database die al verzameld, gesorteerd en gefilterd is, klaar om geactiveerd en aangepast te worden aan uw doelgroep.",
          },
          {
            title: "Directe & menselijke aanpak",
            desc: "Een toegewijde secretaresse die rechtstreeks contact opneemt met uw prospects — het tegendeel van de 100% digitale aanpak, wanneer dat het verschil maakt.",
          },
          {
            title: "Lokale positionering",
            desc: "We benutten de database om uw producten en diensten te positioneren bij bedrijven dicht bij uw werkgebied en markt.",
          },
          {
            title: "Aangepast aan uw vraag",
            desc: "We filteren en passen de database aan volgens uw criteria: sector, grootte, locatie, zodat elk gesprek uw strategie dient.",
          },
        ],
        approach: [
          {
            step: "Briefing & targeting",
            desc: "We begrijpen uw aanbod, uw doelgroep en het prioritaire werkgebied.",
          },
          {
            step: "Extractie & filtering",
            desc: "We putten uit onze database, filteren volgens uw criteria en bereiden een lijst van gekwalificeerde, relevante contacten voor.",
          },
          {
            step: "Directe outreach",
            desc: "Onze secretaresse neemt rechtstreeks contact op met bedrijven om uw aanbod op een menselijke en aangepaste manier voor te stellen.",
          },
          {
            step: "Opvolging & kwalificatie",
            desc: "Elk contact wordt opgevolgd, gekwalificeerd en aan u doorgegeven met de nodige info om af te sluiten.",
          },
          {
            step: "Rapportering & bijsturing",
            desc: "Overzicht van gesprekken, feedback en bijsturing van pitch en targeting om de resultaten te maximaliseren.",
          },
        ],
        relatedSlugs: [
          "ia-automatisation",
          "optimisation-digitale",
          "ads-social-media",
        ],
      },
    },
  },
  {
    slug: "marketing-consultation",
    icon: "LineChart",
    content: {
      fr: {
        title: "Marketing & Consultation Commerciale",
        tagline: "Réduire les coûts, augmenter les bénéfices — les deux à la fois",
        whatIs:
          "Définir une stratégie, prendre les bonnes décisions commerciales, savoir comment réduire les coûts d'un côté et augmenter les bénéfices de l'autre. Ce sont des mots simples, mais ils englobent beaucoup de choses, parce qu'en réalité, il n'y a jamais une bonne décision — ce sont des dizaines de micro-décisions qui, mises bout à bout, font diminuer vos dépenses ou monter vos marges. On vient jouer sur ces deux angles à la fois. Notre valeur, c'est le point de vue extérieur : c'est plus facile de briser une boucle quand on ne fait pas partie de la boîte. On arrive, pour des coûts minimes, à provoquer de gros changements dans la façon dont l'entreprise opère. Parce que souvent, pour gagner de l'argent, il faut commencer par en dépenser moins.",
        benefits: [
          {
            title: "Réduction des coûts",
            desc: "On traque les dépenses évitables, les outils qui font doublon, les process qui coûtent trop cher — et on vous aide à couper ce qui doit l'être.",
          },
          {
            title: "Augmentation des bénéfices",
            desc: "En parallèle, on identifie les leviers concrets pour augmenter vos marges : positionnement, pricing, upsell, canaux à fort ROI.",
          },
          {
            title: "Point de vue extérieur",
            desc: "On voit ce que vous ne voyez plus parce que vous êtes dedans. Ce recul vaut souvent plus qu'un gros budget conseil.",
          },
          {
            title: "Des micro-décisions qui comptent",
            desc: "Pas de grand plan magique : on empile des petites décisions précises qui, mises ensemble, transforment les résultats.",
          },
        ],
        approach: [
          {
            step: "Audit de l'existant",
            desc: "Analyse de votre stratégie actuelle, vos canaux, vos résultats et votre positionnement face à la concurrence.",
          },
          {
            step: "Étude de marché",
            desc: "Analyse de votre secteur, de vos concurrents et des opportunités digitales inexploitées.",
          },
          {
            step: "Recommandations stratégiques",
            desc: "Choix des canaux prioritaires, budget recommandé, messages clés et positionnement à adopter.",
          },
          {
            step: "Plan d'action",
            desc: "Feuille de route détaillée avec les actions à lancer, les outils à mettre en place et les KPIs à suivre.",
          },
          {
            step: "Accompagnement",
            desc: "Suivi régulier des résultats, ajustement de la stratégie et conseil continu pour garder le cap.",
          },
        ],
        relatedSlugs: [
          "ads-social-media",
          "optimisation-digitale",
          "secretariat-b2b",
        ],
      },
      en: {
        title: "Marketing & Business Consulting",
        tagline: "Cut costs and grow profits — both at once",
        whatIs:
          "Define a strategy, make the right business decisions, figure out how to cut costs on one side and grow profits on the other. These are simple words, but they cover a lot of ground — because in reality, there's never one single good decision. There are dozens of micro-decisions that, stacked together, bring expenses down or push margins up. We play on both angles at once. Our real value is the outside perspective: it's easier to break a loop when you're not inside the company. For a minimal cost, we can trigger major changes in how the business operates. Because often, to make more money, you first have to spend less.",
        benefits: [
          {
            title: "Cost reduction",
            desc: "We track avoidable spending, redundant tools, and processes that cost too much — and help you cut what needs to be cut.",
          },
          {
            title: "Profit growth",
            desc: "At the same time, we identify concrete levers to grow your margins: positioning, pricing, upsell, high-ROI channels.",
          },
          {
            title: "Outside perspective",
            desc: "We see what you no longer see because you're inside it. That distance is often worth more than a big consulting budget.",
          },
          {
            title: "Micro-decisions that matter",
            desc: "No magic grand plan: we stack small, precise decisions that together transform the results.",
          },
        ],
        approach: [
          {
            step: "Current state audit",
            desc: "Analysis of your current strategy, channels, results and positioning against competitors.",
          },
          {
            step: "Market research",
            desc: "Analysis of your industry, competitors and untapped digital opportunities.",
          },
          {
            step: "Strategic recommendations",
            desc: "Priority channel selection, recommended budget, key messages and positioning to adopt.",
          },
          {
            step: "Action plan",
            desc: "Detailed roadmap with actions to launch, tools to implement and KPIs to track.",
          },
          {
            step: "Ongoing support",
            desc: "Regular results monitoring, strategy adjustments and continuous advice to stay on track.",
          },
        ],
        relatedSlugs: [
          "ads-social-media",
          "optimisation-digitale",
          "secretariat-b2b",
        ],
      },
      nl: {
        title: "Marketing & Commerciële Consultancy",
        tagline: "Kosten verlagen, winst verhogen — allebei tegelijk",
        whatIs:
          "Een strategie bepalen, de juiste commerciële beslissingen nemen, weten hoe u aan de ene kant kosten kunt verlagen en aan de andere kant winst kunt laten groeien. Dat zijn eenvoudige woorden, maar ze dekken veel terrein — want in werkelijkheid is er nooit één enkele goede beslissing. Het zijn tientallen micro-beslissingen die, samen opgeteld, uw uitgaven doen dalen of uw marges doen stijgen. Wij spelen tegelijk op beide hoeken. Onze echte meerwaarde is de buitenstaanders-blik: het is makkelijker om een patroon te doorbreken wanneer je niet in het bedrijf zit. Voor minimale kosten kunnen wij grote veranderingen teweegbrengen in hoe het bedrijf opereert. Want vaak, om meer geld te verdienen, moet je eerst minder uitgeven.",
        benefits: [
          {
            title: "Kostenbesparing",
            desc: "We sporen vermijdbare uitgaven op, overbodige tools en processen die te duur zijn — en helpen u te snijden waar nodig.",
          },
          {
            title: "Winstgroei",
            desc: "Tegelijk identificeren we concrete hefbomen om uw marges te laten groeien: positionering, pricing, upsell, kanalen met hoge ROI.",
          },
          {
            title: "Externe blik",
            desc: "We zien wat u niet meer ziet omdat u er middenin zit. Die afstand is vaak meer waard dan een groot consultancybudget.",
          },
          {
            title: "Micro-beslissingen die ertoe doen",
            desc: "Geen magisch groot plan: we stapelen kleine, nauwkeurige beslissingen op die samen de resultaten transformeren.",
          },
        ],
        approach: [
          {
            step: "Audit van het bestaande",
            desc: "Analyse van uw huidige strategie, kanalen, resultaten en positionering tegenover de concurrentie.",
          },
          {
            step: "Marktonderzoek",
            desc: "Analyse van uw sector, concurrenten en onbenutte digitale kansen.",
          },
          {
            step: "Strategische aanbevelingen",
            desc: "Selectie van prioritaire kanalen, aanbevolen budget, kernboodschappen en te hanteren positionering.",
          },
          {
            step: "Actieplan",
            desc: "Gedetailleerde roadmap met acties om te starten, tools om te implementeren en KPI's om op te volgen.",
          },
          {
            step: "Continue begeleiding",
            desc: "Regelmatige opvolging van resultaten, bijsturing van de strategie en continu advies om op koers te blijven.",
          },
        ],
        relatedSlugs: [
          "ads-social-media",
          "optimisation-digitale",
          "secretariat-b2b",
        ],
      },
    },
  },
];
