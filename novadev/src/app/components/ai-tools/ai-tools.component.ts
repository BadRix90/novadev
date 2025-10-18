import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TextService } from '../../data/text.service';
import * as LucideIcons from 'lucide-angular';

@Component({
  selector: 'app-ai-tools',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideIcons.LucideAngularModule],
  templateUrl: './ai-tools.component.html',
  styleUrl: './ai-tools.component.scss'
})
export class AiToolsComponent {
  textService = inject(TextService);

  icons: Record<string, any> = {
    zap: LucideIcons.Zap,
    fileText: LucideIcons.FileText,
    image: LucideIcons.Image,
    search: LucideIcons.Search
  };

  get texts() {
    return this.textService.texts.aiTools;
  }

  showEmailForm = false;

  toggleEmailForm() {
    this.showEmailForm = !this.showEmailForm;
  }
}