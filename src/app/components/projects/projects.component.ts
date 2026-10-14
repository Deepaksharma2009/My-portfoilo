import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS_DATA } from '../../data/portfolio.data';
import { Project, ProjectCategory } from '../../models/portfolio.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  allProjects: Project[] = PROJECTS_DATA;
  categories: ProjectCategory[] = ['All', 'MERN Stack', 'SharePoint', 'React', 'Next.js', 'Angular'];
  activeCategory = signal<ProjectCategory>('All');
  selectedProject = signal<Project | null>(null);

  filteredProjects = computed(() => {
    const cat = this.activeCategory();
    return cat === 'All' ? this.allProjects : this.allProjects.filter(p => p.category === cat);
  });

  setFilter(cat: ProjectCategory): void {
    this.activeCategory.set(cat);
  }

  openModal(project: Project): void {
    this.selectedProject.set(project);
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedProject.set(null);
    document.body.style.overflow = '';
  }
}
