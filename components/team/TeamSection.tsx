'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

import siteConfig from '@/data/siteConfig.json';

export default function TeamSection() {
  const { team } = siteConfig;
  return (
    <div className="max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-12 text-glow"
      >
        OUR <span className="text-electric-blue">TEAM</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="glass rounded-xl overflow-hidden hover-lift text-center"
          >
            {/* Profile Image */}
            <div className="relative w-32 h-32 mx-auto mt-8 mb-4">
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue to-neon-cyan rounded-full opacity-50 blur-xl" />
              <div className="relative w-full h-full bg-gradient-to-br from-graphite to-dark-navy rounded-full border-2 border-electric-blue" />
            </div>

            {/* Info */}
            <div className="p-6">
              <h3 className="font-orbitron text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-electric-blue text-sm mb-4">{member.role}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-electric-blue/10 border border-electric-blue/30 text-electric-blue rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <motion.a
                  href={member.github}
                  whileHover={{ scale: 1.2, color: '#00d4ff' }}
                  className="text-silver"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href={member.linkedin}
                  whileHover={{ scale: 1.2, color: '#00d4ff' }}
                  className="text-silver"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, color: '#00d4ff' }}
                  className="text-silver"
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
