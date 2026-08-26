import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, GraduationCap, Award, FolderGit2, Code2, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header
      gsap.fromTo(
        sectionRef.current!.querySelector('.about-header'),
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
        }
      );

      // Narrative
      gsap.fromTo(
        sectionRef.current!.querySelectorAll('.about-text-block'),
        { y: 35, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-left-col', start: 'top 80%', toggleActions: 'play none none reverse' },
        }
      );

      // Right cards
      gsap.fromTo(
        sectionRef.current!.querySelectorAll('.profile-card'),
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.75, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-right-col', start: 'top 80%', toggleActions: 'play none none reverse' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 lg:py-36 border-b border-rule bg-canvas relative overflow-hidden"
    >
      {/* Background Watermark */}
      <span aria-hidden="true" className="absolute -right-6 top-1/2 -translate-y-1/2 text-[18rem] lg:text-[26rem] font-display font-black text-ink/[0.02] select-none pointer-events-none tracking-tighter leading-none">
        04
      </span>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16 relative z-10">
        {/* Header */}
        <div className="about-header flex items-center justify-between border-b border-rule pb-4">
          <span className="font-mono text-xs text-cobalt font-semibold tracking-widest uppercase">
            04 // ABOUT & BACKGROUND
          </span>
          <span className="font-mono text-xs text-ink-muted tracking-widest uppercase">
            EDUCATION & PROFILE
          </span>
        </div>

        {/* Headline */}
        <div className="about-text-block max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-ink tracking-tight uppercase leading-[1.08]">
            Engineering Resilient Systems<br />From First Principles.
          </h2>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-4">
          {/* Left Column - Narrative & Core Principles */}
          <div className="about-left-col lg:col-span-7 space-y-8">
            <div className="about-text-block space-y-4 font-sans text-base text-ink-muted leading-relaxed">
              <p className="text-ink font-medium text-lg leading-relaxed">
                I am a Computer Science Engineering student at{' '}
                <span className="text-ink font-semibold border-b border-ink">Loyola-ICAM College of Engineering and Technology (LICET)</span>,
                Chennai, with roots in Madurai, Tamil Nadu.
              </p>
              <p>
                My engineering focus centers on backend data structures, robust Java systems, relational database architecture, and intelligent edge computer vision applications. I enjoy building software that solves tangible operational problems—from intelligent civic traffic prioritization to automated campus workflows.
              </p>
              <p>
                Whether designing a normalized Oracle SQL schema or engineering an edge OpenCV pipeline, I prioritize clean architectural separation, computational efficiency, and maintainability.
              </p>
            </div>

            {/* Core Competency Highlights */}
            <div className="about-text-block border border-rule divide-y divide-rule font-mono text-xs bg-canvas">
              {[
                { title: 'FULL-STACK DEVELOPMENT', desc: 'React, TypeScript, Java, and modern web architectures' },
                { title: 'COMPUTER VISION & AI', desc: 'OpenCV, Python edge detection, and real-time video processing' },
                { title: 'DATABASE ARCHITECTURE', desc: 'Oracle Academy certified in SQL & PL/SQL, MySQL schema design' },
              ].map(({ title, desc }) => (
                <div key={title} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-ink font-semibold uppercase flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cobalt shrink-0" />
                    {title}
                  </span>
                  <span className="text-ink-muted sm:text-right">{desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Professional Profile Cards */}
          <div className="about-right-col lg:col-span-5 space-y-6">
            {/* Institution Card */}
            <div className="profile-card p-6 border border-rule bg-canvas space-y-4 hover:border-ink transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-xs text-cobalt font-semibold uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4" />
                  <span>Education Base</span>
                </div>
                <span className="font-mono text-[10px] text-ink-muted uppercase border border-rule px-2 py-0.5 font-semibold">
                  2024 – 2028
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="font-display font-bold text-base text-ink">Loyola-ICAM College of Engineering & Technology (LICET)</h3>
                <p className="font-sans text-xs text-ink-muted">B.E. in Computer Science Engineering · Chennai, India</p>
              </div>
            </div>

            {/* Location & Status Card */}
            <div className="profile-card p-6 border border-rule bg-canvas space-y-4 hover:border-ink transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-xs text-ink font-semibold uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-cobalt" />
                  <span>Location & Availability</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-emerald-600 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>OPEN FOR ROLES</span>
                </div>
              </div>
              <div className="space-y-2.5 border-t border-rule pt-4 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-ink-muted uppercase">LOCATION:</span>
                  <span className="text-ink font-medium">Madurai & Chennai, India</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-ink-muted uppercase">ROLE TARGETS:</span>
                  <span className="text-ink font-medium">Software Engineer / Full-Stack</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-ink-muted uppercase">EMAIL:</span>
                  <span className="text-cobalt font-medium">{PERSONAL_INFO.email}</span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="profile-card grid grid-cols-3 gap-3">
              {[
                { icon: <FolderGit2 className="w-4 h-4 mx-auto text-cobalt" />, val: '03+', label: 'Projects Built' },
                { icon: <Award className="w-4 h-4 mx-auto text-cobalt" />, val: '04', label: 'Certifications' },
                { icon: <Code2 className="w-4 h-4 mx-auto text-cobalt" />, val: '12+', label: 'Tech Stacks' },
              ].map(({ icon, val, label }) => (
                <div key={label} className="p-4 border border-rule bg-canvas text-center space-y-1 hover:border-ink transition-colors">
                  {icon}
                  <span className="block text-2xl font-display font-extrabold text-ink">{val}</span>
                  <span className="block font-mono text-[9px] uppercase tracking-wider text-ink-muted">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
