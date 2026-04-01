import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="projects-container" id="projects" [class.dark-mode]="themeService.mode() === 'dark'" [class.light-mode]="themeService.mode() === 'light'">
      <h1>Personal Projects</h1>
      <div class="projects-grid">
        @for (project of projects; track project.id) {
          <div class="project-card">
            <!-- Carrousel d'images -->
            <div class="carousel-container">
              <div class="carousel">
                @for (image of project.images; track image; let i = $index) {
                  <img 
                    [src]="image" 
                    class="carousel-image" 
                    [class.active]="currentImage[project.id] === i"
                    [alt]="project.title"
                  />
                }
              </div>
              
              <!-- Boutons de navigation du carrousel -->
              @if (project.images.length > 1) {
                <button 
                  class="carousel-prev" 
                  (click)="prevImage(project.id)">
                  ❮
                </button>
                <button 
                  class="carousel-next" 
                  (click)="nextImage(project.id)">
                  ❯
                </button>
                
                <!-- Indicateurs de page -->
                <div class="carousel-dots">
                  @for (image of project.images; track image; let i = $index) {
                    <span 
                      class="dot" 
                      [class.active]="currentImage[project.id] === i"
                      (click)="setImage(project.id, i)">
                    </span>
                  }
                </div>
              }
            </div>

            <div class="project-content">
              <h2>{{ project.title }}</h2>
              <p>{{ project.description }}</p>
              
              <div class="project-techs">
                @for (tech of project.technologies; track tech) {
                  <span class="tech-chip">{{ tech }}</span>
                }
              </div>
              
              <div class="project-links">
                <a [href]="project.githubLink" target="_blank" rel="noreferrer" class="btn-github">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .projects-container {
      display: flex;
      flex-direction: column;
      padding: 80px 10%;
      text-align: left;
      transition: all 0.3s ease;
      min-height: 100vh;
    }

    .projects-container.dark-mode {
      background: #020305;
    }

    .projects-container.light-mode {
      background: #f5f5f5;
    }

    h1 {
      text-align: center;
      font-size: 2.5em;
      margin-bottom: 50px;
      position: relative;
      display: inline-block;
      width: 100%;
    }

    .projects-container.dark-mode h1 {
      color: white;
    }

    .projects-container.light-mode h1 {
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

    .projects-container.dark-mode h1::after {
      background: #5000ca;
    }

    .projects-container.light-mode h1::after {
      background: #007bff;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 50px;
    }

    .project-card {
      background: white;
      border-radius: 15px;
      overflow: hidden;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      position: relative;
    }

    .projects-container.dark-mode .project-card {
      background: rgba(26, 26, 46, 0.95);
      border: 1px solid rgba(100, 255, 218, 0.2);
    }

    .project-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    }

    /* Carrousel styles */
    .carousel-container {
      position: relative;
      width: 100%;
      height: 300px;
      overflow: hidden;
      background: #f0f0f0;
    }

    .projects-container.dark-mode .carousel-container {
      background: #1a1a2e;
    }

    .carousel {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .carousel-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
    }

    .carousel-image.active {
      opacity: 1;
    }

    .carousel-prev,
    .carousel-next {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0, 0, 0, 0.5);
      color: white;
      border: none;
      padding: 10px 15px;
      cursor: pointer;
      font-size: 18px;
      border-radius: 50%;
      transition: all 0.3s ease;
      z-index: 10;
    }

    .carousel-prev:hover,
    .carousel-next:hover {
      background: rgba(0, 0, 0, 0.8);
      transform: translateY(-50%) scale(1.1);
    }

    .carousel-prev {
      left: 10px;
    }

    .carousel-next {
      right: 10px;
    }

    .carousel-dots {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 8px;
      z-index: 10;
    }

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: rgba(94, 90, 90, 0.5);
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .dot.active {
      background: white;
      width: 20px;
      border-radius: 4px;
    }

    .dot:hover {
      background: white;
      transform: scale(1.2);
    }

    .project-content {
      padding: 20px;
    }

    .project-card h2 {
      font-size: 1.3em;
      margin: 0 0 10px 0;
      transition: color 0.3s ease;
    }

    .projects-container.dark-mode .project-card h2 {
      color: white;
    }

    .projects-container.light-mode .project-card h2 {
      color: #333;
    }

    .project-card h2:hover {
      text-decoration: underline;
    }

    .project-card p {
      margin: 0 0 15px 0;
      line-height: 1.6;
      font-size: 0.95em;
    }

    .projects-container.dark-mode .project-card p {
      color: #ccc;
    }

    .projects-container.light-mode .project-card p {
      color: #666;
    }

    .project-techs {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 20px;
    }

    .tech-chip {
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .projects-container.dark-mode .tech-chip {
      background: rgba(80, 0, 202, 0.2);
      color: #64ffda;
      border: 1px solid rgba(100, 255, 218, 0.3);
    }

    .projects-container.light-mode .tech-chip {
      background: #f0f0f0;
      color: #007bff;
      border: 1px solid #e0e0e0;
    }

    .tech-chip:hover {
      transform: translateY(-2px);
    }

    .project-links {
      display: flex;
      gap: 15px;
    }

    .btn-github {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 20px;
      border-radius: 25px;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.9rem;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .projects-container.dark-mode .btn-github {
      background: rgba(80, 0, 202, 0.2);
      color: #64ffda;
      border: 1px solid rgba(100, 255, 218, 0.3);
    }

    .projects-container.light-mode .btn-github {
      background: #f0f0f0;
      color: #007bff;
      border: 1px solid #e0e0e0;
    }

    .btn-github:hover {
      transform: translateY(-3px);
    }

    .projects-container.dark-mode .btn-github:hover {
      background: rgba(80, 0, 202, 0.4);
      box-shadow: 0 5px 15px rgba(100, 255, 218, 0.2);
    }

    .projects-container.light-mode .btn-github:hover {
      background: #e0e0e0;
      box-shadow: 0 5px 15px rgba(0, 119, 181, 0.2);
    }

    .btn-github svg {
      width: 18px;
      height: 18px;
    }

    .projects-container.dark-mode .btn-github svg {
      fill: #64ffda;
    }

    .projects-container.light-mode .btn-github svg {
      fill: #007bff;
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

    .project-card {
      animation: fadeInUp 0.6s ease-out forwards;
      opacity: 0;
    }

    /* Responsive Design */
    @media (max-width: 968px) {
      .projects-grid {
        gap: 30px;
      }
    }

    @media (max-width: 768px) {
      .projects-container {
        padding: 60px 5%;
      }

      .projects-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .carousel-container {
        height: 180px;
      }
    }

    @media (max-width: 480px) {
      .projects-container {
        padding: 40px 5%;
      }

      .project-content {
        padding: 15px;
      }

      .project-card h2 {
        font-size: 1.1em;
      }

      .project-card p {
        font-size: 0.85em;
      }

      .carousel-container {
        height: 150px;
      }

      .carousel-prev,
      .carousel-next {
        padding: 6px 12px;
        font-size: 14px;
      }

      .btn-github {
        padding: 6px 16px;
        font-size: 0.8rem;
      }
    }
  `]
})
export class ProjectsComponent {
  themeService = inject(ThemeService);
  
  currentImage: { [key: number]: number } = {};

  projects = [
    {
      id: 1,
      title: "Cloud-Native DevOps Platform",
      description: "Developed a fully automated DevOps platform to manage application lifecycle from source code to Kubernetes deployment using Angular, Spring Boot, Docker, and CI/CD pipelines.",
      images: [
        "assets/images/proj11.jpg",
        "assets/images/proj12.jpg",
        "assets/images/doc.png",
        "assets/images/proj13.jpg",
        "assets/images/proj14.jpg",
        "assets/images/proj15.jpg",
        "assets/images/proj16.jpg",
        "assets/images/proj17.png",

      ],
      githubLink: "https://github.com/yourusername/filmate-ai",
      technologies: ["Angular", "Spring Boot", "Docker", "Kubernetes", "GitHub / GitLab", "Paketo Buildpacks"]
    },
    {
      id: 2,
      title: "POS Web Application",
      description: "Built a responsive POS web application with real-time order management and optimized user experience using Angular and TypeScript.",
      images: [
        "assets/images/piza1.jpg",
        "assets/images/piza2.png",
        "assets/images/piza3.png"
      ],
      githubLink: "https://github.com/yourusername/ecommerce-platform",
      technologies: ["Angular", "TypeScript", "HTML", "CSS", "Git"]
    },
    {
      id: 3,
      title: "Healthcare Workflow System",
      description: "Designed and implemented a healthcare workflow automation system for scheduling and process orchestration using BPMN, Angular, Spring Boot, and Camunda.",
      images: [
        "assets/images/care0.png",
        "assets/images/care00.jpg",
        "assets/images/care1.png",
        "assets/images/care2.png",
        "assets/images/care3.png",
        "assets/images/care4.png",
        "assets/images/care5.png",
        "assets/images/care6.png",
        "assets/images/care8.png",
        "assets/images/care9.png",

      ],
      githubLink: "https://github.com/yourusername/task-management",
      technologies: ["Angular", "Spring Boot", "WebSocket", "PostgreSQL", "Tailwind CSS"]
    },
    {
      id: 4,
      title: "Intern Management System",
      description: "Designed and developed a dynamic web application to manage interns, including registration, tracking, and data management using PHP and MySQL.",
      images: [
        "assets/images/cni.png",

      ],
      githubLink: "https://github.com/yourusername/portfolio",
      technologies: ["PHP", "MySQL", "SCSS", "bootstrap", "JavaScript", "jquery"]
    },
 /*   {
      id: 5,
      title: "Weather Dashboard",
      description: "Built a weather dashboard application using REST APIs to display real-time weather data, forecasts, and interactive maps.",
      images: [
        "assets/images/mock06.png",
        "assets/images/mock05.png",
        "assets/images/mock04.png"
      ],
      githubLink: "https://github.com/yourusername/weather-dashboard",
      technologies: ["Angular", "TypeScript", "REST API", "Chart.js", "OpenWeather API"]
    },
    {
      id: 6,
      title: "Blog Platform",
      description: "Developed a full-featured blog platform with markdown support, comments system, user profiles, and admin dashboard.",
      images: [
        "assets/images/mock05.png",
        "assets/images/mock04.png",
        "assets/images/mock03.png"
      ],
      githubLink: "https://github.com/yourusername/blog-platform",
      technologies: ["Angular", "Spring Boot", "MongoDB", "Markdown", "JWT"]
    }*/
  ];

  constructor() {
    // Initialiser l'image courante pour chaque projet
    this.projects.forEach(project => {
      this.currentImage[project.id] = 0;
    });
  }

  prevImage(projectId: number) {
    const project = this.projects.find(p => p.id === projectId);
    if (project) {
      this.currentImage[projectId] = (this.currentImage[projectId] - 1 + project.images.length) % project.images.length;
    }
  }

  nextImage(projectId: number) {
    const project = this.projects.find(p => p.id === projectId);
    if (project) {
      this.currentImage[projectId] = (this.currentImage[projectId] + 1) % project.images.length;
    }
  }

  setImage(projectId: number, index: number) {
    this.currentImage[projectId] = index;
  }
}