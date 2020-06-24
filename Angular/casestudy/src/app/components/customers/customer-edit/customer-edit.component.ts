import { Component, OnInit } from '@angular/core';
import {Customer} from "../../../models/customer";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../../../shared/customer.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {
  customer: Customer;
  editCustomerForm: FormGroup;
  customerId;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService
  ) {
  }

  ngOnInit() {
    this.editCustomerForm = this.fb.group({
      fullName: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      idCardNum: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      phoneNumber: ['', [Validators.required, Validators.pattern("^((09)|(\\(84\\)\\+9))(0|1)\\d{7}$")]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      customerTypeId: ['', [Validators.required]]
    });

    this.activatedRoute.params.subscribe(data => {
      this.customerId = data.id;
      this.customerService.getCustomerById(this.customerId).subscribe(data => {
        this.editCustomerForm.patchValue(data);
      })
    })
  }

  onSubmit() {
    this.customerService.editCustomer(this.editCustomerForm.value, this.customerId).subscribe(data => {
      this.router.navigateByUrl('customers');
    })
  }
}
