import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataRetrieveService } from 'src/app/Services/data-retrieve.service';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
	
	constructor(public myService:DataRetrieveService){}

	Add(name:any,age:any,tel:any,email:any,course:any,grade:any){
		let newStudent = {name, age, tel, email, course, grade};
		this.myService.AddStudent(newStudent).subscribe();
	}

  myFormValidation = new FormGroup({
		name: new FormControl("", [Validators.required, Validators.minLength(3)]),
		age: new FormControl(0, [Validators.required, Validators.min(7), Validators.max(18)]),
		tel: new FormControl("", [Validators.required]),
		email: new FormControl("", [Validators.required, Validators.email]),
		course: new FormControl("", [Validators.required]),
		grade: new FormControl("", [Validators.required]),
	});

	get NameValid(){
		return this.myFormValidation.controls["name"].valid;
	}
	get AgeValid(){
		return this.myFormValidation.controls["age"].valid;
	}
	get TelValid(){
		return this.myFormValidation.controls["tel"].valid;
	}
	get EmailValid(){
		return this.myFormValidation.controls["email"].valid;
	}
	get CourseValid(){
		return this.myFormValidation.controls["course"].valid;
	}
	get GradeValid(){
		return this.myFormValidation.controls["grade"].valid;
	}

	checkVals(){
		console.log(this.myFormValidation);
	}

  AddReg() {
    if(!this.myFormValidation.controls["name"].value 
				|| !this.myFormValidation.controls["age"].value
				|| !this.myFormValidation.controls["tel"].value
				|| !this.myFormValidation.controls["email"].value
				|| !this.myFormValidation.controls["course"].value
				|| !this.myFormValidation.controls["grade"].value) {
			return;
    }
  }
}
