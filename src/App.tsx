import React, { useState } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { SelectedWork } from './components/SelectedWork';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { TimelineSection } from './components/TimelineSection';
import { CertificatesArchive } from './components/CertificatesArchive';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { ResumeModal } from './components/ResumeModal';
import { useScrollReveal } from './hooks/useScrollReveal';

export const App: React.FC = () => {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Initialize Scroll Reveal Observer for smooth section-to-section transitions
  useScrollReveal();

  return (
    <div className="min-h-screen bg-canvas text-ink font-sans selection:bg-cobalt selection:text-white editorial-grid-bg relative">
      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Floating Editorial Navbar */}
      <Navbar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Main Continuous Editorial Sections */}
      <main>
        {/* 01 // HERO */}
        <Hero onOpenTerminal={() => setIsCommandPaletteOpen(true)} />

        {/* 02 // INTRODUCTION & MANIFESTO */}
        <Introduction />

        {/* 03 // SELECTED WORK & CASE STUDIES */}
        <SelectedWork />

        {/* 04 // ABOUT & TELEMETRY */}
        <AboutSection />

        {/* 05 // SKILLS MATRIX & 3D CONSTELLATION */}
        <SkillsSection />

        {/* 06 // TIMELINE & ACADEMICS */}
        <TimelineSection />

        {/* 07 // CERTIFICATES & CREDENTIALS */}
        <CertificatesArchive />

        {/* 08 // CONTACT & INQUIRIES */}
        <ContactSection onOpenResume={() => setIsResumeModalOpen(true)} />
      </main>

      {/* 10 // FOOTER & COLOPHON */}
      <Footer />

      {/* Command Palette Modal (Ctrl+K / Terminal) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Resume PDF Viewer Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
