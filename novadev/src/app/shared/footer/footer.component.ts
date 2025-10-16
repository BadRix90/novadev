import { Component, Inject, PLATFORM_ID, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { TextService } from '../../data/text.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  textService = inject(TextService);

  private _isDark: boolean = true;

  get texts() {
    return this.textService.texts.footer;
  }

  get isDark(): boolean {
    return this._isDark;
  }

  currentYear = new Date().getFullYear();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

    if (typeof document !== 'undefined') {
      this._isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    }
  }

  scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}