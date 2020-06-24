import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {IEmployee} from "../models/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly API_URL = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.API_URL);
  }

  createEmployee(employee: Partial<IEmployee>): Observable<IEmployee> {
    return this.http.post<IEmployee>(this.API_URL, employee);
  }
}
