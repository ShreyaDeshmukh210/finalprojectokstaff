import { Department } from './class/department';
import { Payslip } from './class/payslip';
import { Salary } from './class/sal';
import { Leave } from './class/leave';
import { HttpClient } from '@angular/common/http';
import { EmpDetails } from './class/emp';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpAttendance } from './class/empattendance';



@Injectable
({
  providedIn: 'root'
})
export class EmployeeService 
{

  baseurl:string = "http://localhost:8080";
  empdetails: EmpDetails;
  empattendance :EmpAttendance;
  department:Department;
  salary: Salary;
  payslip:Payslip;
  empid:number;
  leave:Leave;
  //session:EmpDetails; 
  
  constructor ( private emphttp : HttpClient)
  {
     //this.session= JSON.parse(sessionStorage.getItem("currentUser"));
  }
  getallEmployee()
  {
    return this.emphttp.get(this.baseurl+"/Employees");
  }

  getEmployee(id)
  {
    //return this.emphttp.get(this.baseurl+"/getEmployee?id=" +id);
    return this.emphttp.get(this.baseurl+"/getEmployee?id=" +id);
  }

  deleteEmp(id:number):Observable<object>
  {
    return this.emphttp.delete(`${this.baseurl+"/deleteEmployee/"}` +id);
  }

  updateEmp(i)
  {
    return this.emphttp.get(this.baseurl+"/updateEmployee/i");
  }

  updateProfile(empdetails):Observable<void>
  {
    return this.emphttp.put<void>(`${this.baseurl+"/updateEmployee"}/${empdetails.emp_id}`, empdetails);
  }


  updateSalary(salary:Salary)
  {
    alert(salary.salary_ctc);
    return this.emphttp.put(`${this.baseurl+"/Updatesalary"}`, salary);
  }

  getSalById(id)
  {
    return this.emphttp.get(this.baseurl +"/empsal?id=" +id);
  }
  
  getOnlySalById(id)
  {
    this.empdetails = JSON.parse(sessionStorage.getItem("currentUser"));
    this.empid = this.empdetails.emp_id.valueOf();
    console.log("################");
    console.log(this.empid);
    return this.emphttp.get(this.baseurl +"/empsal?id=" +id);
  }
 
  setintime()
 {

   //alert(emp);
   //sessionStorage.getItem("currentUser")
   this.empdetails = JSON.parse(sessionStorage.getItem("currentUser"));
   this.empid = this.empdetails.emp_id.valueOf();
   console.log("################");
   console.log(this.empid);
  // console.log(emp);
   //return this.emphttp.put(`${this.baseurl+"/updateSalary"}/${empattendance.empdetails.emp_id}`, empattendance);
   return this.emphttp.get(this.baseurl +"/saveintime?id=" +this.empid);
 }

 setouttime()
 {  
   this.empdetails = JSON.parse(sessionStorage.getItem("currentUser"));
   this.empid = this.empdetails.emp_id.valueOf();
   return this.emphttp.get(this.baseurl +"/saveouttime?id=" +this.empid);
 }

getPayslip(id)
{
 return this.emphttp.get(this.baseurl +"/getPayslipById/" +id);
}

insertpaySlip(id)
{
  alert(id);
  return this.emphttp.get(this.baseurl +"/insertPayslip/" +id);
}
/*showpayslip(id)
{
  return 
}*/

checkValidUser(empid:number, password:string)
{
  return this.emphttp.get(`${this.baseurl}`+'/login?id='+`${empid}`+'&pass='+`${password}`);
}

register(empdetails)
{
  return this.emphttp.post(this.baseurl+"/insertEmployee/" ,empdetails);
}


insertEmpLeave(leave:Leave)
{
  return this.emphttp.post(this.baseurl +"/insertLeave", leave);
}

logOutUser() {
  alert("###");
  this.empdetails = JSON.parse(sessionStorage.getItem('currentUser'));
  sessionStorage.removeItem('currentUser');
}

}