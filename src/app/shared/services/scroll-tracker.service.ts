import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollTrackerService {
  private scrollListeners: Function[] = [];

  constructor() {
    window.addEventListener('scroll', this.debounce(this.emitScroll.bind(this), 16));
  }

  register(fn: Function) {
    this.scrollListeners.push(fn);
  }

  private emitScroll() {
    this.scrollListeners.forEach(fn => fn());
  }

  private debounce(func: Function, wait: number) {
    let timeout: any;
    return  (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
}
