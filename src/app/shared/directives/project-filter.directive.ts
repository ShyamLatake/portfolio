// project-filter.directive.ts
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appProjectFilter]',
  standalone: true
})
export class ProjectFilterDirective implements OnInit {
  @Input({ required: true }) filterButtonsSelector!: string;
  @Input({ required: true }) projectCardsSelector!: string;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const container = this.el.nativeElement as HTMLElement;
    const filterButtons = container.querySelectorAll<HTMLElement>(this.filterButtonsSelector);
    const projectCards = container.querySelectorAll<HTMLElement>(this.projectCardsSelector);

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter') || 'all';

        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter projects with animation
        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'block';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 100);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }
}
