import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types';
import { ArrowUpRight, Github } from 'lucide-react';
import { ProjectVisual } from '../ProjectVisual';

gsap.registerPlugin(ScrollTrigger);

interface HorizontalProjectsProps {
  onOpenProject: (project: Project) => void;
}

export const HorizontalProjects: React.FC<HorizontalProjectsProps> = ({ onOpenProject }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // 3D tilt on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardEl: HTMLElement) => {
    const rect = cardEl.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    gsap.to(cardEl, {
      rotateY: x * 6,
      rotateX: y * 5,
      duration: 0.4,
      ease: 'power2.out',
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = (cardEl: HTMLElement) => {
    gsap.to(cardEl, {
      rotateY: 0, rotateX: 0, duration: 0.6, ease: 'power3.out',
    });
  };

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!section || !pin || !track) return;

    const ctx = gsap.context(() => {
      // How far the track must slide:
      // total width of all cards minus 1 viewport width
      const getSlideDistance = () => {
        return track.scrollWidth - pin.offsetWidth;
      };

      // Section header animation
      gsap.fromTo(
        section.querySelector('.section-header'),
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none reverse' },
        }
      );

      // ── GSAP Pin + Horizontal Scroll ─────────────────────────────
      const st = ScrollTrigger.create({
        trigger: pin,
        start: 'top top',
        end: () => `+=${getSlideDistance() + window.innerHeight * 0.5}`,
        pin: true,
        anticipatePin: 1,
        scrub: 1.5,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // Update active dot indicator
          const progress = self.progress;
          const idx = Math.min(
            Math.floor(progress * PROJECTS.length),
            PROJECTS.length - 1
          );
          setActiveIndex(idx);
        },
        animation: gsap.to(track, {
          x: () => -getSlideDistance(),
          ease: 'none',
        }),
      });

      return () => st.kill();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="border-b border-rule bg-canvas relative"
    >
      {/* Section header — outside pin wrapper so it scrolls away */}
      <div className="section-header max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="flex items-center justify-between border-b border-rule pb-4">
          <span className="font-mono text-xs text-cobalt font-semibold tracking-widest uppercase">
            03 // SELECTED WORK
          </span>
          <span className="font-mono text-xs text-ink-muted tracking-widest uppercase">
            CASE STUDIES ({PROJECTS.length})
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mt-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-ink tracking-tight uppercase leading-none">
            Engineered<br />Projects.
          </h2>
          <div className="space-y-3">
            <p className="font-sans text-sm text-ink-muted max-w-md">
              Scroll horizontally to explore each case study. Production-grade systems solving tangible engineering challenges.
            </p>
            {/* Dot Indicators */}
            <div className="h-scroll-dots">
              {PROJECTS.map((_, i) => (
                <div
                  key={i}
                  className={`h-scroll-dot ${i === activeIndex ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Pinned horizontal viewport ─────────────────────────── */}
      <div ref={pinRef} className="h-projects-pin-wrapper w-full" style={{ height: '100vh' }}>

        {/* Inner scrollable track */}
        <div
          ref={trackRef}
          className="h-projects-track h-full"
          style={{ width: `${PROJECTS.length * 85}vw` }}
        >
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="project-tilt-container flex-shrink-0 flex items-center px-6 lg:px-12"
              style={{ width: '80vw', maxWidth: '900px' }}
            >
              <div
                className="project-tilt-card w-full border border-rule bg-canvas overflow-hidden group"
                onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              >
                {/* Project visual — no image, tech-themed blueprint */}
                <div className="relative w-full aspect-video overflow-hidden bg-canvas-dark">
                  <ProjectVisual projectId={project.id} className="absolute inset-0" />
                  {/* Overlay label */}
                  <div className="absolute top-4 left-4 flex items-center gap-3 z-10">
                    <span className="font-mono text-[10px] uppercase tracking-widest bg-canvas text-ink px-3 py-1 border border-rule">
                      {project.number} // {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 font-mono text-[10px] uppercase tracking-widest text-canvas/80 border border-canvas/30 px-2 py-0.5 bg-ink/60 backdrop-blur-sm z-10">
                    {project.year}
                  </div>
                </div>

                {/* Project info */}
                <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-7 space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-display font-bold text-ink tracking-tight group-hover:text-cobalt transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-sans text-sm text-ink-muted leading-relaxed">
                      {project.tagline}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((t) => (
                        <span key={t} className="px-2 py-1 font-mono text-[10px] border border-rule text-ink-muted uppercase">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5 space-y-3 border-t lg:border-t-0 lg:border-l border-rule pt-4 lg:pt-0 lg:pl-8">
                    <span className="block font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                      ROLE: {project.role}
                    </span>
                    <ul className="space-y-2">
                      {project.architecture.slice(0, 3).map((a, i) => (
                        <li key={i} className="flex items-start gap-2 font-sans text-xs text-ink-muted">
                          <span className="text-cobalt font-bold mt-0.5">›</span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-3 pt-4">
                      <button
                        onClick={() => onOpenProject(project)}
                        className="flex items-center gap-2 px-4 py-2.5 bg-ink text-canvas font-mono text-[10px] uppercase tracking-widest hover:bg-cobalt transition-colors"
                      >
                        <span>Case Study</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2.5 border border-rule hover:border-ink text-ink font-mono text-[10px] uppercase tracking-widest transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* End spacer */}
          <div className="flex-shrink-0 w-[5vw]" />
        </div>
      </div>
    </section>
  );
};
