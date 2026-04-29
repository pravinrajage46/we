'use client';

import { motion } from 'framer-motion';
import { Trophy, Medal, Award } from 'lucide-react';

const achievements = [
  {
    year: 2024,
    title: 'RoboCup World Championship',
    position: 'Winner',
    icon: Trophy,
    color: 'warning',
  },
  {
    year: 2023,
    title: 'AI Robotics Hackathon',
    position: 'Runner-up',
    icon: Medal,
    color: 'silver',
  },
  {
    year: 2023,
    title: 'VEX Robotics Competition',
    position: 'Winner',
    icon: Trophy,
    color: 'warning',
  },
  {
    year: 2022,
    title: 'Innovation Challenge',
    position: 'Best Design',
    icon: Award,
    color: 'electric-blue',
  },
];

export default function Achievements() {
  return (
    <div className="max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-12 text-glow"
      >
        ACHIEVEMENTS & <span className="text-electric-blue">AWARDS</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -12, rotateY: 10 }}
            className="glass p-8 rounded-xl text-center hover-lift relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br from-${achievement.color}/10 to-transparent`} />

            {/* Icon */}
            <div className="relative mb-6">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <achievement.icon className={`text-${achievement.color} mx-auto`} size={64} />
              </motion.div>
            </div>

            {/* Content */}
            <div className="relative">
              <div className="text-silver text-sm mb-2">{achievement.year}</div>
              <h3 className="font-orbitron text-lg font-bold mb-2">{achievement.title}</h3>
              <span className={`px-4 py-1 rounded-full text-xs font-bold bg-${achievement.color}/20 text-${achievement.color} border border-${achievement.color}`}>
                {achievement.position}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
