import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

  data: { processing: string, category: string, title: string, description: string, users: string, priority: string }[] = [
    {
      processing: 'to do',
      category: 'technical task',
      title: 'Implement Login Form',
      description: 'Create a responsive login form with validation for email and password.',
      users: 'anna.mueller@join.de',
      priority: 'urgent'
    },
    {
      processing: 'in progress',
      category: 'user story',
      title: 'Design Dashboard UI',
      description: 'Design an interactive dashboard with real-time data updates for crypto monitoring.',
      users: 'peter.schmidt@join.de',
      priority: 'medium'
    },
    {
      processing: 'await feedback',
      category: 'technical task',
      title: 'Fix Scrollbar Bug',
      description: 'Resolve issues with the styled scrollbar not rendering properly in Safari.',
      users: 'sven.becker@join.de',
      priority: 'low'
    },
    {
      processing: 'done',
      category: 'user story',
      title: 'Add User Profile Picture',
      description: 'Allow users to upload and update their profile pictures.',
      users: 'laura.fischer@join.de',
      priority: 'medium'
    },
    {
      processing: 'to do',
      category: 'technical task',
      title: 'Integrate API for Product Search',
      description: 'Fetch and display search results from the product API based on user input.',
      users: 'mia.wagner@join.de',
      priority: 'urgent'
    },
    {
      processing: 'in progress',
      category: 'user story',
      title: 'Implement Dark Mode',
      description: 'Add a toggle to switch between light and dark mode, saving user preference.',
      users: 'jonas.weber@join.de',
      priority: 'medium'
    },
    {
      processing: 'await feedback',
      category: 'technical task',
      title: 'Optimize Image Loading',
      description: 'Implement lazy loading for images to improve performance on slower connections.',
      users: 'tom.hoffmann@join.de',
      priority: 'low'
    },
    {
      processing: 'done',
      category: 'user story',
      title: 'Enhance Accessibility',
      description: 'Improve keyboard navigation and screen reader compatibility.',
      users: 'emma.krause@join.de',
      priority: 'medium'
    },
    {
      processing: 'to do',
      category: 'technical task',
      title: 'Build Product Card Component',
      description: 'Create a reusable product card component with title, image, and price.',
      users: 'lena.schulz@join.de',
      priority: 'urgent'
    },
    {
      processing: 'in progress',
      category: 'user story',
      title: 'Add Favorites Feature',
      description: 'Allow users to mark products as favorites and view them in a dedicated section.',
      users: 'max.wolf@join.de',
      priority: 'medium'
    }
  ];
}
