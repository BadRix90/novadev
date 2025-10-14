import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-legal-notice',
  imports: [RouterLink, CommonModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent implements OnInit {
  
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private seo: SeoService
  ) {}

    ngOnInit(): void {
    this.seo.updateCanonicalUrl('https://saltcity-web.com/impressum');
    this.seo.updateMetaDescription('Impressum von SaltCity Web. Angaben gemäß § 5 TMG. Kay Dietrich, Webentwicklung, Lüneburg.');
    this.seo.updateTitle('Impressum - SaltCity Web');
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