import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../services/seo.service';
import { TextService } from '../../data/text.service';
import { AiToolsComponent } from '../../components/ai-tools/ai-tools.component';

@Component({
  selector: 'app-tools-page',
  standalone: true,
  imports: [CommonModule, AiToolsComponent],
  templateUrl: './tools-page.component.html',
  styleUrl: './tools-page.component.scss'
})
export class ToolsPageComponent implements OnInit {
  textService = inject(TextService);

  get texts() {
    return this.textService.texts.aiTools;
  }

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.updateCanonicalUrl('https://novadev-edge.io/tools');
    this.seo.updateMetaDescription('Kostenlose AI-Tools für deine Website. Speed Tester, Content Generator, Image Optimizer und SEO Analyzer.');
    this.seo.updateTitle('AI-Tools - SaltCity Web');
  }
}