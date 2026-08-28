import React, { useState, useEffect } from 'react';
import {
  Fish,
  Scale,
  Sparkles,
  TrendingUp,
  Radio,
  ShieldAlert,
  RotateCcw,
  Zap,
  CheckCircle2,
  Play,
  Search,
  Check
} from 'lucide-react';
import { sound } from '../utils/audio';

/* ──────────────────────────────────────────────────────────────────────────
   TAB 0: AQUALENS MARITIME EDGE AI WORKBENCH
   ────────────────────────────────────────────────────────────────────────── */
export const AquaLensWorkbench: React.FC = () => {
  const [selectedFish, setSelectedFish] = useState<'pomfret' | 'rohu' | 'catla'>('pomfret');
  const [isAlertTesting, setIsAlertTesting] = useState(false);

  const fishCatalogue = {
    pomfret: {
      name: 'Silver Pomfret (Pampus argenteus)',
      length: 24.5,
      weight: 642,
      qim: 96,
      marketRate: 650,
      estValue: 417.3,
      confidence: 98.4,
      distToImbl: 14.8,
    },
    rohu: {
      name: 'Rohu Carp (Labeo rohita)',
      length: 38.0,
      weight: 1280,
      qim: 92,
      marketRate: 180,
      estValue: 230.4,
      confidence: 97.2,
      distToImbl: 22.4,
    },
    catla: {
      name: 'Catla (Gibelion catla)',
      length: 46.5,
      weight: 2450,
      qim: 90,
      marketRate: 160,
      estValue: 392.0,
      confidence: 96.8,
      distToImbl: 19.1,
    },
  };

  const curr = fishCatalogue[selectedFish];

  const handleSelect = (key: 'pomfret' | 'rohu' | 'catla') => {
    sound.playClick();
    setSelectedFish(key);
  };

  const triggerBorderAlert = () => {
    sound.playClick();
    const nextState = !isAlertTesting;
    setIsAlertTesting(nextState);
    if (nextState) {
      sound.playBlip(440, 0.25);
    }
  };

  return (
    <div className="space-y-3 font-mono select-none">
      {/* Top Specimen Selector & Inference Banner */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
        <div className="flex items-center gap-2">
          <Fish className="w-4 h-4 text-cyan-400" />
          <span className="text-xs text-white font-bold tracking-wider">
            TFLITE INT8 SPECIMEN CLASSIFIER:
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          {(['pomfret', 'rohu', 'catla'] as const).map((key) => (
            <button
              key={key}
              onClick={() => handleSelect(key)}
              className={`px-2.5 py-1 text-xs font-bold rounded transition-all ${
                selectedFish === key
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              {key.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Real-time Telemetry Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        <div className="p-2.5 bg-slate-900/60 border border-slate-800 rounded">
          <span className="text-[10px] text-slate-400 flex items-center gap-1 mb-1">
            <Scale className="w-3 h-3 text-cyan-400" />
            <span>BIOMASS (W=a·L^b)</span>
          </span>
          <span className="text-sm font-bold text-white block">{curr.weight} g</span>
          <span className="text-[10px] text-cyan-300">Length: {curr.length} cm</span>
        </div>

        <div className="p-2.5 bg-slate-900/60 border border-slate-800 rounded">
          <span className="text-[10px] text-slate-400 flex items-center gap-1 mb-1">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            <span>QIM FRESHNESS</span>
          </span>
          <span className="text-sm font-bold text-emerald-400 block">{curr.qim} / 100</span>
          <span className="text-[10px] text-emerald-300">Grade A (Prime)</span>
        </div>

        <div className="p-2.5 bg-slate-900/60 border border-slate-800 rounded">
          <span className="text-[10px] text-slate-400 flex items-center gap-1 mb-1">
            <TrendingUp className="w-3 h-3 text-amber-400" />
            <span>MARKET VALUE</span>
          </span>
          <span className="text-sm font-bold text-amber-400 block">₹{curr.estValue}</span>
          <span className="text-[10px] text-amber-300">@ ₹{curr.marketRate}/kg</span>
        </div>

        <div className={`p-2.5 border rounded transition-colors ${isAlertTesting ? 'bg-amber-950/60 border-amber-500' : 'bg-slate-900/60 border-slate-800'}`}>
          <span className="text-[10px] text-slate-400 flex items-center gap-1 mb-1">
            <Radio className="w-3 h-3 text-cyan-400" />
            <span>IMBL RADAR</span>
          </span>
          <span className={`text-sm font-bold block ${isAlertTesting ? 'text-amber-400 animate-pulse' : 'text-white'}`}>
            {isAlertTesting ? '4.2 NM (WARNING)' : `${curr.distToImbl} NM (SAFE)`}
          </span>
          <span className="text-[10px] text-slate-400">
            {isAlertTesting ? 'Voice Alert Triggered' : 'Territorial Waters'}
          </span>
        </div>
      </div>

      {/* Real-Time Detection Details & Interactive Alert Trigger */}
      <div className="p-3 bg-[#080c14] border border-slate-800 rounded space-y-2">
        <div className="flex flex-wrap items-center justify-between text-xs gap-2">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">CLASSIFIED:</span>
            <span className="text-white font-bold">{curr.name}</span>
            <span className="px-1.5 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-500/40 text-[10px] font-bold">
              {curr.confidence}% MATCH
            </span>
          </div>

          <button
            onClick={triggerBorderAlert}
            className={`px-2.5 py-1 text-[11px] font-bold uppercase rounded border transition-all flex items-center gap-1.5 ${
              isAlertTesting
                ? 'bg-amber-500 text-slate-950 border-amber-400'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>{isAlertTesting ? 'RESET GEOFENCE' : 'TEST IMBL DEFENSE ALERT'}</span>
          </button>
        </div>

        <div className="text-[11px] text-slate-400 flex flex-wrap items-center justify-between pt-1 border-t border-slate-800/80">
          <span>INCOIS PFZ RADAR: Thermal chlorophyll convergence detected</span>
          <span className="text-cyan-300 font-semibold">100% OFFLINE SQLITE PIPELINE</span>
        </div>
      </div>
    </div>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
   TAB 1: SMART TRAFFIC & EMERGENCY CORRIDOR WORKBENCH
   ────────────────────────────────────────────────────────────────────────── */
export const TrafficAiWorkbench: React.FC = () => {
  const [isEmergencyActive, setIsEmergencyActive] = useState(false);
  const [lane1Count, setLane1Count] = useState(14);
  const [lane2Count, setLane2Count] = useState(6);
  const [greenTimer, setGreenTimer] = useState(28);

  useEffect(() => {
    const timer = setInterval(() => {
      setGreenTimer((prev) => (prev > 1 ? prev - 1 : isEmergencyActive ? 45 : 30));
    }, 1000);
    return () => clearInterval(timer);
  }, [isEmergencyActive]);

  const handleToggleEmergency = () => {
    sound.playBlip(880, 0.2);
    setIsEmergencyActive((prev) => !prev);
  };

  const handleRandomize = () => {
    sound.playClick();
    setLane1Count(Math.floor(8 + Math.random() * 14));
    setLane2Count(Math.floor(3 + Math.random() * 10));
  };

  return (
    <div className="space-y-4 font-mono select-none">
      {/* Top Controls & Telemetry */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-400 font-bold">EDGE VISION INGEST</span>
          </div>
          <span className="text-slate-400">LATENCY: <strong className="text-cyan-400">32.4 ms</strong></span>
          <span className="text-slate-400">FPS: <strong className="text-cyan-400">30.0</strong></span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleToggleEmergency}
            className={`px-3 py-1.5 text-xs font-bold uppercase transition-all rounded ${
              isEmergencyActive
                ? 'bg-red-600 text-white animate-pulse shadow-lg shadow-red-500/30'
                : 'bg-red-950/80 border border-red-500/40 text-red-300 hover:bg-red-900'
            }`}
          >
            {isEmergencyActive ? '🚨 CORRIDOR DISPATCHED' : '⚡ TEST AMBULANCE GREEN WAVE'}
          </button>

          <button
            onClick={handleRandomize}
            className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded"
            title="Randomize Traffic Load"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Interactive Intersection Visualizer */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-2">
        
        {/* Lane 1: Primary Arterial (North-South) */}
        <div className={`p-4 rounded border transition-all ${
          isEmergencyActive || lane1Count > 10 ? 'border-emerald-500/50 bg-emerald-950/20' : 'border-slate-800 bg-slate-900/40'
        }`}>
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="font-bold text-slate-300">LANE A (HOSPITAL CORRIDOR)</span>
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
              isEmergencyActive ? 'bg-emerald-500 text-slate-950 animate-pulse' : 'bg-emerald-900/50 text-emerald-400'
            }`}>
              {isEmergencyActive ? 'PRIORITY GREEN' : 'DYNAMIC SIGNAL'}
            </span>
          </div>

          <div className="space-y-2 text-xs text-slate-400">
            <div className="flex justify-between">
              <span>VEHICLE DENSITY:</span>
              <span className="text-white font-bold">{lane1Count} vehicles</span>
            </div>
            <div className="flex justify-between">
              <span>SIGNAL DURATION:</span>
              <span className="text-emerald-400 font-bold">{greenTimer}s GREEN</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div
                style={{ width: `${Math.min(100, (lane1Count / 20) * 100)}%` }}
                className="bg-emerald-400 h-full rounded-full transition-all duration-500"
              />
            </div>
          </div>

          {isEmergencyActive && (
            <div className="mt-3 p-2 bg-red-900/40 border border-red-500/40 text-red-300 text-[11px] rounded flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-red-400 shrink-0" />
              <span>Ambulance beacon detected (ID: #AMB-108). All cross-signals halted.</span>
            </div>
          )}
        </div>

        {/* Lane 2: Cross Arterial (East-West) */}
        <div className="p-4 rounded border border-slate-800 bg-slate-900/40">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="font-bold text-slate-300">LANE B (CROSS JUNCTION)</span>
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
              isEmergencyActive ? 'bg-red-500/20 text-red-400' : 'bg-amber-900/50 text-amber-400'
            }`}>
              {isEmergencyActive ? 'HALTED (RED)' : 'QUEUED'}
            </span>
          </div>

          <div className="space-y-2 text-xs text-slate-400">
            <div className="flex justify-between">
              <span>VEHICLE DENSITY:</span>
              <span className="text-white font-bold">{lane2Count} vehicles</span>
            </div>
            <div className="flex justify-between">
              <span>STATUS:</span>
              <span className={isEmergencyActive ? 'text-red-400 font-bold' : 'text-slate-300'}>
                {isEmergencyActive ? 'HELD ON RED' : '15s ESTIMATED DELAY'}
              </span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div
                style={{ width: `${Math.min(100, (lane2Count / 20) * 100)}%` }}
                className="bg-cyan-400 h-full rounded-full transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* YOLOv8 Live Detection Frame Output */}
        <div className="p-4 rounded border border-slate-800 bg-slate-900/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="font-bold text-slate-300">YOLOV8 TRACKING LOG</span>
              <span className="text-cyan-400 text-[10px]">CUDA CORE 0</span>
            </div>
            <div className="text-[11px] space-y-1 text-slate-400">
              <div>&gt; [DET] 1x AMBULANCE (conf: 0.99)</div>
              <div>&gt; [DET] 8x CARS (conf: 0.94 avg)</div>
              <div>&gt; [DET] 2x BUS (conf: 0.98)</div>
              <div>&gt; [RELAY] Signal timing adjusted +15s</div>
            </div>
          </div>

          <div className="pt-2 text-[10px] text-emerald-400 flex items-center gap-1.5 border-t border-slate-800/80">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>NO TRAFFIC DEADLOCKS DETECTED</span>
          </div>
        </div>

      </div>
    </div>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
   TAB 2: ORACLE SQL & PL/SQL WORKBENCH
   ────────────────────────────────────────────────────────────────────────── */
export const OracleSqlWorkbench: React.FC = () => {
  const [selectedQuery, setSelectedQuery] = useState<'gate_pass' | 'approval' | 'audit'>('gate_pass');
  const [queryOutput, setQueryOutput] = useState<string>('Rows returned: 4 | Execution time: 0.0024s | ACID Lock: EXCLUSIVE');

  const queries = {
    gate_pass: {
      name: 'GATE_PASS_VERIFY.SQL',
      sql: `SELECT pass_id, student_id, purpose, departure_time, status 
FROM tbl_gate_passes 
WHERE status = 'APPROVED' 
FOR UPDATE NOWAIT;`,
      output: '4 rows locked in SERIALIZABLE isolation. ACID integrity verified.',
    },
    approval: {
      name: 'PKG_WORKFLOW.SIGN_OFF.SQL',
      sql: `CREATE OR REPLACE PROCEDURE sp_endorse_pass(
    p_pass_id IN NUMBER,
    p_faculty_id IN NUMBER
) IS
BEGIN
    UPDATE tbl_gate_passes 
    SET status = 'ISSUED', endorsed_by = p_faculty_id
    WHERE pass_id = p_pass_id;
    COMMIT;
END;`,
      output: 'Procedure compiled successfully. 0 syntax warnings. Commit logged.',
    },
    audit: {
      name: 'AUDIT_LEDGER_INTEGRITY.SQL',
      sql: `INSERT INTO tbl_audit_ledger (txn_id, pass_id, action, timestamp)
VALUES (seq_txn.NEXTVAL, 10842, 'GATE_SCAN_DEPARTURE', SYSDATE);
SELECT COUNT(*) FROM tbl_audit_ledger;`,
      output: 'Insert committed. Total immutable audit ledger count: 48,920 records.',
    },
  };

  const handleRunQuery = () => {
    sound.playClick();
    setQueryOutput(`[${new Date().toLocaleTimeString()}] Executed successfully. ${queries[selectedQuery].output}`);
  };

  return (
    <div className="space-y-3 font-mono select-none">
      {/* Top Query Selector Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          {(Object.keys(queries) as Array<keyof typeof queries>).map((key) => (
            <button
              key={key}
              onClick={() => {
                sound.playClick();
                setSelectedQuery(key);
                setQueryOutput(queries[key].output);
              }}
              className={`px-2.5 py-1 text-xs font-bold uppercase rounded transition-all ${
                selectedQuery === key
                  ? 'bg-cobalt text-white shadow-sm'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {queries[key].name}
            </button>
          ))}
        </div>

        <button
          onClick={handleRunQuery}
          className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase rounded flex items-center gap-1.5 transition-all"
        >
          <Play className="w-3.5 h-3.5 fill-white" />
          <span>Execute Query</span>
        </button>
      </div>

      {/* SQL Code Viewport */}
      <div className="p-3 bg-[#080c14] border border-slate-800 rounded font-mono text-xs text-emerald-400 overflow-x-auto whitespace-pre leading-relaxed">
        {queries[selectedQuery].sql}
      </div>

      {/* Execution Telemetry & Result Output */}
      <div className="p-3 bg-slate-900/60 border border-slate-800 rounded space-y-1">
        <div className="flex items-center justify-between text-[10px] text-slate-400">
          <span className="text-cobalt font-bold">ORACLE 21C SQL ENGINE OUTPUT:</span>
          <span className="text-emerald-400">100% ACID COMPLIANT</span>
        </div>
        <div className="text-xs text-slate-200 font-mono">
          &gt; {queryOutput}
        </div>
      </div>
    </div>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
   TAB 3: SPECAMP AI ELECTRONICS COMPONENT VALIDATOR WORKBENCH
   ────────────────────────────────────────────────────────────────────────── */
export const SpecAmpWorkbench: React.FC = () => {
  const [selectedPart, setSelectedPart] = useState('STM32F401RE');
  const [searchStatus, setSearchStatus] = useState('VERIFIED (100% SPEC MATCH)');

  const parts: Record<string, { desc: string; core: string; freq: string; ram: string; sources: string[] }> = {
    STM32F401RE: {
      desc: 'ARM Cortex-M4 32-bit MCU with FPU',
      core: 'ARM Cortex-M4',
      freq: '84 MHz',
      ram: '96 KB SRAM / 512 KB Flash',
      sources: ['DigiKey (Matched)', 'Mouser (Matched)', 'STMicroelectronics (Datasheet Confirmed)'],
    },
    'ESP32-WROOM-32': {
      desc: 'Dual-core Wi-Fi & Bluetooth MCU Module',
      core: 'Xtensa Dual-Core 32-bit LX6',
      freq: '240 MHz',
      ram: '520 KB SRAM / 4 MB SPI Flash',
      sources: ['DigiKey (Matched)', 'Mouser (Matched)', 'Espressif (Confirmed)'],
    },
    NE555P: {
      desc: 'Precision Precision Monostable/Astable Timer',
      core: 'Bipolar Analog Timer IC',
      freq: '100 kHz Max',
      ram: '4.5V - 16V Supply Range',
      sources: ['Texas Instruments (Datasheet)', 'Mouser (Confirmed)', 'Octopart (Matched)'],
    },
  };

  const handleSelectPart = (mpn: string) => {
    sound.playClick();
    setSelectedPart(mpn);
    setSearchStatus('VALIDATING MULTI-SOURCE DATASHEETS...');
    setTimeout(() => setSearchStatus('VERIFIED (100% SPEC MATCH)'), 400);
  };

  const current = parts[selectedPart] || parts['STM32F401RE'];

  return (
    <div className="space-y-3 font-mono select-none">
      {/* Search Header & Chips */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
        <div className="flex items-center gap-1.5 text-xs text-slate-300">
          <Search className="w-3.5 h-3.5 text-amber-400" />
          <span>MPN LOOKUP:</span>
        </div>

        <div className="flex items-center gap-1.5">
          {Object.keys(parts).map((mpn) => (
            <button
              key={mpn}
              onClick={() => handleSelectPart(mpn)}
              className={`px-2.5 py-1 text-xs font-bold rounded transition-all ${
                selectedPart === mpn
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              {mpn}
            </button>
          ))}
        </div>
      </div>

      {/* Component Specification Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-3 bg-slate-900/60 border border-slate-800 rounded">
          <span className="text-[10px] text-slate-400 block mb-1">ARCHITECTURE</span>
          <span className="text-xs font-bold text-white block">{current.core}</span>
        </div>

        <div className="p-3 bg-slate-900/60 border border-slate-800 rounded">
          <span className="text-[10px] text-slate-400 block mb-1">CLOCK FREQUENCY</span>
          <span className="text-xs font-bold text-amber-400 block">{current.freq}</span>
        </div>

        <div className="p-3 bg-slate-900/60 border border-slate-800 rounded">
          <span className="text-[10px] text-slate-400 block mb-1">MEMORY / STORAGE</span>
          <span className="text-xs font-bold text-emerald-400 block">{current.ram}</span>
        </div>
      </div>

      {/* Multi-Source Validation Consensus */}
      <div className="p-3 bg-[#080c14] border border-slate-800 rounded space-y-1.5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-300 font-bold">CROSS-SOURCE VALIDATION:</span>
          <span className="text-emerald-400 font-bold">{searchStatus}</span>
        </div>
        <div className="text-[11px] text-slate-400 space-y-1">
          {current.sources.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
   TAB 4: FINTECH AUTOMATED INGEST & COMMODITY WORKBENCH
   ────────────────────────────────────────────────────────────────────────── */
export const FintechWorkbench: React.FC = () => {
  const [goldRate] = useState(7240);
  const [silverRate] = useState(91.5);

  const transactions = [
    { merchant: 'RELIANCE RETAIL', amount: '₹4,250', cat: 'GROCERIES', time: '14:22' },
    { merchant: 'SHELL PETROL', amount: '₹1,500', cat: 'FUEL', time: '11:05' },
    { merchant: 'SWIGGY FOOD', amount: '₹420', cat: 'DINING', time: 'Yesterday' },
  ];

  return (
    <div className="space-y-3 font-mono select-none">
      {/* Top Ledger & Commodity Feed */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-b border-slate-800 pb-3">
        <div className="p-2.5 bg-slate-900/60 border border-slate-800 rounded flex justify-between items-center">
          <div>
            <span className="text-[10px] text-slate-400 block">GOLD (24K / GRAM)</span>
            <span className="text-xs font-bold text-amber-400">₹{goldRate.toLocaleString()}</span>
          </div>
          <TrendingUp className="w-4 h-4 text-amber-400" />
        </div>

        <div className="p-2.5 bg-slate-900/60 border border-slate-800 rounded flex justify-between items-center">
          <div>
            <span className="text-[10px] text-slate-400 block">SILVER (1 GRAM)</span>
            <span className="text-xs font-bold text-cyan-300">₹{silverRate}</span>
          </div>
          <TrendingUp className="w-4 h-4 text-cyan-300" />
        </div>

        <div className="p-2.5 bg-slate-900/60 border border-slate-800 rounded flex justify-between items-center">
          <div>
            <span className="text-[10px] text-slate-400 block">SMS PARSER ACCURACY</span>
            <span className="text-xs font-bold text-emerald-400">99.4% (Zero Manual)</span>
          </div>
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
        </div>
      </div>

      {/* Live Bank SMS Parse Stream */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="font-bold text-slate-300">LIVE TRANSACTION INGEST LEDGER:</span>
          <span>PARSED VIA REGEX HEURISTICS</span>
        </div>

        <div className="space-y-1">
          {transactions.map((tx, idx) => (
            <div
              key={idx}
              className="p-2 bg-[#080c14] border border-slate-800/80 rounded flex items-center justify-between text-xs"
            >
              <div className="flex items-center gap-3">
                <span className="text-emerald-400 font-bold">{tx.amount}</span>
                <span className="text-white font-medium">{tx.merchant}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-slate-800 text-[10px] text-cyan-300 rounded font-bold">
                  {tx.cat}
                </span>
                <span className="text-slate-500 text-[10px]">{tx.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
