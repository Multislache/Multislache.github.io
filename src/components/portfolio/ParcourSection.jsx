import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const timeline = [
  {
    date: "2018 — Présent",
    lieu: "Royal Wok — Châtellerault, France",
    description: "Gestion d'entreprise familiale. Cuisinier, serveur, caissier, barman. Traduction de documents français-chinois.",
    color: "text-orange-400",
    dot: "bg-orange-500",
    type: "experience",
  },
  {
    date: "Septembre 2023",
    lieu: "IUT d'Orsay — France",
    description: "Début du BUT Informatique. Formation en développement logiciel, algorithmique, bases de données et réseaux.",
    color: "text-violet-400",
    dot: "bg-violet-500",
    type: "formation",
    highlight: true,
  },
  {
    date: "Janvier 2025",
    lieu: "IUT Montpellier — France",
    description: "CodeGameJam — Développement d'un jeu vidéo en 30h en équipe de 6. Contrainte de thème imposée.",
    color: "text-yellow-400",
    dot: "bg-yellow-500",
    type: "event",
  },
  {
    date: "Septembre 2025",
    lieu: "UQAC — Québec, Canada",
    description: "Programme d'échange international — Départ au Canada pour compléter le BUT en collaboration avec l'UQAC, spécialisation en développement de jeux vidéo.",
    color: "text-cyan-400",
    dot: "bg-cyan-500",
    type: "formation",
    highlight: true,
  },
  {
    date: "2025 — 2027",
    lieu: "UQAC & IUT Orsay",
    description: "🎓 Double Diplôme International — Baccalauréat en développement de jeux vidéo (UQAC) + BUT Informatique (IUT Orsay).",
    color: "text-violet-400",
    dot: "bg-violet-500",
    type: "formation",
    highlight: true,
    featured: true,
  },
  {
    date: "Hiver 2026",
    lieu: "UQAC — Québec, Canada",
    description: "WonderJam UQAC — Game jam universitaire. Développement d'un jeu en équipe sur thème imposé en 48h.",
    color: "text-pink-400",
    dot: "bg-pink-500",
    url: "https://itch.io/jam/wonderjam-uqac-hiver-2026/rate/4338317",
    type: "event",
  },
];

export default function ParcourSection() {
  return (
    <section id="parcours" className="px-6 md:px-16 lg:px-32 py-24">
      <div className="max-w-2xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-black tracking-tight text-white text-center mb-16"
        >
          Mon Parcours en Informatique
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/10" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`relative pl-8 ${item.featured ? 'py-4' : ''}`}
              >
                {/* Dot */}
                <div className={`absolute left-0 top-1.5 ${item.featured ? 'w-3 h-3' : 'w-[11px] h-[11px]'} rounded-full ${item.dot} ring-2 ring-[#07070f] z-10 ${item.featured ? 'shadow-lg shadow-violet-500/50' : ''}`} />

                {item.featured && (
                  <div className="absolute -left-4 -right-4 -top-2 -bottom-2 bg-gradient-to-r from-violet-500/5 to-cyan-500/5 rounded-xl border border-violet-500/10" />
                )}

                <div className="relative">
                  <div className="flex items-center gap-2 mb-1">
                    <p className={`text-sm font-mono ${item.color} ${item.featured ? 'font-bold' : ''}`}>{item.date}</p>
                    {item.highlight && (
                      <span className="text-[9px] px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 font-mono">
                        Formation
                      </span>
                    )}
                  </div>
                  <p className={`text-xs font-mono mb-2 ${item.featured ? 'text-white/50' : 'text-white/35'}`}>{item.lieu}</p>
                  <p className={`leading-relaxed ${item.featured ? 'text-white/70 text-base font-medium' : 'text-white/55 text-sm'}`}>
                    {item.description}
                  </p>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 mt-2 text-xs font-mono ${item.color} opacity-60 hover:opacity-100 transition-opacity`}
                    >
                      <ExternalLink size={11} />
                      Voir sur itch.io
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}