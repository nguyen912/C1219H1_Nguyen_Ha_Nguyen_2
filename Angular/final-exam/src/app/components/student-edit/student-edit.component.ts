import { Component, OnInit } from '@angular/core';
import {Student} from "../../models/student";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit {
  editStudentForm: FormGroup;
  studentId;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService
  ) {
  }

  ngOnInit() {
    this.editStudentForm = this.fb.group({
      ten_sinh_vien: ['', [Validators.required, Validators.pattern("^[a-zA-Z\u0600-\u06FF]$")]],
      ten_nhom: ['', [Validators.required]],
      ten_de_tai: ['', [Validators.required]],
      giao_vien_huong_dan: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      so_dien_thoai: ['', [Validators.required, Validators.pattern('^[0-9]{12}$')]]

    });

    this.activatedRoute.params.subscribe(data => {
      this.studentId = data.id;
      this.studentService.getStudentById(this.studentId).subscribe(data => {
        this.editStudentForm.patchValue(data);
      })
    })
  }

  onSubmit() {
    // if (this.editStudentForm.valid) {
      this.studentService.editStudent(this.editStudentForm.value, this.studentId).subscribe(data => {
        this.router.navigateByUrl('students');
      })
    // }
  }
  cancel() {
    this.router.navigateByUrl('students');
  }

}
