import React, { useEffect } from 'react';
import { Certificate } from '../types';
import { X, Download, ExternalLink, Award } from 'lucide-react';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (certificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink/75 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-canvas border border-rule overflow-y-auto z-10 shadow-2xl space-y-6 p-6 sm:p-8 lg:p-10">
        {/* Header Strip */}
        <div className="flex items-center justify-between border-b border-rule pb-4">
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-cobalt" />
            <span className="font-mono text-xs uppercase tracking-widest text-cobalt font-bold">
              {certificate.number} // VERIFIED CREDENTIAL
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 border border-rule hover:border-ink hover:bg-ink hover:text-canvas transition-colors"
            aria-label="Close Certificate Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title & Metadata */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-ink-muted uppercase">
            <span className="px-2.5 py-0.5 border border-rule bg-canvas-subtle/50 text-ink font-semibold">
              {certificate.issuer}
            </span>
            <span>YEAR: {certificate.year}</span>
            <span>·</span>
            <span>{certificate.category}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-display font-bold text-ink tracking-tight">
            {certificate.title}
          </h2>
          <p className="font-sans text-sm text-ink-muted leading-relaxed">
            {certificate.description}
          </p>
        </div>

        {/* PDF Frame Previewer */}
        <div className="border border-rule bg-canvas-subtle h-[380px] sm:h-[450px] overflow-hidden relative">
          <iframe
            src={certificate.pdfPath}
            title={certificate.title}
            className="w-full h-full border-none"
          />
        </div>

        {/* Skills Tagged */}
        <div className="space-y-2 pt-2">
          <span className="font-mono text-xs text-ink-muted uppercase tracking-widest block">
            Validated Competencies
          </span>
          <div className="flex flex-wrap gap-2">
            {certificate.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 font-mono text-xs border border-rule bg-canvas text-ink font-medium uppercase"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-rule">
          <div className="flex items-center gap-3">
            <a
              href={certificate.pdfPath}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-canvas font-mono text-xs uppercase tracking-widest hover:bg-cobalt transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <a
              href={certificate.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-rule hover:border-ink text-ink font-mono text-xs uppercase tracking-widest transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-cobalt" />
              <span>Open in New Tab</span>
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
