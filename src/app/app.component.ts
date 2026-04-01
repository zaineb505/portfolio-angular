import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { HistoryComponent } from './components/history/history.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExpertiseComponent } from './components/expertise/expertise.component';
import { ContactComponent } from './components/contact/contact.component';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent, 
    ExpertiseComponent, 
    HistoryComponent, 
    HeroComponent, 
    ProjectsComponent, 
    ContactComponent,
    RouterOutlet
  ],
  template: `
    <app-header />
    <main>
      <app-hero />
      <app-expertise />
      <app-history />
      <app-projects />
      <app-contact />
    </main>
    
    <footer class="footer" [class.dark-mode]="themeService.mode() === 'dark'" [class.light-mode]="themeService.mode() === 'light'">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Zaineb Ben Ahmed</h3>
          <p>Full Stack Developer specializing in Angular & Spring Boot, passionate about creating elegant and efficient web applications.</p>
        </div>

        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a (click)="scrollTo('expertise')">Expertise</a></li>
            <li><a (click)="scrollTo('history')">Career History</a></li>
            <li><a (click)="scrollTo('projects')">Projects</a></li>
            <li><a (click)="scrollTo('contact')">Contact</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Contact Info</h4>
          <div class="contact-info">
            <div class="info-line">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>Tunis, Tunisia</span>
            </div>
            <div class="info-line">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <a href="mailto:benahmedzaineb061@gmail.com">benahmedzaineb061&#64;gmail.com</a>
            </div>
          </div>
        </div>


      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Zaineb Ben Ahmed. All rights reserved.</p>
        <p>Built by Zaineb with Angular & 💙</p>
      </div>
    </footer>
  `,
  styles: [`
    main {
      overflow-x: hidden;
    }

    .footer {
      padding: 60px 10% 30px;
      transition: all 0.3s ease;
    }

    .footer.dark-mode {
      background: #010101;
      border-top: 1px solid rgba(100, 255, 218, 0.1);
    }

    .footer.light-mode {
      background: #ffffff;
      border-top: 1px solid #e0e0e0;
    }

    .footer-content {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 40px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .footer-section h3 {
      font-size: 1.3em;
      margin-bottom: 20px;
    }

    .footer-section h4 {
      font-size: 1.1em;
      margin-bottom: 20px;
      position: relative;
    }

    .footer-section h4::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 30px;
      height: 2px;
    }

    .footer.dark-mode .footer-section h3,
    .footer.dark-mode .footer-section h4 {
      color: white;
    }

    .footer.light-mode .footer-section h3,
    .footer.light-mode .footer-section h4 {
      color: #333;
    }

    .footer.dark-mode .footer-section h4::after {
      background: #5000ca;
    }

    .footer.light-mode .footer-section h4::after {
      background: #0077b5;
    }

    .footer-section p {
      line-height: 1.6;
      font-size: 0.9em;
      margin-top: 10px;
    }

    .footer.dark-mode .footer-section p {
      color: #ccc;
    }

    .footer.light-mode .footer-section p {
      color: #666;
    }

    .footer-section ul {
      list-style: none;
      padding: 0;
    }

    .footer-section ul li {
      margin-bottom: 12px;
    }

    .footer-section ul li a {
      cursor: pointer;
      text-decoration: none;
      font-size: 0.9em;
      transition: all 0.3s ease;
    }

    .footer.dark-mode .footer-section ul li a {
      color: #ccc;
    }

    .footer.light-mode .footer-section ul li a {
      color: #666;
    }

    .footer-section ul li a:hover {
      padding-left: 5px;
    }

    .footer.dark-mode .footer-section ul li a:hover {
      color: #64ffda;
    }

    .footer.light-mode .footer-section ul li a:hover {
      color: #0077b5;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .info-line {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 0.9em;
    }

    .info-line svg {
      width: 18px;
      height: 18px;
      flex-shrink: 0;
    }

    .footer.dark-mode .info-line svg {
      fill: #64ffda;
    }

    .footer.light-mode .info-line svg {
      fill: #0077b5;
    }

    .info-line span,
    .info-line a {
      text-decoration: none;
    }

    .footer.dark-mode .info-line span,
    .footer.dark-mode .info-line a {
      color: #ccc;
    }

    .footer.light-mode .info-line span,
    .footer.light-mode .info-line a {
      color: #666;
    }

    .info-line a:hover {
      text-decoration: underline;
    }

    .social-icons {
      display: flex;
      gap: 15px;
    }

    .social-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 10px;
      transition: all 0.3s ease;
    }

    .footer.dark-mode .social-icon {
      background: rgba(80, 0, 202, 0.2);
    }

    .footer.light-mode .social-icon {
      background: rgba(0, 119, 181, 0.1);
    }

    .social-icon svg {
      width: 20px;
      height: 20px;
    }

    .footer.dark-mode .social-icon svg {
      fill: #64ffda;
    }

    .footer.light-mode .social-icon svg {
      fill: #0077b5;
    }

    .social-icon:hover {
      transform: translateY(-3px);
    }

    .footer.dark-mode .social-icon:hover {
      background: rgba(80, 0, 202, 0.4);
    }

    .footer.light-mode .social-icon:hover {
      background: rgba(0, 119, 181, 0.2);
    }

    .footer-bottom {
      text-align: center;
      margin-top: 50px;
      padding-top: 30px;
      border-top: 1px solid;
    }

    .footer.dark-mode .footer-bottom {
      border-top-color: rgba(100, 255, 218, 0.1);
    }

    .footer.light-mode .footer-bottom {
      border-top-color: #e0e0e0;
    }

    .footer-bottom p {
      font-size: 0.85em;
      margin: 5px 0;
    }

    .footer.dark-mode .footer-bottom p {
      color: #888;
    }

    .footer.light-mode .footer-bottom p {
      color: #999;
    }

    /* Animations */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .footer-section {
      animation: fadeInUp 0.6s ease-out forwards;
      opacity: 0;
    }

    .footer-section:nth-child(1) { animation-delay: 0.1s; }
    .footer-section:nth-child(2) { animation-delay: 0.2s; }
    .footer-section:nth-child(3) { animation-delay: 0.3s; }
    .footer-section:nth-child(4) { animation-delay: 0.4s; }

    /* Responsive Design */
    @media (max-width: 768px) {
      .footer {
        padding: 50px 5% 30px;
      }

      .footer-content {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
      }

      .footer-section h4::after {
        left: 50%;
        transform: translateX(-50%);
      }

      .info-line {
        justify-content: center;
      }

      .social-icons {
        justify-content: center;
      }

      .footer-section ul li a:hover {
        padding-left: 0;
      }
    }

    @media (max-width: 480px) {
      .footer {
        padding: 40px 5% 20px;
      }

      .footer-section h3 {
        font-size: 1.2em;
      }

      .footer-section h4 {
        font-size: 1em;
      }

      .social-icon {
        width: 35px;
        height: 35px;
      }

      .social-icon svg {
        width: 18px;
        height: 18px;
      }
    }
  `]
})
export class AppComponent {
  themeService = inject(ThemeService);
  
  currentYear = new Date().getFullYear();
  githubUrl = 'https://github.com/zaineb505';
  linkedinUrl = 'https://www.linkedin.com/in/ben-ahmed-zaineb/';
  
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}