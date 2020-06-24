import { Component, OnInit } from '@angular/core';
import {IEmployee} from "../../shared/models/employee";
import {FormControl, FormGroup} from "@angular/forms";
import {EmployeeService} from "../../shared/services/employee.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employees: IEmployee[];
  employeeForm: FormGroup;
  isShowForm = false;

  constructor(
    private employeeService: EmployeeService
  ) {
    this.employeeForm = new FormGroup({
      employeeId: new FormControl(),
      fullName: new FormControl(),
      positionId: new FormControl(),
      degreeId: new FormControl(),
      departmentId: new FormControl(),
      dob: new FormControl(),
      idCardNum: new FormControl(),
      salary: new FormControl(),
      phoneNumber: new FormControl(),
      email: new FormControl(),
      address: new FormControl()
    })
  }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe(next => {
      this.employees = next;
    }, error => {
      console.log(error);
    }, () => {
      console.log('complete');
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      const {value} = this.employeeForm;
      this.employeeService.createEmployee(value)
        .subscribe(next => {
          this.employees.unshift(next);
          this.employeeForm.reset({
            employeeId: '',
            fullName: '',
            positionId: '',
            degreeId: '',
            departmentId: '',
            dob: '',
            idCardNum: '',
            salary: '',
            phoneNumber: '',
            email: '',
            address: ''
          });
        }, error => console.log(error));
    }
  }

}
