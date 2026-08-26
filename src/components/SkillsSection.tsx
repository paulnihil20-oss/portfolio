import React, { useState } from 'react';
import { SKILLS_MATRIX } from '../data/portfolioData';
import { Terminal, Layout, Database, Wrench } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categoryIcons: Record<string, React.ElementType> = {
    '01': Terminal,
    '02': Layout,
    '03': Database,
    '04': Wrench,
  };

  const filteredCategories = selectedCategory === 'ALL'
    ? SKILLS_MATRIX
    : SKILLS_MATRIX.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-24 lg:py-36 border-b border-rule bg-canvas relative overflow-hidden">
      {/* Background Watermark Section Number */}
      <span
        aria-hidden="true"
        className="absolute -right-6 top-1/2 -translate-y-1/2 text-[18rem] lg:text-[26rem] font-display font-black text-ink/[0.02] select-none pointer-events-none tracking-tighter"
      >
        05
      </span>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-rule pb-4">
          <span className="font-mono text-xs text-cobalt font-semibold tracking-widest uppercase">
            05 // TECHNICAL CAPABILITIES
          </span>
          <span className="font-mono text-xs text-ink-muted tracking-widest uppercase">
            SKILLS & STACK
          </span>
        </div>

        {/* Headline & Filter Buttons */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-ink tracking-tight uppercase leading-[1.08]">
              Engineering Stack &<br />Core Competencies.
            </h2>
            <p className="font-sans text-sm text-ink-muted leading-relaxed">
              Demonstrated proficiencies across backend systems, relational databases, computer vision pipelines, and modern frontend architectures.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedCategory('ALL')}
              className={`px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors border ${
                selectedCategory === 'ALL'
                  ? 'bg-ink text-canvas border-ink font-semibold'
                  : 'bg-canvas text-ink-muted border-rule hover:border-ink hover:text-ink'
              }`}
            >
              All Domains
            </button>
            {SKILLS_MATRIX.map((cat) => {
              const isActive = selectedCategory === cat.category;
              return (
                <button
                  key={cat.category}
                  onClick={() => setSelectedCategory(cat.category)}
                  className={`px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors border ${
                    isActive
                      ? 'bg-ink text-canvas border-ink font-semibold'
                      : 'bg-canvas text-ink-muted border-rule hover:border-ink hover:text-ink'
                  }`}
                >
                  {cat.category.split(' ')[0]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {filteredCategories.map((cat) => {
            const Icon = categoryIcons[cat.code] || Terminal;
            return (
              <div
                key={cat.category}
                className="border border-rule bg-canvas p-6 sm:p-8 space-y-6 hover:border-ink transition-colors"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-rule pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 border border-rule bg-canvas-subtle/50 text-cobalt">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-cobalt font-semibold uppercase tracking-wider block">
                        CAT 0{cat.code} //
                      </span>
                      <h3 className="font-display font-bold text-base text-ink uppercase tracking-wide">
                        {cat.category}
                      </h3>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-ink-muted">
                    {cat.skills.length} skills
                  </span>
                </div>

                {/* Skill Items List */}
                <div className="divide-y divide-rule/60">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="py-3.5 first:pt-0 last:pb-0 flex items-start justify-between gap-4 group"
                    >
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-2.5">
                          <h4 className="font-display text-sm font-bold text-ink group-hover:text-cobalt transition-colors">
                            {skill.name}
                          </h4>
                          <span className={`font-mono text-[9px] px-1.5 py-0.5 border uppercase ${
                            skill.level === 'Expert'
                              ? 'border-cobalt text-cobalt bg-cobalt/5 font-semibold'
                              : skill.level === 'Advanced'
                              ? 'border-ink/40 text-ink bg-canvas-subtle/40'
                              : 'border-rule text-ink-muted'
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                        <p className="font-sans text-xs text-ink-muted leading-relaxed">
                          {skill.description}
                        </p>
                      </div>

                      <span className="font-mono text-[10px] text-ink-muted uppercase shrink-0 pt-0.5">
                        {skill.experience}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
