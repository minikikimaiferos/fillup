export interface Service {
  slug: string;
  icon: string;
  externalLink?: string;
  content: {
    fr: ServiceContent;
    en: ServiceContent;
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
          "On conçoit et développe des sites web, landing pages, applications et plateformes sur mesure. Mais on va plus loin : on crée aussi des web apps sur mesure pour répondre à des besoins spécifiques — bots d'automatisation, outils de scraping, cartes digitales interactives, applications métier pour gérer vos opérations ou celles de vos clients. Chaque projet est pensé pour convertir : architecture SEO-friendly, performance technique, intégration avec vos outils existants (formulaires de contact, systèmes de réservation, outils d'emailing). On s'assure aussi que vos pages de destination sont prêtes à accueillir le trafic de vos campagnes publicitaires.",
        benefits: [
          {
            title: "Pensé pour convertir",
            desc: "Pages de destination optimisées, formulaires connectés, parcours utilisateur fluide du clic à la prise de contact.",
          },
          {
            title: "SEO intégré dès le départ",
            desc: "Structure technique pensée pour le référencement : balises, vitesse, maillage interne, indexation.",
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
          "We design and develop custom websites, landing pages, applications and platforms. But we go further: we also build custom web apps for specific needs — automation bots, scraping tools, interactive digital maps, business applications to manage your operations or your clients'. Every project is built to convert: SEO-friendly architecture, technical performance, integration with your existing tools (contact forms, booking systems, emailing platforms). We also ensure your landing pages are ready to receive traffic from your ad campaigns.",
        benefits: [
          {
            title: "Built to convert",
            desc: "Optimized landing pages, connected forms, smooth user journey from click to contact.",
          },
          {
            title: "SEO baked in from day one",
            desc: "Technical structure built for search: tags, speed, internal linking, indexation.",
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
    },
  },
  {
    slug: "audiovisuel",
    icon: "Video",
    content: {
      fr: {
        title: "Audiovisuel & Production Créative",
        tagline:
          "Des créatives qui exploitent ce qui fonctionne déjà",
        whatIs:
          "On produit l'intégralité de vos créatives en exploitant l'IA et des schémas déjà existants et fonctionnels. On analyse les formats, les hooks et les structures qui marchent chez les concurrents et dans votre secteur, puis on les adapte à votre marque avec des outils de génération IA. Le résultat : des visuels et vidéos qui résolvent les mêmes problématiques que les produits concurrents — mais pour vous, plus vite et à moindre coût. Formats TikTok, Reels, visuels publicitaires, bannières — tout est produit en continu pour alimenter vos campagnes.",
        benefits: [
          {
            title: "Créatives full IA",
            desc: "Production complète de visuels et vidéos via des outils d'IA que l'on maîtrise, pour un volume élevé sans sacrifier la qualité.",
          },
          {
            title: "Schémas éprouvés",
            desc: "On exploite des formats et structures qui fonctionnent déjà dans votre secteur — pas de devinettes, que du testé.",
          },
          {
            title: "Rapidité & volume",
            desc: "Des créatives produites en continu pour alimenter vos campagnes sans délai ni goulot d'étranglement.",
          },
          {
            title: "Avantage concurrentiel",
            desc: "On identifie ce qui marche chez vos concurrents et on l'adapte à votre image pour capter la même audience.",
          },
        ],
        approach: [
          {
            step: "Veille concurrentielle",
            desc: "Analyse des créatives, hooks et formats qui performent dans votre secteur et chez vos concurrents.",
          },
          {
            step: "Adaptation des schémas",
            desc: "On reprend les structures qui fonctionnent et on les adapte à votre marque et votre message.",
          },
          {
            step: "Production IA",
            desc: "Génération des visuels et vidéos avec nos outils d'IA pour un rendu rapide et professionnel.",
          },
          {
            step: "Déclinaison multi-format",
            desc: "Adaptation en formats TikTok, Reels, stories, bannières et visuels publicitaires.",
          },
          {
            step: "Livraison continue",
            desc: "Un flux régulier de créatives prêtes à l'emploi pour vos campagnes et vos réseaux.",
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
        tagline: "Creatives that leverage what already works",
        whatIs:
          "We produce all your creatives using AI and proven, existing frameworks. We analyze the formats, hooks and structures that work for competitors and in your industry, then adapt them to your brand with AI generation tools. The result: visuals and videos that solve the same problems as competing products — but for you, faster and at lower cost. TikTok formats, Reels, ad visuals, banners — everything is produced continuously to fuel your campaigns.",
        benefits: [
          {
            title: "Full AI creatives",
            desc: "Complete visual and video production via AI tools we've mastered, for high volume without sacrificing quality.",
          },
          {
            title: "Proven frameworks",
            desc: "We leverage formats and structures that already work in your industry — no guesswork, only tested approaches.",
          },
          {
            title: "Speed & volume",
            desc: "Creatives produced continuously to fuel your campaigns without delays or bottlenecks.",
          },
          {
            title: "Competitive edge",
            desc: "We identify what works for your competitors and adapt it to your brand to capture the same audience.",
          },
        ],
        approach: [
          {
            step: "Competitive analysis",
            desc: "Analysis of creatives, hooks and formats that perform in your industry and among your competitors.",
          },
          {
            step: "Framework adaptation",
            desc: "We take structures that work and adapt them to your brand and message.",
          },
          {
            step: "AI production",
            desc: "Visual and video generation with our AI tools for fast, professional output.",
          },
          {
            step: "Multi-format adaptation",
            desc: "Adaptation into TikTok, Reels, stories, banners and ad visuals.",
          },
          {
            step: "Continuous delivery",
            desc: "A steady flow of ready-to-use creatives for your campaigns and social media.",
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
    },
  },
  {
    slug: "ads-social-media",
    icon: "Megaphone",
    content: {
      fr: {
        title: "Ads & Social Media",
        tagline:
          "Des campagnes publicitaires qui génèrent des résultats mesurables",
        whatIs:
          "On crée et pilote vos campagnes publicitaires sur Google Ads, Meta (Facebook/Instagram) et TikTok. Recherche de mots-clés, rédaction des annonces, ciblage par zone géographique et par audience, gestion du budget, A/B testing et optimisation continue. On démarre avec des campagnes de recherche ciblées pour capter les intentions d'achat, puis on élargit progressivement vers les réseaux sociaux pour la notoriété et le retargeting.",
        benefits: [
          {
            title: "Résultats rapides",
            desc: "Google Ads capte les recherches actives — vous êtes visible dès le premier jour auprès de gens qui cherchent vos services.",
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
          "Ad campaigns that generate measurable results",
        whatIs:
          "We create and manage your advertising campaigns on Google Ads, Meta (Facebook/Instagram) and TikTok. Keyword research, ad copywriting, geographic and audience targeting, budget management, A/B testing and continuous optimization. We start with targeted search campaigns to capture purchase intent, then gradually expand to social media for awareness and retargeting.",
        benefits: [
          {
            title: "Fast results",
            desc: "Google Ads captures active searches — you're visible from day one to people looking for your services.",
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
    },
  },
  {
    slug: "secretariat-b2b",
    icon: "Briefcase",
    content: {
      fr: {
        title: "Secrétariat & Gestion B2B",
        tagline: "La prospection et l'administratif, gérés pour vous",
        whatIs:
          "On prend en charge votre prospection commerciale et votre gestion administrative. Cold emailing, relances téléphoniques, gestion du CRM, suivi des prospects, prise de rendez-vous, gestion des réservations et correspondances clients. On met en place un process structuré avec des objectifs hebdomadaires clairs : nombre d'emails envoyés, taux de réponse, appels effectués, RDV décrochés. Vous gardez le contrôle, on fait tourner la machine.",
        benefits: [
          {
            title: "Prospection active",
            desc: "Cold emails quotidiens, relances téléphoniques et suivi rigoureux de chaque prospect dans le CRM.",
          },
          {
            title: "Pipeline commercial structuré",
            desc: "Un fichier de prospection enrichi en continu avec des contacts qualifiés et un suivi clair de chaque étape.",
          },
          {
            title: "Temps libéré pour le terrain",
            desc: "Vous vous concentrez sur les rendez-vous et la relation client, on gère l'acquisition en amont.",
          },
          {
            title: "KPIs de suivi",
            desc: "Objectifs mesurables chaque semaine : emails envoyés, taux de réponse, appels, RDV obtenus.",
          },
        ],
        approach: [
          {
            step: "Onboarding & process",
            desc: "On comprend votre offre, vos cibles et on met en place le process de prospection.",
          },
          {
            step: "Constitution de la base",
            desc: "Recherche et qualification de prospects via annuaires, réseaux professionnels et bases de données.",
          },
          {
            step: "Emailing & relances",
            desc: "Envoi de séquences d'emails personnalisés et relances téléphoniques structurées.",
          },
          {
            step: "Gestion CRM",
            desc: "Suivi de chaque contact, mise à jour des statuts, planification des prochaines actions.",
          },
          {
            step: "Reporting hebdomadaire",
            desc: "Bilan des actions réalisées, résultats obtenus et ajustements pour la semaine suivante.",
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
        tagline: "Prospecting and admin, handled for you",
        whatIs:
          "We take care of your commercial prospecting and administrative management. Cold emailing, phone follow-ups, CRM management, prospect tracking, appointment booking, reservation management and client correspondence. We set up a structured process with clear weekly goals: emails sent, response rate, calls made, meetings booked. You stay in control, we keep the machine running.",
        benefits: [
          {
            title: "Active prospecting",
            desc: "Daily cold emails, phone follow-ups and rigorous tracking of every prospect in the CRM.",
          },
          {
            title: "Structured sales pipeline",
            desc: "A prospecting file continuously enriched with qualified contacts and clear tracking at every stage.",
          },
          {
            title: "Time freed for the field",
            desc: "You focus on meetings and client relationships, we handle upstream acquisition.",
          },
          {
            title: "Tracking KPIs",
            desc: "Measurable weekly goals: emails sent, response rate, calls, meetings booked.",
          },
        ],
        approach: [
          {
            step: "Onboarding & process",
            desc: "We understand your offer, your targets and set up the prospecting process.",
          },
          {
            step: "Building the database",
            desc: "Prospect research and qualification through directories, professional networks and databases.",
          },
          {
            step: "Emailing & follow-ups",
            desc: "Sending personalized email sequences and structured phone follow-ups.",
          },
          {
            step: "CRM management",
            desc: "Tracking every contact, updating statuses, planning next actions.",
          },
          {
            step: "Weekly reporting",
            desc: "Review of actions taken, results achieved and adjustments for the following week.",
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
        tagline: "Une stratégie digitale claire, des décisions éclairées",
        whatIs:
          "On vous aide à définir votre stratégie marketing digitale et à prendre les bonnes décisions commerciales. On analyse des problèmes complexes et on les résout grâce à des outils modernes d'analyse de données. Étude de votre marché, choix des canaux, positionnement, plan d'action concret. Que ce soit pour un audit ponctuel de votre stratégie actuelle ou un accompagnement dans la durée, on vous donne une vision claire de ce qui fonctionne, ce qui manque et par où commencer. L'objectif : investir votre budget là où ça rapporte vraiment.",
        benefits: [
          {
            title: "Vision stratégique",
            desc: "Une analyse complète de votre positionnement digital et de vos opportunités de croissance sur votre marché.",
          },
          {
            title: "Choix des bons canaux",
            desc: "On identifie les canaux qui ont le plus de potentiel pour votre business — pas de budget gaspillé sur ce qui ne marche pas.",
          },
          {
            title: "Plan d'action concret",
            desc: "Pas de théorie : un plan avec des actions prioritaires, des délais et des résultats attendus mesurables.",
          },
          {
            title: "Décisions basées sur les données",
            desc: "On s'appuie sur vos chiffres, votre marché et vos concurrents pour recommander — pas sur des intuitions.",
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
        tagline: "A clear digital strategy, informed decisions",
        whatIs:
          "We help you define your digital marketing strategy and make the right business decisions. We analyze complex problems and solve them using modern data analysis tools. Market research, channel selection, positioning, concrete action plan. Whether it's a one-time audit of your current strategy or ongoing support, we give you a clear picture of what's working, what's missing and where to start. The goal: invest your budget where it actually pays off.",
        benefits: [
          {
            title: "Strategic vision",
            desc: "A complete analysis of your digital positioning and growth opportunities in your market.",
          },
          {
            title: "Right channel selection",
            desc: "We identify the channels with the most potential for your business — no budget wasted on what doesn't work.",
          },
          {
            title: "Concrete action plan",
            desc: "No theory: a plan with priority actions, timelines and measurable expected results.",
          },
          {
            title: "Data-driven decisions",
            desc: "We rely on your numbers, your market and your competitors to recommend — not on gut feelings.",
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
    },
  },
];
