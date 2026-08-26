import React, { useState } from 'react';
import { CERTIFICATES } from '../data/portfolioData';
import { Certificate } from '../types';
import { CertificateModal } from './CertificateModal';
import { ArrowUpRight, FileCheck } from 'lucide-react';

export const CertificatesArchive: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="py-24 lg:py-36 border-b border-rule bg-canvas relative overflow-hidden">
      {/* Background Watermark Section Number */}
      <span
        aria-hidden="true"
        className="absolute -right-6 top-1/2 -translate-y-1/2 text-[18rem] lg:text-[26rem] font-display font-black text-ink/[0.02] select-none pointer-events-none tracking-tighter"
      >
        07
      </span>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-rule pb-4">
          <span className="font-mono text-xs text-cobalt font-semibold tracking-widest uppercase">
            07 // CREDENTIALS & CERTIFICATIONS
          </span>
          <span className="font-mono text-xs text-ink-muted tracking-widest uppercase">
            VERIFIED ARCHIVE ({CERTIFICATES.length})
          </span>
        </div>

        {/* Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-ink tracking-tight uppercase leading-[1.08]">
              Professional<br />Certifications.
            </h2>
            <p className="font-sans text-sm text-ink-muted leading-relaxed">
              Formally verified professional credentials in Oracle SQL, PL/SQL procedural database programming, Java application development, and UI/UX design systems.
            </p>
          </div>
        </div>

        {/* Minimalist Archive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="p-6 sm:p-8 border border-rule bg-canvas hover:border-ink hover:bg-canvas-subtle/30 transition-all duration-200 cursor-pointer space-y-6 group"
            >
              {/* Top Meta */}
              <div className="flex items-center justify-between border-b border-rule pb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-cobalt font-bold">
                    {cert.number}
                  </span>
                  <span className="font-mono text-xs text-ink uppercase tracking-wider font-semibold">
                    {cert.issuer}
                  </span>
                </div>
                <span className="font-mono text-xs text-ink-muted uppercase">
                  {cert.year}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-ink group-hover:text-cobalt transition-colors">
                    {cert.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-cobalt group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </div>
                <p className="font-sans text-xs text-ink-muted leading-relaxed line-clamp-2">
                  {cert.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {cert.skills.slice(0, 3).map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 font-mono text-[10px] border border-rule text-ink-muted uppercase bg-canvas"
                  >
                    {s}
                  </span>
                ))}
                {cert.skills.length > 3 && (
                  <span className="px-1.5 py-0.5 font-mono text-[10px] text-ink-muted">
                    +{cert.skills.length - 3} more
                  </span>
                )}
              </div>

              {/* Bottom Verification Badge */}
              <div className="pt-2 flex items-center justify-between text-xs font-mono border-t border-rule/50">
                <span className="flex items-center gap-1.5 text-emerald-600 font-medium">
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>VERIFIED PDF ATTACHED</span>
                </span>
                <span className="text-ink-muted group-hover:text-ink transition-colors flex items-center gap-1">
                  View Credential →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
