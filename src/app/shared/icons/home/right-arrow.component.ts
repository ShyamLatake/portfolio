import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-right',
  standalone: true,
  styles: [`
    * {
      display: flex;
    }
  `],
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
        d="M6 12H18M18 12L13 7M18 12L13 17" 
        [attr.stroke]="currentStroke" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round">
      </path>
    </svg>
  `,
})
export class ArrowRightComponent {
  @Input() color: string = '#fff';
  @Input() hoverColor: string = '#fff';
  @Input() size: string = '24px';

  currentStroke: string = this.color;

  onHover(isHovering: boolean) {
    this.currentStroke = isHovering ? this.hoverColor : this.color;
  }
}
