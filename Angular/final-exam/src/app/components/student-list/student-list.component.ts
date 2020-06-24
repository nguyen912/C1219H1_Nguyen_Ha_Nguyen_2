import { Component, OnInit } from '@angular/core';
import {Student} from "../../models/student";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students: Student[];
  term;
  p: number = 1;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    })
  }

  deleteStudent(student: Student): void {
    if (confirm("Are you sure?")) {
      this.studentService.deleteStudent(student.id)
        .subscribe( data => {
          this.students = this.students.filter(s => s !== student);
        })
    }
    else {
      this.getStudents();
    }
  };
}
