import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customers/customer-list/customer.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ServiceComponent } from './components/service/service.component';
import { ContractComponent } from './components/contract/contract.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PaginationPipe} from "./shared/pagination.pipe";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {NgxPaginationModule} from "ngx-pagination";
import { CustomerCreateComponent } from './components/customers/customer-create/customer-create.component';
import {MaterialModule} from './material.module';
import {CustomerDeleteDialogComponent} from "./components/customers/customer-delete-dialog/customer-delete-dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    EmployeeComponent,
    ServiceComponent,
    ContractComponent,
    PageNotFoundComponent,
    HomeComponent,
    PaginationPipe,
    CustomerCreateComponent,
    CustomerDeleteDialogComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule,
      Ng2SearchPipeModule,
      NgxPaginationModule,
      MaterialModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
