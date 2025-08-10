import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  
  contactForm: FormGroup;
  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  private readonly mailEndpoint = 'https://your-domain.com/sendMail.php';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitMessage = '';

      const formData = {
        name: this.contactForm.value.name.trim(),
        email: this.contactForm.value.email.trim(),
        message: this.contactForm.value.message.trim()
      };

      this.http.post<{success: boolean}>(this.mailEndpoint, formData)
        .subscribe({
          next: (response) => {
            this.isSubmitting = false;
            
            if (response.success) {
              this.submitSuccess = true;
              this.submitMessage = 'Vielen Dank! Deine Nachricht wurde gesendet. Ich melde mich innerhalb von 24 Stunden bei dir.';
              this.contactForm.reset();
              this.trackFormSubmission('success');
            } else {
              this.handleSubmissionError();
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
    this.submitMessage = 'Entschuldigung, beim Senden ist ein Fehler aufgetreten. Bitte versuche es erneut.';
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

    if (field.errors['required']) return `${fieldName} ist erforderlich`;
    if (field.errors['email']) return 'Bitte gültige E-Mail eingeben';
    if (field.errors['minlength']) {
      const minLength = field.errors['minlength'].requiredLength;
      return `Mindestens ${minLength} Zeichen erforderlich`;
    }

    return 'Ungültige Eingabe';
  }
}