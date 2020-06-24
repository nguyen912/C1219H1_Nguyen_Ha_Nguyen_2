import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from "./components/customers/customer-list/customer.component";
import {EmployeeComponent} from "./components/employee/employee.component";
import {ServiceComponent} from "./components/service/service.component";
import {ContractComponent} from "./components/contract/contract.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {HomeComponent} from "./components/home/home.component";
import {CustomerCreateComponent} from "./components/customers/customer-create/customer-create.component";


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'customers', component: CustomerComponent},
  {path: 'customer-create', component: CustomerCreateComponent},
  {path: 'employees', component: EmployeeComponent},
  {path: 'services', component: ServiceComponent},
  {path: 'contracts', component: ContractComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
