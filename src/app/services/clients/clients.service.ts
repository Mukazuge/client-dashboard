import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Client} from '../../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor() { }

  public getClients(): Observable<Client[]> {
    const clients: Client[] = [
      {
        id: 1,
        name: 'john',
        industry: 'sales',
        status: 'active',
        startDate: '01-01-2018',
        endDate: 'N/A'
      },
      {
        id: 2,
        name: 'Steve',
        industry: 'IT services',
        status: 'active',
        startDate: '06-06-2019',
        endDate: 'N/A'
      },
      {
        id: 3,
        name: 'Carlos',
        industry: 'sales',
        status: 'active',
        startDate: '01-01-2020',
        endDate: 'N/A'
      },
      {
        id: 4,
        name: 'Shawn',
        industry: 'sports',
        status: 'active',
        startDate: '01-04-2018',
        endDate: 'N/A'
      },
      {
        id: 5,
        name: 'Tom',
        industry: 'broker',
        status: 'active',
        startDate: '01-01-2019',
        endDate: 'N/A'
      }
    ];

    return new Observable<Client[]>(subscriber => {
      setTimeout(() => {
        subscriber.next(clients);
        subscriber.complete();
      }, 3000);
    });
  }
}
