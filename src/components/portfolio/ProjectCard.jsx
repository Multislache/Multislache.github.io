import { motion } from "framer-motion";
import { ArrowUpRight, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({ project, index }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/project-detail?id=' + project.id, { state: { project } });
  };

  return (
    <motion.div
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group border border-white/10 rounded-2xl overflow-hidden hover:border-violet-400/30 bg-white/3 transition-all duration-300 cursor-pointer"
    >
      {(project.video || project.images?.[0]) && (
        <div className="relative w-full aspect-video bg-black overflow-hidden">
          {project.video ? (
            <video
              src={project.video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <img
              src={project.images[0]}
              alt={project.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07070f]/80 to-transparent" />
        </div>
      )}
      <div className="flex flex-col gap-4 p-6">
        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <h3 className="text-white font-bold text-lg group-hover:text-violet-300 transition-colors">
                  {project.name}
                </h3>
                {project.collaborative && (
                  <span className="text-[10px] font-mono text-violet-400/70 border border-violet-400/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Users size={10} />
                  </span>
                )}
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/50 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3 text-xs text-white/30">
                {project.school && <span>{project.school}</span>}
                {project.year && <span>• {project.year}</span>}
              </div>
            </div>
            <ArrowUpRight
              size={18}
              className="text-white/20 group-hover:text-violet-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0"
            />
          </div>
        </div>
        </div>
      </div>
    </motion.div>
  );
}