import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientListComponent } from './client-list/client-list.component';
import { NotesComponent } from './notes/notes.component';
import { PaymentsComponent } from './payments/payments.component';
import { StatisticsComponent } from './stadistics/statistics.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoadingContainerComponent } from './loading-container/loading-container/loading-container.component';
import {clientsReducer} from '../core/clients/clients';
import { EffectsModule } from '@ngrx/effects';
import {ClientsEffects} from '../core/clients/clients.effects';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    NotesComponent,
    PaymentsComponent,
    StatisticsComponent,
    LoadingContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatCheckboxModule,
    EffectsModule.forRoot([ClientsEffects]),
    StoreModule.forRoot({clients: clientsReducer}),
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
