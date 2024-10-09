import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  courses = [
    { id: 1, title: 'Full Stack Course', price: 99.99 },
    { id: 2, title: 'Backend Course', price: 79.99 },
    { id: 3, title: 'UI Course', price: 59.99 }
  ];

  constructor(public authService: AuthService) {}
}