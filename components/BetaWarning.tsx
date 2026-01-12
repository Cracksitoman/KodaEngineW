import React from 'react';
import { AlertTriangle, Hammer, Heart } from 'lucide-react';

export const BetaWarning: React.FC = () => {
  return (
    <section className="py-12 bg-amber-500/5 border-y border-amber-500/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-amber-500/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start gap-6 shadow-xl relative overflow-hidden">
          
          {/* Decorative background icon */}
          <AlertTriangle className="absolute -right-6 -bottom-6 w-32 h-32 text-amber-500/5 rotate-12" />

          <div className="flex-shrink-0 p-3 bg-amber-500/10 rounded-xl border border-amber-500/20">
            <Hammer className="w-8 h-8 text-amber-500" />
          </div>

          <div className="flex-1 relative z-10">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              Estado del Proyecto: <span className="text-amber-400">Beta Temprana</span>
            </h3>
            
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                <strong>Koda Engine</strong> es actualmente una herramienta en desarrollo. 
                Queremos ser totalmente transparentes contigo:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2 text-slate-400 text-sm">
                <li>Es una herramienta <strong>sencilla</strong> pensada para aprender.</li>
                <li>Puede contener <strong>errores (bugs)</strong> inesperados.</li>
                <li>Aún <strong>no es una herramienta profesional</strong> (pero trabajamos duro para que lo sea).</li>
              </ul>
              <p className="text-sm border-l-2 border-indigo-500 pl-4 italic text-slate-400">
                "Estamos construyendo esto con mucha pasión. Si encuentras un error, por favor repórtalo. 
                Tu ayuda es vital para convertir este pequeño proyecto en un motor profesional en el futuro."
              </p>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <span className="flex items-center gap-1 text-xs font-bold text-slate-500 uppercase tracking-wider">
                Hecho con <Heart size={12} className="text-red-500 fill-red-500" /> por indie devs
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};