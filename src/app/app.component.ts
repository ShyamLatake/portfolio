import { Component, HostListener, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    ContactComponent,
    FooterComponent,
    ProjectsComponent,
    AboutComponent,
    HomeComponent,
    SkillsComponent,
    ExperienceComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio-site';

  sections: HTMLElement[] = [];
private cleanupFns: (() => void)[] = [];

  ngAfterViewInit(): void {

    this.initializeAnimations();
  }

  ngOnDestroy(): void {
    // Clean up all stored event listeners
    this.cleanupFns.forEach(fn => fn());
  }

  private initializeAnimations(): void {
    // =========================
    // Parallax effect
    const shapes = document.querySelectorAll('.shape');
    const parallaxHandler = () => {
      const scrolled = window.pageYOffset;
      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        (shape as HTMLElement).style.transform =
          `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
      });
    };
    window.addEventListener('scroll', parallaxHandler);
    this.cleanupFns.push(() => window.removeEventListener('scroll', parallaxHandler));

    // =========================
    // Hover effects for cards
    const cards = document.querySelectorAll('.project-card, .skill-item, .contact-item, .stat-item');
    cards.forEach(card => {
      const enter = () => (card as HTMLElement).style.transform = 'translateY(-5px)';
      const leave = () => (card as HTMLElement).style.transform = 'translateY(0)';
      card.addEventListener('mouseenter', enter);
      card.addEventListener('mouseleave', leave);
      this.cleanupFns.push(() => {
        card.removeEventListener('mouseenter', enter);
        card.removeEventListener('mouseleave', leave);
      });
    });

    // =========================
    // Typing effect
    const titleName = document.querySelector('.title-name') as HTMLElement;
    if (titleName) {
      const text = titleName.textContent || '';
      titleName.textContent = '';
      titleName.style.borderRight = '2px solid';
      let i = 0;
      const typeWriter = () => {
        if (i < text.length) {
          titleName.textContent += text.charAt(i++);
          setTimeout(typeWriter, 100);
        } else {
          setTimeout(() => titleName.style.borderRight = 'none', 1000);
        }
      };
      setTimeout(typeWriter, 1500);
    }

    // =========================
    // Ripple effect for buttons
    const buttons = document.querySelectorAll('.btn, .filter-btn');
    buttons.forEach(button => {
      const clickHandler = (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const ripple = document.createElement('span');
        const rect = (button as HTMLElement).getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = mouseEvent.clientX - rect.left - size / 2;
        const y = mouseEvent.clientY - rect.top - size / 2;
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.classList.add('ripple');
        button.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      };
      button.addEventListener('click', clickHandler as EventListener);
      this.cleanupFns.push(() => button.removeEventListener('click', clickHandler as EventListener));
    });

    // =========================
    // Smooth scrolling for anchors
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      const clickHandler = (e: Event) => {
        e.preventDefault();
        const target = document.querySelector((anchor as HTMLAnchorElement).getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
      anchor.addEventListener('click', clickHandler);
      this.cleanupFns.push(() => anchor.removeEventListener('click', clickHandler));
    });

    // =========================
    // Scroll progress bar
    const scrollProgress = document.createElement('div');
    scrollProgress.classList.add('scroll-progress');
    document.body.appendChild(scrollProgress);

    const progressHandler = () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      scrollProgress.style.width = `${scrolled}%`;
    };
    window.addEventListener('scroll', progressHandler);
    this.cleanupFns.push(() => window.removeEventListener('scroll', progressHandler));

    // =========================
    // Custom cursor
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    const mouseMoveHandler = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursor.style.opacity = '0.8';
    };
    document.addEventListener('mousemove', mouseMoveHandler);
    this.cleanupFns.push(() => document.removeEventListener('mousemove', mouseMoveHandler));

    const enterHandler = () => cursor.style.opacity = '0.8';
    const leaveHandler = () => cursor.style.opacity = '0';
    document.addEventListener('mouseenter', enterHandler);
    document.addEventListener('mouseleave', leaveHandler);
    this.cleanupFns.push(() => {
      document.removeEventListener('mouseenter', enterHandler);
      document.removeEventListener('mouseleave', leaveHandler);
    });

    // =========================
    // Hover scaling for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-item, .contact-item');
    interactiveElements.forEach(el => {
      const enter = () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.opacity = '0.6';
      };
      const leave = () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.opacity = '0.8';
      };
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
      this.cleanupFns.push(() => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
    });

    // =========================
    // Keyboard navigation outline
    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === 'Tab') document.body.classList.add('keyboard-navigation');
    };
    const mouseDownHandler = () => document.body.classList.remove('keyboard-navigation');

    document.addEventListener('keydown', keyHandler);
    document.addEventListener('mousedown', mouseDownHandler);

    this.cleanupFns.push(() => {
      document.removeEventListener('keydown', keyHandler);
      document.removeEventListener('mousedown', mouseDownHandler);
    });
  }

}
