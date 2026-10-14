import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NAV_ITEMS, HERO_DATA, CONTACT_INFO } from '../../data/portfolio.data';
import { NavItem } from '../../models/portfolio.models';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  navItems: NavItem[] = NAV_ITEMS;
  socialLinks = HERO_DATA.socialLinks;
  contactInfo = CONTACT_INFO;
  currentYear = new Date().getFullYear();

  scrollTo(href: string): void {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
