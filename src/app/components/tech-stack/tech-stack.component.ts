import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent {
  technologies = [
    'Angular',
    'TypeScript',
    'C#',
    'ASP.NET Core',
    'SQL Server',
    'MySQL',
    'Git',
    'GitHub',
    'Vercel',
    'IIS', 
    'SEO'
  ];
}
