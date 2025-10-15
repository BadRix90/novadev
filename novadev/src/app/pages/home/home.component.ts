import { Component, OnInit, OnDestroy, inject } from '@angular/core'; // <- AfterViewInit RAUS
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../shared/hero/hero.component';
import { SeoService } from '../../services/seo.service';
import { JsonLdService } from '../../services/json-ld.service';
import { TextService } from '../../data/text.service';
import { organizationSchema, localBusinessSchema, websiteSchema } from '../../data/schemas';
// import { gsap } from 'gsap'; <- RAUS
// import { ScrollTrigger } from 'gsap/ScrollTrigger'; <- RAUS

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HeroComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy { // <- AfterViewInit RAUS
  textService = inject(TextService);
  
  get texts() {
    return this.textService.texts.home;
  }

  constructor(
    private seo: SeoService, 
    private jsonLd: JsonLdService
    // @Inject(PLATFORM_ID) private platformId: Object <- RAUS
  ) { }

  ngOnInit(): void {
    const seoTexts = this.textService.texts.seo.home;
    
    this.seo.updateCanonicalUrl('https://saltcity-web.com/');
    this.seo.updateMetaDescription(seoTexts.description);
    this.seo.updateTitle(seoTexts.title);

    this.jsonLd.insertSchema(organizationSchema, 'organization-schema');
    this.jsonLd.insertSchema(localBusinessSchema, 'localbusiness-schema');
    this.jsonLd.insertSchema(websiteSchema, 'website-schema');
  }

  // ngAfterViewInit() LÖSCHEN
  // initScrollAnimations() LÖSCHEN

  ngOnDestroy(): void {
    this.jsonLd.removeSchema('organization-schema');
    this.jsonLd.removeSchema('localbusiness-schema');
    this.jsonLd.removeSchema('website-schema');
  }
}