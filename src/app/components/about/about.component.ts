import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [
      trigger('slideIn', [
        transition(':enter', [
          style({ transform: 'translateX(-50px)', opacity: 0 }),
          animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
        ])
      ])
    ]
})
export class AboutComponent {

}
