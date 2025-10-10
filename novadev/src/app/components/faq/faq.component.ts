import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FAQ {
  question: string;
  answer: string;
  details: string[];
  isOpen?: boolean;
}

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

  faqs: FAQ[] = [
    {
      question: 'Was ist der Vorteil von Angular für meine Website?',
      answer: 'Angular ermöglicht stabile, schnelle und interaktive Webanwendungen – ideal für skalierbare Projekte oder Anwendungen mit vielen Nutzer:innen.',
      details: [
        'Moderne Komponentenarchitektur',
        'Wartbarkeit & Erweiterbarkeit',
        'Sehr gute Performance durch Ahead-of-Time Compilation'
      ],
      isOpen: false
    },
    {
      question: 'Ist das Design meiner Website auf Mobilgeräte angepasst?',
      answer: 'Ja. Ich entwickle im Mobile-First-Ansatz und nutze moderne CSS-Techniken wie Container Queries, um die Seite auf jedem Gerät perfekt darzustellen.',
      details: [
        'Responsive Design mit Flexbox/Grid',
        'Container Queries für flexible Layouts',
        'Optimiert für Touch-Interaktion'
      ],
      isOpen: false
    },
    {
      question: 'Wie verbessern Sie die Performance meiner bestehenden Seite?',
      answer: 'Ich analysiere Schwachstellen (z. B. lange Ladezeiten) und optimiere gezielt auf Core Web Vitals – für bessere Nutzererfahrung und Google-Rankings.',
      details: [
        'Lazy Loading von Bildern & Komponenten',
        'Server-Side Rendering (SSR)',
        'Caching & Code-Splitting'
      ],
      isOpen: false
    },
    {
      question: 'Können Sie auch alten Code überarbeiten?',
      answer: 'Ja. Ich übernehme Refactoring von Legacy-Projekten, bringe veraltete Anwendungen auf modernen Stand und reduziere technische Schulden.',
      details: [
        'Modernisierung mit aktuellen Frameworks',
        'Verbesserte Codequalität & Wartbarkeit',
        'Einführung von Best Practices (Clean Code)'
      ],
      isOpen: false
    },
    {
      question: 'Wie läuft die Zusammenarbeit ab?',
      answer: 'Transparenz und Effizienz stehen im Vordergrund. Ich arbeite remote aus Lüneburg, bin direkt erreichbar und stimme jeden Schritt mit dir ab.',
      details: [
        'Direkter Kontakt ohne Umwege',
        'Remote-Meetings oder Vor-Ort-Termine in Lüneburg',
        'Keine Agenturstruktur – volle Kontrolle'
      ],
      isOpen: false
    }
  ];

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

}