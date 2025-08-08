import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]'
})
export class ScrollRevealDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.el.nativeElement.classList.add('animate');
        observer.unobserve(this.el.nativeElement);
      }
    }, { threshold: 0.1 });
    
    observer.observe(this.el.nativeElement);
  }
}
