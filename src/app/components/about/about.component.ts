import { Component } from '@angular/core';

// Imported directive for scroll animations
import { AnimateOnScrollDirective } from '../../shared/directives/scroll-reveal.directive';
import { CounterDirective } from '../../shared/directives/counter.directive';
@Component({
  selector: 'app-about',
  standalone: true,
  // Importing the directive for scroll animations
  imports: [AnimateOnScrollDirective, CounterDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
