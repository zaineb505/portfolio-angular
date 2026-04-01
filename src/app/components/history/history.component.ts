import { Component, inject } from '@angular/core';
import { ThemeService } from '../../theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="history" class="timeline-container" [class.dark-mode]="themeService.mode() === 'dark'" [class.light-mode]="themeService.mode() === 'light'">
      <div class="items-container">
        <h1>Career History</h1>
        
        <div class="vertical-timeline">
          <!-- Timeline Item 1 -->
          <div class="timeline-item" (mouseenter)="onCardHover($event)" (mouseleave)="onCardLeave($event)">
            <div class="timeline-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 7a2 2 0 012-2h3V4a2 2 0 012-2h2a2 2 0 012 2v1h3a2 2 0 012 2v3H4V7zm0 5h16v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5zm7-8h2v1h-2V4z"/>
              </svg>
            </div>
            <div class="timeline-content">
              <div class="timeline-date">Fev 2025 - Jul 2025</div>
              <h3 class="timeline-title">Full-Stack & DevOps Intern</h3>
              <h4 class="timeline-subtitle">AnyInIT, TN</h4>
              <p class="timeline-description">
                Full-stack Development, CI/CD Automation, Cloud Deployment, DevOps Lifecycle Management, Secure Integration, User Experience
              </p>
            </div>
          </div>

          <!-- Timeline Item 2 -->
          <div class="timeline-item" (mouseenter)="onCardHover($event)" (mouseleave)="onCardLeave($event)">
            <div class="timeline-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 7a2 2 0 012-2h3V4a2 2 0 012-2h2a2 2 0 012 2v1h3a2 2 0 012 2v3H4V7zm0 5h16v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5zm7-8h2v1h-2V4z"/>
              </svg>
            </div>
            <div class="timeline-content">
              <div class="timeline-date">Jul 2024 - Aug 2024</div>
              <h3 class="timeline-title">Frontend Developer Freelancer</h3>
              <h4 class="timeline-subtitle">ISS4U, Remote</h4>
              <p class="timeline-description">
                Web Development, User Experience, Team Collaboration              
              </p>
            </div>
          </div>

          <!-- Timeline Item 3 -->
          <div class="timeline-item" (mouseenter)="onCardHover($event)" (mouseleave)="onCardLeave($event)">
            <div class="timeline-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 7a2 2 0 012-2h3V4a2 2 0 012-2h2a2 2 0 012 2v1h3a2 2 0 012 2v3H4V7zm0 5h16v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5zm7-8h2v1h-2V4z"/>
              </svg>
            </div>
            <div class="timeline-content">
              <div class="timeline-date">Feb 2023 - Jun 2023</div>
              <h3 class="timeline-title">Software Developer Intern</h3>
              <h4 class="timeline-subtitle">ISS4U, Remote</h4>
              <p class="timeline-description">
            Software Development, Workflow Automation, System Design, Process Optimization, Enterprise Solutions              </p>
            </div>
          </div>

          <!-- Timeline Item 4 -->
          <div class="timeline-item" (mouseenter)="onCardHover($event)" (mouseleave)="onCardLeave($event)">
            <div class="timeline-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 7a2 2 0 012-2h3V4a2 2 0 012-2h2a2 2 0 012 2v1h3a2 2 0 012 2v3H4V7zm0 5h16v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5zm7-8h2v1h-2V4z"/>
              </svg>
            </div>
            <div class="timeline-content">
              <div class="timeline-date">2020 - 2020</div>
              <h3 class="timeline-title">Web Developer Intern</h3>
              <h4 class="timeline-subtitle">CNI, TN</h4>
              <p class="timeline-description">
                Web Application Development, Dynamic Forms, Database Management, Frontend & Backend Integration, User Interface Design
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .timeline-container {
      padding: 50px 0;
      transition: all 0.3s ease;
      background: #f5f5f5;
      overflow-x: hidden;
    }

    .timeline-container.dark-mode {
      background: #020305;
    }

    .timeline-container.light-mode {
      background: #f5f5f5;
    }

    .items-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    h1 {
      text-align: center;
      font-size: 2.5em;
      margin-bottom: 50px;
      position: relative;
      display: inline-block;
      width: 100%;
    }

    .timeline-container:not(.dark-mode) h1 {
      color: #333;
    }

    .timeline-container.dark-mode h1 {
      color: white;
    }

    h1::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
    }

    .timeline-container.dark-mode h1::after {
      background: #5000ca;
    }

    .timeline-container.light-mode h1::after {
      background: #007bff;
    }

    .vertical-timeline {
      position: relative;
      padding: 20px 0;
    }

    .timeline-container.dark-mode .vertical-timeline::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 3px;
      height: 100%;
      background: linear-gradient(to bottom, #5000ca, #8b00b5);
    }

    .timeline-container.light-mode .vertical-timeline::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 3px;
      height: 100%;
      background: linear-gradient(to bottom, #007bff, #00a6e6);
    }

    .timeline-item {
      position: relative;
      margin-bottom: 50px;
      display: flex;
      justify-content: flex-start;
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Animation au scroll */
    .timeline-item.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .timeline-item:nth-child(even) {
      justify-content: flex-end;
    }

    .timeline-container.dark-mode .timeline-icon {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 50px;
      background: #5000ca;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
      transition: all 0.3s ease;
    }

    .timeline-container.light-mode .timeline-icon {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 50px;
      background: #007bff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
      transition: all 0.3s ease;
    }

    /* Animation de l'icône au survol */
    .timeline-item:hover .timeline-icon {
      transform: translateX(-50%) scale(1.1);
      box-shadow: 0 0 20px rgba(80, 0, 202, 0.5);
    }

    .timeline-container.light-mode .timeline-item:hover .timeline-icon {
      box-shadow: 0 0 20px rgba(0, 119, 181, 0.5);
    }

    .timeline-icon svg {
      width: 30px;
      height: 30px;
      fill: white;
      transition: transform 0.3s ease;
    }

    .timeline-item:hover .timeline-icon svg {
      transform: rotate(360deg);
    }

    .timeline-content {
      width: 45%;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      cursor: pointer;
      background: white;
      color: #333;
      transform-origin: center;
    }

    /* Animation au survol de la carte */
    .timeline-content:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    }

    .timeline-date {
      display: inline-block;
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 0.85em;
      font-weight: 600;
      margin-bottom: 15px;
      transition: all 0.3s ease;
    }

    .timeline-container.dark-mode .timeline-date {
      background: rgba(80, 0, 202, 0.1);
      color: #5000ca;
    }

    .timeline-container.light-mode .timeline-date {
      background: rgba(0, 119, 181, 0.1);
      color: #007bff;
    }

    .timeline-content:hover .timeline-date {
      transform: scale(1.05);
    }

    .timeline-title {
      font-size: 1.3em;
      margin: 10px 0;
      font-weight: 600;
      transition: color 0.3s ease;
    }

    .timeline-container.dark-mode .timeline-content:hover .timeline-title {
      color: #5000ca;
    }

    .timeline-container.light-mode .timeline-content:hover .timeline-title {
      color: #007bff;
    }
    .timeline-subtitle {
      font-size: 1em;
      margin: 5px 0;
      opacity: 0.8;
      font-weight: 500;
      transition: opacity 0.3s ease;
    }

    .timeline-content:hover .timeline-subtitle {
      opacity: 1;
    }

    .timeline-description {
      margin-top: 15px;
      line-height: 1.6;
      font-size: 0.95em;
    }

    /* Flèches directionnelles avec animation */
    .timeline-item:nth-child(odd) .timeline-content::before {
      content: '';
      position: absolute;
      right: -10px;
      top: 20px;
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-left: 10px solid white;
      transition: transform 0.3s ease;
    }

    .timeline-item:nth-child(even) .timeline-content::before {
      content: '';
      position: absolute;
      left: -10px;
      top: 20px;
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-right: 10px solid white;
      transition: transform 0.3s ease;
    }

    .timeline-content:hover::before {
      transform: scale(1.1);
    }

    /* Animation de la ligne verticale */
    @keyframes lineGrow {
      from {
        transform: translateX(-50%) scaleY(0);
      }
      to {
        transform: translateX(-50%) scaleY(1);
      }
    }

    .timeline-container.dark-mode .vertical-timeline::before,
    .timeline-container.light-mode .vertical-timeline::before {
      animation: lineGrow 1.5s ease-out forwards;
      transform-origin: top;
    }

    /* Animation de pulsation pour les icônes */
    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(39, 38, 38, 0.4);
      }
      70% {
        box-shadow: 0 0 0 10px rgba(80, 0, 202, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(80, 0, 202, 0);
      }
    }

    .timeline-container.dark-mode .timeline-icon {
      animation: pulse 2s infinite;
    }

    .timeline-container.light-mode .timeline-icon {
      animation: pulse 2s infinite;
    }

    .timeline-container.light-mode .timeline-icon {
      animation: pulse 2s infinite;
    }

    @keyframes pulseLight {
      0% {
        box-shadow: 0 0 0 0 rgba(0, 119, 181, 0.4);
      }
      70% {
        box-shadow: 0 0 0 10px rgba(0, 119, 181, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(0, 119, 181, 0);
      }
    }

    /* Animation au scroll avec Intersection Observer */
    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .timeline-item.visible:nth-child(odd) {
      animation: slideInLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }

    .timeline-item.visible:nth-child(even) {
      animation: slideInRight 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .vertical-timeline::before {
        left: 30px;
      }

      .timeline-item {
        justify-content: flex-start !important;
        padding-left: 70px;
      }

      .timeline-icon {
        left: 30px !important;
      }

      .timeline-content {
        width: 100%;
      }

      .timeline-item:nth-child(odd) .timeline-content::before,
      .timeline-item:nth-child(even) .timeline-content::before {
        left: -10px;
        right: auto;
        border-left: none;
        border-right: 10px solid white;
      }

      .timeline-item.visible:nth-child(odd),
      .timeline-item.visible:nth-child(even) {
        animation: slideInLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }
    }

    @media (max-width: 480px) {
      .timeline-content {
        padding: 15px;
      }

      .timeline-title {
        font-size: 1.1em;
      }

      .timeline-subtitle {
        font-size: 0.9em;
      }

      .timeline-description {
        font-size: 0.85em;
      }

      .timeline-icon {
        width: 40px !important;
        height: 40px !important;
      }

      .timeline-icon svg {
        width: 24px;
        height: 24px;
      }

      .timeline-item {
        padding-left: 60px;
      }
    }
  `]
})
export class HistoryComponent {
  themeService = inject(ThemeService);

  ngOnInit() {
    this.setupIntersectionObserver();
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));
  }

  onCardHover(event: any) {
    const card = event.currentTarget.querySelector('.timeline-content');
    if (card) {
      // Effet supplémentaire au survol
    }
  }

  onCardLeave(event: any) {
    const card = event.currentTarget.querySelector('.timeline-content');
    if (card) {
      // Retour à l'état normal
    }
  }
}