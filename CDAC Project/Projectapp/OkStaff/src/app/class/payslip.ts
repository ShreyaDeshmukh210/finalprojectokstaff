import { Salary } from './sal';
import { EmpDetails } from './emp';
import { Department } from './department';

export class Payslip
{
    payslip_id:number;
    payslip_workingdays:number
    //empdetails:EmpDetails;
    //emp_id:number;
    empdetails:EmpDetails
    //emp_fname:string;
    payslip_date:Date 
    payslip_salary:number
    salary:Salary;
 

   /* constructor(payslip_id:number,payslip_workingdays:number,,payslip_date:Date, payslip_salary:number, salary:Salary)
 {
     this.payslip_id=payslip_id;
     this.payslip_workingdays=payslip_workingdays;
     this.emp_id = 
     //this.empdetails = new EmpDetails(0,"","","","","","","","","","",new Date, new Date,"","",0,new Department(0,""));
     this.payslip_date=payslip_date;
     this.salary = new Salary(0,this.empdetails,0,0,0,0);
     this.payslip_salary=payslip_salary;
 }*/

}

