import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { TextService } from '../../data/text.service';
import * as LucideIcons from 'lucide-angular';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [LucideIcons.LucideAngularModule],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent implements OnInit {

  textService = inject(TextService);

  icons: Record<string, any> = {
    shield: LucideIcons.Shield,
    user: LucideIcons.User,
    code: LucideIcons.Code2,
    mappin: LucideIcons.MapPin
  };

  get texts() {
    return this.textService.texts.about;
  }

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.updateCanonicalUrl('https://novadev-edge.io/about');
    this.seo.updateMetaDescription('SaltCity Web aus Lüneburg. Seit 2024 spezialisiert auf Angular-Entwicklung für KMU. 12 Jahre IT-Erfahrung, klare Kommunikation, transparente Preise.');
    this.seo.updateTitle('Über uns - SaltCity Web');
  }

}