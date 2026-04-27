export const INITIAL_CONTENT = {
  global: {
    companyName: "FontaneriaClima Barcelona 24h",
    phone: "+34 632 18 84 03",
    email: "assou84@hotmail.com",
    address: "Carrer de Balmes, 123, 08008 Barcelona",
    schedule: "Lunes a Viernes: 8:00 - 20:00 | Urgencias 24h",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
  hero: {
    headline: "Expertos en Fontanería y Climatización",
    subheadline: "Servicio 24h en toda Barcelona. Rápidos, eficaces y de confianza.",
    cta1: "Llamar Ahora",
    cta2: "Calculadora de Precio",
  },
  services: [
    {
      id: "1",
      title: "Reparaciones Generales",
      description: "Solucionamos todo tipo de problemas de fontanería de forma rápida.",
      icon: "Wrench",
    },
    {
      id: "2",
      title: "Desatascos 24h",
      description: "Atendemos urgencias de atascos en tuberías y desagües a cualquier hora.",
      icon: "Droplets",
    },
    {
      id: "3",
      title: "Detección de Fugas",
      description: "Localizamos y reparamos fugas de agua sin obras innecesarias.",
      icon: "Search",
    },
    {
      id: "4",
      title: "Aire Acondicionado",
      description: "Instalación, mantenimiento y reparación de todas las marcas.",
      icon: "Wind",
    },
    {
      id: "5",
      title: "Calderas y Calefacción",
      description: "Instalación y reparación de calderas de gas, eléctricas y biomasa.",
      icon: "Flame",
    },
    {
      id: "6",
      title: "Urgencias 24h",
      description: "Equipo dispuesto a intervenir en menos de 30 minutos.",
      icon: "Clock",
    },
  ],
  pricing: {
    baseHourlyRate: 50,
    emergencyMultiplier: 1.5,
    complexityRates: {
      simple: 1,
      standard: 1.5,
      complex: 2.5,
    },
  },
  about: {
    title: "Sobre Nosotros",
    history: "Con más de 15 años de experiencia, somos la empresa de referencia en Barcelona en servicios de fontanería y climatización.",
    values: "Trabajamos con total transparencia, materiales de primera calidad y ofreciendo garantía en todas nuestras intervenciones.",
    areas: ["Barcelona Capital", "L'Hospitalet de Llobregat", "Badalona", "Santa Coloma de Gramenet", "Cornellà"],
  },
  testimonials: [
    { id: "1", name: "María Gómez", rating: 5, text: "Vinieron en menos de 30 minutos por una urgencia. Muy profesionales." },
    { id: "2", name: "Carlos Ruiz", rating: 5, text: "Me instalaron el aire acondicionado en pleno agosto. Servicio de diez." },
    { id: "3", name: "Laura Sánchez", rating: 4, text: "Rápidos y limpios, aunque el precio de urgencia es algo elevado, valió la pena." }
  ],
  faq: [
    { id: "1", question: "¿Cuánto tardan en llegar para una urgencia?", answer: "En Barcelona capital, nuestro tiempo medio de llegada es de 30 a 45 minutos." },
    { id: "2", question: "¿Ofrecen garantía en sus reparaciones?", answer: "Sí, todas nuestras instalaciones y reparaciones cuentan con hasta 6 meses de garantía legal." },
    { id: "3", question: "¿Dan presupuestos sin compromiso?", answer: "Ofrecemos presupuestos telefónicos orientativos sin compromiso, y visitas de valoración." }
  ],
  blog: [
    { id: "1", title: "Cómo mantener tu aire acondicionado", excerpt: "Consejos básicos para alargar la vida útil de tu split.", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
    { id: "2", title: "Señales de que tu caldera necesita revisión", excerpt: "No esperes a que falle en pleno invierno. Atento a estas señales.", image: "https://images.unsplash.com/photo-1579483321495-2fc49afc3ff6?auto=format&fit=crop&q=80&w=400" },
    { id: "3", title: "Evitar atascos en el fregadero", excerpt: "Las mejores prácticas en la cocina para mantener las tuberías limpias.", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" }
  ],
  projects: [
    { id: "1", title: "Instalación de conductos en Oficina", tag: "Climatización", image: "https://images.unsplash.com/photo-1621360155601-5226487eafbb?auto=format&fit=crop&q=80&w=800" },
    { id: "2", title: "Reforma integral de Baño", tag: "Fontanería", image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=800" }
  ]
};

export type ContentSchema = typeof INITIAL_CONTENT;
