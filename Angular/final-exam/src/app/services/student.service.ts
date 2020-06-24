import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../models/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private readonly API = "http://localhost:3000/students";

  constructor(private http: HttpClient) { }

  getStudents(): Observable<any> {
    return this.http.get<any>(this.API);
  }

  getStudentById(id: number): Observable<any> {
    return this.http.get<any>(`${this.API}/${id}`);
  }

  editStudent(student: Student, id: number): Observable<any> {
    return this.http.put(`${this.API}/${id}`, student);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API}/${id}`);
  }
}
