import React, { useState, useEffect } from 'react';
import { Command, Menu, X, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'statement', 'work', 'about', 'skills', 'timeline', 'certificates', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#timeline' },
    { name: 'Certifications', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-canvas/90 backdrop-blur-md border-b border-rule py-3'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Left: Brand Initials & System Code */}
        <a
          href="#hero"
          className="flex items-center gap-3 group"
        >
          <span className="font-display font-bold text-lg text-ink tracking-tight">
            {PERSONAL_INFO.initials}
          </span>
          <span className="font-mono text-[11px] text-ink-muted uppercase tracking-widest border-l border-rule pl-3 hidden sm:inline-block">
            PORTFOLIO // 2026
          </span>
        </a>

        {/* Center: Minimalist Editorial Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`font-mono text-xs uppercase tracking-widest transition-colors relative py-1 ${
                  isActive ? 'text-ink font-semibold' : 'text-ink-muted hover:text-ink'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-cobalt" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Actions (Resume, Cmd+K, Mobile Toggle) */}
        <div className="flex items-center gap-3">
          {/* Resume PDF Action */}
          <button
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 border border-rule hover:border-ink bg-transparent text-ink font-mono text-xs uppercase tracking-wider transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-cobalt" />
            <span>Resume</span>
          </button>

          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="hidden lg:flex items-center gap-2 px-3 py-1.5 border border-rule hover:border-ink text-ink-muted hover:text-ink font-mono text-xs transition-colors"
            title="Search & Quick Actions (Ctrl+K)"
          >
            <Command className="w-3.5 h-3.5" />
            <span>⌘K</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-1.5 border border-rule hover:border-ink md:hidden text-ink"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-canvas border-b border-rule px-6 py-6 space-y-4 animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-sm uppercase tracking-widest text-ink py-2 border-b border-rule/50 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-ink-muted font-normal">→</span>
              </a>
            ))}
          </div>

          <div className="pt-2 flex items-center justify-between gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-ink text-canvas font-mono text-xs uppercase tracking-widest"
            >
              <FileText className="w-4 h-4 text-cobalt" />
              <span>View Full Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
