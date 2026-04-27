import { useContent } from '../context/ContentContext';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import PricingCalculator from '../components/sections/PricingCalculator';
import Booking from '../components/sections/Booking';
import Projects from '../components/sections/Projects';
import About from '../components/sections/About';
import TestimonialsFAQ from '../components/sections/TestimonialsFAQ';
import BlogPreview from '../components/sections/BlogPreview';
import Contact from '../components/sections/Contact';

export default function Home() {
  const { content } = useContent();

  return (
    <div className="w-full max-w-[1440px] mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-50">
      <div className="lg:col-span-8 flex flex-col gap-6">
        <Hero content={content} />
        <Services content={content} />
        <Projects content={content} />
        <About content={content} />
        <TestimonialsFAQ content={content} />
        <BlogPreview content={content} />
      </div>
      <div className="lg:col-span-4 flex flex-col gap-6 hidden sm:flex">
        <Booking content={content} />
        <PricingCalculator content={content} />
        <Contact content={content} />
      </div>
      {/* Mobile visible fallback */}
      <div className="flex flex-col gap-6 lg:hidden sm:hidden">
        <Booking content={content} />
        <PricingCalculator content={content} />
        <Contact content={content} />
      </div>
    </div>
  );
}
