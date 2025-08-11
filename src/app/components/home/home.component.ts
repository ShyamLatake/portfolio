import { Component } from '@angular/core';
import { ArrowDownComponent } from "../../shared/icons/home/arrow-down.component";
import { EmailIconComponent } from "../../shared/icons/home/mail.component";
import { ArrowRightComponent } from "../../shared/icons/home/right-arrow.component";
import { DatabaseIconComponent } from "../../shared/icons/home/database.component";
import { ShieldIconComponent } from "../../shared/icons/angular.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ArrowDownComponent, EmailIconComponent, ArrowRightComponent, DatabaseIconComponent, ShieldIconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
