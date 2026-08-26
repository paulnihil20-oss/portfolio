import React from 'react';
import { TIMELINE } from '../data/portfolioData';
import { GraduationCap, Code2, Award, BookOpen, MapPin, Calendar } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'EDUCATION':
        return GraduationCap;
      case 'PROJECT':
        return Code2;
      case 'CERTIFICATION':
        return Award;
      default:
        return BookOpen;
    }
  };

  return (
    <section id="timeline" className="py-24 lg:py-36 border-b border-rule bg-canvas relative overflow-hidden">
      {/* Background Watermark Section Number */}
      <span
        aria-hidden="true"
        className="absolute -right-6 top-1/2 -translate-y-1/2 text-[18rem] lg:text-[26rem] font-display font-black text-ink/[0.02] select-none pointer-events-none tracking-tighter"
      >
        06
      </span>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-rule pb-4">
          <span className="font-mono text-xs text-cobalt font-semibold tracking-widest uppercase">
            06 // CHRONOLOGY & PATH
          </span>
          <span className="font-mono text-xs text-ink-muted tracking-widest uppercase">
            EDUCATION & MILESTONES
          </span>
        </div>

        {/* Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-ink tracking-tight uppercase leading-[1.08]">
              Academic &<br />Engineering Journey.
            </h2>
            <p className="font-sans text-sm text-ink-muted leading-relaxed">
              Chronological milestones spanning undergraduate computer science studies, applied software engineering projects, professional certifications, and foundational schooling.
            </p>
          </div>
        </div>

        {/* Vertical Timeline Tree */}
        <div className="relative pt-6">
          {/* Central spine on md+, left spine on mobile */}
          <div className="absolute top-8 bottom-8 left-4 sm:left-6 md:left-1/2 md:-translate-x-1/2 w-[1px] bg-rule" />

          <div className="space-y-12">
            {TIMELINE.map((item, idx) => {
              const Icon = getCategoryIcon(item.category);
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Spine Node Badge */}
                  <div className="absolute left-4 sm:left-6 md:left-1/2 md:-translate-x-1/2 top-6 -translate-x-1/2 w-9 h-9 rounded-full bg-canvas border border-rule flex items-center justify-center text-cobalt shadow-sm z-10">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Content Box */}
                  <div
                    className={`pl-12 sm:pl-16 md:pl-0 w-full md:w-[calc(50%-2rem)] ${
                      isEven ? 'md:pr-8 md:text-right' : 'md:pl-8'
                    }`}
                  >
                    <div className="border border-rule bg-canvas p-6 sm:p-8 space-y-4 hover:border-ink transition-colors group text-left">
                      {/* Top Meta Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rule/60 pb-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-cobalt shrink-0" />
                          <span className="font-display font-bold text-base sm:text-lg text-ink">
                            {item.year}
                          </span>
                        </div>
                        <span className={`font-mono text-[10px] uppercase px-2 py-0.5 border ${
                          item.period === 'PRESENT'
                            ? 'border-emerald-500 text-emerald-700 bg-emerald-50 font-semibold'
                            : 'border-rule text-ink-muted bg-canvas-subtle/30'
                        }`}>
                          {item.period}
                        </span>
                      </div>

                      {/* Title & Institution */}
                      <div className="space-y-1">
                        <span className="font-mono text-[10px] text-cobalt uppercase tracking-widest font-semibold block">
                          {item.category}
                        </span>
                        <h3 className="font-display font-bold text-lg sm:text-xl text-ink group-hover:text-cobalt transition-colors">
                          {item.title}
                        </h3>
                        <p className="font-sans text-sm font-medium text-ink">
                          {item.institution}
                        </p>
                        <p className="font-mono text-xs text-ink-muted flex items-center gap-1.5 pt-0.5">
                          <MapPin className="w-3 h-3 text-cobalt shrink-0" />
                          <span>{item.location}</span>
                        </p>
                      </div>

                      {/* Description */}
                      <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      {item.highlights && item.highlights.length > 0 && (
                        <ul className="space-y-2 border-t border-rule/60 pt-3">
                          {item.highlights.map((h, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2 font-sans text-xs text-ink">
                              <span className="text-cobalt font-bold mt-0.5">›</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
