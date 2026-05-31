import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Outpainting for License Plate Data Augmentation',
    description: 'This project employs Image Outpainting techniques, using deep learning models to predict and generate image segments that extend beyond the original canvas while maintaining consistency in content, lighting, and texture.',
    github: 'https://github.com/hieuphampm/Outpainting-for-License-Plate-Data-Augmentation'
  },
  {
    title: 'Vehicle Orientation Classification System',
    description: 'The Vehicle Orientation Classification System is a deep learning-based project designed to automatically recognize and classify the orientation of vehicles from images.',
    github: 'https://github.com/hieuphampm/Vehicle-Orientation-Classification-System'
  },
  {
    title: 'Face Recognition',
    description: 'A deep learning project that uses metric learning with Triplet Loss to recognize faces by learning discriminative embeddings. Similar faces are mapped closer together, enabling accurate matching.',
    github: 'https://github.com/hieuphampm/Face_Recognition_using_Metric_Learning'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-12 text-center"
        >
          Projects<span className="text-sky-400">.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 group"
            >
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-sky-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 mb-8 flex-grow">{project.description}</p>
              <div className="mt-auto">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-medium transition-colors"
                >
                  <FaGithub /> View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
