import { Component, HostListener, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { NAV_ITEMS, HERO_DATA } from '../../data/portfolio.data';
import { NavItem } from '../../models/portfolio.models';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  themeService = inject(ThemeService);
  navItems: NavItem[] = NAV_ITEMS;
  resumePath = HERO_DATA.resumePath;
  isScrolled = signal(false);
  isMenuOpen = signal(false);
  activeSection = signal('home');

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
    this.updateActiveSection();
  }

  ngOnInit(): void {
    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'services', 'contact'];
    for (const id of sections.reverse()) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 100) {
        this.activeSection.set(id);
        break;
      }
    }
  }

  toggleMenu(): void {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  scrollTo(href: string): void {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.closeMenu();
  }

  downloadResume(): void {
    const link = document.createElement('a');
    link.href = this.resumePath;
    link.download = 'deepak-sharma-resume.pdf';
    link.click();
  }
}
