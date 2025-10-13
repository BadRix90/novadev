import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-privacy-policy',
  imports: [RouterLink, CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class LegalNoticeComponent implements OnInit {
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
    this.seo.updateCanonicalUrl('https://saltcity-web.com/datenschutz');
    this.seo.updateMetaDescription('Datenschutzerklärung von SaltCity Web. Informationen zur Erhebung, Verarbeitung und Nutzung personenbezogener Daten gemäß DSGVO.');
    this.seo.updateTitle('Datenschutz - SaltCity Web');
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