export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NovaDev Edge",
  "alternateName": "NovaDev - Dashboard Development",
  "url": "https://novadev-edge.io",
  "logo": "https://novadev-edge.io/assets/logo/SVG/dark.svg",
  "description": "SaaS-Dashboards & interne Tools für KMU. Spezialisiert auf HR-Dashboards, Service-Portale und E-Commerce-Backends mit Angular.",
  "email": "info@novadev-edge.io",
  "foundingDate": "2025",
  "founder": {
    "@type": "Person",
    "name": "Kay Dietrich"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Lüneburger Str. 27",
    "addressLocality": "Kirchgellersen",
    "postalCode": "21394",
    "addressCountry": "DE"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Deutschland"
  },
  "sameAs": [
    "https://www.linkedin.com/in/kaydietrich/",
    "https://github.com/BadRix90"
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "NovaDev Edge",
  "image": "https://novadev-edge.io/assets/logo/SVG/dark.svg",
  "description": "Dashboard-Entwicklung für KMU. HR-Dashboards, Service-Portale und E-Commerce-Backends mit Angular, Django und PostgreSQL.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Lüneburger Str. 27",
    "addressLocality": "Kirchgellersen",
    "addressRegion": "Niedersachsen",
    "postalCode": "21394",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 53.2193,
    "longitude": 10.4144
  },
  "url": "https://novadev-edge.io",
  "email": "info@novadev-edge.io",
  "priceRange": "€€€",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Lüneburg"
    },
    {
      "@type": "State",
      "name": "Niedersachsen"
    },
    {
      "@type": "Country",
      "name": "Deutschland"
    }
  ],
  "serviceType": [
    "SaaS Dashboard Development",
    "HR Management Tools",
    "Service Portal Development",
    "E-Commerce Backend Systems"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "NovaDev Edge",
  "url": "https://novadev-edge.io",
  "description": "SaaS-Dashboards & interne Tools für KMU mit Angular",
  "publisher": {
    "@type": "Organization",
    "name": "NovaDev Edge",
    "logo": {
      "@type": "ImageObject",
      "url": "https://novadev-edge.io/assets/logo/SVG/dark.svg"
    }
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://novadev-edge.io/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};