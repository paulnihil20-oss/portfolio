import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 lg:p-12 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink/75 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-canvas border border-rule overflow-y-auto z-10 shadow-2xl space-y-6 p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-rule pb-4">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-cobalt" />
            <span className="font-mono text-xs uppercase tracking-widest text-ink font-bold">
              CURRICULUM VITAE // PAUL NIHIL
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 border border-rule hover:border-ink hover:bg-ink hover:text-canvas transition-colors"
            aria-label="Close Resume Viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* PDF Frame */}
        <div className="border border-rule bg-canvas-subtle h-[500px] sm:h-[580px] overflow-hidden relative">
          <iframe
            src={PERSONAL_INFO.resumePdf}
            title="Paul Nihil Resume PDF"
            className="w-full h-full border-none"
          />
        </div>

        {/* Actions Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-rule">
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.resumePdf}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-canvas font-mono text-xs uppercase tracking-widest hover:bg-cobalt transition-colors font-semibold"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF File</span>
            </a>

            <a
              href={PERSONAL_INFO.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-rule hover:border-ink text-ink font-mono text-xs uppercase tracking-widest transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-cobalt" />
              <span>Open in Browser Tab</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="font-mono text-xs uppercase tracking-widest text-ink-muted hover:text-ink transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
