import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICustomer} from "../models/customer";
import {IContract} from "../models/contract";

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private readonly API_URL = 'http://localhost:3000/contracts';

  constructor(private http: HttpClient) { }

  getAllContracts(): Observable<IContract[]> {
    return this.http.get<IContract[]>(this.API_URL);
  }

  createContract(contract: Partial<IContract>): Observable<IContract> {
    return this.http.post<IContract>(this.API_URL, contract);
  }
}
