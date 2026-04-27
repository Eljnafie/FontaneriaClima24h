import React, { useState } from 'react';
import { Menu, X, Phone, Droplets } from 'lucide-react';
import { ContentSchema } from '../constants';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Calculadora', href: '#calculadora' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Reservas', href: '#reservas' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Header({ content }: { content: ContentSchema }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col shadow-sm select-none">
      {/* Top Utility Bar */}
      <div className="bg-blue-700 text-white px-6 py-1.5 hidden md:flex justify-between items-center text-xs font-medium">
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><Phone size={14} /> {content.global.phone}</span>
          <span className="flex items-center gap-1 text-blue-200">
             {content.global.address}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="bg-red-500 text-[10px] px-2 py-0.5 rounded-full animate-pulse tracking-wide font-bold">URGENCIAS 24H</span>
          <span>{content.global.schedule.split('|')[0].trim()}</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white border-b border-slate-200 px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl transition-colors group-hover:bg-blue-700">
            FC
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold leading-none text-slate-800 tracking-tight">{content.global.companyName.split(' ')[0]}</h1>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">Barcelona Specialist</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-sm font-semibold text-slate-600 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            className="hidden sm:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-blue-200 transition-all active:scale-95"
            onClick={(e) => handleScroll(e as any, '#reservas')}
          >
            Reserva Ahora
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
            aria-label="Menú"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute inset-x-0 top-full bg-white border-b border-slate-200 shadow-lg overflow-hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col p-4 gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg font-bold text-sm transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={`tel:${content.global.phone.replace(/\s+/g, '')}`}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white p-3 rounded-lg font-bold text-sm mt-2 active:bg-blue-700"
          >
            <Phone size={16} />
            Llamar Ahora
          </a>
        </nav>
      </div>
    </header>
  );
}
