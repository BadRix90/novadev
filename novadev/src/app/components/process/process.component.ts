import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProcessStep {
  title: string;
  description: string;
  details?: string[];
  duration?: string;
  icon: string; // Icon-Pfad hinzugefügt
}

@Component({
  selector: 'app-process',
  imports: [CommonModule],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss'
})
export class ProcessComponent {

  processSteps: ProcessStep[] = [
    {
      title: 'Kickoff',
      description: 'Anforderungsanalyse, Zieldefinition und technische Architektur. Wir verstehen dein Business.',
      details: [
        'Stakeholder Interview',
        'Requirements Engineering',
        'Tech Stack Definition',
        'Timeline & Budget'
      ],
      duration: '1-2 Wochen',
      icon: 'assets/img/icons/rocket.webp'
    },
    {
      title: 'Umsetzung',
      description: 'Agile Entwicklung mit regelmäßigen Reviews und Feedback-Zyklen. Du bleibst immer im Bild.',
      details: [
        'Sprint Planning',
        'Weekly Reviews',
        'Continuous Integration',
        'Quality Assurance'
      ],
      duration: '4-12 Wochen',
      icon: 'assets/img/icons/flash.webp'
    },
    {
      title: 'Launch',
      description: 'Deployment, Testing und Go-Live. Reibungsloser Start deiner neuen Anwendung.',
      details: [
        'Production Deployment',
        'Performance Testing',
        'User Acceptance Tests',
        'Documentation'
      ],
      duration: '1 Woche',
      icon: 'assets/img/icons/dart.webp'
    },
    {
      title: 'Support',
      description: 'Wartung, Updates und kontinuierliche Optimierung. Langfristiger Erfolg garantiert.',
      details: [
        'Bug Fixes & Updates',
        'Performance Monitoring',
        'Feature Erweiterungen',
        '24/7 Support'
      ],
      duration: 'Ongoing',
      icon: 'assets/img/icons/shield.webp'
    }
  ];

  // Alte getStepIcon Methode nicht mehr nötig, da Icons jetzt in den Daten sind

  trackCTAClick(): void {
    console.log('Process CTA clicked: Projekt starten');
  }
}