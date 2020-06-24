import { Component, OnInit } from '@angular/core';
import {Customer} from "../../../models/customer";
import {CustomerService} from "../../../shared/customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];
  term;
  p: number = 1;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe(data => {
      this.customers = data;
    })
  }

  deleteCustomer(customer: Customer): void {
    if (confirm("Are you sure?")) {
      this.customerService.deleteCustomer(customer.id)
        .subscribe( () => {
          this.customers = this.customers.filter(c => c !== customer);
        })
    }

  };

}
