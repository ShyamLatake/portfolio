import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { AboutComponent } from "./components/about/about.component";
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ContactComponent, FooterComponent, ProjectsComponent, AboutComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-site';

  sections: HTMLElement[] = [];

  ngAfterViewInit(): void {
    // Delay to ensure content projection and rendering
    setTimeout(() => {
      this.sections = Array.from(document.querySelectorAll('section[id]')) as HTMLElement[];
      this.updateActiveNav();
    }, 100);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.updateActiveNav();
  }

  updateActiveNav(): void {
    const scrollPos = window.scrollY + 100;
    const navLinks = document.querySelectorAll('.nav-link');

    this.sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove('active'));
        if (navLink) navLink.classList.add('active');
      }
    });
  }
}
