import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { TextService } from '../../data/text.service';
import * as LucideIcons from 'lucide-angular';

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
    'file-text': LucideIcons.FileText,
    shield: LucideIcons.Shield,
    link: LucideIcons.Link
  };

  get texts() {
    return this.textService.texts.services;
  }

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateCanonicalUrl('https://novadev-edge.io/leistungen');
    this.seo.updateMetaDescription('Compliance-Automation für KMUs: E-Invoice Ready, CyberSafe NIS2, SAP Connect. Festpreise ab 1.997€.');
    this.seo.updateTitle('Lösungen - NovaDev Edge');
  }
}
