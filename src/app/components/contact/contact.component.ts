import { Component } from '@angular/core';
import { FormAnimationsDirective } from '../../shared/directives/form-animate.directive';
import { AnimateOnScrollDirective } from '../../shared/directives/scroll-reveal.directive';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormAnimationsDirective, AnimateOnScrollDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
