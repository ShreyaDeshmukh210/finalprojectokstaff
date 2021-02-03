import { Department } from './department';
import { EmpDetails } from './emp';

export class Leave
{
    //leave_transaction_id:number;
    empdetails:EmpDetails;
    leave_sick_leave:string; 
    leave_casual_leave:string;
    leave_todate:Date;
    leave_fromdate:Date;
    leave_description:string;
    
    constructor(empdetails:EmpDetails, leave_sick_leave:string, leave_casual_leave:string, leave_todate:Date,
     leave_fromdate:Date,leave_description:string)
        {
           // this.leave_transaction_id=leave_transaction_id;
            this.empdetails = new EmpDetails(0,"","","","","","","","","","",new Date, new Date,"","",0, new Department(0,""))
            this.leave_sick_leave = leave_sick_leave;
            this.leave_casual_leave = leave_casual_leave;
            this.leave_todate = leave_todate;
            this.leave_fromdate = leave_fromdate;
            this.leave_description = leave_description;
        }
}
