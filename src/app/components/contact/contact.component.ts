import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CONTACT_INFO } from '../../data/portfolio.data';
import { ContactInfo } from '../../models/portfolio.models';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactInfo: ContactInfo = CONTACT_INFO;
  formState = signal<'idle' | 'submitting' | 'success' | 'error'>('idle');
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(4)]],
      message: ['', [Validators.required, Validators.minLength(20)]],
    });
  }

  get name() { return this.contactForm.get('name')!; }
  get email() { return this.contactForm.get('email')!; }
  get subject() { return this.contactForm.get('subject')!; }
  get message() { return this.contactForm.get('message')!; }

  isInvalid(controlName: string): boolean {
    const c = this.contactForm.get(controlName)!;
    return c.invalid && (c.dirty || c.touched);
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.formState.set('submitting');

    // Frontend-only demo: open default mail client
    const { name, email, subject, message } = this.contactForm.value;
    const mailto = `mailto:${this.contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailto;

    setTimeout(() => {
      this.formState.set('success');
      this.contactForm.reset();
    }, 800);
  }

  resetForm(): void {
    this.formState.set('idle');
    this.contactForm.reset();
  }
}
