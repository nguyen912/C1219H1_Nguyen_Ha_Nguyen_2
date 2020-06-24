import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../shared/customer.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {
  createCustomerForm: FormGroup;

  maxDate = new Date();
  minDate = new Date(1900, 0, 1);
  startDate = new Date();

  constructor(
    private router: Router,
    private customerService: CustomerService,
    private fb: FormBuilder
  ) {
    this.createCustomerForm = this.fb.group({
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
    this.customerService.createCustomer(this.createCustomerForm.value).subscribe(data => {
      this.router.navigateByUrl('customers');
    })
  }
}
