import { motion } from "framer-motion";
import { Github, Mail, ExternalLink } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="px-6 md:px-16 lg:px-32 py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-violet-600/8 blur-3xl rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-violet-400 text-xs font-mono tracking-widest uppercase mb-4">
            — Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
            Travaillons ensemble
          </h2>
          <p className="text-white/40 text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Vous avez un projet en tête ou souhaitez collaborer ? N'hésitez pas à me contacter via GitHub ou par email.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://github.com/Multislache"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-violet-900/40"
            >
              <Github size={16} />
              GitHub Profile
            </a>
            <a
              href="mailto:"
              className="flex items-center gap-2 border border-white/15 hover:border-white/40 text-white/60 hover:text-white text-sm font-medium px-7 py-3.5 rounded-full transition-all duration-300"
            >
              <Mail size={16} />
              Me contacter
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/20 text-xs font-mono">
          © 2026 Jacques Wen — Multislache
        </p>
        <a
          href="https://github.com/Multislache"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-white/20 hover:text-white/50 text-xs font-mono transition-colors"
        >
          github.com/Multislache
          <ExternalLink size={11} />
        </a>
      </div>
    </section>
  );
}