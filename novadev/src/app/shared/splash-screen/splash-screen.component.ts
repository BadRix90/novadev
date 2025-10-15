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
    console.log('🎬 Splash Animation startet');

    const timeline = gsap.timeline({
      onComplete: () => {
        console.log('✅ Animation fertig - emitting event');
        this.animationComplete.emit();
      }
    });

    // Logo Fade-In + Scale
    timeline.from('.splash-screen__logo', {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: 'power2.out'
    });

    // Glow-Effekt
    timeline.to('.splash-screen__logo', {
      filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.8))',
      duration: 0.5,
      ease: 'power2.inOut'
    }, '-=0.3');

    // Pause
    timeline.to({}, { duration: 0.8 });

    // Fade-Out
    timeline.to('.splash-screen', {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.in'
    });
  }
}