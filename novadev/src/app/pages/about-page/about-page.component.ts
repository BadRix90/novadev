import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.updateCanonicalUrl('https://saltcity-web.com/about');
    this.seo.updateMetaDescription('Erfahre mehr über SaltCity Web und unser Leistungsspektrum in der Angular Webentwicklung.');
    this.seo.updateTitle('Über uns - SaltCity Web');
  }

}