import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'app-theme';
  public mode = signal<'light' | 'dark'>('light');

  constructor() {
    // Charger le thème sauvegardé
    const savedTheme = localStorage.getItem(this.THEME_KEY) as 'light' | 'dark' | null;
    if (savedTheme) {
      this.mode.set(savedTheme);
    } else {
      // Détecter la préférence système
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.mode.set(prefersDark ? 'dark' : 'light');
    }
    
    // Appliquer le thème initial
    this.applyTheme(this.mode());
    
    // Sauvegarder quand le thème change
    effect(() => {
      const currentMode = this.mode();
      localStorage.setItem(this.THEME_KEY, currentMode);
      this.applyTheme(currentMode);
    });
  }

  toggleTheme() {
    this.mode.update(current => current === 'light' ? 'dark' : 'light');
  }

  private applyTheme(theme: 'light' | 'dark') {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}