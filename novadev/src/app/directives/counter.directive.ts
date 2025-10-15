import { Directive, ElementRef, input, OnInit, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CounterService } from '../services/counter.service';
import { ScrollRevealService } from '../services/scroll-reveal.service';

@Directive({
  selector: '[appCounter]',
  standalone: true
})
export class CounterDirective implements OnInit, OnDestroy {
  target = input.required<number>();
  suffix = input<string>('');
  duration = input<number>(2000);

  private hasAnimated = false;
  private observer?: IntersectionObserver;
  private platformId = inject(PLATFORM_ID); // <- NEU!

  constructor(
    private el: ElementRef,
    private counterService: CounterService,
    private scrollReveal: ScrollRevealService
  ) {}

  ngOnInit(): void {
    // Nur im Browser ausführen!
    if (!isPlatformBrowser(this.platformId)) {
      // Im SSR: Zeige direkt den Endwert
      this.el.nativeElement.textContent = this.target() + this.suffix();
      return;
    }

    // Initial auf 0 setzen
    this.el.nativeElement.textContent = '0' + this.suffix();

    // Observer für Scroll-Trigger
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.hasAnimated = true;
            this.counterService.animateCounter(
              this.el.nativeElement,
              0,
              this.target(),
              this.duration(),
              this.suffix()
            );
          }
        });
      },
      {
        threshold: 0.5
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}