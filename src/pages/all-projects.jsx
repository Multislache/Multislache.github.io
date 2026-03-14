import { motion } from "framer-motion";
import { ArrowLeft, Search } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ProjectCard from "../components/portfolio/ProjectCard";
import { allProjects } from "../components/portfolio/projectsData";

export default function AllProjects() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSchool, setActiveSchool] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    if (category && ['school', 'personal', 'gamejam'].includes(category)) {
      setActiveCategory(category);
    }
  }, [location]);

  let filtered = allProjects;
  
  if (activeCategory !== "all") {
    filtered = filtered.filter(p => p.category === activeCategory);
  }
  
  if (activeSchool !== "all") {
    filtered = filtered.filter(p => p.school === activeSchool);
  }

  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.tech.some(t => t.toLowerCase().includes(query))
    );
  }

  const techTags = [...new Set(allProjects.flatMap(p => p.tech))].sort();

  return (
    <div className="min-h-screen bg-[#07070f] text-white">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-5 flex justify-between items-center border-b border-white/5 bg-[#07070f]/80 backdrop-blur-md">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <ArrowLeft size={18} />
          <span className="text-sm font-mono">Retour</span>
        </button>
      </nav>

      {/* Content */}
      <div className="pt-24 px-6 md:px-16 lg:px-32 pb-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Page header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-4">
              Tous mes projets
            </h1>
            <p className="text-white/40 text-lg mb-6">
              {filtered.length} projet{filtered.length > 1 ? "s" : ""} trouvé{filtered.length > 1 ? "s" : ""}
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
              <input
                type="text"
                placeholder="Rechercher par nom, description ou technologie..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full pl-12 pr-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-violet-400/50 focus:bg-white/8 transition-all"
              />
            </div>
          </motion.div>

          {/* Filters */}
          <div className="mb-12 space-y-6">
            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-br from-violet-500/10 to-cyan-500/10 border border-violet-400/20 rounded-xl p-4 text-center"
              >
                <div className="text-3xl font-black text-violet-400 mb-1">
                  {allProjects.filter(p => p.category === 'school').length}
                </div>
                <div className="text-sm text-white/70 font-semibold">Projets d'école</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-400/20 rounded-xl p-4 text-center"
              >
                <div className="text-3xl font-black text-pink-400 mb-1">
                  {allProjects.filter(p => p.category === 'personal').length}
                </div>
                <div className="text-sm text-white/70 font-semibold">Projets personnels</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-400/20 rounded-xl p-4 text-center"
              >
                <div className="text-3xl font-black text-orange-400 mb-1">
                  {allProjects.filter(p => p.category === 'gamejam').length}
                </div>
                <div className="text-sm text-white/70 font-semibold">Game Jams</div>
              </motion.div>
            </div>

            {/* Category filters */}
            <div>
              <p className="text-xs text-white/40 font-mono mb-3">CATÉGORIES</p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => { setActiveCategory("all"); setActiveSchool("all"); }}
                  className={`text-sm font-semibold px-5 py-2.5 rounded-full border transition-all duration-200 ${
                    activeCategory === "all"
                      ? "bg-violet-600 border-violet-500 text-white shadow-lg shadow-violet-900/30"
                      : "border-white/15 text-white/50 hover:border-white/30 hover:text-white/80"
                  }`}
                >
                  🌟 Tous
                </button>
                <button
                  onClick={() => { setActiveCategory("school"); setActiveSchool("all"); }}
                  className={`text-sm font-semibold px-5 py-2.5 rounded-full border transition-all duration-200 ${
                    activeCategory === "school"
                      ? "bg-violet-600 border-violet-500 text-white shadow-lg shadow-violet-900/30"
                      : "border-white/15 text-white/50 hover:border-white/30 hover:text-white/80"
                  }`}
                >
                  🎓 École
                </button>
                <button
                  onClick={() => { setActiveCategory("personal"); setActiveSchool("all"); }}
                  className={`text-sm font-semibold px-5 py-2.5 rounded-full border transition-all duration-200 ${
                    activeCategory === "personal"
                      ? "bg-pink-600 border-pink-500 text-white shadow-lg shadow-pink-900/30"
                      : "border-white/15 text-white/50 hover:border-white/30 hover:text-white/80"
                  }`}
                >
                  💡 Personnel
                </button>
                <button
                  onClick={() => { setActiveCategory("gamejam"); setActiveSchool("all"); }}
                  className={`text-sm font-semibold px-5 py-2.5 rounded-full border transition-all duration-200 ${
                    activeCategory === "gamejam"
                      ? "bg-orange-600 border-orange-500 text-white shadow-lg shadow-orange-900/30"
                      : "border-white/15 text-white/50 hover:border-white/30 hover:text-white/80"
                  }`}
                >
                  ⚡ Game Jams
                </button>
              </div>
            </div>

            {/* School filters */}
            {(activeCategory === "all" || activeCategory === "school") && (
              <div>
                <p className="text-xs text-white/40 font-mono mb-3">INSTITUTIONS</p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setActiveSchool("all")}
                    className={`text-sm font-semibold px-5 py-2.5 rounded-full border transition-all duration-200 ${
                      activeSchool === "all"
                        ? "bg-cyan-600 border-cyan-500 text-white shadow-lg shadow-cyan-900/30"
                        : "border-white/15 text-white/50 hover:border-white/30 hover:text-white/80"
                    }`}
                  >
                    Toutes
                  </button>
                  <button
                    onClick={() => setActiveSchool("UQAC")}
                    className={`text-sm font-semibold px-5 py-2.5 rounded-full border transition-all duration-200 ${
                      activeSchool === "UQAC"
                        ? "bg-cyan-600 border-cyan-500 text-white shadow-lg shadow-cyan-900/30"
                        : "border-white/15 text-white/50 hover:border-white/30 hover:text-white/80"
                    }`}
                  >
                    🇨🇦 UQAC
                  </button>
                  <button
                    onClick={() => setActiveSchool("IUT Orsay")}
                    className={`text-sm font-semibold px-5 py-2.5 rounded-full border transition-all duration-200 ${
                      activeSchool === "IUT Orsay"
                        ? "bg-cyan-600 border-cyan-500 text-white shadow-lg shadow-cyan-900/30"
                        : "border-white/15 text-white/50 hover:border-white/30 hover:text-white/80"
                    }`}
                  >
                    🇫🇷 IUT Orsay
                  </button>
                  <button
                    onClick={() => setActiveSchool("Lycée")}
                    className={`text-sm font-semibold px-5 py-2.5 rounded-full border transition-all duration-200 ${
                      activeSchool === "Lycée"
                        ? "bg-cyan-600 border-cyan-500 text-white shadow-lg shadow-cyan-900/30"
                        : "border-white/15 text-white/50 hover:border-white/30 hover:text-white/80"
                    }`}
                  >
                    🎒 Lycée
                  </button>
                </div>
              </div>
            )}

            {/* Tech Tags */}
            <div>
              <p className="text-xs text-white/40 font-mono mb-3">TECHNOLOGIES POPULAIRES</p>
              <div className="flex flex-wrap gap-2">
                {techTags.slice(0, 12).map(tech => (
                  <button
                    key={tech}
                    onClick={() => setSearchQuery(tech)}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:border-violet-400/30 hover:text-violet-300 transition-all font-mono"
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* All Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.length > 0 ? (
              filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))
            ) : (
              <div className="col-span-2 text-center py-12">
                <p className="text-white/30 text-sm">Aucun projet trouvé avec ces filtres.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}