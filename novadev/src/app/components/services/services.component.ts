import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  title: string;
  description: string;
  link?: string;
}

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  
  services: Service[] = [
    {
      title: 'Angular Frontends',
      description: 'SPAs, SSR & PWAs mit Angular 20 & Material.'
    },
    {
      title: 'Django APIs',
      description: 'Django REST Framework, Auth, Permissions.'
    },
    {
      title: 'Performance & SEO',
      description: 'Core Web Vitals, Code‑Splitting, Caching.'
    }
  ];

  String = String;
}