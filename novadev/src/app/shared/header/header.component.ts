import { Component, Inject, PLATFORM_ID, inject, ChangeDetectorRef, HostListener } from '@angular/core';
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
  private cdr = inject(ChangeDetectorRef);

  private _isDark: boolean = true;

  get texts() {
    return this.textService.texts.header;
  }

  get isDark(): boolean {
    return this._isDark;
  }

  isMobileMenuOpen = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (typeof document !== 'undefined') {
      this._isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.isMobileMenuOpen) return;

    const target = event.target as HTMLElement;
    const clickedInside = target.closest('.nav__mobile') || target.closest('.nav__mobile-toggle');

    if (!clickedInside) {
      this.closeMobileMenu();
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    const element = document.getElementById(sectionId);

    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}