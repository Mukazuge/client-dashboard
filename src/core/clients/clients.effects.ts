import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Client, Clients} from './clients';
import {catchError, delay, map, switchMap} from 'rxjs/operators';
import {ClientsActionsTypes, LoadClientsError, LoadClientsSuccess} from './clients.actions';

function mockApiResponse(): Observable<{ allClients: Client[] }> {
  return of({
    allClients: [
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
    ]}).pipe(delay(2500));
}

@Injectable()
export class ClientsEffects {
  constructor(private actions$: Actions) {
  }

  @Effect()
  loadClients = this.actions$.pipe(
    ofType(ClientsActionsTypes.load),
    switchMap(action => {
      return mockApiResponse().pipe(
        map((response: any) => new LoadClientsSuccess({clients: response.allClients})),
        catchError(error => of (new LoadClientsError(error)))
      );
    }));
}
