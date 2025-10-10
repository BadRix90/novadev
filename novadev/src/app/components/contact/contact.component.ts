import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      company: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      project: ['', Validators.required],
      budget: ['']
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitMessage = '';

      // Hier würdest du normalerweise einen HTTP-Request machen
      // Für jetzt simulieren wir das:
      setTimeout(() => {
        console.log('Form Data:', this.contactForm.value);
        
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.submitMessage = 'Vielen Dank! Deine Anfrage wurde gesendet. Ich melde mich innerhalb von 24 Stunden.';
        
        // Formular zurücksetzen nach 3 Sekunden
        setTimeout(() => {
          this.contactForm.reset();
          this.submitMessage = '';
        }, 3000);
      }, 1500);
    }
  }
}