import { Injectable, signal } from '@angular/core';
import { DE_TEXTS } from './texts/de.texts';
import { EN_TEXTS } from './texts/en.texts';

type Language = 'de' | 'en';

@Injectable({
  providedIn: 'root'
})
export class TextService {
  private currentLanguage = signal<Language>('de');
  
  get texts() {
    return this.currentLanguage() === 'de' ? DE_TEXTS : EN_TEXTS;
  }

  get language() {
    return this.currentLanguage();
  }

  setLanguage(lang: Language): void {
    this.currentLanguage.set(lang);
  }

  toggleLanguage(): void {
    this.currentLanguage.set(this.currentLanguage() === 'de' ? 'en' : 'de');
  }
}