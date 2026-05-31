import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Publications() {
  return (
    <section id="publications" className="py-20 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-12 text-center"
        >
          Publications<span className="text-sky-400">.</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 group hover:-translate-y-1 transition-all"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-sky-400 transition-colors">
            Building an Adaptive Vietnamese License Plate Recognition and Retrieval System using Multi-Task Deep Learning
          </h3>
          <p className="text-slate-300 mb-4">
            <strong className="text-sky-300">Pham Phuoc Minh Hieu</strong>, Cao Sy Sieu, Huynh Le Phu Trung
          </p>
          <div className="mb-6">
            <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-3 py-1 rounded-full text-sm font-semibold">
              DCEST 2026
            </span>
          </div>
          <p className="text-slate-400 leading-relaxed mb-8">
            Automatic License Plate Recognition (ALPR) is an essential component of intelligent transportation, yet its performance is often significantly degraded by real-world image distortions and regional plate format complexities. This research addresses these challenges by proposing a highly adaptive, multi-task deep learning framework specifically designed for the Vietnamese license plate context...
          </p>
          <a 
            href="https://zenodo.org/records/19471924?token=eyJhbGciOiJIUzUxMiJ9.eyJpZCI6ImY5OWU1ZDUxLWFmZDQtNDM5Yi1iMjg1LWViNGQ3ZTQxNTNjZiIsImRhdGEiOnt9LCJyYW5kb20iOiJjOTI3MGEwMzE5NDVkY2YxZjhjNjY4NmVkZmViMGMwOSJ9.WWc4DUIVOAdV1zt5wEiWpIWJo0dbZmcYgi-Tb1v9ndd75rIyH5xZ0mjU5jzOkgvlKzSJrOCddoqv_XKgtIdXcA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Read PDF <FaExternalLinkAlt className="text-sm" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
