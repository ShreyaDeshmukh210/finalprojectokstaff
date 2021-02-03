import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginout',
  templateUrl: './loginout.component.html',
  styleUrls: ['./loginout.component.scss']
})
export class LoginoutComponent implements OnInit {

  constructor(private logoutservice:EmployeeService) { }

  ngOnInit(): void {
  }
  logOutUser()
  {
    this.logoutservice.logOutUser()
  }
}
