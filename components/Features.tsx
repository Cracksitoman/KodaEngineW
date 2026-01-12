import React from 'react';
import { MousePointer2, Image, Terminal, Play, Grid, Globe, Puzzle } from 'lucide-react';

const featureList = [
  {
    icon: <Puzzle className="w-6 h-6 text-blue-400" />,
    title: "Programación por Bloques",
    description: "Lógica visual intuitiva. Conecta bloques de eventos y acciones sin necesidad de memorizar sintaxis compleja."
  },
  {
    icon: <Globe className="w-6 h-6 text-green-400" />,
    title: "Exportación HTML5",
    description: "Publica tus juegos directamente para la web. Comparte tu enlace y cualquiera podrá jugar desde su navegador."
  },
  {
    icon: <Image className="w-6 h-6 text-purple-400" />,
    title: "Editor de Sprites",
    description: "Importa tus imágenes o edita píxeles directamente en la herramienta. Soporte para PNG y GIF."
  },
  {
    icon: <Terminal className="w-6 h-6 text-pink-400" />,
    title: "También con Scripts",
    description: "¿Prefieres escribir código? Koda Engine permite scripting para comportamientos avanzados y personalizados."
  },
  {
    icon: <Grid className="w-6 h-6 text-orange-400" />,
    title: "Editor de Niveles",
    description: "Diseña tus mundos usando un sistema de tiles (baldosas) fácil de usar. Capas ilimitadas."
  },
  {
    icon: <Play className="w-6 h-6 text-red-400" />,
    title: "Testing Instantáneo",
    description: "Prueba tu juego con un solo clic en el editor. Itera rápido y corrige errores al instante."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Todo lo que necesitas para empezar</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Hemos destilado las funciones esenciales de un motor de juegos para que te centres en la creatividad, no en la configuración.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((feature, index) => (
            <div 
              key={index} 
              className="group p-6 bg-slate-800/50 backdrop-blur-sm border border-white/5 rounded-2xl hover:bg-slate-800 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};