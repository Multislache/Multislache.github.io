import { motion } from "framer-motion";
import { Github, Code2, Terminal, Linkedin, MapPin, GraduationCap, Download } from "lucide-react";

const CV_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a89ab9dccfc3c89dd794d8/3a43234ba_CVprofessionnelgrissimple.pdf";

const skills = [
  { label: "C++", color: "border-blue-400 text-blue-300" },
  { label: "Unreal Engine", color: "border-violet-400 text-violet-300" },
  { label: "ECS Architecture", color: "border-cyan-400 text-cyan-300" },
  { label: "GAS (Gameplay Ability System)", color: "border-pink-400 text-pink-300" },
  { label: "Game Engine Dev", color: "border-purple-400 text-purple-300" },
  { label: "Physique & Mathématiques", color: "border-green-400 text-green-300" },
  { label: "Optimisation", color: "border-yellow-400 text-yellow-300" },
  { label: "Python", color: "border-orange-400 text-orange-300" },
  { label: "Multiplayer", color: "border-red-400 text-red-300" },
  { label: "SQL", color: "border-teal-400 text-teal-300" },
];

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-32 pt-24 pb-16 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl" />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-5 flex justify-between items-center border-b border-white/5 bg-[#07070f]/80 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-violet-600 flex items-center justify-center text-xs font-bold tracking-widest">
          JW
        </div>
        <div>
          <p className="font-semibold text-sm leading-none">Jacques Wen</p>
          <p className="text-[11px] text-white/40 mt-0.5">Développeur</p>
        </div>
      </div>
      <a
        href={CV_URL}
        target="_blank"
        rel="noopener noreferrer"
        download
        className="flex items-center gap-2 text-xs text-white/60 hover:text-white border border-white/10 hover:border-white/30 rounded-full px-4 py-2 transition-all duration-300"
      >
        <Download size={14} />
        Télécharger CV
      </a>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-violet-400 text-sm font-mono mb-4 tracking-widest uppercase flex items-center gap-2">
            <Terminal size={13} />
            Disponible pour des projets
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-6">
            Portfolio{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              Jacques Wen
            </span>
          </h1>

          <p className="text-white/50 text-lg md:text-xl max-w-2xl mb-6 leading-relaxed">
            Développeur spécialisé en développement de jeux vidéo et moteurs de jeu.
            Expertise en architecture ECS, systèmes de gameplay avancés (GAS), et optimisation.
            Spécialisation en mathématiques théoriques appliquées aux moteurs de jeu lors de ma formation à l'UQAC.
          </p>
          <div className="flex flex-wrap gap-4 mb-10 text-sm text-white/35">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-violet-400" />
              France
            </span>
            <span className="flex items-center gap-1.5">
              <GraduationCap size={13} className="text-violet-400" />
              Étudiant en Informatique
            </span>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-12">
            {skills.map((s, i) => (
              <motion.span
                key={s.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.08 }}
                className={`text-xs px-3 py-1.5 rounded-full border bg-white/3 font-mono ${s.color}`}
              >
                {s.label}
              </motion.span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-violet-900/40"
            >
              <Download size={16} />
              Télécharger CV
            </a>
            <a
              href="https://github.com/Multislache"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white/15 hover:border-violet-400/40 text-white/70 hover:text-violet-300 text-sm font-medium px-6 py-3 rounded-full transition-all duration-300"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jacques-wen-43ba32164/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white/15 hover:border-blue-400/40 text-white/70 hover:text-blue-300 text-sm font-medium px-6 py-3 rounded-full transition-all duration-300"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="#projects"
              className="flex items-center gap-2 border border-white/10 hover:border-white/30 text-white/50 hover:text-white text-sm font-medium px-6 py-3 rounded-full transition-all duration-300"
            >
              <Code2 size={16} />
              Voir les projets
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-violet-400/60" />
        <p className="text-[10px] text-white/30 tracking-widest uppercase font-mono">Scroll</p>
      </motion.div>
    </section>
  );
}