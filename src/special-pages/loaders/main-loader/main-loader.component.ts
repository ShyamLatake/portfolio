import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-main-loader',
  standalone: true,
  imports: [],
  templateUrl: './main-loader.component.html',
  styleUrl: './main-loader.component.scss',
})
export class MainLoaderComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    // Any additional logic after the view initializes can be added here
    const loadingScreen = document.getElementById('loadingScreen');
    window.addEventListener('load', () => {
      setTimeout(() => {
        loadingScreen?.classList.add('hidden');
        setTimeout(() => {
          if (loadingScreen) loadingScreen.style.display = 'none';
        }, 500);
      }, 1000);
    });
  }
}
