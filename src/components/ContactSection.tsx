import React, { useEffect, useRef, useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Copy, Check, Send, Phone, MapPin, Linkedin, Github, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleLinesRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Clip-path word-reveal for heading
      if (titleLinesRef.current) {
        const lines = titleLinesRef.current.querySelectorAll('.clip-reveal-inner');
        gsap.fromTo(lines,
          { y: '105%' },
          {
            y: '0%',
            duration: 0.9,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: titleLinesRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Content blocks fade-up
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.querySelectorAll('.contact-block'),
          { y: 35, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.7 }, colors: ['#2457FF', '#111111', '#B8B8B3'] });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 lg:py-40 border-b border-rule bg-canvas relative overflow-hidden">
      {/* Watermark */}
      <span aria-hidden="true" className="absolute -right-6 top-1/2 -translate-y-1/2 text-[18rem] lg:text-[26rem] font-display font-black text-ink/[0.02] select-none pointer-events-none tracking-tighter leading-none">
        08
      </span>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16 relative z-10">
        {/* Section header */}
        <div className="flex items-center justify-between border-b border-rule pb-4">
          <span className="font-mono text-xs text-cobalt font-semibold tracking-widest uppercase">
            08 // CONTACT & INQUIRIES
          </span>
          <span className="font-mono text-xs text-ink-muted tracking-widest uppercase">
            GET IN TOUCH
          </span>
        </div>

        {/* Heading */}
        <div ref={titleLinesRef} className="space-y-1 sm:space-y-2">
          {["LET'S", 'BUILD', 'SOMETHING.'].map((word) => (
            <div key={word} className="clip-reveal overflow-hidden leading-none">
              <div
                className="clip-reveal-inner font-display font-extrabold text-ink uppercase tracking-tighter"
                style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', lineHeight: 0.9 }}
              >
                {word}
              </div>
            </div>
          ))}
          <p className="font-sans text-base text-ink-muted max-w-xl pt-6 leading-relaxed">
            Open for software engineering opportunities, internships, and technical collaborations. Feel free to reach out directly.
          </p>
        </div>

        {/* Main Grid */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-2">
          {/* Left: Direct details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email copy box */}
            <div className="contact-block p-6 border border-rule bg-canvas space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-ink font-semibold uppercase tracking-wider flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cobalt" /> Primary Email
                </span>
                <span className="font-mono text-[10px] text-emerald-600 font-semibold uppercase">ACTIVE INBOX</span>
              </div>
              <div className="p-3.5 border border-rule bg-canvas-subtle/30 font-mono text-xs sm:text-sm text-ink flex items-center justify-between gap-3">
                <span className="truncate">{PERSONAL_INFO.email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 border border-rule hover:border-ink bg-canvas text-ink transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-cobalt" />}
                </button>
              </div>
              {copied && <span className="block font-mono text-xs text-emerald-600">✓ Copied to clipboard!</span>}
            </div>

            {/* Details */}
            <div className="contact-block border border-rule divide-y divide-rule font-mono text-xs bg-canvas">
              {[
                { icon: <Phone className="w-3.5 h-3.5 text-cobalt" />, label: 'PHONE:', val: PERSONAL_INFO.phone },
                { icon: <MapPin className="w-3.5 h-3.5 text-cobalt" />, label: 'LOCATION:', val: 'Madurai & Chennai, India' },
              ].map(({ icon, label, val }) => (
                <div key={label} className="p-4 flex items-center justify-between">
                  <span className="text-ink-muted uppercase flex items-center gap-2">{icon}{label}</span>
                  <span className="text-ink font-medium">{val}</span>
                </div>
              ))}
            </div>

            {/* Social grid */}
            <div className="contact-block space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-ink-muted block">Direct Channels</span>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { href: PERSONAL_INFO.linkedin, icon: <Linkedin className="w-4 h-4 mx-auto text-cobalt" />, label: 'LinkedIn' },
                  { href: PERSONAL_INFO.github, icon: <Github className="w-4 h-4 mx-auto text-ink" />, label: 'GitHub' },
                ].map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-rule hover:border-ink text-center space-y-1 group transition-colors"
                  >
                    {icon}
                    <span className="block font-mono text-[11px] uppercase text-ink font-medium">{label}</span>
                  </a>
                ))}
                <button
                  onClick={onOpenResume}
                  className="p-3 border border-rule hover:border-ink text-center space-y-1 group transition-colors"
                >
                  <FileText className="w-4 h-4 mx-auto text-cobalt group-hover:scale-110 transition-transform" />
                  <span className="block font-mono text-[11px] uppercase text-ink font-medium">Resume</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-block lg:col-span-7 border border-rule bg-canvas p-6 sm:p-8 lg:p-10 space-y-6">
            <div className="border-b border-rule pb-4">
              <h3 className="font-display font-bold text-xl text-ink">Send a Message</h3>
              <p className="font-sans text-xs text-ink-muted">Direct delivery to Paul Nihil.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: 'name', label: 'Name *', type: 'text', placeholder: 'e.g. Alex Morgan', key: 'name' as const },
                  { id: 'email', label: 'Email *', type: 'email', placeholder: 'alex@company.com', key: 'email' as const },
                ].map(({ id, label, type, placeholder, key }) => (
                  <div key={id} className="space-y-1.5">
                    <label htmlFor={id} className="block font-mono text-xs uppercase tracking-wider text-ink font-medium">{label}</label>
                    <input
                      type={type} id={id} required
                      value={formData[key]}
                      onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                      placeholder={placeholder}
                      className="w-full px-3.5 py-2.5 border border-rule bg-canvas-subtle/20 text-ink text-sm font-sans focus:outline-none focus:border-cobalt transition-colors"
                    />
                  </div>
                ))}
              </div>
              <div className="space-y-1.5">
                <label htmlFor="subject" className="block font-mono text-xs uppercase tracking-wider text-ink font-medium">Subject</label>
                <input
                  type="text" id="subject" value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Software Engineering Opportunity / Project Collaboration"
                  className="w-full px-3.5 py-2.5 border border-rule bg-canvas-subtle/20 text-ink text-sm font-sans focus:outline-none focus:border-cobalt transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wider text-ink font-medium">Message *</label>
                <textarea
                  id="message" required rows={4} value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message details..."
                  className="w-full px-3.5 py-2.5 border border-rule bg-canvas-subtle/20 text-ink text-sm font-sans focus:outline-none focus:border-cobalt transition-colors resize-none"
                />
              </div>
              <button
                type="submit" disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 bg-ink text-canvas font-mono text-xs uppercase tracking-widest hover:bg-cobalt transition-colors flex items-center justify-center gap-2 font-semibold disabled:opacity-50"
              >
                {isSubmitting ? <span>Sending...</span> : <><Send className="w-4 h-4" /><span>Send Message</span></>}
              </button>
              {submitted && (
                <div className="p-4 border border-emerald-500/40 bg-emerald-50 text-emerald-800 font-mono text-xs space-y-1">
                  <p className="font-bold">✓ Message Sent Successfully!</p>
                  <p className="text-[11px]">Thank you for reaching out. I will get back to you promptly.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
