'use client';

import { motion } from 'framer-motion';
import { Github, Play, Zap } from 'lucide-react';

import siteConfig from '@/data/siteConfig.json';

const statusColors = {
  ACTIVE: 'success',
  PROTOTYPE: 'warning',
  DEPLOYED: 'electric-blue',
};

export default function ProjectShowcase() {
  const { projects } = siteConfig;
  return (
    <div className="max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-12 text-glow"
      >
        ROBOTICS <span className="text-electric-blue">PROJECTS</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="glass rounded-xl overflow-hidden hover-lift group cursor-pointer"
          >
            {/* Image */}
            <div className="relative h-64 bg-gradient-to-br from-graphite to-dark-navy overflow-hidden">
              <div className="absolute inset-0 bg-electric-blue/10 group-hover:bg-electric-blue/20 transition-colors" />
              <div className="absolute top-4 right-4">
                <span className={`px-4 py-1 rounded-full text-xs font-bold bg-${statusColors[project.status as keyof typeof statusColors]}/20 text-${statusColors[project.status as keyof typeof statusColors]} border border-${statusColors[project.status as keyof typeof statusColors]}`}>
                  {project.status}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-orbitron text-2xl font-bold mb-3 group-hover:text-electric-blue transition-colors">
                {project.title}
              </h3>
              <p className="text-silver mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-electric-blue/10 border border-electric-blue/30 text-electric-blue rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,212,255,0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-4 py-2 bg-electric-blue/10 border border-electric-blue text-electric-blue rounded-lg flex items-center justify-center gap-2 font-semibold"
                >
                  <Github size={18} /> Code
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,255,245,0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-4 py-2 bg-neon-cyan/10 border border-neon-cyan text-neon-cyan rounded-lg flex items-center justify-center gap-2 font-semibold"
                >
                  <Play size={18} /> Demo
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
