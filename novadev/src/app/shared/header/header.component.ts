import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.updateBodyScrollLock();
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    this.updateBodyScrollLock();
  }

  onNavClick(ev: Event, sectionId: string) {
    if (!isPlatformBrowser(this.platformId)) return;

    // Mobile Menu immer schließen
    this.closeMobileMenu();

    const path = window.location.pathname;
    const onHome = path === '/' || path === '/index.html';

    if (onHome) {
      // Auf Hauptseite: Event verhindern und scrollen
      ev.preventDefault();
      setTimeout(() => {
        this.scrollToSection(sectionId);
      }, 300); // Kurz warten bis Menu geschlossen ist
    }
    // Auf anderen Seiten: Browser macht normale Navigation mit href
  }

  scrollToSection(sectionId: string): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  goToHome(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.closeMobileMenu();
    
    const currentPath = window.location.pathname;
    if (currentPath === '/impressum' || currentPath === '/datenschutz') {
      setTimeout(() => {
        window.location.href = '/';
      }, 300);
    }
  }

  private updateBodyScrollLock(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const body = document.body;
    const html = document.documentElement;

    if (this.isMobileMenuOpen) {
      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
      body.style.width = '100%';
      body.style.height = '100%';
      html.style.overflow = 'hidden';
      body.classList.add('mobile-menu-open');
    } else {
      body.style.overflow = '';
      body.style.position = '';
      body.style.width = '';
      body.style.height = '';
      html.style.overflow = '';
      body.classList.remove('mobile-menu-open');
    }
  }
}