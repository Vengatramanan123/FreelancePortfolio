import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ServiceCard {
  title: string;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
 services: ServiceCard[] = [
{
title: 'Custom Website Development',
description: 'Modern, responsive, and SEO-friendly websites designed to grow your business online.',
tags: ['Business Websites', 'Landing Pages', 'SEO', 'Responsive Design']
},
{
title: 'Web Application Development',
description: 'Scalable and secure web applications built with Angular and .NET for real-world business needs.',
tags: ['Angular', '.NET', 'Enterprise Apps', 'Performance']
},
{
title: 'E-Commerce Solutions',
description: 'Online stores with product management, payment integration, and seamless customer experiences.',
tags: ['E-Commerce', 'Payments', 'Inventory', 'User Experience']
},
{
title: 'Maintenance & Support',
description: 'Ongoing updates, bug fixes, security improvements, and performance monitoring.',
tags: ['Support', 'Bug Fixes', 'Security', 'Performance']
}
];

}
