import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../../shared/employee.service";
import {FormBuilder} from "@angular/forms";
import {Employee} from "../../../models/employee";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  term: any;
  p: number;

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe(data => {
      this.employees = data;
    })
  }

  deleteEmployee(employee: Employee) {
    if (confirm("Are you sure?")) {
      this.employeeService.deleteEmployee(employee).subscribe(() => {
        this.employees = this.employees.filter(e => e !== employee);
      })
    }
  }

}
