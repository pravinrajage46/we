'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';

function RobotModel() {
  return (
    <mesh>
      <boxGeometry args={[1, 2, 1]} />
      <meshStandardMaterial
        color="#00d4ff"
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  );
}

export default function RobotViewer() {
  return (
    <div className="max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-12 text-glow"
      >
        INTERACTIVE <span className="text-electric-blue">ROBOT MODEL</span>
      </motion.h2>

      <div className="glass rounded-2xl overflow-hidden h-[600px]">
        <Canvas>
          <PerspectiveCamera makeDefault position={[3, 2, 5]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
          <spotLight position={[-10, 10, 5]} angle={0.3} penumbra={1} color="#00fff5" />
          <RobotModel />
          <Environment preset="city" />
          <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={2} />
        </Canvas>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {['AI Vision', 'Neural CPU', 'Servo Motors', 'LIDAR'].map((component) => (
          <motion.button
            key={component}
            whileHover={{ scale: 1.05, borderColor: '#00d4ff' }}
            className="glass p-4 rounded-lg text-center font-semibold"
          >
            {component}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
