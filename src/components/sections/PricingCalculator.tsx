import { useState } from 'react';
import { ContentSchema } from '../../constants';
import { Calculator, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function PricingCalculator({ content }: { content: ContentSchema }) {
  const [serviceIndex, setServiceIndex] = useState("0");
  const [urgency, setUrgency] = useState("standard");
  const [complexity, setComplexity] = useState("standard");

  const calculatePrice = () => {
    let base = content.pricing.baseHourlyRate;
    const serviceBaseAdd = parseInt(serviceIndex) * 15; 
    base += serviceBaseAdd;
    if (urgency === '24h') base *= content.pricing.emergencyMultiplier;
    base *= (content.pricing.complexityRates as any)[complexity];
    return Math.round(base);
  };

  const estimatedPrice = calculatePrice();
  const marketPrice = Math.round(estimatedPrice * 1.25);

  return (
    <section id="calculadora" className="bg-slate-900 rounded-2xl border border-slate-800 p-6 flex flex-col shadow-xl text-white relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
      
      <h4 className="text-[10px] font-bold text-blue-400 uppercase mb-4 tracking-wider flex items-center gap-1.5">
        <Calculator size={14} />
        Calculadora Express
      </h4>

      <div className="space-y-4 mb-6 relative z-10">
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Servicio</label>
          <select 
            value={serviceIndex}
            onChange={(e) => setServiceIndex(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {content.services.map((s, i) => (
              <option key={s.id} value={i}>{s.title}</option>
            ))}
          </select>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
           <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Urgencia</label>
            <select 
              value={urgency}
              onChange={(e) => setUrgency(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="standard">Estándar</option>
              <option value="24h">24h</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Complejidad</label>
            <select 
              value={complexity}
              onChange={(e) => setComplexity(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="simple">Baja</option>
              <option value="standard">Media</option>
              <option value="complex">Alta</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 relative z-10">
        <div className="flex justify-between items-end mb-2">
          <div>
            <span className="text-4xl font-black">{estimatedPrice}€</span>
            <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-bold">Precio Estimado</span>
          </div>
          <div className="text-right text-[10px] text-slate-300 font-bold">
             Mercado: <span className="line-through opacity-70">{marketPrice}€</span> <br/>
            <span className="text-green-400">Ahorras {marketPrice - estimatedPrice}€</span>
          </div>
        </div>
        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mb-2">
          <div className="bg-blue-500 h-full w-[65%]"></div>
        </div>
        
        <a 
          href={`https://wa.me/${content.global.phone.replace(/[^0-9]/g, '')}?text=Hola, he calculado un presupuesto en la web para ${content.services[parseInt(serviceIndex)]?.title} y me gustaría confirmarlo.`}
          target="_blank"
          rel="noreferrer"
          className="mt-2 text-center bg-blue-600/30 border border-blue-500 text-blue-100 font-bold text-sm py-2.5 rounded-xl hover:bg-blue-600/50 transition-colors active:scale-95"
        >
          Confirmar Presupuesto
        </a>
      </div>
    </section>
  );
}
