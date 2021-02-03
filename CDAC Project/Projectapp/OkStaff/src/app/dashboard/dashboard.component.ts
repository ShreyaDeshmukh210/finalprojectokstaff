import { EmployeeService } from './../employee.service';
import { EmpAttendance } from './../class/empattendance';
import { Component, OnInit } from '@angular/core';
import { EmpDetails } from './../class/emp';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  //submited : false;
  empdetails: EmpDetails;
  empattendance: any;
  today : Date;
  outtoday : Date;
  value:number;
  
  constructor(private attendanceservice :EmployeeService) 
  {
    this.empattendance = new EmpAttendance(this.empdetails,null,null,0);
    //console.log(this.empdetails.emp_id);
    //alert(this.empdetails.emp_id);
  }

  

  ngOnInit(): void 
  {
    
  }
  setAttendance ()
  {
    //this.empdetails.emp_id = this.empid;
    //alert(this.empdetails.emp_id);
   this.attendanceservice.setintime().subscribe((data) => { })
  }
  
  setoutAttendance()
  {
    this.attendanceservice.setouttime().subscribe((data) => {})
  }
 /* getEmployeeById(empid)
  {
    this.attendanceservice.getEmployee(empid).subscribe ((data) => {});
  }*/
}
