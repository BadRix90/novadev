import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.updateBodyScrollLock();
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    this.updateBodyScrollLock();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    this.closeMobileMenu();
  }

  private updateBodyScrollLock(): void {
    const body = document.body;
    const html = document.documentElement;
    
    if (this.isMobileMenuOpen) {
      // Scroll komplett sperren
      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
      body.style.width = '100%';
      body.style.height = '100%';
      html.style.overflow = 'hidden';
      
      body.classList.add('mobile-menu-open');
    } else {
      // Scroll freigeben
      body.style.overflow = '';
      body.style.position = '';
      body.style.width = '';
      body.style.height = '';
      html.style.overflow = '';
      
      body.classList.remove('mobile-menu-open');
    }
  }
}