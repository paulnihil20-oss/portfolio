import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowDownRight,
  Volume2,
  VolumeX,
  ShieldCheck,
  Cpu,
  Database,
  Command,
  CheckCircle2,
  Clock,
  Compass,
  Zap,
  TrendingUp,
  Download,
  Fish
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/audio';
import {
  AquaLensWorkbench,
  TrafficAiWorkbench,
  OracleSqlWorkbench,
  SpecAmpWorkbench,
  FintechWorkbench
} from './HeroWorkbench';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onOpenTerminal: () => void;
}

const ROLES = [
  'Smart India Hackathon 2026: Offline Edge AI Marine Platform (AquaLens)',
  'Architecting Resilient Enterprise Backends (Java 21 & Project Loom)',
  'Certified Oracle SQL & PL/SQL Relational Database Engineering',
  'Edge Computer Vision & Emergency Priority Corridors (YOLOv8)',
  'Designing High-Precision Editorial Reactive Web Systems',
];

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  const heroRef = useRef<HTMLElement>(null);
  const [isAudioMuted, setIsAudioMuted] = useState(sound.getMuted());
  const [liveTime, setLiveTime] = useState<string>('');
  
  // Rotating Kinetic Role
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Active Workbench Tab
  const [activeTab, setActiveTab] = useState<'aqualens' | 'traffic' | 'oracle' | 'specamp' | 'fintech'>('aqualens');

  // Quick Command Prompt Input
  const [cmdInput, setCmdInput] = useState('');
  const [cmdFeedback, setCmdFeedback] = useState<string | null>(null);

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setLiveTime(`${istTime} IST`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Typewriter Effect for Roles
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let charIndex = 0;
    setIsTyping(true);

    const typeTimer = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setTypedRole(currentRole.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeTimer);
        setIsTyping(false);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }, 3000);
      }
    }, 35);

    return () => clearInterval(typeTimer);
  }, [roleIndex]);

  const toggleSound = () => {
    const muted = sound.toggleMute();
    setIsAudioMuted(muted);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-reveal',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: 'power3.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Quick Command Execution
  const handleRunCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = cmdInput.trim().toLowerCase();
    sound.playClick();

    if (cmd === 'aqualens' || cmd === 'fish' || cmd === 'sih' || cmd === 'fisheries') {
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
      setCmdFeedback('Displaying AquaLens SIH Edge AI Maritime Platform...');
      setActiveTab('aqualens');
    } else if (cmd === 'projects' || cmd === 'work') {
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
      setCmdFeedback('Navigating to Selected Work & Case Studies (5 Production Systems)...');
    } else if (cmd === 'lab' || cmd === 'sandbox') {
      document.getElementById('lab')?.scrollIntoView({ behavior: 'smooth' });
      setCmdFeedback('Launching Live Algorithmic Systems Laboratory...');
    } else if (cmd === 'skills') {
      document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
      setCmdFeedback('Opening Technical Skills Matrix...');
    } else if (cmd === 'certs' || cmd === 'oracle') {
      document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' });
      setCmdFeedback('Opening Verified Oracle Credentials...');
    } else if (cmd === 'contact') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      setCmdFeedback('Opening Direct Contact Channel...');
    } else if (cmd === 'sound' || cmd === 'audio') {
      toggleSound();
      setCmdFeedback(`Sound effects ${!isAudioMuted ? 'disabled' : 'enabled'}.`);
    } else if (cmd === 'clear') {
      setCmdFeedback(null);
    } else {
      setCmdFeedback(`Executing ⌘K command for "${cmd}"...`);
      setTimeout(() => onOpenTerminal(), 300);
    }

    setCmdInput('');
    setTimeout(() => setCmdFeedback(null), 3500);
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen pt-24 lg:pt-32 pb-8 flex flex-col justify-between border-b border-rule bg-canvas relative overflow-hidden"
    >
      {/* Subtle Atmospheric Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cobalt/[0.04] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#111111_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      {/* Main Architectural Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10 my-auto py-2">
        
        {/* Top Status & Telemetry Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rule/80 pb-4 mb-8 hero-reveal">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-ink text-canvas font-mono text-[11px] uppercase tracking-wider font-semibold rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>AVAILABLE FOR ROLES 2026</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-cobalt/30 bg-cobalt/5 text-cobalt font-mono text-[11px] uppercase tracking-wider font-semibold rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ORACLE CERTIFIED ARCHITECT</span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 text-ink-muted font-mono text-[11px]">
              <Compass className="w-3.5 h-3.5 text-cobalt" />
              <span>CHENNAI · 13.08° N, 80.27° E</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-ink-muted">
              <Clock className="w-3.5 h-3.5 text-cobalt" />
              <span>{liveTime || 'CHENNAI, INDIA'}</span>
            </div>

            <button
              onClick={toggleSound}
              onMouseEnter={() => sound.playHover()}
              className="inline-flex items-center gap-1.5 px-3 py-1 border border-rule hover:border-ink bg-canvas text-ink font-mono text-[11px] uppercase tracking-wider rounded-full transition-colors"
              title={isAudioMuted ? 'Enable Sound Effects' : 'Mute Sound Effects'}
            >
              {isAudioMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-ink-muted" />
                  <span className="text-ink-muted">SFX OFF</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-cobalt" />
                  <span className="text-cobalt font-semibold">SFX ON</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Hero Header & Value Proposition */}
        <div className="max-w-4xl space-y-4 mb-8 hero-reveal">
          <div className="space-y-1">
            <span className="font-mono text-xs text-cobalt font-bold tracking-[0.25em] uppercase block">
              COMPUTER SCIENCE ENGINEER · SYSTEMS ARCHITECT
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-ink tracking-tight uppercase leading-[0.95]">
              Paul <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink via-cobalt to-ink">Nihil.</span>
            </h1>
          </div>

          {/* Dynamic Typing Role Banner */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 border border-cobalt/20 bg-cobalt/[0.03] font-mono text-xs sm:text-sm text-ink max-w-full">
            <span className="text-cobalt font-bold">&gt;</span>
            <span className="font-semibold truncate">
              {typedRole}
              <span className={`inline-block w-2 h-3.5 bg-cobalt ml-1 align-middle ${isTyping ? 'animate-pulse' : ''}`} />
            </span>
          </div>

          <p className="text-base sm:text-lg md:text-xl font-sans text-ink leading-relaxed font-normal max-w-3xl">
            Engineering resilient backend architectures, verified Oracle PL/SQL database engines, and sub-150ms edge computer vision pipelines at <strong className="font-semibold text-ink">Loyola-ICAM (LICET)</strong>.
          </p>

          {/* Quick Action Navigation Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-ink text-canvas font-mono text-xs uppercase tracking-widest hover:bg-cobalt transition-colors group shadow-sm font-semibold rounded"
            >
              <span>Explore 5 Production Systems</span>
              <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#lab"
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="inline-flex items-center gap-2 px-5 py-3.5 border border-emerald-600/40 bg-emerald-500/5 hover:bg-emerald-500 hover:text-white text-emerald-800 font-mono text-xs uppercase tracking-widest transition-colors font-semibold rounded"
            >
              <Cpu className="w-4 h-4" />
              <span>Live Systems Lab</span>
            </a>

            <button
              onClick={() => {
                sound.playClick();
                onOpenTerminal();
              }}
              onMouseEnter={() => sound.playHover()}
              className="inline-flex items-center gap-1.5 px-4 py-3.5 border border-rule hover:border-ink bg-canvas text-ink font-mono text-xs uppercase tracking-widest transition-colors rounded"
            >
              <Command className="w-3.5 h-3.5 text-cobalt" />
              <span>Quick ⌘K</span>
            </button>

            <a
              href={PERSONAL_INFO.resumePdf}
              download="Paul_Nihil_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="inline-flex items-center gap-1.5 px-4 py-3.5 border border-rule hover:border-ink bg-canvas text-ink font-mono text-xs uppercase tracking-widest transition-colors rounded"
            >
              <Download className="w-3.5 h-3.5 text-cobalt" />
              <span>Resume PDF</span>
            </a>
          </div>
        </div>

        {/* ─── CENTRAL INTERACTIVE WORKBENCH SHOWCASE ─────────────────── */}
        <div className="w-full border border-rule bg-canvas/90 shadow-sm rounded-lg overflow-hidden hero-reveal mb-8">
          
          {/* Workbench Window Topbar & Tab Navigation */}
          <div className="px-4 py-3 border-b border-rule bg-canvas-subtle/70 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 mr-2">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
              </div>
              <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider hidden sm:inline">
                INTERACTIVE ENGINEERING WORKBENCH
              </span>
            </div>

            {/* Interactive System Switcher Tabs */}
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => {
                  sound.playClick();
                  setActiveTab('aqualens');
                }}
                onMouseEnter={() => sound.playHover()}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded transition-all flex items-center gap-1.5 ${
                  activeTab === 'aqualens'
                    ? 'bg-ink text-canvas font-bold shadow-sm'
                    : 'bg-canvas border border-rule text-ink-muted hover:text-ink'
                }`}
              >
                <Fish className="w-3.5 h-3.5 text-cyan-400" />
                <span>01 · AquaLens AI</span>
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  setActiveTab('traffic');
                }}
                onMouseEnter={() => sound.playHover()}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded transition-all flex items-center gap-1.5 ${
                  activeTab === 'traffic'
                    ? 'bg-ink text-canvas font-bold shadow-sm'
                    : 'bg-canvas border border-rule text-ink-muted hover:text-ink'
                }`}
              >
                <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                <span>02 · Traffic AI</span>
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  setActiveTab('oracle');
                }}
                onMouseEnter={() => sound.playHover()}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded transition-all flex items-center gap-1.5 ${
                  activeTab === 'oracle'
                    ? 'bg-ink text-canvas font-bold shadow-sm'
                    : 'bg-canvas border border-rule text-ink-muted hover:text-ink'
                }`}
              >
                <Database className="w-3.5 h-3.5 text-cobalt" />
                <span>03 · Oracle SQL</span>
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  setActiveTab('specamp');
                }}
                onMouseEnter={() => sound.playHover()}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded transition-all flex items-center gap-1.5 ${
                  activeTab === 'specamp'
                    ? 'bg-ink text-canvas font-bold shadow-sm'
                    : 'bg-canvas border border-rule text-ink-muted hover:text-ink'
                }`}
              >
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                <span>04 · SpecAmp AI</span>
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  setActiveTab('fintech');
                }}
                onMouseEnter={() => sound.playHover()}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded transition-all flex items-center gap-1.5 ${
                  activeTab === 'fintech'
                    ? 'bg-ink text-canvas font-bold shadow-sm'
                    : 'bg-canvas border border-rule text-ink-muted hover:text-ink'
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5 text-cyan-500" />
                <span>05 · FinTech</span>
              </button>
            </div>
          </div>

          {/* Workbench Body Content */}
          <div className="p-4 sm:p-6 bg-[#0c1017] text-slate-200 min-h-[380px] flex flex-col justify-between">
            {activeTab === 'aqualens' && <AquaLensWorkbench />}
            {activeTab === 'traffic' && <TrafficAiWorkbench />}
            {activeTab === 'oracle' && <OracleSqlWorkbench />}
            {activeTab === 'specamp' && <SpecAmpWorkbench />}
            {activeTab === 'fintech' && <FintechWorkbench />}
          </div>

          {/* Workbench Bottom Telemetry Status */}
          <div className="px-4 py-2.5 border-t border-rule/80 bg-canvas-subtle/50 flex flex-wrap items-center justify-between text-[11px] font-mono text-ink-muted">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-ink">
                {activeTab === 'aqualens' && 'SYSTEM: TFLITE INT8 ON-DEVICE MARINE CLASSIFIER & ALLOMETRIC BIOMASS ENGINE'}
                {activeTab === 'traffic' && 'SYSTEM: YOLOV8 + OPENCV REAL-TIME EDGE INFERENCE (<150MS)'}
                {activeTab === 'oracle' && 'SYSTEM: ORACLE DATABASE 21C ACID PIPELINE & PL/SQL PACKAGES'}
                {activeTab === 'specamp' && 'SYSTEM: MULTI-SOURCE DISTRIBUTOR SCRAPER & SPEC NORMALIZER'}
                {activeTab === 'fintech' && 'SYSTEM: AUTOMATED SMS INGEST ENGINE & COMMODITY TELEMETRY'}
              </span>
            </div>
            <span className="text-cobalt font-semibold hidden sm:inline">INTERACTIVE SIMULATION ACTIVE</span>
          </div>

        </div>

        {/* ─── QUICK COMMAND CLI BAR ─────────────────────────────────── */}
        <div className="space-y-2 mb-8 hero-reveal">
          <form onSubmit={handleRunCommand} className="flex items-center gap-2 max-w-2xl">
            <div className="relative flex-1">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-mono text-xs text-cobalt font-bold">
                $
              </span>
              <input
                type="text"
                value={cmdInput}
                onChange={(e) => setCmdInput(e.target.value)}
                placeholder="type command: work, lab, skills, certs, contact, sound..."
                className="w-full pl-8 pr-4 py-2.5 bg-canvas border border-rule font-mono text-xs text-ink placeholder:text-ink-muted focus:border-cobalt focus:outline-none rounded"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2.5 bg-ink text-canvas font-mono text-xs uppercase tracking-wider hover:bg-cobalt transition-colors font-semibold rounded shrink-0"
            >
              Execute
            </button>
          </form>

          {/* Command Feedback */}
          {cmdFeedback && (
            <div className="p-2.5 border border-emerald-500/30 bg-emerald-500/10 text-emerald-800 font-mono text-xs flex items-center gap-2 rounded max-w-2xl">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{cmdFeedback}</span>
            </div>
          )}
        </div>

      </div>

      {/* ─── BOTTOM KEY TELEMETRY STRIP ──────────────────────────────── */}
      <div className="w-full border-t border-rule bg-canvas-subtle/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-rule">
          <div className="py-3.5 px-0 md:px-4 space-y-0.5">
            <span className="block font-mono text-[10px] uppercase text-ink-muted tracking-widest">
              01 // DEPLOYED SYSTEMS
            </span>
            <span className="block font-sans text-xs sm:text-sm font-bold text-ink">
              5 Production-Grade Architectures
            </span>
          </div>

          <div className="py-3.5 px-0 md:px-4 space-y-0.5">
            <span className="block font-mono text-[10px] uppercase text-ink-muted tracking-widest">
              02 // ORACLE CREDENTIALS
            </span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cobalt shrink-0" />
              <span className="font-sans text-xs sm:text-sm font-bold text-ink truncate">
                Certified SQL & PL/SQL
              </span>
            </div>
          </div>

          <div className="py-3.5 px-0 md:px-4 space-y-0.5">
            <span className="block font-mono text-[10px] uppercase text-ink-muted tracking-widest">
              03 // EDGE CV PERFORMANCE
            </span>
            <span className="block font-sans text-xs sm:text-sm font-bold text-ink">
              &lt; 150ms Frame Latency
            </span>
          </div>

          <div className="py-3.5 px-0 md:px-4 space-y-0.5">
            <span className="block font-mono text-[10px] uppercase text-ink-muted tracking-widest">
              04 // ACADEMIC PROFILE
            </span>
            <span className="block font-sans text-xs sm:text-sm font-bold text-ink truncate">
              LICET Chennai (2024–2028)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
