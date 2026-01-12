import React from 'react';
import { ArrowRight, Box, Code2, Layers, Smartphone, Monitor, Globe, Apple, Puzzle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-32 flex items-center justify-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Versión v0.1.0 Beta Disponible
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-indigo-300 tracking-tight mb-6 leading-tight">
          Crea Videojuegos 2D <br />
          <span className="text-indigo-500">Con Bloques o Código</span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10">
          <strong className="text-white">Koda Engine</strong> hace fácil lo difícil. 
          Utiliza nuestro sistema visual de <strong>bloques</strong> para empezar, o escribe scripts completos si buscas más control.
          Similar a Game Maker, pero simplificado.
        </p>

        <div className="flex flex-col items-center gap-6">
          {/* Botones Principales */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
            <a 
              href="https://www.mediafire.com/file/brdgsvzlbvrvcti/KodaEngineBeta.apk/file"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transition-all flex items-center justify-center gap-3 group"
            >
              <Smartphone className="w-6 h-6" />
              <span>Descargar Android</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="https://kodaengines.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-lg border border-slate-700 transition-all flex items-center justify-center gap-3"
            >
              <Globe className="w-6 h-6 text-indigo-400" />
              <span>Probar en Web</span>
            </a>
          </div>

          {/* Botones Futuros / Deshabilitados */}
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/5 text-slate-500 cursor-not-allowed select-none">
              <Apple size={18} />
              <span className="font-medium text-sm">iOS (Próximamente)</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/5 text-slate-500 cursor-not-allowed select-none">
              <Monitor size={18} />
              <span className="font-medium text-sm">PC (Próximamente)</span>
            </div>
          </div>
        </div>

        {/* Mini stats/features below CTA */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/5 pt-8">
          <div className="flex flex-col items-center gap-2">
            <Box className="text-indigo-400" />
            <span className="text-sm font-mono text-slate-400">Motor 2D Ligero</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Puzzle className="text-purple-400" />
            <span className="text-sm font-mono text-slate-400">Bloques Visuales</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Code2 className="text-pink-400" />
            <span className="text-sm font-mono text-slate-400">Editor de Scripts</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-xl font-bold text-white">ES</span>
            <span className="text-sm font-mono text-slate-400">100% en Español</span>
          </div>
        </div>
      </div>
    </section>
  );
};