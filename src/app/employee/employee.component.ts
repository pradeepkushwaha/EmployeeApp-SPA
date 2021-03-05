import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../_services/employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeelist: any;
  products = [];  
  tempproducts=[];  
  model: any = {};

  constructor(private http: HttpClient,private employeeService: EmployeeService,) {}

  ngOnInit() {
    this.getEmplyeeList();
  }
  employeeSearchList(){

    var value=this.model;
    var startDate;
    var endDate;
    
    if(this.model.EmploymentDate!=undefined){
      startDate = this.model.EmploymentDate[0].toJSON().split('T')[0];  
      endDate = this.model.EmploymentDate[1].toJSON().split('T')[0];  
    
    }
     
    this.model.FromDate=startDate;
    this.model.ToDate=endDate;

    this.employeeService.getEmployeeSearch(this.model).subscribe(
      response=>{
        this.employeelist=response;
      }, error =>{
        console.log(error);
      });
  }

  getEmplyeeList(){
    this.http.get('http://localhost:47585/api/Employee/').subscribe(
      response=>{
        this.employeelist=response;
      }, error =>{
        console.log(error);
      });
    }
    
    dateRangeCreated($event) {  
            
      if($event!=null )
      { 
        let startDate = $event[0].toJSON().split('T')[0];  
        let endDate = $event[1].toJSON().split('T')[0];  
      }
    }
  }

