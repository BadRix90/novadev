import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FAQItem {
  question: string;
  answer: string;
  details?: string[];
}

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

  openItems = new Set<number>();

  faqItems: FAQItem[] = [
    {
      question: 'Wie lange dauert die Entwicklung einer Angular-Anwendung?',
      answer: 'Die Entwicklungszeit hängt stark vom Projektumfang ab. Eine einfache Landingpage kann in 1-2 Wochen fertig sein, während komplexe Business-Anwendungen 8-16 Wochen benötigen.',
      details: [
        'Landingpage: 1-2 Wochen',
        'Dashboard/Admin: 4-8 Wochen', 
        'E-Commerce: 8-12 Wochen',
        'Enterprise App: 12-16+ Wochen'
      ]
    },
    {
      question: 'Was kostet die Entwicklung und Wartung?',
      answer: 'Projektentwicklung startet bei 65€/Stunde. Wartung gibt es in drei Paketen: Basic (149€), Pro (349€), Premium (499€) monatlich. Viele Projekte biete ich auch zum Festpreis an.',
      details: [
        'Stundensatz: 65€ (skalierend nach Projektgröße)',
        'Festpreise für Standard-Projekte verfügbar',
        'Wartung bereits ab 149€/Monat',
        'Keine versteckten Kosten'
      ]
    },
    {
      question: 'Warum Angular statt React oder Vue?',
      answer: 'Angular ist das vollständigste Framework für Enterprise-Anwendungen. Mit TypeScript, eingebautem Testing, CLI-Tools und Google-Support bietet es maximale Skalierbarkeit und Wartbarkeit.',
      details: [
        'TypeScript nativ integriert',
        'Vollständiges Framework (kein Flickwerk)',
        'Enterprise-ready mit Google-Support',
        'Ausgezeichnete Testing-Tools',
        'Langfristige Stabilität'
      ]
    },
    {
      question: 'Wie sieht es mit SEO und Performance aus?',
      answer: 'Alle Anwendungen werden mit Server-Side Rendering (SSR) und optimiert für Core Web Vitals ausgeliefert. Lighthouse-Scores von 90+ sind Standard.',
      details: [
        'Server-Side Rendering (SSR) standardmäßig',
        'Core Web Vitals optimiert',
        'Lighthouse Score 90+',
        'Progressive Web App (PWA) ready',
        'CDN-Optimierung'
      ]
    },
    {
      question: 'Bekomme ich den Quellcode?',
      answer: 'Selbstverständlich! Der komplette Quellcode gehört dir. Du erhältst ein privates GitHub-Repository mit allen Dateien, Dokumentation und Deployment-Anleitungen.',
      details: [
        'Privates GitHub-Repository',
        'Vollständiger Quellcode-Zugang',
        'Technische Dokumentation',
        'Deployment-Guides',
        'Keine Vendor-Lock-ins'
      ]
    },
    {
      question: 'Was passiert bei Problemen oder Bugs?',
      answer: 'In der Wartung sind Bug-Fixes inkludiert. Bei Neuentwicklungen gibt es 30 Tage Garantie auf fehlerfreie Funktion. Danach Support je nach Wartungspaket.',
      details: [
        '30 Tage Garantie bei Neuentwicklung',
        'Bug-Fixes in Wartung inkludiert',
        'Response-Zeiten je nach Wartungspaket',
        '24/7 Support im Premium-Paket',
        'Proaktives Monitoring'
      ]
    }
  ];

  toggleItem(index: number): void {
    if (this.openItems.has(index)) {
      this.openItems.delete(index);
    } else {
      this.openItems.add(index);
    }
    
    this.trackFAQInteraction(this.faqItems[index].question, this.openItems.has(index));
  }

  closeAllItems(): void {
    this.openItems.clear();
  }

  isItemOpen(index: number): boolean {
    return this.openItems.has(index);
  }

  trackFAQInteraction(question: string, opened: boolean): void {
    console.log(`FAQ ${opened ? 'opened' : 'closed'}: ${question}`);
  }
}