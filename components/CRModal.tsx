
import React from 'react';

interface CRModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCR: (cr: string) => void;
}

const CRModal: React.FC<CRModalProps> = ({ isOpen, onClose, onSelectCR }) => {
  if (!isOpen) return null;

  const crList = [
    "0", "1/8", "1/4", "1/2", "1", "2", "3", "4", "5", 
    "6", "7", "8", "9", "10", "11", "12", "13", "14", 
    "15", "16", "17", "18", "19", "20", "21", "22", 
    "23", "24", "25", "30"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-lg rounded-2xl shadow-2xl p-6 overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold fantasy-font text-red-500 uppercase tracking-wider">Seleccionar Nivel de Desafío (CR)</h2>
          <button onClick={onClose} className="text-slate-500 hover:text-white transition-colors"><i className="fa-solid fa-xmark text-xl"></i></button>
        </div>
        
        <div className="grid grid-cols-5 gap-2 max-h-[60vh] overflow-y-auto custom-scrollbar p-1">
          {crList.map((cr) => (
            <button
              key={cr}
              onClick={() => onSelectCR(cr)}
              className="p-2 bg-slate-800 hover:bg-red-900/40 border border-slate-700 hover:border-red-500/50 rounded-lg transition-all text-slate-300 hover:text-red-300 font-bold font-mono text-sm"
            >
              CR {cr}
            </button>
          ))}
        </div>
        
        <div className="mt-4 p-3 bg-black/40 rounded border border-white/5 text-[9px] text-slate-500 text-center uppercase tracking-tighter italic">
          Selecciona el nivel de desafío para generar un monstruo de la lista local
        </div>
      </div>
    </div>
  );
};

export default CRModal;
