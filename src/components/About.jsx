import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-12 text-center"
        >
          About<span className="text-sky-400">.</span>
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-card p-8 md:p-12"
        >
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6">
            I'm a passionate Information Technology student majoring in <strong className="text-white">Data Science</strong> with a strong foundation in <strong className="text-white">AI</strong>. Currently pursuing a Bachelor's degree at University of Management and Technology HCMC.
          </p>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            I am passionate about extracting insights from complex datasets and building AI (Computer Vision and Deep Learning) systems. In my spare time, I enjoy researching and testing new AI models to understand their behavior and improve their performance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
