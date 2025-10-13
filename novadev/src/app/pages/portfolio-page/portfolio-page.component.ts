import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service'; 

interface Project {
  id: number;
  title: string;
  description: string;
  url: string;
  linkText: string;
  techStack: string[];
}

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.scss'
})

export class PortfolioPageComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.updateCanonicalUrl('https://saltcity-web.com/projekte');
    this.seo.updateMetaDescription('Ausgewählte Projekte von SaltCity Web: Kay Dietrich Portfolio, Gefechtsstand Reserve. Angular SPAs, PWAs und moderne Webanwendungen.');
    this.seo.updateTitle('Projekte - SaltCity Web');
  }

  projects: Project[] = [
    {
      id: 1,
      title: 'Kay Dietrich Portfolio',
      description: 'Personal Portfolio Website showcasing Frontend Development expertise with Angular & Material Design.',
      url: 'https://kaydietrich.com',
      linkText: 'Live Demo ansehen',
      techStack: ['Angular', 'Material Design', 'SCSS', 'TypeScript']
    },
    {
      id: 2,
      title: 'Gefechtsstand Reserve',
      description: 'Military service platform for reservists - from idea to application to service start. Partnership with Bundeswehr.',
      url: 'https://gefechtsstand-reserve.de',
      linkText: 'Projekt ansehen',
      techStack: ['Angular', 'Material Design', 'SCSS', 'TypeScript']
    }
  ];

  trackProjectClick(projectTitle: string): void {
    console.log(`Portfolio project clicked: ${projectTitle}`);
  }

}