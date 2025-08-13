import { Component, Input } from '@angular/core';

@Component({
  selector: 'javascript-icon',
  standalone: true,
  template: `
    <svg
      [attr.width]="size + 'px'"
      [attr.height]="size + 'px'"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      [attr.fill]="currentColor"
      [attr.stroke]="currentColor"
      (mouseenter)="onHover(true)"
      (mouseleave)="onHover(false)"
      [style.transform]="isHovered ? 'scale(1.1)' : 'scale(1)'"
      style="transition: transform 0.2s ease, fill 0.2s ease, stroke 0.2s ease; cursor: pointer;"
    >
      <rect
        width="512"
        height="512"
        rx="15%"
        [attr.fill]="currentBgColor"
      ></rect>
      <path
        d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58-33 -58-72c0-36 27-64 70-64c31 0 53 11 68 39l-37 24c-8-15 -17-21 -31-21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88-49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72-44z"
      ></path>
    </svg>
  `
})
export class JavascriptIconComponent {
  @Input() color: string = '#616161';
  @Input() hoverColor: string = '#f7df1e';
  @Input() bgColor: string = '#fff6b3';
  @Input() hoverBgColor: string = '#f7df1e';
  @Input() size: number = 60;

  isHovered = false;

  get currentColor() {
    return this.isHovered ? this.hoverColor : this.color;
  }

  get currentBgColor() {
    return this.isHovered ? this.hoverBgColor : this.bgColor;
  }

  onHover(state: boolean) {
    this.isHovered = state;
  }
}
