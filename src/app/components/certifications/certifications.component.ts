import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="certifications-container" id="certifications" [class.dark-mode]="themeService.mode() === 'dark'" [class.light-mode]="themeService.mode() === 'light'">
      <div class="container">
        <h1>Certifications</h1>
        <p class="section-subtitle">Professional certifications and achievements</p>
        
        <div class="certifications-grid">
          @for (cert of certifications; track cert.id) {
            <div class="cert-card" [class.has-link]="cert.link">
              <div class="cert-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z"/>
                </svg>
              </div>
              <div class="cert-content">
                <h3>{{ cert.title }}</h3>
                <p class="issuer">{{ cert.issuer }}</p>
                <p class="date">{{ cert.date }}</p>
                <div class="skills">
                  @for (skill of cert.skills; track skill) {
                    <span class="skill-tag">{{ skill }}</span>
                  }
                </div>
                @if (cert.link) {
                  <a [href]="cert.link" target="_blank" rel="noreferrer" class="cert-link">
                    View Certificate
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 13v3c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h7m4-2h3v3M7 17l5-5 2 2 5-5"/>
                    </svg>
                  </a>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .certifications-container {
      padding: 80px 10%;
      transition: all 0.3s ease;
    }

    .certifications-container.dark-mode {
      background: #020305;
    }

    .certifications-container.light-mode {
      background: #f5f5f5;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    h1 {
      text-align: center;
      font-size: 2.5em;
      margin-bottom: 15px;
      position: relative;
      display: inline-block;
      width: 100%;
    }

    .certifications-container.dark-mode h1 {
      color: white;
    }

    .certifications-container.light-mode h1 {
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

    .certifications-container.dark-mode h1::after {
      background: #5000ca;
    }

    .certifications-container.light-mode h1::after {
      background: #0077b5;
    }

    .section-subtitle {
      text-align: center;
      margin-bottom: 50px;
      font-size: 1.1rem;
    }

    .certifications-container.dark-mode .section-subtitle {
      color: #ccc;
    }

    .certifications-container.light-mode .section-subtitle {
      color: #666;
    }

    .certifications-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 30px;
    }

    .cert-card {
      background: white;
      border-radius: 16px;
      padding: 25px;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      position: relative;
      display: flex;
      gap: 20px;
    }

    .certifications-container.dark-mode .cert-card {
      background: rgba(26, 26, 46, 0.95);
      border: 1px solid rgba(100, 255, 218, 0.2);
    }

    .cert-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    }

    .cert-icon {
      flex-shrink: 0;
      width: 50px;
      height: 50px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .certifications-container.dark-mode .cert-icon {
      background: rgba(80, 0, 202, 0.2);
    }

    .certifications-container.light-mode .cert-icon {
      background: rgba(0, 119, 181, 0.1);
    }

    .cert-icon svg {
      width: 28px;
      height: 28px;
    }

    .certifications-container.dark-mode .cert-icon svg {
      fill: #64ffda;
    }

    .certifications-container.light-mode .cert-icon svg {
      fill: #0077b5;
    }

    .cert-content {
      flex: 1;
    }

    .cert-content h3 {
      font-size: 1.2rem;
      margin-bottom: 8px;
      font-weight: 600;
    }

    .certifications-container.dark-mode .cert-content h3 {
      color: white;
    }

    .certifications-container.light-mode .cert-content h3 {
      color: #333;
    }

    .issuer {
      font-size: 0.9rem;
      margin-bottom: 5px;
    }

    .certifications-container.dark-mode .issuer {
      color: #64ffda;
    }

    .certifications-container.light-mode .issuer {
      color: #0077b5;
    }

    .date {
      font-size: 0.8rem;
      margin-bottom: 12px;
    }

    .certifications-container.dark-mode .date {
      color: #888;
    }

    .certifications-container.light-mode .date {
      color: #999;
    }

    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 15px;
    }

    .skill-tag {
      padding: 4px 10px;
      border-radius: 20px;
      font-size: 0.7rem;
      font-weight: 500;
    }

    .certifications-container.dark-mode .skill-tag {
      background: rgba(100, 255, 218, 0.1);
      color: #64ffda;
    }

    .certifications-container.light-mode .skill-tag {
      background: rgba(0, 119, 181, 0.1);
      color: #0077b5;
    }

    .cert-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.85rem;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .certifications-container.dark-mode .cert-link {
      color: #64ffda;
    }

    .certifications-container.light-mode .cert-link {
      color: #0077b5;
    }

    .cert-link svg {
      width: 16px;
      height: 16px;
    }

    .certifications-container.dark-mode .cert-link svg {
      fill: #64ffda;
    }

    .certifications-container.light-mode .cert-link svg {
      fill: #0077b5;
    }

    .cert-link:hover {
      gap: 10px;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .certifications-container {
        padding: 60px 5%;
      }

      .certifications-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }

      .cert-card {
        padding: 20px;
      }
    }

    @media (max-width: 480px) {
      .cert-card {
        flex-direction: column;
        text-align: center;
      }

      .cert-icon {
        margin: 0 auto;
      }

      .skills {
        justify-content: center;
      }

      .cert-link {
        justify-content: center;
      }
    }
  `]
})
export class CertificationsComponent {
  themeService = inject(ThemeService);

  certifications = [
        {
      id: 1,
      title: "Cloud Computing (Cloud Architect) L2",
      issuer: "Google Cloud / Coursera",
      date: "2026",
      skills: ["Cloud Infrastructure", "Cloud Management", "Containerization","Google Cloud Platform", "Command-Line Interface","Kubernetes","Identity and Access Management","Application Deployment","Continuous Delivery","Cloud Computing"],
      link: "https://www.coursera.org/account/accomplishments/specialization/IF5OJK2CPI4Q"
    },
    {
      id: 2,
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "KodeKloud",
      date: "2025",
      skills: ["Container", "Orchestration", "DevOps", "Kubestronaut","Kubernetes"],
      link: "https://learn.kodekloud.com/user/certificate/f64982b3-74ce-4cb7-9045-94d73cb3b7ad"
    },
    {
      id: 3,
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2025",
      skills: ["AWS Architecture", "AWS Cloud", "AWS Core Services", "AWS Pricing", "AWS Support"],
      link: "https://www.credly.com/badges/75602f1e-259e-426a-8a81-427d2a397f78/linked_in_profile"
    },
    {
      id:4,
      title: "Microsoft Azure Fundamentals (AZ-900)",
      issuer: "Microsoft / Coursera",
      date: "2024",
      skills: ["Azure", "Cloud Data", "Cloud Networking", "Cloud Security", "Cloud Services", "Cloud Storage", "Virtualization"],
      link: "https://www.credly.com/badges/7b84ec19-fb28-458a-9e14-75e141be0e09/linked_in_profile"
    },

  ];
}