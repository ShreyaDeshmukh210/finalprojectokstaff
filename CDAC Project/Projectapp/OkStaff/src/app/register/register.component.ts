import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Department } from './../class/department';
import { EmpDetails } from './../class/emp';
import { Router } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup
  empdetails:any;
  constructor(private empservice :EmployeeService, private formbuilder:FormBuilder) 
  {
    this.empdetails = new EmpDetails(0,"","","","","","","","","","",new Date, new Date,"","",0,new Department(0,""));
  }

  ngOnInit(): void 
  {

    /*this.registerForm = this.formBuilder.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required,Validators.email]],
    phone: ['', Validators.required],
    password: ['', [Validators.required,Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
    tnc: ['', Validators.required]*/

  }

    register(empdetails)
    {
        console.log(empdetails);
        this.empservice.register(empdetails).subscribe((data)=>{empdetails=data,alert(empdetails.emp_id)});
    }

}
