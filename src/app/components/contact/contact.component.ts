import { Component } from '@angular/core';
import { FormAnimationsDirective } from '../../shared/directives/form-animate.directive';
import { AnimateOnScrollDirective } from '../../shared/directives/scroll-reveal.directive';
import { LocationIconComponent } from "../../shared/icons/location-icon.component";
import { EmailIconComponent } from "../../shared/icons/home/mail.component";
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormAnimationsDirective, AnimateOnScrollDirective, LocationIconComponent, EmailIconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
