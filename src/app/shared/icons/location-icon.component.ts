import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'location-icon',
  standalone: true,
  template: `
    <svg
      [attr.width]="width"
      [attr.height]="height"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      [attr.stroke]="strokeColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="location-icon"
    >
      <path
        d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
      ></path>
      <path
        d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
      ></path>
    </svg>
  `,
  styles: [
    `
      * {
        display: flex;
      }
      .location-icon {
        transition: stroke 0.3s ease;
        cursor: pointer;
      }
      .location-icon:hover {
        stroke: var(--hover-stroke, #ff5722);
      }
    `,
  ],
})
export class LocationIconComponent {
  @Input() width: string = '32px';
  @Input() height: string = '32px';

  // Default stroke color, can be customized
  @Input() strokeColor: string = '#fff';

  // Optional: CSS variable for hover stroke color can be customized from outside by style binding or host style
}
