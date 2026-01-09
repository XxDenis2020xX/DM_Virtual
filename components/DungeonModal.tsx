
import React from 'react';

interface DungeonModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGenerate: (type: string) => void;
  loading: boolean;
}

const DungeonModal: React.FC<DungeonModalProps> = ({ isOpen, onClose, onGenerate, loading }) => {
  if (!isOpen) return null;

  const elements = [
    { id: 'Habitación', icon: 'fa-vector-square', label: 'Habitación' },
    { id: 'Pasillo', icon: 'fa-arrows-left-right', label: 'Pasillo' },
    { id: 'Puerta', icon: 'fa-door-open', label: 'Puerta' },
    { id: 'Trampa', icon: 'fa-skull-crossbones', label: 'Trampa' },
    { id: 'Pistas/Rastros', icon: 'fa-shoe-prints', label: 'Pista' },
    { id: 'Puerta Secreta', icon: 'fa-eye-slash', label: 'Secreta' },
    { id: 'Sala Grande', icon: 'fa-chess-rook', label: 'Sala' },
    { id: 'Tesoro Oculto', icon: 'fa-coins', label: 'Tesoro' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-md rounded-2xl shadow-2xl p-6 overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold fantasy-font text-amber-500 uppercase tracking-wider">Contenido de Mazmorra</h2>
          <button onClick={onClose} className="text-slate-500 hover:text-white transition-colors"><i className="fa-solid fa-xmark text-xl"></i></button>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {elements.map((el) => (
            <button
              key={el.id}
              disabled={loading}
              onClick={() => onGenerate(el.id)}
              className="flex items-center space-x-3 p-3 bg-slate-800 hover:bg-indigo-600/30 border border-slate-700 rounded-lg transition-all group disabled:opacity-50"
            >
              <i className={`fa-solid ${el.icon} text-indigo-400 group-hover:scale-110 transition-transform w-5 text-center`}></i>
              <span className="text-[10px] font-bold uppercase">{el.label}</span>
            </button>
          ))}
        </div>
        
        <div className="mt-6 p-3 bg-black/40 rounded border border-white/5 text-[9px] text-slate-500 text-center uppercase tracking-tighter italic">
          Genera elementos basados en tablas d20 y d100 del manual
        </div>
      </div>
    </div>
  );
};

export default DungeonModal;
