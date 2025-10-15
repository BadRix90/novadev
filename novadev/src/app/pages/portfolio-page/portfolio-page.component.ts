import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { TextService } from '../../data/text.service';
import * as LucideIcons from 'lucide-angular';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideIcons.LucideAngularModule],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.scss'
})
export class PortfolioPageComponent implements OnInit {
  textService = inject(TextService);
  readonly ExternalLink = LucideIcons.ExternalLink;

  get texts() {
    return this.textService.texts.portfolio;
  }

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.updateCanonicalUrl('https://novadev-edge.io/projekte');
    this.seo.updateMetaDescription('Referenzprojekte von SaltCity Web. Angular SPAs und PWAs für verschiedene Branchen. Funktional, performant, zukunftssicher.');
    this.seo.updateTitle('Projekte - SaltCity Web');
  }

  trackProjectClick(projectTitle: string): void {
    console.log(`Portfolio project clicked: ${projectTitle}`);
  }
}