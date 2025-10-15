import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ScrollRevealService {
  private platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.initObserver();
    }
  }

  private initObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );
  }

  observe(element: HTMLElement): void {
    if (this.observer) {
      this.observer.observe(element);
    }
  }

  unobserve(element: HTMLElement): void {
    if (this.observer) {
      this.observer.unobserve(element);
    }
  }
}