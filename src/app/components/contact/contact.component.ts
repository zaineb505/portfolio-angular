import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="contact-container" id="contact" [class.dark-mode]="themeService.mode() === 'dark'" [class.light-mode]="themeService.mode() === 'light'">
      <div class="contact-wrapper">
        <div class="contact-info">
          <h1>Let's Connect</h1>
          <p>I'm always interested in hearing about new opportunities, collaborations, or just having a chat. Feel free to reach out!</p>
          
          <div class="info-details">
            <div class="info-item">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div class="info-text">
                <h3>Location</h3>
                <p>Tunis, Tunisia</p>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div class="info-text">
                <h3>Email</h3>
                <a href="mailto:benahmedzaineb061&#64;gmail.com">benahmedzaineb061&#64;gmail.com</a>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
                </svg>
              </div>
              <div class="info-text">
                <h3>Social</h3>
                <div class="social-links">
                  <a [href]="githubUrl" target="_blank" class="social-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a [href]="linkedinUrl" target="_blank" class="social-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <h2>Send me a message</h2>
          <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
            <div class="form-group">
              <input 
                type="text" 
                name="name" 
                [(ngModel)]="formData.name"
                placeholder="Your Name"
                required
                class="form-control"
              />
            </div>
            
            <div class="form-group">
              <input 
                type="email" 
                name="email" 
                [(ngModel)]="formData.email"
                placeholder="Your Email"
                required
                email
                class="form-control"
              />
            </div>
            
            <div class="form-group">
              <input 
                type="text" 
                name="subject" 
                [(ngModel)]="formData.subject"
                placeholder="Subject"
                required
                class="form-control"
              />
            </div>
            
            <div class="form-group">
              <textarea 
                name="message" 
                [(ngModel)]="formData.message"
                placeholder="Your Message"
                rows="5"
                required
                class="form-control"
              ></textarea>
            </div>
            
            <button type="submit" class="submit-btn" [disabled]="!contactForm.valid || isSubmitting">
              @if (!isSubmitting) {
                Send Message
              } @else {
                Sending...
              }
            </button>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .contact-container {
      padding: 80px 10%;
      transition: all 0.3s ease;
      min-height: 100vh;
    }

    .contact-container.dark-mode {
      background: #020305;
    }

    .contact-container.light-mode {
      background: #f5f5f5;
    }

    .contact-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 50px;
      max-width: 1200px;
      margin: 0 auto;
    }

    /* Contact Info Section */
    .contact-info h1 {
      font-size: 2.5em;
      margin-bottom: 20px;
      position: relative;
      display: inline-block;
    }

    .contact-container.dark-mode .contact-info h1 {
      color: white;
    }

    .contact-container.light-mode .contact-info h1 {
      color: #333;
    }

    .contact-info h1::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 3px;
    }

    .contact-container.dark-mode .contact-info h1::after {
      background: #5000ca;
    }

    .contact-container.light-mode .contact-info h1::after {
      background: #0077b5;
    }

    .contact-info > p {
      margin: 30px 0;
      line-height: 1.6;
      font-size: 1rem;
    }

    .contact-container.dark-mode .contact-info > p {
      color: #ccc;
    }

    .contact-container.light-mode .contact-info > p {
      color: #666;
    }

    .info-details {
      display: flex;
      flex-direction: column;
      gap: 25px;
      margin-top: 40px;
    }

    .info-item {
      display: flex;
      align-items: flex-start;
      gap: 15px;
    }

    .info-icon {
      width: 45px;
      height: 45px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .contact-container.dark-mode .info-icon {
      background: rgba(80, 0, 202, 0.2);
    }

    .contact-container.light-mode .info-icon {
      background: rgba(0, 119, 181, 0.1);
    }

    .info-icon svg {
      width: 22px;
      height: 22px;
    }

    .contact-container.dark-mode .info-icon svg {
      fill: #64ffda;
    }

    .contact-container.light-mode .info-icon svg {
      fill: #0077b5;
    }

    .info-text h3 {
      font-size: 1.1em;
      margin-bottom: 5px;
    }

    .contact-container.dark-mode .info-text h3 {
      color: white;
    }

    .contact-container.light-mode .info-text h3 {
      color: #333;
    }

    .info-text p,
    .info-text a {
      font-size: 0.95em;
      text-decoration: none;
    }

    .contact-container.dark-mode .info-text p,
    .contact-container.dark-mode .info-text a {
      color: #ccc;
    }

    .contact-container.light-mode .info-text p,
    .contact-container.light-mode .info-text a {
      color: #666;
    }

    .info-text a:hover {
      text-decoration: underline;
    }

    .social-links {
      display: flex;
      gap: 15px;
      margin-top: 5px;
    }

    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 35px;
      height: 35px;
      border-radius: 8px;
      transition: all 0.3s ease;
    }

    .contact-container.dark-mode .social-link {
      background: rgba(80, 0, 202, 0.2);
    }

    .contact-container.light-mode .social-link {
      background: rgba(0, 119, 181, 0.1);
    }

    .social-link svg {
      width: 18px;
      height: 18px;
    }

    .contact-container.dark-mode .social-link svg {
      fill: #64ffda;
    }

    .contact-container.light-mode .social-link svg {
      fill: #0077b5;
    }

    .social-link:hover {
      transform: translateY(-3px);
    }

    .contact-container.dark-mode .social-link:hover {
      background: rgba(80, 0, 202, 0.4);
    }

    .contact-container.light-mode .social-link:hover {
      background: rgba(0, 119, 181, 0.2);
    }

    /* Contact Form Section */
    .contact-form {
      background: white;
      border-radius: 20px;
      padding: 35px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }

    .contact-container.dark-mode .contact-form {
      background: rgba(26, 26, 46, 0.95);
      border: 1px solid rgba(100, 255, 218, 0.2);
    }

    .contact-form h2 {
      font-size: 1.5em;
      margin-bottom: 25px;
    }

    .contact-container.dark-mode .contact-form h2 {
      color: white;
    }

    .contact-container.light-mode .contact-form h2 {
      color: #333;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-control {
      width: 100%;
      padding: 12px 9px;
      border-radius: 10px;
      font-size: 0.95rem;
      transition: all 0.3s ease;
      background: transparent;
    }

    .contact-container.dark-mode .form-control {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(100, 255, 218, 0.3);
      color: white;
    }

    .contact-container.light-mode .form-control {
      background: #f8f9fa;
      border: 1px solid #e0e0e0;
      color: #333;
    }

    .form-control:focus {
      outline: none;
    }

    .contact-container.dark-mode .form-control:focus {
      border-color: #64ffda;
      box-shadow: 0 0 0 3px rgba(100, 255, 218, 0.1);
    }

    .contact-container.light-mode .form-control:focus {
      border-color: #0077b5;
      box-shadow: 0 0 0 3px rgba(0, 119, 181, 0.1);
    }

    textarea.form-control {
      resize: vertical;
      font-family: inherit;
    }

    .submit-btn {
      width: 100%;
      padding: 12px;
      border: none;
      border-radius: 10px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .contact-container.dark-mode .submit-btn {
      background: linear-gradient(135deg, #5000ca, #8b00b5);
      color: white;
    }

    .contact-container.light-mode .submit-btn {
      background: linear-gradient(135deg, #0077b5, #00a6e6);
      color: white;
    }

    .submit-btn:hover:not(:disabled) {
      transform: translateY(-3px);
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    }

    .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    /* Animations */
    @keyframes fadeInLeft {
      from {
        opacity: 0;
        transform: translateX(-30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes fadeInRight {
      from {
        opacity: 0;
        transform: translateX(30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .contact-info {
      animation: fadeInLeft 0.6s ease-out forwards;
    }

    .contact-form {
      animation: fadeInRight 0.6s ease-out forwards;
    }

    /* Responsive Design */
    @media (max-width: 968px) {
      .contact-wrapper {
        gap: 40px;
      }
    }

    @media (max-width: 768px) {
      .contact-container {
        padding: 60px 5%;
      }

      .contact-wrapper {
        grid-template-columns: 1fr;
        gap: 50px;
      }

      .contact-form {
        padding: 25px;
      }
    }

    @media (max-width: 480px) {
      .contact-container {
        padding: 40px 5%;
      }

      .contact-info h1 {
        font-size: 2em;
      }

      .contact-form {
        padding: 20px;
      }

      .info-item {
        gap: 12px;
      }

      .info-icon {
        width: 40px;
        height: 40px;
      }

      .info-icon svg {
        width: 18px;
        height: 18px;
      }
    }
  `]
})
export class ContactComponent {
  themeService = inject(ThemeService);
  
  githubUrl = 'https://github.com/zaineb505';
  linkedinUrl = 'https://www.linkedin.com/in/ben-ahmed-zaineb/';
  
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  isSubmitting = false;

  onSubmit() {
    this.isSubmitting = true;
    
    // Simuler l'envoi du message
    setTimeout(() => {
      console.log('Form submitted:', this.formData);
      alert('Thank you for your message! I will get back to you soon.');
      
      // Réinitialiser le formulaire
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      
      this.isSubmitting = false;
    }, 1500);
  }
}