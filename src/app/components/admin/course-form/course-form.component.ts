import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../../services/course.service';
import { Course, Category } from '../../../models/course.model';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  courseForm: FormGroup;
  categories: Category[] = [];
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.courseForm = this.fb.group({
      id: [null],
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      categoryId: ['', Validators.required],
      units: this.fb.array([])
    });
  }

  ngOnInit() {
    this.courseService.getCategories().subscribe(categories => {
      this.categories = categories;
    });

    const courseId = this.route.snapshot.paramMap.get('id');
    if (courseId) {
      this.isEditMode = true;
      this.courseService.getCourse(+courseId).subscribe(course => {
        if (course) {
          this.courseForm.patchValue(course);
          course.units.forEach(unit => this.addUnit(unit));
        }
      });
    }
  }

  get units() {
    return this.courseForm.get('units') as FormArray;
  }

  addUnit(unit: any = null) {
    const unitForm = this.fb.group({
      id: [unit ? unit.id : null],
      title: [unit ? unit.title : '', Validators.required],
      lessons: this.fb.array([])
    });

    if (unit) {
      unit.lessons.forEach((lesson: any) => this.addLesson(unitForm.get('lessons') as FormArray, lesson));
    }

    this.units.push(unitForm);
  }

  addLesson(lessons: FormArray, lesson: any = null) {
    const lessonForm = this.fb.group({
      id: [lesson ? lesson.id : null],
      title: [lesson ? lesson.title : '', Validators.required],
      categoryId: [lesson ? lesson.categoryId : '', Validators.required],
      sections: this.fb.array([])
    });

    if (lesson) {
      lesson.sections.forEach((section: any) => this.addSection(lessonForm.get('sections') as FormArray, section));
    }

    lessons.push(lessonForm);
  }

  addSection(sections: FormArray, section: any = null) {
    sections.push(this.fb.group({
      id: [section ? section.id : null],
      title: [section ? section.title : '', Validators.required],
      content: [section ? section.content : '', Validators.required],
      categoryId: [section ? section.categoryId : '', Validators.required]
    }));
  }

  onSubmit() {
    if (this.courseForm.valid) {
      const course: Course = this.courseForm.value;
      if (this.isEditMode) {
        this.courseService.updateCourse(course).subscribe(() => {
          this.router.navigate(['/admin']);
        });
      } else {
        this.courseService.createCourse(course).subscribe(() => {
          this.router.navigate(['/admin']);
        });
      }
    }
  }
}