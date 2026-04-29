'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const logs = [
  'INITIALIZING ROBOX SYSTEM...',
  'LOADING NEURAL NETWORK WEIGHTS...',
  'CONNECTING TO DRONE [192.168.1.42]...',
  'CALIBRATING IMU SENSORS...',
  'MOTOR DIAGNOSTICS: OK',
  'LIDAR ONLINE | RANGE: 30M',
  'CAMERA FEED ACTIVE | FPS: 60',
  'PATH PLANNING MODULE LOADED',
  'OBSTACLE DETECTION: ACTIVE',
  'SYSTEM READY | AWAITING COMMANDS...',
];

export default function Terminal() {
  const [visibleLogs, setVisibleLogs] = useState<string[]>([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < logs.length) {
        setVisibleLogs((prev) => [...prev, logs[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-12 text-glow"
      >
        SYSTEM <span className="text-electric-blue">TERMINAL</span>
      </motion.h2>

      <div className="terminal">
        {visibleLogs.map((log, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="mb-2"
          >
            <span className="text-neon-cyan">&gt;</span> {log}
          </motion.div>
        ))}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="inline-block w-2 h-5 bg-success ml-1"
        />
      </div>
    </div>
  );
}
