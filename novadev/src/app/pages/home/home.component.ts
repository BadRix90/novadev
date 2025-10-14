import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../shared/hero/hero.component';
import { SeoService } from '../../services/seo.service';
import { JsonLdService } from '../../services/json-ld.service';
import { organizationSchema, localBusinessSchema, websiteSchema } from '../../data/schemas';

interface WhyCard {
  number: string;
  title: string;
  text: string;
}

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HeroComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private seo: SeoService, private jsonLd: JsonLdService) { }

  ngOnInit(): void {
    // SEO Tags
    this.seo.updateCanonicalUrl('https://saltcity-web.com/');
    this.seo.updateMetaDescription('Angular-Entwicklung für KMU. Funktional, performant, auf den Punkt. Keine Lizenzkosten, keine Plugin-Abhängigkeiten. 65€/h aus Lüneburg.');
    this.seo.updateTitle('SaltCity Web - Webentwicklung für KMU');

    // JSON-LD Structured Data
    this.jsonLd.insertSchema(organizationSchema, 'organization-schema');
    this.jsonLd.insertSchema(localBusinessSchema, 'localbusiness-schema');
    this.jsonLd.insertSchema(websiteSchema, 'website-schema');
  }

  ngOnDestroy(): void {
    this.jsonLd.removeSchema('organization-schema');
    this.jsonLd.removeSchema('localbusiness-schema');
    this.jsonLd.removeSchema('website-schema');
  }

  introHeadline = 'Webentwicklung für KMU – klar, funktional, transparent';
  introText = 'SaltCity Web entwickelt Angular-Lösungen ohne Schnickschnack. Für Unternehmen, die Wert auf Performance, Nachhaltigkeit und klare Kommunikation legen.';

  whyKmuTitle = 'Warum speziell für KMU?';
  whyKmuLead = 'Kleine und mittlere Unternehmen brauchen keine aufgeblähten Systeme – sondern Lösungen, die funktionieren.';

  whyCards: WhyCard[] = [
    {
      number: '01',
      title: 'Keine Lizenzkosten',
      text: 'Keine monatlichen Gebühren für WordPress-Plugins oder CMS-Lizenzen. Du zahlst einmal für die Entwicklung – und behältst die volle Kontrolle über deinen Code.'
    },
    {
      number: '02',
      title: 'Keine Abhängigkeiten',
      text: 'Kein Vendor Lock-in durch proprietäre Systeme. Kein Risiko, dass ein Plugin-Anbieter pleite geht oder Support einstellt. Deine Website gehört dir – komplett.'
    },
    {
      number: '03',
      title: 'Performance statt Bloat',
      text: 'WordPress & Co. laden hunderte ungenutzter Features. Ich entwickle nur das, was du wirklich brauchst – schneller, schlanker, effizienter.'
    },
    {
      number: '04',
      title: 'Sicherheit ohne Plugins',
      text: '80% der WordPress-Hacks kommen durch veraltete Plugins. Mit Angular gibt es keine Plugin-Schwachstellen – weniger Angriffsfläche, mehr Sicherheit.'
    },
    {
      number: '05',
      title: 'Direkter Ansprechpartner',
      text: 'Keine Agentur-Hierarchie, kein Support-Ticket-System. Du schreibst mir direkt – und bekommst innerhalb von 24h eine Antwort. Persönlich und verbindlich.'
    },
    {
      number: '06',
      title: 'Für echte Anforderungen',
      text: 'Du brauchst ein individuelles Dashboard? Datenvisualisierung? API-Integration? Das kann WordPress nicht – aber Angular schon. Maßgeschneidert statt Baukasten.'
    }
  ];

  notForTitle = 'Für wen ist SaltCity Web nicht geeignet?';
  notForContent = {
    points: [
      { question: 'Du brauchst einen Blog mit CMS?', answer: 'Nimm WordPress.' },
      { question: 'Du willst selbst Inhalte pflegen?', answer: 'Nimm einen Baukasten.' },
      { question: 'Du suchst die billigste Lösung?', answer: 'Ich bin nicht der Billigste – aber der Ehrlichste.' },
      { question: 'Du brauchst ein ERP oder CRM?', answer: 'Dafür gibt es spezialisierte Systeme.' }
    ],
    conclusion: 'Aber wenn du eine performante, individuelle Webanwendung brauchst – ohne Lizenz-Chaos, ohne Plugin-Wirrwarr, ohne Agentur-Overhead – dann bist du hier richtig.'
  };

  featureCards: FeatureCard[] = [
    {
      icon: '⚙️',
      title: 'Was wir entwickeln',
      description: 'Angular SPAs, PWAs und responsive Umsetzungen mit Fokus auf Performance und Wartbarkeit.',
      link: '/leistungen',
      linkText: 'Leistungen ansehen →'
    },
    {
      icon: '🚀',
      title: 'Unsere Projekte',
      description: 'Von Webapps bis Performance-Optimierung – schau dir an, was wir bereits umgesetzt haben.',
      link: '/projekte',
      linkText: 'Projekte entdecken →'
    },
    {
      icon: '💬',
      title: 'Projekt starten',
      description: 'Lass uns über deine Anforderungen sprechen. Transparent, unverbindlich, auf Augenhöhe.',
      link: '/kontakt',
      linkText: 'Kontakt aufnehmen →'
    }
  ];

  ctaHeadline = 'Bereit für dein Projekt?';
  ctaText = 'Lass uns unverbindlich über deine Anforderungen sprechen.';
  ctaButtonText = 'Jetzt anfragen';



}