import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICustomer} from "../models/customer";
import {map} from "rxjs/operators";

// const headerOption = {
//   headers: new HttpHeaders({'Content-Type': 'application/json'})
// }
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private readonly API_URL = 'http://localhost:3000/customers';

  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.API_URL);
  }

  createCustomer(customer: Partial<ICustomer>): Observable<ICustomer> {
    return this.http.post<ICustomer>(this.API_URL, customer);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

  // deleteCustomer(id: number) {
  //   console.log(id)
  // }
}
