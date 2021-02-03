import { Department } from './department';
import { EmpDetails } from './emp';
export class Salary
{
    salary_id : number
    empdetails:EmpDetails
    salary_ctc :number
    salary_monthly_sal:number 
    salary_PF:number
    salary_proftax :number
    
    constructor( salary_id : number, empdetails:EmpDetails, salary_ctc :number, salary_monthly_sal:number, salary_PF:number,salary_proftax :number)
    {
        this.salary_id = salary_id;
        this.empdetails = new EmpDetails(0,"","","","","","","","","","",new Date, new Date,"","",0, new Department(0,""));
        this.salary_ctc = salary_ctc;
        this.salary_monthly_sal = salary_monthly_sal;
        this.salary_PF = salary_PF;
        this.salary_proftax = salary_proftax;
    }
}
