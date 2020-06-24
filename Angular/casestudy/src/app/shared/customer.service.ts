import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../models/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private readonly API = "http://localhost:3000/customers";

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<any> {
    return this.http.get<any>(this.API);
  }

  getCustomerById(id: number): Observable<any> {
    return this.http.get<any>(`${this.API}/${id}`);
  }

  createCustomer(customer: Customer): Observable<any> {
    return this.http.post<any>(this.API, customer);
  }

  editCustomer(customer: Customer, id: number): Observable<any> {
    return this.http.put(`${this.API}/${id}`, customer);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API}/${id}`);
  }
}
