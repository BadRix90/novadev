import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  category: 'portfolio' | 'government' | 'business';
  url: string;
  techStack: string[];
}

interface Filter {
  key: 'all' | 'portfolio' | 'government' | 'business';
  label: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  activeFilter: 'all' | 'portfolio' | 'government' | 'business' = 'all';

  filters: Filter[] = [
    { key: 'all', label: 'Alle' },
    { key: 'portfolio', label: 'Portfolio' },
    { key: 'government', label: 'Government' },
    { key: 'business', label: 'Business' }
  ];

  projects: Project[] = [
    {
      id: 1,
      title: 'Kay Dietrich Portfolio',
      description: 'Personal Portfolio Website showcasing Frontend Development expertise with Angular & Material Design.',
      category: 'portfolio',
      url: 'https://kaydietrich.com',
      techStack: ['Angular', 'Material Design', 'SCSS', 'TypeScript']
    },
    {
      id: 2,
      title: 'Gefechtsstand Reserve',
      description: 'Military service platform for reservists - from idea to application to service start. Partnership with Bundeswehr.',
      category: 'government',
      url: 'https://gefechtsstand-reserve.de',
      techStack: ['Angular', 'Material Design', 'SCSS', 'TypeScript']
    }
  ];

  get visibleProjects(): Project[] {
    if (this.activeFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.activeFilter);
  }

  setFilter(filter: 'all' | 'portfolio' | 'government' | 'business'): void {
    this.activeFilter = filter;
  }

  getProjectGradient(category: string): string {
    const gradients = {
      portfolio: 'linear-gradient(135deg, var(--brand-tech-blue), transparent 60%)',
      government: 'linear-gradient(135deg, var(--brand-eclipsia), transparent 60%)',
      business: 'linear-gradient(135deg, var(--brand-mocha), transparent 60%)'
    };
    return gradients[category as keyof typeof gradients] || gradients.portfolio;
  }

  trackByProject(index: number, project: Project): number {
    return project.id;
  }

  trackProjectClick(projectTitle: string): void {
    console.log(`Portfolio project clicked: ${projectTitle}`);
  }
}