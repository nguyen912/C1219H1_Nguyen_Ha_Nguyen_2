import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../../shared/employee.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {
  createEmployeeForm: FormGroup;

  maxDate = new Date();
  minDate = new Date(1900, 0, 1);
  startDate = new Date();

  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    private fb: FormBuilder
  ) {
    this.createEmployeeForm = this.fb.group({
      positionId: ['', [Validators.required]],
      degreeId: ['', [Validators.required]],
      departmentId: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      fullName: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      idCardNum: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      phoneNumber: ['', [Validators.required, Validators.pattern("^((09)|(\\(84\\)\\+9))(0|1)\\d{7}$")]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
    })
  }


  ngOnInit(): void {
  }

  onSubmit() {
    this.employeeService.createEmployee(this.createEmployeeForm.value).subscribe(data => {
      this.router.navigateByUrl('employees');
    })
  }
}
