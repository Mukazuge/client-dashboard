import { Component, OnInit } from '@angular/core';
import {PaymentsService} from "../services/payments/payments.service";
import {PaymentData} from "../models/PaymentData";
import {Observable} from "rxjs";

@Component({
  selector: 'app-client-list',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  displayedColumns: string[] = ['date', 'service', 'status', 'nextPaymentDate', 'amount', 'currency'];
  paymentsData$: Observable<PaymentData[]>;

  constructor(private paymentsService: PaymentsService) { }

  ngOnInit() {
    this.paymentsData$ = this.paymentsService.getPayments();
  }

}
