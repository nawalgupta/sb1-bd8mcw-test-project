import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(private http: HttpClient) {}

  processPayment(amount: number): Observable<any> {
    // In a real application, you would make an API call to your backend
    // which would then interact with Stripe to process the payment
    console.log(`Processing payment of $${amount}`);
    return of({ success: true, amount: amount });
  }
}