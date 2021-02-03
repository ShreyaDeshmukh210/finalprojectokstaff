import { EmployeeService } from './../employee.service';
import { Salary } from './../class/sal';
import { EmpDetails } from './../class/emp';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss']
})
export class SalaryComponent implements OnInit {

  constructor(private salservice : EmployeeService, private routr:ActivatedRoute, private router:Router) { }

  empdetails : EmpDetails;
  salary: any;
  ngOnInit(): void 
  {

  }
  updateSalary(salary)
  {
    alert(salary.salary_ctc);
    console.log(salary);
    this.salservice.updateSalary(salary).subscribe((data) => {this.salary = data})
    alert(salary.salary_ctc);
  }
  
  getSalaryById(id)
  {
    
    this.salservice.getSalById(id).subscribe ((data) => {this.salary = data});
  }
  

}
