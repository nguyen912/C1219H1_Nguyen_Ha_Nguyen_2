import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../models/employee";
import {Customer} from "../models/customer";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly API = "http://localhost:3000/employees";

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<any> {
    return this.http.get(this.API);
  }

  getEmployeeById(id: number): Observable<any> {
    return this.http.get(`${this.API}/${id}`);
  }

  createEmployee(employee: Employee): Observable<any> {
    return this.http.post(this.API, employee);
  }

  editEmployee(employee: Employee, id: number): Observable<any> {
    return this.http.put(`${this.API}/${id}`, employee);
  }

  deleteEmployee(employee: Employee): Observable<any> {
    return this.http.delete(`${this.API}/${employee.id}`);
  }
}
