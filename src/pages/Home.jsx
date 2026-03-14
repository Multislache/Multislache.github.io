import { motion } from "framer-motion";
import { Github, Linkedin, Download, Mail, MapPin, GraduationCap, Code2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/portfolio/ProjectCard";
import { allProjects } from "../components/portfolio/projectsData";

const CV_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a89ab9dccfc3c89dd794d8/3a43234ba_CVprofessionnelgrissimple.pdf";

const skills = [
  { label: "C++", color: "border-blue-400 text-blue-300" },
  { label: "Java", color: "border-red-400 text-red-300" },
  { label: "Python", color: "border-orange-400 text-orange-300" },
  { label: "C#", color: "border-green-400 text-green-300" },
  { label: "Unreal Engine", color: "border-violet-400 text-violet-300" },
  { label: "Unity", color: "border-purple-400 text-purple-300" },
  { label: "Godot", color: "border-blue-400 text-blue-300" },
  { label: "Full Stack", color: "border-pink-400 text-pink-300" },
  { label: "Data & Cybersécurité", color: "border-red-400 text-red-300" },
  { label: "Git / Perforce", color: "border-amber-400 text-amber-300" },
];

const navigation = [
  { id: "hero", label: "Accueil" },
  { id: "about", label: "À propos" },
  { id: "competences", label: "Compétences" },
  { id: "projects", label: "Projets" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(nav => ({
        id: nav.id,
        element: document.getElementById(nav.id)
      }));

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        if (section.element) {
          const { offsetTop, offsetHeight } = section.element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#07070f] min-h-screen text-white">
      {/* Fixed Navigation Sidebar */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-6">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveSection(item.id)}
              className="group flex items-center gap-3"
            >
              <div
                className={`w-8 h-px transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-violet-400 w-12"
                    : "bg-white/20 group-hover:bg-white/40 group-hover:w-10"
                }`}
              />
              <span
                className={`text-xs font-mono transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-violet-400 opacity-100"
                    : "text-white/40 opacity-0 group-hover:opacity-100"
                }`}
              >
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </nav>

      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-40 px-6 md:px-16 py-4 flex justify-between items-center border-b border-white/5 bg-[#07070f]/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-xs font-bold">
            JW
          </div>
          <div className="hidden sm:block">
            <p className="font-semibold text-sm">Jacques Wen</p>
            <p className="text-[10px] text-white/40">Game Developer</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Multislache"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg border border-white/10 hover:border-white/30 flex items-center justify-center transition-colors"
          >
            <Github size={14} />
          </a>
          <a
            href="https://www.linkedin.com/in/jacques-wen-43ba32164/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg border border-white/10 hover:border-white/30 flex items-center justify-center transition-colors"
          >
            <Linkedin size={14} />
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center px-6 md:px-16 lg:px-32 pt-20">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-violet-400 text-xs font-mono mb-4 tracking-widest uppercase">
              Portfolio 2026
            </p>
            <h1 className="text-6xl md:text-8xl font-black leading-none mb-6">
              Jacques
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                Wen
              </span>
            </h1>
            <p className="text-white/50 text-xl max-w-2xl mb-8 leading-relaxed">
              Développeur spécialisé en développement de jeux vidéo et moteurs de jeu.
              Expertise en architecture ECS, systèmes de gameplay avancés (GAS), et optimisation.
              Solide formation en mathématiques de l'enseignement supérieur (BUT Informatique) et spécialisation en mathématiques théoriques des moteurs de jeux à l'UQAC.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((s, i) => (
                <motion.span
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className={`text-xs px-3 py-1.5 rounded-full border bg-white/3 font-mono ${s.color}`}
                >
                  {s.label}
                </motion.span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://api.base44.dev/functions/generateCVPDF"
                download
                className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium px-6 py-3 rounded-full transition-all"
              >
                <Download size={16} />
                Télécharger CV
              </a>
              <a
                href="#projects"
                className="flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/70 hover:text-white text-sm font-medium px-6 py-3 rounded-full transition-all"
              >
                <Code2 size={16} />
                Voir les projets
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-6 md:px-16 lg:px-32 py-24">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-violet-400 text-2xl font-mono">01</span>
              <div className="h-px flex-1 bg-gradient-to-r from-violet-400/50 to-transparent" />
            </div>
            <h2 className="text-5xl font-black mb-8">À propos</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-white/60 leading-relaxed mb-6">
                  Étudiant en informatique passionné par le développement de jeux vidéo. 
                  Actuellement en double diplôme entre l'IUT d'Orsay - Université Paris-Saclay (France) et l'UQAC - Université du Québec à Chicoutimi (Canada), 
                  je me spécialise dans les architectures de moteurs de jeu et les systèmes de gameplay complexes.
                  Formation polyvalente à l'IUT : développement full stack, data, cybersécurité, réseaux et systèmes.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin size={14} className="text-violet-400" />
                    <span className="text-white/50">France / Canada</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <GraduationCap size={14} className="text-violet-400" />
                    <span className="text-white/50">IUT d'Orsay - Université Paris-Saclay & UQAC</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail size={14} className="text-violet-400" />
                    <a href="mailto:" className="text-white/50 hover:text-violet-400 transition-colors">
                      Contact
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border border-white/10 rounded-xl p-4 bg-white/3">
                  <h3 className="text-sm font-mono text-cyan-400 mb-2">IUT d'Orsay - Université Paris-Saclay</h3>
                  <p className="text-white/50 text-sm">BUT Informatique - Développement logiciel, bases de données, réseaux</p>
                </div>
                <div className="border border-white/10 rounded-xl p-4 bg-white/3">
                  <h3 className="text-sm font-mono text-violet-400 mb-2">UQAC - Université du Québec à Chicoutimi</h3>
                  <p className="text-white/50 text-sm">Baccalauréat en développement de jeux vidéo - ECS, GAS, mathématiques théoriques des moteurs (matrices, vecteurs, physique)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Competences Section */}
      <section id="competences" className="px-6 md:px-16 lg:px-32 py-24">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-violet-400 text-2xl font-mono">02</span>
              <div className="h-px flex-1 bg-gradient-to-r from-violet-400/50 to-transparent" />
            </div>
            <h2 className="text-5xl font-black mb-8">Compétences</h2>
            <p className="text-white/40 text-sm mb-8">Formation polyvalente BUT Informatique + Spécialisation Game Dev</p>
            
            {/* Compact Grid */}
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Langages", items: "Java, Python, C, C++, C#, PHP, JavaScript, Lua, Shell" },
                { title: "Game Engines", items: "Unreal Engine, Unity, Godot, ECS, GAS, Subsystems, IA" },
                { title: "Web & Full Stack", items: "HTML/CSS, JavaScript, PHP, React, Node.js, MVC, API REST" },
                { title: "Bases de données", items: "SQL, PostgreSQL, MySQL, Modélisation, Optimisation" },
                { title: "Mathématiques", items: "Algèbre, Matrices, Vecteurs, Analyse, Probabilités, Stats" },
                { title: "Maths moteurs", items: "Transformations 3D, Produit scalaire, Physique, Géométrie" },
                { title: "Cybersécurité", items: "Sécurité réseau, TCP/IP, Sockets, Configuration serveur" },
                { title: "Dev & Outils", items: "Git, Perforce, Linux, Windows, Docker, UML, CI/CD" },
                { title: "Gestion projet", items: "Agile, Analyse besoins, Documentation, Collaboration" },
              ].map((category, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="border border-white/10 rounded-xl p-4 bg-white/3 hover:border-violet-400/30 transition-colors"
                >
                  <h3 className="text-sm font-bold mb-2 text-violet-400">{category.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{category.items}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 md:px-16 lg:px-32 py-32">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-violet-400 text-2xl font-mono">03</span>
              <div className="h-px flex-1 bg-gradient-to-r from-violet-400/50 to-transparent" />
            </div>
            <h2 className="text-5xl font-black mb-4">Projets</h2>
            <p className="text-white/40 mb-12">Explorer par catégorie</p>
            
            {/* Categories Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <motion.button
                onClick={() => navigate('/all-projects?category=school')}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden bg-gradient-to-br from-violet-500/10 to-cyan-500/10 border border-violet-400/30 rounded-2xl p-8 hover:border-violet-400/60 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-4xl mb-4">🎓</div>
                  <h3 className="text-2xl font-bold mb-2">Projets d'école</h3>
                  <p className="text-white/50 text-sm mb-4">
                    Projets académiques UQAC & IUT Orsay
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-violet-400 text-sm font-mono">
                      {allProjects.filter(p => p.category === 'school').length} projets
                    </span>
                    <span className="text-violet-400 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </motion.button>

              <motion.button
                onClick={() => navigate('/all-projects?category=personal')}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="group relative overflow-hidden bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-400/30 rounded-2xl p-8 hover:border-pink-400/60 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-4xl mb-4">💡</div>
                  <h3 className="text-2xl font-bold mb-2">Projets personnels</h3>
                  <p className="text-white/50 text-sm mb-4">
                    Créations et expérimentations
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-pink-400 text-sm font-mono">
                      {allProjects.filter(p => p.category === 'personal').length} projets
                    </span>
                    <span className="text-pink-400 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </motion.button>

              <motion.button
                onClick={() => navigate('/all-projects?category=gamejam')}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="group relative overflow-hidden bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-400/30 rounded-2xl p-8 hover:border-orange-400/60 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-2xl font-bold mb-2">Game Jams</h3>
                  <p className="text-white/50 text-sm mb-4">
                    Jeux créés en temps limité
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-400 text-sm font-mono">
                      {allProjects.filter(p => p.category === 'gamejam').length} projets
                    </span>
                    <span className="text-orange-400 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </motion.button>
            </div>

            {/* Featured Projects with Videos */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Projets en vedette</h3>
              <p className="text-white/40 text-sm">Sélection de mes meilleurs travaux</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {allProjects.slice(0, 6).map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => navigate('/all-projects')}
                className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium px-8 py-4 rounded-full transition-all shadow-lg shadow-violet-900/30"
              >
                Explorer tous les projets ({allProjects.length})
                <span className="text-xl">→</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center px-6 md:px-16 lg:px-32 py-24">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-violet-400 text-2xl font-mono">04</span>
              <div className="h-px flex-1 bg-gradient-to-r from-violet-400/50 to-transparent" />
            </div>
            <h2 className="text-5xl font-black mb-8">Contact</h2>
            <p className="text-white/50 text-lg mb-12 max-w-2xl">
              Vous avez un projet ou souhaitez collaborer ? N'hésitez pas à me contacter.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/Multislache"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium px-6 py-3 rounded-full transition-all"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/jacques-wen-43ba32164/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/70 hover:text-white text-sm font-medium px-6 py-3 rounded-full transition-all"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href="mailto:"
                className="flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/70 hover:text-white text-sm font-medium px-6 py-3 rounded-full transition-all"
              >
                <Mail size={16} />
                Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 md:px-16 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs font-mono">© 2026 Jacques Wen</p>
          <p className="text-white/20 text-xs font-mono">Multislache</p>
        </div>
      </footer>
    </div>
  );
}