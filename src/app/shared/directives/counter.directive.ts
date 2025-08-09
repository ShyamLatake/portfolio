// counter.directive.ts
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCounter]',
  standalone: true
})
export class CounterDirective implements OnInit {
  @Input() appCounter!: number; // Target value

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const element = this.el.nativeElement as HTMLElement;

    const counterObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter(element, this.appCounter);
          counterObserver.unobserve(element);
        }
      });
    });

    counterObserver.observe(element);
  }

  private animateCounter(element: HTMLElement, target: number) {
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      current += step;
      if (current >= target) {
        element.textContent = target.toString();
      } else {
        element.textContent = Math.floor(current).toString();
        requestAnimationFrame(updateCounter);
      }
    };

    updateCounter();
  }
}
