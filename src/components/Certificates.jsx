import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const certificates = [
  { id: 1, title: 'AI Fundamentals', category: 'skills', image: '/Images/certs/skills/ai_funds.png' },
  { id: 2, title: 'DATA LITERACY', category: 'skills', image: '/Images/certs/skills/data_literacy.jpg' },
  { id: 3, title: 'Modern Web Design', category: 'skills', image: '/Images/certs/skills/web_des.jpg' },
  { id: 4, title: 'Gemini University Student', category: 'soft-skills', image: '/Images/certs/soft_skill/gemini.png' },
  { id: 5, title: 'Debate', category: 'soft-skills', image: '/Images/certs/soft_skill/debate.jpg' },
  { id: 6, title: 'The Best Media Ambassador from La Géostoire', category: 'media', image: '/Images/certs/media/media_ambassador.png' },
  { id: 7, title: 'StoryTeller 2023', category: 'media', image: '/Images/certs/media/storytellers.png' },
  { id: 8, title: 'University Representative Assistant for ICMS', category: 'social', image: '/Images/certs/assistant/icms.jpg' },
  { id: 9, title: 'University Representative Assistant for LaTrobe', category: 'social', image: '/Images/certs/assistant/latrobe.png' },
];

const categories = ['all', 'skills', 'soft-skills', 'media', 'social'];

export default function Certificates() {
  const [filter, setFilter] = useState('all');

  const filteredCerts = certificates.filter(cert => filter === 'all' || cert.category === filter);

  return (
    <section id="certificates" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-12 text-center"
        >
          Certificates<span className="text-sky-400">.</span>
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full capitalize font-medium transition-all ${filter === cat ? 'bg-sky-500 text-white shadow-[0_0_15px_rgba(56,189,248,0.5)]' : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50'}`}
            >
              {cat.replace('-', ' ')}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredCerts.map((cert) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                key={cert.id}
                className="relative group rounded-xl overflow-hidden aspect-[4/3] glass-card"
              >
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-sky-400 text-sm font-semibold uppercase tracking-wider mb-2">{cert.category.replace('-', ' ')}</span>
                  <h3 className="text-white text-lg font-bold">{cert.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
