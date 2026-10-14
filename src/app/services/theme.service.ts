import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly THEME_KEY = 'portfolio-theme';
  isDark = signal<boolean>(true);

  constructor() {
    this.loadTheme();
  }

  private loadTheme(): void {
    const saved = localStorage.getItem(this.THEME_KEY);
    const dark = saved !== null ? saved === 'dark' : true;
    this.isDark.set(dark);
    this.applyTheme(dark);
  }

  toggleTheme(): void {
    const newDark = !this.isDark();
    this.isDark.set(newDark);
    localStorage.setItem(this.THEME_KEY, newDark ? 'dark' : 'light');
    this.applyTheme(newDark);
  }

  private applyTheme(dark: boolean): void {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }
}
