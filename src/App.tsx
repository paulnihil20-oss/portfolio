import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { SelectedWork } from './components/SelectedWork';
import { InteractiveLab } from './components/InteractiveLab';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { TimelineSection } from './components/TimelineSection';
import { CertificatesArchive } from './components/CertificatesArchive';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { ResumeModal } from './components/ResumeModal';
import { useScrollReveal } from './hooks/useScrollReveal';

export const AppContent: React.FC = () => {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Initialize Scroll Reveal Observer for smooth section-to-section transitions
  useScrollReveal();

  return (
    <div className="min-h-screen bg-canvas text-ink font-sans selection:bg-cobalt selection:text-white editorial-grid-bg relative transition-colors duration-300">
      {/* Interactive Magnetic Custom Cursor */}
      <CustomCursor />

      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Floating Editorial Navbar */}
      <Navbar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Main Continuous Editorial Sections */}
      <main>
        {/* 01 // HERO & MONUMENTAL IDENTITY */}
        <Hero onOpenTerminal={() => setIsCommandPaletteOpen(true)} />

        {/* 02 // INTRODUCTION & MANIFESTO */}
        <Introduction />

        {/* 03 // SELECTED WORK & PRODUCTION SYSTEMS */}
        <SelectedWork />

        {/* 03.5 // LIVE SYSTEMS LABORATORY (INTERACTIVE ENGINE RUNTIME) */}
        <InteractiveLab />

        {/* 04 // ABOUT & TELEMETRY */}
        <AboutSection />

        {/* 05 // SKILLS MATRIX & CAPABILITIES */}
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

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
