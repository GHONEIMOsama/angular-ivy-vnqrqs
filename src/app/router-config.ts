import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: '/create-ticket', component: CreateTicketComponent }
];
export default appRoutes;
