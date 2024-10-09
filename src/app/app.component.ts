import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="main-container">
      <header class="header header-6">
        <div class="branding">
          <a href="..." class="nav-link">
            <span class="title">LMS - Learning Management System</span>
          </a>
        </div>
        <div class="header-nav">
          <a href="..." class="nav-link nav-text">Dashboard</a>
          <a href="..." class="nav-link nav-text">Courses</a>
          <a href="..." class="nav-link nav-text">Profile</a>
        </div>
        <div class="header-actions">
          <a href="..." class="nav-link nav-icon" aria-label="settings">
            <cds-icon shape="cog"></cds-icon>
          </a>
        </div>
      </header>
      <div class="content-container">
        <div class="content-area">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
})
export class AppComponent {
  title = 'LMS - Learning Management System';
}