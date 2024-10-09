import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    // Check if the user is already logged in (e.g., from localStorage)
    const token = localStorage.getItem('auth_token');
    if (token) {
      this.loggedIn.next(true);
    }
  }

  get isLoggedIn() {
    return this.loggedIn.value;
  }

  signInWithGoogle() {
    // In a real application, you would redirect to Google's OAuth page
    // For this example, we'll simulate a successful login
    console.log('Signing in with Google...');
    setTimeout(() => {
      this.loggedIn.next(true);
      localStorage.setItem('auth_token', 'fake_token');
    }, 1000);
  }

  signOut() {
    this.loggedIn.next(false);
    localStorage.removeItem('auth_token');
  }
}