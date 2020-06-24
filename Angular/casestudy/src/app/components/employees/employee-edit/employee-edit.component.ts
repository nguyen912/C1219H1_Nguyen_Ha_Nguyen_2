import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Employee} from "../../../models/employee";
import {EmployeeService} from "../../../shared/employee.service";

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {
  employee: Employee;
  editEmployeeForm: FormGroup;
  employeeId;

  maxDate = new Date();
  minDate = new Date(1900, 0, 1);
  startDate = new Date();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService
  ) {
  }

  ngOnInit() {
    this.editEmployeeForm = this.fb.group({
      positionId: ['', [Validators.required]],
      degreeId: ['', [Validators.required]],
      departmentId: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      fullName: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      idCardNum: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      phoneNumber: ['', [Validators.required, Validators.pattern("^((09)|(\\(84\\)\\+9))(0|1)\\d{7}$")]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]]
    });

    this.activatedRoute.params.subscribe(data => {
      this.employeeId = data.id;
      this.employeeService.getEmployeeById(this.employeeId).subscribe(data => {
        this.editEmployeeForm.patchValue(data);
      })
    })
  }

  onSubmit() {
    this.employeeService.editEmployee(this.editEmployeeForm.value, this.employeeId).subscribe(data => {
      this.router.navigateByUrl('employees');
    })
  }
}
