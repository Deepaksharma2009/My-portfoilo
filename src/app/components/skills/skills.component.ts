import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILLS_DATA } from '../../data/portfolio.data';
import { SkillCategory } from '../../models/portfolio.models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = SKILLS_DATA;

  hexToRgb(hex: string): string {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return '99, 102, 241';
    return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
  }
}
