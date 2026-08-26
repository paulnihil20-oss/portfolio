import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Introduction: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── 1. Horizontal Line Wipe (clip-path scaleX expand) ──────────
      gsap.fromTo(lineRef.current,
        { scaleX: 0, transformOrigin: 'left' },
        {
          scaleX: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // ── 2. Word-split quote reveal ──────────────────────────────────
      if (quoteRef.current) {
        const text = quoteRef.current.textContent || '';
        const words = text.split(' ');
        quoteRef.current.innerHTML = words
          .map((w) => `<span class="word-split-line"><span class="word-split-word">${w}&nbsp;</span></span>`)
          .join('');

        const wordEls = quoteRef.current.querySelectorAll('.word-split-word');

        gsap.fromTo(wordEls,
          { y: '110%', opacity: 0 },
          {
            y: '0%',
            opacity: 1,
            duration: 0.7,
            stagger: 0.04,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: quoteRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // ── 3. Philosophy cards stagger fade-up ─────────────────────────
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.philosophy-card');
        gsap.fromTo(cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const philosophyItems = [
    {
      code: '01',
      label: 'Systems & Algorithms',
      title: 'Computational Rigor',
      desc: 'Java OOP architectures, C systems programming, and algorithmic data structures tested against performance-critical constraints.',
    },
    {
      code: '02',
      label: 'Edge AI & Vision',
      title: 'Intelligent Automation',
      desc: 'Applied computer vision engineering with OpenCV and Python for automated object detection, lane tracking, and real-time traffic control.',
    },
    {
      code: '03',
      label: 'Relational Architecture',
      title: 'Database Engineering',
      desc: 'Oracle Academy certified in SQL and PL/SQL. Designing structured relational schemas, complex joins, stored procedures, and transactions.',
    },
    {
      code: '04',
      label: 'Modern Web & UI/UX',
      title: 'Human-Centered Interfaces',
      desc: 'Crafting responsive, accessible, high-performance web applications using React, semantic HTML5, and modern CSS architectures.',
    },
  ];

  return (
    <section
      id="statement"
      ref={sectionRef}
      className="py-24 lg:py-36 border-b border-rule bg-canvas relative overflow-hidden"
    >
      {/* Background Watermark */}
      <span aria-hidden="true" className="absolute -right-6 top-1/2 -translate-y-1/2 text-[20rem] lg:text-[28rem] font-display font-black text-ink/[0.025] select-none pointer-events-none tracking-tighter leading-none">
        02
      </span>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16 relative z-10">

        {/* Section Header + Line Wipe */}
        <div className="flex items-center justify-between pb-4 relative">
          {/* Expanding underline rule */}
          <div
            ref={lineRef}
            className="absolute bottom-0 left-0 right-0 h-[1px] bg-rule origin-left"
            style={{ transform: 'scaleX(0)' }}
          />
          <span className="font-mono text-xs text-cobalt font-semibold tracking-widest uppercase">
            02 // INTRODUCTION
          </span>
          <span className="font-mono text-xs text-ink-muted tracking-widest uppercase">
            PHILOSOPHY & FOUNDATIONS
          </span>
        </div>

        {/* Large Quote — word-split animated */}
        <div className="max-w-5xl">
          <h2
            ref={quoteRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-ink tracking-tight leading-[1.1]"
          >
            "I design and engineer digital systems where rigorous computer science fundamentals meet clean, uncompromising editorial architecture."
          </h2>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-8 border-t border-rule">
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <span className="text-6xl sm:text-7xl font-display font-extrabold text-ink/20 tracking-tighter block">02.1</span>
              <h3 className="font-mono text-xs uppercase tracking-widest text-ink font-semibold">Engineering Approach</h3>
            </div>
            <p className="font-sans text-sm text-ink-muted leading-relaxed">
              Every system is built from first principles: clean relational data structures, predictable backend states, efficient computational complexity, and frictionless human interaction.
            </p>
          </div>

          {/* Philosophy Cards */}
          <div ref={cardsRef} className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {philosophyItems.map((item) => (
              <div
                key={item.code}
                className="philosophy-card space-y-3 p-6 border border-rule bg-canvas hover:border-ink transition-colors group"
              >
                <span className="font-mono text-xs text-cobalt font-semibold uppercase tracking-wider">
                  {item.code} // {item.label}
                </span>
                <h4 className="font-display font-semibold text-lg text-ink group-hover:text-cobalt transition-colors">
                  {item.title}
                </h4>
                <p className="font-sans text-xs text-ink-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
