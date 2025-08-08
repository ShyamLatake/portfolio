import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRipple]'
})
export class RippleDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.position = 'relative';
    this.el.nativeElement.style.overflow = 'hidden';
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    const ripple = document.createElement('span');
    const rect = this.el.nativeElement.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      position: absolute;
      border-radius: 50%;
      background: rgba(255,255,255,0.4);
      transform: scale(0);
      animation: ripple-animation 0.6s linear;
      pointer-events: none;
    `;

    this.el.nativeElement.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }
}
