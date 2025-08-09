import { Component } from '@angular/core';
// Imported directive for scroll animations
import { AnimateOnScrollDirective } from '../../shared/directives/scroll-reveal.directive';
import { SkillBarDirective } from '../../shared/directives/skill-bar.directive';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [AnimateOnScrollDirective, SkillBarDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {

}
