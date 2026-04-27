import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FloatingWidgets from './FloatingWidgets';
import SEO from './SEO';
import { useContent } from '../context/ContentContext';

export default function Layout() {
  const { content } = useContent();
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth">
      <SEO />
      <Header content={content} />
      <main className="pt-[110px] sm:pt-[105px] flex-1">
        <Outlet />
      </main>
      <Footer content={content} />
      <FloatingWidgets phone={content.global.phone} />
    </div>
  );
}
