import { ContentSchema } from '../../constants';
import * as Icons from 'lucide-react';

export default function Services({ content }: { content: ContentSchema }) {
  return (
    <section id="servicios" className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1">Nuestros Servicios</h2>
          <h3 className="text-2xl font-bold text-slate-800 tracking-tight">Catalogo de Especialidades</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {content.services.map((service) => {
          const isImageUrl = service.icon?.startsWith('http') || service.icon?.startsWith('/');
          const IconComponent = !isImageUrl ? ((Icons as any)[service.icon] || Icons.Wrench) : null;
          return (
            <div 
              key={service.id} 
              className="bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group flex flex-col"
            >
              {isImageUrl ? (
                <img src={service.icon} alt={service.title} className="w-10 h-10 object-cover rounded-lg mb-3" />
              ) : (
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <IconComponent size={20} />
                </div>
              )}
              <h4 className="font-bold text-sm text-slate-800 mb-1">{service.title}</h4>
              <p className="text-xs text-slate-500 leading-snug flex-1">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
