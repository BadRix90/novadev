import { Component, Inject, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { LanguageToggleComponent } from '../language-toggle/language-toggle.component';
import { TextService } from '../../data/text.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ThemeToggleComponent, LanguageToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  textService = inject(TextService);

  get texts() {
    return this.textService.texts.header;
  }
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