import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EXPERIENCE_DATA } from '../../data/portfolio.data';
import { Experience } from '../../models/portfolio.models';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  experiences: Experience[] = EXPERIENCE_DATA;
}
