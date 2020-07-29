import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { PaymentData } from "../../models/PaymentData";

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor() { }

  public getPayments(): Observable<PaymentData[]> {
    let mockPayments: PaymentData[] = [
      {
        date: '02-04-2019',
        service: 0,
        status: 0,
        nextPaymentDate: '06-06-2019',
        amount: 4000,
        currency: 'MX'
      },
      {
        date: '02-04-2019',
        service: 1,
        status: 1,
        nextPaymentDate: '03-04-2019',
        amount: 500,
        currency: 'MX'
      },
      {
        date: '10-03-2019',
        service: 0,
        status: 1,
        nextPaymentDate: '09-10-2019',
        amount: 5000,
        currency: 'MX'
      }
      ,{
        date: '02-04-2019',
        service: 4,
        status: 0,
        nextPaymentDate: '02-04-2020',
        amount: 2000,
        currency: 'MX'
      }
      ,{
        date: '02-04-2019',
        service: 3,
        status: 2,
        nextPaymentDate: '02-05-2019',
        amount: 7000,
        currency: 'MX'
      }
    ];

    return new Observable(subscriber => {
      setTimeout(() => {
        subscriber.next(mockPayments);
        subscriber.complete();
      }, 3000);
    });
  }
}
