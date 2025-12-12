import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly THEME_KEY = 'novadev-theme';
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  currentTheme = signal<'light' | 'dark'>('light');

  constructor() {
    if (this.isBrowser) {
      this.initTheme();

      effect(() => {
        const theme = this.currentTheme();
        this.applyTheme(theme);
        localStorage.setItem(this.THEME_KEY, theme);
      });
    }
  }

  private initTheme(): void {
    const savedTheme = localStorage.getItem(this.THEME_KEY) as 'light' | 'dark' | null;

    if (savedTheme) {
      this.currentTheme.set(savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.currentTheme.set(prefersDark ? 'dark' : 'light');
    }
  }

  private applyTheme(theme: 'light' | 'dark'): void {
    if (this.isBrowser) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }

  toggleTheme(): void {
    this.currentTheme.update(current => current === 'light' ? 'dark' : 'light');
  }

  setTheme(theme: 'light' | 'dark'): void {
    this.currentTheme.set(theme);
  }
}
