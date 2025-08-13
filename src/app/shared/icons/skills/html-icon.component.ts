import { Component, Input } from '@angular/core';

@Component({
  selector: 'html-icon',
  standalone: true,
  template: `
    <svg
      [attr.width]="width"
      [attr.height]="height"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      [attr.fill]="fill"
    >
      <rect x="0" fill="none" width="20" height="20"></rect>
      <g>
        <path d="M4 16v-2H2v2H1v-5h1v2h2v-2h1v5H4zM7 16v-4H5.6v-1h3.7v1H8v4H7zM10 16v-5h1l1.4 3.4h.1L14 11h1v5h-1v-3.1h-.1l-1.1 2.5h-.6l-1.1-2.5H11V16h-1zM19 16h-3v-5h1v4h2v1zM9.4 4.2L7.1 6.5l2.3 2.3-.6 1.2-3.5-3.5L8.8 3l.6 1.2zm1.2 4.6l2.3-2.3-2.3-2.3.6-1.2 3.5 3.5-3.5 3.5-.6-1.2z"></path>
      </g>
    </svg>
  `
})
export class HtmlIconComponent {
  @Input() width: string = '64px';
  @Input() height: string = '64px';
  @Input() fill: string = '#000000';
}
