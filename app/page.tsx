'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/hero/Hero';
import LiveDashboard from '@/components/dashboard/LiveDashboard';
import ProjectShowcase from '@/components/projects/ProjectShowcase';
import TeamSection from '@/components/team/TeamSection';
import ResearchTimeline from '@/components/research/ResearchTimeline';
import Terminal from '@/components/terminal/Terminal';
import Achievements from '@/components/achievements/Achievements';
import Footer from '@/components/layout/Footer';
import LoadingScreen from '@/components/ui/LoadingScreen';
import CustomCursor from '@/components/ui/CustomCursor';

// Lazy load heavy 3D components
const RobotViewer = dynamic(() => import('@/components/robot/RobotViewer'), {
  ssr: false,
  loading: () => <LoadingScreen />
});

const AIAssistant = dynamic(() => import('@/components/ai-assistant/AIAssistant'), {
  ssr: false
});

export default function Home() {
  return (
    <main className="relative">
      <CustomCursor />
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen">
        <Hero />
      </section>

      {/* Interactive Robot Model */}
      <section id="robot" className="min-h-screen py-20">
        <Suspense fallback={<LoadingScreen />}>
          <RobotViewer />
        </Suspense>
      </section>

      {/* Live Dashboard */}
      <section id="dashboard" className="py-20 px-4">
        <LiveDashboard />
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-4">
        <ProjectShowcase />
      </section>

      {/* Terminal */}
      <section id="terminal" className="py-20 px-4">
        <Terminal />
      </section>

      {/* Team */}
      <section id="team" className="py-20 px-4">
        <TeamSection />
      </section>

      {/* Research */}
      <section id="research" className="py-20 px-4">
        <ResearchTimeline />
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-20 px-4">
        <Achievements />
      </section>

      {/* Footer */}
      <Footer />

      {/* AI Assistant - Floating */}
      <Suspense>
        <AIAssistant />
      </Suspense>
    </main>
  );
}
