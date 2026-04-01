import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container" id="expertise" [class.dark-mode]="themeService.mode() === 'dark'" [class.light-mode]="themeService.mode() === 'light'">
      <div class="skills-container">
        <h1>Expertise</h1>
        <div class="skills-grid">
          <!-- Skill 1: Full Stack Development -->
          <div class="skill-card">
            <div class="skill-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3>Full Stack Development</h3>
            <p>
              I have built a diverse array of web applications from scratch using modern technologies.
              I have a strong proficiency in the SDLC process and 
              frontend + backend development, ensuring smooth integration and user-friendly interfaces.
            </p>
            <div class="flex-chips">
              <span class="chip-title">Tech stack:</span>
              <div class="chips-wrapper">
                @for (tech of fullStackTechs; track tech) {
                  <span class="chip">{{ tech }}</span>
                }
              </div>
            </div>
          </div>

          <!-- Skill 2: DevOps & Automation -->
          <div class="skill-card">
            <div class="skill-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 7a2 2 0 012-2h3V4a2 2 0 012-2h2a2 2 0 012 2v1h3a2 2 0 012 2v3H4V7zm0 5h16v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5zm7-8h2v1h-2V4z"/>
              </svg>
            </div>
            <h3>DevOps & Automation</h3>
            <p>
              Once the application is built, I help set up DevOps testing, CI/CD pipelines, and 
              deployment automation to support the successful Go-Live.
            </p>
            <div class="flex-chips">
              <span class="chip-title">Tech stack:</span>
              <div class="chips-wrapper">
                @for (tech of devopsTechs; track tech) {
                  <span class="chip">{{ tech }}</span>
                }
              </div>
            </div>
          </div>

          <!-- Skill 3: Workflow & Process Automation -->
          <div class="skill-card">
            <div class="skill-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3>Workflow & Process Automation</h3>
            <p>
              I design and implement automated workflows to optimize business processes, reduce manual tasks, and ensure smooth operations from scheduling to execution. 
              I help model, validate, and orchestrate processes using workflow automation tools.
            </p>
            <div class="flex-chips">
              <span class="chip-title">Tech stack:</span>
              <div class="chips-wrapper">
                @for (tech of workflowTechs; track tech) {
                  <span class="chip">{{ tech }}</span>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 80px 0;
      min-height: 100vh;
      transition: all 0.3s ease;
    }

    .container.dark-mode {
      background: #020305;
    }

    .container.light-mode {
      background: #f5f5f5;
    }

    .skills-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 5%;
      display: flex;
      flex-direction: column;
      text-align: left;
    }

    h1 {
      text-align: center;
      font-size: 2.5em;
      margin-bottom: 50px;
      position: relative;
      display: inline-block;
      width: 100%;
    }

    .container.dark-mode h1 {
      color: white;
    }

    .container.light-mode h1 {
      color: #333;
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

    .container.dark-mode h1::after {
      background: #5000ca;
    }

    .container.light-mode h1::after {
      background: #007bff;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 50px;
      margin-top: 20px;
    }

    .skill-card {
      background: white;
      border-radius: 15px;
      padding: 30px;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      position: relative;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }

    .container.dark-mode .skill-card {
      background: rgba(26, 26, 46, 0.95);
      border: 1px solid rgba(100, 255, 218, 0.2);
    }

    .skill-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 3px;
      transform: scaleX(0);
      transition: transform 0.4s ease;
    }

    .container.dark-mode .skill-card::before {
      background: linear-gradient(90deg, #5000ca, #8b00b5);
    }

    .container.light-mode .skill-card::before {
      background: linear-gradient(90deg, #007bff, #00a6e6);
    }

    .skill-card:hover::before {
      transform: scaleX(1);
    }

    .skill-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    }

    .skill-icon {
      width: 60px;
      height: 60px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      transition: all 0.3s ease;
    }

    .container.dark-mode .skill-icon {
      background: rgba(80, 0, 202, 0.2);
    }

    .container.light-mode .skill-icon {
      background: rgba(0, 119, 181, 0.1);
    }

    .skill-icon svg {
      width: 35px;
      height: 35px;
    }

    .container.dark-mode .skill-icon svg {
      fill: #64ffda;
    }

    .container.light-mode .skill-icon svg {
      fill: #007bff;
    }

    .skill-card h3 {
      font-size: 1.5em;
      margin-bottom: 15px;
      font-weight: 600;
    }

    .container.dark-mode .skill-card h3 {
      color: white;
    }

    .container.light-mode .skill-card h3 {
      color: #333;
    }

    .skill-card p {
      line-height: 1.6;
      margin-bottom: 20px;
      font-size: 0.95em;
    }

    .container.dark-mode .skill-card p {
      color: #ccc;
    }

    .container.light-mode .skill-card p {
      color: #666;
    }

    .flex-chips {
      margin-top: 15px;
    }

    .chip-title {
      display: block;
      font-size: 0.85em;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .container.dark-mode .chip-title {
      color: #64ffda;
    }

    .container.light-mode .chip-title {
      color: #007bff;
    }

    .chips-wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .chip {
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 500;
      transition: all 0.3s ease;
      cursor: pointer;
      font-family: 'Courier Prime', monospace;
    }

    .container.dark-mode .chip {
      background: rgba(80, 0, 202, 0.2);
      color: #64ffda;
      border: 1px solid rgba(100, 255, 218, 0.3);
    }

    .container.light-mode .chip {
      background: #f0f0f0;
      color: #007bff;
      border: 1px solid #e0e0e0;
    }

    .chip:hover {
      transform: translateY(-2px);
    }

    .container.dark-mode .chip:hover {
      background: rgba(80, 0, 202, 0.4);
      border-color: #64ffda;
    }

    .container.light-mode .chip:hover {
      background: #e0e0e0;
      border-color: #007bff;
    }

    /* Animations */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .skill-card {
      animation: fadeInUp 0.6s ease-out forwards;
      opacity: 0;
    }

    .skill-card:nth-child(1) { animation-delay: 0.1s; }
    .skill-card:nth-child(2) { animation-delay: 0.3s; }
    .skill-card:nth-child(3) { animation-delay: 0.5s; }

    /* Responsive Design */
    @media (max-width: 968px) {
      .skills-grid {
        gap: 30px;
      }
    }

    @media (max-width: 768px) {
      .skills-grid {
        grid-template-columns: 1fr;
        gap: 30px;
      }

      .skills-container {
        padding: 0 5%;
      }

      .skill-card {
        padding: 25px;
      }
    }

    @media (max-width: 480px) {
      .skill-card {
        padding: 20px;
      }

      .skill-card h3 {
        font-size: 1.3em;
      }

      .skill-icon {
        width: 50px;
        height: 50px;
      }

      .skill-icon svg {
        width: 28px;
        height: 28px;
      }

      .chip {
        font-size: 0.7rem;
        padding: 4px 10px;
      }
    }
  `]
})
export class ExpertiseComponent {
  themeService = inject(ThemeService);

  // Tech stacks data
  fullStackTechs: string[] = [
    "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "SASS", 
    "Spring Boot", "Java", "Python", "SQL", "Postman"
  ];

  devopsTechs: string[] = [
    "Git", "GitHub Actions", "Docker",  
    "Linux", "Kubernetes", "CI/CD", "OAuth2", "AWS", "Azure", "Google Cloud (GCP)"
  ];

  workflowTechs: string[] = [
    "BPMN", "Camunda", "XML", "Task Scheduling", "Process Modeling"
  ];
}

