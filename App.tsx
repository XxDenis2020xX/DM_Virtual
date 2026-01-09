
import React, { useState, useCallback } from 'react';
import { LogEntry, LogType, DieType, OracleProbability, City } from './types';
import * as api from './services/geminiService';
import LogWindow from './components/LogWindow';
import DiceRoller from './components/DiceRoller';
import GeneratorControls from './components/GeneratorControls';
import DungeonModal from './components/DungeonModal';
import CRModal from './components/CRModal';
import LootModal from './components/LootModal';

const App: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [isDungeonModalOpen, setIsDungeonModalOpen] = useState(false);
  const [isCRModalOpen, setIsCRModalOpen] = useState(false);
  const [isLootModalOpen, setIsLootModalOpen] = useState(false);
  const [crMode, setCrMode] = useState<'Monstruos' | 'Jefes'>('Monstruos');

  // Default CR to 1 internally for calculations that might still strictly need it, though UI is removed
  const internalCr = 1; 

  const addLog = useCallback((type: LogType, content: string, metadata?: any) => {
    setLogs(prev => [...prev, {
      id: Math.random().toString(36).substring(2, 9),
      type,
      content,
      timestamp: new Date(),
      metadata
    }]);
  }, []);

  const wrapAction = async (action: () => Promise<void>) => {
    setLoading(true);
    try { 
      await action(); 
    } catch (e) { 
      console.error(e);
      addLog(LogType.ERROR, "La magia ha fallado al intentar conectar con el plano astral."); 
    } finally { 
      setLoading(false); 
    }
  };

  const handleNPC = () => wrapAction(async () => {
    const data = await api.generateNPC();
    addLog(LogType.NPC, "", data);
  });

  const handleCity = () => wrapAction(async () => {
    const data = await api.generateCity();
    addLog(LogType.CITY, "", data);
  });

  const handleCityServices = (city: City) => wrapAction(async () => {
    const services = await api.generateCityServices(city);
    addLog(LogType.SERVICES, `Servicios disponibles en ${city.name}`, services);
  });

  const handleNature = () => wrapAction(async () => {
    const text = await api.generateNature();
    addLog(LogType.STORY, text, { title: 'EVENTO NATURAL', icon: 'fa-tree', color: 'green' });
  });

  const handleUrban = () => wrapAction(async () => {
    const text = await api.generateUrban();
    addLog(LogType.STORY, text, { title: 'EVENTO URBANO', icon: 'fa-building', color: 'sky' });
  });

  const handleCRSelection = (cr: string) => {
      setIsCRModalOpen(false);
      wrapAction(async () => {
          const data = await api.generateEncounter(internalCr, 4, crMode, cr);
          addLog(LogType.ENCOUNTER, "", data);
      });
  };

  const handleEncounter = (type: string) => wrapAction(async () => {
    // Removed dependency on UI state for CR/Party
    const data = await api.generateEncounter(internalCr, 4, type);
    addLog(LogType.ENCOUNTER, "", data);
  });

  const handleLootRangeSelection = (range: string) => {
    setIsLootModalOpen(false);
    wrapAction(async () => {
      const data = await api.generateLoot(range);
      addLog(LogType.LOOT, "", data);
    });
  };

  const handleQuest = () => wrapAction(async () => {
    const data = await api.generateQuest();
    addLog(LogType.QUEST, "", data);
  });

  const handleDungeonMeta = () => wrapAction(async () => {
    const meta = await api.generateDungeonMetadata();
    addLog(LogType.DUNGEON, `Mazmorra: ${meta.type}`, meta);
  });

  const handleDungeonPart = (part: string) => wrapAction(async () => {
    const data = await api.generateDungeonPart(part, internalCr);
    addLog(LogType.DUNGEON, "", data);
    setIsDungeonModalOpen(false);
  });

  const handleDice = (die: DieType, mod: number, res: number) => {
    const total = res + mod;
    addLog(LogType.DICE, `d${die}: ${res} ${mod >= 0 ? '+' : ''}${mod} = ${total}`);
  };

  return (
    <div className="h-screen bg-slate-950 flex flex-col overflow-hidden text-slate-200">
      {/* Header Fijo */}
      <header className="bg-slate-900 border-b border-slate-800 p-3 lg:p-4 flex items-center justify-between shadow-lg z-10 shrink-0">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl lg:text-2xl font-bold fantasy-font text-amber-500 drop-shadow-sm tracking-widest uppercase">GM Virtual</h1>
          <div className="h-6 w-[1px] bg-slate-800 hidden md:block"></div>
          <span className="text-[10px] text-slate-500 uppercase font-mono tracking-widest hidden md:block">
            Modo Maestro de Juego
          </span>
        </div>

        <div className="flex items-center space-x-2">
           {/* Controls removed as requested */}
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        
        {/* Ventana de Información (IZQUIERDA / SUPERIOR) */}
        <section className="h-[40%] lg:h-auto lg:flex-1 flex flex-col p-2 lg:p-4 bg-slate-950 overflow-hidden order-1 border-b border-slate-800 lg:border-b-0 lg:border-r">
           <div className="mb-2 flex justify-between items-center shrink-0">
             <span className="text-[9px] lg:text-[10px] font-bold text-slate-600 uppercase tracking-[0.3em]">Crónica del Destino</span>
             {loading && <div className="text-[9px] lg:text-[10px] text-amber-500 animate-pulse font-mono flex items-center">
               <i className="fa-solid fa-wand-sparkles mr-2"></i>CANALIZANDO...
             </div>}
           </div>
           <LogWindow 
            logs={logs} 
            onOpenDungeonModal={() => setIsDungeonModalOpen(true)}
            onGenerateServices={handleCityServices}
            cr={internalCr}
           />
        </section>

        {/* Panel de Control (DERECHA / INFERIOR) */}
        <aside className="flex-1 lg:flex-none lg:w-[420px] bg-slate-900/50 flex flex-col p-2 lg:p-4 space-y-2 lg:space-y-4 overflow-y-auto custom-scrollbar shadow-2xl order-2">
          
          <GeneratorControls 
            onGenerateNPC={handleNPC} 
            onGenerateQuest={handleQuest}
            onGenerateLoot={() => setIsLootModalOpen(true)}
            onGenerateNature={handleNature}
            onGenerateUrban={handleUrban}
            onGenerateMonster={() => { setCrMode('Monstruos'); setIsCRModalOpen(true); }}
            onGenerateBoss={() => { setCrMode('Jefes'); setIsCRModalOpen(true); }}
            onGenerateDungeon={handleDungeonMeta}
            onGenerateCity={handleCity}
            onQueryOracle={(q, p) => wrapAction(async () => { const a = await api.queryOracle(q, p); addLog(LogType.ORACLE, a, { question: q, probability: p }); })}
            loading={loading} 
          />

          <div className="h-[1px] bg-slate-800 mx-2 shrink-0"></div>
          
          <DiceRoller onRoll={handleDice} />

          <div className="bg-slate-900/80 p-2 lg:p-4 rounded-xl border border-slate-800 text-[9px] lg:text-[10px] text-slate-600 italic space-y-1 mt-auto shrink-0">
            <p className="flex items-start"><i className="fa-solid fa-circle-info mt-0.5 mr-2"></i> Tablas de manual integradas.</p>
          </div>
        </aside>

      </main>

      <DungeonModal 
        isOpen={isDungeonModalOpen} 
        onClose={() => setIsDungeonModalOpen(false)} 
        onGenerate={handleDungeonPart}
        loading={loading}
      />

      <CRModal
        isOpen={isCRModalOpen}
        onClose={() => setIsCRModalOpen(false)}
        onSelectCR={handleCRSelection}
      />

      <LootModal
        isOpen={isLootModalOpen}
        onClose={() => setIsLootModalOpen(false)}
        onSelectRange={handleLootRangeSelection}
      />

      <style>{`
        .btn-gm {
          @apply p-2 lg:p-3 rounded-lg border font-bold uppercase text-[9px] lg:text-[10px] transition-all flex items-center justify-center hover:brightness-125 disabled:opacity-30 shadow-sm active:scale-95;
        }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { @apply bg-transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { @apply bg-slate-800 rounded; }
      `}</style>
    </div>
  );
};

export default App;
