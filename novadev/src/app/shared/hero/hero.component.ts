import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID, ViewChild, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, AfterViewInit {
  @ViewChild('heroBackground') heroBackground!: ElementRef;
  @ViewChild('heroContent') heroContent!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initParallaxAnimations();
      this.initFadeInAnimations();
    }
  }

  private initParallaxAnimations(): void {
    // Parallax Background (scrollt langsamer)
    gsap.to(this.heroBackground.nativeElement, {
      y: 300, // Background bewegt sich 300px nach unten
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true // Bindet an Scroll-Position
      }
    });

    // Content Fade-Out beim Scrollen
    gsap.to(this.heroContent.nativeElement, {
      opacity: 0,
      y: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: '50% top',
        scrub: true
      }
    });
  }

  private initFadeInAnimations(): void {
    // Badge Fade-In
    gsap.from('.hero__badge', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.2,
      immediateRender: false // FIX!
    });

    // Headline Fade-In
    gsap.from('.hero__headline', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.4,
      immediateRender: false // FIX!
    });

    // Subline Fade-In
    gsap.from('.hero__subline', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.6,
      immediateRender: false // FIX!
    });

    // Key Facts staggered Fade-In
    gsap.from('.hero__fact', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.1,
      delay: 0.8,
      immediateRender: false // FIX!
    });

    // CTAs Fade-In
    gsap.from('.hero__cta-primary, .hero__cta-secondary', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.15,
      delay: 1,
      immediateRender: false // FIX!
    });
  }

  trackCTAClick(action: string): void {
    console.log(`CTA clicked: ${action}`);
  }
}