import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-arrow-down',
  standalone: true,
  template: `
    <svg 
      [attr.width]="size" 
      [attr.height]="size" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      (mouseenter)="onHover(true)"
      (mouseleave)="onHover(false)"
    >
      <path 
        d="M7 10L12 15L17 10" 
        [attr.stroke]="currentStroke" 
        stroke-width="1.5" 
        stroke-linecap="round" 
        stroke-linejoin="round">
      </path>
    </svg>
  `,
})
export class ArrowDownComponent {
  @Input() color: string = '#ddddddff';      // Default color
  @Input() hoverColor: string = '#ff0000'; // Hover color
  @Input() size: string = '64px';          // Icon size

  currentStroke: string = this.color;

  onHover(isHovering: boolean) {
    this.currentStroke = isHovering ? this.hoverColor : this.color;
  }
}
