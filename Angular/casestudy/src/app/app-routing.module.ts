import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from "./components/customers/customer-list/customer-list.component";
import {CustomerCreateComponent} from "./components/customers/customer-create/customer-create.component";
import {CustomerEditComponent} from "./components/customers/customer-edit/customer-edit.component";


const routes: Routes = [
  {path: 'customers', component: CustomerListComponent},
  {path: 'customer-create', component: CustomerCreateComponent},
  {path: 'customer-edit/:id', component: CustomerEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
