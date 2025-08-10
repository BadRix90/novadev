import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.animateOnLoad();
    }
  }

  private animateOnLoad(): void {
    const heroContent = document.querySelector('.hero__content');
    const heroSpotlight = document.querySelector('.hero__spotlight');
    
    if (heroContent) {
      heroContent.classList.add('hero__content--animate');
    }
    
    if (heroSpotlight) {
      setTimeout(() => {
        heroSpotlight.classList.add('hero__spotlight--animate');
      }, 100);
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

  trackCTAClick(action: string): void {
    console.log(`CTA clicked: ${action}`);
  }
}