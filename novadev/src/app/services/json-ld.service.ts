import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class JsonLdService {

  constructor(@Inject(DOCUMENT) private doc: Document) { }

  insertSchema(schema: any, id: string = 'structured-data'): void {
    const existingScript = this.doc.getElementById(id);
    if (existingScript) {
      existingScript.remove();
    }

    const script = this.doc.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.text = JSON.stringify(schema);
    this.doc.head.appendChild(script);
  }

  removeSchema(id: string = 'structured-data'): void {
    const script = this.doc.getElementById(id);
    if (script) {
      script.remove();
    }
  }
}