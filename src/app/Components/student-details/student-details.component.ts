import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataRetrieveService } from 'src/app/Services/data-retrieve.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit{
	Id=0;
	student:any;
	constructor(myActivate:ActivatedRoute, public myService:DataRetrieveService){
		this.Id = myActivate.snapshot.params["id"];
	}
	ngOnInit(): void {
		this.myService.GetStudentByID(this.Id).subscribe(
			{
				next:(data)=>{
					this.student = data;
				},
				error:(err)=>{console.log(err)}
			}
		);
	}
}
