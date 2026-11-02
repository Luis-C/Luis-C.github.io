import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import projects from './portfolio.json';

export interface Project {
  readonly title: string;
  readonly imgSrc: string;
  readonly paragraphs: readonly string[];
  readonly github?: string;
  readonly view?: string;
  readonly codeSrc?: string;
  readonly example?: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  readonly projects: readonly Project[] = projects;
}
