import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 lg:py-16 bg-canvas border-t border-rule">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        {/* Top Strip */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-rule">
          <div className="space-y-1">
            <span className="font-display font-bold text-2xl text-ink tracking-tight block">
              {PERSONAL_INFO.name}
            </span>
            <span className="font-mono text-xs text-ink-muted uppercase tracking-widest block">
              {PERSONAL_INFO.title}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-ink-muted hover:text-ink uppercase tracking-widest transition-colors"
            >
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-ink-muted hover:text-ink uppercase tracking-widest transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="font-mono text-xs text-ink-muted hover:text-ink uppercase tracking-widest transition-colors"
            >
              Email
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 border border-rule hover:border-ink hover:bg-ink hover:text-canvas transition-colors ml-2"
              title="Return to Top of Document"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Colophon Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-[11px] text-ink-muted">
          <div>
            <span className="block text-ink font-medium uppercase">LOCATION</span>
            <span>Madurai & Chennai, Tamil Nadu, India</span>
          </div>

          <div className="sm:text-center">
            <span className="block text-ink font-medium uppercase">ACADEMICS</span>
            <span>B.E. CSE · LOYOLA-ICAM (LICET)</span>
          </div>

          <div className="sm:text-right">
            <span className="block text-ink font-medium uppercase">COPYRIGHT</span>
            <span>© {new Date().getFullYear()} PAUL NIHIL. ALL RIGHTS RESERVED.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
