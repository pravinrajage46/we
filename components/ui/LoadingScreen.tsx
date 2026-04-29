'use client';

import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-deep-space">
      <div className="text-center">
        <motion.div
          className="w-20 h-20 border-4 border-electric-blue border-t-transparent rounded-full mx-auto mb-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <motion.p
          className="text-electric-blue font-orbitron text-xl"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          INITIALIZING SYSTEM...
        </motion.p>
      </div>
    </div>
  );
}
