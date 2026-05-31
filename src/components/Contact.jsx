import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's Connect<span className="text-sky-400">.</span>
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Feel free to reach out to me via email for collaborations or just a friendly chat.
          </p>
          <a 
            href="mailto:hieuphamminh976@gmail.com" 
            className="inline-block text-2xl md:text-3xl font-bold gradient-text hover:scale-105 transition-transform duration-300 mb-12"
          >
            hieuphamminh976@gmail.com
          </a>
          
          <div className="border-t border-slate-700/50 pt-8 mt-4 text-slate-400">
            <p className="font-medium text-white mb-2">University of Management and Technology HCMC</p>
            <p>Ho Chi Minh city, 70000</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
