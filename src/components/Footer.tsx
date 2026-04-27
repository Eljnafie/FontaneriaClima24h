import { ContentSchema } from '../constants';
import { Droplets, Facebook, Instagram } from 'lucide-react';

export default function Footer({ content }: { content: ContentSchema }) {
  return (
    <footer className="bg-slate-950 text-slate-400 py-6 border-t-[6px] border-blue-600 rounded-t-2xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 max-w-7xl mx-auto">
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
            <Droplets size={20} />
          </div>
          <span className="font-bold text-lg text-white">Fontaneria<span className="text-blue-500">Clima</span></span>
        </div>
        
        <div className="flex gap-4 text-sm font-medium">
          {content.services.slice(0, 3).map(s => (
            <a key={s.id} href="#servicios" className="hover:text-white transition-colors">{s.title}</a>
          ))}
        </div>

        <div className="flex items-center gap-4 border-l border-slate-800 pl-4 text-xs">
          <p>© {new Date().getFullYear()} FontaneriaClima 24h.</p>
          <a href="/admin" className="text-slate-600 hover:text-white transition-colors" title="Admin Panel">Admin</a>
          <div className="flex gap-2">
            <a href={content.global.facebook} aria-label="Facebook" className="hover:text-white transition-colors"><Facebook size={16} /></a>
            <a href={content.global.instagram} aria-label="Instagram" className="hover:text-white transition-colors"><Instagram size={16} /></a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
