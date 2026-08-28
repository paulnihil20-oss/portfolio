import React, { useState, useEffect } from 'react';
import {
  AlertTriangle,
  Cpu,
  Database,
  Layers,
  Play,
  ShieldCheck,
  TrendingUp,
  Search,
  CheckCircle2,
  Server,
  Fish,
  Radio,
  Scale,
  Sparkles,
  ShieldAlert,
  Compass
} from 'lucide-react';
import { sound } from '../utils/audio';

interface ProjectVisualProps {
  id?: string;
  projectId?: string;
  className?: string;
}

// ─── 00. AquaLens Maritime Edge AI Visual Simulator ──────────────────────────
const AquaLensVisual: React.FC = () => {
  const [selectedSpecies, setSelectedSpecies] = useState<'pomfret' | 'rohu' | 'catla' | 'mackerel'>('pomfret');
  const [isNearBorder, setIsNearBorder] = useState(false);
  const [qimAnalyzed, setQimAnalyzed] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  const speciesData = {
    pomfret: {
      name: 'Silver Pomfret',
      scientific: 'Pampus argenteus',
      confidence: 98.4,
      length: 24.5,
      weight: 642,
      pricePerKg: 650,
      qimScore: 96,
      qimGrade: 'Grade A+ (Prime Export)',
      luster: 'High Silver Iridescence',
      habitat: 'Coastal Pelagic / Bay of Bengal',
    },
    rohu: {
      name: 'Rohu Carp',
      scientific: 'Labeo rohita',
      confidence: 97.2,
      length: 38.0,
      weight: 1280,
      pricePerKg: 180,
      qimScore: 92,
      qimGrade: 'Grade A (Fresh Harvest)',
      luster: 'Bright Red Gills, Clear Cornea',
      habitat: 'Freshwater / Inland Estuary',
    },
    catla: {
      name: 'Catla (Major Carp)',
      scientific: 'Gibelion catla',
      confidence: 96.8,
      length: 46.5,
      weight: 2450,
      pricePerKg: 160,
      qimScore: 90,
      qimGrade: 'Grade A (Commercial)',
      luster: 'Deep Body, Intact Mucus Layer',
      habitat: 'River Basin / Aquaculture Pond',
    },
    mackerel: {
      name: 'Indian Mackerel',
      scientific: 'Rastrelliger kanagurta',
      confidence: 95.1,
      length: 19.8,
      weight: 215,
      pricePerKg: 220,
      qimScore: 88,
      qimGrade: 'Grade B+ (Good Local)',
      luster: 'Golden Bands, Firm Flesh',
      habitat: 'Inshore Waters / Arabian Sea',
    },
  };

  const curr = speciesData[selectedSpecies];
  const calculatedValue = ((curr.weight / 1000) * curr.pricePerKg).toFixed(1);

  const triggerScan = () => {
    sound.playClick();
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setQimAnalyzed(true);
      sound.playBlip(880, 0.1);
    }, 600);
  };

  const toggleBorder = () => {
    sound.playClick();
    const nextState = !isNearBorder;
    setIsNearBorder(nextState);
    if (nextState) {
      sound.playBlip(440, 0.3);
    }
  };

  return (
    <div className="w-full h-full bg-[#0a0f18] text-[#e0e8f5] font-mono text-xs p-4 sm:p-6 flex flex-col justify-between select-none relative overflow-hidden border border-white/10">
      {/* Nautical Ocean Grid Background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#00a8ff_1px,transparent_1px)] [background-size:18px_18px]" />

      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 relative z-10">
        <div className="flex items-center gap-2">
          <span className={`w-2.5 h-2.5 rounded-full ${isNearBorder ? 'bg-amber-400 animate-ping' : 'bg-cyan-400 animate-pulse'}`} />
          <span className="font-bold text-white tracking-wider text-[11px] flex items-center gap-1.5">
            <Fish className="w-3.5 h-3.5 text-cyan-400" />
            <span>AQUALENS // TFLITE EDGE INFERENCE & RADAR</span>
          </span>
        </div>
        <span className="text-[10px] text-white/60">
          INFERENCE: 164ms · MEM: 4.2 MB · 9 COASTAL LANGS
        </span>
      </div>

      {/* Main Interactive Stage */}
      <div className="my-3 space-y-3 relative z-10">
        {/* Detection Card */}
        <div className="bg-black/60 border border-white/10 p-3.5 rounded-sm space-y-2.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-cyan-950 text-cyan-300 border border-cyan-500/40 text-[10px] uppercase font-bold tracking-wider">
                {curr.name}
              </span>
              <span className="italic text-white/50 text-[10px]">({curr.scientific})</span>
            </div>
            <span className="text-emerald-400 font-bold text-[11px]">
              CONFIDENCE: {curr.confidence}%
            </span>
          </div>

          {/* Telemetry Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
            <div className="p-2 border border-white/10 bg-white/5 space-y-0.5">
              <div className="text-[9px] uppercase text-white/50 flex items-center gap-1">
                <Scale className="w-3 h-3 text-cyan-400" />
                <span>BIOMASS (W=a·L^b)</span>
              </div>
              <div className="text-sm font-bold text-white font-mono">{curr.weight} g</div>
              <div className="text-[9px] text-white/40">Length: {curr.length} cm</div>
            </div>

            <div className="p-2 border border-white/10 bg-white/5 space-y-0.5">
              <div className="text-[9px] uppercase text-white/50 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                <span>QIM FRESHNESS</span>
              </div>
              <div className="text-sm font-bold text-emerald-300 font-mono">{curr.qimScore}/100</div>
              <div className="text-[9px] text-white/40">{qimAnalyzed ? 'Calibrated 100%' : curr.qimGrade.split(' ')[0]}</div>
            </div>

            <div className="p-2 border border-white/10 bg-white/5 space-y-0.5">
              <div className="text-[9px] uppercase text-white/50 flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-amber-400" />
                <span>MARKET RATE</span>
              </div>
              <div className="text-sm font-bold text-amber-300 font-mono">₹{curr.pricePerKg}/kg</div>
              <div className="text-[9px] text-white/40">Est: ₹{calculatedValue}</div>
            </div>

            <div className={`p-2 border space-y-0.5 transition-colors ${isNearBorder ? 'border-amber-500 bg-amber-950/40 text-amber-200' : 'border-white/10 bg-white/5'}`}>
              <div className="text-[9px] uppercase flex items-center gap-1">
                <Radio className="w-3 h-3 text-cyan-400" />
                <span>IMBL GEOFENCE</span>
              </div>
              <div className="text-sm font-bold font-mono">
                {isNearBorder ? '4.2 NM (ALERT)' : '14.8 NM (SAFE)'}
              </div>
              <div className="text-[9px] opacity-75">
                {isNearBorder ? 'Voice Warning Active' : 'Within Territorial Waters'}
              </div>
            </div>
          </div>
        </div>

        {/* Species Switcher & Interactive Controls */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] text-white/40 uppercase">TARGET:</span>
            {(['pomfret', 'rohu', 'catla', 'mackerel'] as const).map((sp) => (
              <button
                key={sp}
                onClick={() => {
                  sound.playClick();
                  setSelectedSpecies(sp);
                }}
                className={`px-2 py-0.5 text-[10px] uppercase border transition-all ${
                  selectedSpecies === sp
                    ? 'bg-cyan-500 text-black border-cyan-400 font-bold'
                    : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
                }`}
              >
                {sp}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={triggerScan}
              disabled={isScanning}
              className="px-2.5 py-1 bg-white/10 hover:bg-cyan-500 hover:text-black border border-white/20 text-[10px] uppercase font-bold tracking-wider transition-colors flex items-center gap-1"
            >
              <Search className="w-3 h-3" />
              <span>{isScanning ? 'INFERRING...' : 'RE-SCAN (QIM)'}</span>
            </button>

            <button
              onClick={toggleBorder}
              className={`px-2.5 py-1 border text-[10px] uppercase font-bold tracking-wider transition-colors flex items-center gap-1 ${
                isNearBorder
                  ? 'bg-amber-500 text-black border-amber-400'
                  : 'bg-white/10 border-white/20 text-white hover:border-amber-400'
              }`}
            >
              <ShieldAlert className="w-3 h-3" />
              <span>{isNearBorder ? 'RESET BORDER' : 'TEST IMBL ALERT'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 pt-2.5 flex items-center justify-between text-[10px] text-white/50">
        <span className="flex items-center gap-1.5">
          <Compass className="w-3 h-3 text-cyan-400" />
          <span>INCOIS Satellite Potential Fishing Zone (PFZ) Radar</span>
        </span>
        <span className="text-white font-semibold">100% OFFLINE SQLITE PIPELINE</span>
      </div>
    </div>
  );
};

// ─── 01. Smart Traffic Visual Simulator ──────────────────────────────────────
const SmartTrafficVisual: React.FC = () => {
  const [density, setDensity] = useState<'low' | 'medium' | 'high'>('medium');
  const [isEmergencyActive, setIsEmergencyActive] = useState(false);
  const [timer, setTimer] = useState(24);
  const [detectedCount, setDetectedCount] = useState(18);

  useEffect(() => {
    if (isEmergencyActive) {
      setTimer(45);
      return;
    }
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 1 ? prev - 1 : density === 'high' ? 38 : density === 'medium' ? 24 : 12));
    }, 1000);
    return () => clearInterval(interval);
  }, [density, isEmergencyActive]);

  const handleDensityChange = (d: 'low' | 'medium' | 'high') => {
    sound.playClick();
    setDensity(d);
    setDetectedCount(d === 'low' ? 7 : d === 'medium' ? 18 : 34);
    setTimer(d === 'low' ? 12 : d === 'medium' ? 24 : 38);
  };

  const toggleEmergency = () => {
    sound.playClick();
    setIsEmergencyActive(!isEmergencyActive);
  };

  return (
    <div className="w-full h-full bg-[#0a0c10] text-[#e0e2ec] font-mono text-xs p-4 sm:p-6 flex flex-col justify-between select-none relative overflow-hidden border border-white/10">
      {/* Background HUD Grid */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#2457ff_1px,transparent_1px)] [background-size:16px_16px]"
      />

      {/* Top Telemetry Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 relative z-10">
        <div className="flex items-center gap-2">
          <span className={`w-2.5 h-2.5 rounded-full ${isEmergencyActive ? 'bg-red-500 animate-ping' : 'bg-emerald-500 animate-pulse'}`} />
          <span className="font-bold text-white tracking-wider text-[11px]">
            {isEmergencyActive ? 'EMERGENCY OVERRIDE // AMBULANCE CORRIDOR' : 'EDGE CV INFERENCE // RUNNING'}
          </span>
        </div>
        <span className="text-[10px] text-white/50">LATENCY: 138ms · FPS: 30</span>
      </div>

      {/* Live Intersection / CV Frame Simulator */}
      <div className="my-4 relative z-10 space-y-3">
        {/* Visual Road Matrix */}
        <div className="bg-black/60 border border-white/10 p-3 sm:p-4 rounded-sm space-y-3">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-white/60">LANE A // DENSITY ESTIMATION:</span>
            <span className="text-cobalt font-bold">{detectedCount} VEHICLES DETECTED</span>
          </div>

          {/* Dynamic Signal Light Indicator */}
          <div className="grid grid-cols-3 gap-2">
            <div className={`p-2.5 text-center border transition-colors ${!isEmergencyActive && timer > 5 ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300' : 'bg-white/5 border-white/10 text-white/40'}`}>
              <div className="text-[9px] uppercase">SIGNAL STATUS</div>
              <div className="text-base font-bold font-mono">{isEmergencyActive ? 'GREEN (PRIORITY)' : timer > 5 ? 'GREEN' : 'RED'}</div>
            </div>
            <div className="p-2.5 text-center border border-white/10 bg-white/5">
              <div className="text-[9px] uppercase text-white/50">CALCULATED TIMER</div>
              <div className="text-base font-bold text-white font-mono">{timer}s</div>
            </div>
            <div className={`p-2.5 text-center border transition-all ${isEmergencyActive ? 'bg-red-950/80 border-red-500 text-red-300 animate-pulse' : 'bg-white/5 border-white/10 text-white/40'}`}>
              <div className="text-[9px] uppercase">EMERGENCY BEACON</div>
              <div className="text-base font-bold font-mono">{isEmergencyActive ? 'TRIGGERED' : 'STANDBY'}</div>
            </div>
          </div>
        </div>

        {/* Interactive Controls */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-white/40 uppercase">DENSITY:</span>
            {(['low', 'medium', 'high'] as const).map((d) => (
              <button
                key={d}
                onClick={() => handleDensityChange(d)}
                className={`px-2 py-0.5 text-[10px] uppercase border transition-colors ${
                  density === d
                    ? 'bg-cobalt text-white border-cobalt font-bold'
                    : 'border-white/20 text-white/60 hover:border-white'
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          <button
            onClick={toggleEmergency}
            className={`px-3 py-1 text-[10px] uppercase font-bold border transition-all flex items-center gap-1.5 ${
              isEmergencyActive
                ? 'bg-red-600 text-white border-red-500 shadow-lg shadow-red-600/30'
                : 'bg-white/10 text-white border-white/30 hover:bg-white/20'
            }`}
          >
            <AlertTriangle className="w-3 h-3" />
            <span>{isEmergencyActive ? 'Reset Normal Grid' : 'Simulate Ambulance Route'}</span>
          </button>
        </div>
      </div>

      {/* Bottom Architecture Flow */}
      <div className="border-t border-white/10 pt-2.5 flex items-center justify-between text-[10px] text-white/50 relative z-10">
        <span className="flex items-center gap-1">
          <Cpu className="w-3 h-3 text-cobalt" />
          <span>YOLOv8 Edge Model + OpenCV</span>
        </span>
        <span className="text-emerald-400 font-semibold">40% CONGESTION REDUCTION</span>
      </div>
    </div>
  );
};

// ─── 02. FinTech Platform Visual Simulator ───────────────────────────────────
const FinTechVisual: React.FC = () => {
  const [selectedSms, setSelectedSms] = useState(0);

  const sampleAlerts = [
    {
      raw: 'HDFC Bank: Rs 2,450.00 spent on CARD xx4902 at RELIANCE RETAIL on 18-OCT-25. Avl Bal: Rs 48,290.00',
      merchant: 'Reliance Retail',
      category: 'Groceries & Living',
      amount: '₹2,450.00',
      type: 'DEBIT',
    },
    {
      raw: 'ICICI Bank: Acct xx9021 Credited with salary Rs 65,000.00 on 01-NOV-25 by NEFT-CORP PAY. Bal: Rs 1,12,400.00',
      merchant: 'Corporate Payroll',
      category: 'Primary Income',
      amount: '₹65,000.00',
      type: 'CREDIT',
    },
    {
      raw: 'SBI Alert: Rs 680.00 paid at SHELL FUEL STATION via UPI Ref: 4892019482. Available Bal: Rs 14,200.00',
      merchant: 'Shell Fuel Station',
      category: 'Transportation',
      amount: '₹680.00',
      type: 'DEBIT',
    },
  ];

  const current = sampleAlerts[selectedSms];

  return (
    <div className="w-full h-full bg-[#0d0e12] text-[#e0e2ec] font-mono text-xs p-4 sm:p-6 flex flex-col justify-between select-none relative overflow-hidden border border-white/10">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
          <span className="font-bold text-white text-[11px] tracking-wider">
            AUTOMATED SMS LEDGER PARSER
          </span>
        </div>
        <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 border border-emerald-600/50">
          GOLD: ₹7,850/g (+1.2%)
        </span>
      </div>

      {/* Main Parser Interactive Playground */}
      <div className="space-y-3 my-3">
        {/* Sample SMS Selector */}
        <div className="space-y-1.5">
          <span className="text-[10px] text-white/50 uppercase">SELECT INCOMING BANK SMS STREAM:</span>
          <div className="grid grid-cols-3 gap-1.5">
            {sampleAlerts.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  sound.playClick();
                  setSelectedSms(idx);
                }}
                className={`p-1.5 text-left border text-[10px] truncate transition-colors ${
                  selectedSms === idx
                    ? 'border-cobalt bg-cobalt/20 text-white font-bold'
                    : 'border-white/10 bg-white/5 text-white/60 hover:border-white/30'
                }`}
              >
                SMS #{idx + 1} ({item.type})
              </button>
            ))}
          </div>
        </div>

        {/* Raw Ingest Frame */}
        <div className="p-2.5 bg-black/60 border border-white/10 text-[10px] text-white/80 leading-relaxed rounded-sm font-sans">
          <span className="font-mono text-cobalt font-bold uppercase block text-[9px] mb-1">
            INGESTED SMS PAYLOAD:
          </span>
          &ldquo;{current.raw}&rdquo;
        </div>

        {/* Real-time Parsed Ledger Output */}
        <div className="grid grid-cols-3 gap-2 bg-white/5 p-3 border border-white/10 rounded-sm">
          <div>
            <div className="text-[9px] uppercase text-white/50">MERCHANT</div>
            <div className="text-xs font-bold text-white truncate">{current.merchant}</div>
          </div>
          <div>
            <div className="text-[9px] uppercase text-white/50">CATEGORY</div>
            <div className="text-xs font-semibold text-cobalt truncate">{current.category}</div>
          </div>
          <div>
            <div className="text-[9px] uppercase text-white/50">PARSED AMOUNT</div>
            <div className={`text-xs font-bold ${current.type === 'CREDIT' ? 'text-emerald-400' : 'text-amber-400'}`}>
              {current.amount}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 pt-2.5 flex items-center justify-between text-[10px] text-white/50">
        <span className="flex items-center gap-1">
          <Database className="w-3 h-3 text-cobalt" />
          <span>Regex Normalization + Cashflow Analytics</span>
        </span>
        <span className="text-white font-semibold">90%+ MANUAL ZERO-ENTRY</span>
      </div>
    </div>
  );
};

// ─── 03. SpecAmp Visual Simulator ────────────────────────────────────────────
const SpecAmpVisual: React.FC = () => {
  const [selectedPart, setSelectedPart] = useState(0);

  const parts = [
    {
      mpn: 'RC0402FR-07100KL',
      name: '100 kΩ Chip Resistor (0402)',
      normalized: '100.0 kΩ ±1% · 0.063W · Thick Film',
      sources: [
        { name: 'DigiKey', val: '100 kOhms', match: true },
        { name: 'Mouser', val: '100,000 Ω', match: true },
        { name: 'Octopart', val: '100k Ohm', match: true },
      ],
      confidence: '100% CONFIRMED',
    },
    {
      mpn: 'CL10A106KP8NNNC',
      name: '10 µF Ceramic Capacitor (0603)',
      normalized: '10.0 µF · 10V · X5R · ±10%',
      sources: [
        { name: 'DigiKey', val: '10 µF', match: true },
        { name: 'Mouser', val: '10000 nF', match: true },
        { name: 'Octopart', val: '10000000 pF', match: true },
      ],
      confidence: '100% CONFIRMED (UNITS NORMALIZED)',
    },
  ];

  const current = parts[selectedPart];

  return (
    <div className="w-full h-full bg-[#0a0d14] text-[#e0e2ec] font-mono text-xs p-4 sm:p-6 flex flex-col justify-between select-none relative overflow-hidden border border-white/10">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <Search className="w-3.5 h-3.5 text-cobalt" />
          <span className="font-bold text-white text-[11px] tracking-wider">
            MULTI-SOURCE SPEC VALIDATION ENGINE
          </span>
        </div>
        <span className="text-[10px] text-emerald-400 font-semibold">
          3 SOURCES SYNCED
        </span>
      </div>

      {/* Main Spec Normalizer */}
      <div className="space-y-3 my-3">
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-white/50 uppercase">TEST MPN:</span>
          {parts.map((p, idx) => (
            <button
              key={p.mpn}
              onClick={() => {
                sound.playClick();
                setSelectedPart(idx);
              }}
              className={`px-2 py-0.5 text-[10px] uppercase border transition-colors ${
                selectedPart === idx
                  ? 'bg-cobalt text-white border-cobalt font-bold'
                  : 'border-white/10 bg-white/5 text-white/60 hover:border-white/30'
              }`}
            >
              {p.mpn.split('-')[0]}
            </button>
          ))}
        </div>

        {/* Normalized Truth Output */}
        <div className="bg-black/60 p-3 border border-white/10 rounded-sm space-y-1">
          <div className="flex items-center justify-between text-[10px]">
            <span className="text-white/50">TARGET COMPONENT:</span>
            <span className="text-white font-bold">{current.mpn}</span>
          </div>
          <div className="text-sm font-display font-bold text-emerald-400">
            {current.normalized}
          </div>
        </div>

        {/* Source Discrepancy Breakdown */}
        <div className="space-y-1">
          <span className="text-[10px] text-white/50 uppercase block">
            DETERMINISTIC UNIT CROSS-VALIDATION:
          </span>
          <div className="grid grid-cols-3 gap-1.5 text-[10px]">
            {current.sources.map((s) => (
              <div key={s.name} className="p-2 bg-white/5 border border-white/10">
                <div className="text-white/40 font-semibold">{s.name}</div>
                <div className="text-white font-mono mt-0.5 truncate">{s.val}</div>
                <div className="text-emerald-400 text-[9px] mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-2.5 h-2.5" />
                  <span>Normalized</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 pt-2.5 flex items-center justify-between text-[10px] text-white/50">
        <span className="flex items-center gap-1">
          <Layers className="w-3 h-3 text-cobalt" />
          <span>LLM JSON Extraction + Unit Solver</span>
        </span>
        <span className="text-emerald-400 font-semibold">{current.confidence}</span>
      </div>
    </div>
  );
};

// ─── 04. ApproveX Visual Simulator ───────────────────────────────────────────
const ApproveXVisual: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(2);

  const steps = [
    { title: 'Student Requisition', status: 'Submitted', role: 'Student' },
    { title: 'Faculty Advisor Review', status: 'Verified', role: 'Faculty' },
    { title: 'HOD Department Approval', status: 'Approved', role: 'HOD' },
    { title: 'Dean Office Clearance', status: 'Final Signoff', role: 'Dean' },
  ];

  const advanceStep = () => {
    sound.playClick();
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="w-full h-full bg-[#0a0b10] text-[#e0e2ec] font-mono text-xs p-4 sm:p-6 flex flex-col justify-between select-none relative overflow-hidden border border-white/10">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-cobalt" />
          <span className="font-bold text-white text-[11px] tracking-wider">
            RBAC WORKFLOW AUTOMATION ENGINE
          </span>
        </div>
        <span className="text-[10px] text-white/60 font-semibold">
          APP-ID: #LICET-OD-2024-918
        </span>
      </div>

      {/* 4-Tier Interactive Workflow Visualizer */}
      <div className="space-y-3 my-3">
        <div className="space-y-2">
          {steps.map((s, idx) => {
            const isDone = idx <= currentStep;
            const isCurrent = idx === currentStep;
            return (
              <div
                key={s.title}
                className={`p-2 sm:p-2.5 border transition-all flex items-center justify-between ${
                  isCurrent
                    ? 'border-cobalt bg-cobalt/20 text-white shadow-md'
                    : isDone
                    ? 'border-emerald-500/40 bg-emerald-950/20 text-emerald-200'
                    : 'border-white/10 bg-white/5 text-white/40'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${isDone ? 'bg-emerald-500 text-black' : 'bg-white/10 text-white'}`}>
                    {idx + 1}
                  </div>
                  <div>
                    <div className="font-bold text-[11px]">{s.title}</div>
                    <div className="text-[9px] text-white/50 font-sans">{s.role} Authorization Tier</div>
                  </div>
                </div>
                <div className="font-mono text-[10px] uppercase font-bold">
                  {isDone ? 'COMPLETED' : 'PENDING'}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Trigger */}
        <div className="pt-1 flex items-center justify-between">
          <button
            onClick={advanceStep}
            className="px-3 py-1 bg-ink text-canvas border border-white/20 hover:bg-cobalt text-[10px] uppercase font-bold tracking-wider transition-colors flex items-center gap-1.5"
          >
            <Play className="w-3 h-3" />
            <span>Simulate Next Approval Step</span>
          </button>
          <span className="text-[10px] text-emerald-400 font-semibold">
            {currentStep === steps.length - 1 ? 'ALL TIERS CLEARED' : `STEP ${currentStep + 1} OF 4 ACTIVE`}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 pt-2.5 flex items-center justify-between text-[10px] text-white/50">
        <span className="flex items-center gap-1">
          <Server className="w-3 h-3 text-cobalt" />
          <span>Java & MySQL Relational Audit Trails</span>
        </span>
        <span className="text-white font-semibold">100% PAPERLESS DEPLOYMENT</span>
      </div>
    </div>
  );
};

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ id, projectId, className }) => {
  const targetId = projectId || id || 'aqualens';
  return (
    <div className={`w-full h-full ${className || ''}`}>
      {(() => {
        switch (targetId) {
          case 'aqualens':
            return <AquaLensVisual />;
          case 'smart-traffic':
            return <SmartTrafficVisual />;
          case 'fintech-platform':
            return <FinTechVisual />;
          case 'specamp':
            return <SpecAmpVisual />;
          case 'approvex':
            return <ApproveXVisual />;
          default:
            return <AquaLensVisual />;
        }
      })()}
    </div>
  );
};
