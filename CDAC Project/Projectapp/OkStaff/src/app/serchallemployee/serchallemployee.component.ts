import { Salary } from './../class/sal';
import { EmpDetails } from './../class/emp';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../class/department';

@Component({
  selector: 'app-serchallemployee',
  templateUrl: './serchallemployee.component.html',
  styleUrls: ['./serchallemployee.component.scss']
})
export class SerchallemployeeComponent implements OnInit {
   i:any;
  empdetails:any;
  salary:any;
  empdetail:Observable<EmpDetails[]>;
  constructor(private empservice:EmployeeService) 
  {
    //this.salary= new Salary(0,new EmpDetails(0,"","","","","","","","","","",new Date, new Date,"","",0, new Department(0,"")),0,0,0,0);
    this.empdetails = new EmpDetails(0,"","","","","","","","","","",new Date, new Date,"","",0, new Department(0,""));
  }

  ngOnInit(): void 
  {
   
  }

  getallEmployee()
  {
    this.empservice.getallEmployee().subscribe((data) => {this.empdetails = data, alert(this.empdetails)});
  }
  deleteEmp(i)
  {
    
      this.empservice.deleteEmp(i).subscribe((data)=>{this.empdetails.emp_id = data,console.log(this.empdetails)});
  }

 
}
