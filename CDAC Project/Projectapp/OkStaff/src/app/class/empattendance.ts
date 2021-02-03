import { Department } from './department';
import { EmpDetails } from './emp';
export class EmpAttendance
{
    
    empdetails : EmpDetails;
    //attendance_emp_id : number
    attendance_intime : Date 
    attendance_outtime : Date 
    attendance_id : number

    constructor(empdetails : EmpDetails ,attendance_intime : Date ,attendance_outtime : Date ,attendance_id : number )
    {
        //this.empdetails.emp_id = empdetails.emp_id;
        //this.empdetails.emp_fname = empdetails.emp_fname;
        //this.empdetails.emp_lname = empdetails.emp_lname;
        this.attendance_id =  attendance_id,
        this.attendance_intime = attendance_intime,
        this.attendance_outtime = attendance_outtime
    }

}

