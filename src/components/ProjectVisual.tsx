import React from 'react';

// Unique zero-photo visual for each project ID.
// All visuals are pure CSS / SVG / JSX — no images.

// ─── Smart Traffic ───────────────────────────────────────────────
const SmartTrafficVisual = () => (
  <div className="relative w-full h-full bg-[#070b0f] overflow-hidden font-mono select-none">
    {/* Scanline overlay */}
    <div className="absolute inset-0 pointer-events-none"
      style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,255,100,0.025) 3px, rgba(0,255,100,0.025) 4px)' }} />

    {/* Grid road lines */}
    <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
      {/* Horizontal roads */}
      {[25, 50, 75].map(y => (
        <line key={`h${y}`} x1="0" y1={`${y}%`} x2="100%" y2={`${y}%`} stroke="#00ff64" strokeWidth="1.5" strokeDasharray="8 6" />
      ))}
      {/* Vertical roads */}
      {[25, 50, 75].map(x => (
        <line key={`v${x}`} x1={`${x}%`} y1="0" x2={`${x}%`} y2="100%" stroke="#00ff64" strokeWidth="1.5" strokeDasharray="8 6" />
      ))}
      {/* Intersection halos */}
      {[25, 50, 75].flatMap(x =>
        [25, 50, 75].map(y => (
          <circle key={`c${x}${y}`} cx={`${x}%`} cy={`${y}%`} r="8" fill="none" stroke="#00ff64" strokeWidth="0.8" />
        ))
      )}
    </svg>

    {/* Signal lights at intersections */}
    {[
      { x: '25%', y: '25%', state: 'red' },
      { x: '50%', y: '25%', state: 'green' },
      { x: '75%', y: '25%', state: 'yellow' },
      { x: '25%', y: '50%', state: 'green' },
      { x: '50%', y: '50%', state: 'red' },
      { x: '75%', y: '50%', state: 'green' },
      { x: '25%', y: '75%', state: 'yellow' },
      { x: '50%', y: '75%', state: 'green' },
      { x: '75%', y: '75%', state: 'red' },
    ].map(({ x, y, state }) => (
      <div key={`${x}${y}`} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: x, top: y }}>
        <div className="w-4 h-10 bg-[#111] border border-[#333] rounded-sm flex flex-col items-center justify-around px-0.5 py-0.5">
          <div className={`w-2.5 h-2.5 rounded-full ${state === 'red' ? 'bg-red-500 shadow-[0_0_6px_2px_rgba(239,68,68,0.7)]' : 'bg-[#1a1a1a]'}`} />
          <div className={`w-2.5 h-2.5 rounded-full ${state === 'yellow' ? 'bg-yellow-400 shadow-[0_0_6px_2px_rgba(250,204,21,0.7)]' : 'bg-[#1a1a1a]'}`} />
          <div className={`w-2.5 h-2.5 rounded-full ${state === 'green' ? 'bg-emerald-400 shadow-[0_0_6px_2px_rgba(52,211,153,0.7)]' : 'bg-[#1a1a1a]'}`} />
        </div>
      </div>
    ))}

    {/* CV detection box on one node */}
    <div className="absolute border border-emerald-400/70 text-emerald-400"
      style={{ left: '43%', top: '43%', width: '14%', height: '14%' }}>
      <span className="absolute -top-3 left-0 text-[8px] tracking-wider">DETECT: AMB</span>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-60" />
    </div>

    {/* Stats strip */}
    <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-[#050a05]/80 border-t border-emerald-900/40 flex gap-6 text-[9px] text-emerald-500/80 tracking-widest">
      <span>DENSITY: HIGH</span>
      <span>SIGNAL_MODE: ADAPTIVE</span>
      <span>LATENCY: &lt;150ms</span>
      <span>EMERGENCY: CLEAR</span>
    </div>

    {/* Corner label */}
    <div className="absolute top-3 right-3 text-[9px] text-emerald-500/60 tracking-[0.2em]">GRID_CAM // LIVE</div>
  </div>
);

// ─── FinTech ──────────────────────────────────────────────────────
const TRANSACTIONS = [
  { id: 'TXN-8821', merchant: 'AMAZON', amount: '-₹2,499', category: 'SHOPPING', ts: '09:14:02' },
  { id: 'TXN-8820', merchant: 'ZOMATO', amount: '-₹340', category: 'FOOD', ts: '08:52:17' },
  { id: 'TXN-8819', merchant: 'SALARY', amount: '+₹42,000', category: 'INCOME', ts: '00:00:01' },
  { id: 'TXN-8818', merchant: 'BSNL', amount: '-₹599', category: 'BILLS', ts: 'YESTERDAY' },
  { id: 'TXN-8817', merchant: 'NYKAA', amount: '-₹1,250', category: 'SHOPPING', ts: 'YESTERDAY' },
];

