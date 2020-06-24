import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../shared/services/customer.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ICustomer} from "../../../shared/models/customer";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {
  customers: ICustomer[];
  customerForm: FormGroup;
  maxDate = new Date();
  minDate = new Date(1900,0,1);
  startDate = new Date();

  constructor(
    private customerService: CustomerService,
    private fb: FormBuilder
  ) {
    this.customerForm = this.fb.group({
      fullName: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      idCardNum: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      phoneNumber: ['', [Validators.required, Validators.pattern("^((09)|(\\(84\\)\\+9))(0|1)\\d{7}$")]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      customerTypeId: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.customerForm.valid) {
      const {value} = this.customerForm;
      this.customerService.createCustomer(value)
        .subscribe(next => {
          this.customers.unshift(next);
          this.customerForm.reset({
            fullName: '',
            dob: '',
            idCardNum: '',
            phoneNumber: '',
            email: '',
            address: '',
            customerTypeId: ''
          });
        }, error => console.log(error));
    }
  }

}
