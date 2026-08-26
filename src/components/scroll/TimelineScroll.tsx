import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TIMELINE } from '../../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export const TimelineScroll: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!section || !pin || !track) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelector('.timeline-header'),
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 75%', toggleActions: 'play none none reverse' },
        }
      );

      const items = track.querySelectorAll<HTMLElement>('.timeline-item');
      const slideDistance = () => track.scrollWidth - pin.offsetWidth;

      const st = ScrollTrigger.create({
        trigger: pin,
        start: 'top top',
        end: () => `+=${slideDistance() + window.innerHeight * 0.3}`,
        pin: true,
        anticipatePin: 1,
        scrub: 1.8,
        invalidateOnRefresh: true,
        animation: gsap.to(track, { x: () => -slideDistance(), ease: 'none' }),
        onUpdate: (self) => {
          const activeIdx = Math.min(
            Math.round(self.progress * (TIMELINE.length - 1)),
            TIMELINE.length - 1
          );
          items.forEach((item, i) => {
            gsap.to(item, {
              scale: i === activeIdx ? 1.0 : 0.9,
              opacity: i === activeIdx ? 1 : 0.45,
              duration: 0.4,
              ease: 'power2.out',
            });
          });
        },
      });

      return () => st.kill();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="timeline" ref={sectionRef} className="border-b border-rule bg-canvas relative">
      {/* Header — scrolls away before pin */}
      <div className="timeline-header max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="flex items-center justify-between border-b border-rule pb-4">
          <span className="font-mono text-xs text-cobalt font-semibold tracking-widest uppercase">06 // CHRONOLOGY</span>
          <span className="font-mono text-xs text-ink-muted tracking-widest uppercase">EDUCATION & MILESTONES</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mt-10">
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-ink tracking-tight uppercase leading-none">
            Academic &<br />Technical Path.
          </h2>
          <p className="font-sans text-sm text-ink-muted max-w-md">
            Scroll to navigate the chronological timeline of academics, certifications, and engineering milestones.
          </p>
        </div>
      </div>

      {/* Pinned horizontal track */}
      <div ref={pinRef} className="w-full overflow-hidden" style={{ height: '100vh' }}>
        <div className="h-full flex items-center">
          {/* Vertical label */}
          <div className="flex-shrink-0 w-20 lg:w-32 h-full flex items-center justify-end pr-4 lg:pr-6 border-r border-rule">
            <span
              className="font-mono text-[10px] uppercase tracking-widest text-ink-muted"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              SCROLL →
            </span>
          </div>

          {/* Track */}
          <div
            ref={trackRef}
            className="flex-shrink-0 flex items-stretch pl-8"
            style={{ width: `${TIMELINE.length * 420 + 200}px` }}
          >
            {TIMELINE.map((item, idx) => (
              <div
                key={idx}
                className="timeline-item flex-shrink-0 flex flex-col justify-center pr-10 lg:pr-16"
                style={{ width: '380px', transformOrigin: 'left center' }}
              >
                {/* Year + category */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl lg:text-5xl font-display font-extrabold text-ink tracking-tighter">{item.year}</span>
                  <span className="font-mono text-[10px] uppercase border border-rule text-cobalt px-2 py-0.5 tracking-widest">{item.category}</span>
                </div>

                <div className="w-full h-[1px] bg-rule mb-6" />

                <h3 className="font-display font-bold text-xl text-ink mb-1">{item.title}</h3>
                <p className="font-sans text-xs text-ink font-medium mb-0.5">{item.institution}</p>
                <p className="font-mono text-[10px] text-ink-muted mb-4">{item.period} · {item.location}</p>
                <p className="font-sans text-xs text-ink-muted leading-relaxed mb-4 max-w-sm">{item.description}</p>

                <ul className="space-y-1.5">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 font-sans text-xs text-ink">
                      <span className="text-cobalt font-bold mt-0.5">›</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 font-mono text-[10px] text-ink-muted">
                  {String(idx + 1).padStart(2, '0')} / {String(TIMELINE.length).padStart(2, '0')}
                </div>
              </div>
            ))}
            <div className="flex-shrink-0 w-32" />
          </div>
        </div>
      </div>
    </section>
  );
};
