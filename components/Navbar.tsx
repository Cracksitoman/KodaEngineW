import React, { useState } from 'react';
import { Menu, X, Github } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full z-50 backdrop-blur-lg bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
            {/* Koda Logo SVG */}
            <div className="w-10 h-10 shadow-lg shadow-white/5 rounded-xl overflow-hidden">
              <svg viewBox="0 0 512 512" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <rect width="512" height="512" rx="100" fill="white"/>
                <text x="50%" y="50%" dy=".35em" textAnchor="middle" fontSize="350" fontWeight="900" fill="black" fontFamily="system-ui, sans-serif">K</text>
              </svg>
            </div>
            
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-white leading-none">
                KODA <span className="text-indigo-400">ENGINE</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400 leading-none mt-1">
                BETA v0.1.0
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#features" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Características
              </a>
              <a href="#preview" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Galería
              </a>
              <a href="#roadmap" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Futuro
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2"
              >
                <Github size={16} />
                GitHub
              </a>
              <a 
                href="https://www.mediafire.com/file/brdgsvzlbvrvcti/KodaEngineBeta.apk/file"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg text-sm font-bold shadow-lg shadow-indigo-500/30 transition-all transform hover:scale-105"
              >
                Descargar Beta
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Características</a>
            <a href="#preview" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Galería</a>
            <a href="#roadmap" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Futuro</a>
            <a 
              href="https://www.mediafire.com/file/brdgsvzlbvrvcti/KodaEngineBeta.apk/file"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-left bg-indigo-600 text-white block px-3 py-2 rounded-md text-base font-medium mt-4"
            >
              Descargar Beta
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};