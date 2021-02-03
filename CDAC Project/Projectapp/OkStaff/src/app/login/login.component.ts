import { EmployeeService } from './../employee.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EmpDetails } from './../class/emp';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Department } from '../class/department';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm : FormGroup;
  empdetails: any;
  
  currentUser : string;
  constructor(private http:HttpClient, private router : Router, private empservice:EmployeeService, private formBuilder:FormBuilder)
   {
    this.empdetails = new EmpDetails(0,"","","","","","","","","","",new Date, new Date,"","",0,new Department(0,""));
      this.loginForm=new FormGroup({
      emp_id:new FormControl(), 
      password: new FormControl(),
      emp_designation : new FormControl()
    });
   }
  ngOnInit(): void 
  {
    this.loginForm=this.formBuilder.group({ emp_id:[], password:[], emp_designation:[] });
  }
  checkLogin()
   {
    console.log(this.loginForm.value.emp_id);
    this.empservice.checkValidUser(this.loginForm.value.emp_id, this.loginForm.value.password).subscribe 
    (data =>{ this.empdetails = data;
      console.log(this.empdetails);
            if(this.empdetails.emp_id !== 0) 
      {
        //if(this.empdetails.password.toString())
         //{
            sessionStorage.setItem('userLog',this.empdetails.emp_id);
            console.log(this.empdetails.emp_id);
            this.currentUser = JSON.stringify(this.empdetails);
            sessionStorage.setItem('currentUser', this.currentUser);
            alert(this.loginForm.value.emp_designation);
            if(this.loginForm.value.emp_designation == "admin")
            this.router.navigate(['admin']);
            else if(this.loginForm.value.emp_designation == "employee")
            {
              this.router.navigate(['employee']);
            }
            else if(this.loginForm.value.emp_designation == "manager")
            {
              this.router.navigate(['manager']);
            }
         // }
      }
      else
      alert("Wrong User");
    });
  }

}