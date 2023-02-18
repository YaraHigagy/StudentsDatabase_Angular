import { Component, OnInit } from '@angular/core';
import { DataRetrieveService } from 'src/app/Services/data-retrieve.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit{

	Id = 0;
	constructor(public myActivate:ActivatedRoute, public myService:DataRetrieveService){
		this.Id = myActivate.snapshot.params["id"];
	}

	students:any;

	ngOnInit(): void {  //fetch Api
		// throw new Error('Method not implemented.');
		//subscribe would be rejected from angular's next upgrade
		this.myService.GetAllStudents().subscribe(
			{
				next:(data)=>{
					this.students = data;
					// console.log(data);
				},
				error:(err)=>{console.log(err)}
			}
		);
	}

	Delete(id:any){
		var delBtn = confirm(" Do you want to delete ?");
		if ( delBtn == true ) {
			this.myService.DeleteStudent(id).subscribe();
			window.location.reload();
		}  
	}
}
