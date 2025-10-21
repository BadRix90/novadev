import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TextService } from '../../data/text.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-templates-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './templates-page.component.html',
  styleUrl: './templates-page.component.scss'
})
export class TemplatesPageComponent implements OnInit {
  textService = inject(TextService);
  private seo = inject(SeoService);

  get texts() {
    return this.textService.texts.templates;
  }

  ngOnInit(): void {
    this.seo.updateCanonicalUrl('https://novadev-edge.io/templates');
    this.seo.updateTitle('Dashboard Templates - NovaDev');
  }
}