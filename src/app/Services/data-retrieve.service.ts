import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataRetrieveService {

  constructor(private myClient:HttpClient) { }

  private Base_URL = "http://localhost:3000/Students";
  GetAllStudents(){
    return this.myClient.get(this.Base_URL);
  }
  GetStudentByID(id:any){
    return this.myClient.get(this.Base_URL+"/"+id);
  }
  AddStudent(student:any){
    return this.myClient.post(this.Base_URL, student);
  }
  UpdateStudent(id:any, updatedStudent:any){
    return this.myClient.put(this.Base_URL+"/"+id, updatedStudent);
  }
  DeleteStudent(id:any){
    return this.myClient.delete(this.Base_URL+"/"+id);
  }
}

