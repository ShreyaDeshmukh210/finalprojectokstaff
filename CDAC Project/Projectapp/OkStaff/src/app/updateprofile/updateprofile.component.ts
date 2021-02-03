import { EmpDetails } from './../class/emp';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.scss']
})
export class UpdateprofileComponent implements OnInit {

  empdetails:any;
  constructor(private updateprofile:EmployeeService, private routr:ActivatedRoute, private router:Router) 
  { }
 
  ngOnInit(): void
  {
  
  }

  updateProfile(empdetails:EmpDetails)
  {
    this.updateprofile.updateProfile(empdetails).subscribe((data) => {this.empdetails = data, alert(this.empdetails)});
  }
  
  getEmployeeById(emp)
  {
    this.updateprofile.getEmployee(emp).subscribe ((data) => {this.empdetails = data, alert(this.empdetails)});
  }


}
