export const EN_TEXTS = {
  seo: {
    home: {
      title: "NovaDev Edge - Compliance Automation for SMEs | E-Invoicing, NIS2, SAP",
      description: "Technical compliance solutions for SMEs. E-invoicing setup from €1,997, NIS2 readiness from €7,997, SAP integration from €7,997. IT specialist with military experience."
    }
  },
  hero: {
    badge: {
      items: ["IT Specialist (IHK)", "Military Experience", "VS-NfD-ready", "GDPR-compliant"]
    },
    headline: "Compliance Without Headaches",
    subline: "E-Invoicing, NIS2, SAP Integration – technically implemented in 7-30 days",
    facts: [
      { label: "E-Invoice", value: "from €1,997" },
      { label: "NIS2", value: "from €7,997" },
      { label: "SAP Connect", value: "from €7,997" },
      { label: "Delivery", value: "7-30 days" }
    ],
    cta: {
      primary: "Free Initial Consultation",
      secondary: "View Solutions"
    }
  },
  home: {
    intro: {
      headline: "Regulation costs you time and nerves",
      text: "E-invoicing mandatory since January 2025. NIS2 affects 29,850 companies. SAP S/4HANA migration by 2027. We automate your compliance – technically implemented, not just consulted."
    },
    features: [
      {
        icon: "file-text",
        title: "E-Invoice Ready",
        description: "XRechnung/ZUGFeRD setup in 7 days. Integration with DATEV, Lexoffice, Sage. GoBD-compliant archiving included.",
        link: "/loesungen#e-rechnung",
        linkText: "Learn more"
      },
      {
        icon: "shield",
        title: "CyberSafe NIS2",
        description: "NIS2 gap analysis, compliance dashboard, incident response plan. Avoid penalties up to €10 million.",
        link: "/loesungen#nis2",
        linkText: "Learn more"
      },
      {
        icon: "link",
        title: "SAP Connect",
        description: "SAP ↔ Shopify/Shopware integration. Products, orders, inventory synchronized in real-time.",
        link: "/loesungen#sap",
        linkText: "Learn more"
      },
      {
        icon: "clock",
        title: "Fast Delivery",
        description: "No 6-month projects. E-invoicing in 7 days, NIS2 in 30 days, SAP in 30 days live.",
        link: "/kontakt",
        linkText: "Request project"
      }
    ],
    cta: {
      headline: "Ready for Compliance?",
      text: "Book a free 15-minute consultation. No sales pitch – just technical advice.",
      buttonText: "Book Appointment"
    },
    stats: [
      {
        icon: "gauge",
        value: "7-30 days",
        label: "Delivery Time"
      },
      {
        icon: "shield-check",
        value: "45%",
        label: "SMEs not E-Invoice-ready"
      },
      {
        icon: "users",
        value: "29,850",
        label: "Companies NIS2-affected"
      }
    ]
  },
  services: {
    header: {
      title: "Solutions",
      subtitle: "Technical compliance automation for SMEs (50-500 employees)"
    },
    items: [
      {
        icon: "file-text",
        title: "E-Invoice Ready",
        description: "XRechnung/ZUGFeRD setup in 7 days. Integration with DATEV, Lexoffice, Sage. GoBD-compliant archiving included. Prices: Standard €1,997, Professional €2,997, Enterprise €4,997.",
        techStack: ["Angular 20", "Django 5.0", "PostgreSQL", "lxml", "reportlab"]
      },
      {
        icon: "shield",
        title: "CyberSafe NIS2",
        description: "NIS2 compliance in 30 days. Gap analysis, compliance dashboard, incident response plan. Avoid penalties up to €10 million. Prices: Assessment €997, Full Implementation €7,997, Managed €499/month.",
        techStack: ["Angular 20", "Django 5.0", "PostgreSQL", "Sentry", "BPMN"]
      },
      {
        icon: "link",
        title: "SAP Connect",
        description: "SAP ↔ E-Commerce integration in 30 days. Bi-directional synchronization for products, orders, inventory. 90% cheaper than SAP Commerce Cloud. Prices: Shopify €7,997, Shopware €9,997, Custom €12,997.",
        techStack: ["Angular 20", "Django REST", "Celery", "Redis", "SAP RFC", "Shopify API"]
      }
    ],
    pricing: {
      label: "Fixed Prices:",
      value: "from €1,997",
      note: "All projects available with maintenance contracts (€149-499/month)"
    },
    cta: {
      title: "Ready to Start?",
      text: "Book a free 15-minute consultation. We'll clarify which solution fits you.",
      button: "Book Appointment"
    }
  },
  about: {
    header: {
      title: "About Me",
      subtitle: "IT Specialist with Military Background"
    },
    intro: {
      title: "Who's Behind NovaDev Edge?",
      text: "My name is Kay Dietrich, founder of NovaDev Edge. After 12 years in the German military, I completed my IT specialist training (IHK) in 2024. My military experience gave me discipline, reliability, and a deep understanding of security requirements – qualities I now bring to developing compliance solutions."
    },
    approach: {
      title: "My Focus",
      text: "I develop technical compliance automation for SMEs: E-invoicing setup, NIS2 compliance, SAP integration. My specialization lies at the intersection of modern web technologies (Angular, Django) and legacy systems (SAP, DATEV). Tech stack: Angular 20, TypeScript, Django 5.0, Python, PostgreSQL."
    },
    values: [
      {
        icon: "check-circle",
        title: "Honesty",
        text: "I'll tell you whether I'm the right fit for your project – or not."
      },
      {
        icon: "zap",
        title: "Pragmatism",
        text: "No buzzwords. No over-engineering. Just solutions that work."
      },
      {
        icon: "star",
        title: "Quality",
        text: "Code I can still understand in 5 years. Documentation that actually helps."
      },
      {
        icon: "clock",
        title: "Reliability",
        text: "Military discipline meets modern development. Deadlines are sacred."
      }
    ],
    vision: {
      title: "Why Compliance Automation?",
      text: "Regulation won't disappear – but the stress can. I believe in Compliance as Code: automation instead of administration. Software that fulfills obligations before they become problems."
    },
    cta: {
      title: "Get to Know Me",
      text: "Book a 15-minute consultation. Free, non-binding, technical.",
      button: "Book Appointment"
    }
  },
  contact: {
    header: {
      title: "Contact",
      subtitle: "Let's discuss your compliance needs"
    },
    form: {
      company: {
        label: "Company",
        placeholder: "Your company"
      },
      subject: {
        label: "Topic *",
        placeholder: "Please select",
        options: [
          { value: "e-rechnung", label: "E-Invoice Ready (from €1,997)" },
          { value: "nis2", label: "CyberSafe NIS2 (from €7,997)" },
          { value: "sap", label: "SAP Connect (from €7,997)" },
          { value: "beratung", label: "General Consultation" },
          { value: "sonstiges", label: "Other" }
        ]
      },
      name: {
        label: "Name *",
        placeholder: "Your name"
      },
      email: {
        label: "Email *",
        placeholder: "your@email.com"
      },
      message: {
        label: "Your Request *",
        placeholder: "Briefly describe your compliance needs..."
      },
      budget: {
        label: "Budget Range",
        placeholder: "Please select",
        options: ["< €2,000", "€2,000 - €5,000", "€5,000 - €10,000", "> €10,000"]
      },
      submit: {
        idle: "Send Request",
        sending: "Sending..."
      },
      success: "Thank you! Your message has been sent. I will get back to you within 24 hours.",
      error: "Sorry, an error occurred while sending. Please try again or contact me directly."
    },
    info: {
      title: "Direct Contact",
      email: {
        label: "Email",
        value: "info@novadev-edge.io"
      },
      location: {
        label: "Location",
        value: "Lüneburg, Germany"
      },
      responseTime: {
        label: "Response Time",
        value: "Usually within 24 hours"
      },
      note: "Remote work across Germany. In-person meetings in Lüneburg/Hamburg by arrangement."
    },
    errors: {
      name: {
        required: "Name is required",
        minlength: "Name too short"
      },
      email: {
        required: "Email is required",
        invalid: "Please enter a valid email address"
      },
      subject: {
        required: "Topic is required"
      },
      message: {
        required: "Message is required",
        minlength: "Message too short (min. 10 characters)"
      },
      generic: "Invalid input"
    }
  },
  header: {
    logo: {
      alt: "NovaDev Edge Logo",
      ariaLabel: "NovaDev Edge - Go to homepage"
    },
    nav: [
      { label: "Solutions", route: "/loesungen" },
      { label: "About Me", route: "/ueber-uns" },
      { label: "Contact", route: "/kontakt" }
    ],
    mobile: {
      ariaLabelOpen: "Open menu",
      ariaLabelClose: "Close menu",
      startLink: "Home"
    },
    cta: {
      label: "Book Appointment",
      route: "/kontakt"
    }
  },
  footer: {
    brand: {
      name: "NovaDev Edge",
      description: "Technical compliance solutions for German SMEs. E-Invoicing, NIS2, SAP Integration."
    },
    nav: {
      title: "Navigation",
      links: [
        { label: "Home", route: "/" },
        { label: "Solutions", route: "/loesungen" },
        { label: "About Me", route: "/ueber-uns" },
        { label: "Contact", route: "/kontakt" }
      ]
    },
    legal: {
      title: "Legal",
      links: [
        { label: "Legal Notice", route: "/impressum" },
        { label: "Privacy", route: "/datenschutz" }
      ]
    },
    bottom: {
      copyright: "NovaDev Edge. All rights reserved.",
      backToTop: "Back to top"
    }
  },
  legalNotice: {
    backLink: "Back to homepage",
    header: {
      title: "Legal Notice",
      subtitle: "Information according to § 5 TMG"
    },
    provider: {
      title: "Service Provider",
      name: "Kay Dietrich",
      company: "NovaDev Edge",
      street: "Lüneburger Str. 27",
      city: "21394 Kirchgellersen",
      country: "Germany"
    },
    contact: {
      title: "Contact Options",
      email: "Email address:",
      emailValue: "info@novadev-edge.io",
      emailLink: "Via the",
      emailLinkText: "contact form",
      phone: "Phone:",
      phoneText: "Upon request via contact form"
    },
    profession: {
      title: "Professional Title and Regulations",
      designation: "Professional title:",
      designationText: "IT Specialist (IHK) – Independent IT Service Provider, Specialization: Compliance Automation",
      chamber: "Responsible chamber:",
      chamberText: "Not subject to chamber",
      granted: "Granted in:",
      grantedText: "Germany"
    },
    insurance: {
      title: "Professional Liability Insurance",
      company: "Name and location of the company:",
      companyText: "Details available upon request",
      coverage: "Coverage area:",
      coverageText: "Germany, Europe"
    },
    responsible: {
      title: "Editorially Responsible",
      name: "Kay Dietrich"
    },
    euDispute: {
      title: "EU Dispute Resolution",
      text: "The European Commission provides a platform for online dispute resolution (ODR):",
      link: "https://ec.europa.eu/consumers/odr",
      linkText: "European Commission - Online Dispute Resolution",
      emailNote: "Our email address can be found above in the legal notice."
    },
    consumerDispute: {
      title: "Consumer Dispute Resolution",
      text: "We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board."
    },
    copyright: {
      title: "Copyright",
      p1: "The content and works created by the site operators on these pages are subject to German copyright law. Reproduction, editing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator.",
      p2: "Downloads and copies of this site are only permitted for private, non-commercial use.",
      p3: "Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. If we become aware of any infringements, we will remove such content immediately."
    },
    disclaimer: {
      title: "Disclaimer",
      content: {
        title: "Liability for Content",
        p1: "As a service provider, we are responsible for our own content on these pages in accordance with Section 7 (1) TMG under general law. According to §§ 8 to 10 TMG, however, we as a service provider are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.",
        p2: "Obligations to remove or block the use of information according to general laws remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific infringement. Upon becoming aware of corresponding legal violations, we will remove this content immediately."
      },
      links: {
        title: "Liability for Links",
        p1: "Our offer contains links to external third-party websites over whose content we have no influence. Therefore, we cannot assume any liability for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages.",
        p2: "The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking. However, permanent monitoring of the content of the linked pages is not reasonable without concrete evidence of an infringement. If we become aware of legal violations, we will remove such links immediately."
      }
    },
    technologies: {
      title: "Technologies Used",
      intro: "This website was developed with:",
      items: [
        { name: "Angular 20:", description: "Frontend Framework" },
        { name: "TypeScript:", description: "Programming Language" },
        { name: "SCSS:", description: "CSS Preprocessor" },
        { name: "Responsive Design:", description: "For optimal display on all devices" }
      ],
      note: "All technologies used comply with current web standards and accessibility guidelines."
    },
    privacy: {
      title: "Privacy",
      text: "Information on the collection, processing and use of your personal data can be found in our",
      linkText: "Privacy Policy"
    },
    cta: {
      title: "Questions about Legal Notice?",
      text: "If you have any legal questions or comments regarding this legal notice, I am happy to help.",
      button: "Get in Touch"
    }
  },
  privacyPolicy: {
    backLink: "Back to homepage",
    header: {
      title: "Privacy Policy",
      subtitle: "Last updated: December 2025"
    },
    responsible: {
      title: "1. Controller",
      intro: "The controller within the meaning of the General Data Protection Regulation (GDPR) is:",
      name: "Kay Dietrich",
      company: "NovaDev Edge",
      street: "Lüneburger Str. 27",
      city: "21394 Kirchgellersen",
      email: "info@novadev-edge.io",
      contact: "If you have any questions about data protection, you can reach me via the",
      contactLink: "contact form",
      contactEnd: "."
    },
    overview: {
      title: "2. Overview of Data Processing",
      intro: "The following overview summarizes the most important points of data processing and serves as a quick guide. Detailed information can be found in the relevant sections of this privacy policy.",
      dataProcessed: {
        title: "What data do we process?",
        items: [
          "Contact data (name, email address, phone number, company)",
          "Project data (compliance requirements, technical specifications)",
          "Technical data (IP address, browser information)",
          "Company data provided by you for compliance projects"
        ]
      },
      legalBasis: {
        title: "On what legal basis?",
        items: [
          "Consent (Art. 6 para. 1 lit. a GDPR)",
          "Contract fulfillment (Art. 6 para. 1 lit. b GDPR)",
          "Legitimate interests (Art. 6 para. 1 lit. f GDPR)"
        ]
      }
    },
    contact: {
      title: "3. Contact",
      intro: "When you contact us via the contact form or email, the data you provide will be stored for processing your request and for any follow-up questions.",
      dataProcessed: {
        title: "Processed data:",
        items: [
          "First and last name",
          "Email address",
          "Phone number (optional)",
          "Company (optional)",
          "Topic of request (E-Invoice, NIS2, SAP, etc.)",
          "Message content",
          "Time of request"
        ]
      },
      legalBasis: "Legal basis:",
      legalBasisText: "Art. 6 para. 1 lit. b GDPR (contract initiation)",
      storage: "Storage duration:",
      storageText: "Until complete processing of your request, maximum 3 years after last contact"
    },
    projectData: {
      title: "4. Project Data and Customer Data",
      intro: "As part of providing my services (compliance automation, e-invoicing setup, NIS2 compliance, SAP integration), I process various types of data required for project implementation.",
      categories: {
        title: "Categories of processed data:",
        items: [
          { label: "Project requirements:", text: "Compliance requirements, technical specifications, target group data" },
          { label: "Compliance data:", text: "E-invoicing configurations, NIS2 gap analyses, SAP system data" },
          { label: "Company data:", text: "Company information, organizational structures, business processes" },
          { label: "Technical data:", text: "API access, system configurations, integration details" },
          { label: "Documentation:", text: "Developed concepts, implementation plans, compliance reports" }
        ]
      },
      handling: {
        title: "Handling of your data:",
        items: [
          "Strict confidentiality of all transmitted information",
          "Use exclusively for the agreed project",
          "Secure storage on encrypted systems",
          "No disclosure to third parties without your express consent",
          "VS-NfD-compliant handling for relevant projects",
          "Deletion after project completion (unless otherwise agreed)"
        ]
      },
      legalBasis: "Legal basis:",
      legalBasisText: "Art. 6 para. 1 lit. b GDPR (contract fulfillment)",
      storage: "Storage duration:",
      storageText: "For the duration of the project plus 3 years for warranty purposes, or as contractually agreed"
    },
    websiteUsage: {
      title: "5. Website Usage and Technical Data",
      intro: "Every time you access this website, information is automatically collected that your browser transmits.",
      dataCollected: {
        title: "Collected data:",
        items: [
          "IP address",
          "Date and time of access",
          "Browser type and version",
          "Operating system",
          "Referrer URL",
          "Pages accessed"
        ]
      },
      legalBasis: "Legal basis:",
      legalBasisText: "Art. 6 para. 1 lit. f GDPR (legitimate interests)",
      purpose: "Purpose:",
      purposeText: "Technical provision and security of the website",
      storage: "Storage duration:",
      storageText: "7 days"
    },
    cookies: {
      title: "6. Cookies and Similar Technologies",
      intro: "This website uses minimally necessary cookies for basic functionality. Tracking cookies or analysis tools are not used.",
      used: {
        title: "Cookies used:",
        items: [
          { label: "Session cookies:", text: "For navigation and form functionality" },
          { label: "Preference cookies:", text: "Storage of your cookie settings and theme preferences" }
        ]
      },
      note: "You can deactivate cookies in your browser settings. However, this may affect the functionality of the website."
    },
    security: {
      title: "7. Data Security",
      intro: "I implement technical and organizational security measures to protect your data from loss, manipulation and unauthorized access. This is especially important for compliance projects.",
      measures: {
        title: "Security measures:",
        items: [
          "SSL/TLS encryption for all data transmissions",
          "Encrypted storage of sensitive data",
          "Regular security updates of all systems",
          "Access restrictions and authentication",
          "Regular data backups",
          "VS-NfD-compliant security measures for relevant projects"
        ]
      }
    },
    rights: {
      title: "8. Your Rights",
      intro: "You have the following rights regarding your personal data:",
      items: [
        { label: "Access (Art. 15 GDPR):", text: "Information about processed data" },
        { label: "Rectification (Art. 16 GDPR):", text: "Correction of incorrect data" },
        { label: "Erasure (Art. 17 GDPR):", text: "Deletion of your data under certain conditions" },
        { label: "Restriction (Art. 18 GDPR):", text: "Restriction of processing" },
        { label: "Portability (Art. 20 GDPR):", text: "Transfer of your data" },
        { label: "Objection (Art. 21 GDPR):", text: "Objection to processing" },
        { label: "Withdrawal of consent:", text: "At any time with effect for the future" }
      ],
      contact: "To exercise your rights, contact me via the",
      contactLink: "contact form"
    },
    complaint: {
      title: "9. Right to Complaint",
      intro: "You have the right to lodge a complaint with a data protection supervisory authority about the processing of your personal data.",
      authority: "Competent supervisory authority:",
      name: "The State Commissioner for Data Protection Lower Saxony",
      street: "Prinzenstraße 5",
      city: "30159 Hannover",
      website: "https://lfd.niedersachsen.de"
    },
    changes: {
      title: "10. Changes to the Privacy Policy",
      text: "This privacy policy may be updated due to changes to the website or legal requirements. The current version is always available on this page.",
      lastUpdate: "Last update: December 2025"
    },
    cta: {
      title: "Questions about Privacy?",
      text: "If you have any questions about the processing of your data or exercising your rights, I am happy to help.",
      button: "Get in Touch"
    }
  }
}
