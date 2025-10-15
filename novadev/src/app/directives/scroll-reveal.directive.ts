import { Directive, ElementRef, OnInit, OnDestroy, input } from '@angular/core';
import { ScrollRevealService } from '../services/scroll-reveal.service';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  animation = input<string>('reveal');
  delay = input<number>(0);

  constructor(
    private el: ElementRef,
    private scrollReveal: ScrollRevealService
  ) { }

  ngOnInit(): void {
    const element = this.el.nativeElement;

    element.classList.add(this.animation());

    if (this.delay() > 0) {
      element.classList.add(`reveal-delay-${this.delay()}`);
    }

    this.scrollReveal.observe(element);
  }

  ngOnDestroy(): void {
    this.scrollReveal.unobserve(this.el.nativeElement);
  }
}