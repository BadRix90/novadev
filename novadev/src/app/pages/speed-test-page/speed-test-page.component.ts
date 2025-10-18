import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../../services/seo.service';
import { TextService } from '../../data/text.service';
import { PagespeedService } from '../../services/pagespeed.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-speed-test-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './speed-test-page.component.html',
  styleUrl: './speed-test-page.component.scss'
})
export class SpeedTestPageComponent implements OnInit {
  textService = inject(TextService);
  pagespeedService = inject(PagespeedService);
  private route = inject(ActivatedRoute);

  get texts() {
    return this.textService.texts.speedTest;
  }

  websiteUrl = '';
  isLoading = false;
  showResults = false;
  errorMessage = '';
  showToast = false;

  // Results
  scores = {
    performance: 0,
    seo: 0,
    accessibility: 0,
    bestPractices: 0
  };

  metrics = {
    fcp: '',
    lcp: '',
    tbt: '',
    cls: ''
  };

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.updateCanonicalUrl('https://novadev-edge.io/tools/speed-test');
    this.seo.updateMetaDescription('Teste die Performance deiner Website kostenlos mit Google Lighthouse');
    this.seo.updateTitle('Speed Tester - NovaDev');

    this.route.queryParams.subscribe(params => {
      if (params['url']) {
        this.websiteUrl = params['url'];
        this.onSubmit();
      }
    });
  }

  isValidUrl(): boolean {
    const urlPattern = /^https?:\/\/.+\..+/;
    return urlPattern.test(this.websiteUrl);
  }

  onSubmit() {
    if (this.isValidUrl()) {
      this.isLoading = true;
      this.errorMessage = '';

      this.pagespeedService.testWebsite(this.websiteUrl).subscribe({
        next: (result) => {
          const categories = result.lighthouseResult.categories;

          this.scores = {
            performance: Math.round(categories.performance.score * 100),
            seo: Math.round(categories.seo.score * 100),
            accessibility: Math.round(categories.accessibility.score * 100),
            bestPractices: Math.round(categories['best-practices'].score * 100)
          };

          const audits = result.lighthouseResult.audits;
          this.metrics = {
            fcp: audits['first-contentful-paint']?.displayValue || 'N/A',
            lcp: audits['largest-contentful-paint']?.displayValue || 'N/A',
            tbt: audits['total-blocking-time']?.displayValue || 'N/A',
            cls: audits['cumulative-layout-shift']?.displayValue || 'N/A'
          };

          this.isLoading = false;
          this.showResults = true;
        },
        error: (error) => {
          console.error('API Error:', error);
          this.errorMessage = 'Fehler beim Laden der Daten. Bitte versuche es erneut.';
          this.isLoading = false;
        }
      });
    }
  }

  startNewTest() {
    this.showResults = false;
    this.websiteUrl = '';
    this.errorMessage = '';

  }

  shareResults() {
    const shareUrl = `${window.location.origin}/tools/speed-test?url=${encodeURIComponent(this.websiteUrl)}`;

    navigator.clipboard.writeText(shareUrl).then(() => {
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
    }).catch(err => {
    });
  }
}