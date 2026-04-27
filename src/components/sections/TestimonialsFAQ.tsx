import { useState } from 'react';
import { ContentSchema } from '../../constants';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';

export default function TestimonialsFAQ({ content }: { content: ContentSchema }) {
  const [openFaq, setOpenFaq] = useState<string | null>(content.faq[0]?.id || null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Testimonials */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col shadow-sm">
        <h3 className="text-lg font-black text-slate-800 mb-4 flex items-center gap-2">
          <span className="w-2 h-6 bg-blue-600 rounded-full"></span>
          Reseñas Destacadas
        </h3>
        
        <div className="flex-1 space-y-3">
          {content.testimonials.slice(0, 3).map((testimonial, idx) => (
            <div key={idx} className="bg-slate-50 p-4 border border-slate-100 rounded-xl">
              <div className="flex gap-1 text-yellow-400 mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" className="text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-slate-700 italic mb-3">"{testimonial.text}"</p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-[10px]">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold text-xs text-slate-900">{testimonial.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col shadow-sm">
        <h3 className="text-lg font-black text-slate-800 mb-4 flex items-center gap-2">
          <span className="w-2 h-6 bg-slate-800 rounded-full"></span>
          Preguntas Frecuentes
        </h3>
        
        <div className="space-y-2">
          {content.faq.map((item) => (
            <div 
              key={item.id} 
              className={`border rounded-xl overflow-hidden transition-all ${openFaq === item.id ? 'border-blue-500 bg-blue-50' : 'border-slate-200 bg-white hover:border-slate-300'}`}
            >
              <button 
                className="w-full text-left px-4 py-3 flex items-center justify-between font-bold text-sm text-slate-800"
                onClick={() => setOpenFaq(openFaq === item.id ? null : item.id)}
              >
                {item.question}
                {openFaq === item.id ? <ChevronUp size={16} className="text-blue-600" /> : <ChevronDown size={16} className="text-slate-400" />}
              </button>
              {openFaq === item.id && (
                <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
