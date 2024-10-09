import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { CourseFormComponent } from './components/admin/course-form/course-form.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'course/:id', component: CourseDetailComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'admin/course/new', component: CourseFormComponent },
  { path: 'admin/course/edit/:id', component: CourseFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }