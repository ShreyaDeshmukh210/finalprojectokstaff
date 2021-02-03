import { EmpDetails } from './../class/emp';
import { EmployeeService } from './../employee.service';
import { Component, Input, OnInit } from '@angular/core';
import { Leave } from './../class/leave';
import { Department } from '../class/department';
@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnInit {

  leave:any
  empdetails:EmpDetails
  constructor(private leaveservice:EmployeeService) 
  {
    this.leave = new Leave(new EmpDetails(0,"","","","","","","","","","",new Date, new Date,"","",0, new Department(0,"")),"","",new Date,new Date,"");
  }

  ngOnInit(): void 
  {
  }

  insertLeave(newLeave:Leave)
  {
    alert(newLeave)
    console.log("###3");
    console.log(newLeave);
    //this.leaveservice.insertEmpLeave(this.leave).subscribe((data)=>{
   // this.leave=data,alert(leave.leave_fromdate)});

   this.leaveservice.insertEmpLeave(newLeave).subscribe((data)=>{this.leave=data,alert(newLeave)});
  }
 
}

