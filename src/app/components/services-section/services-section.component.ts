import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SERVICES_DATA } from '../../data/portfolio.data';
import { ServiceCard } from '../../models/portfolio.models';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss'],
})
export class ServicesSectionComponent {
  services: ServiceCard[] = SERVICES_DATA;
}
