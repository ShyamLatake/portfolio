import { Component } from '@angular/core';
import { NavbarDirective } from '../../shared/directives/navbar.directive';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
