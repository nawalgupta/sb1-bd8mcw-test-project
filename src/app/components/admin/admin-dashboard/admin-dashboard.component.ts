import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import { Course } from '../../../models/course.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }

  deleteCourse(id: number) {
    this.courseService.deleteCourse(id).subscribe(success => {
      if (success) {
        this.courses = this.courses.filter(course => course.id !== id);
      }
    });
  }
}