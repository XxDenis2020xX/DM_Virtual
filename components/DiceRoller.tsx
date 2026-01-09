
import React, { useState } from 'react';
import { DieType } from '../types';

interface DiceRollerProps {
  onRoll: (die: DieType, modifier: number, result: number) => void;
}

const DiceRoller: React.FC<DiceRollerProps> = ({ onRoll }) => {
  const [modifier, setModifier] = useState<number>(0);
  const dice: DieType[] = [4, 6, 8, 12, 20, 100];

  const rollDie = (die: DieType) => {
    const roll = Math.floor(Math.random() * die) + 1;
    onRoll(die, modifier, roll);
  };

  return (
    <div className="bg-slate-800/40 p-2 lg:p-4 rounded-xl border border-slate-700 shadow-lg shrink-0">
      <h3 className="text-slate-400 text-[9px] lg:text-xs font-bold uppercase tracking-widest mb-2 lg:mb-4 flex items-center">
        <i className="fa-solid fa-dice-d20 mr-2 text-indigo-400"></i>
        Tirada de Dados
      </h3>
      
      <div className="grid grid-cols-3 gap-1 lg:gap-2 mb-2 lg:mb-4">
        {dice.map((d) => (
          <button
            key={d}
            onClick={() => rollDie(d)}
            className="flex flex-col items-center justify-center p-1.5 lg:p-2 bg-indigo-600/20 hover:bg-indigo-600/40 border border-indigo-500/30 rounded-lg transition-all group active:scale-95"
          >
            <span className="text-[10px] lg:text-xs text-indigo-300 font-mono mb-0.5 lg:mb-1">d{d}</span>
            <i className={`fa-solid fa-dice-${d === 20 || d === 100 ? 'd20' : 'one'} text-indigo-100 group-hover:scale-110 transition-transform text-xs lg:text-base`}></i>
          </button>
        ))}
      </div>

      <div className="flex items-center space-x-2 lg:space-x-3 bg-slate-900/60 p-1.5 lg:p-2 rounded-lg border border-slate-700">
        <label className="text-[10px] lg:text-xs text-slate-400 font-bold ml-1">MOD:</label>
        <input 
          type="number" 
          value={modifier}
          onChange={(e) => setModifier(parseInt(e.target.value) || 0)}
          className="bg-transparent text-indigo-200 w-full focus:outline-none font-mono text-center text-sm"
        />
        <div className="flex flex-col space-y-0.5 lg:space-y-1">
          <button onClick={() => setModifier(m => m + 1)} className="text-[10px] hover:text-indigo-400 px-1"><i className="fa-solid fa-chevron-up"></i></button>
          <button onClick={() => setModifier(m => m - 1)} className="text-[10px] hover:text-indigo-400 px-1"><i className="fa-solid fa-chevron-down"></i></button>
        </div>
      </div>
    </div>
  );
};

export default DiceRoller;
