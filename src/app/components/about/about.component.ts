import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ABOUT_DATA } from '../../data/portfolio.data';
import { AboutData } from '../../models/portfolio.models';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  about: AboutData = ABOUT_DATA;
}
