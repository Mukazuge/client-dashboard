import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ClientsService} from '../services/clients/clients.service';
import {Store} from '@ngrx/store';
import {Clients} from '../../core/clients/clients';
import {LoadClients} from "../../core/clients/clients.actions";



@Component({
  selector: 'app-payment',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'industry', 'status', 'startDate', 'endDate'];
  clients$: Observable<Clients>;

  constructor(private clientsService: ClientsService, private store: Store<{clients: Clients}>) { }

  ngOnInit() {
    // with service approach
    // this.clients$ = this.clientsService.getClients();
    // with state management approach
    this.clients$ = this.store.select(state => state.clients);
  }

  loadClients() {
    const action = new LoadClients();
    this.store.dispatch(action);
  }
}
