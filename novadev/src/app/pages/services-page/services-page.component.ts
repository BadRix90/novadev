import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { TextService } from '../../data/text.service';
import * as LucideIcons from 'lucide-angular';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  techStack: string[];
}

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideIcons.LucideAngularModule],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.scss'
})
export class ServicesPageComponent implements OnInit {

  textService = inject(TextService);

  icons: Record<string, any> = {
    code2: LucideIcons.Code2,
    smartphone: LucideIcons.Smartphone,
    gauge: LucideIcons.Gauge,
    wrench: LucideIcons.Wrench
  };

  get texts() {
    return this.textService.texts.services;
  }

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.updateCanonicalUrl('https://novadev-edge.io/Leistungen');
    this.seo.updateMetaDescription('Angular Webentwicklung, Performance-Optimierung, Responsive Design. Spezialisiert auf KMU. Transparenter Stundensatz: 65€/h netto.');
    this.seo.updateTitle('Leistungen - SaltCity Web');
  }

}