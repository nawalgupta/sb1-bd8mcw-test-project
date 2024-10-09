import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from '../../services/payment.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  course: any;

  constructor(
    private route: ActivatedRoute,
    private paymentService: PaymentService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    const courseId = this.route.snapshot.paramMap.get('id');
    // In a real app, you would fetch the course details from a service
    this.course = {
      id: courseId,
      title: `Course ${courseId}`,
      price: 99.99
    };
  }

  purchaseCourse() {
    if (this.authService.isLoggedIn) {
      this.paymentService.processPayment(this.course.price).subscribe(
        (result) => {
          console.log('Payment successful', result);
          // Handle successful payment (e.g., grant access to course)
        },
        (error) => {
          console.error('Payment failed', error);
          // Handle payment failure
        }
      );
    } else {
      alert('Please sign in to purchase the course.');
    }
  }
}