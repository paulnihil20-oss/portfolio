import React, { useState, useEffect } from 'react';
import { TIMELINE } from '../data/portfolioData';
import {
  GraduationCap,
  Code2,
  Award,
  BookOpen,
  MapPin,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  SlidersHorizontal,
  Compass,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { sound } from '../utils/audio';

export const TimelineSection: React.FC = () => {
  const [activeStationIndex, setActiveStationIndex] = useState(0);
  const [viewStyle, setViewStyle] = useState<'station' | 'stream'>('station');
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const activeItem = TIMELINE[activeStationIndex];

  // Auto-play journey through eras
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveStationIndex((prev) => (prev < TIMELINE.length - 1 ? prev + 1 : 0));
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handleSelectStation = (index: number) => {
    sound.playClick();
    setActiveStationIndex(index);
    if (isAutoPlaying) setIsAutoPlaying(false);
  };

  const handlePrev = () => {
    sound.playClick();
    setActiveStationIndex((prev) => (prev > 0 ? prev - 1 : TIMELINE.length - 1));
  };

  const handleNext = () => {
    sound.playClick();
    setActiveStationIndex((prev) => (prev < TIMELINE.length - 1 ? prev + 1 : 0));
  };

  const toggleAutoPlay = () => {
    sound.playClick();
    setIsAutoPlaying(!isAutoPlaying);
  };

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

  const getCoordinates = (location: string) => {
    if (location.toLowerCase().includes('chennai')) {
      return '13.0827° N, 80.2707° E';
    }
    if (location.toLowerCase().includes('madurai')) {
      return '9.9252° N, 78.1198° E';
    }
    return '12.9716° N, 77.5946° E';
  };

  const getSkillsForEra = (_category: string, title: string) => {
    if (title.includes('Computer Science')) {
      return ['Data Structures & Algorithms', 'Database Systems (DBMS)', 'Operating Systems', 'OOP & System Design', 'Full-Stack Architecture'];
    }
    if (title.includes('Edge AI')) {
      return ['OpenCV 4.x', 'YOLOv8 Inference', 'Python 3.11', 'Java Spring Boot', 'Campus Automation Workflows'];
    }
    if (title.includes('Certifications')) {
      return ['Oracle SQL & PL/SQL', 'Database Packages & Triggers', 'Java 21 Multithreading', 'ACID Transactions', 'Relational Schema Design'];
    }
    if (title.includes('12th')) {
      return ['Computer Science Foundations', 'C / C++ Logic', 'Differential Calculus', 'Applied Physics', 'Algorithmic Problem Solving'];
    }
    return ['Computational Logic', 'Science & Mathematics', 'Analytical Reasoning'];
  };

  return (
    <section
      id="timeline"
      className="py-24 lg:py-36 border-b border-rule bg-canvas relative overflow-hidden"
    >
      {/* Background Watermark Section Number */}
      <span
        aria-hidden="true"
        className="absolute -right-6 top-1/2 -translate-y-1/2 text-[18rem] lg:text-[26rem] font-display font-black text-ink/[0.02] select-none pointer-events-none tracking-tighter"
      >
        06
      </span>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-rule pb-4">
          <span className="font-mono text-xs text-cobalt font-semibold tracking-widest uppercase">
            06 // CHRONOLOGY & RADAR
          </span>
          <span className="font-mono text-xs text-ink-muted tracking-widest uppercase">
            ACADEMIC & ENGINEERING JOURNEY
          </span>
        </div>

        {/* Headline & View Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-ink tracking-tight uppercase leading-[1.08]">
              Academic &<br />Engineering Path.
            </h2>
            <p className="font-sans text-sm text-ink-muted leading-relaxed">
              Interactive timeline mapping undergraduate studies at <strong className="text-ink font-semibold">LICET Chennai</strong>, applied edge AI research, verified Oracle database credentials, and foundational computer science education.
            </p>
          </div>

          {/* Controls Bar */}
          <div className="flex flex-wrap items-center gap-3">
            {/* View Mode Toggle */}
            <div className="inline-flex p-1 bg-canvas border border-rule shadow-sm">
              <button
                onClick={() => {
                  sound.playClick();
                  setViewStyle('station');
                }}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                  viewStyle === 'station'
                    ? 'bg-ink text-canvas font-bold'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                <Compass className="w-3.5 h-3.5 text-cobalt" />
                <span>Station Radar</span>
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  setViewStyle('stream');
                }}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                  viewStyle === 'stream'
                    ? 'bg-ink text-canvas font-bold'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Chrono Tree</span>
              </button>
            </div>

            {/* Auto Play Journey Button (Available in Station View) */}
            {viewStyle === 'station' && (
              <button
                onClick={toggleAutoPlay}
                onMouseEnter={() => sound.playHover()}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider border transition-all flex items-center gap-1.5 ${
                  isAutoPlaying
                    ? 'bg-cobalt text-white border-cobalt font-bold animate-pulse'
                    : 'border-rule bg-canvas text-ink hover:border-ink'
                }`}
                title="Automatically tour through chronological milestones"
              >
                {isAutoPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>Touring...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-cobalt" />
                    <span>Auto Tour</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* ─── VIEW 1: INTERACTIVE STATION RADAR (DEFAULT) ────────────────── */}
        {viewStyle === 'station' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Horizontal Chrono Stepper / Timeline Bar */}
            <div className="relative border border-rule bg-canvas p-4 sm:p-6 shadow-sm overflow-x-auto">
              <div className="min-w-[620px] relative">
                {/* Horizontal Spine */}
                <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 h-[2px] bg-rule z-0" />

                {/* Stepper Buttons */}
                <div className="relative z-10 flex items-center justify-between">
                  {TIMELINE.map((item, idx) => {
                    const isCurrent = idx === activeStationIndex;
                    const isPassed = idx < activeStationIndex;
                    const Icon = getCategoryIcon(item.category);

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectStation(idx)}
                        onMouseEnter={() => sound.playHover()}
                        className={`flex flex-col items-center gap-2 group transition-transform ${
                          isCurrent ? 'scale-105' : 'hover:scale-102'
                        }`}
                      >
                        {/* Node Bubble */}
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                            isCurrent
                              ? 'bg-cobalt text-white border-cobalt shadow-lg shadow-cobalt/30 scale-110'
                              : isPassed
                              ? 'bg-canvas text-cobalt border-cobalt/60 hover:border-cobalt'
                              : 'bg-canvas text-ink-muted border-rule hover:border-ink'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>

                        {/* Station Year Label */}
                        <div className="text-center">
                          <span
                            className={`font-mono text-xs block transition-colors ${
                              isCurrent ? 'font-bold text-cobalt' : 'text-ink-muted group-hover:text-ink'
                            }`}
                          >
                            {item.year.split('–')[0].trim()}
                          </span>
                          <span className="font-mono text-[9px] uppercase tracking-wider text-ink-muted block max-w-[90px] truncate">
                            {item.period === 'PRESENT' ? 'LICET CSE' : item.category}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Active Milestone Hologram Cockpit Card */}
            <div className="border border-rule bg-canvas p-6 sm:p-10 space-y-8 relative overflow-hidden transition-all duration-300">
              {/* Top Accent Indicator */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-rule pb-4">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-cobalt animate-ping" />
                  <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider">
                    STATION 0{activeStationIndex + 1} OF 0{TIMELINE.length} // {activeItem.category}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`font-mono text-xs uppercase px-3 py-1 border font-bold ${
                    activeItem.period === 'PRESENT'
                      ? 'border-emerald-500 text-emerald-700 bg-emerald-50'
                      : 'border-rule text-ink-muted bg-canvas-subtle/40'
                  }`}>
                    {activeItem.period === 'PRESENT' ? '● ACTIVE ENROLLMENT' : activeItem.period}
                  </span>
                </div>
              </div>

              {/* Station Core Information Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Title, Institution & Description (7 Cols) */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 font-mono text-xs text-cobalt font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{activeItem.year}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-ink tracking-tight uppercase leading-tight">
                      {activeItem.title}
                    </h3>

                    <p className="text-base font-sans font-semibold text-ink">
                      {activeItem.institution}
                    </p>

                    <div className="flex items-center gap-2 font-mono text-xs text-ink-muted pt-1">
                      <MapPin className="w-3.5 h-3.5 text-cobalt shrink-0" />
                      <span>{activeItem.location}</span>
                      <span className="text-ink-muted/50">·</span>
                      <span className="text-[11px] text-ink-muted">
                        [{getCoordinates(activeItem.location)}]
                      </span>
                    </div>
                  </div>

                  <p className="font-sans text-sm text-ink-muted leading-relaxed">
                    {activeItem.description}
                  </p>

                  {/* Highlights List */}
                  {activeItem.highlights && activeItem.highlights.length > 0 && (
                    <div className="space-y-2 pt-2 border-t border-rule/60">
                      <span className="font-mono text-[10px] text-ink-muted uppercase tracking-widest block font-semibold">
                        KEY ACCOMPLISHMENTS & CORE FOCUS:
                      </span>
                      <ul className="space-y-2">
                        {activeItem.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5 font-sans text-xs sm:text-sm text-ink">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Right Column: Era Competencies & Actions Matrix (5 Cols) */}
                <div className="lg:col-span-5 space-y-6 bg-canvas-subtle/20 border border-rule p-5 sm:p-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-rule pb-2">
                      <span className="font-mono text-[11px] font-bold text-ink uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-cobalt" />
                        <span>ERA COMPETENCY STACK</span>
                      </span>
                      <span className="font-mono text-[10px] text-emerald-600 font-bold">VERIFIED</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {getSkillsForEra(activeItem.category, activeItem.title).map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 text-xs font-mono bg-canvas border border-rule text-ink hover:border-cobalt transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quick Action Matrix for this Milestone */}
                  <div className="pt-2 space-y-2 border-t border-rule">
                    <span className="font-mono text-[10px] text-ink-muted uppercase tracking-widest block">
                      RELEVANT ARTIFACTS:
                    </span>

                    {activeItem.category === 'EDUCATION' && (
                      <a
                        href="#about"
                        onClick={() => sound.playClick()}
                        className="w-full py-2.5 px-3 bg-canvas border border-rule hover:border-ink text-ink font-mono text-xs uppercase tracking-wider flex items-center justify-between group transition-colors"
                      >
                        <span>View Academic Profile</span>
                        <ArrowRight className="w-3.5 h-3.5 text-cobalt group-hover:translate-x-1 transition-transform" />
                      </a>
                    )}

                    {activeItem.category === 'PROJECT' && (
                      <a
                        href="#work"
                        onClick={() => sound.playClick()}
                        className="w-full py-2.5 px-3 bg-ink text-canvas hover:bg-cobalt font-mono text-xs uppercase tracking-wider flex items-center justify-between group transition-colors font-semibold"
                      >
                        <span>Explore 4 Shipped Projects</span>
                        <ArrowRight className="w-3.5 h-3.5 text-canvas group-hover:translate-x-1 transition-transform" />
                      </a>
                    )}

                    {activeItem.category === 'CERTIFICATION' && (
                      <a
                        href="#certificates"
                        onClick={() => sound.playClick()}
                        className="w-full py-2.5 px-3 bg-cobalt text-white font-mono text-xs uppercase tracking-wider flex items-center justify-between group transition-colors font-bold"
                      >
                        <span>View Oracle SQL Credentials</span>
                        <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Station Bottom Navigator Bar */}
              <div className="flex items-center justify-between border-t border-rule pt-4">
                <button
                  onClick={handlePrev}
                  onMouseEnter={() => sound.playHover()}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-rule hover:border-ink bg-canvas text-ink font-mono text-xs uppercase tracking-wider transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous Era</span>
                </button>

                <div className="flex items-center gap-1.5">
                  {TIMELINE.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => handleSelectStation(dotIdx)}
                      className={`h-2 rounded-full transition-all ${
                        dotIdx === activeStationIndex
                          ? 'w-6 bg-cobalt'
                          : 'w-2 bg-rule hover:bg-ink'
                      }`}
                      aria-label={`Jump to Station ${dotIdx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  onMouseEnter={() => sound.playHover()}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-rule hover:border-ink bg-canvas text-ink font-mono text-xs uppercase tracking-wider transition-colors"
                >
                  <span>Next Era</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ─── VIEW 2: CONTINUOUS CHRONO STREAM ──────────────────────────── */}
        {viewStyle === 'stream' && (
          <div className="relative pt-4 animate-fadeIn">
            {/* Central spine */}
            <div className="absolute top-6 bottom-6 left-4 sm:left-6 md:left-1/2 md:-translate-x-1/2 w-[1px] bg-rule" />

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
                    <div className="absolute left-4 sm:left-6 md:left-1/2 md:-translate-x-1/2 top-6 -translate-x-1/2 w-10 h-10 rounded-full bg-canvas border-2 border-cobalt flex items-center justify-center text-cobalt shadow-md z-10">
                      <Icon className="w-4 h-4" />
                    </div>

                    {/* Content Box */}
                    <div
                      className={`pl-12 sm:pl-16 md:pl-0 w-full md:w-[calc(50%-2.5rem)] ${
                        isEven ? 'md:pr-8 md:text-right' : 'md:pl-8'
                      }`}
                    >
                      <div className="border border-rule bg-canvas p-6 sm:p-8 space-y-4 hover:border-ink transition-colors group text-left shadow-sm">
                        {/* Top Meta Bar */}
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rule/60 pb-3">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5 text-cobalt shrink-0" />
                            <span className="font-display font-bold text-base sm:text-lg text-ink">
                              {item.year}
                            </span>
                          </div>
                          <span
                            className={`font-mono text-[10px] uppercase px-2.5 py-0.5 border ${
                              item.period === 'PRESENT'
                                ? 'border-emerald-500 text-emerald-700 bg-emerald-50 font-bold'
                                : 'border-rule text-ink-muted bg-canvas-subtle/30'
                            }`}
                          >
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
        )}

        {/* Global Journey Telemetry Banner */}
        <div className="border-t border-rule pt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-3 bg-canvas border border-rule">
            <span className="font-mono text-[10px] uppercase text-ink-muted block">EVOLUTION HORIZON</span>
            <span className="font-display font-bold text-base text-ink">4+ Years Code Genesis</span>
          </div>
          <div className="p-3 bg-canvas border border-rule">
            <span className="font-mono text-[10px] uppercase text-ink-muted block">MILESTONE GATES</span>
            <span className="font-display font-bold text-base text-cobalt">5 Verified Epochs</span>
          </div>
          <div className="p-3 bg-canvas border border-rule">
            <span className="font-mono text-[10px] uppercase text-ink-muted block">ACADEMIC STANDING</span>
            <span className="font-display font-bold text-base text-emerald-700">First Class Distinction</span>
          </div>
          <div className="p-3 bg-canvas border border-rule">
            <span className="font-mono text-[10px] uppercase text-ink-muted block">SYSTEMS PRODUCED</span>
            <span className="font-display font-bold text-base text-ink">4 Shipped Platforms</span>
          </div>
        </div>
      </div>
    </section>
  );
};
