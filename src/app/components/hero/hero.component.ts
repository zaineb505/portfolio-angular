import { Component, inject } from '@angular/core';
import { ThemeService } from '../../theme.service'
@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
  <div class="container">
    <div class="about-section" [class.dark-mode]="themeService.mode() === 'dark'" [class.light-mode]="themeService.mode() === 'light'">
      
      <div class="image-wrapper">
        <img src="assets/images/me.jpg" alt="Avatar" class="avatar"/>
      </div>
      
      <div class="content">
        <div class="social-icons">
          <a [href]="githubUrl" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a [href]="linkedinUrl" target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>

        <h1>Zaineb</h1>
        <p>Full Stack Developer (Angular & Spring Boot)</p>

        <div class="mobile-social-icons">
          <a [href]="githubUrl" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a [href]="linkedinUrl" target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

    </div>
  </div>
  `,
  styles: [`
    /* Styles communs */
    .about-section {
      display: flex;
      gap: 30px;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      padding: 0px 15%;
      min-height: 700px;
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
      background-position: center;
      transition: all 0.3s ease;
      position: relative;
      color: rgba(0, 0, 0, 0.87);
    }

    /* Overlay pour rendre le fond plus sombre */
    .about-section.dark-mode::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      /* background: rgba(0, 0, 0, 0.7); */
      z-index: 1;
    }

    /* Mode Sombre (Dark Mode) - Plus sombre */
    .about-section.dark-mode {
      background-image: url("src/assets/images/HIW-3.png");
      background-color: #020305;
      position: relative;
    }

    .about-section.dark-mode .content,
    .about-section.dark-mode .image-wrapper {
      position: relative;
      z-index: 2;
    }

    .about-section.dark-mode .content h1,
    .about-section.dark-mode .content p {
      color: #ffffff;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .about-section.dark-mode .social-icons a,
    .about-section.dark-mode .mobile-social-icons a {
      color: #ffffff;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }

    .about-section.dark-mode .social-icons a:hover,
    .about-section.dark-mode .mobile-social-icons a:hover {
      color: #8b00b5;
      transform: translateY(-2px);
    }

    /* Mode Clair (Light Mode) */
    .about-section.light-mode {
      background-image: url("src/assets/images/bg-light.png");
      background-color: rgba(255, 255, 255, 0.95);
    }

    .about-section.light-mode .content h1,
    .about-section.light-mode .content p {
      color: #1a1a1a;
    }

    .about-section.light-mode .social-icons a,
    .about-section.light-mode .mobile-social-icons a {
      color: #1a1a1a;
    }

    .about-section.light-mode .social-icons a:hover,
    .about-section.light-mode .mobile-social-icons a:hover {
      color: #007bff;
      transform: translateY(-2px);
    }

    /* Styles du contenu */
    .about-section .content {
      text-align: left;
      z-index: 2;
    }

    .about-section .content .social-icons {
      display: flex;
      flex-direction: row;
      gap: 15px;
      margin-bottom: 20px;
    }

    .about-section .content .social-icons a {
      font-size: 1.8em;
      transition: all 0.3s ease;
      display: inline-block;
    }

    .about-section .content .social-icons a:hover {
      transform: translateY(-3px);
    }

    .about-section .content .social-icons svg {
      font-size: 1.8em;
    }

    .about-section .content .mobile-social-icons {
      display: none;
    }

    .about-section .content p {
      font-size: 1.5em;
      margin-block-start: 0px;
      margin-block-end: 0px;
      font-weight: 500;
    }

    .about-section .content h1 {
      font-size: 5em;
      margin-block-start: 0px;
      margin-block-end: 10px;
      font-weight: 700;
    }

    /* Image wrapper */
    .about-section .image-wrapper {
      z-index: 2;
    }

    .about-section .image-wrapper img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      object-fit: cover;
      transition: all 0.3s ease;
    }

    .about-section.dark-mode .image-wrapper img {
      border: 3px solid #7d19ac;
      /* box-shadow: 0 0 30px rgba(100, 255, 218, 0.3); */
    }

    .about-section.light-mode .image-wrapper img {
      border: 3px solid #007bff;
      box-shadow: 0 0 20px rgba(139, 0, 181, 0.2);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .about-section {
        padding-top: 150px;
        display: block;
        padding-left: 0px;
        padding-right: 0px;
        text-align: center;
      }

      .about-section .content {
        width: 90%;
        padding-left: 5%;
        padding-right: 5%;
        padding-bottom: 5%;
        text-align: center;
      }

      .about-section .content h1 {
        font-size: 3.5em !important;
        text-align: center;
      }

      .about-section .content p {
        text-align: center;
        font-size: 1.2em;
      }

      .container {
        display: initial;
      }

      .about-section .content .social-icons {
        display: none !important;
      }

      .about-section .content .mobile-social-icons {
        padding-top: 15px;
        display: flex !important;
        flex-direction: row;
        justify-content: center;
        gap: 25px;
      }

      .about-section .content .mobile-social-icons a {
        font-size: 1.8em;
        transition: all 0.3s ease;
      }

      .about-section .content .mobile-social-icons a:hover {
        transform: translateY(-3px);
      }

      .about-section .image-wrapper {
        text-align: center;
        margin-bottom: 25px;
      }

      .about-section .image-wrapper img {
        width: 130px;
        height: 130px;
      }
    }

    @media (max-width: 567px) {
      .about-section {
        padding: 120px 5% 50px 5%;
        min-height: auto;
      }

      .about-section .content h1 {
        font-size: 2.5em !important;
      }

      .about-section .content p {
        font-size: 1em;
      }

      .about-section .image-wrapper img {
        width: 100px;
        height: 100px;
      }
    }

    /* Animations */
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .about-section .content,
    .about-section .image-wrapper {
      animation: fadeIn 0.8s ease-out;
    }

    /* Ajout d'un effet de brillance pour le mode sombre */
    @keyframes glow {
      0% {
        box-shadow: 0 0 5px rgba(100, 255, 218, 0.3);
      }
      50% {
        box-shadow: 0 0 20px rgba(100, 255, 218, 0.5);
      }
      100% {
        box-shadow: 0 0 5px rgba(100, 255, 218, 0.3);
      }
    }

    .about-section.dark-mode .image-wrapper img {
      animation: glow 3s ease-in-out infinite;
    }
  `]
})
export class HeroComponent {
  themeService = inject(ThemeService);
  
  githubUrl = 'https://github.com/zaineb505';
  linkedinUrl = 'https://www.linkedin.com/in/ben-ahmed-zaineb/';
  
  viewProjects() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }
  
  downloadCV() {
    console.log('Téléchargement CV');
    // Implémentez le téléchargement du CV
  }
}