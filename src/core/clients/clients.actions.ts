import {Action} from '@ngrx/store';
import {Client} from './clients';

export enum ClientsActionsTypes {
  load = '[CLIENTS] LOAD',
  loadSuccess = '[CLIENTS] LOAD SUCCESS',
  loadError = '[CLIENTS] LOAD ERROR'
}

export class LoadClients implements Action {
  readonly type = ClientsActionsTypes.load;
}

export class LoadClientsSuccess implements Action {
  readonly type = ClientsActionsTypes.loadSuccess;
  constructor(public payload: { clients: Client[] }) {}
}

export class LoadClientsError implements Action {
  readonly type = ClientsActionsTypes.loadError;
  constructor(public error: any) {}
}

export type ClientsActionUnion = LoadClients | LoadClientsSuccess | LoadClientsError;
