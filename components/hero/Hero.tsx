'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import ParticleField from './ParticleField';
import { ArrowRight, Play } from 'lucide-react';

function AnimatedSphere() {
  return (
    <Sphere args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#00d4ff"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden grid-background">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
          <AnimatedSphere />
          <ParticleField />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: [0.6, 0.05, 0.01, 0.9] }}
        >
          <motion.h1 
            className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-glow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Building Intelligent
            <br />
            <span className="text-electric-blue">Machines For Tomorrow</span>
          </motion.h1>

          <motion.p
            className="text-silver text-lg md:text-xl max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Pioneering autonomous systems, AI-powered robotics, and next-generation
            innovation at the intersection of hardware and intelligence.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,212,255,0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-electric-blue text-deep-space font-bold rounded-full flex items-center gap-2 justify-center"
            >
              Explore Lab <ArrowRight size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, borderColor: '#00fff5' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-electric-blue text-electric-blue font-bold rounded-full flex items-center gap-2 justify-center"
            >
              <Play size={20} /> View Projects
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 2, repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-electric-blue rounded-full flex justify-center">
            <div className="w-1 h-3 bg-electric-blue rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
