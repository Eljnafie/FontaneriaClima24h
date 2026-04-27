import { ContentSchema } from '../../constants';
import { Phone, Calculator } from 'lucide-react';

export default function Hero({ content }: { content: ContentSchema }) {
  return (
    <section id="inicio" className="relative bg-slate-900 rounded-2xl overflow-hidden p-6 sm:p-10 flex flex-col justify-end min-h-[350px] shadow-2xl">
      <div className="absolute inset-0 opacity-40 bg-gradient-to-t from-blue-900 to-transparent z-10"></div>
      
      {/* Decorative pattern */}
        <div className="absolute top-0 right-0 p-8 opacity-10 z-10">
          <svg className="w-48 h-48 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
        </div>

      {/* Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=2000" 
        alt="Fontanería y Climatización" 
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
      />

      <div className="relative z-20 w-full">
        <span className="bg-blue-500 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block italic">Líderes en Barcelona</span>
        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-2 max-w-2xl">
          {content.hero.headline}
        </h2>
        <p className="text-blue-100 text-base md:text-lg mb-6 max-w-xl line-clamp-3">
          {content.hero.subheadline} Reparación, instalación y mantenimiento. Respuesta rápida garantizada.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:items-center">
          <a 
            href={`tel:${content.global.phone.replace(/\s+/g, '')}`}
            className="flex items-center justify-center gap-2 bg-white text-blue-900 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
          >
            <Phone size={18} />
            {content.hero.cta1}
          </a>
          <a 
            href="#calculadora"
            className="flex items-center justify-center gap-2 bg-blue-600/30 backdrop-blur-md border border-blue-400/30 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-600/50 transition-colors"
          >
            <Calculator size={18} />
            {content.hero.cta2}
          </a>
        </div>
      </div>
    </section>
  );
}
