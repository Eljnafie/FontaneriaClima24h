import React, { useState } from 'react';
import { ContentSchema } from '../../constants';
import { Calendar, Clock, User, Phone, Mail, CheckCircle2 } from 'lucide-react';

export default function Booking({ content }: { content: ContentSchema }) {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    service: content.services[0]?.title || '',
    date: '',
    time: '09:00 - 11:00',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    // Simulating API call
    setTimeout(() => {
      setSuccess(false);
      setFormData({ service: content.services[0]?.title || '', date: '', time: '09:00 - 11:00', phone: '' });
    }, 5000);
  };

  return (
    <section id="reservas" className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col shadow-sm">
      <h3 className="text-lg font-black text-slate-800 mb-4 flex items-center gap-2">
        <span className="w-2 h-6 bg-blue-600 rounded-full"></span>
        Reserva tu Cita Online
      </h3>
      
      {success ? (
        <div className="text-center py-8">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 size={24} className="text-green-600" />
          </div>
          <h4 className="text-lg font-bold text-slate-900 mb-2">¡Reserva Confirmada!</h4>
          <p className="text-[12px] text-slate-500">
            Te contactaremos pronto al <strong>{formData.phone}</strong> para confirmar tu cita.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Servicio Requerido</label>
            <select 
              value={formData.service}
              onChange={e => setFormData({...formData, service: e.target.value})}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {content.services.map(s => (
                <option key={s.id} value={s.title}>{s.title}</option>
              ))}
            </select>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Fecha</label>
              <input 
                type="date" 
                required
                value={formData.date}
                onChange={e => setFormData({...formData, date: e.target.value})}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Hora</label>
              <select 
                value={formData.time}
                onChange={e => setFormData({...formData, time: e.target.value})}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>09:00 - 11:00</option>
                <option>11:00 - 13:00</option>
                <option>15:00 - 17:00</option>
                <option>Urgencia Ahora</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Tu Teléfono</label>
            <input 
              type="tel" 
              required
              placeholder="+34 600 000 000"
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
          
          <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl mt-2 hover:bg-blue-700 active:scale-[0.98] transition-all">
            Confirmar Reserva
          </button>
          <p className="text-[10px] text-center text-slate-400 font-medium italic">Respondemos en menos de 15 minutos vía WhatsApp</p>
        </form>
      )}
    </section>
  );
}
