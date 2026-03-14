import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Users } from "lucide-react";
import { useState } from "react";

const gameJamProjects = [
  {
    id: 101,
    name: "WonderJam UQAC Hiver 2026",
    description:
      "Game jam universitaire organisée par l'UQAC. Développement d'un jeu en équipe sur thème imposé en 48h.",
    tech: ["Game Dev", "Game Design", "Team Work"],
    learnings: ["Prototypage rapide", "Gestion du temps", "Collaboration intensive"],
    url: "https://itch.io/jam/wonderjam-uqac-hiver-2026/rate/4338317",
    year: "2026",
    category: "gamejam",
    image: null,
  },
  {
    id: 102,
    name: "Game Jam Internationale",
    description:
      "Développement d'un jeu vidéo en 30h en équipe de 6. Contrainte de thème imposée.",
    tech: ["Game Dev", "Game Design", "Rapid Prototyping"],
    learnings: ["Créativité sous contrainte", "Itération rapide", "Team work"],
    url: "https://github.com/Multislache",
    year: "2025",
    category: "gamejam",
    image: null,
  },
];

const schoolProjects = [
  {
    id: 1,
    name: "AmongUs",
    description:
      "Recréation du célèbre jeu Among Us en Unreal Engine avec Subsystem. Gestion des rôles (imposteur/équipage), phases de discussion/vote et des tâches à accomplir. Projet collaboratif.",
    tech: ["Unreal Engine", "C++", "Subsystem", "Multiplayer"],
    learnings: ["Architecture orientée composants", "Programmation réseau", "State Management"],
    url: "https://github.com/Multislache/AmongUs",
    year: "2026",
    category: "school",
    school: "UQAC",
    image: null,
    collaborative: true,
  },
  {
    id: 2,
    name: "SpaceShooter",
    description:
      "Jeu de tir spatial multijoueur où le joueur détruit des astéroïdes et des vaisseaux ennemis. Effets visuels dynamiques, gestion des collisions et système de score. Projet collaboratif.",
    tech: ["C++", "Game Dev", "Multiplayer"],
    learnings: ["Physique de jeu", "Gestion des collisions", "Développement multiplayer"],
    url: "https://github.com/Multislache/SpaceShooter",
    year: "2025",
    category: "school",
    school: "UQAC",
    image: null,
    collaborative: true,
  },
  {
    id: 3,
    name: "SuperShooterGame",
    description:
      "Jeu de tir à la troisième personne avec des ennemis IA dotés de comportements tactiques avancés. Animations fluides et système de combat immersif. Projet collaboratif.",
    tech: ["Game Dev", "IA", "Multiplayer"],
    learnings: ["Intelligence artificielle", "Behavior Trees", "Animation système"],
    url: "https://github.com/Multislache/SuperShooterGame",
    year: "2025",
    category: "school",
    school: "UQAC",
    image: null,
    collaborative: true,
  },
  {
    id: 9,
    name: "Platformer",
    description:
      "Jeu de plateforme 2D développé en collaboration. Mécaniques de saut, collecte d'items et système de niveaux. Gestion de la physique et des collisions.",
    tech: ["Game Dev", "C++", "Physics"],
    learnings: ["Physique 2D", "Level design", "Collision detection"],
    url: "https://github.com/HalimLt/Platformer",
    year: "2025",
    category: "school",
    school: "UQAC",
    image: null,
    collaborative: true,
  },
  {
    id: 10,
    name: "TowerDefense",
    description:
      "Jeu de tower defense stratégique développé en collaboration. Placement de tours, gestion de vagues d'ennemis et système d'économie.",
    tech: ["Game Dev", "C++", "Strategy"],
    learnings: ["Pathfinding", "Game balancing", "Strategic gameplay"],
    url: "https://github.com/HalimLt/TowerDefense",
    year: "2025",
    category: "school",
    school: "UQAC",
    image: null,
    collaborative: true,
  },
  {
    id: 11,
    name: "EndlessRunner",
    description:
      "Jeu de course infinie avec génération procédurale de niveaux. Système de score, obstacles dynamiques et progression de difficulté. Projet collaboratif.",
    tech: ["Game Dev", "Procedural Generation", "C++"],
    learnings: ["Génération procédurale", "Optimisation performance", "Game loop"],
    url: "https://github.com/BASile15/EndlessRunner",
    year: "2025",
    category: "school",
    school: "UQAC",
    image: null,
    collaborative: true,
  },
  {
    id: 12,
    name: "Snake (Collaboratif)",
    description:
      "Version collaborative du jeu Snake développée en équipe. Système de score, vitesse progressive et interface utilisateur.",
    tech: ["Game Dev", "C++"],
    learnings: ["Collaboration", "Game mechanics", "UI design"],
    url: "https://github.com/BASile15/Snake",
    year: "2025",
    category: "school",
    school: "UQAC",
    image: null,
    collaborative: true,
  },
  {
    id: 5,
    name: "Pokédex",
    description:
      "Application Pokédex complète en Python avec interface graphique Tkinter, base de données SQLite et affichage des sprites et statistiques.",
    tech: ["Python", "SQLite", "Tkinter"],
    learnings: ["Bases de données relationnelles", "Interface graphique", "Requêtes SQL"],
    url: "https://github.com/Multislache/Pokedex",
    year: "2022",
    category: "school",
    school: "IUT Orsay",
    image: null,
  },
];

