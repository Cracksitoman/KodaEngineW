import React from 'react';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

const steps = [
  { status: 'done', title: 'Motor de Renderizado', desc: 'Soporte para sprites estáticos y animados.' },
  { status: 'done', title: 'Programación Visual', desc: 'Sistema de bloques lógicos implementado.' },
  { status: 'current', title: 'Exportación HTML5', desc: '¡Ya disponible! Exporta tus juegos para la web.' },
  { status: 'future', title: 'Exportación Windows / Android', desc: 'Próximamente podrás crear .exe y .apk nativos.' },
  { status: 'future', title: 'Marketplace de Assets', desc: 'Descarga recursos gratuitos directamente en el editor.' },
  { status: 'future', title: 'Modo Profesional', desc: 'Herramientas avanzadas de debugging y optimización.' },
];

export const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Hacia el Futuro</h2>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2 md:translate-x-0" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Icon Marker */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 border-4 border-slate-800 z-10">
                  {step.status === 'done' && <div className="w-full h-full rounded-full bg-green-500" />}
                  {step.status === 'current' && <div className="w-full h-full rounded-full bg-indigo-500 animate-pulse" />}
                  {step.status === 'future' && <div className="w-2 h-2 rounded-full bg-slate-600" />}
                </div>

                {/* Content Box */}
                <div className="ml-20 md:ml-0 md:w-[45%] p-6 bg-slate-800/40 rounded-xl border border-white/5 hover:border-indigo-500/30 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    {step.status === 'done' && <CheckCircle2 size={16} className="text-green-500" />}
                    {step.status === 'current' && <Clock size={16} className="text-indigo-400" />}
                    {step.status === 'future' && <Circle size={16} className="text-slate-600" />}
                    <h3 className={`font-bold ${step.status === 'current' ? 'text-indigo-400' : 'text-slate-200'}`}>
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 text-sm">{step.desc}</p>
                </div>
                
                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};