const FinTechVisual = () => (
  <div className="relative w-full h-full bg-[#060910] overflow-hidden font-mono select-none">
    {/* CRT scanlines */}
    <div className="absolute inset-0 pointer-events-none opacity-30"
      style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(56,189,248,0.04) 2px, rgba(56,189,248,0.04) 3px)' }} />

    {/* Terminal header */}
    <div className="absolute top-0 left-0 right-0 px-4 py-2 bg-[#0a0f1a] border-b border-sky-900/50 flex items-center gap-3">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
      </div>
      <span className="text-[9px] text-sky-400/70 tracking-[0.25em] ml-2">FINTRACK // SMS_PARSER v2.1.0</span>
    </div>

    {/* Ledger table */}
    <div className="absolute top-9 left-0 right-0 px-4 pt-3">
      <div className="text-[8px] text-sky-600/60 tracking-widest flex gap-4 pb-1 border-b border-sky-900/30 mb-1">
        <span className="w-16">TXN_ID</span>
        <span className="w-20">MERCHANT</span>
        <span className="w-16 text-right">AMOUNT</span>
        <span className="w-16">CATEGORY</span>
        <span className="flex-1 text-right">TIMESTAMP</span>
      </div>
      {TRANSACTIONS.map((tx, i) => (
        <div key={tx.id}
          className="flex gap-4 py-0.5 text-[9px] border-b border-sky-950/30"
          style={{ opacity: 1 - i * 0.15 }}
        >
          <span className="w-16 text-sky-500/70">{tx.id}</span>
          <span className="w-20 text-sky-200/80">{tx.merchant}</span>
          <span className={`w-16 text-right font-bold ${tx.amount.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
            {tx.amount}
          </span>
          <span className="w-16 text-yellow-500/60">{tx.category}</span>
          <span className="flex-1 text-right text-sky-600/50">{tx.ts}</span>
        </div>
      ))}
    </div>

    {/* Donut chart placeholder */}
    <div className="absolute bottom-8 right-4 flex flex-col items-center gap-1">
      <svg width="54" height="54" viewBox="0 0 54 54">
        <circle cx="27" cy="27" r="20" fill="none" stroke="#0e2540" strokeWidth="9" />
        <circle cx="27" cy="27" r="20" fill="none" stroke="#38bdf8" strokeWidth="9"
          strokeDasharray="50 76" strokeDashoffset="0" />
        <circle cx="27" cy="27" r="20" fill="none" stroke="#f87171" strokeWidth="9"
          strokeDasharray="28 98" strokeDashoffset="-50" />
        <circle cx="27" cy="27" r="20" fill="none" stroke="#facc15" strokeWidth="9"
          strokeDasharray="22 104" strokeDashoffset="-78" />
        <text x="27" y="31" textAnchor="middle" fill="#7dd3fc" fontSize="7" fontFamily="monospace">SPLIT</text>
      </svg>
      <div className="text-[7px] text-sky-600/50 tracking-wider">EXPENSE_DIST</div>
    </div>

    {/* Gold rate ticker */}
    <div className="absolute bottom-0 left-0 right-0 px-4 py-1.5 bg-[#060910]/90 border-t border-sky-900/40 flex gap-6 text-[8px] tracking-wider overflow-hidden">
      <span className="text-yellow-400/80 whitespace-nowrap">GOLD ₹9,280/g ▲0.4%</span>
      <span className="text-sky-400/60 whitespace-nowrap">SILVER ₹112/g ▲0.1%</span>
      <span className="text-emerald-400/60 whitespace-nowrap">BUDGET_USED: 62%</span>
      <span className="text-sky-400/60 whitespace-nowrap">SAVINGS: ₹14,250</span>
    </div>
  </div>
);

// ─── SpecAmp ──────────────────────────────────────────────────────
const SPEC_ROWS = [
  { param: 'Capacitance', val: '100 nF', norm: '1.00 × 10⁻⁷ F', conf: 98 },
  { param: 'Voltage Rtg', val: '16 V', norm: '16.00 V', conf: 96 },
  { param: 'Tolerance', val: '±10%', norm: '±10.00%', conf: 94 },
  { param: 'Dielectric', val: 'X7R', norm: 'X7R', conf: 88 },
  { param: 'Package', val: '0402 (1005)', norm: '1.00×0.50mm', conf: 99 },
];

const SpecAmpVisual = () => (
  <div className="relative w-full h-full bg-[#07080c] overflow-hidden font-mono select-none">
    {/* Grid background */}
    <div className="absolute inset-0 pointer-events-none"
      style={{ backgroundImage: 'linear-gradient(rgba(100,120,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(100,120,255,0.05) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

    {/* MPN badge */}
    <div className="absolute top-3 left-4 right-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
        <span className="text-[9px] text-indigo-400/80 tracking-[0.25em]">MPN: GRM188R71C104KA01D</span>
      </div>
      <span className="text-[8px] text-indigo-600/60 tracking-widest">SOURCES: 4 / COMPLETE: 97%</span>
    </div>

    {/* Spec table */}
    <div className="absolute top-9 left-4 right-4">
      <div className="text-[7px] text-indigo-600/50 tracking-widest flex gap-3 pb-1 border-b border-indigo-900/40 mb-1">
        <span className="w-20">PARAMETER</span>
        <span className="w-20">RAW_VALUE</span>
        <span className="w-24">NORMALIZED</span>
        <span className="flex-1 text-right">CONFIDENCE</span>
      </div>
      {SPEC_ROWS.map((row, i) => (
        <div key={row.param}
          className="flex gap-3 py-0.5 text-[8px] border-b border-indigo-950/30"
          style={{ opacity: 1 - i * 0.1 }}
        >
          <span className="w-20 text-indigo-300/70">{row.param}</span>
          <span className="w-20 text-white/80">{row.val}</span>
          <span className="w-24 text-indigo-400/80">{row.norm}</span>
          <div className="flex-1 flex items-center justify-end gap-2">
            <div className="w-16 h-1 bg-indigo-950 rounded-full overflow-hidden">
              <div className="h-full rounded-full bg-indigo-400"
                style={{ width: `${row.conf}%` }} />
            </div>
            <span className="text-[7px] text-indigo-400/70 w-6 text-right">{row.conf}%</span>
          </div>
        </div>
      ))}
    </div>

    {/* Component art */}
    <div className="absolute bottom-8 right-4">
      <svg width="72" height="44" viewBox="0 0 72 44">
        {/* Capacitor symbol */}
        <line x1="8" y1="22" x2="28" y2="22" stroke="#6366f1" strokeWidth="1.5" />
        <line x1="28" y1="8" x2="28" y2="36" stroke="#6366f1" strokeWidth="2" />
        <line x1="32" y1="8" x2="32" y2="36" stroke="#6366f1" strokeWidth="2" />
        <line x1="32" y1="22" x2="52" y2="22" stroke="#6366f1" strokeWidth="1.5" />
        <text x="12" y="41" fill="#4f46e5" fontSize="6" fontFamily="monospace">+</text>
        <text x="44" y="41" fill="#4f46e5" fontSize="6" fontFamily="monospace">−</text>
        <text x="15" y="7" fill="#818cf8" fontSize="5" fontFamily="monospace">100nF</text>
        <text x="33" y="7" fill="#818cf8" fontSize="5" fontFamily="monospace">16V</text>
        {/* Source dots */}
        {[0, 1, 2, 3].map(j => (
          <circle key={j} cx={58 + j * 4} cy={22} r="1.5" fill="#6366f1" opacity={0.4 + j * 0.15} />
        ))}
      </svg>
    </div>

    {/* Bottom strip */}
    <div className="absolute bottom-0 left-0 right-0 px-4 py-1.5 bg-[#07080c]/90 border-t border-indigo-900/30 flex gap-5 text-[7px] tracking-wider">
      <span className="text-indigo-400/70">DIGIKEY ✓</span>
      <span className="text-indigo-400/70">MOUSER ✓</span>
      <span className="text-indigo-400/50">OCTOPART ✓</span>
      <span className="text-indigo-400/50">MFGR_SITE ✓</span>
      <span className="ml-auto text-indigo-300/60">CACHE: 7d TTL</span>
    </div>
  </div>
);

// ─── ApproveX ─────────────────────────────────────────────────────
const WORKFLOW = [
  { id: 'STU', label: 'STUDENT', role: 'INITIATOR', status: 'submitted', color: '#f59e0b' },
  { id: 'FAC', label: 'FACULTY ADV', role: 'L1 APPROVER', status: 'approved', color: '#10b981' },
  { id: 'HOD', label: 'HOD', role: 'L2 APPROVER', status: 'approved', color: '#10b981' },
  { id: 'DEA', label: 'DEAN', role: 'L3 APPROVER', status: 'pending', color: '#6366f1' },
];

const ApproveXVisual = () => (
  <div className="relative w-full h-full bg-[#090a10] overflow-hidden font-mono select-none">
    {/* Dot matrix bg */}
    <div className="absolute inset-0 pointer-events-none opacity-30"
      style={{ backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.3) 1px, transparent 1px)', backgroundSize: '18px 18px' }} />

    {/* Header */}
    <div className="absolute top-3 left-4 right-4 flex items-center justify-between">
      <span className="text-[9px] text-violet-400/80 tracking-[0.2em]">APPROVEX // WORKFLOW_ENGINE v1.0</span>
      <div className="flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
        <span className="text-[8px] text-amber-400/70">IN REVIEW</span>
      </div>
    </div>

    {/* Request card */}
    <div className="absolute top-9 left-4 right-4 border border-violet-900/50 bg-[#0f1020]/70 p-3">
      <div className="text-[7px] text-violet-600/60 tracking-widest mb-1">REQUEST #OD-2025-0041 // ON-DUTY PERMISSION</div>
      <div className="text-[9px] text-white/70">STUDENT: Paul Nihil · REG: 22CS001 · DEPT: CSE</div>
      <div className="text-[8px] text-violet-400/60 mt-0.5">DATE: 26-AUG-2026 · REASON: Tech Symposium, NIT Trichy</div>
    </div>

    {/* Workflow nodes */}
    <div className="absolute top-[6.5rem] left-4 right-4 flex items-center">
      {WORKFLOW.map((node, i) => (
        <React.Fragment key={node.id}>
          <div className="flex flex-col items-center gap-1" style={{ flex: 1 }}>
            <div
              className="w-10 h-10 border-2 flex flex-col items-center justify-center"
              style={{ borderColor: node.color, backgroundColor: `${node.color}12` }}
            >
              <span className="text-[8px] font-bold" style={{ color: node.color }}>{node.id}</span>
            </div>
            <span className="text-[7px] text-center" style={{ color: node.color, opacity: 0.75 }}>{node.label}</span>
            <span className="text-[6px] text-center text-white/30 tracking-wider">{node.status.toUpperCase()}</span>
          </div>
          {i < WORKFLOW.length - 1 && (
            <div className="flex-shrink-0 w-6 flex items-center -mt-4">
              <div className="w-full h-px" style={{ backgroundColor: i < 2 ? '#10b981' : '#333' }} />
              <div className="text-[10px] -ml-1" style={{ color: i < 2 ? '#10b981' : '#444' }}>›</div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>

    {/* RBAC summary */}
    <div className="absolute bottom-8 left-4 right-4">
      <div className="text-[7px] text-violet-600/50 tracking-widest mb-1">RBAC ROLE MATRIX</div>
      <div className="grid grid-cols-4 gap-1 text-[7px] text-center">
        {['VIEW', 'SUBMIT', 'APPROVE', 'ADMIN'].map((perm) => (
          <div key={perm} className="border border-violet-900/40 py-0.5 text-violet-400/60">{perm}</div>
        ))}
      </div>
    </div>

    {/* Bottom strip */}
    <div className="absolute bottom-0 left-0 right-0 px-4 py-1.5 bg-[#090a10]/90 border-t border-violet-900/30 flex gap-5 text-[7px] tracking-wider">
      <span className="text-emerald-400/70">PAPER_FORMS: ELIMINATED</span>
      <span className="text-violet-400/60">AUDIT_LOG: IMMUTABLE</span>
      <span className="ml-auto text-violet-300/50">TIMESTAMP: {new Date().toISOString().slice(0, 16).replace('T', ' ')}</span>
    </div>
  </div>
);

// ─── Public API ───────────────────────────────────────────────────
const VISUALS: Record<string, React.FC> = {
  'smart-traffic': SmartTrafficVisual,
  'fintech-platform': FinTechVisual,
  'specamp': SpecAmpVisual,
  'approvex': ApproveXVisual,
};

interface ProjectVisualProps {
  projectId: string;
  className?: string;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ projectId, className = '' }) => {
  const Visual = VISUALS[projectId] ?? (() => (
    <div className="w-full h-full bg-canvas-dark flex items-center justify-center font-mono text-xs text-ink-muted">
      {projectId.toUpperCase()} // NO PREVIEW
    </div>
  ));
  return (
    <div className={`w-full h-full ${className}`}>
      <Visual />
    </div>
  );
};
