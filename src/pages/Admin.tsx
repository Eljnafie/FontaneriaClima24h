import { useState, useEffect } from 'react';
import { useContent } from '../context/ContentContext';
import { Check, Settings, RotateCcw, Home, Plus, Trash2, GripVertical, Save } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Admin() {
  const { content, updateContent, resetContent } = useContent();
  const [editedContent, setEditedContent] = useState(content);
  const [activeTab, setActiveTab] = useState<'services' | 'blog' | 'testimonials' | 'faq'>('services');
  const [saved, setSaved] = useState(false);

  // Sync state when content context updates (e.g. after reset)
  useEffect(() => {
    setEditedContent(content);
  }, [content]);

  const handleSave = () => {
    updateContent(editedContent);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleReset = () => {
    if(confirm("¿Estás seguro de que quieres restablecer todo el contenido a los valores por defecto?")) {
      resetContent();
    }
  }

  const updateItem = (category: keyof typeof editedContent, index: number, field: string, value: any) => {
    const newList = [...(editedContent[category] as any[])];
    newList[index] = { ...newList[index], [field]: value };
    setEditedContent({ ...editedContent, [category]: newList });
  };

  const addItem = (category: keyof typeof editedContent, defaultItem: any) => {
    const newList = [...(editedContent[category] as any[]), { ...defaultItem, id: Date.now().toString() }];
    setEditedContent({ ...editedContent, [category]: newList });
  };

  const removeItem = (category: keyof typeof editedContent, index: number) => {
    const newList = [...(editedContent[category] as any[])];
    newList.splice(index, 1);
    setEditedContent({ ...editedContent, [category]: newList });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row min-h-screen">
        
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-white border-r border-slate-200 p-6 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-8">
            <Settings className="text-blue-600" size={28} />
            <h1 className="text-xl font-bold text-slate-800">Panel Admin</h1>
          </div>
          
          <nav className="flex-1 space-y-2">
            {[
              { id: 'services', label: 'Servicios' },
              { id: 'blog', label: 'Artículos de Blog' },
              { id: 'testimonials', label: 'Testimonios' },
              { id: 'faq', label: 'FAQ' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full text-left px-4 py-2.5 rounded-lg transition-colors font-medium text-sm ${
                  activeTab === tab.id 
                    ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                    : 'text-slate-600 hover:bg-slate-100 border border-transparent'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <div className="pt-6 mt-6 border-t border-slate-200 space-y-3">
             <Link to="/" className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2.5 rounded-lg transition-colors text-sm font-bold">
              <Home size={16} />
              Volver a la Web
            </Link>
            <button 
              onClick={handleSave}
              className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-bold transition-all text-sm ${
                saved ? 'bg-green-600 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white active:scale-95'
              }`}
            >
              {saved ? <Check size={18} /> : <Save size={18} />}
              {saved ? 'Guardado' : 'Guardar Cambios'}
            </button>
            <button 
              onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 text-rose-600 hover:bg-rose-50 px-4 py-2 rounded-lg transition-colors text-xs font-semibold"
            >
              <RotateCcw size={14} />
              Resetear valores
            </button>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-6 md:p-10 bg-slate-50 overflow-y-auto">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold mb-6 capitalize">{activeTab}</h2>
            
            <div className="space-y-4">
              {(editedContent[activeTab] as any[]).map((item, index) => (
                <div key={item.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm relative group">
                  <button 
                    onClick={() => removeItem(activeTab, index)}
                    className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>

                  {/* Services Tab */}
                  {activeTab === 'services' && (
                    <div className="space-y-4 pr-8">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Nombre del Servicio</label>
                          <input 
                            className="w-full p-2 border border-slate-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" 
                            value={item.title} 
                            onChange={e => updateItem('services', index, 'title', e.target.value)} 
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Icono o Imagen URL</label>
                          <input 
                            className="w-full p-2 border border-slate-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" 
                            value={item.icon} 
                            onChange={e => updateItem('services', index, 'icon', e.target.value)} 
                            placeholder="Nombre Lucide o http://..."
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Descripción</label>
                        <textarea 
                          className="w-full p-2 border border-slate-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none" 
                          rows={2}
                          value={item.description} 
                          onChange={e => updateItem('services', index, 'description', e.target.value)} 
                        />
                      </div>
                    </div>
                  )}

                  {/* Blog Tab */}
                  {activeTab === 'blog' && (
                    <div className="space-y-4 pr-8">
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Título</label>
                        <input 
                          className="w-full p-2 border border-slate-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" 
                          value={item.title} 
                          onChange={e => updateItem('blog', index, 'title', e.target.value)} 
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Resumen</label>
                        <textarea 
                          className="w-full p-2 border border-slate-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none" 
                          rows={2}
                          value={item.excerpt} 
                          onChange={e => updateItem('blog', index, 'excerpt', e.target.value)} 
                        />
                      </div>
                      <div>
                         <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Imagen URL</label>
                        <input 
                          className="w-full p-2 border border-slate-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" 
                          value={item.image} 
                          onChange={e => updateItem('blog', index, 'image', e.target.value)} 
                        />
                      </div>
                    </div>
                  )}

                  {/* Testimonials Tab */}
                  {activeTab === 'testimonials' && (
                    <div className="space-y-4 pr-8">
                       <div className="grid grid-cols-4 gap-4">
                        <div className="col-span-3">
                          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Autor</label>
                          <input 
                            className="w-full p-2 border border-slate-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" 
                            value={item.name} 
                            onChange={e => updateItem('testimonials', index, 'name', e.target.value)} 
                          />
                        </div>
                        <div className="col-span-1">
                          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Puntuación (1-5)</label>
                          <input 
                            type="number"
                            min="1" max="5"
                            className="w-full p-2 border border-slate-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" 
                            value={item.rating} 
                            onChange={e => updateItem('testimonials', index, 'rating', parseInt(e.target.value))} 
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Opinión</label>
                        <textarea 
                          className="w-full p-2 border border-slate-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none" 
                          rows={2}
                          value={item.text} 
                          onChange={e => updateItem('testimonials', index, 'text', e.target.value)} 
                        />
                      </div>
                    </div>
                  )}

                  {/* FAQ Tab */}
                  {activeTab === 'faq' && (
                    <div className="space-y-4 pr-8">
                       <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Pregunta</label>
                        <input 
                          className="w-full p-2 border border-slate-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" 
                          value={item.question} 
                          onChange={e => updateItem('faq', index, 'question', e.target.value)} 
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Respuesta</label>
                        <textarea 
                          className="w-full p-2 border border-slate-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none" 
                          rows={2}
                          value={item.answer} 
                          onChange={e => updateItem('faq', index, 'answer', e.target.value)} 
                        />
                      </div>
                    </div>
                  )}

                </div>
              ))}

              <button 
                onClick={() => {
                  let defaultItem = {};
                  if(activeTab === 'services') defaultItem = { title: "Nuevo Servicio", description: "Descripción del servicio", icon: "Wrench" };
                  if(activeTab === 'blog') defaultItem = { title: "Nuevo Artículo", excerpt: "Resumen...", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" };
                  if(activeTab === 'testimonials') defaultItem = { name: "Cliente Anónimo", text: "Buena experiencia.", rating: 5 };
                  if(activeTab === 'faq') defaultItem = { question: "¿Nueva pregunta?", answer: "Respuesta..." };
                  addItem(activeTab, defaultItem);
                }}
                className="w-full py-4 border-2 border-dashed border-slate-300 text-slate-500 rounded-xl font-bold flex flex-col items-center justify-center gap-2 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
               >
                <Plus size={24} />
                Añadir Nuevo {activeTab.slice(0, -1)}
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
