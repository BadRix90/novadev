import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  techStack: string[];
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
      id: 1,
      icon: '',
      title: 'Angular Webentwicklung',
      description: 'Moderne Single Page Applications mit Angular 20, TypeScript und Progressive Web App Features.',
      techStack: ['Angular 20', 'TypeScript', 'PWA', 'RxJS']
    },
    {
      id: 2,
      icon: '',
      title: 'Responsive Umsetzung',
      description: 'Mobile-First Design mit Container Queries und modernen CSS-Techniken fuer alle Endgeraete.',
      techStack: ['Mobile-First', 'Container Queries', 'SCSS', 'Flexbox/Grid']
    },
    {
      id: 3,
      icon: '',
      title: 'Performance-Optimierung',
      description: 'Core Web Vitals Optimierung, Server-Side Rendering und schnelle Ladezeiten fuer bessere Rankings.',
      techStack: ['Core Web Vitals', 'SSR', 'Lazy Loading', 'Caching']
    },
    {
      id: 4,
      icon: '',
      title: 'Vibe Code Cleanup',
      description: 'Legacy Code modernisieren und wartbar machen. Alte Projekte auf aktuelle Standards bringen und technische Schulden abbauen.',
      techStack: ['Refactoring', 'Code Quality', 'Legacy Migration', 'Clean Code']
    }
  ];

}