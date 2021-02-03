import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../employee.service';
import { Salary } from './../class/sal';
import { EmpDetails } from './../class/emp';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-showsalary',
  templateUrl: './showsalary.component.html',
  styleUrls: ['./showsalary.component.scss']
})
export class ShowsalaryComponent implements OnInit {

  constructor(private salservice : EmployeeService, private routr:ActivatedRoute, private router:Router) { }
  empdetails : EmpDetails;
  salary: any;

  ngOnInit(): void 
  {
  }
  getOnlySalaryById(id)
  {
    alert(id);
    this.salservice.getSalById(id).subscribe ((data) => {this.salary = data, alert(this.salary)});
  }

}
