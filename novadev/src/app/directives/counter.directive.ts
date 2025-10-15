import { Directive, ElementRef, input, OnInit, OnDestroy } from '@angular/core';
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

  constructor(
    private el: ElementRef,
    private counterService: CounterService,
    private scrollReveal: ScrollRevealService
  ) {}

  ngOnInit(): void {

    this.el.nativeElement.textContent = '0' + this.suffix();

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