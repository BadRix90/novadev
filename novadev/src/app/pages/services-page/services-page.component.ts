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
    layout: LucideIcons.Layout,
    briefcase: LucideIcons.Briefcase,
    shoppingcart: LucideIcons.ShoppingCart,
    code2: LucideIcons.Code2
  };

  get texts() {
    return this.textService.texts.services;
  }

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateCanonicalUrl('https://novadev-edge.io/leistungen');
    this.seo.updateMetaDescription('Dashboard-Entwicklung für KMU: HR-Dashboards, Service-Portale, E-Commerce-Backends. Template-basiert ab 12.000€.');
    this.seo.updateTitle('Leistungen - NovaDev Edge');
  }
}
