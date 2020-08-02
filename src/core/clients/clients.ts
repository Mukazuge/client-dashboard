import {createDefaultLoadable, Loadable} from '../../loadable/loadable';
import {ClientsActionsTypes, ClientsActionUnion} from './clients.actions';
import {withLoadable} from '../../loadable/with-loadable';

export interface Client {
  id: number;
  name: string;
  industry: string;
  status: string;
  startDate: string;
  endDate: string;
}

export interface Clients extends Loadable {
  clients: Client[];
}

export function createDefaultClients(): Clients {
  return {
    ...createDefaultLoadable(),
    clients: []
  };
}

function baseClientsReducer(state: Clients = createDefaultClients(), action: ClientsActionUnion): Clients {
  switch (action.type) {
    case ClientsActionsTypes.loadSuccess:
      return {
        ...state,
        clients: action.payload.clients
      };

    default:
      return state;
  }
}

export function clientsReducer(state: Clients, action: ClientsActionUnion): Clients {
  return withLoadable(baseClientsReducer, {
    loadingActionType: ClientsActionsTypes.load,
    successActionType: ClientsActionsTypes.loadSuccess,
    errorActionType: ClientsActionsTypes.loadError
  })(state, action);
}
