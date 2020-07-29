import { Component, OnInit } from '@angular/core';
import {Client} from "../models/Client";
import {Observable} from "rxjs";
import {ClientsService} from "../services/clients/clients.service";



@Component({
  selector: 'app-payment',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'industry', 'status', 'startDate', 'endDate'];
  clients$: Observable<Client[]>;

  constructor(private clientsService: ClientsService) { }

  ngOnInit() {
    this.clients$ = this.clientsService.getClients();
  }

}
