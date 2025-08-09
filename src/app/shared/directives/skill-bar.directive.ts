// skill-bar.directive.ts
import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '[appSkillBar]',
  standalone: true
})
export class SkillBarDirective implements OnInit {
  @Input() appSkillBarContainer = false; // If true, will animate all bars inside

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const element = this.el.nativeElement as HTMLElement;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (this.appSkillBarContainer) {
            this.animateBars(element);
          } else {
            this.animateSingleBar(element);
          }
          observer.unobserve(element);
        }
      });
    });

    observer.observe(element);
  }

  private animateBars(container: HTMLElement) {
    const skillBars = container.querySelectorAll<HTMLElement>('.skill-progress');
    skillBars.forEach((bar, index) => {
      setTimeout(() => {
        const width = bar.getAttribute('data-width') || '0';
        bar.style.width = width + '%';
      }, index * 200);
    });
  }

  private animateSingleBar(bar: HTMLElement) {
    const width = bar.getAttribute('data-width') || '0';
    bar.style.width = width + '%';
  }
}
