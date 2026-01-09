
import React from 'react';

interface LootModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRange: (range: string) => void;
}

const LootModal: React.FC<LootModalProps> = ({ isOpen, onClose, onSelectRange }) => {
  if (!isOpen) return null;

  const ranges = [
    { label: "CR 0-1", key: "0-1" },
    { label: "CR 2-4", key: "2-4" },
    { label: "CR 5-7", key: "5-7" },
    { label: "CR 8-11", key: "8-11" },
    { label: "CR 12+", key: "12+" } // Interpreting "cr12-5" typo as 12+ or 12-15
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-sm rounded-2xl shadow-2xl p-6 overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold fantasy-font text-yellow-500 uppercase tracking-wider">Botín por Nivel</h2>
          <button onClick={onClose} className="text-slate-500 hover:text-white transition-colors"><i className="fa-solid fa-xmark text-xl"></i></button>
        </div>
        
        <div className="grid grid-cols-1 gap-3">
          {ranges.map((r) => (
            <button
              key={r.key}
              onClick={() => onSelectRange(r.key)}
              className="flex items-center justify-between p-3 bg-slate-800 hover:bg-yellow-900/20 border border-slate-700 hover:border-yellow-500/50 rounded-lg transition-all group active:scale-95"
            >
              <span className="text-sm font-bold text-slate-200 group-hover:text-yellow-100 uppercase tracking-widest">{r.label}</span>
              <i className="fa-solid fa-coins text-yellow-500/50 group-hover:text-yellow-400"></i>
            </button>
          ))}
        </div>
        
        <div className="mt-6 p-3 bg-black/40 rounded border border-white/5 text-[9px] text-slate-500 text-center uppercase tracking-tighter italic">
          Selecciona el rango para generar botín de las listas locales
        </div>
      </div>
    </div>
  );
};

export default LootModal;
