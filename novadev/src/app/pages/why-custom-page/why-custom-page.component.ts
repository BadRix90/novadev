import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { TextService } from '../../data/text.service';
import * as LucideIcons from 'lucide-angular';

@Component({
  selector: 'app-why-custom-page',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideIcons.LucideAngularModule],
  templateUrl: './why-custom-page.component.html',
  styleUrl: './why-custom-page.component.scss'
})
export class WhyCustomPageComponent implements OnInit {
  textService = inject(TextService);

  icons: Record<string, any> = {
    zap: LucideIcons.Zap,
    shield: LucideIcons.Shield,
    coins: LucideIcons.Coins,
    wrench: LucideIcons.Wrench
  };

  get texts() {
    return this.textService.texts.whyCustom;
  }

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.updateCanonicalUrl('https://saltcity-web.com/warum-custom-development');
    this.seo.updateMetaDescription('Warum Custom Development? 40% schneller, 96% sicherer, keine Lizenzkosten. Maßgeschneiderte Angular-Lösungen für KMU.');
    this.seo.updateTitle('Warum Custom Development? - SaltCity Web');
  }
}