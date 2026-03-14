export const allProjects = [
  // UQAC Projects
  {
    id: 1,
    name: "UE5-MicroGAS-Project",
    description: "Apprentissage du Gameplay Ability System (GAS) d'Unreal Engine 5 : architecture modulaire, GameplayAbilities, GameplayEffects, AttributeSets et GameplayTags pour créer des systèmes de gameplay complexes et réutilisables.",
    detailedDescription: `Ce projet m'a permis d'apprendre le Gameplay Ability System (GAS), un framework puissant d'Unreal Engine 5 pour gérer les capacités, attributs et effets de gameplay de manière modulaire et réseau-friendly.

**Apprentissages clés :** Architecture modulaire avec GameplayAbilities (compétences), GameplayEffects (modifications d'attributs), GameplayCues (feedback visuel/audio) et GameplayTags (gestion d'états). Compréhension du Ability System Component (ASC) et des AttributeSets pour structurer les données de personnage.

Projet développé dans le cadre du cours de systèmes de gameplay à l'UQAC. Implémentation complète du GAS d'Unreal Engine 5.

Le projet démontre une architecture modulaire avec des GameplayAbilities réutilisables, des GameplayEffects pour modifier les attributs, et des GameplayCues pour le feedback visuel/audio. Chaque ability est conçue comme un composant indépendant.

Le système d'attributs gère la santé, l'endurance, la mana avec des formules de calcul personnalisées. Les GameplayTags permettent de gérer les états du personnage (étourdi, invincible, etc.) de manière élégante.

J'ai implémenté plusieurs abilities complexes : dash avec cooldown, attaque combo, sort de zone, et un système de buff/debuff temporaires. La réplication réseau est gérée nativement par GAS.`,
    tech: ["Unreal Engine 5", "C++", "GAS", "Gameplay Programming"],
    learnings: ["Gameplay Ability System", "Architecture modulaire", "GameplayTags", "Système d'attributs"],
    challenges: "Comprendre l'architecture complexe de GAS et ses nombreux concepts (ASC, GameplayEffects, AttributeSets). La courbe d'apprentissage est raide mais le système devient extrêmement puissant une fois maîtrisé.",
    url: "https://github.com/Multislache/UE5-MicroGAS-Project",
    year: "2026",
    category: "school",
    school: "UQAC",
  },
  {
    id: 2,
    name: "UE-MultithreadingOptimisation",
    description: "Apprentissage du multithreading dans Unreal Engine : Task Graph, Async Tasks, ParallelFor et profiling avec Unreal Insights pour optimiser les performances et utiliser efficacement les CPU multi-cores.",
    detailedDescription: `Ce projet m'a enseigné les techniques avancées de multithreading et d'optimisation des performances dans Unreal Engine en exploitant les architectures CPU multi-cores modernes.

**Apprentissages clés :** TaskGraph pour orchestrer des tâches asynchrones, Async Tasks pour déléguer les opérations lourdes, ParallelFor pour paralléliser le traitement de données. Profiling avec Unreal Insights pour identifier les bottlenecks. Thread safety avec locks et atomic operations.

Projet du cours d'optimisation de jeux vidéo à l'UQAC. Focus sur le multithreading et l'utilisation efficace des CPU multi-cores dans Unreal Engine.

Le projet explore plusieurs techniques : TaskGraph pour orchestrer des tâches asynchrones, Async Tasks pour les opérations lourdes, et ParallelFor pour traiter des données en parallèle.

J'ai optimisé plusieurs systèmes : génération procédurale de terrain (passée de 200ms à 45ms), calculs de pathfinding pour 100+ agents (réduction de 60% du temps CPU), et système de particules customisé threadé.

Le profiling avec Unreal Insights a permis d'identifier les bottlenecks. L'utilisation de locks et atomic operations assure la thread-safety sans sacrifier les performances.`,
    tech: ["Unreal Engine 5", "C++", "Multithreading", "Optimisation"],
    learnings: ["Task Graph", "Async programming", "Thread safety", "Profiling", "Performance optimization"],
    challenges: "Gérer la synchronisation entre threads sans créer de race conditions. Comprendre quand utiliser le multithreading (pas toujours bénéfique pour des petites tâches à cause de l'overhead). Le profiling était crucial pour valider les gains.",
    url: "https://github.com/Multislache/UE-MultithreadingOptimisation",
    year: "2026",
    category: "school",
    school: "UQAC",
  },
  {
    id: 3,
    name: "AmongUs",
    description: "Apprentissage de l'architecture Subsystems d'Unreal Engine 5 : modularité, séparation des responsabilités, state management distribué et networking multijoueur pour créer des systèmes de jeu scalables et maintenables.",
    detailedDescription: `Ce projet collaboratif m'a appris à structurer un jeu complexe en utilisant l'architecture Subsystems d'Unreal Engine 5, une approche modulaire permettant de découpler les fonctionnalités et faciliter le travail en équipe.

**Apprentissages clés :** Architecture Subsystems pour isoler les responsabilités (gestion des rôles, tâches, votes, sabotages), networking multijoueur avec replication, state management distribué, mini-jeux interactifs, système de vote avec UI et logique réseau.

Dans le cadre du cours d'architecture logicielle avancée à l'UQAC, notre équipe de 4 développeurs a recréé Among Us en utilisant le système de Subsystems d'Unreal Engine 5.

Le projet se concentre sur une architecture modulaire et scalable. Chaque fonctionnalité majeure (gestion des rôles, tâches, votes, sabotages) est implémentée comme un Subsystem indépendant, facilitant la maintenance et l'extension du code.

Le système de rôles assigne aléatoirement les joueurs comme crewmates ou imposteurs. Les crewmates doivent accomplir des mini-jeux de tâches répartis sur la carte spatiale, tandis que l'imposteur doit les éliminer discrètement sans se faire repérer.

Les phases de meeting permettent aux joueurs de discuter via chat vocal/textuel et de voter pour éjecter un suspect. Le système de synchronisation réseau garantit que tous les états de jeu (positions, animations, votes) sont cohérents entre tous les clients.

J'étais responsable du Subsystem de gestion des tâches et du système de vote, incluant l'interface utilisateur et la logique réseau associée.`,
    tech: ["Unreal Engine 5", "C++", "Subsystems", "Multiplayer", "Replication"],
    learnings: ["Architecture de Subsystems UE5", "Networking multijoueur", "State management distribué", "Mini-jeux interactifs"],
    challenges: "La synchronisation réseau était complexe, notamment pour les animations de vote et l'état des tâches. Nous avons dû implémenter un système de replication custom pour certains états de jeu. L'architecture en Subsystems a grandement facilité le travail collaboratif en isolant les responsabilités.",
    url: "https://github.com/Multislache/AmongUs",
    year: "2026",
    category: "school",
    school: "UQAC",
    collaborative: true,
  },

  // IUT Orsay Projects
  {
    id: 4,
    name: "Pokédex",
    description: "Apprentissage de la programmation orientée objet en Python, intégration d'API REST (PokéAPI), bases de données SQLite, requêtes SQL dynamiques et création d'interfaces graphiques avec Tkinter.",
    detailedDescription: `Ce projet m'a permis d'apprendre les fondamentaux de la programmation orientée objet en Python, l'intégration d'API REST externes et la gestion de bases de données relationnelles.

**Apprentissages clés :** Architecture POO pour structurer les données Pokémon, intégration d'API REST (PokéAPI), base de données SQLite pour le stockage local, requêtes SQL dynamiques pour filtrer les résultats, interface graphique Tkinter, gestion d'erreurs avec try/except, optimisation avec list comprehensions.

Pokédex interactif développé en Python dans le cadre de mes études à l'IUT d'Orsay.

Le projet intègre l'API PokéAPI avec un système de stockage local SQLite pour optimiser les performances. L'architecture orientée objet structure les données Pokémon (nom, type, statistiques) de manière modulaire.

L'interface Tkinter offre une expérience utilisateur intuitive avec recherche dynamique par nom ou type. Les requêtes SQL permettent de filtrer efficacement les résultats parmi la base de données locale.

Le système de gestion d'erreurs utilise try/except pour sécuriser les appels API et les requêtes SQL. L'optimisation via list comprehensions assure un traitement rapide des données.

Chaque fiche Pokémon affiche les statistiques complètes et l'image du Pokémon pour une expérience interactive et visuelle.`,
    tech: ["Python", "SQLite", "API PokéAPI", "Tkinter", "JSON"],
    learnings: ["Programmation orientée objet", "Intégration d'API REST", "Requêtes SQL dynamiques", "Gestion d'erreurs", "Optimisation avec list comprehensions"],
    challenges: "Gérer la synchronisation entre l'API distante et le stockage local tout en maintenant des temps de réponse rapides. L'optimisation des requêtes SQL était cruciale pour offrir une recherche fluide parmi des milliers de Pokémon.",
    url: "https://github.com/Multislache/Pokedex",
    year: "2023",
    category: "school",
    school: "IUT Orsay",
  },
  {
    id: 5,
    name: "Application JO Paris 2024",
    description: "Apprentissage de la gestion de projet Agile (Trello, Jira), architecture orientée objet en Java, analyse des besoins fonctionnels, rédaction de spécifications techniques et analyse de rentabilité.",
    detailedDescription: `Ce projet collaboratif m'a enseigné la gestion de projet informatique complète, de l'analyse des besoins à la livraison, en passant par la coordination d'équipe et l'analyse économique.

**Apprentissages clés :** Gestion de projet Agile avec Trello et Jira, collaboration Git en équipe, architecture orientée objet en Java, analyse des besoins fonctionnels et non fonctionnels, rédaction de spécifications techniques détaillées, analyse de rentabilité et calcul des coûts, coordination d'équipe multidisciplinaire.

Projet collaboratif développé à l'IUT d'Orsay pour gérer les événements des Jeux Olympiques de Paris 2024.

Le développement utilise Java avec une architecture orientée objet garantissant modularité et évolutivité. Les maquettes interactives ont été conçues en appliquant les principes de la POO pour faciliter les futures extensions.

La gestion de projet s'est faite via Trello et Jira pour le suivi des tâches, avec Git pour la collaboration. Cette coordination fluide entre membres de l'équipe a permis de respecter les délais serrés.

L'analyse stratégique incluait une étude approfondie des besoins fonctionnels et non fonctionnels liés aux événements olympiques. Les spécifications techniques détaillées ont été rédigées pour aligner les attentes de toutes les parties prenantes.

Le projet incluait également un calcul précis des coûts et une analyse de rentabilité pour garantir l'efficacité économique. Le travail en équipe multidisciplinaire a nécessité une coordination des rôles et une résolution proactive des conflits.

Résultat : une application intuitive optimisant la planification et la coordination des événements des JO.`,
    tech: ["Java", "POO", "Trello", "Jira", "Git", "Analyse fonctionnelle"],
    learnings: ["Architecture orientée objet", "Gestion de projet agile", "Analyse des besoins", "Spécifications techniques", "Travail collaboratif", "Analyse de rentabilité"],
    challenges: "Coordonner une équipe multidisciplinaire tout en respectant des contraintes techniques et des délais serrés. L'analyse de rentabilité devait équilibrer ambition fonctionnelle et réalité budgétaire. La rédaction de spécifications précises pour satisfaire toutes les parties prenantes était un défi majeur.",
    year: "2024",
    category: "school",
    school: "IUT Orsay",
  },

  // Personal Projects
  {
    id: 6,
    name: "SpaceShooter Source Code",
    description: "Code source complet du jeu SpaceShooter. Architecture orientée objet, gestion des collisions et du scoring.",
    detailedDescription: `Ce repository contient le code source complet et documenté du projet SpaceShooter, servant de référence pour l'architecture du jeu.

Le code est organisé en modules clairs avec séparation des responsabilités : gestion des entités, système de physique, rendu graphique, input handling. Chaque classe est documentée avec ses responsabilités et ses interactions.

Le projet démontre l'utilisation de patterns de conception comme le Component pattern pour les entités de jeu et l'Observer pattern pour les événements.`,
    tech: ["C++", "Game Dev", "OOP"],
    learnings: ["Programmation orientée objet", "Patterns de conception", "Optimisation", "Documentation"],
    url: "https://github.com/Multislache/SpaceShootersourcecode",
    year: "2025",
    category: "personal",
  },
  {
    id: 7,
    name: "Projet-Chat",
    description: "Application de messagerie en temps réel. Système client-serveur avec sockets Python, gestion de plusieurs connexions simultanées.",
    detailedDescription: `Application de chat en temps réel développée en Python utilisant les sockets pour la communication réseau.

Le serveur peut gérer plusieurs clients simultanément grâce au threading. Chaque message est diffusé à tous les clients connectés en temps réel. Le protocole de communication personnalisé gère la connexion, la déconnexion et l'envoi de messages.

L'interface client permet de voir les messages de tous les utilisateurs et d'envoyer ses propres messages. Le système de pseudo permet d'identifier chaque utilisateur.`,
    tech: ["Python", "Sockets", "Réseau", "Threading"],
    learnings: ["Programmation réseau", "Protocoles TCP/IP", "Threading", "Architecture client-serveur"],
    challenges: "Gérer la synchronisation entre threads et assurer que les messages arrivent dans le bon ordre tout en maintenant de bonnes performances avec de nombreux clients.",
    url: "https://github.com/Multislache/Projet-Chat",
    year: "2023",
    category: "personal",
  },
  {
    id: 8,
    name: "Snake (Lycée)",
    description: "Premier projet de jeu développé au lycée. Recréation du jeu classique Snake en Python avec interface graphique Tkinter, niveaux de difficulté et tableau des scores.",
    detailedDescription: `Mon tout premier projet de développement de jeu, créé durant mes années lycée.

Le jeu Snake classique avec contrôles au clavier, système de croissance du serpent et détection de collision. J'ai ajouté plusieurs niveaux de difficulté qui modifient la vitesse du serpent.

Un tableau des meilleurs scores est sauvegardé localement pour garder une trace des performances. Ce projet m'a fait découvrir la programmation de jeux et m'a motivé à poursuivre dans cette voie.`,
    tech: ["Python", "Tkinter"],
    learnings: ["Game loop", "Event handling", "Interface utilisateur", "Bases de la programmation"],
    url: "https://github.com/Multislache/Snake",
    year: "2021",
    category: "personal",
  },
  {
    id: 9,
    name: "Genshin",
    description: "Projet inspiré de Genshin Impact. Exploration de mécaniques RPG, système de personnages et d'inventaire en Python.",
    detailedDescription: `Projet personnel explorant les mécaniques de RPG inspirées de Genshin Impact.

Le système de personnages permet de créer et de gérer plusieurs personnages avec des stats différentes (attaque, défense, HP, éléments). Le système de combat au tour par tour utilise ces stats pour calculer les dégâts.

L'inventaire gère les armes, les artefacts et les consommables. Un système de progression permet d'améliorer les personnages et l'équipement. Le projet explore également les mécaniques d'éléments et de réactions élémentaires.`,
    tech: ["Python", "Game Dev", "RPG"],
    learnings: ["Système de progression", "Gestion d'inventaire", "RPG mechanics", "Balance de jeu"],
    url: "https://github.com/Multislache/Genshin",
    year: "2023",
    category: "personal",
  },

  // Collaborative UQAC Projects (hosted by teammates)
  {
    id: 10,
    name: "SpaceShooter",
    description: "Apprentissage des mathématiques appliquées aux jeux : vecteurs 2D, produit scalaire, détection de collisions, courbes de Bézier, interpolation réseau et optimisation spatiale pour la physique de jeu.",
    detailedDescription: `Ce projet m'a permis d'appliquer concrètement les mathématiques à la physique et au gameplay d'un jeu vidéo, en comprenant comment les concepts théoriques se traduisent en mécaniques jouables.

**Apprentissages clés :** Vecteurs 2D pour mouvements et rotations, détection de collisions avec bounding circles et distance euclidienne, produit scalaire pour la visée, courbes de Bézier et fonctions sinusoïdales pour les patterns de mouvement, interpolation linéaire (lerp) pour la synchronisation réseau, optimisation spatiale (grid spatial) pour réduire la complexité algorithmique de O(n²) à O(n).

Projet développé dans le cadre du cours de mathématiques appliquées aux jeux vidéo à l'UQAC. En équipe de 3, nous avons créé un shoot'em up spatial avec un focus particulier sur la physique et les mathématiques.

Le jeu utilise des vecteurs 2D pour tous les mouvements et rotations. Les collisions sont détectées via des cercles englobants (bounding circles) avec calcul de distance euclidienne. Les astéroïdes se fragmentent en débris plus petits selon des angles calculés mathématiquement.

Le système de tir utilise le produit scalaire pour déterminer la direction de visée. Les ennemis ont des patterns de mouvement basés sur des courbes de Bézier et des fonctions sinusoïdales pour créer des mouvements fluides et prévisibles.

Le mode multijoueur synchronise les positions via interpolation linéaire (lerp) pour compenser la latence réseau. Le système de particules pour les explosions utilise la physique newtonienne simplifiée.

J'étais en charge du système de physique, des collisions et de la fragmentation des astéroïdes.`,
    tech: ["C++", "Mathématiques", "Physique 2D", "Networking", "SFML"],
    learnings: ["Vecteurs et transformations 2D", "Détection de collisions", "Interpolation réseau", "Optimisation spatiale"],
    challenges: "Optimiser la détection de collisions avec des centaines de projectiles et d'astéroïdes simultanés. Nous avons implémenté un grid spatial pour réduire les tests de collision de O(n²) à O(n). La synchronisation réseau nécessitait une interpolation fluide tout en restant responsive.",
    url: "https://github.com/Multislache/SpaceShooter",
    year: "2025",
    category: "school",
    school: "UQAC",
    collaborative: true,
  },
  {
    id: 11,
    name: "Platformer",
    description: "Jeu de plateforme 2D développé en collaboration. Mécaniques de saut, collecte d'items et système de niveaux. Gestion de la physique et des collisions.",
    detailedDescription: `Platformer est un jeu de plateforme 2D classique avec des mécaniques de gameplay précises et responsives.

Le système de saut utilise une physique personnalisée pour offrir un contrôle aérien satisfaisant. Les niveaux sont conçus avec une difficulté progressive, introduisant de nouveaux obstacles et mécaniques graduellement.

Le jeu inclut un système de collectibles et de checkpoints pour une expérience de jeu fluide. Les animations du personnage répondent aux actions du joueur pour un feedback visuel immédiat.`,
    tech: ["C++", "Game Dev", "Physics", "2D"],
    learnings: ["Physique 2D", "Level design", "Collision detection", "Game feel"],
    challenges: "Obtenir un 'game feel' satisfaisant pour le saut et le mouvement a nécessité de nombreux ajustements fins des paramètres physiques et des courbes d'accélération.",
    url: "https://github.com/HalimLt/Platformer",
    year: "2025",
    category: "school",
    school: "UQAC",
    collaborative: true,
  },
  {
    id: 12,
    name: "TowerDefense",
    description: "Apprentissage de l'intelligence artificielle pour jeux : algorithme A* pour pathfinding dynamique, IA de ciblage, balancing économique, difficulty curves et optimisation de performance.",
    detailedDescription: `Ce projet m'a enseigné les concepts fondamentaux de l'IA dans les jeux vidéo, du pathfinding aux systèmes de décision, en passant par le game balancing.

**Apprentissages clés :** Algorithme A* avec heuristique de Manhattan, pathfinding dynamique (recalcul en temps réel), IA de ciblage pour différents comportements de tours, difficulty curves avec fonctions exponentielles, balancing économique via tableaux de game design, optimisation avec cache de chemins.

Projet du cours d'intelligence artificielle pour jeux vidéo à l'UQAC. En équipe de 4, nous avons développé un tower defense avec un focus sur le pathfinding et l'IA des ennemis.

Le système de pathfinding utilise l'algorithme A* avec une heuristique de distance de Manhattan. Le graphe de navigation est généré dynamiquement : chaque fois qu'une tour est placée, le pathfinding est recalculé pour tous les ennemis actifs.

Les tours ont des comportements d'IA distincts : les tours de tir priorisent les ennemis les plus avancés, les tours à zone calculent la position optimale pour toucher le plus d'ennemis, les tours de ralentissement ciblent les ennemis les plus rapides.

Le système de vagues utilise un difficulty curve basé sur des fonctions exponentielles pour augmenter progressivement le nombre et la résistance des ennemis. L'économie est équilibrée via des tableaux Excel de game design pour créer des choix stratégiques intéressants.

J'ai implémenté le système de pathfinding A*, l'IA de ciblage des tours et le générateur de vagues dynamique.`,
    tech: ["C++", "IA", "A* Pathfinding", "Game Design", "SDL2"],
    learnings: ["Algorithme A*", "Navigation dynamique", "IA de targeting", "Balancing économique", "Difficulty curves"],
    challenges: "Optimiser A* pour recalculer les chemins en temps réel quand le joueur place des tours. Nous avons utilisé un cache de chemins et ne recalculons que pour les ennemis affectés. Le balancing était itératif : trop facile = ennuyeux, trop dur = frustrant.",
    url: "https://github.com/HalimLt/TowerDefense",
    year: "2025",
    category: "school",
    school: "UQAC",
    collaborative: true,
  },
  {
    id: 13,
    name: "EndlessRunner",
    description: "Jeu de course infinie avec génération procédurale de niveaux. Système de score, obstacles dynamiques et progression de difficulté.",
    detailedDescription: `EndlessRunner est un jeu de course infinie où le joueur doit éviter des obstacles de plus en plus difficiles.

Le système de génération procédurale crée des segments de niveau aléatoires qui s'assemblent de manière cohérente. La difficulté augmente progressivement en accélérant la vitesse et en introduisant de nouveaux types d'obstacles.

Le système de score récompense les distances parcourues et les pièces collectées. Un système de power-ups temporaires (invincibilité, aimant à pièces, multiplicateur de score) ajoute de la variété au gameplay.`,
    tech: ["C++", "Game Dev", "Procedural Generation"],
    learnings: ["Génération procédurale", "Optimisation performance", "Game loop", "Difficulté progressive"],
    challenges: "La génération procédurale devait créer des niveaux jouables et équitables tout en restant challengeants. L'optimisation était cruciale pour maintenir 60 FPS avec le spawning et le despawning constant d'objets.",
    url: "https://github.com/BASile15/EndlessRunner",
    year: "2025",
    category: "school",
    school: "UQAC",
    collaborative: true,
  },
  {
    id: 14,
    name: "Snake (Collaboratif)",
    description: "Apprentissage des fondamentaux du game dev : game loop avec fixed timestep, structures de données (std::deque), collision grid-based, et collaboration Git en équipe.",
    detailedDescription: `Premier projet de développement de jeux à l'UQAC qui m'a enseigné les concepts fondamentaux du game programming et de la collaboration sur code.

**Apprentissages clés :** Game loop avec fixed timestep pour un gameplay prévisible, structures de données (std::deque) pour optimiser les opérations (O(1) insertion/suppression), collision grid-based, collaboration Git (gestion des conflits, merge), SDL2 pour le rendu et SDL2_ttf pour le texte.

Premier projet du cours d'introduction au développement de jeux à l'UQAC. En équipe de 3, nous avons développé Snake en C++ pour apprendre les bases de la game loop et de la collaboration.

Le jeu utilise une game loop classique avec update à taux fixe (fixed timestep). Le serpent est représenté par une std::deque pour faciliter l'ajout/suppression d'éléments aux extrémités. La croissance du serpent ajoute un segment à chaque pomme mangée.

Le système de collision utilise des coordonnées grille (grid-based). À chaque frame, on vérifie si la tête du serpent entre en collision avec son corps (boucle sur la deque) ou les murs (vérification des limites).

La vitesse augmente progressivement selon une fonction logarithmique du score pour maintenir la jouabilité. L'interface affiche le score en temps réel avec SDL2_ttf.

J'étais responsable de la game loop, du système de collision et de la gestion des inputs clavier.`,
    tech: ["C++", "SDL2", "Game Loop", "Data Structures"],
    learnings: ["Game loop fixe", "Structures de données (deque)", "Collision grid-based", "Travail en équipe Git"],
    challenges: "Comprendre l'importance d'un timestep fixe pour un gameplay prévisible. Gérer les conflits Git lors du merge - première expérience de collaboration sur code. La deque était parfaite pour Snake mais il fallait comprendre pourquoi (O(1) insertion/suppression).",
    url: "https://github.com/BASile15/Snake",
    year: "2025",
    category: "school",
    school: "UQAC",
    collaborative: true,
  },

  // Game Jams
  {
    id: 101,
    name: "WonderJam UQAC Hiver 2026",
    description: "Game jam universitaire propulsée par Ubisoft. 2ème place avec une équipe de 4 personnes (vs équipes de 6). Développement d'un jeu en 48h sur thème imposé.",
    detailedDescription: `Participation à la WonderJam Hiver 2026, une game jam de 48 heures organisée par l'UQAC et propulsée par Ubisoft, avec un thème surprise révélé au début de l'événement.

Notre équipe de 4 développeurs a terminé 2ème place sur l'ensemble des participants, alors que la plupart des autres équipes comptaient 6 membres. Ce résultat démontre notre efficacité de travail et notre coordination.

En 48 heures, nous avons conçu, développé et publié un jeu complet respectant le thème imposé. La contrainte de temps extrême a nécessité une organisation millimétrée : répartition claire des tâches, prototypage rapide, itérations fréquentes et communication constante.

Avec une équipe réduite, chaque membre devait être polyvalent. J'ai contribué au gameplay programming, au game design et à l'intégration des assets. Nous avons dû faire des choix pragmatiques pour livrer un produit jouable et fun dans les délais.

L'expérience Ubisoft apportait une dimension professionnelle avec des mentors de l'industrie qui nous guidaient. La présentation finale devant le jury et les autres équipes était une excellente pratique de pitch.`,
    tech: ["Game Dev", "Game Design", "Team Work", "Rapid Prototyping"],
    learnings: ["Prototypage rapide", "Gestion du temps", "Collaboration intensive", "Créativité sous contrainte", "Efficacité d'équipe"],
    challenges: "Gérer le scope avec seulement 4 personnes vs 6 dans les autres équipes. Nous avons compensé par une excellente organisation et en priorisant impitoyablement les features. La pression du temps et de la compétition nous a poussés à donner le meilleur de nous-mêmes.",
    url: "https://itch.io/jam/wonderjam-uqac-hiver-2026/rate/4338317",
    year: "2026",
    category: "gamejam",
  },
];

export const getProjectById = (id) => {
  return allProjects.find(p => p.id === parseInt(id));
};

export const getProjectsByCategory = (category) => {
  if (category === "all") return allProjects;
  return allProjects.filter(p => p.category === category);
};

export const getProjectsBySchool = (school) => {
  return allProjects.filter(p => p.school === school);
};