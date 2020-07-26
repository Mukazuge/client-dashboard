import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientListComponent} from "./client-list/client-list.component";
import {PaymentsComponent} from "./payments/payments.component";
import {NotesComponent} from "./notes/notes.component";
import {StatisticsComponent} from "./stadistics/statistics.component";


const routes: Routes = [
  {path: 'client-list', component: ClientListComponent},
  {path: 'payments', component: PaymentsComponent},
  {path: 'notes', component: NotesComponent},
  {path: 'statistics', component: StatisticsComponent},
  { path: '', redirectTo: '/client-list', pathMatch: 'full' },
  {path: '**', component: ClientListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
