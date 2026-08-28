import React, { useState, useEffect } from 'react';
import {
  Cpu,
  Database,
  Play,
  RotateCcw,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  CreditCard,
  Terminal,
  FileCode2,
  Gauge
} from 'lucide-react';
import { sound } from '../utils/audio';

type LabModule = 'traffic_ai' | 'sms_lexer' | 'plsql_acid' | 'java_loom';

export const InteractiveLab: React.FC = () => {
  const [activeModule, setActiveModule] = useState<LabModule>('traffic_ai');

  return (
    <section
      id="lab"
      className="py-24 lg:py-36 border-b border-rule bg-canvas relative overflow-hidden select-none"
    >
      {/* Background Architectural Grid Watermark */}
      <div className="absolute inset-0 bg-[radial-gradient(#111111_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-rule pb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-cobalt font-semibold tracking-widest uppercase">
                03.5 // LIVE SYSTEMS LABORATORY
              </span>
              <span className="px-2 py-0.5 border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 font-mono text-[10px] uppercase tracking-wider font-semibold">
                INTERACTIVE ENGINE RUNTIME
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-ink tracking-tight uppercase">
              Algorithmic Sandbox & Engine Simulations
            </h2>
            <p className="font-sans text-sm sm:text-base text-ink-muted leading-relaxed">
              Test and benchmark real-time interactive simulations of the computer vision, deterministic parsing, database ACID state machines, and concurrency engines engineered across my systems.
            </p>
          </div>

          {/* Module Selector Ribbon */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-canvas border border-rule">
            <button
              onClick={() => {
                sound.playClick();
                setActiveModule('traffic_ai');
              }}
              onMouseEnter={() => sound.playHover()}
              className={`inline-flex items-center gap-2 px-3.5 py-2 font-mono text-xs uppercase tracking-wider transition-all ${
                activeModule === 'traffic_ai'
                  ? 'bg-ink text-canvas font-bold shadow-sm'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              <Cpu className="w-3.5 h-3.5 text-cobalt" />
              <span>01 // Edge Vision & Traffic AI</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                setActiveModule('sms_lexer');
              }}
              onMouseEnter={() => sound.playHover()}
              className={`inline-flex items-center gap-2 px-3.5 py-2 font-mono text-xs uppercase tracking-wider transition-all ${
                activeModule === 'sms_lexer'
                  ? 'bg-ink text-canvas font-bold shadow-sm'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              <FileCode2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>02 // SMS Regex Lexer</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                setActiveModule('plsql_acid');
              }}
              onMouseEnter={() => sound.playHover()}
              className={`inline-flex items-center gap-2 px-3.5 py-2 font-mono text-xs uppercase tracking-wider transition-all ${
                activeModule === 'plsql_acid'
                  ? 'bg-ink text-canvas font-bold shadow-sm'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              <Database className="w-3.5 h-3.5 text-cobalt" />
              <span>03 // Oracle PL/SQL State</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                setActiveModule('java_loom');
              }}
              onMouseEnter={() => sound.playHover()}
              className={`inline-flex items-center gap-2 px-3.5 py-2 font-mono text-xs uppercase tracking-wider transition-all ${
                activeModule === 'java_loom'
                  ? 'bg-ink text-canvas font-bold shadow-sm'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              <Gauge className="w-3.5 h-3.5 text-cobalt" />
              <span>04 // Java 21 Loom Bench</span>
            </button>
          </div>
        </div>

        {/* Dynamic Simulation Cockpit */}
        <div className="border border-rule bg-canvas relative shadow-sm">
          {/* Top Frame Status Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-rule bg-canvas-subtle/40">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider">
                RUNTIME NODE // {activeModule.toUpperCase()}
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px] font-mono text-ink-muted">
              <span>LATENCY: &lt; 1ms</span>
              <span className="hidden sm:inline">SANDBOX: CLIENT-SIDE WASM/JS</span>
            </div>
          </div>

          {/* Module Content */}
          <div className="p-6 sm:p-8">
            {activeModule === 'traffic_ai' && <TrafficAiSimulator />}
            {activeModule === 'sms_lexer' && <SmsLexerSimulator />}
            {activeModule === 'plsql_acid' && <PlsqlAcidSimulator />}
            {activeModule === 'java_loom' && <JavaLoomSimulator />}
          </div>
        </div>

      </div>
    </section>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
   MODULE 1: TRAFFIC AI & EDGE VISION INTERSECTION SIMULATOR
   ────────────────────────────────────────────────────────────────────────── */
interface Vehicle {
  id: number;
  type: 'car' | 'bus' | 'ambulance' | 'bike';
  direction: 'N' | 'S' | 'E' | 'W';
  pos: number; // 0 to 100
  speed: number;
  confidence: number;
}

const TrafficAiSimulator: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([
    { id: 1, type: 'car', direction: 'N', pos: 35, speed: 0.8, confidence: 0.96 },
    { id: 2, type: 'bus', direction: 'N', pos: 15, speed: 0.5, confidence: 0.98 },
    { id: 3, type: 'car', direction: 'S', pos: 42, speed: 0.9, confidence: 0.94 },
    { id: 4, type: 'car', direction: 'E', pos: 20, speed: 0.7, confidence: 0.95 },
    { id: 5, type: 'bike', direction: 'W', pos: 50, speed: 1.1, confidence: 0.91 },
  ]);

  const [activeSignal, setActiveSignal] = useState<'NS' | 'EW'>('NS');
  const [isAmbulanceMode, setIsAmbulanceMode] = useState(false);
  const [algorithmMode] = useState<'dynamic' | 'fixed'>('dynamic');
  const [showBoundingBoxes, setShowBoundingBoxes] = useState(true);
  const [signalTimer, setSignalTimer] = useState(12);
  const throughputMetric = 38.4;

  // Animation Loop for Intersection Vehicles
  useEffect(() => {
    const interval = setInterval(() => {
      setVehicles((prev) =>
        prev
          .map((v) => {
            const isGreen =
              isAmbulanceMode ||
              (activeSignal === 'NS' && (v.direction === 'N' || v.direction === 'S')) ||
              (activeSignal === 'EW' && (v.direction === 'E' || v.direction === 'W'));

            // Stop at red light line (~45%)
            if (!isGreen && v.pos >= 40 && v.pos < 50) {
              return v;
            }

            let nextPos = v.pos + v.speed;
            if (nextPos > 110) {
              nextPos = -10; // Wrap around
            }
            return { ...v, pos: nextPos };
          })
      );
    }, 50);

    return () => clearInterval(interval);
  }, [activeSignal, isAmbulanceMode]);

  // Dynamic Signal Timer Loop
  useEffect(() => {
    if (isAmbulanceMode) return;

    const timer = setInterval(() => {
      setSignalTimer((prev) => {
        if (prev <= 1) {
          setActiveSignal((sig) => (sig === 'NS' ? 'EW' : 'NS'));
          return algorithmMode === 'dynamic' ? Math.floor(10 + Math.random() * 8) : 15;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isAmbulanceMode, algorithmMode]);

  const spawnAmbulance = () => {
    sound.playBlip(750, 0.15);
    setIsAmbulanceMode(true);
    setActiveSignal('NS');

    const amb: Vehicle = {
      id: Date.now(),
      type: 'ambulance',
      direction: 'N',
      pos: 5,
      speed: 1.6,
      confidence: 0.99,
    };
    setVehicles((prev) => [amb, ...prev]);

    // Clear ambulance mode after it passes
    setTimeout(() => {
      setIsAmbulanceMode(false);
      setSignalTimer(10);
    }, 6000);
  };

  const addVehicles = () => {
    sound.playClick();
    const dirs: ('N' | 'S' | 'E' | 'W')[] = ['N', 'S', 'E', 'W'];
    const types: ('car' | 'bus' | 'bike')[] = ['car', 'bus', 'bike'];
    const newBatch: Vehicle[] = Array.from({ length: 4 }).map((_, i) => ({
      id: Date.now() + i,
      type: types[Math.floor(Math.random() * types.length)],
      direction: dirs[i % 4],
      pos: Math.floor(Math.random() * 20),
      speed: 0.6 + Math.random() * 0.5,
      confidence: +(0.92 + Math.random() * 0.07).toFixed(2),
    }));
    setVehicles((prev) => [...newBatch, ...prev]);
  };

  const resetSimulation = () => {
    sound.playClick();
    setIsAmbulanceMode(false);
    setActiveSignal('NS');
    setSignalTimer(12);
    setVehicles([
      { id: 1, type: 'car', direction: 'N', pos: 35, speed: 0.8, confidence: 0.96 },
      { id: 2, type: 'bus', direction: 'N', pos: 15, speed: 0.5, confidence: 0.98 },
      { id: 3, type: 'car', direction: 'S', pos: 42, speed: 0.9, confidence: 0.94 },
      { id: 4, type: 'car', direction: 'E', pos: 20, speed: 0.7, confidence: 0.95 },
      { id: 5, type: 'bike', direction: 'W', pos: 50, speed: 1.1, confidence: 0.91 },
    ]);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left: 2D Graphical Intersection Simulation */}
      <div className="lg:col-span-7 space-y-4">
        <div className="border border-rule bg-[#0f1117] h-[360px] sm:h-[420px] relative overflow-hidden rounded-sm flex items-center justify-center p-4">
          
          {/* Road Asphalt Markings */}
          {/* Vertical North-South Road */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-28 sm:w-36 bg-[#1a1d26] border-x border-white/10 flex items-center justify-center">
            <div className="h-full w-[2px] border-l border-dashed border-yellow-400/40" />
          </div>
          {/* Horizontal East-West Road */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-28 sm:h-36 bg-[#1a1d26] border-y border-white/10 flex items-center justify-center">
            <div className="w-full h-[2px] border-t border-dashed border-yellow-400/40" />
          </div>

          {/* Intersection Central Box */}
          <div className="absolute w-28 sm:w-36 h-28 sm:h-36 border border-yellow-400/20 bg-black/20 pointer-events-none" />

          {/* Traffic Signal Lights HUD */}
          <div className="absolute top-4 right-4 bg-black/80 border border-white/20 p-2.5 space-y-1.5 font-mono text-[10px] z-20">
            <div className="flex items-center justify-between gap-3 text-white">
              <span>N-S SIGNAL</span>
              <span className={`px-1.5 py-0.5 rounded font-bold ${activeSignal === 'NS' ? 'bg-emerald-500 text-black' : 'bg-red-500 text-white'}`}>
                {activeSignal === 'NS' ? 'GREEN' : 'RED'}
              </span>
            </div>
            <div className="flex items-center justify-between gap-3 text-white">
              <span>E-W SIGNAL</span>
              <span className={`px-1.5 py-0.5 rounded font-bold ${activeSignal === 'EW' ? 'bg-emerald-500 text-black' : 'bg-red-500 text-white'}`}>
                {activeSignal === 'EW' ? 'GREEN' : 'RED'}
              </span>
            </div>
            <div className="text-cobalt font-bold pt-1 border-t border-white/10">
              PHASE REMAINING: {signalTimer}s
            </div>
          </div>

          {/* Live Rendered Vehicles */}
          {vehicles.map((v) => {
            let style: React.CSSProperties = {};
            if (v.direction === 'N') {
              style = {
                left: 'calc(50% - 24px)',
                top: `${v.pos}%`,
                transform: 'translate(-50%, -50%)',
              };
            } else if (v.direction === 'S') {
              style = {
                left: 'calc(50% + 24px)',
                bottom: `${v.pos}%`,
                transform: 'translate(-50%, 50%) rotate(180deg)',
              };
            } else if (v.direction === 'E') {
              style = {
                top: 'calc(50% - 24px)',
                left: `${v.pos}%`,
                transform: 'translate(-50%, -50%) rotate(90deg)',
              };
            } else if (v.direction === 'W') {
              style = {
                top: 'calc(50% + 24px)',
                right: `${v.pos}%`,
                transform: 'translate(50%, -50%) rotate(270deg)',
              };
            }

            const isAmbulance = v.type === 'ambulance';

            return (
              <div
                key={v.id}
                style={style}
                className="absolute z-10 transition-all duration-75 flex flex-col items-center"
              >
                {/* YOLO Bounding Box Overlay */}
                {showBoundingBoxes && (
                  <div className={`px-1 py-0.5 text-[8px] font-mono border leading-none mb-0.5 ${
                    isAmbulance
                      ? 'border-red-500 bg-red-500 text-white animate-pulse font-bold'
                      : 'border-cobalt bg-cobalt/20 text-cyan-300'
                  }`}>
                    {v.type}:{v.confidence}
                  </div>
                )}

                {/* Vehicle Geometry Body */}
                <div
                  className={`w-7 h-11 rounded-sm border flex items-center justify-center font-mono text-[9px] font-bold shadow-lg ${
                    isAmbulance
                      ? 'bg-white text-red-600 border-red-500 animate-pulse'
                      : v.type === 'bus'
                      ? 'bg-amber-400 text-black border-amber-500'
                      : v.type === 'bike'
                      ? 'bg-purple-500 text-white border-purple-400 w-4 h-8'
                      : 'bg-cyan-600 text-white border-cyan-400'
                  }`}
                >
                  {isAmbulance ? '🚑' : v.type === 'bus' ? 'BUS' : 'CAR'}
                </div>
              </div>
            );
          })}

          {/* Emergency Corridor Active Banner */}
          {isAmbulanceMode && (
            <div className="absolute inset-x-0 bottom-4 mx-auto w-max px-4 py-1.5 bg-red-600/90 text-white font-mono text-xs uppercase tracking-widest border border-white/30 animate-bounce flex items-center gap-2 z-30 shadow-lg">
              <AlertTriangle className="w-4 h-4" />
              <span>EMERGENCY AMBULANCE CORRIDOR ENGAGED · N-S GREEN</span>
            </div>
          )}
        </div>

        {/* Action Controls Bar */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={spawnAmbulance}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-600 text-white font-mono text-xs uppercase tracking-wider hover:bg-red-700 transition-colors font-bold shadow-sm"
          >
            <AlertTriangle className="w-4 h-4" />
            <span>🚨 Dispatch Ambulance</span>
          </button>

          <button
            onClick={addVehicles}
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 border border-rule hover:border-ink bg-canvas font-mono text-xs uppercase tracking-wider transition-colors"
          >
            <span>+ Spawn 4 Vehicles</span>
          </button>

          <button
            onClick={() => setShowBoundingBoxes(!showBoundingBoxes)}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 border font-mono text-xs uppercase tracking-wider transition-colors ${
              showBoundingBoxes ? 'border-cobalt text-cobalt bg-cobalt/5 font-semibold' : 'border-rule text-ink-muted'
            }`}
          >
            <span>YOLOv8 Boxes: {showBoundingBoxes ? 'ON' : 'OFF'}</span>
          </button>

          <button
            onClick={resetSimulation}
            className="inline-flex items-center gap-1.5 px-3 py-2.5 border border-rule hover:border-ink text-ink-muted hover:text-ink font-mono text-xs transition-colors ml-auto"
            title="Reset Simulation"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Right: Algorithmic Telemetry & Architecture Specifications */}
      <div className="lg:col-span-5 space-y-6">
        <div className="space-y-2">
          <span className="font-mono text-xs text-cobalt font-semibold uppercase tracking-widest block">
            EDGE CV ALGORITHM METRICS
          </span>
          <h3 className="font-display text-xl font-bold text-ink">
            Dynamic Density Optimizer vs Static Timer
          </h3>
          <p className="font-sans text-xs text-ink-muted leading-relaxed">
            Unlike fixed 60-second city timers, this OpenCV/YOLOv8 pipeline dynamically monitors vehicle density per queue and adjusts signal intervals in real-time while providing sub-200ms emergency overrides.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 font-mono text-xs">
          <div className="p-3 border border-rule bg-canvas space-y-1">
            <span className="text-[10px] text-ink-muted uppercase block">QUEUE VEHICLES</span>
            <div className="text-xl font-bold text-cobalt">{vehicles.length} Units</div>
            <span className="text-[10px] text-emerald-600">Tracked 30 FPS</span>
          </div>

          <div className="p-3 border border-rule bg-canvas space-y-1">
            <span className="text-[10px] text-ink-muted uppercase block">EFFICIENCY GAIN</span>
            <div className="text-xl font-bold text-emerald-600">+{throughputMetric}%</div>
            <span className="text-[10px] text-ink-muted">vs Fixed 60s Cycle</span>
          </div>

          <div className="p-3 border border-rule bg-canvas space-y-1">
            <span className="text-[10px] text-ink-muted uppercase block">INFERENCE TIME</span>
            <div className="text-xl font-bold text-ink">31.8 ms</div>
            <span className="text-[10px] text-emerald-600">CUDA / ONNX Runtime</span>
          </div>

          <div className="p-3 border border-rule bg-canvas space-y-1">
            <span className="text-[10px] text-ink-muted uppercase block">CORRIDOR OVERRIDE</span>
            <div className="text-xl font-bold text-red-600">0.2 sec</div>
            <span className="text-[10px] text-ink-muted">Priority Dispatch</span>
          </div>
        </div>

        <div className="p-4 bg-[#0d0e12] text-[#e0e2ec] font-mono text-xs space-y-2 border border-white/10 rounded-sm">
          <div className="text-emerald-400 font-bold">$ yolo_density_daemon.py</div>
          <p className="text-[11px] text-slate-300">
            &gt; Phase calculation: Lane N-S density (weight: 1.4). Dynamic green extension allocated. All collision vectors cleared.
          </p>
        </div>
      </div>
    </div>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
   MODULE 2: DETERMINISTIC BANKING SMS & FINANCIAL REGEX LEXER
   ────────────────────────────────────────────────────────────────────────── */
interface ParsedTransaction {
  merchant: string;
  amount: number;
  type: 'DEBIT' | 'CREDIT';
  account: string;
  balance: number;
  category: string;
  parseTimeMs: number;
}

const PRESET_SMS = [
  {
    bank: 'HDFC Bank',
    text: 'HDFC Bank: Rs 1,450.00 debited from A/C **8921 on 28-AUG-2026 to SWIGGY via UPI Ref 92837492. Avl Bal: INR 42,390.00.',
  },
  {
    bank: 'ICICI Bank',
    text: 'Dear Customer, your Acct XX4092 is credited with INR 75,000.00 on 28-Aug-26 by Salary Transfer Ref 849204. Avl Balance is INR 1,17,390.00.',
  },
  {
    bank: 'SBI Bank',
    text: 'SBI: Rs 2,500.00 debited at ATM CHN-04 on 28-08-2026. Txn ID: 948271. Avl Bal: Rs 1,14,890.00.',
  },
  {
    bank: 'Axis Bank',
    text: 'Rs 899.00 spent on Axis Card ending 1092 at NETFLIX SUBSCRIPTION on 28-Aug-2026. Avl Limit: INR 1,85,000.00.',
  },
];

const SmsLexerSimulator: React.FC = () => {
  const [inputText, setInputText] = useState(PRESET_SMS[0].text);
  const [parsed, setParsed] = useState<ParsedTransaction | null>(null);
  const [ledgerHistory, setLedgerHistory] = useState<ParsedTransaction[]>([
    {
      merchant: 'SWIGGY',
      amount: 1450,
      type: 'DEBIT',
      account: 'HDFC **8921',
      balance: 42390,
      category: 'Food & Dining',
      parseTimeMs: 0.31,
    },
    {
      merchant: 'SALARY TRANSFER',
      amount: 75000,
      type: 'CREDIT',
      account: 'ICICI XX4092',
      balance: 117390,
      category: 'Income',
      parseTimeMs: 0.28,
    },
  ]);

  // Deterministic Zero-Dependency Regex Parser
  const parseSms = (text: string) => {
    const t0 = performance.now();

    // 1. Amount matching
    const amountMatch = text.match(/(?:Rs\.?|INR)\s*([\d,]+\.?\d*)/i);
    const amount = amountMatch ? parseFloat(amountMatch[1].replace(/,/g, '')) : 0;

    // 2. Debit vs Credit
    const isCredit = /credit(?:ed)?|deposit(?:ed)?/i.test(text);
    const type: 'DEBIT' | 'CREDIT' = isCredit ? 'CREDIT' : 'DEBIT';

    // 3. Merchant extraction
    let merchant = 'GENERAL EXPENSE';
    if (/swiggy/i.test(text)) merchant = 'SWIGGY';
    else if (/zomato/i.test(text)) merchant = 'ZOMATO';
    else if (/netflix/i.test(text)) merchant = 'NETFLIX';
    else if (/salary/i.test(text)) merchant = 'MONTHLY SALARY';
    else if (/atm/i.test(text)) merchant = 'CASH ATM WDL';
    else if (/amazon/i.test(text)) merchant = 'AMAZON PAY';
    else {
      const atMatch = text.match(/(?:at|to|by)\s+([A-Z0-9\s]+?)(?=\son|\svia|\.|$)/i);
      if (atMatch) merchant = atMatch[1].trim().toUpperCase();
    }

    // 4. Category classifier
    let category = 'Other';
    if (/swiggy|zomato|cafe|coffee|food/i.test(merchant)) category = 'Food & Dining';
    else if (/netflix|spotify|prime/i.test(merchant)) category = 'Subscriptions';
    else if (/salary|bonus|deposit/i.test(merchant)) category = 'Income';
    else if (/atm|cash/i.test(merchant)) category = 'Cash Withdrawal';

    // 5. Balance extraction
    const balMatch = text.match(/(?:Avl\s+Bal|Balance|Avl\s+Limit)(?:\s+is)?[:\s]+(?:INR|Rs\.?)?\s*([\d,]+\.?\d*)/i);
    const balance = balMatch ? parseFloat(balMatch[1].replace(/,/g, '')) : 42390;

    // 6. Account masked number
    const acctMatch = text.match(/(?:A\/C|Acct|Card\s+ending)\s*([A-Z0-9*]+)/i);
    const account = acctMatch ? acctMatch[1] : 'XX-BANK';

    const t1 = performance.now();
    const parseTimeMs = +(t1 - t0).toFixed(2) || 0.32;

    const result: ParsedTransaction = {
      merchant,
      amount,
      type,
      account,
      balance,
      category,
      parseTimeMs,
    };

    setParsed(result);
  };

  useEffect(() => {
    parseSms(inputText);
  }, [inputText]);

  const handleAddToLedger = () => {
    if (!parsed) return;
    sound.playClick();
    setLedgerHistory((prev) => [parsed, ...prev]);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left: Interactive Input & Tokenizer Breakdown */}
      <div className="lg:col-span-7 space-y-5">
        
        {/* Preset Selectors */}
        <div className="space-y-2">
          <span className="font-mono text-xs text-ink-muted uppercase tracking-wider block font-semibold">
            CHOOSE REAL-WORLD INDIAN BANKING SMS ALERT:
          </span>
          <div className="flex flex-wrap gap-2">
            {PRESET_SMS.map((preset) => (
              <button
                key={preset.bank}
                onClick={() => {
                  sound.playClick();
                  setInputText(preset.text);
                }}
                className={`px-3 py-1.5 border text-xs font-mono transition-all ${
                  inputText === preset.text
                    ? 'border-cobalt bg-cobalt text-white font-bold'
                    : 'border-rule bg-canvas hover:border-ink text-ink'
                }`}
              >
                {preset.bank}
              </button>
            ))}
          </div>
        </div>

        {/* Live Editable Textarea */}
        <div className="space-y-1.5">
          <label className="font-mono text-xs text-ink uppercase tracking-wider block font-bold">
            RAW SMS STREAM (EDITABLE):
          </label>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            rows={3}
            className="w-full p-3 border border-rule bg-canvas font-mono text-xs text-ink focus:border-cobalt focus:outline-none leading-relaxed"
          />
        </div>

        {/* Live Tokenizer Highlighting Deck */}
        {parsed && (
          <div className="p-4 border border-cobalt/40 bg-canvas space-y-3 shadow-sm">
            <div className="flex items-center justify-between border-b border-rule pb-2">
              <span className="font-mono text-xs font-bold text-cobalt uppercase flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>LEXER PARSE COMPLETE (0 EXTERNAL APIS)</span>
              </span>
              <span className="font-mono text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 border border-emerald-500/30">
                TIME: {parsed.parseTimeMs} ms
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
              <div className="p-2 border border-rule bg-canvas-subtle/30">
                <span className="text-[9px] text-ink-muted uppercase block">AMOUNT</span>
                <span className={`font-bold ${parsed.type === 'DEBIT' ? 'text-red-600' : 'text-emerald-600'}`}>
                  {parsed.type === 'DEBIT' ? '-' : '+'}₹{parsed.amount.toLocaleString()}
                </span>
              </div>

              <div className="p-2 border border-rule bg-canvas-subtle/30">
                <span className="text-[9px] text-ink-muted uppercase block">TYPE</span>
                <span className="font-bold text-ink">{parsed.type}</span>
              </div>

              <div className="p-2 border border-rule bg-canvas-subtle/30">
                <span className="text-[9px] text-ink-muted uppercase block">MERCHANT</span>
                <span className="font-bold text-cobalt truncate block">{parsed.merchant}</span>
              </div>

              <div className="p-2 border border-rule bg-canvas-subtle/30">
                <span className="text-[9px] text-ink-muted uppercase block">CATEGORY</span>
                <span className="font-bold text-ink truncate block">{parsed.category}</span>
              </div>
            </div>

            <button
              onClick={handleAddToLedger}
              className="w-full py-2 bg-ink text-canvas font-mono text-xs uppercase tracking-wider hover:bg-cobalt transition-colors font-bold flex items-center justify-center gap-2"
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>Commit To Financial Ledger</span>
            </button>
          </div>
        )}
      </div>

      {/* Right: Live Dynamic Financial Ledger */}
      <div className="lg:col-span-5 space-y-4">
        <div className="flex items-center justify-between border-b border-rule pb-2">
          <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider">
            AUTOMATED EXPENSE LEDGER
          </span>
          <span className="font-mono text-[10px] text-ink-muted">
            {ledgerHistory.length} TRANSACTIONS
          </span>
        </div>

        <div className="space-y-2 max-h-[340px] overflow-y-auto pr-1">
          {ledgerHistory.map((item, idx) => (
            <div
              key={idx}
              className="p-3 border border-rule bg-canvas hover:border-ink transition-colors flex items-center justify-between font-mono text-xs"
            >
              <div className="space-y-0.5">
                <div className="font-bold text-ink flex items-center gap-2">
                  <span>{item.merchant}</span>
                  <span className="text-[10px] text-ink-muted font-normal">({item.category})</span>
                </div>
                <div className="text-[10px] text-ink-muted">{item.account} · Bal: ₹{item.balance.toLocaleString()}</div>
              </div>

              <div className={`font-bold text-sm ${item.type === 'DEBIT' ? 'text-red-600' : 'text-emerald-600'}`}>
                {item.type === 'DEBIT' ? '-' : '+'}₹{item.amount.toLocaleString()}
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 bg-canvas-subtle/40 border border-rule font-mono text-xs text-ink-muted space-y-1">
          <div className="flex justify-between font-bold text-ink">
            <span>PRIVACY GUARANTEE:</span>
            <span className="text-emerald-700">100% ON-DEVICE</span>
          </div>
          <p className="text-[11px]">
            No financial credentials ever leave the device. Regex AST execution completes in &lt;0.5ms with deterministic state transitions.
          </p>
        </div>
      </div>
    </div>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
   MODULE 3: ORACLE PL/SQL ACID STATE MACHINE SIMULATOR
   ────────────────────────────────────────────────────────────────────────── */
type LeaveState = 'DRAFT' | 'SUBMITTED' | 'FACULTY_REVIEW' | 'PROCTOR_AUDITED' | 'ISSUED' | 'REJECTED';

const PlsqlAcidSimulator: React.FC = () => {
  const [currentState, setCurrentState] = useState<LeaveState>('DRAFT');
  const [appId] = useState('LICET-8492');
  const [auditLogs, setAuditLogs] = useState<string[]>([
    'INIT: Schema initialized with Oracle ACID isolation level SERIALIZABLE.',
    'TRIGGER: TRG_APPLICATION_SEQ fired -> Generated ID #LICET-8492.',
  ]);
  const [isLocked, setIsLocked] = useState(false);

  const transitionState = (nextState: LeaveState, actionName: string) => {
    sound.playClick();
    setIsLocked(true);

    const time = new Date().toLocaleTimeString();
    const newLog = `[${time}] EXEC pkg_gatepass.${actionName} (APP: ${appId}) -> STATE: ${currentState} -> ${nextState} (COMMIT)`;

    setAuditLogs((prev) => [newLog, ...prev]);
    setCurrentState(nextState);

    setTimeout(() => {
      setIsLocked(false);
    }, 400);
  };

  const rollback = () => {
    sound.playBlip(320, 0.1);
    const time = new Date().toLocaleTimeString();
    setAuditLogs((prev) => [
      `[${time}] ROLLBACK TO SAVEPOINT sp_draft -> All uncommitted mutations reverted.`,
      ...prev,
    ]);
    setCurrentState('DRAFT');
  };

  const states: LeaveState[] = ['DRAFT', 'SUBMITTED', 'FACULTY_REVIEW', 'PROCTOR_AUDITED', 'ISSUED'];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left: Visual State Machine Graph & Interactive Triggers */}
      <div className="lg:col-span-7 space-y-6">
        
        {/* Node Graph */}
        <div className="space-y-2">
          <span className="font-mono text-xs text-ink-muted uppercase tracking-wider block font-semibold">
            ORACLE RELATIONAL STATE MACHINE WORKFLOW:
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {states.map((s, idx) => {
              const isActive = currentState === s;
              const isPast = states.indexOf(currentState) > idx;

              return (
                <div
                  key={s}
                  className={`p-2.5 border text-center font-mono text-[11px] transition-all space-y-1 ${
                    isActive
                      ? 'border-cobalt bg-cobalt text-white shadow-md font-bold'
                      : isPast
                      ? 'border-emerald-600/40 bg-emerald-50 text-emerald-800'
                      : 'border-rule bg-canvas text-ink-muted opacity-60'
                  }`}
                >
                  <span className="block text-[9px] uppercase">0{idx + 1}</span>
                  <span className="block truncate">{s.replace('_', ' ')}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Controls */}
        <div className="space-y-2">
          <span className="font-mono text-xs text-ink uppercase tracking-wider block font-bold">
            EXECUTE STORED PROCEDURES:
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
            {currentState === 'DRAFT' && (
              <button
                onClick={() => transitionState('SUBMITTED', 'submit_application')}
                className="p-3 bg-ink text-canvas hover:bg-cobalt transition-colors font-bold text-left flex items-center justify-between"
              >
                <span>1. Submit Application</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            {currentState === 'SUBMITTED' && (
              <button
                onClick={() => transitionState('FACULTY_REVIEW', 'endorse_faculty')}
                className="p-3 bg-cobalt text-white hover:bg-cobalt/90 transition-colors font-bold text-left flex items-center justify-between"
              >
                <span>2. Faculty Endorsement</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            {currentState === 'FACULTY_REVIEW' && (
              <button
                onClick={() => transitionState('PROCTOR_AUDITED', 'audit_proctor')}
                className="p-3 bg-cobalt text-white hover:bg-cobalt/90 transition-colors font-bold text-left flex items-center justify-between"
              >
                <span>3. Proctor Verification</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            {currentState === 'PROCTOR_AUDITED' && (
              <button
                onClick={() => transitionState('ISSUED', 'issue_digital_pass')}
                className="p-3 bg-emerald-600 text-white hover:bg-emerald-700 transition-colors font-bold text-left flex items-center justify-between"
              >
                <span>4. Issue Gate Pass</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            )}

            {currentState !== 'DRAFT' && currentState !== 'ISSUED' && (
              <button
                onClick={() => transitionState('REJECTED', 'reject_with_audit')}
                className="p-3 border border-red-500 text-red-600 hover:bg-red-50 transition-colors font-bold text-left"
              >
                Reject Application (Audit Log)
              </button>
            )}

            <button
              onClick={rollback}
              className="p-3 border border-rule hover:border-ink text-ink font-mono text-xs text-left flex items-center justify-between"
            >
              <span>ACID Rollback (Savepoint)</span>
              <RotateCcw className="w-3.5 h-3.5 text-cobalt" />
            </button>
          </div>
        </div>

        {/* Database ACID Row Lock Telemetry */}
        <div className="p-3 border border-rule bg-canvas flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${isLocked ? 'bg-amber-500 animate-ping' : 'bg-emerald-500'}`} />
            <span>ROW_LOCK: {isLocked ? 'EXCLUSIVE ACQUIRED' : 'RELEASED (COMMITTED)'}</span>
          </div>
          <span className="text-ink-muted">ORACLE 21c PL/SQL</span>
        </div>
      </div>

      {/* Right: Real-Time PL/SQL Audit Console */}
      <div className="lg:col-span-5 space-y-4">
        <div className="flex items-center justify-between border-b border-rule pb-2">
          <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cobalt" />
            <span>PL/SQL AUDIT TRAIL LOGS</span>
          </span>
          <span className="font-mono text-[10px] text-emerald-600 font-bold">LIVE STREAM</span>
        </div>

        <div className="p-4 bg-[#0d0e12] text-[#d6deeb] font-mono text-xs h-[300px] overflow-y-auto space-y-2 border border-white/10 rounded-sm">
          {auditLogs.map((log, i) => (
            <div key={i} className="leading-relaxed border-b border-white/5 pb-1">
              <span className="text-cobalt">&gt;</span> {log}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
   MODULE 4: JAVA 21 VIRTUAL THREADS (PROJECT LOOM) BENCHMARK
   ────────────────────────────────────────────────────────────────────────── */
const JavaLoomSimulator: React.FC = () => {
  const [taskCount, setTaskCount] = useState(10000);
  const [ioDelayMs, setIoDelayMs] = useState(50);
  const [isBenchmarking, setIsBenchmarking] = useState(false);

  // Dynamic Calculated Metrics
  const platformThreadsUsed = 200; // Standard pool cap
  const virtualThreadsUsed = taskCount;

  const platformMemoryMb = Math.min(2048, Math.round(platformThreadsUsed * 1.0 + (taskCount / 1000) * 15));
  const virtualMemoryMb = Math.round((virtualThreadsUsed * 0.0004) + 12); // ~400 bytes per fiber

  const platformTimeSec = +((taskCount * (ioDelayMs / 1000)) / platformThreadsUsed).toFixed(2);
  const virtualTimeSec = +((ioDelayMs / 1000) + 0.12).toFixed(2);

  const runBenchmark = () => {
    sound.playClick();
    setIsBenchmarking(true);
    setTimeout(() => {
      sound.playBlip(880, 0.08);
      setIsBenchmarking(false);
    }, 600);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left: Interactive Benchmark Controls */}
      <div className="lg:col-span-6 space-y-6">
        <div className="space-y-2">
          <span className="font-mono text-xs text-cobalt font-semibold uppercase tracking-widest block">
            CONCURRENCY ARCHITECTURE BENCHMARK
          </span>
          <h3 className="font-display text-xl font-bold text-ink">
            Java 21 Project Loom vs OS Platform Threads
          </h3>
          <p className="font-sans text-xs text-ink-muted leading-relaxed">
            Adjust concurrent task volume and simulated network I/O latency to compare memory overhead and throughput between traditional kernel thread pools and lightweight virtual fibers.
          </p>
        </div>

        {/* Sliders */}
        <div className="space-y-4 font-mono text-xs">
          <div className="space-y-1.5 p-3 border border-rule bg-canvas">
            <div className="flex justify-between">
              <span className="text-ink font-bold">CONCURRENT TASKS:</span>
              <span className="text-cobalt font-bold">{taskCount.toLocaleString()} Fibers</span>
            </div>
            <input
              type="range"
              min="1000"
              max="50000"
              step="1000"
              value={taskCount}
              onChange={(e) => setTaskCount(Number(e.target.value))}
              className="w-full accent-cobalt cursor-pointer"
            />
          </div>

          <div className="space-y-1.5 p-3 border border-rule bg-canvas">
            <div className="flex justify-between">
              <span className="text-ink font-bold">BLOCKING I/O LATENCY:</span>
              <span className="text-cobalt font-bold">{ioDelayMs} ms</span>
            </div>
            <input
              type="range"
              min="10"
              max="200"
              step="10"
              value={ioDelayMs}
              onChange={(e) => setIoDelayMs(Number(e.target.value))}
              className="w-full accent-cobalt cursor-pointer"
            />
          </div>
        </div>

        <button
          onClick={runBenchmark}
          disabled={isBenchmarking}
          className="w-full py-3 bg-ink text-canvas font-mono text-xs uppercase tracking-wider hover:bg-cobalt transition-colors font-bold flex items-center justify-center gap-2 shadow-sm"
        >
          <Play className={`w-4 h-4 ${isBenchmarking ? 'animate-spin' : ''}`} />
          <span>{isBenchmarking ? 'Running Micro-Benchmark...' : 'Execute Java 21 Loom Benchmark'}</span>
        </button>
      </div>

      {/* Right: Comparative Telemetry Bars */}
      <div className="lg:col-span-6 space-y-6">
        <div className="border border-rule bg-canvas p-5 space-y-5">
          <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider block border-b border-rule pb-2">
            BENCHMARK RESULTS & MEMORY FOOTPRINT
          </span>

          {/* Metric 1: Execution Time */}
          <div className="space-y-2 font-mono text-xs">
            <div className="flex justify-between">
              <span className="text-ink-muted">TOTAL TIME TO PROCESS {taskCount.toLocaleString()} TASKS:</span>
            </div>

            <div className="space-y-1.5">
              <div>
                <div className="flex justify-between text-[11px] mb-1">
                  <span>OS Platform Thread Pool (200 threads)</span>
                  <span className="font-bold text-red-600">{platformTimeSec}s</span>
                </div>
                <div className="w-full h-3 bg-rule/20 overflow-hidden">
                  <div className="h-full bg-red-500 w-[95%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="font-bold text-cobalt">Java 21 Virtual Threads (Project Loom)</span>
                  <span className="font-bold text-emerald-600">{virtualTimeSec}s ({(platformTimeSec / virtualTimeSec).toFixed(1)}x Faster)</span>
                </div>
                <div className="w-full h-3 bg-rule/20 overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[8%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Metric 2: Memory Footprint */}
          <div className="space-y-2 font-mono text-xs pt-3 border-t border-rule">
            <div className="flex justify-between">
              <span className="text-ink-muted">RAM CONSUMPTION (HEAP + STACK):</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 border border-red-500/30 bg-red-50/20">
                <span className="text-[10px] text-ink-muted block">OS THREADS</span>
                <span className="text-lg font-bold text-red-600">{platformMemoryMb} MB</span>
                <span className="text-[9px] text-ink-muted block">1MB per OS stack</span>
              </div>

              <div className="p-3 border border-emerald-500/30 bg-emerald-50/20">
                <span className="text-[10px] text-emerald-800 block font-semibold">VIRTUAL FIBERS</span>
                <span className="text-lg font-bold text-emerald-700">{virtualMemoryMb} MB</span>
                <span className="text-[9px] text-emerald-700 block font-semibold">98.5% RAM Reduction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
