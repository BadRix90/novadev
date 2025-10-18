import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface PageSpeedResult {
  lighthouseResult: {
    categories: {
      performance: { score: number };
      seo: { score: number };
      accessibility: { score: number };
      'best-practices': { score: number };
    };
    audits: {
      'first-contentful-paint': { displayValue: string };
      'largest-contentful-paint': { displayValue: string };
      'total-blocking-time': { displayValue: string };
      'cumulative-layout-shift': { displayValue: string };
    };
  };
}

@Injectable({
  providedIn: 'root'
})
export class PagespeedService {
  private apiUrl = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

  constructor(private http: HttpClient) {}

  testWebsite(url: string): Observable<PageSpeedResult> {
    const params = {
      url: url,
      key: environment.googlePageSpeedApiKey,
      category: ['performance', 'seo', 'accessibility', 'best-practices']
    };

    return this.http.get<PageSpeedResult>(this.apiUrl, { params });
  }
}