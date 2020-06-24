import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IEmployee} from "../models/employee";
import {IService} from "../models/service";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private readonly API_URL = 'http://localhost:3000/services';

  constructor(private http: HttpClient) { }

  getAllServices(): Observable<IService[]> {
    return this.http.get<IService[]>(this.API_URL);
  }

  createService(service: Partial<IService>): Observable<IService> {
    return this.http.post<IService>(this.API_URL, service);
  }
}
