export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  category: 'web' | 'mobile' | 'design' | 'other';
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Application de Gestion de Tâches",
    description: "Application complète de gestion de projets avec drag & drop, notifications en temps réel et collaboration d'équipe",
    image: "assets/images/project1.jpg",
    technologies: ["Angular 18", "Node.js", "MongoDB", "Socket.io"],
    githubLink: "https://github.com/votreusername/task-manager",
    demoLink: "https://task-manager-demo.com",
    category: "web"
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Dashboard interactif avec graphiques dynamiques, export de données et tableaux de bord personnalisables",
    image: "assets/images/project2.jpg",
    technologies: ["Angular", "Chart.js", "Tailwind CSS", "Firebase"],
    githubLink: "https://github.com/votreusername/analytics-dashboard",
    demoLink: "https://dashboard-demo.com",
    category: "web"
  },
  {
    id: 3,
    title: "Marketplace E-commerce",
    description: "Plateforme e-commerce avec paiement Stripe, panier d'achat et système de notation",
    image: "assets/images/project3.jpg",
    technologies: ["Angular", "Express", "PostgreSQL", "Stripe"],
    githubLink: "https://github.com/votreusername/ecommerce-platform",
    demoLink: "https://ecommerce-demo.com",
    category: "web"
  },
  {
    id: 4,
    title: "Application Mobile Fitness",
    description: "Application de suivi d'entraînement avec défis, progression et partage social",
    image: "assets/images/project4.jpg",
    technologies: ["Ionic", "Angular", "Firebase", "Capacitor"],
    githubLink: "https://github.com/votreusername/fitness-app",
    category: "mobile"
  }
];