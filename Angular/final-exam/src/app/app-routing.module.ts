import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentListComponent} from "./components/student-list/student-list.component";
import {StudentEditComponent} from "./components/student-edit/student-edit.component";


const routes: Routes = [
  {path: 'students', component: StudentListComponent},
  {path: 'student-edit/:id', component: StudentEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
