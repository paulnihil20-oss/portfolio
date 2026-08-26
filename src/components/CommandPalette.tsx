import React, { useState, useEffect, useRef } from 'react';
import { Search, ArrowRight, X, Sparkles, FileText, Mail, Github, Linkedin, Code, Award, Check, Layers, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

interface PaletteAction {
  id: string;
  category: 'Navigation' | 'Projects' | 'Actions' | 'Social';
  title: string;
  subtitle?: string;
  icon: React.ElementType;
  perform: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onOpenResume }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const actions: PaletteAction[] = [
    // Navigation
    {
      id: 'nav-work',
      category: 'Navigation',
      title: 'Selected Work & Case Studies',
      subtitle: 'Engineered systems, architecture, and live projects',
      icon: Sparkles,
      perform: () => {
        onClose();
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'nav-about',
      category: 'Navigation',
      title: 'About & Background',
      subtitle: 'Education, academic base at LICET, and core focus',
      icon: Layers,
      perform: () => {
        onClose();
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'nav-skills',
      category: 'Navigation',
      title: 'Technical Skills Matrix',
      subtitle: 'Programming languages, databases, web & AI tooling',
      icon: Code,
      perform: () => {
        onClose();
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'nav-timeline',
      category: 'Navigation',
      title: 'Education & Career Timeline',
      subtitle: 'Academic path, degrees, and engineering milestones',
      icon: GraduationCap,
      perform: () => {
        onClose();
        document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'nav-certs',
      category: 'Navigation',
      title: 'Verified Certifications',
      subtitle: 'Oracle SQL, PL/SQL, Java Professional & UI/UX Credentials',
      icon: Award,
      perform: () => {
        onClose();
        document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'nav-contact',
      category: 'Navigation',
      title: 'Contact & Inquiries',
      subtitle: 'Send message, direct email, and communication channels',
      icon: Mail,
      perform: () => {
        onClose();
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    // Actions
    {
      id: 'act-resume',
      category: 'Actions',
      title: 'View Resume (PDF)',
      subtitle: 'Curriculum Vitae with full technical and academic record',
      icon: FileText,
      perform: () => {
        onClose();
        onOpenResume();
      },
    },
    {
      id: 'act-email',
      category: 'Actions',
      title: 'Copy Email Address',
      subtitle: PERSONAL_INFO.email,
      icon: Mail,
      perform: () => {
        navigator.clipboard.writeText(PERSONAL_INFO.email);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          onClose();
        }, 1200);
      },
    },
    // Projects
    ...PROJECTS.map((p) => ({
      id: `proj-${p.id}`,
      category: 'Projects' as const,
      title: p.title,
      subtitle: `${p.category} · ${p.technologies.join(', ')}`,
      icon: Code,
      perform: () => {
        onClose();
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
      },
    })),
    // Social
    {
      id: 'soc-github',
      category: 'Social',
      title: 'GitHub Profile',
      subtitle: 'github.com/paulnihil20-oss',
      icon: Github,
      perform: () => {
        window.open(PERSONAL_INFO.github, '_blank', 'noopener,noreferrer');
        onClose();
      },
    },
    {
      id: 'soc-linkedin',
      category: 'Social',
      title: 'LinkedIn Profile',
      subtitle: 'linkedin.com/in/paulnihil-p-150a54328',
      icon: Linkedin,
      perform: () => {
        window.open(PERSONAL_INFO.linkedin, '_blank', 'noopener,noreferrer');
        onClose();
      },
    },
  ];

  const filteredActions = actions.filter((action) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      action.title.toLowerCase().includes(q) ||
      action.subtitle?.toLowerCase().includes(q) ||
      action.category.toLowerCase().includes(q)
    );
  });

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      } else if (isOpen) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % (filteredActions.length || 1));
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % (filteredActions.length || 1));
        } else if (e.key === 'Enter' && filteredActions[selectedIndex]) {
          e.preventDefault();
          filteredActions[selectedIndex].perform();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, filteredActions, selectedIndex]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-start justify-center pt-16 sm:pt-24 p-4 animate-in fade-in duration-200">
      <div
        className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl bg-canvas border border-rule shadow-2xl overflow-hidden z-10">
        {/* Search Header */}
        <div className="p-4 border-b border-rule flex items-center gap-3 bg-canvas">
          <Search className="w-5 h-5 text-cobalt shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, skills, certifications, or actions..."
            className="w-full bg-transparent font-sans text-sm text-ink placeholder:text-ink-muted focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs font-mono text-ink-muted hover:text-ink px-1.5 py-0.5 border border-rule"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 border border-rule hover:border-ink text-ink-muted hover:text-ink transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Copy Feedback */}
        {copied && (
          <div className="px-5 py-2.5 bg-emerald-50 border-b border-emerald-200 text-emerald-800 font-mono text-xs flex items-center gap-2">
            <Check className="w-4 h-4" />
            <span>Email copied to clipboard ({PERSONAL_INFO.email})</span>
          </div>
        )}

        {/* Quick Navigation Items */}
        <div className="p-3 max-h-[60vh] overflow-y-auto space-y-1">
          {filteredActions.length === 0 ? (
            <div className="py-12 text-center text-ink-muted font-sans text-sm">
              No results found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            filteredActions.map((action, idx) => {
              const Icon = action.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={action.id}
                  onClick={() => action.perform()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between p-3 text-left transition-colors border ${
                    isSelected
                      ? 'bg-canvas-subtle/80 border-ink'
                      : 'border-transparent hover:bg-canvas-subtle/40'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`p-2 border ${isSelected ? 'border-cobalt bg-cobalt/10 text-cobalt' : 'border-rule text-ink-muted'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-sans text-sm font-semibold text-ink truncate">
                          {action.title}
                        </span>
                        <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 border border-rule text-ink-muted shrink-0">
                          {action.category}
                        </span>
                      </div>
                      {action.subtitle && (
                        <p className="font-sans text-xs text-ink-muted truncate">
                          {action.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 text-ink-muted transition-transform shrink-0 ml-3 ${isSelected ? 'translate-x-0.5 text-cobalt' : 'opacity-40'}`} />
                </button>
              );
            })
          )}
        </div>

        {/* Bottom Bar */}
        <div className="p-3 border-t border-rule bg-canvas-subtle/30 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-ink-muted">
          <div className="flex items-center gap-4">
            <span><strong className="text-ink">↑↓</strong> to navigate</span>
            <span><strong className="text-ink">↵</strong> to select</span>
            <span><strong className="text-ink">ESC</strong> to exit</span>
          </div>
          <span>{filteredActions.length} items</span>
        </div>
      </div>
    </div>
  );
};
