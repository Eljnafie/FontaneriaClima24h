import { ContentSchema } from '../../constants';

export default function BlogPreview({ content }: { content: ContentSchema }) {
  return (
    <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1">Nuestro Blog</h2>
          <h3 className="text-2xl font-bold text-slate-800 tracking-tight">Consejos y Novedades</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {content.blog.map((post) => (
          <a key={post.id} href="#" className="group flex flex-col bg-slate-50 rounded-xl overflow-hidden border border-slate-200 hover:shadow-md transition-all">
            <div className="overflow-hidden h-32 w-full relative">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-3 flex-1 flex flex-col">
              <h4 className="text-sm font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
                {post.title}
              </h4>
              <p className="text-[10px] text-slate-500 line-clamp-2 flex-1">
                {post.excerpt}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
