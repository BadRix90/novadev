import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    @Inject(DOCUMENT) private doc: Document,
    private meta: Meta,
    private title: Title
  ) { }

  updateCanonicalUrl(url: string): void {
    const head = this.doc.head;
    let element: HTMLLinkElement | null = this.doc.querySelector(`link[rel='canonical']`);

    if (!element) {
      element = this.doc.createElement('link') as HTMLLinkElement;
      element.setAttribute('rel', 'canonical');
      head.appendChild(element);
    }

    element.setAttribute('href', url);
  }

  updateMetaDescription(description: string): void {
    this.meta.updateTag({ name: 'description', content: description });
  }

  updateTitle(pageTitle: string): void {
    this.title.setTitle(pageTitle);
  }
}