import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaGraduationCap } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-40 h-40 md:w-56 md:h-56 mb-8 rounded-full p-1 bg-gradient-to-tr from-sky-400 to-purple-600"
        >
          <img 
            src="/Images/ava.jpg" 
            alt="Profile" 
            className="w-full h-full object-cover rounded-full border-4 border-slate-900"
          />
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
        >
          Phuoc Minh Hieu <span className="gradient-text">PHAM</span>
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl md:text-2xl text-slate-300 mb-2"
        >
          Bachelor Student | Information Technology
        </motion.p>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-md text-slate-400 mb-8"
        >
          University of Management and Technology HCMC
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="mailto:hieuphamminh976@gmail.com" className="glass-card px-6 py-3 flex items-center gap-2 hover:bg-white/10 transition-colors">
            <FaEnvelope /> Email
          </a>
          <a href="https://scholar.google.com/citations?hl=en&user=mTX8xQoAAAAJ&sortby=title&view_op=list_works&gmla=AKzYXQ2fmbAgCGHgizt4ntdH3kLG02cqaBUnq-ivP7CFdstEjoz4MOOl2VRKZ9ZB80zUF21pzdLq_ifsKhp_Ypwd" target="_blank" rel="noopener noreferrer" className="glass-card px-6 py-3 flex items-center gap-2 hover:bg-white/10 transition-colors">
            <FaGraduationCap /> Scholar
          </a>
          <a href="https://github.com/hieuphampm" target="_blank" rel="noopener noreferrer" className="glass-card px-6 py-3 flex items-center gap-2 hover:bg-white/10 transition-colors">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/hieupham976/" target="_blank" rel="noopener noreferrer" className="glass-card px-6 py-3 flex items-center gap-2 hover:bg-white/10 transition-colors">
            <FaLinkedin /> LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
