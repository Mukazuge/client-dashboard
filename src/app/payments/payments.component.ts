import { Component, OnInit } from '@angular/core';

export enum Status {
  done,
  pending,
  declined
}

export enum BusinessTravel {
  businessTravel,
  food,
  gas,
  officeServices,
  joby
}

export interface PaymentData {
  date: string,
  service: BusinessTravel;
  status: Status;
  nextPaymentDate: string;
  amount: number;
  currency: string;
}

@Component({
  selector: 'app-client-list',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  displayedColumns: string[] = ['date', 'service', 'status', 'nextPaymentDate', 'amount', 'currency'];
  paymentsData: PaymentData[] = [
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

  constructor() { }

  ngOnInit() {
  }

}
