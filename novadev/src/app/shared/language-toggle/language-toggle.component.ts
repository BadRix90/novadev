import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextService } from '../../data/text.service';

@Component({
  selector: 'app-language-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-toggle.component.html',
  styleUrl: './language-toggle.component.scss'
})
export class LanguageToggleComponent {
  textService = inject(TextService);

  toggleLanguage(): void {
    this.textService.toggleLanguage();
  }

  get currentLanguage() {
    return this.textService.language;
  }

  get isEnglish() {
    return this.currentLanguage === 'en';
  }
}
