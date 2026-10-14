import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HERO_DATA } from '../../data/portfolio.data';
import { HeroData } from '../../models/portfolio.models';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  hero: HeroData = HERO_DATA;
  displayedTitle = '';
  private titles = ['Full Stack Developer', 'SharePoint Developer', 'MERN Stack Developer', 'Angular & React Developer'];
  private titleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;

  ngOnInit(): void {
    this.typeTitle();
  }

  private typeTitle(): void {
    const current = this.titles[this.titleIndex];
    if (!this.isDeleting) {
      this.displayedTitle = current.substring(0, ++this.charIndex);
      if (this.charIndex === current.length) {
        this.isDeleting = true;
        setTimeout(() => this.typeTitle(), 2000);
        return;
      }
    } else {
      this.displayedTitle = current.substring(0, --this.charIndex);
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.titleIndex = (this.titleIndex + 1) % this.titles.length;
      }
    }
    setTimeout(() => this.typeTitle(), this.isDeleting ? 60 : 100);
  }

  scrollToSection(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  downloadResume(): void {
    const link = document.createElement('a');
    link.href = this.hero.resumePath;
    link.download = 'deepak-sharma-resume.pdf';
    link.click();
  }
}