const personalProjects = [
  {
    id: 4,
    name: "SpaceShooter Source Code",
    description:
      "Code source complet du jeu SpaceShooter. Architecture orientée objet, gestion des collisions et du scoring.",
    tech: ["C++", "Game Dev"],
    learnings: ["Programmation orientée objet", "Patterns de conception", "Optimisation"],
    url: "https://github.com/Multislache/SpaceShootersourcecode",
    year: "2025",
    category: "personal",
    image: null,
  },
  {
    id: 6,
    name: "Projet-Chat",
    description:
      "Application de messagerie en temps réel. Système client-serveur avec sockets Python, gestion de plusieurs connexions simultanées.",
    tech: ["Python", "Sockets", "Réseau"],
    learnings: ["Programmation réseau", "Protocoles TCP/IP", "Threading"],
    url: "https://github.com/Multislache/Projet-Chat",
    year: "2023",
    category: "personal",
    image: null,
  },
  {
    id: 7,
    name: "Snake (Lycée)",
    description:
      "Premier projet de jeu développé au lycée. Recréation du jeu classique Snake en Python avec interface graphique Tkinter, niveaux de difficulté et tableau des scores.",
    tech: ["Python", "Tkinter"],
    learnings: ["Game loop", "Event handling", "Interface utilisateur"],
    url: "https://github.com/Multislache/Snake",
    year: "2021",
    category: "personal",
    image: null,
  },
  {
    id: 8,
    name: "Genshin",
    description:
      "Projet inspiré de Genshin Impact. Exploration de mécaniques RPG, système de personnages et d'inventaire en Python.",
    tech: ["Python", "Game Dev"],
    learnings: ["Système de progression", "Gestion d'inventaire", "RPG mechanics"],
    url: "https://github.com/Multislache/Genshin",
    year: "2023",
    category: "personal",
    image: null,
  },
];

