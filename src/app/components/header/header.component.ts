import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ThemeService } from '../../theme.service';@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule
  ],
  template: `
    <mat-toolbar 
      id="navigation" 
      class="navbar-fixed-top" 
      [class.scrolled]="scrolled"
      [class.dark-mode]="themeService.mode() === 'dark'"
      color="primary">
      
      <button 
        mat-icon-button 
        class="menu-button"
        (click)="drawer.toggle()"
        aria-label="Open drawer">
        <mat-icon>menu</mat-icon>
      </button>

      <div class="nav-content">
        <div class="theme-toggle">
          <button mat-icon-button (click)="toggleTheme()">
            <mat-icon>{{ themeService.mode() === 'dark' ? 'light_mode' : 'dark_mode' }}</mat-icon>
          </button>
        </div>

        <div class="desktop-nav">
          @for (item of navItems; track item[1]) {
            <button mat-button (click)="scrollToSection(item[1])">
              {{ item[0] }}
            </button>
          }
        </div>
      </div>
    </mat-toolbar>

    <mat-drawer-container class="drawer-container">
      <mat-drawer 
        #drawer
        mode="over"
        position="end"
        class="mobile-drawer"
        [class.dark-mode]="themeService.mode() === 'dark'">
        <div class="drawer-header">
          <mat-icon class="menu-icon">list</mat-icon>
          <span>Menu</span>
        </div>
        <mat-divider></mat-divider>
        <mat-nav-list>
          @for (item of navItems; track item[1]) {
            <mat-list-item (click)="scrollToSection(item[1]); drawer.close()">
              {{ item[0] }}
            </mat-list-item>
          }
        </mat-nav-list>
      </mat-drawer>
    </mat-drawer-container>
  `,
  styles: [`
    :host {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
    }

    .navbar-fixed-top {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.14);
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
      padding: 0 5%;
      z-index: 1000;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .navbar-fixed-top.dark-mode {
      background-color: #020305;
      backdrop-filter: blur(10px);
    }

    .navbar-fixed-top.scrolled {
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    .navbar-fixed-top.dark-mode.scrolled {
      background: rgba(0, 0, 0, 0.3);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }

    .menu-button {
      display: none;
    }

    .nav-content {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 2rem;
    }

    .theme-toggle {
      margin-right: auto;
    }

    .theme-toggle button {
      color: #333;
      transition: transform 0.3s ease;
    }

    .dark-mode .theme-toggle button {
      color: white;
    }

    .theme-toggle button:hover {
      transform: rotate(15deg);
    }

    .desktop-nav {
      display: flex;
      gap: 1rem;
    }

    .desktop-nav button {
      color: #333;
      font-weight: 500;
      text-transform: none;
      font-size: 1rem;
      padding: 0.5rem 1rem;
      position: relative;
      transition: all 0.3s ease;
    }

    .dark-mode .desktop-nav button {
      color: white;
    }

    .desktop-nav button::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background: #007bff;
      transition: all 0.3s ease;
      transform: translateX(-50%);
    }

    .dark-mode .desktop-nav button::after {
      background: #8b00b5;
    }

    .desktop-nav button:hover::after {
      width: 80%;
    }

    .desktop-nav button:hover {
      background: rgba(0, 123, 255, 0.1);
    }

    .dark-mode .desktop-nav button:hover {
      background: rgba(100, 255, 218, 0.1);
    }

    /* Drawer styles */
    .drawer-container {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      visibility: hidden;
      pointer-events: none;
    }

    .mobile-drawer {
      position: fixed;
      top: 0;
      right: 0;
      width: 280px;
      height: 100vh;
      background: white;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      pointer-events: auto;
      box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    }

    .mobile-drawer.dark-mode {
      background: rgba(10, 25, 47, 0.98);
      backdrop-filter: blur(15px);
      border-left: 1px solid rgba(100, 255, 218, 0.2);
    }

    .mobile-drawer.mat-drawer-opened {
      transform: translateX(0);
    }

    ::ng-deep .mobile-drawer .mat-drawer-inner-container {
      overflow-x: hidden;
    }

    .drawer-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1.5rem;
      color: #333;
      font-size: 1.2rem;
      font-weight: 500;
    }

    .dark-mode .drawer-header {
      color: white;
    }

    .menu-icon {
      color: #007bff;
    }

    .dark-mode .menu-icon {
      color: #64ffda;
    }

    ::ng-deep .mobile-drawer .mat-nav-list {
      padding-top: 0;
    }

    ::ng-deep .mobile-drawer .mat-list-item {
      color: #333;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      border-left: 3px solid transparent;
    }

    .dark-mode ::ng-deep .mobile-drawer .mat-list-item {
      color: white;
    }

    ::ng-deep .mobile-drawer .mat-list-item:hover {
      background: rgba(0, 123, 255, 0.1);
      border-left-color: #007bff;
      padding-left: 1.5rem;
    }

    .dark-mode ::ng-deep .mobile-drawer .mat-list-item:hover {
      background: rgba(100, 255, 218, 0.1);
      border-left-color: #64ffda;
    }

    ::ng-deep .mobile-drawer .mat-divider {
      background: #e0e0e0;
    }

    .dark-mode ::ng-deep .mobile-drawer .mat-divider {
      background: rgba(100, 255, 218, 0.2);
    }

    /* Responsive styles */
    @media (max-width: 768px) {
      .menu-button {
        display: inline-flex;
      }

      .desktop-nav {
        display: none;
      }

      .navbar-fixed-top {
        padding: 0 1rem;
      }

      .nav-content {
        justify-content: space-between;
      }

      .theme-toggle {
        margin-right: 0;
      }
    }

    /* Animation for drawer */
    @keyframes slideIn {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0);
      }
    }

    .mobile-drawer.mat-drawer-opened {
      animation: slideIn 0.3s ease-out;
    }
  `]
})
export class HeaderComponent implements OnInit, OnDestroy {
  themeService = inject(ThemeService);
  
  scrolled = false;
  navItems: [string, string][] = [
    ['Expertise', 'expertise'],
    ['History', 'history'],
    ['Projects', 'projects'],
    ['Contact', 'contact']
  ];

  private scrollListener: (() => void) | null = null;

  ngOnInit() {
    this.scrollListener = () => this.handleScroll();
    window.addEventListener('scroll', this.scrollListener);
    this.handleScroll();
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  private handleScroll() {
    const navbar = document.getElementById('navigation');
    if (navbar) {
      const scrolled = window.scrollY > navbar.clientHeight;
      if (this.scrolled !== scrolled) {
        this.scrolled = scrolled;
      }
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      console.log('Scrolling to:', sectionId);
    } else {
      console.error(`Element with id "${sectionId}" not found`);
    }
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}