import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = 'http://localhost:47585/api/';
  employeelist: any;

constructor(private http: HttpClient) { }

getEmplyeeList(){
  this.http.get(this.baseUrl +'Employee').subscribe(
    response=>{
      this.employeelist=response;
    }, error =>{
      console.log(error);
    });
  }
  getEmployeeSearch(model: any){
    return this.http.post(this.baseUrl +'Employee/SearchEmployee', model) ;
  }
  
}
