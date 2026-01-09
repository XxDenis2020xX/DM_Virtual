
import React, { useEffect, useRef, useState } from 'react';
import { LogEntry, LogType, City, Quest, DungeonMetadata, LootItem, MerchantService } from '../types';
import * as api from '../services/geminiService';

interface LogWindowProps {
  logs: LogEntry[];
  onOpenDungeonModal: () => void;
  onGenerateServices?: (city: City) => void;
  cr: number;
}

const DungeonStructureCard: React.FC<{ log: LogEntry; cr: number }> = ({ log, cr }) => {
  const [content, setContent] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const dMeta = log.metadata as DungeonMetadata;
  const timeStr = log.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  const handleGenerateFull = async () => {
    setIsGenerating(true);
    try {
      const fullContent = await api.generateBalancedDungeonContent(dMeta.roomCount, cr);
      setContent(fullContent);
      setCurrentIndex(0);
    } catch (e) {
      console.error(e);
    } finally {
      setIsGenerating(false);
    }
  };

  const next = () => setCurrentIndex(prev => (prev + 1) % content.length);
  const prev = () => setCurrentIndex(prev => (prev - 1 + content.length) % content.length);

  const renderPart = (part: any) => {
    if (part.type === 'Trampa') {
      return (
        <div className="bg-red-950/20 border border-red-500/40 p-2 rounded-lg mt-1">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[7px] font-bold text-red-400 uppercase tracking-widest">¡Trampa!</span>
            <i className="fa-solid fa-skull-crossbones text-red-500/50 text-xs"></i>
          </div>
          <p className="text-[10px] font-bold text-red-100 mb-1">{part.text}</p>
          <div className="grid grid-cols-3 gap-1">
            <div className="bg-black/40 p-0.5 rounded text-center">
              <span className="text-[6px] text-slate-500 block">Detectar CD</span>
              <span className="text-[9px] font-bold text-red-400">{part.detect}</span>
            </div>
            <div className="bg-black/40 p-0.5 rounded text-center">
              <span className="text-[6px] text-slate-500 block">Salvar CD</span>
              <span className="text-[9px] font-bold text-amber-400">{part.save}</span>
            </div>
            <div className="bg-black/40 p-0.5 rounded text-center">
              <span className="text-[6px] text-slate-500 block">Daño</span>
              <span className="text-[9px] font-bold text-white">{part.dmg}</span>
            </div>
          </div>
        </div>
      );
    }
    if (part.type === 'Pista') {
      return (
        <div className="bg-emerald-950/10 border border-emerald-500/30 p-2 rounded-lg mt-1 italic">
          <span className="text-[7px] font-bold text-emerald-400 uppercase block mb-0.5">Pista</span>
          <p className="text-[10px] text-emerald-100">"{part.text}"</p>
        </div>
      );
    }
    return (
      <div className="bg-indigo-950/10 border border-indigo-500/20 p-2 rounded-lg mt-1">
        <span className="text-[7px] font-bold text-indigo-400 uppercase block mb-0.5">{part.type}</span>
        <p className="text-[10px] text-slate-200 font-bold mb-0.5">{part.structure}</p>
        {part.content && <p className="text-[9px] text-slate-400 italic mt-0.5 border-t border-white/5 pt-0.5">{part.content}</p>}
      </div>
    );
  };

  return (
    <div key={log.id} className="mb-2 p-3 bg-indigo-950/20 border border-indigo-500/40 rounded-xl shadow-lg relative overflow-hidden group">
      <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
        <i className="fa-solid fa-dungeon text-6xl rotate-12"></i>
      </div>
      
      <div className="flex justify-between items-center mb-2">
        <span className="text-[8px] text-indigo-400 font-mono font-bold uppercase tracking-widest bg-indigo-950/40 px-1.5 py-0.5 rounded">[{timeStr}] ESTRUCTURA</span>
        <span className="text-[9px] text-indigo-200 font-bold uppercase tracking-wider">{dMeta.type}</span>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-2 mb-2">
        <div className="bg-black/40 p-1.5 rounded-lg border border-white/5 backdrop-blur-sm">
          <span className="text-[7px] text-slate-500 uppercase block mb-0.5 font-bold tracking-tighter">Tamaño</span>
          <p className="text-[10px] font-bold text-indigo-100">{dMeta.size} <span className="text-indigo-400/60 font-normal">({dMeta.roomCount})</span></p>
        </div>
        <div className="bg-black/40 p-1.5 rounded-lg border border-white/5 backdrop-blur-sm">
          <span className="text-[7px] text-slate-500 uppercase block mb-0.5 font-bold tracking-tighter">Nivel Mazmorra</span>
          <p className="text-[10px] font-bold text-amber-400">{dMeta.level}</p>
        </div>
        <div className="bg-black/40 p-1.5 rounded-lg border border-white/5 backdrop-blur-sm col-span-2">
          <span className="text-[7px] text-slate-500 uppercase block mb-0.5 font-bold tracking-tighter">Actividad</span>
          <p className="text-[10px] font-bold text-indigo-100">{dMeta.activity}</p>
        </div>
      </div>

      {content.length === 0 ? (
        <button 
          onClick={handleGenerateFull}
          disabled={isGenerating}
          className="w-full py-1.5 bg-indigo-600/20 hover:bg-indigo-600/40 border border-indigo-500/40 rounded-lg text-[9px] font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center text-indigo-100 group/btn"
        >
          {isGenerating ? <i className="fa-solid fa-spinner fa-spin mr-2"></i> : <i className="fa-solid fa-wand-sparkles mr-2 text-indigo-400"></i>}
          Generar
        </button>
      ) : (
        <div className="space-y-1">
          <div className="flex items-center justify-between border-b border-indigo-500/20 pb-1">
            <span className="text-[8px] text-slate-500 font-bold uppercase tracking-widest">Contenido ({currentIndex + 1}/{content.length})</span>
            <div className="flex space-x-1">
              <button onClick={prev} className="p-0.5 px-1.5 bg-slate-800 hover:bg-indigo-600/30 rounded border border-slate-700 transition-all">
                <i className="fa-solid fa-chevron-left text-[8px]"></i>
              </button>
              <button onClick={next} className="p-0.5 px-1.5 bg-slate-800 hover:bg-indigo-600/30 rounded border border-slate-700 transition-all">
                <i className="fa-solid fa-chevron-right text-[8px]"></i>
              </button>
            </div>
          </div>
          <div className="min-h-[80px] animate-in fade-in slide-in-from-right-2 duration-300">
            {renderPart(content[currentIndex])}
          </div>
        </div>
      )}
    </div>
  );
};

