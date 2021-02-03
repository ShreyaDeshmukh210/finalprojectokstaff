import { Salary } from './../class/sal';
import { EmpDetails } from './../class/emp';
import { Payslip } from './../class/payslip';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Department } from '../class/department';

@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.scss']
})
export class PayslipComponent implements OnInit {
payslip:any
empdetails:any
salary:any
  constructor(private payslipservice :EmployeeService) 
  {
    this.salary = new Salary(0,new EmpDetails(0,"","","","","","","","","","",new Date, new Date,"","",0,new Department(0,"")),0,0,0,0);
    this.empdetails = new EmpDetails(0,"","","","","","","","","","",new Date, new Date,"","",0,new Department(0,""));
  }

  ngOnInit(): void 
  {
    this.payslip = new Payslip();
  }
  getPayslip(id)
  {
    //alert(id);
    this.payslipservice.getSalById(id).subscribe((data)=>{this.salary=data});
    this.payslipservice.getEmployee(id).subscribe((data) => {this.empdetails=data});
    this.payslipservice.getPayslip(id).subscribe((data) =>{
      this.payslip = data 
      //alert(this.payslip) 
  });

  }
  insertpaySlip(id)
  {
    alert(id);
    this.payslipservice.insertpaySlip(id).subscribe((data)=>{this.payslip = data , alert(this.payslip)});
  }
  //showPaySlip
  getEmployeeById(emp)
  {
    this.payslipservice.getEmployee(emp).subscribe ((data) => {
      this.payslip = data, alert(this.payslip)});
  }
  
}
