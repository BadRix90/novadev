export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SaltCity Web",
  "alternateName": "SaltCity Web - Webentwicklung",
  "url": "https://saltcity-web.com",
  "logo": "https://saltcity-web.com/assets/logo/scw_logo.png",
  "description": "Professionelle Angular Webentwicklung für KMU. Keine Lizenzkosten, keine Abhängigkeiten. Performance statt Bloat.",
  "email": "kontakt@saltcity-web.com",
  "foundingDate": "2024",
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
    "https://www.linkedin.com/in/kay-dietrich-dev/",
    "https://github.com/BadisG",
    "https://www.instagram.com/saltcity.web/"
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "SaltCity Web",
  "image": "https://saltcity-web.com/assets/logo/scw_logo.png",
  "description": "Angular Webentwicklung für KMU aus Lüneburg. Spezialisiert auf SPAs, PWAs und Performance-Optimierung.",
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
  "url": "https://saltcity-web.com",
  "email": "kontakt@saltcity-web.com",
  "priceRange": "€€",
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
    "Angular Webentwicklung",
    "Progressive Web Apps",
    "Responsive Design",
    "Performance-Optimierung"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "SaltCity Web",
  "url": "https://saltcity-web.com",
  "description": "Professionelle Angular Webentwicklung für KMU",
  "publisher": {
    "@type": "Organization",
    "name": "SaltCity Web",
    "logo": {
      "@type": "ImageObject",
      "url": "https://saltcity-web.com/assets/logo/scw_logo.png"
    }
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://saltcity-web.com/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};