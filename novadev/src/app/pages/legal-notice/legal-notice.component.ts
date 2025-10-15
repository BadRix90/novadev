import { Component, OnInit, Inject, PLATFORM_ID, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { SeoService } from '../../services/seo.service';
import { TextService } from '../../data/text.service';

@Component({
  selector: 'app-legal-notice',
  imports: [RouterLink, CommonModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent implements OnInit {
  textService = inject(TextService); 

  get texts() {
    return this.textService.texts.legalNotice;
  }

  get provider() {
    return this.texts.provider;
  }
  
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.seo.updateCanonicalUrl('https://novadev-edge.io/impressum');
    this.seo.updateMetaDescription('Legal Notice of NovaDev Edge. Information according to § 5 TMG. Kay Dietrich, Web Development, Lüneburg.');
    this.seo.updateTitle('Legal Notice - NovaDev Edge');
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