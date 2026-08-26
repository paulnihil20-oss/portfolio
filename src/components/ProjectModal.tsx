import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, Github, ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink/75 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-canvas border border-rule overflow-y-auto z-10 shadow-2xl space-y-8 p-6 sm:p-8 lg:p-12">
        {/* Header Strip */}
        <div className="flex items-center justify-between border-b border-rule pb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-cobalt font-bold">
              {project.number} // ARCHIVE CASE STUDY
            </span>
            <span className="w-8 h-[1px] bg-rule" />
            <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
              YEAR: {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 border border-rule hover:border-ink hover:bg-ink hover:text-canvas transition-colors"
            aria-label="Close Case Study Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-3">
          <span className="font-mono text-xs text-ink-muted uppercase tracking-widest">
            {project.category} · {project.role}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink tracking-tight">
            {project.title}
          </h2>
          <p className="text-base text-ink-muted leading-relaxed font-sans max-w-2xl">
            {project.tagline}
          </p>
        </div>

        {/* Visual Hero */}
        <div className="border border-rule overflow-hidden bg-canvas-dark relative aspect-video sm:aspect-[21/9]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-95"
          />
        </div>

        {/* Problem vs Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-b border-rule py-8">
          <div className="space-y-3">
            <span className="font-mono text-xs text-rose-600 font-semibold uppercase tracking-wider">
              [ 01 // Problem Statement ]
            </span>
            <h3 className="font-display font-semibold text-lg text-ink">
              Core Challenge
            </h3>
            <p className="font-sans text-sm text-ink-muted leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="space-y-3">
            <span className="font-mono text-xs text-emerald-600 font-semibold uppercase tracking-wider">
              [ 02 // Engineering Solution ]
            </span>
            <h3 className="font-display font-semibold text-lg text-ink">
              Engineered Implementation
            </h3>
            <p className="font-sans text-sm text-ink-muted leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* System Architecture Blueprint */}
        <div className="space-y-4">
          <span className="font-mono text-xs text-cobalt font-semibold uppercase tracking-widest">
            System Architecture & Data Flow
          </span>
          <div className="border border-rule divide-y divide-rule bg-canvas-subtle/40 font-mono text-xs">
            {project.architecture.map((layer, idx) => (
              <div key={idx} className="p-3.5 flex items-center gap-3">
                <span className="text-cobalt font-bold">L0{idx + 1} //</span>
                <span className="text-ink font-medium">{layer}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quantified Metrics */}
        <div className="space-y-4">
          <span className="font-mono text-xs text-ink font-semibold uppercase tracking-widest">
            Performance Metrics & Results
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="p-4 border border-rule bg-canvas-subtle/50 space-y-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <p className="font-sans text-xs text-ink font-medium leading-normal">
                  {metric}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="space-y-3">
          <span className="font-mono text-xs text-ink-muted uppercase tracking-widest">
            Technology Stack & Tools
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 font-mono text-xs border border-rule bg-canvas text-ink font-medium uppercase tracking-wider"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-rule">
          <div className="flex items-center gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-ink text-canvas font-mono text-xs uppercase tracking-widest hover:bg-cobalt transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Source Repository</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-rule hover:border-ink text-ink font-mono text-xs uppercase tracking-widest transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-cobalt" />
                <span>Live Demonstration</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="font-mono text-xs uppercase tracking-widest text-ink-muted hover:text-ink transition-colors flex items-center gap-1"
          >
            <span>Close Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
