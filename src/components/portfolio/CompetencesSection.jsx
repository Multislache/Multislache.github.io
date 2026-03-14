import { motion } from "framer-motion";
import { Code2, Gamepad2, Database, Network, Brain, Cpu } from "lucide-react";

const iutSkills = [
  {
    category: "Programmation & Architecture",
    icon: Code2,
    color: "text-cyan-400",
    items: [
      "Programmation Orientée Objet (POO)",
      "Modélisation UML",
      "Design Patterns",
      "Java, Python, C",
      "Structures de données",
      "Algorithmique avancée"
    ]
  },
  {
    category: "Bases de données & Réseaux",
    icon: Database,
    color: "text-green-400",
    items: [
      "SQL & bases de données relationnelles",
      "Modélisation de données",
      "Protocoles TCP/IP",
      "Architecture client-serveur",
      "Programmation réseau",
      "Sockets & threading"
    ]
  },
  {
    category: "Développement Web",
    icon: Network,
    color: "text-orange-400",
    items: [
      "HTML/CSS/JavaScript",
      "Développement front-end",
      "Architecture MVC",
      "APIs REST",
      "Interface utilisateur",
      "Responsive design"
    ]
  }
];

const uqacSkills = [
  {
    category: "Game Engine & Architecture",
    icon: Gamepad2,
    color: "text-violet-400",
    items: [
      "Unreal Engine (C++, Blueprints)",
      "Entity Component System (ECS)",
      "Gameplay Ability System (GAS)",
      "Subsystems & Architecture",
      "Développement de moteur de jeu",
      "Optimisation de performance"
    ]
  },
  {
    category: "Game Development Avancé",
    icon: Brain,
    color: "text-pink-400",
    items: [
      "Intelligence Artificielle (Behavior Trees)",
      "Programmation réseau multiplayer",
      "Physique & mathématiques appliquées",
      "Systèmes de collision",
      "Animation & State Machines",
      "Game Design patterns"
    ]
  },
  {
    category: "Mathématiques Appliquées & Optimisation",
    icon: Cpu,
    color: "text-yellow-400",
    items: [
      "Mathématiques théoriques pour moteurs de jeu",
      "Algèbre linéaire appliquée",
      "Physique temps réel",
      "Calcul vectoriel & transformations 3D",
      "Optimisation mémoire & performance",
      "Profiling & debugging avancé"
    ]
  }
];

export default function CompetencesSection() {
  return (
    <section id="competences" className="px-6 md:px-16 lg:px-32 py-24 relative">
      <div className="max-w-6xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-violet-400 text-xs font-mono tracking-widest uppercase mb-3">— Compétences</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-2">
            Formations & Expertise
          </h2>
          <p className="text-white/40 text-base">
            Compétences acquises durant mes formations académiques
          </p>
        </motion.div>

        {/* IUT ORSAY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-cyan-500/50 rounded-full" />
            <h3 className="text-3xl font-bold text-white">
              <span className="text-cyan-400">IUT Orsay</span>
              <span className="text-white/30 text-lg ml-3">— BUT Informatique</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {iutSkills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white/3 border border-white/10 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className={`w-5 h-5 ${skill.color}`} />
                    <h4 className="font-semibold text-white text-sm">{skill.category}</h4>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item, j) => (
                      <li key={j} className="text-white/50 text-sm flex items-start gap-2">
                        <span className="text-cyan-400/40 mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* UQAC */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-violet-500/50 rounded-full" />
            <h3 className="text-3xl font-bold text-white">
              <span className="text-violet-400">UQAC</span>
              <span className="text-white/30 text-lg ml-3">— Développement de Jeux Vidéo</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {uqacSkills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white/3 border border-white/10 rounded-xl p-6 hover:border-violet-400/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className={`w-5 h-5 ${skill.color}`} />
                    <h4 className="font-semibold text-white text-sm">{skill.category}</h4>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item, j) => (
                      <li key={j} className="text-white/50 text-sm flex items-start gap-2">
                        <span className="text-violet-400/40 mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}