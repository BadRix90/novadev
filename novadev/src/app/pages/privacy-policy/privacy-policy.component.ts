import { Component, OnInit, Inject, PLATFORM_ID, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { SeoService } from '../../services/seo.service';
import { TextService } from '../../data/text.service';

@Component({
  selector: 'app-privacy-policy',
  imports: [RouterLink, CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit {
  textService = inject(TextService);

  get texts() {
    return this.textService.texts.privacyPolicy;
  }

  get provider() {
    return this.textService.texts.legalNotice.provider;
  }

  currentDate = new Date().toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private seo: SeoService
  ) { }

  ngOnInit(): void {
    this.seo.updateCanonicalUrl('https://novadev-edge.io/datenschutz');
    this.seo.updateMetaDescription('Privacy Policy of NovaDev Edge. Information on data processing in accordance with GDPR.');
    this.seo.updateTitle('Privacy - NovaDev Edge');
  }

  navigateToContact(event: Event): void {
    event.preventDefault();

    this.router.navigate(['/']).then(() => {
      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => {
          const element = document.getElementById('contact');
          if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    });
  }
}