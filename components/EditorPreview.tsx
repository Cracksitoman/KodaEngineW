import React from 'react';

export const EditorPreview: React.FC = () => {
  return (
    <section id="preview" className="py-12 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-xl bg-slate-800 p-2 shadow-2xl ring-1 ring-white/10">
          {/* Mock Window Header */}
          <div className="absolute top-0 left-0 right-0 h-10 bg-slate-800 rounded-t-xl border-b border-slate-700 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-4 text-xs text-slate-400 font-mono">Koda Engine - Project: MyFirstRPG</div>
          </div>

          {/* Mock Editor Content */}
          <div className="mt-10 bg-[#1e1e1e] rounded-b-lg aspect-video w-full overflow-hidden flex">
            {/* Sidebar */}
            <div className="w-64 bg-[#252526] border-r border-[#333] hidden md:flex flex-col p-2 gap-2">
              <div className="text-xs text-slate-400 uppercase font-bold px-2 mt-2">Assets</div>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-2 p-2 hover:bg-[#37373d] rounded cursor-pointer text-slate-300 text-sm">
                  <div className="w-4 h-4 bg-indigo-500/50 rounded"></div>
                  <span>sprite_player_0{i}.png</span>
                </div>
              ))}
              <div className="text-xs text-slate-400 uppercase font-bold px-2 mt-4">Objects</div>
              <div className="flex items-center gap-2 p-2 bg-[#37373d] rounded cursor-pointer text-white text-sm border-l-2 border-indigo-500">
                <div className="w-4 h-4 bg-blue-500/50 rounded"></div>
                <span>obj_player</span>
              </div>
            </div>

            {/* Main Viewport */}
            <div className="flex-1 bg-[#1e1e1e] relative p-8 flex items-center justify-center">
              {/* Grid Background within editor */}
              <div className="absolute inset-0 opacity-10" 
                   style={{ 
                     backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)', 
                     backgroundSize: '20px 20px' 
                   }}>
              </div>
              
              {/* Placeholder Game Screen */}
              <div className="relative w-full max-w-lg aspect-[4/3] bg-black/40 border border-indigo-500/30 shadow-2xl flex items-center justify-center">
                 <div className="text-center">
                   <div className="w-16 h-16 bg-indigo-500 mx-auto mb-4 animate-bounce rounded-sm shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
                   <p className="text-indigo-400 font-mono text-sm">Player_Start_Position</p>
                 </div>
                 
                 {/* Floating Palette UI Mockup */}
                 <div className="absolute top-4 right-4 w-32 bg-[#252526] p-2 rounded border border-[#444] shadow-xl">
                    <div className="text-[10px] text-slate-400 mb-1">PROPERTIES</div>
                    <div className="h-1 bg-indigo-500 w-full mb-1"></div>
                    <div className="h-1 bg-[#444] w-2/3 mb-1"></div>
                    <div className="h-1 bg-[#444] w-3/4"></div>
                 </div>
              </div>
            </div>

            {/* Right Panel (Inspector) */}
            <div className="w-64 bg-[#252526] border-l border-[#333] hidden lg:block p-4">
              <div className="text-sm font-bold text-slate-200 mb-4">Propiedades</div>
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-slate-500 block mb-1">Name</label>
                  <div className="w-full bg-[#3c3c3c] h-8 rounded border border-[#555] px-2 flex items-center text-sm text-white">obj_player</div>
                </div>
                <div>
                  <label className="text-xs text-slate-500 block mb-1">Position X/Y</label>
                  <div className="flex gap-2">
                    <div className="w-1/2 bg-[#3c3c3c] h-8 rounded border border-[#555] px-2 flex items-center text-sm text-white">120</div>
                    <div className="w-1/2 bg-[#3c3c3c] h-8 rounded border border-[#555] px-2 flex items-center text-sm text-white">240</div>
                  </div>
                </div>
                <div>
                  <label className="text-xs text-slate-500 block mb-1">Events</label>
                  <div className="w-full bg-indigo-900/30 h-24 rounded border border-indigo-500/30 p-2">
                     <div className="text-xs text-indigo-300 font-mono">
                        Create() {'{'}<br/>
                        &nbsp;&nbsp;hp = 100;<br/>
                        &nbsp;&nbsp;spd = 4;<br/>
                        {'}'}
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-slate-500 text-sm mt-4 italic">
          * Interfaz sujeta a cambios durante la fase Beta.
        </p>
      </div>
    </section>
  );
};