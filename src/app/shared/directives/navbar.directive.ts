import { Directive, ElementRef, AfterViewInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appNavbar]',
  standalone: true
})
export class NavbarDirective implements AfterViewInit {
  private lastScrollY = 0;

  constructor(private el: ElementRef, @Inject(DOCUMENT) private document: Document) {}

  ngAfterViewInit(): void {
    const navbar = this.el.nativeElement;
    const navLinks = this.document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;

      // if (currentScrollY > 100) {
      //   navbar.style.background = 'rgba(255, 255, 255, 0.98)';
      //   navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
      // } else {
      //   navbar.style.background = 'rgba(255, 255, 255, 0.95)';
      //   navbar.style.boxShadow = 'none';
      // }

      // if (currentScrollY > this.lastScrollY && currentScrollY > 100) {
      //   navbar.style.transform = 'translateY(-100%)';
      // } else {
      //   navbar.style.transform = 'translateY(0)';
      // }

      this.lastScrollY = currentScrollY;
      this.highlightActiveSection(navLinks);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const targetId = (link as HTMLAnchorElement).getAttribute('href')!;
        const target = this.document.querySelector(targetId);
        if (target) {
          const offsetTop = (target as HTMLElement).offsetTop - 70;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      });
    });
  }

  private highlightActiveSection(navLinks: NodeListOf<Element>) {
    const scrollPos = window.scrollY + 100;
    const sections = this.document.querySelectorAll('section[id]');

    sections.forEach(section => {
      const top = (section as HTMLElement).offsetTop;
      const height = (section as HTMLElement).offsetHeight;
      const id = section.getAttribute('id');
      const link = this.document.querySelector(`.nav-link[href="#${id}"]`);

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(l => l.classList.remove('active'));
        link?.classList.add('active');
      }
    });
  }
}