const allProjects = [...schoolProjects, ...personalProjects, ...gameJamProjects];
const allTechs = ["Tous", ...Array.from(new Set(allProjects.flatMap(p => p.tech)))];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = allProjects.filter(p => {
    const techMatch = activeFilter === "Tous" || p.tech.includes(activeFilter);
    const categoryMatch = activeCategory === "all" || p.category === activeCategory;
    return techMatch && categoryMatch;
  });

  const filteredBySchool = (school) => 
    filtered.filter(p => p.category === "school" && p.school === school);

  const filteredNonSchool = filtered.filter(p => p.category !== "school");

  return (
    <section id="projects" className="px-6 md:px-16 lg:px-32 py-24 relative">
      <div className="max-w-3xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-violet-400 text-xs font-mono tracking-widest uppercase mb-3">— Projets</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-2">Mes Projets</h2>
          <p className="text-white/40 text-base">
            {filtered.length} projet{filtered.length > 1 ? "s" : ""}
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={() => setActiveCategory("all")}
            className={`text-sm font-semibold px-5 py-2 rounded-full border transition-all duration-200 ${
              activeCategory === "all"
                ? "bg-violet-600 border-violet-500 text-white"
                : "border-white/15 text-white/50 hover:border-white/30 hover:text-white/80"
            }`}
          >
            Tous
          </button>
          <button
            onClick={() => setActiveCategory("school")}
            className={`text-sm font-semibold px-5 py-2 rounded-full border transition-all duration-200 ${
              activeCategory === "school"
                ? "bg-violet-600 border-violet-500 text-white"
                : "border-white/15 text-white/50 hover:border-white/30 hover:text-white/80"
            }`}
          >
            Projets d'école
          </button>
          <button
            onClick={() => setActiveCategory("personal")}
            className={`text-sm font-semibold px-5 py-2 rounded-full border transition-all duration-200 ${
              activeCategory === "personal"
                ? "bg-violet-600 border-violet-500 text-white"
                : "border-white/15 text-white/50 hover:border-white/30 hover:text-white/80"
            }`}
          >
            Projets personnels
          </button>
          <button
            onClick={() => setActiveCategory("gamejam")}
            className={`text-sm font-semibold px-5 py-2 rounded-full border transition-all duration-200 ${
              activeCategory === "gamejam"
                ? "bg-violet-600 border-violet-500 text-white"
                : "border-white/15 text-white/50 hover:border-white/30 hover:text-white/80"
            }`}
          >
            Game Jams
          </button>
        </div>

        {/* Tech filter buttons */}
        <div className="flex flex-wrap gap-2 mb-10">
          {allTechs.map(tech => (
            <button
              key={tech}
              onClick={() => setActiveFilter(tech)}
              className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-all duration-200 ${
                activeFilter === tech
                  ? "bg-white/10 border-white/30 text-white"
                  : "border-white/10 text-white/40 hover:border-white/20 hover:text-white/60"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projects list */}
        <div>
          {/* School projects grouped by institution */}
          {activeCategory === "school" && (
            <>
              {/* IUT Orsay */}
              {filteredBySchool("IUT Orsay").length > 0 && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="text-cyan-400">IUT Orsay</span>
                    <span className="text-white/20 text-base font-normal">
                      — {filteredBySchool("IUT Orsay").length} projet{filteredBySchool("IUT Orsay").length > 1 ? "s" : ""}
                    </span>
                  </h3>
                  <AnimatePresence mode="popLayout">
                    {filteredBySchool("IUT Orsay").map((project, i) => (
                      <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25, delay: i * 0.04 }}
                      >
                        <ProjectCard project={project} index={i} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}

              {/* UQAC */}
              {filteredBySchool("UQAC").length > 0 && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="text-violet-400">UQAC</span>
                    <span className="text-white/20 text-base font-normal">
                      — {filteredBySchool("UQAC").length} projet{filteredBySchool("UQAC").length > 1 ? "s" : ""}
                    </span>
                  </h3>
                  <AnimatePresence mode="popLayout">
                    {filteredBySchool("UQAC").map((project, i) => (
                      <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25, delay: i * 0.04 }}
                      >
                        <ProjectCard project={project} index={i} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </>
          )}

          {/* Non-school projects */}
          {activeCategory !== "school" && (
            <AnimatePresence mode="popLayout">
              {filteredNonSchool.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                >
                  <ProjectCard project={project} index={i} />
                </motion.div>
              ))}
            </AnimatePresence>
          )}

          {filtered.length === 0 && (
            <p className="text-white/30 text-sm font-mono py-8 text-center">Aucun projet pour ce filtre.</p>
          )}
        </div>
      </div>
    </section>
  );
}