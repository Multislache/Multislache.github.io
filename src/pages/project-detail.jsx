import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { getProjectById } from "../components/portfolio/projectsData";

export default function ProjectDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const projectId = params.get('id');
    
    if (location.state?.project) {
      setProject(location.state.project);
    } else if (projectId) {
      const foundProject = getProjectById(projectId);
      if (foundProject) {
        setProject(foundProject);
      } else {
        navigate('/');
      }
    } else {
      navigate('/');
    }
  }, [location, navigate]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#07070f] flex items-center justify-center">
        <div className="text-white/40">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#07070f] text-white">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-5 flex justify-between items-center border-b border-white/5 bg-[#07070f]/80 backdrop-blur-md">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <ArrowLeft size={18} />
          <span className="text-sm font-mono">Retour au portfolio</span>
        </button>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 rounded-full px-4 py-2 transition-all duration-300"
          >
            <Github size={14} />
            GitHub
          </a>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-16 px-6 md:px-16 lg:px-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              {project.collaborative && (
                <span className="text-xs font-mono text-violet-400/70 border border-violet-400/30 px-3 py-1 rounded-full flex items-center gap-1.5">
                  <Users size={10} />
                  Projet collaboratif
                </span>
              )}
              {project.school && (
                <span className="text-xs font-mono text-cyan-400/60 border border-cyan-400/20 px-3 py-1 rounded-full">
                  {project.school}
                </span>
              )}
              {project.year && (
                <span className="text-xs font-mono text-white/30">
                  {project.year}
                </span>
              )}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
              {project.name}
            </h1>
            
            <p className="text-white/50 text-xl leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 md:px-16 lg:px-32 pb-16">
        <div className="max-w-5xl mx-auto">
          
          {/* Tech Stack Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="text-sm font-mono text-violet-400 tracking-widest uppercase mb-4">Technologies utilisées</h2>
            <div className="flex flex-wrap gap-3">
              {project.tech?.map((t) => (
                <span
                  key={t}
                  className="text-sm px-4 py-2 rounded-lg border border-white/15 bg-white/5 text-white/70 font-medium hover:border-violet-400/30 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Video section */}
          {project.video && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <h2 className="text-sm font-mono text-violet-400 tracking-widest uppercase mb-6">Démonstration</h2>
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl shadow-violet-900/20">
                <video
                  src={project.video}
                  controls
                  className="w-full h-full"
                  poster={project.image}
                />
              </div>
            </motion.div>
          )}

          {/* Image gallery */}
          {project.images && project.images.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-16"
            >
              <h2 className="text-sm font-mono text-violet-400 tracking-widest uppercase mb-6">Aperçu visuel</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.images.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-black hover:border-violet-400/30 transition-all duration-300 group"
                  >
                    <img
                      src={img}
                      alt={`${project.name} screenshot ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Detailed description */}
          {project.detailedDescription && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-sm font-mono text-violet-400 tracking-widest uppercase mb-6">Description détaillée</h2>
              <div className="bg-white/3 border border-white/10 rounded-2xl p-8">
                <p className="text-white/70 text-lg leading-relaxed whitespace-pre-line">
                  {project.detailedDescription}
                </p>
              </div>
            </motion.div>
          )}

          {/* Learnings */}
          {project.learnings && project.learnings.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-16"
            >
              <h2 className="text-sm font-mono text-violet-400 tracking-widest uppercase mb-6">Compétences développées</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.learnings.map((learning, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.05 }}
                    className="flex items-start gap-3 bg-white/3 border border-white/10 rounded-xl p-4 hover:border-violet-400/30 transition-colors"
                  >
                    <span className="text-violet-400 mt-0.5 text-lg">✓</span>
                    <span className="text-white/70">{learning}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Challenges */}
          {project.challenges && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-sm font-mono text-violet-400 tracking-widest uppercase mb-6">Défis techniques</h2>
              <div className="bg-gradient-to-br from-violet-500/5 to-cyan-500/5 border border-violet-500/20 rounded-2xl p-8">
                <p className="text-white/70 text-lg leading-relaxed whitespace-pre-line">
                  {project.challenges}
                </p>
              </div>
            </motion.div>
          )}

          {/* Back button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center pt-8"
          >
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-white/60 hover:text-white border border-white/10 hover:border-white/30 rounded-full px-6 py-3 transition-all duration-300"
            >
              <ArrowLeft size={16} />
              Retour aux projets
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}