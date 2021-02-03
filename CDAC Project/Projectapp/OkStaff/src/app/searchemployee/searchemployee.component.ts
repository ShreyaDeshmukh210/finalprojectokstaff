import { Salary } from './../class/sal';
import { EmployeeService } from './../employee.service';
import { EmpDetails } from './../class/emp';
import { Component, OnInit } from '@angular/core';
import { Department } from '../class/department';

@Component({
  selector: 'app-searchemployee',
  templateUrl: './searchemployee.component.html',
  styleUrls: ['./searchemployee.component.scss']
})
export class SearchemployeeComponent implements OnInit 
{
  salary:any;
  empdetails:any;

  constructor( private empservice :EmployeeService) 
  {
    this.salary = new Salary(0,new EmpDetails(0,"","","","","","","","","","",new Date, new Date,"","",0,new Department(0,"")),0,0,0,0);
  }

 
  ngOnInit(): void 
  {
    
  }

  getallEmployee()
  {
    this.empservice.getallEmployee().subscribe((data) => {
      this.empdetails = data, alert(this.empdetails)});
  }

  getEmployeeById(emp)
  {
  
    this.empservice.getSalById(emp).subscribe((data)=>{this.salary=data});
    this.empservice.getEmployee(emp).subscribe ((data) => {
      this.empdetails = data; 
      const test = this.empdetails});
  }
  deleteEmp(i)
  {

  }
  updateEmp(i)
  {

  }
 

}
