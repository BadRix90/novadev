import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TechItem {
  name: string;
  description: string;
  icon: string;
  category: string;
  proficiency?: 'expert' | 'advanced' | 'intermediate';
}

@Component({
  selector: 'app-tech-stack',
  imports: [CommonModule],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent {

  techStack: TechItem[] = [
    {
      name: 'Angular',
      description: 'Modern Frontend Framework für komplexe SPAs und PWAs',
      icon: 'assets/img/angular.webp',
      category: 'Frontend',
      proficiency: 'expert'
    },
    {
      name: 'Material Design',
      description: 'Google\'s Design System für konsistente UI/UX',
      icon: 'assets/img/material-design.webp',
      category: 'Design',
      proficiency: 'expert'
    },
    {
      name: 'TypeScript',
      description: 'Typsichere JavaScript-Entwicklung für große Projekte',
      icon: 'assets/img/js.webp',
      category: 'Language',
      proficiency: 'expert'
    },
    {
      name: 'HTML5',
      description: 'Semantisches Markup für moderne Web-Standards',
      icon: 'assets/img/html.webp',
      category: 'Frontend',
      proficiency: 'expert'
    },
    {
      name: 'CSS3/SCSS',
      description: 'Responsive Design und moderne Styling-Techniken',
      icon: 'assets/img/css.webp',
      category: 'Frontend',
      proficiency: 'expert'
    },
    {
      name: 'REST APIs',
      description: 'Backend-Integration und API-Entwicklung',
      icon: 'assets/img/rest-api.webp',
      category: 'Backend',
      proficiency: 'advanced'
    },
    {
      name: 'Firebase',
      description: 'Cloud-Backend für Echtzeit-Anwendungen',
      icon: 'assets/img/firebase.webp',
      category: 'Cloud',
      proficiency: 'advanced'
    },
    {
      name: 'Git/GitHub',
      description: 'Versionskontrolle und kollaborative Entwicklung',
      icon: 'assets/img/git.webp',
      category: 'DevOps',
      proficiency: 'expert'
    }
  ];

  hoveredTech: string | null = null;

  onTechHover(techName: string): void {
    this.hoveredTech = techName;
  }

  onTechLeave(): void {
    this.hoveredTech = null;
  }

  getProficiencyLevel(tech: TechItem): string {
    const levels = {
      expert: '★★★★★',
      advanced: '★★★★☆', 
      intermediate: '★★★☆☆'
    };
    return levels[tech.proficiency || 'advanced'];
  }

  trackTechClick(techName: string): void {
    console.log(`Tech stack item viewed: ${techName}`);
  }

  getTechSlug(techName: string): string {
    return techName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  }
}