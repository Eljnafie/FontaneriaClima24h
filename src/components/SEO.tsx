import { useEffect } from 'react';
import { useContent } from '../context/ContentContext';

export default function SEO() {
  const { content } = useContent();

  useEffect(() => {
    // Update Title
    document.title = `${content.global.companyName} | Fontanería y Clima en Barcelona`;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', content.hero.subheadline);

    // Schema.org JSON-LD
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Plumber",
      "name": content.global.companyName,
      "image": "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=2000", // Generic Hero image
      "@id": "",
      "url": window.location.origin,
      "telephone": content.global.phone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": content.global.address.split(',')[0],
        "addressLocality": "Barcelona",
        "postalCode": "08008",
        "addressCountry": "ES"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 41.388790,
        "longitude": 2.158990
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "priceRange": "$$" 
    };

    let script = document.getElementById('local-schema') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = 'local-schema';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(schemaData);

  }, [content]);

  return null;
}
