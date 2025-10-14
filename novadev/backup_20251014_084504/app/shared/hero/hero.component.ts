import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

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

  trackCTAClick(action: string): void {
    console.log(`CTA clicked: ${action}`);
  }
}