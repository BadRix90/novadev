import { Component, inject, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import * as LucideIcons from 'lucide-angular';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule, LucideIcons.LucideAngularModule],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss'
})
export class ThemeToggleComponent implements OnInit {
  readonly Sun = LucideIcons.Sun;
  readonly Moon = LucideIcons.Moon;

  themeService = inject(ThemeService);
  private el = inject(ElementRef);
  
  isDark = false;

  ngOnInit(): void {
    this.isDark = this.themeService.currentTheme() === 'dark';

    setTimeout(() => {
      this.el.nativeElement.querySelector('.theme-toggle')?.classList.add('theme-toggle--loaded');
    }, 100);
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.isDark = this.themeService.currentTheme() === 'dark';
  }
}