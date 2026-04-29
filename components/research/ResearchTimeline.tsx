'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Award, ExternalLink } from 'lucide-react';

interface ResearchItem {
  year: number;
  type: string;
  title: string;
  status: string;
  description: string;
  link?: string;
}

export default function ResearchTimeline() {
  const [research, setResearch] = useState<ResearchItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchResearch() {
      try {
        const response = await fetch('https://api.openalex.org/works?search=robotics&per_page=5&sort=publication_year:desc');
        const data = await response.json();
        
        const mappedData: ResearchItem[] = data.results.map((work: any) => ({
          year: work.publication_year,
          type: 'paper',
          title: work.title,
          status: 'Published',
          description: work.primary_location?.source?.display_name || 'Scientific Publication',
          link: work.doi || work.ids?.doi || '#'
        }));
        
        setResearch(mappedData);
      } catch (error) {
        console.error('Error fetching research:', error);
        // Fallback to demo data if API fails
        setResearch([
          {
            year: 2024,
            type: 'patent',
            title: 'Autonomous Navigation System',
            status: 'Pending',
            description: 'Novel approach to real-time path planning using deep reinforcement learning.',
          }
        ]);
      } finally {
        setLoading(false);
      }
    }

    fetchResearch();
  }, []);
  return (
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-12 text-glow"
      >
        RESEARCH & <span className="text-electric-blue">PATENTS</span>
      </motion.h2>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-electric-blue/30" />

        {loading ? (
          <div className="text-center py-20 text-silver font-orbitron animate-pulse">
            RETRIEVING SCIENTIFIC DATA...
          </div>
        ) : (
          research.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-20 pb-12 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 w-5 h-5 bg-electric-blue rounded-full border-4 border-deep-space pulse-ring" />

              {/* Year Badge */}
              <div className="absolute left-0 top-0 font-orbitron text-sm font-bold text-electric-blue">
                {item.year}
              </div>

              {/* Card */}
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="glass p-6 rounded-lg hover-lift transition-all group-hover:border-electric-blue">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {item.type === 'patent' ? (
                        <Award className="text-warning" size={24} />
                      ) : (
                        <FileText className="text-electric-blue" size={24} />
                      )}
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-orbitron text-xl font-bold group-hover:text-electric-blue transition-colors">{item.title}</h3>
                          {item.link !== '#' && <ExternalLink size={14} className="text-silver opacity-0 group-hover:opacity-100 transition-opacity" />}
                        </div>
                        <p className="text-sm text-silver mt-1">{item.description}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      item.status === 'Published' || item.status === 'Granted'
                        ? 'bg-success/20 text-success border border-success'
                        : 'bg-warning/20 text-warning border border-warning'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
