import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDownRight, Terminal } from 'lucide-react';
import { HeroSculpture } from './canvas/HeroSculpture';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  const heroRef = useRef<HTMLElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ─── Hero entry animation (plays once on page load) ────────────
      const tl = gsap.timeline({ delay: 0.15 });

      tl.fromTo(indicatorRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      )
        .fromTo(titleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.0, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.6'
        )
        .fromTo(actionsRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(stripRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
          '-=0.4'
        );

      // ─── Parallax exit: typography moves up as user scrolls ────────
      gsap.fromTo(
        titleRef.current,
        { y: 0, opacity: 1 },
        {
          y: -80,
          opacity: 0.1,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        subtitleRef.current,
        { y: 0, opacity: 1 },
        {
          y: -40,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: '15% top',
            end: 'bottom top',
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        }
      );

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen pt-24 lg:pt-32 pb-12 flex flex-col justify-between border-b border-rule relative overflow-hidden"
    >
      {/* 3D WebGL Sculpture */}
      <div className="absolute inset-0 pointer-events-auto z-0 flex items-center justify-end pr-0 lg:pr-12 opacity-90">
        <div className="w-full lg:w-3/5 h-full">
          <HeroSculpture />
        </div>
      </div>

      {/* Foreground Editorial Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10 my-auto pointer-events-none">
        <div className="space-y-6 max-w-3xl">
          {/* Section Indicator */}
          <div ref={indicatorRef} className="inline-flex items-center gap-3 pointer-events-auto">
            <span className="font-mono text-xs text-cobalt font-semibold tracking-widest uppercase">
              01 // INDEX
            </span>
            <span className="w-12 h-[1px] bg-rule" />
            <span className="font-mono text-xs text-ink-muted tracking-widest uppercase">
              LICET · CHENNAI
            </span>
          </div>

          {/* Huge Poster Typography */}
          <h1
            ref={titleRef}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-extrabold text-ink tracking-tighter leading-[0.88] uppercase select-none pointer-events-auto"
          >
            Paul
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink via-ink to-ink/40">
              Nihil.
            </span>
          </h1>

          {/* Editorial Subtitle */}
          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl lg:text-2xl font-sans text-ink font-normal leading-snug tracking-tight max-w-2xl pt-2 pointer-events-auto"
          >
            CSE Student at LICET · Java, SQL, Python, React · 4 shipped projects · Looking for internships in 2026.
          </p>

          {/* Actions */}
          <div ref={actionsRef} className="pt-4 flex flex-wrap items-center gap-4 pointer-events-auto">
            <a
              href="#work"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-ink text-canvas font-mono text-xs uppercase tracking-widest hover:bg-cobalt transition-colors group"
            >
              <span>Selected Work</span>
              <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-rule hover:border-ink bg-transparent text-ink font-mono text-xs uppercase tracking-widest transition-colors"
            >
              Get In Touch
            </a>

            <button
              onClick={onOpenTerminal}
              className="inline-flex items-center gap-2 px-4 py-3.5 border border-rule hover:border-ink text-ink-muted hover:text-ink font-mono text-xs uppercase tracking-widest transition-colors"
            >
              <Terminal className="w-4 h-4 text-cobalt" />
              <span className="hidden sm:inline">Search ⌘K</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Info Strip */}
      <div ref={stripRef} className="w-full border-t border-rule mt-12 bg-canvas/80 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-rule">
          {[
            { n: '01', label: 'Discipline', value: 'Computer Science Engineering' },
            { n: '02', label: 'Location', value: 'Madurai & Chennai, India' },
            { n: '03', label: 'Academic Base', value: 'LICET (2024 – 2028)' },
            { n: '04', label: 'Status', value: 'Seeking Internship — 2026', pulse: true },
          ].map(({ n, label, value, pulse }) => (
            <div key={n} className="py-4 md:py-5 px-0 md:px-4 space-y-1">
              <span className="block font-mono text-[10px] uppercase text-ink-muted tracking-widest">
                {n} // {label}
              </span>
              {pulse ? (
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-sans text-xs sm:text-sm font-semibold text-ink">{value}</span>
                </div>
              ) : (
                <span className="block font-sans text-xs sm:text-sm font-semibold text-ink">{value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
