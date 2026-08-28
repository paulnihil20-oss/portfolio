import React, { useState, useEffect, useRef } from 'react';
import { Command, Menu, X, FileText, Palette, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme, THEMES, ThemeMode } from '../context/ThemeContext';
import { sound } from '../utils/audio';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette, onOpenResume }) => {
  const { theme, setTheme, themeConfig } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'statement', 'work', 'lab', 'about', 'skills', 'timeline', 'certificates', 'contact'];
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

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setThemeDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Live Lab', href: '#lab', isHighlight: true },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#timeline' },
    { name: 'Certifications', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleSelectTheme = (mode: ThemeMode) => {
    sound.playClick();
    setTheme(mode);
    setThemeDropdownOpen(false);
  };

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
          onClick={() => sound.playClick()}
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
        <nav className="hidden md:flex items-center gap-6 lg:gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => sound.playClick()}
                className={`font-mono text-xs uppercase tracking-widest transition-colors relative py-1 flex items-center gap-1.5 ${
                  isActive ? 'text-ink font-semibold' : 'text-ink-muted hover:text-ink'
                }`}
              >
                {link.isHighlight && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                )}
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-cobalt" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Actions (Theme Lens Switcher, Resume, Cmd+K, Mobile Toggle) */}
        <div className="flex items-center gap-2.5">
          
          {/* Creative Theme Matrix Lens Switcher */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => {
                sound.playClick();
                setThemeDropdownOpen(!themeDropdownOpen);
              }}
              onMouseEnter={() => sound.playHover()}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 border border-rule hover:border-ink bg-canvas text-ink font-mono text-[11px] uppercase tracking-wider transition-colors"
              title="Switch Visual Aesthetic Lens"
            >
              <Palette className="w-3.5 h-3.5 text-cobalt" />
              <span className="hidden sm:inline font-semibold">{themeConfig.name.split(' ')[0]}</span>
            </button>

            {/* Theme Dropdown Menu */}
            {themeDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 border border-rule bg-canvas shadow-xl z-50 p-2 space-y-1 animate-fadeIn">
                <div className="px-2.5 py-1.5 border-b border-rule/50 font-mono text-[10px] text-ink-muted uppercase tracking-wider font-bold">
                  AESTHETIC LENSES & SCHEMATICS:
                </div>
                {(Object.keys(THEMES) as ThemeMode[]).map((mode) => {
                  const cfg = THEMES[mode];
                  const isCurrent = theme === mode;
                  return (
                    <button
                      key={mode}
                      onClick={() => handleSelectTheme(mode)}
                      className={`w-full text-left p-2 font-mono text-xs transition-all flex items-center justify-between group ${
                        isCurrent
                          ? 'bg-ink text-canvas font-bold'
                          : 'hover:bg-canvas-subtle text-ink'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: cfg.accent }}
                          />
                          <span className="font-semibold">{cfg.name}</span>
                        </div>
                        <span className={`text-[10px] block ${isCurrent ? 'text-canvas/70' : 'text-ink-muted'}`}>
                          {cfg.subtitle}
                        </span>
                      </div>
                      {isCurrent && <Check className="w-3.5 h-3.5 text-cobalt shrink-0 ml-2" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Resume PDF Action */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenResume();
            }}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 border border-rule hover:border-ink bg-transparent text-ink font-mono text-xs uppercase tracking-wider transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-cobalt" />
            <span>Resume</span>
          </button>

          {/* Command Palette Trigger */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenCommandPalette();
            }}
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
                onClick={() => {
                  sound.playClick();
                  setMobileMenuOpen(false);
                }}
                className="font-mono text-sm uppercase tracking-widest text-ink py-2 border-b border-rule/50 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  {link.isHighlight && (
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  )}
                  <span>{link.name}</span>
                </div>
                <span className="text-xs text-ink-muted font-normal">→</span>
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-ink text-canvas font-mono text-xs uppercase tracking-widest font-semibold"
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
