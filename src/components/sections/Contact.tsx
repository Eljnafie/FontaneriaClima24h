import React, { useState } from 'react';
import { ContentSchema } from '../../constants';
import { MapPin, Phone, Mail, Clock, Send, ShieldAlert } from 'lucide-react';

export default function Contact({ content }: { content: ContentSchema }) {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle'|'sending'|'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  }

  return (
    <section id="contacto" className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-sm overflow-hidden text-white relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl opacity-50"></div>

      <div className="flex flex-col md:flex-row gap-8 relative z-10">
        <div className="flex-1 space-y-4">
          <div>
            <h2 className="text-[10px] font-bold text-blue-400 uppercase tracking-wider mb-1">Contacto</h2>
            <h3 className="text-2xl font-bold tracking-tight">Estamos aquí para ayudarte</h3>
          </div>

          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 flex gap-3 items-start">
            <ShieldAlert className="text-red-400 shrink-0" size={20} />
            <div>
              <h4 className="text-red-400 font-bold text-sm mb-0.5">¿Urgencia? Llámanos</h4>
              <a href={`tel:${content.global.phone.replace(/\s+/g, '')}`} className="text-xl font-black text-white hover:text-red-400 transition-colors">
                {content.global.phone}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-2">
              <Phone className="text-blue-400 shrink-0 mt-0.5" size={16} />
              <div>
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Teléfono</h4>
                <a href={`tel:${content.global.phone.replace(/\s+/g, '')}`} className="text-sm font-semibold hover:text-blue-400">{content.global.phone}</a>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Mail className="text-blue-400 shrink-0 mt-0.5" size={16} />
              <div>
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email</h4>
                <a href={`mailto:${content.global.email}`} className="text-sm font-semibold hover:text-blue-400 truncate block">{content.global.email}</a>
              </div>
            </div>
            <div className="flex items-start gap-2">
               <MapPin className="text-blue-400 shrink-0 mt-0.5" size={16} />
              <div>
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Dirección</h4>
                <p className="text-sm">{content.global.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
               <Clock className="text-blue-400 shrink-0 mt-0.5" size={16} />
              <div>
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Horario</h4>
                <p className="text-sm">{content.global.schedule}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <form onSubmit={handleSubmit} className="bg-slate-800 rounded-xl p-5 border border-slate-700 space-y-3">
             <div className="grid grid-cols-2 gap-3">
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tu nombre"
                />
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Teléfono"
                />
            </div>
            <textarea 
              required
              rows={3}
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="¿En qué podemos ayudarte?"
            />
            <button 
              type="submit" 
              disabled={status === 'sending' || status === 'sent'}
              className={`w-full py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                status === 'sent' ? 'bg-green-600 text-white' : 
                status === 'sending' ? 'bg-blue-800 text-blue-200 cursor-not-allowed' : 
                'bg-blue-600 text-white hover:bg-blue-700 active:scale-[0.98]'
              }`}
            >
               {status === 'sent' ? (
                <>Enviado ✓</>
              ) : status === 'sending' ? (
                <>Enviando...</>
              ) : (
                <>
                  Enviar Mensaje
                  <Send size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
