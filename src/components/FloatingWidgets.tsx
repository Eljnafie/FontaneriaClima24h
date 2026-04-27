import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { cn } from '../lib/utils';

export default function FloatingWidgets({ phone }: { phone: string }) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<{sender: 'bot'|'user', text: string}[]>([
    { sender: 'bot', text: '¡Hola! ¿En qué podemos ayudarte hoy?' }
  ]);
  
  const whatsappNumber = phone.replace(/[^0-9]/g, '');

  const handleOption = (option: string) => {
    setMessages(prev => [...prev, { sender: 'user', text: option }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: `Entendido. Te pondremos en contacto con un técnico para ayudarte con: "${option}". Por favor, llámanos o envíanos un WhatsApp para atención inmediata.` }]);
    }, 1000);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
        
        {/* Chat Window */}
        <div 
          className={cn(
            "bg-white w-80 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transition-all duration-300 origin-bottom-right",
            isChatOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none absolute bottom-16 right-0"
          )}
        >
          <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-semibold">Asistente Virtual</span>
            </div>
            <button onClick={() => setIsChatOpen(false)} className="hover:bg-blue-700 p-1 rounded-md transition-colors">
              <X size={20} />
            </button>
          </div>
          
          <div className="h-64 overflow-y-auto p-4 flex flex-col gap-3 bg-slate-50">
            {messages.map((msg, i) => (
              <div key={i} className={cn("max-w-[85%] p-3 rounded-2xl text-sm shadow-sm", msg.sender === 'bot' ? "bg-white border border-slate-100 text-slate-800 self-start rounded-tl-none" : "bg-blue-100 text-blue-900 self-end rounded-tr-none")}>
                {msg.text}
              </div>
            ))}
          </div>
          
          <div className="p-3 bg-white border-t border-slate-100 flex flex-wrap gap-2">
            <button onClick={() => handleOption('Tengo una urgencia')} className="text-xs bg-red-100 text-red-700 hover:bg-red-200 px-3 py-1.5 rounded-full transition-colors border border-red-200">🚨 Urgencia</button>
            <button onClick={() => handleOption('Pedir presupuesto')} className="text-xs bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full transition-colors border border-slate-200">📋 Presupuesto</button>
            <button onClick={() => handleOption('Duda general')} className="text-xs bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full transition-colors border border-slate-200">❓ Duda</button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button 
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-transform hover:scale-110 active:scale-95"
            aria-label="Abrir chat"
          >
            {isChatOpen ? <X size={24} /> : <MessageCircle size={28} />}
          </button>

          <a 
            href={`https://wa.me/${whatsappNumber}`} 
            target="_blank" 
            rel="noreferrer"
            className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#1ebd5a] transition-transform hover:scale-110 active:scale-95 relative group"
            aria-label="Contactar por WhatsApp"
          >
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.066.376-.051l.414-.509c.11-.138.225-.116.347-.072.123.044.783.369.918.438.134.069.224.105.256.164.031.058.031.332-.113.737z"></path>
            </svg>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
          </a>
        </div>
      </div>
    </>
  );
}
