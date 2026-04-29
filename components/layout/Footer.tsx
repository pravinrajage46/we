'use client';

import { motion } from 'framer-motion';
import { Github, Twitter, Youtube, Linkedin, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="relative mt-20 border-t border-electric-blue/20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="font-orbitron text-2xl font-bold text-glow mb-4">
              ROBOX<span className="text-electric-blue">LAB</span>
            </div>
            <p className="text-silver text-sm leading-relaxed">
              Building intelligent machines for tomorrow. Pioneering the future of robotics and AI.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron font-bold mb-4 text-electric-blue">EXPLORE</h4>
            <ul className="space-y-2 text-silver">
              {['Projects', 'Team', 'Research', 'Blog'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-electric-blue transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-orbitron font-bold mb-4 text-electric-blue">RESOURCES</h4>
            <ul className="space-y-2 text-silver">
              {['Documentation', 'API Reference', 'Support', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-electric-blue transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-orbitron font-bold mb-4 text-electric-blue">NEWSLETTER</h4>
            <p className="text-silver text-sm mb-4">
              Stay updated with our latest innovations
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-graphite/50 border border-electric-blue/30 rounded-lg focus:outline-none focus:border-electric-blue text-white placeholder-silver text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-electric-blue text-deep-space rounded-lg"
              >
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-electric-blue/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, color: '#00d4ff' }}
                className="text-silver transition-colors"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>

          <p className="text-silver text-sm">
            © 2024 ROBOX LAB. All rights reserved. | MIT License
          </p>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-electric-blue to-transparent" />
    </footer>
  );
}
