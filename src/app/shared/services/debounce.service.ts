import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DebounceService {
  debounce(func: (...args: any[]) => void, wait: number) {
    let timeout: any;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }
}
