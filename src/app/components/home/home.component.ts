import { Component } from '@angular/core';
import { ArrowDownComponent } from "../../shared/icons/arrow-down.component";
import { EmailIconComponent } from "../../shared/icons/mail.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ArrowDownComponent, EmailIconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
