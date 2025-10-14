import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

interface ComparisonRow {
  feature: string;
  wordpress: {
    text: string;
    isGood: boolean;
  };
  custom: {
    text: string;
    isGood: boolean;
  };
}

interface RoiCard {
  icon: string;
  metric: string;
  value: string;
  description: string;
  source?: string;
}

@Component({
  selector: 'app-why-custom-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './why-custom-page.component.html',
  styleUrl: './why-custom-page.component.scss'
})
export class WhyCustomPageComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.updateCanonicalUrl('https://saltcity-web.com/warum-custom-development');
    this.seo.updateMetaDescription('Warum Custom Development statt WordPress? Keine Lizenzkosten, 40% schnellere Ladezeiten, 96% weniger Sicherheitslücken. ROI-Vergleich für KMU.');
    this.seo.updateTitle('Warum Custom Development? - SaltCity Web');
  }

  comparisonData: ComparisonRow[] = [
    {
      feature: 'Kosten',
      wordpress: { text: 'Monatliche Plugin-Gebühren, Theme-Lizenzen, Hosting-Anforderungen', isGood: false },
      custom: { text: 'Einmalige Entwicklungskosten, keine laufenden Lizenzen', isGood: true }
    },
    {
      feature: 'Performance',
      wordpress: { text: 'Durchschnitt 3-5 Sekunden Ladezeit, 100+ ungenutzter Code', isGood: false },
      custom: { text: '40% schnellere Ladezeiten, nur benötigter Code', isGood: true }
    },
    {
      feature: 'Sicherheit',
      wordpress: { text: '96% aller gehackten CMS sind WordPress (2023)', isGood: false },
      custom: { text: 'Keine bekannten Plugin-Schwachstellen, individueller Code', isGood: true }
    },
    {
      feature: 'Updates',
      wordpress: { text: 'Ständige Plugin/Theme-Updates, Breaking Changes', isGood: false },
      custom: { text: 'Kontrollierte Updates nur bei Bedarf', isGood: true }
    },
    {
      feature: 'Wartung',
      wordpress: { text: 'Plugin-Konflikte, Kompatibilitätsprobleme', isGood: false },
      custom: { text: 'Klare Codebase, volle Kontrolle', isGood: true }
    },
    {
      feature: 'Flexibilität',
      wordpress: { text: 'Abhängig von Plugin-Entwicklern', isGood: false },
      custom: { text: 'Jede gewünschte Funktion umsetzbar', isGood: true }
    },
    {
      feature: 'Eigentum',
      wordpress: { text: 'Theme/Plugin-Lizenzen, Vendor Lock-in', isGood: false },
      custom: { text: '100% dein Code, keine Abhängigkeiten', isGood: true }
    }
  ];

  roiMetrics: RoiCard[] = [
    {
      icon: '⚡',
      metric: 'Performance',
      value: '40% schneller',
      description: 'Custom Angular Apps laden durchschnittlich 40% schneller als WordPress-Sites',
      source: 'Google Lighthouse Benchmarks 2024'
    },
    {
      icon: '🔒',
      metric: 'Sicherheit',
      value: '96% weniger Risiko',
      description: '96% aller gehackten CMS-Seiten sind WordPress. Custom Code hat keine bekannten Plugin-Schwachstellen',
      source: 'Sucuri Security Report 2023'
    },
    {
      icon: '💰',
      metric: 'Kosten',
      value: '0€ Lizenzgebühren',
      description: 'Keine monatlichen Plugin-Kosten, Theme-Lizenzen oder Vendor Lock-in. Einmalige Investition, lebenslange Nutzung',
      source: 'WP Engine Pricing 2024'
    },
    {
      icon: '🚀',
      metric: 'Core Web Vitals',
      value: '95+ Score',
      description: 'Custom Angular Apps erreichen konstant 90+ Lighthouse Scores. WordPress durchschnittlich 60-70',
      source: 'HTTPArchive Web Almanac 2024'
    }
  ];
}