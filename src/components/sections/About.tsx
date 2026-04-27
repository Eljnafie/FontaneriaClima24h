import { ContentSchema } from '../../constants';
import { Award, UserCheck, ShieldCheck, MapPin, Clock, Wrench } from 'lucide-react';

export default function About({ content }: { content: ContentSchema }) {
  return (
    <section id="nosotros" className="bg-slate-900 text-white rounded-2xl border border-slate-800 p-6 flex flex-col md:flex-row gap-8 items-center shadow-sm relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-20"></div>

      <div className="flex-1 relative z-10 w-full">
        <h2 className="text-[10px] font-bold text-blue-400 uppercase tracking-wider mb-1">Sobre Nosotros</h2>
        <h3 className="text-2xl font-bold mb-4 tracking-tight">Experiencia y Confianza</h3>
        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          Somos el equipo líder en instalaciones y reparaciones urgentes en la provincia de Barcelona.
          Respuesta rápida, garantía por escrito y materiales homologados.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
               <ShieldCheck size={16} />
            </div>
            <div className="text-[10px] font-bold leading-tight">Garantía<br/><span className="text-slate-400 font-medium">Por Escrito</span></div>
          </div>
          <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
               <Clock size={16} />
            </div>
            <div className="text-[10px] font-bold leading-tight">Respuesta<br/><span className="text-slate-400 font-medium">Urgente 24/7</span></div>
          </div>
          <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700 flex items-center gap-3">
             <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
               <MapPin size={16} />
            </div>
            <div className="text-[10px] font-bold leading-tight">Cobertura<br/><span className="text-slate-400 font-medium">Barcelona</span></div>
          </div>
           <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700 flex items-center gap-3">
             <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
               <Wrench size={16} />
            </div>
            <div className="text-[10px] font-bold leading-tight">Equipo<br/><span className="text-slate-400 font-medium">Homologado</span></div>
          </div>
        </div>
      </div>
      
      <div className="flex-1 w-full flex gap-2 relative z-10">
        <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800" alt="Electrician at work" className="w-[40%] h-64 object-cover rounded-xl mt-8" />
        <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800" alt="Professional Plumber" className="w-[60%] h-64 object-cover rounded-xl" />
      </div>
    </section>
  );
}
