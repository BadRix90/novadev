import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent implements OnInit {

  contactForm: FormGroup;
  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  subjectOptions = [
    { value: 'projektanfrage', label: 'Projektanfrage' },
    { value: 'bestehendes-projekt', label: 'Frage zu bestehendem Projekt' },
    { value: 'allgemeine-frage', label: 'Allgemeine Frage zur Arbeit' },
    { value: 'technische-frage', label: 'Technische Frage' },
    { value: 'sonstiges', label: 'Sonstiges' }
  ];


  private readonly mailEndpoint = 'https://saltcity-web.com/sendMail.php';

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
    this.seo.updateCanonicalUrl('https://saltcity-web.com/kontakt');
    this.seo.updateMetaDescription('Kontakt zu SaltCity Web. Kostenlose Erstberatung für dein Angular-Projekt. Antwortzeit: 24h werktags. Aus Lüneburg für ganz Deutschland.');
    this.seo.updateTitle('Kontakt - SaltCity Web');
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

    if (field.errors['required']) {
      switch (fieldName) {
        case 'name':
          return 'Bitte gib deinen Namen an';
        case 'email':
          return 'Bitte gib deine E-Mail-Adresse an';
        case 'subject':
          return 'Bitte wähle ein Thema aus';
        case 'message':
          return 'Bitte beschreibe dein Projekt';
        default:
          return 'Dieses Feld ist erforderlich';
      }
    }

    if (field.errors['email']) {
      return 'Bitte gib eine gültige E-Mail-Adresse ein';
    }

    if (field.errors['minlength']) {
      const minLength = field.errors['minlength'].requiredLength;
      switch (fieldName) {
        case 'name':
          return 'Der Name muss mindestens 2 Zeichen haben';
        case 'message':
          return 'Die Nachricht muss mindestens 10 Zeichen haben';
        default:
          return `Mindestens ${minLength} Zeichen erforderlich`;
      }
    }

    return 'Ungültige Eingabe';
  }
}