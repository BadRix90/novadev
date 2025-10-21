import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { TextService } from '../../data/text.service';
import * as LucideIcons from 'lucide-angular';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [LucideIcons.LucideAngularModule, RouterLink],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent implements OnInit {
  textService = inject(TextService);

  icons: Record<string, any> = {
    layout: LucideIcons.Layout,
    target: LucideIcons.Target,
    user: LucideIcons.User,
    code2: LucideIcons.Code2
  };

  get texts() {
    return this.textService.texts.about;
  }

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.updateCanonicalUrl('https://novadev-edge.io/ueber-uns');
    this.seo.updateMetaDescription('Kay Dietrich - NovaDev Gründer. 12 Jahre Bundeswehr IT-Erfahrung. Spezialisiert auf SaaS-Dashboards für KMU.');
    this.seo.updateTitle('Über uns - NovaDev Edge');
  }
}