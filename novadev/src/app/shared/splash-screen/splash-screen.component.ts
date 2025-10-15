import { Component, OnInit, Inject, PLATFORM_ID, EventEmitter, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [],
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.scss'
})
export class SplashScreenComponent implements OnInit {
  @Output() animationComplete = new EventEmitter<void>();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startAnimation();
    }
  }

  private startAnimation(): void {

    const timeline = gsap.timeline({
      onComplete: () => {
        this.animationComplete.emit();
      }
    });

    timeline.from('.splash-screen__logo', {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: 'power2.out'
    });

    timeline.to('.splash-screen__logo', {
      filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.8))',
      duration: 0.5,
      ease: 'power2.inOut'
    }, '-=0.3');

    timeline.to({}, { duration: 0.8 });

    timeline.to('.splash-screen', {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.in'
    });
  }
}