
import React, { useState } from 'react';
import { OracleProbability } from '../types';

interface GeneratorControlsProps {
  onGenerateNPC: () => void;
  onGenerateQuest: () => void;
  onGenerateLoot: () => void;
  onGenerateNature: () => void;
  onGenerateUrban: () => void;
  onGenerateCity: () => void;
  onGenerateMonster?: () => void;
  onGenerateBoss?: () => void;
  onGenerateDungeon: () => void;
  onQueryOracle: (question: string, prob: OracleProbability) => void;
  loading: boolean;
}

const GeneratorControls: React.FC<GeneratorControlsProps> = ({ 
  onGenerateNPC, 
  onGenerateQuest,
  onGenerateLoot,
  onGenerateNature,
  onGenerateUrban,
  onGenerateCity,
  onGenerateMonster,
  onGenerateBoss,
  onGenerateDungeon,
  onQueryOracle, 
  loading 
}) => {
  const [oracleQuestion, setOracleQuestion] = useState('');
  const [probability, setProbability] = useState<OracleProbability>('Equilibrado');

  const probabilities: OracleProbability[] = [
    'Muy Improbable',
    'Poco Probable',
    'Equilibrado',
    'Probable',
    'Muy Probable'
  ];

  const handleOracleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (oracleQuestion.trim() && !loading) {
      onQueryOracle(oracleQuestion, probability);
      setOracleQuestion('');
    }
  };

  const BigButton = ({ onClick, icon, label, colorClass, borderClass, textClass }: any) => (
    <button
      disabled={loading}
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-2 lg:p-3 ${colorClass} hover:brightness-125 ${borderClass} border rounded-xl transition-all disabled:opacity-30 disabled:cursor-not-allowed group shadow-md active:scale-95`}
    >
      <i className={`fa-solid ${icon} text-lg lg:text-xl ${textClass} mb-1 lg:mb-2 group-hover:scale-110 transition-transform`}></i>
      <span className="font-bold text-[8px] lg:text-[9px] uppercase tracking-wider text-slate-300">{label}</span>
    </button>
  );

  return (
    <div className="space-y-2 lg:space-y-4 shrink-0">
      <div className="grid grid-cols-3 gap-2 lg:gap-3">
        <BigButton 
          onClick={onGenerateNPC} 
          icon="fa-person-rays" 
          label="NPC" 
          colorClass="bg-emerald-600/10" 
          borderClass="border-emerald-500/30" 
          textClass="text-emerald-400" 
        />
        <BigButton 
          onClick={onGenerateQuest} 
          icon="fa-scroll" 
          label="Misión" 
          colorClass="bg-amber-600/10" 
          borderClass="border-amber-500/30" 
          textClass="text-amber-400" 
        />
        <BigButton 
          onClick={onGenerateLoot} 
          icon="fa-coins" 
          label="Botín" 
          colorClass="bg-yellow-600/10" 
          borderClass="border-yellow-500/30" 
          textClass="text-yellow-400" 
        />
        <BigButton 
          onClick={onGenerateCity} 
          icon="fa-city" 
          label="Ciudad" 
          colorClass="bg-cyan-600/10" 
          borderClass="border-cyan-500/20" 
          textClass="text-cyan-400" 
        />
        <BigButton 
          onClick={onGenerateUrban} 
          icon="fa-building-user" 
          label="Urbanos" 
          colorClass="bg-sky-900/20" 
          borderClass="border-sky-500/30" 
          textClass="text-sky-400" 
        />
        <BigButton 
          onClick={onGenerateNature} 
          icon="fa-tree" 
          label="Naturaleza" 
          colorClass="bg-green-900/20" 
          borderClass="border-green-500/30" 
          textClass="text-green-400" 
        />
        <BigButton 
          onClick={onGenerateMonster} 
          icon="fa-dragon" 
          label="Monstruos" 
          colorClass="bg-red-900/20" 
          borderClass="border-red-500/30" 
          textClass="text-red-400" 
        />
        <BigButton 
          onClick={onGenerateBoss} 
          icon="fa-skull" 
          label="Jefes" 
          colorClass="bg-purple-900/20" 
          borderClass="border-purple-500/30" 
          textClass="text-purple-400" 
        />
        <BigButton 
          onClick={onGenerateDungeon} 
          icon="fa-dungeon" 
          label="Mazmorra" 
          colorClass="bg-indigo-600/10" 
          borderClass="border-indigo-500/30" 
          textClass="text-indigo-400" 
        />
      </div>

      <div className="bg-slate-800/40 p-2 lg:p-4 rounded-xl border border-slate-700 shadow-lg">
        <h3 className="text-slate-500 text-[8px] lg:text-[9px] font-bold uppercase tracking-widest mb-2 lg:mb-3 flex items-center">
          <i className="fa-solid fa-crystal-ball mr-2 text-purple-400"></i>
          Oráculo del Destino
        </h3>
        
        <form onSubmit={handleOracleSubmit} className="space-y-2 lg:space-y-3">
          <input 
            type="text" 
            placeholder="¿Hay una trampa oculta?"
            value={oracleQuestion}
            onChange={(e) => setOracleQuestion(e.target.value)}
            className="w-full bg-slate-900/60 border border-slate-700 rounded-lg p-2 lg:p-3 text-xs focus:ring-1 focus:ring-purple-500/50 outline-none placeholder:text-slate-600 transition-all text-slate-200"
          />
          
          <div className="flex flex-wrap gap-1">
            {probabilities.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setProbability(p)}
                className={`text-[7px] lg:text-[8px] font-bold px-1.5 py-0.5 lg:px-2 lg:py-1 rounded transition-all border ${
                  probability === p 
                    ? 'bg-purple-600 border-purple-400 text-white' 
                    : 'bg-slate-900/60 border-slate-700 text-slate-500 hover:border-slate-500'
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          <button
            type="submit"
            disabled={loading || !oracleQuestion.trim()}
            className="w-full py-2 lg:py-2.5 bg-purple-600/40 hover:bg-purple-600 text-white font-bold rounded-lg shadow-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed text-[9px] lg:text-[10px] uppercase tracking-widest flex items-center justify-center"
          >
            {loading ? (
              <i className="fa-solid fa-spinner fa-spin mr-2"></i>
            ) : (
              <i className="fa-solid fa-bolt mr-2 text-yellow-300"></i>
            )}
            Consultar Destino
          </button>
        </form>
      </div>
    </div>
  );
};

export default GeneratorControls;
