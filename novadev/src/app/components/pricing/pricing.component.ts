import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PricingPlan {
  name: string;
  category: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  featured?: boolean;
}

@Component({
  selector: 'app-pricing',
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {

  pricingPlans: PricingPlan[] = [
    {
      name: 'Basic',
      category: 'Wartung',
      price: '149 €',
      period: '/ mtl.',
      description: 'Grundlegende Wartung und Sicherheit für kleine Projekte.',
      features: [
        'Monitoring',
        'Updates',
        'Security Patches',
        'Email Support',
        'Monatlicher Report'
      ],
      buttonText: 'Basic wählen'
    },
    {
      name: 'Pro',
      category: 'Wartung',
      price: '349 €',
      period: '/ mtl.',
      description: 'Erweiterte Wartung mit priorisiertem Support für wachsende Unternehmen.',
      features: [
        'Alles aus Basic',
        'Priorisierter Support',
        'Quartals-Report',
        'Performance Monitoring',
        'Backup-Service',
        'Telefon Support'
      ],
      buttonText: 'Pro wählen',
      featured: true
    },
    {
      name: 'Premium',
      category: 'Wartung',
      price: '499 €',
      period: '/ mtl.',
      description: 'Premium-Wartung mit SLAs und 24/7 Support für kritische Anwendungen.',
      features: [
        'Alles aus Pro',
        'SLAs',
        'Performance Tuning',
        '24/7 Support',
        'Dedicated Support Manager',
        'Custom Integrations'
      ],
      buttonText: 'Premium wählen'
    }
  ];

  trackPricingClick(planName: string): void {
    console.log(`Pricing plan clicked: ${planName}`);
    // Hier könnte Analytics-Tracking implementiert werden
  }
}