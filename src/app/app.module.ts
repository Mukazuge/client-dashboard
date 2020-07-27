import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableHeaderComponent } from './table-header/table-header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LogoutComponent } from './logout/logout.component';
import { ClientListComponent } from './client-list/client-list.component';
import { NotesComponent } from './notes/notes.component';
import { PaymentsComponent } from './payments/payments.component';
import { StatisticsComponent } from './stadistics/statistics.component';
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule,
  MatButtonModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    TableHeaderComponent,
    SideBarComponent,
    LogoutComponent,
    ClientListComponent,
    NotesComponent,
    PaymentsComponent,
    StatisticsComponent
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
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
