import { Component, OnInit } from '@angular/core';
import {ICustomer} from "../../../shared/models/customer";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../../shared/services/customer.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customers: ICustomer[] = [];
  customer: ICustomer;
  customerForm: FormGroup;
  isShowForm = false;
  term;
  p: number = 1;

  constructor(
    private customerService: CustomerService,
    private fb: FormBuilder
  ) {
    this.customerForm = new FormGroup({
      customerId: new FormControl(),
      fullName: new FormControl(),
      dob: new FormControl(),
      idCardNum: new FormControl(),
      phoneNumber: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
      customerTypeId: new FormControl()
    })
  }

  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers() {
    this.customerService.getAllCustomers().subscribe(next => {
      this.customers = next;
    }, error => {
      console.log(error);
    }, () => {
      console.log('complete');
    });
  }



  deleteCustomer(i) {
    const cus = this.customers[i];
    this.customerService.deleteCustomer(cus.id).subscribe(() => {
      this.customers = this.customers.filter(c => c.id !== cus.id);
    })
  }
}
