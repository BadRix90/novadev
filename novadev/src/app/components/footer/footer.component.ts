// footer.component.ts
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  currentYear = new Date().getFullYear();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  scrollToSection(sectionId: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById(sectionId.replace('#', ''));
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }

  trackSocialClick(platform: string): void {
    console.log(`Social link clicked: ${platform}`);
  }

  trackFooterLinkClick(linkText: string): void {
    console.log(`Footer link clicked: ${linkText}`);
  }
}