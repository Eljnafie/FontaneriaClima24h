import { ContentSchema } from '../../constants';

export default function Projects({ content }: { content: ContentSchema }) {
  return (
    <section id="proyectos" className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm overflow-hidden">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1">Casos de Éxito</h2>
          <h3 className="text-2xl font-bold text-slate-800 tracking-tight">Proyectos Recientes</h3>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {content.projects.map((project, idx) => (
          <div key={idx} className="group relative rounded-xl overflow-hidden aspect-square border border-slate-200">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-4">
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider mb-1">
                {project.tag}
              </span>
              <h4 className="text-sm font-bold text-white leading-tight">{project.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
