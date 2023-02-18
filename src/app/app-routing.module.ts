import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './Components/add-student/add-student.component';
import { ErrorComponent } from './Components/error/error.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { StudentsComponent } from './Components/students/students.component';
import { UpdatInfoComponent } from './Components/updat-info/updat-info.component';

const routes: Routes = [
    {path:'', component:StudentsComponent},
    {path:'add_student', component:AddStudentComponent},
    {path:'student/:id', component:StudentDetailsComponent},
    {path:'update_info/:id', component:UpdatInfoComponent},
    {path:'**', component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
