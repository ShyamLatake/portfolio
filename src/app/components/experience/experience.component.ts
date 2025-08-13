import { Component, ElementRef, Renderer2 } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { AnimateOnScrollDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    const items = this.el.nativeElement.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(entry.target, 'animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((item: any) => observer.observe(item));
  }
}
