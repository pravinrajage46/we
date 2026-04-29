'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Battery, Cpu, Wifi, Activity } from 'lucide-react';
import CountUp from 'react-countup';

import siteConfig from '@/data/siteConfig.json';

export default function LiveDashboard() {
  const { dashboardDefaults } = siteConfig;
  const [telemetry, setTelemetry] = useState(dashboardDefaults);

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry({
        battery: Math.floor(Math.random() * 5) + (dashboardDefaults.battery - 2),
        cpu: Math.floor(Math.random() * 10) + (dashboardDefaults.cpu - 5),
        rpm: Math.floor(Math.random() * 200) + (dashboardDefaults.rpm - 100),
        connectivity: Math.floor(Math.random() * 5) + (dashboardDefaults.connectivity - 4),
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [dashboardDefaults]);

  const metrics = [
    { icon: Battery, label: 'Battery (Pack A)', value: telemetry.battery, unit: '%', color: 'success' },
    { icon: Cpu, label: 'CPU (Jetson Orin)', value: telemetry.cpu, unit: '°C', color: 'warning' },
    { icon: Activity, label: 'Drive RPM', value: telemetry.rpm, unit: '', color: 'electric-blue' },
    { icon: Wifi, label: 'GCS Signal', value: telemetry.connectivity, unit: '%', color: 'neon-cyan' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-12 text-glow"
      >
        LIVE ROBOTICS <span className="text-electric-blue">DASHBOARD</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8, borderColor: `var(--${metric.color})` }}
            className="glass p-6 rounded-xl hover-lift"
          >
            <div className="flex items-center justify-between mb-4">
              <metric.icon className={`text-${metric.color}`} size={32} />
              <span className="text-silver text-sm uppercase tracking-wider">
                {metric.label}
              </span>
            </div>
            <div className="text-4xl font-orbitron font-bold text-glow">
              <CountUp end={metric.value} duration={2} />
              <span className="text-xl text-silver ml-1">{metric.unit}</span>
            </div>
            <div className="mt-4 h-2 bg-graphite rounded-full overflow-hidden">
              <motion.div
                className={`h-full bg-${metric.color}`}
                initial={{ width: 0 }}
                animate={{ width: `${metric.value}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* System Logs */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="terminal mt-12"
      >
        <div className="text-success space-y-2">
          <p>&gt; MOTOR CALIBRATION COMPLETE</p>
          <p>&gt; IMU SENSOR SYNCHRONIZED</p>
          <p>&gt; PATH PLANNING ACTIVE</p>
          <p>&gt; OBSTACLE DETECTION: ONLINE</p>
          <p className="animate-pulse">&gt; SYSTEM STATUS: OPERATIONAL_</p>
        </div>
      </motion.div>
    </div>
  );
}
