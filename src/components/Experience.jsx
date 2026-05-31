import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center"
        >
          Work Experience<span className="text-sky-400">.</span>
        </motion.h2>

        <div className="relative border-l-2 border-sky-400/30 pl-8 ml-4 md:ml-0 md:pl-0 md:border-none">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 relative md:w-1/2 md:pr-12 md:ml-auto md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] md:left-0 md:-ml-[11px] top-1 w-5 h-5 rounded-full bg-sky-400 border-4 border-slate-900 shadow-[0_0_15px_rgba(56,189,248,0.5)]"></div>
            
            <div className="glass-card p-8 hover:-translate-y-1 transition-transform">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">Data Science Intern</h3>
                <span className="bg-sky-500/20 text-sky-300 text-sm py-1 px-3 rounded-full border border-sky-500/30">Sep 2025 – Dec 2025</span>
              </div>
              <h4 className="gradient-text font-semibold mb-4">Motorola Solutions R&D Center Vietnam</h4>
              
              <ul className="list-disc list-outside ml-5 text-slate-300 space-y-2 mb-6">
                <li>Developed and optimized end-to-end Computer Vision pipelines, covering data engineering, model architecture design (CNNs, Transformers), and performance evaluation for real-world classification and image generation tasks.</li>
                <li>Implemented Generative AI solutions (Diffusion Models, GANs) for advanced data augmentation and image synthesis, addressing data scarcity and class imbalance in production datasets.</li>
              </ul>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {['Computer Vision', 'CNNs', 'Transformers', 'Diffusion Models', 'GANs', 'Data Augmentation'].map(tag => (
                  <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded bg-slate-700/50 text-slate-300 border border-slate-600/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-sky-400/30"></div>
        </div>
      </div>
    </section>
  );
}
