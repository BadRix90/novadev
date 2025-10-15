import { Component, OnInit, OnDestroy, inject } from '@angular/core'; // <- AfterViewInit RAUS
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../shared/hero/hero.component';
import { SeoService } from '../../services/seo.service';
import { JsonLdService } from '../../services/json-ld.service';
import { TextService } from '../../data/text.service';
import { organizationSchema, localBusinessSchema, websiteSchema } from '../../data/schemas';
import * as LucideIcons from 'lucide-angular';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { CounterDirective } from '../../directives/counter.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HeroComponent, CommonModule, LucideIcons.LucideAngularModule, ScrollRevealDirective, CounterDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  textService = inject(TextService);

  icons: Record<string, any> = {
    sparkles: LucideIcons.Sparkles,
    zap: LucideIcons.Zap,
    target: LucideIcons.Target,
    calculator: LucideIcons.Calculator,
    gauge: LucideIcons.Gauge,
    euro: LucideIcons.Euro
  };

  get texts() {
    return this.textService.texts.home;
  }

  constructor(
    private seo: SeoService,
    private jsonLd: JsonLdService
  ) { }

  ngOnInit(): void {
    const seoTexts = this.textService.texts.seo.home;

    this.seo.updateCanonicalUrl('https://novadev-edge.io/');
    this.seo.updateMetaDescription(seoTexts.description);
    this.seo.updateTitle(seoTexts.title);

    this.jsonLd.insertSchema(organizationSchema, 'organization-schema');
    this.jsonLd.insertSchema(localBusinessSchema, 'localbusiness-schema');
    this.jsonLd.insertSchema(websiteSchema, 'website-schema');
  }

  ngOnDestroy(): void {
    this.jsonLd.removeSchema('organization-schema');
    this.jsonLd.removeSchema('localbusiness-schema');
    this.jsonLd.removeSchema('website-schema');
  }
}