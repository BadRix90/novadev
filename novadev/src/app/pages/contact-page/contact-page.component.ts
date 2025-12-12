import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SeoService } from '../../services/seo.service';
import { TextService } from '../../data/text.service';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent implements OnInit {

  textService = inject(TextService);

  get texts() {
    return this.textService.texts.contact;
  }

  get subjectOptions() {
    return this.texts.form.subject.options;
  }

  contactForm: FormGroup;
  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  private readonly mailEndpoint = 'https://novadev-edge.io/sendMail.php';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private seo: SeoService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
      company: [''],
      budget: [''],
      website: ['']
    });
  }

  ngOnInit(): void {
    this.seo.updateCanonicalUrl('https://novadev-edge.io/kontakt');
    this.seo.updateMetaDescription('Kontakt zu NovaDev Edge. Kostenlose Erstberatung für Ihr Compliance-Projekt. Antwortzeit: 24h werktags. Remote deutschlandweit.');
    this.seo.updateTitle('Kontakt - NovaDev Edge');
  }

  onSubmit(): void {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitMessage = '';

      const formData = {
        name: this.contactForm.value.name.trim(),
        email: this.contactForm.value.email.trim(),
        subject: this.contactForm.value.subject,
        message: this.contactForm.value.message.trim(),
        company: this.contactForm.value.company?.trim() || '',
        budget: this.contactForm.value.budget || '',
        website: this.contactForm.value.website || '' // ← Honeypot mitschicken
      };

      this.http.post<{ success: boolean; message?: string; error?: string }>(this.mailEndpoint, formData)
        .subscribe({
          next: (response) => {
            this.isSubmitting = false;

            if (response.success) {
              this.submitSuccess = true;
              this.submitMessage = 'Vielen Dank! Deine Nachricht wurde gesendet. Ich melde mich innerhalb von 24 Stunden bei dir.';
              this.contactForm.reset();
              this.trackFormSubmission('success');
            } else {
              this.submitSuccess = false;
              this.submitMessage = response.error || 'Fehler beim Senden der Nachricht.';
              this.trackFormSubmission('error');
            }
          },
          error: (error) => {
            console.error('Contact form error:', error);
            this.handleSubmissionError();
          }
        });
    } else {
      this.markFormGroupTouched();
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  private handleSubmissionError(): void {
    this.isSubmitting = false;
    this.submitSuccess = false;
    this.submitMessage = 'Entschuldigung, beim Senden ist ein Fehler aufgetreten. Bitte versuche es erneut oder kontaktiere mich direkt.';
    this.trackFormSubmission('error');
  }

  private markFormGroupTouched(): void {
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      control?.markAsTouched();
    });
  }

  private trackFormSubmission(status: 'success' | 'error'): void {
    console.log(`Contact form submission: ${status}`);
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (!field || !field.errors || !field.touched) return '';

    const errors = this.texts.errors;

    if (field.errors['required']) {
      switch (fieldName) {
        case 'name':
          return errors.name.required;
        case 'email':
          return errors.email.required;
        case 'subject':
          return errors.subject.required;
        case 'message':
          return errors.message.required;
        default:
          return errors.generic;
      }
    }

    if (field.errors['email']) {
      return errors.email.invalid;
    }

    if (field.errors['minlength']) {
      switch (fieldName) {
        case 'name':
          return errors.name.minlength;
        case 'message':
          return errors.message.minlength;
        default:
          return errors.generic;
      }
    }

    return errors.generic;
  }
}
