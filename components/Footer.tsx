import React from 'react';
import { Twitter, Github, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
               {/* Koda Logo SVG */}
               <div className="w-8 h-8 rounded-lg overflow-hidden">
                <svg viewBox="0 0 512 512" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <rect width="512" height="512" rx="100" fill="white"/>
                  <text x="50%" y="50%" dy=".35em" textAnchor="middle" fontSize="350" fontWeight="900" fill="black" fontFamily="system-ui, sans-serif">K</text>
                </svg>
              </div>
              <span className="font-bold text-xl text-white">Koda Engine</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Democratizando la creación de videojuegos con programación por bloques. 
              Una herramienta simple hoy, un motor potente mañana.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
              <a href="mailto:Kodaengine@gmail.com" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                <Mail size={20} />
                <span className="text-sm">Kodaengine@gmail.com</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Producto</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="https://www.mediafire.com/file/brdgsvzlbvrvcti/KodaEngineBeta.apk/file" target="_blank" className="hover:text-indigo-400">Descargar APK</a></li>
              <li><a href="https://kodaengines.vercel.app/" target="_blank" className="hover:text-indigo-400">Probar Web</a></li>
              <li><a href="#" className="hover:text-indigo-400">Tutoriales</a></li>
              <li><a href="#" className="hover:text-indigo-400">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-indigo-400">Privacidad</a></li>
              <li><a href="#" className="hover:text-indigo-400">Términos de Uso</a></li>
              <li><a href="#" className="hover:text-indigo-400">Licencia</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Koda Engine. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span>Sistemas Operativos</span>
          </div>
        </div>
      </div>
    </footer>
  );
};