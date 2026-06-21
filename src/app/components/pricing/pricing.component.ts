import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PricingPlan {
  name: string;
  price: number;
  currency: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  cta: string;
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  plans: PricingPlan[] = [
{
name: 'Starter Website',
price: 7999,
currency: '₹',
description: 'Perfect for small businesses, freelancers, and personal brands.',
features: [
'Up to 5 Pages',
'Responsive Mobile Design',
'SEO-Friendly Structure',
'Contact Form Integration',
'Social Media Links',
'1 Month Free Support'
],
cta: 'Get Started'
},
{
name: 'Business Website',
price: 9999,
currency: '₹',
description: 'Professional websites designed to generate leads and grow your business.',
features: [
'Up to 10 Pages',
'Custom UI/UX Design',
'Advanced Contact Forms',
'SEO Optimization',
'Performance Optimization',
'Google Analytics Setup',
'2 Months Free Support'
],
isPopular: true,
cta: 'Get Started'
},
// {
// name: 'Custom Web Application',
// price: 11999,
// currency: '₹',
// description: 'Tailor-made web applications and business software solutions.',
// features: [
// 'Angular + .NET Development',
// 'Database Design & Setup',
// 'User Authentication',
// 'Admin Dashboard',
// 'API Integration',
// 'Deployment & Hosting Support',
// '3 Months Free Support'
// ],
// cta: 'Contact Me'
// }
];

}
