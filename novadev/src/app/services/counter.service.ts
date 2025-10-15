import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  
  animateCounter(
    element: HTMLElement,
    start: number,
    end: number,
    duration: number = 2000,
    suffix: string = ''
  ): void {
    const startTime = performance.now();
    const isDecimal = end % 1 !== 0;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      const current = start + (end - start) * easeOut;
      
      if (isDecimal) {
        element.textContent = current.toFixed(1) + suffix;
      } else {
        element.textContent = Math.floor(current) + suffix;
      }
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.textContent = end + suffix;
      }
    };
    
    requestAnimationFrame(animate);
  }
}