const LogWindow: React.FC<LogWindowProps> = ({ logs, onOpenDungeonModal, onGenerateServices, cr }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [logs]);

  const renderStats = (s: any) => {
    const statLabels = ['FUE', 'DES', 'CON', 'INT', 'SAB', 'CAR'];
    const statKeys = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
    return (
      <div className="grid grid-cols-6 gap-0.5 my-1 text-center bg-black/40 p-1 rounded border border-white/10">
        {statLabels.map((label, i) => (
          <div key={label} className="flex flex-col">
            <span className="text-[7px] text-slate-500">{label}</span>
            <span className="text-xs font-bold text-white">{(s as any)?.[statKeys[i]] ?? '-'}</span>
          </div>
        ))}
      </div>
    );
  };

  const renderEntry = (log: LogEntry) => {
    const timeStr = log.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    
    switch (log.type) {
      case LogType.STORY:
        const meta = log.metadata || { title: 'HISTORIA', icon: 'fa-book', color: 'slate' };
        const colorClass = meta.color === 'green' ? 'emerald' : meta.color === 'sky' ? 'cyan' : 'slate';
        return (
           <div key={log.id} className={`mb-3 p-3 bg-${colorClass}-950/10 border border-${colorClass}-500/20 rounded-xl shadow-lg relative overflow-hidden`}>
              <div className="absolute top-0 right-0 p-2 opacity-10"><i className={`fa-solid ${meta.icon} text-3xl`}></i></div>
              <div className="flex justify-between items-center mb-2">
                 <span className={`text-[8px] text-${colorClass}-400 font-mono font-bold uppercase tracking-widest bg-${colorClass}-950/40 px-1.5 py-0.5 rounded`}>[{timeStr}] {meta.title}</span>
              </div>
              <p className={`text-sm text-${colorClass}-100 font-medium italic leading-relaxed`}>"{log.content}"</p>
           </div>
        );

      case LogType.DUNGEON:
        const dMeta = log.metadata as DungeonMetadata;
        const dPart = log.metadata;
        
        // Es metadatos de estructura (Usamos el componente especializado)
        if (dMeta && dMeta.roomCount) {
          return <DungeonStructureCard key={log.id} log={log} cr={cr} />;
        }

        // Es una parte específica generada manualmente desde el modal
        if (dPart && dPart.type === 'Trampa') {
          return (
            <div key={log.id} className="mb-2 p-3 bg-red-950/20 border border-red-500/40 rounded-xl shadow-lg">
               <span className="text-[8px] text-red-400 font-mono font-bold uppercase tracking-widest bg-red-950/40 px-1.5 py-0.5 rounded">[{timeStr}] ¡TRAMPA!</span>
               <h4 className="text-sm font-bold text-red-100 mt-1">{dPart.text}</h4>
               <div className="grid grid-cols-3 gap-1 mt-1">
                 <div className="bg-black/40 p-1 rounded text-center">
                    <span className="text-[7px] text-slate-500 uppercase block">Detectar</span>
                    <span className="text-[10px] font-bold text-red-400">CD {dPart.detect}</span>
                 </div>
                 <div className="bg-black/40 p-1 rounded text-center">
                    <span className="text-[7px] text-slate-500 uppercase block">Salvar</span>
                    <span className="text-[10px] font-bold text-amber-400">CD {dPart.save}</span>
                 </div>
                 <div className="bg-black/40 p-1 rounded text-center">
                    <span className="text-[7px] text-slate-500 uppercase block">Daño</span>
                    <span className="text-[10px] font-bold text-white">{dPart.dmg}</span>
                 </div>
               </div>
            </div>
          );
        }

        if (dPart && dPart.type === 'Pista') {
          return (
            <div key={log.id} className="mb-2 p-3 bg-emerald-950/10 border border-emerald-500/30 rounded-xl shadow-lg italic">
               <span className="text-[8px] text-emerald-400 font-mono font-bold uppercase tracking-widest bg-emerald-950/40 px-1.5 py-0.5 rounded not-italic">[{timeStr}] PISTA</span>
               <p className="text-emerald-100 mt-1 text-xs leading-tight">"{dPart.text}"</p>
            </div>
          );
        }

        return (
          <div key={log.id} className="mb-2 p-3 bg-indigo-950/10 border border-indigo-500/20 rounded-xl shadow-lg">
             <div className="flex justify-between items-center mb-1">
               <span className="text-[8px] text-indigo-400 font-mono font-bold uppercase tracking-widest bg-indigo-950/40 px-1.5 py-0.5 rounded">[{timeStr}] {dPart.type || 'MAZMORRA'}</span>
             </div>
             <p className="text-slate-200 text-xs font-bold mb-1">{dPart.structure}</p>
             {dPart.content && (
               <div className="mt-1 p-1.5 bg-black/30 rounded border border-white/5 text-[10px] text-slate-400 italic leading-tight">
                 <span className="text-indigo-500 font-bold uppercase text-[7px] block mb-0.5 not-italic tracking-widest">Contenido</span>
                 {dPart.content}
               </div>
             )}
          </div>
        );

      case LogType.QUEST:
        const q = log.metadata as Quest;
        return (
          <div key={log.id} className="mb-3 p-3 bg-amber-950/10 border border-amber-700/30 rounded-xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-10"><i className="fa-solid fa-scroll text-4xl"></i></div>
            <div className="flex justify-between items-start mb-1">
               <span className="text-[8px] text-amber-600 font-mono font-bold uppercase tracking-widest">[{timeStr}] MISIÓN</span>
               <span className="text-[8px] bg-amber-900/40 text-amber-500 px-1.5 py-0.5 rounded font-bold uppercase border border-amber-500/20">{q.reward}</span>
            </div>
            <h3 className="text-sm font-bold text-amber-200 uppercase fantasy-font mt-1 border-b border-amber-900/30 pb-1">{q.title}</h3>
            <div className="mt-2 space-y-1">
               <div className="bg-black/20 p-1.5 rounded border border-amber-900/10">
                  <span className="text-amber-700 font-bold uppercase text-[8px] block tracking-widest">Origen: {q.source}</span>
               </div>
               <div>
                  <span className="text-amber-700 font-bold uppercase text-[8px] block tracking-widest">Objetivo</span>
                  <p className="text-xs text-slate-200 leading-tight font-medium">{q.objective}</p>
               </div>
               <div className="border-t border-amber-900/20 pt-1">
                  <span className="text-amber-700 font-bold uppercase text-[8px] block tracking-widest">Giro</span>
                  <p className="text-xs text-amber-200/50 italic leading-tight">"{q.twist}"</p>
               </div>
            </div>
          </div>
        );

      case LogType.CITY:
        const city = log.metadata as City;
        return (
          <div key={log.id} className="mb-3 p-3 bg-cyan-950/10 border border-cyan-500/20 rounded-xl shadow-lg relative overflow-hidden">
             <div className="absolute top-0 right-0 p-2 opacity-10"><i className="fa-solid fa-city text-3xl"></i></div>
             <div className="flex justify-between items-center mb-1">
               <span className="text-[8px] text-cyan-400 font-mono font-bold uppercase tracking-widest bg-cyan-950/40 px-1.5 py-0.5 rounded">[{timeStr}] ASENTAMIENTO</span>
               <div className="flex space-x-1">
                  <span className={`text-[7px] px-1.5 py-0.5 rounded font-bold uppercase ${city.timeOfDay === 'Día' ? 'bg-amber-600/20 text-amber-500' : 'bg-indigo-600/20 text-indigo-400'}`}>
                    <i className={`fa-solid ${city.timeOfDay === 'Día' ? 'fa-sun' : 'fa-moon'} mr-1`}></i>{city.timeOfDay}
                  </span>
                  <span className="text-[8px] text-slate-500 font-bold uppercase">{city.type}</span>
               </div>
             </div>
             <h3 className="text-lg font-bold text-cyan-100 uppercase tracking-tight fantasy-font">{city.name}</h3>
             <div className="flex items-center space-x-2 my-1 py-1 border-y border-white/5">
                <div className="flex flex-col">
                   <span className="text-[7px] text-slate-500 uppercase font-bold tracking-widest">Población</span>
                   <span className="text-sm font-mono font-bold text-emerald-400">{city.population}</span>
                </div>
                <div className="h-6 w-[1px] bg-white/5"></div>
                <div className="flex flex-col">
                   <span className="text-[7px] text-slate-500 uppercase font-bold tracking-widest">Densidad</span>
                   <span className={`text-[8px] font-bold ${city.density === 'Alta' ? 'text-red-400' : city.density === 'Media' ? 'text-amber-400' : 'text-blue-400'}`}>{city.density}</span>
                </div>
             </div>
             <p className="text-xs text-slate-300 mt-1 italic leading-tight">"{city.atmosphere}"</p>
             <div className="mt-2 space-y-1">
               <div className="bg-black/30 p-1.5 rounded border border-cyan-900/20">
                  <span className="text-[8px] text-cyan-600 font-bold uppercase block tracking-widest">Lugar</span>
                  <p className="text-xs text-slate-200 font-bold"><i className="fa-solid fa-map-pin mr-1 text-cyan-500"></i>{city.notablePlace}</p>
               </div>
             </div>
             {/* BOTÓN SOLICITADO PARA GENERAR SERVICIOS */}
             <div className="mt-3">
               <button 
                 onClick={() => onGenerateServices && onGenerateServices(city)}
                 className="w-full py-1.5 bg-cyan-600/20 hover:bg-cyan-600/40 border border-cyan-500/40 rounded-lg text-[9px] font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center text-cyan-100 group/btn"
               >
                 <i className="fa-solid fa-shop mr-2 text-cyan-400"></i>
                 Analizar Servicios
               </button>
             </div>
          </div>
        );

      case LogType.SERVICES:
        const services = log.metadata as MerchantService[];
        return (
          <div key={log.id} className="mb-3 p-3 bg-slate-900 border border-slate-700 rounded-xl shadow-lg relative">
            <div className="absolute top-0 right-0 p-2 opacity-5"><i className="fa-solid fa-shop text-3xl"></i></div>
            <div className="flex justify-between items-center mb-2">
               <span className="text-[8px] text-slate-400 font-mono font-bold uppercase tracking-widest bg-slate-800 px-1.5 py-0.5 rounded">[{timeStr}] COMERCIO</span>
            </div>
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2 border-b border-slate-700 pb-1">{log.content}</h3>
            
            {services.length === 0 ? (
              <p className="text-[10px] text-slate-500 italic">No se han encontrado servicios disponibles.</p>
            ) : (
              <div className="space-y-2">
                {services.map((svc, idx) => (
                  <div key={idx} className="bg-black/30 p-2 rounded border border-white/5">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold text-slate-200">{svc.name}</span>
                      <span className={`text-[8px] px-1.5 rounded font-bold uppercase ${
                        svc.quality === 'Excelente' ? 'text-purple-400 bg-purple-900/20' :
                        svc.quality === 'Buena' ? 'text-green-400 bg-green-900/20' :
                        svc.quality === 'Media' ? 'text-blue-400 bg-blue-900/20' :
                        'text-red-400 bg-red-900/20'
                      }`}>{svc.quality}</span>
                    </div>
                    {svc.itemCDs && (
                      <div className="mt-1 grid grid-cols-4 gap-1 text-center">
                        {Object.entries(svc.itemCDs).map(([rarity, cd]) => (
                           cd !== '-' && (
                             <div key={rarity} className="bg-white/5 rounded px-1 py-0.5">
                               <span className="block text-[6px] text-slate-500 uppercase">{rarity.substring(0, 4)}</span>
                               <span className="block text-[9px] font-mono font-bold text-slate-300">CD {cd}</span>
                             </div>
                           )
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case LogType.ENCOUNTER:
        const c = log.metadata;
        return (
          <div key={log.id} className="mb-3 p-3 bg-red-950/10 border border-red-900/30 rounded-xl shadow-xl backdrop-blur-sm">
             <div className="flex justify-between items-center mb-1">
               <span className="text-[8px] text-red-500 font-mono font-bold uppercase tracking-widest bg-red-950/40 px-1.5 py-0.5 rounded">[{timeStr}] ENCUENTRO</span>
               <span className="bg-red-700 text-[8px] px-2 py-0.5 rounded-full font-bold uppercase">{c.type}</span>
             </div>
             <h3 className="text-lg font-bold text-red-100 uppercase tracking-tighter fantasy-font mb-1">{c.name}</h3>
             
             <div className="flex space-x-2 mb-2">
                <div className="bg-black/40 px-2 py-1 rounded border border-red-500/20 flex items-center space-x-1.5">
                    <i className="fa-solid fa-shield-halved text-[9px] text-slate-500"></i>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">CA</span>
                    <span className="text-sm font-bold text-slate-200">{c.stats.ac}</span>
                </div>
                <div className="bg-black/40 px-2 py-1 rounded border border-red-500/20 flex items-center space-x-1.5">
                    <i className="fa-solid fa-heart text-[9px] text-red-500"></i>
                    <span className="text-[9px] font-bold text-red-400 uppercase tracking-wider">PG</span>
                    <span className="text-sm font-bold text-red-200">{c.stats.hp}</span>
                </div>
             </div>

             {renderStats(c.stats)}
             
             {c.actions && c.actions.length > 0 && (
                <div className="mt-2 space-y-1">
                    {c.actions.map((act: any, idx: number) => (
                        <div key={idx} className="bg-black/20 p-1.5 rounded border border-red-900/10">
                            <span className="text-red-400 font-bold text-[9px] block uppercase tracking-wide mb-0.5">{act.name}</span>
                            <p className="text-[10px] text-slate-300 leading-tight">{act.desc}</p>
                        </div>
                    ))}
                </div>
             )}

             <p className="text-xs text-slate-400 italic mt-2 leading-tight border-t border-red-900/20 pt-1">"{c.description}"</p>
          </div>
        );

      case LogType.LOOT:
        const items = log.metadata as LootItem[];
        return (
           <div key={log.id} className="mb-3 p-3 bg-yellow-950/10 border border-yellow-500/30 rounded-xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-10"><i className="fa-solid fa-coins text-4xl"></i></div>
              <div className="flex justify-between items-center mb-2">
                 <span className="text-[8px] text-yellow-500 font-mono font-bold uppercase tracking-widest bg-yellow-950/40 px-1.5 py-0.5 rounded">[{timeStr}] BOTÍN</span>
              </div>
              {items.map((item, idx) => (
                <div key={idx} className="mb-2 last:mb-0">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-yellow-100 text-sm uppercase tracking-tight">{item.name}</h3>
                    <span className="text-[9px] bg-black/40 text-yellow-400 border border-yellow-500/20 px-1.5 py-0.5 rounded font-mono">{item.value}</span>
                  </div>
                  <div className="flex space-x-2 my-1">
                     <span className="text-[8px] text-slate-500 font-bold uppercase border border-slate-700 rounded px-1">{item.type}</span>
                     <span className={`text-[8px] font-bold uppercase px-1 rounded ${
                       item.rarity === 'Legendario' ? 'text-purple-400 bg-purple-900/20' :
                       item.rarity === 'Muy Raro' ? 'text-pink-400 bg-pink-900/20' :
                       item.rarity === 'Raro' ? 'text-blue-400 bg-blue-900/20' :
                       item.rarity === 'Poco Común' ? 'text-green-400 bg-green-900/20' :
                       'text-slate-400 bg-slate-800'
                     }`}>{item.rarity}</span>
                  </div>
                  <p className="text-xs text-slate-300 italic leading-tight border-l-2 border-yellow-500/20 pl-2 mt-1">"{item.description}"</p>
                </div>
              ))}
           </div>
        );

      case LogType.DICE:
        return (
          <div key={log.id} className="mb-2 p-2 bg-indigo-950/30 border-l-4 border-indigo-500 rounded-r-lg shadow-lg flex items-center">
            <div className="mr-3 text-indigo-400 text-lg"><i className="fa-solid fa-dice-d20"></i></div>
            <div>
              <span className="text-[7px] text-indigo-500 font-mono font-bold block uppercase tracking-tighter">[{timeStr}] RESULTADO</span>
              <p className="text-indigo-100 font-bold text-lg tracking-tighter leading-none">{log.content}</p>
            </div>
          </div>
        );

      case LogType.NPC:
        const npc = log.metadata;
        return (
          <div key={log.id} className="mb-3 p-3 bg-emerald-950/5 border border-emerald-500/20 rounded-xl shadow-lg">
             <span className="text-[8px] text-emerald-500 font-mono font-bold block mb-1 uppercase tracking-widest">[{timeStr}] NPC</span>
             <h3 className="font-bold text-emerald-100 text-lg uppercase tracking-tighter mb-0.5">{npc.name}</h3>
             <p className="text-[8px] font-bold text-emerald-600 uppercase mb-2 tracking-widest">{npc.race} • {npc.classOrOccupation}</p>
             {renderStats(npc.stats)}
             <div className="text-xs text-slate-400 bg-slate-900/40 p-2 rounded-lg border border-emerald-900/10 italic mt-2">
               <span className="text-emerald-600 font-bold uppercase text-[7px] block not-italic mb-0.5">Motivación</span>
               "{npc.hook}"
             </div>
          </div>
        );

      case LogType.ORACLE:
        return (
          <div key={log.id} className="mb-2 p-3 bg-purple-950/10 border border-purple-500/20 rounded-xl shadow-lg">
             <div className="flex justify-between items-center mb-1">
               <span className="text-[8px] text-purple-400 font-mono font-bold uppercase tracking-widest bg-purple-950/40 px-1.5 py-0.5 rounded">[{timeStr}] ORÁCULO</span>
               <span className="text-[8px] text-purple-200/40 font-bold uppercase italic">{log.metadata?.probability}</span>
             </div>
             <p className="text-slate-400 text-[10px] italic mb-1">"{log.metadata?.question}"</p>
             <p className="text-purple-100 font-bold text-sm fantasy-font tracking-wide border-t border-purple-500/10 pt-1">{log.content}</p>
          </div>
        );

      default:
        return (
          <div key={log.id} className="mb-2 p-2 bg-slate-900/40 border-l-4 border-slate-700 rounded-r">
            <span className="text-[8px] text-slate-500 font-mono">[{timeStr}] {log.type}</span>
            <p className="text-xs text-slate-300">{log.content || "Evento sin descripción."}</p>
          </div>
        );
    }
  };

  return (
    <div 
      ref={scrollRef}
      className="h-full overflow-y-auto p-2 space-y-1 bg-slate-950/95 border border-slate-800 rounded-lg shadow-2xl custom-scrollbar"
    >
      {logs.length === 0 ? (
        <div className="h-full flex flex-col items-center justify-center opacity-10">
          <i className="fa-solid fa-scroll-old text-6xl mb-2"></i>
          <p className="text-xs font-mono tracking-[0.5em] uppercase">Mundo en Silencio</p>
        </div>
      ) : (
        logs.map(renderEntry)
      )}
    </div>
  );
};

export default LogWindow;
