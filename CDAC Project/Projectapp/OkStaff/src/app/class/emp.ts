import { Department } from "./department";

export class EmpDetails
{
   
    emp_id:number;
    emp_designation:String;
    emp_password:string;
    emp_fname:string;
    emp_mname:string;
    emp_lname:string;
    emp_contactno:string;
    emp_emailid:string;
    emp_address:string;
    emp_aadharcard:string;
    emp_photo:string;
    emp_dob:Date;
    emp_doj:Date;
    emp_auth_status:String;
    emp_securityque:string;
    emp_manager_id:number;
    department: Department;
   
    

    constructor( emp_id:number, emp_designation:String, emp_password:string, emp_fname:string,emp_mname:string,
         emp_lname:string,emp_contactno:string, emp_emailid:string, emp_address:string,emp_aadharcard:string,
        emp_photo:string, emp_dob:Date, emp_doj:Date, emp_auth_status:String, emp_securityque:string,emp_manager_id:number,
       department : Department)
    {
        this.emp_id = emp_id;
        this.emp_designation = emp_designation;
        this.emp_password = emp_password;
        this.emp_fname=emp_fname;
        this.emp_mname=emp_mname;
        this.emp_lname=emp_lname;
        this.emp_contactno=emp_contactno;
        this.emp_emailid=emp_emailid;
        this.emp_address=emp_address;
        this.emp_aadharcard=emp_aadharcard;
        this.emp_photo=emp_photo;
        this.emp_dob=emp_dob;
        this.emp_doj=emp_doj;
        this.emp_auth_status=emp_auth_status;
        this.emp_securityque=emp_securityque;
        this.emp_manager_id=emp_manager_id;
        this.department = new Department(0,"");
       
    }

}

