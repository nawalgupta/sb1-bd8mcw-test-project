import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { CourseFormComponent } from './components/admin/course-form/course-form.component';
import { AuthService } from './services/auth.service';
import { PaymentService } from './services/payment.service';
import { CourseService } from './services/course.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CourseDetailComponent,
    AdminDashboardComponent,
    CourseFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AuthService, PaymentService, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }