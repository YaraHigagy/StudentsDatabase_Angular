import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { StudentsComponent } from './Components/students/students.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { UpdatInfoComponent } from './Components/updat-info/updat-info.component';
import { AddStudentComponent } from './Components/add-student/add-student.component';
import { ErrorComponent } from './Components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentsComponent,
    StudentDetailsComponent,
    UpdatInfoComponent,
    AddStudentComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
